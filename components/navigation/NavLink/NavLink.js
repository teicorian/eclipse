"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactRouterDom = require("react-router-dom");
require("./NavLink.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // NavLink.js
const NavLink = _ref => {
  let {
    to,
    label,
    hover,
    onClick,
    ...props
  } = _ref;
  const currentPath = location.pathname;
  const isActive = currentPath === to;
  const hoverStyle = [];
  if (hover) {
    hoverStyle.push('navlink-wrap-hover');
  } else {
    hoverStyle.push('navlink-wrap-nohover');
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "navlink ".concat(isActive ? 'active' : '')
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    to: to,
    className: "link ".concat(isActive ? 'active' : '')
  }, /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "".concat(hoverStyle)
  }, props), label)));
};
var _default = exports.default = NavLink;