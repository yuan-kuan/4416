import * as R from 'ramda';

import { dev } from '$app/env';

let kv;

const init = async (/** @type {import('@sveltejs/kit').RequestEvent} */event) => {
  if (kv != undefined) return;

  if (dev) {
    import('$lib/kv_local')
      .then(async (kv_local) => {
        kv = await kv_local.init();
      });
  } else {
    import('$lib/kv')
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

const fetchOrCache = async (url) => {
  let result = await kv.get(url);
  if (R.isEmpty(result)) {
    console.log('not cached', url);
    const response = await fetch(url, {
      headers: {
        Authorization: "Basic c2tfdGVzdF81MUxGQmVZR01DbXJnWEFJdG9DMExYdW1XSWsycUM1a1lKZ1ZrZFF0QnFzSEZ6VGhmaWFvdExPemtDZnNwUk9QaTZOMHZoSXhmeUVUejlSb2ZPUG1rYjRTWTAwRXI0ampaU1I6"
      }
    });

    result = await response.json();
    kv.put(url, result);
  } else {
    console.log('cached', url);
  }

  return result;
}

const getAllBags = async () => {
  const data = await fetchOrCache("https://api.stripe.com/v1/products/search?query=active:'true' AND metadata['type']:'bag'");

  const bags = R.pipe(
    R.prop('data'),
    // R.pluck('name'),
  )(data);

  return bags;
}

const getBag = async (/** @type String */ id) => {
  return await fetchOrCache(`https://api.stripe.com/v1/products/${id}`);
}

const getAllArts = async () => {
  const data = await fetchOrCache("https://api.stripe.com/v1/products/search?query=active:'true' AND metadata['type']:'art'");

  const arts = R.pipe(
    R.prop('data'),
    // R.pluck('name'),
  )(data);

  return arts;
}

const getArt = async (/** @type String */ id) =>
  await fetchOrCache(`https://api.stripe.com/v1/products/${id}`);

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
