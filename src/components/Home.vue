<template>
  <div>
    <carousel id="top" :images="imgs" :minHeight="82"></carousel>
    <section id="about" class="section is-medium">
      <div class="container">
        <h1 class="title">Fishers of men</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
    <section id="home" class="hero is-fullheight">
      <div class="container">
        <h1 class="title">Home</h1>
      </div>
    </section>
    <section id="updates" class="hero is-fullheight">
      <div class="container">
        <h1 class="title">Updates</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
    <section id="join-us" class="hero is-fullheight">
      <div class="container">
        <h1 class="title">Join Us</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
  </div>
</template>

<script>
import Carousel from './Carousel'

export default {
  name: 'Home',
  components: {
    Carousel,
  },
  data() {
    return {
      imgs: [
        'https://d9nqqwcssctr8.cloudfront.net/wp-content/uploads/2016/05/19003327/Youth-Encounter-Banner.jpg',
        'https://i.ytimg.com/vi/5NZC8NCXf4M/maxresdefault.jpg',
      ],
    }
  },
}

</script>

<!-- Add "scoped" attribute to limit SASS to this component only -->
<style lang="scss" scoped>
  .hero-body,
  section .container .title,
  .subtitle {
    text-align: center
  }

  #home {
    background-image: url(http://www.redirectnutrition.com/assets/21ec64c9b9441794e0e495f2c4750379.jpg);
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
  }

  section {
    justify-content: center;
  }

  section#home h1 {
    color: #fff;
  }
</style>

