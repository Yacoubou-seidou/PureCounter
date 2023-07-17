import React, { useState, useEffect } from 'react';

function PureIncrement({ start, end, duration, className }) {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const increment = Math.ceil((end - start) / (duration * 60));
    const timeout = Math.ceil((duration * 1000) / (end - start));

    if (start < end) {
      const timer = setInterval(() => {
        setCount((prevCount) => {
          const newCount = prevCount + increment;
          return newCount >= end ? end : newCount;
        });
      }, timeout);

      return () => clearInterval(timer);
    } else {
      setCount(end);
    }
  }, [start, end, duration]);

  return <span className={className}>{count}</span>;
}

export default PureIncrement;
