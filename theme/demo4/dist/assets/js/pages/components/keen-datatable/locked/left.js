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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/keen-datatable/locked/left.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/keen-datatable/locked/left.js":
/*!***********************************************************************!*\
  !*** ../src/assets/js/pages/components/keen-datatable/locked/left.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Class definition\n\nvar KTDefaultDatatableDemo = function() {\n\t// Private functions\n\n\t// basic demo\n\tvar demo = function() {\n\n\t\tvar datatable = $('.kt_datatable').KTDatatable({\n\t\t\tdata: {\n\t\t\t\ttype: 'remote',\n\t\t\t\tsource: {\n\t\t\t\t\tread: {\n\t\t\t\t\t\turl: 'https://keenthemes.com/keen/tools/preview/inc/api/datatables/demos/default2.php',\n\t\t\t\t\t},\n\t\t\t\t},\n\t\t\t\tpageSize: 20,\n\t\t\t\tserverPaging: true,\n\t\t\t\tserverFiltering: true,\n\t\t\t\tserverSorting: true,\n\t\t\t},\n\n\t\t\tlayout: {\n\t\t\t\tscroll: true,\n\t\t\t\theight: 550,\n\t\t\t\tfooter: false,\n\t\t\t},\n\n\t\t\tsortable: true,\n\n\t\t\tfilterable: false,\n\n\t\t\tpagination: true,\n\n\t\t\tsearch: {\n\t\t\t\tinput: $('#generalSearch'),\n\t\t\t},\n\n\t\t\tcolumns: [\n\t\t\t\t{\n\t\t\t\t\tfield: 'employee_id',\n\t\t\t\t\ttitle: 'Employee ID',\n\t\t\t\t\tlocked: {left: 'lg'},\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'name',\n\t\t\t\t\ttitle: 'Name',\n\t\t\t\t\tlocked: {left: 'lg'},\n\t\t\t\t\ttemplate: function(row) {\n\t\t\t\t\t\treturn row.first_name + ' ' + row.last_name;\n\t\t\t\t\t},\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'email',\n\t\t\t\t\twidth: 150,\n\t\t\t\t\ttitle: 'Email',\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'phone',\n\t\t\t\t\ttitle: 'Phone',\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'hire_date',\n\t\t\t\t\ttitle: 'Hire Date',\n\t\t\t\t\ttype: 'date',\n\t\t\t\t\tformat: 'MM/DD/YYYY',\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'gender',\n\t\t\t\t\ttitle: 'Gender',\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'department',\n\t\t\t\t\ttitle: 'Department',\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'address',\n\t\t\t\t\ttitle: 'Address',\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'website',\n\t\t\t\t\ttitle: 'Website',\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'salary',\n\t\t\t\t\ttitle: 'Salary',\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'notes',\n\t\t\t\t\ttitle: 'Notes',\n\t\t\t\t\twidth: 300,\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'status',\n\t\t\t\t\ttitle: 'Status',\n\t\t\t\t\t// callback function support for column rendering\n\t\t\t\t\ttemplate: function(row) {\n\t\t\t\t\t\tvar status = {\n\t\t\t\t\t\t\t1: {'title': 'Pending', 'class': 'kt-badge--brand'},\n\t\t\t\t\t\t\t2: {'title': 'Delivered', 'class': ' kt-badge--metal'},\n\t\t\t\t\t\t\t3: {'title': 'Canceled', 'class': ' kt-badge--primary'},\n\t\t\t\t\t\t\t4: {'title': 'Success', 'class': ' kt-badge--success'},\n\t\t\t\t\t\t\t5: {'title': 'Info', 'class': ' kt-badge--info'},\n\t\t\t\t\t\t\t6: {'title': 'Danger', 'class': ' kt-badge--danger'},\n\t\t\t\t\t\t\t7: {'title': 'Warning', 'class': ' kt-badge--warning'},\n\t\t\t\t\t\t};\n\t\t\t\t\t\treturn '<span class=\"kt-badge ' + status[row.status].class + ' kt-badge--inline kt-badge--pill\">' + status[row.status].title + '</span>';\n\t\t\t\t\t},\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'type',\n\t\t\t\t\ttitle: 'Type',\n\t\t\t\t\tautoHide: false,\n\t\t\t\t\t// callback function support for column rendering\n\t\t\t\t\ttemplate: function(row) {\n\t\t\t\t\t\tvar status = {\n\t\t\t\t\t\t\t1: {'title': 'Online', 'state': 'danger'},\n\t\t\t\t\t\t\t2: {'title': 'Retail', 'state': 'primary'},\n\t\t\t\t\t\t\t3: {'title': 'Direct', 'state': 'accent'},\n\t\t\t\t\t\t};\n\t\t\t\t\t\treturn '<span class=\"kt-badge kt-badge--' + status[row.type].state + ' kt-badge--dot\"></span>&nbsp;<span class=\"kt-font-bold kt-font-' + status[row.type].state +\n\t\t\t\t\t\t\t'\">' +\n\t\t\t\t\t\t\tstatus[row.type].title + '</span>';\n\t\t\t\t\t},\n\t\t\t\t}, {\n\t\t\t\t\tfield: 'Actions',\n\t\t\t\t\ttitle: 'Actions',\n\t\t\t\t\tsortable: false,\n\t\t\t\t\twidth: 110,\n\t\t\t\t\toverflow: 'visible',\n\t\t\t\t\tautoHide: false,\n\t\t\t\t\ttemplate: function() {\n\t\t\t\t\t\treturn '\\\n\t\t\t\t\t\t\t<div class=\"dropdown\">\\\n\t\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" data-toggle=\"dropdown\">\\\n\t                                <i class=\"la la-ellipsis-h\"></i>\\\n\t                            </a>\\\n\t\t\t\t\t\t\t    <div class=\"dropdown-menu dropdown-menu-right\">\\\n\t\t\t\t\t\t\t        <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a>\\\n\t\t\t\t\t\t\t        <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a>\\\n\t\t\t\t\t\t\t        <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-print\"></i> Generate Report</a>\\\n\t\t\t\t\t\t\t    </div>\\\n\t\t\t\t\t\t\t</div>\\\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" title=\"Edit details\">\\\n\t\t\t\t\t\t\t\t<i class=\"la la-edit\"></i>\\\n\t\t\t\t\t\t\t</a>\\\n\t\t\t\t\t\t\t<a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-md\" title=\"Delete\">\\\n\t\t\t\t\t\t\t\t<i class=\"la la-trash\"></i>\\\n\t\t\t\t\t\t\t</a>\\\n\t\t\t\t\t';\n\t\t\t\t\t},\n\t\t\t\t}],\n\n\t\t});\n\n\t\t$('#kt_form_status').on('change', function() {\n\t\t\tdatatable.search($(this).val().toLowerCase(), 'status');\n\t\t});\n\n\t\t$('#kt_form_type').on('change', function() {\n\t\t\tdatatable.search($(this).val().toLowerCase(), 'type');\n\t\t});\n\n\t\t$('#kt_form_status,#kt_form_type').selectpicker();\n\n\t};\n\n\treturn {\n\t\t// public functions\n\t\tinit: function() {\n\t\t\tdemo();\n\t\t},\n\t};\n}();\n\njQuery(document).ready(function() {\n\tKTDefaultDatatableDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/keen-datatable/locked/left.js?");

/***/ })

/******/ });