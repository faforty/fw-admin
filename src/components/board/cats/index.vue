<template>
    <div>
        <!-- main header -->
        <div class="bg-light lter b-b wrapper-md">
            <router-link to="/board/cats/add" class="btn m-b-xs w-xs btn-info pull-right">Добавить</router-link>
            <h1 class="m-n font-thin h3">Категории</h1>
        </div>
        <!-- / main header -->
        <div class="wrapper-md content-md-wrap">
            <div class="panel panel-default">


                <div style="padding: 50px; text-align: center" v-show="!cats.length">
                    <h3>База пуста</h3>
                    <p>Добавьте в базу категорию</p>
                </div>

                    <table class="table m-b-none default footable-loaded footable" v-show="cats.length">
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
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr class="footable-even" style="display: table-row;" v-for="cat in cats">
                                <td>
                                    <router-link :to="{ name: 'boardEditCats',  params: { id: cat.id }}" class="btn btn-xs btn-dark">Редактировать</router-link>
                                    <a class="btn btn-xs btn-danger" @click="showNewCommentModal = true; choiceId = cat.id">Удалить</a>
                                </td>
                                <td class="footable-visible footable-first-column">{{ cat.name }}
                                </td>
                                <td class="footable-visible">{{ cat.slug }}</td>
                                <td class="footable-visible"></td>
                            </tr>
                        </tbody>
                    </table>
            </div>
        </div>

        <ui-modal :show="showNewCommentModal" :on-close="closeModal" :on-ok="deleteCat">
            <h4 slot="header" style="text-align: center">Действительно удалить?</h4>
        </ui-modal>
    </div>
</template>

<script>
    import {mapGetters} from 'vuex'
    import uiModal from '../../ui/modal.vue'

    export default {
        components: {
            'ui-modal': uiModal
        },

        computed: mapGetters({
            cats: 'getBoardCats'
        }),

        data () {
            return {
                choiceId: 0,
                showNewCommentModal: false
            }
        },

        methods: {
            deleteCat () {
               this.$store.dispatch('removeCat', this.choiceId)
            },
            closeModal () {
                this.showNewCommentModal = false
            }
        },

        mounted () {
            this.$store.dispatch('getCats')
        }
    }
</script>