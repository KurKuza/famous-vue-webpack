<script setup>
const { dark } = defineProps({
	dark: Boolean,
})
</script>

<template>
	<a href="#">
		<div class="logo" :class="[dark ? 'logo__dark' : 'logo__light']">
			<img src="@/assets/icons/logo-famous.svg" />
		</div>
	</a>
</template>

<style lang="scss" scoped>
.logo {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 3rem;
	height: 3rem;
	border-radius: 0.0625rem;
	&__light {
		background-color: #776763;
	}
	&__dark {
		background-color: #403432;
	}
}
</style>
