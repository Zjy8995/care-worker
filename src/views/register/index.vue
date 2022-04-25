<template>
    <div class="register-container">
        <div class="register-card">
            <h3 class="register-title">欢迎注册</h3>
            <el-form status-icon :model="registerForm" :rules="rules" ref="ruleForm" class="login-form">
                <el-form-item prop="name">
                    <el-input v-model="registerForm.name" placeholder="用户名" @keyup.enter="login" />
                </el-form-item>
                <el-form-item prop="phone">
                    <el-input v-model="registerForm.phone" placeholder="手机号" @keyup.enter="login" />
                </el-form-item>
                <el-form-item prop="code">
                    <el-input
                        v-model="registerForm.code"
                        placeholder="输入短信验证码"
                        @keyup.enter="register">
                        <template #append>
                            <el-button
                                type="text"
                                style="width: 110px"
                                @click="getSms">
                                获取短信验证码
                            </el-button>
                        </template>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="registerForm.password" show-password placeholder="密码" @keyup.enter="login" />
                </el-form-item>
                <el-form-item prop="confirmPsd">
                    <el-input v-model="registerForm.confirmPsd" show-password placeholder="确认密码" @keyup.enter="login" />
                </el-form-item>
            </el-form>
            <div class="login-and-register-btn">
                <el-button
                    type="primary"
                    @click="register"
                    class="register-btn"
                    size="large">
                    注册
                </el-button>
                <el-button
                    type="primary"
                    @click="router.push('login')"
                    class="login-btn"
                    size="large">
                    登录
                </el-button>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { reactive, ref } from 'vue'
    import axios from 'axios'
    import { ElMessage } from 'element-plus'
    import router from '@/router';
    const registerForm = reactive({
      name: '',
      password: '',
      confirmPsd: '',
      phone: '',
      code: '',
    })

    let validatePhone = (rule, val, callback) => {
        if (/^1[0-9]{10}$/.test(val)) {
            callback()
        } else {
            callback(new Error('请输入正确的手机号'))
        }
    }

    let validateConfirmPsd = (rule, val, callback) => {
        if (val === registerForm.password) {
            callback()
        } else {
            callback(new Error('两次密码不一致'))
        }
    }

    const rules = reactive({
      name: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
      phone: [
        { required: true, message: '手机号不能为空', trigger: 'blur' },
        {validator: validatePhone, trigger: 'blur'}
      ],
      code: [{ required: true, message: '验证码不能为空', trigger: 'blur' }],
      password: [{ required: true, message: '密码不能为空', trigger: 'blur' }],
      confirmPsd: [
          { required: true, message: '确认密码不能为空', trigger: 'blur' },
          { validator: validateConfirmPsd, trigger: 'blur' }
      ],
    })

    const ruleForm = ref()

    const getSms = () => {
        if (/^1[0-9]{10}$/.test(registerForm.phone)) {
            axios.get(`/sendSms?phone=${registerForm.phone}&type=login`).then(() => {
                ElMessage({
                    message: '短信验证码发送成功！',
                    type: 'success',
                })
            })
        } else {
            ElMessage({
                message: '请输入正确的手机号！',
                type: 'error',
            })
        }
    }

    const register = () => {
      ruleForm.value?.validate((valid) => {
        if (valid) {
            delete registerForm.confirmPsd
            axios.post('/register', registerForm).then(res => {
                if (res.data.code === 1000) {
                    ElMessage({
                        message: '注册成功！',
                        type: 'success',
                    })
                    router.push('/login')
                }
            })
        }
      })
    }
</script>

<style>
    .register-container {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: url(https://pic3.zhimg.com/80/v2-73c5ff9597484a1bdb4d42fe260c4aa9_r.jpg) center center / cover no-repeat;
    }

    .register-card {
        width: 350px;
        height: 350px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #fff;
        padding: 10px 20px;
    }

    .register-title {
        color: #303133;
        font-weight: bold;
        margin:  10px;
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