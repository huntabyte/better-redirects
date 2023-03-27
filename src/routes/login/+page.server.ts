import { dev } from "$app/environment"
import { redirect } from "@sveltejs/kit"

export const actions = {
	default: async (event) => {
		event.cookies.set("auth", "regularusertoken", {
			path: "/",
			httpOnly: true,
			maxAge: 60 * 60 * 24 * 7,
			secure: dev ? false : true,
			sameSite: "strict"
		})
		const redirectTo = event.url.searchParams.get("redirectTo")

		throw redirect(302, `/${redirectTo ? redirectTo : ""}`)
	}
}
