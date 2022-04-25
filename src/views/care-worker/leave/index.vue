<template>
    <el-card class="leave__card">
        <ITable :tableData="leaveList" v-bind="tableConfig">
            <template #header>
                <div class="leave__card-title">
                    请假管理
                </div>
            </template>
            <template #edit>
                <el-button type="primary" size="small" :icon="Edit" circle />
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
    let leaveList = ref([
        {
            date: '2016-05-03',
            name: 'Tom',
            address: 'No. 189, Grove St, Los Angeles',
        }
    ])
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
    }

    .leave__card-title:before {
        content: '';
        width: 24px;
        height: 16px;
        border-left: 3px solid #0081ff;
        margin-right: 20px;
    }
</style>