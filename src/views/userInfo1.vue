<template>
    <div class="function">
        <div class="content">
            <div class="header">
                <div class="back" @click="handleBack">
                    <el-icon><Back /></el-icon>
                    <p>完善个人信息</p>
                </div>
                <img :src="img1" alt="" />
            </div>
            <div class="bd">
                <div class="timeLine">
                    <div
                        v-for="item in timeData"
                        :key="item.id"
                        class="timeItem"
                    >
                        <span
                            :class="
                                activeData.includes(item.id)
                                    ? 'active'
                                    : 'noActive'
                            "
                            >{{ item.id }}</span
                        >
                        <p>{{ item.title }}</p>
                        <div class="line">
                            <hr />
                        </div>
                    </div>
                </div>
                <div class="form">
                    <el-form
                        ref="ruleFormRef"
                        :model="ruleForm"
                        :rules="rules"
                        label-width="120px"
                        class="demo-ruleForm"
                        :size="formSize"
                        status-icon
                    >
                        <el-form-item label="联系人一：" prop="one_relation">
                            <el-col :span="8">
                                <el-select
                                    v-model="ruleForm.one_relation"
                                    placeholder="请选择关系"
                                >
                                    <el-option
                                        v-for="item in relationData"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    />
                                </el-select>
                            </el-col>
                            <el-col :span="16">
                                <el-input
                                    v-model="ruleForm.one_name"
                                    placeholder="请输入联系人名称"
                                />
                            </el-col>
                        </el-form-item>
                        <el-form-item prop="one_phone">
                            <el-input
                                v-model="ruleForm.one_phone"
                                placeholder="请输入手机号码"
                            />
                        </el-form-item>
                        <div class="aaaa"></div>
                        <el-form-item label="联系人二：" prop="course">
                            <el-col :span="8">
                                <el-select
                                    v-model="ruleForm.two_relation"
                                    placeholder="请选择关系"
                                >
                                    <el-option
                                        v-for="item in relationData"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    />
                                </el-select>
                            </el-col>
                            <el-col :span="16">
                                <el-input
                                    v-model="ruleForm.two_name"
                                    placeholder="请输入联系人名称"
                                />
                            </el-col>
                        </el-form-item>
                        <el-form-item prop="two_phone">
                            <el-input
                                v-model="ruleForm.two_phone"
                                placeholder="请输入手机号码"
                            />
                        </el-form-item>
                        <el-form-item>
                            <el-button
                                @click="
                                    () => {
                                        router.push('./')
                                    }
                                "
                                >取消</el-button
                            >
                            <el-button type="primary" @click="onBack">
                                上一步
                            </el-button>
                            <el-button type="primary" @click="onFront">
                                下一步
                            </el-button>
                        </el-form-item>
                    </el-form>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive } from 'vue'
    import getAssetsFile from '../util/getAssetsFile'

    import type { FormInstance, FormRules } from 'element-plus'

    import { useRouter } from 'vue-router'

    const router = useRouter()

    const img1: string = getAssetsFile('logo.png')

    const activeData = [1, 2]

    const relationData = [
        {
            id: 1,
            label: '父亲',
            value: 'father',
        },
        {
            id: 2,
            label: '母亲',
            value: 'mather',
        },
        {
            id: 3,
            label: '其他',
            value: 'other',
        },
    ]

    const timeData = [
        {
            id: 1,
            title: '填写个人信息',
        },
        {
            id: 2,
            title: '填写联系人信息',
        },
        {
            id: 3,
            title: '自我评价',
        },
    ]

    interface RuleForm {
        one_relation: string
        one_name: string
        one_phone: string
        two_relation: string
        two_name: string
        two_phone: string
    }

    const ruleFormRef = ref<FormInstance>()

    const formSize = ref('default')

    const ruleForm = reactive({
        one_relation: '',
        one_name: '',
        one_phone: '',
        two_relation: '',
        two_name: '',
        two_phone: '',
    })

    const rules = reactive<FormRules<RuleForm>>({
        one_name: [
            {
                required: true,
                message: '请输入姓名',
                trigger: 'blur',
            },
        ],
        two_name: [
            {
                required: true,
                message: '请输入姓名',
                trigger: 'blur',
            },
        ],
    })

    const handleBack = () => {
        router.push('/')
    }

    const onBack = () => {
        router.push('/userInfo')
    }

    const onFront = () => {
        router.push('/userInfo3')
    }
</script>

<style scoped lang="scss">
    .function {
        background-color: #ebeced;
        display: flex;
        justify-content: center;
        align-items: center;
        .content {
            width: 80rem;
            .header {
                margin-bottom: 10px;
                background-color: #fff;
                box-shadow: 0 2px 4px #e5e5e580;
                padding: 0 32px;
                height: 80px;
                display: flex;
                justify-content: space-between;
                align-items: center;
                img {
                    width: 380px;
                    height: 58px;
                }
                .back {
                    display: flex;
                    align-items: center;
                    p {
                        margin-left: 10px;
                        color: #00205b;
                        font-size: 18px;
                    }
                }
            }
            .bd {
                background-color: #fff;
                border-radius: 4px;
                padding: 10px 20px;
                .timeLine {
                    display: flex;
                    justify-content: center;
                    margin: 60px 0;
                    .timeItem {
                        display: flex;
                        align-items: center;
                        .active {
                            width: 30px;
                            height: 30px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            background-color: #1890ff;
                            border-radius: 50%;
                            color: white;
                        }
                        .noActive {
                            width: 30px;
                            height: 30px;
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius: 50%;
                            border: solid 1px #d9d9d9;
                            color: #d9d9d9;
                        }
                        p {
                            margin: 0 10px;
                        }
                        .line {
                            width: 150px;
                            padding-right: 10px;
                            hr {
                                height: 0;
                                width: 100%;
                                border-top: none;
                                border-bottom: solid 1px #d9d9d9;
                            }
                        }
                    }
                    .timeItem:last-child {
                        .line {
                            display: none;
                        }
                    }
                }
                .form {
                    width: 100%;
                    display: flex;
                    justify-content: center;
                    .el-form {
                        width: 50%;
                        .el-select {
                            width: 100%;
                        }

                        .aaaa {
                            width: 100%;
                            height: 20px;
                        }
                    }
                }
            }
        }
    }
</style>
