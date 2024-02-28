<template>
  <nav style="position: relative">
    <ul>
      <li>
        <RouterLink to="/">Home</RouterLink>
      </li>
      <li>
        <RouterLink to="/contact">Contact</RouterLink>
      </li>
      <li>
        <RouterLink to="/gallery">Gallery</RouterLink>
      </li>
    </ul>
    <ul style="position: absolute; top: 50%; right: 0; transform: translateY(-50%)">
      <li>
        <a
          href="https://twitter.com/LorenzWoodShop"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon name="si-twitter" />
        </a>
        <a
          href="mailto:grayson.lorenz@lorenzwoodshop.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <v-icon name="io-mail" />
        </a>
      </li>
    </ul>
  </nav>
</template>
<style src="./style.scss" scoped></style>
