<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="toast">{{ message }}</div>
</template>

<script>
import { reactive } from 'vue'

export default {
  props: ['message']
}
export const useToastEffect = () => {
  const toastData = reactive({
    showToast: false,
    message: ''
  })
  const showToast = (message) => {
    toastData.showToast = true
    toastData.message = message
    setTimeout(() => {
      toastData.showToast = false
    }, 2000)
  }
  return { toastData, showToast }
}
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  padding: .1rem;
  background: rgba(0, 0, 0, .35);
  border-radius: .05rem;
  color: #FFF;
}
</style>
