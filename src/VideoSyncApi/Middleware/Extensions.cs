using Microsoft.AspNetCore.Builder;

namespace VideoSyncApi.Middleware
{
    public static class Extensions{
        public static IApplicationBuilder UseWebSocketServer(this IApplicationBuilder builder) =>
            builder.UseWebSockets()
                .UseMiddleware<WebSocketServerMiddleware>();
    }
}