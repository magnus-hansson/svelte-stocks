type Stuff = {
	name: string
	description: string
}

export class TestRepo {
	getAll = async (): Promise<Stuff[]> => {
		return [{ name: 'test', description: 'test' }]
	}
}
