<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>確定要刪除？</h1>
      </div>
    </div>
    <div class="container">
      <div class="mt2">
        
        <h3>我正在刪除 ID 為 {{ id }} 物件 <br>我很清楚這件動作不能返回</h3>
          <div class="row pt-3">
            <div class="col-md-12">
              <button onclick="" type="primary" @click="del" tabindex="5"
                class="btn btn-md btn-primary btn-outlined float-right">確定</button>
                <button class="invisible float-right" disabled></button>
                <button onclick="" @click="$router.go(-1)" 
                class="btn  btn-danger btn-outlined float-right">返回</button>
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
        id : ""
      }
    },
    methods: {
      del() {
          var payload = {
          "method": "delete",
          "tableName": "subscribe",
            "ID":this.id,
        }
        this.$http.post(this.$SUB_API, payload)
          .then((response) => {
            console.log(response.body)
            this.$swal("成功!", "成功刪除!", "success").then((value) => {
                this.$router.go(-1)
            });

          })
          .catch((response) => {
            console.log(response)
            this.$swal("錯誤!", "刪除錯誤!", "error");

          })
          .finally(() => {
            /* 不論成功失敗，都做些事 */
          });
      },


    },
    created: function () {
        this.id = this.$route.params.id;
    }
  }

</script>
