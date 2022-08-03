// import Stripe from 'stripe';

const YOUR_DOMAIN = 'http://localhost:3000';

/** @type {import('./__types/checkout').RequestHandler} */
export const post = async ({ request }) => {
  const cart = await request.json();

  // Svelte kit cannot build this with adapter, we need to use REST call here.
  // const stripe = new Stripe('sk_test_51LFBeYGMCmrgXAItoC0LXumWIk2qC5kYJgVkdQtBqsHFzThfiaotLOzkCfspROPi6N0vhIxfyETz9RofOPmkb4SY00Er4jjZSR');
  // const checkoutSession = await stripe.checkout.sessions.create(
  //   {
  //     line_items: [
  //       {
  //         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //         price: cart.bag,
  //         quantity: 1,
  //       },
  //       {
  //         // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
  //         price: cart.art,
  //         quantity: 1,
  //       },
  //     ],
  //     mode: 'payment',
  //     success_url: `${YOUR_DOMAIN}/success`,
  //     cancel_url: `${YOUR_DOMAIN}/cancel`,
  //   }
  // );

  const respond = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    body: `success_url=${YOUR_DOMAIN}/success&cancel_url=${YOUR_DOMAIN}/cancel&line_items[0][price]=${cart.bag}&line_items[0][quantity]=1&line_items[1][price]=${cart.art}&line_items[1][quantity]=1&mode=payment`,
    headers: {
      Authorization: "Basic c2tfdGVzdF81MUxGQmVZR01DbXJnWEFJdG9DMExYdW1XSWsycUM1a1lKZ1ZrZFF0QnFzSEZ6VGhmaWFvdExPemtDZnNwUk9QaTZOMHZoSXhmeUVUejlSb2ZPUG1rYjRTWTAwRXI0ampaU1I6",
      "Content-Type": "application/x-www-form-urlencoded"
    },
    method: "POST"
  });

  const checkoutSession= await respond.json();
  console.log('checkout session', checkoutSession);
  return {
    body: {
      'location': checkoutSession.url,
    }
  };
}
