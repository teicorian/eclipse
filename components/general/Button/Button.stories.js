"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Small = exports.Secondary = exports.Primary = exports.Large = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = exports["default"] = {
  title: 'General/Button',
  component: _Button["default"],
  parameters: {
    layout: 'centered'
  },
  tags: []
};
var Primary = exports.Primary = function Primary(args) {
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], args);
};
Primary.args = {
  primary: true,
  label: 'Button'
};
var Secondary = exports.Secondary = function Secondary(args) {
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], args);
};
Secondary.args = {
  label: 'Button'
};
var Large = exports.Large = function Large(args) {
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({
    size: "Large"
  }, args));
};
Large.args = {
  size: 'large',
  label: 'Button'
};
var Small = exports.Small = function Small(args) {
  return /*#__PURE__*/_react["default"].createElement(_Button["default"], _extends({
    size: "Small"
  }, args));
};
Small.args = {
  size: 'small',
  label: 'Button'
};