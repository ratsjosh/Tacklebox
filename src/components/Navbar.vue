<template>
  <nav class="navbar is-fixed-top is-transparent">
    <div class="navbar-brand">
      <router-link class="navbar-item" to="/">
        <span class="subtitle">Tacklebox</span>
      </router-link>
      <div class="navbar-burger burger" @click="toggleNavbar" :class="{ 'is-active': isActive }" data-target="navbar">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>

    <div id="navbar" class="navbar-menu" :class="{ 'is-active': isActive }">
      <div class="navbar-start">
        <router-link class="navbar-item" v-smooth-scroll to="/#top">Home</router-link>
        <div class="navbar-item has-dropdown is-hoverable">
         <router-link class="navbar-link" to="/">Community</router-link>
          <div class="navbar-dropdown is-boxed">
            <router-link class="navbar-item" to="/">Small Groups</router-link>
            <hr class="navbar-divider">
            <router-link class="navbar-item" to="/">Serve</router-link>
            <router-link class="navbar-item" to="/">Courses & Events</router-link>
            <router-link class="navbar-item" to="/">Care & Help</router-link>
          </div>
        </div>
        <router-link class="navbar-item" v-smooth-scroll to="/#about">About</router-link>
        <router-link class="navbar-item" to="/">Media</router-link>
        <router-link class="navbar-item" to="/">Resources</router-link>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <router-link class="button is-primary" to="/">Contact Us</router-link>
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
