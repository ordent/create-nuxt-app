<template>
  <div class="is-component-wrapper flex justify-center items-stretch flex-row">
    <offline-image class="w-1/5 h-auto" />
    <div class="flex-col px-8 flex justify-between">
      <p>Kamu OFFLINE, tolong dicek ulang koneksi internetnya ya.</p>
      <app-button>Check Koneksi Ulang</app-button>
    </div>
  </div>
</template>

<script>
import OfflineImage from '~/assets/images/offline.svg?inline'
import AppButton from '~/components/Form/AppButton.vue'
export default {
  components: {
    OfflineImage,
    AppButton,
  },
}
</script>
