import { createClient } from '@supabase/supabase-js'

export type Idea = {
	name: string
	kod: string
	kurs: number

	created_at: string
}

export class IdeasRepo {
	#client = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

	getAll = async (): Promise<Idea[]> => {
		const response = await this.#client.from<Idea>('kurser').select()

		return response.data || []
	}
}
