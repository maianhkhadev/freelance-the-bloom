<template>
  <button>
    <div class="text">
      <slot></slot>
    </div>
    <img class="bim" src="./images/bim.png" alt="">
  </button>
</template>

<style lang="scss" scoped>
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
      top: 0.75rem;
      width: 100%;
      color: #7d644b;
      font-size: 1.125rem;
      font-weight: 700;
      z-index: 10;
    }
  }
</style>
