<template>
  <div>
    <el-descriptions title="基础信息" :column="2" border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">身体状况：</div>
        </template>
        {{ nursingInfo.healthStatus }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">听力：</div>
        </template>
        {{ nursingInfo.listen }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">视力：</div>
        </template>
        {{ nursingInfo.see }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">睡眠：</div>
        </template>
        {{ nursingInfo.sleep }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">起夜次数：</div>
        </template>
        {{ nursingInfo.nightTimes }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">饮食习惯：</div>
        </template>
        {{ nursingInfo.diet }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">大小便完成情况：</div>
        </template>
        {{ nursingInfo.urine }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否吸烟：</div>
        </template>
        {{ nursingInfo.isSmoking }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否饮酒：</div>
        </template>
        {{ nursingInfo.isDrinking }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否独立洗澡：</div>
        </template>
        {{ nursingInfo.isShower }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否传染性疾病：</div>
        </template>
        {{ nursingInfo.isInfectiousDisease }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否能乘坐轮椅：</div>
        </template>
        {{ nursingInfo.isWheelchair }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否夜间躁动：</div>
        </template>
        {{ nursingInfo.isNightRestlessness }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否定时翻身：</div>
        </template>
        {{ nursingInfo.isTimingTurn }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否需要喂饭：</div>
        </template>
        {{ nursingInfo.isFed }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否可以独立行走：</div>
        </template>
        {{ nursingInfo.isWalk }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否丧失意识：</div>
        </template>
        {{ nursingInfo.isLossConsciousness }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否可以交流：</div>
        </template>
        {{ nursingInfo.isCommuicating }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否能独立打水清洗：</div>
        </template>
        {{ nursingInfo.isCleaning }}
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
});

let nursingInfo = ref({});
let initNursingInfo = (olderId) => {
  axios
    .get("/tasks", {
      params: {
        olderId,
      },
    })
    .then((res) => {
      nursingInfo.value = res.data.data;
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
