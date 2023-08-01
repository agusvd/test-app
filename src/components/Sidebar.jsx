import React, { useState } from "react";
import { BiArrowToRight, BiArrowToLeft } from "react-icons/bi";
import { MdOutlineDashboard } from "react-icons/md";
import { RiSettings4Line } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart, AiOutlineCompass, AiOutlineCalendar } from "react-icons/ai";
import { FiMessageSquare, FiFolder } from "react-icons/fi";
import { IoPeopleOutline, IoPeopleSharp } from "react-icons/io5"
import { Link } from "react-router-dom";

const Sidebar = () => {
    const menus = [
        { name: "Inicio", link: "/", icon: MdOutlineDashboard },
        { name: "Explorar", link: "/", icon: AiOutlineCompass },
        { name: "Eventos", link: "/", icon: TbReportAnalytics, margin: true },
        { name: "Calendario", link: "/", icon: AiOutlineCalendar },
        { name: "Seguidos", link: "/", icon: IoPeopleOutline },
        { name: "Mensajes", link: "/", icon: FiMessageSquare },
        { name: "Perfil", link: "/", icon: AiOutlineHeart, margin: true },
        { name: "Configuracion", link: "/", icon: RiSettings4Line },
    ];
    const [open, setOpen] = useState(true);
    return (
        <div className={`dark:bg-black border-2 flex flex-col ${ open ? 'w-72' : 'w-20' } duration-500 text-black dark:text-gray-100 px-4`}>
            <div className="py-3 px-2 flex justify-start rounded-md items-center hover:bg-gray-200 dark:hover:bg-gray-800 cursor-pointer" onClick={() => setOpen(!open)}>
                {open ?
                    <div className="flex gap-4 text-lg">
                        <BiArrowToLeft size={26} className="cursor-pointer" onClick={() => setOpen(!open)} /> 
                        <a>Cerrar</a>
                    </div>
                    :
                    <BiArrowToRight size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
                    
                }
            </div>
            <div className="mt-4 flex flex-col gap-4 relative text-center">
                {menus?.map((menu, i) => (
                    <Link to={menu?.link} key={i} className={` ${menu?.margin && "mt-5"} group flex items-center text-lg gap-4 font-medium p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-md`}>
                        <div>{React.createElement(menu?.icon, { size: "25" })}</div>
                        <h2 style={{ transitionDelay: `${i + 3}00ms`, }} className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                            {menu?.name}
                        </h2>
                        <h2 className={`${open && "hidden"} absolute left-48 bg-gray-200 dark:bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}>
                            {menu?.name}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
