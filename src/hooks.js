/** @type {import('@sveltejs/kit').Handle} */
export async function handle({ event, resolve }) {
  console.log('handle hhook plat is ', event.platform);
  if (!event.platform) {
    event.platform = {
      env: {
        BEE_KV: {
          get: (key) => `fake ${key}`,
          set: (key, value) => `fake ${key}`,
        }
      }
    };
    console.log('adding env to platform', event.platform);
  }
  const response = await resolve(event);
  return response;
}
