<script setup lang="ts">
import MyArticle from '@/components/article/MyArticle.vue';
import MyPagination from '@/components/pagination/MyPagination.vue';

import { onMounted, ref } from 'vue';

// eslint-disable-next-line import/no-duplicates,import/named
import { useArticleApi } from '@/hooks/useArticleApi';

const currentPage = ref(1);
const rowsPerPage = ref(8);

const {
  articles, articleAreLoading, loadArticles, numberOfPages,
} = useArticleApi(
  currentPage,
  rowsPerPage,
);
console.log(articleAreLoading);

onMounted(async () => loadArticles());

</script>
<template>

  <div class="container">
    <section class="section__articles">
      <h1>Articles</h1>
      <div class="articles__list flex" >
        <div v-if="articleAreLoading">loading.....</div>
        <MyArticle :key="item.id" v-for="item in articles"
                   :id="item.id" :imageUrl="item.image"
                   :preview="item.preview" />
        <MyPagination  v-model="currentPage" :numberOfPages="numberOfPages"/>

      </div>
    </section>
  </div>

</template>
