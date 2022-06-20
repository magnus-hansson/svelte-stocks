export type Kurs = {
	id: number
	name: string
	kod: string
	kurs: number
	createdAt: string
}

export class KursRepo {
	getAll = async (): Promise<Kurs[]> => {
		return [{ kod: 'ABB', kurs: 223, id: 1, name: 'ABB', createdAt: '2020-01-01' }]
	}
	
}
