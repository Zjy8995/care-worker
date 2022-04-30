<template>
  <div>
    <div style="display: flex; margin-bottom: 20px">
      <el-button type="primary" size="small" @click="jumpAdd"
        >新增项目</el-button
      >
    </div>

    <el-descriptions
      :title="'项目' + (idx + 1)"
      :column="1"
      border
      v-for="(project, idx) in nursingInfo"
      :key="idx"
    >
      <template #extra>
        <el-button type="primary" size="small" @click="jumpUpdate(project)"
          >编辑</el-button
        >
      </template>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">项目名称：</div>
        </template>
        {{ project.projectName }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">项目分类：</div>
        </template>
        {{ project.catagory }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">项目简介：</div>
        </template>
        {{ project.projectInfo }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">负责项目护工：</div>
        </template>
        {{ project.caregiverName }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label> 项目名称： </template>
        {{ project.projectName }}
      </el-descriptions-item>

      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label> 执行周期： </template>
        <template #default>
          <h5 style="margin: 10px 0">执行类型</h5>
          <el-radio-group v-model="curSelect">
            <el-radio label="月任务" disabled>月任务</el-radio>
            <el-radio label="周任务" disabled>周任务</el-radio>
            <el-radio label="天任务" disabled>天任务</el-radio>
          </el-radio-group>
          <div v-if="curSelect === '月任务'">
            <h5 style="margin: 10px 0">执行日期</h5>
            <el-radio-group v-model="project.mouth">
              <el-radio
                :label="item.val"
                disabled
                v-for="(item, index) in mouthData"
                :key="index"
                style="width: 60px"
                >{{ item.name }}</el-radio
              >
            </el-radio-group>
          </div>
          <div v-if="curSelect === '周任务'">
            <h5 style="margin: 10px 0">执行星期</h5>
            <el-radio-group v-model="project.week">
              <el-radio
                disabled
                :label="item.val"
                v-for="(item, index) in weekData"
                :key="index"
                style="width: 60px"
                >{{ item.name }}</el-radio
              >
            </el-radio-group>
          </div>
          <h5 style="margin: 10px 0">执行时间</h5>
          <el-radio-group v-model="project.day">
            <el-radio
              disabled
              :label="item.val"
              v-for="(item, index) in dayData"
              :key="index"
              style="width: 60px"
              >{{ item.name }}</el-radio
            >
          </el-radio-group>
        </template>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";
let router = useRouter();
let route = useRoute();
let store = useStore();
onMounted(() => {
  if (store.state.curOlderId) {
    initNursingInfo(store.state.curOlderId);
  }
  initNuringList();
});

let nursingInfo = ref({});

// 查询老人护理项目
let initNursingInfo = (olderId) => {
  axios
    .get("/tasks", {
      params: {
        olderId,
      },
    })
    .then((res) => {
      console.log(res);
      nursingInfo.value = res.data.data.recordList;
      nursingInfo.value.forEach((item) => {
        let cronArr = item.cron.split(" ");
        item.day = cronArr[2] + ":" + cronArr[1];
        item.mouth = cronArr[3];
        item.week = cronArr[5];
        if (typeof item.mouth == "number") {
          curSelect.value = "月任务";
        } else if (typeof item.week == "number") {
          curSelect.value = "周任务";
        } else {
          curSelect.value = "天任务";
        }
      });
    });
};

// 查询所有护理项目
let nursingList = ref([]);
let initNuringList = () => {
  axios.get("/nursingProjects").then((res) => {
    nursingList.value = res.data.data.recordList;
    store.commit("setNursingList", res.data.data.recordList);
  });
};

let jumpAdd = () => {
  let url = "";
  if (route.path.includes("care")) {
    url = "/care/day-task-update";
  } else {
    url = "/admin/day-task-update";
  }
  router.push({
    path: url,
    query: {
      olderId: store.state.curOlderId,
      olderName: store.state.curOlderName,
    },
  });
};

let jumpUpdate = (project) => {
  let name = "";
  if (route.path.includes("care")) {
    name = "careTaskUpdate";
  } else {
    name = "careAdminUpdate";
  }
  router.push({
    name,
    params: { ...project },
  });
};
let curSelect = ref("");
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
</script>

<style>
.desc-item {
  width: 140px;
}

.desc-item-ctx {
  width: 380px;
}
</style>
