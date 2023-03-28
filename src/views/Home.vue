<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Products from '@/components/products/Products.vue'
</script>

<template>
	<div class="page">
		<Header />
		<Products />
		<Footer />
	</div>
</template>

<style>
.page {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 100%;
}
</style>
