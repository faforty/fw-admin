import Vue from 'vue'
import Router from 'vue-router'
import {mapGetters} from 'vuex'
import * as path from './paths'

import Login from '../components/Login.vue'
import {actions as auth} from '../vuex/modules/auth'

Vue.use(Router)

function requireAuth(route, redirect, next) {
    if (route.name != 'authLogin' && !auth.isLoggedIn()) {
        redirect(path.LOGIN_URL)
    } else if (route.name == 'authLogin' && auth.isLoggedIn()) {
        redirect(path.HOME_URL)
    } else {
        next()
    }
}

function userLogout(route, redirect, next) {
    if (route.name != 'authLogin' && auth.isLoggedIn()) {
        auth.logout()

        next()
    }
}

export default new Router({
    base: __dirname,
    routes: [
        {
            path: path.HOME_URL,
            component: () => System.import('../components/Main.vue'),
            name: 'dashboard',
            beforeEnter: requireAuth,
            auth: true
        },
        {path: path.LOGIN_URL, component: Login, name: 'authLogin', beforeEnter: requireAuth, guest: true},
        {path: path.LOGOUT_URL, component: Login, name: 'authLogout', beforeEnter: userLogout },

        {
            path: path.BOARD_URL,
            component: () => System.import('../components/board/Board.vue'),
            name: 'board',
            beforeEnter: requireAuth,
            guest: true
        },

        {
            path: path.ADD_POST_BOARD_URL,
            component: () => System.import('../components/board/BoardAdd.vue'),
            children: [
                {
                    path: '',
                    name: 'addPostBoard-step-1',
                    component: () => System.import('../components/board/BoardEdit.vue'),
                }
            ],
            name: 'addPostBoard',
            beforeEnter: requireAuth
        },

        {
            path: path.EDIT_POST_BOARD_URL,
            component: () => System.import('../components/board/BoardAdd.vue'),
            children: [
                {
                    path: '',
                    name: 'editPostBoard-step-1',
                    component: () => System.import('../components/board/BoardEdit.vue')
                },{
                    path: 'step-2',
                    name: 'editPostBoard-step-2',
                    component: () => System.import('../components/board/BoardEdit2.vue')
                }
            ],
            name: 'editPostBoard',
            beforeEnter: requireAuth
        },
        {
            path: path.CATS_BOARD_URL,
            component: () => System.import('../components/board/cats/index.vue'),
            name: 'boardCats',
            beforeEnter: requireAuth,
            guest: true
        },
        {
            path: path.EDIT_CATS_BOARD_URL,
            component: () => System.import('../components/board/cats/add.vue'),
            name: 'boardEditCats',
            beforeEnter: requireAuth,
            guest: true
        },
        {
            path: path.ADD_CATS_BOARD_URL,
            component: () => System.import('../components/board/cats/add.vue'),
            name: 'boardCatsAdd',
            beforeEnter: requireAuth,
            guest: true
        },

        {
            path: path.PAGES_URL,
            component: () => System.import('../components/pages/index.vue'),
            name: 'pages',
            beforeEnter: requireAuth
        },
        {
            path: path.ADD_PAGES_URL,
            component: () => System.import('../components/pages/create.vue'),
            name: 'createPages',
            beforeEnter: requireAuth
        },

        {path: '*', redirect: '/'}
    ]
})