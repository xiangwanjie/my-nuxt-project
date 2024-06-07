<template>
  <div class="dropdown-container">
    <div @click="setLocale('zhCN')">中文</div>
    <div @click="setLocale('zhTW')">繁体</div>
    <div @click="setLocale('enUS')">英文</div>
    <n-dropdown
      :options="options"
      :style="{ '--n-space': '20px' }"
      @select="setLocale">
      <n-button>{{ currentLangText }}</n-button>
    </n-dropdown>

    <div class="solt"><slot></slot></div>
  </div>
</template>

<script setup lang="ts">
import { h } from "vue";
import { NDropdown, NButton } from "naive-ui";
import Icon from "@/components/Icon.vue";

const { locale,  setLocale } = useI18n();

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
    key: "zhCN",
    icon: renderIcon("jiantizhongwen"),
  },
  {
    label: "繁体",
    key: "zhTW",
    icon: renderIcon("fantizhongwen"),
  },
  {
    label: "English",
    key: "enUS",
    icon: renderIcon("zhongyingwenqiehuan-xianshiyingwen"),
  },
];


const currentLangText = computed(() => {
  return options.find((item: any) => item.key === locale.value)?.label;
});



</script>

<style scoped></style>
