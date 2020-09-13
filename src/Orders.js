import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";
import NoItems from "./NoItems";

function Orders() {
  const [{ user, basket }, dispatch] = useStateValue();

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    }
  }, []);
  return (
    <div className="orders">
      <h1>Your orders</h1>
      <div className="orders__order">
        {user ? (
          basket.length === 0 ? (
            <NoItems>Your orders will appear here</NoItems>
          ) : (
            orders?.map((order) => <Order order={order} />)
          )
        ) : (
          <NoItems>Login to view orders</NoItems>
        )}
      </div>
    </div>
  );
}

export default Orders;
