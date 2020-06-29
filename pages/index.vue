<template>
  <v-row>
    <v-col>
      <v-card
        class="pa-4"
        flat
      >
        <v-row class="d-flex justify-center">
          <v-img :src="profilePic" max-width="80px" class="logo"></v-img>
        </v-row>
        <div class="px-12 pt-4">
          <span>Username: <span class="title">{{user_profile.first_name + ' ' + user_profile.mid_name + ' ' + user_profile.last_name}}</span></span>
          <br>
          <span>Email: <span class="title">{{user_profile.email}}</span></span>
          <br>
          <span>Gender: <span class="title">{{user_profile.gender}}</span></span>
        </div>
      </v-card>
    </v-col>
    <v-col>
      <v-card
        class="pa-4"
        flat
      >

      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import { profile } from '~/utils/getProfile.js';

export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  asyncData: profile,
  data() {
    return {
      profilePic: require('~/assets/profile.svg'),
    }
  },
}
</script>

<style scoped>
.logo {
  border: 2px dashed #fc5185!important;
  border-radius: 50%;
}
</style>