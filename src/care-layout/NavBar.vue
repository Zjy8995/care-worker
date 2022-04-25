<template>
    <el-card class="navbar__card">
        <div class="navbar__card-main">
            <div @click="handleCollapse">
                <el-icon>
                    <Fold v-if="!store.state.isCollapse" />
                    <Expand v-else />
                </el-icon>
                <span style="font-size: 12px;vertical-align: top;" v-if="!store.state.isCollapse">收缩</span>
                <span style="font-size: 12px;vertical-align: top;" v-else>展开</span>
            </div>
            <el-dropdown>
                <el-avatar size="default" fit="fill" :src="store.state.avatar" />
                <template #dropdown>
                <el-dropdown-menu>
                    <el-dropdown-item @click="jumpSetting">个人中心</el-dropdown-item>
                    <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </el-card>
</template>

<script setup>
    import { useStore } from 'vuex'
    import { useRouter } from 'vue-router';
    import { Fold, Expand } from '@element-plus/icons-vue'
    let store = useStore()
    let router = useRouter()
    let handleCollapse = () => {
        store.commit('changeCollapse')
    }

    let jumpSetting = () => {
        router.push('/care/setting')
    }

    let logout = () => {
        store.commit('removeUserInfo')
        window.localStorage.removeItem('user')
        router.push('/login')
    }
</script>

<style scoped>
    .navbar__card {
        margin-top: 5px;
    }

    .navbar__card ::v-deep .el-card__body {
        padding: 5px;
    }

    .navbar__card-main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 8px;
    }
</style>