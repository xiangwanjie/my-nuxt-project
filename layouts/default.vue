<template>
  <div>
    <n-config-provider :locale="currentLang[0]" :date-locale="currentLang[1]">
      <NNotificationProvider>
        <NMessageProvider>
          <NDialogProvider>
            <div class="dropdown-container">
              <div @click="handleSelect('zhCN')">中文</div>
              <div @click="handleSelect('zhTW')">繁体</div>
              <div @click="handleSelect('enUS')">英文</div>
              <n-dropdown
                :options="options"
                :style="{ '--n-space': '20px' }"
                @select="handleSelect">
                <n-button>{{ currentLangText }}</n-button>
              </n-dropdown>
            </div>
            <div class="solt"><slot></slot></div>
          </NDialogProvider>
        </NMessageProvider>
      </NNotificationProvider>
    </n-config-provider>
  </div>
</template>

<script lang="ts" setup>
import {
  NMessageProvider,
  NDialogProvider,
  NConfigProvider,
  enUS,
  dateEnUS,
  zhCN,
  dateZhCN,
  zhTW,
  dateZhTW,
} from "naive-ui";
import { h } from "vue";
import { NDropdown, NButton } from "naive-ui";
import Icon from "@/components/Icon.vue";

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

const cacheLang = window?.localStorage.getItem("lang");
console.log("cacheLang: ", cacheLang)
const LANGUAGE = ref(cacheLang ?? "zhCN");
const LANGUAGE_ENUM: any = {
  enUS: [enUS, dateEnUS],
  zhCN: [zhCN, dateZhCN],
  zhTW: [zhTW, dateZhTW]
};

const currentLang = computed(() => {
  return LANGUAGE_ENUM[LANGUAGE.value];
});

const currentLangText = computed(() => {
  return options.find((item: any) => item.key === LANGUAGE.value)?.label;
});

const { setLocale } = useI18n();
setLocale(LANGUAGE.value);

const handleSelect = (key: string) => {
  // debugger
  // const lang: any = LANGUAGE_ENUM[key as keyof typeof LANGUAGE_ENUM];
  LANGUAGE.value = key;
  setLocale(key);
  window.localStorage.setItem("lang", key);
};
</script>

<style>
.n-popover-shared {
  margin-top: 15px !important;
}
</style>
