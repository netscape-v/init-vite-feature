<template>
    <!-- 面包屑导航 -->
    <el-breadcrumb :separator-icon="ArrowRight" class="el-breadcrumb">
        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
        <el-breadcrumb-item v-for="item in items">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { ArrowRight, ArrowLeft } from '@element-plus/icons-vue'

// v-for="item in items"
const items = reactive([1, 2, 3, 4, 5, 6])
</script>

<style scoped>
</style>