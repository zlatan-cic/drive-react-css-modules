import React from "react";

// Styles import
import styles from "./Footer.module.css";

// Images import
import Logo from "../../images/logo_dark.png";


const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <img src={Logo} alt="Logo Img" />
        <button>
          Shere A Car
        </button>
      </div>
    </footer>
  );
};

export default Footer;
