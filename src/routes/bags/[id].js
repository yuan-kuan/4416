import * as db from '$lib/database';

/** @type {import('./__types/[id]').RequestHandler} */
export const get = ({params}) => {
  let bag = {id: 'b_0', name: 'no bag'};
  bag = db.getBag(params.id);

  return {
    body: { bag }
  };
}
