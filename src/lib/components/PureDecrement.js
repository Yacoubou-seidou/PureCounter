import React, { useState, useEffect } from 'react';

function PureDecrement({ start, end, duration, className }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const decrement = Math.ceil((start - end) / (duration * 60));
    const timeout = Math.ceil((duration * 1000) / (start - end));

    if (start > end) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount - decrement;
          return newCount <= end ? end : newCount;
        });
      }, timeout);

      return () => clearInterval(timer);
    } else {
      setCount(end);
    }
  }, [start, end, duration]);

  return <span className={className}>{count}</span>;
}

export default PureDecrement;
