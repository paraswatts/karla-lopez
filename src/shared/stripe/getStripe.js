import { loadStripe } from "@stripe/stripe-js";

let stripePromise;
const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_nikwUeaSs2qJimFPX2tkqzEt');
  }
  return stripePromise;
};

export default getStripe;