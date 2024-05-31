<template>
  <i
    class="iconfont"
    :class="props.name ? 'icon-' + props.name : ''"
    :style="{
      '--size': props.size + 'px',
      '--color': props.color ? props.color : '',
    }"></i>
</template>

<script setup lang="ts">
interface IconProps {
  // iconfont 名称
  name: string;
  // iconfont 字体大小
  size?: number;
  // iconfont 颜色
  color?: string;
}

// 默认值设置
const props = withDefaults(defineProps<IconProps>(), {
  size: 20,
});
</script>
<style lang="scss" scoped>
@import "../assets/iconfont/iconfont.css";
.iconfont {
  font-size: var(--size);
  color: var(--color, inherit);
}
</style>
