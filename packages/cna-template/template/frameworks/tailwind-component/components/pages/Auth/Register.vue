<template>
  <div class="is-component-wrapper w-full">
    <h1 class="text-2xl font-bold">Selamat Datang</h1>
    <p class="mb-4 mt-4">
      Hi, untuk proses registrasi, kamu bisa mendaftarkan usaha kamu atau kalau
      usaha kamu sudah terdaftar atau kamu bisa langsung daftar sebagai pegawai
      dari perusahaan tersebut.
    </p>
    <app-button
      class="mb-4 py-2"
      background="blue"
      @click="goToCompanyRegister"
    >
      Daftar sebagai pemilik usaha.
    </app-button>
    <app-text-separator>atau</app-text-separator>
    <!-- Pilih Tempat Usaha here -->
    <app-select
      v-model="company"
      :options="['Canada', 'United States']"
      label="Nama Badan Usaha"
    />
    <!-- <v-select :options="['Canada', 'United States']" /> -->
    <app-button
      class="mt-4 py-2"
      background="blue"
      :disabled="!company"
      @click="goToIndividualRegister"
    >
      Daftar sebagai pegawai.
    </app-button>
    <p class="mt-4 text-center">
      Sudah punya akun?
      <nuxt-link to="/auth/login" class="text-red-400"
        >Yuk Login disini.
      </nuxt-link>
    </p>
  </div>
</template>

<script>
import { AppButton, AppSelect } from '~/components/Form'
import AppTextSeparator from '~/components/Typography/AppTextSeparator.vue'
export default {
  components: {
    AppButton,
    AppTextSeparator,
    AppSelect,
  },
  data() {
    return {
      company: null,
    }
  },
  watch: {},
  mounted() {},
  methods: {
    goToIndividualRegister() {
      this.$router.push(`/auth/register?company=${this.company}#individual`)
    },
    goToCompanyRegister() {
      this.$router.push('/auth/register#company')
    },
  },
}
</script>
