<template>
  <div>
    <section-01></section-01>

    <section-02></section-02>

    <section-03></section-03>

    <deal></deal>

    <section-04></section-04>

    <section-05></section-05>
  </div>
</template>

<script>
  import Section01 from './sections/code-01'
  import Section02 from './sections/code-02'
  import Section03 from './sections/code-03'
  import Section04 from './sections/code-04'
  import Section05 from './sections/code-05'
  import Deal from './sections/deal'

  export default {
    components: {
      'section-01': Section01,
      'section-02': Section02,
      'section-03': Section03,
      'section-04': Section04,
      'section-05': Section05,
      'deal': Deal,
    }
  }
</script>

<style lang="scss" scoped>

</style>
