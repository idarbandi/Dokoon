<template>
    <tr>
        <td><RouterLink to="item.product.get_absolute_url" >{{ item.product.name }}</RouterLink></td>
        <td>{{ item.product.price }}</td>
        <td>{{ item.quantity }}</td>
        <td>$ {{ getItemTotal(item).toFixed(2) }}</td>
        <td><button>delete</button></td>
    </tr>
</template>

<script>
    export default {
        name: 'cartItem',
        props: {
            initialItem: Object
        },
        data() {
            return {
                item : this.initialItem
            }
        },
        methods: {
            getItemTotal(item) {
                return item.quantity * item.product.price
            },
        },
    }
</script>