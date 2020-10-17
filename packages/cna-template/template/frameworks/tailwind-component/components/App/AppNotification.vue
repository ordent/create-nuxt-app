<template>
  <div class="is-component-wrapper h-auto px-2 py-4" :class="`${bg} ${cl}`">
    <slot />
  </div>
</template>

<script>
import { bg, cl } from '~/assets/js/mixins'
export default {
  mixins: [bg, cl],
}
</script>
