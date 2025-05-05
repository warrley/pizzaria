import { ButtonHTMLAttributes, ReactNode } from "react";
import { FaSpinner } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    loading?: boolean;
    children: ReactNode
}

export const Button = ({ loading, children, ...rest }: ButtonProps) => {
    return(
        <button
            className=" bg-sky-500 border-0 py-2 rounded-xl hover:brightness-125 duration-200 cursor-pointer flex items-center justify-center"
            disabled={loading}
            {...rest}
        >
            {loading ? (
                <FaSpinner size={20} className="animate-spin"/>
            ) : children
            }
            
        </button>
    )
}