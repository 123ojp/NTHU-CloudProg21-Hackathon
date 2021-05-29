<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>Register</h1>
      </div>
    </div>
    <div class="col-md-6 offset-md-3">

      <div class="form-group">
        <label for="name-input">
          名稱
        </label>
        <input v-model="data.username" class="form-control input-filled-valid" type="text" name="name" id="name-input">
      </div>
      <div class="form-group">
        <label for="email-input">
          Email
        </label>
        <input v-model="data.email" class="form-control" type="text" name="email" id="email-input">
      </div>
      <div class="form-group">
        <label for="password-input">
          Password
        </label>
        <input v-model="data.password" class="form-control input-filled-valid" type="password" name="password"
          id="password-input">
      </div>
      <div class="row pt-3">
        <div class="col-md-12">
          <button onclick="" type="primary" @click="handleRegister" tabindex="5"
            class="btn btn-md btn-primary btn-outlined float-right">註冊</button>
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
    

    data() {
      return {
        data: {
          username: '',
          password: '',
          email: '',
        }


      }
    },
    methods: {
      ...mapActions([
        'actionSetLoginInfo',
      ]),
      handleRegister() {
        let username = this.data.username
        let password = this.data.password
        let email = this.data.email
        // 帳號密碼需驗證不能為空
        if (username == '' || password == '' || email == '') {
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
        console.log(username);
        this.$http.post(this.$REG_API, payload)
          .then((response) => {
            if (response.body.status == 200) {
              this.$swal("成功!", "註冊成功!", "success")
              var login_info = {
                  email : email,
                  islogin : true,
                  username : username,
                  id : response.body.data.ID
              }
              this.actionSetLoginInfo(login_info)
            } else {
              console.log(response.body)
              this.$swal("錯誤!", response.body.data.reason, "error");
            }

          })
          .catch((response) => {
            this.$swal("錯誤!", "註冊錯誤!", "error");

          })
          .finally(() => {});

      },
    }
  }

</script>
