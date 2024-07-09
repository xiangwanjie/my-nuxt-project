<template>
  <div>
    <p>详情页 - {{ $route.query.name ?? "" }}</p>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script setup lang="ts">
</script>
