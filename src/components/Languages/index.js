import styles from "./Languages.module.css";

export default function Languages({ items }) {
  return items.map((language, idx) => (
    <span key={idx} className={styles.item}>
      {language}
    </span>
  ));
}
