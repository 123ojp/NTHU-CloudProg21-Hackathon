<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#appnav" aria-controls="appnav"
      aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" href="#">
      <img class="img-responsive" height="25" src="@/assets/logo.png" alt="logo" /> 儲倉系統
    </a>

    <div class="collapse navbar-collapse" id="appnav">
      <ul class="nav navbar-nav  mr-auto">
        <router-link to="/" class="nav-item nav-link" active-class="active" exact>
          Home
        </router-link>
        <router-link to="/item/" class="nav-item nav-link" active-class="active" exact>
          物品列表
        </router-link>
        <router-link to="/warehouse/" class="nav-item nav-link" active-class="active" exact>
          倉庫列表
        </router-link>
        <router-link to="/subscribe/" class="nav-item nav-link" active-class="active" exact>
          訂閱列表
        </router-link>
      </ul>
      <ul class="navbar-nav ml-md-auto d-block d-sm-flex d-md-flex">
        <hr class="d-sm-flex d-md-flex d-lg-none">
        <li v-show="isLogin" class="nav-item">
          <a v-show="isLogin" class="nav-item nav-link" active-class="active" exact>
            您好 {{ username }}
          </a>
        </li>
        <li class="nav-item">
          <router-link v-show="!isLogin" to="/register" class="nav-item nav-link" active-class="active" exact>
            註冊
          </router-link>
          <router-link v-show="isLogin" to="/profile" class="nav-item nav-link" active-class="active" exact>
            個人資料
          </router-link>
        </li>
        <li class="nav-item">
          <a class="nav-link d-none d-md-block d-lg-block">|</a>
        </li>
        <li class="nav-item">
          <router-link to="/login" v-show="!isLogin" class="nav-item nav-link" active-class="active" exact>
            登入
          </router-link>
          <a @click="logout" v-show="isLogin" class="nav-item nav-link" active-class="active" exact>
            登出
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    computed: {
      // ...mapGetters 為 ES7 寫法
      ...mapGetters({
        // getCount return value 將會存在別名為 count 的 data 上
        isLogin: 'getIsLogin',
        username: 'getLoginUsername'
      }),
    },
    methods: {
      ...mapActions([
      'actionSetLoginInfo',
    ]),
      logout() {
        this.$swal("成功!", "登出成功!", "success").then((value) => {
                this.$router.push("/login")
                });
        var login_info = {
          email: null,
          islogin: false,
          username: null
        }
        this.actionSetLoginInfo(login_info)
      }
    }

  }

</script>
