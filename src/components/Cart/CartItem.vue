<template>
  <tr>
    <td><i class="icofont-3x" :class="'icofont-' + product.icon"></i></td>
    <td>{{ product.name }}</td>
    <td>${{ product.price.USD.toFixed(2) }}</td>
    <td class="center">{{ quantity }}</td>
    <td>${{ total }}</td>
    <td class="center">
      <button class="btn btn-light cart-remove" @click="removeFromCart(product.id)">
        &times;
      </button>
    </td>
  </tr>
</template>

<script setup lang="ts">
import type { Product } from '@/helper/interfaces';
import { computed, toRefs } from 'vue';

const props = defineProps<{
  product: Product,
  quantity: number,
  removeFromCart: Function
}>();

const {product, quantity} = toRefs(props);
const total = computed((): string => {
  return (product.value.price.USD * quantity.value).toFixed(2);
});
</script>