import { authenticateUser } from "$lib/server/auth"

export const handle = async ({ event, resolve }) => {
	event.locals.user = authenticateUser(event)

	return resolve(event)
}
