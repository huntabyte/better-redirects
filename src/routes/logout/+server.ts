import { redirect } from "@sveltejs/kit"

export const POST = (event) => {
	event.cookies.delete("auth")
	throw redirect(302, "/")
}
