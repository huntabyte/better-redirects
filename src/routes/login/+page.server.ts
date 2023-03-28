import { loginUser } from "$lib/server/auth"
import { redirect } from "@sveltejs/kit"

export const actions = {
	default: async (event) => {
		loginUser(event)
		const redirectTo = event.url.searchParams.get("redirectTo")
		if (redirectTo) {
			throw redirect(302, `/${redirectTo.slice(1)}`)
		}
		throw redirect(302, "/")
	}
}
