<template>
  <div class="is-component-wrapper flex flex-col w-full">
    <ul class="w-full p-0 m-0">
      <li class="w-full m-0">
        <a
          href="#"
          class="inline-flex justify-between px-4 py-2 w-full"
          :class="{ isOpen: isMenuOpened('bundle') }"
          @click.stop.prevent="toggleMenu('bundle')"
        >
          <span>Bundle Discount</span>
          <down-arrow width="28px" />
        </a>
        <div :class="{ isOpen: isMenuOpened('bundle') }" class="dropdown m-4">
          <div class="flex flex-row flex-wrap">
            <div
              v-for="item in discounts"
              :key="item.id"
              class="border border-gray-400 rounded-lg w-2/5 h-24 m-4"
              @click="addDiscountHandle"
            >
              <h1
                class="text-4xl font-bold"
                style="padding: 15%"
                :data-discount="item.discount"
              >
                {{ item.value }}%
              </h1>
            </div>
          </div>
        </div>
      </li>
      <li class="w-full m-0">
        <a
          href="#"
          class="inline-flex justify-between px-4 py-2 w-full"
          :class="{ isOpen: isMenuOpened('custom') }"
          @click.stop.prevent="toggleMenu('custom')"
        >
          <span>Custom Bundle Discount</span>
          <down-arrow width="28px" />
        </a>
        <div :class="{ isOpen: isMenuOpened('custom') }" class="dropdown">
          <component
            :is="custom"
            v-if="custom"
            ref="custom"
            style="height: 60vh"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import CustomBundle from '~/components/pages/Cart/CustomBundle.vue'
import DownArrow from '~/assets/icons/cheveron-down.svg?inline=true'
export default {
  components: {
    DownArrow,
  },
  data() {
    return {
      bundleOpen: false,
      customOpen: false,
      custom: CustomBundle,
    }
  },
  computed: {
    totalCalc() {
      return this.$store.state.transactions.totalManual
    },
    totalProd() {
      return this.$store.state.transactions.totalCart.totalPrice
    },
    discounts() {
      let items = JSON.parse(
        JSON.stringify(this.$store.state.transactions.percent)
      )
      if (items) {
        items.forEach((item) => {
          if (this.totalCalc > 0) {
            return (item.discount = this.totalCalc * (item.value / 100))
          } else if (this.$store.state.products.cart.length > 0) {
            return (item.discount = this.totalProd * (item.value / 100))
          }
          return 0
        })
      } else {
        items = []
      }
      return items
    },
  },
  mounted() {
    this.$store.dispatch('transactions/fetchDiscount')
  },
  methods: {
    toggleMenu(type) {
      if (type === 'bundle') {
        this.bundleOpen = !this.bundleOpen
        this.customOpen = false
      }
      if (type === 'custom') {
        this.bundleOpen = false
        this.customOpen = !this.customOpen
      }
    },
    isMenuOpened(type) {
      if (type === 'bundle') {
        return this.bundleOpen
      }
      if (type === 'custom') {
        return this.customOpen
      }
      return false
    },
    addDiscountHandle(e) {
      // console.log(e.target)
      const obj = {
        rupiah: 0,
        percent: e.target.getAttribute('data-discount'),
      }
      // const disc = e.target.getAttribute('data-discount')
      this.$store.commit('transactions/deduction', obj)
      this.$router.push(`/cart?#addDiscount`)
      // console.log('ggg', obj)
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
}

a {
  color: #525659;
  border: 0.5px solid #00000029;
}
a.isOpen {
  border-bottom: none;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
}
.dropdown {
  margin-top: 30px;
  display: none;
  transition: all 200ms ease;
}
.dropdown.isOpen {
  display: block;
}

/* .dropdown.span {
  margin-bottom: 20px;
} */
</style>
