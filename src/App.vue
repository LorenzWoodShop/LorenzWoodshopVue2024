<script setup lang="ts">
import MainNav from './components/Nav/MainNav.vue';
</script>

<template>
  <header>
    <RouterLink
      to="/"
      class="header-logo no-hover"
    >
      <img
        alt="LWS logo"
        class="logo"
        src="@/assets/img/LWSNewLogoTransparentNoTextSmall.png"
      />
      <div
        style="
          display: flex;
          flex-direction: column;
          margin-left: 10px;
          color: black;
          justify-content: center;
          align-items: center;
          padding-bottom: 10px;
        "
      >
        <span style="font-size: 32px">Lorenz</span>
        <span style="font-size: 18px">Wood Shop</span>
      </div>
    </RouterLink>
    <MainNav />
  </header>

  <RouterView />
</template>
