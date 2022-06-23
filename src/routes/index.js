import * as db from '$lib/database';

export const get = async () => {
  // const v = await db.get('name');
  const v = await db.list('a');
  console.log('v is', v);
  return {
    body: {
      payload: v
    }
  };
}
