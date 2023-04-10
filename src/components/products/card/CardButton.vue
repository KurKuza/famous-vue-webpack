<script setup>
import { successIcon } from '@/assets/icons'
import Button from '@/components/buttons/Button.vue'
const props = defineProps({
	isInTheBasket: {
		type: Boolean,
		default: false,
	},
})
</script>

<template>
	<Button v-if="isInTheBasket" buttonAccentColor3 :icon="successIcon"
		>В корзине</Button
	>
	<Button v-else buttonAccentColor2>Купить</Button>
</template>

<style lang="scss"></style>
