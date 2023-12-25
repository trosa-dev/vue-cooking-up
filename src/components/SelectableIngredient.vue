<script lang="ts">
import GenericTag from './GenericTag.vue'

export default {
  components: { GenericTag },
  props: { ingredient: { type: String, required: true } },
  data: () => {
    return {
      selected: false
    }
  }
}
</script>

<template>
  <button class="ingredient" @click="selected = !selected" :aria-pressed="selected">
    <GenericTag :text="ingredient" :selected="selected" />
  </button>
</template>

<style scoped>
.ingredient {
  cursor: pointer;
}
</style>
