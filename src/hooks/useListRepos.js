import { useEffect, useState } from "react";
import { getLanguagesByRepo, getListReposByUser } from "../api/github";

export default function useListRepos({ user }) {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const rawItems = await getListReposByUser({ user });
        const filterItems = rawItems
          .filter(({ fork }) => !fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);
        const items = await Promise.all(
          filterItems.map(async (item) => {
            const rawLanguages = await getLanguagesByRepo({
              languageUrl: item.languages_url,
            });
            const languages = Object.keys(rawLanguages);

            return { ...item, languages };
          })
        );
        setItems(items);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (!user) {
      return;
    }

    if (items.length) {
      setItems([]);
    }

    fetchData();
  }, [user]);

  return { items, loading, error };
}
