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
                        <el-form-item label="姓名：" prop="name">
                            <el-input
                                v-model="ruleForm.name"
                                placeholder="请输入姓名"
                            />
                        </el-form-item>
                        <el-form-item label="性别：" prop="gender">
                            <el-radio-group v-model="ruleForm.gender">
                                <el-radio label="男" />
                                <el-radio label="女" />
                            </el-radio-group>
                        </el-form-item>
                        <el-form-item label="证件号码：" prop="IDNumber">
                            <el-input
                                v-model="ruleForm.IDNumber"
                                placeholder="请输入身份证号或者护照号"
                            />
                        </el-form-item>
                        <el-form-item label="电子邮箱：" prop="Email">
                            <el-input
                                v-model="ruleForm.Email"
                                placeholder="请输入您的邮箱"
                            />
                        </el-form-item>
                        <el-form-item label="生日：" prop="birthday">
                            <el-date-picker
                                v-model="ruleForm.birthday"
                                type="date"
                                placeholder="请选择生日"
                                style="width: 100%"
                            />
                        </el-form-item>
                        <el-form-item label="户籍地址：" prop="censusAddress">
                            <el-select
                                v-model="ruleForm.censusAddress"
                                placeholder="请选择地区"
                            >
                                <el-option
                                    v-for="item in addressData"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </el-form-item>
                        <el-form-item
                            label="详细地址："
                            prop="censusAddress_detial"
                        >
                            <el-input
                                v-model="ruleForm.censusAddress_detial"
                                placeholder="请输入户籍详细地址"
                            />
                        </el-form-item>

                        <el-form-item label="家庭住址：" prop="homeAddress">
                            <el-select
                                v-model="ruleForm.homeAddress"
                                placeholder="请选择地区"
                            >
                                <el-option
                                    v-for="item in addressData"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="详细地址：">
                            <el-input
                                v-model="ruleForm.homeAddress_detial"
                                placeholder="请输入家庭详细地址"
                            />
                        </el-form-item>

                        <el-form-item label="在读学校：" prop="school">
                            <el-input
                                v-model="ruleForm.school"
                                placeholder="请输入在读学校"
                            />
                        </el-form-item>

                        <el-form-item label="获取途径：" prop="achieving">
                            <el-select
                                v-model="ruleForm.achieving"
                                placeholder="请选择获取途径"
                            >
                                <el-option
                                    v-for="item in achievingData"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                />
                            </el-select>
                        </el-form-item>

                        <el-form-item label="在读课程：" prop="course">
                            <el-col :span="12">
                                <el-select
                                    v-model="ruleForm.course"
                                    placeholder="请选择在校课程"
                                >
                                    <el-option
                                        v-for="item in courseData"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    />
                                </el-select>
                            </el-col>
                            <el-col :span="12">
                                <el-select
                                    v-model="ruleForm.grade"
                                    placeholder="请选择年级"
                                >
                                    <el-option
                                        v-for="item in gradeData"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    />
                                </el-select>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="个人照片：" prop="photo">
                            <el-upload
                                class="avatar-uploader"
                                action="https://run.mocky.io/v3/9d059bf9-4660-45f2-925d-ce80ad6c4d15"
                                :show-file-list="false"
                            >
                                <img
                                    v-if="imageUrl"
                                    :src="imageUrl"
                                    class="avatar"
                                />
                                <el-icon v-else class="avatar-uploader-icon"
                                    ><Plus
                                /></el-icon>
                            </el-upload>
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
                            <el-button type="primary" @click="onSubmit">
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

    const activeData = [1]

    const addressData = [
        { id: 1, label: '北京', value: 'bj' },
        { id: 2, label: '深圳', value: 'sz' },
        { id: 3, label: '上海', value: 'sh' },
        { id: 4, label: '杭州', value: 'hz' },
        { id: 5, label: '重庆', value: 'cq' },
    ]

    const achievingData = [
        { id: 1, label: '网络', value: 'wl' },
        { id: 2, label: '培训机构', value: 'gw' },
        { id: 3, label: '远播教育', value: 'yb' },
        { id: 4, label: '同学或老师', value: 'tx' },
        { id: 5, label: '亲戚或朋友', value: 'qq' },
    ]

    const courseData = [
        { id: 1, label: '国内课程', value: 'gl' },
        { id: 2, label: '国外课程', value: 'gw' },
    ]

    const gradeData = [
        { id: 1, label: '高一', value: 'g1' },
        { id: 2, label: '高二', value: 'g2' },
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
        name: string
        gender: string
        IDNumber: string
        Email: string
        birthday: string
        censusAddress: string
        censusAddress_detial: string
        homeAddress: string
        homeAddress_detial: string
        school: string
        achieving: string
        course: string
        grade: string
        photo: string
    }

    const ruleFormRef = ref<FormInstance>()

    const formSize = ref('default')

    const ruleForm = reactive({
        name: '',
        gender: '',
        IDNumber: '',
        Email: '',
        birthday: '',
        censusAddress: '',
        censusAddress_detial: '',
        homeAddress: '',
        homeAddress_detial: '',
        school: '',
        achieving: '',
        course: '',
        grade: '',
        photo: '',
    })

    const rules = reactive<FormRules<RuleForm>>({
        name: [
            {
                required: true,
                message: '请输入姓名',
                trigger: 'blur',
            },
        ],
        IDNumber: [
            {
                required: true,
                message: '请输入证件号码',
                trigger: 'blur',
            },
        ],
    })

    const handleBack = () => {
        router.push('/')
    }
    const imageUrl = ref('')

    const onSubmit = () => {
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
                        .avatar-uploader .avatar {
                            width: 178px;
                            height: 178px;
                            display: block;
                        }
                        .avatar-uploader .el-upload {
                            border: 1px dashed var(--el-border-color);
                            border-radius: 6px;
                            cursor: pointer;
                            position: relative;
                            overflow: hidden;
                            transition: var(--el-transition-duration-fast);
                        }

                        :deep(.el-upload) {
                            border: 1px dashed var(--el-border-color);
                        }

                        .avatar-uploader .el-upload:hover {
                            border-color: var(--el-color-primary);
                        }

                        .el-icon.avatar-uploader-icon {
                            font-size: 28px;
                            color: #8c939d;
                            width: 178px;
                            height: 178px;
                            text-align: center;
                        }
                    }
                }
            }
        }
    }
</style>
