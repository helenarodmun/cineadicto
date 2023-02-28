import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { selectPrice } from '../features/PriceSlice'
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { StyledButton } from '../styled/styledcomponents';
import {  useNavigate } from 'react-router-dom';
const Paypal = (color, wide) => {
  const navigate = useNavigate();
  const handleClick = () => {    
    navigate('/profile')
  };
  const [show, setShow] = useState(false);
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  const price = useSelector(selectPrice);
  useEffect(() => {
    if (success) {
      alert("Payment successful!!");
    }
  },
  [success]
);

console.log(1, orderID);
console.log(2, success);
console.log(3, ErrorMessage);
  // creates a paypal order
  const createOrder = (data, actions) => {
    return actions.order
      .create({
        purchase_units: [
          {
            description: "CineAdicto subscripción",
            amount: {
              currency_code: "EUR",
              value: price,
            },
          },
        ],
        // not needed if a shipping address is actually needed
        application_context: {
          shipping_preference: "NO_SHIPPING",
        },
      })
      .then((orderID) => {
        setOrderID(orderID);
        return orderID;
      });
  };
  
  // check Approval
  const onApprove = async (data, actions) => {
    return await actions.order.capture().then(function (details) {
      const { payer } = details;
      setSuccess(true);
    });
  };
  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };
  return (
 <div className='paypal'>
    <PayPalScriptProvider
      options={{
        "client-id":"",
      }}
    >
      <div>        
          <div className="product-info">  
            <div className="product-price-btn">
              <p>
                <span>$20</span>
              </p>
              <button type="submit" onClick={() => setShow(true)}>
                Buy now
              </button>
            </div>
          </div>
        
  
        {show ? (
          <PayPalButtons
            style={{ layout: "vertical" }}
            createOrder={createOrder}
            onApprove={onApprove}
          />
        ) : null}
      </div>
    </PayPalScriptProvider>
    <div>
      <StyledButton 
      radius 
      color={color}
      wide={wide}
      onClick={() => handleClick()}>Volver</StyledButton>
    </div>
    </div>

  );
 }

export default Paypal
