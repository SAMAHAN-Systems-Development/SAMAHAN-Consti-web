import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.image_wrapper}>
        <Image src="/consti_natin.png" fill objectFit="contain" />
      </div>
    </footer>
  );
};

export default Footer;
