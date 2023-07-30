<template>
  <main class="wrapper">
    <h1>Past Orders</h1>

    <table class="product-table">
      <thead>
        <tr>
          <td><span class="sr-only">Product Image</span></td>
          <td>Product</td>
          <td>Price</td>
          <td>Quantity</td>
          <td>Total</td>
          <td><span class="sr-only">Actions</span></td>
        </tr>
      </thead>
      <tbody v-if="Object.keys(pastOrders).length > 0">
        <PastOrderCard v-for="(quantity, id, i) in pastOrders" :product="products.find((v) => v.id === Number(id))!" :quantity="quantity" :addToCart="addToCart" :key="i"/>
      </tbody>
    </table>
    <p class="center" v-if="Object.keys(pastOrders).length <= 0"><em>No past orders</em></p>
  </main>
</template>

<script setup lang="ts">
import PastOrderCard from '@/components/PastOrderCard.vue';
import type { Product } from '@/helper/interfaces';

defineOptions({
  inheritAttrs: false
});

defineProps<{
  products: Array<Product>,
  pastOrders: {[key: string]: number},
  addToCart: Function
}>();

</script>