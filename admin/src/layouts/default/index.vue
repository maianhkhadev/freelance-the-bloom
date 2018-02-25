<template>
  <div id="root">


    <main role="main">
      <home></home>
    </main>
  </div>
</template>

<script>
  import Home from '@/pages/home/index'

  export default {
    components: {
      'home': Home
    }
  }
</script>

<style lang="scss" src="@/assets/scss/root.scss"></style>
