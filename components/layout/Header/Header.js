"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _Button = _interopRequireDefault(require("../../general/Button/Button"));
var _Logo = _interopRequireDefault(require("../../brand/Logo/Logo"));
var _NavLink = _interopRequireDefault(require("../../navigation/NavLink/NavLink"));
var _Spacer = _interopRequireDefault(require("../../layout/Spacer/Spacer"));
require("./Header.css");
var _excluded = ["wrap", "main"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Header = function Header(_ref) {
  var wrap = _ref.wrap,
    main = _ref.main,
    props = _objectWithoutProperties(_ref, _excluded);
  var Container = [];
  if (wrap) {
    Container.push( /*#__PURE__*/_react["default"].createElement(Header.Wrap, {
      content: wrap,
      key: "wrap"
    }));
  }
  if (main) {
    Container.push( /*#__PURE__*/_react["default"].createElement(Header.Main, {
      content: main,
      key: "main"
    }));
  }
  return /*#__PURE__*/_react["default"].createElement("div", _extends({
    className: 'navigation'
  }, props), /*#__PURE__*/_react["default"].createElement("div", {
    className: 'container'
  }, Container));
};
Header.Wrap = function (_ref2) {
  var content = _ref2.content;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'wrap'
  }, content);
};
Header.Main = function (_ref3) {
  var content = _ref3.content;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: 'main'
  }, content);
};
var _default = exports["default"] = Header;
Header.propTypes = {
  wrap: _propTypes["default"].element,
  main: _propTypes["default"].element
};
Header.defaultProps = {
  wrap: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Logo["default"], null), /*#__PURE__*/_react["default"].createElement(_Spacer["default"], {
    w: 8
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    to: "/",
    label: "Home",
    currentPath: "/"
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    to: "/services",
    label: "Services"
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    to: "/about",
    label: "About"
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    to: "/contact",
    label: "Contact"
  })),
  main: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "Log In",
    size: "small"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "Sign Up",
    size: "small"
  }))
};