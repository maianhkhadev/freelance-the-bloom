<template>
  <footer>
    <img class="img-fluid w-100" src="~@/assets/images/layouts/default/footer/wave.png" alt="">

    <div class="container">
      <section-01 id="section-contact"></section-01>

      <section-02></section-02>

      <section-03></section-03>
    </div>
  </footer>
</template>

<script>
  import Section01 from './sections/code-01'
  import Section02 from './sections/code-02'
  import Section03 from './sections/code-03'

  export default {
    components: {
      'section-01': Section01,
      'section-02': Section02,
      'section-03': Section03
    }
  }
</script>

<style lang="scss" scoped>
  footer {
    background-color: #f0e2d3;
  }
</style>
