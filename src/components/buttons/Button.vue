<script setup>
import Loader from '@/components/Loader.vue'
const props = defineProps({
	buttonAccentColor1: { type: Boolean, required: false },
	buttonAccentColor2: { type: Boolean, required: false },
	buttonAccentColor3: { type: Boolean, required: false },
	icon: { type: String, required: false },
	loader: { type: Boolean, required: false },
})
</script>

<template>
	<button
		class="button"
		:class="{
			button__accent_1: props.buttonAccentColor1,
			button__accent_2: props.buttonAccentColor2,
			button__accent_3: props.buttonAccentColor3,
		}"
	>
		<Loader v-if="props.loader" class="button__loader" />
		<div v-else class="button__content">
			<div v-if="icon" class="button__icon-content">
				<img class="button__icon" :src="icon" />
				<slot />
			</div>
			<div v-else class="button__default"><slot /></div>
		</div>
	</button>
</template>

<style lang="scss" scoped>
@import '@/styles/variables.scss';

.button {
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	font-weight: 700;
	font-size: 0.875rem;
	height: 3rem;
	width: 7rem;
	&__content {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	&__icon-content {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 7.375rem;
	}
	&__icon {
		margin-right: 0.25rem;
	}

	&__accent_1 {
		background-color: $accentColor1;
	}
	&__accent_2 {
		background-color: $accentColor2;
	}
	&__accent_3 {
		background-color: $accentColor3;
	}
}
</style>
