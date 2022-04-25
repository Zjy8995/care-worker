<template>
    <el-card class="sickroom-manage__card">
        <ITable
            :tableData="roomList"
            v-bind="tableConfig"
            :page="page"
            :pageCount="roomCount"
            @update:page="changePage"
            @selection="getSelection"
            @del-btn="delRoom(selectedData)"
            @add-btn="openAddDialog"
            @expand-change="handleExpand">
            <template #header>
                <div class="sickroom-manage__card-title">
                    病房管理
                </div>
            </template>
            <template #expand="scope">
                <h3>床位居住情况</h3>
                <el-descriptions
                    v-for="(item, index) in expandList"
                    style="margin: 20px 40px;"
                    border>
                    <el-descriptions-item width="100px">
                        <template #label>
                            {{'床位号' + item.name}}
                        </template>
                        {{item.olderName || '无人居住'}}
                    </el-descriptions-item>
                </el-descriptions>
            </template>
            <template #caregiverName="scope">
                <el-tag v-if="scope.row.caregiverName">{{ scope.row.caregiverName }}</el-tag>
                <el-tag v-else type="info"> 暂未分配 </el-tag>
            </template>
            <template #level="scope">
                <el-rate :model-value="scope.row.level" disabled :max="3"></el-rate>
            </template>
            <template #edit="scope">
                <el-button type="primary" size="small" :icon="Edit" circle @click="openUpdateDialog(scope.row)" />
                <el-popconfirm
                    confirm-button-text="是"
                    cancel-button-text="否"
                    icon-color="red"
                    title="确认是否删除?"
                    @confirm="delRoom([scope.row.id])">
                    <template #reference>
                        <el-button type="danger" size="small" :icon="Delete" circle />
                    </template>
                </el-popconfirm>
            </template>
        </ITable>
        <el-dialog
            v-model="updateDialogVisible"
            :title="judgeAddUpdate ? '新增病房' : '修改病房信息'"
            width="30%">
            <el-form :model="roomForm" label-width="80px">
                <el-form-item label="病房Id" v-if="!judgeAddUpdate">
                    <el-input v-model="roomForm.id" />
                </el-form-item>
                <el-form-item label="病房地址">
                    <el-input v-model="roomForm.addr" />
                </el-form-item>
                <el-form-item label="护工姓名">
                    <el-input v-model="roomForm.caregiverName" />
                </el-form-item>
                <el-form-item label="护理级别">
                    <el-input v-model="roomForm.level" />
                </el-form-item>
                <el-form-item label="病床数量">
                    <el-input v-model="roomForm.num" />
                </el-form-item>
            </el-form>
            <template #footer>
            <span class="dialog-footer">
                <el-button @click="updateDialogVisible = false">取消</el-button>
                <el-button type="primary" @click="handleUpdateRoom">确定</el-button>
            </span>
            </template>
        </el-dialog>
    </el-card>
</template>

<script setup>
    import { ref, onMounted } from 'vue'
    import { tableConfig } from './config'
    import { Edit, Delete } from '@element-plus/icons-vue'
    import ITable from '@/components/common/table/ITable.vue'
    import axios from 'axios'
    import { ElMessage } from 'element-plus'
    let roomList = ref([])
    onMounted(() => {
        initRoomList()
    })

    let expandList = ref([])
    let handleExpand = (row) => {
        axios.get(`/listBedsByRoomId?roomId=${row.id}`).then(res => {
            expandList.value = res.data.data
        })
    }

    let page = ref({
        current: 1,
        size: 10
    })
    let roomCount = ref(0)
    let initRoomList = () => {
        axios.get('/rooms', {
            params: {
                ...page.value
            }
        }).then(res => {
            roomList.value = res.data.data.recordList;
            roomCount.value = res.data.data.count;
        })
    }

    let changePage = (newPage) => {
        page.value.current = newPage.currentPage;
        page.value.size = newPage.size;
        initRoomList()
    }

    let selectedData = ref([])
    let getSelection = (select) => {
        selectedData.value = []
        select.map(item => {
            selectedData.value.push(item.id)
        })
    }

    let delRoom = (list) => {
        axios.delete('/rooms', {
            data: list
        }).then(res => {
            if (res.data.code === 1000) {
                ElMessage({
                    message: res.data.msg,
                    type: 'success'
                })
                initRoomList()
            }
        })
    }

    let updateDialogVisible = ref(false)

    // true为新增
    let judgeAddUpdate = ref(false)
    let roomForm = ref({
        id: 0,
        addr: '',
        caregiverName: null,
        level: null,
        num: null
    })

    let openAddDialog = () => {
        updateDialogVisible.value = true;
        judgeAddUpdate.value = true;
        delete roomForm.value.id;
    }

    let openUpdateDialog = (row) => {
        updateDialogVisible.value = true;
        judgeAddUpdate.value = false;
        roomForm.value = { ...row };
    }

    let handleUpdateRoom = () => {
        axios.post('/rooms', roomForm.value).then(res => {
            ElMessage({
                message: res.data.msg,
                type: 'success'
            })
            updateDialogVisible.value = false;
            initRoomList()
        })
    }
</script>

<style>
    .sickroom-manage__card {
        min-height: 80vh;
    }

    .sickroom-manage__card-title {
        font-size: 16px;
        font-weight: 700;
        color: #202a34;
        text-align: left;
    }

    .sickroom-manage__card-title:before {
        content: '';
        width: 24px;
        height: 16px;
        border-left: 3px solid #0081ff;
        margin-right: 20px;
    }
</style>
