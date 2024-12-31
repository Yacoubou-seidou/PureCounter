import React, { useState, useEffect } from 'react';
/**
 * @typedef {Object} PureIncrement
 * @property {number} start - The starting count.
 * @property {number} end - The ending count.
 * @property {number} duration - The duration of the decrement animation.
 * @property {string} [className] - Optional class name for styling.
 */

/**
 * PureDecrement component.
 *
 * @param {PureIncrement} props - The component props.
 * @returns {JSX.Element} - The rendered JSX element.
 */


interface PureIncrementProps {
  start: number;
  end: number;
  duration: number;
  className?: string;
}

const PureIncrement: React.FC<PureIncrementProps> = ({ start, end, duration, className }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const increment = Math.ceil((end - start) / (duration * 60));
    const timeout = Math.ceil((duration * 1000) / (end - start));

    if (start < end) {
      const timer = setInterval(() => {
        setCount((prevCount) => Math.min(prevCount + increment, end));
      }, timeout);

      return () => clearInterval(timer);
    } else {
      setCount(end);
    }
  }, [start, end, duration]);

  return <span className={className}>{count}</span>;
};

export default PureIncrement;
