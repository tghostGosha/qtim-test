import { computed, Ref, ref } from 'vue';

interface PaginationConfig<T> {
  rowsPerPage?: Ref<number>;
  arrayToPaginate: Ref<T[]>;
  currentPage: Ref<number>;
}

// eslint-disable-next-line import/prefer-default-export
export function usePagination<T>(config: PaginationConfig<T>) {
  const rowsPerPage = config.rowsPerPage || ref(8);
  // eslint-disable-next-line vue/return-in-computed-property
  const paginatedArray = computed(():any => {
    config.arrayToPaginate.value.slice(
      (config.currentPage.value - 1) * rowsPerPage.value,
      config.currentPage.value * rowsPerPage.value,
    );
  });
  // eslint-disable-next-line vue/return-in-computed-property,no-undef,max-len
  const numberOfPages = computed(():number => Math.ceil((config.arrayToPaginate.value.length || 0) / rowsPerPage.value));
  return {
    paginatedArray,
    numberOfPages,
  };
}
