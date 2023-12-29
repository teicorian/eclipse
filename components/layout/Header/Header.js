"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _icons = require("../../icons");
var _Logger = require("../../utilities/Logger");
require("./Header.css");
var _excluded = ["border", "children"];
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Header = function Header(_ref) {
  var border = _ref.border,
    children = _ref.children,
    props = _objectWithoutProperties(_ref, _excluded);
  var style = [];
  if (!border) {
    style.border = 'none';
  }
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: 'navigation',
    style: style
  }, props), children);
};

// Primary Navigation

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
Header.Brand = function (_ref4) {
  var children = _ref4.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'brand'
  }, children);
};
Header.Menu = function (_ref5) {
  var children = _ref5.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'menu'
  }, children);
};
Header.Main = function (_ref6) {
  var children = _ref6.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'main'
  }, children);
};

// Secondary Navigation

Header.SubNavigation = function (_ref7) {
  var children = _ref7.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'sub-navigation-container'
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: 'sub-navigation-main'
  }, children));
};

// Mobile Menu

Header.Mobile = function (_ref8) {
  var children = _ref8.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'mobile-container'
  }, children);
};
Header.MobileBrand = function (_ref9) {
  var children = _ref9.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'mobile-brand'
  }, children);
};
Header.MobileMenu = function (_ref10) {
  var children = _ref10.children;
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMobileMenuOpen = _useState2[0],
    setMobileMenuOpen = _useState2[1];
  var toggleMobileMenu = function toggleMobileMenu() {
    console.log('Toggle menu');
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("div", {
    className: 'mobile-button',
    onClick: toggleMobileMenu
  }, isMobileMenuOpen ? /*#__PURE__*/_react["default"].createElement(_icons.Close, {
    size: 20
  }) : /*#__PURE__*/_react["default"].createElement(_icons.Bars, {
    size: 20
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "mobile-menu ".concat(isMobileMenuOpen ? 'active' : '')
  }, children));
};
var _default = exports["default"] = Header;