<script setup lang="ts">
import { ref, onMounted } from 'vue';
/* eslint-disable */
const props = defineProps({
  id: String,
});
const article = ref({});

onMounted(async () => {
  try {
    await fetch(`https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/${props.id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        article.value = data;
      });
  } catch (err) {
    console.log(err);
  }
});
</script>
<template>
  <div class="container">
    <section class="section__article">
      <article class="post">
        <h1>{{article.title}}</h1>
        <img :src="article.image" alt="pic">
        <p><span>About</span>{{article.description}}</p>
      </article>
    </section>
  </div>
</template>
