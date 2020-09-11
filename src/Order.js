import React from "react";
import "./Order.css";
import moment from "moment";

function Order({ order }) {
  return (
    <div className="order">
      <p>{moment.unix(order.data.created).format("MMMM DD YYYY,h:ma")}</p>
    </div>
  );
}

export default Order;
