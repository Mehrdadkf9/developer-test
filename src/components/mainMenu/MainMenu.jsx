import mainIcons from "../../utils/mainIcons";
import styles from "./mainMenu.module.css";

const MainMenu = () => {
  return (
    <div className={styles.icons}>
      {mainIcons.map((icon) => (
        <div key={icon.id} className={styles.icon}>
          <span>{icon.icon}</span>
          <p>{icon.title}</p>
        </div>
      ))}
    </div>
  );
};

export default MainMenu;
