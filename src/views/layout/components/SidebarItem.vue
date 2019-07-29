<template>
    <div v-if="!item.hidden && item.children" class="menu-wrapper">
        <template
            v-if="hasOneShowingChild(item.children, item) && (!onlyOneChild.children || onlyOneChild.noShowingChildren &&  !item.alwaysShow)"
        >
            <router-link :to='basePath + onlyOneChild.path'>
                <el-menu-item
                    :index='basePath + onlyOneChild.path'
                >
                    <v-svg-icon :icon-class="onlyOneChild.meta.icon" className="side-icon"/>
                    <span slot="title">{{ onlyOneChild.meta.title }}</span>
                </el-menu-item>
            </router-link>
        </template>
        <el-submenu v-else :index="item.path">
            <template slot="title">
                <v-svg-icon :icon-class="item.meta.icon" className="side-icon"/>
                <span>{{ item.meta.title }}</span>
            </template>

            <template v-for="child in item.children">
                <template v-if="!child.hidden">
                    <router-link :key="child.path" :to='basePath + "/" + child.path'>
                        <el-menu-item :index="child.path">
                            <v-svg-icon :icon-class="child.meta.icon" className="side-icon"/>
                            <span slot="title">{{ child.meta.title }}</span>
                        </el-menu-item>
                    </router-link>
                </template>
            </template>
        </el-submenu>
    </div>
</template>

<script>

    export default {
        name: "SidebarItem",
        components: {
        },
        props: {
            item: {
                type: Object,
                required: true
            },
            isNest: {
                type: Boolean,
                default: false
            },
            basePath: {
                type: String,
                default: ""
            }
        },
        data() {
            return {
                onlyOneChild: null
            };
        },
        mounted() {
        },
        methods: {
            hasOneShowingChild(children, parent) {
                const showingChildren = children.filter(item => {
                    if (item.hidden) {
                        return false
                    } else {
                        return true
                    }
                });
                //如果只有一个子路由
                if (showingChildren.length === 1) {
                    this.onlyOneChild = { ...showingChildren[0], path: "/" + showingChildren[0].path, noShowingChildren: true }
                    return true
                }
                //如果没有子路由
                if (showingChildren.length === 0) {
                    this.onlyOneChild = { ...parent, path: "", noShowingChildren: true }
                    return true
                }

                return false
            }
        }
    }
</script>

<style lang="less" scoped>
    .side-icon {
        margin-right: 10px;
    }
</style>
