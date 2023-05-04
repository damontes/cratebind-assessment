import styles from "./app.module.css";
import ListUserRepos from "./components/ListUserRepos";
import SearchInput from "./components/SearchInput";
import { SearchProvider } from "./contexts/search";

function App() {
  return (
    <SearchProvider>
      <div className={styles.container}>
        <div className={styles.content}>
          <SearchInput />
          <div className={styles.listContainer}>
            <ListUserRepos />
          </div>
        </div>
      </div>
    </SearchProvider>
  );
}

export default App;
