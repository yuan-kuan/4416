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

const save = async (item) => {
  await kv.put(item.id, item);
}

const fakeBags = [
    { id: 'b_1', name: 'bag one' },
    { id: 'b_2', name: 'bag two' },
    { id: 'b_3', name: 'bag three' },
  ];

const fetchBagsRemote = async () => {
  const response = await fetch("https://api.stripe.com/v1/products", {
    headers: {
      Authorization: "Basic c2tfdGVzdF81MUxGQmVZR01DbXJnWEFJdG9DMExYdW1XSWsycUM1a1lKZ1ZrZFF0QnFzSEZ6VGhmaWFvdExPemtDZnNwUk9QaTZOMHZoSXhmeUVUejlSb2ZPUG1rYjRTWTAwRXI0ampaU1I6",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "GET"
  });

  return await response.json();
}

const getAllBags = async () => {
  const cachethis = import.meta.env.VITE_RECACHE ?? 'no env';
  console.log('all bag env', cachethis);

  let result;
  if (dev && cachethis != 1) {
    result = await kv.get('all_bags'); 
  } else {
    result = await fetchBagsRemote();
    if (cachethis == 1 && dev) {
      kv.put('all_bags', result);
    }
  }
  const bags = R.pipe(
    R.prop('data'),
    // R.pluck('name'),
  )(result);

  return bags;

  // return await kv.list('b');
}

const getBag = (/** @type String */ id) =>
  R.find(R.compose(R.equals(id), R.prop('id')), fakeBags);

const fakeArts = [
    { id: 'a_1', name: 'art I' },
    { id: 'a_2', name: 'art II' },
    { id: 'a_3', name: 'art III' },
  ];

const getAllArts = async () => {
  return await kv.list('a');
}

const getArt = (/** @type String */ id) =>
  R.find(R.compose(R.equals(id), R.prop('id')), fakeArts);

export {
  init,
  get,
  list,
  save,
  getAllBags,
  getBag,
  getAllArts,
  getArt,
};
