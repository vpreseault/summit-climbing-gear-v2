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
      setErrorMessage("Veuillez remplir tous les champs");
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
    alert("Commande confirmée!");
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
            <h2>Étape 1 : Informations d&apos;expédition</h2>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={shippingInfo.name}
              onChange={(e) => handleInputChange(e, 1)}
            />
            <input
              type="text"
              name="address"
              placeholder="Adresse"
              value={shippingInfo.address}
              onChange={(e) => handleInputChange(e, 1)}
            />
            <input
              type="text"
              name="city"
              placeholder="Ville"
              value={shippingInfo.city}
              onChange={(e) => handleInputChange(e, 1)}
            />
            <input
              type="text"
              name="zip"
              placeholder="Code Postal"
              value={shippingInfo.zip}
              onChange={(e) => handleInputChange(e, 1)}
            />
          </div>
        )}
        {currentStep === 2 && (
          <div>
            <h2>Étape 2 : Détails du paiement</h2>
            <input
              type="text"
              name="cardNumber"
              placeholder="Numéro de carte"
              value={paymentDetails.cardNumber}
              onChange={(e) => handleInputChange(e, 2)}
            />
            <input
              type="text"
              name="expiry"
              placeholder="Date d'expiration"
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
            <h2>Étape 3 : examiner et confirmer</h2>
            <div>
              <h3>Informations sur la livraison</h3>
              <p>Nom: {shippingInfo.name}</p>
              <p>Adresss: {shippingInfo.address}</p>
              <p>Ville: {shippingInfo.city}</p>
              <p>Code postal: {shippingInfo.zip}</p>
            </div>
            <div>
              <h3>Détails de paiement</h3>
              <p>Numéro de carte: {paymentDetails.cardNumber}</p>
              <p>Date d&apos;expiration: {paymentDetails.expiry}</p>
              <p>CVV: {paymentDetails.cvv}</p>
            </div>
          </div>
        )}
      </div>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
      <div className="navigation-buttons">
        {currentStep > 1 && <button onClick={prevStep}>Précédent</button>}
        {currentStep < 3 && <button onClick={nextStep}>Suivant</button>}
        {currentStep === 3 && (
          <button onClick={handleConfirm}>Confirmer</button>
        )}
      </div>
    </div>
  );
};
export default Checkout;
