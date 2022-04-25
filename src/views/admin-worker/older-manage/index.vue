<template>
    <el-card class="older-manage__card">
        <ITable
            :tableData="roomList"
            v-bind="tableConfig"
            :page="page"
            :pageCount="roomCount"
            @update:page="changePage"
            @selection="getSelection"
            @del-btn="delRoom(selectedData)"
            @add-btn="openAddDialog">
            <template #header>
                <div class="older-manage__card-title">
                    老人管理
                </div>
            </template>
            <template #createDate="scope">
                {{ scope.row.createDate }}
            </template>
            <template #updateDate="scope">
                {{ scope.row.updateDate }}
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
            :title="judgeAddUpdate ? '新增老人信息' : '修改老人信息'"
            width="30%"
            fullscreen>
            <el-form :model="olderForm" label-width="80px">
                <el-form-item label="Id" v-if="!judgeAddUpdate">
                    <el-input v-model="olderForm.id" />
                </el-form-item>
                <el-form-item label="姓名">
                    <el-input v-model="olderForm.name" />
                </el-form-item>
                <el-form-item label="民族">
                    <el-input v-model="olderForm.national" />
                </el-form-item>
                <el-form-item label="性别">
                    <el-input v-model="olderForm.sex" />
                </el-form-item>
                <el-form-item label="房间ID">
                    <el-input v-model="olderForm.roomId" />
                </el-form-item>
                <el-form-item label="头像地址">
                    <el-input v-model="olderForm.avatar" />
                </el-form-item>
                <el-form-item label="床位ID">
                    <el-input v-model="olderForm.bedId" />
                </el-form-item>
                <el-form-item label="入院前居住情况">
                    <el-input v-model="olderForm.beforeLivingSituation" />
                </el-form-item>
                <el-form-item label="户籍地">
                    <el-input v-model="olderForm.birthRegistration" />
                </el-form-item>
                <el-form-item label="出生日期">
                    <el-input v-model="olderForm.birthday" />
                </el-form-item>
                <el-form-item label="护理等级">
                    <el-input v-model="olderForm.careLevel" />
                </el-form-item>
                <el-form-item label="子女人数">
                    <el-input v-model="olderForm.childNum" />
                </el-form-item>
                <el-form-item label="入院原因">
                    <el-input v-model="olderForm.hospitalReason" />
                </el-form-item>
                <el-form-item label="入院方式">
                    <el-input v-model="olderForm.hospitalWay" />
                </el-form-item>
                <el-form-item label="身份证号">
                    <el-input v-model="olderForm.idCard" />
                </el-form-item>
                <el-form-item label="简介">
                    <el-input v-model="olderForm.info" />
                </el-form-item>
                <el-form-item label="医保">
                    <el-input v-model="olderForm.medicalInsurance" />
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
        initOlderList()
    })

    let page = ref({
        current: 1,
        size: 10
    })
    let roomCount = ref(0)
    let initOlderList = () => {
        axios.get('/olders', {
            params: {
                ...page.value
            }
        }).then(res => {
            console.log(res);
            roomList.value = res.data.data.recordList;
            roomCount.value = res.data.data.count;
        })
    }

    let changePage = (newPage) => {
        page.value.current = newPage.currentPage;
        page.value.size = newPage.size;
        initOlderList()
    }

    let selectedData = ref([])
    let getSelection = (select) => {
        selectedData.value = []
        select.map(item => {
            selectedData.value.push(item.id)
        })
    }

    let delRoom = (list) => {
        axios.delete('/olders', {
            data: list
        }).then(res => {
            if (res.data.code === 1000) {
                ElMessage({
                    message: res.data.msg,
                    type: 'success'
                })
                initOlderList()
            }
        })
    }

    let updateDialogVisible = ref(false)

    // true为新增
    let judgeAddUpdate = ref(false)
    let olderForm = ref({
        id: null,
        avatar: "",
        bedId: null,
        beforeLivingSituation: "",
        birthRegistration: "",
        birthday: "",
        careLevel: null,
        childNum: null,
        hospitalReason: "",
        hospitalWay: "",
        idCard: "",
        info: "",
        medicalInsurance: "",
        name: "",
        national: "",
        roomId: null,
        sex: "",
    })

    let openAddDialog = () => {
        updateDialogVisible.value = true;
        judgeAddUpdate.value = true;
        delete olderForm.value.id;
    }

    let openUpdateDialog = (row) => {
        updateDialogVisible.value = true;
        judgeAddUpdate.value = false;
        olderForm.value = { ...row };
    }

    let handleUpdateRoom = () => {
        axios.post('/olders', olderForm.value).then(res => {
            ElMessage({
                message: res.data.msg,
                type: 'success'
            })
            updateDialogVisible.value = false;
            initOlderList()
        })
    }
</script>

<style>
    .older-manage__card {
        min-height: 80vh;
    }

    .older-manage__card-title {
        font-size: 16px;
        font-weight: 700;
        color: #202a34;
        text-align: left;
    }

    .older-manage__card-title:before {
        content: '';
        width: 24px;
        height: 16px;
        border-left: 3px solid #0081ff;
        margin-right: 20px;
    }
</style>
