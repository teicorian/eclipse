"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Page.css");
var _excluded = ["layout", "max", "children"],
  _excluded2 = ["title"],
  _excluded3 = ["children"]; // NavLink.js
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Page = function Page(_ref) {
  var layout = _ref.layout,
    max = _ref.max,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var maxWidth = [];
  if (max) {
    maxWidth.push("maxWidth--".concat(max));
  }
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "page"
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: "page container ".concat(layout ? layout : '')
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "page-wrapper ".concat(max ? maxWidth : '')
  }, children)));
};
Page.Header = function (_ref2) {
  var title = _ref2.title,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: 'page-header'
  }, props), /*#__PURE__*/_react["default"].createElement("h1", null, title));
};
Page.SideBar = function (_ref3) {
  var children = _ref3.children,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: 'page-sidebar'
  }, props), children);
};
var _default = exports["default"] = Page;
Page.propTypes = {
  layout: _propTypes["default"].string,
  max: _propTypes["default"].string
};