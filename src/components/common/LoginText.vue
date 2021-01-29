<template>
  <div class="">
    <van-cell-group>
      <van-field
        v-model="content"
        :label="label"
        :placeholder="placeholder"
        :type="type"
        :rule="rule"
      />
    </van-cell-group>
  </div>
</template>

<script>

export default {
  name: 'LoginText',
  props: ['label', 'placeholder', 'type', 'rule'],
  data () {
    return {
      content: ''
    }
  },
  watch: {
    content () {
      this.$emit('contentWatch', this.content)
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
