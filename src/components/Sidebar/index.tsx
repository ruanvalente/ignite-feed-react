import backgroundImageUserProfile from "../../assets/background-profile.svg";
import styles from "./Sidebar.module.css";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.coverImage}
        src={backgroundImageUserProfile}
        alt="Background image user profile"
      />
      <div className={styles.profile}>
        <strong>Ruan Valente</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="">Editar seu perfil</a>
      </footer>
    </aside>
  );
}
