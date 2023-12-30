"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Primary = exports.Hover = exports.Active = void 0;
var _react = _interopRequireDefault(require("react"));
var _NavLink = _interopRequireDefault(require("./NavLink"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = {
  title: 'Navigation/NavLink',
  component: _NavLink.default,
  parameters: {
    layout: 'centered'
  },
  tags: []
};
const Primary = args => /*#__PURE__*/_react.default.createElement(_NavLink.default, args);
exports.Primary = Primary;
Primary.args = {
  to: '/',
  label: 'NavLink'
};
const Hover = args => /*#__PURE__*/_react.default.createElement(_NavLink.default, args);
exports.Hover = Hover;
Hover.args = {
  to: '/',
  label: 'NavLink',
  className: 'link sb-hover'
};
const Active = args => /*#__PURE__*/_react.default.createElement(_NavLink.default, args);
exports.Active = Active;
Active.args = {
  to: '/',
  label: 'NavLink',
  currentPath: '/'
};