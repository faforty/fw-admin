<template>
    <div>
        <div class="wrapper-md content-md-wrap">
            <div class="panel panel-default">

                <div style="padding: 50px; text-align: center" v-show="!posts.length">
                    <h3>База пуста</h3>
                    <p>Добавьте в базу продукт</p>
                </div>

                <table class="table m-b-none default footable-loaded footable" v-show="posts.length">
                    <thead>
                    <tr>
                        <th width="185">
                        </th>
                        <th width="250">
                            Название
                        </th>
                        <th>
                            Slug
                        </th>
                        <th>
                            Просмотров
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr class="footable-even" style="display: table-row;" v-for="post in posts">
                        <td>
                        </td>
                        <td class="footable-visible footable-first-column">{{ post.title }}
                        </td>
                        <td class="footable-visible">{{ post.title }}</td>
                        <td class="footable-visible">%0%</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: mapGetters({
            posts: 'getPosts'
        }),

        mounted () {
            this.$store.dispatch('getPosts')
        }
    }
</script>