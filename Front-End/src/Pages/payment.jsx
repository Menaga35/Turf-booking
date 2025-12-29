export default function PaymentButton({ amount, bookingData }) {
  const loadRazorpay = async () => {
    const res = await fetch("http://localhost:5000/api/payment/create-order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const order = await res.json();

    const options = {
      key: "rzp_test_xxxxx", // Razorpay Key ID
      amount: order.amount,
      currency: "INR",
      name: "Turf Booking",
      description: "Turf Slot Payment",
      order_id: order.id,
      handler: function (response) {
        alert("Payment Successful!");

        // Save booking after payment
        const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push({
          ...bookingData,
          paymentId: response.razorpay_payment_id,
          paid: true,
        });
        localStorage.setItem("bookings", JSON.stringify(bookings));
      },
      theme: {
        color: "#4f46e5",
      },
    };

    const razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <button onClick={loadRazorpay} className="pay-btn">
      Pay ₹{amount}
    </button>
  );
}
