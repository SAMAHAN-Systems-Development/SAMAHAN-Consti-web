import Image from "next/image";
import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.image_wrapper}>
        <Image src="/consti_natin.png" fill objectFit="contain" />
      </div>
      <div className={styles.inquiries}>
        <h3>For inquiries, message us at: <span className={styles.email}>samahan@addu.edu.ph</span></h3>
      </div>
    </footer>
  );
};

export default Footer;
