<script setup lang="ts">
import ThreeFeature from './components/threeFeature/ThreeFeature.vue';
import ImageFeature from './components/imageFeature/ImageFeature.vue';


</script>

<template>
  <main class="container">
    <ThreeFeature />
    <ImageFeature
      image="20230409_132043.jpg"
      title="Title"
      content="Content"
      highlight
    />
    <ImageFeature
      image="20200606_101138.jpg"
      title="Title"
      content="Content"
      reverse
    />
    <ImageFeature
      image="20230409_132043.jpg"
      title="Title"
      content="Content"
      highlight
    />
  </main>
</template>

<style src="./style.scss" scoped />
