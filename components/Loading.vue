<template>
  <n-space vertical>
    <n-spin :show="props.show">
      <template #icon>
        <Icon
          class="loading"
          name="loading"
          :size="props.size"
          :color="props.color" />
      </template>
      <template #description>
        <span
          class="loading-desc"
          :style="{ '--color': props.color ? props.color : '#E0AD36' }">
          {{ props.desc }}
        </span>
      </template>
      <slot></slot>
    </n-spin>
  </n-space>
</template>

<script setup lang="ts">
import Icon from "@/components/Icon.vue";

interface IconProps {
  // 是否显示
  show: boolean;
  // iconfont 字体大小
  size?: number;
  // 加载文字
  desc?: string;
  // 颜色
  color?: string;
}

// 默认值设置
const props = withDefaults(defineProps<IconProps>(), {
  size: 20,
  color: "#E0AD36",
});
</script>

<style scoped lang="scss">
.loading {
  width: 100%;
  height: 100%;
  position: relative;
  &::before {
    position: absolute;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.loading-desc {
  color: var(--color);
}
</style>
