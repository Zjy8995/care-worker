<template>
  <div class="login-container">
    <div class="login-card">
      <h2 style="margin: 10px 0">欢迎登录护工管理系统</h2>
      <el-tabs v-model="tabName">
        <el-tab-pane label="免密码登录" name="nopsd">
          <el-form
            status-icon
            :model="loginForm"
            :rules="rules"
            ref="ruleForm"
            class="login-form"
          >
            <el-form-item prop="phone">
              <el-input
                v-model="loginForm.phone"
                placeholder="输入手机号"
                @keyup.enter="login"
              />
            </el-form-item>
            <el-form-item prop="code">
              <el-input
                v-model="loginForm.code"
                show-password
                placeholder="输入短信验证码"
                @keyup.enter="login"
              >
                <template #append>
                  <el-button type="text" style="width: 110px" @click="getSms">
                    获取短信验证码
                  </el-button>
                </template>
              </el-input>
            </el-form-item>
          </el-form>
          <div class="login-and-register-btn">
            <el-button
              type="primary"
              @click="login"
              class="login-btn"
              size="large"
            >
              登录
            </el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="密码登录" name="psd">
          <el-form
            status-icon
            :model="loginForm"
            :rules="rules2"
            ref="ruleForm2"
            class="login-form"
          >
            <el-form-item prop="phone">
              <el-input
                v-model="loginForm.phone"
                placeholder="输入手机号"
                @keyup.enter="login"
              />
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                v-model="loginForm.password"
                show-password
                placeholder="密码"
                @keyup.enter="login"
              />
            </el-form-item>
          </el-form>
          <div class="login-and-register-btn">
            <el-button
              type="primary"
              @click="login"
              class="login-btn"
              size="large"
            >
              登录
            </el-button>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import axios from "axios";
import store from "@/store";

export default defineComponent({
  setup() {
    const router = useRouter();
    const tabName = ref("nopsd");
    const loginForm = reactive({
      phone: "15290769251",
      password: "123456",
      code: "",
    });

    let validatePhone = (rule, val, callback) => {
      if (/^1[0-9]{10}$/.test(val)) {
        callback();
      } else {
        callback(new Error("请输入正确的手机号"));
      }
    };

    const rules = reactive({
      phone: [
        { required: true, message: "手机号不能为空", trigger: "blur" },
        { validator: validatePhone, trigger: "blur" },
      ],
      code: [
        { required: true, message: "短信验证码不能为空", trigger: "blur" },
      ],
    });

    const rules2 = reactive({
      phone: [
        { required: true, message: "用户名不能为空", trigger: "blur" },
        { validator: validatePhone, trigger: "blur" },
      ],
      password: [{ required: true, message: "密码不能为空", trigger: "blur" }],
    });
    const ruleForm = ref();
    const ruleForm2 = ref();

    const register = () => {
      router.push("/register");
    };

    const getSms = () => {
      if (/^1[0-9]{10}$/.test(loginForm.phone)) {
        axios.get(`/sendSms?phone=${loginForm.phone}&type=login`).then(() => {
          ElMessage({
            message: "短信验证码发送成功！",
            type: "success",
          });
        });
      } else {
        ElMessage({
          message: "请输入正确的手机号！",
          type: "error",
        });
      }
    };

    const login = () => {
      if (tabName.value == "nopsd") {
        ruleForm.value?.validate((valid) => {
          if (valid) {
            axios
              .post("/login", {
                phone: loginForm.phone,
                code: loginForm.code,
              })
              .then((res) => {
                if (res.data.code === 1001) {
                  ElMessage({
                    message: res.data.msg,
                    type: "error",
                  });
                } else {
                  ElMessage({
                    message: "登录成功",
                    type: "success",
                  });
                  store.commit("setUserInfo", res.data.data);
                  window.localStorage.setItem(
                    "user",
                    JSON.stringify(res.data.data)
                  );
                  if (res.data.data.role === "admin") {
                    router.push("/admin");
                  } else {
                    router.push("/care");
                  }
                }
              });
          }
        });
      } else {
        ruleForm2.value?.validate((valid) => {
          if (valid) {
            axios
              .post("/login", {
                phone: loginForm.phone,
                password: loginForm.password,
              })
              .then((res) => {
                if (res.data.code === 1001) {
                  ElMessage({
                    message: res.data.msg,
                    type: "error",
                  });
                  router.push("/register");
                } else {
                  store.commit("setUserInfo", res.data.data);
                  window.localStorage.setItem(
                    "user",
                    JSON.stringify(res.data.data)
                  );
                  if (res.data.data.role === "admin") {
                    router.push("/admin");
                  } else {
                    router.push("/care");
                  }
                }
              });
          }
        });
      }
    };

    return {
      loginForm,
      rules,
      rules2,
      tabName,
      ruleForm,
      ruleForm2,
      getSms,
      register,
      login,
    };
  },
});
</script>

<style>
.login-container {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: url(https://pic3.zhimg.com/80/v2-73c5ff9597484a1bdb4d42fe260c4aa9_r.jpg)
    center center / cover no-repeat;
}

.login-card {
  width: 350px;
  height: 350px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  padding: 10px 20px;
}

.login-title {
  color: #303133;
  font-weight: bold;
  font-size: 1rem;
}

.login-form {
  margin-top: 1.2rem;
}

.login-and-register-btn {
  display: flex;
  justify-content: space-between;
}

.login-btn,
.register-btn {
  flex: 1;
}
</style>
