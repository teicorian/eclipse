"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
require("./Header.css");
var _excluded = ["children"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Header = function Header(_ref) {
  var children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: 'navigation'
  }, props), children);
};
Header.TopNavigation = function (_ref2) {
  var children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'container'
  }, children);
};
Header.Wrap = function (_ref3) {
  var children = _ref3.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'wrap'
  }, children);
};
Header.Main = function (_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'main'
  }, children);
};
Header.SubNavigation = function (_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'sub-navigation-container'
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: 'sub-navigation-main'
  }, children));
};
var _default = exports["default"] = Header;