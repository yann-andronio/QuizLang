import { Fragment } from "react";
import {
  FaBook,
  FaEnvelope,
  FaStore,
  FaUser,
  FaQuestionCircle,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import s from "./lefthome.module.css";

const Lefthome: React.FC = () => {
  const navItems = [
    {
      path: "/home",
      name: "Cours",
      icon: <FaBook size={40} />,
      image: "cours",
    },
    {
      path: "/profile",
      name: "Message",
      icon: <FaEnvelope size={40} />,
      image: "chat1",
    },
    {
      path: "/clients",
      name: "Boutique",
      icon: <FaStore size={40} />,
      image: "cours",
    },
    {
      path: "/products",
      name: "Profil",
      icon: <FaUser size={40} />,
      image: "cours",
    },
    {
      path: "/commande",
      name: "Aide",
      icon: <FaQuestionCircle size={40} />,
      image: "cours",
    },
  ];


  return (
    <Fragment>
      <nav className={s.navbar}>
        <ul className={`${s.navlist} flex flex-col gap-4 mt-6`}>
          {navItems.map((item, index) => (
            <li key={index} className={s.listItem}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `${isActive ? s.active : s.inactive} ${s.link}`
                }
              >
                <div className={s.icon}>{item.icon}</div>
                {/* <img
                  src={`./assets/images/firstpage/${item?.image}.png`}
                  className={`w-1/2 ${s.icon}`}
                  alt=""
                /> */}

                <span className={`${s.text} font-normal text-lg`}>
                  {item.name}
                </span>
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </Fragment>
  );
};

export default Lefthome;
