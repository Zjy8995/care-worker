<template>
  <div>
    <el-descriptions title="基础信息" :column="2" border>
      <template #extra v-if="!route.path.includes('care')">
        <el-button
          type="primary"
          size="small"
          @click="editHealthInfo"
          :disabled="healthInfoBtn"
          >编辑</el-button
        >
        <el-button
          type="primary"
          size="small"
          v-if="healthInfoBtn"
          @click="saveHealthInfo"
          >保存</el-button
        >
      </template>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">身体状况：</div>
        </template>
        <el-input
          :disabled="!healthInfoBtn"
          v-model="healthInfo.healthStatus"
        />
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
        <el-input :disabled="!healthInfoBtn" v-model="healthInfo.listen" />
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">视力：</div>
        </template>
        <el-input :disabled="!healthInfoBtn" v-model="healthInfo.see" />
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
        <el-input :disabled="!healthInfoBtn" v-model="healthInfo.sleep" />
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">起夜次数：</div>
        </template>
        <el-input :disabled="!healthInfoBtn" v-model="healthInfo.nightTimes" />
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
        <el-input :disabled="!healthInfoBtn" v-model="healthInfo.diet" />
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">大小便完成情况：</div>
        </template>
        <el-input :disabled="!healthInfoBtn" v-model="healthInfo.urine" />
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
        <el-radio-group
          v-model="healthInfo.isSmoking"
          :disabled="!healthInfoBtn"
        >
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否饮酒：</div>
        </template>
        <el-radio-group
          v-model="healthInfo.isDrinking"
          :disabled="!healthInfoBtn"
        >
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
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
        <el-radio-group
          v-model="healthInfo.isShower"
          :disabled="!healthInfoBtn"
        >
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否传染性疾病：</div>
        </template>
        <el-radio-group
          v-model="healthInfo.isInfectiousDisease"
          :disabled="!healthInfoBtn"
        >
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
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
        <el-radio-group
          v-model="healthInfo.isWheelchair"
          :disabled="!healthInfoBtn"
        >
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否夜间躁动：</div>
        </template>
        <el-radio-group
          v-model="healthInfo.isNightRestlessness"
          :disabled="!healthInfoBtn"
        >
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
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
        <el-radio-group
          v-model="healthInfo.isTimingTurn"
          :disabled="!healthInfoBtn"
        >
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否需要喂饭：</div>
        </template>
        <el-radio-group v-model="healthInfo.isFed" :disabled="!healthInfoBtn">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
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
        <el-radio-group v-model="healthInfo.isWalk" :disabled="!healthInfoBtn">
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否丧失意识：</div>
        </template>
        <el-radio-group
          v-model="healthInfo.isLossConsciousness"
          :disabled="!healthInfoBtn"
        >
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
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
        <el-radio-group
          v-model="healthInfo.isCommuicating"
          :disabled="!healthInfoBtn"
        >
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">是否能独立打水清洗：</div>
        </template>
        <el-radio-group
          v-model="healthInfo.isCleaning"
          :disabled="!healthInfoBtn"
        >
          <el-radio :label="true">是</el-radio>
          <el-radio :label="false">否</el-radio>
        </el-radio-group>
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
import axios from "axios";
let router = useRouter();
let route = useRoute();
let store = useStore();
onMounted(() => {
  if (store.state.curOlderId) {
    initHealthInfo(store.state.curOlderId);
  }
});

let healthInfo = ref({
  diet: "",
  healthStatus: "",
  isCleaning: "",
  isCommuicating: "",
  isDrinking: "",
  isFed: "",
  isInfectiousDisease: "",
  isNightRestlessness: "",
  isShower: "",
  isSmoking: "",
  isTimingTurn: "",
  isWalk: "",
  isLossConsciousness: "",
  isWheelchair: "",
  listen: "",
  nightTimes: "",
  see: "",
  sleep: "",
  urine: "",
});
let initHealthInfo = (olderId) => {
  axios
    .get("/olderHealths", {
      params: {
        olderId,
      },
    })
    .then((res) => {
      healthInfo.value = res.data.data;
    });
};

let healthInfoBtn = ref(false);
let editHealthInfo = () => {
  healthInfoBtn.value = true;
};

let saveHealthInfo = () => {
  axios
    .post("/olderHealths", {
      ...healthInfo.value,
    })
    .then((res) => {
      ElMessage({
        message: "保存成功",
        type: "success",
      });
      healthInfoBtn.value = false;
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
