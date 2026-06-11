import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>© 2026 DK Portfolio. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;