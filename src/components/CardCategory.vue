<script lang="ts">
import type { ICategory } from '@/http'
import type { PropType } from 'vue'

export default {
  props: {
    category: {
      type: Object as PropType<ICategory>,
      required: true
    }
  }
}
</script>

<template>
  <article class="category">
    <header class="header__category">
      <img
        v-bind:src="`/images/icons/ingredients_category/${category.image}`"
        alt=""
        class="image__category"
      />
      <h2 class="paragraph-lg name__category">{{ category.name }}</h2>
    </header>
    <ul class="ingredients__category">
      <li v-for="(ingredient, index) in category.ingredients" :key="index">{{ ingredient }}</li>
    </ul>
  </article>
</template>

<style>
.category {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #fff);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}

.header__category {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
}

.image__category {
  width: 3.5rem;
}

.name__category {
  text-align: center;
  color: var(--verde-medio, #3d6d4a);
  font-weight: 700;
}

.ingredients__category {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
</style>
