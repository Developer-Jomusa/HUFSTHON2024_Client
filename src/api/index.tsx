import {
    ConnectChatRoomRequest,
    ConnectChatRoomResponse,
    CreateChatRoomRequest,
    CreateChatRoomResponse, DeleteChatRoomRequest, LoginRequest, LoginResponse, RegisterRequest
} from "../CommonInterface.ts";
import axios from "axios";


const API_BASE_URL = "http://geugol.site";

// 1. 채팅방 생성
export const createChatRoom = async (data: CreateChatRoomRequest): Promise<CreateChatRoomResponse> => {
    const response = await axios.post<CreateChatRoomResponse>(`${API_BASE_URL}/chat/api/create`, data);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error("Failed to create chat room");
    }
};

// 2. 채팅방 접속
export const connectChatRoom = async (data: ConnectChatRoomRequest): Promise<ConnectChatRoomResponse> => {
    const response = await axios.post<ConnectChatRoomResponse>(`${API_BASE_URL}/chat/api/detail`, data);
    if (response.status === 200) {
        return response.data;
    } else {
        throw new Error("Failed to connect to chat room");
    }
};

// 3. 채팅방 삭제
export const deleteChatRoom = async (data: DeleteChatRoomRequest): Promise<void> => {
    const response = await axios.post(`${API_BASE_URL}/chat/api/delete`, data);
    if (response.status === 200) {
        console.log("Chat room deleted successfully.");
    } else {
        throw new Error("Failed to delete chat room");
    }
};

// 4. 회원가입
export const registerUser = async (data: RegisterRequest): Promise<void> => {
    const response = await axios.post(`${API_BASE_URL}/chat/api/register`, data);
    if (response.status === 200) {
        console.log("User registered successfully.");
    } else {
        throw new Error("Failed to register user");
    }
};

// 5. 로그인
export const loginUser = async (data: LoginRequest): Promise<LoginResponse> => {
    const response = await axios.post<LoginResponse>(`${API_BASE_URL}/chat/api/login`, data);
    if (response.status === 200) {
        return response.data;
    }
    else{
        throw new Error("Failed to loginUser user");
    }
};

export const setupWebSocket = (
    webSocketUrl: string,
    onMessageCallback: (message: string) => void
): { sendMessage: (message: string) => void; closeConnection: () => void } => {
    const ws = new WebSocket(webSocketUrl);

    ws.onopen = () => {
        console.log("WebSocket connection opened.");
    };

    ws.onmessage = (event) => {
        const receivedMessage: string = event.data;
        console.log("Message received:", receivedMessage);
        onMessageCallback(receivedMessage);
    };

    ws.onclose = () => {
        console.log("WebSocket connection closed.");
    };

    ws.onerror = (error) => {
        console.error("WebSocket error occurred:", error);
    };

    const sendMessage = (message: string): void => {
        const messageData = JSON.stringify(message);
        ws.send(messageData);
        console.log("Message sent:", messageData);
    };

    const closeConnection = (): void => {
        ws.close();
        console.log("WebSocket connection manually closed.");
    };

    return { sendMessage, closeConnection };
};


