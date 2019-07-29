<template>
    <el-breadcrumb class="app-breadcrumb" separator="/">
            <transition-group name="breadcrumb">
                <template  v-for="(item,index) in levelList">
                    <el-breadcrumb-item v-if="item.meta.title" :key="item.path">
                        <span
                            v-if="item.redirect==='noredirect'||index==levelList.length-1"
                            class="no-redirect"
                            >{{ item.meta.title }}
                        </span>
                        <router-link v-else :to="item.redirect||item.path">{{ item.meta.title }}</router-link>
                    </el-breadcrumb-item>
                </template>
            </transition-group>
    </el-breadcrumb>
</template>

<script>
    import pathToRegexp from "path-to-regexp"

    export default {
        data() {
            return {
                levelList: null
            }
        },
        watch: {
            $route() {
                this.getBreadcrumb()
            }
        },
        created() {
            this.getBreadcrumb()
        },
        methods: {
            getBreadcrumb() {
                const { params } = this.$route;
                // console.log(this.$route.matched)
                let matched = this.$route.matched.filter(item => {
                    if (item.name) {
                        let toPath = pathToRegexp.compile(item.path);
                        item.path = toPath(params);
                        return true;
                    }
                })

                this.levelList = matched
            }
        }
    }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .app-breadcrumb.el-breadcrumb {
        display: inline-block;
        font-size: 14px;
        line-height: 50px;
        margin-left: 10px;
        .no-redirect {
            color: #97a8be;
            cursor: text;
        }
    }
</style>
