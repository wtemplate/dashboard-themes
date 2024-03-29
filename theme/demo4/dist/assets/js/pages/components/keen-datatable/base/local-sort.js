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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/keen-datatable/base/local-sort.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/keen-datatable/base/local-sort.js":
/*!***************************************************************************!*\
  !*** ../src/assets/js/pages/components/keen-datatable/base/local-sort.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Class definition\n\nvar KTDatatableLocalSortDemo = function() {\n    // Private functions\n\n    // basic demo\n    var demo = function() {\n\n        var datatable = $('.kt_datatable').KTDatatable({\n            // datasource definition\n            data: {\n                type: 'remote',\n                source: {\n                    read: {\n                        url: 'https://keenthemes.com/keen/tools/preview/inc/api/datatables/demos/default2.php',\n                    },\n                },\n                pageSize: 10,\n                serverPaging: false,\n                serverFiltering: true,\n                serverSorting: false,\n            },\n\n            // layout definition\n            layout: {\n                theme: 'default', // datatable theme\n                class: '', // custom wrapper class\n                scroll: false, // enable/disable datatable scroll both horizontal and vertical when needed.\n                footer: false, // display/hide footer\n            },\n\n            // column sorting\n            sortable: true,\n\n            pagination: true,\n\n            search: {\n                input: $('#generalSearch'),\n            },\n\n            // columns definition\n            columns: [{\n                field: 'id',\n                title: '#',\n                sortable: 'asc',\n                width: 30,\n                type: 'number',\n                selector: false,\n                textAlign: 'center',\n            }, {\n                field: 'employee_id',\n                title: 'Employee ID',\n            }, {\n                field: 'name',\n                title: 'Name',\n                template: function(row) {\n                    return row.first_name + ' ' + row.last_name;\n                },\n            }, {\n                field: 'hire_date',\n                title: 'Hire Date',\n                type: 'date',\n                format: 'MM/DD/YYYY',\n            }, {\n                field: 'salary',\n                title: 'Salary',\n                type: 'number',\n                // custom sort callback for number\n                sortCallback: function(data, sort, column) {\n                    var field = column['field'];\n                    return $(data).sort(function(a, b) {\n                        var aField = a[field];\n                        var bField = b[field];\n                        if (isNaN(parseFloat(aField)) && aField != null) {\n                            aField = Number(aField.replace(/[^0-9\\.-]+/g, ''));\n                        }\n                        if (isNaN(parseFloat(bField)) && aField != null) {\n                            bField = Number(bField.replace(/[^0-9\\.-]+/g, ''));\n                        }\n                        aField = parseFloat(aField);\n                        bField = parseFloat(bField);\n                        if (sort === 'asc') {\n                            return aField > bField ? 1 : aField < bField ? -1 : 0;\n                        } else {\n                            return aField < bField ? 1 : aField > bField ? -1 : 0;\n                        }\n                    });\n                },\n            }, {\n                field: 'status',\n                title: 'Status',\n                // callback function support for column rendering\n                template: function(row) {\n                    var status = {\n                        1: {\n                            'title': 'Pending',\n                            'class': 'kt-badge--brand'\n                        },\n                        2: {\n                            'title': 'Delivered',\n                            'class': ' kt-badge--metal'\n                        },\n                        3: {\n                            'title': 'Canceled',\n                            'class': ' kt-badge--primary'\n                        },\n                        4: {\n                            'title': 'Success',\n                            'class': ' kt-badge--success'\n                        },\n                        5: {\n                            'title': 'Info',\n                            'class': ' kt-badge--info'\n                        },\n                        6: {\n                            'title': 'Danger',\n                            'class': ' kt-badge--danger'\n                        },\n                        7: {\n                            'title': 'Warning',\n                            'class': ' kt-badge--warning'\n                        },\n                    };\n                    return '<span class=\"kt-badge ' + status[row.status].class + ' kt-badge--inline kt-badge--pill\">' + status[row.status].title + '</span>';\n                },\n            }, {\n                field: 'type',\n                title: 'Type',\n                autoHide: false,\n                // callback function support for column rendering\n                template: function(row) {\n                    var status = {\n                        1: {\n                            'title': 'Online',\n                            'state': 'danger'\n                        },\n                        2: {\n                            'title': 'Retail',\n                            'state': 'primary'\n                        },\n                        3: {\n                            'title': 'Direct',\n                            'state': 'accent'\n                        },\n                    };\n                    return '<span class=\"kt-badge kt-badge--' + status[row.type].state + ' kt-badge--dot\"></span>&nbsp;<span class=\"kt-font-bold kt-font-' + status[row.type].state + '\">' +\n                        status[row.type].title + '</span>';\n                },\n            }, {\n                field: 'Actions',\n                title: 'Actions',\n                sortable: false,\n                width: 110,\n                overflow: 'visible',\n                autoHide: false,\n                template: function() {\n                    return '\\\n\t\t\t\t\t\t<div class=\"dropdown\">\\\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" data-toggle=\"dropdown\">\\\n                                <i class=\"la la-cog\"></i>\\\n                            </a>\\\n\t\t\t\t\t\t  \t<div class=\"dropdown-menu dropdown-menu-right\">\\\n\t\t\t\t\t\t    \t<a class=\"dropdown-item\" href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a>\\\n\t\t\t\t\t\t    \t<a class=\"dropdown-item\" href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a>\\\n\t\t\t\t\t\t    \t<a class=\"dropdown-item\" href=\"#\"><i class=\"la la-print\"></i> Generate Report</a>\\\n\t\t\t\t\t\t  \t</div>\\\n\t\t\t\t\t\t</div>\\\n\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" title=\"Edit details\">\\\n\t\t\t\t\t\t\t<i class=\"la la-edit\"></i>\\\n\t\t\t\t\t\t</a>\\\n\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" title=\"Delete\">\\\n\t\t\t\t\t\t\t<i class=\"la la-trash\"></i>\\\n\t\t\t\t\t\t</a>\\\n\t\t\t\t\t';\n                },\n            }],\n        });\n\n        $('#kt_form_status').on('change', function() {\n            datatable.search($(this).val().toLowerCase(), 'status');\n        });\n\n        $('#kt_form_type').on('change', function() {\n            datatable.search($(this).val().toLowerCase(), 'type');\n        });\n\n        $('#kt_form_status,#kt_form_type').selectpicker();\n\n    };\n\n    return {\n        // public functions\n        init: function() {\n            demo();\n        },\n    };\n}();\n\njQuery(document).ready(function() {\n    KTDatatableLocalSortDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/keen-datatable/base/local-sort.js?");

/***/ })

/******/ });