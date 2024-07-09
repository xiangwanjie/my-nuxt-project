<template>
  <div>
    <p>详情页 - {{ $route.query.name ?? "" }}</p>
    <p>{{ listParams }}</p>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script setup lang="ts">
const listParams = useCookie<any>("listParams");

// onBeforeRouteLeave 会在路由离开时触发
onBeforeRouteLeave((to, from, next) => {
  // 路由离开时，校验 to.path 跳转的路由是否为 /list 列表页，如果不是，则将 listParams 清空
  if (to.path != "/list") listParams.value = "";
  next();
});
</script>
