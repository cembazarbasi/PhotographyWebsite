import React, { useEffect, useState } from 'react';
import { PayPalButtons } from '@paypal/react-paypal-js';

const PaypalCheckoutButton = (props) => {
    const { selectedSize, description } = props;    
    const [paidFor, setPaidFor] = useState(false);
    const [error, setError] = useState(null);    
    
    const handleApprove = (orderID) => {
        setPaidFor(true);
    };

    useEffect(() => {
        // Update the selected size whenever it changes
        console.log("Selected size updated:", selectedSize);
    }, [selectedSize]);

    if (paidFor) {
        alert("Thank you for your purchase!");
    }

    if (error) {
        alert(error);
    }

    const getPrice = () => {
        switch (selectedSize) {
            case "25":
                return 25;
            case "45":
                return 45;
            case "65":
                return 65;
            default:
                return 1;
        }
    };

    return (
        <PayPalButtons 
            style={{
                color: "silver",
                layout: "vertical",
                height: 36,                
                tagline: false,
            }}
            forceReRender={[getPrice()]}
            createOrder={(data, actions) => {
                
                return actions.order.create({
                    
                    purchase_units: [
                        {                            
                            amount: {
                                value: getPrice(),
                                
                            },
                            description: description
                        },
                    ],
                });
                
            }}
            onApprove={async (data, actions) => {
                const order = await actions.order.capture();
                console.log("order", order);
                handleApprove(data.orderID);
            }}
            onCancel={() => {}}
            onError={(err) => {
                setError(err);
                console.error("PayPal Checkout onError", err);
            }}
        />
    );
};

export default PaypalCheckoutButton;
