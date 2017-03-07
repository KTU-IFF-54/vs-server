using System.Collections.Concurrent;
using System.Threading.Tasks;
using static VideoSyncApi.Infrastructure.WebSocketServer.WebSocketMessage;
namespace VideoSyncApi.Infrastructure.WebSocketServer {
    public class WebSocketServerManager {
        private readonly ConcurrentDictionary<string, WebSocketConnection> _sockets = 
            new ConcurrentDictionary<string, WebSocketConnection>();

        public async Task ConnectSocket(WebSocketConnection socket) {
            _sockets.TryAdd(socket.Id, socket);
            await socket.SendMessage(new WebSocketMessage(
                connection: socket,
                action: Actions.CONNECTED
            ));
            await SendToAll(new WebSocketMessage(
                connection: socket,
                action: Actions.JOINED
            ));
            await socket.Listen(async message => {
                await SendToAll(message);
            }, async () => {
                await DisconnectSocket(socket.Id);
            });
        }

        public async Task DisconnectSocket(string id) {
            WebSocketConnection socket;
            _sockets.TryRemove(id, out socket);
            await socket.Close();
        }

        public async Task SendToAll(string message) {
            foreach (var socket in _sockets) {
                await socket.Value.SendMessage(message);
            }
        }

        public async Task SendToAll<T>(T message) where T : IWebSocketMessage {
            foreach (var socket in _sockets) {
                await socket.Value.SendMessage(message);
            }
        }
    }
}