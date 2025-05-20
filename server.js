const express = require('express');
const dotenv = require('dotenv');
const Stripe = require('stripe');
const path = require('path');

dotenv.config();

const app = express();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

app.use(express.static('public'));
app.use(express.json());

app.get('/config', (req, res) => {
    res.json({ publishableKey: process.env.STRIPE_PUBLISHABLE_KEY });
});

app.post('/create-checkout-session', async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            mode: 'payment',
            line_items: [{
                price_data: {
                    currency: 'usd',
                    product_data: { name: 'Sample Item' },
                    unit_amount: 2000,
                },
                quantity: 1,
            }],
            success_url: 'https://example.com/success',
            cancel_url: 'https://example.com/cancel',
        });
        res.json({ sessionId: session.id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Something went wrong' });
    }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
