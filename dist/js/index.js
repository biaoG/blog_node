webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _reactDom = __webpack_require__(32);
	
	var _app = __webpack_require__(183);
	
	var _app2 = _interopRequireDefault(_app);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	(0, _reactDom.render)(_react2.default.createElement(_app2.default, null), document.getElementById("app"));

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _resetDom = __webpack_require__(184);
	
	var _header_user = __webpack_require__(185);
	
	var _header_user2 = _interopRequireDefault(_header_user);
	
	var _foot_nav = __webpack_require__(186);
	
	var _foot_nav2 = _interopRequireDefault(_foot_nav);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var App = function (_Component) {
		_inherits(App, _Component);
	
		function App() {
			_classCallCheck(this, App);
	
			return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
		}
	
		_createClass(App, [{
			key: 'componentWillMount',
			value: function componentWillMount() {
				(0, _resetDom.reset)();
			}
		}, {
			key: 'render',
			value: function render() {
				return _react2.default.createElement(
					'div',
					{ className: 'page-group' },
					_react2.default.createElement(
						'div',
						{ className: 'page' },
						_react2.default.createElement(_header_user2.default, null),
						_react2.default.createElement(_foot_nav2.default, null)
					)
				);
			}
		}]);
	
		return App;
	}(_react.Component);
	
	exports.default = App;

/***/ },

/***/ 184:
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.reset = reset;
	function reset() {
		var bWidth = document.body.clientWidth;
		bWidth = bWidth > 640 ? 640 : bWidth;
		var size = bWidth / 320 * 20;
		document.getElementsByTagName('html')[0].style.fontSize = size + 'px';
	}

/***/ },

/***/ 185:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var HeaderUser = function (_Component) {
		_inherits(HeaderUser, _Component);
	
		function HeaderUser() {
			_classCallCheck(this, HeaderUser);
	
			return _possibleConstructorReturn(this, (HeaderUser.__proto__ || Object.getPrototypeOf(HeaderUser)).apply(this, arguments));
		}
	
		_createClass(HeaderUser, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"header",
					{ className: "bar nav blue" },
					_react2.default.createElement(
						"a",
						{ href: "", className: "icon ico-img avator-defaut pull-left" },
						_react2.default.createElement("img", { src: "./assets/ico/avator.png" })
					),
					_react2.default.createElement("h1", { className: "title" }),
					_react2.default.createElement(
						"a",
						{ href: "", className: "icon ico-img bell pull-right" },
						_react2.default.createElement("img", { src: "./assets/ico/bell.png" })
					)
				);
			}
		}]);
	
		return HeaderUser;
	}(_react.Component);
	
	exports.default = HeaderUser;

/***/ },

/***/ 186:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var FootNav = function (_Component) {
		_inherits(FootNav, _Component);
	
		function FootNav() {
			_classCallCheck(this, FootNav);
	
			return _possibleConstructorReturn(this, (FootNav.__proto__ || Object.getPrototypeOf(FootNav)).apply(this, arguments));
		}
	
		_createClass(FootNav, [{
			key: "render",
			value: function render() {
				return _react2.default.createElement(
					"nav",
					{ className: "bar bar-tab" },
					_react2.default.createElement(
						"a",
						{ className: "tab-item active", href: "#" },
						_react2.default.createElement("span", { className: "icon icon-home" }),
						_react2.default.createElement(
							"span",
							{ className: "tab-label" },
							"\u9996\u9875"
						)
					),
					_react2.default.createElement(
						"a",
						{ className: "tab-item", href: "#" },
						_react2.default.createElement("span", { className: "icon icon-bl" }),
						_react2.default.createElement(
							"span",
							{ className: "tab-label" },
							"\u767D\u62FF"
						)
					),
					_react2.default.createElement(
						"a",
						{ className: "tab-item ", href: "#" },
						_react2.default.createElement("span", { className: "icon icon-gs" }),
						_react2.default.createElement(
							"span",
							{ className: "tab-label" },
							"\u56FA\u6536"
						)
					),
					_react2.default.createElement(
						"a",
						{ className: "tab-item ", href: "#" },
						_react2.default.createElement("span", { className: "icon icon-fx" }),
						_react2.default.createElement(
							"span",
							{ className: "tab-label" },
							"\u53D1\u73B0"
						)
					)
				);
			}
		}]);
	
		return FootNav;
	}(_react.Component);
	
	exports.default = FootNav;

/***/ }

});
//# sourceMappingURL=index.js.map