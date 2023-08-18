import React, { useState, useEffect } from "react";

const NumberCountAnimation = ({ increment, end }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < end) {
        setCount(count + increment);
      }
    }, (2000 * increment) / (end + increment));

    return () => clearInterval(interval);
  }, [count, end]);

  return <span>{count.toLocaleString()}</span>;
};

export default NumberCountAnimation;
