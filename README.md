# pure_counter

![Version](https://img.shields.io/npm/v/pure_counter.svg)
![License](https://img.shields.io/npm/l/pure_counter.svg)

> pure_counter is a collection of React components for implementing pure increment and decrement functionality. It provides customizable components that smoothly animate numerical values within a given range. With easy installation and usage, it offers a simple way to incorporate increment and decrement features into your React applications.


## Installation

You can install the package via npm:

```bash
npm install pure_counter
```

# Usage

```
import { PureIncrement, PureDecrement } from 'pure_counter';

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

## 👥 Authors <a name="authors"></a>

👤 **Author**

- GitHub: [yacoubou-seidou](https://github.com/yacoubou-seidou)
- Linkedin: [yacoubou-seidou](https://www.linkedin.com/in/yacoubou-seidou-chaibou/)
- Facebook: [yacoubou-seidou](https://www.facebook.com/Blackyacos.chaibou)

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Yacoubou-seidou/PureCounter/issues).

## License

This project is [MIT](./LICENSE) licensed.
