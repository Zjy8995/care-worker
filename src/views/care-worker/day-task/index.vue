<template>
    <el-card class="daytask__card">
        <ITable :tableData="taskList" v-bind="tableConfig">
            <template #header>
                <div class="daytask__card-title">
                    任务管理
                </div>
            </template>
            <template #edit>
                <el-button type="primary" size="small" :icon="Edit" circle @click="router.push({ path: '/care/day-task-update', query: {} })" />
                <el-button type="danger" size="small" :icon="Delete" circle />
            </template>
        </ITable>
    </el-card>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { tableConfig } from './config'
    import { Edit, Delete } from '@element-plus/icons-vue'
    import ITable from '@/components/common/table/ITable.vue'
    import { useRouter } from 'vue-router'
    const router = useRouter()
    let taskList = ref([
        {
          bednumber: "01",
          olderName: "张三",
          sex: "男",
          time: "2022-03-02 6:30-7:20",
          name: "晨间护理",
          room: "14501",
          status: "未完成",
          info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
        },
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        }
    ])
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
        content: '';
        width: 24px;
        height: 16px;
        border-left: 3px solid #0081ff;
        margin-right: 20px;
    }
</style>
