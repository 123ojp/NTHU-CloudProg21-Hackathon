<template>
  <div>
    <div class="jumbotron">
      <div class="container">
        <h1>生產結果</h1>
      </div>
    </div>
    <div class="container">
      <div class="mt2">

          <Vue-qr-code  class="w-100"  :value="url" />

      </div>
    </div>
  </div>
</template>
<script>
import VueQrCode from 'vue-weblineindia-qrcode'

export default {
  data() {
      return {
        url:""
      }
    },
    
    created: function () {
     var id = this.$route.params.id;
     var object = this.$route.params.object;
     var num = this.$route.params.num;
     var command = this.$route.params.command;
     var base = window.location.origin + window.location.pathname;
     if (object=="item"){
         //qrcode/items/:id/:num/:command
         this.url = base+"#/qrcode/item/"+id+"/"+num+"/"+command
     }
    },
  components: {
    VueQrCode,
  },
}
</script>
