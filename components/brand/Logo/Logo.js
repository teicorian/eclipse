"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Logo.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Primary UI component for user interaction
 */
const Logo = _ref => {
  let {
    src,
    w,
    h,
    ...props
  } = _ref;
  const source = src ? src : '/logo.svg';
  return /*#__PURE__*/_react.default.createElement("a", {
    href: "/"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: 'logo'
  }, /*#__PURE__*/_react.default.createElement("img", _extends({
    src: source
  }, props))));
};
var _default = exports.default = Logo;
Logo.propTypes = {
  src: _propTypes.default.string,
  w: _propTypes.default.string,
  h: _propTypes.default.string
};
Logo.defaultProps = {
  src: '/logo.svg'
};