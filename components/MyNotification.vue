<template>
  <div style="margin-top: 20px">
    <h2>通知 Notification</h2>
    <NSpace>
      <NButton @click="notify('info')"> 信息 </NButton>
      <NButton @click="notify('success')"> 成功 </NButton>
      <NButton @click="notify('warning')"> 警告 </NButton>
      <NButton @click="notify('error')"> 错误 </NButton>
    </NSpace>
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
