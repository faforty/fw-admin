<template>
    <div>
        <div class="panel-heading">
            <div class="row bs-wizard" style="border-bottom:0;">
                <div class="col-xs-3 bs-wizard-step complete">
                    <div class="text-center bs-wizard-stepnum">Шаг 1</div>
                    <div class="progress">
                        <div class="progress-bar"></div>
                    </div>

                    <router-link v-if="$route.params.id" :to="{ name: 'editPostBoard-step-1', params: { id: $route.params.id }}" class="bs-wizard-dot"></router-link>
                    <a v-if="!$route.params.id" class="bs-wizard-dot"></a>

                    <div class="bs-wizard-info text-center">Подробная информация о проудкте</div>
                </div>

                <div class="col-xs-3 bs-wizard-step"
                     :class="{'complete': stepNum == 2 || edit == 1, 'disabled': stepNum < 2 && edit == 0}"><!-- complete -->
                    <div class="text-center bs-wizard-stepnum">Шаг 2</div>
                    <div class="progress">
                        <div class="progress-bar"></div>
                    </div>

                    <router-link v-if="$route.params.id" :to="{ name: 'editPostBoard-step-2', params: { id: $route.params.id }}" class="bs-wizard-dot"></router-link>
                    <a v-if="!$route.params.id" class="bs-wizard-dot"></a>

                    <div class="bs-wizard-info text-center">Заполнение продукции</div>
                </div>

                <div class="col-xs-3 bs-wizard-step"
                     :class="{'complete': step == 3 || edit == 1, 'disabled': step < 3 && edit == 0}"><!-- active -->
                    <div class="text-center bs-wizard-stepnum">Шаг 3</div>
                    <div class="progress">
                        <div class="progress-bar"></div>
                    </div>
                    <a class="bs-wizard-dot"></a>
                    <div class="bs-wizard-info text-center">Проверка данных</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {Fw} from '../../main'

    export default {
        props: ['step', 'edit'],
        data () {
            return {
                stepNum: 1
            }
        },
        created () {
            this.stepNum = this.step

            Fw.$on('changeStep', function (step) {
                this.stepNum = step
            }.bind(this));
        }
    }
</script>