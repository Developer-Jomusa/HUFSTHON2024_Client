export interface CreateChatRoomRequest {
    roomName: string;
    username: string;
}

export interface CreateChatRoomResponse {
    roomId: string;
    username: string;
    webSocketUrl: string;
}

export interface ConnectChatRoomRequest {
    roomId: string;
    username: string;
}

export interface ConnectChatRoomResponse {
    webSocketUrl: string;
    chatRoom: {
        roomId: string;
    };
    chatMessages: ChatMessage[];
}

export interface ChatMessage {
    userId: string;
    message: string;
    senderType: string
}

export interface DeleteChatRoomRequest {
    roomId: string;
}

export interface RegisterRequest {
    email: string;
    name: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface LoginResponse {
    username: string;
}