import Languages from "../Languages";
import styles from "./ListUserRepoItem.module.css";

export default function ListUserRepoItem({
  name,
  description,
  languages,
  url,
}) {
  return (
    <li
      role="button"
      className={styles.listItem}
      onClick={() => window.open(url, "_blank")}
    >
      <div className={styles.listItemHeader}>
        <h2 className={styles.listItemTitle}>{name}</h2>
        <Languages items={languages} />
      </div>
      <span className={styles.listItemDescription}>{description ?? "-"}</span>
    </li>
  );
}
