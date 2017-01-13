<template>
    <div>
        <!-- main header -->
        <div class="bg-light lter b-b wrapper-md ">
            <h1 class="m-n font-thin h3">Создание категории</h1>
        </div>
        <!-- / main header -->
        <div class="wrapper-md content-md-wrap">
            <div class="panel panel-default">
                <div class="panel-body">
                    <form class="form form-horizontal">
                        <div :class="{'form-group': true, 'has-error': errors.has('name') }">
                            <label class="col-sm-3 control-label">Название:</label>
                            <div class="col-sm-8">
                                <input class="form-control" v-model="name" v-validate.initial="name"
                                       data-rules="required">
                            </div>
                        </div>
                        <div class="line line-dashed b-b line-lg pull-in"></div>
                        <div :class="{'form-group': true, 'has-error': errors.has('slug') }">
                            <label class="col-sm-3 control-label">Slug:</label>
                            <div class="col-sm-8">
                                <input class="form-control" v-model="slug" v-validate.initial="slug"
                                       data-rules="required">
                            </div>
                        </div>
                        <div id="collection-inputs" class="panel-heading" style="margin: 0 -15px 15px;padding-top: 15px">
                            <div class="form-group collection-input">
                                <h4 class="col-sm-3 control-label" style="margin: 0;">Дополнительные поля:</h4>
                                <div class="col-sm-8">
                                    <button class="btn m-b-xs  btn-default btn-addon" style="float: left;margin-right: 15px" @click="addFields"><i class="fa fa-plus"></i>Добавить</button>
                                    <label class="control-label"> для модуля "характеристики"</label>
                                </div>
                            </div>
                            <div v-for="(input, key) in fields">
                                <div class="line line-dashed b-b line-lg pull-in"></div>
                                <div class="form-group collection-input">
                                    <div class="col-sm-3">
                                        <input class="form-control" style="width: 100px; float: right" type="text" v-model="fields[key].name">
                                    </div>
                                    <div class="col-sm-8">
                                        <ui-select v-model="fields[key].type">
                                            <option value="input">Input</option>
                                            <option value="textarea">Textarea</option>
                                        </ui-select>
                                        <a class="btn btn-danger" style="margin-left: 15px;" @click="removeField(key)"><i class="fa fa-times"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-center">
                            <input @click="save" type="submit" class="btn btn-default" value="Сохранить и продолжить">
                        </div>
                    </form>
                </div>
            </div>
        </div>
        {{ reload }}
    </div>
</template>

<script>
    import Vue from 'vue'
    import {mapActions, mapGetters} from 'vuex'
    import uiSelect from '../../ui/select.vue'

    Vue.component('ui-select', uiSelect)

    export default {
        data () {
            return {
                name: '',
                slug: '',
                fields: [],
                collections2: [],
            }
        },

        mounted () {
            if (this.$route.params.id) {
                this.$store.dispatch('getCat', this.$route.params.id)
            }
        },

        computed: {
            reload () {
                Object.assign(this, this.$store.getters.getCat);
            }
        },

        methods: {
            save () {
                this.$validator.validateAll()

                if (this.errors.any()) {
                   return event.preventDefault()
                }

                this.$store.dispatch('createCat', this.$data)
                this.$router.replace('/board/cats')
            },
            addFields () {
                this.$set(this.fields, this.fields.length, {})
            },
            removeField (index) {
                this.fields.splice(index, 1)
            }
        }
    }
</script>
