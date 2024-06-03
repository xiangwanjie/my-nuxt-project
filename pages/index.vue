<template>
  <div>
    <h2>首页</h2>
    <NNotificationProvider>
      <NMessageProvider>
        <NDialogProvider>
          <MyDialog />
          <MyCalendar />
        </NDialogProvider>
      </NMessageProvider>
    </NNotificationProvider>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped></style>
