import * as db from '$lib/database';

export const get = async () => {
  return {
    body: {
      arts: await db.getAllArts()
    }
  };
}
