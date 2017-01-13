<template>
    <div>
        <!-- main header -->
        <div class="bg-light lter b-b wrapper-md ">
            <h1 class="m-n font-thin h3">Создание страницы</h1>
        </div>
        <!-- / main header -->
        <div class="wrapper-md content-md-wrap">
            <div class="panel panel-default">
                <div class="panel-body">
                    <form class="form form-horizontal" @submit="save">
                        <div :class="{'form-group': true, 'has-error': errors.has('title') }">
                            <label class="col-sm-3 control-label">Название:</label>
                            <div class="col-sm-8">
                                <input class="form-control" v-model="title" v-validate.initial="title" data-rules="required">
                            </div>
                        </div>
                        <div class="line line-dashed b-b line-lg pull-in"></div>
                        <div :class="{'form-group': true, 'has-error': errors.has('description') }">
                            <label class="col-sm-3 control-label">Описание:</label>
                            <div class="col-sm-8">
                                <input class="form-control" v-model="description" v-validate.initial="description" data-rules="required">
                            </div>
                        </div>
                        <div class="line line-dashed b-b line-lg pull-in"></div>
                        <div :class="{'form-group': true, 'has-error': errors.has('keywords') }">
                            <label class="col-sm-3 control-label">Ключевые слова:</label>
                            <div class="col-sm-8">
                                <input class="form-control" v-model="keywords" v-validate.initial="keywords" data-rules="required">
                            </div>
                        </div>
                        <div class="line line-dashed b-b line-lg pull-in"></div>
                        <div :class="{'form-group': true, 'has-error': errors.has('content') }">
                            <label class="col-sm-3 control-label">Контент:</label>
                            <div class="col-sm-8">
                                <textarea id="editor" v-model="content" class="form-control"></textarea>
                            </div>
                        </div>
                        <div class="line line-dashed b-b line-lg pull-in"></div>
                        <div class="text-center">
                            <input type="submit" class="btn btn-default" value="Сохранить и продолжить">
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
import * as patch from '../../router/paths'

export default {
    computed: mapActions(['setToken', 'setUser']),
    data () {
        return {
            title: '',
            description: '',
            keywords: '',
            content: ''
        }
    },
    mounted () {
        console.log(this.$el)
        var editor = ace.edit("editor");
        editor.setTheme("ace/theme/chrome");
        editor.getSession().setMode("ace/mode/html");
        editor.setOptions({
            minLines: 10,
            maxLines: Infinity
        });
    },
    methods: {
        save () {
            this.$validator.validateAll()

            if (this.errors.any()) {
                event.preventDefault()
            }

            console.log(this.data)
//            this.$store.dispatch('createCat', {

//            })
        }
    }
}
</script>
