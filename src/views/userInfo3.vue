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
                        <el-form-item label="兴趣爱好:" prop="love">
                            <el-input
                                v-model="ruleForm.love"
                                type="textarea"
                                :autosize="{ minRows: 4 }"
                                placeholder="请输入，限制200字"
                                maxlength="200"
                            />
                        </el-form-item>
                        <el-form-item label="获奖情况:" prop="prize">
                            <el-input
                                v-model="ruleForm.prize"
                                type="textarea"
                                :autosize="{ minRows: 4 }"
                                placeholder="请输入，限制200字"
                                maxlength="200"
                            />
                        </el-form-item>
                        <el-form-item
                            label="社会实践经验:"
                            prop="socialPractice"
                        >
                            <el-input
                                v-model="ruleForm.socialPractice"
                                type="textarea"
                                :autosize="{ minRows: 4 }"
                                placeholder="请输入，限制200字"
                                maxlength="200"
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
                            <el-button type="primary"> 提交 </el-button>
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

    const activeData = [1, 2, 3]

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
    console.log('🚀 ~ file: userInfo3.vue:125 ~ relationData:', relationData)

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
        love: string
        prize: string
        socialPractice: string
    }

    const ruleFormRef = ref<FormInstance>()

    const formSize = ref('default')

    const ruleForm = reactive({
        love: '',
        prize: '',
        socialPractice: '',
    })

    const rules = reactive<FormRules<RuleForm>>({
        love: [
            {
                required: true,
                message: '请输入兴趣爱好',
                trigger: 'blur',
            },
        ],
    })

    const handleBack = () => {
        router.push('/')
    }

    const onBack = () => {
        router.push('/userInfo1')
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
                    }
                }
            }
        }
    }
</style>
