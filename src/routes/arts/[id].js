import * as db from '$lib/database';

/** @type {import('./__types/[id]').RequestHandler} */
export const get = ({params}) => {
  let art = db.getArt(params.id);

  return {
    body: { art }
  };
}
