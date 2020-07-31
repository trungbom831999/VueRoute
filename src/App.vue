<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/register">Register</router-link>|
      <router-link to="/login">Login</router-link>
      <router-link :to="{name: 'People', params: {id: 'abc234xyz', name: 'nkT'}}">Info</router-link>
    </div>-->
    <nav class="navbar navbar-expand-md navbar-light">
      <router-link class="navbar-brand" id="logo" to="/">
        <img id="imgLogo" src="../src/assets/logo.png" alt="Logo of page" />
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="collapsibleNavbar">
        <ul class="mr-auto"></ul>
        <ul class="navbar-nav">
          <li class="nav-item">
            <form id="search" class="form-inline">
              <a href="#">
                <i class="fas fa-search" aria-hidden="true"></i>
              </a>
              <input
                class="form-control form-control-sm"
                id="search-input"
                type="text"
                placeholder="Search"
              />
            </form>
          </li>
          <li class="nav-item" id="sign-up">
            <router-link to="/register">Đăng ký</router-link>
          </li>
          <li class="nav-item" id="sign-in">
            <router-link to="/login" class="btn-hover btn-color nav-link">Đăng nhập</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
@import 'style/app.css';
</style>
