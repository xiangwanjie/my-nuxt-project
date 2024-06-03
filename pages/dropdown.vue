<template>
  <div class="container">
    <h3>Icon示例：</h3>
    <p style="color: red;">{{ $t('welcome') }}</p>
    <div class="icon-container">
      <Icon name="pingshenbaogao" />
      <Icon name="loading" :size="iconSize" color="#E0AD36" />
      <Icon name="jiantizhongwen" :size="iconSize" />
      <Icon name="fantizhongwen" :size="iconSize" />
      <Icon name="zhongyingwenqiehuan-xianshiyingwen" :size="iconSize" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon.vue";

const iconSize = 30;
</script>

<style scoped lang="scss">
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  .icon-container {
    display: flex;
    gap: 10px;
  }
}
</style>
