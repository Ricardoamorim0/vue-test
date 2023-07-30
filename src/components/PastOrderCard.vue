<template>
  <tr>
    <td><i class="icofont-4x" :class="'icofont-' + product.icon" /></td>
    <td>{{ product.name }}</td>
    <td>${{ product.price.USD }}</td>
    <td>{{ quantity }}</td>
    <td>${{ total }}</td>
    <td><button class="btn btn-dark" @click="addToCart(product.id, quantity)">Add</button></td>
  </tr>
</template>

<script setup lang="ts">
import type { Product } from '@/helper/interfaces';
import { computed, toRefs } from 'vue';

const props = defineProps<{
  product: Product,
  quantity: number,
  addToCart: Function
}>();

const {product, quantity} = toRefs(props);
const total = computed((): string => {
  return (product.value.price.USD * quantity.value).toFixed(2);
});
</script>