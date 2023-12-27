<script lang="ts">
import GenericTag from '@/components/GenericTag/GenericTag.vue'
import IngredientsSelectionVue from './components/IngredientsSelection/IngredientsSelection.vue'

export default {
  data() {
    return { ingredients: [] as string[] }
  },
  components: { IngredientsSelectionVue, GenericTag },
  methods: {
    addIngredient(ingredient: string) {
      this.ingredients.push(ingredient)
    },
    removeIngredient(ingredient: string) {
      this.ingredients = this.ingredients.filter((elemento: string) => elemento !== ingredient)
    }
  }
}
</script>

<template>
  <main class="main-content">
    <section>
      <span class="subtitle-lg your-list-text"> Your list: </span>
      <ul v-if="ingredients.length > 0" class="your-ingredients-list">
        <li v-for="(ingredient, index) in ingredients" v-bind:key="index">
          <GenericTag :text="ingredient" selected />
        </li>
      </ul>

      <p v-else class="paragraph empty-list">
        <img src="../../assets/images/icons/empty-list.svg" alt="search icon" />
        Your list is empty, select ingredients to start.
      </p>
    </section>
    <IngredientsSelectionVue
      @add-ingredient="addIngredient($event)"
      @remove-ingredient="removeIngredient($event)"
    />
  </main>
</template>

<style scoped>
.main-content {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--cream, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.your-list-text {
  color: var(--coral, #f0633c);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.your-ingredients-list {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}

.empty-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #f0633c);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .main-content {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .main-content {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
