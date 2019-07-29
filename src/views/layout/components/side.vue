<template>
    <el-aside width="250px">
        <div class="side">
            <el-menu
                default-active="2"
                :style="{ backgroundColor: '#545c64', width: '250px', borderRight: '0px' }"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b">
                    <v-sidebar-item v-for="route in routers" :key="route.path" :item="route" :base-path="route.path" />
            </el-menu>
        </div>
    </el-aside>
</template>

<script>
    import { mapGetters } from "vuex"
    import SidebarItem from "./SidebarItem"

    export default {
        components: {
            "v-sidebar-item": SidebarItem
        },
        computed: {
            ...mapGetters([
                "routers"
            ])
        }
    }
</script>

<style lang="less" scoped>
    .side {
        width: 250px;
        height: 100vh;
        background-color: #545c64;
        overflow-x: hidden;
        overflow-y: auto;

    }
</style>