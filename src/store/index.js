import { createStore } from "vuex"
const store = createStore({
  state() {
    return {
      dropData: new Map([
        [
          "主站",
          [
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
          "排行",
          [
            { name: "综合热门" },
            { name: "每周必看" },
            { name: "入站必刷" },
            { name: "排行榜" },
          ],
        ],
        [
          "直播",
          [
            { name: "bili", num: "14141" },
            { name: "bilibili", num: 7541 },
            { name: "hello", num: 7541 },
          ],
        ],
        [
          "个人中心",
          [
            { name: "欢迎来到 bilibili", num: "14141" },
            { name: "注册", num: 7541 },
            { name: "登录", num: 5162 },
          ],
        ],
        [
          "投稿",
          [
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
          "热门",
          [
            /* {
              title: "收割青小麦当饲料，此事要展开说方能理解透彻！",
              name: "央视农企",
              watch: 1234,
              praise: 222,
            },
            {
              title: "第二届 法环npc大赛 法环BvB",
              name: "老凉头不凉",
              watch: 987,
              praise: 857,
            },
            {
              title: "【讲故事】泽丽：一路火花带闪电的平民英雄",
              name: "徐老师",
              watch: 1234,
              praise: 222,
            },
            {
              title: "第二届 法环npc大赛 法环BvB",
              name: "老凉头不凉",
              watch: 666,
              praise: 333,
            },
            {
              title: "第二届 法环npc大赛 法环BvB",
              name: "老凉头不凉",
              watch: 2333,
              praise: 15,
            }, */
            {
              avid: "12",
            },
            {
              avid: "2",
            },
            {
              avid: "3",
            },
            {
              avid: "4",
            },
            {
              avid: "5",
            },
            {
              avid: "6",
            },
          ],
        ],
        [
          "分区",
          [
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
            { name: "电视剧" },
          ],
        ],
      ]),
    }
  },
  getters: {},
  mutations: {
    addUserInfo(state, info) {
      state.userInfo = info
    },
    deleteUserInfo(state) {
      state.userInfo = {}
    },
  },
})
export default store
