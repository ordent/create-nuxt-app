<template>
  <div
    class="is-component-wrapper h-10 md:h-12 w-full block flex fixed bottom-0 left-0 md:left-1/4 w-full md:w-1/2 border-t md:border-l md:border-r md:rounded-t-lg px-1"
    :class="`${bg} ${cl} border-${border}-500`"
  >
    <template v-for="(item, index) in navigations">
      <nuxt-link
        :key="index"
        :to="item.url"
        class="w-full block flex justify-center items-center"
      >
        <app-button
          background="transparent"
          :color="color"
          class="h-10"
          v-html="item.content"
        ></app-button>
      </nuxt-link>
    </template>
  </div>
</template>

<script>
/**
 * The `Avatar` component is where all your avatars come to play.
 */
import { bg, cl } from '~/assets/js/mixins'
import AppButton from '~/components/Form/AppButton.vue'
export default {
  components: {
    AppButton,
  },
  mixins: [bg, cl],
  props: {
    background: {
      type: String,
      default() {
        return 'transparent'
      },
    },
    color: {
      type: String,
      default() {
        return 'gray'
      },
    },
    border: {
      type: String,
      default() {
        return 'gray'
      },
    },
    navigations: {
      type: Array,
      default() {
        return [] // {url : String, content: HTML}
      },
    },
  },
}
</script>

<style scoped>
.left-1\/4 {
  left: 25%;
}
@media (min-width: 768px) {
  .md\:left-1\/4 {
    left: 25%;
  }
}
</style>
