import React, { createContext, useContext, useRef, useState } from "react";
import { UnityPlayerRefs } from "../component/Unity";

interface UnityContextProps {
    unityPlayerRef: React.MutableRefObject<UnityPlayerRefs | null>;
    isInitialized: boolean;
    setInitialized: (value: boolean) => void;
}

const UnityContext = createContext<UnityContextProps | undefined>(undefined);

export const UnityProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const unityPlayerRef = useRef<UnityPlayerRefs | null>(null);
    const [isInitialized, setInitialized] = useState(false);

    return (
        <UnityContext.Provider value={{ unityPlayerRef, isInitialized, setInitialized }}>
            {children}
        </UnityContext.Provider>
    );
};

export const useUnity = () => {
    const context = useContext(UnityContext);
    if (!context) {
        throw new Error("useUnity must be used within a UnityProvider");
    }
    return context;
};
