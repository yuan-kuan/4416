import * as R from 'ramda';

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
  getAllBags,
  getBag,
  getAllArts,
  getArt,
};
