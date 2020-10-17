<template>
  <div class="is-component-wrapper w-full" :class="`${b}`">
    <template v-if="isURL">
      <template v-if="isExternal">
        <a :href="url" :class="`${b}`">
          <app-button v-bind="Object.assign({}, $props, $attrs)">
            <slot />
            <Component :is="propSlot" v-if="propSlot" />
          </app-button>
        </a>
      </template>
      <template v-if="!isExternal">
        <nuxt-link :to="url" :class="`${b}`">
          <app-button v-bind="Object.assign({}, $props, $attrs)">
            <slot />
            <Component :is="propSlot" v-if="propSlot" />
          </app-button>
        </nuxt-link>
      </template>
    </template>
    <template v-if="!isURL">
      <app-button v-bind="Object.assign({}, $props, $attrs)">
        <slot />
        <Component :is="propSlot" v-if="propSlot" />
      </app-button>
    </template>
  </div>
</template>

<script>
import { bg, b, d, w, cl, op, rd, wg } from '../../assets/js/mixins.js'
import AppButton from './AppButton.vue'
export default {
  components: {
    AppButton,
  },
  mixins: [bg, b, d, w, cl, op, rd, wg],
  props: {
    url: {
      type: [String, Boolean],
      default() {
        return false
      },
    },
    block: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      propSlot: false,
    }
  },
  computed: {
    isURL() {
      return !!this.url
    },
    isExternal() {
      return this.isURL ? !!this.url.includes('http') : false
    },
    b() {
      return this.block ? 'block' : 'inline-block'
    },
  },
}
</script>
