<!--注册页面-->
<template>
  <div class="">
    <login-top middleTop="注册bilibili"> 
      <div slot="right" style="font-size: 3.111vw;" @click="$router.push('/login')">切换到登录</div>
    </login-top>
    <login-text
      @contentWatch="(res) => (model.name = res)"
      label="姓名"
      placeholder="请输入姓名"
      style="margin: 15px 0"
      rule="^.{6,16}"
    />
    <login-text
      @contentWatch="(res) => (model.username = res)"
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}"
    />
    <login-text
      @contentWatch="(res) => (model.password = res)"
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}"
    />
    <login-btn BtnText="注册" @registerSubmit="registerSubmit" />
  </div>
</template>

<script>
import LoginTop from '../components/common/LoginTop'
import LoginText from '../components/common/LoginText'
import LoginBtn from '../components/common/LoginBtn'
export default {
  name: 'register',
  components: {
    LoginTop,
    LoginText,
    LoginBtn
  },
  data () {
    return {
      model: {} // 用户信息
    }
  },
  computed: {},
  mounted () {
  },
  methods: {
    async registerSubmit () {
      const rulg = /^.{6,16}/
      if (rulg.test(this.model.name) && rulg.test(this.model.username) && rulg.test(this.model.password)) {
        const res = await this.$http.post('/register', this.model)
        this.$msg.fail(res.data.msg)
        // 本地存储获取到的token和id
        localStorage.setItem('token', res.data.objtoken)
        localStorage.setItem('id', res.data.id)
        setTimeout(() => {
          this.$router.push('/userinfo')
        }, 2000)
      } else {
        this.$msg.fail('格式不正确!')
      }
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
