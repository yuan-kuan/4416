/** @type {import('./__types/[target]').RequestHandler} */
export const get = ({params}) => {
  console.log('param', params);

  return {
    body: {
      action:params.action,
      formAction: '/admin/create/new',
      item: {
        type: params.target,
        name: 'new name',
        id: 'new id',
    } }
  };
}

/** @type {import('./__types/[target]').RequestHandler} */
export const post = async ({request}) => {
  const fd = await request.formData();

  return {
    body: {
      action:'create ok',
      formAction: '/admin/create/new',
      item: {
        type: 'ok',
        name: 'new name',
        id: 'new id',
    } }
  };
}
