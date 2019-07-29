<template>
    <div>
        <el-container>
            <v-side />
            <el-container>
                <v-header />
                <v-main />
                <el-footer style="height: 0px;"></el-footer>
            </el-container>
        </el-container>
    </div>
</template>

<script>
    import Side from "./components/side"
    import Header from "./components/header"
    import Main from "./components/main"

    export default {
        components: {
            "v-side": Side,
            "v-header": Header,
            "v-main": Main
        }
    }
</script>

<style lang="less" scoped>

</style>