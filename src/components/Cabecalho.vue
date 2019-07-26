<template>
  <nav class="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
    <div id="navbarExampleTransparentExample" class="navbar-menu is-active">
      <div class="navbar-start">
        <div class="navbar-item">
          <router-link :to="{ name: 'Home' }" class="navbar-item">
            <span><i class="fa fa-home fa-1x" aria-hidden="true"></i> Início</span>
          </router-link>
          <router-link :to="{ name: 'BlogHome' }" class="navbar-item">
            <span><i class="fa fa-rss fa-1x" aria-hidden="true"></i> Blog</span>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">
.navbar-item {
  padding: 5px;
  position: relative;
  left:5%;
  bottom: 0;
  width: 80%;
}
</style>
