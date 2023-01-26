<script setup>

</script>

<template>
  <button
    class="btn"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
.btn {
  padding: 5px;
  color: teal;
  background-color: white;
  border: 2px solid teal;
}
</style>