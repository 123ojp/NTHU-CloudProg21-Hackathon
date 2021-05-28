<template>
<div>
<div class="jumbotron">
<div class="container">
<h1>Register</h1>
</div>
</div>
  <div class="col-md-6 offset-md-3">
  
    <form method="post" accept-charset="utf-8" autocomplete="off" role="form" class="form-horizontal">
      <div class="form-group">
        <label for="name-input">
          User Name
        </label>
        <input class="form-control input-filled-valid" type="text" name="name" id="name-input">
      </div>
      <div class="form-group">
        <label for="email-input">
          Email
        </label>
        <input class="form-control" type="text" name="email" id="email-input">
      </div>
      <div class="form-group">
        <label for="password-input">
          Password
        </label>
        <input class="form-control input-filled-valid" type="password" name="password" id="password-input">
      </div>
      <div class="row pt-3">
        <div class="col-md-12">
          <button type="submit" id="submit" tabindex="5"
            class="btn btn-md btn-primary btn-outlined float-right">Submit</button>
        </div>
      </div>
      <input type="hidden" name="nonce" value="17ea7c783c7a2908ec9f3c7258fcaf01458abcaf44a2f113f2378267bda17f2c">
    </form>
  </div>
</div>
</template>
