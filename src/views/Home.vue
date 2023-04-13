<script setup>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Products from '@/components/products/Products.vue'
</script>

<template>
	<div class="page">
		<Header />
		<main class="main">
			<Products />
		</main>
		<Footer />
	</div>
</template>

<style lang="scss">
.page {
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	min-height: 100%;

	.main {
		height: 100%;
		margin-bottom: auto;
	}
}
</style>
