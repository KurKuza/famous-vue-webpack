<script setup>
import { ref } from 'vue'

const pages = ref([
	{ name: 'Каталог' },
	{ name: 'Доставка' },
	{ name: 'Оплата' },
	{ name: 'Контакты' },
	{ name: 'О галерее' },
])
</script>

<template>
	<nav>
		<ul class="pages">
			<li class="page" v-for="page in pages" :key="page.name">
				<a href="#"> {{ page.name }}</a>
			</li>
		</ul>
	</nav>
</template>

<style lang="css">
.pages {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	column-gap: 3rem;
	row-gap: 0.5rem;
}
.page {
	display: flex;
	justify-content: center;
	align-items: center;
}
</style>
