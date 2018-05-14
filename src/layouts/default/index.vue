<template>
  <div id="root">
    <vue-header></vue-header>

    <main role="main">
      <home></home>
    </main>

    <vue-footer></vue-footer>
  </div>
</template>

<script>
  import Header from './header/index'
  import Home from '@/pages/home/index'
  import Footer from './footer/index'

  export default {
    components: {
      'vue-header': Header,
      'home': Home,
      'vue-footer': Footer
    }
  }
</script>

<style lang="scss" src="@/assets/scss/root.scss"></style>
