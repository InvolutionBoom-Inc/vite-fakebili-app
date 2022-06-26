import { createStore } from "vuex";
const store = createStore({
    state() {
        return {
            dropData: new Map([
                [
                    "主站", [
                        { name: "动画", num: 14144, icon: "bili-anime" },
                        { name: "科技", num: 7541, icon: "bili-_technology" },
                        { name: "时尚", num: 5162, icon: "bili-fashion" },
                        { name: "娱乐", num: 9227, icon: "bili-ent" },
                        { name: "知识", num: 9545, icon: "bili-zhishi" },
                        { name: "科技", num: 1348, icon: "bili-technology" },
                        { name: "资讯", num: 5069, icon: "bili-information" },
                        { name: "电影", num: 19256, icon: "bili-movie" },
                        { name: "音乐", num: 1278, icon: "bili-music" },
                        { name: "游戏", num: 4528, icon: "bili-game" },
                    ],
                ],
                [
                    "排行", [
                        { name: "综合热门" },
                        { name: "每周必看" },
                        { name: "入站必刷" },
                        { name: "排行榜" },
                    ],
                ],
                [
                    "直播", [
                        { name: "bili", num: "14141" },
                        { name: "bilibili", num: 7541 },
                        { name: "hello", num: 7541 }
                    ],
                ],
                [
                    "个人中心", [
                        { name: "欢迎来到 bilibili", num: "14141" },
                        { name: "注册", num: 7541 },
                        { name: "登录", num: 5162 },
                    ],
                ],
                [
                    "投稿", [
                        { name: "专栏投稿" },
                        { name: "音频投稿" },
                        { name: "贴纸投稿" },
                        { name: "视频投稿" },
                        { name: "投稿管理" },
                        { name: "创作中心" },
                    ],
                ],
            ]),
            userInfo: {},
            HomePage: new Map([
                [
                    "热门", [{
                            title: '收割青小麦当饲料，此事要展开说方能理解透彻！',
                            name: '央视农企',
                            watch: 1234,
                            praise: 222
                        },
                        {
                            title: '第二届 法环npc大赛 法环BvB',
                            name: '老凉头不凉',
                            watch: 987,
                            praise: 857
                        },
                        {
                            title: '【讲故事】泽丽：一路火花带闪电的平民英雄',
                            name: '徐老师',
                            watch: 1234,
                            praise: 222
                        },
                        {
                            title: '第二届 法环npc大赛 法环BvB',
                            name: '老凉头不凉',
                            watch: 666,
                            praise: 333
                        },
                        {
                            title: '第二届 法环npc大赛 法环BvB',
                            name: '老凉头不凉',
                            watch: 2333,
                            praise: 15
                        }
                    ]
                ],
                [
                    "分区", [
                        { name: "动画" },
                        { name: "番剧" },
                        { name: "国创" },
                        { name: "音乐" },
                        { name: "舞蹈" },
                        { name: "游戏" },
                        { name: "知识" },
                        { name: "科技" },
                        { name: "运动" },
                        { name: "汽车" },
                        { name: "生活" },
                        { name: "美食" },
                        { name: "动物圈" },
                        { name: "鬼畜" },
                        { name: "时尚" },
                        { name: "咨询" },
                        { name: "娱乐" },
                        { name: "影视" },
                        { name: "纪录片" },
                        { name: "电影" },
                        { name: "电视剧" }
                    ]
                ],
                [
                    "动态视频", [{
                            title: "找工作,能力重要还是学历重要？【晓舟报告】",
                            name: "晓舟报告",
                            watch: "5084",
                            bulletChat: "7",
                            praise: "192"
                        },
                        {
                            title: "写了几年Java，我竟被这行代码坑了",
                            name: "程序员鱼皮",
                            watch: "5.9万",
                            bulletChat: "403",
                            praise: "3250"
                        },
                        {
                            title: "泽草所生，种之芒种|新的故事从这个夏天开始",
                            name: "大猫今天翻车了吗",
                            watch: "2247",
                            bulletChat: "2",
                            praise: "235"
                        },
                        {
                            title: "自制芝士甜辣凤爪自热锅造就新高度",
                            name: "密子君",
                            watch: "17万",
                            bulletChat: "625",
                            praise: "1.2万"
                        },
                        {
                            title: "柳州“加料加臭加辣”螺蛳粉，现炸大炸蛋虎皮猪脚，一大碗太丰富了",
                            name: "肉肉大搜索",
                            watch: "3.9万",
                            bulletChat: "243",
                            praise: "4394"
                        },
                        {
                            title: "北京超级硬核披萨？芝士多到拉丝1米！",
                            name: "吃货请闭眼",
                            watch: "10.9万",
                            bulletChat: "628",
                            praise: "8520"
                        },
                        {
                            title: "志愿填报：专业都劝退？人人适用的专业选择方法论来咯！",
                            name: "取景框看世界",
                            watch: "14.9万",
                            bulletChat: "777",
                            praise: "8318"
                        },
                        {
                            title: "一晃三年了，该有福利，是欧皇你就有战斧牛排吃",
                            name: "燕子堡BBQ学徒Ray",
                            watch: "25.3万",
                            bulletChat: "4143",
                            praise: "2.7万"
                        },
                        {
                            title: "EP866_驭帅16开箱实战：只是一双不错的团队实战鞋",
                            name: "极客鞋谈",
                            watch: "7.8万",
                            bulletChat: "760",
                            praise: "4470"
                        },
                        {
                            title: "《凤凰花开的路口》- 林志炫（cover）",
                            name: "Kototo",
                            watch: "4.9万",
                            bulletChat: "66",
                            praise: "2741"
                        },
                        {
                            title: "古代米其林平替菜？卤煮竟是平替菜！吃不起螃蟹和羊眼古人如何以假乱真？",
                            name: "吃货请闭眼",
                            watch: "20.9万",
                            bulletChat: "743",
                            praise: "1.1万"
                        },
                        {
                            title: "狗子一样大的“小龙虾”！搞个绝味捞汁随便吃吃吧！",
                            name: "张喜喜-",
                            watch: "51.9万",
                            bulletChat: "858",
                            praise: "2.1万"
                        }

                    ]
                ],
                [
                    "番剧", [{
                            title: "夏日重现",
                            time: "12:00",
                            chapter: "第5话"
                        },
                        {
                            title: "上班族想被治愈",
                            time: "21:30",
                            chapter: "第4话"
                        },
                        {
                            title: "骸骨骑士大人奇幻世界冒险中",
                            time: "23:00",
                            chapter: "第4话"
                        }
                    ]
                ]
            ]),
            VideoPage: new Map([
                [
                    "弹幕", [
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" },
                        { time: "00:12", content: "弹幕首发", send: "06-21 14:57" }
                    ]
                ],
                [
                    "视频", [
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" },
                        { episodes: "P1", title: "理论概述_定义简介", time: "07:37" }
                    ]
                ]

            ])
        };
    },
    getters: {},
    mutations: {
        addUserInfo(state, info) {
            state.userInfo = info;
        },
        deleteUserInfo(state) {
            state.userInfo = {};
        },
    },
});
export default store;