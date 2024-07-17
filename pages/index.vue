<template>
  <div>
    <h1>欢迎来到首页</h1>
    <ClientOnly>
      <h2>用户信息-姓名：{{ userInfo.name }}</h2>
    </ClientOnly>
    <!-- <NButton @click="userStore.setName">setName</NButton> -->
    <p style="color: red;">{{ $t('homeTitle') }}</p>
    <nuxt-link to="/list">跳转列表页</nuxt-link>
    <MyDialog />
    <MyCalendar />
  </div>
</template>
<script setup lang="ts" >
import { storeToRefs } from 'pinia';
import { useUserStore } from '~/stores/modules/user';


const userStore = useUserStore();
const { userInfo } = storeToRefs(userStore);

onMounted(() => {
  userStore.getUserInfo();
})

</script>
