<template>
  <div>
    <n-button type="success"> Success </n-button>
    <n-ellipsis expand-trigger="click" line-clamp="2" :tooltip="false">
      电灯熄灭 物换星移 泥牛入海<br />
      黑暗好像 一颗巨石 按在胸口<br />
      独脚大盗 百万富翁 摸爬滚打<br />
      黑暗好像 一颗巨石 按在胸口
    </n-ellipsis>

    <n-space vertical>
    <n-space>
      <n-progress type="circle" :percentage="percentage" />
      <n-progress type="circle" status="info" :percentage="percentage" />
      <n-progress type="circle" status="success" :percentage="percentage" />
      <n-progress type="circle" status="warning" :percentage="percentage" />
      <n-progress type="circle" status="error" :percentage="percentage" />
    </n-space>
    <n-space>
      <n-button @click="minus">
        减 10%
      </n-button>
      <n-button @click="add">
        加 10%
      </n-button>
    </n-space>
  </n-space>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const percentageRef = ref(0)

    const add = () => {
      percentageRef.value += 10
      if (percentageRef.value > 100) {
        percentageRef.value = 0
      }
    }

    const minus = () => {
      percentageRef.value -= 10
      if (percentageRef.value < 0) {
        percentageRef.value = 100
      }
    }

    return {
      percentage: percentageRef,
      add,
      minus
    }
  }
})
</script>
