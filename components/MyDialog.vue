<template>
  <div>
    <h2>对话框 Dialog</h2>
    <ClientOnly>
      <p>子组件获取用户名：{{ userInfo.name }}</p>
    </ClientOnly>
    <NSpace>
      <NButton @click="handleConfirm"> 警告 </NButton>
      <NButton @click="handleSuccess"> 成功 </NButton>
      <NButton @click="handleError"> 错误 </NButton>
    </NSpace>
    <MyNotification />
  </div>
</template>

<script setup lang="ts">
const message = useMessage();
const dialog = useDialog();
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/stores/modules/user';


const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

onMounted(() => {
  userStore.getUserInfo();
})

const handleConfirm = () => {
  dialog.warning({
    title: "警告",
    content: "你确定？",
    positiveText: "确定",
    negativeText: "不确定",
    onPositiveClick: () => {
      message.success("确定");
    },
    onNegativeClick: () => {
      message.error("不确定");
    },
  });
};

const handleSuccess = () => {
  dialog.success({
    title: "成功",
    content: "厉害",
    positiveText: "哇",
    onPositiveClick: () => {
      message.success("耶！");
    },
  });
};

const handleError = () => {
  dialog.error({
    title: "错误",
    content: "错了",
    positiveText: "啊",
    onPositiveClick: () => {
      message.success("我就知道");
    },
  });
};
</script>

<style scoped></style>
