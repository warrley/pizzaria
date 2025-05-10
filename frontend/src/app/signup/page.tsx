"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { AuthContext } from "@/context/AuthContext";
import Link from "next/link";
import { FormEvent, use, useContext, useState } from "react";
import { toast } from "react-toastify";

export default function Page() {
  const { signUp } = useContext(AuthContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const hanldeSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if(name === '' && email === '' && password === '') {
        toast.error("Preencha todos os campos");
      return;
    }

    setLoading(true);

    await signUp({ name, email, password });

    setLoading(false);
  }

  return(
    <>
      <div className="bg-slate-900 h-screen flex items-center justify-center flex-col">
        <h1 className="text-6xl font-bold flex">3.14 <p className="text-red-500">Z²</p> A</h1>
        <div className="w-[90%] md:w-[800px] flex items-center justify-center flex-col px-1 py-2">
          <form className="w-[80%] flex flex-col gap-3" onSubmit={hanldeSubmit}>
            <Input
                placeholder="Digite seu nome"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
              />

            <Input
              placeholder="Digite seu e-mail"
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              loading={loading}>
                Acess
            </Button>
          </form>
          <Link href={"/"}>
            <h1 className="mt-3 cursor-pointer font-medium text-md flex">Já possui uma conta?  <p className="font-bold"> Faça login</p></h1>
          </Link>
        </div>
      </div>
    </>
  )
}