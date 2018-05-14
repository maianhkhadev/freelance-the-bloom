<template>
  <div class="combos">
    <div class="row">
      <div class="col-xl-6 mx-auto">
        <combo :data="combos[4]"></combo>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4">
        <combo :data="combos[2]"></combo>
      </div>
      <div class="col-xl-4">
        <combo :data="combos[1]"></combo>
      </div>
      <div class="col-xl-4">
        <combo :data="combos[3]"></combo>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'
  import Combo from './combo'

  export default {
    computed: {
      combos: function () {
        let combos = store.getters['combos/all']
        return combos
      }
    },
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
