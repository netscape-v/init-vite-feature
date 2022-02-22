<template>
    <div class="login_container">
        <div class="login_box">
            <!-- 头像区域 -->
            <div class="avatar_box">
                <img src="../../assets/logo.png" />
            </div>
            <!-- 登录表单区域 -->
            <el-form
                ref="ruleFormRef"
                :model="loginForm"
                :rules="rules"
                label-width="0px"
                class="login_form"
            >
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input v-model="loginForm.username"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <!-- 按钮区域 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetForm(ruleFormRef)">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
import router from '../../routers/router.js'

type FormInstance = InstanceType<typeof ElForm>
const ruleFormRef = ref<FormInstance>()

// 这是登录表单的数据绑定对象
const loginForm = reactive({
    username: 'admin',
    password: '123456',
    // checkPass: '',
})


// 自定义校验规则---username
const validatePass = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入用户名'))
    } else {
        if (loginForm.username !== '') {
            if (!ruleFormRef.value) return
            ruleFormRef.value.validateField('username', () => null)
        }
        callback()
    }
}
// 自定义校验规则---password
const validatePass2 = (rule: any, value: any, callback: any) => {
    if (value === '') {
        callback(new Error('请输入登录密码'))
    } else if (value !== loginForm.password) {
        callback(new Error("密码格式不对!"))
    } else {
        callback()
    }
}

// 这是表单的验证规则对象
const rules = reactive({
    // 验证用户名是否合法
    username: [
        { validator: validatePass, /* required: true, message: '请输入登录名称', */ trigger: 'blur' },
        { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
    ],
    // 验证密码是否合法
    password: [
        { validator: validatePass2, /* required: true, message: '请输入登录密码', */ trigger: 'blur' },
        { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
    ]
})


// 点击重置按钮，重置登录表单
function resetForm(ElForm: FormInstance | undefined) {
    // console.log("卧槽", ruleFormRef.value)
    if (!ElForm) return
    ElForm.resetFields()
}

function login() {
    ElMessage.success("干杯! []~(￣▽￣)~*")
    // window.sessionStorage.setItem('token', res.data.token)
    // 2. 通过编程式导航跳转到后台主页，路由地址是 /home
    router.push('home')
}


</script>

<style lang="less" scoped>
.login_container {
    background-color: #2b4b6b;
    height: 100%;
}

.login_container {
    background-color: #2b4b6b;
    height: 100%;
}

.login_box {
    width: 450px;
    height: 300px;
    background-color: #fff;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);

    .avatar_box {
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            background-color: #eee;
        }
    }
}

.login_form {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 0 20px;
    box-sizing: border-box;
}

.btns {
    display: flex;
    justify-content: flex-end;
}
</style>