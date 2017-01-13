import * as d from './resources'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export function getBoardCats (cb) {
    Vue.http.get('/api/board/cats').then((r) => {
        cb(r.data)
    });
}
export function getBoardCat (catId, cb) {
    Vue.http.get('/api/board/cats/' + catId).then((r) => {
        cb(r.data)
    });
}
export function createBoardCat (cat, cb) {
    Vue.http.post('/api/board/cats', cat).then((r) => {
        cb(r.data)
    });
}
export function removeBoardCat (catId, cb) {
    Vue.http.delete('/api/board/cats/' + catId).then((r) => {
        cb(r.data)
    });
}
export function createBoardPost (post, cb) {
    Vue.http.post('/api/board', post).then((r) => {
        cb(r.data)
    });
}
export function getBoardPosts (cb) {
    Vue.http.get('/api/board').then((r) => {
        cb(r.data)
    });
}