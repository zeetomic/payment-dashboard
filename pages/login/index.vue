<template>
  <v-row>
    <v-col class="d-flex align-center justify-center">
      <v-card 
        light
        class="pa-6"
        min-width="520px"
      >
        <p class="display-1 font-weight-medium text-center">Login to ZEETOMIC</p>
        <v-form
          ref="form"
          v-model="valid"
        >
          <v-text-field
            label="Email"
            v-model="email"
            :rules="emailRule"
            solo
          ></v-text-field>
          <v-text-field
            label="Password"
            v-model="password"
            type="password"
            :rules="passwordRule"
            solo
          ></v-text-field>
          <v-btn 
            large 
            width="100%" 
            class="primary"
            :loading="loading"
            @click="handleLogin"
          >Login</v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { validateLogin } from '~/utils/mixins/validateLogin.js';

export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'login',
  mixins: [validateLogin],
  data() {
    return {
      loading: false,

      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      if(this.$refs.form.validate()) {
        this.$store.dispatch('user/handleLogin', {
          email: this.email,
          password: this.password
        })
        .then(_ => {
          this.$router.push('/')
        })
      }
    }
  }
}
</script>

<style scoped>

</style>