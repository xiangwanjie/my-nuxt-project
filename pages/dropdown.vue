<template>
  <div class="container">
    <h3>Icon示例：</h3>
    <div class="icon-container">
      <Icon name="pingshenbaogao" />
      <Icon name="loading" :size="100" color="#E0AD36" />
      <Icon name="jiantizhongwen" :size="iconSize" />
      <Icon name="fantizhongwen" :size="iconSize" />
      <Icon name="zhongyingwenqiehuan-xianshiyingwen" :size="iconSize" />
    </div>

    <h3 style="margin-top: 30px">下拉菜单</h3>
    <n-dropdown :options="options">
      <n-button>用户资料</n-button>
    </n-dropdown>
  </div>
</template>

<script setup lang="ts">
import { h } from "vue";
import { NDropdown, NButton } from "naive-ui";
import Icon from "@/components/Icon.vue";

const iconSize = 30;

const renderIcon = (name: string) => {
  return () => {
    return h(Icon, {
      name,
      size: 20,
    });
  };
};

const options = [
  {
    label: "中文",
    key: "profile",
    icon: renderIcon("jiantizhongwen"),
  },
  {
    label: "繁体",
    key: "editProfile",
    icon: renderIcon("fantizhongwen"),
  },
  {
    label: "English",
    key: "logout",
    icon: renderIcon("zhongyingwenqiehuan-xianshiyingwen"),
  },
];
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-container{
    display: flex;
    gap: 10px;
  }
}
</style>
