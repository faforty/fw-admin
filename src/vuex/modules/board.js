import {
    RECEIVE_POSTS,
    BOARD_ADD_CAT,
    EDITOR_POST,
    EDIT_CAT
} from '../mutation-types'
import * as api from '../../api/'

const state = {
    edit: {},
    posts: [],
    cats: JSON.parse(localStorage.getItem('cats')) || [],
    cat: {}
}


const mutations = {
    [BOARD_ADD_CAT] (state, cat) {
        // state.cats.push(cat)

        // localStorage.setItem('cats', JSON.stringify(state.cats));
    },
    ['BOARD_CATS'] (state, cats) {
        state.cats = cats
    },
    ['REMOVE_CAT'] (state, catId) {
        state.cats.forEach(function (cat, i) {
            if (cat.id == catId) {
                state.cats.splice(i, 1)
            }
        })
    },
    ['BOARD_ADD'] (state, post) {
        state.posts = post
    },
    [EDIT_CAT] (state, cat) {
        state.cat = cat
    },
    [RECEIVE_POSTS] (state, post) {
        state.posts.push(post)
    },
    [EDITOR_POST] (state, post) {
        state.edit = Object.assign(state.edit, post)
    }
}

const actions = {

    createCat({commit}, cat) {
        api.createBoardCat(cat, cat => {
            commit(BOARD_ADD_CAT, cat)
        })
    },
    getCat({commit}, catId) {
        api.getBoardCat(catId, cat => {
            commit(EDIT_CAT, cat)
        })
    },
    removeCat({commit}, catId) {
        api.removeBoardCat(catId, cat => {
            commit('REMOVE_CAT', catId)
        })
    },
    getCats({commit}) {
        api.getBoardCats(cats => {
            commit('BOARD_CATS', cats)
        })
    },


    createPost({commit}, post) {
        api.createBoardPost(post, post => {
            //commit('BOARD_ADD', post)
        })
    },
    getPosts({commit}) {
        api.getBoardPosts(posts => {
            commit('BOARD_ADD', posts)
        })
    },
    editPost({commit}, post) {
        commit(EDITOR_POST, post)
    }

}

const getters = {
    getPosts: state => state.posts,
    getBoardCats: state => state.cats,
    getEditPost: state => state.edit,
    getCat: state => state.cat
}

export default {
    state,
    actions,
    getters,
    mutations
}