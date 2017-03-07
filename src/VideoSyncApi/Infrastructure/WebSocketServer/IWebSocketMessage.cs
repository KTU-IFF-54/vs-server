using System.Collections.Generic;

namespace VideoSyncApi.Infrastructure.WebSocketServer {
    public interface IWebSocketMessage {
        string SenderId { get; }
        string SenderName { get; }
        string Action { get; }
        IReadOnlyDictionary<string, object> Params { get; }
    }
}