import { createStore } from "vuex";
const store = createStore({
  state() {
    return {
      dropData: new Map([
        [
          "主站",
          [
            { name: "动画", num: "14141" },
            { name: "科技", num: 7541 },
            { name: "时尚", num: 5162 },
          ],
        ],
        [
          "排行",
          [
            { name: "综合热门", num: "14141" },
            { name: "科技", num: 7541 },
            { name: "时尚", num: 5162 },
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
      ]),
    };
  },
  getters: {},
  mutations: {},
});
export default store;
