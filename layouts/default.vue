<template>
  <div>
    <n-config-provider :locale="currentLang[0]" :date-locale="currentLang[1]">
      <NNotificationProvider>
        <NMessageProvider>
          <NDialogProvider>
            <AppHeader />
            <NuxtPage keepalive />
          </NDialogProvider>
        </NMessageProvider>
      </NNotificationProvider>
    </n-config-provider>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
// import { useRoute } from "vue-router"
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

const { locale } = useI18n();
const LANGUAGE_ENUM: any = {
  enUS: [enUS, dateEnUS],
  zhCN: [zhCN, dateZhCN],
  zhTW: [zhTW, dateZhTW],
};
const currentLang = computed(() => {
  console.log("[ locale ] >", locale.value);
  return LANGUAGE_ENUM[locale.value];
});

// const keepAliveName = ["/list"]
// const route = useRoute();
// console.log('[ route ] >', route)
</script>

<style>
.n-popover-shared {
  margin-top: 15px !important;
}
</style>
