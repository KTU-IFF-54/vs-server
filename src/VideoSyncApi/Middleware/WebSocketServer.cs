using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using VideoSyncApi.Infrastructure.WebSocketServer;

namespace VideoSyncApi.Middleware {
    public class WebSocketServerMiddleware {
        private const string NameParam = "name";
        private readonly RequestDelegate _next;
        private readonly WebSocketServerManager _manager;

        public WebSocketServerMiddleware(RequestDelegate next, WebSocketServerManager manager) {
            _next = next;
            _manager = manager;
        }

        public async Task Invoke(HttpContext context) {
            if (!context.WebSockets.IsWebSocketRequest)
                return;
            
            var name = "Anonymous";
            if (context.Request.Query.ContainsKey(NameParam))
                name = context.Request.Query[NameParam];
            var socket = await context.WebSockets.AcceptWebSocketAsync();
            await _manager.ConnectSocket(new WebSocketConnection(socket, name));
        }
    }
}