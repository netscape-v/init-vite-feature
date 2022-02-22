<template>
    <!-- 页侧 -->
    <el-row class="demo-avatar demo-basic">
        <!-- 头像区 -->
        <div class="sub-title">门户管理系统</div>
        <el-col :span="12">
            <div class="demo-basic--circle">
                <div class="block">
                    <el-avatar :size="50" :src="circleUrl"></el-avatar>
                </div>
            </div>
        </el-col>
    </el-row>
    <!-- 侧边菜单 -->
    <el-menu default-active="2" class="el-menu-vertical-demo">
        <el-menu-item index="2">
            <el-icon>
                <icon-menu />
            </el-icon>
            <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon>
                <icon-menu />
            </el-icon>
            <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="2">
            <el-icon>
                <icon-menu />
            </el-icon>
            <span>Navigator four</span>
        </el-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue'

// LOG
import {
    Location,
    Document,
    Menu as IconMenu,
    Setting,
} from '@element-plus/icons-vue'

// 图标地址
const state = reactive({
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})

const { circleUrl } = toRefs(state)
</script>

<style scoped>
.demo-basic .sub-title {
    margin-left: 20px;
    margin-bottom: 20px;
    font-size: 20px;
    color: var(--el-text-color-secondary);
}
.demo-basic .demo-basic--circle,
.demo-basic .demo-basic--square {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.demo-basic .block:not(:last-child) {
    border-right: 1px solid var(--el-border-color-base);
}
.demo-basic .block {
    margin-left: 50px;
    flex: 2;
}
.demo-basic .el-col:not(:last-child) {
    border-right: 1px solid var(--el-border-color-base);
}
</style>