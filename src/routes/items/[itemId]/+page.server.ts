import { error, redirect } from "@sveltejs/kit"
import { items } from "$lib/items"
export const load = async (event) => {
	if (!event.locals.user) {
		throw redirect(302, "/")
	}

	const tempItems = [...items]
	const item = tempItems.find((item) => item.id === Number(event.params.itemId))
	if (!item) {
		throw error(404, "Item not found")
	}

	return {
		item
	}
}
