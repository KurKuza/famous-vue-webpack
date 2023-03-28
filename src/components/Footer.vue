<script setup>
import Logo from '@/components/Logo.vue'
import Container from '@/components/Container.vue'
import PageNavigator from '@/components/PageNavigator.vue'
import Search from '@/components/Search.vue'
</script>

<template>
	<footer class="footer">
		<Container class="container">
			<div class="left">
				<Logo dark />
				<PageNavigator />
			</div>
		</Container>
	</footer>
</template>

<style lang="css">
.footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 5.9375rem;
	background-color: var(--footerColor);
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
