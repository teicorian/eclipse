"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Small = exports.Secondary = exports.Primary = exports.Large = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = exports.default = {
  title: 'General/Button',
  component: _Button.default,
  parameters: {
    layout: 'centered'
  },
  tags: []
};
const Primary = args => /*#__PURE__*/_react.default.createElement(_Button.default, args);
exports.Primary = Primary;
Primary.args = {
  primary: true,
  label: 'Button',
  deactivated: true
};
const Secondary = args => /*#__PURE__*/_react.default.createElement(_Button.default, args);
exports.Secondary = Secondary;
Secondary.args = {
  label: 'Button'
};
const Large = args => /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
  size: "Large"
}, args));
exports.Large = Large;
Large.args = {
  size: 'large',
  label: 'Button'
};
const Small = args => /*#__PURE__*/_react.default.createElement(_Button.default, _extends({
  size: "Small"
}, args));
exports.Small = Small;
Small.args = {
  size: 'small',
  label: 'Button'
};