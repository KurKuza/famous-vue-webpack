<script setup>
import Container from '@/components/Container.vue'
import Title from '@/components/Title.vue'
import Card from './card/Card.vue'
import { CardsMock } from '@/mocks/CardsMock'
</script>

<template>
	<main class="products">
		<Container>
			<div class="products__container">
				<Title>Картины эпохи Возрождения</Title>
				<div class="cards">
					<Card v-for="card in CardsMock" v-bind="card" />
				</div>
			</div>
		</Container>
	</main>
</template>

<style lang="scss" scoped>
.products {
	height: 100%;

	&__container {
		display: flex;
		flex-direction: column;
		padding-top: 2.8125rem;
	}
}
.cards {
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
}
</style>
