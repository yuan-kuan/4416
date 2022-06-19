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

export {
  getAllBags,
  getBag
};
