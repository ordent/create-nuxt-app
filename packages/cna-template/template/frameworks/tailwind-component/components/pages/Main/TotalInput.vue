<template>
  <div class="is-component-wrapper w-full">
    <input
      type="text"
      class="w-full border-b-2 border-blue-500 bg-gray-200 py-4 px-2 text-2xl text-right"
      :value="v"
      readonly
    />
  </div>
</template>

<script>
import { currencyFormatter } from '~/assets/js/utilities.js'

export default {
  props: {
    input: {
      type: [Boolean, String, Number],
      default() {
        return false
      },
    },
  },
  data() {
    return {
      buffer: 0,
    }
  },
  computed: {
    v: {
      get() {
        return currencyFormatter.format(this.buffer)
      },
      set(n) {
        if (this.input && this.input === 'C') {
          this.buffer = 0
        }
        if (this.input && this.input !== 'C' && this.input !== '+') {
          this.buffer = this.input
        }
      },
    },
  },
  watch: {
    input(n) {
      this.v = n
    },
  },
}
</script>
