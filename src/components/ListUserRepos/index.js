import { useSearch } from "../../contexts/search";
import useListRepos from "../../hooks/useListRepos";
import ListUserRepoItem from "../ListUserRepoItem";
import styles from "./ListUserRepos.module.css";

export default function ListUserRepos() {
  const { search } = useSearch();

  const { items, loading, error } = useListRepos({ user: search });

  if (loading) return <span>Loading...</span>;

  if (error)
    return (
      <span className={styles.error}>
        Something wrong happen: <b>{error}</b>
      </span>
    );

  if (!loading && !search) {
    return (
      <span className={styles.info}>Start looking for your favorite user</span>
    );
  }

  if (!loading && !items.length) {
    return <span>No matches for "{search}"</span>;
  }
  console.log(items);

  return (
    <ul className={styles.list}>
      {items.map(({ id, name, description, languages, html_url }) => (
        <ListUserRepoItem
          key={id}
          name={name}
          description={description}
          languages={languages}
          url={html_url}
        />
      ))}
    </ul>
  );
}
