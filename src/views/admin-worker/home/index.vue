<template>
  <el-card class="admin-home__card">
    <div class="admin-home__card-title">首页</div>
    <v-chart
      :theme="blue"
      class="admin-home__clock-graph"
      :option="option"
      v-loading="loading"
    />
    <div style="display: flex">
      <div class="admin-home__card-mini">
        <el-card class="admin-home__card-mini-ctx">
          <div class="admin-home__card-icon-container">
            <el-icon color="#40c9c6"><View /></el-icon>
          </div>
          <div class="admin-home__card-desc">
            <div class="admin-home__card-mini-title">房间数量</div>
            <div class="admin-home__card-mini-count">{{ roomCount }}</div>
          </div>
        </el-card>

        <el-card class="admin-home__card-mini-ctx">
          <div class="admin-home__card-icon-container">
            <el-icon color="#40c9c6"><View /></el-icon>
          </div>
          <div class="admin-home__card-desc">
            <div class="admin-home__card-mini-title">老人数量</div>
            <div class="admin-home__card-mini-count">{{ olderCount }}</div>
          </div>
        </el-card>

        <el-card class="admin-home__card-mini-ctx">
          <div class="admin-home__card-icon-container">
            <el-icon color="#40c9c6"><View /></el-icon>
          </div>
          <div class="admin-home__card-desc">
            <div class="admin-home__card-mini-title">护工数量</div>
            <div class="admin-home__card-mini-count">
              {{ caregiverCount }}
            </div>
          </div>
        </el-card>

        <el-card class="admin-home__card-mini-ctx">
          <div class="admin-home__card-icon-container">
            <el-icon color="#40c9c6"><View /></el-icon>
          </div>
          <div class="admin-home__card-desc">
            <div class="admin-home__card-mini-title">床位数量</div>
            <div class="admin-home__card-mini-count">{{ bedCount }}</div>
          </div>
        </el-card>

        <el-card class="admin-home__card-mini-ctx">
          <div class="admin-home__card-icon-container">
            <el-icon color="#40c9c6"><View /></el-icon>
          </div>
          <div class="admin-home__card-desc">
            <div class="admin-home__card-mini-title">已居住床位数量</div>
            <div class="admin-home__card-mini-count">
              {{ bedCountUsing }}
            </div>
          </div>
        </el-card>

        <el-card class="admin-home__card-mini-ctx">
          <div class="admin-home__card-icon-container">
            <el-icon color="#40c9c6"><View /></el-icon>
          </div>
          <div class="admin-home__card-desc">
            <div class="admin-home__card-mini-title">空床位数量</div>
            <div class="admin-home__card-mini-count">
              {{ bedCountUnUsing }}
            </div>
          </div>
        </el-card>
      </div>
      <div class="admin-home__card-pie">
        <el-card>
          <div class="e-title">文章分类统计</div>
          <div style="height: 200px">
            <v-chart :option="category" v-loading="loading" />
          </div>
        </el-card>
      </div>
    </div>
  </el-card>
</template>

<script setup>
import { onMounted, ref, nextTick } from "vue";
import * as echarts from "echarts";
import blue from "./theme";
import axios from "axios";
import { View } from "@element-plus/icons-vue";
onMounted(() => {
  initGraphList();
  echarts.registerTheme("blue", blue);
});

let roomCount = ref(0);
let bedCount = ref(0);
let caregiverCount = ref(0);
let olderCount = ref(0);
let bedCountUsing = ref(0);
let bedCountUnUsing = ref(0);

let initGraphList = () => {
  axios.get("/adminDataPanel").then((res) => {
    let data = res.data.data.clockData.map((item) => {
      return [item.time, item.count];
    });
    option.value.series.data = data;
    roomCount.value = res.data.data.roomCount;
    bedCount.value = res.data.data.bedCount;
    caregiverCount.value = res.data.data.caregiverCount;
    olderCount.value = res.data.data.olderCount;
    bedCountUsing.value = res.data.data.bedCountUsing;
    bedCountUnUsing.value = res.data.data.bedCountUnUsing;
    res.data.data.catagoryCountDTOList.forEach((item) => {
      category.value.series[0].data.push({
        value: item.count,
        name: item.name,
      });
      category.value.legend.data.push(item.name);
    });
  });
};
let option = ref({
  title: {
    top: 30,
    left: "center",
    text: "护工签到统计",
  },
  tooltip: {},
  visualMap: {
    min: 0,
    max: 40,
    type: "piecewise",
    orient: "horizontal",
    left: "center",
    top: 65,
  },
  calendar: {
    top: 120,
    left: 30,
    right: 30,
    cellSize: ["auto", 13],
    range: "2022",
    itemStyle: {
      borderWidth: 0.5,
    },
    yearLabel: { show: false },
  },
  series: {
    type: "heatmap",
    coordinateSystem: "calendar",
    data: [],
  },
});
let category = ref({
  color: ["#7EC0EE", "#FF9F7F", "#FFD700", "#C9C9C9", "#E066FF", "#C0FF3E"],
  legend: {
    data: [],
    bottom: "bottom",
  },
  tooltip: {
    trigger: "item",
  },
  series: [
    {
      name: "文章分类",
      type: "pie",
      roseType: "radius",
      data: [],
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
  height: 220px;
}

.admin-home__card-mini {
  flex: 2;
  display: flex;
  flex-wrap: wrap;
}
.admin-home__card-pie {
  flex: 1;
}

.admin-home__card-mini-ctx {
  flex: 23%;
  margin-right: 20px;
  margin-top: 20px;
}

.admin-home__card-mini-ctx ::v-deep .el-card__body {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.admin-home__card-desc {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.admin-home__card-icon-container {
  font-size: 40px;
}

.admin-home__card-mini-title {
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
}

.admin-home__card-mini-count {
  margin-top: 5px;
  color: rgba(0, 0, 0);
}
</style>
