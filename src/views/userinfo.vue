<template>
  <div class="userinfo">
    <nav-bar />
    <img src="@/assets/bannerTop_new.png" alt="" class="backImg" />
    <div>
      <user-detail />
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
.userinfo {
  .backImg {
    height: 101px;
    width: 100%;
  }
}
</style>
