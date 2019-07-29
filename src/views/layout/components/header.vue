<template>
    <el-header class="navBar">
        <div class="navBar-top">
            <div></div>
            <el-dropdown class="avatar-container" trigger="click">
                <div class="avatar-wrapper">
                    <img :src="avatar+'?imageView2/1/w/40/h/40'" class="user-avatar">
                    <i class="el-icon-caret-bottom"/>
                </div>
                <el-dropdown-menu slot="dropdown" class="user-dropdown">
                    <router-link class="inlineBlock" to="/">
                        <el-dropdown-item>
                            首页
                        </el-dropdown-item>
                    </router-link>
                    <el-dropdown-item divided>
                        <span style="display:block;" @click="logout">退出</span>
                    </el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
        <div class="navBar-tags">
            <v-breadcrumb />
        </div>
    </el-header>
</template>

<script>
    import { mapGetters } from 'vuex'
    import Breadcrumb from '@/components/Breadcrumb'

    export default {
        components: {
            "v-breadcrumb": Breadcrumb
        },
        computed: {
            ...mapGetters([
                'sidebar',
                'avatar'
            ])
        },
        methods: {
            logout() {

            }
        }
    }
</script>

<style lang="less" scoped>
    .navBar {
        width: 100%;
        height: 60px;
        margin-bottom: 55px;
        background-color: #ffffff;
        box-shadow: 0 1px 4px rgba(0, 0, 0, .12);
        position: relative;

        &-top {
            width: 100%;
            margin-top: 7px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        &-tags {
            position: absolute;
            left: 0px;
            bottom: -55px;
            box-sizing: border-box;
            width: 100%;
            padding-left: 10px;
            padding-right: 20px;
            border-bottom: 1px solid  rgba(0, 0, 0, .12);
        }
    }
</style>