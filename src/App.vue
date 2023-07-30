<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <RouterLink to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork"></i>
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/products" class="top-bar-link">
        <span>Products</span>
      </RouterLink>
      <RouterLink to="/past-orders" class="top-bar-link">
        <span>Past Orders</span>
      </RouterLink>
    </nav>
    <a @click="toggleCart" class="top-bar-cart-link">
      <i class="icofont-cart-alt icofont-1x"></i>
      <span>Cart ({{ Object.values(cart).reduce((acc, q) => acc + q , 0) }})</span>
    </a>
  </header>

  <RouterView :products="products" :addToCart="addToCart" :pastOrders="pastOrders"/>

  <Cart v-if="cartOpen" :products="products" :cart="cart" :removeFromCart="removeFromCart" :toggleCart="toggleCart" :checkout="checkout"/>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import { ref } from 'vue';
import food from '@/assets/food.json';
import type { Product } from '@/helper/interfaces';
import Cart from '@/components/Cart/Cart.vue';

const products = ref<Array<Product>>(food);
  
const cart = ref<{[key: string]: number}>({});
const cartOpen = ref(false);

const pastOrders = ref<{[key: string]: number}>({});

function addToCart(id: number, quantity: number): void {
  if (quantity > 0 && !cart.value.hasOwnProperty(id)) {
    cart.value[id] = 0;
  }

  if (cart.value.hasOwnProperty(id)) {
    if (cart.value[id] + quantity > 0) {
      cart.value[id] += quantity;
    } else {
      removeFromCart(id);
    }
  }
}

function removeFromCart(id: number): void {
  delete cart.value[id];
}

function checkout(): void {
  if (Object.keys(cart.value).length > 0) {
    pastOrders.value = Object.assign(cart.value);
    cart.value = {};
  }
}

function toggleCart(): void {
  cartOpen.value = !cartOpen.value;
}

</script>
