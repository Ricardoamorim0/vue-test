<template>
  <div class="card">
    <div class="card-title">
      {{ product.name }}
    </div>
    <div class="card-body">
      <i class="icofont-10x" :class="'icofont-' + product.icon"></i>
      <form>
        <div class="row">
          <div class="cell">
            <label>Type:</label>
          </div>
          <div class="cell">
            <em>{{ product.type }}</em>
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label>Price:</label>
          </div>
          <div class="cell">
            ${{ product.price.USD }}
          </div>
        </div>
        <div class="row">
          <div class="cell">
            <label>Quantity:</label>
          </div>
          <div class="cell">
            <input type="number" v-model="quantity">
          </div>
        </div>
      </form>
    </div>
    <div class="card-footer">
      <button class="btn btn-light" @click="add">Add to cart</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@/helper/interfaces.ts';
import { ref, toRefs } from 'vue';

const props = defineProps<{
  product: Product,
  addToCart: Function
}>();

const { product, addToCart } = toRefs(props);
const quantity = ref<number>(0);

function add(): void {
  addToCart.value(product.value.id, quantity.value);
  quantity.value = 0;
}
</script>@/helper/interfaces.mjs@/helper/interfaces