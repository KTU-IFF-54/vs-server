using System;
using System.Collections.Generic;
using System.Collections.Immutable;

namespace VideoSyncApi.Infrastructure.WebSocketServer {
    public class WebSocketMessage : IWebSocketMessage {
        
        public string SenderId { get; }

        public string SenderName { get; }

        public string Type { get; }

        public IReadOnlyDictionary<string, object> Params { get; }

        public WebSocketMessage() {}

        public WebSocketMessage(
            WebSocketConnection connection,
            string action, 
            IReadOnlyDictionary<string, object> param = null
        ) : this (connection.Id, connection.Name, action, param) {}

        public WebSocketMessage(
            string senderId, 
            string senderName, 
            string action, 
            IReadOnlyDictionary<string, object> param = null
        ) {
            SenderId = senderId;
            SenderName = senderName;
            Type = action;
            Params = param ?? ImmutableDictionary.Create<string, object>();
        }

        public static class Actions {
            public const string CONNECTED = "connected";
            public const string JOINED = "joined";
            public const string LEFT = "left";
        }
    }
}