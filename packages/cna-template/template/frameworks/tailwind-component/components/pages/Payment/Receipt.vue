<template>
  <div class="is-component-wrapper pb-8 pt-16">
    <div class="flex flex-col">
      <div
        class="is-receipt-header flex flex-row justify-between border-b-2 border-black mb-4"
      >
        <div class="flex flex-col pb-6 px-8">
          <h2 class="font-bold text-2xl">RECEIPT#2</h2>
          <span class="text-gray-500 text-sm">{{ printed }}</span>
        </div>
        <p class="is-total-item font-medium pb-6 px-8 text-lg">
          {{ totalItem }} Item(s)
        </p>
      </div>
      <div
        v-for="(item, index) in itemsManual"
        :key="index"
        class="is-receipt-content flex flex-row justify-between border-b-2 border-gray-600 m-4"
      >
        <div class="flex flex-col pb-6 pl-2">
          <p class="text-base">
            <b>{{ item.quantity || 0 }}x</b> Costum Amount
          </p>
          <span class="is-notes text-sm text-gray-500 text-left">{{
            item.notes || ''
          }}</span>
        </div>
        <span class="font-medium pb-6 pr-2 flex flex-row items-center">
          {{ value }}
        </span>
      </div>
      <div
        v-for="item in itemsCart"
        :key="item.id"
        class="is-receipt-content flex flex-row justify-between border-b-2 border-gray-600 m-4"
      >
        <div class="flex flex-col pb-6 pl-2">
          <p class="text-base">
            <b>{{ item.counter }}x</b> {{ item.name }}
          </p>
          <span class="is-notes text-sm text-gray-500 text-left">-</span>
        </div>
        <span class="font-medium pb-6 pr-2 flex flex-row items-center">
          {{ item.price }}
        </span>
      </div>
      <div
        class="is-receipt-total flex flex-row justify-end border-b-2 p-4 border-black mb-4"
      >
        <div class="flex flex-col mr-6">
          <span class="text-right">TOTAL</span>
          <span class="text-right">DISKON</span>
        </div>
        <div class="flex flex-col">
          <span class="font-medium">{{ formattedTotal || 0 }}</span>
          <span class="font-medium">{{
            this.$store.state.transactions.deduction ? percent || rupiah : '-'
          }}</span>
        </div>
      </div>
      <div
        class="is-receipt-total flex flex-row justify-end border-b-2 p-4 border-black mb-4"
      >
        <div class="flex flex-col mr-6">
          <span class="text-right">BAYAR</span>
          <span class="text-right">KEMBALIAN</span>
        </div>
        <div class="flex flex-col">
          <span class="font-medium">{{ formattedPaid || 0 }}</span>
          <span class="font-medium">{{ formattedChange || 0 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { Money } from 'v-money'
import { DateTime } from 'luxon'
import { currencyFormatter } from '~/assets/js/utilities.js'
// import BackIcon from '~/assets/icons/cheveron-left.svg?inline=true'
export default {
  components: {
    // Money,
  },
  data() {
    return {
      formattedTotal: 0,
      formattedDiscount: 0,
      formattedValue: 0,
      formattedChange: 0,
      formattedPaid: 0,
    }
  },
  computed: {
    printed() {
      return DateTime.local().toFormat('dd/MM/yyyy')
    },
    totalItem() {
      if (this.itemsManual.length > 0) {
        return this.itemsManual.length
      } else return this.$store.state.transactions.totalCart.counter
    },
    itemsManual() {
      return this.$store.state.transactions.result
    },
    itemsCart() {
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
      this.itemsManual.forEach((element) => {
        value = element.value
      })
      return currencyFormatter.format(value)
    },
    total() {
      if (this.itemsManual.length > 0) {
        return this.$store.state.transactions.totalManual
      } else if (this.itemsCart.length > 0) {
        return this.$store.state.transactions.totalCart.totalPrice
      }
      return 0
    },
    discount() {
      return this.$store.state.transactions.totalDiscount
    },
    percent() {
      if (this.$store.state.transactions.deduction.percent !== 0) {
        return currencyFormatter.format(
          this.$store.state.transactions.deduction.percent
        )
      }
      return null
    },
    rupiah() {
      return currencyFormatter.format(
        this.$store.state.transactions.deduction.rupiah
      )
    },
    paid() {
      return this.$store.state.transactions.cash
    },
    change() {
      if (this.discount) {
        if (this.paid > this.discount) {
          return this.paid - this.discount
        } else if (this.paid > this.total) {
          return this.paid - this.total
        }
      }
      return 0
    },
  },
  mounted() {
    this.formattedTotal = currencyFormatter.format(this.total)
    this.formattedDiscount = currencyFormatter.format(this.discount)
    this.formattedChange = currencyFormatter.format(this.change)
    this.formattedPaid = currencyFormatter.format(this.paid)
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
