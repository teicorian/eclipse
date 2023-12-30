"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WarningButton = exports.Warning = exports.PrimaryButton = exports.Primary = exports.DeactivatedButton = exports.Deactivated = void 0;
var _react = _interopRequireDefault(require("react"));
var _Card = _interopRequireDefault(require("./Card"));
var _Button = _interopRequireDefault(require("../../general/Button/Button"));
var _Input = _interopRequireDefault(require("../../data_entry/Input/Input"));
var _Spacer = _interopRequireDefault(require("../../layout/Spacer/Spacer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = exports.default = {
  title: 'Surfaces/Card',
  component: _Card.default,
  parameters: {
    layout: 'fullscreen'
  },
  tags: []
};
const Primary = args => /*#__PURE__*/_react.default.createElement(_Card.default, _extends({}, args, {
  type: args.type
}), /*#__PURE__*/_react.default.createElement(_Card.default.Header, null, "Header"), /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, /*#__PURE__*/_react.default.createElement(_Input.default, null), /*#__PURE__*/_react.default.createElement(_Spacer.default, {
  h: 1
}), /*#__PURE__*/_react.default.createElement(_Input.default, {
  type: "password",
  minLength: 8
})), /*#__PURE__*/_react.default.createElement(_Card.default.Footer, null, "Footer"));
exports.Primary = Primary;
Primary.args = {};
const PrimaryButton = args => /*#__PURE__*/_react.default.createElement(_Card.default, _extends({}, args, {
  type: args.type
}), /*#__PURE__*/_react.default.createElement(_Card.default.Header, null, "Header"), /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, "Body"), /*#__PURE__*/_react.default.createElement(_Card.default.FooterButton, null, /*#__PURE__*/_react.default.createElement("p", null, "Footer"), /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Save",
  primary: true
})));
exports.PrimaryButton = PrimaryButton;
PrimaryButton.args = {};
const Deactivated = args => /*#__PURE__*/_react.default.createElement(_Card.default, _extends({}, args, {
  type: args.type
}), /*#__PURE__*/_react.default.createElement(_Card.default.Header, null, "Header"), /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, "Body"), /*#__PURE__*/_react.default.createElement(_Card.default.Footer, null, "Footer"));
exports.Deactivated = Deactivated;
Deactivated.args = {
  type: 'deactivated'
};
const DeactivatedButton = args => /*#__PURE__*/_react.default.createElement(_Card.default, _extends({}, args, {
  type: args.type
}), /*#__PURE__*/_react.default.createElement(_Card.default.Header, null, "Header"), /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, "Body"), /*#__PURE__*/_react.default.createElement(_Card.default.FooterButton, null, /*#__PURE__*/_react.default.createElement("p", null, "Footer"), /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Save",
  deactivated: true
})));
exports.DeactivatedButton = DeactivatedButton;
DeactivatedButton.args = {
  type: 'deactivated'
};
const Warning = args => /*#__PURE__*/_react.default.createElement(_Card.default, _extends({}, args, {
  type: args.type
}), /*#__PURE__*/_react.default.createElement(_Card.default.Header, null, "Header"), /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, "Body"), /*#__PURE__*/_react.default.createElement(_Card.default.Footer, null, "Footer"));
exports.Warning = Warning;
Warning.args = {
  type: 'warning'
};
const WarningButton = args => /*#__PURE__*/_react.default.createElement(_Card.default, _extends({}, args, {
  type: args.type
}), /*#__PURE__*/_react.default.createElement(_Card.default.Header, null, "Header"), /*#__PURE__*/_react.default.createElement(_Card.default.Body, null, "Body"), /*#__PURE__*/_react.default.createElement(_Card.default.FooterButton, null, /*#__PURE__*/_react.default.createElement("p", null, "Footer"), /*#__PURE__*/_react.default.createElement(_Button.default, {
  label: "Delete",
  warning: true
})));
exports.WarningButton = WarningButton;
WarningButton.args = {
  type: 'warning'
};