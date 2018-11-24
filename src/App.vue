<template>
  <div id="app">
    <header>
      <navigation></navigation>
    </header>
    <main>
      <transition name="page-load" mode="out-in" appear>
        <router-view></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
  import Navigation from './components/Navigation.vue';

  export default {
    components: { Navigation }
  };
</script>

<style lang="scss" src="./assets/scss/app.scss"></style>