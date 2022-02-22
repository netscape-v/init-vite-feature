<template>
    <!-- <h1>HOME</h1> -->
    <el-container>
        <!-- 页侧aside -->
        <el-aside width="200px">
            <Aside>
                <slot name="Aside"></slot>
            </Aside>
        </el-aside>
        <el-container>

            <!-- 页头header -->
            <el-header height="150px">
                <Header>
                    <slot name="Header"></slot>
                </Header>
            </el-header>

            <!-- 页体main -->
            <el-main>
                <Main>
                    <slot name="Main"></slot>
                </Main>
            </el-main>
        </el-container>
    </el-container>

    <!-- 回到顶部 -->
    <el-backtop />
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

</style>