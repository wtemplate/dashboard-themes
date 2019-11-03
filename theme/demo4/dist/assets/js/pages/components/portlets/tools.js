/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/portlets/tools.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/portlets/tools.js":
/*!***********************************************************!*\
  !*** ../src/assets/js/pages/components/portlets/tools.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar KTPortletTools = function () {\n    // Toastr\n    var initToastr = function() {\n        toastr.options.showDuration = 1000;\n    }\n\n    // Demo 1\n    var demo1 = function() {\n        // This portlet is lazy initialized using data-portlet=\"true\" attribute. You can access to the portlet object as shown below and override its behavior\n        var portlet = new KTPortlet('kt_portlet_tools_1', {\n            tools: {\n                toggle: {\n                    collapse: 'Collapse me',\n                    expand: 'Expand me'\n                },\n                reload: 'Reload me',\n                remove: 'Remove me'\n            }\n        });\n\n        // Toggle event handlers\n        portlet.on('beforeCollapse', function(portlet) {\n            setTimeout(function() {\n                toastr.info('Before collapse event fired!');\n            }, 100);\n        });\n\n        portlet.on('afterCollapse', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('Before collapse event fired!');\n            }, 2000);            \n        });\n\n        portlet.on('beforeExpand', function(portlet) {\n            setTimeout(function() {\n                toastr.info('Before expand event fired!');\n            }, 100);  \n        });\n\n        portlet.on('afterExpand', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('After expand event fired!');\n            }, 2000);\n        });\n\n        // Remove event handlers\n        portlet.on('beforeRemove', function(portlet) {\n            toastr.info('Before remove event fired!');\n\n            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation\n        });\n\n        portlet.on('afterRemove', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('After remove event fired!');\n            }, 2000);            \n        });\n\n        // Reload event handlers\n        portlet.on('reload', function(portlet) {\n            toastr.info('Reload event fired!');\n\n            KTApp.block(portlet.getSelf(), {\n                overlayColor: '#ffffff',\n                type: 'loader',\n                state: 'brand',\n                opacity: 0.3,\n                size: 'lg'\n            });\n\n            // update the content here\n\n            setTimeout(function() {\n                KTApp.unblock(portlet.getSelf());\n            }, 2000);\n        });\n    }\n\n    // Demo 2\n    var demo2 = function() {\n        // This portlet is lazy initialized using data-portlet=\"true\" attribute. You can access to the portlet object as shown below and override its behavior\n        var portlet = new KTPortlet('kt_portlet_tools_2');\n\n        // Toggle event handlers\n        portlet.on('beforeCollapse', function(portlet) {\n            setTimeout(function() {\n                toastr.info('Before collapse event fired!');\n            }, 100);\n        });\n\n        portlet.on('afterCollapse', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('Before collapse event fired!');\n            }, 2000);            \n        });\n\n        portlet.on('beforeExpand', function(portlet) {\n            setTimeout(function() {\n                toastr.info('Before expand event fired!');\n            }, 100);  \n        });\n\n        portlet.on('afterExpand', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('After expand event fired!');\n            }, 2000);\n        });\n\n        // Remove event handlers\n        portlet.on('beforeRemove', function(portlet) {\n            toastr.info('Before remove event fired!');\n\n            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation\n        });\n\n        portlet.on('afterRemove', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('After remove event fired!');\n            }, 2000);            \n        });\n\n        // Reload event handlers\n        portlet.on('reload', function(portlet) {\n            toastr.info('Reload event fired!');\n\n            KTApp.block(portlet.getSelf(), {\n                overlayColor: '#000000',\n                type: 'spinner',\n                state: 'brand',\n                opacity: 0.05,\n                size: 'lg'\n            });\n\n            // update the content here\n\n            setTimeout(function() {\n                KTApp.unblock(portlet.getSelf());\n            }, 2000);\n        });\n    }\n\n    // Demo 3\n    var demo3 = function() {\n        // This portlet is lazy initialized using data-portlet=\"true\" attribute. You can access to the portlet object as shown below and override its behavior\n        var portlet = new KTPortlet('kt_portlet_tools_3');\n\n        // Toggle event handlers\n        portlet.on('beforeCollapse', function(portlet) {\n            setTimeout(function() {\n                toastr.info('Before collapse event fired!');\n            }, 100);\n        });\n\n        portlet.on('afterCollapse', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('Before collapse event fired!');\n            }, 2000);            \n        });\n\n        portlet.on('beforeExpand', function(portlet) {\n            setTimeout(function() {\n                toastr.info('Before expand event fired!');\n            }, 100);  \n        });\n\n        portlet.on('afterExpand', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('After expand event fired!');\n            }, 2000);\n        });\n\n        // Remove event handlers\n        portlet.on('beforeRemove', function(portlet) {\n            toastr.info('Before remove event fired!');\n\n            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation\n        });\n\n        portlet.on('afterRemove', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('After remove event fired!');\n            }, 2000);            \n        });\n\n        // Reload event handlers\n        portlet.on('reload', function(portlet) {\n            toastr.info('Reload event fired!');\n\n            KTApp.block(portlet.getSelf(), {\n                type: 'loader',\n                state: 'success',\n                message: 'Please wait...'\n            });\n\n            // update the content here\n\n            setTimeout(function() {\n                KTApp.unblock(portlet.getSelf());\n            }, 2000);\n        });\n    }\n \n    // Demo 4\n    var demo4 = function() {\n        // This portlet is lazy initialized using data-portlet=\"true\" attribute. You can access to the portlet object as shown below and override its behavior\n        var portlet = new KTPortlet('kt_portlet_tools_4');\n\n        // Toggle event handlers\n        portlet.on('beforeCollapse', function(portlet) {\n            setTimeout(function() {\n                toastr.info('Before collapse event fired!');\n            }, 100);\n        });\n\n        portlet.on('afterCollapse', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('Before collapse event fired!');\n            }, 2000);            \n        });\n\n        portlet.on('beforeExpand', function(portlet) {\n            setTimeout(function() {\n                toastr.info('Before expand event fired!');\n            }, 100);  \n        });\n\n        portlet.on('afterExpand', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('After expand event fired!');\n            }, 2000);\n        });\n\n        // Remove event handlers\n        portlet.on('beforeRemove', function(portlet) {\n            toastr.info('Before remove event fired!');\n\n            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation\n        });\n\n        portlet.on('afterRemove', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('After remove event fired!');\n            }, 2000);            \n        });\n\n        // Reload event handlers\n        portlet.on('reload', function(portlet) {\n            toastr.info('Reload event fired!');\n\n            KTApp.block(portlet.getSelf(), {\n                type: 'loader',\n                state: 'brand',\n                message: 'Please wait...'\n            });\n\n            // update the content here\n\n            setTimeout(function() {\n                KTApp.unblock(portlet.getSelf());\n            }, 2000);\n        });\n    }\n\n    // Demo 5\n    var demo5 = function() {\n        // This portlet is lazy initialized using data-portlet=\"true\" attribute. You can access to the portlet object as shown below and override its behavior\n        var portlet = new KTPortlet('kt_portlet_tools_5');\n\n        // Toggle event handlers\n        portlet.on('beforeCollapse', function(portlet) {\n            setTimeout(function() {\n                toastr.info('Before collapse event fired!');\n            }, 100);\n        });\n\n        portlet.on('afterCollapse', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('Before collapse event fired!');\n            }, 2000);            \n        });\n\n        portlet.on('beforeExpand', function(portlet) {\n            setTimeout(function() {\n                toastr.info('Before expand event fired!');\n            }, 100);  \n        });\n\n        portlet.on('afterExpand', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('After expand event fired!');\n            }, 2000);\n        });\n\n        // Remove event handlers\n        portlet.on('beforeRemove', function(portlet) {\n            toastr.info('Before remove event fired!');\n\n            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation\n        });\n\n        portlet.on('afterRemove', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('After remove event fired!');\n            }, 2000);            \n        });\n\n        // Reload event handlers\n        portlet.on('reload', function(portlet) {\n            toastr.info('Reload event fired!');\n\n            KTApp.block(portlet.getSelf(), {\n                type: 'loader',\n                state: 'brand',\n                message: 'Please wait...'\n            });\n\n            // update the content here\n\n            setTimeout(function() {\n                KTApp.unblock(portlet.getSelf());\n            }, 2000);\n        });\n\n        // Reload event handlers\n        portlet.on('afterFullscreenOn', function(portlet) {\n            toastr.info('After fullscreen on event fired!');\n        });\n\n        portlet.on('afterFullscreenOff', function(portlet) {\n            toastr.warning('After fullscreen off event fired!');\n        });\n    }\n\n    // Demo 6\n    var demo6 = function() {\n        // This portlet is lazy initialized using data-portlet=\"true\" attribute. You can access to the portlet object as shown below and override its behavior\n        var portlet = new KTPortlet('kt_portlet_tools_6');\n\n        // Toggle event handlers\n        portlet.on('beforeCollapse', function(portlet) {\n            setTimeout(function() {\n                toastr.info('Before collapse event fired!');\n            }, 100);\n        });\n\n        portlet.on('afterCollapse', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('Before collapse event fired!');\n            }, 2000);            \n        });\n\n        portlet.on('beforeExpand', function(portlet) {\n            setTimeout(function() {\n                toastr.info('Before expand event fired!');\n            }, 100);  \n        });\n\n        portlet.on('afterExpand', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('After expand event fired!');\n            }, 2000);\n        });\n\n        // Remove event handlers\n        portlet.on('beforeRemove', function(portlet) {\n            toastr.info('Before remove event fired!');\n\n            return confirm('Are you sure to remove this portlet ?');  // remove portlet after user confirmation\n        });\n\n        portlet.on('afterRemove', function(portlet) {\n            setTimeout(function() {\n                toastr.warning('After remove event fired!');\n            }, 2000);            \n        });\n\n        // Reload event handlers\n        portlet.on('reload', function(portlet) {\n            toastr.info('Reload event fired!');\n\n            KTApp.block(portlet.getSelf(), {\n                type: 'loader',\n                state: 'brand',\n                message: 'Please wait...'\n            });\n\n            // update the content here\n\n            setTimeout(function() {\n                KTApp.unblock(portlet.getSelf());\n            }, 2000);\n        });\n\n        // Reload event handlers\n        portlet.on('afterFullscreenOn', function(portlet) {\n            toastr.info('After fullscreen on event fired!');\n        });\n\n        portlet.on('afterFullscreenOff', function(portlet) {\n            toastr.warning('After fullscreen off event fired!');\n        });\n    }\n\n    return {\n        //main function to initiate the module\n        init: function () {\n            initToastr();\n\n            // init demos\n            demo1();\n            demo2();\n            demo3();\n            demo4();\n            demo5();\n            demo6();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTPortletTools.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/portlets/tools.js?");

/***/ })

/******/ });