import CardsMockJson from './CardsMockJson.json'

type CardType = {
	name: string
	img: any
	price: number
	oldPrice: number | null
	isInTheBasket: boolean
	isBought: boolean
}

export const CardsMock: CardType[] = CardsMockJson
