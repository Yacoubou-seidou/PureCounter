import React, { useState, useEffect } from 'react';
/**
 * @typedef {Object} PureDecrementProps
 * @property {number} start - The starting count.
 * @property {number} end - The ending count.
 * @property {number} duration - The duration of the decrement animation.
 * @property {string} [className] - Optional class name for styling.
 */

/**
 * PureDecrement component.
 *
 * @param {PureDecrementProps} props - The component props.
 * @returns {JSX.Element} - The rendered JSX element.
 */


interface PureDecrementProps {
  start: number;
  end: number;
  duration: number;
  className?: string;
}
const PureDecrement: React.FC<PureDecrementProps> = ({ start, end, duration, className }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    const decrement = Math.ceil((start - end) / (duration * 60));
    const timeout = Math.ceil((duration * 1000) / (start - end));

    if (start > end) {
      const timer = setInterval(() => {
        setCount((prevCount) => Math.max(prevCount - decrement, end));
      }, timeout);

      return () => clearInterval(timer);
    } else {
      setCount(end);
    }
  }, [start, end, duration]);

  return <span className={className}>{count}</span>;
};

export default PureDecrement;
