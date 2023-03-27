import { loginUser } from "$lib/server/auth"
import { redirect } from "@sveltejs/kit"

export const actions = {
	default: async (event) => {
		loginUser(event)
		throw redirect(302, "/")
	}
}
