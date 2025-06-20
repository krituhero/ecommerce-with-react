import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Cart = () => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const storedCart = localStorage.getItem('cart');
      return storedCart ? JSON.parse(storedCart) : [];
    } catch (err) {
      console.error('Error parsing localStorage cart:', err);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cart', JSON.stringify(cartItems));
    } catch (err) {
      console.error('Error saving to localStorage:', err);
    }
  }, [cartItems]);

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item['discount-price'] * item.quantity,
    0
  );

  return (
    <>
      <Header />
      <div className="cart_container flex flex-col mb-[50px] max-w-full h-auto lg:mx-[100px] md:mx-[30px] sm:mx-[16px]">
        <div className="cart_items mt-[30px]">
          <span className="text-gray-600">Home / Cart</span>

          {cartItems.length === 0 ? (
            <div className="text-center mt-10 text-gray-600 text-lg">
              Your cart is empty.
            </div>
          ) : (
            <>
              <div className="flex w-full h-[52px] items-center justify-between px-6 mt-[30px] shadow-md rounded-md bg-gray-100 font-semibold">
                <span className="w-1/3">Product</span>
                <span className="w-1/6 text-center">Price</span>
                <span className="w-1/6 text-center">Quantity</span>
                <span className="w-1/6 text-center">Subtotal</span>
                <span className="w-1/6 text-center">Action</span>
              </div>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex w-full items-center justify-between px-6 py-4 border-b"
                >
                  <div className="w-1/3 flex items-center gap-4">
                    <img src={item.img} alt={item.name} className="w-16 h-16 object-contain" />
                    <span>{item.name}</span>
                  </div>
                  <span className="w-1/6 text-center">${item['discount-price']}</span>
                  <div className="w-1/6 text-center flex justify-center items-center gap-2">
                    <button
                      onClick={() => updateQuantity(item.id, -1)}
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, 1)}
                      className="px-2 bg-gray-200 rounded hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <span className="w-1/6 text-center">
                    ${(item['discount-price'] * item.quantity).toFixed(2)}
                  </span>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-1/6 text-center text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="checkout flex flex-wrap justify-between h-auto max-w-full mx-4 sm:mx-6 lg:mx-[100px] gap-4 mt-10 mb-10">
            <div className="coupon flex items-start flex-1">
              <input
                type="text"
                className="border border-black p-2 focus:border-blue-500 rounded-md w-[200px]"
                placeholder="Coupon Code"
              />
              <button className="text-white bg-red-500 py-2 px-4 ml-2 text-md rounded-md">
                Apply Coupon
              </button>
            </div>

            <div className="flex flex-col border border-black p-4 rounded-md flex-1 max-w-full w-full bg-gray-50">
              <span className="font-semibold">Cart Total</span>
              <div className="flex justify-between my-2">
                <span>Subtotal :</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <hr />
              <div className="flex justify-between my-2">
                <span>Shipping:</span>
                <span>Free</span>
              </div>
              <hr />
              <div className="flex justify-between my-2">
                <span>Total:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <Link
                to="/checkout"
                className="text-white bg-red-500 mt-4 mx-auto py-2 px-4 text-md rounded-md hover:bg-black transition-all"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Cart;