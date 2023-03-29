<script setup>
import Button from '@/components/Button.vue'
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
})
</script>

<template>
	<div class="card">
		<img class="card__img" :src="props.img" alt="img" />
		<div class="card__content">
			<p class="card__name">{{ props.name }}</p>
			<div class="card__bottom-content">
				<div class="price">
					<div class="price__old" v-if="props.oldPrice != null">
						{{ props.oldPrice.toLocaleString('ru-RU') }}$
					</div>
					<div class="price__current">
						{{ props.price.toLocaleString('ru-RU') }}$
					</div>
				</div>
				<Button buttonAccentColor2>Купить</Button>
			</div>
		</div>
	</div>
</template>

<style lang="css">
.card {
	display: flex;
	flex-direction: column;
	border: 0.0625rem solid var(--dividerColor);
	max-width: 278px;
}
.card__content {
	padding: 1.25rem 1.5rem 1.5rem 1.5rem;
}
.card__img {
	width: 100%;
	height: 160px;
}
.card__name {
	font-weight: 400;
	font-size: 1.125rem;
	line-height: 150%;
	text-align: left;
	margin-bottom: 1.375rem;
}
.card__bottom-content {
	display: flex;
	justify-content: center;
	align-items: center;
}
.card__bottom-content {
	display: flex;
	justify-content: space-between;
}
.price {
	text-align: left;
}
.price__old {
	color: #a0a0a0;
	font-weight: 300;
	font-size: 0.875rem;
	line-height: 150%;
	text-decoration: line-through;
}
</style>
