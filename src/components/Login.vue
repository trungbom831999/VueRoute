<template>
  <div class="container center" id="content">
    <form @submit.prevent="login">
      <div class="form-group">
        <label id="fontOther" for="userName">Tên đăng nhập:</label>
        <input
          v-model="userName"
          type="text"
          class="form-control"
          id="userName"
          name="userName"
          placeholder="Tên đăng nhập"
          required="required"
        />
      </div>
      <div class="form-group">
        <label id="fontOther" for="password">Mật khẩu:</label>
        <input
          v-model="password"
          id="password"
          type="password"
          class="form-control"
          name="password"
          placeholder="Mật khẩu"
          required="required"
        />
        <span toggle="#password" class="fa fa-fw fa-eye field-icon" id="show-pass"></span>
      </div>
      <!-- <button type="submit" @click="login" class="btn-hover btn-color" id="submit-btn">Đăng nhập</button> -->
      <button type="submit" class="btn-hover btn-color btn-center" id="submit-btn">Đăng nhập</button>
    </form>
  </div>
</template>

<style scoped>
@import '../style/login.css';
</style>


<script>
// import store from "@/store";
import $ from 'jquery'
export default {
  data() {
    return {
      userName: "",
      password: "",
    };
  },
  methods: {
    login() {
      //   store.user = this.userName;
      //   store.password = this.password;
      var user = this.userName;
      var password = this.password;
      this.$router.push({ path: `/people/${user}/${password}` });
    },
  },
  mounted() {
    // let externalScript = document.createElement('script')
    // externalScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js')
    // document.head.appendChild(externalScript)

    window.$ = require('jquery')
    $("#show-pass").bind("mousedown touchstart", function () {
      var input = $($(this).attr("toggle"));
      input.attr("type", "text");
      console.log("Load show pass");
    });

    $("#show-pass").bind("mouseup touchend", function () {
      var input = $($(this).attr("toggle"));
      input.attr("type", "password");
    });
  },
};
</script>

