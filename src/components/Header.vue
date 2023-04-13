<script setup>
import Logo from '@/components/Logo.vue'
import Container from '@/components/Container.vue'
import PageNavigator from '@/components/PageNavigator.vue'
import Search from '@/components/Search.vue'
</script>

<template>
	<header class="header">
		<Container class="header__container">
			<div class="header__left">
				<Logo />
				<PageNavigator />
			</div>
			<Search />
		</Container>
	</header>
</template>

<style lang="scss">
@import '@/styles/variables.scss';

.header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 5.9375rem;
	border-bottom: 0.0625rem solid $dividerColor;
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
