<script setup>
import Button from '@/components/buttons/Button.vue'
import CardMessage from './CardMessage.vue'
import CardButton from './CardButton.vue'
const props = defineProps({
	name: {
		type: String,
		required: true,
	},
	img: {
		type: String,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	oldPrice: {
		type: Number || Null,
		default: null,
	},
	isInTheBasket: {
		type: Boolean,
		default: false,
	},
	isBought: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<div class="card" :class="{ 'card--isBought': isBought }">
		<img class="card__img" :src="props.img" alt="img" />
		<div class="card__content">
			<p class="card__name">{{ props.name }}</p>
			<div v-if="isBought" class="card__message">
				<CardMessage>Продана на аукционе</CardMessage>
			</div>
			<div v-else class="card__bottom-content">
				<div class="card__price">
					<div class="card__price_old" v-if="props.oldPrice != null">
						{{ props.oldPrice.toLocaleString('ru-RU') }}$
					</div>
					<div>{{ props.price.toLocaleString('ru-RU') }}$</div>
				</div>
				<CardButton :isInTheBasket="isInTheBasket" />
			</div>
		</div>
	</div>
</template>

<style lang="scss">
.card {
	display: flex;
	flex-direction: column;
	border: 0.0625rem solid var(--dividerColor);
	width: 17.375rem;
	height: 20.5rem;

	&--isBought {
		opacity: 0.5;
	}
	&__content {
		display: flex;
		flex-direction: column;
		padding: 1.25rem 1.5rem 1.5rem 1.5rem;
		gap: 1.375rem;
	}
	&__img {
		width: 100%;
		height: 160px;
	}
	&__name {
		font-weight: 400;
		font-size: 1.125rem;
		line-height: 150%;
		text-align: left;
	}
	&__bottom-content {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__price {
		text-align: left;
		&_old {
			color: #a0a0a0;
			font-weight: 300;
			font-size: 0.875rem;
			line-height: 150%;
			text-decoration: line-through;
		}
	}
	&__message {
		display: flex;
		justify-content: left;
		align-items: center;
		height: 3rem;
	}
}
</style>
