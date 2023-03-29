import {
	AnatomyLessonbyRembrandt,
	TheBirthofVenusbySandroBotticelli,
	TheCreationofAdambyMichelangelo,
	TheLastSupperbyLeonardodaVinci,
} from '@/assets/products/images'

type CardType = {
	name: string
	img: any
	price: number
	oldPrice: number | null
	isInTheBasket: boolean
	isBought: boolean
}

export const CardsMock: CardType[] = [
	{
		name: '«Рождение Венеры» Сандро Боттичелли',
		img: TheBirthofVenusbySandroBotticelli,
		price: 1000000,
		oldPrice: 2000000,
		isInTheBasket: true,
		isBought: false,
	},
	{
		name: '«Тайная вечеря»  Леонардо да Винчи',
		img: TheLastSupperbyLeonardodaVinci,
		price: 3000000,
		oldPrice: null,
		isInTheBasket: true,
		isBought: false,
	},
	{
		name: '«Сотворение Адама» Микеланджело',
		img: TheCreationofAdambyMichelangelo,
		price: 5000000,
		oldPrice: 6000000,
		isInTheBasket: true,
		isBought: false,
	},
	{
		name: '«Урок анатомии»  Рембрандт',
		img: AnatomyLessonbyRembrandt,
		price: 5000000,
		oldPrice: null,
		isInTheBasket: true,
		isBought: true,
	},
]
