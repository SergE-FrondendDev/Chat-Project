function setMinutes() {
  const minutes = new Date().getMinutes()
  if (minutes < 10) {
    return `0${minutes}`
  }
  return minutes
}
function setDate() {
  const date = new Date()
  return `${date.getHours()}:${setMinutes()}`
}

export default setDate