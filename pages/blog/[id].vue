<template>
    <div>
        {{ id }} - {{ $route.query.name ?? "" }}
        <p style="color: red;">{{ $t("newsTitle") }}</p>
    </div>
</template>

<script setup lang="ts">
const route = useRoute()
const id = route.params.id
console.log("route: ", route);

</script>

<style scoped>

</style>