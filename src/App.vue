<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a href="#" class="navbar-brand">vue_tuto</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <router-link to="/" class="nav-item" tag="li" exact-active-class="active"><a class="nav-link">Home</a></router-link>
          <router-link to="spendings" class="nav-item" tag="li" exact-active-class="active"><a class="nav-link">Spendings</a></router-link>
          <router-link to="manage" class="nav-item" tag="li" exact-active-class="active"><a class="nav-link">Manage</a></router-link>
        </ul>
      </div>
    </nav>
    <router-view class="container"/>
  </div>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>

<script>
export default {}
</script>
