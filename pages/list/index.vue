<template>
  <div>
    <!-- 列表内容 -->
    <NButton @click="loadData"> 加载数据 </NButton>
    <ul>
      <li v-for="item in listData" :key="item.id">
        <nuxt-link :to="`/list/detail?name=${item.name}`">{{
          item.name
        }}</nuxt-link>
      </li>
    </ul>
    <n-pagination v-model:page="pageIndex" :page-count="100" />
  </div>
</template>

<script setup lang="ts">
import{NPagination,NButton} from "naive-ui"

const pageIndex = ref(1);

// 模拟测试数据
const listData = ref<any>([]);

const loadData = () => {
  listData.value = new Array(50).fill(0).map((item, index) => {
    return { name: `名称${index + 1}`, id: index };
  });
};


definePageMeta({
  keepalive: true
})
</script>
