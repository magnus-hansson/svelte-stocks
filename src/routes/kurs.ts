import type { RequestHandler } from '@sveltejs/kit'
import { KursRepo } from '$lib/repos/kursRepo'

const kursRepo = new KursRepo()

export const get: RequestHandler = async () => {
	const data = await kursRepo.getAll()

	return {
		body: { data }
	}
}
