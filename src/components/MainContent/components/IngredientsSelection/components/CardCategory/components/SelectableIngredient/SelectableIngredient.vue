<script lang="ts">
import GenericTag from '@/components/GenericTag/GenericTag.vue'

export default {
  components: { GenericTag },
  props: { ingredient: { type: String, required: true } },
  data: () => {
    return {
      selected: false
    }
  },
  methods: {
    onclick() {
      this.selected = !this.selected

      if (this.selected) {
        this.$emit('addIngredient', this.ingredient)
      }

      if (!this.selected) {
        this.$emit('removeIngredient', this.ingredient)
      }
    }
  },
  emits: ['addIngredient', 'removeIngredient']
}
</script>

<template>
  <button class="ingredient" @click="onclick()" :aria-pressed="selected">
    <GenericTag :text="ingredient" :selected="selected" />
  </button>
</template>

<style scoped>
.ingredient {
  cursor: pointer;
}
</style>
