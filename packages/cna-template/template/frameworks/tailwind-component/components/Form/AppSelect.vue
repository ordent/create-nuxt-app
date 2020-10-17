<template>
  <div class="is-component-wrapper">
    <label :for="id">Nama Badan Usaha</label>
    <v-select
      :id="id"
      :class="`border-${bd}-600 ${bd} ${cl}`"
      class="w-full border shadow text-lg"
      :value="value"
      :options="options"
      @input="setSelected"
    ></v-select>
  </div>
</template>

<script>
import { clf, bd } from '../../assets/js/mixins.js'

export default {
  mixins: [bd, clf('black')],
  props: {
    reduce: {
      type: [Function, Boolean],
      default() {
        return true
      },
    },
    value: {
      type: [String, Boolean],
      default() {
        return null
      },
    },
    options: {
      type: Array,
      default() {
        return []
      },
    },
    id: {
      type: [String, Boolean],
      default() {
        return null
      },
    },
  },
  methods: {
    setSelected(e) {
      // console.log(e, this.value)
      this.$emit('input', e)
    },
  },
}
</script>
