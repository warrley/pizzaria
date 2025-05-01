import { Button } from "@/components/ui/button";
import { Input, TextArea } from "@/components/ui/input";

export default function Home() {
  return(
    <>
      <div className="bg-slate-900 h-screen flex items-center justify-center flex-col">
        <h1 className="text-6xl font-bold flex">3.14 <h1 className="text-red-500">Z²</h1> A</h1>
        <div className="w-[90%] md:w-[800px] flex items-center justify-center flex-col px-1 py-2">
          <form className="w-[80%] flex flex-col gap-3">
            <Input
              placeholder="Digite seu e-mail"
              type="text"
            />
            <Input
              placeholder="Digite sua senha"
              type="password"
            />
            <Button
              type="submit"
              loading={false}>
                Acess
              </Button>
          </form>
          <h1 className="mt-3 cursor-pointer font-medium text-md">Nao tem uma conta? <a href="" className="font-bold">Cadastre-se</a></h1>
        </div>
      </div>
    </>
  )
}