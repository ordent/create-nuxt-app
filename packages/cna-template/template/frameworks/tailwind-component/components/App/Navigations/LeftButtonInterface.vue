<template>
  <div class="is-component-wrapper flex">
    <nuxt-link :to="`${url}`">
      <button class="p-4">
        <cheveron-left class="w-8 h-8 text-white fill-current flex-grow-0" />
      </button>
      <!-- <app-button>test</app-button> -->
    </nuxt-link>
  </div>
</template>

<script>
import CheveronLeft from '~/assets/icons/cheveron-left.svg?inline'
export default {
  components: { CheveronLeft },
  data() {
    return {
      url: '/',
    }
  },
}
</script>
