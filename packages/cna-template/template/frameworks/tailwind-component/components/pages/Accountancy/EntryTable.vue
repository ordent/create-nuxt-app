<template>
  <div class="is-component-wrapper">
    <table class="table-auto is-entry-table mb-3 w-full flex flex-col">
      <thead>
        <tr class="bg-gray-200 w-full flex flex-row justify-between px-3">
          <th class="px-4 py-2 font-medium">{{ data.printed }}</th>
          <th class="px-4 py-2 font-medium">{{ data.totalItem }} Penjualan</th>
        </tr>
      </thead>
      <tbody v-for="(receipt, i) in data.receipts" :key="receipt.id">
        <nuxt-link :to="`/accountancy/${receipt.id}`">
          <tr
            class="text-center w-full flex flex-row justify-between px-3"
            :class="computeReceiptClass(i, data.receipts.length)"
          >
            <td class="px-4 py-4 inline-flex">
              <img class="mr-2" :src="getMethod(receipt.payment_methods)" />
              <span class="font-bold text-base flex flex-row items-center"
                >Rp
                <money
                  v-model="receipt.price"
                  v-bind="config"
                  class="font-bold pl-1 w-full"
              /></span>
            </td>
            <td class="px-4 py-4 text-base">{{ receipt.paid_at }}</td>
          </tr>
        </nuxt-link>
      </tbody>
    </table>
  </div>
</template>

<script>
import { Money } from 'v-money'
export default {
  name: 'EntryTable',
  components: {
    Money,
  },
  props: {
    data: {
      type: Object,
      default() {
        return {
          receipts: [],
        }
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
    computeReceiptClass(i, length) {
      if (i !== length - 1) {
        return 'border-b-2 border-black'
      }
    },
    getMethod(data) {
      switch (data) {
        case 'cash':
          return '/icons/cash.png'
        case 'credit':
          return '/icons/credit.png'
        case 'ovo':
          return '/icons/ovo.png'
        case 'gopay':
          return '/icons/gopay.png'
      }
    },
  },
}
</script>

<style scoped>
.is-entry-table thead tr th,
.is-entry-table tbody tr th {
  border-style: none;
}
.is-entry-table tr:nth-child(even) {
  border-top: 1.5px solid black;
  border-bottom: 1.5px solid black;
}
</style>
