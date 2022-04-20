<template>
    <el-page-header :icon="ArrowLeft" content="终极门户" />
    <!-- 标签页 -->
    <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane
            v-for="(item, index) in gateway"
            :key="index"
            :label="item.name"
            :name="item.name"
        >
            <!-- 下拉菜单 -->
            <el-button 
            v-for="(item, index) in buttons" 
            :key="index" 
            :type="item.name"
            >
            {{item.name}}</el-button>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
import { ArrowLeft } from '@element-plus/icons-vue'
import { reactive, ref } from 'vue';

const gateway = reactive([
    { id: 1, name: "美食" },
    { id: 2, name: "社区" },
    { id: 3, name: "星座" },
    { id: 4, name: "糗事" }
])

const buttons = reactive([
    { id: 1, name: "primary" },
    { id: 1, name: "success" },
    { id: 1, name: "warning" },
    { id: 1, name: "danger" }
])

const activeName = ref('first')
</script>

<style scoped>
</style>