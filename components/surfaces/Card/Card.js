"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Card.css");
var _excluded = ["header", "body", "footer"]; // NavLink.js
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Card = function Card(_ref) {
  var header = _ref.header,
    body = _ref.body,
    footer = _ref.footer,
    props = _objectWithoutProperties(_ref, _excluded);
  var content = [];
  if (header) {
    content.push( /*#__PURE__*/_react["default"].createElement("div", {
      className: 'card-header'
    }, header));
  }
  if (body) {
    content.push( /*#__PURE__*/_react["default"].createElement("div", _extends({
      className: 'card-body'
    }, props), body));
  }
  if (footer) {
    var footerStyle = [];
    if (footer.style === 'deactivated') {
      footerStyle.push('deactivated');
    }
    if (footer.style === 'warning') {
      footerStyle.push('warning');
    }
    content.push( /*#__PURE__*/_react["default"].createElement("div", {
      className: "card-footer ".concat(footerStyle ? footerStyle : '')
    }, footer.content));
  }
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: "card"
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: "card-wrap"
  }, content));
};
var _default = exports["default"] = Card;
Card.propTypes = {
  header: _propTypes["default"].string,
  body: _propTypes["default"].string,
  footer: _propTypes["default"].shape({
    style: _propTypes["default"].string,
    content: _propTypes["default"].string
  })
};