<template>
    <div class="page-category">
        <div class="columns is-multiline">
            <div class="column is-12">
                <h2 class="is-size-2 has-text-centered">
                    {{ category.name }}
                </h2>
            </div>
            <div class="column is-3" v-for="product in category.products" 
                                 v-bind:key="product.id"
        >
        <div class="box">
          <figure class="image mb-4">
            <img v-bind:src="product.get_thumbnail">
          </figure>
          <h3 class="is-size-4">'{{ product.name }}'</h3>
          <h3 class="is-size-6 has-text-grey">'{{ product.price }}'</h3>
          <router-link v-bind:to="product.get_absolute_url" class="button is-dark mt-4" >View Detials</router-link>
        </div>
        </div>
        </div>
    </div>
</template>    

<script>
import axios from 'axios';
import { toast } from 'bulma-toast';
import productBox from '@/components/productBox.vue';

export default {
    name: 'Category',
    components: {
        productBox
    },
    data() {
        return {
            category: {
                products: []
            }
        }
    },
    mounted() {
        this.getCategory()
    },
    watch: {
        $route(to, from) {
            if (to.name === 'Category') {
                this.getCategory()
            }
        }
    },
    methods: {
        async getCategory() {
            const categorySlug = this.$route.params.category_slug

            this.$store.commit('setIsLoading', true)
            await axios.get(`/api/v1/products/${categorySlug}/`)
            .then(response => {
                this.category = response.data
            })
            .catch(err => {
                alert(err)

                toast({
                    message: 'Something Went Wrong , Please Try Again',
                    type: 'is-danger',
                    dismissible: true,
                    pauseOnHover: true,
                    duration: 6000,
                    position: 'bottom-right',
                })
            })
            this.$store.commit('setIsLoading', false)
        }
    }

}
</script>