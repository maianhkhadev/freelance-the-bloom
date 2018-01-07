<template>
  <div class="combos">
    <div class="row">
      <div class="col-xl-4 mx-auto">
        <combo></combo>
      </div>
      <div class="col-xl-4 mx-auto">
        <combo></combo>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4 mx-auto">
        <combo></combo>
      </div>
      <div class="col-xl-4 mx-auto">
        <combo></combo>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4 mx-auto">
        <combo></combo>
      </div>
    </div>
  </div>
</template>

<script>
  import Combo from './combo'

  export default {
    components: {
      'combo': Combo
    }
  }
</script>

<style lang="scss" scoped>
  .combos {
    margin-top: 2.5rem;
    margin-bottom: -2.5rem;
  }
</style>
