import {API_AUTH_URL} from '../../router/paths'
import store from '../store'
import {
    SET_USER,
    SET_TOKEN,
    REMOVE_USER,
    REMOVE_TOKEN
} from '../mutation-types'

// initial state
const state = {
    token: localStorage.getItem('u_token') || null,
    user: JSON.parse(localStorage.getItem('u_user')) || {},
    authenticated: localStorage.getItem('u_authing') || false
}

export const actions = {
    login (body) {
        return Vue.http({
            url: API_AUTH_URL,
            method: "POST",
            body: body,
            headers: {
                'Access-Control-Allow-Origin': '*' //TODO: remover CORS
            }
        })
    },

    setToken ({commit}, token) {
        localStorage.setItem('u_token', token);

        commit(SET_TOKEN, token)
    },

    setUser ({commit}, user) {
        localStorage.setItem('u_user', JSON.stringify(user));
        localStorage.setItem('u_authing', true);

        commit(SET_USER, { user })
    },

    setAuth (type, value) {
        switch (type) {
            case 'token':
                this.setToken(value)
                break
            case 'user':
                this.setUser(value)
                break
        }
    },

    isLoggedIn () {
        return store.state.auth.authenticated
    },

    logout () {
        localStorage.removeItem('u_user')
        localStorage.removeItem('u_authing')
        localStorage.removeItem('u_token')

        // commit(REMOVE_USER)
        // commit(REMOVE_TOKEN)
    }
}

const getters = {
    isLoggedIn: state => state.authenticated
}

// mutations
const mutations = {
    [SET_USER] (state, { user }) {
        state.user = user
        state.authenticated = true
    },
    [REMOVE_USER] (state) {
        state.user = {}
        state.authenticated = false
    },
    [SET_TOKEN] (state, token) {
        state.token = token
    },
    [REMOVE_TOKEN] (state) {
        state.token = null
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}