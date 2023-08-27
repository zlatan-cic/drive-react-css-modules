import React from "react";

// Styles import
import styles from "./NavBar.module.css";

// Library import
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

// Images import
import Logo from '../../images/logo.png'

const NavBar = () => {
  return <header className={styles.navbar}>
    <img src={Logo} alt="Logo Image" />
  </header>;
};

export default NavBar;
