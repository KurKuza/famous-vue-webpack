<script setup>
import Logo from '@/components/Logo.vue'
import Container from '@/components/Container.vue'
import PageNavigator from '@/components/PageNavigator.vue'
import Search from '@/components/Search.vue'
</script>

<template>
	<header class="header">
		<Container class="container">
			<div class="left">
				<Logo />
				<PageNavigator />
			</div>
			<Search />
		</Container>
	</header>
</template>

<style lang="css">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 5.9375rem;
	border-bottom: 0.0625rem solid var(--dividerColor);
}
.container {
	justify-content: space-between;
}
.left {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 3rem;
}
</style>
