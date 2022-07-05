import * as R from 'ramda';

export const init = async (/** @type {import('@sveltejs/kit').RequestEvent} */event) => {
  let kv;
  if (event.platform?.env?.BEE_KV) {
      kv = event.platform?.env?.BEE_KV;
    } else {
      console.log('failed to create kv in database. Not in dev and not able to derive from platform. It was', event);
    }

  return {
    get: async (key) => {
      const parsed = JSON.parse(await kv.get(key) ?? '{}');
      return parsed;
    },

    put: async (key, value) => {
      return await kv.put(key, JSON.stringify(value), {expirationTtl:60});
    },

    list: async (prefix) => {
      return R.pipe(
        R.prop('keys'),
        // R.pluck('name')
      )(await kv.list({prefix:prefix}));
    }
  };
};

