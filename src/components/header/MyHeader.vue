<script setup lang="ts">
import './MyHeader.css';
// import BlackButton from '@/components/UI/BlackButton/BlackButton.vue';
</script>

<template>
<header class="header">
  <div class="header__container flex">
    <img src="../../assets/Qtim.png" alt="logo">
    <div class="header__control flex">
      <nav class="flex">
        <a href="#">Works</a>
        <a href="#">About</a>
      </nav>
      <div class="buttons__control flex">
        <button class="lang__button "><img src="@/assets/united-kingdom.png" alt="lang"></button>
        <button class="black__button">Let’s work</button>
      </div>
    </div>
  </div>
</header>
</template>

<style scoped>

</style>
