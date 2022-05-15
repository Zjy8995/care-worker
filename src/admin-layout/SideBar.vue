<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    :collapse="store.state.isCollapse"
    class="sidebar-container"
    :default-active="route.path"
    text-color="#fff"
    router
  >
    <el-menu-item style="padding: 0">
      <el-image :src="require('../assets/logo1.png')" fit="scale" />
    </el-menu-item>
    <el-menu-item index="/admin">
      <el-icon>
        <HomeFilled />
      </el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="/admin/care-manage">
      <el-icon>
        <Management />
      </el-icon>
      <span>护工管理</span>
    </el-menu-item>
    <el-menu-item index="/admin/older-manage">
      <el-icon>
        <Management />
      </el-icon>
      <span>老人管理</span>
    </el-menu-item>
    <el-menu-item index="/admin/sickbed-manage">
      <el-icon>
        <Management />
      </el-icon>
      <span>病床管理</span>
    </el-menu-item>
    <el-menu-item index="/admin/sickroom-manage">
      <el-icon>
        <Management />
      </el-icon>
      <span>病房管理</span>
    </el-menu-item>
    <el-menu-item index="/admin/nursing-manage">
      <el-icon>
        <List />
      </el-icon>
      <span>护理项目管理</span>
    </el-menu-item>
    <el-menu-item index="/admin/leave">
      <el-icon>
        <Position />
      </el-icon>
      <span>请假管理</span>
    </el-menu-item>
    <el-menu-item index="/admin/setting">
      <el-icon>
        <Setting />
      </el-icon>
      <span>个人中心</span>
    </el-menu-item>
  </el-menu>
</template>

<script setup>
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import {
  HomeFilled,
  Management,
  List,
  Position,
  Setting,
} from "@element-plus/icons-vue";
const store = useStore();
const route = useRoute();
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
