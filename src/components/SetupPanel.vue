<script setup>
import ButtonUI from './UI/ButtonUI.vue';
defineProps({
  mode: Number
})
const emit = defineEmits('remove')

</script>

<template>
  <div class="change__panel" v-if="mode === 1">
    <ButtonUI
      @click="emit('remove')"
    >
      Удалить
    </ButtonUI>
    <ButtonUI>
      Изменить
    </ButtonUI>
  </div>
  <div class="default__panel" v-else>
    <div>ChatIcon</div>
    <h5>ChatName</h5>
  </div>
</template>

<style scoped>
.change__panel .default__panel {
  width: 100%;
  height: 50px;
  border: 1px solid teal;
  display: flex;
}

</style>