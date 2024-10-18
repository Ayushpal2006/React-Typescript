import React, { createContext, useContext, useState, ReactNode } from "react";

// Interfaces for props and context
interface UserContextProviderProps {
    children: ReactNode;
}

interface UserContextProps {
    value: number;
    setValue: (num: number) => void;
}

// Create context with initial value null
const UserContext = createContext<UserContextProps | undefined>(undefined);

// Custom hook to use the context
export const useCounter = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useCounter must be used within a UserContextProvider");
    }
    return context;
};

// Context provider component
export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
    const [value, setValue] = useState<number>(1);

    return (
        <UserContext.Provider value={{ value, setValue }}>
            {children}
        </UserContext.Provider>
    );
};
