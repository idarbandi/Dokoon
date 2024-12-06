<template>
    <div class="page-cart">
        <div class="column is-12 box">
            <table class="table is-fullwidth" v-if="cartTotalLength">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <CartItem
                        v-for="item in cart.items"
                        v-bind:key="item.product.id"
                        v-bind:initial-item="item"
                        v-on:removeFromCart="removeFromCart"
                    />
                </tbody>
            </table>
            <p v-else > You Dont Have Any Products in Your Cart ... </p>
        </div>
        <div class="coloumn is-12 box">
            <div class="subtitle">
                <strong>$ {{ cartTotalPrice.toFixed(2) }}</strong>, {{ cartTotalLength }} items
                <hr>
                <router-link to="/checkout" class="button is-dark"> Proceed to Checkout </router-link>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';
import CartItem from '@/components/CartItem.vue'

    export default {
        name: 'Cart',
        components: {
            CartItem
        },
        data() {
            return { 
                cart: {
                    items: []
                }
            }
        },
        mounted() {
            this.cart = this.$store.state.cart
        },
        methods: {
            removeFromCart(item) {
                this.cart.items = this.cart.items.filter(i => i.product.id !== item.product.id)
            }
        },
        computed: {
            cartTotalLength() {
                return this.cart.items.reduce((aac, curVal) => {
                    return aac += curVal.quantity
                }, 0)
                },
            cartTotalPrice() {
                    return this.cart.items.reduce((aac, curlVal) => {
                        return aac += curlVal.product.price * curlVal.quantity
                    }, 0)
                
            }
        }
    }
</script>