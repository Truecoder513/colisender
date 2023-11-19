import {
  CardCvcElement,
  CardElement,
  CardExpiryElement,
  CardNumberElement,
  PaymentElement,
} from "@stripe/react-stripe-js";

const StripeCheckout = () => {
  return (
    <div className="stripeCheckout">
      <h4>Validation</h4>
      <div className="payementInfo">
        <p>Frais de membre</p>
        <h3>$1</h3>
      </div>
      <form>
        <CardExpiryElement />
        <CardNumberElement />
        <CardCvcElement />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default StripeCheckout;
