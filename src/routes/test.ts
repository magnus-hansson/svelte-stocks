import type { RequestHandler } from '@sveltejs/kit'
import { TestRepo } from '$lib/repos/testRepo'

const testRepo = new TestRepo()

export const get: RequestHandler = async () => {
	const data = await testRepo.getAll()

	return {
		body: {
			data
		}
	}
}
