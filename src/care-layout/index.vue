<template>
  <el-container class="layout__index">
    <el-aside width="auto">
      <side-bar />
    </el-aside>
    <el-container style="flex: 1">
      <el-header>
        <NavBar />
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script setup>
import SideBar from "./SideBar.vue";
import NavBar from "./NavBar.vue";
</script>

<style>
.layout__index {
  height: 100%;
  display: flex;
}
</style>
