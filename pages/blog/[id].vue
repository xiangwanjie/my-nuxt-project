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

</script>

<style scoped>

</style>