const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
    const { amount, currency, source } = req.body;
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency,
            payment_method: source,
            confirm: true
        });
        res.json({ success: true, paymentIntent });
    } catch (error) {
        res.status(500).json({ message: 'Payment failed', error });
    }
};