<template>
    <div class="function">
        <div class="content">
            <div class="header">
                <img :src="img1" alt="" />
                <p>深圳市云顶学院欢迎您 |</p>
            </div>
            <div class="bd">
                <div class="bd_left">
                    <div class="banner">
                        <img :src="img2" alt="" />
                    </div>
                    <h2>基础功能</h2>
                    <ul>
                        <li
                            v-for="item in cardData"
                            :key="item.id"
                            @click="handleRouter(item.id)"
                        >
                            <div class="card">
                                <div class="card_img">
                                    <img :src="item.img" alt="" />
                                </div>
                                <div class="card_p">
                                    <p>{{ item.title }}</p>
                                </div>
                            </div>
                            <div class="mask"></div>
                        </li>
                    </ul>
                </div>
                <div class="bd_right">
                    <p>通知提示</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import getAssetsFile from '../util/getAssetsFile'

    import { useRouter } from 'vue-router'

    const router = useRouter()

    const img1: string = getAssetsFile('logo.png')
    const img2: string = getAssetsFile('banner.png')

    const cardData = [
        {
            id: 1,
            img: getAssetsFile('function1.png'),
            title: '个人信息',
        },
        {
            id: 2,
            img: getAssetsFile('function2.png'),
            title: '考试报名',
        },
        {
            id: 3,
            img: getAssetsFile('function3.png'),
            title: '打印准考证',
        },
        {
            id: 4,
            img: getAssetsFile('function4.png'),
            title: '成绩查询',
        },
        {
            id: 5,
            img: getAssetsFile('function5.png'),
            title: '考试缴费',
        },
        {
            id: 6,
            img: getAssetsFile('function6.png'),
            title: '面试预约',
        },
        {
            id: 7,
            img: getAssetsFile('function7.png'),
            title: '新生入学',
        },
        {
            id: 8,
            img: getAssetsFile('function8.png'),
            title: '入学文件',
        },
    ]

    const handleRouter = (id: number) => {
        if (id === 1) {
            router.push('/userInfo')
        }
        if (id === 2) {
            router.push('/apply')
        }
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
                margin-bottom: 25px;
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
                p {
                    color: #00205b;
                    font-size: 18px;
                }
            }
            .bd {
                display: flex;
                justify-content: space-between;
                .bd_left {
                    width: 52rem;
                    .banner {
                        width: 100%;
                        img {
                            width: 100%;
                            height: auto;
                            border-radius: 4px;
                        }
                    }
                    h2 {
                        font-size: 18px;
                        padding-top: 25px;
                    }
                    ul {
                        display: flex;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        list-style: none;
                        li {
                            margin-top: 25px;
                            box-shadow: 0 2px 60px #00205b0f;
                            background: #ffffff;
                            border-radius: 4px;
                            width: 158px;
                            height: 158px;
                            cursor: pointer;
                            text-align: center;
                            position: relative;
                            display: flex;
                            align-items: center;
                            .card {
                                width: 100%;
                                .card_img {
                                    width: 100%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    img {
                                        width: 50%;
                                        height: auto;
                                    }
                                }
                                .card_p {
                                    width: 100%;
                                    display: flex;
                                    justify-content: center;
                                    align-items: center;
                                    p {
                                        font-size: 16px;
                                    }
                                }
                            }
                            .mask {
                                position: absolute;
                                top: 0;
                                left: 0;
                                width: 100%;
                                height: 100%;
                                background-color: black;
                                opacity: 0.6;
                            }
                        }
                        li:first-child {
                            .mask {
                                opacity: 0;
                            }
                        }
                        li:nth-child(2) {
                            .mask {
                                opacity: 0;
                            }
                        }
                    }
                }
                .bd_right {
                    width: 600px;
                    margin-left: 24px;
                    background-color: #fff;
                    border-radius: 4px;
                    padding: 10px 20px;
                    p {
                        font-size: 18px;
                    }
                }
            }
        }
    }
</style>
