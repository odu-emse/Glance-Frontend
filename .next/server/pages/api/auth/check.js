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
exports.id = "pages/api/auth/check";
exports.ids = ["pages/api/auth/check"];
exports.modules = {

/***/ "google-auth-library":
/*!**************************************!*\
  !*** external "google-auth-library" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("google-auth-library");

/***/ }),

/***/ "(api)/./pages/api/auth/check.ts":
/*!*********************************!*\
  !*** ./pages/api/auth/check.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-auth-library */ \"google-auth-library\");\n/* harmony import */ var google_auth_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_auth_library__WEBPACK_IMPORTED_MODULE_0__);\n\n/* \n\n\tFIXME: Make this a POST request!\n\tUsing a query string is secure but also prone to accidents!\n\tSee https://stackoverflow.com/questions/323200/is-a-https-query-string-secure\n\n\tTL;DR Post bodies won't be logged which avoids exposing JWTs in server logs.\n\n*/ async function handler(req, res) {\n    const { token  } = req.query;\n    if (token === undefined || token === null) {\n        res.status(401).send(\"Unauthorized\");\n        return;\n    }\n    try {\n        const client = new google_auth_library__WEBPACK_IMPORTED_MODULE_0__.OAuth2Client(process.env.NEXT_PUBLIC_GOOGLE_ID);\n        const response = await client.verifyIdToken({\n            idToken: token,\n            audience: process.env.NEXT_PUBLIC_GOOGLE_ID\n        });\n        res.status(200).json(response.getPayload());\n        return;\n    } catch (e) {\n        res.status(401).send(\"Unauthorized\");\n        return;\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9jaGVjay50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUQ7QUFHbkQ7Ozs7Ozs7O0FBUUEsR0FFZSxlQUFlQyxPQUFPLENBQUNDLEdBQW1CLEVBQUVDLEdBQW9CLEVBQUU7SUFDaEYsTUFBTSxFQUFFQyxLQUFLLEdBQUUsR0FBR0YsR0FBRyxDQUFDRyxLQUFLO0lBRTNCLElBQUdELEtBQUssS0FBS0UsU0FBUyxJQUFJRixLQUFLLEtBQUssSUFBSSxFQUFFO1FBQ3pDRCxHQUFHLENBQUNJLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3JDLE9BQU87S0FDUDtJQUVELElBQUk7UUFDSCxNQUFNQyxNQUFNLEdBQUcsSUFBSVQsNkRBQVksQ0FBQ1UsT0FBTyxDQUFDQyxHQUFHLENBQUNDLHFCQUFxQixDQUFDO1FBQ2xFLE1BQU1DLFFBQVEsR0FBRyxNQUFNSixNQUFNLENBQUNLLGFBQWEsQ0FBQztZQUMzQ0MsT0FBTyxFQUFFWCxLQUFLO1lBQ2RZLFFBQVEsRUFBRU4sT0FBTyxDQUFDQyxHQUFHLENBQUNDLHFCQUFxQjtTQUMzQyxDQUFDO1FBQ0ZULEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDVSxJQUFJLENBQUNKLFFBQVEsQ0FBQ0ssVUFBVSxFQUFFLENBQUMsQ0FBQztRQUM1QyxPQUFPO0tBQ1AsQ0FBQyxPQUFPQyxDQUFDLEVBQUU7UUFDWGhCLEdBQUcsQ0FBQ0ksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDckMsT0FBTztLQUNQO0NBQ0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mcm9udGVuZC8uL3BhZ2VzL2FwaS9hdXRoL2NoZWNrLnRzP2U3YmIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT0F1dGgyQ2xpZW50IH0gZnJvbSAnZ29vZ2xlLWF1dGgtbGlicmFyeSc7XG5pbXBvcnQgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSAnbmV4dCc7XG5cbi8qIFxuXG5cdEZJWE1FOiBNYWtlIHRoaXMgYSBQT1NUIHJlcXVlc3QhXG5cdFVzaW5nIGEgcXVlcnkgc3RyaW5nIGlzIHNlY3VyZSBidXQgYWxzbyBwcm9uZSB0byBhY2NpZGVudHMhXG5cdFNlZSBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zMjMyMDAvaXMtYS1odHRwcy1xdWVyeS1zdHJpbmctc2VjdXJlXG5cblx0VEw7RFIgUG9zdCBib2RpZXMgd29uJ3QgYmUgbG9nZ2VkIHdoaWNoIGF2b2lkcyBleHBvc2luZyBKV1RzIGluIHNlcnZlciBsb2dzLlxuXG4qL1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG5cdGNvbnN0IHsgdG9rZW4gfSA9IHJlcS5xdWVyeTtcblxuXHRpZih0b2tlbiA9PT0gdW5kZWZpbmVkIHx8IHRva2VuID09PSBudWxsKSB7XG5cdFx0cmVzLnN0YXR1cyg0MDEpLnNlbmQoJ1VuYXV0aG9yaXplZCcpO1xuXHRcdHJldHVybjtcblx0fVxuXG5cdHRyeSB7XG5cdFx0Y29uc3QgY2xpZW50ID0gbmV3IE9BdXRoMkNsaWVudChwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19HT09HTEVfSUQpO1xuXHRcdGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgY2xpZW50LnZlcmlmeUlkVG9rZW4oe1xuXHRcdFx0aWRUb2tlbjogdG9rZW4sXG5cdFx0XHRhdWRpZW5jZTogcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfR09PR0xFX0lELFxuXHRcdH0pO1xuXHRcdHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3BvbnNlLmdldFBheWxvYWQoKSk7XG5cdFx0cmV0dXJuO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmVzLnN0YXR1cyg0MDEpLnNlbmQoJ1VuYXV0aG9yaXplZCcpO1xuXHRcdHJldHVybjtcblx0fVxufVxuIl0sIm5hbWVzIjpbIk9BdXRoMkNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsInF1ZXJ5IiwidW5kZWZpbmVkIiwic3RhdHVzIiwic2VuZCIsImNsaWVudCIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19HT09HTEVfSUQiLCJyZXNwb25zZSIsInZlcmlmeUlkVG9rZW4iLCJpZFRva2VuIiwiYXVkaWVuY2UiLCJqc29uIiwiZ2V0UGF5bG9hZCIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/check.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/check.ts"));
module.exports = __webpack_exports__;

})();