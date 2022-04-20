<template>
    <div class="common-layout">
        <!-- <h1>HOME</h1> -->
        <el-container>
            <!-- 页侧aside -->
            <el-aside width="200px">
                <Aside>
                    <!-- <slot name="Aside"></slot> -->
                </Aside>
            </el-aside>
            <el-container>
                <!-- 页头header -->
                <el-header height="150px">
                    <Header>
                        <!-- <slot name="Header"></slot> -->
                    </Header>
                </el-header>

                <!-- 页体main -->
                <el-main>
                    <Main>
                        <!-- <slot name="Main"></slot> -->
                    </Main>
                </el-main>
            </el-container>
        </el-container>

        <!-- 回到顶部 -->
        <el-backtop />
    </div>
</template>

<script setup lang="ts">

import { defineComponent } from 'vue'

// 组件资源
import isAside from '../el_aside/Aside.vue'
import isHeader from '../el_aside/Aside.vue'
import isMain from '../el_mains/main.vue'

defineComponent([
    { name: "Aside", components: { isAside } },
    { name: "Header", components: { isHeader } },
    { name: "Main", components: { isMain } }
])

</script>

<style scoped>
.common-layout .el-header {
    --el-header-padding: 0 45px;
}
.common-layout .el-footer {
    background-color: #c5ccd6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 50px;
}
.common-layout .el-footer {
    line-height: 60px;
}

.common-layout .el-aside {
    background-color: #d3dce6;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 40px;
}

.common-layout .el-main {
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
    line-height: 160px;
}

.common-layout > .el-container {
    margin-bottom: 40px;
}

.common-layout .el-container:nth-child(5) .el-aside,
.common-layout .el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.common-layout .el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>