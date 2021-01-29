<template>
  <div class="btnBox"  @click="registerClick">
    <div class="btn">{{BtnText}}</div>
  </div>
</template>

<script>
export default {
  name: 'LoginBtn',
  props: ['BtnText'],
  methods: {
    registerClick () { 
      this.$emit('registerSubmit')
    }
  }
}
</script>

<style lang="less" scoped>
.btnBox {
  padding: 5.556vw 2.778vw;
}
.btn {
  height: 12.778vw;
  background-color: #ff9db5;
  border-radius: 6.389vw;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 5vw;
}
</style>