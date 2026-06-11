import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={styles.about}>
      <div className={styles.container}>
        <h1>About Me</h1>

        <p>
          Hi, I'm a Frontend Developer specializing in React.js,
          Next.js, TypeScript, Redux Toolkit, and modern web
          technologies.
        </p>

        <p>
          I enjoy building scalable applications, solving complex UI
          challenges, and continuously improving my development skills.
        </p>

        <div className={styles.cards}>
          <div className={styles.card}>
            <h3>Experience</h3>
            <p>1+ Years</p>
          </div>

          <div className={styles.card}>
            <h3>Projects</h3>
            <p>20+</p>
          </div>

          <div className={styles.card}>
            <h3>Technologies</h3>
            <p>React, Next.js, TypeScript</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;