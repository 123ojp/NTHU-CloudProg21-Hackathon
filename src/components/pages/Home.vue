<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>Dashboard</h1>
      </div>
    </div>
    <div>
      <div class="container">
        <div class="row">
          <div class="mt2 col-sm-6 pr-sm-1 ">
            <div class="row">
              <div v-for="item in datas" class="mt2 col-sm-6 pr-sm-1 dashboard_item">
                <div class="card-header card ">
                  <p class="dashborad_card text-truncate"> {{item.Name}}庫存量</p>
                </div>
                <div class=" card" style="padding: 0.5rem;">
                  <div :class="item.persent_css" class="c100 center green">
                    <span>{{item.persent}}%</span>
                    <div class="slice">
                      <div class="bar"></div>
                      <div class="fill"></div>
                    </div>
                  </div>
                </div>

              </div>
              

            </div>
          </div>
          <!--倉庫-->
          <div class="col-sm-6 pr-sm-1">
            <div class="card-header card ">
              <p class="dashborad_card"> 倉庫列表</p>
            </div>
            <div v-for="house in warehouse" class=" card">
              <div class="d-flex mb-2 dashboard_body">

                <div class="d-flex flex-column" style="width: calc(100%)">
                  <div class="d-flex">
                    <div class="text-truncate">
                      <router-link :to="{path: '/warehouse/'+ house.ID + '/edit'}"  exac>
                        {{house.Name }}
                      </router-link>
                    </div>
                    <div class="ml-auto text-nowrap">
                      <span class="badge badge-pill badge-secondary">{{house.ID }} </span>
                    </div>
                  </div>
                  <div class="d-flex">
                    <p class="text-muted text-truncate dashboard_text">
                      {{house.place }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
        datas: [{
          Name: "loading..."
        }],
        warehouse: ""
      }
    },
    methods: {
      callajax() {
        var self = this
        this.$http.get(this.$ITEM_API + "list-all-item")
          .then((response) => {
            console.log(response)
            this.datas = response.body
            for (var i in  this.datas){
                var item = self.datas[i]
                item.persent = parseInt((parseInt(item.amount) / parseInt(item.amount_max))*100)
                item.persent_css = 'p'+item.persent
                if (item.persent>100){
                    item.persent_css = 'p100'
                }
            }
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
