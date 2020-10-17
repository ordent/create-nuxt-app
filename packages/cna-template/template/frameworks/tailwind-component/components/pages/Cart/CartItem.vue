<template>
  <div class="is-component-wrapper w-full">
    <div v-if="manualItems.length > 0">
      <div
        v-for="item in manualItems"
        :key="item.index"
        class="flex flex-row items-start justify-between p-3 w-full border border-gray-300"
      >
        <div class="item-wrapper flex flex-col items-start">
          <span class="text-base font-normal mb-3"
            ><b>{{ item.quantity || 1 }}x</b> Custom Amount</span
          >
          <span class="is-notes text-sm font-light text-gray-500">{{
            item.notes || '-'
          }}</span>
          <!-- <span class="text-base font-medium ml-3">Menu Item</span> -->
        </div>
        <div class="flex flex-col text-base w-3/5 px-4 items-center">
          <span class="flex flex-row font-bold">{{ item.price }}</span>
        </div>
      </div>
      <div
        class="is-total flex flex-row justify-end border-t-2 border-black bg-gray-400 py-2 px-8"
      >
        <span class="mr-10 text-base">Total</span>
        <span class="inline-flex items-center font-bold text-lg w-2/5">
          {{ totalCalc }}
        </span>
      </div>
      <div class="flex justify-center items-center">
        <app-button
          big
          width="11/12"
          radius="lg"
          background="blue"
          class="absolute"
          style="bottom: 5%"
          @click="totalCheckOut"
        >
          <div class="flex flex-row justify-between items-center py-2 px-6">
            <p class="flex-grow-0 mr-4">Total</p>
            <span class="inline-flex items-center w-3/5">
              {{ total }}
            </span>
            <!-- <p class="flex-grow text-left">Rp 690.000</p> -->
            <cheveron-right
              class="w-6 h-6 text-white fill-current stroke-current flex-grow-0"
            />
          </div>
        </app-button>
      </div>
    </div>
    <div v-if="cartItems.length > 0">
      <div
        v-for="item in cartItems"
        :key="item.id"
        class="flex flex-row items-start justify-between p-3 w-full border border-gray-300"
      >
        <div class="item-wrapper flex flex-col items-start">
          <span class="text-base font-normal mb-3"
            ><b>{{ item.counter }}x</b> {{ item.name }}</span
          >
          <span class="is-notes text-sm font-light text-gray-500">-</span>
          <!-- <span class="text-base font-medium ml-3">Menu Item</span> -->
        </div>
        <div class="flex flex-col text-base w-3/5 px-4 items-center">
          <span class="flex flex-row font-bold">{{ item.price }}</span>
        </div>
      </div>
      <div
        class="is-total flex flex-row justify-end border-t-2 border-black bg-gray-400 py-2 px-8"
      >
        <span class="mr-10 text-base">Total</span>
        <span class="inline-flex items-center font-bold text-lg w-2/5">
          {{ totalProd }}
        </span>
      </div>
      <div class="flex justify-center items-center">
        <app-button
          big
          width="11/12"
          radius="lg"
          background="blue"
          class="absolute"
          style="bottom: 5%"
          @click="totalCheckOut"
        >
          <div class="flex flex-row justify-between items-center py-2 px-6">
            <p class="flex-grow-0 mr-4">Total</p>
            <span class="inline-flex items-center w-3/5">
              {{ total }}
              <!-- Rp 80000 -->
            </span>
            <!-- <p class="flex-grow text-left">Rp 690.000</p> -->
            <cheveron-right
              class="w-6 h-6 text-white fill-current stroke-current flex-grow-0"
            />
          </div>
        </app-button>
      </div>
    </div>
    <div v-if="manualItems.length === 0 && cartItems.length === 0">
      <h1 class="text-center text-red-600 py-8">
        Belum ada barang di keranjang Anda
      </h1>
    </div>
  </div>
</template>

<script>
import { currencyFormatter } from '~/assets/js/utilities.js'
import AppButton from '~/components/Form/AppButton.vue'
import CheveronRight from '~/assets/icons/cheveron-right.svg?inline'
export default {
  layout: 'app',
  components: {
    AppButton,
    CheveronRight,
    // Money,
  },
  computed: {
    manualItems() {
      let items = JSON.parse(
        JSON.stringify(this.$store.state.transactions.result)
      )
      if (items) {
        items.forEach((item) => {
          item.price = currencyFormatter.format(item.value)
        })
      } else {
        items = []
      }
      return items
    },
    cartItems() {
      let items = JSON.parse(JSON.stringify(this.$store.state.products.cart))
      if (items) {
        items.forEach((item) => {
          item.price = currencyFormatter.format(item.totalPrice)
        })
      } else {
        items = []
      }
      return items
    },
    totalCalc() {
      return currencyFormatter.format(
        this.$store.state.transactions.totalManual
      )
    },
    totalProd() {
      return currencyFormatter.format(
        this.$store.state.transactions.totalCart.totalPrice
      )
    },
    total() {
      if (this.manualItems.length > 0) {
        return currencyFormatter.format(
          this.$store.state.transactions.totalManual
        )
      } else if (this.cartItems.length > 0) {
        return this.totalProd
      }
      return currencyFormatter.format(0)
    },
  },
  mounted() {},
  methods: {
    totalCheckOut() {
      // this.$store.commit('transactions/storeResult', this.result)
      this.$router.push('/transactions')
    },
  },
}
</script>

<style scoped>
.is-notes {
  text-overflow: ellipsis;
  width: 13rem;
  height: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
