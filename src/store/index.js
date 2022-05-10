import { createStore } from "vuex";
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
            { name: "bilibili", num: "14141" },
            { name: "科技", num: 7541 },
            { name: "时尚", num: 5162 },
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
    };
  },
  getters: {},
  mutations: {
    addUserInfo(state, info) {
      state.userInfo = info;
    },
  },
});
export default store;
