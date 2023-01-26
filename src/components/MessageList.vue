<script setup>
import { onMounted } from "@vue/runtime-core"
import ButtonUI from "./UI/ButtonUI.vue";

defineProps({
  msgList: Array
})
// const delMsgIndex = ref(0)
const emit = defineEmits(['changeMsg'])
function edit() {
  emit('changeMsg')
  // delMsgIndex.value = index
}
</script>

<template>
  <div class="messages">
    <div
      class="message"
      v-for="msg in msgList"
      :key="msg.id"
      @click="edit"
    > 
      <div class="message__date">
        {{ msg.date }}
      </div>
      <span>
        {{ msg.msgBody }}
      </span>
    </div>
  </div>
</template>

<style scoped>
.messages {
  height: 450px;
  width: 100%;
  border: 2px solid teal;
  border-radius: 4px;
  overflow: auto;
}
.message {
  word-wrap: break-word;
  margin-top: 5px;
  margin-left: 5px;
  padding: 5px;
  border: 1px solid teal;
  border-radius: 5px;
}
.changed {
  background-color: aquamarine;
}
.message__date {
  color: gray;
  font-size: 14px;
}
</style>