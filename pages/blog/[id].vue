<template>
    <div>
        {{ id }} - {{ $route.query.name ?? "" }}
        <p style="color: red;">{{ $t("newsTitle") }}-{{ locale }}</p>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const { t, locale } = useI18n();
const id = route.params.id
console.log("route: ", route);
console.log("locale: ", locale.value)

// definePageMeta({
//   validate: async (route: any) => {
//     // 检查id是否由数字组成
//     return /^\d+$/.test(route.params.id)
//   }
// })

</script>

<style scoped>

</style>