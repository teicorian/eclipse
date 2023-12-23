"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Primary = exports.Hover = exports.Active = void 0;
var _react = _interopRequireDefault(require("react"));
var _NavLink = _interopRequireDefault(require("./NavLink"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  title: 'Navigation/NavLink',
  component: _NavLink["default"],
  parameters: {
    layout: 'centered'
  },
  tags: []
};
var Primary = exports.Primary = function Primary(args) {
  return /*#__PURE__*/_react["default"].createElement(_NavLink["default"], args);
};
Primary.args = {
  to: '/',
  label: 'NavLink'
};
var Hover = exports.Hover = function Hover(args) {
  return /*#__PURE__*/_react["default"].createElement(_NavLink["default"], args);
};
Hover.args = {
  to: '/',
  label: 'NavLink',
  className: 'link sb-hover'
};
var Active = exports.Active = function Active(args) {
  return /*#__PURE__*/_react["default"].createElement(_NavLink["default"], args);
};
Active.args = {
  to: '/',
  label: 'NavLink',
  currentPath: '/'
};