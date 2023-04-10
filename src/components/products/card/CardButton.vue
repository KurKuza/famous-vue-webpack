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

const isLoading = ref(false)

const isInTheBasket = ref(props.isInTheBasket)

async function addInBasket() {
	isLoading.value = true
	isInTheBasket.value = !isInTheBasket.value

	const res = await setTimeout(async () => {
		const ress = await axios.get('https://dummyjson.com/products')
		console.log('ress:', ress)
		console.log('isLoading:', isLoading.value)

		return ress
	}, 2000)
	isLoading.value = false
	console.log('isLoading:', isLoading.value)

	console.log('data:', res.data)
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
