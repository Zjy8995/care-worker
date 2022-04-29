<template>
  <el-card class="day-task-update__card">
    <div class="day-task-update__card-title">任务信息</div>
    <el-popover v-model="cronPopover">
      <vueCron @change="onChangeCron" @close="cronPopover = false"></vueCron>
      <el-input
        slot="reference"
        @click="cronPopover = true"
        v-model="xxx"
        placeholder="请输入定时策略"
        size="small"
      ></el-input>
    </el-popover>
    <el-form :model="taskForm" label-width="120px">
      <el-row>
        <el-col :span="6">
          <el-form-item label="Id" v-if="route.query.id">
            <el-input v-model="taskForm.id" disabled />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="工号" v-if="route.query.id">
            <el-input v-model="taskForm.userId" disabled />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="项目名称">
            <el-input v-model="taskForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="所属老人">
            <el-input v-model="taskForm.olderName" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="项目简介">
            <el-input v-model="taskForm.info" type="textarea" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="时间分配">
            <el-input v-model="taskForm.time" />
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="项目分类">
            <el-input v-model="taskForm.category" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="完成状态">
            <el-input v-model="taskForm.status" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="router.push('/care/day-task')"
          >返回</el-button
        >
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";

import axios from "axios";

const route = useRoute();
const router = useRouter();
let cronPopover = ref(false);
let xxx = ref("");
let onChangeCron = () => {};
onMounted(() => {
  if (route.query.id) {
    initCareInfo();
  }
});
let initCareInfo = () => {
  axios.get(`/caregiver?caregiverId=${route.query.id}`).then((res) => {
    taskForm.value = res.data.data;
  });
};
const taskForm = ref({
  id: null,
  name: "",
  olderName: "",
  info: "",
  time: "",
  category: "",
  statu: "",
});

let onSubmit = () => {
  if (!route.query.id) {
    delete taskForm.value.id;
    delete taskForm.value.userId;
  }
  axios.post("/caregivers", taskForm.value).then((res) => {
    ElMessage({
      message: res.data.msg,
      type: res.data.code === 1000 ? "success" : "error",
    });
    if (res.data.code === 1000) {
      router.push("/care/day-task");
    }
  });
};
</script>

<style>
.day-task-update__card {
  min-height: 80vh;
}

.day-task-update__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
  margin-left: -20px;
}

.day-task-update__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}

.avatar-uploader .el-upload {
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
  width: 178px;
  height: 178px;
  text-align: center;
}

.el-form-item__label {
  line-height: 40px;
}
</style>
