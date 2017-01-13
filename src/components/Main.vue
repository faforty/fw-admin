<template>
    <div>
        <!-- main header -->
        <div class="bg-light lter b-b wrapper-md">
            <a class="btn m-b-xs btn-info pull-right" @click="showModalStat = true">Обновить статистику</a>
            <h1 class="m-n font-thin h3">Procom</h1>
        </div>
        <!-- / main header -->
        <div class="wrapper-md content-md-wrap">
            <div class="panel panel-default">
                <div style="padding: 20px">  Статистика посещений пока не прослеживается</div>
            </div>
        </div>

        <ui-modal :show="showModalStat" :on-close="closeModal" :on-ok="closeModal">
            <h4 slot="header" style="text-align: center">Данных о пользователях пока нет</h4>
        </ui-modal>
    </div>
</template>

<script>
    import uiModal from './ui/modal.vue'

    export default {
        components: {
            'ui-modal': uiModal
        },

        data () {
            return {
                showModalStat: false
            }
        },

          methods: {
            closeModal () {
                this.showModalStat = false
            }
        },
    }
</script>