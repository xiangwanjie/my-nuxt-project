<template>
  <div>详情页 - {{ $route.query.name ?? "" }}</div>
</template>

<script setup lang="ts">
const route = useRoute()
</script>

<style scoped></style>
