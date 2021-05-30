<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>確定要 {{inorout_msg}} ？</h1>
      </div>
    </div>
    <div class="container">
      <div class="mt2">

        <h3 v-if="isload">目前 {{ data.Name }} 數量為 {{data.amount}} <br>
          即將 {{inorout_msg}} 為 {{new_amount}} 個
        </h3>
        <h3 v-if="!isload">Loading...
        </h3>
        <div class="row pt-3">
          <div class="col-md-12">
            <button v-if="isload" onclick="" type="primary" @click="submit" tabindex="5"
              class="btn btn-md btn-primary btn-outlined float-right">確定</button>
            <button class="invisible float-right" disabled></button>
            <button onclick="" @click="$router.go('/')" class="btn  btn-danger btn-outlined float-right">返回</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        data: "",
        inorout_msg: "",
        new_amount: "",
        isload: false
      }
    },
    watch: {
      '$route'() {
        this.isload = false
        this.onload()
      }
    },
    methods: {
      onload() {
        this.readitem()
        if (this.$route.params.command == "-") {
          this.inorout_msg = "出貨"
        } else {
          this.inorout_msg = "進貨"
        }
      },
      readitem() {
        var self = this
        var item_id = this.$route.params.id;
        this.$http.get(this.$ITEM_API + "get?ID=" + item_id)
          .then((response) => {
            this.isload = true
            console.log(response)
            self.data = response.body
            this.new_amount = eval(
              this.data.amount +
              this.$route.params.command +
              this.$route.params.num
            )


          })
          .catch((response) => {
            this.$swal("錯誤!", "讀取資料庫錯誤!", "error");
          })
          .finally(() => {
            /* 不論成功失敗，都做些事 */
          });

      },
      submit() {
        this.data.method = "edit"
        this.data.amount = this.new_amount
        this.$http.get(this.$ITEM_API + "put", {
            params: this.data
          })
          .then((response) => {
            console.log(response)
            this.$swal("成功!", "成功編輯!", "success").then((value) => {
              this.$router.push("/item/")
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


    },
    created: function () {
      this.onload()

    },

  }

</script>
