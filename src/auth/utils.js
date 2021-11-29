const STORAGE_TOKEN_NAME = 'accessToken';


export const isUserLoggedIn = () => {
    return localStorage.getItem(STORAGE_TOKEN_NAME) != null;
}

export const setUserToken = (accessToken) => {
    localStorage.setItem(STORAGE_TOKEN_NAME, JSON.stringify(accessToken));
}

export const deleteUserSession = () => {
    localStorage.removeItem(STORAGE_TOKEN_NAME);
}

export const getUserToken = () => localStorage.getItem(STORAGE_TOKEN_NAME);