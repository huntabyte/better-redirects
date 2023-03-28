import { handleLoginRedirect } from "$lib/utils"
import { redirect } from "@sveltejs/kit"

export const load = async (event) => {
	if (!event.locals.user) {
		throw redirect(302, handleLoginRedirect(event))
	}
}
