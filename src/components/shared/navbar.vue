<template>
  <nav class="navbar navbar-expand-md navbar-dark bg-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#appnav"
      aria-controls="appnav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <a class="navbar-brand" href="#">
      <img class="img-responsive" height="25" src="@/assets/logo.png" alt="logo" /> 儲倉系統
    </a>

    <div class="collapse navbar-collapse" id="appnav">
      <ul class="nav navbar-nav  mr-auto">
        <router-link
          to="/"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          Home
        </router-link>
        
      </ul>
      <ul class="navbar-nav ml-md-auto d-block d-sm-flex d-md-flex">
        <hr class="d-sm-flex d-md-flex d-lg-none">
        <li class="nav-item">
         <router-link
          to="/register"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          註冊
        </router-link>
        </li>
        <li class="nav-item">
        <a class="nav-link d-none d-md-block d-lg-block">|</a>
        </li>
        <li class="nav-item">
        <router-link
          to="/login"
          class="nav-item nav-link"
          active-class="active"
          exact
        >
          登入
        </router-link>
        </li>
        </ul>
    </div>
  </nav>
</template>

<script>
export default {}
</script>