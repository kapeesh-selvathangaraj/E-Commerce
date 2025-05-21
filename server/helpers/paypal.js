const paypal = require("paypal-rest-sdk");

// Configure PayPal SDK with dummy sandbox credentials
paypal.configure({
  mode: "sandbox", 
  client_id: "YOUR_SANDBOX_CLIENT_ID_HERE",
  client_secret: "YOUR_SANDBOX_CLIENT_SECRET_HERE",
});

module.exports = paypal;
