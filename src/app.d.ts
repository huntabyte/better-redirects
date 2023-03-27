// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			user: {
				id: number
				email: string
			} | null
		}
		// interface PageData {}
		// interface Platform {}
	}
}

export {}
