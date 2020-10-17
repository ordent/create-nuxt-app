<template>
  <div
    class="is-component-wrapper flex flex-row items-start justify-between pl-4 pr-6 pb-4 my-2"
    style="border-bottom: 1px solid #e4e4e4"
  >
    <div class="item-wrapper flex flex-row">
      <div class="img-wrapper">
        <img :src="data.img || ''" />
      </div>
      <div class="flex flex-col items-start justify-around pl-3">
        <span class="text-base font-normal"
          ><b>{{ data.amount }}x</b> {{ data.name }}</span
        >
        <span class="is-notes tracking-wide text-sm text-gray-500 font-light">{{
          data.notes
        }}</span>
      </div>
    </div>
    <div class="is-item-price text-base w-1/4">
      <span class="flex flex-row"
        >Rp <money v-model="data.price" v-bind="config" class="pl-1 w-full"
      /></span>
    </div>
  </div>
</template>

<script>
import { Money } from 'v-money'
export default {
  components: {
    Money,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      config: {
        decimal: ',',
        thousands: '.',
        prefix: '',
        suffix: '',
        precision: 0,
        masked: false,
      },
    }
  },
}
</script>

<style scoped>
.img-wrapper {
  height: 50pt;
  width: 50pt;
  object-fit: contain;
  background: whitesmoke;
}
.img-wrapper img {
  object-fit: contain;
  width: 50pt;
  height: 50pt;
}
</style>
