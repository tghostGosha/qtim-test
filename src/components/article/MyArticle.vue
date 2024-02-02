<script setup lang="ts">
import './MyArticle.css';

/* eslint-disable */
defineProps({
  id: String,
  title: String,
  imageUrl: String,
  preview: String,
});
</script>

<template>
  <article class="article__card" :id="id">
    <img :src="imageUrl" alt="pic">
    <p >{{preview}}</p>

    <router-link @click="$router.push(`/posts/${id}`)" to="{name: 'post' , params: {id: id}}">Read more</router-link>
  </article>
</template>

