<script setup>
import FormInput from './components/FormInput.vue';
import MessageList from './components/MessageList.vue';
import SetupPanel from './components/SetupPanel.vue';
import setDate from './helpers/date.js'
import { computed, onBeforeMount, ref } from 'vue';
import axios from 'axios';


const messages = ref([])
const modeMsg = ref(0)

const value = ref('')
function addMessage() {
  const newMsg = {id: Date.now(), msgBody: value.value, date: setDate()}
  console.log(JSON.stringify(messages.value.length))
  axios.post('/api/push', {data: JSON.stringify(newMsg)}).
    then((response) => {
      messages.value.push(response.data)
    })
}
function checkUpdateArr(){
  setTimeout(() => {
    axios.post('/api/checkUpdate',
      {date: JSON.stringify(messages.value.length)}
    ).
      then((response) => {
        messages.value = response.data
        checkUpdateArr()
      })
  }, 1000)
}
onBeforeMount(() => {
  checkUpdateArr()
})
function editMsg() {
  if (modeMsg.value == 2) {
    modeMsg.value = 0
  }
  modeMsg.value++
}

</script>

<template>
  <div class="container">
    <SetupPanel
      :mode="modeMsg"
    />
    <MessageList
      :msg-list="messages"
      @change-msg="editMsg()"
    />
    <FormInput 
      v-model:input-value="value"
      @createMsg="addMessage()"
    />
  </div>
</template>

<style scoped>
.container {
  margin: 0 auto;
  height: auto;
  max-width: 1000px;
}
</style>
