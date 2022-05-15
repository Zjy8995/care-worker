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
          <h5>{{ project.taskRate }}</h5>
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
      nursingInfo.value = res.data.data.recordList;
      nursingInfo.value.forEach((item) => {
        let cronArr = item.cron.split(" ");

        item.day = cronArr[2] + ":" + cronArr[1];
        if (cronArr[1] == "0") {
          item.day += "0";
        }
        item.mouth = cronArr[3];
        item.week = cronArr[5];
        item.taskRate = "";
        if (item.mouth >= 1 && item.mouth <= 12) {
          item.taskRate = `每月${item.mouth}号${item.day}需完成一次`;
        } else if (item.week >= 1 && item.week <= 7) {
          item.taskRate = `每周${item.week} ${item.day}需完成一次`;
        } else {
          item.taskRate = "每天" + item.day + "需完成一次";
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
</script>

<style>
.desc-item {
  width: 140px;
}

.desc-item-ctx {
  width: 380px;
}
</style>
