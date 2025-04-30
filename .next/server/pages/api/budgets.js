"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/budgets";
exports.ids = ["pages/api/budgets"];
exports.modules = {

/***/ "(api-node)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDB() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) return;\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsZUFBZUM7SUFDcEIsSUFBSUQsNkRBQW9CLENBQUMsRUFBRSxDQUFDRyxVQUFVLEVBQUU7SUFDeEMsTUFBTUgsdURBQWdCLENBQUNLLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztBQUM5QyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXHBlcnNvbmFsLWZpbmFuY2UtdmlzdWFsaXplci1zdGFnZTNcXGxpYlxcZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkkhKTtcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/db.ts\n");

/***/ }),

/***/ "(api-node)/./models/Budget.ts":
/*!**************************!*\
  !*** ./models/Budget.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Budget: () => (/* binding */ Budget)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst BudgetSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    category: String,\n    amount: Number,\n    month: String\n});\nconst Budget = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Budget || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Budget\", BudgetSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL21vZGVscy9CdWRnZXQudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGVBQWUsSUFBSUQsd0RBQWUsQ0FBQztJQUN2Q0csVUFBVUM7SUFDVkMsUUFBUUM7SUFDUkMsT0FBT0g7QUFDVDtBQUVPLE1BQU1JLFNBQVNSLHdEQUFlLENBQUNRLE1BQU0sSUFBSVIscURBQWMsQ0FBQyxVQUFVQyxjQUFjIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xccGVyc29uYWwtZmluYW5jZS12aXN1YWxpemVyLXN0YWdlM1xcbW9kZWxzXFxCdWRnZXQudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgQnVkZ2V0U2NoZW1hID0gbmV3IG1vbmdvb3NlLlNjaGVtYSh7XG4gIGNhdGVnb3J5OiBTdHJpbmcsXG4gIGFtb3VudDogTnVtYmVyLFxuICBtb250aDogU3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBCdWRnZXQgPSBtb25nb29zZS5tb2RlbHMuQnVkZ2V0IHx8IG1vbmdvb3NlLm1vZGVsKFwiQnVkZ2V0XCIsIEJ1ZGdldFNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiQnVkZ2V0U2NoZW1hIiwiU2NoZW1hIiwiY2F0ZWdvcnkiLCJTdHJpbmciLCJhbW91bnQiLCJOdW1iZXIiLCJtb250aCIsIkJ1ZGdldCIsIm1vZGVscyIsIm1vZGVsIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./models/Budget.ts\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fbudgets&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cbudgets.ts&middlewareConfigBase64=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fbudgets&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cbudgets.ts&middlewareConfigBase64=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_budgets_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\budgets.ts */ \"(api-node)/./pages/api/budgets.ts\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_budgets_ts__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_budgets_ts__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/budgets\",\n        pathname: \"/api/budgets\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_budgets_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGYnVkZ2V0cyZwcmVmZXJyZWRSZWdpb249JmFic29sdXRlUGFnZVBhdGg9LiUyRnBhZ2VzJTVDYXBpJTVDYnVkZ2V0cy50cyZtaWRkbGV3YXJlQ29uZmlnQmFzZTY0PWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDRTtBQUMxRDtBQUNxRDtBQUNyRDtBQUNBLGlFQUFlLHdFQUFLLENBQUMsa0RBQVEsWUFBWSxFQUFDO0FBQzFDO0FBQ08sZUFBZSx3RUFBSyxDQUFDLGtEQUFRO0FBQ3BDO0FBQ08sd0JBQXdCLHlHQUFtQjtBQUNsRDtBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxZQUFZO0FBQ1osQ0FBQzs7QUFFRCIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBhZ2VzQVBJUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL3BhZ2VzLWFwaS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXNcXFxcYXBpXFxcXGJ1ZGdldHMudHNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2J1ZGdldHNcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9idWRnZXRzXCIsXG4gICAgICAgIC8vIFRoZSBmb2xsb3dpbmcgYXJlbid0IHVzZWQgaW4gcHJvZHVjdGlvbi5cbiAgICAgICAgYnVuZGxlUGF0aDogJycsXG4gICAgICAgIGZpbGVuYW1lOiAnJ1xuICAgIH0sXG4gICAgdXNlcmxhbmRcbn0pO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1wYWdlcy1hcGkuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fbudgets&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cbudgets.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/budgets.ts":
/*!******************************!*\
  !*** ./pages/api/budgets.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api-node)/./lib/db.ts\");\n/* harmony import */ var _models_Budget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Budget */ \"(api-node)/./models/Budget.ts\");\n\n\nasync function handler(req, res) {\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\n    if (req.method === 'GET') {\n        const month = req.query.month;\n        const budgets = await _models_Budget__WEBPACK_IMPORTED_MODULE_1__.Budget.find(month ? {\n            month\n        } : {});\n        return res.status(200).json(budgets);\n    }\n    if (req.method === 'POST') {\n        const { category, amount, month } = req.body;\n        const existing = await _models_Budget__WEBPACK_IMPORTED_MODULE_1__.Budget.findOne({\n            category,\n            month\n        });\n        if (existing) await existing.deleteOne();\n        const newBudget = await _models_Budget__WEBPACK_IMPORTED_MODULE_1__.Budget.create({\n            category,\n            amount,\n            month\n        });\n        return res.status(201).json(newBudget);\n    }\n    res.status(405).end();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS9idWRnZXRzLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUN5QztBQUNJO0FBRTlCLGVBQWVFLFFBQVFDLEdBQW1CLEVBQUVDLEdBQW9CO0lBQzdFLE1BQU1KLGtEQUFTQTtJQUVmLElBQUlHLElBQUlFLE1BQU0sS0FBSyxPQUFPO1FBQ3hCLE1BQU1DLFFBQVFILElBQUlJLEtBQUssQ0FBQ0QsS0FBSztRQUM3QixNQUFNRSxVQUFVLE1BQU1QLGtEQUFNQSxDQUFDUSxJQUFJLENBQUNILFFBQVE7WUFBRUE7UUFBTSxJQUFJLENBQUM7UUFDdkQsT0FBT0YsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ0g7SUFDOUI7SUFFQSxJQUFJTCxJQUFJRSxNQUFNLEtBQUssUUFBUTtRQUN6QixNQUFNLEVBQUVPLFFBQVEsRUFBRUMsTUFBTSxFQUFFUCxLQUFLLEVBQUUsR0FBR0gsSUFBSVcsSUFBSTtRQUM1QyxNQUFNQyxXQUFXLE1BQU1kLGtEQUFNQSxDQUFDZSxPQUFPLENBQUM7WUFBRUo7WUFBVU47UUFBTTtRQUN4RCxJQUFJUyxVQUFVLE1BQU1BLFNBQVNFLFNBQVM7UUFDdEMsTUFBTUMsWUFBWSxNQUFNakIsa0RBQU1BLENBQUNrQixNQUFNLENBQUM7WUFBRVA7WUFBVUM7WUFBUVA7UUFBTTtRQUNoRSxPQUFPRixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDTztJQUM5QjtJQUVBZCxJQUFJTSxNQUFNLENBQUMsS0FBS1UsR0FBRztBQUNyQiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXHBlcnNvbmFsLWZpbmFuY2UtdmlzdWFsaXplci1zdGFnZTNcXHBhZ2VzXFxhcGlcXGJ1ZGdldHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSAnLi4vLi4vbGliL2RiJztcbmltcG9ydCB7IEJ1ZGdldCB9IGZyb20gJy4uLy4uL21vZGVscy9CdWRnZXQnO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gIGF3YWl0IGNvbm5lY3REQigpO1xuXG4gIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuICAgIGNvbnN0IG1vbnRoID0gcmVxLnF1ZXJ5Lm1vbnRoO1xuICAgIGNvbnN0IGJ1ZGdldHMgPSBhd2FpdCBCdWRnZXQuZmluZChtb250aCA/IHsgbW9udGggfSA6IHt9KTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oYnVkZ2V0cyk7XG4gIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgeyBjYXRlZ29yeSwgYW1vdW50LCBtb250aCB9ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgZXhpc3RpbmcgPSBhd2FpdCBCdWRnZXQuZmluZE9uZSh7IGNhdGVnb3J5LCBtb250aCB9KTtcbiAgICBpZiAoZXhpc3RpbmcpIGF3YWl0IGV4aXN0aW5nLmRlbGV0ZU9uZSgpO1xuICAgIGNvbnN0IG5ld0J1ZGdldCA9IGF3YWl0IEJ1ZGdldC5jcmVhdGUoeyBjYXRlZ29yeSwgYW1vdW50LCBtb250aCB9KTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24obmV3QnVkZ2V0KTtcbiAgfVxuXG4gIHJlcy5zdGF0dXMoNDA1KS5lbmQoKTtcbn0iXSwibmFtZXMiOlsiY29ubmVjdERCIiwiQnVkZ2V0IiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsIm1vbnRoIiwicXVlcnkiLCJidWRnZXRzIiwiZmluZCIsInN0YXR1cyIsImpzb24iLCJjYXRlZ29yeSIsImFtb3VudCIsImJvZHkiLCJleGlzdGluZyIsImZpbmRPbmUiLCJkZWxldGVPbmUiLCJuZXdCdWRnZXQiLCJjcmVhdGUiLCJlbmQiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/budgets.ts\n");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fbudgets&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Cbudgets.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();