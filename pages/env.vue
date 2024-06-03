<template>
    <div>
      <h2>暴露给客户端使用变量</h2>
      <p>apiBase1: {{ runtimeConfig.public.apiBase1 }}</p>
      <p>apiBase2: {{ runtimeConfig.public.apiBase2 }}</p>
      <p>apiBase3: {{ runtimeConfig.public.apiBase3 }}</p>
      <p>apiBase4: {{ runtimeConfig.public.apiBase4 }}</p>
    </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
console.log("runtimeConfig: ", runtimeConfig);
console.log("apiUrl: ", runtimeConfig.public.apiBase1);

const appConfig = useAppConfig();
console.log("appConfig: ", appConfig);

const timestamp = ref(1183135260000);
</script>

<style scoped></style>
