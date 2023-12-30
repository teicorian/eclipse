"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./Button.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
/**
 * Primary UI component for user interaction
 */
const Button = _ref => {
  let {
    primary,
    warning,
    deactivated,
    size,
    label,
    onClick,
    ...props
  } = _ref;
  const mode = primary ? 'eclipse-button--primary' : 'eclipse-button--secondary';
  const isWarning = warning ? 'eclipse-button--warning' : '';
  const isDeactivated = deactivated ? 'eclipse-button--deactivated' : '';
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    className: ['eclipse-button', "eclipse-button--".concat(size), mode, isWarning, isDeactivated].join(' '),
    onClick: onClick
  }, props), label);
};
var _default = exports.default = Button;
Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: _propTypes.default.bool,
  warning: _propTypes.default.bool,
  deactivated: _propTypes.default.bool,
  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: _propTypes.default.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  primary: false,
  size: 'medium',
  onClick: undefined
};