import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function WebNav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);

    }

    return (

        <nav className="sticky top-0 py-2 md:py-1 flex justify-between
            bg-zinc-900 px-8 sm:px-16 md:px-24
            relative">
            <a className="flex items-center justify-center text-center rounded font-bold text-2xl tracking-widest hover:scale-105  ease-in duration-300" href="/">LOGO</a>

            <ul className={`$ absolute md:relative  top-full left-0 
            w-full flex flex-col md:flex-row md:justify-end md:gap-1
            text-lg bg-zinc-700 md:bg-transparent 
            `}>
                <li className="text-center">
                    <a className="p-3 block md:min-w-[150px] rounded hover:bg-zinc-800 ease-in duration-300" href="/">Inicio</a>
                </li>
                <li className="text-center">
                    <a className="p-3 block md:min-w-[150px] rounded hover:bg-zinc-800 ease-in duration-300" href="/">Servicios</a>
                </li>
                <li className="text-center">
                    <a className="p-3 block md:min-w-[150px] rounded hover:bg-zinc-800 ease-in duration-300" href="/">Sobre nosotros</a>
                </li>
            </ul>

            <button onClick={toggleMenu} className="flex p-2 justify-end text-2xl items-center md:hidden
            rounded hover:bg-zinc-800 ease-in duration-300"> <FontAwesomeIcon icon={faBars} /></button>
        </nav>

    );

}