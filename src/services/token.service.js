const TOKEN_STORAGE_KEY = 'jwtToken';

export const setToken = token => {
  localStorage.setItem(TOKEN_STORAGE_KEY, token);
};

export const getToken = () => {
  return localStorage.getItem(TOKEN_STORAGE_KEY);
};

export const purgeToken = () => {
  localStorage.removeItem(TOKEN_STORAGE_KEY);
};
