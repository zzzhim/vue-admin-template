<template>
    <el-main class="main">
        <transition name="fade-transform" mode="out-in">
            <router-view/>
        </transition>
    </el-main>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
    .main {
        padding: 0px;
    }
</style>