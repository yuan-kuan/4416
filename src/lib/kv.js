import * as R from 'ramda';

export const init = async (/** @type {import('@sveltejs/kit').RequestEvent} */event) => {
  let kv;
  if (event.platform?.env?.BEE_KV) {
      kv = event.platform?.env?.BEE_KV;
      if (event.clientAddress == '127.0.0.1') {
        await kv.put('name', 'local KV');
        await kv.put('a:1', 'local KV touch');
        await kv.put('a:2', 'local KV memory');
        await kv.put('a:3', 'local KV window');
        await kv.put('a:4', 'local KV secret');
      }
    } else {
      console.log('failed to create kv in database. Not in dev and not able to derive from platform. It was', event);
    }

  return {
    get: async (key) => {
      return JSON.parse(await kv.get(key));
    },

    put: async (key, value) => {
      return await kv.put(key, JSON.stringify(value));
    },

    list: async (prefix) => {
      return R.pipe(
        R.prop('keys'),
        R.pluck('name')
      )(await kv.list({prefix:prefix}));
    }
  };
};

