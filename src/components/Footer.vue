<script setup>
import Logo from '@/components/Logo.vue'
import Container from '@/components/Container.vue'
import PageNavigator from '@/components/PageNavigator.vue'
import Search from '@/components/Search.vue'
</script>

<template>
	<footer class="footer">
		<Container class="footer__container">
			<div class="footer__left">
				<Logo dark />
				<PageNavigator />
			</div>
		</Container>
	</footer>
</template>

<style lang="scss">
.footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 5.9375rem;
	background-color: var(--footerColor);
	&__container {
		justify-content: space-between;
	}
	&__left {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}
}
</style>
