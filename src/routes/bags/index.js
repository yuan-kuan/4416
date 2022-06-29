// import * as db from '$lib/database';
import * as R from 'ramda';

export const get = async () => {
  const response = await fetch("https://api.stripe.com/v1/products", {
    headers: {
      Authorization: "Basic c2tfdGVzdF81MUxGQmVZR01DbXJnWEFJdG9DMExYdW1XSWsycUM1a1lKZ1ZrZFF0QnFzSEZ6VGhmaWFvdExPemtDZnNwUk9QaTZOMHZoSXhmeUVUejlSb2ZPUG1rYjRTWTAwRXI0ampaU1I6",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "GET"
  });

  const bags = R.pipe(
    R.prop('data'),
    R.pluck('name'),
  )(await response.json());

  console.log('bags', bags);

  return {
    body: {
      bags
    }
  };
}
