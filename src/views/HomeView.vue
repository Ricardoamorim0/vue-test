<template>
  <div class="splash-container">
    <div class="splash">
        <h1>Splendid Food</h1>
    </div>
  </div>

  <main class="wrapper">

    <h2>Recommended</h2>

    <div class="recommended">
      <ProductCard v-for="(product, i) in products.slice(0, 3)" :product="product" :key="i" :addToCart="addToCart"/>
    </div>

    </main>
</template>

<script setup lang="ts">
import ProductCard from '@/components/ProductCard.vue';
import type { Product } from '@/helper/interfaces.ts';

defineOptions({
  inheritAttrs: false
});

defineProps<{
  products: Array<Product>,
  addToCart: Function
}>();
</script>@/helper/interfaces.mjs@/helper/interfaces