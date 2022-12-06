<template>
  <div :style="{ color: getRandomColor() }">
    Page: category {{ new Date() }}
  </div>
</template>

<script lang="ts" setup>
const getRandomColor = function () {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};
</script>

<style scoped></style>
