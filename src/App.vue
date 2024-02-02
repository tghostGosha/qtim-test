<script setup lang="ts">

// import HomeView from '@/views/HomeView.vue';
import MyHeader from '@/components/header/MyHeader.vue';
import MyFooter from '@/components/footer/MyFooter.vue';
</script>
<template>
  <MyHeader/>
<!--    <HomeView/>-->
    <router-view></router-view>
  <MyFooter/>
</template>
