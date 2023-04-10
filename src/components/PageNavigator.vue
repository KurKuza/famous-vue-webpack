<script setup>
import { ref } from 'vue'

const links = ref([
	{ name: 'Каталог' },
	{ name: 'Доставка' },
	{ name: 'Оплата' },
	{ name: 'Контакты' },
	{ name: 'О галерее' },
])
</script>

<template>
	<nav>
		<ul class="links">
			<li class="link" v-for="link in links" :key="link.name">
				<a href="#"> {{ link.name }}</a>
			</li>
		</ul>
	</nav>
</template>

<style lang="scss">
.links {
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	column-gap: 3rem;
	row-gap: 0.5rem;
}
</style>
