<script setup>
import Container from '@/components/Container.vue'
import Title from '@/components/Title.vue'
import Card from './Card.vue'
</script>

<template>
	<main class="products">
		<Container>
			<div class="products__container">
				<Title>Картины эпохи Возрождения</Title>
				<Card />
			</div>
		</Container>
	</main>
</template>

<style lang="css">
.products {
	height: 100%;
}
.products__container {
	display: flex;
	flex-direction: column;
	padding-top: 2.8125rem;
}
</style>
