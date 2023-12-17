"use strict";

require("core-js/modules/es.weak-map.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom-collections.iterator.js");
var _react = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
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
function PureIncrement(_ref) {
  let {
    start,
    end,
    duration,
    className
  } = _ref;
  const [count, setCount] = (0, _react.useState)(start);
  (0, _react.useEffect)(() => {
    const increment = Math.ceil((end - start) / (duration * 60));
    const timeout = Math.ceil(duration * 1000 / (end - start));
    if (start < end) {
      const timer = setInterval(() => {
        setCount(prevCount => {
          const newCount = prevCount + increment;
          return newCount >= end ? end : newCount;
        });
      }, timeout);
      return () => clearInterval(timer);
    } else {
      setCount(end);
    }
  }, [start, end, duration]);
  return /*#__PURE__*/_react.default.createElement("span", {
    className: className
  }, count);
}
var _default = exports.default = PureIncrement;