<template>
    <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        :collapse="store.state.isCollapse"
        class="sidebar-container"
        :default-active="route.path"
        text-color="#fff"
        router>
        <el-menu-item index="/care">
            <el-icon>
                <HomeFilled />
            </el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-menu-item index="/care/manage">
            <el-icon>
                <Management />
            </el-icon>
            <span>管理老人</span>
        </el-menu-item>
        <el-menu-item index="/care/day-task">
            <el-icon>
                <List />
            </el-icon>
            <span>每日任务</span>
        </el-menu-item>
        <el-menu-item index="/care/leave">
            <el-icon>
                <Position />
            </el-icon>
            <span>请假</span>
        </el-menu-item>
        <el-menu-item index="/care/setting">
            <el-icon>
                <Setting />
            </el-icon>
            <span>个人中心</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup>
    import { useStore } from 'vuex';
    import { useRoute } from 'vue-router';
    import { HomeFilled, Management, List, Position, Setting } from '@element-plus/icons-vue'
    const store = useStore()
    const route = useRoute()
</script>

<style>
    .sidebar-container {
        height: 100%;
    }

    .sidebar-container:not(.el-menu--collapse) {
        width: 200px;
        min-height: 400px;
    }
</style>