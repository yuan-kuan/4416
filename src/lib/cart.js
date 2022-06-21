import * as R from 'ramda';
import { get } from 'svelte/store';
import { browser } from '$app/env';
import { session } from '$app/stores';

const getSessionObject = () => {
  let obj = {};
  if (browser) {
    if (window.localStorage) {
      obj = JSON.parse(window.localStorage.getItem('4416_cart') ?? '{}');
      console.log('from local', obj);
    } else {
      obj = get(session);
      console.log('from session', obj);
    }
  }

  return obj;
}

const saveSessionObject = (obj) => {
  if (browser && window.localStorage) {
    window.localStorage.setItem('4416_cart', JSON.stringify(obj));
  } else {
    session.set(obj);
  }
}

const setBag = (bagId) => {
  let sObj = getSessionObject();
  sObj['bag'] = bagId;
  saveSessionObject(sObj);
}

const setArt = (artId) => {
  let sObj = getSessionObject();
  sObj['art'] = artId;
  saveSessionObject(sObj);
}

const getBag = () => {
  let sObj = getSessionObject();
  return sObj['bag'];
}

const getArt = () => {
  let sObj = getSessionObject();
  return sObj['art'];
}

const reset = () => {
  saveSessionObject({});
}

export {
  setBag,
  setArt,
  getBag,
  getArt,
  reset,
};
