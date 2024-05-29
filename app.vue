<template>
  <NNotificationProvider>
    <NMessageProvider>
      <NDialogProvider>
        <MyDialog />
        <MyCalendar />
      </NDialogProvider>
    </NMessageProvider>
  </NNotificationProvider>
</template>

<script lang="ts" setup>
const runtimeConfig = useRuntimeConfig();
// console.log("runtimeConfig: ", runtimeConfig);
// console.log("apiUrl: ", runtimeConfig.public.apiBase);

const appConfig = useAppConfig();
// console.log("appConfig: ", appConfig);
</script>
