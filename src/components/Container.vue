<script setup>
import Logo from '@/components/Logo.vue'
</script>

<template>
	<div class="container">
		<slot />
	</div>
</template>

<style lang="scss">
.container {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	max-width: 77rem;
	padding: 0 1rem;
	margin: 0 auto;
}
</style>
