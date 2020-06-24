<template>
  <v-row>
    <v-col>
      <v-card
        class="pa-4"
        flat
      >
        <span>TESTING</span>
      </v-card>
    </v-col>
    <v-col>
      <v-card
        class="pa-4"
        flat
      >
        <span>TESTING</span>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default'
}
</script>

<style scoped>

</style>