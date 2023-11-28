import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./Footer.module.css";

import profileIcon from "../../Static/footerImages/profileIcon.png";
import plantItem from "../../Static/footerImages/plantItem.png";
import centerItem from "../../Static/footerImages/centerItem.png";
import { Link } from "react-router-dom";

const links = [
  { name: "gardenCenter", href: "/gardenCenter", src: centerItem },
  { name: "funcionalities", href: "/funcionalities", src: plantItem },
  { name: "profile", href: "/profile", src: profileIcon}
];

const routesToShowMenu = ["/gardenCenter", "/funcionalities", "/profile", "/plantDicitionary"]

const Footer = () => {
  const location = useLocation()
  if (!routesToShowMenu.includes(location.pathname)) return null 
  return (
    <div className={styles.footer}>
      {links.map((link) => {
        const isActive = link.href === location.pathname
        return (
          <>
            <Link to={link.href} className={styles.menuItem}>
              <img
                style={{ height: 40}}
                src={link.src}
                alt={link.name}
                className={isActive ? styles.selected : undefined}
              />
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default Footer;
