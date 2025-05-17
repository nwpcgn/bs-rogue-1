import * as ROT from 'rot-js'
import randNum from './utils/randNum.js'
export function generateMap(width = 40, height = 20, type = 'Uniform') {
	const digger = new ROT.Map[type](width, height)
	const map: string[][] = Array.from({ length: height }, () =>
		Array(width).fill(' ')
	)
	const freeCells: string[] = []
	const zeroCells: string[] = []
	const rooms = []
	const items = []
	const enemys = []

	const digCallback = (x, y, value) => {
		map[y][x] = value ? '#' : '.'
		const key = `${x},${y}`
		if (value) {
			zeroCells.push(key)
		} else {
			freeCells.push(key)
		}
	}

	const createRooms = () => {
		const sy = {
			'0': '╔',
			'1': '╗',
			'2': '╝',
			'3': '╚',
			'4': '═',
			'5': '║',
			'6': 'o'
		}
		digger.getRooms().forEach((room, roomId) => {
			const result = convertRoom(room)
			const [centerX, centerY] = room.getCenter()
			rooms.push({ ...result, centerX, centerY, roomId })
		})
	}
	const convertRoom = (r) => {
		const doors = Object.keys(r._doors).map((key) => {
			const [x, y] = key.split(',').map(Number)
			return { x, y }
		})

		doors.forEach(({ x, y }) => {
			// const key = `${x},${y}`
			map[y][x] = 'D'
		})

		return {
			x1: r._x1,
			y1: r._y1,
			x2: r._x2,
			y2: r._y2,
			doors
		}
	}
	const generateBoxes = (freeCells) => {
		let length1 = randNum(6, 10)
		for (let i = 0; i < length1; i++) {
			const index = Math.floor(ROT.RNG.getUniform() * freeCells.length)
			const key = freeCells.splice(index, 1)[0]
			const [x, y] = key.split(',')
			map[y][x] = '*'
			items.push({ x, y, slug: '$' })
		}
		let length2 = randNum(1, 3)
		for (let i = 0; i < length2; i++) {
			const index = Math.floor(ROT.RNG.getUniform() * freeCells.length)
			const key = freeCells.splice(index, 1)[0]
			const [x, y] = key.split(',')
			map[y][x] = '€'
			enemys.push({ x, y, slug: '€' })
		}
	}

	const placeFighter = (freeCells) => {
		const index = Math.floor(ROT.RNG.getUniform() * freeCells.length)
		const key = freeCells.splice(index, 1)[0]
		const [x, y] = key.split(',')
		map[y][x] = '@'
	}

	digger.create(digCallback)
	createRooms()
	generateBoxes(freeCells)
	placeFighter(freeCells)
	return { map, rooms, items, freeCells, zeroCells, enemys }
}
class Dungen {
	map = $state([])
	rooms = $state([])
	items = $state([])
	enemys = $state([])
	config = $state({
		rows: 60,
		cols: 60,
		tileSize: 40,
		type: 'Uniform'
	})

	init(ops = {}) {
		this.config = { ...this.config, ...ops }
		const { rows, cols, type } = this.config
		const data = generateMap(rows, cols, type)
		this.map = data.map
		this.rooms = data.rooms
		this.items = data.items
		this.enemys = data.enemys
		this.freeCells = data.freeCells
		this.zeroCells = data.zeroCells
	}
}
export let game = new Dungen()

const MAX_SIZE = 1200
class Frame {
	#width = $state(0)
	#height = $state(0)

	get width() {
		return this.#width
	}

	get height() {
		return this.#height
	}

	set width(value) {
		this.#width = Math.max(0, Math.min(MAX_SIZE, value))
	}

	set height(value) {
		this.#height = Math.max(0, Math.min(MAX_SIZE, value))
	}
}

export let frame = new Frame()


class Config {
	
}
