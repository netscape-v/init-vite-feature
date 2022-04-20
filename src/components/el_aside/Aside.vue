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
    <el-menu default-active="1" class="el-menu-vertical-demo">
        <el-menu-item v-for="(item, index) in menus" :index="item.id">
            <el-icon>
                <compass />
                <!-- {{item.type}} -->
                <!-- <div v-html="item.type"></div> -->
                <!-- <div v-html="'<h1>H</h1>'"></div> -->
            </el-icon>
            <span>{{ item.name }}</span>
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
    Compass
} from '@element-plus/icons-vue'

// 图标地址
const state = reactive({
    circleUrl:
        'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'
})

const menus = reactive([
    { id: '1', name: "文档", type: '<compass />' },
    { id: '2', name: "电脑", type: '<Location />' },
    { id: '3', name: "音乐", type: '<Document />' },
    { id: '4', name: "视频", type: '<Menu />' },
    { id: '5', name: "系统", type: '<Setting />' },
])


const { circleUrl } = toRefs(state)
</script>

<style scoped>
.demo-basic .sub-title {
    margin-left: 30px;
    margin-bottom: 30px;
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
    margin-left: 72px;
    flex: 2;
}
.demo-basic .el-col:not(:last-child) {
    border-right: 1px solid var(--el-border-color-base);
}

.el-row.demo-avatar.demo-basic {
    background-color: rgb(10, 10, 41);
}
</style>