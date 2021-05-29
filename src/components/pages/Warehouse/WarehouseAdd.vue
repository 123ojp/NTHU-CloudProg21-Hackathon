<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>倉庫建立</h1>
      </div>
    </div>
    <div class="container">
      <div class="mt2">
        
        <br>
        <div>
          <div class="form-group">
            <label for="id-input">
              ID
            </label>
            <input  value="自動生成" class="form-control input-filled-valid" type="text" name="name" id="name-input"  disabled="disabled"  />
          </div>
          <div class="form-group">
            <label for="name-input">
              倉庫名稱
            </label>
            <input v-model="data.Name" class="form-control input-filled-valid" type="text" 
              id="name-input" />
          </div>
          <div class="form-group">
            <label for="name-input">
              倉庫位置
            </label>
            <input v-model="data.place" class="form-control input-filled-valid" type="text" 
              id="amount-input" />
          </div>
          <div class="row pt-3">
            <div class="col-md-12">
              <button onclick="" type="primary" @click="edit" tabindex="5"
                class="btn btn-md btn-primary btn-outlined float-right">送出</button>
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
        data: {},
        warehouse:[],
        warehouse_sel:"",

      }
    },
    methods: {
    
      
      edit() {
          this.data.method="add"
        this.$http.get(this.$WHOUSE_API  + "put", {params:  this.data})
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
        this.getwarehouse()

      },


    },
    created: function () {
      this.onload()
    }
  }

</script>
