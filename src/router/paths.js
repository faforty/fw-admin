/*
 API SERVICES URLs
 */
export const API_BASE_URL = 'http://localhost:8000/api/v1'
export const API_AUTH_URL = API_BASE_URL + '/auth'
export const API_LOGOUT_URL = API_AUTH_URL + '/logout'

/*
 APPLICATION ROUTES URLs
 */
export const HOME_URL = '/'
export const LOGIN_URL = '/auth/login'
export const LOGOUT_URL = '/auth/logout'

export const BOARD_URL = '/board'
export const ADD_POST_BOARD_URL = '/board/add'
export const EDIT_POST_BOARD_URL = '/board/edit/:id'
export const EDIT_STEP2_POST_BOARD_URL = '/board/edit/:id/step-2'
export const EDIT_STEP3_POST_BOARD_URL = '/board/edit/:id/step-3'
export const CATS_BOARD_URL = '/board/cats'
export const EDIT_CATS_BOARD_URL = '/board/cats/:id'
export const ADD_CATS_BOARD_URL = '/board/cats/add'

export const PAGES_URL = '/pages'
export const ADD_PAGES_URL = '/pages/create'
export const EDIT_PAGES_URL = '/pages/edit'