<template>
  <el-container class="layout__index">
    <el-aside width="auto">
      <side-bar />
    </el-aside>
    <el-main style="background-color: #fefef8">
      <router-view />
    </el-main>
  </el-container>
</template>

<script setup>
import SideBar from "./SideBar.vue";
</script>

<style>
.layout__index {
  height: 100%;
  display: flex;
}
</style>
