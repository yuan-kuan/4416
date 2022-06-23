import * as R from 'ramda';

import {dev} from '$app/env';

let kv;

const init = async (/** @type {import('@sveltejs/kit').RequestEvent} */event) => {
  if (kv != undefined) return;

  if (dev) {
    import ('$lib/kv_local')
      .then(async (kv_local) => {
        kv = await kv_local.init();
      });
  } else {
    import ('$lib/kv')
      .then(async (kv_remote) => {
        kv = await kv_remote.init(event);
      });
  }
}

const get = async (key) => {
  return await kv.get(key);
}

const list = async (prefix) => await kv.list(prefix);


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
  list,
  getAllBags,
  getBag,
  getAllArts,
  getArt,
};
