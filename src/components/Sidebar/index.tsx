import { PencilLine } from "@phosphor-icons/react";

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
        <img
          src="https://github.com/ruanvalente.png"
          alt="User profile image"
          loading="lazy"
        />
        <strong>Ruan Valente</strong>
        <span>Frontend Developer</span>
      </div>

      <footer>
        <a href="">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
