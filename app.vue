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
// import MyDialog from "@/components/MyDialog.vue";
// import MyNotification from "@/components/MyNotification.vue";
// import MyCalendar from "@/components/MyCalendar.vue";

const runtimeConfig = useRuntimeConfig();
// console.log("runtimeConfig: ", runtimeConfig);
// console.log("apiUrl: ", runtimeConfig.public.apiBase);

const appConfig = useAppConfig();
// console.log("appConfig: ", appConfig);
</script>
