import { redirect } from "@sveltejs/kit"
import { items } from "$lib/items"

export const load = async (event) => {
	if (!event.locals.user) {
		throw redirect(302, "/login")
	}

	return {
		items
	}
}
