<template>
    <div class="flow">
        <div>
            <h1>入学流程</h1>
            <div class="content">
                <div v-for="item in data" :key="item.id">
                    {{ item.introduce }}
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const data = [
        {
            id: 1,
            introduce: '登录领科教育上海校区报名地址',
        },
        {
            id: 2,
            introduce: '填写详细报名表提交后获取用户名(手机号码)及密码',
        },
        {
            id: 3,
            introduce: '登录学生考试系统',
        },
        {
            id: 4,
            introduce: '点击左侧菜单“考试确认”按钮选择相应考试日期报名',
        },
        {
            id: 5,
            introduce: '学校寄出相关入学报到文件准备相关入学材料',
        },
        {
            id: 6,
            introduce: '家长收到录取通知书后缴纳学费',
        },
        {
            id: 7,
            introduce:
                '考试后一周内学校通知考试成绩及面试学生面试后一周内学校通知录取结果，并寄出录取通知书',
        },
        {
            id: 8,
            introduce: '参加学校组织的入学考试,考试当天或次日填写选班问卷',
        },
    ]
</script>

<style scoped lang="scss">
    .flow {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #eeeff1;
        h1 {
            width: 100%;
            font-size: 3rem;
        }
        .content {
            background-color: #fff;
            margin-top: 0.5rem;
            padding: 1.2rem 0.6rem 0.6rem;
            box-shadow: 0 0.1rem 0.3rem 0 rgba(0, 0, 0, 0.06);
            position: relative;
        }
    }
</style>
