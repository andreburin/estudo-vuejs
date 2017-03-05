<template>
  <block content>
    <div class="container">
      <div class="row">
        <div class="col-sm-6 col-md-4 col-md-offset-4">
          <h1 class="text-center login-title">i18next.t('txt.text')</h1>
          <div class="account-wall">
            <i class="fa fa-user-circle profile-img text-primary" aria-hidden="true"></i>
            <form class="form-horizontal form-signin" action="index.html" method="post">
              <input type="text" name="username" class="form-control" placeholder="E-Mail" value="" required autofocus>
              <input type="password" name="password" class="form-control" placeholder="Senha" value="" required >
              <button role="button" class="btn btn-lg btn-primary btn-block" type="submit">Login</button>
              <span class="clearfix"/></span>
            </form>
          </div>
        </div>
      </div>
    </div>
  </block>
</template>

<script>

import ccIntro from './Intro'
export default {
  components: {
    ccIntro
  }
}

</script>

<style scoped>
    .form-signin{
      max-width: 330px;
      padding: 15px;
      margin: 0 auto;
    }

    .profile-img{
      font-size: 10em;
      text-align: center;
      margin: 0 auto;
      display: block;
    }

    .account-wall{
      margin-top: 20px;
      padding: 40px 0px 20px 0px;
      background-color: #f7f7f7;
      -moz-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
      -webkit-box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
      box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
    }

    .login-title{
      color: #555;
      font-size: 18px;
      font-weight: 400;
      display: block;
    }

    button{
      margin-top: 10px;
    }

</style>
