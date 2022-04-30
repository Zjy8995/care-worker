<template>
  <el-card class="day-task-update__card">
    <div class="day-task-update__card-title">任务信息</div>
    <el-form :model="taskForm" label-width="120px">
      <el-row>
        <el-col :span="7">
          <el-form-item label="项目ID" v-if="route.params.id">
            <el-input v-model="taskForm.id" disabled />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="护工工号" v-if="route.params.id">
            <el-input v-model="taskForm.userId" disabled />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="项目名称">
            <el-select
              v-model="taskForm.projectId"
              placeholder="请选择一个项目"
            >
              <el-option
                :label="item.name"
                :value="item.id"
                v-for="(item, index) in store.state.nursingList"
                :key="index"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="所属老人">
            <el-input
              v-model="taskForm.olderName"
              placeholder="请选择一个老人"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="任务分类">
            <el-select
              v-model="taskForm.catagoryId"
              placeholder="请选择一个分类"
            >
              <el-option
                :label="item.name"
                :value="item.id"
                v-for="(item, index) in catagoryList"
                :key="index"
              />
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="频率设置">
            <el-button type="text" @click="dialogVisible = true"
              >点击设置任务频率</el-button
            >
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="7">
          <el-form-item label="任务简介">
            <el-input
              v-model="taskForm.projectInfo"
              type="textarea"
              placeholder="请输入任务内容"
            />
          </el-form-item>
        </el-col>
      </el-row>
      <el-form-item>
        <el-button type="primary" @click="router.back()">返回</el-button>
        <el-button type="primary" @click="onSubmit">提交</el-button>
      </el-form-item>
    </el-form>
    <el-dialog
      v-model="dialogVisible"
      title="任务设置"
      width="55%"
      append-to-body
    >
      <span style="font-weight: 700">执行频率：</span>
      <el-radio-group v-model="curSelect">
        <el-radio label="月任务">月任务</el-radio>
        <el-radio label="周任务">周任务</el-radio>
        <el-radio label="天任务">天任务</el-radio>
      </el-radio-group>
      <div v-if="curSelect === '月任务'">
        <h5 style="margin: 10px 0">请选择日期</h5>
        <el-radio-group v-model="mouth">
          <el-radio
            :label="item.val"
            v-for="(item, index) in mouthData"
            :key="index"
            style="width: 60px"
            >{{ item.name }}</el-radio
          >
        </el-radio-group>
      </div>
      <div v-if="curSelect === '周任务'">
        <h5 style="margin: 10px 0">请选择星期</h5>
        <el-radio-group v-model="week">
          <el-radio
            :label="item.val"
            v-for="(item, index) in weekData"
            :key="index"
            style="width: 60px"
            >{{ item.name }}</el-radio
          >
        </el-radio-group>
      </div>
      <h5 style="margin: 10px 0">请选择时间</h5>
      <el-radio-group v-model="day">
        <el-radio
          :label="item.val"
          v-for="(item, index) in dayData"
          :key="index"
          style="width: 60px"
          >{{ item.name }}</el-radio
        >
      </el-radio-group>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="onSaveCron">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from "vue";
import { useRoute, useRouter } from "vue-router";
import { Plus } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import axios from "axios";
import { useStore } from "vuex";

let mouth = ref("?");
let week = ref("?");
let day = ref("?");
let curSelect = ref("月任务");
let cronVal = ref("");
let mouthData = [
  {
    name: "1号",
    val: "1",
  },
  {
    name: "2号",
    val: "2",
  },
  {
    name: "3号",
    val: "3",
  },
  {
    name: "4号",
    val: "4",
  },
  {
    name: "5号",
    val: "5",
  },
  {
    name: "6号",
    val: "6",
  },
  {
    name: "7号",
    val: "7",
  },
  {
    name: "8号",
    val: "8",
  },
  {
    name: "9号",
    val: "9",
  },
  {
    name: "10号",
    val: "10",
  },
  {
    name: "11号",
    val: "11",
  },
  {
    name: "12号",
    val: "12",
  },
  {
    name: "13号",
    val: "13",
  },
  {
    name: "14号",
    val: "14",
  },
  {
    name: "15号",
    val: "15",
  },
  {
    name: "16号",
    val: "16",
  },
  {
    name: "17号",
    val: "17",
  },
  {
    name: "18号",
    val: "18",
  },
  {
    name: "19号",
    val: "19",
  },
  {
    name: "20号",
    val: "20",
  },
  {
    name: "21号",
    val: "21",
  },
  {
    name: "22号",
    val: "22",
  },
  {
    name: "23号",
    val: "23",
  },
  {
    name: "24号",
    val: "24",
  },
  {
    name: "25号",
    val: "25",
  },
  {
    name: "26号",
    val: "26",
  },
  {
    name: "27号",
    val: "27",
  },
  {
    name: "28号",
    val: "28",
  },
  {
    name: "29号",
    val: "29",
  },
  {
    name: "30号",
    val: "30",
  },
  {
    name: "31号",
    val: "31",
  },
];
let weekData = [
  {
    name: "周一",
    val: "1",
  },
  {
    name: "周二",
    val: "2",
  },
  {
    name: "周三",
    val: "3",
  },
  {
    name: "周四",
    val: "4",
  },
  {
    name: "周五",
    val: "5",
  },
  {
    name: "周六",
    val: "6",
  },
  {
    name: "周日",
    val: "7",
  },
];
let dayData = [
  {
    name: "06:00",
    val: "6:0",
  },
  {
    name: "06:30",
    val: "6:30",
  },
  {
    name: "07:00",
    val: "7:0",
  },
  {
    name: "07:30",
    val: "7:30",
  },
  {
    name: "08:00",
    val: "8:0",
  },
  {
    name: "08:30",
    val: "8:30",
  },
  {
    name: "09:00",
    val: "9:0",
  },
  {
    name: "09:30",
    val: "9:30",
  },
  {
    name: "10:00",
    val: "10:0",
  },
  {
    name: "10:30",
    val: "10:30",
  },
  {
    name: "11:00",
    val: "11:0",
  },
  {
    name: "11:30",
    val: "11:30",
  },
  {
    name: "12:00",
    val: "12:0",
  },
  {
    name: "12:30",
    val: "12:30",
  },
  {
    name: "13:00",
    val: "13:0",
  },
  {
    name: "13:30",
    val: "13:30",
  },
  {
    name: "14:00",
    val: "14:0",
  },
  {
    name: "14:30",
    val: "14:30",
  },
  {
    name: "15:00",
    val: "15:0",
  },
  {
    name: "15:30",
    val: "15:30",
  },
  {
    name: "16:00",
    val: "16:0",
  },
  {
    name: "16:30",
    val: "16:30",
  },
  {
    name: "17:00",
    val: "17:0",
  },
  {
    name: "17:30",
    val: "17:30",
  },
  {
    name: "18:00",
    val: "18:0",
  },
  {
    name: "18:30",
    val: "18:30",
  },
  {
    name: "19:00",
    val: "19:0",
  },
  {
    name: "19:30",
    val: "19:30",
  },
  {
    name: "20:00",
    val: "20:0",
  },

  {
    name: "20:30",
    val: "20:30",
  },
  {
    name: "21:00",
    val: "21:0",
  },
  {
    name: "21:30",
    val: "21:30",
  },
  {
    name: "22:00",
    val: "22:0",
  },
  {
    name: "22:30",
    val: "22:30",
  },
  {
    name: "23:00",
    val: "23:0",
  },
  {
    name: "23:30",
    val: "23:30",
  },
  {
    name: "00:00",
    val: "0:0",
  },
  {
    name: "00:30",
    val: "0:30",
  },
  {
    name: "01:00",
    val: "1:0",
  },
  {
    name: "01:30",
    val: "1:30",
  },
  {
    name: "02:00",
    val: "2:0",
  },
  {
    name: "02:30",
    val: "2:30",
  },
  {
    name: "03:00",
    val: "3:0",
  },
  {
    name: "03:30",
    val: "3:30",
  },
  {
    name: "04:00",
    val: "4:0",
  },
  {
    name: "04:30",
    val: "4:30",
  },
  {
    name: "05:00",
    val: "5:0",
  },
  {
    name: "05:30",
    val: "5:30",
  },
];
const taskForm = ref({
  projectName: "",
  projectId: "",
  catagoryId: "",
  catagoryName: "",
  projectInfo: "",
});
const route = useRoute();
const store = useStore();
const router = useRouter();

onMounted(() => {
  initNuringList();
  initCategoryList();
  if (route.params.olderId) {
    taskForm.value = { ...route.params };
    day.value = taskForm.value.day;
    week.value = taskForm.value.week;
    mouth.value = taskForm.value.mouth;
  }
  if (route.query.olderId) {
    taskForm.value.olderName = route.query.olderName;
    taskForm.value.olderId = route.query.olderId;
  }
});
watch(
  () => curSelect.value,
  () => {
    mouth.value = "?";
    week.value = "?";
    day.value = "?";
  }
);
watch(
  () => taskForm.value.projectId,
  (cur, pre) => {
    if (route.query.olderId) {
      let curNursing = nursingList.value.find((item) => {
        return item.id === cur;
      });
      taskForm.value.catagory = curNursing.catagory;
      taskForm.value.catagoryId = curNursing.catagoryId;
      taskForm.value.projectName = curNursing.name;
      taskForm.value.projectInfo = curNursing.info;
    }
    if (route.params.olderId) {
      let curNursing = store.state.nursingList.find((item) => {
        return item.id == cur;
      });

      taskForm.value.catagory = curNursing.catagory;
      taskForm.value.catagoryId = curNursing.catagoryId;
      taskForm.value.projectName = curNursing.name;
      taskForm.value.projectId = curNursing.id;
      taskForm.value.projectInfo = curNursing.info;
      onSaveCron();
    }
  }
);
let onSaveCron = () => {
  let [hour, min] = day.value.split(":");
  if (curSelect.value === "月任务") {
    cronVal.value = "* " + min + " " + hour + " " + mouth.value + " * ?";
  } else if (curSelect.value === "周任务") {
    cronVal.value = "* " + min + " " + hour + " " + "?" + " * " + week.value;
  } else {
    cronVal.value = "* " + min + " " + hour + " " + "*" + " * ?";
  }
  console.log(cronVal.value);
  dialogVisible.value = false;
};

let dialogVisible = ref(false);

let nursingList = ref([]);
let initNuringList = () => {
  axios.get("/nursingProjects").then((res) => {
    console.log(res);
    nursingList.value = res.data.data.recordList;
  });
};

let catagoryList = ref([]);
let initCategoryList = () => {
  axios.get("/catagories").then((res) => {
    catagoryList.value = [...res.data.data.recordList];
  });
};

let onSubmit = () => {
  axios
    .post("/addWork", {
      cron: cronVal.value,
      olderId: taskForm.value.olderId,
      projectId: taskForm.value.projectId,
      userId: store.state.userInfo.userId,
    })
    .then((res) => {
      ElMessage({
        message: res.data.code === 1000 ? "提交成功" : res.data.msg,
        type: res.data.code === 1000 ? "success" : "error",
      });
    });
};
</script>

<style>
.day-task-update__card {
  min-height: 80vh;
}

.day-task-update__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
  margin-left: -20px;
}

.day-task-update__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}

.avatar-uploader .el-upload {
  border: 1px dashed var(--el-border-color);
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar-uploader .el-upload:hover {
  border-color: var(--el-color-primary);
}

.el-icon.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  text-align: center;
}

.el-form-item__label {
  line-height: 40px;
}
</style>
