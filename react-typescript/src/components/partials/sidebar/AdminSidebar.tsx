import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoDocumentsOutline } from "react-icons/io5";
import { GoWorkflow } from "react-icons/go";
import { BsDatabase } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import logo from "../../../assets/logo.png"
import control from "../../../assets/control.png"
 
interface MenuItem {
  title: string;
  icon: React.ElementType;
  link: string;
  gap?: boolean;
  index: number;
}

const AdminSidebar: React.FC = () => {
  const [open, setOpen] = useState(true);
  const location = useLocation();

  const Menus: MenuItem[] = [
    { title: "Tableau de bord", icon: AiOutlineDashboard, link: "/admin/dashboard", index: 0 },
    { title: "Utilisateur", icon: FaUsers, gap: true, link: "/admin/all-user", index: 1 },
    { title: "Document", icon: IoDocumentsOutline, link: "/admin/all-document", index: 2 },
    { title: "Workflows", icon: GoWorkflow, gap: true, link: "/admin/workflows", index: 3 },
    { title: "Métadonnés", icon: BsDatabase, link: "/admin/metadata", index: 4 },
    { title: "Paramètre", icon: IoSettingsOutline, link: "/admin/settings", index: 5 },
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20"
        } bg-neutral-50 p-5 pt-8 relative duration-300`}
        style={{
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s",
          height: "100vh" // Fixer la hauteur à 100% de la hauteur de la fenêtre
        }}
      >
        <img
          src={control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple border-2 rounded-full ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
          alt="control"
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={logo}
            className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
            alt="logo"
          />
          <h1
            className={`text-gray-700 origin-left font-medium text-xl duration-200 ${!open && "scale-0"}`}
          >
            ECM
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu) => (
            <li
              key={Menu.index}
              className={`flex rounded-md p-2 cursor-pointer hover:bg-dark-white text-gray-700 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${location.pathname === Menu.link ? "bg-gray-200" : ""}`}
            >
              <Link to={Menu.link} className="flex items-center">
                <Menu.icon className="text-gray-700" />
                <span className={`${!open && "hidden"} origin-left duration-200 text-gray-700 ml-4`}>
                  {Menu.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminSidebar;
