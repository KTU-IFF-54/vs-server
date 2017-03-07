using System;
using System.Net.WebSockets;
using System.Text;
using Newtonsoft.Json;
using System.Threading.Tasks;
using Token = System.Threading.CancellationToken;
using static System.Net.WebSockets.WebSocketState;
using static System.Net.WebSockets.WebSocketCloseStatus;
using static VideoSyncApi.Infrastructure.WebSocketServer.WebSocketMessage;

namespace VideoSyncApi.Infrastructure.WebSocketServer {
    public class WebSocketConnection {
        private readonly WebSocket _socket;

        public string Id { get; } = Guid.NewGuid().ToString();

        public string Name { get; }

        public WebSocketConnection(WebSocket socket, string name) {
            _socket = socket;
            Name = name;
        }

        public async Task Listen(Func<string, Task> messageHandler, Func<Task> disconnectHandler) {
            while(true) {
                switch(_socket.State) {
                    case Open:
                        await messageHandler(await ReadMessage());
                        break;
                    case CloseReceived:
                        Console.WriteLine($"Closing {Id}");
                        await disconnectHandler();
                        return;
                }
            }
        }

        public async Task SendMessage<T>(T data) where T : IWebSocketMessage {
            await SendMessage(JsonConvert.SerializeObject(data));
        }

        public async Task SendMessage(string msg) {
            await _socket.SendAsync(
                new ArraySegment<byte>(Encoding.UTF8.GetBytes(msg)),
                WebSocketMessageType.Text,
                endOfMessage: true,
                cancellationToken: Token.None
            );
        }

        public async Task<string> ReadMessage() {
            var data = new ArraySegment<byte>(new byte[1024*4]);
            var result = await _socket.ReceiveAsync(data, Token.None);
            
            return Encoding.UTF8.GetString(data.Array, 0, result.Count);
        }

        public async Task Close(WebSocketCloseStatus status = NormalClosure) {
            await _socket.CloseAsync(
                status,
                statusDescription: JsonConvert.SerializeObject(new WebSocketMessage(
                    connection: this,
                    action: Actions.LEFT
                )),
                cancellationToken: Token.None
            );
        }

    }
}