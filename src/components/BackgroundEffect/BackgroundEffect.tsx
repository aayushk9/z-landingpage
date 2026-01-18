import styles from "./BackgroundEffect.module.css";

export  function BackgroundEffect() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.gradient} />

      <div className={styles.panels}>
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className={styles.panel} />
        ))}
      </div>
    </div>
  );
}