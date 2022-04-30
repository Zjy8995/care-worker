<template>
  <el-card class="daytask__card">
    <ITable
      :tableData="taskList"
      v-bind="tableConfig"
      :page="page"
      :pageCount="taskCount"
      @update:page="changePage"
      @add-btn="router.push('/care/day-task-update')"
    >
      <template #header>
        <div class="daytask__card-title">
          <span>任务分类：</span>
          <el-button
            :class="curSelect == '每日任务' ? '' : 'daytask__card-title-active'"
            type="text"
            @click="changeSelect('每日任务')"
            >每日任务</el-button
          >
          <el-button
            :class="curSelect == '已完成' ? '' : 'daytask__card-title-active'"
            type="text"
            @click="changeSelect('已完成')"
            >已完成</el-button
          >
          <el-button
            :class="curSelect == '未完成' ? '' : 'daytask__card-title-active'"
            type="text"
            @click="changeSelect('未完成')"
            >未完成</el-button
          >
        </div>
      </template>
      <template #search="scope">
        <div style="display: flex; align-items: center">
          <el-input
            v-model="keywords"
            placeholder="输入护工名，护理项目名，分类名进行搜索"
            clearable
            :prefix-icon="Search"
            size="small"
            style="width: 300px"
          />
          <el-button
            type="primary"
            size="small"
            style="margin-right: 20px"
            @click="initTaskList"
            >搜索</el-button
          >
          <el-button type="primary" size="small" @click="addTask"
            >新增任务</el-button
          >
        </div>
      </template>
      <template #status="scope">
        <el-tag v-if="scope.row.status == 0" type="warning">未完成</el-tag>
        <el-tag v-else type="success">已完成</el-tag>
      </template>
      <template #edit="scope">
        <el-popconfirm
          title="请确认任务是否完成"
          @confirm="doneTask(scope.row.id)"
        >
          <template #reference>
            <el-button
              type="text"
              size="small"
              :icon="Edit"
              circle
              :disabled="scope.row.status === 1 ? true : false"
              >打卡</el-button
            >
          </template>
        </el-popconfirm>
      </template>
    </ITable>
    <el-dialog
      v-model="dialogVisible"
      title="任务设置"
      width="30%"
      appen-to-body
    >
      <el-form :model="addTaskForm" label-width="120px">
        <el-form-item label="开始时间">
          <el-date-picker
            v-model="addTaskForm.beginDate"
            type="datetime"
            prefix-icon="s"
            format="YYYY/MM/DD hh:mm:ss"
          />
        </el-form-item>
        <el-form-item label="老人姓名">
          <el-select v-model="addTaskForm.olderId" placeholder="请选择老人">
            <el-option
              :label="item.name"
              :value="item.id"
              v-for="(item, index) in olderList"
              :key="index"
            />
          </el-select>
        </el-form-item>

        <el-form-item label="项目名称">
          <el-select v-model="addTaskForm.projectId" placeholder="请选择项目名">
            <el-option
              :label="item.name"
              :value="item.id"
              v-for="(item, index) in nursingList"
              :key="index"
            />
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleDialogConfirm"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { tableConfig } from "./config";
import { Edit, Delete, Search } from "@element-plus/icons-vue";
import ITable from "@/components/common/table/ITable.vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import axios from "axios";
const router = useRouter();
const store = useStore();
let curSelect = ref("每日任务");
let taskList = ref([
  {
    bednumber: "01",
    olderName: "张三",
    sex: "男",
    time: "2022-03-02 6:30-7:20",
    name: "晨间护理",
    category: "日常工作",
    room: "14501",
    status: "未完成",
    info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
  },
  {
    bednumber: "01",
    olderName: "张三",
    sex: "男",
    time: "2022-03-02 6:30-7:20",
    name: "晨间护理",
    category: "日常工作",
    room: "14501",
    status: "未完成",
    info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
  },
  {
    bednumber: "01",
    olderName: "张三",
    sex: "男",
    time: "2022-03-02 6:30-7:20",
    name: "晨间护理",
    category: "日常工作",
    room: "14501",
    status: "未完成",
    info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
  },
  {
    bednumber: "01",
    olderName: "张三",
    sex: "男",
    time: "2022-03-02 6:30-7:20",
    name: "晨间护理",
    category: "日常工作",
    room: "14501",
    status: "未完成",
    info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
  },
  {
    bednumber: "01",
    olderName: "张三",
    sex: "男",
    time: "2022-03-02 6:30-7:20",
    name: "晨间护理",
    category: "日常工作",
    room: "14501",
    status: "已完成",
    info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
  },
  {
    bednumber: "01",
    olderName: "张三",
    sex: "男",
    time: "2022-03-02 6:30-7:20",
    name: "晨间护理",
    category: "日常工作",
    room: "14501",
    status: "已完成",
    info: "清晨问安，了解老人状况 开窗换气，给予老人床上擦洗`",
  },
]);

let dialogVisible = ref(false);
onMounted(() => {
  initTaskList();
  initNuringList();
  initOlderList();
});
let keywords = ref("");
let page = ref({
  currengt: 1,
  size: 10,
});
let taskCount = ref(0);
let initTaskList = () => {
  axios
    .get("/works", {
      params: {
        ...page.value,
        keywords: keywords.value,
        caregiverId: store.state.userInfo.userId,
      },
    })
    .then((res) => {
      taskCount.value = res.data.data.count;
      taskList.value = res.data.data.recordList;
    });
};
let changePage = (newPage) => {
  page.value.current = newPage.currentPage;
  page.value.size = newPage.size;
  initTaskList();
};
let changeSelect = (name) => {
  let params = {
    ...page.value,
    caregiverId: store.state.userInfo.userId,
    status: 0,
  };
  curSelect.value = name;
  if (curSelect.value == "未完成") {
    params.status = 0;
  } else if (curSelect.value == "已完成") {
    params.status = 1;
  } else {
    delete params.status;
  }
  axios
    .get("/works", {
      params,
    })
    .then((res) => {
      taskList.value = res.data.data.recordList;
    });
};

let doneTask = (id) => {
  axios.post("/DoneWork", [id]).then((res) => {
    ElMessage({
      message: "打卡成功",
      type: res.data.code === 1000 ? "success" : "error",
    });
    initTaskList();
  });
};
let addTaskForm = ref({
  beginDate: "",
  olderId: "",
  projectId: "",
  userId: store.state.userInfo.userId,
});
let initNuringList = () => {
  axios.get("/nursingProjects").then((res) => {
    nursingList.value = res.data.data.recordList;
  });
};
let initOlderList = () => {
  axios
    .get("/olderByCaregiverId", {
      params: {
        caregiverId: store.state.userInfo.userId,
      },
    })
    .then((res) => {
      olderList.value = res.data.data.recordList;
    });
};
let olderList = ref([]);
let nursingList = ref([]);
let addTask = () => {
  dialogVisible.value = true;
};

let handleDialogConfirm = () => {
  axios
    .post("/works", {
      ...addTaskForm.value,
    })
    .then((res) => {
      ElMessage({
        message: "添加任务成功",
        type: res.data.code === 1000 ? "success" : "error",
      });
      dialogVisible.value = false;
      initTaskList();
      addTaskForm.value = {
        beginDate: "",
        olderId: "",
        projectId: "",
        userId: store.state.userInfo.userId,
      };
    });
};
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
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}

.daytask__card-title-active {
  color: #000;
}
</style>
