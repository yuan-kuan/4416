import * as R from 'ramda';
import { createClient } from 'redis';

export const init = async () => {
  let client = createClient();
  await client.connect();

  return {
    get: async (key) => {
      return JSON.parse(await client.get(key) ?? '{}');
    },

    put: async (key, value) => {
      await client.set(key, JSON.stringify(value));
      await client.expire(key, 3600);
    },

    list: async (prefix) => {
      const keys = await client.keys(`${prefix}:*`);
      const products = R.map(async (key) => JSON.parse(await client.get(key) ?? '{}'), keys);
      return Promise.all(products);
    }
  };
};

