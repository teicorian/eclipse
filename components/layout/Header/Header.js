"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _icons = require("../../icons");
require("./Header.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
const Header = _ref => {
  let {
    border,
    children,
    ...props
  } = _ref;
  const style = [];
  if (border) {
    style.borderBottomWidth = '1px';
  }
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'navigation',
    style: style
  }, props), children);
};

// Primary Navigation

Header.TopNavigation = _ref2 => {
  let {
    fixed,
    children,
    ...props
  } = _ref2;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "container ".concat(fixed ? 'fixed' : '')
  }, props), children);
};
Header.Wrap = _ref3 => {
  let {
    children,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'wrap'
  }, props), children);
};
Header.Brand = _ref4 => {
  let {
    children,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'brand'
  }, props), children);
};
Header.Menu = _ref5 => {
  let {
    children,
    ...props
  } = _ref5;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'menu'
  }, props), children);
};
Header.Main = _ref6 => {
  let {
    children,
    ...props
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'main'
  }, props), children);
};

// Secondary Navigation

Header.SubNavigation = _ref7 => {
  let {
    fixed,
    children,
    ...props
  } = _ref7;
  const subNavigationRef = (0, _react.useRef)(null);
  const [isSticky, setIsSticky] = (0, _react.useState)(false);
  const [scrollPadding, setScrollPadding] = (0, _react.useState)(0);
  const updateContainerHeight = () => {
    const subNavigationRect = subNavigationRef.current.getBoundingClientRect();
    const subNavigationTop = subNavigationRect.top || 0;
    const subNavigationHeight = subNavigationRect.height || 0;
    const computedStyle = window.getComputedStyle(subNavigationRef.current);
    const marginTop = computedStyle.getPropertyValue('margin-top');
    const marginValue = parseFloat(marginTop);
    setScrollPadding(subNavigationRect.height + marginValue);
    setIsSticky(subNavigationTop <= 0);
    if (window.scrollY - subNavigationHeight - marginValue <= 0) {
      setIsSticky(false);
    }
  };
  (0, _react.useEffect)(() => {
    updateContainerHeight();
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', updateContainerHeight);
    }
    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('scroll', updateContainerHeight);
      }
    };
  }, []);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "sub-navigation-container ".concat(isSticky ? 'sticky' : '', " ").concat(fixed ? 'fixed' : '')
  }, props, {
    ref: subNavigationRef
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "sub-navigation-main ".concat(fixed ? 'fixed' : '')
  }, children)), isSticky && /*#__PURE__*/_react.default.createElement("div", {
    style: {
      marginBottom: "".concat(scrollPadding, "px")
    }
  }));
};

// Mobile Menu

Header.Mobile = _ref8 => {
  let {
    children,
    ...props
  } = _ref8;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'mobile-container'
  }, props), children);
};
Header.MobileBrand = _ref9 => {
  let {
    children,
    ...props
  } = _ref9;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'mobile-brand'
  }, props), children);
};
Header.MobileMenu = _ref10 => {
  let {
    children,
    ...props
  } = _ref10;
  const [scrollPadding, setScrollPadding] = (0, _react.useState)(0);
  const [menuOpen, setMenuOpen] = (0, _react.useState)(false);
  const toggleMobileMenu = () => {
    setMenuOpen(!menuOpen);
    const navigationElement = document.querySelector('.navigation');
    if (navigationElement) {
      const navigationHeight = navigationElement.offsetHeight;
      const windowHeight = window.innerHeight;
      setScrollPadding(windowHeight - navigationHeight);
    }
  };
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("div", {
    className: "mobile-button ".concat(menuOpen ? 'toggled' : ''),
    onClick: toggleMobileMenu
  }, menuOpen ? /*#__PURE__*/_react.default.createElement(_icons.Close, {
    size: 20
  }) : /*#__PURE__*/_react.default.createElement(_icons.Bars, {
    size: 20
  })), /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "mobile-menu ".concat(menuOpen ? 'toggled' : ''),
    style: {
      height: "".concat(scrollPadding, "px")
    }
  }, props, {
    onClick: toggleMobileMenu
  }), children));
};
var _default = exports.default = Header;