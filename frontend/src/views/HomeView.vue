<script>
// @ is an alias to /src
import axios from 'axios';
import productBox from '@/components/productBox.vue';

export default {
  name: 'HomeView',
  data(){
    return {
      LatestProducts: []
    }
  },
  components: {
    productBox
  },
  mounted(){
    this.getLatestProducts()
  },
  methods: {
    async getLatestProducts() {
      await axios.get('api/v1/latest_products/').then(response=>{
        document.title = 'Home' + ' | Dokoon'
        this.LatestProducts = response.data
      }).catch(err => {
        console.log(err)
      })
}
  }
}
</script>
<template>
  <div class="home">
    <section class="hero is-medium is-dark mb-6">
      <div class="hero-body has-text-centered">
        <p class="title mb-6">
          Wellcome to Dokoon
        </p>
        <p class="subtitle">
          The Best Online Shopping center in Iran
        </p>
      </div>
    </section>
    <div class="column is-multiline">
      <div class="column is-12">
        <h2 class="is-size-2 has-text-centered">
          Latest Products
        </h2>
        <product-box
          v-for="product in LatestProducts"
          v-bind:key="product.id"
          v-bind:product='product' />
      </div>
    </div>
  </div>
</template>
