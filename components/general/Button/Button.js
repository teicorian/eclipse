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
  const mode = primary ? 'eclipse-button--primary' : 'eclipse-button--secondary';
  const isWarning = warning ? 'eclipse-button--warning' : '';
  const isDeactivated = deactivated ? 'eclipse-button--deactivated' : '';
  const wrapperClassName = ['eclipse-button', "eclipse-button--".concat(size), mode, isWarning, isDeactivated].join(' ');
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: wrapperClassName
  }, props), onClick ? /*#__PURE__*/_react.default.createElement("button", {
    type: type,
    onClick: onClick
  }, label) : to ? /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: to,
    className: 'link'
  }, label) :
  /*#__PURE__*/
  // Render a regular button if neither onClick nor to is present
  _react.default.createElement("button", {
    type: type
  }, label));
};
var _default = exports.default = Button;