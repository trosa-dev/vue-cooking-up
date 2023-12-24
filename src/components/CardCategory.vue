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

<template>{{ category.name }} {{ category.image }}</template>
