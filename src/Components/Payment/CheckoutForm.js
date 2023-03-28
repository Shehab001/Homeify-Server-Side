import React, { useContext, useEffect, useState } from "react";
import {
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
  useStripe,
  useElements,
  CardElement,
} from "@stripe/react-stripe-js";
import "./Payment.css";
import { Button, CardActions, Typography } from "@mui/material";
import { AuthContext } from "../../Context/Context";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm({ total }) {
  const { user, cartInfo } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  // const [data, setData] = useState(props.data.data);
  const [cardError, setCardError] = useState("");

  //   const [err, setErr] = useState(null);

  const [clientSecret, setClientSecret] = useState("");
  console.log(clientSecret);
  //console.log(clientSecret);
  //   console.log(data._id);
  console.log(total);

  useEffect(() => {
    fetch("http://localhost:5000/create-payment-intent", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ total }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, [total]);

  const savePayment = (paymentId) => {
    console.log(paymentId);
    const productName = cartInfo.map((product) => product.name);
    const info = {
      name: productName,
      paymentId: paymentId,
      total: total,
      location: cartInfo[0].location,
      email: user.email,
      status: "Pending",
    };
    //console.log(info);

    fetch("http://localhost:5000/payment", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => {
        //console.log(data);
        if (data.acknowledged) {
          console.log(data);
          navigate("/dashboard");
          toast.success("Payment Done");

          // toast.success(dataa);
          //props.paid(info);
        } else {
          toast.error("Error");
          // console.log("unsucess");
        }
      });
  };

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const card = elements.getElement(
      CardCvcElement,
      CardExpiryElement,
      CardNumberElement
    );
    console.log(card);
    if (card == null) {
      toast.error("Null Card");
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error.message);
      //setErr(error.message);
      toast.error(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      //setErr(null);
    }

    const { paymentIntent, error: confirmErr } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            // name: data.itemname,
            email: user.email,
          },
        },
      });

    if (confirmErr) {
      setCardError(confirmErr.message);
      return;
    }
    if (paymentIntent.status === "succeeded") {
    }
    savePayment(paymentIntent.id);
  };

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        iconColor: "#c4f0ff",
        color: "black",
        fontWeight: 500,
        fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
        fontSize: "16px",
        fontSmoothing: "antialiased",
        ":-webkit-autofill": { color: "black" },
        "::placeholder": { color: "black" },
      },
      invalid: {
        iconColor: "#ffc7ee",
        color: "black",
      },
    },
  };

  return (
    <div className="pay">
      <Typography
        sx={{
          fontFamily: "jest",
          letterSpacing: "1px",
          fontSize: { md: "35px", xs: "20px" },
          fontWeight: "bold",
          color: "Black4",
          textDecoration: "underline",
          fontStyle: "italic",
          my: 5,
          textAlign: "center",
        }}
      >
        Payment Form
      </Typography>
      {!success ? (
        <form onSubmit={handleSubmit}>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardNumberElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardExpiryElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <fieldset className="FormGroup">
            <div className="FormRow">
              <CardCvcElement options={CARD_OPTIONS} />
            </div>
          </fieldset>
          <CardActions
            sx={{ display: "flex", justifyContent: "center", mt: 5 }}
          >
            {" "}
            <Button
              type="submit"
              sx={{
                backgroundColor: "#222222",
                color: "white",
                borderRadius: 0,
                textAlign: "center",
                py: { xs: "2px", md: "12px" },
                px: { xs: "20px", md: "40px" },

                "&:hover": {
                  background: "#6e3e37",
                },
              }}
            >
              Purchase
            </Button>
          </CardActions>
        </form>
      ) : (
        <div className="payment-success">
          <h2>Payment successful</h2>
          <h3 className="Thank-you">Thank you for your patronage</h3>
        </div>
      )}
    </div>
  );
}
