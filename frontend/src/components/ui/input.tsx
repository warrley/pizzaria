import { InputHTMLAttributes, TextareaHTMLAttributes } from "react"


export const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
    return(
        <input 
            className=" h-10 rounded-xl bg-blue-950 border-2 border-gray-300 outline-0 px-3"
            {...rest}
        />
    );
};

export const TextArea = ({...rest}: TextareaHTMLAttributes<HTMLTextAreaElement>) => {
    return(
        <textarea
             className=""
            {...rest}
        ></textarea>
    )
}