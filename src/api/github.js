import { get } from "./raw";

export const getListReposByUser = ({ user }) => {
  return get(`/users/${user}/repos`);
};

export const getLanguagesByRepo = ({ languageUrl, owner, repo }) => {
  const path = languageUrl ?? `/repos/${owner}/${repo}/languages`;
  return get(path);
};
