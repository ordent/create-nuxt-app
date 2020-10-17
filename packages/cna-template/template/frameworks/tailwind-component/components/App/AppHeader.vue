<template>
  <div class="is-component-wrapper fixed w-full">
    <nav
      class="flex items-center justify-between md:justify-between flex-wrap md:p-6 h-auto"
      :class="`${bg} ${cl}`"
    >
      <div class="left-nav block md:hidden w-20">
        <slot name="leftButton" />
      </div>
      <div class="flex items-center flex-shrink-0 md:mr-6 justify-center">
        <slot />
      </div>
      <div class="right-nav block md:hidden w-20">
        <slot name="rightButton" />
      </div>
      <div v-if="isMenu" class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full hidden flex-grow md:flex md:items-center md:w-auto">
        <div class="text-sm md:flex-grow">
          <slot name="left" />
        </div>
        <div>
          <slot name="right" />
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { bg, cl } from '~/assets/js/mixins.js'

/**
 * The `Avatar` component is where all your avatars come to play.
 */
export default {
  mixins: [bg, cl],
  props: {
    isMenu: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
}
</script>

<style scoped>
.is-component-wrapper {
  min-height: 55px;
}
nav {
  min-height: 55px;
}
</style>
