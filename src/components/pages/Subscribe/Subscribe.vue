<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>訂閱列表</h1>
        <router-link :to="{path: '/subscribe/add' }" class="btn btn-info  btn-circle float-right" active-class="active" exac>
          <b-icon icon="plus"></b-icon>
        </router-link>
      </div>
    </div>
    <div class="container">
      <div class="mt2">
        <div class="card-header card  inline">
          <p class=""> 訂閱列表</p>

        </div>
        <table class="table card" border="1">
          <thead class="thead-light">
            <tr class="d-flex">
              <!--<th class="col-2" v-for="(section_item, section_key) in datas[0]">{{section_key}}</th>-->
              <th class="col-1"> ID</th>
              <th class="col-2"> 訂閱人名稱</th>
              <th class="col-5"> 訂閱商品</th>
              <th class="col-4"> 功能 </th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="data in datas" class="d-flex">
              <!-- <td class="col-2" v-for="(section_item, section_key) in data">{{section_item}}</td>-->
              <td class="col-1"> {{data.ID}} </td>
              <td class="col-2"> {{data.subscribename}}</td>
              <td class="col-5"> {{data.itemname}} </td>
              <td class="col-4">
                <div class="btn-group">
                <!--  <router-link :to="{path: '/warehouse/'+ data.ID + '/edit'}" class="btn  btn-success" exac>

                    <b-icon icon="pencil-square"></b-icon>
                  </router-link>-->
                  <router-link :to="{path: '/subscribe/'+ data.ID +'/del' }" class="btn btn-danger"
                    active-class="active" exac>
                    <b-icon icon="trash"></b-icon>
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        datas: 
          [
            {itemname:"loading..."}
          ]
        
      }
    },
    methods: {
      callajax() {
        var payload = {
          "method": "list",
          "tableName": "subscribe",
        }
        this.$http.post(this.$SUB_API, payload)
          .then((response) => {
            console.log(response.body)
            this.datas =response.body

          })
          .catch((response) => {
            this.$swal("錯誤!", "讀取資料庫錯誤!", "error");

          })
          .finally(() => {
            /* 不論成功失敗，都做些事 */
          });

      },
      onload() {
        this.callajax()
      },
    },
    created: function () {
      this.onload()
    }
  }

</script>
