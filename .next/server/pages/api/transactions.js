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
exports.id = "pages/api/transactions";
exports.ids = ["pages/api/transactions"];
exports.modules = {

/***/ "(api-node)/./lib/db.ts":
/*!*******************!*\
  !*** ./lib/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function connectDB() {\n    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections)[0].readyState) return;\n    await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL2xpYi9kYi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFekIsZUFBZUM7SUFDcEIsSUFBSUQsNkRBQW9CLENBQUMsRUFBRSxDQUFDRyxVQUFVLEVBQUU7SUFDeEMsTUFBTUgsdURBQWdCLENBQUNLLFFBQVFDLEdBQUcsQ0FBQ0MsU0FBUztBQUM5QyIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxVU0VSXFxEb3dubG9hZHNcXHBlcnNvbmFsLWZpbmFuY2UtdmlzdWFsaXplci1zdGFnZTNcXGxpYlxcZGIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbm5lY3REQigpIHtcbiAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb25zWzBdLnJlYWR5U3RhdGUpIHJldHVybjtcbiAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT19VUkkhKTtcbn0iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0aW9ucyIsInJlYWR5U3RhdGUiLCJjb25uZWN0IiwicHJvY2VzcyIsImVudiIsIk1PTkdPX1VSSSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./lib/db.ts\n");

/***/ }),

/***/ "(api-node)/./models/Transaction.ts":
/*!*******************************!*\
  !*** ./models/Transaction.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Transaction: () => (/* binding */ Transaction)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst TransactionSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    amount: Number,\n    date: String,\n    description: String,\n    category: String\n});\nconst Transaction = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Transaction || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Transaction\", TransactionSchema);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL21vZGVscy9UcmFuc2FjdGlvbi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsb0JBQW9CLElBQUlELHdEQUFlLENBQUM7SUFDNUNHLFFBQVFDO0lBQ1JDLE1BQU1DO0lBQ05DLGFBQWFEO0lBQ2JFLFVBQVVGO0FBQ1o7QUFFTyxNQUFNRyxjQUFjVCx3REFBZSxDQUFDUyxXQUFXLElBQUlULHFEQUFjLENBQUMsZUFBZUMsbUJBQW1CIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFVTRVJcXERvd25sb2Fkc1xccGVyc29uYWwtZmluYW5jZS12aXN1YWxpemVyLXN0YWdlM1xcbW9kZWxzXFxUcmFuc2FjdGlvbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuXG5jb25zdCBUcmFuc2FjdGlvblNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICBhbW91bnQ6IE51bWJlcixcbiAgZGF0ZTogU3RyaW5nLFxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxuICBjYXRlZ29yeTogU3RyaW5nLFxufSk7XG5cbmV4cG9ydCBjb25zdCBUcmFuc2FjdGlvbiA9IG1vbmdvb3NlLm1vZGVscy5UcmFuc2FjdGlvbiB8fCBtb25nb29zZS5tb2RlbChcIlRyYW5zYWN0aW9uXCIsIFRyYW5zYWN0aW9uU2NoZW1hKTsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJUcmFuc2FjdGlvblNjaGVtYSIsIlNjaGVtYSIsImFtb3VudCIsIk51bWJlciIsImRhdGUiLCJTdHJpbmciLCJkZXNjcmlwdGlvbiIsImNhdGVnb3J5IiwiVHJhbnNhY3Rpb24iLCJtb2RlbHMiLCJtb2RlbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api-node)/./models/Transaction.ts\n");

/***/ }),

/***/ "(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftransactions&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Ctransactions.ts&middlewareConfigBase64=e30%3D!":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftransactions&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Ctransactions.ts&middlewareConfigBase64=e30%3D! ***!
  \******************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/pages-api/module.compiled */ \"(api-node)/./node_modules/next/dist/server/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(api-node)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api-node)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_transactions_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages\\api\\transactions.ts */ \"(api-node)/./pages/api/transactions.ts\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_transactions_ts__WEBPACK_IMPORTED_MODULE_3__, 'default'));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_transactions_ts__WEBPACK_IMPORTED_MODULE_3__, 'config');\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/transactions\",\n        pathname: \"/api/transactions\",\n        // The following aren't used in production.\n        bundlePath: '',\n        filename: ''\n    },\n    userland: _pages_api_transactions_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtcm91dGUtbG9hZGVyL2luZGV4LmpzP2tpbmQ9UEFHRVNfQVBJJnBhZ2U9JTJGYXBpJTJGdHJhbnNhY3Rpb25zJnByZWZlcnJlZFJlZ2lvbj0mYWJzb2x1dGVQYWdlUGF0aD0uJTJGcGFnZXMlNUNhcGklNUN0cmFuc2FjdGlvbnMudHMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ0U7QUFDMUQ7QUFDMEQ7QUFDMUQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHVEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyx1REFBUTtBQUNwQztBQUNPLHdCQUF3Qix5R0FBbUI7QUFDbEQ7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9wYWdlcy1hcGkvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBob2lzdCB9IGZyb20gXCJuZXh0L2Rpc3QvYnVpbGQvdGVtcGxhdGVzL2hlbHBlcnNcIjtcbi8vIEltcG9ydCB0aGUgdXNlcmxhbmQgY29kZS5cbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIuL3BhZ2VzXFxcXGFwaVxcXFx0cmFuc2FjdGlvbnMudHNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgJ2RlZmF1bHQnKTtcbi8vIFJlLWV4cG9ydCBjb25maWcuXG5leHBvcnQgY29uc3QgY29uZmlnID0gaG9pc3QodXNlcmxhbmQsICdjb25maWcnKTtcbi8vIENyZWF0ZSBhbmQgZXhwb3J0IHRoZSByb3V0ZSBtb2R1bGUgdGhhdCB3aWxsIGJlIGNvbnN1bWVkLlxuZXhwb3J0IGNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IFBhZ2VzQVBJUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLlBBR0VTX0FQSSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3RyYW5zYWN0aW9uc1wiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL3RyYW5zYWN0aW9uc1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6ICcnLFxuICAgICAgICBmaWxlbmFtZTogJydcbiAgICB9LFxuICAgIHVzZXJsYW5kXG59KTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cGFnZXMtYXBpLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftransactions&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Ctransactions.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api-node)/./pages/api/transactions.ts":
/*!***********************************!*\
  !*** ./pages/api/transactions.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/db */ \"(api-node)/./lib/db.ts\");\n/* harmony import */ var _models_Transaction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/Transaction */ \"(api-node)/./models/Transaction.ts\");\n\n\nasync function handler(req, res) {\n    await (0,_lib_db__WEBPACK_IMPORTED_MODULE_0__.connectDB)();\n    if (req.method === 'GET') {\n        const transactions = await _models_Transaction__WEBPACK_IMPORTED_MODULE_1__.Transaction.find();\n        return res.status(200).json(transactions);\n    }\n    if (req.method === 'POST') {\n        const { amount, date, description, category } = req.body;\n        const transaction = await _models_Transaction__WEBPACK_IMPORTED_MODULE_1__.Transaction.create({\n            amount,\n            date,\n            description,\n            category\n        });\n        return res.status(201).json(transaction);\n    }\n    if (req.method === 'DELETE') {\n        const { id } = req.query;\n        await _models_Transaction__WEBPACK_IMPORTED_MODULE_1__.Transaction.findByIdAndDelete(id);\n        return res.status(200).json({\n            message: 'Deleted'\n        });\n    }\n    res.status(405).end();\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaS1ub2RlKS8uL3BhZ2VzL2FwaS90cmFuc2FjdGlvbnMudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ3lDO0FBQ2M7QUFFeEMsZUFBZUUsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0I7SUFDN0UsTUFBTUosa0RBQVNBO0lBRWYsSUFBSUcsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsTUFBTUMsZUFBZSxNQUFNTCw0REFBV0EsQ0FBQ00sSUFBSTtRQUMzQyxPQUFPSCxJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSDtJQUM5QjtJQUVBLElBQUlILElBQUlFLE1BQU0sS0FBSyxRQUFRO1FBQ3pCLE1BQU0sRUFBRUssTUFBTSxFQUFFQyxJQUFJLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFLEdBQUdWLElBQUlXLElBQUk7UUFDeEQsTUFBTUMsY0FBYyxNQUFNZCw0REFBV0EsQ0FBQ2UsTUFBTSxDQUFDO1lBQUVOO1lBQVFDO1lBQU1DO1lBQWFDO1FBQVM7UUFDbkYsT0FBT1QsSUFBSUksTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ007SUFDOUI7SUFFQSxJQUFJWixJQUFJRSxNQUFNLEtBQUssVUFBVTtRQUMzQixNQUFNLEVBQUVZLEVBQUUsRUFBRSxHQUFHZCxJQUFJZSxLQUFLO1FBQ3hCLE1BQU1qQiw0REFBV0EsQ0FBQ2tCLGlCQUFpQixDQUFDRjtRQUNwQyxPQUFPYixJQUFJSSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVXLFNBQVM7UUFBVTtJQUNuRDtJQUVBaEIsSUFBSUksTUFBTSxDQUFDLEtBQUthLEdBQUc7QUFDckIiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVVNFUlxcRG93bmxvYWRzXFxwZXJzb25hbC1maW5hbmNlLXZpc3VhbGl6ZXItc3RhZ2UzXFxwYWdlc1xcYXBpXFx0cmFuc2FjdGlvbnMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IHsgY29ubmVjdERCIH0gZnJvbSAnLi4vLi4vbGliL2RiJztcbmltcG9ydCB7IFRyYW5zYWN0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL1RyYW5zYWN0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBhd2FpdCBjb25uZWN0REIoKTtcblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ0dFVCcpIHtcbiAgICBjb25zdCB0cmFuc2FjdGlvbnMgPSBhd2FpdCBUcmFuc2FjdGlvbi5maW5kKCk7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRyYW5zYWN0aW9ucyk7XG4gIH1cblxuICBpZiAocmVxLm1ldGhvZCA9PT0gJ1BPU1QnKSB7XG4gICAgY29uc3QgeyBhbW91bnQsIGRhdGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSB9ID0gcmVxLmJvZHk7XG4gICAgY29uc3QgdHJhbnNhY3Rpb24gPSBhd2FpdCBUcmFuc2FjdGlvbi5jcmVhdGUoeyBhbW91bnQsIGRhdGUsIGRlc2NyaXB0aW9uLCBjYXRlZ29yeSB9KTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDEpLmpzb24odHJhbnNhY3Rpb24pO1xuICB9XG5cbiAgaWYgKHJlcS5tZXRob2QgPT09ICdERUxFVEUnKSB7XG4gICAgY29uc3QgeyBpZCB9ID0gcmVxLnF1ZXJ5O1xuICAgIGF3YWl0IFRyYW5zYWN0aW9uLmZpbmRCeUlkQW5kRGVsZXRlKGlkKTtcbiAgICByZXR1cm4gcmVzLnN0YXR1cygyMDApLmpzb24oeyBtZXNzYWdlOiAnRGVsZXRlZCcgfSk7XG4gIH1cblxuICByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG59Il0sIm5hbWVzIjpbImNvbm5lY3REQiIsIlRyYW5zYWN0aW9uIiwiaGFuZGxlciIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRyYW5zYWN0aW9ucyIsImZpbmQiLCJzdGF0dXMiLCJqc29uIiwiYW1vdW50IiwiZGF0ZSIsImRlc2NyaXB0aW9uIiwiY2F0ZWdvcnkiLCJib2R5IiwidHJhbnNhY3Rpb24iLCJjcmVhdGUiLCJpZCIsInF1ZXJ5IiwiZmluZEJ5SWRBbmREZWxldGUiLCJtZXNzYWdlIiwiZW5kIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api-node)/./pages/api/transactions.ts\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api-node)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Ftransactions&preferredRegion=&absolutePagePath=.%2Fpages%5Capi%5Ctransactions.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();