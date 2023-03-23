import request from "./request";
import mockRequests from "./mockAjax";

export const reqCategoryList = () => {
  return request({ url: "/product/getBaseCategoryList", method: "get" });
};

export const reqBannerList = () => {
  return mockRequests.get("/banner");
};

export const reqFloorList = () => {
  return mockRequests.get("/floor");
};

export const reqSearchInfo = (params) =>
  request({
    url: "/list",
    method: "post",
    data: params,
  });