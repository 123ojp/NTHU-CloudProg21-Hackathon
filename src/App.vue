<template>
  <div>
    <header class="app-header">
      <navbar></navbar>
    </header>
    <main role="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
    import navbar from '@/components/shared/navbar.vue';
    import 'bootstrap/dist/css/bootstrap.css'
    import 'bootstrap-vue/dist/bootstrap-vue.css'
    import 'bootstrap/dist/js/bootstrap.js'

    export default {
        components: {
            navbar: navbar,
        }
    }
</script>