const BASE_URL = process.env.REACT_APP_API_ROOT;
const GITHUB_TOKEN = process.env.REACT_APP_API_TOKEN;

const call = async (path, options) => {
  const { params = {}, payload = null, headers = {}, ...rest } = options;
  const searchParmas = new URLSearchParams(params).toString();
  const url = new URL(`${path}`, BASE_URL);
  url.search = searchParmas;
  return fetch(url, {
    headers: {
      ...headers,
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "Content-Type": "application/json",
    },
    ...(payload ? { body: JSON.stringify(payload) } : {}),
    ...rest,
  }).then(async (res) => {
    const data = await res.json();
    if (!res.ok) {
      throw new Error(data.message);
    }

    return data;
  });
};

export function get(path, options) {
  return call(path, { method: "GET", ...options });
}
