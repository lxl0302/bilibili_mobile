<template>
  <div class="userDetail">
    <div>
      <div class="user_img"><img src="@/assets/head_img.jpg" alt="" /></div>
      <div class="user_edit">
        <div>
          <p>
            <span>0</span>
            <span class="user_text">粉丝</span>
          </p>
          <p>
            <span>54</span>
            <span class="user_text">关注</span>
          </p>
          <p>
            <span>0</span>
            <span class="user_text">获赞</span>
          </p>
        </div>
        <div>
          <div class="user_editBtn">编辑资料</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'userDetail',
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
.userDetail {
  background-color: #fff;
  padding: 0 12px;
  > div {
    display: flex;
  }
  .user_img {
    margin-right: 20px;
    img {
      height: 85px;
      width: 85px;
      border-radius: 50%;
    }
  }
  .user_edit {
    flex: 1;
    display: flex;
    justify-content: center;
    flex-direction: column;
    div:nth-child(1) {
      display: flex;
      p {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        font-size: 13px;
        .user_text {
          color: #b0b0b0;
        }
      }
    }
    div:nth-child(2) {
      padding: 8px 10px;
      .user_editBtn {
        border-radius: 5px;
        border: 1px solid #f99eb3;
        color: #f99eb3;
        padding: 3px;
        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
