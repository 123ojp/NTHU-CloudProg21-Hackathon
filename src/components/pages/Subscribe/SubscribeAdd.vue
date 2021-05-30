<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>物品建立</h1>
      </div>
    </div>
    <div class="container">
      <div class="mt2">

        <br>
        <div>
          <div class="form-group">
            <label for="id-input">
              訂閱者
            </label>
            <input :value="username" class="form-control input-filled-valid" type="text" name="name" id="name-input"
              disabled="disabled" />
          </div>
          <div class="form-group">
            <label for="name-input">
              物品名稱
            </label>
            <div class="bd-example">
              <select aria-label="Default select example" class="form-select form-select-lg mb-3" v-model="data.ID">
                <option v-for="whouse in warehouse" v-bind:value="whouse.ID">{{whouse.Name}}</option>
              </select>
            </div>

          </div>

          <div class="row pt-3">
            <div class="col-md-12">
              <button onclick="" type="primary" @click="edit" tabindex="5"
                class="btn btn-md btn-primary btn-outlined float-right">送出</button>
              <button class="invisible float-right" disabled></button>
              <button onclick="" @click="$router.go(-1)" class="btn  btn-danger btn-outlined float-right">返回</button>
            </div>
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
    data() {
      return {
        data: {},
        warehouse: [],
        warehouse_sel: "",

      }
    },
    computed: {
      // ...mapGetters 為 ES7 寫法
      ...mapGetters({
        // getCount return value 將會存在別名為 count 的 data 上
        isLogin: 'getIsLogin',
        username: 'getLoginUsername',
        login_id: 'getLoginID'
      }),
    },
    methods: {
      getitems() {
        this.$http.get(this.$ITEM_API + "list-all-item")
          .then((response) => {
            console.log(response)
            this.warehouse = response.body
          })
          .catch((response) => {
            this.$swal("錯誤!", "讀取資料庫錯誤!", "error");
          })
          .finally(() => {
            /* 不論成功失敗，都做些事 */
          });
      },



      edit() {
        var payload = {
          "method": "add",
          "tableName": "subscribe",
          "Items": {
            "itemid": this.data.ID,
            "subscribid": this.login_id,
          }

        }
        this.$http.post(this.$SUB_API, payload)
          .then((response) => {
            console.log(response)
            this.$swal("成功!", "成功編輯!", "success").then((value) => {
              this.$router.go(-1)
            });
          })
          .catch((response) => {
            this.$swal("錯誤!", "存入資料庫錯誤!", "error");
          })
          .finally(() => {
            /* 不論成功失敗，都做些事 */
          });
        //put?itemId=5&itemName=eggww&itemCount=20&warehouseId=2&method=edit
      },
      onload() {
        this.getitems()

      },


    },
    created: function () {
      this.onload()
    }
  }

</script>
