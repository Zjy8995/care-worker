<template>
  <el-card class="daytask__card">
    <ITable
      :tableData="taskList"
      v-bind="tableConfig"
      @add-btn="router.push('/care/day-task-update')"
    >
      <template #header>
        <div class="daytask__card-title">
          <span>任务分类：</span>
          <el-button
            :class="curSelect == '每日任务' ? '' : 'daytask__card-title-active'"
            type="text"
            @click="changeSelect('每日任务')"
            >每日任务</el-button
          >
          <el-button
            :class="curSelect == '已完成' ? '' : 'daytask__card-title-active'"
            type="text"
            @click="changeSelect('已完成')"
            >已完成</el-button
          >
          <el-button
            :class="curSelect == '未完成' ? '' : 'daytask__card-title-active'"
            type="text"
            @click="changeSelect('未完成')"
            >未完成</el-button
          >
        </div>
      </template>
      <template #status="scope">
        <el-tag v-if="scope.row.status == '未完成'" type="warning">{{
          scope.row.status
        }}</el-tag>
        <el-tag v-else>{{ scope.row.status }}</el-tag>
      </template>
      <template #edit="scope">
        <el-button
          type="text"
          size="small"
          :icon="Edit"
          circle
          @click="router.push({ path: '/care/day-task-update', query: {} })"
          >修改任务</el-button
        >
        <el-button
          type="text"
          size="small"
          :icon="Edit"
          circle
          :disabled="scope.row.status === '已完成' ? true : false"
          @click="scope.row.status = '已完成'"
          style="margin-left: 40px"
          >打卡</el-button
        >
        <el-button
          type="text"
          size="small"
          :icon="Delete"
          circle
          style="margin-left: 30px"
          >删除</el-button
        >
      </template>
    </ITable>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { tableConfig } from "./config";
import { Edit, Delete } from "@element-plus/icons-vue";
import ITable from "@/components/common/table/ITable.vue";
import { useRouter } from "vue-router";
const router = useRouter();
let curSelect = ref("每日任务");
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
  {
    bednumber: "01",
    olderName: "张三",
    sex: "男",
    time: "2022-03-02 6:30-7:20",
    name: "晨间护理",
    category: "日常工作",
    room: "14501",
    status: "已完成",
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
    status: "已完成",
    info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
  },
]);
let changeSelect = (name) => {
  curSelect.value = name;
  if (curSelect.value == "未完成") {
    taskList.value = [
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
    ];
  } else if (curSelect.value == "已完成") {
    taskList.value = [
      {
        bednumber: "01",
        olderName: "张三",
        sex: "男",
        time: "2022-03-02 6:30-7:20",
        name: "晨间护理",
        category: "日常工作",
        room: "14501",
        status: "已完成",
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
        status: "已完成",
        info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
      },
    ];
  } else {
    taskList.value = [
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
      {
        bednumber: "01",
        olderName: "张三",
        sex: "男",
        time: "2022-03-02 6:30-7:20",
        name: "晨间护理",
        category: "日常工作",
        room: "14501",
        status: "已完成",
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
        status: "已完成",
        info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
      },
    ];
  }
};
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

.daytask__card-title-active {
  color: #000;
}
</style>
