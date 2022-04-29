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
      @add-btn="openAddDialog"
    >
      <template #header>
        <div class="older-manage__card-title">老人管理</div>
      </template>
      <template #createDate="scope">
        {{ scope.row.createDate }}
      </template>
      <template #updateDate="scope">
        {{ scope.row.updateDate }}
      </template>
      <template #edit="scope">
        <el-button
          type="primary"
          size="small"
          :icon="Edit"
          @click="jumpOlderInfo(scope.row)"
          >查看详情</el-button
        >
        <el-popconfirm
          confirm-button-text="是"
          cancel-button-text="否"
          icon-color="red"
          title="确认是否删除?"
          @confirm="delRoom([scope.row.id])"
        >
          <template #reference>
            <el-button type="danger" size="small" :icon="Delete"
              >删除</el-button
            >
          </template>
        </el-popconfirm>
      </template>
    </ITable>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useStore } from "vuex";
import { tableConfig } from "./config";
import { Edit, Delete } from "@element-plus/icons-vue";
import ITable from "@/components/common/table/ITable.vue";
import axios from "axios";
import { ElMessage } from "element-plus";
import router from "@/router";
let roomList = ref([]);
onMounted(() => {
  initOlderList();
});

let store = useStore();
let page = ref({
  current: 1,
  size: 10,
});
let roomCount = ref(0);
let initOlderList = () => {
  axios
    .get("/olders", {
      params: {
        ...page.value,
      },
    })
    .then((res) => {
      console.log(res);
      roomList.value = res.data.data.recordList;
      roomCount.value = res.data.data.count;
    });
};

let changePage = (newPage) => {
  page.value.current = newPage.currentPage;
  page.value.size = newPage.size;
  initOlderList();
};

let selectedData = ref([]);
let getSelection = (select) => {
  selectedData.value = [];
  select.map((item) => {
    selectedData.value.push(item.id);
  });
};

let delRoom = (list) => {
  axios
    .delete("/olders", {
      data: list,
    })
    .then((res) => {
      if (res.data.code === 1000) {
        ElMessage({
          message: res.data.msg,
          type: "success",
        });
        initOlderList();
      }
    });
};

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
});

let openAddDialog = () => {};

let jumpOlderInfo = (row) => {
  store.commit("setCurOlderId", row.id);
  window.localStorage.setItem("curOlderId", row.id);
  router.push("/admin/detail-older");
};

let handleUpdateRoom = () => {
  axios.post("/olders", olderForm.value).then((res) => {
    ElMessage({
      message: res.data.msg,
      type: "success",
    });
    initOlderList();
  });
};
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
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}
</style>
