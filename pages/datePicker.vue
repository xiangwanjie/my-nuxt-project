<template>
  <div>
    <p>日期选择</p>
    <p style="color: red;">{{ $t('welcome') }}</p>
    <n-date-picker v-model:value="timestamp" type="date" />
  </div>
</template>

<script setup lang="ts">
const timestamp = ref(1183135260000);
</script>

<style scoped></style>
