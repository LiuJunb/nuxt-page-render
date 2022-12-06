<template>
  <div :style="{ color: getRandomColor() }">Page: login</div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "empty-layout",
});
const getRandomColor = function () {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
</script>

<style scoped></style>
