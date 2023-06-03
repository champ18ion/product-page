import React, { useState } from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import unlock from '../assets/unlock.png';

export default function Payment() {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isPaymentSuccessful, setIsPaymentSuccessful] = useState(false);

  const isFormValid =
    cardNumber.length === 16 &&
    cvv.length === 3 &&
    expiry.match(/^(0[1-9]|1[0-2])\/\d{2}$/);

  const handleSubmit = (e) => {
  e.preventDefault();

  // Perform basic validation
  if (!isFormValid) {
    alert('Please fill in all the required fields correctly');
    return;
  }

  // Simulate loading state
  setIsLoading(true);

  // Simulate payment processing
  setTimeout(() => {
    setIsLoading(false);
    setIsPaymentSuccessful(true);

    // Reset form
    setCardNumber('');
    setCardName('');
    setExpiry('');
    setCvv('');
  }, 5000);
};


  return (
    <div className="bg-pink-50 w-[100vw] h-[100vh] text-[12px]">
      <div className="p-8">
        <h1 className="text-2xl font-bold text-black px-2">Checkout,</h1>
        <p className="text-gray-600 text-xl text-bold px-2">Complete your order</p>
      </div>
      <div className="flex flex-col p-12">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label htmlFor="card-number">Card Number</label>
            <input
              type="number"
              id="card-number"
              className="h-10 w-full p-4 rounded-lg border-black border-2 mb-2"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              placeholder="1234 5678 9012 3456"
              disabled={isPaymentSuccessful}
              required
              pattern='^[0-9]{4} [0-9]{4} [0-9]{4} [0-9]{4}$'
              maxLength={16}
            />
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="card-name">Name on Card</label>
            <input
              type="text"
              id="card-name"
              className="h-10 w-full p-4 rounded-lg border-black border-2 mb-2"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="John Doe"
              disabled={isPaymentSuccessful}
            />
          </div>
          <div className="flex flex-row">
            <div className="flex flex-col mt-2">
              <label htmlFor="expiry">Expiry Date</label>
              <input
                type="text"
                id="expiry"
                className="h-10 w-[95%] p-4 rounded-lg border-black border-2 mb-2"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                placeholder="MM/YY"
                disabled={isPaymentSuccessful}
                pattern='^(0[1-9]|1[0-2])\/\d{2}$'
                required
                maxLength={5}
              />
            </div>
            <div className="flex flex-col mt-2">
              <label htmlFor="cvv">Security Pin</label>
              <input
                type="password"
                id="cvv"
                className="h-10 w-[95%] p-4 rounded-lg border-black border-2 mb-2"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                placeholder="CVV"
                required
                disabled={isPaymentSuccessful}
                maxLength={3}
              />
            </div>
          </div>
          <button
            className={`h-12 bg-pink-400 w-full p-4 text-gray-100 text-[16px] rounded-lg flex justify-center items-center my-4 ${
              isLoading || isPaymentSuccessful ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            type="submit"
            disabled={!isFormValid || isLoading || isPaymentSuccessful}
          >
            <img src={unlock} alt="" className="h-4 w-4 mr-2" />
            Pay now
          </button>
          {isLoading && (
            <div className="flex justify-center items-center my-12">
              <div className="w-12 h-12 bg-pink-400 rounded-full animate-bounce" />
              <p className=" text-lg text-gray-600 ml-4">Processing payment...</p>
            </div>
          )}
          {isPaymentSuccessful && (
            <div className="flex justify-center items-center my-10">
              <FiCheckCircle className="text-green-500 mr-2 h-10 w-10" />
              <p className="text-green-500">Payment Successful</p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
