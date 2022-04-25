<template>
    <el-card class="setting__card">
        <div class="setting__card-title">
            个人中心
        </div>
        <el-form :model="userForm" label-width="120px">
            <el-form-item label="Activity name">
                <el-input v-model="userForm.name" />
            </el-form-item>
            <el-form-item label="Activity zone">
                <el-select v-model="userForm.region" placeholder="please select your zone">
                    <el-option label="Zone one" value="shanghai" />
                    <el-option label="Zone two" value="beijing" />
                </el-select>
            </el-form-item>
            <el-form-item label="Instant delivery">
                <el-switch v-model="userForm.delivery" />
            </el-form-item>
            <el-form-item label="Activity type">
                <el-checkbox-group v-model="userForm.type">
                    <el-checkbox label="Online activities" name="type" />
                    <el-checkbox label="Promotion activities" name="type" />
                    <el-checkbox label="Offline activities" name="type" />
                    <el-checkbox label="Simple brand exposure" name="type" />
                </el-checkbox-group>
            </el-form-item>
            <el-form-item label="Resources">
                <el-radio-group v-model="userForm.resource">
                    <el-radio label="Sponsor" />
                    <el-radio label="Venue" />
                </el-radio-group>
            </el-form-item>
            <el-form-item label="Activity form">
                <el-input v-model="userForm.desc" type="textarea" />
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">保存修改</el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup>
    import { ref, onMounted, reactive } from 'vue'
    const userForm = reactive({
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: '',
    })
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
        content: '';
        width: 24px;
        height: 16px;
        border-left: 3px solid #0081ff;
        margin-right: 20px;
    }
</style>