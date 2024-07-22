"use client";

import React, { useState } from "react";
import "../globals.css";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [shippingInfo, setShippingInfo] = useState({
    name: "",
    address: "",
    city: "",
    zip: "",
  });
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  const nextStep = () => {
    if (validateFields()) {
      setErrorMessage("");
      setCurrentStep((prevStep) => Math.min(prevStep + 1, 3));
    } else {
      setErrorMessage("Please fill out all fields");
    }
  };

  const prevStep = () => {
    setCurrentStep((prevStep) => Math.max(prevStep - 1, 1));
    setErrorMessage("");
  };

  const validateFields = () => {
    if (currentStep === 1) {
      return (
        shippingInfo.name &&
        shippingInfo.address &&
        shippingInfo.city &&
        shippingInfo.zip
      );
    } else if (currentStep === 2) {
      return (
        paymentDetails.cardNumber && paymentDetails.expiry && paymentDetails.cvv
      );
    }
    return true;
  };

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    step: number
  ) => {
    const { name, value } = event.target;
    if (step === 1) {
      setShippingInfo({
        ...shippingInfo,
        [name]: value,
      });
    } else if (step === 2) {
      setPaymentDetails({
        ...paymentDetails,
        [name]: value,
      });
    }
  };

  const handleConfirm = () => {
    alert("Order Confirmed!");
    location.reload();
  };

  return (
    <div className="checkout-container">
      <div className="steps-indicator">
        <div className={`step ${currentStep === 1 ? "active" : ""}`}>1</div>
        <div className={`step ${currentStep === 2 ? "active" : ""}`}>2</div>
        <div className={`step ${currentStep === 3 ? "active" : ""}`}>3</div>
      </div>
      <div className="step-content">
        {currentStep === 1 && (
          <div>
            <h2>Step 1: Shipping Information</h2>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={shippingInfo.name}
              onChange={(e) => handleInputChange(e, 1)}
            />
            <input
              type="text"
              name="address"
              placeholder="Address"
              value={shippingInfo.address}
              onChange={(e) => handleInputChange(e, 1)}
            />
            <input
              type="text"
              name="city"
              placeholder="City"
              value={shippingInfo.city}
              onChange={(e) => handleInputChange(e, 1)}
            />
            <input
              type="text"
              name="zip"
              placeholder="Postal code"
              value={shippingInfo.zip}
              onChange={(e) => handleInputChange(e, 1)}
            />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2>Step 2: Payment Details</h2>
            <input
              type="text"
              name="cardNumber"
              placeholder="Card Number"
              value={paymentDetails.cardNumber}
              onChange={(e) => handleInputChange(e, 2)}
            />
            <input
              type="text"
              name="expiry"
              placeholder="Expiry Date"
              value={paymentDetails.expiry}
              onChange={(e) => handleInputChange(e, 2)}
            />
            <input
              type="text"
              name="cvv"
              placeholder="CVV"
              value={paymentDetails.cvv}
              onChange={(e) => handleInputChange(e, 2)}
            />
          </div>
        )}
        {currentStep === 3 && (
          <div>
            <h2>Step 3: Review and Confirm</h2>
            <div>
              <h3>Shipping Information</h3>
              <p>Name: {shippingInfo.name}</p>
              <p>Address: {shippingInfo.address}</p>
              <p>City: {shippingInfo.city}</p>
              <p>ZIP Code: {shippingInfo.zip}</p>
            </div>
            <div>
              <h3>Payment Details</h3>
              <p>Card Number: {paymentDetails.cardNumber}</p>
              <p>Expiry Date: {paymentDetails.expiry}</p>
              <p>CVV: {paymentDetails.cvv}</p>
            </div>
          </div>
        )}
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="navigation-buttons">
        {currentStep > 1 && <button onClick={prevStep}>Previous</button>}
        {currentStep < 3 && <button onClick={nextStep}>Next</button>}
        {currentStep === 3 && <button onClick={handleConfirm}>Confirm</button>}
      </div>
    </div>
  );
};
export default Checkout;
