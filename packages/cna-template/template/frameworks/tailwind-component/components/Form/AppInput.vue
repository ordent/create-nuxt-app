<template>
  <div class="is-component-wrapper mb-4" :class="`${w}`">
    <label :for="id">
      <div class="inline-flex justify-between items-center w-full pb-3">
        <span :class="error ? 'text-red-400' : ''">{{ label }}</span>
        <nuxt-link
          v-if="edit"
          :to="url"
          class="underline text-blue-500 text-right"
          >{{ edit }}</nuxt-link
        >
      </div>
      <div class="flex items-stretch">
        <span
          v-if="prefix"
          :class="`prefix block px-2 bg-gray-300 flex items-center flex-row border border-${b}-600 border-r-0 `"
          >{{ prefix }}</span
        >
        <input
          :id="id"
          :type="type"
          :class="`border-${bd}-600 ${bd} ${cl}`"
          class="w-full border shadow p-2 text-lg"
          :placeholder="placeholder"
          :value="value"
          @input="$emit('input', $event.target.value)"
          @blur="$emit('blur', { value: $event.target.value, error: error })"
          @focus="$emit('focus', $event.target.value)"
        />
        <button
          v-if="t"
          :class="`block flex items-center flex-row border border-${b}-600 border-l-0 px-2`"
          @click="togglePassword"
        >
          <view-show v-if="type === 'password'" class="w-4" />
          <view-hide v-if="type === 'text'" class="w-4" />
        </button>
        <button
          v-if="a"
          :class="`block flex items-center flex-row rounded-r-md border border-${b}-600 border-l-0 px-2 border-${bd}-600 ${bd} ${bg} ${cl}`"
          @click="clickAction"
        >
          <span class="text-sm px-2">{{ buttonText }}</span>
        </button>
      </div>
    </label>
    <p v-if="help" class="text-xs" :class="`text-${bt}-400`">{{ help }}</p>
  </div>
</template>

<script>
import { clf, bd, bg, w } from '../../assets/js/mixins.js'
import ViewShow from '../../assets/icons/view-show.svg?inline'
import ViewHide from '../../assets/icons/view-hide.svg?inline'
export default {
  components: {
    ViewShow,
    ViewHide,
  },
  mixins: [bd, bg, w, clf('black')],
  props: {
    value: {
      type: String,
      default() {
        return ''
      },
    },
    help: {
      type: [String, Boolean],
      default() {
        return false
      },
    },
    edit: {
      type: [String, Boolean],
      default() {
        return false
      },
    },
    prefix: {
      type: [String, Boolean],
      default() {
        return false
      },
    },
    type: {
      type: String,
      default() {
        return 'text'
      },
    },
    placeholder: {
      type: String,
      default() {
        return ''
      },
    },
    label: {
      type: String,
      default() {
        return ''
      },
    },
    url: {
      type: String,
      default() {
        return ''
      },
    },
    buttonText: {
      type: String,
      default() {
        return ''
      },
    },
    id: {
      type: String,
      default() {
        return 'id'
      },
    },
    error: {
      type: Boolean,
      default() {
        return false
      },
    },
  },
  data() {
    return {
      t: false,
      a: false,
    }
  },
  computed: {
    b() {
      if (this.error) {
        return 'red'
      }
      return 'gray'
    },
    bt() {
      if (this.error) {
        return 'red'
      }
      return 'black'
    },
  },
  mounted() {
    if (this.type === 'password') {
      this.t = true
    }
    if (this.type === 'action') {
      this.a = true
    }
  },
  methods: {
    togglePassword() {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },
    clickAction() {},
  },
}
</script>
