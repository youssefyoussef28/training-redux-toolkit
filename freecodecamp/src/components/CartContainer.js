import React from "react";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItems, total, amount } = useSelector((store) => store.cart);
  if (amount < 1) {
    return (
      <section className="cart">
        <h2>Your Bag</h2>
        <h4 className="empty-cart">is Currently empty</h4>
      </section>
    );
  }
  return <div>CartContainer</div>;
};

export default CartContainer;
