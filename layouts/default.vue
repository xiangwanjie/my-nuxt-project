<template>
  <div>
    <n-config-provider :locale="currentLang[0]" :date-locale="currentLang[1]">
      <NNotificationProvider>
        <NMessageProvider>
          <NDialogProvider>
           <AppHeader>
            <div>
              <slot></slot>
            </div>
           </AppHeader>
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

const { locale } = useI18n();
const LANGUAGE_ENUM: any = {
  enUS: [enUS, dateEnUS],
  zhCN: [zhCN, dateZhCN],
  zhTW: [zhTW, dateZhTW]
};
const currentLang = computed(() => {
  return LANGUAGE_ENUM[locale.value];
});
</script>

<style>
.n-popover-shared {
  margin-top: 15px !important;
}
</style>
