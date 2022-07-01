import * as db from '$lib/database';

/** @type {import('./__types/[id]').RequestHandler} */
export const get = async ({params}) => {
  // let bag = {id: 'b_0', name: 'no bag'};
  const bag = await db.getBag(params.id);

  return {
    body: { bag }
  };
}
