import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
// import "./Payment.css";
//console.log("hi");

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is a public sample test API key.
// Don’t submit any personally identifiable information in requests made with this key.
// Sign in to see your own test API key embedded in code samples.
const stripePromise = loadStripe(
  "pk_test_51LVKw8GSGClrvX9qQR80gAdslLitEfoxn9BlZ549BvvqY7hj4ITUNPWfpH38uXKhXeExTs4yAT3peZOYvlKqUHqC00V8OjI91q"
);

export default function Payment({ total }) {
  //   const [clientSecret, setClientSecret] = useState("");

  //   useEffect(() => {
  //     // Create PaymentIntent as soon as the page loads
  //     fetch("/create-payment-intent", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         setClientSecret(data.clientSecret);
  //         console.log(data);
  //       });
  //   }, []);

  //   const appearance = {
  //     theme: "stripe",
  //   };
  //   const options = {
  //     clientSecret,
  //     appearance,
  //   };

  return (
    <div className="pay">
      <Elements stripe={stripePromise}>
        <CheckoutForm total={total} />
      </Elements>
    </div>
  );
}
