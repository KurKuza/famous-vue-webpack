import CardsMockJson from './CardsMockJson.json'

export type CardType = {
	id: number
	name: string
	img: any
	price: number
	oldPrice: number | null
	isInTheBasket: boolean
	isBought: boolean
}

export const cardsMock: CardType[] = CardsMockJson
