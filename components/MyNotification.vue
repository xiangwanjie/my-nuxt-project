<template>
  <div style="margin-top: 20px">
    <h2>通知 Notification</h2>
    <n-space>
      <n-button @click="notify('info')"> 信息 </n-button>
      <n-button @click="notify('success')"> 成功 </n-button>
      <n-button @click="notify('warning')"> 警告 </n-button>
      <n-button @click="notify('error')"> 错误 </n-button>
    </n-space>
  </div>
</template>

<script setup lang="ts">
const notification = useNotification();
const notify = (type: "info" | "success" | "warning" | "error") => {
  notification[type]({
    title: "通知",
    content: "这是一条通知",
  });
};
</script>

<style scoped></style>
