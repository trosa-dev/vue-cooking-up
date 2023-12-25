<script lang="ts">
export default {
  props: {
    text: { type: String, required: true },
    selected: { type: Boolean }
  }
}
</script>

<template>
  <span :class="['tag', { selected }]">{{ text }}</span>
</template>

<style>
.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--gray);
  background: var(--light-gray);
  font-weight: 400;
}

.tag.selected {
  color: var(--cream, #fffaf3);
  background: var(--coral, #f0633c);
  font-weight: 700;
}
</style>
