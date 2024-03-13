
import { PayPalButtons } from "@paypal/react-paypal-js.js";

const PayPalButton = (props) => {
    const { product } = props;

    return(
        <PayPalButtons />
    )
};

export default PayPalButton;
