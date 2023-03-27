import { items } from "$lib/items"
import { error, redirect } from "@sveltejs/kit"

export const load = async (event) => {
	if (!event.locals.user) {
		throw redirect(302, "/login")
	}
	const tempItem = [...items]
	const item = tempItem.find((item) => item.id === Number(event.params.itemId))

	if (!item) {
		throw error(404, "Item not found")
	}
	return {
		item
	}
}
