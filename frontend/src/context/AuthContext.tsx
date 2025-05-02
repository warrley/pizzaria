"use client"

import { createContext, ReactNode, useState } from "react";

type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticaded: boolean;
    signIn: (data: SIgninProps) => Promise<void>;
};

type UserProps = {
    id: string;
    name: string;
    email: string;
};

type SIgninProps = {
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export const AuthProvider = ({ children }: {children: ReactNode}) => {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticaded = !!user;

    const signIn = async ({ email, password }: SIgninProps) => {
        console.log(email, password)
    }

    return(
        <AuthContext.Provider value={{ user, isAuthenticaded, signIn }}>
            {children}
        </AuthContext.Provider>
    )
} 