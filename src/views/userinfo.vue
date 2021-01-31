<template>
  <div class="userinfo">
    <nav-bar />
    <img src="@/assets/bannerTop_new.png"
         alt=""
         class="backImg" />
    <div>
      <user-detail :userInfo="model"/>
    </div>
  </div>
</template>

<script>
import UserDetail from '../components/userComponent/userDetail.vue'
import NavBar from './navBar.vue'

export default {
  name: 'userinfo',
  components: {
    NavBar,
    UserDetail
  },
  data () {
    return {
      model: {}
    }
  },
  computed: {},
  created () {
    this.userinfoData()
  },
  mounted () {

  },
  methods: {
    async userinfoData () {
      const res = await this.$http.get('/user/' + localStorage.getItem('id'), {
        headers: {
          'Authorization': 'Bearer ' + localStorage.getItem('token')
        }
      })
      this.model = res.data[0]
    }
  }
}
</script>
<style lang='less' scoped>
.userinfo {
  .backImg {
    height: 101px;
    width: 100%;
  }
}
</style>
