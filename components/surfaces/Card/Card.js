"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Spacer = _interopRequireDefault(require("../../layout/Spacer/Spacer"));
var _icons = require("../../icons");
require("./Card.css");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // NavLink.js
const Card = _ref => {
  let {
    type,
    children,
    ...props
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "card ".concat(type ? type : '')
  }, props), children);
};
Card.Header = _ref2 => {
  let {
    children,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'card-header'
  }, props), children);
};
Card.Body = _ref3 => {
  let {
    row,
    centered,
    children,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "".concat(centered ? 'card-body-centered' : 'card-body', " \n\t\t\t\t").concat(row ? 'row' : '')
  }, props), children);
};
Card.Footer = _ref4 => {
  let {
    children,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "card-footer"
  }, props), children);
};
Card.FooterButton = _ref5 => {
  let {
    children,
    ...props
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'card-footer'
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: 'with-button'
  }, children));
};
Card.CodeEditor = _ref6 => {
  let {
    copy,
    children,
    ...props
  } = _ref6;
  const [isToggled, setIsToggled] = (0, _react.useState)(false);
  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  const [isCopied, setIsCopied] = (0, _react.useState)(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(copy);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "card-footer ".concat(isToggled ? 'toggled' : '')
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: 'code-editor'
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "code-editor-toggle ".concat(isToggled ? 'toggled' : ''),
    onClick: handleToggle
  }, /*#__PURE__*/_react.default.createElement("p", {
    className: "code-editor-chevron"
  }, /*#__PURE__*/_react.default.createElement(_icons.Chevron, {
    right: true,
    size: 11
  })), /*#__PURE__*/_react.default.createElement(_Spacer.default, {
    w: 0.5
  }), /*#__PURE__*/_react.default.createElement("p", null, "Code Editor")), /*#__PURE__*/_react.default.createElement("div", {
    className: "editor-copy ".concat(isToggled ? 'toggled' : ''),
    onClick: handleCopy
  }, isCopied ? /*#__PURE__*/_react.default.createElement(_icons.Check, {
    size: 16
  }) : /*#__PURE__*/_react.default.createElement(_icons.Copy, {
    size: 16
  })))), /*#__PURE__*/_react.default.createElement("div", {
    className: "code-container ".concat(isToggled ? 'toggled' : '')
  }, children));
};
var _default = exports.default = Card;