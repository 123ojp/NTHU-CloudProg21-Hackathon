<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>建立 QR code</h1>
      </div>
    </div>
    <div class="container">
      <div class="mt2">
        <br>
        <div>
          <div class="form-group">
           <h3 v-if="!isload">Loading...</h3>
            <label for="name-input">
              物品名稱
            </label>
            <div class="bd-example">
            <select aria-label="Default select example"  class="form-select form-select-lg mb-3" v-model="select_item">
                <option v-for="item in items" v-bind:value="item.ID">{{item.Name}}</option>
            </select>
            </div>
          </div>
        <div class="form-group">
            <label for="name-input">
              進貨/出貨
            </label>
            <div class="bd-example">
            <select aria-label="Default select example"  class="form-select form-select-lg mb-3" v-model="select_inout">
                <option v-for="bool in inorout" v-bind:value="bool.method">{{bool.display}}</option>
            </select>
            </div>
          </div>
          <div class="form-group">
            <label for="name-input">
              數量
            </label>
            <input v-model="amount" class="form-control input-filled-valid" type="text" 
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
  import {
    mapGetters,
    mapActions
  } from 'vuex'

  export default {
    data() {
      return {
          isload:false,
        amount:"0",
        data: {},
        select_item:"1",
        items: [],
        inorout:[
            {
                method:"+",
                display:"進貨"
            },
            {
                method:"-",
                display:"出貨"
            }
        ],
        select_inout:"+"
      }
    },
    methods: {
      getitems() {
        this.$http.get(this.$ITEM_API + "list-all-item")
          .then((response) => {
            console.log(response)
            this.items = response.body
            this.isload = true
          })
          .catch((response) => {
            this.$swal("錯誤!", "讀取資料庫錯誤!", "error");
          })
          .finally(() => {
            /* 不論成功失敗，都做些事 */
          });
      },



      edit() {

        var url = "/qrcode/create/item/"+this.select_item+"/"+this.amount+"/"+this.select_inout
        this.$router.push(url)
        
      },
      onload() {
        this.getitems()
        
        if (this.$route.params.id){
            this.select_item=this.$route.params.id
        }
      },


    },
    created: function () {
      this.onload()
    }
  }

</script>
