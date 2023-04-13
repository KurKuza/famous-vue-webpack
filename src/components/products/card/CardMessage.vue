<script setup></script>

<template>
	<div class="card-message"><slot /></div>
</template>

<style lang="scss">
@import '@/styles/variables.scss';

.card-message {
	font-weight: 700;
	font-size: 1rem;
	color: $textColor;
}
</style>
