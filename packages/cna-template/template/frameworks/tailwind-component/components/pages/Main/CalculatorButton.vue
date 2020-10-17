<template>
  <div class="is-component-wrapper flex items-stretch p-1">
    <button
      :class="`${bg} ${gr} ${cl}`"
      class="text-center w-full text-2xl p-1 border border-solid border-gray-400 shadow font-bold"
      @click="buttonTapHandling"
    >
      <slot />
    </button>
  </div>
</template>

<script>
import { bg, cl } from '~/assets/js/mixins.js'
export default {
  mixins: [bg, cl],
  props: {
    gradient: {
      type: Boolean,
      default() {
        return true
      },
    },
  },
  computed: {
    gr() {
      if (this.gradient) {
        return 'bg-gradient-to-b from-white to-gray-200'
      }
      return ''
    },
  },
  methods: {
    buttonTapHandling(e) {
      if (e.target.children.length > 0) {
        this.$emit('calculatorButtonTap', e.target.firstChild.innerHTML)
      } else {
        this.$emit('calculatorButtonTap', e.target.innerHTML)
      }
    },
  },
}
</script>
