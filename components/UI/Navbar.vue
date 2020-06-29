<template>
  <div>
    <v-app-bar 
      color="#28385e"
      dense
      fixed
      app
    >
      <v-btn text dark icon @click="handleNav">
        <v-icon>fas fa-bars</v-icon>
      </v-btn>

      <v-img :src="profile_img" max-width="40px"></v-img>

      <span class="pl-2 white--text" v-if="fetching">Fetching...</span>
      <span class="white--text title px-2" v-if="!fetching">
        {{user_profile.first_name + ' ' + user_profile.mid_name + ' ' + user_profile.last_name}}
      </span>

      <v-spacer></v-spacer>

      <v-btn 
        dark
        text 
        @click="LogOut"
      >
        Sign Out
        <v-icon>fas fa-sign-out-alt</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer 
      :mini-variant="miniVariant"
      mini-variant-width="60"
      v-model="navbar"
      color="#fff"
      app
      floating
    >
      <v-list-item v-if="!miniVariant">
        <v-list-item-content>
          <v-list-item-title class="title">
            ZEETOMIC
          </v-list-item-title>
          <v-list-item-subtitle>
            /Payment
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="miniVariant" class="py-1"></v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.path"
          color="#324e7b"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content style="text-align: end">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import Cookie from 'js-cookie';

export default {
  data() {
    return {
      items: [
        { title: 'Dashboard', icon: 'fas fa-plus-square', path: '/' },
        // { title: 'Payment', icon: 'fas fa-money-bill-wave', path: '/payment'  },
        { title: 'Report', icon: 'fas fa-scroll', path: '/report'  },
        { title: 'API', icon: 'fas fa-key', path: '/apikey'  },
        { title: 'Setting', icon: 'fas fa-cogs', path: '/setting'  },
      ],
      right: null,
      profile_img: require('~/assets/profile.svg'),
      miniVariant: false,
      navbar: true,

      user_profile: [],
      fetching: true
    }
  },
  mounted() {
    this.getProfile();
  },
  methods: {
    async getProfile() {
      await this.$axios.setToken(Cookie.get('token'), 'Bearer');
      await this.$axios.get('pub/v1/userprofile')
      .then(res => {
        this.user_profile = res.data;
        this.fetching = false;
      })
    },
    handleNav() {
      if(screen.width < 1265) {
        this.navbar = !this.navbar;
      } else {
        this.miniVariant = !this.miniVariant;
      }
    },
    LogOut() {
      this.$store.dispatch('user/handleLogOut')
      .then(_=> {
        this.$router.push('/login');
      })
    }
  }
}
</script>