import { create } from 'zustand';
import { UnityPlayerRefs } from '../component/Unity';

interface UnityState {
    unityPlayerRef: UnityPlayerRefs | null;
    setUnityPlayerRef: (ref: UnityPlayerRefs) => void;
}

export const useUnityStore = create<UnityState>((set) => ({
    unityPlayerRef: null,
    setUnityPlayerRef: (ref) => set({ 
        unityPlayerRef: ref 
    }),
}));
