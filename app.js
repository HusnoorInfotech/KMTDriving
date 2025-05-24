import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [amount, setAmount] = useState(500); // Amount in INR

  const handlePayment = async () => {
    try {
      // Step 1: Create an order by calling the backend
      const response = await axios.post('http://localhost:5000/create-order', {
        amount,
      });

      const { id: order_id, currency, amount: order_amount } = response.data;

      // Step 2: Configure Razorpay checkout options
      const options = {
        key: 'rzp_test_E76yUT9iRGp6eV', // Replace with your Razorpay key_id
        amount: order_amount,
        currency,
        name: 'Kandivali Motor Training School',
        description: 'Test Transaction',
        order_id,
        handler: async (response) => {
          // Step 3: Verify payment by sending details to backend
          try {
            const verifyResponse = await axios.post('http://localhost:5000/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            alert(verifyResponse.data.message);
          } catch (error) {
            alert('Payment verification failed');
            console.error(error);
          }
        },
        prefill: {
          name: 'John Doe',
          email: 'john.doe@example.com',
          contact: '9999999999',
        },
        theme: {
          color: '#F37254',
        },
      };

      // Step 4: Open Razorpay checkout modal
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      alert('Failed to initiate payment');
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Razorpay Payment Integration</h1>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Enter amount in INR"
        style={{ padding: '10px', margin: '10px' }}
      />
      <br />
      <button
        onClick={handlePayment}
        style={{ padding: '10px 20px', background: '#F37254', color: 'white', border: 'none' }}
      >
        Pay Now
      </button>
    </div>
  );
}

export default App;