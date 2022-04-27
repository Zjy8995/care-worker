<template>
  <el-card class="sickbed-manage__card">
    <ITable
      :tableData="bedList"
      v-bind="tableConfig"
      :page="page"
      :pageCount="bedCount"
      @update:page="changePage"
      @selection="getSelection"
      @del-btn="delBed(selectedData)"
      @add-btn="openAddDialog"
    >
      <template #header>
        <div class="sickbed-manage__card-title">病床管理</div>
      </template>
      <template #name="scope">
        <el-tag :type="nameTag(scope.row.name)">{{ scope.row.name }}</el-tag>
      </template>
      <template #olderName="scope">
        <el-tag v-if="scope.row.olderName">{{ scope.row.olderName }}</el-tag>
        <el-tag v-else type="info"> 无人居住 </el-tag>
      </template>
      <template #edit="scope">
        <el-button
          type="primary"
          size="small"
          :icon="Edit"
          circle
          @click="openUpdateDialog(scope.row)"
        />
        <el-popconfirm
          confirm-button-text="是"
          cancel-button-text="否"
          icon-color="red"
          title="确认是否删除?"
          @confirm="delBed([scope.row.id])"
        >
          <template #reference>
            <el-button type="danger" size="small" :icon="Delete" circle />
          </template>
        </el-popconfirm>
      </template>
    </ITable>
    <el-dialog
      v-model="updateDialogVisible"
      :title="judgeAddUpdate ? '新增病床' : '修改病床信息'"
      width="30%"
    >
      <el-form :model="bedForm" label-width="80px">
        <el-form-item label="病床ID" v-if="!judgeAddUpdate">
          <el-input v-model="bedForm.id" disabled />
        </el-form-item>
        <el-form-item label="病床名">
          <el-input v-model="bedForm.name" />
        </el-form-item>
        <el-form-item label="老人姓名">
          <el-input v-model="bedForm.olderName" />
        </el-form-item>
        <el-form-item label="房间ID">
          <el-input v-model="bedForm.roomId" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="updateDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleUpdateBed">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { tableConfig } from "./config";
import { Edit, Delete } from "@element-plus/icons-vue";
import ITable from "@/components/common/table/ITable.vue";
import axios from "axios";
import { ElMessage } from "element-plus";
let bedList = ref([]);
onMounted(() => {
  initbedList();
});

let nameTag = (name) => {
  if (name === "A") {
    return "";
  } else if (name === "B") {
    return "success";
  } else {
    return "warning";
  }
};

let page = ref({
  current: 1,
  size: 10,
});
let bedCount = ref(0);
let initbedList = () => {
  axios
    .get("/beds", {
      params: {
        ...page.value,
      },
    })
    .then((res) => {
      console.log(res);
      bedList.value = res.data.data.recordList;
      bedCount.value = res.data.data.count;
    });
};

let changePage = (newPage) => {
  page.value.current = newPage.currentPage;
  page.value.size = newPage.size;
  initbedList();
};

let selectedData = ref([]);
let getSelection = (select) => {
  selectedData.value = [];
  select.map((item) => {
    selectedData.value.push(item.id);
  });
};

let delBed = (list) => {
  axios
    .delete("/beds", {
      data: list,
    })
    .then((res) => {
      ElMessage({
        message: res.data.msg,
        type: res.data.code === 1000 ? "success" : "error",
      });
      initbedList();
    });
};

let updateDialogVisible = ref(false);

// true为新增
let judgeAddUpdate = ref(false);
let bedForm = ref({
  id: 0,
  name: "",
  olderName: null,
  roomId: null,
});

let openAddDialog = () => {
  updateDialogVisible.value = true;
  judgeAddUpdate.value = true;
  bedForm.value = {
    name: "",
    olderName: null,
    roomId: null,
  };
};

let openUpdateDialog = (row) => {
  updateDialogVisible.value = true;
  judgeAddUpdate.value = false;
  bedForm.value = { ...row };
};

let handleUpdateBed = () => {
  axios.post("/beds", bedForm.value).then((res) => {
    ElMessage({
      message: res.data.msg,
      type: "success",
    });
    updateDialogVisible.value = false;
    initbedList();
  });
};
</script>

<style>
.sickbed-manage__card {
  min-height: 80vh;
}

.sickbed-manage__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
}

.sickbed-manage__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}
</style>
