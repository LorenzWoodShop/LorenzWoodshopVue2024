<script setup lang="ts">
  const props = defineProps({
    image: String,
    title: String,
    content: String,
    highlight: {
      type: Boolean,
      default: false
    },
    reverse: {
      type: Boolean,
      default: false
    }
  });
  function getImageUrl() {
    // This path must be correct for your file
    return new URL('/home-imgs/' + props.image, import.meta.url).toString();
  }
</script>

<template>
  <div :class="'image-feature-wrapper' + (props.highlight ? ' --highlight' : '')">
    <div :class="'image-feature' + (props.reverse ? ' --reverse' : '')">
      <div class="image-feature__image">
        <img
          :src="getImageUrl()"
          alt="feature image"
        />
      </div>
      <div class="image-feature__content">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
      </div>
    </div>
  </div>
</template>

<style src="./style.scss" scoped />
