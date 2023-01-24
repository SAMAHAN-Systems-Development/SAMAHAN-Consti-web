import Image from "next/image";
import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.image_wrapper}>
        <Image src="/SAMAHAN.png" fill objectFit="contain" />
      </div>
    </div>
  );
};

export default Header;
