<template>
  <v-row>
    <v-col class="d-flex align-center justify-center">
      <v-card 
        light
        class="pa-6"
        min-width="520px"
      >
        <p class="display-1 font-weight-medium text-center">Login to ZEETOMIC</p>
        <v-form>
          <v-text-field
            label="Email"
            v-model="email"
            solo
          ></v-text-field>
          <v-text-field
            label="password"
            v-model="password"
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
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'login',
  data() {
    return {
      loading: false,

      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>