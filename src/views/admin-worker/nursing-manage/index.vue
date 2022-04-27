<template>
  <el-card class="nursing-manage__card">
    <div class="nursing-manage__card-title">护理项目</div>
    <div class="nursing-manage__card-ctx">
      <el-tree
        class="nursing-manage__card-ctx-tree"
        :data="categoryTreeList"
        :props="{
          children: 'children',
          label: 'name',
        }"
        @node-click="handleNodeClick"
      />
      <div class="nursing-manage__card-ctx-table">
        <h4 style="text-align: left">项目列表</h4>
        <div class="nursing-manage__card-top-btn">
          <div>
            <el-button
              type="primary"
              size="small"
              @click="openAddDialog"
              :icon="Plus"
              >新增项目</el-button
            >
            <el-popconfirm
              title="确定删除吗？"
              @confirm="handleNursing(selectedNursing)"
            >
              <template #reference>
                <el-button type="danger" size="small" :icon="Delete"
                  >批量删除</el-button
                >
              </template>
            </el-popconfirm>
          </div>
        </div>
        <el-table
          style="width: 100%; margin: 20px 0"
          :data="nursingList"
          row-key="id"
          @selection-change="handleChange"
        >
          <el-table-column type="selection" />
          <el-table-column prop="name" label="项目名称" />
          <el-table-column prop="info" label="项目内容" width="500" />
          <el-table-column prop="time" label="所需时间">
            <template #default="scope"> {{ scope.row.time }}min </template>
          </el-table-column>
          <el-table-column prop="catagoryName" label="分类名称" />
          <el-table-column prop="catagoryId" label="分类Id" />
          <el-table-column label="操作" width="150">
            <template #default="scope">
              <el-button
                type="primary"
                size="small"
                @click="openUpdateDialog(scope.row)"
                >编辑</el-button
              >
              <el-popconfirm
                title="确定删除吗？"
                @confirm="handleNursing([scope.row.id])"
              >
                <template #reference>
                  <el-button type="danger" size="small">删除</el-button>
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
          :total="nursingCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
    <el-dialog
      v-model="updateDialogVisible"
      :title="judgeAddUpdate ? '新增项目' : '修改项目信息'"
      width="30%"
    >
      <el-form :model="nursingForm" label-width="80px">
        <el-form-item label="项目ID" v-if="!judgeAddUpdate">
          <el-input v-model="nursingForm.id" disabled />
        </el-form-item>
        <el-form-item label="项目名称">
          <el-input v-model="nursingForm.name" />
        </el-form-item>
        <el-form-item label="所属分类">
          <el-select
            v-model="nursingForm.catagoryId"
            placeholder="请选择所属分类"
          >
            <el-option
              v-for="(item, index) in categoryList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="项目内容">
          <el-input v-model="nursingForm.info" />
        </el-form-item>
        <el-form-item label="所需时间">
          <el-input v-model="nursingForm.time" />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="updateDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleUpdateNursing"
            >确定</el-button
          >
        </span>
      </template>
    </el-dialog>
  </el-card>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Plus, Edit, Delete } from "@element-plus/icons-vue";
import { ElMessage } from "element-plus";
import axios from "axios";
let nursingCount = ref(0);
let nursingList = ref([]);
let page = ref({
  current: 1,
  size: 10,
});
onMounted(() => {
  initCategoryList();
  initNuringList();
});

let categoryTreeList = ref([
  {
    name: "护理项目分类",
    children: [],
  },
]);

let categoryList = ref([]);

let initCategoryList = () => {
  axios.get("/catagories").then((res) => {
    categoryList.value = [...res.data.data.recordList];
    categoryTreeList.value[0].children = [...res.data.data.recordList];
    categoryTreeList.value[0].children.unshift({
      id: 0,
      name: "全部",
    });
    console.log(categoryList.value);
  });
};
let initNuringList = () => {
  let url = "/nursingProjectsByCatagory";
  if (curCategoryId.value === 0) {
    url = "/nursingProjects";
  } else {
    url = "/nursingProjectsByCatagory";
  }
  axios
    .get(url, {
      params: {
        ...page.value,
        catagoryId: curCategoryId.value,
      },
    })
    .then((res) => {
      nursingCount.value = res.data.data.count;
      nursingList.value = res.data.data.recordList;
    });
};

let handleSizeChange = (val) => {
  page.value.size = val;
  initNuringList();
};

let handleCurrentChange = (val) => {
  page.value.current = val;
  initNuringList();
};

let selectedNursing = ref([]);
let handleChange = (select) => {
  selectedNursing.value = [];
  select.forEach((item) => {
    selectedNursing.value.push(item.id);
  });
};

let handleNursing = (list) => {
  axios.delete("/nursingProjects", { data: list }).then((res) => {
    ElMessage({
      message: res.data.msg,
      type: res.data.code === 1000 ? "success" : "error",
    });
    initNuringList();
  });
};

let curCategoryId = ref(0);
let handleNodeClick = (node) => {
  if (node.id !== undefined) {
    curCategoryId.value = node.id;
    initNuringList();
  }
};

let updateDialogVisible = ref(false);
let judgeAddUpdate = ref(false);
let nursingForm = ref({
  id: 0,
  catagoryId: 0,
  name: "",
  info: null,
  time: null,
});

let openAddDialog = () => {
  updateDialogVisible.value = true;
  judgeAddUpdate.value = true;
  nursingForm.value = {
    name: "",
    catagoryId: null,
    info: null,
    time: null,
  };
};

let openUpdateDialog = (row) => {
  updateDialogVisible.value = true;
  judgeAddUpdate.value = false;
  nursingForm.value = { ...row };
};

let handleUpdateNursing = () => {
  axios.post("/nursingProjects", nursingForm.value).then((res) => {
    ElMessage({
      message: res.data.msg,
      type: res.data.code === 1000 ? "success" : "error",
    });
    updateDialogVisible.value = false;
    initNuringList();
  });
};
</script>

<style scoped>
.nursing-manage__card {
  min-height: 80vh;
}

.nursing-manage__card ::v-deep .el-card__body {
  height: 80vh;
}

.nursing-manage__card-title {
  font-size: 16px;
  font-weight: 700;
  color: #202a34;
  text-align: left;
  margin-left: -20px;
}

.nursing-manage__card-title:before {
  content: "";
  width: 24px;
  height: 16px;
  border-left: 3px solid #0081ff;
  margin-right: 20px;
}

.nursing-manage__card-top-btn {
  margin-top: 20px;
  text-align: left;
}

.nursing-manage__card-ctx {
  display: flex;
  height: 100%;
}

.nursing-manage__card-ctx-tree {
  width: 200px;
  margin-top: 20px;
}

.nursing-manage__card-ctx-table {
  flex: 1;
  margin-top: 20px;
  border-left: 1px solid #eee;
  padding-left: 20px;
}
</style>
