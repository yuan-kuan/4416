import Stripe from 'stripe';

const YOUR_DOMAIN = 'http://localhost:3000';

/** @type {import('./__types/checkout').RequestHandler} */
export const post = async ({ request }) => {
  const cart = await request.json();

  const stripe = new Stripe('sk_test_51LFBeYGMCmrgXAItoC0LXumWIk2qC5kYJgVkdQtBqsHFzThfiaotLOzkCfspROPi6N0vhIxfyETz9RofOPmkb4SY00Er4jjZSR');
  const checkoutSession = await stripe.checkout.sessions.create(
    {
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: cart.bag,
          quantity: 1,
        },
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: cart.art,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}/success`,
      cancel_url: `${YOUR_DOMAIN}/cancel`,
    }
  );

  return {
    body: {
      'location': checkoutSession.url,
    }
  };
}
