<template>
  <carousel :loop="true" :autoplay="true" :perPage="1">
    <slide v-for="(image, index) in images" v-bind:key="index"
      :style="{ 'background-image': 'url(' + image + ')', 'min-height': minHeight + 'vh' }">
    </slide>
  </carousel>
</template>

<script>
// Resource: https://ssense.github.io/vue-carousel/examples/
import { Carousel, Slide } from 'vue-carousel'

export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    minHeight: {
      type: Number,
      required: true,
    },
  },
  components: {
    Carousel,
    Slide,
  },
}
</script>


<style lang="scss" scoped>
  .VueCarousel-slide {
    position: relative;
    background: #42b983;
    font-family: Arial;
    font-size: 24px;
    text-align: center;
    background-repeat:no-repeat;
    -webkit-background-size:cover;
    -moz-background-size:cover;
    -o-background-size:cover;
    background-size:cover;
    background-position:center;
  }
  .label {
    position: absolute;
    color: #fff;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
