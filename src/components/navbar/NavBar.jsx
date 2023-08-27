import React, { useState } from "react";

// Styles import
import styles from "./NavBar.module.css";

// Library import
import {
  AiOutlineUser,
  AiOutlineSearch,
  AiOutlineMenu,
  AiOutlineClose,
} from "react-icons/ai";

// import { MagnifyingGlassIcon, UserIcon } from "@heroicons/react/24/outline";

// Images import
import Logo from "../../images/logo.png";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  return (
    <header className={styles.navbar}>
      <img src={Logo} alt="Logo Image" />
      <nav>
        <ul className={nav ? [styles.menu, styles.active].join(' ') : [styles.menu]}>
          <li>
            <a href="#">Learn more</a>
          </li>
          <li>
            <a href="#">Log In</a>
          </li>
          <li>
            <a href="#">Sing Up</a>
          </li>
          <li>
            <AiOutlineSearch size={25} style={{marginTop: "6px"}} />
          </li>
          <li>
            <AiOutlineUser size={25} style={{marginTop: "6px"}} />
          </li>
        </ul>
      </nav>
      {/* Mobile */}
      <div onClick={() => setNav(!nav)} className={styles.mobile_btn}>
        {nav ? <AiOutlineClose size={25}/> : <AiOutlineMenu size={25}/>}
      </div>
    </header>
  );
};

export default NavBar;
