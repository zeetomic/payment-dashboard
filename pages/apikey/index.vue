<template>
<div class="container">
  <v-row>
    <v-col>
      <v-card 
        class="pa-6"
        flat
      >
        <p class="text-center headline">API KEY</p>
        <br>
        <span class="pl-4">API KEY: {{api.apikey}}</span>
        <input type="text" id="apikey" v-model="api.apikey" />
        <v-btn icon color="blue" @click="copyAPI('apikey')">
          <v-icon small>fas fa-copy</v-icon>
        </v-btn>
        <hr class="my-4">
        <span class="pl-4">API SEC: {{api.apisec}}</span>
        <input type="text" id="apisec" v-model="api.apisec" />
        <v-btn icon color="blue" @click="copyAPI('apisec')">
          <v-icon small>fas fa-copy</v-icon>
        </v-btn>
      </v-card>
    </v-col>
  </v-row>
</div>
</template>

<script>
import { api } from '~/utils/getAPI.js';

export default {
  asyncData: api,
  methods: {
    copyAPI(param) {
      /* Get the text field */
      var copyText = document.getElementById(param);
      /* Select the text field */
      copyText.select();
      copyText.setSelectionRange(0, 99999); /*For mobile devices*/
      /* Copy the text inside the text field */
      document.execCommand("copy");
      /* Alert the copied text */
      alert("Copied the text: " + copyText.value);
    }
  }
}
</script>

<style scoped>
  .container {
    padding: 0 16%;
  }
  #apikey, #apisec {
  position: absolute;
  color: #fff;
  opacity: 0;
  width: 1px;
  height: 1px;
  font-size: 1px;
  left: 0;
  box-sizing: content-box;
  -webkit-user-select: initial;
  outline: none;
  margin-left: -9999px;
}
</style>