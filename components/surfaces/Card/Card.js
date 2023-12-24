"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Card.css");
var _excluded = ["type", "children"],
  _excluded2 = ["children"],
  _excluded3 = ["row", "children"],
  _excluded4 = ["children"],
  _excluded5 = ["children"]; // NavLink.js
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Card = function Card(_ref) {
  var type = _ref.type,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "card ".concat(type ? type : '')
  }, props), children);
};
Card.Header = function (_ref2) {
  var children = _ref2.children,
    props = _objectWithoutProperties(_ref2, _excluded2);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: 'card-header'
  }, props), children);
};
Card.Body = function (_ref3) {
  var row = _ref3.row,
    children = _ref3.children,
    props = _objectWithoutProperties(_ref3, _excluded3);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "card-body ".concat(row ? 'row' : '')
  }, props), children);
};
Card.Footer = function (_ref4) {
  var children = _ref4.children,
    props = _objectWithoutProperties(_ref4, _excluded4);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "card-footer"
  }, props), children);
};
Card.FooterButton = function (_ref5) {
  var children = _ref5.children,
    props = _objectWithoutProperties(_ref5, _excluded5);
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: 'card-footer'
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: 'with-button'
  }, children));
};
var _default = exports["default"] = Card;
Card.propTypes = {
  type: _propTypes["default"].string
};