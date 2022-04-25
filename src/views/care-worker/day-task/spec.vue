<template>
  <el-card class="daytask__card">
    <el-tabs v-model="activeName">
      <el-tab-pane label="每日任务" name="每日任务">
        <ITable
          :tableData="taskList"
          v-bind="tableConfig"
          @add-btn="router.push('/care/day-task-update')"
        >
          <template #header>
            <div class="daytask__card-title"></div>
          </template>
          <template #edit>
            <el-button
              type="primary"
              size="small"
              :icon="Edit"
              circle
              @click="router.push({ path: '/care/day-task-update', query: {} })"
            />
            <el-button type="danger" size="small" :icon="Delete" circle />
          </template>
        </ITable>
      </el-tab-pane>
      <el-tab-pane label="已完成" name="second">
        <ITable
          :tableData="taskList"
          v-bind="tableConfig"
          @add-btn="router.push('/care/day-task-update')"
        >
          <template #header>
            <div class="daytask__card-title"></div>
          </template>
          <template #search> </template>
          <template #edit>
            <el-button
              type="primary"
              size="small"
              :icon="Edit"
              circle
              @click="router.push({ path: '/care/day-task-update', query: {} })"
            />
            <el-button type="danger" size="small" :icon="Delete" circle />
          </template>
        </ITable>
      </el-tab-pane>
      <el-tab-pane label="未完成" name="third">
        <ITable
          :tableData="taskList"
          v-bind="tableConfig"
          @add-btn="router.push('/care/day-task-update')"
        >
          <template #header>
            <div class="daytask__card-title"></div>
          </template>
          <template #search> </template>
          <template #edit>
            <el-button
              type="primary"
              size="small"
              :icon="Edit"
              circle
              @click="router.push({ path: '/care/day-task-update', query: {} })"
            />
            <el-button type="danger" size="small" :icon="Delete" circle />
          </template>
        </ITable>
      </el-tab-pane>
    </el-tabs>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { tableConfig } from "./config";
import { Edit, Delete } from "@element-plus/icons-vue";
import ITable from "@/components/common/table/ITable.vue";
import { useRouter } from "vue-router";
const router = useRouter();
let activeName = ref("每日任务");
let taskList = ref([
  {
    bednumber: "01",
    olderName: "张三",
    sex: "男",
    time: "2022-03-02 6:30-7:20",
    name: "晨间护理",
    category: "日常工作",
    room: "14501",
    status: "未完成",
    info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
  },
  {
    bednumber: "01",
    olderName: "张三",
    sex: "男",
    time: "2022-03-02 6:30-7:20",
    name: "晨间护理",
    category: "日常工作",
    room: "14501",
    status: "未完成",
    info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
  },
  {
    bednumber: "01",
    olderName: "张三",
    sex: "男",
    time: "2022-03-02 6:30-7:20",
    name: "晨间护理",
    category: "日常工作",
    room: "14501",
    status: "未完成",
    info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
  },
  {
    bednumber: "01",
    olderName: "张三",
    sex: "男",
    time: "2022-03-02 6:30-7:20",
    name: "晨间护理",
    category: "日常工作",
    room: "14501",
    status: "未完成",
    info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
  },
]);
</script>

<style>
.daytask__card {
  min-height: 80vh;
}

.daytask__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
}

.daytask__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}
</style>
