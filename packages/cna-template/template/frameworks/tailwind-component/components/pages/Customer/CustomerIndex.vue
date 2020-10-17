<template>
  <div class="is-component-wrapper flex flex-col items-center w-full">
    <h2 class="font-medium mt-12">QR Code</h2>
    <div class="mt-6 mb-10 mx-auto">
      <img src="https://via.placeholder.com/200.png?text=QR+Code" />
    </div>
    <app-input
      id="table"
      placeholder="Table Number"
      type="action"
      button-text="Generate"
      color="white"
      width="3/4"
      background="blue"
    />
    <div class="mt-20">
      <app-button
        background="white"
        color="blue"
        border="blue"
        class="py-3 px-16"
        @click="showMenu"
      >
        <span> Lihat Menu </span>
      </app-button>
    </div>
  </div>
</template>

<script>
import { AppButton, AppInput } from '~/components/Form'
export default {
  layout: 'app',
  components: {
    AppInput,
    AppButton,
  },
  data() {
    return {}
  },
  methods: {
    showMenu() {
      this.$router.push(`/customer?#menuindex`)
    },
  },
}
</script>
