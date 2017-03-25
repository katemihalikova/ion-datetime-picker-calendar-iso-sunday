(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("angular"));
	else if(typeof define === 'function' && define.amd)
		define(["angular"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("angular")) : factory(root["angular"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var calendar_1 = __webpack_require__(2);
var ISOSundayCalendar = (function (_super) {
    __extends(ISOSundayCalendar, _super);
    function ISOSundayCalendar() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.weekDays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
        return _this;
    }
    ISOSundayCalendar.prototype.getFirstWeekDayOfMonth = function (year, month) {
        return (_super.prototype.getFirstWeekDayOfMonth.call(this, year, month) + 1) % 7 || 7;
    };
    return ISOSundayCalendar;
}(calendar_1["default"]));
exports["default"] = ISOSundayCalendar;


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var angular = __webpack_require__(4);
var calendar_1 = __webpack_require__(0);
angular.module("ion-datetime-picker").service("$ionDtpCalendarIsoSunday", calendar_1["default"]);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
var ISOMondayCalendar = (function () {
    function ISOMondayCalendar() {
        this.months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
        this.weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];
        this.daysOfMonthCache = [];
    }
    ISOMondayCalendar.prototype.getMonthsOfYear = function () {
        return this.months;
    };
    ISOMondayCalendar.prototype.getDaysOfMonth = function (year, month) {
        if (this.daysOfMonthCache[year] && this.daysOfMonthCache[year][month]) {
            return this.daysOfMonthCache[year][month];
        }
        var firstWeekDay = this.getFirstWeekDayOfMonth(year, month);
        var daysInMonth = this.getNumberOfDaysInMonth(year, month);
        var result = [[]];
        for (var day = 1, weekDay = 1; day <= daysInMonth; weekDay++) {
            if (weekDay > 7) {
                weekDay = 1;
                result.push([]);
            }
            if (day === 1 && weekDay < firstWeekDay) {
                result[result.length - 1].push(null);
            }
            else {
                result[result.length - 1].push(day);
                day++;
            }
        }
        result[result.length - 1] = result[result.length - 1].concat([null, null, null, null, null, null]).slice(0, 7);
        this.daysOfMonthCache[year] = this.daysOfMonthCache[year] || [];
        this.daysOfMonthCache[year][month] = result;
        return result;
    };
    ISOMondayCalendar.prototype.getLabelOfDayOfMonth = function (year, month, day) {
        return String(day);
    };
    ISOMondayCalendar.prototype.getNumberOfDaysInMonth = function (year, month) {
        var date = new Date();
        date.setFullYear(year, month, 0);
        return date.getDate();
    };
    ISOMondayCalendar.prototype.getWeekDays = function () {
        return this.weekDays;
    };
    ISOMondayCalendar.prototype.getFirstWeekDayOfMonth = function (year, month) {
        var date = new Date();
        date.setFullYear(year, month - 1, 1);
        return date.getDay() || 7;
    };
    return ISOMondayCalendar;
}());
exports["default"] = ISOMondayCalendar;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var calendar_1 = __webpack_require__(0);
__webpack_require__(1);
module.exports = calendar_1["default"];


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});