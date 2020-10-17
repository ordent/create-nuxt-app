<template>
  <div class="is-component-wrapper"><slot /></div>
</template>

<style scoped>
.is-component-wrapper {
  display: flex;
  align-items: center;
  text-align: center;
}
.is-component-wrapper::before,
.is-component-wrapper::after {
  content: '';
  flex: 1;
  border-bottom: 1px solid #000;
}
.is-component-wrapper::before {
  margin-right: 0.5em;
}
.is-component-wrapper::after {
  margin-left: 0.5em;
}
</style>
