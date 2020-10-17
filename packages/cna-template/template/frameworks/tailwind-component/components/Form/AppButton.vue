<template>
  <button
    class="is-component-wrapper ordent-button block md:inline-block py-1 px-2 outline-none"
    :class="`${bg} ${op} ${cl} ${wg} ${rd} ${sd} ${w} ${d} ${b} ${bd}`"
    :disabled="disabled"
    :aria-disabled="disabled"
    @click="clickHandler"
  >
    <slot />
  </button>
</template>

<script>
import { bg, b, d, w, cl, op, rd, sd, wg, bd } from '../../assets/js/mixins.js'
/**
 * AppButton is your standard go to button for every use.
 */
export default {
  mixins: [bg, b, d, w, cl, op, rd, wg, bd, sd],
  props: {
    disabled: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  methods: {
    clickHandler() {
      this.$emit('click')
    },
  },
}
</script>

<style scoped>
button:disabled {
  background: gray;
  /* outline: none; */
  /* opacity: 0.5; */
}
</style>
