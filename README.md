# Pure_counter

![Version](https://img.shields.io/npm/v/your-package-name.svg)
![License](https://img.shields.io/npm/l/your-package-name.svg)

> Pure_counter is a collection of React components for implementing pure increment and decrement functionality. It provides customizable components that smoothly animate numerical values within a given range. With easy installation and usage, it offers a simple way to incorporate increment and decrement features into your React applications.


## Installation

You can install the package via npm:

```bash
npm install Pure_counter
```

# Usage

```
import { PureIncrement, PureDecrement } from 'your-package-name';

// Example usage of PureIncrement
<PureIncrement start={0} end={10} duration={1} className="purecounter" />

// Example usage of PureDecrement
<PureDecrement start={10} end={0} duration={1} className="purecounter" />
```

# Props

## PureIncrement
| Prop     | Type     | Description        |
| -------- | -------- | --------           |
| start    | number   | The starting value |
| end      | number   | The ending value   |
| duration | number   | Duration in seconds|
| className| number   | CSS class name     |

## PureDecrement

| Prop     | Type     | Description        |
| -------- | -------- | --------           |
| start    | number   | The starting value |
| end      | number   | The ending value   |
| duration | number   | Duration in seconds|
| className| number   | CSS class name     |


## License

This project is [MIT](./LICENSE) licensed.
