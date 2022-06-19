import * as db from '$lib/database';

export const get = () => {
  return {
    body: {
      bags: db.getAllBags()
    }
  };
}
