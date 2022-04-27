<template>
  <el-card class="nursing-manage__card">
    <div class="nursing-manage__card-title">护理项目</div>
    <div class="nursing-manage__card-top-btn">
      <div>
        <el-button type="primary" size="small" @click="addBtn" :icon="Plus"
          >新增</el-button
        >
        <el-button type="danger" size="small" :icon="Delete"
          >批量删除</el-button
        >
      </div>
    </div>
    <el-table style="width: 100%" :data="tableData" row-key="id">
      <el-table-column></el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Plus, Edit, Delete } from "@element-plus/icons-vue";
import axios from "axios";
let taskList = ref([]);
let page = ref({
  current: 1,
  size: 10,
});
onMounted(() => {
  axios
    .get("/nursingProjects", {
      params: { ...page.value },
    })
    .then((res) => {
      console.log(res);
    });
});
</script>

<style>
.nursing-manage__card {
  min-height: 80vh;
}

.nursing-manage__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
  margin-left: -20px;
}

.nursing-manage__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}

.nursing-manage__card-top-btn {
  margin-top: 20px;
  text-align: left;
}
</style>
