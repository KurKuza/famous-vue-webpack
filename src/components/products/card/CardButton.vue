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

	const res = await new Promise((resolve) => {
		setTimeout(async () => {
			try {
				const res = await axios.get('https://dummyjson.com/products')

				isInTheBasket.value = !isInTheBasket.value
				isLoading.value = false
				resolve(res)
			} catch (e) {
				console.log(e)
			}
		}, 2000)
	})

	console.log('data:', res.data)
}
</script>

<template>
	<div @click="addInBasket">
		<Button
			v-if="isInTheBasket"
			buttonAccentColor3
			:icon="successIcon"
			:loader="isLoading"
			>В корзине</Button
		>
		<Button v-else buttonAccentColor2 :loader="isLoading">Купить</Button>
	</div>
</template>

<style lang="scss"></style>
