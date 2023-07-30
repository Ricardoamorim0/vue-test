<template>
  <main class="wrapper">
    <h1>Products</h1>

    <div class="card-container">
      <ProductCard v-for="(product, i) in products" :product="product" :add-to-cart="addToCart" :key="i"/>
    </div>
  </main>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import type { Product } from '@/helper/interfaces';

defineOptions({
  inheritAttrs: false
});

defineProps<{
  products: Array<Product>,
  addToCart: Function
}>();

</script>