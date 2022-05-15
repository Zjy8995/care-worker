<template>
  <el-card class="care-manage__card">
    <ITable
      :tableData="careList"
      v-bind="tableConfig"
      :page="page"
      :pageCount="careCount"
      @update:page="changePage"
      @selection="getSelection"
      @del-btn="delCare(selectedData)"
      @add-btn="router.push('/admin/care-manage-update')"
    >
      <template #header>
        <div class="care-manage__card-title">护工管理</div>
      </template>
      <template #birthday="scope">
        {{ dateFilterYM(scope.row.birthday) }}
      </template>
      <template #edit="scope">
        <el-button
          type="primary"
          size="small"
          :icon="Edit"
          circle
          @click="
            router.push({
              path: '/admin/care-manage-update',
              query: { id: scope.row.id },
            })
          "
        />
        <el-popconfirm
          confirm-button-text="是"
          cancel-button-text="否"
          icon-color="red"
          title="确认是否删除?"
          @confirm="delCare([scope.row.id])"
        >
          <template #reference>
            <el-button type="danger" size="small" :icon="Delete" circle />
          </template>
        </el-popconfirm>
      </template>
    </ITable>
    <el-dialog
      v-model="updateDialogVisible"
      :title="judgeAddUpdate ? '新增病房' : '修改病房信息'"
      width="30%"
    >
      <el-form :model="careForm" label-width="80px">
        <el-form-item label="ID" v-if="!judgeAddUpdate">
          <el-input v-model="careForm.id" />
        </el-form-item>
        <el-form-item label="病床名">
          <el-input v-model="careForm.name" />
        </el-form-item>
        <el-form-item label="老人ID">
          <el-input v-model="careForm.olderId" />
        </el-form-item>
        <el-form-item label="房间ID">
          <el-input v-model="careForm.roomId" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="updateDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleUpdateCare">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute, useRouter } from "vue-router";
import { tableConfig } from "./config";
import { Edit, Delete } from "@element-plus/icons-vue";
import ITable from "@/components/common/table/ITable.vue";
import axios from "axios";
import { ElMessage } from "element-plus";
import { dateFilterYM } from "@/utils/dateFilter";

const router = useRouter();

let careList = ref([]);
onMounted(() => {
  initCareList();
});

let page = ref({
  current: 1,
  size: 10,
});
let careCount = ref(0);
let initCareList = () => {
  axios
    .get("/caregivers", {
      params: {
        ...page.value,
      },
    })
    .then((res) => {
      console.log(res);
      careList.value = res.data.data.recordList;
      careCount.value = res.data.data.count;
    });
};

let changePage = (newPage) => {
  page.value.current = newPage.currentPage;
  page.value.size = newPage.size;
  initCareList();
};

let selectedData = ref([]);
let getSelection = (select) => {
  selectedData.value = [];
  select.map((item) => {
    selectedData.value.push(item.id);
  });
};

let delCare = (list) => {
  axios
    .delete("/caregivers", {
      data: list,
    })
    .then((res) => {
      ElMessage({
        message: res.data.msg,
        type: res.data.code === 1000 ? "success" : "error",
      });
      initCareList();
    });
};

let updateDialogVisible = ref(false);

// true为新增
let judgeAddUpdate = ref(false);
let careForm = ref({
  id: 0,
  name: "",
  olderId: null,
  roomId: null,
});

let openAddDialog = () => {
  updateDialogVisible.value = true;
  judgeAddUpdate.value = true;
  delete careForm.value.id;
};

let openUpdateDialog = (row) => {
  updateDialogVisible.value = true;
  judgeAddUpdate.value = false;
  careForm.value = { ...row };
};

let handleUpdateCare = () => {
  axios.post("/caregivers", careForm.value).then((res) => {
    ElMessage({
      message: res.data.msg,
      type: "success",
    });
    updateDialogVisible.value = false;
    initCareList();
  });
};
</script>

<style>
.care-manage__card {
  min-height: 80vh;
}

.care-manage__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
}

.care-manage__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}
</style>
