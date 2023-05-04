import { useCallback, useEffect, useState } from "react";
import { useSearch } from "../../contexts/search";

import styles from "./SearchInput.module.css";
import { debounce } from "../../utils/helpers";

export default function SearchInput(props) {
  const [value, setValue] = useState("");
  const [deferredValue, setDeferredValue] = useState("");

  const { search, setSearch } = useSearch();

  const handleSearch = useCallback(
    debounce((value) => setDeferredValue(value), 320),
    []
  );

  useEffect(() => {
    handleSearch(value);
  }, [value]);

  useEffect(() => {
    if (search !== deferredValue) setSearch(deferredValue);
  }, [deferredValue]);

  return (
    <input
      className={styles.input}
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search..."
      {...props}
    />
  );
}
