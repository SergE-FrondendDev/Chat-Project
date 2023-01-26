<script setup>
import ButtonUI from './UI/ButtonUI.vue'
import { computed, ref } from 'vue'

const input = ref('')
const emit = defineEmits(['update:inputValue', 'createMsg'])
function sumbitValue() {
  emit('update:inputValue', input.value)
}
function createMsg() {
  emit('createMsg')
  input.value = ''
}
const isDisable = computed(() => {
  return input.value.length === 0
})
</script>

<template>
  <form class="form" @submit.prevent>
    <input type="text"
      v-model.trim="input"
      class="form__input"
      @input="sumbitValue"
    >
    <ButtonUI
      class="form__btn"
      @click="createMsg"
      @keydown.enter="createMsg"
      :disabled="isDisable"
    >Отправить</ButtonUI>
  </form>
</template>

<style scoped>
.form {
  margin-top: 5px;
  display: flex;
  padding: 10px;
  border: 2px solid teal;
}
.form__input:focus {
  outline: none;
  border: 1px solid teal;
  border-radius: 5px;
  box-shadow: 5px 5px 8px teal;
}
.form__btn {
  height: 30px;
  width: 100px;
  border-radius: 5px;
  margin-left: 5px;
}
.form__btn:disabled {
  border: 2px solid gray;
  color: gray;
}
.form__input {
  width: 100%;
  height: 30px;
}
</style>
