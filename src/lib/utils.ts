import type { RequestEvent } from "@sveltejs/kit"

export function handleLoginRedirect(
	event: RequestEvent,
	message: string = "You must be logged in to view this page"
) {
	const redirectTo = event.url.pathname + event.url.search
	return `/login?redirectTo=${redirectTo.slice(1)}&message=${message}`
}
