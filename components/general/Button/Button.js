"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
require("./Button.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Primary UI component for user interaction
 */
const Button = _ref => {
  let {
    primary,
    warning,
    deactivated,
    size,
    label,
    onClick,
    to,
    type,
    ...props
  } = _ref;
  if (!size) {
    size = 'medium';
  }
  if (!type) {
    type = 'submit';
  }
  if (to) {
    to = "/".concat(to);
  }
  const mode = primary ? 'eclipse-button--primary' : warning ? 'eclipse-button--warning' : deactivated ? 'eclipse-button--deactivated' : 'eclipse-button--secondary';
  const wrapperClassName = ['eclipse-button', "eclipse-button--".concat(size), mode].join(' ');
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, to ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, _extends({
    to: to,
    className: wrapperClassName
  }, props), label) : /*#__PURE__*/_react.default.createElement("button", _extends({
    className: wrapperClassName,
    type: type,
    onClick: onClick
  }, props), label));
};
var _default = exports.default = Button;