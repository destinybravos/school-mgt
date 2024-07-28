export function saveToken(token) {
    localStorage.setItem('access_token', token);
}

export function getToken() {
    return localStorage.getItem('access_token');
}

export function saveActiveUser(userObject) {
    localStorage.setItem('active_user', JSON.stringify(userObject));
}

export function getActiveUser() {
    if (localStorage.getItem('active_user') == undefined) {
        return null
    }

    return JSON.parse(localStorage.getItem('active_user'));
}

