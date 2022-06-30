import * as db from '$lib/database';
// import * as R from 'ramda';

export const get = async () => {


  return {
    body: {
      bags: await db.getAllBags()
    }
  };
}
