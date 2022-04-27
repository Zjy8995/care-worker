<template>
  <el-card class="admin-leave__card">
    <div class="admin-leave__card-title">请假管理</div>
    <div class="admin-leave__card-top-btn">
      <el-popconfirm title="确定执行批量操作吗？" @confirm="multiHandle">
        <template #reference>
          <el-button
            type="primary"
            :icon="Plus"
            :disabled="selectedLeaving.length === 0"
            >批量通过</el-button
          >
        </template>
      </el-popconfirm>
    </div>
    <el-table
      :data="leaveList"
      stripe
      style="width: 100%; margin-bottom: 20px"
      @selection-change="handleChange"
    >
      <el-table-column type="selection" width="55" :selectable="isSelected" />
      <el-table-column prop="name" label="请假人姓名" />
      <el-table-column prop="reason" label="请假原因" />
      <el-table-column prop="time" label="请假时间" />
      <el-table-column prop="begin" label="开始时间">
        <template #default="scope">
          {{ dateFilterYM(scope.row.begin) }}
        </template>
      </el-table-column>
      <el-table-column prop="end" label="结束时间">
        <template #default="scope">
          {{ dateFilterYM(scope.row.end) }}
        </template>
      </el-table-column>
      <el-table-column prop="updateDate" label="审核日期">
        <template #default="scope">
          <span v-if="scope.row.status == '未审核'">暂未审核</span>
          <span v-else>{{ dateFilterYM(scope.row.updateDate) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="status" label="审核状态">
        <template #default="scope">
          <el-tag v-if="scope.row.status == '未审核'">{{
            scope.row.status
          }}</el-tag>
          <el-tag type="success" v-else-if="scope.row.status == '通过'">{{
            scope.row.status
          }}</el-tag>
          <el-tag v-else type="danger">{{ scope.row.status }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="操作" fixed="right" min-width="90" align="center">
        <template #default="scope">
          <el-popconfirm
            title="确定批准吗？"
            @confirm="handleLeaving(scope.row.id, '通过')"
          >
            <template #reference>
              <el-button
                type="success"
                round
                :disabled="scope.row.status !== '未审核'"
                >批准</el-button
              >
            </template>
          </el-popconfirm>

          <el-popconfirm
            title="确定驳回吗？"
            @confirm="handleLeaving(scope.row.id, '未通过')"
          >
            <template #reference>
              <el-button
                type="info"
                round
                :disabled="scope.row.status !== '未审核'"
                >驳回</el-button
              >
              >
            </template>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-model:currentPage="page.current"
      v-model:page-size="page.size"
      :page-sizes="[10, 20, 50, 80]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="leaveCount"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    />
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Edit, Delete } from "@element-plus/icons-vue";
import { dateFilterYM } from "@/utils/dateFilter";
import axios from "axios";
let leaveList = ref([]);
let leaveCount = ref(0);
let page = ref({
  current: 1,
  size: 10,
});
onMounted(() => {
  initLeavingList();
});

let initLeavingList = () => {
  axios
    .get("/leavings", {
      params: page.value,
    })
    .then((res) => {
      leaveCount.value = res.data.data.count;
      leaveList.value = res.data.data.recordList;
    });
};
let handleLeaving = (id, val) => {
  axios
    .post("/leavings/check", {
      leavingIdList: [id],
      status: val === "通过" ? true : false,
    })
    .then((res) => {
      initLeavingList();
    });
};

let handleSizeChange = (val) => {
  page.value.size = val;
  initLeavingList();
};

let handleCurrentChange = (val) => {
  page.value.current = val;
  initLeavingList();
};

let selectedLeaving = ref([]);
let handleChange = (select) => {
  selectedLeaving.value = [];
  select.forEach((item) => {
    selectedLeaving.value.push(item.id);
  });
};

let isSelected = (row, index) => {
  return row.status === "未审核";
};

let multiHandle = () => {
  axios
    .post("/leavings/check", {
      leavingIdList: selectedLeaving.value,
      status: true,
    })
    .then((res) => {
      initLeavingList();
    });
};
</script>

<style>
.admin-leave__card {
  min-height: 80vh;
}

.admin-leave__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
  margin-left: -20px;
}

.admin-leave__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}

.admin-leave__card-top-btn {
  margin: 20px 0;
  text-align: left;
}
</style>
