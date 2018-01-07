<template>
  <div class="section">
    <div class="container">
      <div class="row">
        <div class="col-xl-6">
          <img class="img-fluid" src="~@/assets/images/pages/home/sections/code-02/im-01.png" alt="">
        </div>
        <div class="col-xl-6 align-self-center">
          <div class="title">Our Concept</div>
          <div class="content">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
          </div>
        </div>
      </div>
    </div>
    <img class="deco-01" src="~@/assets/images/pages/home/sections/code-02/deco-01.png" alt="">
  </div>
</template>

<style lang="scss" scoped>
  .section {
    position: relative;
    padding-top: 11.75rem;

    .title {
      color: #7d644b;
      font-size: 1.25rem;
      font-family: 'Bloom';
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 1.25rem;
    }
    .content {
      color: #87827c;
      font-size: 1rem;
      font-weight: 500;
    }
    .deco-01 {
      position: absolute;
      top: 0;
      left: 40%;
      z-index: -1;
    }
  }
</style>
