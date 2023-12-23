"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Primary = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("./Header"));
var _Button = _interopRequireDefault(require("../../general/Button/Button"));
var _Logo = _interopRequireDefault(require("../../brand/Logo/Logo"));
var _NavLink = _interopRequireDefault(require("../../navigation/NavLink/NavLink"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var _default = exports["default"] = {
  title: 'Layout/Header',
  component: _Header["default"],
  parameters: {
    layout: 'fullscreen'
  },
  control: {
    type: 'object',
    render: {
      // Custom renderer to display JSX input without quotes
      options: function options(props) {
        return /*#__PURE__*/_react["default"].createElement('div', {}, props);
      }
    }
  },
  tags: []
};
var Primary = exports.Primary = function Primary(args) {
  return /*#__PURE__*/_react["default"].createElement(_Header["default"], args);
};
Primary.args = {
  wrap: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Logo["default"], null), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
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
    label: "Log In"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "Sign Up",
    primary: true
  }))
};