import React, { useState } from 'react';
import axios from 'axios';

const Payment = ({ amount = 500, onSuccess }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    if (!amount || amount <= 0) {
      alert('Please provide a valid amount');
      return;
    }

    setLoading(true);

    try {
      // Step 1: Create an order
      const response = await axios.post('http://localhost:8080/api/payments/create-order', {
        amount,
      });
      console.log('Order response:', response.data);

      const { id: order_id, currency, amount: order_amount } = response.data;

      // Step 2: Configure Razorpay options
      const options = {
        key: 'rzp_test_XXXXXXXXXXXX', // Replace with your Test Mode key_id
        amount: order_amount,
        currency,
        order_id,
        name: 'Your Company',
        description: 'Purchase Description',
        handler: async (response) => {
          try {
            // Step 3: Verify payment
            const verifyResponse = await axios.post('http://localhost:8080/api/payments/verify-payment', {
              razorpay_order_id: response.razorpay_order_id,
              razorpay_payment_id: response.razorpay_payment_id,
              razorpay_signature: response.razorpay_signature,
            });
            alert(verifyResponse.data.message);
            if (verifyResponse.data.status === 'success' && onSuccess) {
              onSuccess(response);
            }
          } catch (error) {
            console.error('Verification error:', error);
            alert('Payment verification failed');
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

      // Step 4: Open Razorpay checkout
      const rzp = new window.Razorpay(options);
      rzp.on('payment.failed', (response) => {
        console.error('Payment failed:', response.error);
        alert('Payment failed: ' + response.error.description);
      });
      rzp.open();
    } catch (error) {
      console.error('Payment initiation error:', error);
      alert('Failed to initiate payment: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h3>Pay ₹{amount}</h3>
      <button
        onClick={handlePayment}
        disabled={loading}
        style={{
          padding: '10px 20px',
          background: loading ? '#ccc' : '#F37254',
          color: 'white',
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
        }}
      >
        {loading ? 'Processing...' : 'Pay Now'}
      </button>
    </div>
  );
};

export default Payment;