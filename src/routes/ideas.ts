import type { RequestHandler } from '@sveltejs/kit'
import { IdeasRepo } from '$lib/repos/ideasRepo'

const ideasRepo = new IdeasRepo()

export const get: RequestHandler = async () => {
	const data = await ideasRepo.getAll()

	return {
		body: { data }
	}
}
