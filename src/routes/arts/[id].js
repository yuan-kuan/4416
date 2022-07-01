import * as db from '$lib/database';

/** @type {import('./__types/[id]').RequestHandler} */
export const get = async ({params}) => {
  let art = await db.getArt(params.id);

  return {
    body: { art }
  };
}
