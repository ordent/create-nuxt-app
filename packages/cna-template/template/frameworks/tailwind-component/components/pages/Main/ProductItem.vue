<template>
  <div class="is-component-wrapper pr-3 w-full border border-gray-300 mb-3">
    <div class="flex flex-row items-center justify-between" @click="add">
      <div class="flex flex-row justify-start items-center">
        <div class="img-wrapper border border-gray-500">
          <img :src="data.image" />
        </div>
        <span class="font-bold text-left ml-2">{{ data.name }}</span>
      </div>
      <span class="inline-flex w-1/4"
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
  methods: {
    add() {
      this.$emit('add', this.data)
    },
  },
}
</script>

<style scoped>
.img-wrapper {
  width: 60pt;
  height: 60pt;
  background: rgb(204, 203, 203);
}
img {
  object-fit: contain;
  height: 60pt;
  width: 100%;
}
</style>
