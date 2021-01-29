<template>
  <div class="navBox">
    <div class="logo">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <div>
      <div>
        请输入内容
        <van-icon name="search" class="iconNav" />
      </div>
    </div>
    <div>
      <img src="@/assets/default_img.jpg" alt="" />
      <p>下载App</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'navBar',
  components: {},
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
.navBox {
  height: 12.5vw;
  background-color: #fff;
  display: flex;
  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 90px;
    img {
      width: 80%;
    }
  }
  div:nth-child(2) {
    flex: 1;
    display: flex;
    align-items: center;
    margin: 0 5px;
    div {
      background-color: #f4f4f4;
      color: #aaa;
      width: 90%;
      height: 26px;
      line-height: 26px;
      padding-left: 26px;
      font-size: 1px;
      border-radius: 12px;
      position: relative;
      .iconNav {
        position: absolute;
        padding: 0;
        margin: auto 0;
        left: 2.778vw;
        top: 50%;
        transform: translate(0, -50%);
      }
    }
  }
  div:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 24px;
      height: 24px;
    }
    p {
      padding: 5px 10px;
      margin: 0 8px;
      background-color: #f896aa;
      color: #fff;
      border-radius: 5px;
    }
  }
}
</style>
