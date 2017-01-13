<template>
    <div>
        <div v-if="isLoggedIn">
            <div class="app-header navbar">
                <!-- navbar header -->
                <div class="navbar-header bg-black">
                    <button class="pull-right visible-xs dk">
                        <i class="glyphicon glyphicon-cog"></i>
                    </button>
                    <button class="pull-right visible-xs">
                        <i class="glyphicon glyphicon-align-justify"></i>
                    </button>
                    <!-- brand -->
                    <a href="/admin" class="navbar-brand text-lt">
                        <i>Fw</i>
                        <span class="hidden-folded m-l-xs ng-binding">Admin</span>
                    </a>
                    <!-- / brand -->
                </div>
                <!-- / navbar header -->

                <!-- navbar collapse -->
                <div class="collapse navbar-collapse box-shadow bg-white-only">
                    <!-- buttons -->
                    <div class="nav navbar-nav m-l-sm hidden-xs">
                        <a href="" class="btn no-shadow navbar-btn">
                            <i class="fa fa-fw fa-dedent"></i>
                        </a>
                    </div>
                    <!-- / buttons -->

                    <!-- link and dropdown -->
                    <ul class="nav navbar-nav hidden-sm">
                        <li class="active">
                            <router-link to="/board/add">
                                <i class="fa fa-cloud-upload fa-fw"></i>
                                <span>Добавить продукт</span>
                            </router-link>
                        </li>
                    </ul>
                    <!-- / link and dropdown -->

                    <!-- search form -->
                    <form class="navbar-form navbar-form-sm navbar-left shift">
                        <div class="form-group">
                            <div class="input-group">
                                <input type="text" class="form-control input-sm bg-light no-border rounded padder"
                                       placeholder="Search projects..." v-model="searchText" @keypress="search"><!-- ngIf: isOpen() -->
                        <span class="input-group-btn">
                            <button type="submit" class="btn btn-sm bg-light rounded"><i
                                    class="fa fa-search"></i></button>
                        </span>
                            </div>
                        </div>
                    </form>
                    <div class="nav navbar-nav m-l-sm hidden-xs">
                        <div style="padding: 13px 0">{{ searchResult }}</div>
                    </div>
                    <!-- / search form -->

                    <!-- nabar right -->
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a id="ui-fullscreen"><i class="fa fa-expand fa-fw text"></i><i class="fa fa-compress"
                                                                                            style="display: none"></i></a>
                        </li>
                        <li>
                            <a id="puzzle-right" style="display: none"><i class="fa fa-puzzle-piece"></i></a>
                        </li>
                        <li class="dropdown">
                            <a href="" class="dropdown-toggle clear" data-toggle="dropdown">
                        <span class="thumb-sm avatar pull-right m-t-n-sm m-b-n-sm m-l-sm">
                            <img src="http://admin.lightsinthesky.io/dist/images/img3.jpg" alt="...">
                            <i class="on md b-white bottom"></i>
                        </span>
                                <span class="hidden-sm hidden-md">{{ username }}</span> <b class="caret"></b>
                            </a>
                            <!-- dropdown -->
                            <ul class="dropdown-menu animated fadeInRight w">
                                <li>
                                    <router-link :to="{ name: 'authLogout' }">Logout</router-link>
                                </li>
                            </ul>
                            <!-- / dropdown -->
                        </li>
                    </ul>
                    <!-- / navbar right -->
                </div>
                <!-- / navbar collapse -->
            </div>
            <div class="app-aside hidden-xs bg-black">
                <div class="aside-wrap">
                    <div class="navi-wrap">
                        <!-- nav -->
                        <nav ui-nav class="navi"><!-- first -->
                            <ul class="nav">
                                <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                                    <span>Навигация</span>
                                </li>
                                <li>
                                    <router-link to="/">
                                        <i class="fa fa-home icon text-primary-dker"></i>
                                        <span class="font-bold">Главная</span>
                                    </router-link>
                                </li>
                                <li class="hidden-folded padder m-t m-b-sm text-muted text-xs">
                                    <span translate="aside.nav.components.COMPONENTS" class="ng-scope">Components</span>
                                </li>
                                <li>
                                    <router-link to="">
                                        <span class="pull-right text-muted">
                                            <i class="fa fa-fw fa-angle-right text"></i>
                                            <i class="fa fa-fw fa-angle-down text-active"></i>
                                        </span>
                                        <i class="fa fa-shopping-bag"></i>
                                        <span>Объявления</span>
                                    </router-link>
                                    <ul class="nav nav-sub dk">
                                        <li>
                                            <router-link to="/board">
                                                <span>Продукция</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/board/cats">
                                                <span>Категории</span>
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <router-link to="">
                                        <span class="pull-right text-muted">
                                            <i class="fa fa-fw fa-angle-right text"></i>
                                            <i class="fa fa-fw fa-angle-down text-active"></i>
                                        </span>
                                        <i class="fa fa-paper-plane-o"></i>
                                        <span>Страницы</span>
                                    </router-link>
                                    <ul class="nav nav-sub dk">
                                        <li>
                                            <router-link to="/pages">
                                                <span>Все страницы</span>
                                            </router-link>
                                        </li>
                                        <li>
                                            <router-link to="/pages/create">
                                                <span>Создать</span>
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                            <!-- / third -->
                        </nav>
                        <!-- nav -->

                        <!-- aside footer -->
                        <div class="wrapper m-t">
                            <div class="text-center-folded">
                                <span class="pull-right pull-none-folded">60%</span>
                                <span class="hidden-folded ng-scope"
                                      translate="aside.MILESTONE">Посещений за месяц</span>
                            </div>
                            <div class="progress-xxs m-t-sm dk progress ng-isolate-scope" value="60" type="info">
                                <div class="progress-bar progress-bar-info"
                                     ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar"
                                     aria-valuenow="60"
                                     aria-valuemin="0" aria-valuemax="100" ng-style="{width: percent + '%'}"
                                     aria-valuetext="60%" ng-transclude="" style="width: 60%;"></div>
                            </div>
                            <div class="text-center-folded">
                                <span class="pull-right pull-none-folded">35%</span>
                                <span class="hidden-folded ng-scope"
                                      translate="aside.RELEASE">Посещений за неделю</span>
                            </div>
                            <div class="progress-xxs m-t-sm dk progress ng-isolate-scope" value="35" type="primary">
                                <div class="progress-bar progress-bar-primary"
                                     ng-class="type &amp;&amp; 'progress-bar-' + type" role="progressbar"
                                     aria-valuenow="35"
                                     aria-valuemin="0" aria-valuemax="100" ng-style="{width: percent + '%'}"
                                     aria-valuetext="35%" ng-transclude="" style="width: 35%;"></div>
                            </div>
                        </div>
                        <!-- / aside footer -->
                    </div>
                </div>
            </div>
            <div class="app-content">
                <!-- uiView:  -->
                <div class="app-content-body fade-in-up">
                    <div class="hbox hbox-auto-xs hbox-auto-sm">
                        <!-- main -->
                        <div class="col">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>
            </div>
            <!-- footer -->
            <div class="app-footer wrapper b-t bg-light ng-scope">
            <span class="pull-right ng-binding">1.1.3 <a href="" class="m-l-sm text-muted"><i
                    class="fa fa-long-arrow-up"></i></a></span>
                © 2014 Copyright.
            </div>
            <!-- / footer -->
        </div>
        <div v-else>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
    import {mapGetters} from 'vuex'

    export default {
        computed: mapGetters({
            isLoggedIn: 'isLoggedIn'
        }),
        data () {
            return {
                username: '',
                searchText: '',
                searchResult: '',
            }
        },

        methods: {
            search (val) {
                var data = [
                    { name: 'Доска объявлений'},
                    { name: 'Страницы'},
                    { name: 'Категории'}
                ];

                for (let d of data) {
                    if (d.name.indexOf(this.searchText) == 0) {
                        this.searchResult = d.name
                        //break
                    }
                }
            }
        },

        mounted () {
            this.username = FwAdmin.user.email;
        }
    }
</script>