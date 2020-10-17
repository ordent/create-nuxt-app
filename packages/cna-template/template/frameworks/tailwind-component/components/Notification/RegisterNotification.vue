<template>
  <div class="is-component-wrapper flex justify-center items-stretch flex-row">
    <join-image class="w-1/4 h-auto" />
    <div class="flex-col px-8 flex justify-between">
      <p>Belum punya akun? <br />Daftar untuk mempermudah jual beli.</p>
      <app-link
        background="blue"
        color="white"
        radius="lg"
        block
        url="/auth/register"
      >
        Daftar sekarang.
      </app-link>
    </div>
  </div>
</template>

<script>
import AppLink from '~/components/Form/AppLink.vue'
import JoinImage from '~/assets/images/join.svg?inline'
export default {
  components: {
    JoinImage,
    AppLink,
  },
}
</script>
