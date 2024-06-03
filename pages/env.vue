<template>
    <div>
        <h2>暴露给客户端使用变量</h2>
        <p>apiBase: {{ runtimeConfig.public.apiBase }}</p>
    </div>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
console.log("runtimeConfig: ", runtimeConfig);
console.log("apiUrl: ", runtimeConfig.public.apiBase);

const appConfig = useAppConfig();
console.log("appConfig: ", appConfig);
</script>

<style scoped>

</style>