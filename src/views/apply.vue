<template>
    <div class="function">
        <div class="content">
            <div class="header">
                <div class="back" @click="handleBack">
                    <el-icon><Back /></el-icon>
                    <p>考试报名</p>
                </div>
                <img :src="img1" alt="" />
            </div>
            <div class="tips">
                <span
                    ><el-icon><MuteNotification /></el-icon
                ></span>
                <p>
                    考生同一时间只能报考一场考试，如需延期考试可致电招生办xxx-xxxxxxx,xxxx
                </p>
            </div>
            <div class="bd">
                <ul>
                    <li v-for="item in examData" :key="item.id">
                        <div class="cardItem">
                            <p>{{ item.name }}</p>
                            <span>{{ item.state }}</span>
                        </div>
                        <div class="cardItem">
                            <p>考试时间</p>
                            <span>{{ item.exam_Time }}</span>
                        </div>
                        <div class="cardItem">
                            <p>报名时间</p>
                            <span>{{ item.apply_state }}</span>
                        </div>
                        <div class="cardItem">
                            <p>报名状态</p>
                            <span>{{ item.apply_state }}</span>
                        </div>
                        <div class="button">
                            <el-button>详情</el-button>
                            <el-button type="info"> 报名 </el-button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import getAssetsFile from '../util/getAssetsFile'

    const img1: string = getAssetsFile('logo.png')

    import { useRouter } from 'vue-router'

    const router = useRouter()

    const examData = [
        {
            id: 1,
            name: '2024学年预录取考试2',
            state: '已结束',
            exam_Time: '2023-12-09',
            apply_time: '2023.xx.xx - 2023.xx.xx',
            apply_state: '未报名',
        },
        {
            id: 2,
            name: '2024学年预录取考试',
            state: '已结束',
            exam_Time: '2023-12-09',
            apply_time: '2023.xx.xx - 2023.xx.xx',
            apply_state: '未报名',
        },
    ]

    const handleBack = () => {
        router.push('/')
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
            .tips {
                width: 100%;
                height: 40px;
                display: flex;
                align-items: center;
                padding: 30px;
                background-color: #e6f7ff;
                font-size: 14px;
                font-variant: tabular-nums;
                line-height: 20px;
                list-style: none;
                font-feature-settings: 'tnum';
                span {
                    color: #329dff;
                    margin-top: 5px;
                }
                p {
                    line-height: 20px;
                    padding-left: 20px;
                }
            }
            .bd {
                padding: 0 20px;
                ul {
                    display: flex;
                    list-style: none;
                    li {
                        width: 390px;
                        background-color: #fff;
                        padding: 12px 16px;
                        border-radius: 4px;
                        box-shadow: 0 1px 5px #00000026;
                        margin: 20px 10px;
                        .cardItem {
                            margin-bottom: 8px;
                            width: 100%;
                            display: flex;
                            justify-content: space-between;
                            p {
                                color: #000000d9;
                                font-size: 14px;
                                font-family: -apple-system, BlinkMacSystemFont,
                                    Segoe UI, Roboto, Helvetica Neue, Arial,
                                    Noto Sans, sans-serif, 'Apple Color Emoji',
                                    'Segoe UI Emoji', Segoe UI Symbol,
                                    'Noto Color Emoji';
                                font-variant: tabular-nums;
                                line-height: 1.5715;
                            }
                            span {
                                color: #000000d9;
                                font-size: 14px;
                                font-family: -apple-system, BlinkMacSystemFont,
                                    Segoe UI, Roboto, Helvetica Neue, Arial,
                                    Noto Sans, sans-serif, 'Apple Color Emoji',
                                    'Segoe UI Emoji', Segoe UI Symbol,
                                    'Noto Color Emoji';
                                font-variant: tabular-nums;
                                line-height: 1.5715;
                            }
                        }
                        .cardItem:first-child {
                            p {
                                color: #00205b;
                                font-size: 16px;
                                font-weight: 600;
                            }
                            span {
                                color: red;
                            }
                        }
                        .button {
                            width: 100%;
                            display: flex;
                            justify-content: flex-end;
                            .el-button {
                                border-radius: 15px;
                            }
                        }
                    }
                }
            }
        }
    }
</style>
