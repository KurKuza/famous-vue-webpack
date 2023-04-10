<script setup>
const props = defineProps({
	buttonAccentColor1: { type: Boolean, required: false },
	buttonAccentColor2: { type: Boolean, required: false },
	buttonAccentColor3: { type: Boolean, required: false },
	icon: { type: String, required: false },
})
</script>

<template>
	<button
		class="button"
		:class="{
			button__accent_color_1: props.buttonAccentColor1,
			button__accent_color_2: props.buttonAccentColor2,
			button__accent_color_3: props.buttonAccentColor3,
		}"
	>
		<img v-if="icon" class="button__icon" :src="icon" />
		<slot />
	</button>
</template>

<style lang="scss" scoped>
.button {
	display: flex;
	justify-content: center;
	align-items: center;
	color: #ffffff;
	font-weight: 700;
	height: 3rem;
	width: 7rem;
}
.button__icon {
	margin-right: 0.25rem;
}
.button__accent_color_1 {
	background-color: var(--accentColor1);
}
.button__accent_color_2 {
	background-color: var(--accentColor2);
}
.button__accent_color_3 {
	background-color: var(--accentColor3);
}
</style>
