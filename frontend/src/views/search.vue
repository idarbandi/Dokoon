<template>
    <div class="page-search">
        <div class="column is-multiline">
            <div class="column is-12">
                <h1 class="title">Search</h1>
                <h2 class="is-size-5 has-text-grey">
                    Search Term : "{{ query }}"
                </h2>  
            </div>
            <productBox
                v-for="product in products"
                v-bind:key="product.id"
                v-bind:product="product"
            />
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import productBox from '@/components/productBox.vue';
    export default {
        name: 'search',
        components: {
            productBox
        },
        data() {
            return {
                products: [],
                query: ''
            }
        },
        mounted() {
            document.title = 'Search | Dokoon'
        }
    }

</script>