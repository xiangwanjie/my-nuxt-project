<template>
  <div>
    <p>详情页 - {{ $route.query.name ?? "" }}</p>
    <!-- <div style="height: 1000px;"></div> -->
    <NButton @click="router.back()">返回上一页</NButton>
    <nuxt-link to="/">返回首页</nuxt-link>
  </div>
</template>

<script setup lang="ts">
import { NButton } from "naive-ui";
import { useRouter } from "vue-router";
const router = useRouter()
</script>
