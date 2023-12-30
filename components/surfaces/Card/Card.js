"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Card.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // NavLink.js
const Card = _ref => {
  let {
    type,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "card ".concat(type ? type : '')
  }, props), children);
};
Card.Header = _ref2 => {
  let {
    children,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'card-header'
  }, props), children);
};
Card.Body = _ref3 => {
  let {
    row,
    centered,
    children,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "".concat(centered ? 'card-body-centered' : 'card-body', " \n\t\t\t\t").concat(row ? 'row' : '')
  }, props), children);
};
Card.Footer = _ref4 => {
  let {
    children,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "card-footer"
  }, props), children);
};
Card.FooterButton = _ref5 => {
  let {
    children,
    ...props
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'card-footer'
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: 'with-button'
  }, children));
};
var _default = exports.default = Card;
Card.propTypes = {
  type: _propTypes.default.string
};