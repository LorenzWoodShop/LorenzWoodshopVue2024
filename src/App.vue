<script setup lang="ts">
  import MainNav from './components/Nav/MainNav.vue';
  import LogoHeader from './components/LogoHeader/LogoHeader.vue';
</script>

<template>
  <header>
    <LogoHeader />
    <MainNav />
  </header>

  <RouterView />
</template>
