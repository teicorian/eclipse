"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var LogLevel = {
  DEBUG: 'debug',
  INFO: 'info',
  WARN: 'warn',
  ERROR: 'error'
};
var logger = function logger(level) {
  if (process.env.NODE_ENV === 'development') {
    var _console;
    for (var _len = arguments.length, messages = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      messages[_key - 1] = arguments[_key];
    }
    (_console = console).log.apply(_console, ["[".concat(level.toUpperCase(), "]")].concat(messages));
  }
};
logger.debug = function () {
  for (var _len2 = arguments.length, messages = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    messages[_key2] = arguments[_key2];
  }
  return logger.apply(void 0, [LogLevel.DEBUG].concat(messages));
};
logger.info = function () {
  for (var _len3 = arguments.length, messages = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    messages[_key3] = arguments[_key3];
  }
  return logger.apply(void 0, [LogLevel.INFO].concat(messages));
};
logger.warn = function () {
  for (var _len4 = arguments.length, messages = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
    messages[_key4] = arguments[_key4];
  }
  return logger.apply(void 0, [LogLevel.WARN].concat(messages));
};
logger.error = function () {
  for (var _len5 = arguments.length, messages = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
    messages[_key5] = arguments[_key5];
  }
  return logger.apply(void 0, [LogLevel.ERROR].concat(messages));
};
var _default = exports["default"] = logger;