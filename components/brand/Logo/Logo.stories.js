"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Primary = void 0;
var _react = _interopRequireDefault(require("react"));
var _Logo = _interopRequireDefault(require("./Logo"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = exports.default = {
  title: 'Brand/Logo',
  component: _Logo.default,
  parameters: {
    layout: 'centered'
  },
  tags: []
};
const Primary = args => /*#__PURE__*/_react.default.createElement(_Logo.default, args);
exports.Primary = Primary;
Primary.args = {
  src: '/logo.svg',
  w: '2.5rem',
  h: '2.5rem'
};