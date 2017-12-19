<template>
  <nav class="navbar is-fixed-top is-transparent">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
      </a>
      <div class="navbar-burger burger" @click="toggleNavbar" :class="{ 'is-active': isActive }" data-target="navbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbar" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <a class="navbar-item" href="/">
          Home
        </a>
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link" href="/">
            Docs
          </a>
          <div class="navbar-dropdown is-boxed">
            <a class="navbar-item" href="/">
              Overview
            </a>
            <a class="navbar-item" href="/">
              Modifiers
            </a>
            <a class="navbar-item" href="/">
              Columns
            </a>
            <a class="navbar-item" href="/">
              Layout
            </a>
            <a class="navbar-item" href="/">
              Form
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item" href="/">
              Elements
            </a>
            <a class="navbar-item is-active" href="/">
              Components
            </a>
          </div>
        </div>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="bd-tw-button button"
                target="_blank" href="/">
                <span class="icon">
                  <i class="fa fa-camera"></i>
                </span>
                <span>
                  Tweet
                </span>
              </a>
            </p>
            <p class="control">
              <a class="button is-primary" href="/">
                <span class="icon">
                  <i class="fa fa-download"></i>
                </span>
                <span>Download</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleNavbar() {
      this.isActive = !this.isActive
    },
  },
  data() {
    return {
      isActive: false,
    }
  },
}
</script>



