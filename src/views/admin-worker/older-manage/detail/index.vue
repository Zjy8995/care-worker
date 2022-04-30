<template>
  <div>
    <el-descriptions title="基础信息" :column="2" border>
      <template #extra v-if="!route.path.includes('care')">
        <el-button
          type="primary"
          size="small"
          @click="editBaseInfo"
          :disabled="baseInfoBtn"
          >编辑</el-button
        >
        <el-button
          type="primary"
          size="small"
          v-if="baseInfoBtn"
          @click="saveBaseInfo"
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
        <el-input :disabled="!baseInfoBtn" v-model="baseInfo.name" />
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
        <el-input :disabled="!baseInfoBtn" v-model="baseInfo.idCard" />
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">性别：</div>
        </template>
        <el-input :disabled="!baseInfoBtn" v-model="baseInfo.sex" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">生日：</div>
        </template>
        <el-input :disabled="!baseInfoBtn" v-model="baseInfo.birthday" />
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">民族：</div>
        </template>
        <el-input :disabled="!baseInfoBtn" v-model="baseInfo.national" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">户籍地：</div>
        </template>
        <el-input
          :disabled="!baseInfoBtn"
          v-model="baseInfo.birthRegistration"
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
          <div class="cell-item">简介：</div>
        </template>
        <el-input :disabled="!baseInfoBtn" v-model="baseInfo.info" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">入院方式：</div>
        </template>
        <el-input :disabled="!baseInfoBtn" v-model="baseInfo.hospitalWay" />
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">入院原因：</div>
        </template>
        <el-input :disabled="!baseInfoBtn" v-model="baseInfo.hospitalReason" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions border>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">子女人数：</div>
        </template>
        <el-input :disabled="!baseInfoBtn" v-model="baseInfo.childNum" />
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">医保：</div>
        </template>
        <el-input
          :disabled="!baseInfoBtn"
          v-model="baseInfo.medicalInsurance"
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
          <div class="cell-item">入院前居住情况：</div>
        </template>
        <el-input
          :disabled="!baseInfoBtn"
          v-model="baseInfo.beforeLivingSituation"
        />
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        label-align="right"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">护理等级：</div>
        </template>
        <el-input :disabled="!baseInfoBtn" v-model="baseInfo.careLevel" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions
      title="住宿信息"
      :column="4"
      border
      direction="vertical"
      style="margin: 30px 0"
    >
      <template #extra v-if="!route.path.includes('care')">
        <el-button
          type="primary"
          size="small"
          @click="editHouseInfo"
          :disabled="houseInfoBtn"
          >编辑</el-button
        >
        <el-button
          type="primary"
          size="small"
          v-if="houseInfoBtn"
          @click="saveHouseInfo"
          >保存</el-button
        >
      </template>
      <el-descriptions-item
        label-class-name="desc-item"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">病房地址</div>
        </template>
        <el-select
          v-model="houseInfo.addr"
          :disabled="!houseInfoBtn"
          placeholder="请选择房间号"
        >
          <el-option
            :label="item.addr"
            :value="item.addr"
            v-for="(item, index) in roomInfo"
          />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">病床数量</div>
        </template>
        <el-input disabled v-model="houseInfo.num" />
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">所在床位</div>
        </template>
        <el-select
          v-model="houseInfo.bedName"
          :disabled="!houseInfoBtn"
          placeholder="请选择床位号"
        >
          <el-option
            :label="item.name"
            :value="item.name"
            v-for="(item, index) in bedInfo"
          />
        </el-select>
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">负责护工</div>
        </template>
        <el-input disabled v-model="houseInfo.caregiverName" />
      </el-descriptions-item>
    </el-descriptions>

    <el-descriptions title="家属信息" :column="4" border direction="vertical">
      <template #extra v-if="!route.path.includes('care')">
        <el-button
          type="primary"
          size="small"
          @click="editRelationInfo"
          :disabled="relationInfoBtn"
          >编辑</el-button
        >
        <el-button
          type="primary"
          size="small"
          v-if="relationInfoBtn"
          @click="saveRelationInfo"
          >保存</el-button
        >
      </template>
      <el-descriptions-item
        label-class-name="desc-item"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">姓名</div>
        </template>
        <el-input :disabled="!relationInfoBtn" v-model="relationInfo.name" />
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">手机号</div>
        </template>
        <el-input :disabled="!relationInfoBtn" v-model="relationInfo.phone" />
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">与老人关系</div>
        </template>
        <el-input
          :disabled="!relationInfoBtn"
          v-model="relationInfo.relationship"
        />
      </el-descriptions-item>
      <el-descriptions-item
        label-class-name="desc-item"
        class-name="desc-item-ctx"
      >
        <template #label>
          <div class="cell-item">工作地</div>
        </template>
        <el-input
          :disabled="!relationInfoBtn"
          v-model="relationInfo.wordAddress"
        />
      </el-descriptions-item>
    </el-descriptions>
  </div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useStore } from "vuex";
import { ElMessage } from "element-plus";
import axios from "axios";
let router = useRouter();
let route = useRoute();
let store = useStore();
onMounted(() => {
  if (store.state.curOlderId) {
    initBaseInfo(store.state.curOlderId);
    initStayInfo(store.state.curOlderId);
    initRelationInfo(store.state.curOlderId);
    initRoomList();
  }
});

let baseInfo = ref({
  avatar: "",
  beforeLivingSituation: "",
  birthRegistration: "",
  birthday: "",
  careLevel: "",
  childNum: "",
  hospitalReason: "",
  hospitalWay: "",
  idCard: "",
  info: "",
  medicalInsurance: "",
  name: "",
  national: "",
  sex: "",
});
let initBaseInfo = (olderId) => {
  axios
    .get("/older", {
      params: {
        olderId,
      },
    })
    .then((res) => {
      baseInfo.value = res.data.data;
      store.commit("setCurOlderAvatar", baseInfo.value.avatar);
    });
};

let baseInfoBtn = ref(false);
let editBaseInfo = () => {
  baseInfoBtn.value = true;
};

let saveBaseInfo = () => {
  axios.post("/olders", baseInfo.value).then((res) => {
    ElMessage({
      message: "保存成功",
      type: "success",
    });
    baseInfoBtn.value = false;
  });
};

let houseInfo = ref({
  id: "",
  addr: "",
  bedName: "",
  caregiverName: "",
  num: "",
});
let initStayInfo = (olderId) => {
  axios
    .get("/houseInfo", {
      params: {
        olderId,
      },
    })
    .then((res) => {
      houseInfo.value = res.data.data;
    });
};

let roomInfo = ref([]);
let bedInfo = ref([]);
let initRoomList = () => {
  axios.get("/rooms").then((res) => {
    console.log(res);
    roomInfo.value = res.data.data.recordList;
  });
};
watch(
  () => houseInfo.value.addr,
  (cur, pre) => {
    if (pre !== "") {
      let id = roomInfo.value.find((item) => item.addr === cur).id;
      axios
        .get("/listBedsByRoomId", {
          params: {
            roomId: id,
          },
        })
        .then((res) => {
          bedInfo.value = res.data.data;
          houseInfo.value.bedName = bedInfo.value[0]?.name || "";
        });
    }
  }
);
let houseInfoBtn = ref(false);
let editHouseInfo = () => {
  houseInfoBtn.value = true;
};
let saveHouseInfo = () => {
  houseInfoBtn.value = false;
};

let relationInfo = ref({
  name: "",
  phone: "",
  relationship: "",
  wordAddress: "",
});
let initRelationInfo = (olderId) => {
  axios
    .get("/guardians", {
      params: {
        olderId,
      },
    })
    .then((res) => {
      relationInfo.value = res.data.data[0];
    });
};
let relationInfoBtn = ref(false);
let editRelationInfo = () => {
  relationInfoBtn.value = true;
};
let saveRelationInfo = () => {
  axios.post("/guardians", relationInfo.value).then((res) => {
    ElMessage({
      message: "保存成功",
      type: "success",
    });
    relationInfoBtn.value = false;
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
