/** @type {import('./__types/[id]').RequestHandler} */
export const get = ({params}) => {
  let bag = {id: 'b_0', name: 'no bag'};
  if (params.id == 'b_1') {
   bag = { id: 'b_1', name: 'bag one' };
  } else if (params.id == 'b_2') {
   bag = { id: 'b_2', name: 'bag two' };
  }

  return {
    body: { bag }
  };
}
