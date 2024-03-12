<script setup lang="ts">
  import MainNav from './components/MainNav/MainNav.vue';
  import LogoHeader from './components/LogoHeader/LogoHeader.vue';
  import LWSFooter from './components/LWSFooter/LWSFooter.vue';
</script>

<template>
  <header>
    <LogoHeader />
    <MainNav />
  </header>

  <RouterView />

  <LWSFooter />
</template>
