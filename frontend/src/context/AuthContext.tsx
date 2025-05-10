"use client"

import { api } from "@/services/apiClient";
import Router from "next/router";
import { useRouter } from "next/navigation";
import { destroyCookie, setCookie } from "nookies";
import { createContext, ReactNode, useState } from "react";
import { toast } from "react-toastify";

type AuthContextData = {
    user: UserProps | undefined;
    isAuthenticaded: boolean;
    signIn: (data: SigninProps) => Promise<void>;
    signUp: (data: SignupProps) => Promise<void>;
    signOut: () => void;
};

type UserProps = {
    id: string;
    name: string;
    email: string;
};

type SigninProps = {
    email: string;
    password: string;
};

type SignupProps = {
    name: string;
    email: string;
    password: string;
}

export const AuthContext = createContext({} as AuthContextData);

export const signOut = () => {
    try{
        destroyCookie(undefined, '@nextauth.token');
        Router.push("/");
    } catch {
        console.log("erro ao deslogar");
    }
}

export const AuthProvider = ({ children }: {children: ReactNode}) => {
    const [user, setUser] = useState<UserProps>();
    const isAuthenticaded = !!user;
    const router = useRouter();

    const signIn = async ({ email, password }: SigninProps) => {
        try{
            const response = await api.post("/auth/login" , {
                email,
                password
            });

            const { token } = response.data;
            const { id, name } = response.data.user;

            setCookie(undefined, "@nextauth.token", token, {
                maxAge: 60 * 60 * 2,
                path: "/"
            });
            
            setUser({
                id,
                name,
                email
            });

            api.defaults.headers["Authorization"] = `Bearer ${token}`;

            toast.success("Logado com sucesso");
            
            router.push("/dashboard");
        } catch(err) {
            toast.error("Erro ao acessar");
        }
    }
    
    const signUp = async ({ name, email, password }: SignupProps) => {
        try{
            const response = await api.post("/auth/register", {
                name,
                email,
                password
            });
            
            console.log(response);

            toast.success("Conta criada com sucesso");
            
            router.push("/dashboard");
        } catch (err) {
            toast.error("Erro ao cadastrar usuario");
        }
    };

    return(
        <AuthContext.Provider value={{ user, isAuthenticaded, signIn, signUp,signOut }}>
            {children}
        </AuthContext.Provider>
    );
};