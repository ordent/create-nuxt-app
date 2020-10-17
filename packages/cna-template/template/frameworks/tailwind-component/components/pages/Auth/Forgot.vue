<template>
  <div class="is-component-wrapper">
    <app-form>
      <h1 class="text-center font-bold text-2xl mb-4">Jangan Khawatir</h1>
      <p>
        Silahkan masukkan email dari akun yang anda miliki dan kami akan
        mengirimkan email untuk memulai proses reset password anda.
      </p>
      <app-input
        v-model.trim="$v.email.$model"
        label="Email"
        class="mb-4"
        type="email"
        :error="$v.email.$error"
      />
      <app-button class="py-2 mt-4" background="blue" @click="handleSubmit">
        Kirim Langkah Selanjutnya
      </app-button>
      <p class="mt-2 text-center">
        Kembali ke
        <nuxt-link to="/auth/login" class="text-red-400"> Login </nuxt-link>
      </p>
    </app-form>
  </div>
</template>

<script>
import { AppButton, AppInput, AppForm } from '~/components/Form'
import { ForgotMixin } from '~/assets/js/users'
export default {
  components: {
    AppButton,
    AppForm,
    AppInput,
  },
  mixins: [ForgotMixin],
}
</script>
