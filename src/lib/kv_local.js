import { createClient } from 'redis';

export const init = async () => {
  let client = createClient();
  await client.connect();

  return {
    get: async (key) => {
      return JSON.parse(await kv.get(key));
    },

    put: async (key, value) => {
      return await client.set(key, JSON.stringify(value));
    },

    list: async (prefix) => {
      return await client.keys(`${prefix}:*`);
    }
  };
};

