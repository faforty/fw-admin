<template>
    <div class="container w-xxl w-auto-xs">
        <a href="" class="navbar-brand block m-t">Fw Admin</a>
        <div class="m-b-lg">
            <div class="wrapper text-center">
                <strong>Sign in to get in touch</strong>
            </div>

            <form name="form" class="form-validation" method="post" @submit="save" >
                <div class="text-danger wrapper text-center">
                </div>
                <div class="list-group list-group-sm">
                    <div class="list-group-item">
                        <input v-model="auth.email" v-validate.initial="auth.email" data-rules="required|email" type="email" placeholder="Email"
                               class="form-control no-border">
                    </div>
                    <div class="list-group-item">
                        <input v-model="auth.password" v-validate.initial="auth.password" data-rules="required|min:3"
                               type="password" placeholder="Password" class="form-control no-border">
                    </div>
                </div>
                <button type="submit" class="btn btn-lg btn-primary btn-block">Log in
                </button>
            </form>
        </div>
        <div class="text-center">
            <p>
                <small class="text-muted">FOXwel<br>© 2016</small>
            </p>
        </div>
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    import * as patch from '../router/paths'

    export default {
        computed: mapActions(['setToken', 'setUser']),
//        computed: mapGetters({
//            isLoggedIn: 'isLoggedIn'
//        }),
//        methods: mapActions(['AuthSetToken', 'AuthSetUser']),
        data() {
            return {
                isPost: false,
                auth: {
                    email: '',
                    password: '',
                }
            }
        },
        methods: {
            save () {
                this.$validator.validateAll()

                if (this.errors.any()) {
                    event.preventDefault()
                }

                this.$store.dispatch('setToken', 'D$H&*KJUHY&GT')
                this.$store.dispatch('setUser', {
                    username: 'faforty'
                })

                this.$router.push(patch.HOME_URL)

                event.preventDefault()
            }
        }
    }
</script>