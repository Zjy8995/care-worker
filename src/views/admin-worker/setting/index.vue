<template>
  <el-card class="setting__card">
    <div class="setting__card-title">个人中心</div>
    <el-form :model="userForm" label-width="120px">
      <el-row>
        <el-col :span="7">
          <el-form-item label="用户名">
            <el-input
              v-model="store.state.userInfo.name"
              disabled
            /> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="账号">
            <el-input v-model="userForm.phone" disabled /> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="旧密码">
            <el-input v-model="userForm.oldPassword" /> </el-form-item
        ></el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="新密码">
            <el-input v-model="userForm.newPassword" /> </el-form-item
        ></el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交修改</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup>
import { ref, onMounted, reactive } from "vue";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import axios from "axios";
let store = useStore();
const userForm = reactive({
  phone: store.state.userInfo.phone,
  oldPassword: "",
  newPassword: "",
});
let onSubmit = () => {
  axios.post("/password", userForm).then((res) => {
    ElMessage({
      message: res.data.msg,
      type: res.data.code === 1000 ? "success" : "error",
    });
  });
};
</script>

<style>
.setting__card {
  min-height: 80vh;
}

.setting__card-title {
  margin-left: -20px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
}

.setting__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}
</style>
