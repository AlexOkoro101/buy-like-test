module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/profile/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/profile/index.js":
/*!********************************!*\
  !*** ./pages/profile/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Head_Meta__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/components/Head/Meta */ "./src/components/Head/Meta.js");
var _jsxFileName = "C:\\projects\\buylike-web\\pages\\profile\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Profile = () => {
  // Initial Tab state
  const {
    0: profileTab,
    1: setprofileTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  const {
    0: paymentsTab,
    1: setpaymentsTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: passwordTab,
    1: setpasswordTab
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: showModal,
    1: setshowModal
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false); //active tab

  const activateProfile = () => {
    setprofileTab(true);
    setpaymentsTab(false);
    setpasswordTab(false);
  };

  const activatePayment = () => {
    setpaymentsTab(true);
    setprofileTab(false);
    setpasswordTab(false);
  };

  const activatePassword = () => {
    setpasswordTab(true);
    setpaymentsTab(false);
    setprofileTab(false);
  };

  const openModal = () => {
    setshowModal(true);
  };

  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(_src_components_Head_Meta__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx("main", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }, __jsx("div", {
    className: "flex main pt-20 pb-32",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "mx-auto overflow-hidden lg:border md:shadow-md md:rounded-md md:flex  lg:mt-5 container-main bg-white",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 21
    }
  }, __jsx("aside", {
    className: "hidden md:grid  profile-sidebar lg:grid auto-rows-min justify-items-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 25
    }
  }, __jsx("span", {
    className: "inline-block relative mt-20",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 29
    }
  }, __jsx("img", {
    className: "h-28",
    src: "./../assets/img/vectors/user.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 33
    }
  }), __jsx("i", {
    className: "bg-blue-500 fill-current text-white p-1 rounded-full h-6 absolute top-1 right-2 fa fa-pencil",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 33
    }
  })), __jsx("div", {
    id: "side",
    className: "w-full mt-8",
    oncl: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 29
    }
  }, __jsx("button", {
    onClick: activateProfile,
    className: "head w-full py-3.5 pl-10 flex items-center " + (profileTab ? "changeStyle" : ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "fa fa-user",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 37
    }
  }), __jsx("span", {
    className: "ml-1.5 text-sm font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 37
    }
  }, "Profile")), __jsx("button", {
    onClick: activatePayment,
    className: "head w-full py-3.5 pl-10 flex items-center " + (paymentsTab ? "changeStyle" : ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "fa fa-credit-card-alt",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 37
    }
  }), __jsx("span", {
    className: "ml-1.5 text-sm font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 37
    }
  }, "Payments")), __jsx("button", {
    onClick: activatePassword,
    className: "head w-full py-3.5 pl-10 flex items-center " + (passwordTab ? "changeStyle" : ""),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 33
    }
  }, __jsx("i", {
    className: "fa fa-lock",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 37
    }
  }), __jsx("span", {
    className: "ml-1.5 text-sm font-medium",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 37
    }
  }, "Password")))), __jsx("section", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "lg:py-10 mx-auto",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 29
    }
  }, __jsx("div", {
    className: "border-b border-gray-200 lg:border-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69,
      columnNumber: 33
    }
  }), profileTab && __jsx("div", {
    id: "profile",
    className: "meg px-5 md:px-20 lg:px-32",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 37
    }
  }, __jsx("form", {
    className: "px-5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "flex flex-col items-center md:grid md:grid-cols-6 gap-6 font-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 45
    }
  }, __jsx("h2", {
    className: "py-1 lg:px-0 text-xl col-span-6 w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79,
      columnNumber: 49
    }
  }, "Profile"), __jsx("div", {
    className: "py-7 col-span-6 md:hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82,
      columnNumber: 49
    }
  }, __jsx("span", {
    className: "inline-block relative",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 53
    }
  }, __jsx("img", {
    className: "h-28",
    src: "./../assets/img/vectors/user.svg",
    alt: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 57
    }
  }), __jsx("i", {
    className: "bg-blue-500 fill-current text-white p-1 rounded-full h-6 absolute top-1 right-2 fa fa-pencil",
    "aria-hidden": "true",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 57
    }
  })), __jsx("button", {
    className: "block p-4 bg-blue-50 border border-dashed border-blue-400 text-blue-500 mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 53
    }
  }, "Edit Profile Image")), __jsx("span", {
    className: "border-b-4 border-gray-100 w-full md:hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: "col-span-3 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94,
      columnNumber: 49
    }
  }, __jsx("label", {
    for: "first_name",
    className: "block font-10 font-medium pb-1 sec-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 53
    }
  }, "First name"), __jsx("input", {
    type: "text",
    id: "first_name",
    placeholder: "Enter your first name",
    className: "mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "col-span-3 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 49
    }
  }, __jsx("label", {
    for: "last_name",
    className: "block font-10 font-medium pb-1 sec-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 53
    }
  }, "Last name"), __jsx("input", {
    type: "text",
    id: "last_name",
    placeholder: "Enter your last name",
    className: "mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "col-span-3 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107,
      columnNumber: 49
    }
  }, __jsx("label", {
    for: "phone",
    className: "block font-10 font-medium pb-1 sec-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 53
    }
  }, "Phone Number"), __jsx("input", {
    type: "tel",
    id: "phone",
    placeholder: "Enter your phone number",
    className: "mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "col-span-3 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113,
      columnNumber: 49
    }
  }, __jsx("label", {
    for: "phone",
    className: "block font-10 font-medium pb-1 sec-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114,
      columnNumber: 53
    }
  }, "Email Address"), __jsx("input", {
    type: "email",
    id: "email",
    placeholder: "Enter your email address",
    className: "mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 53
    }
  })), __jsx("span", {
    className: "border-b-4 border-gray-100 w-full md:hidden",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 49
    }
  }), __jsx("div", {
    className: "col-span-3 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 49
    }
  }, __jsx("label", {
    for: "country",
    className: "block font-10 font-medium pb-1 sec-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 53
    }
  }, "Country"), __jsx("select", {
    id: "country",
    className: "mt-1 block w-full py-2 px-3 profile-control bg-white  focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 53
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127,
      columnNumber: 57
    }
  }, "Select Country"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128,
      columnNumber: 57
    }
  }, "Canada"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129,
      columnNumber: 57
    }
  }, "Mexico"))), __jsx("div", {
    className: "col-span-6 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 49
    }
  }, __jsx("label", {
    for: "address_one",
    className: "block font-10 font-medium pb-1 sec-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134,
      columnNumber: 53
    }
  }, "Address Line 1"), __jsx("input", {
    type: "text",
    id: "address_one",
    className: "mt-1 block w-full py-2 px-3 bg-white profile-control focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "col-span-6 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140,
      columnNumber: 49
    }
  }, __jsx("label", {
    for: "address_two",
    className: "block font-10 font-medium pb-1 sec-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141,
      columnNumber: 53
    }
  }, "Address Line 2"), __jsx("input", {
    type: "text",
    id: "address_two",
    className: "mt-1 block w-full py-2 px-3 bg-white profile-control focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "col-span-2 w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147,
      columnNumber: 49
    }
  }, __jsx("label", {
    for: "city",
    className: "block font-10 font-medium pb-1 sec-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148,
      columnNumber: 53
    }
  }, "City"), __jsx("input", {
    type: "text",
    id: "city",
    placeholder: "Enter city",
    className: "mt-1 block w-full py-2 px-3 bg-white profile-control focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "col-span-2 w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153,
      columnNumber: 49
    }
  }, __jsx("label", {
    for: "province",
    className: "block font-10 font-medium pb-1 sec-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 154,
      columnNumber: 53
    }
  }, "State / Province"), __jsx("select", {
    id: "province",
    className: "mt-1 block w-full py-2 px-3 profile-control bg-white focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 156,
      columnNumber: 53
    }
  }, __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 158,
      columnNumber: 57
    }
  }, "United States"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 57
    }
  }, "Canada"), __jsx("option", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160,
      columnNumber: 57
    }
  }, "Mexico"))), __jsx("div", {
    className: "col-span-2 w-full ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 164,
      columnNumber: 49
    }
  }, __jsx("label", {
    for: "postal_code",
    className: "block font-10 font-medium pb-1 sec-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 165,
      columnNumber: 53
    }
  }, "ZIP / Postal"), __jsx("input", {
    type: "text",
    id: "postal_code",
    placeholder: "Enter Zipcode",
    className: "mt-1 block w-full py-2 px-3 bg-white profile-control focus:outline-none",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167,
      columnNumber: 53
    }
  }))), __jsx("div", {
    className: "flex justify-center mt-6 mb-16",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 172,
      columnNumber: 45
    }
  }, __jsx("button", {
    type: "button",
    className: "uppercase focus:outline-none primary-btn text-white font-10 font-medium mt-4 py-1.5 px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 173,
      columnNumber: 49
    }
  }, "save"), __jsx("button", {
    type: "button",
    className: "uppercase focus:outline-none primary-red font-10 font-medium mt-4 py-1.5 px-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 177,
      columnNumber: 49
    }
  }, "cancel")))), paymentsTab && __jsx("div", {
    id: "payment",
    className: "meg pb-64 px-0 md:px-16 lg:px-24",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192,
      columnNumber: 37
    }
  }, __jsx("h2", {
    className: "py-1 lg:px-0 text-xl col-span-6 w-full  primary-black ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193,
      columnNumber: 41
    }
  }, "Payment Settings"), __jsx("div", {
    className: "profile-holder mt-4 py-3.5 px-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 196,
      columnNumber: 41
    }
  }, __jsx("p", {
    className: "mb-5 text-sm primary-black pt-1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 45
    }
  }, "Saved Cards"), __jsx("div", {
    className: "flex flex-wrap",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200,
      columnNumber: 45
    }
  }, __jsx("div", {
    className: "text-xs mr-3 md:mr-6 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "card-holder p-3.5 mb-2 grid place-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 53
    }
  }, __jsx("p", {
    className: "mb-10 primary-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 203,
      columnNumber: 57
    }
  }, "**** **** **** 1234"), __jsx("p", {
    className: "font-10 primary-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 204,
      columnNumber: 57
    }
  }, "My online shopping card")), __jsx("p", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 206,
      columnNumber: 53
    }
  }, __jsx("a", {
    className: "font-11 primary-blue",
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 207,
      columnNumber: 57
    }
  }, "Edit card details"))), __jsx("div", {
    className: "text-xs mr-3 md:mr-6 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 211,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "card-holder p-3.5 mb-2 grid place-content-between",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 53
    }
  }, __jsx("p", {
    className: "mb-10 primary-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 213,
      columnNumber: 57
    }
  }, "**** **** **** 1234"), __jsx("p", {
    className: "font-10 primary-black",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 214,
      columnNumber: 57
    }
  }, "Alternate shopping card")), __jsx("p", {
    className: "text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 216,
      columnNumber: 53
    }
  }, __jsx("a", {
    className: "font-11 primary-blue",
    href: "#",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 217,
      columnNumber: 57
    }
  }, "Edit card details"))), __jsx("div", {
    id: "myBtn",
    onClick: openModal,
    className: "text-xs cursor-pointer mr-3 md:mr-6 mb-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 220,
      columnNumber: 49
    }
  }, __jsx("div", {
    className: "add-new-card p-3.5 mb-3 grid place-content-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 222,
      columnNumber: 53
    }
  }, __jsx("p", {
    className: "mb-3 text-blue-600 text-5xl text-center",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 223,
      columnNumber: 57
    }
  }, "+"), __jsx("p", {
    className: "text-blue-600",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224,
      columnNumber: 57
    }
  }, "Add a new card")))))), passwordTab && __jsx("div", {
    id: "password",
    className: "meg",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 238,
      columnNumber: 37
    }
  }, __jsx("form", {
    action: "",
    className: "px-32 pb-64",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 239,
      columnNumber: 41
    }
  }, __jsx("div", {
    className: "flex flex-col items-center md:grid md:grid-cols-6 gap-5 font-11 w-1/2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 240,
      columnNumber: 45
    }
  }, __jsx("h2", {
    className: "py-1 lg:px-0 text-xl col-span-6 w-full  primary-black ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241,
      columnNumber: 49
    }
  }, "Password Settings"), __jsx("div", {
    className: "col-span-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244,
      columnNumber: 49
    }
  }, __jsx("label", {
    className: "block pb-1 font-10 font-medium sec-black",
    for: "password",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 245,
      columnNumber: 53
    }
  }, "Enter current password"), __jsx("input", {
    id: "password",
    className: "px-3 profile-control focus:outline-none w-full",
    type: "password",
    placeholder: "*******",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 248,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "col-span-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 252,
      columnNumber: 49
    }
  }, __jsx("label", {
    className: "block pb-1 font-10 font-medium sec-black ",
    for: "newPassword",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 253,
      columnNumber: 53
    }
  }, "Enter new password"), __jsx("input", {
    id: "newPassword",
    className: "px-3 profile-control focus:outline-none w-full",
    type: "password",
    placeholder: "*******",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 256,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "col-span-6",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 260,
      columnNumber: 49
    }
  }, __jsx("label", {
    className: "block pb-1 font-10 font-medium sec-black ",
    for: "confirm",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 261,
      columnNumber: 53
    }
  }, "Confirm new password"), __jsx("input", {
    id: "confirm",
    className: "px-3 profile-control focus:outline-none w-full",
    type: "password",
    placeholder: "*******",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 264,
      columnNumber: 53
    }
  })), __jsx("div", {
    className: "col-span-6 place-self-center mt-3",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 268,
      columnNumber: 49
    }
  }, __jsx("button", {
    className: "primary-btn text-white font-10 font-semibold focus:outline-none px-4 py-1.5",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 269,
      columnNumber: 53
    }
  }, "SAVE PASSWORD")))))))))), showModal && __jsx("div", {
    id: "myModal",
    className: "modal",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 290,
      columnNumber: 17
    }
  }, __jsx("div", {
    className: "modal-content relative w-10/12 lg:w-1/3 mx-auto mx-8 md:px-0 md:mt-28 md:px-20 md:py-10",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 292,
      columnNumber: 21
    }
  }, __jsx("span", {
    onClick: () => {
      setshowModal(false);
    },
    className: "close absolute right-5 top-1 text-4xl text-gray-500",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 293,
      columnNumber: 25
    }
  }, "\xD7"), __jsx("form", {
    action: "",
    className: "font-11 grid grid-cols-6 gap-2 mx-6 py-10 md:mx-0 md:py-0",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 295,
      columnNumber: 25
    }
  }, __jsx("div", {
    className: "col-span-6 mb-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 296,
      columnNumber: 29
    }
  }, __jsx("label", {
    className: "block pb-1.5 font-10 primary-black",
    for: "card_number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 297,
      columnNumber: 33
    }
  }, " Card Number "), __jsx("input", {
    id: "card_number",
    className: "profile-control focus:outline-none p-2 w-full",
    type: "text",
    placeholder: "Enter your 12 or 16 digit card number",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 298,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "col-span-6  ",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 301,
      columnNumber: 29
    }
  }), __jsx("div", {
    className: "col-span-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 305,
      columnNumber: 29
    }
  }, __jsx("select", {
    className: "bg-white profile-control focus:outline-none p-2 col-span-2 w-full",
    name: "",
    id: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 306,
      columnNumber: 33
    }
  }, __jsx("option", {
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 307,
      columnNumber: 37
    }
  }, "Month"))), __jsx("div", {
    className: "col-span-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 311,
      columnNumber: 29
    }
  }, __jsx("select", {
    className: "bg-white profile-control focus:outline-none p-2 col-span-2 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 312,
      columnNumber: 33
    }
  }, __jsx("option", {
    value: "",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 313,
      columnNumber: 37
    }
  }, "Year"))), __jsx("div", {
    className: "col-span-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 317,
      columnNumber: 29
    }
  }, __jsx("input", {
    type: "text",
    placeholder: "CVV",
    autocomplete: "postal-code",
    className: "bg-white focus:outline-none profile-control p-2 col-span-2 w-full",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 318,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "col-span-6 mt-2",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 321,
      columnNumber: 29
    }
  }, __jsx("label", {
    className: "block font-10 primary-black pb-1.5",
    for: "cardName",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 322,
      columnNumber: 33
    }
  }, " Card Name "), __jsx("input", {
    className: "profile-control focus:outline-none p-2 w-full",
    type: "text",
    placeholder: "Add a name to help you identify this card",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 323,
      columnNumber: 33
    }
  })), __jsx("div", {
    className: "col-span-6 place-self-center mt-4",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 326,
      columnNumber: 29
    }
  }, __jsx("button", {
    type: "button",
    className: "focus:outline-none primary-btn font-10 font-semibold text-white py-1.5 px-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 327,
      columnNumber: 33
    }
  }, "ADD CARD"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Profile);

/***/ }),

/***/ "./src/components/Head/Meta.js":
/*!*************************************!*\
  !*** ./src/components/Head/Meta.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\projects\\buylike-web\\src\\components\\Head\\Meta.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Meta = ({
  title,
  keywords,
  description
}) => {
  return __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4,
      columnNumber: 9
    }
  }, __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "keywords",
    content: keywords,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 13
    }
  }), __jsx("meta", {
    name: "description",
    content: description,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }
  }), __jsx("meta", {
    charSet: "utf-8",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "icon",
    href: "../../public/favicon.ico",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "stylesheet",
    href: "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    charSet: "UTF-8",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }
  }), __jsx("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }
  }), __jsx("script", {
    src: "https://cdnjs.cloudflare.com/ajax/libs/waypoints/4.0.1/noframework.waypoints.min.js",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 13
    }
  }), __jsx("title", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, title));
};

Meta.defaultProps = {
  title: "BuyLike Delears",
  keywords: "cars, vechiles, motocycles",
  description: "Buy cars like dealears with ease"
};
/* harmony default export */ __webpack_exports__["default"] = (Meta);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcHJvZmlsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9IZWFkL01ldGEuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJQcm9maWxlIiwicHJvZmlsZVRhYiIsInNldHByb2ZpbGVUYWIiLCJ1c2VTdGF0ZSIsInBheW1lbnRzVGFiIiwic2V0cGF5bWVudHNUYWIiLCJwYXNzd29yZFRhYiIsInNldHBhc3N3b3JkVGFiIiwic2hvd01vZGFsIiwic2V0c2hvd01vZGFsIiwiYWN0aXZhdGVQcm9maWxlIiwiYWN0aXZhdGVQYXltZW50IiwiYWN0aXZhdGVQYXNzd29yZCIsIm9wZW5Nb2RhbCIsIk1ldGEiLCJ0aXRsZSIsImtleXdvcmRzIiwiZGVzY3JpcHRpb24iLCJkZWZhdWx0UHJvcHMiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQ0E7O0FBRUEsTUFBTUEsT0FBTyxHQUFHLE1BQU07QUFDbEI7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJDLHNEQUFRLENBQUMsSUFBRCxDQUE1QztBQUNBLFFBQU07QUFBQSxPQUFDQyxXQUFEO0FBQUEsT0FBY0M7QUFBZCxNQUFnQ0Ysc0RBQVEsQ0FBQyxLQUFELENBQTlDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFdBQUQ7QUFBQSxPQUFjQztBQUFkLE1BQWdDSixzREFBUSxDQUFDLEtBQUQsQ0FBOUM7QUFFQSxRQUFNO0FBQUEsT0FBQ0ssU0FBRDtBQUFBLE9BQVlDO0FBQVosTUFBNEJOLHNEQUFRLENBQUMsS0FBRCxDQUExQyxDQU5rQixDQVNsQjs7QUFDQSxRQUFNTyxlQUFlLEdBQUcsTUFBTTtBQUMxQlIsaUJBQWEsQ0FBQyxJQUFELENBQWI7QUFDQUcsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUUsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDSCxHQUpEOztBQUtBLFFBQU1JLGVBQWUsR0FBRyxNQUFNO0FBQzFCTixrQkFBYyxDQUFDLElBQUQsQ0FBZDtBQUNBSCxpQkFBYSxDQUFDLEtBQUQsQ0FBYjtBQUNBSyxrQkFBYyxDQUFDLEtBQUQsQ0FBZDtBQUNILEdBSkQ7O0FBS0EsUUFBTUssZ0JBQWdCLEdBQUcsTUFBTTtBQUMzQkwsa0JBQWMsQ0FBQyxJQUFELENBQWQ7QUFDQUYsa0JBQWMsQ0FBQyxLQUFELENBQWQ7QUFDQUgsaUJBQWEsQ0FBQyxLQUFELENBQWI7QUFDSCxHQUpEOztBQU1BLFFBQU1XLFNBQVMsR0FBRyxNQUFNO0FBQ3BCSixnQkFBWSxDQUFDLElBQUQsQ0FBWjtBQUNILEdBRkQ7O0FBS0EsU0FDSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsdUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksYUFBUyxFQUFDLHVHQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FHSTtBQUFPLGFBQVMsRUFBQyw0RUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sYUFBUyxFQUFDLDZCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsTUFBZjtBQUFzQixPQUFHLEVBQUMsa0NBQTFCO0FBQTZELE9BQUcsRUFBQyxFQUFqRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFHLGFBQVMsRUFBQyw4RkFBYjtBQUNJLG1CQUFZLE1BRGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFGSixDQURKLEVBT0k7QUFBSyxNQUFFLEVBQUMsTUFBUjtBQUFlLGFBQVMsRUFBQyxhQUF6QjtBQUF1QyxRQUFJLE1BQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLFdBQU8sRUFBRUMsZUFBakI7QUFBa0MsYUFBUyxFQUFFLGlEQUFpRFQsVUFBVSxHQUFHLGFBQUgsR0FBbUIsRUFBOUUsQ0FBN0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLFlBQWI7QUFBMEIsbUJBQVksTUFBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBTSxhQUFTLEVBQUMsNEJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGSixDQURKLEVBS0k7QUFBUSxXQUFPLEVBQUVVLGVBQWpCO0FBQWtDLGFBQVMsRUFBRSxpREFBaURQLFdBQVcsR0FBRyxhQUFILEdBQW1CLEVBQS9FLENBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyx1QkFBYjtBQUFxQyxtQkFBWSxNQUFqRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFNLGFBQVMsRUFBQyw0QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixDQUxKLEVBU0k7QUFBUSxXQUFPLEVBQUVRLGdCQUFqQjtBQUFtQyxhQUFTLEVBQUUsaURBQWlETixXQUFXLEdBQUcsYUFBSCxHQUFtQixFQUEvRSxDQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsWUFBYjtBQUEwQixtQkFBWSxNQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosRUFFSTtBQUFNLGFBQVMsRUFBQyw0QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFGSixDQVRKLENBUEosQ0FISixFQTJCSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsa0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLHNDQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQU1RTCxVQUFVLElBRVY7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixhQUFTLEVBQUMsNEJBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyxNQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsaUVBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLHlDQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESixFQUlJO0FBQUssYUFBUyxFQUFDLDJCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLGFBQVMsRUFBQyx1QkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUssYUFBUyxFQUFDLE1BQWY7QUFBc0IsT0FBRyxFQUFDLGtDQUExQjtBQUE2RCxPQUFHLEVBQUMsRUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBRUk7QUFBRyxhQUFTLEVBQUMsOEZBQWI7QUFDSSxtQkFBWSxNQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FESixFQU1JO0FBQ0ksYUFBUyxFQUFDLDhFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBTkosQ0FKSixFQWVJO0FBQU0sYUFBUyxFQUFDLDZDQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZkosRUFnQkk7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sT0FBRyxFQUFDLFlBQVg7QUFBd0IsYUFBUyxFQUFDLDBDQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURKLEVBR0k7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFFLEVBQUMsWUFBdEI7QUFBbUMsZUFBVyxFQUFDLHVCQUEvQztBQUNJLGFBQVMsRUFBQywwRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FoQkosRUF1Qkk7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sT0FBRyxFQUFDLFdBQVg7QUFBdUIsYUFBUyxFQUFDLDBDQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLEVBR0k7QUFBTyxRQUFJLEVBQUMsTUFBWjtBQUFtQixNQUFFLEVBQUMsV0FBdEI7QUFBa0MsZUFBVyxFQUFDLHNCQUE5QztBQUNJLGFBQVMsRUFBQywwRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0F2QkosRUE2Qkk7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sT0FBRyxFQUFDLE9BQVg7QUFBbUIsYUFBUyxFQUFDLDBDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQURKLEVBR0k7QUFBTyxRQUFJLEVBQUMsS0FBWjtBQUFrQixNQUFFLEVBQUMsT0FBckI7QUFBNkIsZUFBVyxFQUFDLHlCQUF6QztBQUNJLGFBQVMsRUFBQywwRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0E3QkosRUFtQ0k7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sT0FBRyxFQUFDLE9BQVg7QUFBbUIsYUFBUyxFQUFDLDBDQUE3QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBR0k7QUFBTyxRQUFJLEVBQUMsT0FBWjtBQUFvQixNQUFFLEVBQUMsT0FBdkI7QUFBK0IsZUFBVyxFQUFDLDBCQUEzQztBQUNJLGFBQVMsRUFBQywwRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0FuQ0osRUEwQ0k7QUFBTSxhQUFTLEVBQUMsNkNBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUExQ0osRUE0Q0k7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sT0FBRyxFQUFDLFNBQVg7QUFDSSxhQUFTLEVBQUMsMENBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLEVBR0k7QUFBUSxNQUFFLEVBQUMsU0FBWDtBQUNJLGFBQVMsRUFBQywwRUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixDQUhKLENBNUNKLEVBdURJO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLE9BQUcsRUFBQyxhQUFYO0FBQ0ksYUFBUyxFQUFDLDBDQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBREosRUFHSTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLE1BQUUsRUFBQyxhQUF0QjtBQUNJLGFBQVMsRUFBQyx5RUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0F2REosRUE4REk7QUFBSyxhQUFTLEVBQUMsbUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sT0FBRyxFQUFDLGFBQVg7QUFDSSxhQUFTLEVBQUMsMENBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFESixFQUdJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBRSxFQUFDLGFBQXRCO0FBQ0ksYUFBUyxFQUFDLHlFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFISixDQTlESixFQXFFSTtBQUFLLGFBQVMsRUFBQyxvQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxPQUFHLEVBQUMsTUFBWDtBQUFrQixhQUFTLEVBQUMsMENBQTVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixFQUVJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBRSxFQUFDLE1BQXRCO0FBQTZCLGVBQVcsRUFBQyxZQUF6QztBQUNJLGFBQVMsRUFBQyx5RUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0FyRUosRUEyRUk7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sT0FBRyxFQUFDLFVBQVg7QUFBc0IsYUFBUyxFQUFDLDBDQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURKLEVBR0k7QUFBUSxNQUFFLEVBQUMsVUFBWDtBQUNJLGFBQVMsRUFBQyx5RUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FISixFQUlJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FKSixDQUhKLENBM0VKLEVBc0ZJO0FBQUssYUFBUyxFQUFDLG9CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLE9BQUcsRUFBQyxhQUFYO0FBQXlCLGFBQVMsRUFBQywwQ0FBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFESixFQUdJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsTUFBRSxFQUFDLGFBQXRCO0FBQW9DLGVBQVcsRUFBQyxlQUFoRDtBQUNJLGFBQVMsRUFBQyx5RUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSEosQ0F0RkosQ0FESixFQStGSTtBQUFLLGFBQVMsRUFBQyxnQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxRQUFJLEVBQUMsUUFBYjtBQUNJLGFBQVMsRUFBQywwRkFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosRUFLSTtBQUFRLFFBQUksRUFBQyxRQUFiO0FBQ0ksYUFBUyxFQUFDLCtFQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FMSixDQS9GSixDQURKLENBUlIsRUEwSFFHLFdBQVcsSUFFWDtBQUFLLE1BQUUsRUFBQyxTQUFSO0FBQWtCLGFBQVMsRUFBQyxrQ0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUksYUFBUyxFQUFDLHdEQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBREosRUFJSTtBQUFLLGFBQVMsRUFBQyxrQ0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMsaUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFESixFQUlJO0FBQUssYUFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsbURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosRUFFSTtBQUFHLGFBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZKLENBREosRUFLSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxzQkFBYjtBQUFvQyxRQUFJLEVBQUMsR0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixDQUxKLENBREosRUFXSTtBQUFLLGFBQVMsRUFBQywyQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsbURBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQUcsYUFBUyxFQUFDLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosRUFFSTtBQUFHLGFBQVMsRUFBQyx1QkFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZKLENBREosRUFLSTtBQUFHLGFBQVMsRUFBQyxhQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFHLGFBQVMsRUFBQyxzQkFBYjtBQUFvQyxRQUFJLEVBQUMsR0FBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixDQUxKLENBWEosRUFvQkk7QUFBSyxNQUFFLEVBQUMsT0FBUjtBQUFnQixXQUFPLEVBQUVTLFNBQXpCO0FBQ0ksYUFBUyxFQUFDLDBDQURkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSTtBQUFLLGFBQVMsRUFBQyxtREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBRyxhQUFTLEVBQUMseUNBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxTQURKLEVBRUk7QUFBRyxhQUFTLEVBQUMsZUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLENBRkosQ0FwQkosQ0FKSixDQUpKLENBNUhSLEVBd0tRUCxXQUFXLElBRVg7QUFBSyxNQUFFLEVBQUMsVUFBUjtBQUFtQixhQUFTLEVBQUMsS0FBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU0sVUFBTSxFQUFDLEVBQWI7QUFBZ0IsYUFBUyxFQUFDLGFBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyx1RUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSSxhQUFTLEVBQUMsd0RBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixFQUlJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBUyxFQUFDLDBDQUFqQjtBQUE0RCxPQUFHLEVBQUMsVUFBaEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw4QkFESixFQUlJO0FBQU8sTUFBRSxFQUFDLFVBQVY7QUFBcUIsYUFBUyxFQUFDLGdEQUEvQjtBQUNJLFFBQUksRUFBQyxVQURUO0FBQ29CLGVBQVcsRUFBQyxTQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FKSixFQVlJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sYUFBUyxFQUFDLDJDQUFqQjtBQUE2RCxPQUFHLEVBQUMsYUFBakU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFESixFQUlJO0FBQU8sTUFBRSxFQUFDLGFBQVY7QUFBd0IsYUFBUyxFQUFDLGdEQUFsQztBQUNJLFFBQUksRUFBQyxVQURUO0FBQ29CLGVBQVcsRUFBQyxTQURoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBSkosQ0FaSixFQW9CSTtBQUFLLGFBQVMsRUFBQyxZQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLGFBQVMsRUFBQywyQ0FBakI7QUFBNkQsT0FBRyxFQUFDLFNBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNEJBREosRUFJSTtBQUFPLE1BQUUsRUFBQyxTQUFWO0FBQW9CLGFBQVMsRUFBQyxnREFBOUI7QUFDSSxRQUFJLEVBQUMsVUFEVDtBQUNvQixlQUFXLEVBQUMsU0FEaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpKLENBcEJKLEVBNEJJO0FBQUssYUFBUyxFQUFDLG1DQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUNJLGFBQVMsRUFBQyw2RUFEZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLENBNUJKLENBREosQ0FESixDQTFLUixDQURKLENBM0JKLENBREosQ0FESixDQUZKLEVBNFBRRSxTQUFTLElBRVQ7QUFBSyxNQUFFLEVBQUMsU0FBUjtBQUFrQixhQUFTLEVBQUMsT0FBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUVJO0FBQUssYUFBUyxFQUFDLHlGQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFNLFdBQU8sRUFBRSxNQUFNO0FBQUNDLGtCQUFZLENBQUMsS0FBRCxDQUFaO0FBQW9CLEtBQTFDO0FBQTRDLGFBQVMsRUFBQyxxREFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURKLEVBR0k7QUFBTSxVQUFNLEVBQUMsRUFBYjtBQUFnQixhQUFTLEVBQUMsMkRBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFLLGFBQVMsRUFBQyxpQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBTyxhQUFTLEVBQUMsb0NBQWpCO0FBQXNELE9BQUcsRUFBQyxhQUExRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKLEVBRUk7QUFBTyxNQUFFLEVBQUMsYUFBVjtBQUF3QixhQUFTLEVBQUMsK0NBQWxDO0FBQWtGLFFBQUksRUFBQyxNQUF2RjtBQUNJLGVBQVcsRUFBQyx1Q0FEaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZKLENBREosRUFNSTtBQUFLLGFBQVMsRUFBQyxjQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFOSixFQVVJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsYUFBUyxFQUFDLG1FQUFsQjtBQUFzRixRQUFJLEVBQUMsRUFBM0Y7QUFBOEYsTUFBRSxFQUFDLEVBQWpHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLFNBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFESixDQURKLENBVkosRUFnQkk7QUFBSyxhQUFTLEVBQUMsWUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBUSxhQUFTLEVBQUMsbUVBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFRLFNBQUssRUFBQyxFQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixDQURKLENBaEJKLEVBc0JJO0FBQUssYUFBUyxFQUFDLFlBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQU8sUUFBSSxFQUFDLE1BQVo7QUFBbUIsZUFBVyxFQUFDLEtBQS9CO0FBQXFDLGdCQUFZLEVBQUMsYUFBbEQ7QUFDSSxhQUFTLEVBQUMsbUVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBdEJKLEVBMEJJO0FBQUssYUFBUyxFQUFDLGlCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSTtBQUFPLGFBQVMsRUFBQyxvQ0FBakI7QUFBc0QsT0FBRyxFQUFDLFVBQTFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosRUFFSTtBQUFPLGFBQVMsRUFBQywrQ0FBakI7QUFBaUUsUUFBSSxFQUFDLE1BQXRFO0FBQ0ksZUFBVyxFQUFDLDJDQURoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkosQ0ExQkosRUErQkk7QUFBSyxhQUFTLEVBQUMsbUNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQVEsUUFBSSxFQUFDLFFBQWI7QUFDSSxhQUFTLEVBQUMsNkVBRGQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFESixDQS9CSixDQUhKLENBRkosQ0E5UFIsQ0FESjtBQWdUSCxDQS9VRDs7QUFpVmVULHNFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcFZBOztBQUNBLE1BQU1jLElBQUksR0FBRyxDQUFDO0FBQUVDLE9BQUY7QUFBU0MsVUFBVDtBQUFtQkM7QUFBbkIsQ0FBRCxLQUFzQztBQUMvQyxTQUNJLE1BQUMsZ0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJO0FBQ0ksUUFBSSxFQUFDLFVBRFQ7QUFFSSxXQUFPLEVBQUMscUNBRlo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLEVBS0k7QUFBTSxRQUFJLEVBQUMsVUFBWDtBQUFzQixXQUFPLEVBQUVELFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMSixFQU1JO0FBQU0sUUFBSSxFQUFDLGFBQVg7QUFBeUIsV0FBTyxFQUFFQyxXQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBTkosRUFPSTtBQUFNLFdBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFQSixFQVFJO0FBQU0sT0FBRyxFQUFDLE1BQVY7QUFBaUIsUUFBSSxFQUFDLDBCQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBUkosRUFVSTtBQUNJLE9BQUcsRUFBQyxZQURSO0FBRUksUUFBSSxFQUFDLHdEQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFWSixFQWdCSTtBQUNJLE9BQUcsRUFBQyxZQURSO0FBRUksUUFBSSxFQUFDLG9GQUZUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFoQkosRUFxQkk7QUFDSSxPQUFHLEVBQUMsWUFEUjtBQUVJLFFBQUksRUFBQyxVQUZUO0FBR0ksV0FBTyxFQUFDLE9BSFo7QUFJSSxRQUFJLEVBQUMsMkVBSlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQXJCSixFQTJCSTtBQUNJLE9BQUcsRUFBQyxZQURSO0FBRUksUUFBSSxFQUFDLFVBRlQ7QUFHSSxRQUFJLEVBQUMsaUZBSFQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQTNCSixFQWdDSTtBQUFRLE9BQUcsRUFBQyxxRkFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBaENKLEVBaUNJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBUUYsS0FBUixDQWpDSixDQURKO0FBcUNILENBdENEOztBQXdDQUQsSUFBSSxDQUFDSSxZQUFMLEdBQW9CO0FBQ2hCSCxPQUFLLEVBQUUsaUJBRFM7QUFFaEJDLFVBQVEsRUFBRSw0QkFGTTtBQUdoQkMsYUFBVyxFQUFFO0FBSEcsQ0FBcEI7QUFNZUgsbUVBQWYsRTs7Ozs7Ozs7Ozs7QUMvQ0Esc0M7Ozs7Ozs7Ozs7O0FDQUEsa0MiLCJmaWxlIjoicGFnZXMvcHJvZmlsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvcHJvZmlsZS9pbmRleC5qc1wiKTtcbiIsImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBNZXRhIGZyb20gXCIuLi8uLi9zcmMvY29tcG9uZW50cy9IZWFkL01ldGFcIjtcclxuXHJcbmNvbnN0IFByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICAvLyBJbml0aWFsIFRhYiBzdGF0ZVxyXG4gICAgY29uc3QgW3Byb2ZpbGVUYWIsIHNldHByb2ZpbGVUYWJdID0gdXNlU3RhdGUodHJ1ZSlcclxuICAgIGNvbnN0IFtwYXltZW50c1RhYiwgc2V0cGF5bWVudHNUYWJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgICBjb25zdCBbcGFzc3dvcmRUYWIsIHNldHBhc3N3b3JkVGFiXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IFtzaG93TW9kYWwsIHNldHNob3dNb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcblxyXG4gICAgLy9hY3RpdmUgdGFiXHJcbiAgICBjb25zdCBhY3RpdmF0ZVByb2ZpbGUgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0cHJvZmlsZVRhYih0cnVlKVxyXG4gICAgICAgIHNldHBheW1lbnRzVGFiKGZhbHNlKVxyXG4gICAgICAgIHNldHBhc3N3b3JkVGFiKGZhbHNlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgYWN0aXZhdGVQYXltZW50ID0gKCkgPT4ge1xyXG4gICAgICAgIHNldHBheW1lbnRzVGFiKHRydWUpXHJcbiAgICAgICAgc2V0cHJvZmlsZVRhYihmYWxzZSlcclxuICAgICAgICBzZXRwYXNzd29yZFRhYihmYWxzZSlcclxuICAgIH1cclxuICAgIGNvbnN0IGFjdGl2YXRlUGFzc3dvcmQgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0cGFzc3dvcmRUYWIodHJ1ZSlcclxuICAgICAgICBzZXRwYXltZW50c1RhYihmYWxzZSlcclxuICAgICAgICBzZXRwcm9maWxlVGFiKGZhbHNlKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG9wZW5Nb2RhbCA9ICgpID0+IHtcclxuICAgICAgICBzZXRzaG93TW9kYWwodHJ1ZSlcclxuICAgIH1cclxuXHJcblxyXG4gICAgcmV0dXJuICggXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPE1ldGEgLz5cclxuICAgICAgICAgICAgPG1haW4+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbWFpbiBwdC0yMCBwYi0zMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXgtYXV0byBvdmVyZmxvdy1oaWRkZW4gbGc6Ym9yZGVyIG1kOnNoYWRvdy1tZCBtZDpyb3VuZGVkLW1kIG1kOmZsZXggIGxnOm10LTUgY29udGFpbmVyLW1haW4gYmctd2hpdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gc2lkZWJhciAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhc2lkZSBjbGFzc05hbWU9XCJoaWRkZW4gbWQ6Z3JpZCAgcHJvZmlsZS1zaWRlYmFyIGxnOmdyaWQgYXV0by1yb3dzLW1pbiBqdXN0aWZ5LWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlIG10LTIwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTI4XCIgc3JjPVwiLi8uLi9hc3NldHMvaW1nL3ZlY3RvcnMvdXNlci5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGZpbGwtY3VycmVudCB0ZXh0LXdoaXRlIHAtMSByb3VuZGVkLWZ1bGwgaC02IGFic29sdXRlIHRvcC0xIHJpZ2h0LTIgZmEgZmEtcGVuY2lsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJzaWRlXCIgY2xhc3NOYW1lPVwidy1mdWxsIG10LThcIiBvbmNsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWN0aXZhdGVQcm9maWxlfSBjbGFzc05hbWU9e1wiaGVhZCB3LWZ1bGwgcHktMy41IHBsLTEwIGZsZXggaXRlbXMtY2VudGVyIFwiICsgKHByb2ZpbGVUYWIgPyBcImNoYW5nZVN0eWxlXCIgOiBcIlwiKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhIGZhLXVzZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cIm1sLTEuNSB0ZXh0LXNtIGZvbnQtbWVkaXVtXCI+UHJvZmlsZTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2FjdGl2YXRlUGF5bWVudH0gY2xhc3NOYW1lPXtcImhlYWQgdy1mdWxsIHB5LTMuNSBwbC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBcIiArIChwYXltZW50c1RhYiA/IFwiY2hhbmdlU3R5bGVcIiA6IFwiXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtY3JlZGl0LWNhcmQtYWx0XCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJtbC0xLjUgdGV4dC1zbSBmb250LW1lZGl1bVwiPlBheW1lbnRzPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17YWN0aXZhdGVQYXNzd29yZH0gY2xhc3NOYW1lPXtcImhlYWQgdy1mdWxsIHB5LTMuNSBwbC0xMCBmbGV4IGl0ZW1zLWNlbnRlciBcIiArIChwYXNzd29yZFRhYiA/IFwiY2hhbmdlU3R5bGVcIiA6IFwiXCIpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmEgZmEtbG9ja1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwibWwtMS41IHRleHQtc20gZm9udC1tZWRpdW1cIj5QYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FzaWRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBlbmQgc2lkZWJhciAtLT4gKi99XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6cHktMTAgbXgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9yZGVyLWIgYm9yZGVyLWdyYXktMjAwIGxnOmJvcmRlci0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIDxoMiBjbGFzc05hbWU9XCJweS01IGxnOnRleHQtMnhsXCI+UHJvZmlsZTwvaDI+IC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSB1c2VyIHByb2ZpbGUgZGV0YWlscyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9maWxlVGFiICYmIChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9maWxlXCIgY2xhc3NOYW1lPVwibWVnIHB4LTUgbWQ6cHgtMjAgbGc6cHgtMzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cInB4LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIG1kOmdyaWQgbWQ6Z3JpZC1jb2xzLTYgZ2FwLTYgZm9udC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwicHktMSBsZzpweC0wIHRleHQteGwgY29sLXNwYW4tNiB3LWZ1bGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQcm9maWxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHktNyBjb2wtc3Bhbi02IG1kOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiaW5saW5lLWJsb2NrIHJlbGF0aXZlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJoLTI4XCIgc3JjPVwiLi8uLi9hc3NldHMvaW1nL3ZlY3RvcnMvdXNlci5zdmdcIiBhbHQ9XCJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIGZpbGwtY3VycmVudCB0ZXh0LXdoaXRlIHAtMSByb3VuZGVkLWZ1bGwgaC02IGFic29sdXRlIHRvcC0xIHJpZ2h0LTIgZmEgZmEtcGVuY2lsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIHAtNCBiZy1ibHVlLTUwIGJvcmRlciBib3JkZXItZGFzaGVkIGJvcmRlci1ibHVlLTQwMCB0ZXh0LWJsdWUtNTAwIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFZGl0IFByb2ZpbGUgSW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9yZGVyLWItNCBib3JkZXItZ3JheS0xMDAgdy1mdWxsIG1kOmhpZGRlblwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImZpcnN0X25hbWVcIiBjbGFzc05hbWU9XCJibG9jayBmb250LTEwIGZvbnQtbWVkaXVtIHBiLTEgc2VjLWJsYWNrXCI+Rmlyc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZmlyc3RfbmFtZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBmaXJzdCBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBweS0yIHB4LTMgcHJvZmlsZS1jb250cm9sIGJnLXdoaXRlICBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJsYXN0X25hbWVcIiBjbGFzc05hbWU9XCJibG9jayBmb250LTEwIGZvbnQtbWVkaXVtIHBiLTEgc2VjLWJsYWNrXCI+TGFzdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJsYXN0X25hbWVcIiBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgbGFzdCBuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBweS0yIHB4LTMgcHJvZmlsZS1jb250cm9sIGJnLXdoaXRlICBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInBob25lXCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC0xMCBmb250LW1lZGl1bSBwYi0xIHNlYy1ibGFja1wiPlBob25lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGVsXCIgaWQ9XCJwaG9uZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgeW91ciBwaG9uZSBudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHB5LTIgcHgtMyBwcm9maWxlLWNvbnRyb2wgYmctd2hpdGUgIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTMgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicGhvbmVcIiBjbGFzc05hbWU9XCJibG9jayBmb250LTEwIGZvbnQtbWVkaXVtIHBiLTEgc2VjLWJsYWNrXCI+RW1haWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBZGRyZXNzPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBpZD1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbnRlciB5b3VyIGVtYWlsIGFkZHJlc3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHB5LTIgcHgtMyBwcm9maWxlLWNvbnRyb2wgYmctd2hpdGUgIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiYm9yZGVyLWItNCBib3JkZXItZ3JheS0xMDAgdy1mdWxsIG1kOmhpZGRlblwiPjwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMyB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjb3VudHJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBmb250LTEwIGZvbnQtbWVkaXVtIHBiLTEgc2VjLWJsYWNrXCI+Q291bnRyeTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwiY291bnRyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcHktMiBweC0zIHByb2ZpbGUtY29udHJvbCBiZy13aGl0ZSAgZm9jdXM6b3V0bGluZS1ub25lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5TZWxlY3QgQ291bnRyeTwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q2FuYWRhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NZXhpY288L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNiB3LWZ1bGxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJhZGRyZXNzX29uZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC0xMCBmb250LW1lZGl1bSBwYi0xIHNlYy1ibGFja1wiPkFkZHJlc3MgTGluZSAxPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiYWRkcmVzc19vbmVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm10LTEgYmxvY2sgdy1mdWxsIHB5LTIgcHgtMyBiZy13aGl0ZSBwcm9maWxlLWNvbnRyb2wgZm9jdXM6b3V0bGluZS1ub25lXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTYgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiYWRkcmVzc190d29cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtMTAgZm9udC1tZWRpdW0gcGItMSBzZWMtYmxhY2tcIj5BZGRyZXNzIExpbmUgMjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImFkZHJlc3NfdHdvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBweS0yIHB4LTMgYmctd2hpdGUgcHJvZmlsZS1jb250cm9sIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIHctZnVsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJjaXR5XCIgY2xhc3NOYW1lPVwiYmxvY2sgZm9udC0xMCBmb250LW1lZGl1bSBwYi0xIHNlYy1ibGFja1wiPkNpdHk8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJjaXR5XCIgcGxhY2Vob2xkZXI9XCJFbnRlciBjaXR5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBweS0yIHB4LTMgYmctd2hpdGUgcHJvZmlsZS1jb250cm9sIGZvY3VzOm91dGxpbmUtbm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIHctZnVsbCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcm92aW5jZVwiIGNsYXNzTmFtZT1cImJsb2NrIGZvbnQtMTAgZm9udC1tZWRpdW0gcGItMSBzZWMtYmxhY2tcIj5TdGF0ZSAvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUHJvdmluY2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInByb3ZpbmNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtdC0xIGJsb2NrIHctZnVsbCBweS0yIHB4LTMgcHJvZmlsZS1jb250cm9sIGJnLXdoaXRlIGZvY3VzOm91dGxpbmUtbm9uZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+VW5pdGVkIFN0YXRlczwvb3B0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24+Q2FuYWRhPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbj5NZXhpY288L29wdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiB3LWZ1bGwgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicG9zdGFsX2NvZGVcIiBjbGFzc05hbWU9XCJibG9jayBmb250LTEwIGZvbnQtbWVkaXVtIHBiLTEgc2VjLWJsYWNrXCI+WklQIC9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQb3N0YWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJwb3N0YWxfY29kZVwiIHBsYWNlaG9sZGVyPVwiRW50ZXIgWmlwY29kZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtMSBibG9jayB3LWZ1bGwgcHktMiBweC0zIGJnLXdoaXRlIHByb2ZpbGUtY29udHJvbCBmb2N1czpvdXRsaW5lLW5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGp1c3RpZnktY2VudGVyIG10LTYgbWItMTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInVwcGVyY2FzZSBmb2N1czpvdXRsaW5lLW5vbmUgcHJpbWFyeS1idG4gdGV4dC13aGl0ZSBmb250LTEwIGZvbnQtbWVkaXVtIG10LTQgcHktMS41IHB4LTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgZm9jdXM6b3V0bGluZS1ub25lIHByaW1hcnktcmVkIGZvbnQtMTAgZm9udC1tZWRpdW0gbXQtNCBweS0xLjUgcHgtNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FuY2VsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBlbmQgb2YgdXNlciBwcm9maWxlIGRldGFpbHMgLS0+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBwYXltZW50IHNldHRpbmdzIC0tPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheW1lbnRzVGFiICYmIChcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwYXltZW50XCIgY2xhc3NOYW1lPVwibWVnIHBiLTY0IHB4LTAgbWQ6cHgtMTYgbGc6cHgtMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJweS0xIGxnOnB4LTAgdGV4dC14bCBjb2wtc3Bhbi02IHctZnVsbCAgcHJpbWFyeS1ibGFjayBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQYXltZW50IFNldHRpbmdzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9maWxlLWhvbGRlciBtdC00IHB5LTMuNSBweC0xMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTUgdGV4dC1zbSBwcmltYXJ5LWJsYWNrIHB0LTFcIj5TYXZlZCBDYXJkczwvcD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gQ2FyZHMgaGVyZSAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtd3JhcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgbXItMyBtZDptci02IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ob2xkZXIgcC0zLjUgbWItMiBncmlkIHBsYWNlLWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTEwIHByaW1hcnktYmxhY2tcIj4qKioqICoqKiogKioqKiAxMjM0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMTAgcHJpbWFyeS1ibGFja1wiPk15IG9ubGluZSBzaG9wcGluZyBjYXJkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtMTEgcHJpbWFyeS1ibHVlXCIgaHJlZj1cIiNcIj5FZGl0IGNhcmQgZGV0YWlsczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQteHMgbXItMyBtZDptci02IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ob2xkZXIgcC0zLjUgbWItMiBncmlkIHBsYWNlLWNvbnRlbnQtYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTEwIHByaW1hcnktYmxhY2tcIj4qKioqICoqKiogKioqKiAxMjM0PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtMTAgcHJpbWFyeS1ibGFja1wiPkFsdGVybmF0ZSBzaG9wcGluZyBjYXJkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImZvbnQtMTEgcHJpbWFyeS1ibHVlXCIgaHJlZj1cIiNcIj5FZGl0IGNhcmQgZGV0YWlsczwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJteUJ0blwiIG9uQ2xpY2s9e29wZW5Nb2RhbH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQteHMgY3Vyc29yLXBvaW50ZXIgbXItMyBtZDptci02IG1iLTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYWRkLW5ldy1jYXJkIHAtMy41IG1iLTMgZ3JpZCBwbGFjZS1jb250ZW50LWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTMgdGV4dC1ibHVlLTYwMCB0ZXh0LTV4bCB0ZXh0LWNlbnRlclwiPis8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTYwMFwiPkFkZCBhIG5ldyBjYXJkPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGVuZCBvZiBwYXltZW50IHNldHRpZ3MgLS0+ICovfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPCEtLSBwYXNzd29yZCBzZXR0aW5ncyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzd29yZFRhYiAmJiAoXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicGFzc3dvcmRcIiBjbGFzc05hbWU9XCJtZWdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmb3JtIGFjdGlvbj1cIlwiIGNsYXNzTmFtZT1cInB4LTMyIHBiLTY0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBtZDpncmlkIG1kOmdyaWQtY29scy02IGdhcC01IGZvbnQtMTEgdy0xLzJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInB5LTEgbGc6cHgtMCB0ZXh0LXhsIGNvbC1zcGFuLTYgdy1mdWxsICBwcmltYXJ5LWJsYWNrIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUGFzc3dvcmQgU2V0dGluZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3NOYW1lPVwiYmxvY2sgcGItMSBmb250LTEwIGZvbnQtbWVkaXVtIHNlYy1ibGFja1wiIGZvcj1cInBhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50ZXIgY3VycmVudCBwYXNzd29yZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cInBhc3N3b3JkXCIgY2xhc3NOYW1lPVwicHgtMyBwcm9maWxlLWNvbnRyb2wgZm9jdXM6b3V0bGluZS1ub25lIHctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCIqKioqKioqXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBwYi0xIGZvbnQtMTAgZm9udC1tZWRpdW0gc2VjLWJsYWNrIFwiIGZvcj1cIm5ld1Bhc3N3b3JkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRW50ZXIgbmV3IHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwibmV3UGFzc3dvcmRcIiBjbGFzc05hbWU9XCJweC0zIHByb2ZpbGUtY29udHJvbCBmb2N1czpvdXRsaW5lLW5vbmUgdy1mdWxsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIioqKioqKipcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHBiLTEgZm9udC0xMCBmb250LW1lZGl1bSBzZWMtYmxhY2sgXCIgZm9yPVwiY29uZmlybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbmZpcm0gbmV3IHBhc3N3b3JkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwiY29uZmlybVwiIGNsYXNzTmFtZT1cInB4LTMgcHJvZmlsZS1jb250cm9sIGZvY3VzOm91dGxpbmUtbm9uZSB3LWZ1bGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiIHBsYWNlaG9sZGVyPVwiKioqKioqKlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi02IHBsYWNlLXNlbGYtY2VudGVyIG10LTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJwcmltYXJ5LWJ0biB0ZXh0LXdoaXRlIGZvbnQtMTAgZm9udC1zZW1pYm9sZCBmb2N1czpvdXRsaW5lLW5vbmUgcHgtNCBweS0xLjVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTQVZFIFBBU1NXT1JEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIGVuZCBvZiBwYXNzd29yZCBzZXR0aW5ncyAtLT4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvbWFpbj5cclxuXHJcbiAgICAgICAgICAgIHsvKiA8IS0tIFRoZSBNb2RhbCAtLT4gKi99XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHNob3dNb2RhbCAmJiAoXHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIm15TW9kYWxcIiBjbGFzc05hbWU9XCJtb2RhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHsvKiA8IS0tIE1vZGFsIGNvbnRlbnQgLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9kYWwtY29udGVudCByZWxhdGl2ZSB3LTEwLzEyIGxnOnctMS8zIG14LWF1dG8gbXgtOCBtZDpweC0wIG1kOm10LTI4IG1kOnB4LTIwIG1kOnB5LTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9eygpID0+IHtzZXRzaG93TW9kYWwoZmFsc2UpfX0gY2xhc3NOYW1lPVwiY2xvc2UgYWJzb2x1dGUgcmlnaHQtNSB0b3AtMSB0ZXh0LTR4bCB0ZXh0LWdyYXktNTAwXCI+JnRpbWVzOzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgey8qIDwhLS0gPGkgY2xhc3NOYW1lPVwiYWJzb2x1dGUgcmlnaHQtMCBmYSBmYS10aW1lc1wiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT4gLS0+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBhY3Rpb249XCJcIiBjbGFzc05hbWU9XCJmb250LTExIGdyaWQgZ3JpZC1jb2xzLTYgZ2FwLTIgbXgtNiBweS0xMCBtZDpteC0wIG1kOnB5LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNiBtYi0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzTmFtZT1cImJsb2NrIHBiLTEuNSBmb250LTEwIHByaW1hcnktYmxhY2tcIiBmb3I9XCJjYXJkX251bWJlclwiPiBDYXJkIE51bWJlciA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBpZD1cImNhcmRfbnVtYmVyXCIgY2xhc3NOYW1lPVwicHJvZmlsZS1jb250cm9sIGZvY3VzOm91dGxpbmUtbm9uZSBwLTIgdy1mdWxsXCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIHlvdXIgMTIgb3IgMTYgZGlnaXQgY2FyZCBudW1iZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTYgIFwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWxlY3QgY2xhc3NOYW1lPVwiYmctd2hpdGUgcHJvZmlsZS1jb250cm9sIGZvY3VzOm91dGxpbmUtbm9uZSBwLTIgY29sLXNwYW4tMiB3LWZ1bGxcIiBuYW1lPVwiXCIgaWQ9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIlwiPk1vbnRoPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImJnLXdoaXRlIHByb2ZpbGUtY29udHJvbCBmb2N1czpvdXRsaW5lLW5vbmUgcC0yIGNvbC1zcGFuLTIgdy1mdWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJcIj5ZZWFyPC9vcHRpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkNWVlwiIGF1dG9jb21wbGV0ZT1cInBvc3RhbC1jb2RlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmctd2hpdGUgZm9jdXM6b3V0bGluZS1ub25lIHByb2ZpbGUtY29udHJvbCBwLTIgY29sLXNwYW4tMiB3LWZ1bGxcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTYgbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9XCJibG9jayBmb250LTEwIHByaW1hcnktYmxhY2sgcGItMS41XCIgZm9yPVwiY2FyZE5hbWVcIj4gQ2FyZCBOYW1lIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cInByb2ZpbGUtY29udHJvbCBmb2N1czpvdXRsaW5lLW5vbmUgcC0yIHctZnVsbFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZGQgYSBuYW1lIHRvIGhlbHAgeW91IGlkZW50aWZ5IHRoaXMgY2FyZFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tNiBwbGFjZS1zZWxmLWNlbnRlciBtdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9jdXM6b3V0bGluZS1ub25lIHByaW1hcnktYnRuIGZvbnQtMTAgZm9udC1zZW1pYm9sZCB0ZXh0LXdoaXRlIHB5LTEuNSBweC04XCI+QUREXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENBUkQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7LyogPCEtLSBlbmQgb2YgbW9kYWwgLS0+ICovfVxyXG4gICAgICAgIDwvZGl2PiAgICBcclxuICAgICApO1xyXG59XHJcbiBcclxuZXhwb3J0IGRlZmF1bHQgUHJvZmlsZTsiLCJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmNvbnN0IE1ldGEgPSAoeyB0aXRsZSwga2V5d29yZHMsIGRlc2NyaXB0aW9uIH0pID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgIDxtZXRhXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICAgICAgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPG1ldGEgbmFtZT1cImtleXdvcmRzXCIgY29udGVudD17a2V5d29yZHN9IC8+XHJcbiAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxyXG4gICAgICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxyXG4gICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi4uLy4uL3B1YmxpYy9mYXZpY29uLmljb1wiIC8+XHJcblxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly91bnBrZy5jb20vdGFpbHdpbmRjc3NAXjIvZGlzdC90YWlsd2luZC5taW4uY3NzXCJcclxuICAgICAgICAgICAgPjwvbGluaz5cclxuXHJcbiAgICAgICAgICAgIHsvKiBGb250YXdlc29tZSBoZXJlICovfVxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzc1wiXHJcbiAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICA8bGlua1xyXG4gICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dC9jc3NcIlxyXG4gICAgICAgICAgICAgICAgY2hhclNldD1cIlVURi04XCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay5taW4uY3NzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHQvY3NzXCJcclxuICAgICAgICAgICAgICAgIGhyZWY9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy9zbGljay1jYXJvdXNlbC8xLjYuMC9zbGljay10aGVtZS5taW4uY3NzXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPHNjcmlwdCBzcmM9XCJodHRwczovL2NkbmpzLmNsb3VkZmxhcmUuY29tL2FqYXgvbGlicy93YXlwb2ludHMvNC4wLjEvbm9mcmFtZXdvcmsud2F5cG9pbnRzLm1pbi5qc1wiPjwvc2NyaXB0PlxyXG4gICAgICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgKTtcclxufTtcclxuXHJcbk1ldGEuZGVmYXVsdFByb3BzID0ge1xyXG4gICAgdGl0bGU6IFwiQnV5TGlrZSBEZWxlYXJzXCIsXHJcbiAgICBrZXl3b3JkczogXCJjYXJzLCB2ZWNoaWxlcywgbW90b2N5Y2xlc1wiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiQnV5IGNhcnMgbGlrZSBkZWFsZWFycyB3aXRoIGVhc2VcIixcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1ldGE7XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9