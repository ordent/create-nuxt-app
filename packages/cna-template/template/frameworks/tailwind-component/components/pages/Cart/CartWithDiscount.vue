<template>
  <div class="is-component-wrapper w-full">
    <div class="flex justify-center items-center my-6">
      <app-button
        big
        width="11/12"
        radius="lg"
        background="blue"
        @click="totalCheckOut"
      >
        <div class="flex flex-row justify-between items-center py-2 px-6">
          <p class="flex-grow-0 mr-4">Total</p>
          <span v-if="discount.rupiah" class="inline-flex items-center w-3/5">
            {{ formattedTotal1 }}
          </span>
          <span v-if="discount.percent" class="inline-flex items-center w-3/5">
            {{ formattedTotal2 }}
          </span>
          <!-- <p class="flex-grow text-left">Rp 690.000</p> -->
          <cheveron-right
            class="w-6 h-6 text-white fill-current stroke-current flex-grow-0"
          />
        </div>
      </app-button>
    </div>
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
          <span class="flex flex-row font-bold">{{ value }}</span>
        </div>
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
    </div>
    <div class="is-total flex flex-col border-t-2 border-black py-2 px-8">
      <div class="justify-end flex flex-row">
        <span class="mr-10 text-base">Subtotal</span>
        <span class="inline-flex items-center font-bold text-base">
          {{ formattedSubTotal }}
        </span>
      </div>
      <div class="justify-end flex flex-row items-center text-red-600">
        <delete-button
          class="w-4 h-4 text-red-600 fill-current flex-grow-0 mr-2"
          @click="deleteDiscount"
        />
        <span class="mr-10 text-base">Discount</span>
        <span
          v-if="discount.rupiah"
          class="inline-flex items-center font-bold text-base"
        >
          {{ formattedRp }}
        </span>
        <span
          v-if="discount.percent"
          class="inline-flex items-center font-bold text-base"
        >
          {{ formattedPercent }}
        </span>
      </div>
    </div>
    <div
      class="is-total flex flex-row justify-end border-t-2 border-black bg-gray-400 py-2 px-8"
    >
      <span class="mr-10 text-base">Total</span>
      <span
        v-if="discount.rupiah"
        class="inline-flex items-center font-bold text-base"
      >
        {{ formattedTotal1 }}
      </span>
      <span
        v-if="discount.percent"
        class="inline-flex items-center font-bold text-base"
      >
        {{ formattedTotal2 }}
      </span>
    </div>
  </div>
</template>

<script>
import { currencyFormatter } from '~/assets/js/utilities.js'
import AppButton from '~/components/Form/AppButton.vue'
import DeleteButton from '~/assets/icons/close-outline.svg?inline'
import CheveronRight from '~/assets/icons/cheveron-right.svg?inline'
export default {
  layout: 'app',
  components: {
    AppButton,
    CheveronRight,
    DeleteButton,
    // Money,
  },
  data() {
    return {
      formattedTotal1: 0,
      formattedTotal2: 0,
      formattedSubTotal: 0,
      formattedRp: 0,
      formattedPercent: 0,
    }
  },
  computed: {
    manualItems() {
      return this.$store.state.transactions.result
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
    value() {
      let value = 0
      this.manualItems.forEach((element) => {
        value = element.value
      })
      return currencyFormatter.format(value)
    },
    subTotal() {
      if (this.manualItems.length > 0) {
        return this.$store.state.transactions.totalManual
      } else if (this.cartItems.length > 0) {
        return this.$store.state.transactions.totalCart.totalPrice
      }
      return 0
    },
    discount() {
      return this.$store.state.transactions.deduction
    },
    total1() {
      if (this.discount.rupiah) {
        return (this.subTotal - this.discount.rupiah).toFixed(2)
      }
      return null
    },
    total2() {
      if (this.discount.percent) {
        return (this.subTotal - this.discount.percent).toFixed(2)
      }
      return null
    },
  },
  mounted() {
    this.formattedTotal1 = currencyFormatter.format(this.total1)
    this.formattedTotal2 = currencyFormatter.format(this.total2)
    this.formattedSubTotal = currencyFormatter.format(this.subTotal)
    this.formattedRp = currencyFormatter.format(this.discount.rupiah)
    this.formattedPercent = currencyFormatter.format(this.discount.percent)
    // console.log('rp', this.total1)
    // console.log('%', this.total2)
  },
  methods: {
    totalCheckOut() {
      this.$store.commit(
        'transactions/storeDiscount',
        this.total1 || this.total2
      )
      // console.log('jj', this.$store.state.transactions.totalDiscount)
      this.$router.push('/transactions')
    },
    deleteDiscount() {
      this.$router.push('/cart')
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
