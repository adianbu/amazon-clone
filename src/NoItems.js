import React from "react";
import "./NoItems.css";

function NoItems({ children }) {
  return (
    <div className="noItems">
      <h3>{children}</h3>
    </div>
  );
}

export default NoItems;
