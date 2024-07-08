<template>
  <div>
    <!-- 列表内容 -->
    <ul>
      <li v-for="item in items" :key="item.id">
        <nuxt-link :to="`/list/detail?name=${item.name}`">{{ item.name }}</nuxt-link>
      </li>
    </ul>
    <n-pagination v-model:page="page" :page-count="100" />
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const page = ref(1)
// 模拟测试数据
const items = new Array(100).fill(0).map((item, index) => {
    return {name: `名称${index + 1}`, id: index}
})

let savedPosition = 0

// 保存滚动位置
const saveScrollPosition = () => {
  savedPosition = window.scrollY
}

// 监听页面滚动
onMounted(() => {
  window.addEventListener('scroll', saveScrollPosition)

  // 恢复滚动位置
  const { scrollPosition, pageIndex} = route.query
  if (scrollPosition) {
    window.scrollTo(0, parseInt(scrollPosition, 10))
  }
  if(pageIndex) page.value = +pageIndex
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', saveScrollPosition)
  const pageIndex = page.value
  // 将滚动位置保存到路由查询参数中
  router.replace({
    ...route,
    query: {
      ...route.query,
      scrollPosition: savedPosition,
      pageIndex
    }
  })
})

// 监听分页变化
watch(page, (newPage) => {
  router.replace({
    ...route,
    query: {
      ...route.query,
      pageIndex: newPage
    }
  })
})
</script>
