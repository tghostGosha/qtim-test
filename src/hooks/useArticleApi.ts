import { ref, Ref } from 'vue';
import { usePagination } from '@/hooks/useClientSidePagination';

const URL = 'https://6082e3545dbd2c001757abf5.mockapi.io/qtim-test-work/posts/';

export interface Article {
  id: string;
  title: string;
  imageUrl: string;
  preview: string;
}

export function useArticleApi(
  currentPage: Ref<number>,
  rowsPerPage?: Ref<number>,
) {
  const articles: Ref<Article[]> = ref([]);

  const articleAreLoading = ref(false);

  const { paginatedArray, numberOfPages } = usePagination<Article>({
    rowsPerPage,
    arrayToPaginate: articles,
    currentPage,
  });

  const loadArticles = async () => {
    articleAreLoading.value = true;
    try {
      await fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          articles.value = data;
        });
    } catch (err) {
      console.log(err);
    } finally {
      articleAreLoading.value = false;
    }
  };

  return {
    loadArticles,
    articles,
    articleAreLoading,
    numberOfPages,
  };
}
