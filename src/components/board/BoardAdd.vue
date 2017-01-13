<template>
    <div>
        <!-- main header -->
        <div class="bg-light lter b-b wrapper-md ">
            <h1 class="m-n font-thin h3">Добавление товара</h1>
        </div>
        <!-- / main header -->
        <div class="wrapper-md content-md-wrap">
            <div class="panel panel-default">
                <panel step="1" edit="0"></panel>
                <div class="panel-body">
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue'
    import {Fw} from '../../main'
    import panel from './panel.vue'

    Vue.component('panel', panel)

    Vue.component('board-edit', () => System.import('./BoardEdit.vue'))
    Vue.component('board-edit-2', () => System.import('./BoardEdit2.vue'))
</script>