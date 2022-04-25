<template>
    <el-card class="admin-home__card">
        <div class="admin-home__card-title">
            首页
        </div>
    </el-card>
</template>

<script setup>
</script>

<style>
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
        content: '';
        width: 24px;
        height: 16px;
        border-left: 3px solid #0081ff;
        margin-right: 20px;
    }
</style>
