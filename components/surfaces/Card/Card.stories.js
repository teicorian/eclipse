"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Primary = void 0;
var _react = _interopRequireDefault(require("react"));
var _Card = _interopRequireDefault(require("./Card"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  title: 'Surfaces/Card',
  component: _Card["default"],
  parameters: {
    layout: 'fullscreen'
  },
  tags: []
};
var Primary = exports.Primary = function Primary(args) {
  return /*#__PURE__*/_react["default"].createElement(_Card["default"], args);
};
Primary.args = {
  header: 'Header',
  body: 'Body',
  footer: {
    content: 'Footer',
    style: 'active'
  }
};