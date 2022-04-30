<template>
  <el-card class="admin-home__card">
    <div class="admin-home__card-title">首页</div>
    <h5 class="admin-home__clock">护工签到统计</h5>
    <v-chart class="admin-home__clock-graph" :option="option" />
  </el-card>
</template>

<script setup>
import { onMounted, ref } from "vue";

import axios from "axios";

onMounted(() => {
  axios.get("/adminDataPanel").then((res) => {
    console.log(res);
  });
});

let option = ref({
  title: {
    text: "Traffic Sources",
    left: "center",
  },
  tooltip: {
    trigger: "item",
    formatter: "{a} <br/>{b} : {c} ({d}%)",
  },
  legend: {
    orient: "vertical",
    left: "left",
    data: ["Direct", "Email", "Ad Networks", "Video Ads", "Search Engines"],
  },
  series: [
    {
      name: "Traffic Sources",
      type: "pie",
      radius: "55%",
      center: ["50%", "60%"],
      data: [
        { value: 335, name: "Direct" },
        { value: 310, name: "Email" },
        { value: 234, name: "Ad Networks" },
        { value: 135, name: "Video Ads" },
        { value: 1548, name: "Search Engines" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
});
</script>

<style scoped>
.admin-home__card {
  min-height: 80vh;
}

.admin-home__card-title {
  margin-left: -20px;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
}

.admin-home__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}

.admin-home__clock-graph {
  height: 400px;
}
</style>
