<template>
  <div>
    <div class="header">
      <slot name="header" class="title"> 数据管理 </slot>
    </div>
    <div class="header-bottom">
      <div>
        <slot name="add" v-if="isShowAddBtn">
          <el-button type="primary" size="small" @click="addBtn" :icon="Plus"
            >新增</el-button
          >
        </slot>
        <slot name="delete" v-if="isShowDeleteBtn">
          <el-button
            type="danger"
            size="small"
            @click="delBtn"
            :icon="Delete"
            :disabled="select.length === 0"
            >批量删除</el-button
          >
        </slot>
      </div>

      <slot name="search" v-if="isShowSearchBtn">
        <div style="margin-left: auto">
          <el-input
            v-model="keywords"
            :prefix-icon="Search"
            size="small"
            :placeholder="searchBtnPlaceholder"
            style="width: 200px"
          />
          <el-button
            type="primary"
            size="small"
            style="margin-left: 1rem"
            @click="searchBtn"
          >
            搜索
          </el-button>
        </div>
      </slot>
    </div>
    <slot name="middle"></slot>
    <el-table
      style="width: 100%"
      :data="tableData"
      row-key="id"
      @selection-change="handleSelectionChange"
      @expand-change="handleExpand"
    >
      <template v-if="isShowSelection">
        <el-table-column type="selection" width="55" />
      </template>
      <template v-if="isShowIndex">
        <el-table-column type="index" width="55" />
      </template>
      <el-table-column type="expand" v-if="isExpand">
        <template #default="scope">
          <slot name="expand" :row="scope.row"></slot>
        </template>
      </el-table-column>
      <template v-for="propItem in propList" :key="propItem.label">
        <el-table-column
          v-bind="propItem"
          :align="propItem.align ? propItem.align : 'center'"
        >
          <template #default="scope">
            <slot :name="propItem.prop" :row="scope.row">
              {{ scope.row[propItem.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>

      <el-table-column label="操作" fixed="right" min-width="90" align="center">
        <template #default="scope">
          <slot name="edit" :row="scope.row"></slot>
        </template>
      </el-table-column>
    </el-table>

    <div class="footer" v-if="pageCount !== 0">
      <slot class="page">
        <el-pagination
          :currentPage="page.currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="page.size"
          layout="total, sizes, prev, pager, next, jumper"
          :total="pageCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { Plus, Delete, Search } from "@element-plus/icons-vue";
export default defineComponent({
  props: {
    tableData: {
      type: Array,
      default: () => [],
      // required: true
    },
    propList: {
      type: Object,
      required: true,
    },
    isShowSelection: {
      type: Boolean,
      default: false,
    },
    isShowIndex: {
      type: Boolean,
      default: false,
    },
    isExpand: {
      type: Boolean,
      default: false,
    },
    isShowAddBtn: {
      type: Boolean,
      default: false,
    },
    isShowDeleteBtn: {
      type: Boolean,
      default: false,
    },
    isShowSearchBtn: {
      type: Boolean,
      default: false,
    },
    searchBtnPlaceholder: {
      type: String,
      default: "",
    },
    page: {
      type: Object,
      default: () => ({ currentPage: 2, size: 10 }),
    },
    pageCount: {
      type: Number,
      default: 0,
    },
  },
  emits: [
    "update:page",
    "add-btn",
    "selection",
    "del-btn",
    "search-btn",
    "expand-change",
  ],
  setup(props, { emit }) {
    const keywords = ref("");
    const handleSizeChange = (size) => {
      emit("update:page", { ...props.page, size });
    };

    const handleCurrentChange = (currentPage) => {
      emit("update:page", { ...props.page, currentPage });
    };

    const addBtn = () => {
      emit("add-btn");
    };

    const delBtn = () => {
      emit("del-btn");
    };

    const handleExpand = (row, expandedRows) => {
      emit("expand-change", { ...row });
    };

    const select = ref([]);

    const handleSelectionChange = (selection) => {
      // selection 为当前所选中的数据,数组类型
      select.value = selection;

      emit("selection", selection);
    };

    const searchBtn = () => {
      emit("search-btn", keywords.value);
    };

    return {
      keywords,
      handleSizeChange,
      handleCurrentChange,
      select,
      handleSelectionChange,
      addBtn,
      delBtn,
      searchBtn,
      handleExpand,
      Plus,
      Search,
      Delete,
    };
  },
});
</script>

<style scoped>
.header {
  margin-left: -20px;
}

.footer {
  margin-top: 20px;
  text-align: right;
}

.header-bottom {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 10px 0;
}
</style>
