import { reqBannerList, reqCategoryList, reqFloorList } from "@/api";
const actions = {
  async categoryList() {
    let result = await reqCategoryList();
    if (result.code == 200) {
      this.commit("CATEGORYLIST", result.data);
    }
  },
  //获取首页轮播图数据
  async getBannerList() {
    let result = await reqBannerList();
    if (result.code == 200) {
      this.commit("GETBANNERLIST", result.data);
    }
  },
  //获取首页轮播图数据
  async getFloorList() {
    let result = await reqFloorList();
    if (result.code == 200) {
      this.commit("GETFLOORLIST", result.data);
    }
  },
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.BannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.FloorList = floorList;
  },
};
const state = {
  categoryList: [],
  BannerList: [],
  FloorList: [],
};
const getters = {};
export default {
  state,
  mutations,
  actions,
  getters,
};
