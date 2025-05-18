import createMap from './game/createMap.ts'

type GameItem = {
	x: number
	y: number
	slug?: string | null
}
type Config = {
	width: number
	height: number
	size: number
	type: string
}

class Grid {
	config: Config = $state({
		width: 40,
		height: 40,
		size: 40,
		type: 'Uniform'
	})
	hero: GameItem | null = $state()
	items: GameItem[] | null = $state()
	enemys: GameItem[] | null = $state()
	map: string[][] | null = $state()

	constructor() {
		this.createMap()
	}

	createMap() {
		const data = createMap(
			this.config.width,
			this.config.height,
			this.config.type
		)
		this.map = data.map
		this.items = data.items
		this.enemys = data.enemys
		this.hero = data.position
	}
	updateHero(obj = { x: 0, y: 0 }) {
		this.hero = obj
	}
}

export let game = new Grid()
