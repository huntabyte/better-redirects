import { dev } from "$app/environment"
import type { RequestEvent } from "@sveltejs/kit"

export const authenticateUser = (event: RequestEvent) => {
	// get the cookies from the request
	const { cookies } = event

	// get the user token from the cookie
	const userToken = cookies.get("auth")

	// if the user token is not valid, return null
	// this is where you would check the user token against your database
	// to see if it is valid and return the user object
	if (userToken === "regularusertoken") {
		const user = {
			id: 1,
			email: "user@example.com"
		}
		return user
	}

	return null
}

export const loginUser = (event: RequestEvent) => {
	event.cookies.set("auth", "regularusertoken", {
		path: "/",
		httpOnly: true,
		maxAge: 60 * 60 * 24 * 7,
		secure: dev ? false : true,
		sameSite: "strict"
	})
}
