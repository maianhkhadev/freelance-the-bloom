<template>
  <div class="combos">
    <div class="row">
      <div class="col-xl-6">
        <combo></combo>
      </div>
      <div class="col-xl-6">
        <combo></combo>
      </div>
      <div class="col-xl-6">
        <combo></combo>
      </div>
      <div class="col-xl-6">
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
    
  }
</style>
