<template>
  <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">

      <!--<router-link to="/" class="navbar-item logo">Code Snips</router-link>-->

      <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbarExampleTransparentExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item">
          <router-link :to="{ name: 'Home' }" class="navbar-item">início</router-link>
          <router-link :to="{ name: 'BlogHome' }" class="navbar-item">blog</router-link>
        </div>
      </div>        
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar-item {
  text-transform: lowercase;
}
</style>
