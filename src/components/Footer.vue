<script setup>
import { phone, address } from '@/assets/icons'
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
			<div class="footer__right">
				<div class="footer__phone">
					<img :src="phone" />
					<a href="tel:+7(495)555-55-55">+7 (495) 555-55-55</a>
				</div>
				<div class="footer__address">
					<img :src="address" />
					<a
						target="_blank"
						href="https://yandex.ru/maps/213/moscow/house/ulitsa_raspletina_24/Z04Ycg9kS00HQFtvfXt4dXhmYw==/?ll=37.484280%2C55.794457&z=17.2"
						>г. Москва, ул. Расплетина, 24</a
					>
				</div>
			</div>
		</Container>
	</footer>
</template>

<style lang="scss">
@import '@/styles/variables.scss';

.footer {
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 5.9375rem;
	background-color: $footerColor;
	&__container {
		justify-content: space-between;
	}
	&__left {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}
	&__right {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 3rem;
	}
	&__phone {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}
	&__address {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 0.5rem;
	}
}
</style>
