<template>
  <div id="app">
    <header>
      <responsive-navigation></responsive-navigation>
    </header>
    <main>
      <transition name="page-load" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
  import ResponsiveNavigation from './components/modules/ResponsiveNavigation.vue';

  export default {
    components: { ResponsiveNavigation }
  };
</script>

<style lang="scss" src="./assets/scss/app.scss"></style>