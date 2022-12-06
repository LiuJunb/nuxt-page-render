<template>
  <div>Page: cart{{ new Date() }}</div>
</template>

<script lang="ts" setup>
if (process.server) {
  console.log("cart server");
} else {
  console.log("cart client");
}
</script>

<style scoped></style>
