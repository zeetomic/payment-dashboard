<template>
  
</template>

<script>
export default {
  layout: ({ isMobile }) => isMobile ? 'mobile' : 'default',
  middleware: ['auth'],
}
</script>

<style>

</style>