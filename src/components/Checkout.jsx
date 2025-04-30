import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Checkout = () => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (err) {
      console.error('Error parsing localStorage cart:', err);
      return [];
    }
  });
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'credit-card',
  });
  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const navigate = useNavigate();

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item['discount-price'] * item.quantity,
    0
  );
  const shipping = 0; // Free shipping as per Cart.js
  const total = subtotal + shipping;

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.postalCode) newErrors.postalCode = 'Postal code is required';
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Simulate order placement
    try {
      localStorage.setItem('cart', JSON.stringify([])); // Clear cart
      setCartItems([]);
      setOrderPlaced(true);
      setTimeout(() => {
        navigate('/'); // Redirect to home after 3 seconds
      }, 3000);
    } catch (err) {
      console.error('Error clearing localStorage:', err);
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen flex flex-col justify-between">
        <Header />
        <div className="text-center py-20 px-4">
          <h2 className="text-3xl font-bold text-green-600 mb-4">Order Placed Successfully!</h2>
          <p className="text-lg text-gray-600">
            Thank you for your order. You will be redirected to the home page shortly.
          </p>
          <Link to="/" className="mt-4 inline-block text-red-500 hover:underline">
            Back to Home
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="checkout_container flex flex-col min-h-screen max-w-full lg:mx-[100px] md:mx-[30px] sm:mx-[16px] py-10">
        <div className="breadcrumb mb-6">
          <span className="text-gray-600">
            <Link to="/">Home</Link> / <Link to="/cart">Cart</Link> / Checkout
          </span>
        </div>

        {cartItems.length === 0 ? (
          <div className="text-center mt-10 text-gray-600 text-lg">
            Your cart is empty. <Link to="/" className="text-red-500 hover:underline">Shop now</Link>.
          </div>
        ) : (
          <div className="flex flex-wrap gap-6">
            {/* Shipping and Payment Form */}
            <div className="flex-1 min-w-[300px]">
              <h2 className="text-2xl font-bold mb-6 text-red-600">Checkout</h2>
              <form onSubmit={handlePlaceOrder} className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Shipping Details</h3>
                  <div className="space-y-3">
                    <div>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full Name"
                        className={`w-full p-2 border rounded-md focus:outline-none focus:border-red-500 ${errors.fullName ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className={`w-full p-2 border rounded-md focus:outline-none focus:border-red-500 ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className={`w-full p-2 border rounded-md focus:outline-none focus:border-red-500 ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Address"
                        className={`w-full p-2 border rounded-md focus:outline-none focus:border-red-500 ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                      />
                      {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                    </div>
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <input
                          type="text"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          placeholder="City"
                          className={`w-full p-2 border rounded-md focus:outline-none focus:border-red-500 ${errors.city ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                      </div>
                      <div className="flex-1">
                        <input
                          type="text"
                          name="postalCode"
                          value={formData.postalCode}
                          onChange={handleInputChange}
                          placeholder="Postal Code"
                          className={`w-full p-2 border rounded-md focus:outline-none focus:border-red-500 ${errors.postalCode ? 'border-red-500' : 'border-gray-300'}`}
                        />
                        {errors.postalCode && <p className="text-red-500 text-sm mt-1">{errors.postalCode}</p>}
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-2">Payment Method</h3>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="credit-card"
                        checked={formData.paymentMethod === 'credit-card'}
                        onChange={handleInputChange}
                        className="text-red-500 focus:ring-red-500"
                      />
                      Credit Card
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={formData.paymentMethod === 'paypal'}
                        onChange={handleInputChange}
                        className="text-red-500 focus:ring-red-500"
                      />
                      PayPal
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cash-on-delivery"
                        checked={formData.paymentMethod === 'cash-on-delivery'}
                        onChange={handleInputChange}
                        className="text-red-500 focus:ring-red-500"
                      />
                      Cash on Delivery
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-red-500 text-white py-3 rounded-md hover:bg-black transition-all"
                >
                  Place Order
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="flex-1 min-w-[300px] bg-gray-50 p-6 rounded-md border border-gray-300">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <img src={item.img} alt={item.name} className="w-12 h-12 object-contain" />
                      <div>
                        <p className="text-sm font-medium">{item.name}</p>
                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <p className="text-sm font-medium">
                      ${(item['discount-price'] * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
                <hr />
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <hr />
                <div className="flex justify-between font-semibold">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              <Link
                to="/cart"
                className="mt-4 block text-center text-red-500 hover:underline"
              >
                Back to Cart
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Checkout;