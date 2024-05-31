<template>
  <div>
    <Loading :show="show" desc="加载中...">
      <n-alert title="啦啦啦" type="success">
        明天再打开行李箱。宝贝，挂电话啦。
      </n-alert>
    </Loading>

    <n-button @click="switchShow"> 点击来转圈 </n-button>
  </div>
</template>

<script setup lang="ts">
import Loading from "@/components/Loading.vue";

const show = ref<boolean>(false);

const switchShow = () => {
  show.value = !show.value;
};
</script>
