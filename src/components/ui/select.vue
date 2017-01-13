<template>
        <select>
            <slot></slot>
        </select>
</template>

<script>
    import {Fw} from '../../main'

    export default {
        props: ['options', 'value', 'model'],
        mounted () {
            var vm = this

             $(this.$el)
                    .val(this.value)
                    // init select2
                    .selectpicker()
                    // emit event on change.
                    .on('change', function () {
                        console.log(this.value)
                        vm.$emit('input', this.value)
                    })
            this.$emit('input', $(this.$el).val())
        },
        updated () {
            var vm = this

             $(this.$el)
                    .val(this.value)
                    // init select2
                    .selectpicker('refresh')
                    // emit event on change.
                    .on('change', function () {
                        vm.$emit('input', this.value)
                    })

            this.$emit('input', $(this.$el).val())
        },
        watch: {
            value: function (value) {
                console.log(32 + value)
                $('.selectpicker').selectpicker('val', value)
            },
            options: function (options) {
                // update options
//                $(this.$el).select2({ data: options })
            }
        },
        destroyed () {
            $(this.$el).off().selectpicker('destroy');
        }
    }
</script>