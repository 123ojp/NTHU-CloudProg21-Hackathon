<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>個人資料</h1>
      </div>
    </div>
    <div class="container">
      <div class="mt2">
        
        <br>
        <div>
          <div class="form-group">
            <label for="name-input">
              名稱
            </label>
            <input v-model="username" class="form-control input-filled-valid" type="text" 
              id="name-input" />
          </div>
          <div class="form-group">
            <label for="name-input">
              email
            </label>
            <input v-model="email" class="form-control input-filled-valid" type="text" 
              id="amount-input" />
          </div>
           
        </div>
      </div>
    </div>
  </div>
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
        username: 'getLoginUsername',
        email:'getLoginEmail'
      }),
    },
    methods: {
    }

  }

</script>
