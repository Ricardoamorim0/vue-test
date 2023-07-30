<template>
  <aside class="cart-container">
    <div class="cart">
      <h1 class="cart-title spread">
        <span>
          Cart
          <i class="icofont-cart-alt icofont-1x"></i>
        </span>
        <button class="cart-close" @click="toggleCart()">&times;</button>
      </h1>

      <div class="cart-body">
        <table class="cart-table">
          <thead>
            <tr>
              <th><span class="sr-only">Product Image</span></th>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
              <th><span class="sr-only">Actions</span></th>
            </tr>
          </thead>
          <tbody v-if="Object.keys(cart).length > 0">
            <!--<CartItem v-for="(item, i) in items" :product="item.product!" :quantity="item.quantity" :removeFromCart="removeFromCart" :key="i"/>-->
            <CartItem v-for="(quantity, id, i) in cart" :product="products.find((v) => v.id === Number(id))!" :quantity="quantity" :removeFromCart="removeFromCart" :key="i"/>
          </tbody>
        </table>

        <p class="center" v-if="Object.keys(cart).length <= 0"><em>No items in cart</em></p>
        <div class="spread">
          <span><strong>Total:</strong> ${{ total }}</span>
          <button class="btn btn-light" @click="checkout()">Checkout</button>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
import type { Product } from '@/helper/interfaces';
import CartItem from '@/components/Cart/CartItem.vue';
import { computed, ref, toRefs } from 'vue';

const props = defineProps<{
  products: Array<Product>,
  cart: {[key: string]: number},
  removeFromCart: Function,
  toggleCart: Function,
  checkout: Function
}>();

const { cart, products } = toRefs(props);

const total = computed((): string => {
  return Object.entries(cart.value).reduce((acc, entry, index) =>
    (acc + products.value.find((v: Product) => v.id === Number(entry[0]))!.price.USD * entry[1])
  , 0)
  .toFixed(2);
});
</script>