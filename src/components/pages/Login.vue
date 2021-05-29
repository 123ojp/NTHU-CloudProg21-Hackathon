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
          E-mail
        </label>
        <input v-model="data.email" class="form-control input-filled-valid" type="text" name="name" id="name-input" />
      </div>
      <div class="form-group">
        <label for="password-input">
          密碼
        </label>
        <input v-model="data.password" class="form-control input-filled-valid" type="password" name="password"
          id="password-input" />
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
import { mapGetters, mapActions } from 'vuex'

  export default {
    data() {
      return {
        data :{
        username:'',
          email: '',
          password: '',
        }
     }
    },
    methods: {
    ...mapActions([
      'actionSetLoginInfo',
    ]),
      handleLogin() {
        let password = this.data.password
        let email = this.data.email
        // 帳號密碼需驗證不能為空
        if (password == '' || email == '') {
          this.$swal('錯誤！', '每個欄位不能為空', 'error');
          return
        }
        const re =
          /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(email)) {
          this.$swal('錯誤！', 'email格式不正確', 'error');
          return
        }
        var payload = {
          "data": this.data
        }
        
        this.$http.post(this.$LOGIN_API, payload)
          .then((response) => {
            if (response.body.status == 200) {
              this.$swal("成功!", "登入成功!", "success").then((value) => {
                this.$router.push("/")
            });
              var login_info = {
                  email : email,
                  islogin : true,
                  username : response.body.data.username
              }
              this.actionSetLoginInfo(login_info)
            } else {
              console.log(response.body)
              this.$swal("錯誤!", response.body.message, "error");
            }

          })
          .catch((response) => {
            this.$swal("錯誤!", "登入錯誤!", "error");

          })
          .finally(() => {});
      },
    }
  }

</script>
