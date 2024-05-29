<template>
  <n-notification-provider>
    <n-message-provider>
      <n-dialog-provider>
        <my-dialog />
        <my-notification />
      </n-dialog-provider>
    </n-message-provider>
  </n-notification-provider>
</template>

<script lang="ts" setup>
import MyDialog from "@/components/MyDialog.vue";
import MyNotification from "@/components/MyNotification.vue";
</script>
