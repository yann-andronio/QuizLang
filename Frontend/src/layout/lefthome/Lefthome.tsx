import { Fragment } from "react/jsx-runtime";
import { FaUser, FaUsers, FaBoxOpen, FaShoppingCart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import s from "./lefthome.module.css";

const Lefthome: React.FC<{}> = () => {
  interface NavItem {
    path: string;
    name: string;
    icon: JSX.Element;
  }

  const navItems: NavItem[] = [
    {
      path: "/",
      name: "Accueil",
      icon: <FaUser size={25} />,
    },
    {
      path: "/profile",
      name: "Profil",
      icon: <FaUser size={25} />,
    },
    {
      path: "/clients",
      name: "Clients",
      icon: <FaUsers size={25} />,
    },
    {
      path: "/products",
      name: "Produits",
      icon: <FaBoxOpen size={25} />,
    },
    {
      path: "/commande",
      name: "Commandes",
      icon: <FaShoppingCart size={25} />,
    },
  ];

  return (
    <Fragment>
     
      <nav className={` ${s.navbar} relative  `}>
        <ul className={`${s.navlist} flex flex-col gap-3 mt-8`}>
          {navItems.map((item, index) => (
            <li key={index} className={``}>
              <NavLink
                to={item.path}
                className={(nav) => `${nav.isActive ? s.active : s.inactive} ${s.link}`}
              >
                {item.icon}
                <span
                  className={` font-normal transition-all duration-500 absolute left-12  `}
                >
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
