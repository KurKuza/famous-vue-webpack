<script setup>
import { successIcon } from '@/assets/icons'
import Button from '@/components/buttons/Button.vue'
import { ref } from 'vue'
import axios from 'axios'
const props = defineProps({
	isInTheBasket: {
		type: Boolean,
		default: false,
	},
})

const isInTheBasket = ref(props.isInTheBasket)

async function addInBasket() {
	isInTheBasket.value = !isInTheBasket.value
	const res = await axios.get('https://dummyjson.com/products')
	const data = res.data

	console.log(data)
}
</script>

<template>
	<div @click="addInBasket">
		<Button v-if="isInTheBasket" buttonAccentColor3 :icon="successIcon"
			>В корзине</Button
		>
		<Button v-else buttonAccentColor2>Купить</Button>
	</div>
</template>

<style lang="scss"></style>
