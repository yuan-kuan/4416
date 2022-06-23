import * as R from 'ramda';

import {dev} from '$app/env';

let kv;

const init = async (/** @type {import('@sveltejs/kit').RequestEvent} */event) => {
  if (kv != undefined) return;

  if (dev) {
    import ('redis')
      .then(async (redis) => {
        kv = redis.createClient();
        await kv.connect();
      });
  } else if (event.platform?.env?.BEE_KV) {
    kv = event.platform?.env?.BEE_KV;
    if (event.clientAddress == '127.0.0.1') {
      await kv.put('name', 'local KV');
    }
  } else {
    console.log('failed to create kv in database. Not in dev and not able to derive from platform. It was', event);
  }
}

const get = async (key) => {
  return await kv.get(key);
}

const fakeBags = [
    { id: 'b_1', name: 'bag one' },
    { id: 'b_2', name: 'bag two' },
    { id: 'b_3', name: 'bag three' },
  ];

const getAllBags = () => {
  return fakeBags;
}

const getBag = (/** @type String */ id) =>
  R.find(R.compose(R.equals(id), R.prop('id')), fakeBags);

const fakeArts = [
    { id: 'a_1', name: 'art I' },
    { id: 'a_2', name: 'art II' },
    { id: 'a_3', name: 'art III' },
  ];

const getAllArts = () => {
  return fakeArts;
}

const getArt = (/** @type String */ id) =>
  R.find(R.compose(R.equals(id), R.prop('id')), fakeArts);

export {
  init,
  get,
  getAllBags,
  getBag,
  getAllArts,
  getArt,
};
