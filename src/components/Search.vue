<script setup></script>

<template>
	<div class="search">
		<input placeholder="Поиск по названию картины" />
		<button>Найти</button>
	</div>
</template>

<style lang="css" scoped>
.search {
	display: flex;
	min-width: 26rem;
	border: 1px solid #e1e1e1;
}
input {
	padding: 0.8125rem 1rem 0.875rem;
	min-width: 18.375rem;
}
button {
	background-color: #403432;
	color: #ffffff;
	font-weight: 700;
	margin: -0.0625rem;
	padding: 0.8125rem 2.25rem 0.875rem;
}
</style>
