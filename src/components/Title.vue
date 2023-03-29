<script setup>
import Container from '@/components/Container.vue'
</script>

<template>
	<div class="title"><slot /></div>
</template>

<style lang="css">
.title {
	font-weight: 700;
	font-size: 1.5rem;
	margin-bottom: 2.4375rem;
	text-align: left;
}
</style>
