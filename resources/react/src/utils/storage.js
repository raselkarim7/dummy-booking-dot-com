const TOKEN_KEY = 'token'
const USER_KEY = 'user'

export default {
    token: {
        getToken () {
            return localStorage.getItem(TOKEN_KEY)
        }, 

        setToken(value) {
            return localStorage.setItem(TOKEN_KEY, value)
        }, 

        removeToken() {
            return localStorage.removeItem(TOKEN_KEY)
        }
    }, 

    user: {
        getUser () {
            return JSON.parse( localStorage.getItem(USER_KEY) )
        }, 

        setUser(value) {
            return localStorage.setItem(USER_KEY, JSON.stringify(value))
        }, 

        removeUser() {
            return localStorage.removeItem(USER_KEY)
        }
    }, 

}
