<template>
  <div>
    <el-descriptions title="护工信息" :column="2" border>
      <template #extra v-if="!route.path.includes('care')">
        <el-button
          type="primary"
          size="small"
          @click="editCareInfo"
          :disabled="careInfoBtn"
          >编辑</el-button
        >
        <el-button
          type="primary"
          size="small"
          v-if="careInfoBtn"
          @click="saveCareInfo"
          >保存</el-button
        >
      </template>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">姓名：</div>
        </template>
        <el-select
          v-model="careInfo.id"
          placeholder="请选择一个护工"
          :disabled="!careInfoBtn"
        >
          <el-option
            :label="item.name"
            :value="item.id"
            v-for="(item, index) in careList"
          />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">证件照：</div>
        </template>
        <el-image
          style="width: 100px; height: 100px"
          :src="careInfo.avatar"
          fit="fill"
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
          <div class="cell-item">性别：</div>
        </template>
        {{ careInfo.sex }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">出生日期：</div>
        </template>
        {{ dateFilterYM(careInfo.birthday) }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">身份证号：</div>
        </template>
        {{ careInfo.idCard }}
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">邮箱：</div>
        </template>
        {{ careInfo.email }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">家庭住址：</div>
        </template>
        {{ careInfo.address }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">护理等级：</div>
        </template>
        {{ careInfo.level }}
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">简介：</div>
        </template>
        {{ careInfo.info }}
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { ElMessage } from "element-plus";
import { useStore } from "vuex";
import { dateFilterYM } from "@/utils/dateFilter";
import axios from "axios";
let router = useRouter();
let route = useRoute();
let store = useStore();
onMounted(() => {
  if (store.state.curOlderId) {
    initCareInfo(store.state.curOlderId);
    initCareList();
  }
});

let careInfo = ref({});
let initCareInfo = (olderId) => {
  axios
    .get("/caregiverInfo", {
      params: {
        olderId,
      },
    })
    .then((res) => {
      careInfo.value = res.data.data;
    });
};

let careInfoBtn = ref(false);
let careList = ref([]);
let initCareList = () => {
  axios.get("/caregivers").then((res) => {
    careList.value = res.data.data.recordList;
  });
};
let editCareInfo = () => {
  careInfoBtn.value = true;
};
let saveCareInfo = () => {
  axios
    .post("/older/caregiver/bing", {
      caregiver: careInfo.value.id,
      id: careInfo.value.id,
      olderId: store.state.curOlderId,
    })
    .then((res) => {
      ElMessage({
        message: "保存成功",
        type: "success",
      });
      careInfoBtn.value = false;
      initCareInfo();
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
