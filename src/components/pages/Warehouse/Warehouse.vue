<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>倉庫列表</h1>
        <router-link :to="{path: '/warehouse/add' }" class="btn btn-info btn-circle float-right" active-class="active"
                  exac>
                  <b-icon icon="plus"></b-icon>
                </router-link>
      </div>
    </div>
    <div class="container">
      <div class="mt2">
        <div class="card-header card  inline">
          <p class=""> 倉庫列表</p>
          
        </div>
        <table class="table card" border="1">
          <thead class="thead-light">
            <tr class="d-flex">
              <!--<th class="col-2" v-for="(section_item, section_key) in datas[0]">{{section_key}}</th>-->
              <th class="col-1"> ID</th>
              <th class="col-2"> 倉庫名稱</th>
              <th class="col-5"> 倉庫位子</th>
              <th class="col-4"> 功能 </th>

            </tr>
          </thead>
          <tbody>
            <tr v-for="data in datas" class="d-flex">
              <!-- <td class="col-2" v-for="(section_item, section_key) in data">{{section_item}}</td>-->
              <td class="col-1"> {{data.ID}} </td>
              <td class="col-2"> {{data.Name}}</td>
              <td class="col-5">{{data.place}} </td>
              <td class="col-4">
              <div class="btn-group">
                <router-link :to="{path: '/warehouse/'+ data.ID + '/edit'}" class="btn  btn-success" 
                  exac>

                  <b-icon icon="pencil-square"></b-icon>
                </router-link>
                <router-link :to="{path: '/warehouse/'+ data.ID +'/del' }" class="btn btn-danger" active-class="active"
                  exac>
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
        datas: [
            {
                Name:"loading..."
            }
        ]
        }
    },
    methods: {
      callajax() {
        var self = this
        this.$http.get(this.$WHOUSE_API_LIST)
          .then((response) => {
            console.log(response)
            self.datas = response.body

          })
          .catch((response) => {
            this.$swal("錯誤!", "讀取資料庫錯誤!", "error");
          })
          .finally(() => {
            /* 不論成功失敗，都做些事 */
          });

      },
      getwarehouse() {
        this.$http.get(this.$WHOUSE_API_LIST)
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
      onload() {
        this.callajax()
        this.getwarehouse()
      },
    },
    created: function () {
      this.onload()
    }
  }

</script>
