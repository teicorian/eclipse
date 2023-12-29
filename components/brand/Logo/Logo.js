"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Logo.css");
var _excluded = ["src", "w", "h"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Primary UI component for user interaction
 */
var Logo = function Logo(_ref) {
  var src = _ref.src,
    w = _ref.w,
    h = _ref.h,
    props = _objectWithoutProperties(_ref, _excluded);
  var source = src ? src : '/logo.svg';
  return /*#__PURE__*/_react["default"].createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: 'logo'
  }, /*#__PURE__*/_react["default"].createElement("img", _extends({
    src: source
  }, props))));
};
var _default = exports["default"] = Logo;
Logo.propTypes = {
  src: _propTypes["default"].string,
  w: _propTypes["default"].string,
  h: _propTypes["default"].string
};
Logo.defaultProps = {
  src: '/logo.svg'
};