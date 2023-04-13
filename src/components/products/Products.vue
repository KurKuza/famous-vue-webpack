<script setup>
import { ref } from 'vue'

import Container from '@/components/Container.vue'
import Title from '@/components/Title.vue'
import Card from './card/Card.vue'
import { cardsMock } from '@/mocks/CardsMock'
import { isEmpty } from '@/utils/checks'
import {
	LocalStorageKeys,
	getValueFromLocalStorage,
} from '@/utils/localStorage'

const isEmptyLocalCards = isEmpty(
	getValueFromLocalStorage(LocalStorageKeys.CardsMock)
)

const cards = ref(
	isEmptyLocalCards
		? cardsMock
		: getValueFromLocalStorage(LocalStorageKeys.CardsMock)
)
</script>

<template>
	<div class="products">
		<Container>
			<div class="products__container">
				<Title>Картины эпохи Возрождения</Title>
				<div class="cards">
					<Card v-for="card in cards" v-bind="card" />
				</div>
			</div>
		</Container>
	</div>
</template>

<style lang="scss" scoped>
.products {
	&__container {
		display: flex;
		flex-direction: column;
		padding-top: 2.8125rem;
		width: 100%;
	}
}
.cards {
	display: flex;
	flex-wrap: wrap;
	gap: 2rem;
}
</style>
