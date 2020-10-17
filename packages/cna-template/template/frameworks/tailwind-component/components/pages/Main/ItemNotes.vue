<template>
  <div class="is-component-wrapper">
    <app-header background="white" color="black">
      <template slot="leftButton">
        <app-button background="white" @click="buttonCloseHandling"
          ><back-icon width="36px"
        /></app-button>
      </template>
      <h4 class="py-2 text-xl">Catatan</h4>
    </app-header>
    <div class="is-content-wrapper py-2 px-4">
      <textarea
        id=""
        v-model="notes"
        name=""
        cols="30"
        rows="10"
        class="w-full border border-gray-400 border-solid p-2 mb-4"
      ></textarea>
      <app-button
        background="white"
        color="blue"
        border="blue"
        big
        @click="buttonSubmitHandling"
      >
        Submit
      </app-button>
    </div>
  </div>
</template>

<script>
import AppHeader from '~/components/App/AppHeader.vue'
import AppButton from '~/components/Form/AppButton.vue'
import BackIcon from '~/assets/icons/cheveron-left.svg?inline=true'
export default {
  components: {
    AppHeader,
    AppButton,
    BackIcon,
  },
  data() {
    return {
      notes: '',
    }
  },
  methods: {
    buttonCloseHandling() {},
    buttonSubmitHandling() {},
  },
}
</script>
