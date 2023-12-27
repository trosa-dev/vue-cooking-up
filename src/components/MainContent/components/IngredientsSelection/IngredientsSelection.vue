<script lang="ts">
import { getCategories } from '@/http/index'
import type { ICategory } from '@/http/index'
import CardCategory from './components/CardCategory/CardCategory.vue'

export default {
  components: { CardCategory },
  data() {
    return {
      categories: [] as ICategory[]
    }
  },
  async created() {
    this.categories = await getCategories()
  },
  emits: ['addIngredient', 'removeIngredient']
}
</script>

<template>
  <section class="select-ingredients">
    <h1 class="header ingredients-title">Ingredients</h1>
    <p class="paragraph-lg instructions">
      Select the ingredients you want to use in this recipe below.
    </p>

    <ul class="categories">
      <li v-for="(category, index) in categories" v-bind:key="index">
        <CardCategory
          :category="category"
          @add-ingredient="$emit('addIngredient', $event)"
          @remove-ingredient="$emit('removeIngredient', $event)"
        />
      </li>
    </ul>
    <p class="paragraph tip">
      *Attention: considering that you have salt, pepper and water at home
    </p>
  </section>
</template>

<style scooped>
.select-ingredients {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ingredients-title {
  color: var(--mean-green, #3d6d4a);
  display: block;
  margin-bottom: 1.5rem;
}

.instructions {
  margin-bottom: 2rem;
}

.categories {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.tip {
  align-self: flex-start;
  margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
  .tip {
    margin-bottom: 2.5rem;
  }
}
</style>
