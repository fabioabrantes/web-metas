webpackHotUpdate_N_E("pages/cadastrar",{

/***/ "./pages/cadastrar.js":
/*!****************************!*\
  !*** ./pages/cadastrar.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! reactstrap */ "./node_modules/reactstrap/es/index.js");






var _jsxFileName = "D:\\cursos\\ImersaoCelke\\web\\pages\\cadastrar.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




function cadastrar() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    name: '',
    description: '',
    status: ''
  }),
      meta = _useState[0],
      setMeta = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    formSave: false,
    type: '',
    message: ''
  }),
      response = _useState2[0],
      setResponse = _useState2[1];

  var onChangeInput = function onChangeInput(e) {
    return setMeta(_objectSpread(_objectSpread({}, meta), {}, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, e.target.name, e.target.value)));
  };

  var sendMeta = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(e) {
      var res, responseEnv;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              e.preventDefault();
              setResponse({
                formSave: true
              });
              _context.prev = 2;
              _context.next = 5;
              return fetch('http://localhost:8080/metas', {
                method: 'POST',
                body: JSON.stringify(meta),
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                }
              });

            case 5:
              res = _context.sent;
              _context.next = 8;
              return res.json();

            case 8:
              responseEnv = _context.sent;

              if (responseEnv.error) {
                setResponse({
                  formSave: false,
                  type: 'error',
                  message: responseEnv.message
                });
              } else {
                setResponse({
                  formSave: false,
                  type: 'success',
                  message: responseEnv.message
                });
              }

              _context.next = 15;
              break;

            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](2);
              setResponse({
                formSave: false,
                type: 'error',
                message: 'Erro: meta não cadastrada com sucesso'
              });

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 12]]);
    }));

    return function sendMeta(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_5__["Jumbotron"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 5
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("h1", {
      children: "Cadastrar minha meta."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this), response.type === 'error' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: [" ", response.message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 35
    }, this) : "", response.type === 'success' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("p", {
      children: [" ", response.message]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 36
    }, this) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("form", {
      onSubmit: sendMeta,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: "Nome"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        name: "name",
        id: "name",
        placeholder: "Nome da meta",
        onChange: onChangeInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 12
      }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 74,
        columnNumber: 19
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: "Descri\xE7\xE3o"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        name: "description",
        id: "description",
        placeholder: "Descri\xE7\xE3o da meta",
        onChange: onChangeInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 11
      }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 83,
        columnNumber: 18
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("label", {
        children: "Status"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 85,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("input", {
        type: "text",
        name: "status",
        id: "status",
        placeholder: "Status da meta",
        onChange: onChangeInput
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 11
      }, this), " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("br", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 18
      }, this), response.formSave ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        type: "submit",
        disabled: true,
        children: "Enviando ... "
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 28
      }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__["jsxDEV"])("button", {
        type: "submit",
        children: "Cadastrar"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 82
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 7
    }, this)]
  }, void 0, true);
}

_s(cadastrar, "VvpKBtLNy7DfAmEuabW7dYIziqU=");

/* harmony default export */ __webpack_exports__["default"] = (cadastrar);

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2FkYXN0cmFyLmpzIl0sIm5hbWVzIjpbImNhZGFzdHJhciIsInVzZVN0YXRlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwic3RhdHVzIiwibWV0YSIsInNldE1ldGEiLCJmb3JtU2F2ZSIsInR5cGUiLCJtZXNzYWdlIiwicmVzcG9uc2UiLCJzZXRSZXNwb25zZSIsIm9uQ2hhbmdlSW5wdXQiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJzZW5kTWV0YSIsInByZXZlbnREZWZhdWx0IiwiZmV0Y2giLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsImhlYWRlcnMiLCJyZXMiLCJqc29uIiwicmVzcG9uc2VFbnYiLCJlcnJvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFHQSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsa0JBRUtDLHNEQUFRLENBQUM7QUFDL0JDLFFBQUksRUFBRSxFQUR5QjtBQUUvQkMsZUFBVyxFQUFFLEVBRmtCO0FBRy9CQyxVQUFNLEVBQUU7QUFIdUIsR0FBRCxDQUZiO0FBQUEsTUFFWkMsSUFGWTtBQUFBLE1BRU5DLE9BRk07O0FBQUEsbUJBUWFMLHNEQUFRLENBQUM7QUFDdkNNLFlBQVEsRUFBQyxLQUQ4QjtBQUV2Q0MsUUFBSSxFQUFDLEVBRmtDO0FBR3ZDQyxXQUFPLEVBQUM7QUFIK0IsR0FBRCxDQVJyQjtBQUFBLE1BUVpDLFFBUlk7QUFBQSxNQVFGQyxXQVJFOztBQWNuQixNQUFNQyxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUFDLENBQUM7QUFBQSxXQUFJUCxPQUFPLGlDQUFNRCxJQUFOLHFHQUFhUSxDQUFDLENBQUNDLE1BQUYsQ0FBU1osSUFBdEIsRUFBNkJXLENBQUMsQ0FBQ0MsTUFBRixDQUFTQyxLQUF0QyxHQUFYO0FBQUEsR0FBdkI7O0FBRUEsTUFBTUMsUUFBUTtBQUFBLGdNQUFHLGlCQUFPSCxD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QUUsRUFBQyxRQUhMO0FBSUUsbUJBQVcsRUFBQyxnQkFKZDtBQUtFLGdCQUFRLEVBQUVBO0FBTFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQXBCRixlQTBCSTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJKLG9CQTBCVztBQUFBO0FBQUE7QUFBQTtBQUFBLGNBMUJYLEVBNEJHRixRQUFRLENBQUNILFFBQVQsZ0JBQWtCO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBc0IsZ0JBQVEsTUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBbEIsZ0JBQXdFO0FBQVEsWUFBSSxFQUFDLFFBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0E1QjNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGO0FBQUEsa0JBREY7QUEwQ0Q7O0dBN0ZRUCxTOztBQWdHTUEsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvY2FkYXN0cmFyLjY1ODY0OTQ0YTczZDBhOTg0Njk5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7SnVtYm90cm9ufSBmcm9tICdyZWFjdHN0cmFwJztcclxuXHJcblxyXG5mdW5jdGlvbiBjYWRhc3RyYXIoKSB7XHJcblxyXG4gIGNvbnN0IFttZXRhLCBzZXRNZXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIG5hbWU6ICcnLFxyXG4gICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgc3RhdHVzOiAnJ1xyXG4gIH0pO1xyXG5cclxuICBjb25zdCBbcmVzcG9uc2UsIHNldFJlc3BvbnNlXSA9IHVzZVN0YXRlKHtcclxuICAgIGZvcm1TYXZlOmZhbHNlLFxyXG4gICAgdHlwZTonJyxcclxuICAgIG1lc3NhZ2U6JydcclxuICB9KVxyXG5cclxuICBjb25zdCBvbkNoYW5nZUlucHV0ID0gZSA9PiBzZXRNZXRhKHsgLi4ubWV0YSwgW2UudGFyZ2V0Lm5hbWVdOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuXHJcbiAgY29uc3Qgc2VuZE1ldGEgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0UmVzcG9uc2Uoe2Zvcm1TYXZlOnRydWV9KTtcclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnaHR0cDovL2xvY2FsaG9zdDo4MDgwL21ldGFzJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG1ldGEpLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJywnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBjb25zdCByZXNwb25zZUVudiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICAgIGlmIChyZXNwb25zZUVudi5lcnJvcikge1xyXG4gICAgICAgIHNldFJlc3BvbnNlKHtcclxuICAgICAgICAgIGZvcm1TYXZlOmZhbHNlLFxyXG4gICAgICAgICAgdHlwZTonZXJyb3InLFxyXG4gICAgICAgICAgbWVzc2FnZTpyZXNwb25zZUVudi5tZXNzYWdlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2V0UmVzcG9uc2Uoe1xyXG4gICAgICAgICAgZm9ybVNhdmU6ZmFsc2UsXHJcbiAgICAgICAgICB0eXBlOidzdWNjZXNzJyxcclxuICAgICAgICAgIG1lc3NhZ2U6cmVzcG9uc2VFbnYubWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBzZXRSZXNwb25zZSh7XHJcbiAgICAgICAgZm9ybVNhdmU6ZmFsc2UsXHJcbiAgICAgICAgdHlwZTonZXJyb3InLFxyXG4gICAgICAgIG1lc3NhZ2U6J0Vycm86IG1ldGEgbsOjbyBjYWRhc3RyYWRhIGNvbSBzdWNlc3NvJ1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgIDxKdW1ib3Ryb24+PC9KdW1ib3Ryb24+XHJcbiAgICAgIDxoMT5DYWRhc3RyYXIgbWluaGEgbWV0YS48L2gxPlxyXG4gICAgICA8aHIgLz5cclxuICAgICAge1xyXG4gICAgICAgIHJlc3BvbnNlLnR5cGUgPT09J2Vycm9yJz8gPHA+IHtyZXNwb25zZS5tZXNzYWdlfTwvcD46XCJcIlxyXG4gICAgICB9XHJcbiAgICAgIHtyZXNwb25zZS50eXBlID09PSdzdWNjZXNzJz8gPHA+IHtyZXNwb25zZS5tZXNzYWdlfTwvcD46XCJcIn1cclxuXHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtzZW5kTWV0YX0+XHJcbiAgICAgICAgPGxhYmVsPk5vbWU8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cIm5hbWVcIlxyXG4gICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTm9tZSBkYSBtZXRhXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtvbkNoYW5nZUlucHV0fVxyXG4gICAgICAgIC8+IDxiciAvPiA8YnIgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsPkRlc2NyacOnw6NvPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiIFxyXG4gICAgICAgICAgaWQ9XCJkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIkRlc2NyacOnw6NvIGRhIG1ldGFcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSW5wdXR9XHJcbiAgICAgICAgLz48YnIgLz4gPGJyIC8+XHJcblxyXG4gICAgICAgIDxsYWJlbD5TdGF0dXM8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgbmFtZT1cInN0YXR1c1wiIFxyXG4gICAgICAgICAgaWQ9XCJzdGF0dXNcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJTdGF0dXMgZGEgbWV0YVwiXHJcbiAgICAgICAgICBvbkNoYW5nZT17b25DaGFuZ2VJbnB1dH1cclxuICAgICAgICAvPjxiciAvPiA8YnIgLz5cclxuICAgICAgICBcclxuICAgICAgICB7cmVzcG9uc2UuZm9ybVNhdmU/PGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgZGlzYWJsZWQ+RW52aWFuZG8gLi4uIDwvYnV0dG9uPjo8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5DYWRhc3RyYXI8L2J1dHRvbj4gfVxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjYWRhc3RyYXIiXSwic291cmNlUm9vdCI6IiJ9