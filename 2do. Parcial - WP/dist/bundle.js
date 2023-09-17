/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./module/Calculos.js":
/*!****************************!*\
  !*** ./module/Calculos.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   dividir: () => (/* binding */ dividir),\n/* harmony export */   multiplicar: () => (/* binding */ multiplicar),\n/* harmony export */   restar: () => (/* binding */ restar),\n/* harmony export */   sumar: () => (/* binding */ sumar)\n/* harmony export */ });\n// Calculos.js (Módulo de Cálculos)\nfunction sumar(a, b) {\n  return a + b;\n}\nfunction restar(a, b) {\n  return a - b;\n}\nfunction multiplicar(a, b) {\n  return a * b;\n}\nfunction dividir(a, b) {\n  if (b === 0) {\n    return \"Error: División por cero\";\n  }\n  return a / b;\n}\n\n//# sourceURL=webpack:///./module/Calculos.js?");

/***/ }),

/***/ "./module/ConversionUnidades.js":
/*!**************************************!*\
  !*** ./module/ConversionUnidades.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   celsiusToFahrenheit: () => (/* binding */ celsiusToFahrenheit),\n/* harmony export */   fahrenheitToCelsius: () => (/* binding */ fahrenheitToCelsius)\n/* harmony export */ });\n// module/Conversion.js\nfunction celsiusToFahrenheit(celsius) {\n  return celsius * 9 / 5 + 32;\n}\nfunction fahrenheitToCelsius(fahrenheit) {\n  return (fahrenheit - 32) * 5 / 9;\n}\n\n//# sourceURL=webpack:///./module/ConversionUnidades.js?");

/***/ }),

/***/ "./module/Galeria.js":
/*!***************************!*\
  !*** ./module/Galeria.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cargarImagenes: () => (/* binding */ cargarImagenes)\n/* harmony export */ });\n// module/Galeria.js\nfunction cargarImagenes(imagenes) {\n  return imagenes.map((imagen, index) => {\n    return `<img src=\"${imagen}\" alt=\"Imagen ${index + 1}\" style=\"width: 200px; height: auto;\">`;\n  }).join('');\n}\n\n//# sourceURL=webpack:///./module/Galeria.js?");

/***/ }),

/***/ "./module/GeneradorContraseñas.js":
/*!****************************************!*\
  !*** ./module/GeneradorContraseñas.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generarContraseña\": () => (/* binding */ generarContraseña)\n/* harmony export */ });\n// module/GeneradorContraseñas.js\nfunction generarContraseña(longitud, incluirNumeros, incluirSimbolos) {\n  const letras = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';\n  const numeros = '0123456789';\n  const simbolos = '!@#$%^&*()_+~`|}{[]:;?><,./-=';\n  let caracteres = letras;\n  if (incluirNumeros) {\n    caracteres += numeros;\n  }\n  if (incluirSimbolos) {\n    caracteres += simbolos;\n  }\n  let contraseña = '';\n  for (let i = 0; i < longitud; i++) {\n    contraseña += caracteres.charAt(Math.floor(Math.random() * caracteres.length));\n  }\n  return contraseña;\n}\n\n//# sourceURL=webpack:///./module/GeneradorContrase%C3%B1as.js?");

/***/ }),

/***/ "./module/ListaTareas.js":
/*!*******************************!*\
  !*** ./module/ListaTareas.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   agregarTarea: () => (/* binding */ agregarTarea),\n/* harmony export */   completarTarea: () => (/* binding */ completarTarea),\n/* harmony export */   mostrarTareas: () => (/* binding */ mostrarTareas)\n/* harmony export */ });\n// module/ListaTareas.js\n\nlet tareas = [];\nfunction agregarTarea(tarea) {\n  tareas.push({\n    tarea,\n    completada: false\n  });\n}\nfunction completarTarea(index) {\n  if (tareas[index]) {\n    tareas[index].completada = true;\n  }\n}\nfunction mostrarTareas() {\n  return tareas;\n}\n\n//# sourceURL=webpack:///./module/ListaTareas.js?");

/***/ }),

/***/ "./module/aggregator.js":
/*!******************************!*\
  !*** ./module/aggregator.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   agregarTarea: () => (/* reexport safe */ _ListaTareas_js__WEBPACK_IMPORTED_MODULE_3__.agregarTarea),\n/* harmony export */   cargarImagenes: () => (/* reexport safe */ _Galeria_js__WEBPACK_IMPORTED_MODULE_2__.cargarImagenes),\n/* harmony export */   celsiusToFahrenheit: () => (/* reexport safe */ _ConversionUnidades_js__WEBPACK_IMPORTED_MODULE_1__.celsiusToFahrenheit),\n/* harmony export */   completarTarea: () => (/* reexport safe */ _ListaTareas_js__WEBPACK_IMPORTED_MODULE_3__.completarTarea),\n/* harmony export */   dividir: () => (/* reexport safe */ _Calculos_js__WEBPACK_IMPORTED_MODULE_0__.dividir),\n/* harmony export */   fahrenheitToCelsius: () => (/* reexport safe */ _ConversionUnidades_js__WEBPACK_IMPORTED_MODULE_1__.fahrenheitToCelsius),\n/* harmony export */   \"generarContraseña\": () => (/* reexport safe */ _GeneradorContrase_as_js__WEBPACK_IMPORTED_MODULE_4__[\"generarContraseña\"]),\n/* harmony export */   mostrarTareas: () => (/* reexport safe */ _ListaTareas_js__WEBPACK_IMPORTED_MODULE_3__.mostrarTareas),\n/* harmony export */   multiplicar: () => (/* reexport safe */ _Calculos_js__WEBPACK_IMPORTED_MODULE_0__.multiplicar),\n/* harmony export */   restar: () => (/* reexport safe */ _Calculos_js__WEBPACK_IMPORTED_MODULE_0__.restar),\n/* harmony export */   sumar: () => (/* reexport safe */ _Calculos_js__WEBPACK_IMPORTED_MODULE_0__.sumar)\n/* harmony export */ });\n/* harmony import */ var _Calculos_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Calculos.js */ \"./module/Calculos.js\");\n/* harmony import */ var _ConversionUnidades_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ConversionUnidades.js */ \"./module/ConversionUnidades.js\");\n/* harmony import */ var _Galeria_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Galeria.js */ \"./module/Galeria.js\");\n/* harmony import */ var _ListaTareas_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ListaTareas.js */ \"./module/ListaTareas.js\");\n/* harmony import */ var _GeneradorContrase_as_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GeneradorContraseñas.js */ \"./module/GeneradorContraseñas.js\");\n// // aggregator.js (Archivo de agregación de módulos)\n// import * as Calculos from './Calculos.js';\n// import * as ListaTareas from './ListaTareas.js';\n// import * as ConversionUnidades from './ConversionUnidades.js';\n// import * as GeneradorContraseñas from './GeneradorContraseñas.js';\n// import * as Galeria from './Galeria.js';\n\n// export default {\n//   Calculos,\n//   ListaTareas,\n//   ConversionUnidades,\n//   GeneradorContraseñas,\n//   Galeria\n\n// };\n// module/aggregator.js\n// import * as Calculos from './Calculos.js';\n\n// export default Calculos;\n\n// module/aggregator.js\n// export * from './Calculos.js';\n// export * from './ListaTareas.js';\n// export * from './ConversionUnidades.js';\n// export * from './GeneradorContraseñas.js';\n// export * from './Galeria.js';\n\n// module/aggregator.js\n\n\n // Asegúrate de importar Galeria.js\n\n\n\n\n\n\n\n//# sourceURL=webpack:///./module/aggregator.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./module/aggregator.js");
/******/ 	
/******/ })()
;