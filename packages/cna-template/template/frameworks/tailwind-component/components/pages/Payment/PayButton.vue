<template>
  <div class="is-component-wrapper flex justify-end">
    <button background="gray" color="white" block @click="open">
      <h1
        class="text-base px-8 py-6 bg-gray-800 text-white"
        style="letter-spacing: 0.5px"
      >
        {{ text }}
      </h1>
    </button>
  </div>
</template>

<script>
// import AppLink from '~/components/App/AppLink.vue'
export default {
  components: {
    // AppLink,
  },
  data() {
    return {
      text: 'Bayar',
    }
  },
  methods: {
    open() {},
  },
}
</script>
