<template>
  <div :style="{ color: 'red' }">Page: profile {{ new Date() }}</div>
</template>

<script lang="ts" setup>
if (process.server) {
  console.log("profile server");
} else {
  console.log("profile client");
}
</script>
<style scoped></style>
