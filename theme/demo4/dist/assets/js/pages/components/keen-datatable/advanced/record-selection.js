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
/******/ 	return __webpack_require__(__webpack_require__.s = "../src/assets/js/pages/components/keen-datatable/advanced/record-selection.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../src/assets/js/pages/components/keen-datatable/advanced/record-selection.js":
/*!*************************************************************************************!*\
  !*** ../src/assets/js/pages/components/keen-datatable/advanced/record-selection.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n// Class definition\n\nvar KTDatatableRecordSelectionDemo = function() {\n    // Private functions\n\n    var options = {\n        // datasource definition\n        data: {\n            type: 'remote',\n            source: {\n                read: {\n                    url: 'https://keenthemes.com/keen/tools/preview/inc/api/datatables/demos/default2.php',\n                },\n            },\n            pageSize: 10,\n            serverPaging: true,\n            serverFiltering: true,\n            serverSorting: true,\n        },\n\n        // layout definition\n        layout: {\n            theme: 'default', // datatable theme\n            class: '', // custom wrapper class\n            scroll: true, // enable/disable datatable scroll both horizontal and\n            // vertical when needed.\n            height: 350, // datatable's body's fixed height\n            footer: false // display/hide footer\n        },\n\n        // column sorting\n        sortable: true,\n\n        pagination: true,\n\n        // columns definition\n\n        columns: [{\n            field: 'employee_id',\n            title: '#',\n            sortable: false,\n            width: 20,\n            selector: {\n                class: 'kt-checkbox--solid'\n            },\n            textAlign: 'center',\n        }, {\n            field: 'id',\n            title: 'Employee ID',\n            template: '{{employee_id}}',\n        }, {\n            field: 'name',\n            title: 'Name',\n            template: function(row) {\n                return row.first_name + ' ' + row.last_name;\n            },\n        }, {\n            field: 'phone',\n            title: 'Phone',\n        }, {\n            field: 'hire_date',\n            title: 'Hire Date',\n            type: 'date',\n            format: 'MM/DD/YYYY',\n        }, {\n            field: 'status',\n            title: 'Status',\n            // callback function support for column rendering\n            template: function(row) {\n                var status = {\n                    1: {\n                        'title': 'Pending',\n                        'class': 'kt-badge--brand'\n                    },\n                    2: {\n                        'title': 'Delivered',\n                        'class': ' kt-badge--metal'\n                    },\n                    3: {\n                        'title': 'Canceled',\n                        'class': ' kt-badge--primary'\n                    },\n                    4: {\n                        'title': 'Success',\n                        'class': ' kt-badge--success'\n                    },\n                    5: {\n                        'title': 'Info',\n                        'class': ' kt-badge--info'\n                    },\n                    6: {\n                        'title': 'Danger',\n                        'class': ' kt-badge--danger'\n                    },\n                    7: {\n                        'title': 'Warning',\n                        'class': ' kt-badge--warning'\n                    },\n                };\n                return '<span class=\"kt-badge ' + status[row.status].class +\n                    ' kt-badge--inline kt-badge--pill\">' + status[row.status].title +\n                    '</span>';\n            },\n        }, {\n            field: 'type',\n            title: 'Type',\n\t        autoHide: false,\n            // callback function support for column rendering\n            template: function(row) {\n                var status = {\n                    1: {\n                        'title': 'Online',\n                        'state': 'danger'\n                    },\n                    2: {\n                        'title': 'Retail',\n                        'state': 'primary'\n                    },\n                    3: {\n                        'title': 'Direct',\n                        'state': 'accent'\n                    },\n                };\n                return '<span class=\"kt-badge kt-badge--' + status[row.type].state +\n                    ' kt-badge--dot\"></span>&nbsp;<span class=\"kt-font-bold kt-font-' +\n                    status[row.type].state + '\">' + status[row.type].title + '</span>';\n            },\n        }, {\n            field: 'Actions',\n            title: 'Actions',\n            sortable: false,\n            width: 110,\n            overflow: 'visible',\n\t        autoHide: false,\n            template: function() {\n\t            return '\\\n                    <div class=\"dropdown\">\\\n                        <a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-sm\" data-toggle=\"dropdown\">\\\n                            <i class=\"flaticon2-settings\"></i>\\\n                        </a>\\\n                        <div class=\"dropdown-menu dropdown-menu-right\">\\\n                            <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-edit\"></i> Edit Details</a>\\\n                            <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-leaf\"></i> Update Status</a>\\\n                            <a class=\"dropdown-item\" href=\"#\"><i class=\"la la-print\"></i> Generate Report</a>\\\n                        </div>\\\n                    </div>\\\n                    <a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-sm\" title=\"Edit details\">\\\n                        <i class=\"flaticon2-file\"></i>\\\n                    </a>\\\n                    <a href=\"javascript:;\" class=\"btn btn-sm btn-clean btn-icon btn-icon-sm\" title=\"Delete\">\\\n                        <i class=\"flaticon2-delete\"></i>\\\n                    </a>\\\n                ';\n            },\n        }],\n    };\n\n    // basic demo\n    var localSelectorDemo = function() {\n\n        options.search = {\n            input: $('#generalSearch'),\n        };\n\n        var datatable = $('#local_record_selection').KTDatatable(options);\n\n        $('#kt_form_status').on('change', function() {\n            datatable.search($(this).val().toLowerCase(), 'status');\n        });\n\n        $('#kt_form_type').on('change', function() {\n            datatable.search($(this).val().toLowerCase(), 'type');\n        });\n\n        $('#kt_form_status,#kt_form_type').selectpicker();\n\n        datatable.on(\n            'kt-datatable--on-check kt-datatable--on-uncheck kt-datatable--on-layout-updated',\n            function(e) {\n                var checkedNodes = datatable.rows('.kt-datatable__row--active').nodes();\n                var count = checkedNodes.length;\n                $('#kt_datatable_selected_number').html(count);\n                if (count > 0) {\n                    $('#kt_datatable_group_action_form').collapse('show');\n                } else {\n                    $('#kt_datatable_group_action_form').collapse('hide');\n                }\n            });\n\n        $('#kt_modal_fetch_id').on('show.bs.modal', function(e) {\n            var ids = datatable.rows('.kt-datatable__row--active').\n            nodes().\n            find('.kt-checkbox--single > [type=\"checkbox\"]').\n            map(function(i, chk) {\n                return $(chk).val();\n            });\n            var c = document.createDocumentFragment();\n            for (var i = 0; i < ids.length; i++) {\n                var li = document.createElement('li');\n                li.setAttribute('data-id', ids[i]);\n                li.innerHTML = 'Selected record ID: ' + ids[i];\n                c.appendChild(li);\n            }\n            $(e.target).find('.kt_datatable_selected_ids').append(c);\n        }).on('hide.bs.modal', function(e) {\n            $(e.target).find('.kt_datatable_selected_ids').empty();\n        });\n\n    };\n\n    var serverSelectorDemo = function() {\n\n        // enable extension\n        options.extensions = {\n            checkbox: {},\n        };\n        options.search = {\n            input: $('#generalSearch1'),\n        };\n\n        var datatable = $('#server_record_selection').KTDatatable(options);\n\n        $('#kt_form_status1').on('change', function() {\n            datatable.search($(this).val().toLowerCase(), 'status');\n        });\n\n        $('#kt_form_type1').on('change', function() {\n            datatable.search($(this).val().toLowerCase(), 'type');\n        });\n\n        $('#kt_form_status1,#kt_form_type1').selectpicker();\n\n        datatable.on(\n            'kt-datatable--on-click-checkbox kt-datatable--on-layout-updated',\n            function(e) {\n                // datatable.checkbox() access to extension methods\n                var ids = datatable.checkbox().getSelectedId();\n                var count = ids.length;\n                $('#kt_datatable_selected_number1').html(count);\n                if (count > 0) {\n                    $('#kt_datatable_group_action_form1').collapse('show');\n                } else {\n                    $('#kt_datatable_group_action_form1').collapse('hide');\n                }\n            });\n\n        $('#kt_modal_fetch_id_server').on('show.bs.modal', function(e) {\n            var ids = datatable.checkbox().getSelectedId();\n            var c = document.createDocumentFragment();\n            for (var i = 0; i < ids.length; i++) {\n                var li = document.createElement('li');\n                li.setAttribute('data-id', ids[i]);\n                li.innerHTML = 'Selected record ID: ' + ids[i];\n                c.appendChild(li);\n            }\n            $(e.target).find('.kt_datatable_selected_ids').append(c);\n        }).on('hide.bs.modal', function(e) {\n            $(e.target).find('.kt_datatable_selected_ids').empty();\n        });\n\n    };\n\n    return {\n        // public functions\n        init: function() {\n            localSelectorDemo();\n            serverSelectorDemo();\n        }\n    };\n}();\n\njQuery(document).ready(function() {\n    KTDatatableRecordSelectionDemo.init();\n});\n\n//# sourceURL=webpack:///../src/assets/js/pages/components/keen-datatable/advanced/record-selection.js?");

/***/ })

/******/ });