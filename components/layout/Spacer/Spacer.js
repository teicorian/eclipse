"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function Spacer(_ref) {
  let {
    w,
    h,
    ...props
  } = _ref;
  const styles = {
    width: w ? "".concat(w, "rem") : undefined,
    height: h ? "".concat(h, "rem") : undefined
  };
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    style: styles
  }, props));
}
var _default = exports.default = Spacer;