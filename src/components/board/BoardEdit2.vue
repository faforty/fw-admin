<template>
    <div>
        <button class="btn m-b-xs  btn-default" style="float: left;margin-right: 15px" @click="addFields"><i class="fa fa-plus"></i></button>
        <form class="form form-inline collection-fields">
            <template v-for="(input, index) in htmlFields">
                <div class="collection-field">
                    <h1 v-if="index" class="number-collection">{{ index + 1 }}</h1>
                    <div class="form-group" v-for="item in collections">
                        <input type="text" class="form-control" :placeholder="item.name" v-model="fields[index]" style="width: 120px;margin-right: 10px">
                    </div>
                </div>
                <div class="line line-dashed b-b line-lg pull-in"></div>
            </template>

            <div class="text-center">
                <input type="submit" class="btn btn-default" @click="save" value="Сохранить и продолжить">
            </div>
        </form>
    </div>
</template>

<style lang="sass" rel="stylesheet/scss">
    .number-collection {
        display: inline-block;
        margin: 0;
        line-height: 0;
        position: relative;
        top: 10px;
        margin-left: -10px;
        left: 0;
        width: 60px;
        text-align: center;
    }
</style>

<script>
    import {Fw} from '../../main'
    import {mapGetters} from 'vuex'
    import panel from './panel.vue'

    export default {
        computed: mapGetters({
            edit: 'getEditPost',
            cats: 'getBoardCats',
        }),
        mounted () {
            Fw.$emit('changeStep', 2)

            console.log(this.edit)

            try {
                let cat = this.cats.filter(value => value.id == this.edit.id_cat)[0]


                this.collections = cat.fields
            } catch (e) {}

            if (!this.collections.length) {
                this.addFields()
            }
        },
        data () {
            return {
                fields: [],
                htmlFields: [],
                collections: []
            };
        },
        methods: {
            addFields () {
                if (!this.collections.length) {
                    return false
                }

                var html = [];

                this.collections.forEach((i, v) => {
                    html.push('<input type="text" class="form-control" style="width: 120px;margin-right: 10px">');
                });

                this.htmlFields.push(html.join(''));

                return false;
            },

            save () {
                this.$store.dispatch('createPost', this.edit)
                this.$router.replace('/board')
            }
        }
    }
</script>
