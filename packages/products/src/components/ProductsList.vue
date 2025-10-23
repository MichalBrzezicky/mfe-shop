<template>
    <div>
        <h2>Seznam produktů</h2>
        <ul>
            <li v-for="p in products" :key="p.id">{{ p.name }}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'ProductsList',
        data() {
            return {
                products: [
                    { id: 1, name: 'Produkt A' },
                    { id: 2, name: 'Produkt B' },
                    { id: 3, name: 'Produkt C' },
                ],
            };
        },
    }
</script>
