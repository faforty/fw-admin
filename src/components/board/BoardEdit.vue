<template>
    <div>
        <form class="form form-horizontal" @submit="save">
            <div class="form-group">
                <label class="col-sm-3 control-label">Категория:</label>
                <div class="col-sm-8">
                    <ui-select v-model="id_cat">
                        <option v-for="c in cats" :value="c.id">
                            {{ c.name }}
                        </option>
                    </ui-select>
                </div>
            </div>
            <div class="line line-dashed b-b line-lg pull-in"></div>
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
                    <textarea class="form-control" v-model="description" v-validate.initial="description"
                              data-rules="required"></textarea>
                </div>
            </div>
            <div class="line line-dashed b-b line-lg pull-in"></div>
            <div :class="{'form-group': true, 'has-error': errors.has('features') }">
                <label class="col-sm-3 control-label">Характеристики:</label>
                <div class="col-sm-8">
                    <textarea class="form-control" v-model="features" v-validate.initial="features"
                              data-rules="required"></textarea>
                </div>
            </div>

            <div class="line line-dashed b-b line-lg pull-in"></div>
            <div :class="{'form-group': true, 'has-error': errors.has('features') }">
                <label class="col-sm-3 control-label">Фото:</label>
                <div class="col-sm-8">
                    <ui-upload
                            :server="upload.server"
                            :api="upload.api"
                            :params="upload.params"
                            :success="upload.success"
                            :file="upload.file"
                            :crop="upload.crop"
                            :width="upload.width"
                            :height="upload.height"
                            :ok="upload.ok"
                            :cancel="upload.cancel">
                        <img src="/static/images/upload.svg">
                    </ui-upload>
                </div>
            </div>

            <div class="line line-dashed b-b line-lg pull-in"></div>
            <div class="text-center">
                <input type="submit" class="btn btn-default" value="Сохранить и продолжить">
            </div>
        </form>
    </div>
</template>

<style>
.upload {
    width: 300px !important;
    height: 200px !important;
}
</style>

<script>
    import Vue from 'vue'
    import {mapGetters} from 'vuex'
    import {Fw} from '../../main'

    import uiSelect from '../ui/select.vue'
    import uiUpload from '../ui/upload.vue'

    Vue.component('ui-select', uiSelect)
    Vue.component('ui-upload', uiUpload)

    export default {
        computed: mapGetters({
            cats: 'getBoardCats',
            edit: 'getEditPost'
        }),
        data () {
            return {
                upload:{
                    server:"",
                    api:"",
                    params:{
                        token:"test"
                    },
                    file:"",
                    preview:true,
                    crop:true,
                    width:400,
                    height:400,
                    cancel:"Отмена",
                    ok:"Хорошо",
                    success:(data)=>{
                        alert(data.length)
                    }
                },
                data: {
                    cats: [
                        {text: 'One', value: 'A'},
                        {text: 'Two', value: 'B'},
                        {text: 'Three', value: 'C'}
                    ]
                },
                id_cat: '',
                title: '',
                description: '',
                features: '',

                panel: null
            }
        },
        methods: {
            save () {

                this.$validator.validateAll()

                if (this.errors.any()) {
                    return false;
                }

                Fw.$emit('changeStep', 2)

                this.$store.dispatch('editPost', this.$validator.$vm.$data)
                this.$router.push({ name: 'editPostBoard-step-2', params: { id: 1 } })
            }
        },

        mounted () {
            this.$store.dispatch('getCats')

            Object.assign(this, this.edit)

            if (this.$route.name == 'editPostBoard-step-1') {
                Fw.$emit('changeStep', 2)
            } else {
                Fw.$emit('changeStep', 1)
            }
        }
    }
</script>