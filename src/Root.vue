<template>
  <div id="root">
    <header>
      <div class="container">
        <div class="row">
          <div class="col-xl-2">
            <img class="imf-fluid" src="" alt="">
          </div>
          <div class="col-xl-8">
            <ul class="nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Gift Sets</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Retail Product</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Reason to Belive</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div class="col-xl-2">
            <your-basket></your-basket>
          </div>
        </div>
      </div>
    </header>

    <main role="main">
      <router-view></router-view>
    </main>

    <footer>
      <div class="container">
        <div class="row">
          <div class="col-xl-4">
            <a href="#" class="link">About Us</a>
            <a href="#" class="link">Contact Us</a>
          </div>
          <div class="col-xl-8 text-right">
            © 2016 Graphicstall. Trademarks and brands are the property of their respective owners.
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
  import YourBasket from '@/components/your-basket'

  export default {
    components: {
      'your-basket': YourBasket
    }
  }
</script>

<style lang="scss" src="./assets/scss/root.scss"></style>

<style lang="scss" scoped>
  header {
    position: sticky;
    top: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    z-index: 1070;

    .nav {
      justify-content: flex-end;

      .nav-item {

        .nav-link {
          color: #333333;
          font-size: 0.875rem;
          font-weight: 600;
          padding: 0.5rem 1.125rem;

          &:hover {
            color: #e60012;
          }
        }
      }
    }
  }
</style>
