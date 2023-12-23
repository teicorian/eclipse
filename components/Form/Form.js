"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypes = exports["default"] = void 0;
var _classnames = _interopRequireDefault(require("classnames"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _react = _interopRequireWildcard(require("react"));
var _FormCheck = _interopRequireDefault(require("./FormCheck"));
var _FormControl = _interopRequireDefault(require("./FormControl"));
var _FormFloating = _interopRequireDefault(require("./FormFloating"));
var _FormGroup = _interopRequireDefault(require("./FormGroup"));
var _FormLabel = _interopRequireDefault(require("./FormLabel"));
var _FormRange = _interopRequireDefault(require("./FormRange"));
var _FormSelect = _interopRequireDefault(require("./FormSelect"));
var _FormText = _interopRequireDefault(require("./FormText"));
var _Switch = _interopRequireDefault(require("./Switch"));
var _FloatingLabel = _interopRequireDefault(require("./FloatingLabel"));
var _excluded = ["className", "validated", "as"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var propTypes = exports.propTypes = {
  _ref: _propTypes["default"].any,
  validated: _propTypes["default"].bool,
  as: _propTypes["default"].elementType
};
var Form = /*#__PURE__*/(0, _react.forwardRef)(function (_ref, ref) {
  var className = _ref.className,
    validated = _ref.validated,
    _ref$as = _ref.as,
    Component = _ref$as === void 0 ? 'form' : _ref$as,
    props = _objectWithoutProperties(_ref, _excluded);
  return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, props, {
    ref: ref,
    className: (0, _classnames["default"])(className, validated && 'was-validated')
  }));
});
Form.displayName = 'Form';
Form.propTypes = propTypes;
var EnhancedForm = Object.assign(Form, {
  Group: _FormGroup["default"],
  Control: _FormControl["default"],
  Floating: _FormFloating["default"],
  Check: _FormCheck["default"],
  Switch: _Switch["default"],
  Label: _FormLabel["default"],
  Text: _FormText["default"],
  Range: _FormRange["default"],
  Select: _FormSelect["default"],
  FloatingLabel: _FloatingLabel["default"]
});
var _default = exports["default"] = EnhancedForm;