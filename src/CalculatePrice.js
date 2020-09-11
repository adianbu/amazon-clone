import React, { useState } from "react";
import { useStateValue } from "./StateProvider";

function CalculatePrice() {
  const [{ basket }, dispatch] = useStateValue();
  const [state, setstate] = useState(0);

  //   for (let i = 0; i <; basket?.length; i++) {
  //     setstate(basket[i]?.price + state);
  //   }

  basket.map((item) => setstate(item.price + state));
  console.log(state);
}

export default CalculatePrice;
