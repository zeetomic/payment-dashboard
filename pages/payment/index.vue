<template>
  <v-row>
    <v-col>
      <v-card 
        class="pa-4"
        flat
      >

      </v-card>
    </v-col>
    <v-col>
      <v-card 
        class="pa-4"
        flat
      >
        <p class="text-center font-weight-medium headline">Payment</p>
        <v-form
          class="pa-4"
          v-model="valid"
          ref="form"
        >
          <v-text-field
            label="ID"
            v-model="id"
            :rules="idRule"
            solo
          ></v-text-field>
          <v-text-field
            label="API KEY"
            v-model="apikey"
            :rules="apiKeyRule"
            solo
          ></v-text-field>
          <v-text-field
            label="API SEC"
            v-model="apisec"
            :rules="apiSecRule"
            solo
          ></v-text-field>
          <v-text-field
            label="DESTINATION"
            v-model="destination"
            :rules="destinationRule"
            solo
          ></v-text-field>
          <v-select
            solo
            label="ASSET TYPE"
            :items="portfolio.map(
              portfolio => portfolio.asset_code !== undefined ? 
              portfolio.asset_code : portfolio.asset_type
            )"
            v-model="asset_code"
            :rules="asset_typeRule"
          ></v-select>
          <v-text-field
            label="AMOUNT"
            type="number"
            v-model="amount"
            :rules="amountRule"
            solo
          ></v-text-field>
          <v-text-field
            label="MEMO"
            v-model="memo"
            solo
          ></v-text-field>
          <v-btn 
            class="primary"
            width="100%"  
            @click="handleSubmit"
            large
          >Submit</v-btn>
        </v-form>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { portfolio } from '~/utils/getPortfolio.js';
import { validatePayment } from '~/utils/mixins/validatePayment.js';
import { message } from '~/utils/mixins/message.js';

export default {
  mixins: [validatePayment, message],
  asyncData: portfolio,
  data() {
    return {
      id: '',
      apikey: '',
      apisec: '',
      destination: '',
      asset_code: '',
      amount: '',
      memo: ''
    }
  },
  methods: {
    handleSubmit() {
      if(this.$refs.form.validate()) {
        this.$store.dispatch('user/handlePayment', {
          id: this.id,
          apikey: this.apikey,
          apisec: this.apisec,
          destination: this.destination,
          asset_code: this.asset_code,
          amount: this.amount,
          memo: this.memo
        })
        .then(_ => {
          if(this.type  === 'error') {
            this.$toast.error(this.msg)
          } else {
            this.$toast.success(this.msg)
          }
        })
      }
    }
  }
}
</script>

<style scoped>

</style>