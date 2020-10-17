<template>
  <div class="is-component-wrapper">
    <!-- <h2 class="text-xl text-center">
      {{ title }}
    </h2> -->
    <app-link background="transparent" color="white" flex :url="backTo">
      <cheveron-left class="w-8 h-8 text-white fill-current flex-grow-0 mt-3" />
    </app-link>
  </div>
</template>

<script>
import AppLink from '~/components/Form/AppLink.vue'
import CheveronLeft from '~/assets/icons/cheveron-left.svg?inline'
export default {
  components: {
    AppLink,
    CheveronLeft,
  },
  data() {
    return {
      backTo: '/',
    }
  },
}
</script>
