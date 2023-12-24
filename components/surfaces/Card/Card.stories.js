"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.WarningButton = exports.Warning = exports.PrimaryButton = exports.Primary = exports.DeactivatedButton = exports.Deactivated = void 0;
var _react = _interopRequireDefault(require("react"));
var _Card = _interopRequireDefault(require("./Card"));
var _Button = _interopRequireDefault(require("../../general/Button/Button"));
var _Input = _interopRequireDefault(require("../../data_entry/Input/Input"));
var _Spacer = _interopRequireDefault(require("../../layout/Spacer/Spacer"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
var _default = exports["default"] = {
  title: 'Surfaces/Card',
  component: _Card["default"],
  parameters: {
    layout: 'fullscreen'
  },
  tags: []
};
var Primary = exports.Primary = function Primary(args) {
  return /*#__PURE__*/_react["default"].createElement(_Card["default"], _extends({}, args, {
    type: args.type
  }), /*#__PURE__*/_react["default"].createElement(_Card["default"].Header, null, "Header"), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, /*#__PURE__*/_react["default"].createElement(_Input["default"], null), /*#__PURE__*/_react["default"].createElement(_Spacer["default"], {
    h: 1
  }), /*#__PURE__*/_react["default"].createElement(_Input["default"], {
    type: "password",
    minLength: 8
  })), /*#__PURE__*/_react["default"].createElement(_Card["default"].Footer, null, "Footer"));
};
Primary.args = {};
var PrimaryButton = exports.PrimaryButton = function PrimaryButton(args) {
  return /*#__PURE__*/_react["default"].createElement(_Card["default"], _extends({}, args, {
    type: args.type
  }), /*#__PURE__*/_react["default"].createElement(_Card["default"].Header, null, "Header"), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, "Body"), /*#__PURE__*/_react["default"].createElement(_Card["default"].FooterButton, null, /*#__PURE__*/_react["default"].createElement("p", null, "Footer"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "Save",
    primary: true
  })));
};
PrimaryButton.args = {};
var Deactivated = exports.Deactivated = function Deactivated(args) {
  return /*#__PURE__*/_react["default"].createElement(_Card["default"], _extends({}, args, {
    type: args.type
  }), /*#__PURE__*/_react["default"].createElement(_Card["default"].Header, null, "Header"), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, "Body"), /*#__PURE__*/_react["default"].createElement(_Card["default"].Footer, null, "Footer"));
};
Deactivated.args = {
  type: 'deactivated'
};
var DeactivatedButton = exports.DeactivatedButton = function DeactivatedButton(args) {
  return /*#__PURE__*/_react["default"].createElement(_Card["default"], _extends({}, args, {
    type: args.type
  }), /*#__PURE__*/_react["default"].createElement(_Card["default"].Header, null, "Header"), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, "Body"), /*#__PURE__*/_react["default"].createElement(_Card["default"].FooterButton, null, /*#__PURE__*/_react["default"].createElement("p", null, "Footer"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "Save",
    deactivated: true
  })));
};
DeactivatedButton.args = {
  type: 'deactivated'
};
var Warning = exports.Warning = function Warning(args) {
  return /*#__PURE__*/_react["default"].createElement(_Card["default"], _extends({}, args, {
    type: args.type
  }), /*#__PURE__*/_react["default"].createElement(_Card["default"].Header, null, "Header"), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, "Body"), /*#__PURE__*/_react["default"].createElement(_Card["default"].Footer, null, "Footer"));
};
Warning.args = {
  type: 'warning'
};
var WarningButton = exports.WarningButton = function WarningButton(args) {
  return /*#__PURE__*/_react["default"].createElement(_Card["default"], _extends({}, args, {
    type: args.type
  }), /*#__PURE__*/_react["default"].createElement(_Card["default"].Header, null, "Header"), /*#__PURE__*/_react["default"].createElement(_Card["default"].Body, null, "Body"), /*#__PURE__*/_react["default"].createElement(_Card["default"].FooterButton, null, /*#__PURE__*/_react["default"].createElement("p", null, "Footer"), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "Delete",
    warning: true
  })));
};
WarningButton.args = {
  type: 'warning'
};