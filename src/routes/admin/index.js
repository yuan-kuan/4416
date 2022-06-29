import * as db from '$lib/database';

export const get = async () => {
  const arts = await db.getAllArts();
  const bags = await db.getAllBags();
  console.log(arts);
  return {
    body: {
      arts,
      bags
    }
  };
}
