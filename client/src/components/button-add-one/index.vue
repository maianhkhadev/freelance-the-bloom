<template>
  <div class="block">
    <div ref="addOne" class="add-one">+1</div>
    <button v-on:click="click">
      <div class="text">
        <slot></slot>
      </div>
      <img class="bim" src="./images/bim.png" alt="">
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      click: function() {
        let self = this
        $(self.$refs.addOne).addClass('fadeIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
          self.$emit('add')
          $(this).removeClass('fadeIn')
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    50% {
      opacity: 1;
      transform: none;
    }
    100% {
      opacity: 0;
    }
  }
  .fadeIn {
    animation-duration: 0.75s;
    animation-fill-mode: both;
    animation-name: fadeIn;
  }
  .block {
    display: inline-block;
    position: relative;
    width: 11.75rem;
    max-width: 100%;
  }
  .add-one {
    position: absolute;
    top: -4rem;
    left: 35%;
    color: #7d644b;
    background-color: #f6c4c4;
    font-size: 1.75rem;
    font-family: 'Bloom';
    border-radius: 50%;
    padding: 0.25rem 0.55rem;
    opacity: 0;
  }
  button {
    position: relative;
    width: 11.75rem;
    max-width: 100%;
    height: 3.25rem;
    background-color: unset;
    border: unset;
    padding: unset;

    &:hover, &:focus {
      outline: unset;

      .bim {
        opacity: 0.75;
      }
    }

    .bim {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      opacity: 0.5;
      z-index: 5;
    }

    .text {
      position: absolute;
      bottom: 0.75rem;
      width: 100%;
      color: #7d644b;
      font-size: 1.125rem;
      font-weight: 700;
      z-index: 10;
    }
  }
</style>
