/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare namespace App {
	interface KVStore {
    get(key: String): String;
    set(key: String, value:String): void;
	}
	
	// interface Locals {}
	interface Platform {
		env: {
			BEE_KV: KVStore,
		}
	}
	// interface Session {}
	// interface Stuff {}
}
