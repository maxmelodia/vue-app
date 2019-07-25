<template>
  <nav class="navbar is-transparent is-fixed-top" role="navigation" aria-label="main navigation">
    <div id="navbarExampleTransparentExample" class="navbar-menu is-active">
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
  padding: 5px;
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;

}
</style>
