<script setup>
import Button from '@/components/buttons/Button.vue'
</script>

<template>
	<div>
		<Button>Найти</Button>
		<Button>
			<slot />
		</Button>
	</div>
</template>

<style lang="scss" scoped></style>
