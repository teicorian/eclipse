"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireWildcard(require("react"));
var _reactRouterDom = require("react-router-dom");
var _icons = require("../../icons");
require("./Page.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); } // NavLink.js
const Page = _ref => {
  let {
    fullscreen,
    fixed,
    centered,
    max,
    children,
    ...props
  } = _ref;
  const maxWidth = [];
  if (max) {
    maxWidth.push("maxWidth--".concat(max));
  }
  const layout = [];
  if (fullscreen) {
    layout.push('fullscreen');
  }
  if (fixed) {
    layout.push('fixed');
  }
  if (centered) {
    layout.push('centered');
  }
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "page"
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "page-container ".concat(layout ? layout : '')
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "page-wrapper ".concat(max ? maxWidth : '')
  }, children)));
};
Page.Header = _ref2 => {
  let {
    fullscreen,
    fixed,
    centered,
    bg,
    border,
    children,
    ...props
  } = _ref2;
  const layout = [];
  if (fullscreen) {
    layout.push('fullscreen');
  }
  if (fixed) {
    layout.push('fixed');
  }
  if (centered) {
    layout.push('centered');
  }
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "page-header ".concat(bg ? 'bg' : '', " ").concat(border ? 'border' : '')
  }, /*#__PURE__*/_react.default.createElement("div", _extends({
    className: "page-header-wrap ".concat(layout ? layout : '')
  }, props), /*#__PURE__*/_react.default.createElement("h1", null, children)));
};
Page.Sidebar = _ref3 => {
  let {
    id,
    children,
    ...props
  } = _ref3;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'page-sidebar'
  }, props), _react.default.Children.map(children, child => /*#__PURE__*/_react.default.cloneElement(child, {
    id
  })));
};
Page.SidebarSection = _ref4 => {
  let {
    label,
    children,
    ...props
  } = _ref4;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'page-sidebar-section'
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: 'label'
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: 'section-content'
  }, children));
};
Page.SidebarSectionCollapse = _ref5 => {
  let {
    label,
    children,
    toggled,
    id,
    ...props
  } = _ref5;
  const {
    section
  } = (0, _reactRouterDom.useParams)();
  const [isCollapsed, setIsCollapsed] = (0, _react.useState)(() => {
    const toggleStore = localStorage.getItem("".concat(id, "Toggle"));
    return toggleStore ? JSON.parse(toggleStore)[label] : false;
  });
  if (toggled) {
    setIsCollapsed(true);
  }
  const handleToggleCollapse = () => {
    const toggleStore = localStorage.getItem("".concat(id, "Toggle"));
    const existingToggleStore = toggleStore ? JSON.parse(toggleStore) : {};
    existingToggleStore[label] = !isCollapsed;
    localStorage.setItem("".concat(id, "Toggle"), JSON.stringify(existingToggleStore));
    setIsCollapsed(!isCollapsed);
  };
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'page-sidebar-section-collapse'
  }, props), /*#__PURE__*/_react.default.createElement("div", {
    className: "section-collapse-wrap",
    onClick: handleToggleCollapse
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "label ".concat(isCollapsed ? 'collapse' : '')
  }, label), /*#__PURE__*/_react.default.createElement("div", {
    className: "toggle ".concat(isCollapsed ? 'collapse' : '')
  }, /*#__PURE__*/_react.default.createElement(_icons.Chevron, {
    size: 12
  }))), /*#__PURE__*/_react.default.createElement("div", {
    className: "section-content ".concat(isCollapsed ? 'collapse' : '')
  }, children));
};
Page.Body = _ref6 => {
  let {
    children,
    ...props
  } = _ref6;
  return /*#__PURE__*/_react.default.createElement("div", _extends({
    className: 'page-body'
  }, props), children);
};
var _default = exports.default = Page;