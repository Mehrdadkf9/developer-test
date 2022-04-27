import React, { useEffect, useState } from "react";
import days from "../../utils/days";
import milad from "./../../assets/images/miladTower.jpg";
import styles from "./header.module.css";

const Header = () => {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })
  );

  const date = new Date().toLocaleDateString("fa-IR");
  const [day, setDay] = useState(null);

  useEffect(() => {
    console.log(days.filter((d) => d.dayOfWeek === day));
    setDay(days[+new Date().getDay()].title);
    setInterval(() => {
      setTime(
        new Date().toLocaleTimeString("fa-IR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        })
      );
    }, 1000);
    // setDay(new Date());
  }, []);

  return (
    <div className={styles.headerContainer}>
      <img src={milad} alt="برج میلاد" className={styles.headerImg}></img>
      <span className={styles.time}>{time}</span>
      <span className={styles.date}>
        {day} {date}
      </span>
    </div>
  );
};

export default Header;
