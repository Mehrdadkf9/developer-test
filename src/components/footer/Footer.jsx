import React from "react";
import footerIcons from "../../utils/footerIcons";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      {footerIcons.map((icon) => (
        <div key={icon.id} className={styles.icons}>
          <span className={styles.icon}>{icon.icon}</span>
          <p>{icon.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Footer;
