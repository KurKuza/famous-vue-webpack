<script setup>
const props = defineProps({
	buttonAccentColor1: { type: Boolean, required: false },
	buttonAccentColor2: { type: Boolean, required: false },
	buttonAccentColor3: { type: Boolean, required: false },
})
</script>

<template>
	<button
		:class="{
			button__accent_color_1: props.buttonAccentColor1,
			button__accent_color_2: props.buttonAccentColor2,
			button__accent_color_3: props.buttonAccentColor3,
		}"
	>
		<slot />
	</button>
</template>

<style lang="scss" scoped>
button {
	color: #ffffff;
	font-weight: 700;
	padding: 0.8125rem 2.25rem 0.875rem;
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
