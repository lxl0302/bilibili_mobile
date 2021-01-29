<template>
  <div class="LoginTop">
    <div>
      <slot name="left" />
    </div>
    <div>{{middleTop}}</div>
    <div>
      <slot name="right" />
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  components: {},
  props: ['middleTop'],
  data () {
    return {

    }
  },
  computed: {},
  mounted () {

  },
  methods: {

  }
}
</script>
<style lang='less' scoped>
.LoginTop {
  height: 12vw;
  background-color: #fff;
  display: flex;
  div {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 4.133vw; 
  }
}
</style>
