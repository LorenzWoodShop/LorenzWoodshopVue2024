<script setup lang="ts">
const imgs = Object.keys(import.meta.glob('../../../public/gallery/*.jpg'))
  .sort((a, b) => -a.localeCompare(b))
  .map((img) => img.replace('../../../public/gallery/', ''));

console.log(imgs);
const imgUrls: string[] = [];

for (const img of imgs) {
  const url = new URL('/gallery/' + img, import.meta.url).toString();
  imgUrls.push(url);
}
</script>

<template>
  <main>
    <div class="gallery">
      <img
        class="gallery__img"
        v-for="(img, index) in imgUrls"
        :src="img"
        :key="index"
        :alt="imgs[index]"
      />
    </div>
  </main>
</template>
<style src="./style.scss" scoped></style>
