<template>
  <div class="is-component-wrapper flex">
    <button class="p-4 burger-button" @click="toggle">
      <burger-toggle class="w-8 h-8 text-white fill-current flex-grow-0" />
    </button>
  </div>
</template>

<script>
import BurgerToggle from '~/assets/icons/menu.svg?inline'
// import AppButton from '~/components/App/AppButton'
export default {
  components: { BurgerToggle },
}
</script>

<style scoped>
button:focus,
button:hover {
  background-color: inherit;
  outline: none;
}
</style>
