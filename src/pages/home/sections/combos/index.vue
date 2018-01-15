<template>
  <div class="combos">
    <div class="row">
      <div class="col-xl-4 mx-auto">
        <combo :data="combos[4]"></combo>
        <combo-detail :data="combos[4]"></combo-detail>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4 mx-auto">
        <combo :data="combos[2]"></combo>
        <combo-detail :data="combos[2]"></combo-detail>
      </div>
      <div class="col-xl-4 mx-auto">
        <combo :data="combos[1]"></combo>
        <combo-detail :data="combos[1]"></combo-detail>
      </div>
    </div>
    <div class="row">
      <div class="col-xl-4 mx-auto">
        <combo :data="combos[3]"></combo>
        <combo-detail :data="combos[3]"></combo-detail>
      </div>
      <div class="col-xl-4 mx-auto">
        <combo :data="combos[0]"></combo>
        <combo-detail :data="combos[0]"></combo-detail>
      </div>
    </div>
  </div>
</template>

<script>
  import store from '@/store/index'
  import Combo from './combo'
  import ComboDetail from './combo-detail'

  export default {
    computed: {
      combos: function () {
        let combos = store.getters['combos/all']
        return combos
      }
    },
    components: {
      'combo': Combo,
      'combo-detail': ComboDetail
    }
  }
</script>

<style lang="scss" scoped>
  .combos {
    margin-top: 2.5rem;
    margin-bottom: -2.5rem;
  }
</style>
