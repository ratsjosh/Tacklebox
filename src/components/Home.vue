<template>
  <div>
    <section id="top" class="hero is-info is-fullheight">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Tacklebox
          </h1>
        </div>
      </div>
    </section>
    <section id="about" class="section is-large">
      <div class="container">
        <h1 class="title">Fishers of men</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
    <section id="updates" class="section is-large">
      <div class="container">
        <h1 class="title">Updates</h1>
        <h2 class="subtitle">
          A simple container to divide your page into <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
    <section id="join-us" class="section is-large">
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
  export default {
    name: 'Home',
  }

</script>

<!-- Add "scoped" attribute to limit SASS to this component only -->
<style lang="sass" scoped>
  .hero-body,
  .section .container
    .title
      &subtitle
    text-align: center
</style>

