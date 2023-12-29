"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Public = exports.Primary = exports.Authentication = void 0;
var _react = _interopRequireDefault(require("react"));
var _Header = _interopRequireDefault(require("./Header"));
var _Button = _interopRequireDefault(require("../../general/Button/Button"));
var _Logo = _interopRequireDefault(require("../../brand/Logo/Logo"));
var _NavLink = _interopRequireDefault(require("../../navigation/NavLink/NavLink"));
var _Spacer = _interopRequireDefault(require("../../layout/Spacer/Spacer"));
var _MobileNavLink = _interopRequireDefault(require("../../navigation/MobileNavLink/MobileNavLink"));
var _User = _interopRequireDefault(require("../../identity/user/User"));
var _Line = _interopRequireDefault(require("../../layout/Line/Line"));
var _icons = require("../../icons");
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
  children: /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_Header["default"], null, /*#__PURE__*/_react["default"].createElement(_Header["default"].TopNavigation, null, /*#__PURE__*/_react["default"].createElement(_Header["default"].Wrap, null, /*#__PURE__*/_react["default"].createElement(_Logo["default"], null), /*#__PURE__*/_react["default"].createElement(_Spacer["default"], {
    w: 1
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "About",
    to: "/about"
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Services",
    to: "/services"
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Pricing",
    to: "/pricing"
  })), /*#__PURE__*/_react["default"].createElement(_Header["default"].Main, null, /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Contact Us",
    to: "/contact"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "Log In"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "Sign Up",
    primary: true
  })))), /*#__PURE__*/_react["default"].createElement(_Header["default"], null, /*#__PURE__*/_react["default"].createElement(_Header["default"].Mobile, null, /*#__PURE__*/_react["default"].createElement(_Header["default"].MobileBrand, null, /*#__PURE__*/_react["default"].createElement(_Logo["default"], null)), /*#__PURE__*/_react["default"].createElement(_Header["default"].MobileMenu, null, /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "Contact"
  }), /*#__PURE__*/_react["default"].createElement(_Spacer["default"], {
    h: 2
  }), /*#__PURE__*/_react["default"].createElement(_User["default"], {
    right: true,
    firstName: "TJ",
    lastName: "Bredemeyer",
    email: "tj@teicor.com",
    src: 'https://assets-dev.teicor.com/users/b7b67021253446dfb2280c908bae2115/4093e38d4f174594846b8dbfec77aa96'
  }), /*#__PURE__*/_react["default"].createElement(_Spacer["default"], {
    h: 1
  }), /*#__PURE__*/_react["default"].createElement(_Line["default"], {
    horizontal: true
  }), /*#__PURE__*/_react["default"].createElement(_MobileNavLink["default"], {
    label: "Dashboard"
  }), /*#__PURE__*/_react["default"].createElement(_MobileNavLink["default"], {
    label: "Settings",
    currentPath: "/settings",
    to: "/settings"
  }), /*#__PURE__*/_react["default"].createElement(_MobileNavLink["default"], {
    label: "New Team"
  }, /*#__PURE__*/_react["default"].createElement(_icons.Add, null)), /*#__PURE__*/_react["default"].createElement(_MobileNavLink["default"], {
    label: "Theme"
  }), /*#__PURE__*/_react["default"].createElement(_MobileNavLink["default"], {
    label: "Log Out"
  }), /*#__PURE__*/_react["default"].createElement(_Spacer["default"], {
    h: 2
  }), /*#__PURE__*/_react["default"].createElement("h2", null, "Resources"), /*#__PURE__*/_react["default"].createElement(_MobileNavLink["default"], {
    label: "Changelog"
  }), /*#__PURE__*/_react["default"].createElement(_MobileNavLink["default"], {
    label: "Help"
  }), /*#__PURE__*/_react["default"].createElement(_MobileNavLink["default"], {
    label: "Documentation"
  }), /*#__PURE__*/_react["default"].createElement(_MobileNavLink["default"], {
    label: "Teicor Homepage"
  }, /*#__PURE__*/_react["default"].createElement(_icons.OpenLink, null))))), /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    border: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"].SubNavigation, null, /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "About",
    to: "/about",
    currentPath: "/about",
    hover: true
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Services",
    to: "/services",
    hover: true
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Pricing",
    to: "/pricing",
    hover: true
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Services",
    to: "/services",
    hover: true
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Pricing",
    to: "/pricing",
    hover: true
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Services",
    to: "/services",
    hover: true
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Pricing",
    to: "/pricing",
    hover: true
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Services",
    to: "/services",
    hover: true
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Pricing",
    to: "/pricing",
    hover: true
  }))))
};
var Public = exports.Public = function Public(args) {
  return /*#__PURE__*/_react["default"].createElement(_Header["default"], args);
};
Public.args = {
  children: /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    border: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"].TopNavigation, null, /*#__PURE__*/_react["default"].createElement(_Header["default"].Wrap, null, /*#__PURE__*/_react["default"].createElement(_Logo["default"], null), /*#__PURE__*/_react["default"].createElement(_Spacer["default"], {
    w: 1
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "About",
    to: "/about",
    currentPath: "/about",
    hover: true
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Services",
    to: "/services",
    hover: true
  }), /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Pricing",
    to: "/pricing",
    hover: true
  })), /*#__PURE__*/_react["default"].createElement(_Header["default"].Main, null, /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Contact Us",
    to: "/contact"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "Log In"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "Sign Up",
    primary: true
  }))))
};
var Authentication = exports.Authentication = function Authentication(args) {
  return /*#__PURE__*/_react["default"].createElement(_Header["default"], args);
};
Authentication.args = {
  children: /*#__PURE__*/_react["default"].createElement(_Header["default"], {
    border: true
  }, /*#__PURE__*/_react["default"].createElement(_Header["default"].TopNavigation, null, /*#__PURE__*/_react["default"].createElement(_Header["default"].Wrap, null, /*#__PURE__*/_react["default"].createElement(_Logo["default"], null)), /*#__PURE__*/_react["default"].createElement(_Header["default"].Main, null, /*#__PURE__*/_react["default"].createElement(_NavLink["default"], {
    label: "Contact Us",
    to: "/contact"
  }), /*#__PURE__*/_react["default"].createElement(_Button["default"], {
    label: "Sign Up"
  }))))
};