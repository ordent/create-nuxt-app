<template>
  <div class="is-component-wrapper flex flex-col items-center p-4 w-full">
    <menu-item v-for="item in menuItems" :key="item.id" :data="item" />
    <div>
      <app-button
        background="white"
        color="blue"
        border="blue"
        class="py-3 px-16"
        @click="callWaiter"
      >
        <span> Panggil Pelayan </span>
      </app-button>
    </div>
  </div>
</template>

<script>
import MenuItem from '~/components/pages/Customer/MenuItem.vue'
import AppButton from '~/components/Form/AppButton.vue'
export default {
  components: {
    MenuItem,
    AppButton,
  },
  data() {
    return {
      menuItems: [
        {
          id: 0,
          img: 'https://source.unsplash.com/random',
          name: 'Random',
          price: 23000,
        },
        {
          id: 1,
          name: 'Menu Item',
          price: 17000,
        },
        {
          id: 2,
          name: 'Item Menu',
          price: 46000,
        },
      ],
    }
  },
  methods: {
    callWaiter() {},
  },
}
</script>
