<template>
  <div class="is-component-wrapper flex item justify-center">
    <input
      type="text"
      class="w-1/4 border-b-2 border-blue-500 bg-gray-200 py-4 px-2 text-2xl text-center"
      :value="v"
      readonly
    />
  </div>
</template>

<script>
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
        return this.buffer + '%'
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
