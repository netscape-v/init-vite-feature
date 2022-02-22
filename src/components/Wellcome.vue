<template>
    <div>
        <el-image :src="url2" ></el-image>
    </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import router from '../routers/router.js'

// const url1 = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
// geihub 静态资源
const url2 = 'https://netscape-v.github.io/static-resource/Vue3.jpg'

// 生命周期钩子
onMounted(()=>{
    console.log("触发器")
    jumpTo()
})

// 定时跳转到登陆界面
function jumpTo(){
    setTimeout(()=>{
        router.push('/login')
    },3000)
}


</script>

<style scoped>
.demo-image__lazy {
    height: 400px;
    overflow-y: auto;
}
.demo-image__lazy .el-image {
    display: block;
    min-height: 200px;
    margin-bottom: 10px;
}

.demo-image__lazy .el-image:last-child {
    margin-bottom: 0;
}
</style>