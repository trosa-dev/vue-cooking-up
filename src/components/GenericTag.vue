<script lang="ts">
export default {
  props: {
    text: { type: String, required: true }
  }
}
</script>

<template>
  <span class="ingredient">{{ text }}</span>
</template>

<style>
.ingredient {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--creme, #fffaf3);
  background: var(--coral, #f0633c);
  font-weight: 700;
}
</style>
