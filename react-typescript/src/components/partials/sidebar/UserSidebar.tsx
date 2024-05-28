import React, { useState } from "react";
import { TbDeviceAnalytics } from "react-icons/tb";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
import { IoDocumentsOutline } from "react-icons/io5";
import { MdOutlineFolderShared } from "react-icons/md";
import { HiOutlineFolderOpen } from "react-icons/hi";

interface MenuItem {
    name: string;
    link: string;
    icon: React.ElementType;
    margin?: boolean;
}

const UserSidebar: React.FC = () => {
    const menu: MenuItem[] = [
        { name: "Activité", link: "/activity", icon: TbDeviceAnalytics },

        {
            name: "Mes documents",
            link: "/my-docs",
            icon: IoDocumentsOutline,
            margin: true,
        },
        { name: "Document partagé", link: "/shared-docs", icon: MdOutlineFolderShared },
        { name: "Autre contenu", link: "/other-content", icon: HiOutlineFolderOpen },
    ];

    const [open, setOpen] = useState(true);
    const location = useLocation();

    return (
        <div
            className={`bg-[#0e0e0e] min-h-screen ${
                open ? "w-72" : "w-16"
            } duration-500  text-gray-100 px-4`}
        >
            <div className="py-3 flex justify-end">
                <HiMenuAlt3
                    size={26}
                    className="cursor-pointer"
                    onClick={() => setOpen(!open)}
                />
            </div>
            <div className="mt-4 flex flex-col gap-4 relative">
                {menu?.map((menuItem, i) => (
                    <Link
                        to={menuItem.link}
                        key={i}
                        className={`${
                            menuItem.margin && "mt-5"
                        } group  flex items-center text-sm gap-3.5 font-medium p-2 rounded-gray-800 ${
                            location.pathname === menuItem.link ? "bg-gray-800" : "hover:bg-gray-800"
                        }`}
                    >
                        <div>
                            {React.createElement(menuItem.icon, {
                                size: "20",
                            })}
                        </div>
                        <h2
                            style={{
                                transitionDelay: `${i + 3}00ms`,
                            }}
                            className={`whitespace-pre duration-500  ${
                                !open && "opacity-0 translate-x-28 overflow-hidden"
                            } `}
                        >
                            {menuItem.name}
                        </h2>
                        <h2
                            className={`   ${
                                open && "hidden"
                            } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900  rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover;duration-300 group-hover:w-fit`}
                        >
                            {menuItem.name}
                        </h2>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default UserSidebar;
