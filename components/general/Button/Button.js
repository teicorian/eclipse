"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Button.css");
var _excluded = ["primary", "warning", "deactivated", "size", "label", "onClick"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
/**
 * Primary UI component for user interaction
 */
var Button = function Button(_ref) {
  var primary = _ref.primary,
    warning = _ref.warning,
    deactivated = _ref.deactivated,
    size = _ref.size,
    label = _ref.label,
    onClick = _ref.onClick,
    props = _objectWithoutProperties(_ref, _excluded);
  var mode = primary ? 'eclipse-button--primary' : 'eclipse-button--secondary';
  var isWarning = warning ? 'eclipse-button--warning' : '';
  var isDeactivated = deactivated ? 'eclipse-button--deactivated' : '';
  return /*#__PURE__*/_react["default"].createElement("button", _extends({
    type: "button",
    className: ['eclipse-button', "eclipse-button--".concat(size), mode, isWarning, isDeactivated].join(' '),
    onClick: onClick
  }, props), label);
};
var _default = exports["default"] = Button;
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: _propTypes["default"].bool,
  warning: _propTypes["default"].bool,
  deactivated: _propTypes["default"].bool,
  /**
   * How large should the button be?
   */
  size: _propTypes["default"].oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: _propTypes["default"].string.isRequired,
  /**
   * Optional click handler
   */
  onClick: _propTypes["default"].func
};
Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined
};