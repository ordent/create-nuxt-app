<template>
  <div class="is-component-wrapper">
    <app-button
      background="white"
      color="black"
      radius="lg"
      class="w-full shadow-lg"
      big
      @click="clickHandler"
    >
      Hapus Semua Item
    </app-button>
    <app-button
      background="white"
      color="black"
      radius="lg"
      class="w-full shadow-lg mt-4"
      big
      @click="clickHandler2"
    >
      Hapus Item Saat Ini
    </app-button>
  </div>
</template>

<script>
import AppButton from '~/components/Form/AppButton.vue'
export default {
  components: {
    AppButton,
  },
  methods: {
    clickHandler() {},
    clickHandler2() {},
  },
}
</script>
