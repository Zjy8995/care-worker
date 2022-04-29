<template>
  <el-card class="care-manage-update__card">
    <div class="care-manage-update__card-title">
      {{ pageTitle }}
    </div>
    <el-form :model="careForm" label-width="120px">
      <el-form-item label="证件照">
        <el-upload
          class="avatar-uploader"
          action="https://jsonplaceholder.typicode.com/posts/"
          :show-file-list="false"
        >
          <el-image
            v-if="careForm.avatar"
            style="width: 100px; height: 100px"
            src="https://images.weserv.nl/?url=https://img2.woyaogexing.com/2022/04/19/bd415ba23fd041e28cf4add545aa7eb5!400x400.jpeg"
            fit="fill"
          />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-row>
        <el-col :span="6">
          <el-form-item label="Id" v-if="route.query.id">
            <el-input v-model="careForm.id" disabled />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <el-form-item label="工号" v-if="route.query.id">
            <el-input v-model="careForm.userId" disabled />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="姓名">
            <el-input v-model="careForm.name" />
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="性别" style="line-height: 40px">
            <el-radio-group v-model="careForm.sex">
              <el-radio label="男" size="large">男</el-radio>
              <el-radio label="女" size="large">女</el-radio>
              <el-radio label="保密" size="large">保密</el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="6">
          <el-form-item label="出生日期">
            <el-date-picker
              v-model="careForm.birthday"
              type="date"
              placeholder="请选择一个日期"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="邮箱">
            <el-input v-model="careForm.email" />
          </el-form-item>
        </el-col>
        <el-col :span="7">
          <el-form-item label="护理等级">
            <el-input v-model="careForm.level" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="住址">
            <el-input v-model="careForm.address" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="身份证号">
            <el-input v-model="careForm.idCard" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="14">
          <el-form-item label="简介">
            <el-input v-model="careForm.info" type="textarea" />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="router.push('/admin/care-manage')"
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

let pageTitle = ref("");
onMounted(() => {
  if (route.query.id) {
    pageTitle.value = "修改护工信息";
    initCareInfo();
  } else {
    pageTitle.value = "添加护工";
  }
});
let initCareInfo = () => {
  axios.get(`/caregiver?caregiverId=${route.query.id}`).then((res) => {
    careForm.value = res.data.data;
  });
};
const careForm = ref({
  id: null,
  name: "",
  sex: "",
  birthday: "",
  avatar: "",
  address: "",
  email: "",
  idCard: "",
  info: "",
  level: "",
  userId: null,
});

let onSubmit = () => {
  if (!route.query.id) {
    delete careForm.value.id;
    delete careForm.value.userId;
  }
  axios.post("/caregivers", careForm.value).then((res) => {
    ElMessage({
      message: res.data.msg,
      type: res.data.code === 1000 ? "success" : "error",
    });
    if (res.data.code === 1000) {
      router.push("/admin/care-manage");
    }
  });
};
</script>

<style>
.care-manage-update__card {
  min-height: 80vh;
}

.care-manage-update__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
  margin-left: -20px;
}

.care-manage-update__card-title:before {
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
