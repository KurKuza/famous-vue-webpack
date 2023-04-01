<script setup>
import Button from './Button.vue'
</script>

<template>
	<div class="search">
		<input placeholder="Поиск по названию картины" />
		<Button class="search__button" buttonAccentColor1>Найти</Button>
	</div>
</template>

<style lang="scss" scoped>
.search {
	display: flex;
	min-width: 26rem;
	border: 1px solid #e1e1e1;
	input {
		padding: 0.8125rem 1rem 0.875rem;
		min-width: 18.375rem;
	}
	&__button {
		margin: -0.0625rem;
	}
}
</style>
