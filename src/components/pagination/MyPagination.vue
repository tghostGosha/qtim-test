<script lang="ts" setup>
import './Mypagination.css';
import { toRefs } from 'vue';
// eslint-disable-next-line no-undef
const props = defineProps({
  numberOfPages: {
    required: true,
    type: Number,
  },
  modelValue: {
    required: true,
    type: Number,
  },
});

const { numberOfPages, modelValue: currentPage } = toRefs(props);

// eslint-disable-next-line no-undef
const emit = defineEmits(['update:modelValue']);

const setCurrentPage = (number: any) => {
  emit('update:modelValue', number);
};

const previous = () => {
  if (currentPage.value === 1) return;
  emit('update:modelValue', currentPage.value - 1);
};

const next = () => {
  if (currentPage.value >= numberOfPages.value) return;
  emit('update:modelValue', currentPage.value + 1);
};
</script>
<template>
    <ul v-if="numberOfPages >= 1" class="pagination flex">
<!--      <li-->
<!--        class="page-item"-->
<!--        aria-label="go to previous page"-->
<!--        @click="previous()"-->
<!--        @KeyDown="previous()"-->
<!--        :class="{-->
<!--          disabled: currentPage === 1,-->
<!--        }"-->
<!--      >-->
<!--        <span class="page-link">&lt;</span>-->
<!--      </li>-->
      <li
        v-for="index in numberOfPages"
        :key="index"
        :aria-label="'go to page ' + index"
        class="page-item"
        @click="setCurrentPage(index)"
        @KeyDown="setCurrentPage(index)"
      >
        <div
          class="page-link"
          :class="{
            'active': currentPage === index,
          }"
        >
          {{ index }}
        </div>
      </li>
      <li
        class="page-item"
        :class="{
          disabled: currentPage === numberOfPages || !numberOfPages,
        }"
        aria-label="go to next page"
        @click="next()"
        @KeyDown="next()"
      >
        <span class="page-link">
          <svg width="8" height="13" viewBox="0 0 8 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.5 1.5L6.5 6.5L1.5 11.5" stroke="#494949" stroke-width="1.3"
                stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        </span>
      </li>
    </ul>
</template>
