import * as usersAPI from './users-api'


export async function signUp(userData) {
    const token = await usersAPI.signUp(userData)
    //return promise that userAPI will run
    localStorage.setItem('token', token)
    return getUser()
}

// Login
export async function login(credentials) {
    const token = await usersAPI.login(credentials)
    localStorage.setItem('token', token)
    return getUser()
}
//Get Token
export async function getToken() {
    const token = localStorage.getItem('token');
    if (!token) return null;
   // console.log(token)
    //payload runs the same command as getuser but doesnt break?
    const payload = JSON.parse(window.atob(token.split(".")[1]))
    //console.log(payload)
    if (payload.exp < Date.now() / 1000) {
        localStorage.removeItem('token')
        return null;
    }
    return token;
}
// GetUser

export async function getUser() {
    const token = await getToken();
    //console.log("token is ", token)
    //v CODE BREAKS HERE v
    return token ? JSON.parse(window.atob(token.split(".")[1])).user : null
}

// Logout

export function logout() {
    localStorage.removeItem('token')
}

// checkToken

export function checkToken() {
    return usersAPI.checkToken()
        .then(dateStr => new Date(dateStr))
}