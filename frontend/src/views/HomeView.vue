<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'HomeView',
  data(){
    return {
      LatestProducts: []
    }
  },
  components: {
  },
  mounted(){
    this.getLatestProducts()
  },
  methods: {
    getLatestProducts() {
      axios.get('api/v1/latest_products/').then(response=>{
        this.LatestProducts = response.data
      }).catch(err => {
        console.log(err)
      })
}
  }
}
</script>
<style scoped>
  .image{
    margin-top: -1.25rem;
    margin-left: -1.25rem;
    margin-right: -1.25rem;

  }
</style>
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
        <div class="column is-3" v-for="product in LatestProducts" 
                                 v-bind:key="product.id"
        >
        <div class="box">
          <figure class="image mb-4">
            <img src="product.get_thumbnail" alt="">
          </figure>
          <h3 class="is-size-4">'{{ product.name }}'</h3>
          <h3 class="is-size-6 has-text-grey">'{{ product.price }}'</h3>
          view details
        </div></div>
      </div>
    </div>
  </div>
</template>
