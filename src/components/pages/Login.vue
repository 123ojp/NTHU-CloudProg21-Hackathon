<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>登入</h1>
      </div>
    </div>
    <div class="col-md-6 offset-md-3">

        <div class="form-group">
          <label for="name-input">
            使用者名稱
          </label>
          <input v-model="username" class="form-control input-filled-valid" type="text" name="name" id="name-input" />
        </div>
        <div class="form-group">
          <label for="password-input">
           密碼
          </label>
          <input v-model="password" class="form-control input-filled-valid" type="password" name="password" id="password-input" />
        </div>
        <div class="row pt-3">
          <div class="col-md-12">
            <button onclick="" type="primary" @click="handleLogin" tabindex="5"
              class="btn btn-md btn-primary btn-outlined float-right">登入</button>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        
          username: '',
          password: '',
        
      }
    },
    methods: {
      handleLogin() {
        let username = this.username
        let password = this.password
        // 帳號密碼需驗證不能為空
        if (username !== '' && password !== '') {

        } else {
          alert('帳號密碼不能為空')
        }


        console.log(username);
        this.$http.get("a")
        .then((response) => {
        })
            /* 成功拿到資料，然後... */
        .catch((response) => {
           this.$swal('Hello Vue world!!!');
        })
        .finally(() => {
            /* 不論成功失敗，都做些事 */
        });
//undone
        // 成功推網dashboard
        if (Cookies.get('login') && this.loginForm.token) {
          this.$router.push({
            name: 'Dashboard'
          })
        }
      },
    }
  }

</script>
