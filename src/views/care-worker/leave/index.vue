<template>
  <el-card class="leave__card">
    <div class="leave__card-title">请假申请</div>
    <el-form :model="userForm" label-width="120px">
      <el-row>
        <el-col :span="8">
          <el-form-item label="申请人ID">
            <el-input v-model="userForm.userId" disabled />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="请假原因">
            <el-input v-model="userForm.reason" type="textarea" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="请假时长">
            <el-input v-model="userForm.time" placeholder="单位为天" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="8">
          <el-form-item label="请假日期">
            <el-date-picker
              v-model="userForm.date"
              type="daterange"
              range-separator="-"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              value-format="YYYY-MM-DD"
              @change="handleDate"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交申请</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";
import axios from "axios";
const userForm = ref({
  userId: 1,
  reason: "",
  time: "",
  date: "",
  begin: "",
  end: "",
});
let handleDate = (date) => {
  userForm.value.begin = date[0];
  userForm.value.end = date[1];
};
let onSubmit = () => {
  axios
    .post("/leavings", {
      userId: userForm.value.userId,
      reason: userForm.value.reason,
      time: userForm.value.time,
      begin: userForm.value.begin,
      end: userForm.value.end,
    })
    .then((res) => {
      ElMessage({
        message: res.data.message,
        type: res.data.code === 1000 ? "success" : "error",
      });
    });
};
</script>

<style>
.leave__card {
  min-height: 80vh;
}

.leave__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
  margin-left: -20px;
  margin-bottom: 20px;
}

.leave__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}
</style>
