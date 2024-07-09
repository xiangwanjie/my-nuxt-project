<template>
  <div>
    <!-- 列表内容 -->
    <ul>
      <li v-for="item in items" :key="item.id">
        <nuxt-link :to="`/list/detail?name=${item.name}`">{{
          item.name
        }}</nuxt-link>
      </li>
    </ul>
    <n-pagination v-model:page="pageIndex" :page-count="100" />
  </div>
</template>

<script setup lang="ts">
import { onBeforeRouteLeave } from "vue-router";

const listParams = useCookie<any>('listParams')
const pageIndex = ref(1)

// 模拟测试数据
const items = new Array(100).fill(0).map((item, index) => {
  return { name: `名称${index + 1}`, id: index };
});

// 页面加载完成会执行 onMounted 钩子函数
onMounted(() => {
  const listParamsVal =  listParams.value
  // 判断是否有缓存数据，如果有 恢复数据
  if(listParamsVal) {
    pageIndex.value = listParamsVal.pageIndex
  }
})

// onBeforeRouteLeave 会在路由离开时触发
onBeforeRouteLeave((to, from, next) => {
  console.log("[ onBeforeRouteLeave-to ] >", to);
  console.log("[ onBeforeRouteLeave-from ] >", from);
   // 路由离开时，校验 to.path 跳转的路由是否为 /list/detail 详情页，如果是，则将 pageIndex 缓存起来
  if(to.path === '/list/detail'){
    listParams.value = {
      pageIndex: pageIndex.value
    }
  }
  next();
});

</script>
