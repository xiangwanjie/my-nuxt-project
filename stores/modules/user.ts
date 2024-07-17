import { defineStore } from "pinia";
import type { UserState } from "../interface";

export const useUserStore = defineStore("user-store", {
  state: (): UserState => {
    return {
      userInfo: {
        name: ""
      }
    };
  },
  actions: {
    getUserInfo() {
      // 判断是否为客户端，获取 localStorage 中的 userInfo，存在直接返回
      if(process.client) {
        const userInfo = JSON.parse(localStorage.getItem("userInfo") || "{}")
        if(userInfo.name) {
          this.userInfo = userInfo;
          return;
        }
      }
      if(!this.userInfo.name) {
        setTimeout(() => {
          this.userInfo = { name: "张三" };
        }, 3000)
      }
    }
  },
  // 注意: persist定义要做判断,因为localStorage是客户端参数,所以需要加process.client
  persist: process.client && { storage: localStorage }
});
