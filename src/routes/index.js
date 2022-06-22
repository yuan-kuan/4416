
export const get = async (context) => {
  const s = JSON.stringify(context);
  console.log('get in index got', s);
  const k = context.platform?.env?.BEE_KV ?? {get: (key) => {return key}};
  const v = await k.get('name');
  console.log('v is', v);
  return {
    body: {
      payload: v
    }
  };
}
