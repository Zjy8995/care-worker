<template>
  <div style="height: auto">
    <div>
      <el-upload
        class="avatar-uploader"
        action="https://jsonplaceholder.typicode.com/posts/"
        :show-file-list="false"
        border
      >
        <el-image
          style="width: 100px; height: 100px"
          v-if="store.state.curOlderAvatar"
          :src="store.state.curOlderAvatar"
          fit="fill"
        />
        <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
      </el-upload>
    </div>
    <el-menu
      active-text-color="#fff"
      class="sidebar-container"
      :default-active="route.path"
      text-color="#000"
      router
    >
      <el-menu-item
        index="/care/detail-older"
        class="menu-item"
        :class="route.path == '/care/detail-older' ? 'active-menu-item' : ''"
      >
        <span>基础信息</span>
      </el-menu-item>
      <el-menu-item
        index="/care/detail-older/health"
        class="menu-item"
        :class="
          route.path == '/care/detail-older/health' ? 'active-menu-item' : ''
        "
      >
        <span>健康档案</span>
      </el-menu-item>
      <el-menu-item
        index="/care/detail-older/cargiver"
        class="menu-item"
        :class="
          route.path == '/care/detail-older/cargiver' ? 'active-menu-item' : ''
        "
      >
        <span>护工信息</span>
      </el-menu-item>
      <el-menu-item
        index="/care/detail-older/nursing"
        class="menu-item"
        :class="
          route.path == '/care/detail-older/nursing' ? 'active-menu-item' : ''
        "
      >
        <span>护理项目</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { Plus } from "@element-plus/icons-vue";
const route = useRoute();
let store = useStore();
</script>

<style scoped>
.sidebar-container {
  height: 100%;
  margin-top: 20px;
}

.sidebar-container:not(.el-menu--collapse) {
  width: 200px;
  min-height: 200px;
}

.menu-item {
  height: 30px;
  display: flex;
  justify-content: center;
  background-color: #eee;
  margin: 3px 0;
}

.active-menu-item {
  background-color: #5983fc;
}

.avatar-uploader ::v-deep .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  text-align: center;
}
</style>
