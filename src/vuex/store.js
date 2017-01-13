import Vue from 'vue'
import Vuex from 'vuex'
import board from './modules/board'
import auth from './modules/auth'

Vue.use(Vuex)
Vue.config.debug = true

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    // actions,
    modules: {
        auth,
        board
    },
    strict: debug,
})