<script setup lang="ts">
import ThreeFeature from './components/threeFeature/ThreeFeature.vue';
import ImageFeature from './components/imageFeature/ImageFeature.vue';
</script>

<template>
  <main>
    <ImageFeature
      image="20211224_171105.jpg"
      title="Gaming Accessories"
      content="My bread and butter, the stuff that got me into this trade. Never lose your dice again. Have the coolest swag at the table"
    />
    <ImageFeature
      image="20230409_132043.jpg"
      title="Pens and Pencils"
      content="Hand turned pens, pencils, and even wands. Made from a wide variety of woods, from the humble maple to the exotic purpleheart."
      highlight
      reverse
    />
    <ThreeFeature />
    <ImageFeature
      image="20210704_132152.jpg"
      title="Gifts and Cool Stuff"
      content="Shop hammers, wood replica knives, jewelry boxes, and more. All made with the same gusto and care."
      highlight
      reverse
    />
    <ImageFeature
      image="20200606_101138.jpg"
      title="Furniture"
      content="Linen chests, bookshelves, baby changing tables, and even a gaming table. I'll make anything you want, so long as it's made from tree parts."
    />
  </main>
</template>

<style src="./style.scss" scoped />
