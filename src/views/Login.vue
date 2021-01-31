<!--注册页面-->
<template>
  <div class="">
    <login-top middleTop="登录bilibili" />
    <login-text
      @contentWatch="(res) => (model.username = res)"
      label="账号"
      placeholder="请输入账号"
      rule="^.{6,16}"
      style="margin: 10px 0"
    />
    <login-text
      @contentWatch="(res) => (model.password = res)"
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}"
      style="margin: 10px 0"
    />
    <login-btn BtnText="登录" @registerSubmit="registerSubmit" />
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
      if (rulg.test(this.model.username) && rulg.test(this.model.password)) {
        const res = await this.$http.post('/login', this.model)
        this.$msg.fail(res.data.msg)
        if(res.data.code == 301 || res.data.code == 302) {
          return
        }
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('id', res.data.id)
        setTimeout(() => {
          this.$router.push('/userinfo')
        }, 1000)
      } else {
        this.$msg.fail('格式不正确,请重新输入!')
      }
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
