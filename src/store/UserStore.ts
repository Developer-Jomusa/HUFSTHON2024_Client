import { create } from 'zustand'

interface UserState {
    name: string;
    websocketUrl: string
    setName: (n: string) => void;
    setWebsocketUrl: (url: string) => void;
}

export const useUserState = create<UserState>((set) => ({
    name: "",
    websocketUrl: "",
    setName: (n: string) => set({
        name: n
    }),
    setWebsocketUrl: (url: string) => set({
        websocketUrl: url
    }),
}));
