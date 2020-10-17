<template>
  <div
    class="is-component-wrapper flex flex-row items-start justify-between p-3 mb-3 w-full border border-gray-300"
  >
    <div class="item-wrapper flex flex-row">
      <div class="img-wrapper border border-gray-300">
        <img
          :src="data.img || 'https://via.placeholder.com/50.png?text=items'"
        />
        <!-- <img src="https://via.placeholder.com/50.png?text=items" /> -->
      </div>
      <span class="text-base font-medium ml-3">{{ data.name }}</span>
      <!-- <span class="text-base font-medium ml-3">Menu Item</span> -->
    </div>
    <div class="flex flex-col text-base w-1/3 px-4 items-center">
      <span class="flex flex-row"
        >Rp <money v-model="data.price" v-bind="config" class="pl-1 w-full"
      /></span>
      <!-- <span>Rp 70.000</span> -->
      <div class="inline-flex items-center mt-2">
        <button class="p-0" @click="increment()">
          <!-- <span class="text-lg font-bold text-green-500">+</span> -->
          <add-button class="w-6 h-6 text-green-500 fill-current flex-grow-0" />
        </button>
        <input
          class="text-xl font-bold text-center"
          type="text"
          size="1"
          :value="quantity"
        />
        <button @click="decrement()">
          <!-- <span class="px-1">-</span> -->
          <min-button class="w-6 h-6 text-black fill-current flex-grow-0" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { Money } from 'v-money'
import AddButton from '~/assets/icons/add-solid.svg?inline'
import MinButton from '~/assets/icons/minus-outline.svg?inline'
// import AppButton from '~/components/Form/AppButton.vue'
export default {
  components: {
    Money,
    AddButton,
    MinButton,
    // AppButton,
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
      quantity: 1,
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
  mounted() {
    // this.counterListener()
  },
  methods: {
    increment() {
      this.quantity++
    },
    decrement() {
      if (this.quantity === 1) {
        alert('Negative quantity not allowed')
      } else {
        this.quantity--
      }
    },
  },
}
</script>

<style scoped>
.img-wrapper {
  height: 45pt;
  width: 45pt;
  object-fit: contain;
  background: whitesmoke;
}
.img-wrapper img {
  object-fit: contain;
  width: 45pt;
  height: 45pt;
}
</style>
