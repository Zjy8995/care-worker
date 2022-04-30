<template>
  <el-card class="manage__card">
    <div class="manage__card-title">负责老人</div>
    <el-table :data="olderList" style="width: 100%; margin-bottom: 20px">
      <el-table-column prop="name" label="姓名" width="180" />
      <el-table-column prop="sex" label="性别" width="180" />
      <el-table-column prop="birthday" label="出生日期" />
      <el-table-column prop="createDate" label="创建日期" />
      <el-table-column label="操作">
        <template #default="scope">
          <el-button type="primary" size="small" @click="checkDetail(scope.row)"
            >查看详情</el-button
          >
          <el-button type="danger" size="small">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="page.current"
      v-model:page-size="page.size"
      :page-sizes="[10, 20, 50, 80]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="olderCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Edit, Delete } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import axios from "axios";

let store = useStore();
let router = useRouter();
let olderCount = ref(0);
let page = ref({
  current: 1,
  size: 10,
});
let olderList = ref([]);

onMounted(() => {
  initOlderList();
});

let initOlderList = () => {
  axios
    .get("/olders", {
      params: {
        ...page.value,
      },
    })
    .then((res) => {
      olderCount.value = res.data.data.count;
      olderList.value = res.data.data.recordList;
    });
};

let handleSizeChange = (val) => {
  page.value.size = val;
  initOlderList();
};

let handleCurrentChange = (val) => {
  page.value.current = val;
  initOlderList();
};

let checkDetail = (row) => {
  store.commit("setCurOlderId", row.id);
  store.commit("setCurOlderName", row.name);
  router.push("/care/detail-older");
};
</script>

<style>
.manage__card {
  min-height: 80vh;
}

.manage__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
  margin-left: -20px;
  margin-bottom: 20px;
}

.manage__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}
</style>
