import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="http://github.com/ruanvalente.png"
            alt="User profile image"
            loading="lazy"
          />
          <div className={styles.authorInfo}>
            <strong>Ruan Valente</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="22 de Março às 21:41:30" dateTime="2023-03-22 21:41:30">
          Públicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz
          no NLW Return,{" "}
        </p>
        evento da Rocketseat. O nome do projeto é DoctorCare 🚀
        <p>
          <a href="">jane.design/doctorcare</a>
        </p>
        <p>
          <a href="">#novoprojeto</a>
          <a href="">#nlw</a>
          <a href="">#rocketseat</a>
        </p>
      </div>
    </article>
  );
}
