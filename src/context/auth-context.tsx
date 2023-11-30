import React, { useContext, useState } from 'react';

type AuthContextType = {
    user: string | null;
    login: (username: string, password: string) => void;
    logout: () => void;
};

const AuthContext = React.createContext<AuthContextType>({
    user: null,
    login: () => { },
    logout: () => { },
});

export const useAuth = () => {
    return useContext(AuthContext);
};

type AuthProviderProps = {
    children: React.ReactNode;
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [user, setUser] = useState<string | null>(null);

    const login = (username: string, password: string) => {
        // Your login logic here
        setUser(username);
    };

    const logout = () => {
        // Your logout logic here
        setUser(null);
    };

    const value = {
        user,
        login,
        logout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};