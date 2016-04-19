(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _arrowDown = require('./icons/arrow-down');

var _arrowDown2 = _interopRequireDefault(_arrowDown);

var _arrowUp = require('./icons/arrow-up');

var _arrowUp2 = _interopRequireDefault(_arrowUp);

var _arrowRight = require('./icons/arrow-right');

var _arrowRight2 = _interopRequireDefault(_arrowRight);

var _arrowLeft = require('./icons/arrow-left');

var _arrowLeft2 = _interopRequireDefault(_arrowLeft);

var _check = require('./icons/check');

var _check2 = _interopRequireDefault(_check);

var _debugger = require('./icons/debugger');

var _debugger2 = _interopRequireDefault(_debugger);

var _events = require('./icons/events');

var _events2 = _interopRequireDefault(_events);

var _integrations = require('./icons/integrations');

var _integrations2 = _interopRequireDefault(_integrations);

var _billing = require('./icons/billing');

var _billing2 = _interopRequireDefault(_billing);

var _builder = require('./icons/builder');

var _builder2 = _interopRequireDefault(_builder);

var _redshift = require('./icons/redshift');

var _redshift2 = _interopRequireDefault(_redshift);

var _docs = require('./icons/docs');

var _docs2 = _interopRequireDefault(_docs);

var _help = require('./icons/help');

var _help2 = _interopRequireDefault(_help);

var _cog = require('./icons/cog');

var _cog2 = _interopRequireDefault(_cog);

var _lock = require('./icons/lock');

var _lock2 = _interopRequireDefault(_lock);

var _plus = require('./icons/plus');

var _plus2 = _interopRequireDefault(_plus);

var _notes = require('./icons/notes');

var _notes2 = _interopRequireDefault(_notes);

var _list = require('./icons/list');

var _list2 = _interopRequireDefault(_list);

var _search = require('./icons/search');

var _search2 = _interopRequireDefault(_search);

var _bolt = require('./icons/bolt');

var _bolt2 = _interopRequireDefault(_bolt);

var _iphone = require('./icons/iphone');

var _iphone2 = _interopRequireDefault(_iphone);

var _browser = require('./icons/browser');

var _browser2 = _interopRequireDefault(_browser);

var _traits = require('./icons/traits');

var _traits2 = _interopRequireDefault(_traits);

var _cross = require('./icons/cross');

var _cross2 = _interopRequireDefault(_cross);

var _switch = require('./icons/switch');

var _switch2 = _interopRequireDefault(_switch);

var _array = require('./icons/array');

var _array2 = _interopRequireDefault(_array);

var _date = require('./icons/date');

var _date2 = _interopRequireDefault(_date);

var _string = require('./icons/string');

var _string2 = _interopRequireDefault(_string);

var _number = require('./icons/number');

var _number2 = _interopRequireDefault(_number);

var _object = require('./icons/object');

var _object2 = _interopRequireDefault(_object);

var _graph = require('./icons/graph');

var _graph2 = _interopRequireDefault(_graph);

var _checklist = require('./icons/checklist');

var _checklist2 = _interopRequireDefault(_checklist);

var _projects = require('./icons/projects');

var _projects2 = _interopRequireDefault(_projects);

var _team = require('./icons/team');

var _team2 = _interopRequireDefault(_team);

var _key = require('./icons/key');

var _key2 = _interopRequireDefault(_key);

var _statusIcon = require('./icons/status-icon');

var _statusIcon2 = _interopRequireDefault(_statusIcon);

var _sync = require('./icons/sync');

var _sync2 = _interopRequireDefault(_sync);

var _done = require('./icons/done');

var _done2 = _interopRequireDefault(_done);

var _error = require('./icons/error');

var _error2 = _interopRequireDefault(_error);

var _gear = require('./icons/gear');

var _gear2 = _interopRequireDefault(_gear);

var _tooltip = require('./icons/tooltip');

var _tooltip2 = _interopRequireDefault(_tooltip);

var _alert = require('./icons/alert');

var _alert2 = _interopRequireDefault(_alert);

var _inbound = require('./icons/inbound');

var _inbound2 = _interopRequireDefault(_inbound);

var _outbound = require('./icons/outbound');

var _outbound2 = _interopRequireDefault(_outbound);

var _dot = require('./icons/dot');

var _dot2 = _interopRequireDefault(_dot);

var _close = require('./icons/close');

var _close2 = _interopRequireDefault(_close);

var _warning = require('./icons/warning');

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = {
  'cog': _cog2.default,
  'check': _check2.default,
  'lock': _lock2.default,
  'plus': _plus2.default,
  'arrow-down': _arrowDown2.default,
  'arrow-up': _arrowUp2.default,
  'arrow-right': _arrowRight2.default,
  'arrow-left': _arrowLeft2.default,
  'debugger': _debugger2.default,
  'tracking-plan': _events2.default,
  'integrations': _integrations2.default,
  'billing': _billing2.default,
  'builder': _builder2.default,
  'redshift': _redshift2.default,
  'docs': _docs2.default,
  'help': _help2.default,
  'notes': _notes2.default,
  'list': _list2.default,
  'search': _search2.default,
  'bolt': _bolt2.default,
  'phone': _iphone2.default,
  'browser': _browser2.default,
  'traits': _traits2.default,
  'cross': _cross2.default,
  'switch': _switch2.default,
  'array': _array2.default,
  'date': _date2.default,
  'string': _string2.default,
  'number': _number2.default,
  'object': _object2.default,
  'graph': _graph2.default,
  'checklist': _checklist2.default,
  'projects': _projects2.default,
  'team': _team2.default,
  'key': _key2.default,
  'status-icon': _statusIcon2.default,
  'sync': _sync2.default,
  'done': _done2.default,
  'error': _error2.default,
  'gear': _gear2.default,
  'tooltip': _tooltip2.default,
  'alert': _alert2.default,
  'inbound': _inbound2.default,
  'outbound': _outbound2.default,
  'dot': _dot2.default,
  'close': _close2.default,
  'warning': _warning2.default
};
/**
 * Export the icon types as an object map. The user will use
 * the name on the left to select a function to render the type
 * of icon in the <Icon /> component.
 */

exports.default = icons;
},{"./icons/alert":2,"./icons/array":3,"./icons/arrow-down":4,"./icons/arrow-left":5,"./icons/arrow-right":6,"./icons/arrow-up":7,"./icons/billing":8,"./icons/bolt":9,"./icons/browser":10,"./icons/builder":11,"./icons/check":12,"./icons/checklist":13,"./icons/close":14,"./icons/cog":15,"./icons/cross":16,"./icons/date":17,"./icons/debugger":18,"./icons/docs":19,"./icons/done":20,"./icons/dot":21,"./icons/error":22,"./icons/events":23,"./icons/gear":24,"./icons/graph":25,"./icons/help":26,"./icons/inbound":27,"./icons/integrations":28,"./icons/iphone":29,"./icons/key":30,"./icons/list":31,"./icons/lock":32,"./icons/notes":33,"./icons/number":34,"./icons/object":35,"./icons/outbound":36,"./icons/plus":37,"./icons/projects":38,"./icons/redshift":39,"./icons/search":40,"./icons/status-icon":42,"./icons/string":45,"./icons/switch":46,"./icons/sync":47,"./icons/team":48,"./icons/tooltip":49,"./icons/traits":50,"./icons/warning":51}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 35 27" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-680.000000, -819.000000)", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" },
        (0, _virtualElement2.default)(
          "g",
          { transform: "translate(680.000000, 820.000000)" },
          (0, _virtualElement2.default)("path", { d: "M0.75,16.9132 L2.75,16.9132" }),
          (0, _virtualElement2.default)("path", { d: "M4.7429,8.6142 L6.0829,9.6632" }),
          (0, _virtualElement2.default)("path", { d: "M6.6225,24.3299 L5.5445,25.2499" }),
          (0, _virtualElement2.default)("path", { d: "M18.3363,20.8863 C18.3103,21.0443 18.2873,21.2033 18.2873,21.3683 C18.2873,23.0043 19.6133,24.3303 21.2493,24.3303 C22.6833,24.3303 23.8783,23.3113 24.1513,21.9583" }),
          (0, _virtualElement2.default)("path", { d: "M34.159,8.062 C34.159,9.915 32.657,11.418 30.803,11.418 C28.95,11.418 27.448,9.915 27.448,8.062 C27.448,6.209 28.95,4.706 30.803,4.706 C32.657,4.706 34.159,6.209 34.159,8.062 L34.159,8.062 Z" }),
          (0, _virtualElement2.default)("path", { d: "M27.096,1.5574 C26.46,1.1974 25.752,0.9364 24.975,0.7934 C20.919,0.0454 17.78,3.1254 16.119,7.6504 C14.458,12.1744 13.418,14.2414 11.085,16.7984 C10.178,17.7934 10.586,19.4584 11.811,19.6844 L30.591,23.1444 C31.817,23.3704 32.794,21.9574 32.297,20.7044 C31.574,18.8814 31.058,17.3894 30.821,15.5534 C30.815,15.5534 30.809,15.5544 30.803,15.5544" })
        )
      )
    )
  );
}
},{"virtual-element":99}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet", viewBox: "-3.5 -3 18 18" },
    (0, _virtualElement2.default)("path", { d: "M3.609375,12.2089844 L0,12.2089844 L0,0 L3.609375,0 L3.609375,1.01855469 L1.24414062,1.01855469 L1.24414062,11.1835938 L3.609375,11.1835938 L3.609375,12.2089844 Z M7.56054688,11.1835938 L9.92578125,11.1835938 L9.92578125,1.01855469 L7.56054688,1.01855469 L7.56054688,0 L11.1699219,0 L11.1699219,12.2089844 L7.56054688,12.2089844 L7.56054688,11.1835938 Z", fill: color })
  );
}
},{"virtual-element":99}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "-3 0 17 4" },
    (0, _virtualElement2.default)("path", { fill: "none", d: "M10.5,0.5 L5.5,4.5 L0.5,0.5", stroke: color })
  );
}
},{"virtual-element":99}],5:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "-3 0 17 4" },
    (0, _virtualElement2.default)(
      "g",
      { transform: "rotate(90 5.5 2)" },
      (0, _virtualElement2.default)("path", { fill: "none", d: "M10.5,0.5 L5.5,4.5 L0.5,0.5", stroke: color })
    )
  );
}
},{"virtual-element":99}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 10 9" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-1063.000000, -295.000000)", stroke: color, "stroke-width": "1.5" },
        (0, _virtualElement2.default)(
          "g",
          { transform: "translate(1063.000000, 296.000000)" },
          (0, _virtualElement2.default)("path", { d: "M6.1076,7.25 L9.2686,3.793 L6.1086,0.402" }),
          (0, _virtualElement2.default)("path", { d: "M8.8698,3.8262 L4.1238,3.8262" }),
          (0, _virtualElement2.default)("path", { d: "M6.1076,7.25 L9.2686,3.793 L6.1086,0.402" }),
          (0, _virtualElement2.default)("path", { d: "M1.1512,3.8262 L0.7502,3.8262" }),
          (0, _virtualElement2.default)("path", { d: "M8.8698,3.8262 L4.1238,3.8262" })
        )
      )
    )
  );
}
},{"virtual-element":99}],7:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "-3 0 17 4" },
    (0, _virtualElement2.default)(
      "g",
      { transform: "rotate(180 5.5 2)" },
      (0, _virtualElement2.default)("path", { fill: "none", d: "M10.5,0.5 L5.5,4.5 L0.5,0.5", stroke: color })
    )
  );
}
},{"virtual-element":99}],8:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 3 15 13", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { fill: color, d: "M13.125,16.125 L1.875,16.125 C0.8390625,16.125 0,15.2859375 0,14.25 L0,9.5625 L0,5.8125 L0,4.875 C0,3.8390625 0.8390625,3 1.875,3 L13.125,3 C14.16,3 15,3.8390625 15,4.875 L15,5.8125 L15,9.5625 L15,14.25 C15,15.2859375 14.16,16.125 13.125,16.125 L13.125,16.125 Z M14.0625,4.875 C14.0625,4.3565625 13.6425,3.9375 13.125,3.9375 L1.875,3.9375 C1.3565625,3.9375 0.9375,4.3575 0.9375,4.875 L0.9375,5.8125 L14.0625,5.8125 L14.0625,4.875 L14.0625,4.875 Z M14.0625,6.75 L0.9375,6.75 L0.9375,8.625 L14.0625,8.625 L14.0625,6.75 L14.0625,6.75 Z M14.0625,9.5625 L0.9375,9.5625 L0.9375,14.25 C0.9375,14.7684375 1.3565625,15.1875 1.875,15.1875 L13.125,15.1875 C13.6425,15.1875 14.0625,14.7675 14.0625,14.25 L14.0625,9.5625 L14.0625,9.5625 Z M6.5625,12.375 L9.375,12.375 L9.375,13.3125 L6.5625,13.3125 L6.5625,12.375 L6.5625,12.375 Z M1.875,12.375 L5.625,12.375 L5.625,13.3125 L1.875,13.3125 L1.875,12.375 L1.875,12.375 Z" })
  );
}
},{"virtual-element":99}],9:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { viewBox: "0 0 11 14", width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { d: "M7.0450809,0 C6.8039166,0 6.5670302,0.1044531 6.4007284,0.2985391 L0.4117258,7.2985938 C0.1903466,7.5572109 0.1379429,7.9236719 0.2764385,8.2364297 C0.4149342,8.5492969 0.7197317,8.75 1.0555436,8.75 L3.4677214,8.75 L2.7784513,12.9811719 C2.7153529,13.3666641 2.9105302,13.7483828 3.2565021,13.9157266 C3.3736085,13.9726562 3.4982011,14 3.6217243,14 C3.8628886,14 4.099775,13.8955469 4.2660768,13.7014062 L10.2550794,6.7014062 C10.4759239,6.4427344 10.5288624,6.0763281 10.3903667,5.7635156 C10.251871,5.4506484 9.9470736,5.25 9.6112616,5.25 L7.1990839,5.25 L7.8883539,1.0188281 C7.9514523,0.6332812 7.756275,0.2515625 7.4103032,0.0842187 C7.2931968,0.0273438 7.1686041,0 7.0450809,0 L7.0450809,0 L7.0450809,0 Z M7.0445462,0.875 L6.1889744,6.125 L9.6112616,6.125 L3.622259,13.125 L4.4778308,7.875 L1.0555436,7.875 L7.0445462,0.875 L7.0445462,0.875 Z", fill: color })
  );
}
},{"virtual-element":99}],10:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { viewBox: "0 0 16 15", width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { d: "M1.98688213e-08,15 L1.98688221e-08,0 L16,0 L16,15 L1.98688213e-08,15 L1.98688213e-08,15 Z M15,1 L1,1 L1,4 L15,4 L15,1 L15,1 Z M1.00000002,5 L1.00000002,14 L15,14 L15,5 L1.00000002,5 L1.00000002,5 Z M3,3 L2,3 L2,2 L3,2 L3,3 L3,3 Z M5,3 L4,3 L4,2 L5,2 L5,3 L5,3 Z M7,3 L6,3 L6,2 L7,2 L7,3 L7,3 Z", fill: color })
  );
}
},{"virtual-element":99}],11:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 13 19", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { fill: color, d: "M11.15625,6.3125 C11.15625,5.13910156 10.2046484,4.1875 9.03125,4.1875 L4.25,4.665625 L4.25,2.59375 L7.96875,2.59375 C10.0227617,2.59375 11.6875,4.25855469 11.6875,6.3125 L11.15625,6.3125 L11.15625,6.3125 Z M7.4375,9.5 L5.3125,9.5 L5.3125,5.6271875 L7.4375,5.41462109 L7.4375,9.5 L7.4375,9.5 Z M4.78125,16.9375 L5.27471484,10.03125 L7.47528516,10.03125 L7.96875,16.9375 L4.78125,16.9375 L4.78125,16.9375 Z M1.0625,2.0625 L3.71875,2.0625 L3.71875,5.25 L1.0625,5.25 L1.0625,2.0625 Z M7.96875,1.53125 L4.63914063,1.53125 C4.45519531,1.21382813 4.111875,1 3.71875,1 L1.0625,1 C0.47546875,1 0,1.47546875 0,2.0625 L0,5.25 C0,5.83703125 0.47546875,6.3125 1.0625,6.3125 L3.71875,6.3125 C3.91265625,6.3125 4.09394531,6.26003906 4.25,6.16972656 L4.25,9.46214844 L3.72140625,16.8617969 C3.70015625,17.1559766 3.80242188,17.4454414 4.00363281,17.6612617 C4.20484375,17.877082 4.48647266,18 4.78125,18 L7.96875,18 C8.26359375,18 8.54515625,17.877082 8.74636719,17.6612617 C8.94691406,17.4454414 9.04984375,17.1559766 9.02859375,16.8617969 L8.5,9.46214844 L8.5,5.3084375 L9.07507812,5.25066406 C9.64085938,5.27390625 10.09375,5.74133984 10.09375,6.3125 C10.09375,6.89953125 10.5692187,7.375 11.15625,7.375 L11.6875,7.375 C12.2745313,7.375 12.75,6.89953125 12.75,6.3125 C12.75,3.67617187 10.6050781,1.53125 7.96875,1.53125 L7.96875,1.53125 Z" })
  );
}
},{"virtual-element":99}],12:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { viewBox: "0 0 10 10", preserveAspectRatio: "xMidYMid meet", width: "100%", height: "100%" },
    (0, _virtualElement2.default)("path", { fill: color, d: "M3.77437098,9.37324214 C4.12520951,9.35156191 4.45118669,9.16991671 4.6706924,8.87275522 L9.6120802,2.17615813 C10.0382749,1.59857663 9.95187782,0.755558762 9.41913445,0.293577271 C8.88639108,-0.168487929 8.1089718,-0.0748192769 7.6827771,0.502008855 L3.60358426,6.03088683 L2.10889166,4.41022662 C1.62641147,3.88705498 0.844282431,3.88705498 0.361802238,4.41022662 C-0.120600746,4.93264491 -0.120600746,5.78143859 0.361802238,6.30385687 L2.83249614,8.982412 C3.06481857,9.23437146 3.37929158,9.375 3.70604085,9.375 C3.72866314,9.375 3.75151706,9.37416293 3.77437098,9.37324214 Z" })
  );
}
},{"virtual-element":99}],13:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 -3.5 16 16", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { d: "M5,9 L5,8 L15,8 L15,9 L5,9 L5,9 Z M5,4 L15,4 L15,5 L5,5 L5,4 L5,4 Z M5,0 L15,0 L15,1 L5,1 L5,0 L5,0 Z M1,8 L2,8 L2,9 L1,9 L1,8 L1,8 Z M1,0 L2,0 L2,1 L1,1 L1,0 Z M3.6537309,2.20375 L1.48027451,4.47077737 C1.41725732,4.53220321 1.31477482,4.53220321 1.25175764,4.47077737 L0.680783736,3.91508036 L0.22375,4.35938335 L1.47709182,5.5789887 L4.22375,2.75881047 L3.6537309,2.20375 Z", fill: color })
  );
}
},{"virtual-element":99}],14:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render() {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 52 52" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-124.000000, -213.000000)" },
        (0, _virtualElement2.default)(
          "g",
          { transform: "translate(125.000000, 214.000000)" },
          (0, _virtualElement2.default)("circle", { stroke: "#DFE1E5", fill: "#FFFFFF", cx: "25", cy: "25", r: "25" }),
          (0, _virtualElement2.default)(
            "g",
            { transform: "translate(16.000000, 16.000000)", stroke: "#3CC76A", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" },
            (0, _virtualElement2.default)("path", { d: "M0.75,0.75 L17.25,17.25", id: "Stroke-1" }),
            (0, _virtualElement2.default)("path", { d: "M17.25,0.75 L0.75,17.25", id: "Stroke-3" })
          )
        )
      )
    )
  );
}
},{"virtual-element":99}],15:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { viewBox: "-1 -1 16 16", width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { fill: color, d: "M12.407,5.999 C12.264,5.225 11.951,4.515 11.521,3.892 L11.949,3.463 C12.34,3.072 12.34,2.44 11.949,2.049 C11.558,1.659 10.926,1.659 10.535,2.049 L10.103,2.481 C9.481,2.053 8.771,1.742 7.999,1.6 L7.999,1 C7.999,0.447 7.551,0 6.999,0 C6.446,0 5.999,0.448 5.999,1 L5.999,1.6 C5.228,1.742 4.518,2.054 3.895,2.481 L3.464,2.049 C3.072,1.659 2.44,1.659 2.049,2.049 C1.659,2.44 1.659,3.072 2.049,3.463 L2.478,3.892 C2.047,4.515 1.734,5.225 1.591,5.999 L1,5.999 C0.447,5.999 0,6.447 0,6.999 C0,7.551 0.447,7.999 1,7.999 L1.592,7.999 C1.735,8.773 2.048,9.483 2.479,10.106 L2.05,10.535 C1.66,10.926 1.66,11.558 2.05,11.949 C2.441,12.34 3.073,12.34 3.465,11.949 L3.896,11.518 C4.519,11.945 5.229,12.257 6,12.399 L6,13 C6,13.553 6.447,14 7,14 C7.552,14 8,13.553 8,13 L8,12.399 C8.771,12.257 9.481,11.945 10.104,11.518 L10.535,11.949 C10.926,12.34 11.558,12.34 11.949,11.949 C12.34,11.558 12.34,10.926 11.949,10.535 L11.52,10.106 C11.951,9.483 12.264,8.773 12.407,7.999 L13,7.999 C13.552,7.999 14,7.552 14,6.999 C14,6.446 13.552,5.999 13,5.999 L12.407,5.999 L12.407,5.999 Z M7,9.999 C5.343,9.999 4,8.655 4,6.999 C4,5.343 5.343,3.999 7,3.999 C8.656,3.999 10,5.342 10,6.999 C10,8.656 8.656,9.999 7,9.999 L7,9.999 Z" })
  );
}
},{"virtual-element":99}],16:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 13 13" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-494.000000, -412.000000)", fill: color },
        (0, _virtualElement2.default)(
          "g",
          { transform: "translate(492.000000, 378.000000)" },
          (0, _virtualElement2.default)(
            "g",
            { transform: "translate(2.000000, 23.000000)" },
            (0, _virtualElement2.default)(
              "g",
              { transform: "translate(0.000000, 11.000000)" },
              (0, _virtualElement2.default)("path", { d: "M0.928003247,1.98866342 L11.0113366,12.0719968 C11.3042298,12.36489 11.7791035,12.36489 12.0719968,12.0719968 C12.36489,11.7791035 12.36489,11.3042298 12.0719968,11.0113366 L1.98866342,0.928003247 C1.6957702,0.635110029 1.22089647,0.635110029 0.928003247,0.928003247 C0.635110029,1.22089647 0.635110029,1.6957702 0.928003247,1.98866342 L0.928003247,1.98866342 Z" }),
              (0, _virtualElement2.default)("path", { d: "M11.0113366,0.928003247 L0.928003247,11.0113366 C0.635110029,11.3042298 0.635110029,11.7791035 0.928003247,12.0719968 C1.22089647,12.36489 1.6957702,12.36489 1.98866342,12.0719968 L12.0719968,1.98866342 C12.36489,1.6957702 12.36489,1.22089647 12.0719968,0.928003247 C11.7791035,0.635110029 11.3042298,0.635110029 11.0113366,0.928003247 L11.0113366,0.928003247 Z" })
            )
          )
        )
      )
    )
  );
}
},{"virtual-element":99}],17:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 15 16" },
    (0, _virtualElement2.default)("path", { d: "M14,16 L1,16 C0.447,16 0,15.553 0,15 L0,5.001 L0,4 L0,2 C0,1.448 0.447,1 1,1 L4,1 L4,0 L5,0 L5,1 L10,1 L10,0 L11,0 L11,1 L14.5,1 C15.052,1 15,1.448 15,2 L15,4 L15,5.001 L15,15 C15,15.553 14.552,16 14,16 L14,16 Z M14,2.501 C14,2.225 13.776,2 13.5,2 L11,2 L11,3.001 L10,3.001 L10,2 L5,2 L5,3.001 L4,3.001 L4,2 L1.5,2 C1.224,2 1,2.225 1,2.501 L1,4 L14,4 L14,2.501 L14,2.501 Z M14,5.001 L1,5.001 L1,14.5 C1,14.777 1.224,15 1.5,15 L13.5,15 C13.776,15 14,14.777 14,14.5 L14,5.001 L14,5.001 Z", fill: color })
  );
}
},{"virtual-element":99}],18:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 1 15 14" },
    (0, _virtualElement2.default)("path", { stroke: color, d: "M5.5,15.5 L5.5,4.5 L5.5,15.5 Z M7.5,15.5 L7.5,2.5 L7.5,15.5 Z M9.5,15.5 L9.5,7.5 L9.5,15.5 Z M11.5,15.5 L11.5,5.5 L11.5,15.5 Z M3.5,15.5 L3.5,9.5 L3.5,15.5 Z M13.5,15.5 L13.5,12.5 L13.5,15.5 Z M1.5,15.5 L1.5,12.5 L1.5,15.5 Z" })
  );
}
},{"virtual-element":99}],19:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 14 16", version: "1.1" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd", "stroke-linecap": "round", "stroke-linejoin": "round" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-704.000000, -706.000000)", stroke: color, "stroke-width": "1.5" },
        (0, _virtualElement2.default)(
          "g",
          { transform: "translate(705.000000, 704.000000)" },
          (0, _virtualElement2.default)(
            "g",
            { transform: "translate(0.000000, 3.000000)" },
            (0, _virtualElement2.default)("path", { d: "M6.36032727,5.72727273 L2.77505455,5.72727273" }),
            (0, _virtualElement2.default)("path", { d: "M5.52140909,8.17867273 L2.77486364,8.17867273" }),
            (0, _virtualElement2.default)("path", { d: "M8.73027273,13.5227273 L0.477272727,13.5227273 L0.477272727,3.28618182 L8.73027273,3.28618182 L8.73027273,13.5227273 Z" }),
            (0, _virtualElement2.default)("path", { d: "M10.6657727,10.7453182 L11.5076818,10.7453182 L11.5076818,0.508772727 L3.25468182,0.508772727 L3.25468182,1.37231818" })
          )
        )
      )
    )
  );
}
},{"virtual-element":99}],20:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 14 11" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-174.000000, -838.000000)", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" },
        (0, _virtualElement2.default)("path", { d: "M175,844.956892 L179.237526,847.904377 L186.486523,839" })
      )
    )
  );
}
},{"virtual-element":99}],21:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 7 7" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-409.000000, -341.000000)", fill: color },
        (0, _virtualElement2.default)("path", { d: "M412.5,346.5 L412.5,346.5 C413.604569,346.5 414.5,345.604569 414.5,344.5 C414.5,343.395431 413.604569,342.5 412.5,342.5 C411.395431,342.5 410.5,343.395431 410.5,344.5 C410.5,345.604569 411.395431,346.5 412.5,346.5 L412.5,346.5 Z M412.5,348 L412.5,348 C410.567003,348 409,346.432997 409,344.5 C409,342.567003 410.567003,341 412.5,341 C414.432997,341 416,342.567003 416,344.5 C416,346.432997 414.432997,348 412.5,348 L412.5,348 Z" })
      )
    )
  );
}
},{"virtual-element":99}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 3 13" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-180.000000, -764.000000)" },
        (0, _virtualElement2.default)(
          "g",
          { transform: "translate(180.000000, 764.000000)" },
          (0, _virtualElement2.default)("path", { d: "M1.2221625,0.7921875 L1.2221625,7.3929375", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          (0, _virtualElement2.default)("path", { d: "M0.22208125,11.7778375 C0.22208125,12.3296544 0.670183137,12.7777563 1.222,12.7777563 C1.77381686,12.7777563 2.22191875,12.3296544 2.22191875,11.7778375 C2.22191875,11.2260206 1.77381686,10.7779188 1.222,10.7779188 C0.670183137,10.7779188 0.22208125,11.2260206 0.22208125,11.7778375", fill: color })
        )
      )
    )
  );
}
},{"virtual-element":99}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet", viewBox: "13 12 14 16" },
    (0, _virtualElement2.default)("path", { fill: color, d: "M13,14 L16,14 L16,13.001 L18,13.001 C18,12.448 18.447,12 19,12 L21,12 C21.552,12 22,12.448 22,13.001 L24,13.001 L24,14 L27,14 L27,28 L13,28 L13,14 Z M21,13.999 L21,13.5 C21,13.223 20.776,13 20.5,13 L19.5,13 C19.224,13 19,13.223 19,13.5 L19,13.999 L17,13.999 L17,15.9990001 L19.5,15.999 L20.5,15.999 L23,15.9990001 L23,13.999 L21,13.999 Z M23.5,15 C23.5,15 23.5,15.0152588 24,15 C23.5,14.3180745 24,17 24,17 L16,17 L16,15 L14,15 L14,27 L26,27 L26,15 L23.5,15 Z M16,20 L16,19 L24,19 L24,20 L16,20 Z M16,22 L16,21 L24,21 L24,22 L16,22 Z M16,23.999 L16,22.999 L21,22.999 L21,23.999 L16,23.999 Z" })
  );
}
},{"virtual-element":99}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 18 18" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-752.000000, -1448.000000)", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" },
        (0, _virtualElement2.default)(
          "g",
          { transform: "translate(753.000000, 1449.000000)" },
          (0, _virtualElement2.default)("path", { d: "M10.7945455,7.83447273 C10.8338182,9.3072 9.67163636,10.5333818 8.19818182,10.5719273 C6.72545455,10.6112 5.5,9.44901818 5.46072727,7.97629091 C5.42145455,6.50283636 6.58363636,5.27738182 8.05709091,5.23810909 C9.52981818,5.19956364 10.7552727,6.36174545 10.7945455,7.83447273 L10.7945455,7.83447273 Z" }),
          (0, _virtualElement2.default)("path", { d: "M15.7035636,9.55876364 C15.8199273,9.02276364 15.8824727,8.46785455 15.8817455,7.8984 L13.5537455,6.68385455 C13.4461091,6.20385455 13.2730182,5.75003636 13.0504727,5.32676364 L14.0722909,2.92312727 C13.7057455,2.48676364 13.2941091,2.08967273 12.8417455,1.74276364 L10.3893818,2.82858182 C10.0082909,2.6584 9.60683636,2.52821818 9.1872,2.44676364 L7.94429091,0.147127273 C7.93629091,0.147127273 7.92901818,0.1464 7.92174545,0.1464 C7.31010909,0.1624 6.71956364,0.256218182 6.15156364,0.405309091 L5.46501818,3.02567273 C5.17047273,3.1864 4.89338182,3.37403636 4.63447273,3.58349091 L2.02210909,3.1144 C1.63010909,3.61258182 1.30647273,4.16385455 1.04538182,4.74858182 L2.65556364,6.9064 C2.60465455,7.1864 2.58065455,7.4744 2.57410909,7.76749091 L0.545745455,9.54567273 C0.682472727,10.1820364 0.8992,10.7864 1.18138182,11.3529455 L3.83738182,11.4380364 C4.03956364,11.6831273 4.26210909,11.9085818 4.50210909,12.1158545 L4.62938182,14.8344 C5.17192727,15.1085818 5.75301818,15.3129455 6.35810909,15.4547636 L8.05556364,13.4605818 C8.12901818,13.4613091 8.20101818,13.4678545 8.2752,13.4656727 C8.60829091,13.4569455 8.9312,13.4140364 9.24683636,13.3493091 L11.4279273,14.9274909 C11.9537455,14.6802182 12.4439273,14.3725818 12.8962909,14.0184 L12.3981091,11.4613091 C12.7006545,11.0984 12.9566545,10.6976727 13.1595636,10.2664 L15.7035636,9.55876364 L15.7035636,9.55876364 Z" })
        )
      )
    )
  );
}
},{"virtual-element":99}],25:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "-1 -2 16 16", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { d: "M3,5 L5,5 L5,13 L3,13 L3,5 Z M0,9 L2,9 L2,13 L0,13 L0,9 Z M6,1 L8,1 L8,13 L6,13 L6,1 Z M9,0 L11,0 L11,13 L9,13 L9,0 Z M12,4 L14,4 L14,13 L12,13 L12,4 Z", fill: color })
  );
}
},{"virtual-element":99}],26:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 16 16" },
    (0, _virtualElement2.default)("path", { fill: color, d: "M13,10 L13,10 L13,13 L9.249,10 L5,10 C3.343,10 2,8.656 2,7 L2,3 C2,1.343 3.343,0 5,0 L13,0 C14.656,0 16,1.343 16,3 L16,7 C16,8.656 14.656,10 13,10 L13,10 Z M15,3 C15,1.895 14.104,1 13,1 L5,1 C3.896,1 3,1.895 3,3 L3,7 C3,8.105 3.896,9 5,9 L9.332,9 L12,11 L12,9 L13,9 C14.104,9 15,8.104 15,7 L15,3 L15,3 Z M4,12 L4,14 L6.668,12 L9,12 L9,13 L6.75,13 L3,16 L3,13 C1.343,13 0,11.657 0,10 L0,6 C0,5.115 0.39,4.328 1,3.779 L1,6 L1,10 L1,10.499 C1,10.673 1.094,10.818 1.228,10.908 C1.56,11.554 2.224,11.999 3,11.999 L4,11.999 L4,12 Z" })
  );
}
},{"virtual-element":99}],27:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 37 22" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-240.000000, -1356.000000)" },
        (0, _virtualElement2.default)(
          "g",
          { transform: "translate(240.000000, 1356.000000)" },
          (0, _virtualElement2.default)("path", { d: "M32.2918316,7.13216842 L35.9519368,11.1350105 L32.2929895,15.0614316", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          (0, _virtualElement2.default)("path", { d: "M35.4901684,11.0964526 L16.1000632,11.0964526", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          (0, _virtualElement2.default)("path", { d: "M10.9641053,12.6186211 C10.1234737,12.6186211 9.44147368,11.9366211 9.44147368,11.0959895 C9.44147368,10.2553579 10.1234737,9.57451579 10.9641053,9.57451579 C11.8047368,9.57451579 12.4867368,10.2553579 12.4867368,11.0959895 C12.4867368,11.9366211 11.8047368,12.6186211 10.9641053,12.6186211", fill: color }),
          (0, _virtualElement2.default)("path", { d: "M20.9385579,16.8875474 C20.9385579,19.2311263 19.0384526,21.1312316 16.6948737,21.1312316 L5.11245263,21.1312316 C2.76887368,21.1312316 0.868768421,19.2311263 0.868768421,16.8875474 L0.868768421,5.30512632 C0.868768421,2.96154737 2.76887368,1.06144211 5.11245263,1.06144211 L16.6948737,1.06144211 C19.0384526,1.06144211 20.9385579,2.96154737 20.9385579,5.30512632", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })
        )
      )
    )
  );
}
},{"virtual-element":99}],28:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet", viewBox: "0 0 16 16" },
    (0, _virtualElement2.default)("circle", { fill: color, cx: "8", cy: "8", r: "5" }),
    (0, _virtualElement2.default)("circle", { stroke: color, fill: "none", "stroke-width": "1", cx: "8", cy: "8", r: "7" })
  );
}
},{"virtual-element":99}],29:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { viewBox: "0 0 11 17", width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { d: "M8.8,17 L2.2,17 C0.9851875,17 0,16.04868 0,14.875 L0,11.56068 L0,10.88 L0,3.4 L0,2.72 L0,2.12432 C0,0.95064 0.9851875,0 2.2,0 L8.8,0 C10.0148125,0 11,0.95064 11,2.12432 L11,2.72 L11,3.4 L11,10.88 L11,11.56068 L11,14.875 C11,16.048 10.0148125,17 8.8,17 L8.8,17 L8.8,17 Z M10,2.33333333 C10,1.59733333 9.424,1 8.71428571,1 L2.28571429,1 C1.576,1 1,1.59733333 1,2.33333333 L1,3 L10,3 L10,2.33333333 L10,2.33333333 Z M10,4 L1,4 L1,13 L10,13 L10,4 L10,4 Z M1,14 L1,15.4283674 C1,15.7437509 1.576,16 2.28571429,16 L8.71428571,16 C9.424,16 10,15.7440366 10,15.4283674 L10,14 L1,14 L1,14 Z", fill: color })
  );
}
},{"virtual-element":99}],30:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet", viewBox: "-2 0 24 24" },
    (0, _virtualElement2.default)("path", { d: "M17.834,12.9456254 C15.057,15.7866254 10.642,15.8736254 7.731,13.2656254 L4.894,16.1686254 L8.383,19.7406254 L7.687,20.4566254 L4.197,16.8816254 L1.4,19.7416254 L4.899,23.3146254 L4.198,24.0286254 L0,19.7426254 L0.352,19.3846254 L0.352,19.3826254 L7.032,12.5496254 C4.491,9.5716254 4.578,5.0606254 7.352,2.2226254 C10.248,-0.739374604 14.941,-0.741374604 17.836,2.2196254 C20.731,5.1816254 20.729,9.9846254 17.834,12.9456254 L17.834,12.9456254 Z M17.153,2.9336254 C14.642,0.365625396 10.571,0.366625396 8.06,2.9356254 C5.548,5.5036254 5.547,9.6686254 8.058,12.2366254 C10.569,14.8046254 14.64,14.8036254 17.151,12.2346254 C19.662,9.6666254 19.663,5.5016254 17.153,2.9336254 L17.153,2.9336254 Z", fill: color })
  );
}
},{"virtual-element":99}],31:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "-1.5 -3 16 16", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { d: "M3,0 L13,0 L13,1 L3,1 L3,0 L3,0 Z M3,3 L13,3 L13,4 L3,4 L3,3 L3,3 Z M3,6 L13,6 L13,7 L3,7 L3,6 L3,6 Z M0,0 L1,0 L1,1 L0,1 L0,0 L0,0 Z M0,3 L1,3 L1,4 L0,4 L0,3 L0,3 Z M0,6 L1,6 L1,7 L0,7 L0,6 L0,6 Z M3,9 L13,9 L13,10 L3,10 L3,9 L3,9 Z M0,9 L1,9 L1,10 L0,10 L0,9 L0,9 Z", fill: color })
  );
}
},{"virtual-element":99}],32:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { viewBox: "-1 -1 12 15.6", preserveAspectRatio: "xMidYMid meet", width: "100%", height: "100%" },
    (0, _virtualElement2.default)("path", { fill: color, d: "M0,13 L0,5 L1,5 L1,3.93774605 C1,1.7641102 2.82548909,0 5,0 C7.17451091,0 9,1.7641102 9,3.93774605 L9,5 L10,5 L10,13 L0,13 Z M8.00000001,3.93774614 C8.00000001,2.24626542 6.69148073,1 5.00000001,1 C3.30851929,1 2.00000001,2.24626542 2.00000001,3.93774614 L2.00000001,4.99999985 L8.00000001,4.99999985 L8.00000001,3.93774614 Z" })
  );
}
},{"virtual-element":99}],33:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 13 16" },
    (0, _virtualElement2.default)("path", { d: "M13,4.001 L13,15.5 C13,15.776 12.776,16 12.5,16 L0.5,16 C0.224,16 0,15.776 0,15.5 L0,0.5 C0,0.223 0.224,0 0.5,0 L9,0 L9,0.001 L12.998,4 L13,4 L13,4.001 L13,4.001 Z M9,1.231 L9,3.999 L11.768,3.999 L9,1.231 L9,1.231 Z M12,5 L9,5 L8,5 L8,3.999 L8,0.999 L1.5,0.999 C1.224,0.999 1,1.223 1,1.499 L1,14.499 C1,14.776 1.224,14.999 1.5,14.999 L11.5,14.999 C11.776,14.999 12,14.776 12,14.499 L12,5 L12,5 Z M9.5,10.999 L3.5,10.999 C3.224,10.999 3,10.775 3,10.499 C3,10.223 3.224,9.999 3.5,9.999 L9.5,9.999 C9.776,9.999 10,10.223 10,10.499 C10,10.775 9.776,10.999 9.5,10.999 L9.5,10.999 L9.5,10.999 Z M3.5,9 C3.224,9 3,8.776 3,8.5 C3,8.224 3.224,8 3.5,8 L9.5,8 C9.776,8 10,8.224 10,8.5 C10,8.775 9.776,9 9.5,9 L3.5,9 L3.5,9 Z M3.5,7 C3.224,7 3,6.776 3,6.5 C3,6.224 3.224,6 3.5,6 L9.5,6 C9.776,6 10,6.224 10,6.5 C10,6.775 9.776,7 9.5,7 L3.5,7 L3.5,7 Z M3.5,13 C3.224,13 3,12.776 3,12.5 C3,12.224 3.224,12 3.5,12 L9.5,12 C9.776,12 10,12.224 10,12.5 C10,12.775 9.776,13 9.5,13 L3.5,13 L3.5,13 Z", id: "notes", fill: color })
  );
}
},{"virtual-element":99}],34:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet", viewBox: "-1.5 -1 18 12" },
    (0, _virtualElement2.default)("path", { d: "M3.17871094,10.2880859 C2.13508593,10.2880859 1.34440373,9.84717238 0.806640625,8.96533203 C0.26887752,8.08349168 0,6.80860209 0,5.140625 C0,1.71352453 1.05955972,0 3.17871094,0 C4.23600789,0 5.03466527,0.44091356 5.57470703,1.32275391 C6.11474879,2.20459425 6.38476562,3.47720522 6.38476562,5.140625 C6.38476562,8.57228278 5.31609142,10.2880859 3.17871094,10.2880859 L3.17871094,10.2880859 Z M3.17871094,9.22851562 C3.84863616,9.22851562 4.34081874,8.90836909 4.65527344,8.26806641 C4.96972813,7.62776373 5.12695312,6.58529368 5.12695312,5.140625 C5.12695312,3.70507095 4.96972813,2.66715815 4.65527344,2.02685547 C4.34081874,1.38655279 3.84863616,1.06640625 3.17871094,1.06640625 C2.51790034,1.06640625 2.03369294,1.38427417 1.72607422,2.02001953 C1.41845549,2.6557649 1.26464844,3.69595632 1.26464844,5.140625 C1.26464844,6.589851 1.41845549,7.63346035 1.72607422,8.27148438 C2.03369294,8.9095084 2.51790034,9.22851562 3.17871094,9.22851562 L3.17871094,9.22851562 Z M11.5800781,10.2880859 C10.5364531,10.2880859 9.74577092,9.84717238 9.20800781,8.96533203 C8.67024471,8.08349168 8.40136719,6.80860209 8.40136719,5.140625 C8.40136719,1.71352453 9.4609269,0 11.5800781,0 C12.6373751,0 13.4360325,0.44091356 13.9760742,1.32275391 C14.516116,2.20459425 14.7861328,3.47720522 14.7861328,5.140625 C14.7861328,8.57228278 13.7174586,10.2880859 11.5800781,10.2880859 L11.5800781,10.2880859 Z M11.5800781,9.22851562 C12.2500033,9.22851562 12.7421859,8.90836909 13.0566406,8.26806641 C13.3710953,7.62776373 13.5283203,6.58529368 13.5283203,5.140625 C13.5283203,3.70507095 13.3710953,2.66715815 13.0566406,2.02685547 C12.7421859,1.38655279 12.2500033,1.06640625 11.5800781,1.06640625 C10.9192675,1.06640625 10.4350601,1.38427417 10.1274414,2.02001953 C9.81982268,2.6557649 9.66601562,3.69595632 9.66601562,5.140625 C9.66601562,6.589851 9.81982268,7.63346035 10.1274414,8.27148438 C10.4350601,8.9095084 10.9192675,9.22851562 11.5800781,9.22851562 L11.5800781,9.22851562 Z", fill: color })
  );
}
},{"virtual-element":99}],35:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { height: "100%", width: "100%", viewBox: "-2 -3 18 18", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { d: "M3.5546875,10.1035156 C3.5546875,10.4726581 3.68229039,10.7426749 3.9375,10.9135742 C4.19270961,11.0844735 4.64843422,11.1744791 5.3046875,11.1835938 L5.3046875,12.2089844 C3.30858377,12.1816405 2.31054688,11.5140039 2.31054688,10.2060547 L2.31054688,7.92285156 C2.31054688,7.06151913 1.54037229,6.63085938 0,6.63085938 L0,5.57128906 C1.54037229,5.57128906 2.31054688,5.14062931 2.31054688,4.27929688 L2.31054688,2.00292969 C2.31054688,0.694980439 3.30858377,0.0273438867 5.3046875,0 L5.3046875,1.01855469 C4.64843422,1.02766932 4.19270961,1.11767493 3.9375,1.28857422 C3.68229039,1.45947351 3.5546875,1.72949034 3.5546875,2.09863281 L3.5546875,4.36816406 C3.5546875,5.31152815 3.02376833,5.87662667 1.96191406,6.06347656 L1.96191406,6.14550781 C3.02376833,6.33235771 3.5546875,6.89745622 3.5546875,7.84082031 L3.5546875,10.1035156 Z M10.1650391,7.84082031 C10.1650391,6.89745622 10.6982369,6.33235771 11.7646484,6.14550781 L11.7646484,6.06347656 C10.6982369,5.87662667 10.1650391,5.31152815 10.1650391,4.36816406 L10.1650391,2.09863281 C10.1650391,1.72949034 10.0362969,1.4583342 9.77880859,1.28515625 C9.52132033,1.1119783 9.06673503,1.023112 8.41503906,1.01855469 L8.41503906,0 C10.4157001,0.0273438867 11.4160156,0.694980439 11.4160156,2.00292969 L11.4160156,4.27929688 C11.4160156,5.14062931 12.1861902,5.57128906 13.7265625,5.57128906 L13.7265625,6.63085938 C12.1861902,6.63085938 11.4160156,7.06151913 11.4160156,7.92285156 L11.4160156,10.2060547 C11.4160156,11.5140039 10.4157001,12.1816405 8.41503906,12.2089844 L8.41503906,11.1835938 C9.06673503,11.1790364 9.52132033,11.0901701 9.77880859,10.9169922 C10.0362969,10.7438142 10.1650391,10.4726581 10.1650391,10.1035156 L10.1650391,7.84082031 Z", fill: color })
  );
}
},{"virtual-element":99}],36:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 35 22" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-240.000000, -1432.000000)" },
        (0, _virtualElement2.default)(
          "g",
          { transform: "translate(240.000000, 1432.000000)" },
          (0, _virtualElement2.default)("path", { d: "M11.66,15.0608526 L7.99989474,11.0580105 L11.6588421,7.13158947", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          (0, _virtualElement2.default)("path", { d: "M8.46166316,11.0964526 L27.8517684,11.0964526", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
          (0, _virtualElement2.default)("path", { d: "M32.9877263,9.57428421 C33.8283579,9.57428421 34.5103579,10.2562842 34.5103579,11.0969158 C34.5103579,11.9375474 33.8283579,12.6183895 32.9877263,12.6183895 C32.1470947,12.6183895 31.4650947,11.9375474 31.4650947,11.0969158 C31.4650947,10.2562842 32.1470947,9.57428421 32.9877263,9.57428421", fill: color }),
          (0, _virtualElement2.default)("path", { d: "M20.9385579,16.8875474 C20.9385579,19.2311263 19.0384526,21.1312316 16.6948737,21.1312316 L5.11245263,21.1312316 C2.76887368,21.1312316 0.868768421,19.2311263 0.868768421,16.8875474 L0.868768421,5.30512632 C0.868768421,2.96154737 2.76887368,1.06144211 5.11245263,1.06144211 L16.6948737,1.06144211 C19.0384526,1.06144211 20.9385579,2.96154737 20.9385579,5.30512632", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })
        )
      )
    )
  );
}
},{"virtual-element":99}],37:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { viewBox: "-2 -2 13 13", width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { fill: color, d: "M4.90909091,4.09090909 L4.90909091,0 L4.09090909,0 L4.09090909,4.09090909 L-8.38079232e-16,4.09090909 L-8.8817842e-16,4.90909091 L4.09090909,4.90909091 L4.09090909,9 L4.90909091,9 L4.90909091,4.90909091 L9,4.90909091 L9,4.09090909 L4.90909091,4.09090909 Z" })
  );
}
},{"virtual-element":99}],38:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
    return (0, _virtualElement2.default)(
        "svg",
        { width: "100%", height: "100%", viewBox: "0 0 16 16" },
        (0, _virtualElement2.default)(
            "g",
            { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
            (0, _virtualElement2.default)(
                "g",
                { transform: "translate(-39.000000, -162.000000)", fill: color },
                (0, _virtualElement2.default)(
                    "g",
                    { transform: "translate(-1.000000, 0.000000)" },
                    (0, _virtualElement2.default)(
                        "g",
                        { transform: "translate(26.000000, 150.000000)" },
                        (0, _virtualElement2.default)("path", { d: "M28,18 L28,20 L29,20 L29,22 L28,22 L28,24 L29,24 L29,26 L28,26 L28,27 C28,27.553 27.552,28 27,28 L15,28 C14.447,28 14,27.552 14,27 L14,13 C14,12.448 14.447,12 15,12 L27,12 C27.552,12 28,12.448 28,13 L28,14 L30,14 L30,18 L28,18 L28,18 Z M27,26 L27,24 L27,22 L27,20 L27,18 L27,14 L27,13.5 C27,13.224 26.776,13 26.5,13 L15.5,13 C15.224,13 15,13.224 15,13.5 L15,26.5 C15,26.776 15.224,27 15.5,27 L26.5,27 C26.776,27 27,26.776 27,26.5 L27,26 L27,26 Z M29,15 L28,15 L28,17 L29,17 L29,15 L29,15 Z M24.5,25 L17.5,25 C17.224,25 17,24.776 17,24.5 C17,24.224 17.224,24 17.5,24 L24.5,24 C24.776,24 25,24.224 25,24.5 C25,24.776 24.776,25 24.5,25 L24.5,25 Z M24.5,23 L17.5,23 C17.224,23 17,22.777 17,22.5 C17,22.223 17.224,22 17.5,22 L24.5,22 C24.776,22 25,22.224 25,22.5 C25,22.776 24.776,23 24.5,23 L24.5,23 Z M24,20 L18,20 C17.447,20 17,19.552 17,19 L17,16 C17,15.448 17.447,15 18,15 L24,15 C24.552,15 25,15.448 25,16 L25,19 C25,19.552 24.552,20 24,20 L24,20 Z M24,16.5 C24,16.224 23.776,16 23.5,16 L18.5,16 C18.224,16 18,16.224 18,16.5 L18,18.5 C18,18.776 18.224,19 18.5,19 L23.5,19 C23.776,19 24,18.776 24,18.5 L24,16.5 L24,16.5 Z" })
                    )
                )
            )
        )
    );
}
},{"virtual-element":99}],39:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { height: "100%", width: "100%", viewBox: "0 2 12 15", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { fill: color, d: "M12,14.5 L11.898,14.5 C11.419,15.917 8.97,16.999 6,16.999 C3.03,16.999 0.58,15.917 0.101,14.5 L0,14.5 L0,13.999 L0,13.998 L0,10.999 L0,8 L0,5.5 L0.101,5.5 C0.045,5.337 0,5.171 0,5 C0,3.342 2.686,2 6,2 C9.313,2 12,3.342 12,5 C12,5.171 11.954,5.337 11.898,5.5 L12,5.5 L12,14.5 L12,14.5 Z M6,2.998 C3.238,2.998 1,3.894 1,4.999 C1,6.103 3.238,6.999 6,6.999 C8.762,6.999 11,6.103 11,4.999 C11,3.894 8.762,2.998 6,2.998 L6,2.998 Z M11,6.653 C9.926,7.463 8.09,7.998 6,7.998 C3.91,7.998 2.074,7.463 1,6.653 L1,7.999 C1,9.103 3.238,9.999 6,9.999 C8.761,9.999 10.999,9.103 11,7.999 L11,7.999 L11,6.653 L11,6.653 Z M11,9.653 C9.926,10.463 8.09,10.998 6,10.998 C3.91,10.998 2.074,10.463 1,9.653 L1,10.999 C1,12.103 3.238,12.999 6,12.999 C8.761,12.999 10.999,12.103 11,10.999 L11,10.999 L11,9.653 L11,9.653 Z M6,13.999 C3.91,13.999 2.074,13.464 1,12.654 L1,13.999 C1,15.104 3.238,15.999 6,15.999 C8.761,15.999 10.999,15.103 11,13.999 L11,13.999 L11,12.654 C9.926,13.463 8.09,13.999 6,13.999 L6,13.999 Z" })
  );
}
},{"virtual-element":99}],40:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { height: "100%", width: "100%", viewBox: "-2 -2 16 16", preserveAspectRatio: "xMidYMid meet" },
    (0, _virtualElement2.default)("path", { d: "M4.87606664,9.0028134 C2.59706811,9.0028134 0.750164098,7.1572366 0.750164098,4.87652391 C0.750164098,2.59581119 2.59706811,0.75023445 4.87606664,0.75023445 C7.15506517,0.75023445 9.00196918,2.59581119 9.00196918,4.87652391 C9.00196918,7.1572366 7.15506517,9.0028134 4.87606664,9.0028134 L4.87606664,9.0028134 L4.87606664,9.0028134 Z M11.8953521,11.3885589 L8.56462351,8.057518 C9.30278498,7.2022507 9.75213328,6.09190372 9.75213328,4.87652391 C9.75213328,2.18318224 7.56915575,-8.8817842e-16 4.87606664,-8.8817842e-16 C2.18297753,-8.8817842e-16 0,2.18318224 0,4.87652391 C0,7.5698656 2.18297753,9.7530478 4.87606664,9.7530478 C6.09433314,9.7530478 7.204576,9.3029072 8.05901291,8.5676774 L11.3904917,11.8987183 C11.5300222,12.0337606 11.7558216,12.0337606 11.8953521,11.8987183 C12.0348826,11.7561738 12.0348826,11.5311035 11.8953521,11.3885589 L11.8953521,11.3885589 L11.8953521,11.3885589 Z", fill: color })
  );
}
},{"virtual-element":99}],41:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _magicVirtualElement = require("magic-virtual-element");

var _magicVirtualElement2 = _interopRequireDefault(_magicVirtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render an "error" icon.
 */

function render() {
  return (0, _magicVirtualElement2.default)(
    "div",
    { "class": "StatusIcon-error" },
    (0, _magicVirtualElement2.default)(
      "svg",
      { width: "16px", height: "16px", viewBox: "0 0 16 16" },
      (0, _magicVirtualElement2.default)(
        "g",
        { id: "Page-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        (0, _magicVirtualElement2.default)(
          "g",
          { id: "error", transform: "translate(1.000000, 1.000000)", fill: "#EB5C2D" },
          (0, _magicVirtualElement2.default)("circle", { id: "Oval-1", stroke: "#EB5C2D", cx: "7", cy: "7", r: "7" }),
          (0, _magicVirtualElement2.default)("path", { d: "M7.19305755,6.99866857 L9.76005706,4.4343319 C9.81331432,4.38107467 9.81331432,4.29320021 9.76005706,4.23994295 C9.7067998,4.18668569 9.61892533,4.18668569 9.56566811,4.23994295 L6.99866857,6.80694245 L4.4343319,4.23994295 C4.38107467,4.18668569 4.29320021,4.18668569 4.23994295,4.23994295 C4.18668569,4.29320021 4.18668569,4.38107467 4.23994295,4.4343319 L6.80694245,6.99866857 L4.23994295,9.56566811 C4.18668569,9.61892533 4.18668569,9.70413696 4.23994295,9.76005706 C4.29320021,9.81331432 4.38107467,9.81331432 4.4343319,9.76005706 L6.99866857,7.19305755 L9.56566811,9.76005706 C9.61892533,9.81331432 9.7067998,9.81331432 9.76005706,9.76005706 C9.81331432,9.70413696 9.81331432,9.61892533 9.76005706,9.56566811 L7.19305755,6.99866857", id: "Fill-256", stroke: "#B34622" })
        )
      )
    )
  );
}
/**
 * Module dependencies.
 */
},{"magic-virtual-element":53}],42:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _magicVirtualElement = require('magic-virtual-element');

var _magicVirtualElement2 = _interopRequireDefault(_magicVirtualElement);

var _error = require('./error');

var _error2 = _interopRequireDefault(_error);

var _warning = require('./warning');

var _warning2 = _interopRequireDefault(_warning);

var _success = require('./success');

var _success2 = _interopRequireDefault(_success);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Type map.
 */

/**
 * Module dependencies.
 */

var ICON_TYPES = {
  success: _success2.default,
  warning: _warning2.default,
  error: _error2.default
};

/**
 * Render.
 */

function render(color, size, status) {
  var Type = ICON_TYPES[status || 'success'];
  if (!Type) throw new Error('StatusIcon: Unknown type "' + status + '"');
  return (0, _magicVirtualElement2.default)(
    'div',
    { 'class': 'StatusIcon' },
    (0, _magicVirtualElement2.default)(Type, { size: size })
  );
}
},{"./error":41,"./success":43,"./warning":44,"magic-virtual-element":53}],43:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _magicVirtualElement = require("magic-virtual-element");

var _magicVirtualElement2 = _interopRequireDefault(_magicVirtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a "success" icon.
 */

function render() {
  return (0, _magicVirtualElement2.default)(
    "div",
    { "class": "StatusIcon-success" },
    (0, _magicVirtualElement2.default)(
      "svg",
      { width: "14px", height: "14px", viewBox: "0 0 14 14" },
      (0, _magicVirtualElement2.default)(
        "g",
        { id: "Page-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        (0, _magicVirtualElement2.default)(
          "g",
          { id: "success" },
          (0, _magicVirtualElement2.default)("circle", { id: "bg", fill: "#3CC76A", cx: "7", cy: "7", r: "7" }),
          (0, _magicVirtualElement2.default)("path", { d: "M3.5,7.5 L5.5,9.5 L10.5,4.5", id: "tick", stroke: "#089972", "stroke-width": "1.5" })
        )
      )
    )
  );
}
/**
 * Module dependencies.
 */
},{"magic-virtual-element":53}],44:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _magicVirtualElement = require("magic-virtual-element");

var _magicVirtualElement2 = _interopRequireDefault(_magicVirtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Render a "warning" icon.
 */

function render() {
  return (0, _magicVirtualElement2.default)(
    "div",
    { "class": "StatusIcon-warning" },
    (0, _magicVirtualElement2.default)(
      "svg",
      { width: "14px", height: "14px", viewBox: "0 0 14 14" },
      (0, _magicVirtualElement2.default)(
        "g",
        { id: "Page-1", stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
        (0, _magicVirtualElement2.default)(
          "g",
          { id: "warning" },
          (0, _magicVirtualElement2.default)("circle", { id: "Oval-1", fill: "#FAC54B", cx: "7", cy: "7", r: "7" }),
          (0, _magicVirtualElement2.default)("rect", { id: "Rectangle-134", fill: "#C79D3C", x: "6", y: "3", width: "2", height: "5" }),
          (0, _magicVirtualElement2.default)("rect", { id: "Rectangle-135", fill: "#C79D3C", x: "6", y: "9", width: "2", height: "2" })
        )
      )
    )
  );
}
/**
 * Module dependencies.
 */
},{"magic-virtual-element":53}],45:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", preserveAspectRatio: "xMidYMid meet", viewBox: "-1 -1 18 12" },
    (0, _virtualElement2.default)("path", { d: "M6.63769531,10.0351562 L5.65332031,6.93847656 L2.296875,6.93847656 L1.29882812,10.0351562 L0,10.0351562 L3.30175781,0 L4.63476563,0 L7.95019531,10.0351562 L6.63769531,10.0351562 Z M5.29101562,5.81054688 L4.38183594,2.91210938 C4.20410067,2.34700238 4.06282604,1.83203357 3.95800781,1.3671875 C3.86686152,1.81836163 3.76204486,2.23534965 3.64355469,2.61816406 L2.65917969,5.81054688 L5.29101562,5.81054688 Z M14.2939453,10.0351562 L14.0410156,8.99609375 L13.9863281,8.99609375 C13.6354149,9.43815325 13.2753925,9.74462805 12.90625,9.91552734 C12.5371075,10.0864266 12.0608753,10.171875 11.4775391,10.171875 C10.7346968,10.171875 10.1525086,9.97591342 9.73095703,9.58398438 C9.30940544,9.19205533 9.09863281,8.64290718 9.09863281,7.93652344 C9.09863281,6.42349504 10.2607306,5.63053422 12.5849609,5.55761719 L13.9726562,5.50976562 L13.9726562,5.03808594 C13.9726562,3.96255973 13.4166722,3.42480469 12.3046875,3.42480469 C11.6347623,3.42480469 10.8873739,3.61165178 10.0625,3.98535156 L9.63183594,3.04882812 C10.5250696,2.61132594 11.3977822,2.39257812 12.25,2.39257812 C13.2845104,2.39257812 14.0330381,2.59081833 14.4956055,2.98730469 C14.9581729,3.38379104 15.1894531,4.01952687 15.1894531,4.89453125 L15.1894531,10.0351562 L14.2939453,10.0351562 Z M13.9589844,6.36425781 L12.8515625,6.41210938 C11.9583289,6.44856789 11.3248717,6.58870321 10.9511719,6.83251953 C10.5774721,7.07633585 10.390625,7.44889072 10.390625,7.95019531 C10.390625,8.76139729 10.8463496,9.16699219 11.7578125,9.16699219 C12.4277377,9.16699219 12.9620748,8.98128441 13.3608398,8.60986328 C13.7596049,8.23844215 13.9589844,7.71549816 13.9589844,7.04101563 L13.9589844,6.36425781 Z", fill: color })
  );
}
},{"virtual-element":99}],46:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 16 10" },
    (0, _virtualElement2.default)("path", { d: "M12,10 L4,10 C1.791,10 0,8.209 0,6 L0,4 C0,1.791 1.791,0 4,0 L12,0 C14.209,0 16,1.792 16,4 L16,6 C16,8.209 14.209,10 12,10 L12,10 Z M15,4.001 C15,2.344 13.656,1.001 12,1.001 L4,1.001 C2.343,1.001 1,2.344 1,4.001 L1,6.001 C1,7.658 2.343,9.001 4,9.001 L12,9.001 C13.656,9.001 15,7.659 15,6.001 L15,4.001 L15,4.001 Z M11,8 C9.343,8 8,6.657 8,5 C8,3.343 9.343,2 11,2 C12.656,2 14,3.343 14,5 C14,6.657 12.656,8 11,8 L11,8 Z M11,3.001 C9.895,3.001 9,3.896 9,5.001 C9,6.106 9.895,7.001 11,7.001 C12.104,7.001 13,6.106 13,5.001 C13,3.896 12.104,3.001 11,3.001 L11,3.001 Z", fill: color })
  );
}
},{"virtual-element":99}],47:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 18 18" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-690.000000, -1450.000000)", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" },
        (0, _virtualElement2.default)(
          "g",
          { transform: "translate(691.000000, 1451.000000)" },
          (0, _virtualElement2.default)("path", { d: "M1.14528,9.7312 C1.67088,11.7728 3.03488,13.5896 5.04688,14.6024 C8.74368,16.4632 13.31648,14.9536 15.17728,11.2568" }),
          (0, _virtualElement2.default)("path", { d: "M12.2624,11.42296 L15.4344,10.80056 L16.2992,13.88056" }),
          (0, _virtualElement2.default)("path", { d: "M15.75392,6.12992 C15.22832,4.08832 13.86432,2.27152 11.85232,1.25872 C8.15552,-0.60208 3.58272,0.90752 1.72192,4.60432" }),
          (0, _virtualElement2.default)("path", { d: "M4.6368,4.43816 L1.4648,5.06056 L0.6,1.98056" })
        )
      )
    )
  );
}
},{"virtual-element":99}],48:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { viewBox: "0 0 16 18", preserveAspectRatio: "xMidYMid meet", width: "100%", height: "100%" },
    (0, _virtualElement2.default)("path", { fill: color, d: "M1.45454548,17 L1.45454548,15.5454545 L7.2727273,13.7272727 L7.2727273,11.9090909 C5.58697587,11.2052388 4.36363637,9 4.36383437,6.50058267 C4.36363637,5.36363637 5.09090912,2.45454545 8.36363639,2.45454545 C11.6363637,2.45454545 11.6363637,5.36363636 11.6363637,6.50058261 C11.6363637,9.04603716 10.4239351,11.1945452 8.72727276,11.9090907 L8.72727276,13.7272727 L14.5454546,15.5454543 L14.5454546,16.9999998 L1.45454548,17 Z M13.0909091,6.81818182 C13.0909091,3.90909091 12,1 8.36342784,1 C4.72685567,1 2.90909091,3.90909091 2.90909091,6.81818182 C2.90909091,9 3.92845663,11.6 5.81818182,12.6363636 C4.93031094,12.8545455 0,14.8181818 0,14.8181818 L9.30173167e-09,18.4545455 L8.39887723,18.4490909 L15.9999995,18.4490911 L16,14.8181818 C16,14.8181818 11.0128607,12.6836364 10.2411548,12.4927273 C12.1194271,11.4509091 13.0909091,9 13.0909091,6.81818182 Z" })
  );
}
},{"virtual-element":99}],49:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 14 14" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-175.000000, -920.000000)" },
        (0, _virtualElement2.default)(
          "g",
          { transform: "translate(175.000000, 921.000000)" },
          (0, _virtualElement2.default)("path", { d: "M6.6028,10.0399 C6.1558,10.0399 5.7998,9.6739 5.7998,9.2269 C5.7998,8.7789 6.1558,8.4129 6.6028,8.4129 C7.0598,8.4129 7.4158,8.7789 7.4158,9.2269 C7.4158,9.6739 7.0598,10.0399 6.6028,10.0399 M7.9548,6.1049 C7.2838,6.6239 7.2228,6.8159 7.2228,7.1619 C7.2228,7.4979 6.9688,7.7519 6.5918,7.7519 C6.2058,7.7519 5.9618,7.4979 5.9618,7.1009 C5.9618,6.4709 6.0838,6.1359 6.7248,5.6269 C7.2128,5.2409 7.5688,4.9969 7.5688,4.5079 C7.5688,3.8779 7.1518,3.6749 6.6938,3.6749 C6.2868,3.6749 6.0638,3.8269 5.8398,3.9899 C5.7488,4.0409 5.6568,4.0819 5.5248,4.0819 C5.1078,4.0819 4.8838,3.7669 4.8838,3.4819 C4.8838,3.2069 5.0978,2.9729 5.3318,2.8409 C5.7378,2.5869 6.1658,2.4439 6.8468,2.4439 C7.8328,2.4439 8.9718,3.0029 8.9718,4.3559 C8.9718,5.2209 8.4738,5.6979 7.9548,6.1049", fill: color }),
          (0, _virtualElement2.default)("path", { d: "M12.755,6.2475 C12.755,9.5625 10.068,12.2495 6.752,12.2495 C3.437,12.2495 0.75,9.5625 0.75,6.2475 C0.75,2.9325 3.437,0.2445 6.752,0.2445 C10.068,0.2445 12.755,2.9325 12.755,6.2475 L12.755,6.2475 Z", stroke: color, "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" })
        )
      )
    )
  );
}
},{"virtual-element":99}],50:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render(color) {
  return (0, _virtualElement2.default)(
    "svg",
    { viewBox: "0 0 16 16", preserveAspectRatio: "xMidYMid meet", width: "100%", height: "100%" },
    (0, _virtualElement2.default)("path", { d: "M0.999999986,15.0000003 L0.999999986,13.5000003 L6.99999999,11.0000003 L6.99999999,9.9999994 C4.99999999,8.99999999 4,7.33333333 4.0001815,5.04220078 C4,4 4.49999999,0.99999999 7.49999999,0.99999999 C10.5,0.99999999 11,4.00000015 11,5.04220088 C11,7.37553422 9.99999999,8.99999999 8.00000002,9.9999998 L7.99999999,11.0000003 L14,13.5000003 L14,15.0000003 L0.999999986,15.0000003 L0.999999986,15.0000003 Z M12,5.5 C12,2.83333333 10.8335245,0 7.50000001,0 C4.16647552,0 3.00000001,2.83333333 3.00000001,5.5 C3.00000001,7.5 4.26775192,9.5849998 6.00000001,10.5349998 L8.52658752e-09,13 L8.52658744e-09,16 L15,15.9949999 L15,13 C15,13 9.70739714,10.7099998 9.00000001,10.5349998 C10.7217496,9.5799998 12,7.5 12,5.5 L12,5.5 Z M13,6 L16,6 L16,7 L13,7 L13,6 L13,6 Z M13,10 L16,10 L16,11 L13,11 L13,10 L13,10 Z M13,8 L16,8 L16,9 L13,9 L13,8 L13,8 Z", fill: color })
  );
}
},{"virtual-element":99}],51:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = render;

var _virtualElement = require("virtual-element");

var _virtualElement2 = _interopRequireDefault(_virtualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function render() {
  return (0, _virtualElement2.default)(
    "svg",
    { width: "100%", height: "100%", viewBox: "0 0 18 16" },
    (0, _virtualElement2.default)(
      "g",
      { stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
      (0, _virtualElement2.default)(
        "g",
        { transform: "translate(-474.000000, -1263.000000)" },
        (0, _virtualElement2.default)(
          "g",
          { transform: "translate(473.000000, 1262.000000)" },
          (0, _virtualElement2.default)("path", { d: "M8.48121524,2.58193409 C9.3200169,1.15597127 10.6794787,1.15511386 11.5187848,2.58193409 L18.4812152,14.4180659 C19.3200169,15.8440287 18.656688,17 17.0057979,17 L2.99420208,17 C1.34054993,17 0.679478738,15.8448861 1.51878476,14.4180659 L8.48121524,2.58193409 Z", fill: "#FAC54A" }),
          (0, _virtualElement2.default)(
            "g",
            { transform: "translate(9.000000, 5.000000)" },
            (0, _virtualElement2.default)("path", { d: "M0.940125,0.609375 L0.940125,5.686875", stroke: "#FFFFFF", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round" }),
            (0, _virtualElement2.default)("path", { d: "M0.170831731,9.059875 C0.170831731,9.48434951 0.51552549,9.82904327 0.94,9.82904327 C1.36447451,9.82904327 1.70916827,9.48434951 1.70916827,9.059875 C1.70916827,8.63540049 1.36447451,8.29070673 0.94,8.29070673 C0.51552549,8.29070673 0.170831731,8.63540049 0.170831731,9.059875", fill: "#FFFFFF" })
          )
        )
      )
    )
  );
}
},{"virtual-element":99}],52:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _magicVirtualElement = require('magic-virtual-element');

var _magicVirtualElement2 = _interopRequireDefault(_magicVirtualElement);

var _icons = require('./icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** @jsx element */

var defaultProps = {
  size: '16px'
};

function render(_ref, updateState) {
  var props = _ref.props;
  var state = _ref.state;

  var currentColor = state.isHovering ? props.hoverColor : props.color;
  var size = props.size;
  var inline = props.inline;
  var type = props.type;
  var status = props.status;

  var fn = _icons2.default[type];

  if (!fn) {
    throw new Error('Invalid icon type "' + props.type + '"');
  }

  function focus() {
    if (props.hoverColor) updateState({ isHovering: true });
  }

  function blur() {
    if (props.hoverColor) updateState({ isHovering: false });
  }

  return (0, _magicVirtualElement2.default)(
    'div',
    { style: getStyles(size, inline), onMouseOver: focus, onMouseOut: blur },
    renderIcon(fn, currentColor, size, status)
  );
}

function renderIcon(fn, color, size, status) {
  var vnode = fn(color, size, status);
  vnode.attributes.style = 'display: block';
  return vnode;
}

function getStyles(size, inline) {
  var styles = {
    height: size,
    width: size
  };

  if (inline) {
    styles.display = 'inline-block';
    styles['vertical-align'] = 'middle';
    styles.position = 'relative';
  }

  return styles;
}

exports.default = { defaultProps: defaultProps, render: render };
},{"./icons":1,"magic-virtual-element":53}],53:[function(require,module,exports){
var toStyle = require('to-style').string
var classnames = require('classnames')
var element = require('virtual-element')
var type = require('component-type')
var slice = require('sliced')

module.exports = function (t, attributes, children) {

  // Account for JSX putting the children as multiple arguments.
  // This is essentially just the ES6 rest param
  if (arguments.length > 2 && Array.isArray(arguments[2]) === false) {
    children = slice(arguments, 2)
  }

  var node = element(t, attributes, children)

  if (type(node.attributes.class) === 'array') {
    node.attributes.class = classnames.apply(null, node.attributes.class)
  }

  if (type(node.attributes.class) === 'object') {
    node.attributes.class = classnames(node.attributes.class)
  }

  if (type(node.attributes.style) === 'object') {
    node.attributes.style = toStyle(node.attributes.style)
  }

  return node
}

},{"classnames":54,"component-type":55,"sliced":56,"to-style":57,"virtual-element":99}],54:[function(require,module,exports){
/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
		// register as 'classnames', consistent with npm package name
		define('classnames', [], function () {
			return classNames;
		});
	} else {
		window.classNames = classNames;
	}
}());

},{}],55:[function(require,module,exports){
/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  val = val.valueOf
    ? val.valueOf()
    : Object.prototype.valueOf.apply(val)

  return typeof val;
};

},{}],56:[function(require,module,exports){

/**
 * An Array.prototype.slice.call(arguments) alternative
 *
 * @param {Object} args something with a length
 * @param {Number} slice
 * @param {Number} sliceEnd
 * @api public
 */

module.exports = function (args, slice, sliceEnd) {
  var ret = [];
  var len = args.length;

  if (0 === len) return ret;

  var start = slice < 0
    ? Math.max(0, slice + len)
    : slice || 0;

  if (sliceEnd !== undefined) {
    len = sliceEnd < 0
      ? sliceEnd + len
      : sliceEnd
  }

  while (len-- > start) {
    ret[len - start] = args[len];
  }

  return ret;
}


},{}],57:[function(require,module,exports){
'use strict'

module.exports = {
   prefixProperties: require('./src/prefixProperties') ,
   cssUnitless: require('./src/cssUnitless') ,
   object: require('./src/toStyleObject'),
   string: require('./src/toStyleString')
}
},{"./src/cssUnitless":59,"./src/prefixProperties":64,"./src/toStyleObject":72,"./src/toStyleString":73}],58:[function(require,module,exports){
module.exports = require('./prefixer')()
},{"./prefixer":65}],59:[function(require,module,exports){
'use exports'

//make sure properties are in hyphenated form

module.exports = {
    'animation'    : 1,
    'column-count' : 1,
    'columns'      : 1,
    'font-weight'  : 1,
    'opacity'      : 1,
    'order  '      : 1,
    'z-index'      : 1,
    'zoom'         : 1,
    'flex'         : 1,
    'box-flex'     : 1,
    'transform'    : 1,
    'perspective'  : 1,
    'box-pack'     : 1,
    'box-align'    : 1,
    'colspan'      : 1,
    'rowspan'      : 1
}
},{}],60:[function(require,module,exports){
'use strict'

var objectHasOwn = Object.prototype.hasOwnProperty

module.exports = function(object, propertyName){
    return objectHasOwn.call(object, propertyName)
}
},{}],61:[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(v) {
    return objectToString.apply(v) === '[object Function]'
}

},{}],62:[function(require,module,exports){
'use strict'

var objectToString = Object.prototype.toString

module.exports = function(v){
    return !!v && objectToString.call(v) === '[object Object]'
}


},{}],63:[function(require,module,exports){
'use strict';

var toUpperFirst = require('./stringUtils/toUpperFirst')

var re         = /^(Moz|Webkit|Khtml|O|ms|Icab)(?=[A-Z])/

var docStyle   = typeof document == 'undefined'?
                    {}:
                    document.documentElement.style

var prefixInfo = (function(){

    var prefix = (function(){

            for (var prop in docStyle) {
                if( re.test(prop) ) {
                    // test is faster than match, so it's better to perform
                    // that on the lot and match only when necessary
                    return  prop.match(re)[0]
                }
            }

            // Nothing found so far? Webkit does not enumerate over the CSS properties of the style object.
            // However (prop in style) returns the correct value, so we'll have to test for
            // the precence of a specific property
            if ('WebkitOpacity' in docStyle){
                return 'Webkit'
            }

            if ('KhtmlOpacity' in docStyle) {
                return 'Khtml'
            }

            return ''
        })(),

    lower = prefix.toLowerCase()

    return {
        style       : prefix,
        css       : '-' + lower + '-',
        dom       : ({
            Webkit: 'WebKit',
            ms    : 'MS',
            o     : 'WebKit'
        })[prefix] || toUpperFirst(prefix)
    }

})()

module.exports = prefixInfo
},{"./stringUtils/toUpperFirst":71}],64:[function(require,module,exports){
module.exports = {
    'border-radius'              : 1,
    'border-top-left-radius'     : 1,
    'border-top-right-radius'    : 1,
    'border-bottom-left-radius'  : 1,
    'border-bottom-right-radius' : 1,
    'box-shadow'                 : 1,
    'order'                      : 1,
    'flex'                       : function(name, prefix){
        return [prefix + 'box-flex']
    },
    'box-flex'                   : 1,
    'box-align'                  : 1,
    'animation'                  : 1,
    'animation-duration'         : 1,
    'animation-name'             : 1,
    'transition'                 : 1,
    'transition-duration'        : 1,
    'transform'                  : 1,
    'transform-style'            : 1,
    'transform-origin'           : 1,
    'backface-visibility'        : 1,
    'perspective'                : 1,
    'box-pack'                   : 1
}
},{}],65:[function(require,module,exports){
'use strict'

var camelize     = require('./stringUtils/camelize')
var hyphenate    = require('./stringUtils/hyphenate')
var toLowerFirst = require('./stringUtils/toLowerFirst')
var toUpperFirst = require('./stringUtils/toUpperFirst')

var prefixInfo = require('./prefixInfo')
var prefixProperties = require('./prefixProperties')

var docStyle = typeof document == 'undefined'?
                {}:
                document.documentElement.style

module.exports = function(asStylePrefix){

    return function(name, config){
        config = config || {}

        var styleName = toLowerFirst(camelize(name)),
            cssName   = hyphenate(name),

            theName   = asStylePrefix?
                            styleName:
                            cssName,

            thePrefix = prefixInfo.style?
                            asStylePrefix?
                                prefixInfo.style:
                                prefixInfo.css
                            :
                            ''

        if ( styleName in docStyle ) {
            return config.asString?
                              theName :
                            [ theName ]
        }

        //not a valid style name, so we'll return the value with a prefix

        var upperCased     = theName,
            prefixProperty = prefixProperties[cssName],
            result         = []

        if (asStylePrefix){
            upperCased = toUpperFirst(theName)
        }

        if (typeof prefixProperty == 'function'){
            var prefixedCss = prefixProperty(theName, thePrefix) || []
            if (prefixedCss && !Array.isArray(prefixedCss)){
                prefixedCss = [prefixedCss]
            }

            if (prefixedCss.length){
                prefixedCss = prefixedCss.map(function(property){
                    return asStylePrefix?
                                toLowerFirst(camelize(property)):
                                hyphenate(property)

                })
            }

            result = result.concat(prefixedCss)
        }

        if (thePrefix){
            result.push(thePrefix + upperCased)
        }

        result.push(theName)

        if (config.asString || result.length == 1){
            return result[0]
        }

        return result
    }
}
},{"./prefixInfo":63,"./prefixProperties":64,"./stringUtils/camelize":66,"./stringUtils/hyphenate":68,"./stringUtils/toLowerFirst":70,"./stringUtils/toUpperFirst":71}],66:[function(require,module,exports){
'use strict'

var toCamelFn = function(str, letter){
       return letter ? letter.toUpperCase(): ''
   }

var hyphenRe = require('./hyphenRe')

module.exports = function(str){
   return str?
          str.replace(hyphenRe, toCamelFn):
          ''
}
},{"./hyphenRe":67}],67:[function(require,module,exports){
module.exports = /[-\s]+(.)?/g
},{}],68:[function(require,module,exports){
'use strict'

var separate = require('./separate')

module.exports = function(name){
   return separate(name).toLowerCase()
}
},{"./separate":69}],69:[function(require,module,exports){
'use strict'

var doubleColonRe      = /::/g
var upperToLowerRe     = /([A-Z]+)([A-Z][a-z])/g
var lowerToUpperRe     = /([a-z\d])([A-Z])/g
var underscoreToDashRe = /_/g

module.exports = function(name, separator){

   return name?
           name.replace(doubleColonRe, '/')
                .replace(upperToLowerRe, '$1_$2')
                .replace(lowerToUpperRe, '$1_$2')
                .replace(underscoreToDashRe, separator || '-')
            :
            ''
}
},{}],70:[function(require,module,exports){
'use strict'

module.exports = function(value){
    return value.length?
                value.charAt(0).toLowerCase() + value.substring(1):
                value
}
},{}],71:[function(require,module,exports){
'use strict'

module.exports = function(value){
    return value.length?
                value.charAt(0).toUpperCase() + value.substring(1):
                value
}
},{}],72:[function(require,module,exports){
'use strict'

var prefixInfo  = require('./prefixInfo')
var cssPrefixFn = require('./cssPrefix')

var HYPHENATE   = require('./stringUtils/hyphenate')
var CAMELIZE   = require('./stringUtils/camelize')
var HAS_OWN     = require('./hasOwn')
var IS_OBJECT   = require('./isObject')
var IS_FUNCTION = require('./isFunction')

var applyPrefix = function(target, property, value, normalizeFn){
    cssPrefixFn(property).forEach(function(p){
        target[normalizeFn? normalizeFn(p): p] = value
    })
}

var toObject = function(str){
    str = (str || '').split(';')

    var result = {}

    str.forEach(function(item){
        var split = item.split(':')

        if (split.length == 2){
            result[split[0].trim()] = split[1].trim()
        }
    })

    return result
}

var CONFIG = {
    cssUnitless: require('./cssUnitless')
}

/**
 * @ignore
 * @method toStyleObject
 *
 * @param  {Object} styles The object to convert to a style object.
 * @param  {Object} [config]
 * @param  {Boolean} [config.addUnits=true] True if you want to add units when numerical values are encountered.
 * @param  {Object}  config.cssUnitless An object whose keys represent css numerical property names that will not be appended with units.
 * @param  {Object}  config.prefixProperties An object whose keys represent css property names that should be prefixed
 * @param  {String}  config.cssUnit='px' The css unit to append to numerical values. Defaults to 'px'
 * @param  {String}  config.normalizeName A function that normalizes a name to a valid css property name
 * @param  {String}  config.scope
 *
 * @return {Object} The object, normalized with css style names
 */
var TO_STYLE_OBJECT = function(styles, config, prepend, result){

    if (typeof styles == 'string'){
        styles = toObject(styles)
    }

    config = config || CONFIG

    config.cssUnitless = config.cssUnitless || CONFIG.cssUnitless

    result = result || {}

    var scope    = config.scope || {},

        //configs
        addUnits = config.addUnits != null?
                            config.addUnits:
                            scope && scope.addUnits != null?
                                scope.addUnits:
                                true,

        cssUnitless      = (config.cssUnitless != null?
                                config.cssUnitless:
                                scope?
                                    scope.cssUnitless:
                                    null) || {},
        cssUnit          = (config.cssUnit || scope? scope.cssUnit: null) || 'px',
        prefixProperties = (config.prefixProperties || (scope? scope.prefixProperties: null)) || {},

        camelize    = config.camelize,
        normalizeFn = camelize? CAMELIZE: HYPHENATE

    // Object.keys(cssUnitless).forEach(function(key){
    //     cssUnitless[normalizeFn(key)] = 1
    // })

    var processed,
        styleName,

        propName,
        propValue,
        propCssUnit,
        propType,
        propIsNumber,

        fnPropValue,
        prefix

    for (propName in styles) if (HAS_OWN(styles, propName)) {

        propValue = styles[ propName ]

        //the hyphenated style name (css property name)
        styleName = HYPHENATE(prepend? prepend + propName: propName)

        processed = false
        prefix    = false

        if (IS_FUNCTION(propValue)) {

            //a function can either return a css value
            //or an object with { value, prefix, name }
            fnPropValue = propValue.call(scope || styles, propValue, propName, styleName, styles)

            if (IS_OBJECT(fnPropValue) && fnPropValue.value != null){

                propValue = fnPropValue.value
                prefix    = fnPropValue.prefix
                styleName = fnPropValue.name?
                                HYPHENATE(fnPropValue.name):
                                styleName

            } else {
                propValue = fnPropValue
            }
        }

        propType     = typeof propValue
        propIsNumber = propType == 'number' || (propType == 'string' && propValue != '' && propValue * 1 == propValue)

        if (propValue == null || styleName == null || styleName === ''){
            continue
        }

        if (propIsNumber || propType == 'string'){
           processed = true
        }

        if (!processed && propValue.value != null && propValue.prefix){
           processed = true
           prefix    = propValue.prefix
           propValue = propValue.value
        }

        // hyphenStyleName = camelize? HYPHENATE(styleName): styleName

        if (processed){

            prefix = prefix || !!prefixProperties[styleName]

            if (propIsNumber){
                propValue = addUnits && !(styleName in cssUnitless) ?
                                propValue + cssUnit:
                                propValue + ''//change it to a string, so that jquery does not append px or other units
            }

            //special border treatment
            if (
                    (
                     styleName == 'border' ||
                    (!styleName.indexOf('border')
                        &&
                        !~styleName.indexOf('radius')
                        &&
                        !~styleName.indexOf('width'))
                    ) &&
                    propIsNumber
                ){

                styleName = styleName + '-width'
            }

            //special border radius treatment
            if (!styleName.indexOf('border-radius-')){
                styleName.replace(/border(-radius)(-(.*))/, function(str, radius, theRest){
                    var positions = {
                        '-top'    : ['-top-left',      '-top-right' ],
                        '-left'   : ['-top-left',    '-bottom-left' ],
                        '-right'  : ['-top-right',   '-bottom-right'],
                        '-bottom' : ['-bottom-left', '-bottom-right']
                    }

                    if (theRest in positions){
                        styleName = []

                        positions[theRest].forEach(function(pos){
                            styleName.push('border' + pos + radius)
                        })
                    } else {
                        styleName = 'border'+ theRest + radius
                    }

                })

                if (Array.isArray(styleName)){
                    styleName.forEach(function(styleName){
                        if (prefix){
                            applyPrefix(result, styleName, propValue, normalizeFn)
                        } else {
                            result[normalizeFn(styleName)] = propValue
                        }
                    })

                    continue
                }
            }

            if (prefix){
                applyPrefix(result, styleName, propValue, normalizeFn)
            } else {
                result[normalizeFn(styleName)] = propValue
            }

        } else {
            //the propValue must be an object, so go down the hierarchy
            TO_STYLE_OBJECT(propValue, config, styleName + '-', result)
        }
    }

    return result
}

module.exports = TO_STYLE_OBJECT
},{"./cssPrefix":58,"./cssUnitless":59,"./hasOwn":60,"./isFunction":61,"./isObject":62,"./prefixInfo":63,"./stringUtils/camelize":66,"./stringUtils/hyphenate":68}],73:[function(require,module,exports){
'use strict'

var toStyleObject = require('./toStyleObject')
var hasOwn        = require('./hasOwn')

/**
 * @ignore
 * @method toStyleString
 *
 * @param  {Object} styles The object to convert to a style string.
 * @param  {Object} config
 * @param  {Boolean} config.addUnits=true True if you want to add units when numerical values are encountered. Defaults to true
 * @param  {Object}  config.cssUnitless An object whose keys represent css numerical property names that will not be appended with units.
 * @param  {Object}  config.prefixProperties An object whose keys represent css property names that should be prefixed
 * @param  {String}  config.cssUnit='px' The css unit to append to numerical values. Defaults to 'px'
 * @param  {String}  config.scope
 *
 * @return {Object} The object, normalized with css style names
 */
module.exports = function(styles, config){
    styles = toStyleObject(styles, config)

    var result = []
    var prop

    for(prop in styles) if (hasOwn(styles, prop)){
        result.push(prop + ': ' + styles[prop])
    }

    return result.join('; ')
}
},{"./hasOwn":60,"./toStyleObject":72}],74:[function(require,module,exports){
/**
 * Module dependencies.
 */

var Emitter = require('component-emitter')

/**
 * Expose `scene`.
 */

module.exports = Application

/**
 * Create a new `Application`.
 *
 * @param {Object} element Optional initial element
 */

function Application (element) {
  if (!(this instanceof Application)) return new Application(element)
  this.options = {}
  this.sources = {}
  this.element = element
}

/**
 * Mixin `Emitter`.
 */

Emitter(Application.prototype)

/**
 * Add a plugin
 *
 * @param {Function} plugin
 */

Application.prototype.use = function (plugin) {
  plugin(this)
  return this
}

/**
 * Set an option
 *
 * @param {String} name
 */

Application.prototype.option = function (name, val) {
  this.options[name] = val
  return this
}

/**
 * Set value used somewhere in the IO network.
 */

Application.prototype.set = function (name, data) {
  this.sources[name] = data
  this.emit('source', name, data)
  return this
}

/**
 * Mount a virtual element.
 *
 * @param {VirtualElement} element
 */

Application.prototype.mount = function (element) {
  this.element = element
  this.emit('mount', element)
  return this
}

/**
 * Remove the world. Unmount everything.
 */

Application.prototype.unmount = function () {
  if (!this.element) return
  this.element = null
  this.emit('unmount')
  return this
}

},{"component-emitter":81}],75:[function(require,module,exports){
/**
 * All of the events can bind to
 */

module.exports = {
  onBlur: 'blur',
  onChange: 'change',
  onClick: 'click',
  onContextMenu: 'contextmenu',
  onCopy: 'copy',
  onCut: 'cut',
  onDoubleClick: 'dblclick',
  onDrag: 'drag',
  onDragEnd: 'dragend',
  onDragEnter: 'dragenter',
  onDragExit: 'dragexit',
  onDragLeave: 'dragleave',
  onDragOver: 'dragover',
  onDragStart: 'dragstart',
  onDrop: 'drop',
  onError: 'error',
  onFocus: 'focus',
  onInput: 'input',
  onInvalid: 'invalid',
  onKeyDown: 'keydown',
  onKeyPress: 'keypress',
  onKeyUp: 'keyup',
  onMouseDown: 'mousedown',
  onMouseEnter: 'mouseenter',
  onMouseLeave: 'mouseleave',
  onMouseMove: 'mousemove',
  onMouseOut: 'mouseout',
  onMouseOver: 'mouseover',
  onMouseUp: 'mouseup',
  onPaste: 'paste',
  onReset: 'reset',
  onScroll: 'scroll',
  onSubmit: 'submit',
  onTouchCancel: 'touchcancel',
  onTouchEnd: 'touchend',
  onTouchMove: 'touchmove',
  onTouchStart: 'touchstart',
  onWheel: 'wheel'
}

},{}],76:[function(require,module,exports){
/**
 * Create the application.
 */

exports.tree =
exports.scene =
exports.deku = require('./application')

/**
 * Render scenes to the DOM.
 */

if (typeof document !== 'undefined') {
  exports.render = require('./render')
}

/**
 * Render scenes to a string
 */

exports.renderString = require('./stringify')
},{"./application":74,"./render":78,"./stringify":79}],77:[function(require,module,exports){
var type = require('component-type')

/**
 * Returns the type of a virtual node
 *
 * @param  {Object} node
 * @return {String}
 */

module.exports = function nodeType (node) {
  var v = type(node)
  if (v === 'null' || node === false) return 'empty'
  if (v !== 'object') return 'text'
  if (type(node.type) === 'string') return 'element'
  return 'component'
}

},{"component-type":83}],78:[function(require,module,exports){
/**
 * Dependencies.
 */

var raf = require('component-raf')
var isDom = require('is-dom')
var uid = require('get-uid')
var keypath = require('object-path')
var events = require('./events')
var svg = require('./svg')
var defaults = require('object-defaults')
var forEach = require('fast.js/forEach')
var assign = require('fast.js/object/assign')
var reduce = require('fast.js/reduce')
var nodeType = require('./node-type')

/**
 * Expose `dom`.
 */

module.exports = render

/**
 * Render an app to the DOM
 *
 * @param {Application} app
 * @param {HTMLElement} container
 * @param {Object} opts
 *
 * @return {Object}
 */

function render (app, container, opts) {
  var frameId
  var isRendering
  var rootId = 'root'
  var currentElement
  var currentNativeElement
  var connections = {}
  var components = {}
  var entities = {}
  var handlers = {}
  var mountQueue = []
  var children = {}
  children[rootId] = {}

  if (!isDom(container)) {
    throw new Error('Container element must be a DOM element')
  }

  /**
   * Rendering options. Batching is only ever really disabled
   * when running tests, and pooling can be disabled if the user
   * is doing something stupid with the DOM in their components.
   */

  var options = defaults(assign({}, app.options || {}, opts || {}), {
    batching: true
  })

  /**
   * Listen to DOM events
   */
  var rootElement = getRootElement(container)
  addNativeEventListeners()

  /**
   * Watch for changes to the app so that we can update
   * the DOM as needed.
   */

  app.on('unmount', onunmount)
  app.on('mount', onmount)
  app.on('source', onupdate)

  /**
   * If the app has already mounted an element, we can just
   * render that straight away.
   */

  if (app.element) render()

  /**
   * Teardown the DOM rendering so that it stops
   * rendering and everything can be garbage collected.
   */

  function teardown () {
    removeNativeEventListeners()
    removeNativeElement()
    app.off('unmount', onunmount)
    app.off('mount', onmount)
    app.off('source', onupdate)
  }

  /**
   * Swap the current rendered node with a new one that is rendered
   * from the new virtual element mounted on the app.
   *
   * @param {VirtualElement} element
   */

  function onmount () {
    invalidate()
  }

  /**
   * If the app unmounts an element, we should clear out the current
   * rendered element. This will remove all the entities.
   */

  function onunmount () {
    removeNativeElement()
    currentElement = null
  }

  /**
   * Update all components that are bound to the source
   *
   * @param {String} name
   * @param {*} data
   */

  function onupdate (name, data) {
    if (!connections[name]) return;
    connections[name].forEach(function(update) {
      update(data)
    })
  }

  /**
   * Render and mount a component to the native dom.
   *
   * @param {Entity} entity
   * @return {HTMLElement}
   */

  function mountEntity (entity) {
    register(entity)
    setSources(entity)
    children[entity.id] = {}
    entities[entity.id] = entity

    // commit initial state and props.
    commit(entity)

    // callback before mounting.
    trigger('beforeMount', entity, [entity.context])
    trigger('beforeRender', entity, [entity.context])

    // render virtual element.
    var virtualElement = renderEntity(entity)
    // create native element.
    var nativeElement = toNative(entity.id, '0', virtualElement)

    entity.virtualElement = virtualElement
    entity.nativeElement = nativeElement

    // Fire afterRender and afterMount hooks at the end
    // of the render cycle
    mountQueue.push(entity.id)

    return nativeElement
  }

  /**
   * Remove a component from the native dom.
   *
   * @param {Entity} entity
   */

  function unmountEntity (entityId) {
    var entity = entities[entityId]
    if (!entity) return
    trigger('beforeUnmount', entity, [entity.context, entity.nativeElement])
    unmountChildren(entityId)
    removeAllEvents(entityId)
    var componentEntities = components[entityId].entities;
    delete componentEntities[entityId]
    delete components[entityId]
    delete entities[entityId]
    delete children[entityId]
  }

  /**
   * Render the entity and make sure it returns a node
   *
   * @param {Entity} entity
   *
   * @return {VirtualTree}
   */

  function renderEntity (entity) {
    var component = entity.component
    var fn = typeof component === 'function' ? component : component.render
    if (!fn) throw new Error('Component needs a render function')
    var result = fn(entity.context, setState(entity))
    if (!result) throw new Error('Render function must return an element.')
    return result
  }

  /**
   * Whenever setState or setProps is called, we mark the entity
   * as dirty in the renderer. This lets us optimize the re-rendering
   * and skip components that definitely haven't changed.
   *
   * @param {Entity} entity
   *
   * @return {Function} A curried function for updating the state of an entity
   */

  function setState (entity) {
    return function (nextState) {
      updateEntityState(entity, nextState)
    }
  }

  /**
   * Tell the app it's dirty and needs to re-render. If batching is disabled
   * we can just trigger a render immediately, otherwise we'll wait until
   * the next available frame.
   */

  function invalidate () {
    if (!options.batching) {
      if (!isRendering) render()
    } else {
      if (!frameId) frameId = raf(render)
    }
  }

  /**
   * Update the DOM. If the update fails we stop the loop
   * so we don't get errors on every frame.
   *
   * @api public
   */

  function render () {
    // If this is called synchronously we need to
    // cancel any pending future updates
    clearFrame()

    // If the rendering from the previous frame is still going,
    // we'll just wait until the next frame. Ideally renders should
    // not take over 16ms to stay within a single frame, but this should
    // catch it if it does.
    if (isRendering) {
      frameId = raf(render)
      return
    } else {
      isRendering = true
    }

    // 1. If there isn't a native element rendered for the current mounted element
    // then we need to create it from scratch.
    // 2. If a new element has been mounted, we should diff them.
    // 3. We should update check all child components for changes.
    if (!currentNativeElement) {
      currentElement = app.element
      currentNativeElement = toNative(rootId, '0', currentElement)
      if (container.children.length > 0) {
        console.info('deku: The container element is not empty. These elements will be removed. Read more: http://cl.ly/b0Sr')
      }
      if (container === document.body) {
        console.warn('deku: Using document.body is allowed but it can cause some issues. Read more: http://cl.ly/b0SC')
      }
      removeAllChildren(container)
      container.appendChild(currentNativeElement)
    } else if (currentElement !== app.element) {
      currentNativeElement = patch(rootId, currentElement, app.element, currentNativeElement)
      currentElement = app.element
      updateChildren(rootId)
    } else {
      updateChildren(rootId)
    }

    // Call mount events on all new entities
    flushMountQueue()

    // Allow rendering again.
    isRendering = false

  }

  /**
   * Call hooks for all new entities that have been created in
   * the last render from the bottom up.
   */

  function flushMountQueue () {
    while (mountQueue.length > 0) {
      var entityId = mountQueue.shift()
      var entity = entities[entityId]
      trigger('afterRender', entity, [entity.context, entity.nativeElement])
      trigger('afterMount', entity, [entity.context, entity.nativeElement, setState(entity)])
    }
  }

  /**
   * Clear the current scheduled frame
   */

  function clearFrame () {
    if (!frameId) return
    raf.cancel(frameId)
    frameId = 0
  }

  /**
   * Update a component.
   *
   * The entity is just the data object for a component instance.
   *
   * @param {String} id Component instance id.
   */

  function updateEntity (entityId) {
    var entity = entities[entityId]
    setSources(entity)

    if (!shouldUpdate(entity)) {
      commit(entity)
      return updateChildren(entityId)
    }

    var currentTree = entity.virtualElement
    var nextProps = entity.pendingProps
    var nextState = entity.pendingState
    var previousState = entity.context.state
    var previousProps = entity.context.props

    // hook before rendering. could modify state just before the render occurs.
    trigger('beforeUpdate', entity, [entity.context, nextProps, nextState])
    trigger('beforeRender', entity, [entity.context])

    // commit state and props.
    commit(entity)

    // re-render.
    var nextTree = renderEntity(entity)

    // if the tree is the same we can just skip this component
    // but we should still check the children to see if they're dirty.
    // This allows us to memoize the render function of components.
    if (nextTree === currentTree) return updateChildren(entityId)

    // apply new virtual tree to native dom.
    entity.nativeElement = patch(entityId, currentTree, nextTree, entity.nativeElement)
    entity.virtualElement = nextTree
    updateChildren(entityId)

    // trigger render hook
    trigger('afterRender', entity, [entity.context, entity.nativeElement])

    // trigger afterUpdate after all children have updated.
    trigger('afterUpdate', entity, [entity.context, previousProps, previousState, setState(entity)])
  }

  /**
   * Update all the children of an entity.
   *
   * @param {String} id Component instance id.
   */

  function updateChildren (entityId) {
    forEach(children[entityId], function (childId) {
      updateEntity(childId)
    })
  }

  /**
   * Remove all of the child entities of an entity
   *
   * @param {Entity} entity
   */

  function unmountChildren (entityId) {
    forEach(children[entityId], function (childId) {
      unmountEntity(childId)
    })
  }

  /**
   * Remove the root element. If this is called synchronously we need to
   * cancel any pending future updates.
   */

  function removeNativeElement () {
    clearFrame()
    removeElement(rootId, '0', currentNativeElement)
    currentNativeElement = null
  }

  /**
   * Create a native element from a virtual element.
   *
   * @param {String} entityId
   * @param {String} path
   * @param {Object} vnode
   *
   * @return {HTMLDocumentFragment}
   */

  function toNative (entityId, path, vnode) {
    switch (nodeType(vnode)) {
      case 'text': return toNativeText(vnode)
      case 'empty': return toNativeEmptyElement(entityId, path)
      case 'element': return toNativeElement(entityId, path, vnode)
      case 'component': return toNativeComponent(entityId, path, vnode)
    }
  }

  /**
   * Create a native text element from a virtual element.
   *
   * @param {Object} vnode
   */

  function toNativeText (text) {
    return document.createTextNode(text)
  }

  /**
   * Create a native element from a virtual element.
   */

  function toNativeElement (entityId, path, vnode) {
    var el
    var attributes = vnode.attributes
    var tagName = vnode.type
    var childNodes = vnode.children

    // create element either from pool or fresh.
    if (svg.isElement(tagName)) {
      el = document.createElementNS(svg.namespace, tagName)
    } else {
      el = document.createElement(tagName)
    }

    // set attributes.
    forEach(attributes, function (value, name) {
      setAttribute(entityId, path, el, name, value)
    })

    // add children.
    forEach(childNodes, function (child, i) {
      var childEl = toNative(entityId, path + '.' + i, child)
      if (!childEl.parentNode) el.appendChild(childEl)
    })

    // store keys on the native element for fast event handling.
    el.__entity__ = entityId
    el.__path__ = path

    return el
  }

  /**
   * Create a native element from a virtual element.
   */

  function toNativeEmptyElement (entityId, path) {
    var el = document.createElement('noscript')
    el.__entity__ = entityId
    el.__path__ = path
    return el
  }

  /**
   * Create a native element from a component.
   */

  function toNativeComponent (entityId, path, vnode) {
    var child = new Entity(vnode.type, assign({ children: vnode.children }, vnode.attributes), entityId)
    children[entityId][path] = child.id
    return mountEntity(child)
  }

  /**
   * Patch an element with the diff from two trees.
   */

  function patch (entityId, prev, next, el) {
    return diffNode('0', entityId, prev, next, el)
  }

  /**
   * Create a diff between two trees of nodes.
   */

  function diffNode (path, entityId, prev, next, el) {
    var leftType = nodeType(prev)
    var rightType = nodeType(next)

    // Type changed. This could be from element->text, text->ComponentA,
    // ComponentA->ComponentB etc. But NOT div->span. These are the same type
    // (ElementNode) but different tag name.
    if (leftType !== rightType) return replaceElement(entityId, path, el, next)

    switch (rightType) {
      case 'text': return diffText(prev, next, el)
      case 'empty': return el
      case 'element': return diffElement(path, entityId, prev, next, el)
      case 'component': return diffComponent(path, entityId, prev, next, el)
    }
  }

  /**
   * Diff two text nodes and update the element.
   */

  function diffText (previous, current, el) {
    if (current !== previous) el.data = current
    return el
  }

  /**
   * Diff the children of an ElementNode.
   */

  function diffChildren (path, entityId, prev, next, el) {
    var positions = []
    var hasKeys = false
    var childNodes = Array.prototype.slice.apply(el.childNodes)
    var leftKeys = reduce(prev.children, keyMapReducer, {})
    var rightKeys = reduce(next.children, keyMapReducer, {})
    var currentChildren = assign({}, children[entityId])

    function keyMapReducer (acc, child, i) {
      if (child && child.attributes && child.attributes.key != null) {
        acc[child.attributes.key] = {
          element: child,
          index: i
        }
        hasKeys = true
      }
      return acc
    }

    // Diff all of the nodes that have keys. This lets us re-used elements
    // instead of overriding them and lets us move them around.
    if (hasKeys) {

      // Removals
      forEach(leftKeys, function (leftNode, key) {
        if (rightKeys[key] == null) {
          var leftPath = path + '.' + leftNode.index
          removeElement(
            entityId,
            leftPath,
            childNodes[leftNode.index]
          )
        }
      })

      // Update nodes
      forEach(rightKeys, function (rightNode, key) {
        var leftNode = leftKeys[key]

        // We only want updates for now
        if (leftNode == null) return

        var leftPath = path + '.' + leftNode.index

        // Updated
        positions[rightNode.index] = diffNode(
          leftPath,
          entityId,
          leftNode.element,
          rightNode.element,
          childNodes[leftNode.index]
        )
      })

      // Update the positions of all child components and event handlers
      forEach(rightKeys, function (rightNode, key) {
        var leftNode = leftKeys[key]

        // We just want elements that have moved around
        if (leftNode == null || leftNode.index === rightNode.index) return

        var rightPath = path + '.' + rightNode.index
        var leftPath = path + '.' + leftNode.index

        // Update all the child component path positions to match
        // the latest positions if they've changed. This is a bit hacky.
        forEach(currentChildren, function (childId, childPath) {
          if (leftPath === childPath) {
            delete children[entityId][childPath]
            children[entityId][rightPath] = childId
          }
        })
      })

      // Now add all of the new nodes last in case their path
      // would have conflicted with one of the previous paths.
      forEach(rightKeys, function (rightNode, key) {
        var rightPath = path + '.' + rightNode.index
        if (leftKeys[key] == null) {
          positions[rightNode.index] = toNative(
            entityId,
            rightPath,
            rightNode.element
          )
        }
      })

    } else {
      var maxLength = Math.max(prev.children.length, next.children.length)

      // Now diff all of the nodes that don't have keys
      for (var i = 0; i < maxLength; i++) {
        var leftNode = prev.children[i]
        var rightNode = next.children[i]

        // Removals
        if (rightNode === undefined) {
          removeElement(
            entityId,
            path + '.' + i,
            childNodes[i]
          )
          continue
        }

        // New Node
        if (leftNode === undefined) {
          positions[i] = toNative(
            entityId,
            path + '.' + i,
            rightNode
          )
          continue
        }

        // Updated
        positions[i] = diffNode(
          path + '.' + i,
          entityId,
          leftNode,
          rightNode,
          childNodes[i]
        )
      }
    }

    // Reposition all the elements
    forEach(positions, function (childEl, newPosition) {
      var target = el.childNodes[newPosition]
      if (childEl && childEl !== target) {
        if (target) {
          el.insertBefore(childEl, target)
        } else {
          el.appendChild(childEl)
        }
      }
    })
  }

  /**
   * Diff the attributes and add/remove them.
   */

  function diffAttributes (prev, next, el, entityId, path) {
    var nextAttrs = next.attributes
    var prevAttrs = prev.attributes

    // add new attrs
    forEach(nextAttrs, function (value, name) {
      if (events[name] || !(name in prevAttrs) || prevAttrs[name] !== value) {
        setAttribute(entityId, path, el, name, value)
      }
    })

    // remove old attrs
    forEach(prevAttrs, function (value, name) {
      if (!(name in nextAttrs)) {
        removeAttribute(entityId, path, el, name)
      }
    })
  }

  /**
   * Update a component with the props from the next node. If
   * the component type has changed, we'll just remove the old one
   * and replace it with the new component.
   */

  function diffComponent (path, entityId, prev, next, el) {
    if (next.type !== prev.type) {
      return replaceElement(entityId, path, el, next)
    } else {
      var targetId = children[entityId][path]

      // This is a hack for now
      if (targetId) {
        updateEntityProps(targetId, assign({ children: next.children }, next.attributes))
      }

      return el
    }
  }

  /**
   * Diff two element nodes.
   */

  function diffElement (path, entityId, prev, next, el) {
    if (next.type !== prev.type) return replaceElement(entityId, path, el, next)
    diffAttributes(prev, next, el, entityId, path)
    diffChildren(path, entityId, prev, next, el)
    return el
  }

  /**
   * Removes an element from the DOM and unmounts and components
   * that are within that branch
   *
   * side effects:
   *   - removes element from the DOM
   *   - removes internal references
   *
   * @param {String} entityId
   * @param {String} path
   * @param {HTMLElement} el
   */

  function removeElement (entityId, path, el) {
    var childrenByPath = children[entityId]
    var childId = childrenByPath[path]
    var entityHandlers = handlers[entityId] || {}
    var removals = []

    // If the path points to a component we should use that
    // components element instead, because it might have moved it.
    if (childId) {
      var child = entities[childId]
      el = child.nativeElement
      unmountEntity(childId)
      removals.push(path)
    } else {

      // Just remove the text node
      if (!isElement(el)) return el && el.parentNode.removeChild(el)

      // Then we need to find any components within this
      // branch and unmount them.
      forEach(childrenByPath, function (childId, childPath) {
        if (childPath === path || isWithinPath(path, childPath)) {
          unmountEntity(childId)
          removals.push(childPath)
        }
      })

      // Remove all events at this path or below it
      forEach(entityHandlers, function (fn, handlerPath) {
        if (handlerPath === path || isWithinPath(path, handlerPath)) {
          removeEvent(entityId, handlerPath)
        }
      })
    }

    // Remove the paths from the object without touching the
    // old object. This keeps the object using fast properties.
    forEach(removals, function (path) {
      delete children[entityId][path]
    })

    // Remove it from the DOM
    el.parentNode.removeChild(el)
  }

  /**
   * Replace an element in the DOM. Removing all components
   * within that element and re-rendering the new virtual node.
   *
   * @param {Entity} entity
   * @param {String} path
   * @param {HTMLElement} el
   * @param {Object} vnode
   *
   * @return {void}
   */

  function replaceElement (entityId, path, el, vnode) {
    var parent = el.parentNode
    var index = Array.prototype.indexOf.call(parent.childNodes, el)

    // remove the previous element and all nested components. This
    // needs to happen before we create the new element so we don't
    // get clashes on the component paths.
    removeElement(entityId, path, el)

    // then add the new element in there
    var newEl = toNative(entityId, path, vnode)
    var target = parent.childNodes[index]

    if (target) {
      parent.insertBefore(newEl, target)
    } else {
      parent.appendChild(newEl)
    }

    // walk up the tree and update all `entity.nativeElement` references.
    if (entityId !== 'root' && path === '0') {
      updateNativeElement(entityId, newEl)
    }

    return newEl
  }

  /**
   * Update all entities in a branch that have the same nativeElement. This
   * happens when a component has another component as it's root node.
   *
   * @param {String} entityId
   * @param {HTMLElement} newEl
   *
   * @return {void}
   */

  function updateNativeElement (entityId, newEl) {
    var target = entities[entityId]
    if (target.ownerId === 'root') return
    if (children[target.ownerId]['0'] === entityId) {
      entities[target.ownerId].nativeElement = newEl
      updateNativeElement(target.ownerId, newEl)
    }
  }

  /**
   * Set the attribute of an element, performing additional transformations
   * dependning on the attribute name
   *
   * @param {HTMLElement} el
   * @param {String} name
   * @param {String} value
   */

  function setAttribute (entityId, path, el, name, value) {
    if (!value) {
      removeAttribute(entityId, path, el, name)
      return
    }
    if (events[name]) {
      addEvent(entityId, path, events[name], value)
      return
    }
    switch (name) {
      case 'checked':
      case 'disabled':
      case 'selected':
        el[name] = true
        break
      case 'innerHTML':
        el.innerHTML = value
        break
      case 'value':
        setElementValue(el, value)
        break
      case svg.isAttribute(name):
        el.setAttributeNS(svg.namespace, name, value)
        break
      default:
        el.setAttribute(name, value)
        break
    }
  }

  /**
   * Remove an attribute, performing additional transformations
   * dependning on the attribute name
   *
   * @param {HTMLElement} el
   * @param {String} name
   */

  function removeAttribute (entityId, path, el, name) {
    if (events[name]) {
      removeEvent(entityId, path, events[name])
      return
    }
    switch (name) {
      case 'checked':
      case 'disabled':
      case 'selected':
        el[name] = false
        break
      case 'innerHTML':
        el.innerHTML = ''
      case 'value':
        setElementValue(el, null)
        break
      default:
        el.removeAttribute(name)
        break
    }
  }

  /**
   * Checks to see if one tree path is within
   * another tree path. Example:
   *
   * 0.1 vs 0.1.1 = true
   * 0.2 vs 0.3.5 = false
   *
   * @param {String} target
   * @param {String} path
   *
   * @return {Boolean}
   */

  function isWithinPath (target, path) {
    return path.indexOf(target + '.') === 0
  }

  /**
   * Is the DOM node an element node
   *
   * @param {HTMLElement} el
   *
   * @return {Boolean}
   */

  function isElement (el) {
    return !!(el && el.tagName)
  }

  /**
   * Remove all the child nodes from an element
   *
   * @param {HTMLElement} el
   */

  function removeAllChildren (el) {
    while (el.firstChild) el.removeChild(el.firstChild)
  }

  /**
   * Trigger a hook on a component.
   *
   * @param {String} name Name of hook.
   * @param {Entity} entity The component instance.
   * @param {Array} args To pass along to hook.
   */

  function trigger (name, entity, args) {
    if (typeof entity.component[name] !== 'function') return
    return entity.component[name].apply(null, args)
  }

  /**
   * Update an entity to match the latest rendered vode. We always
   * replace the props on the component when composing them. This
   * will trigger a re-render on all children below this point.
   *
   * @param {Entity} entity
   * @param {String} path
   * @param {Object} vnode
   *
   * @return {void}
   */

  function updateEntityProps (entityId, nextProps) {
    var entity = entities[entityId]
    entity.pendingProps = defaults({}, nextProps, entity.component.defaultProps || {})
    entity.dirty = true
    invalidate()
  }

  /**
   * Update component instance state.
   */

  function updateEntityState (entity, nextState) {
    entity.pendingState = assign(entity.pendingState, nextState)
    entity.dirty = true
    invalidate()
  }

  /**
   * Commit props and state changes to an entity.
   */

  function commit (entity) {
    entity.context = {
      state: entity.pendingState,
      props: entity.pendingProps,
      id: entity.id
    }
    entity.pendingState = assign({}, entity.context.state)
    entity.pendingProps = assign({}, entity.context.props)
    entity.dirty = false
    if (typeof entity.component.validate === 'function') {
      entity.component.validate(entity.context)
    }
  }

  /**
   * Try to avoid creating new virtual dom if possible.
   *
   * Later we may expose this so you can override, but not there yet.
   */

  function shouldUpdate (entity) {
    if (!entity.dirty) return false
    if (!entity.component.shouldUpdate) return true
    var nextProps = entity.pendingProps
    var nextState = entity.pendingState
    var bool = entity.component.shouldUpdate(entity.context, nextProps, nextState)
    return bool
  }

  /**
   * Register an entity.
   *
   * This is mostly to pre-preprocess component properties and values chains.
   *
   * The end result is for every component that gets mounted,
   * you create a set of IO nodes in the network from the `value` definitions.
   *
   * @param {Component} component
   */

  function register (entity) {
    registerEntity(entity)
    var component = entity.component
    if (component.registered) return

    // initialize sources once for a component type.
    registerSources(entity)
    component.registered = true
  }

  /**
   * Add entity to data-structures related to components/entities.
   *
   * @param {Entity} entity
   */

  function registerEntity(entity) {
    var component = entity.component
    // all entities for this component type.
    var entities = component.entities = component.entities || {}
    // add entity to component list
    entities[entity.id] = entity
    // map to component so you can remove later.
    components[entity.id] = component
  }

  /**
   * Initialize sources for a component by type.
   *
   * @param {Entity} entity
   */

  function registerSources(entity) {
    var component = components[entity.id]
    // get 'class-level' sources.
    // if we've already hooked it up, then we're good.
    var sources = component.sources
    if (sources) return
    var entities = component.entities

    // hook up sources.
    var map = component.sourceToPropertyName = {}
    component.sources = sources = []
    var propTypes = component.propTypes
    for (var name in propTypes) {
      var data = propTypes[name]
      if (!data) continue
      if (!data.source) continue
      sources.push(data.source)
      map[data.source] = name
    }

    // send value updates to all component instances.
    sources.forEach(function (source) {
      connections[source] = connections[source] || []
      connections[source].push(update)

      function update (data) {
        var prop = map[source]
        for (var entityId in entities) {
          var entity = entities[entityId]
          var changes = {}
          changes[prop] = data
          updateEntityProps(entityId, assign(entity.pendingProps, changes))
        }
      }
    })
  }

  /**
   * Set the initial source value on the entity
   *
   * @param {Entity} entity
   */

  function setSources (entity) {
    var component = entity.component
    var map = component.sourceToPropertyName
    var sources = component.sources
    sources.forEach(function (source) {
      var name = map[source]
      if (entity.pendingProps[name] != null) return
      entity.pendingProps[name] = app.sources[source] // get latest value plugged into global store
    })
  }

  /**
   * Add all of the DOM event listeners
   */

  function addNativeEventListeners () {
    forEach(events, function (eventType) {
      rootElement.addEventListener(eventType, handleEvent, true)
    })
  }

  /**
   * Add all of the DOM event listeners
   */

  function removeNativeEventListeners () {
    forEach(events, function (eventType) {
      rootElement.removeEventListener(eventType, handleEvent, true)
    })
  }

  /**
   * Handle an event that has occured within the container
   *
   * @param {Event} event
   */

  function handleEvent (event) {
    var target = event.target
    var eventType = event.type

    // Walk up the DOM tree and see if there is a handler
    // for this event type higher up.
    while (target) {
      var fn = keypath.get(handlers, [target.__entity__, target.__path__, eventType])
      if (fn) {
        event.delegateTarget = target
        if (fn(event) === false) break
      }
      target = target.parentNode
    }
  }

  /**
   * Bind events for an element, and all it's rendered child elements.
   *
   * @param {String} path
   * @param {String} event
   * @param {Function} fn
   */

  function addEvent (entityId, path, eventType, fn) {
    keypath.set(handlers, [entityId, path, eventType], function (e) {
      var entity = entities[entityId]
      if (entity) {
        return fn.call(null, e, entity.context, setState(entity))
      } else {
        return fn.call(null, e)
      }
    })
  }

  /**
   * Unbind events for a entityId
   *
   * @param {String} entityId
   */

  function removeEvent (entityId, path, eventType) {
    var args = [entityId]
    if (path) args.push(path)
    if (eventType) args.push(eventType)
    keypath.del(handlers, args)
  }

  /**
   * Unbind all events from an entity
   *
   * @param {Entity} entity
   */

  function removeAllEvents (entityId) {
    keypath.del(handlers, [entityId])
  }

  /**
   * Used for debugging to inspect the current state without
   * us needing to explicitly manage storing/updating references.
   *
   * @return {Object}
   */

  function inspect () {
    return {
      entities: entities,
      handlers: handlers,
      connections: connections,
      currentElement: currentElement,
      options: options,
      app: app,
      container: container,
      children: children
    }
  }

  /**
   * Return an object that lets us completely remove the automatic
   * DOM rendering and export debugging tools.
   */

  return {
    remove: teardown,
    inspect: inspect
  }
}

/**
 * A rendered component instance.
 *
 * This manages the lifecycle, props and state of the component.
 * It's basically just a data object for more straightfoward lookup.
 *
 * @param {Component} component
 * @param {Object} props
 */

function Entity (component, props, ownerId) {
  this.id = uid()
  this.ownerId = ownerId
  this.component = component
  this.propTypes = component.propTypes || {}
  this.context = {}
  this.context.id = this.id
  this.context.props = defaults(props || {}, component.defaultProps || {})
  this.context.state = this.component.initialState ? this.component.initialState(this.context.props) : {}
  this.pendingProps = assign({}, this.context.props)
  this.pendingState = assign({}, this.context.state)
  this.dirty = false
  this.virtualElement = null
  this.nativeElement = null
  this.displayName = component.name || 'Component'
}

/**
 * Retrieve the nearest 'body' ancestor of the given element or else the root
 * element of the document in which stands the given element.
 *
 * This is necessary if you want to attach the events handler to the correct
 * element and be able to dispatch events in document fragments such as
 * Shadow DOM.
 *
 * @param  {HTMLElement} el The element on which we will render an app.
 * @return {HTMLElement}    The root element on which we will attach the events
 *                          handler.
 */

function getRootElement (el) {
  while (el.parentElement) {
    if (el.tagName === 'BODY' || !el.parentElement) {
      return el
    }
    el = el.parentElement
  }
  return el
}

/**
 * Set the value property of an element and keep the text selection
 * for input fields.
 *
 * @param {HTMLElement} el
 * @param {String} value
 */

function setElementValue (el, value) {
  if (el === document.activeElement && canSelectText(el)) {
    var start = el.selectionStart
    var end = el.selectionEnd
    el.value = value
    el.setSelectionRange(start, end)
  } else {
    el.value = value
  }
}

/**
 * For some reason only certain types of inputs can set the selection range.
 *
 * @param {HTMLElement} el
 *
 * @return {Boolean}
 */

function canSelectText (el) {
  return el.tagName === 'INPUT' && ['text','search','password','tel','url'].indexOf(el.type) > -1
}

},{"./events":75,"./node-type":77,"./svg":80,"component-raf":82,"fast.js/forEach":86,"fast.js/object/assign":89,"fast.js/reduce":92,"get-uid":93,"is-dom":94,"object-defaults":97,"object-path":98}],79:[function(require,module,exports){
var defaults = require('object-defaults')
var nodeType = require('./node-type')
var type = require('component-type')

/**
 * Expose `stringify`.
 */

module.exports = function (app) {
  if (!app.element) {
    throw new Error('No element mounted')
  }

  /**
   * Render to string.
   *
   * @param {Component} component
   * @param {Object} [props]
   * @return {String}
   */

  function stringify (component, optProps, children) {
    var propTypes = component.propTypes || {}
    var props = defaults(optProps || {}, component.defaultProps || {})
    var state = component.initialState ? component.initialState(props) : {}
    props.children = children;

    for (var name in propTypes) {
      var options = propTypes[name]
      if (options.source) {
        props[name] = app.sources[options.source]
      }
    }

    if (component.beforeMount) component.beforeMount({ props: props, state: state })
    if (component.beforeRender) component.beforeRender({ props: props, state: state })
    var node = component.render({ props: props, state: state })
    return stringifyNode(node, '0')
  }

  /**
   * Render a node to a string
   *
   * @param {Node} node
   * @param {Tree} tree
   *
   * @return {String}
   */

  function stringifyNode (node, path) {
    switch (nodeType(node)) {
      case 'empty': return '<noscript />'
      case 'text': return node
      case 'element':
        var children = node.children
        var attributes = node.attributes
        var tagName = node.type
        var innerHTML = attributes.innerHTML
        var str = '<' + tagName + attrs(attributes) + '>'

        if (innerHTML) {
          str += innerHTML
        } else {
          for (var i = 0, n = children.length; i < n; i++) {
            str += stringifyNode(children[i], path + '.' + i)
          }
        }

        str += '</' + tagName + '>'
        return str
      case 'component': return stringify(node.type, node.attributes, node.children)
    }

    throw new Error('Invalid type')
  }

  return stringifyNode(app.element, '0')
}

/**
 * HTML attributes to string.
 *
 * @param {Object} attributes
 * @return {String}
 * @api private
 */

function attrs (attributes) {
  var str = ''
  for (var key in attributes) {
    var value = attributes[key]
    if (key === 'innerHTML') continue
    if (isValidAttributeValue(value)) str += attr(key, attributes[key])
  }
  return str
}

/**
 * HTML attribute to string.
 *
 * @param {String} key
 * @param {String} val
 * @return {String}
 * @api private
 */

function attr (key, val) {
  return ' ' + key + '="' + val + '"'
}

/**
 * Is a value able to be set a an attribute value?
 *
 * @param {Any} value
 *
 * @return {Boolean}
 */

function isValidAttributeValue (value) {
  var valueType = type(value)
  switch (valueType) {
  case 'string':
  case 'number':
    return true;

  case 'boolean':
    return value;

  default:
    return false;
  }
}

},{"./node-type":77,"component-type":83,"object-defaults":97}],80:[function(require,module,exports){
module.exports = {
  isElement: require('is-svg-element').isElement,
  isAttribute: require('is-svg-attribute'),
  namespace: 'http://www.w3.org/2000/svg'
}

},{"is-svg-attribute":95,"is-svg-element":96}],81:[function(require,module,exports){

/**
 * Expose `Emitter`.
 */

if (typeof module !== 'undefined') {
  module.exports = Emitter;
}

/**
 * Initialize a new `Emitter`.
 *
 * @api public
 */

function Emitter(obj) {
  if (obj) return mixin(obj);
};

/**
 * Mixin the emitter properties.
 *
 * @param {Object} obj
 * @return {Object}
 * @api private
 */

function mixin(obj) {
  for (var key in Emitter.prototype) {
    obj[key] = Emitter.prototype[key];
  }
  return obj;
}

/**
 * Listen on the given `event` with `fn`.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.on =
Emitter.prototype.addEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};
  (this._callbacks['$' + event] = this._callbacks['$' + event] || [])
    .push(fn);
  return this;
};

/**
 * Adds an `event` listener that will be invoked a single
 * time then automatically removed.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.once = function(event, fn){
  function on() {
    this.off(event, on);
    fn.apply(this, arguments);
  }

  on.fn = fn;
  this.on(event, on);
  return this;
};

/**
 * Remove the given callback for `event` or all
 * registered callbacks.
 *
 * @param {String} event
 * @param {Function} fn
 * @return {Emitter}
 * @api public
 */

Emitter.prototype.off =
Emitter.prototype.removeListener =
Emitter.prototype.removeAllListeners =
Emitter.prototype.removeEventListener = function(event, fn){
  this._callbacks = this._callbacks || {};

  // all
  if (0 == arguments.length) {
    this._callbacks = {};
    return this;
  }

  // specific event
  var callbacks = this._callbacks['$' + event];
  if (!callbacks) return this;

  // remove all handlers
  if (1 == arguments.length) {
    delete this._callbacks['$' + event];
    return this;
  }

  // remove specific handler
  var cb;
  for (var i = 0; i < callbacks.length; i++) {
    cb = callbacks[i];
    if (cb === fn || cb.fn === fn) {
      callbacks.splice(i, 1);
      break;
    }
  }
  return this;
};

/**
 * Emit `event` with the given args.
 *
 * @param {String} event
 * @param {Mixed} ...
 * @return {Emitter}
 */

Emitter.prototype.emit = function(event){
  this._callbacks = this._callbacks || {};
  var args = [].slice.call(arguments, 1)
    , callbacks = this._callbacks['$' + event];

  if (callbacks) {
    callbacks = callbacks.slice(0);
    for (var i = 0, len = callbacks.length; i < len; ++i) {
      callbacks[i].apply(this, args);
    }
  }

  return this;
};

/**
 * Return array of callbacks for `event`.
 *
 * @param {String} event
 * @return {Array}
 * @api public
 */

Emitter.prototype.listeners = function(event){
  this._callbacks = this._callbacks || {};
  return this._callbacks['$' + event] || [];
};

/**
 * Check if this emitter has `event` handlers.
 *
 * @param {String} event
 * @return {Boolean}
 * @api public
 */

Emitter.prototype.hasListeners = function(event){
  return !! this.listeners(event).length;
};

},{}],82:[function(require,module,exports){
/**
 * Expose `requestAnimationFrame()`.
 */

exports = module.exports = window.requestAnimationFrame
  || window.webkitRequestAnimationFrame
  || window.mozRequestAnimationFrame
  || fallback;

/**
 * Fallback implementation.
 */

var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime();
  var ms = Math.max(0, 16 - (curr - prev));
  var req = setTimeout(fn, ms);
  prev = curr;
  return req;
}

/**
 * Cancel.
 */

var cancel = window.cancelAnimationFrame
  || window.webkitCancelAnimationFrame
  || window.mozCancelAnimationFrame
  || window.clearTimeout;

exports.cancel = function(id){
  cancel.call(window, id);
};

},{}],83:[function(require,module,exports){
/**
 * toString ref.
 */

var toString = Object.prototype.toString;

/**
 * Return the type of `val`.
 *
 * @param {Mixed} val
 * @return {String}
 * @api public
 */

module.exports = function(val){
  switch (toString.call(val)) {
    case '[object Date]': return 'date';
    case '[object RegExp]': return 'regexp';
    case '[object Arguments]': return 'arguments';
    case '[object Array]': return 'array';
    case '[object Error]': return 'error';
  }

  if (val === null) return 'null';
  if (val === undefined) return 'undefined';
  if (val !== val) return 'nan';
  if (val && val.nodeType === 1) return 'element';

  if (isBuffer(val)) return 'buffer';

  val = val.valueOf
    ? val.valueOf()
    : Object.prototype.valueOf.apply(val);

  return typeof val;
};

// code borrowed from https://github.com/feross/is-buffer/blob/master/index.js
function isBuffer(obj) {
  return !!(obj != null &&
    (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
      (obj.constructor &&
      typeof obj.constructor.isBuffer === 'function' &&
      obj.constructor.isBuffer(obj))
    ))
}

},{}],84:[function(require,module,exports){
'use strict';

var bindInternal3 = require('../function/bindInternal3');

/**
 * # For Each
 *
 * A fast `.forEach()` implementation.
 *
 * @param  {Array}    subject     The array (or array-like) to iterate over.
 * @param  {Function} fn          The visitor function.
 * @param  {Object}   thisContext The context for the visitor.
 */
module.exports = function fastForEach (subject, fn, thisContext) {
  var length = subject.length,
      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
      i;
  for (i = 0; i < length; i++) {
    iterator(subject[i], i, subject);
  }
};

},{"../function/bindInternal3":87}],85:[function(require,module,exports){
'use strict';

var bindInternal4 = require('../function/bindInternal4');

/**
 * # Reduce
 *
 * A fast `.reduce()` implementation.
 *
 * @param  {Array}    subject      The array (or array-like) to reduce.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
module.exports = function fastReduce (subject, fn, initialValue, thisContext) {
  var length = subject.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[0];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    result = iterator(result, subject[i], i, subject);
  }

  return result;
};

},{"../function/bindInternal4":88}],86:[function(require,module,exports){
'use strict';

var forEachArray = require('./array/forEach'),
    forEachObject = require('./object/forEach');

/**
 * # ForEach
 *
 * A fast `.forEach()` implementation.
 *
 * @param  {Array|Object} subject     The array or object to iterate over.
 * @param  {Function}     fn          The visitor function.
 * @param  {Object}       thisContext The context for the visitor.
 */
module.exports = function fastForEach (subject, fn, thisContext) {
  if (subject instanceof Array) {
    return forEachArray(subject, fn, thisContext);
  }
  else {
    return forEachObject(subject, fn, thisContext);
  }
};
},{"./array/forEach":84,"./object/forEach":90}],87:[function(require,module,exports){
'use strict';

/**
 * Internal helper to bind a function known to have 3 arguments
 * to a given context.
 */
module.exports = function bindInternal3 (func, thisContext) {
  return function (a, b, c) {
    return func.call(thisContext, a, b, c);
  };
};

},{}],88:[function(require,module,exports){
'use strict';

/**
 * Internal helper to bind a function known to have 4 arguments
 * to a given context.
 */
module.exports = function bindInternal4 (func, thisContext) {
  return function (a, b, c, d) {
    return func.call(thisContext, a, b, c, d);
  };
};

},{}],89:[function(require,module,exports){
'use strict';

/**
 * Analogue of Object.assign().
 * Copies properties from one or more source objects to
 * a target object. Existing keys on the target object will be overwritten.
 *
 * > Note: This differs from spec in some important ways:
 * > 1. Will throw if passed non-objects, including `undefined` or `null` values.
 * > 2. Does not support the curious Exception handling behavior, exceptions are thrown immediately.
 * > For more details, see:
 * > https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 *
 *
 *
 * @param  {Object} target      The target object to copy properties to.
 * @param  {Object} source, ... The source(s) to copy properties from.
 * @return {Object}             The updated target object.
 */
module.exports = function fastAssign (target) {
  var totalArgs = arguments.length,
      source, i, totalKeys, keys, key, j;

  for (i = 1; i < totalArgs; i++) {
    source = arguments[i];
    keys = Object.keys(source);
    totalKeys = keys.length;
    for (j = 0; j < totalKeys; j++) {
      key = keys[j];
      target[key] = source[key];
    }
  }
  return target;
};

},{}],90:[function(require,module,exports){
'use strict';

var bindInternal3 = require('../function/bindInternal3');

/**
 * # For Each
 *
 * A fast object `.forEach()` implementation.
 *
 * @param  {Object}   subject     The object to iterate over.
 * @param  {Function} fn          The visitor function.
 * @param  {Object}   thisContext The context for the visitor.
 */
module.exports = function fastForEachObject (subject, fn, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal3(fn, thisContext) : fn,
      key, i;
  for (i = 0; i < length; i++) {
    key = keys[i];
    iterator(subject[key], key, subject);
  }
};

},{"../function/bindInternal3":87}],91:[function(require,module,exports){
'use strict';

var bindInternal4 = require('../function/bindInternal4');

/**
 * # Reduce
 *
 * A fast object `.reduce()` implementation.
 *
 * @param  {Object}   subject      The object to reduce over.
 * @param  {Function} fn           The reducer function.
 * @param  {mixed}    initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}   thisContext  The context for the reducer.
 * @return {mixed}                 The final result.
 */
module.exports = function fastReduceObject (subject, fn, initialValue, thisContext) {
  var keys = Object.keys(subject),
      length = keys.length,
      iterator = thisContext !== undefined ? bindInternal4(fn, thisContext) : fn,
      i, key, result;

  if (initialValue === undefined) {
    i = 1;
    result = subject[keys[0]];
  }
  else {
    i = 0;
    result = initialValue;
  }

  for (; i < length; i++) {
    key = keys[i];
    result = iterator(result, subject[key], key, subject);
  }

  return result;
};

},{"../function/bindInternal4":88}],92:[function(require,module,exports){
'use strict';

var reduceArray = require('./array/reduce'),
    reduceObject = require('./object/reduce');

/**
 * # Reduce
 *
 * A fast `.reduce()` implementation.
 *
 * @param  {Array|Object} subject      The array or object to reduce over.
 * @param  {Function}     fn           The reducer function.
 * @param  {mixed}        initialValue The initial value for the reducer, defaults to subject[0].
 * @param  {Object}       thisContext  The context for the reducer.
 * @return {Array|Object}              The array or object containing the results.
 */
module.exports = function fastReduce (subject, fn, initialValue, thisContext) {
  if (subject instanceof Array) {
    return reduceArray(subject, fn, initialValue, thisContext);
  }
  else {
    return reduceObject(subject, fn, initialValue, thisContext);
  }
};
},{"./array/reduce":85,"./object/reduce":91}],93:[function(require,module,exports){
/** generate unique id for selector */
var counter = Date.now() % 1e9;

module.exports = function getUid(){
	return (Math.random() * 1e9 >>> 0) + (counter++);
};
},{}],94:[function(require,module,exports){
/*global window*/

/**
 * Check if object is dom node.
 *
 * @param {Object} val
 * @return {Boolean}
 * @api public
 */

module.exports = function isNode(val){
  if (!val || typeof val !== 'object') return false;
  if (window && 'object' == typeof window.Node) return val instanceof window.Node;
  return 'number' == typeof val.nodeType && 'string' == typeof val.nodeName;
}

},{}],95:[function(require,module,exports){
/**
 * Supported SVG attributes
 */

exports.attributes = {
  'cx': true,
  'cy': true,
  'd': true,
  'dx': true,
  'dy': true,
  'fill': true,
  'fillOpacity': true,
  'fontFamily': true,
  'fontSize': true,
  'fx': true,
  'fy': true,
  'gradientTransform': true,
  'gradientUnits': true,
  'markerEnd': true,
  'markerMid': true,
  'markerStart': true,
  'offset': true,
  'opacity': true,
  'patternContentUnits': true,
  'patternUnits': true,
  'points': true,
  'preserveAspectRatio': true,
  'r': true,
  'rx': true,
  'ry': true,
  'spreadMethod': true,
  'stopColor': true,
  'stopOpacity': true,
  'stroke': true,
  'strokeDasharray': true,
  'strokeLinecap': true,
  'strokeOpacity': true,
  'strokeWidth': true,
  'textAnchor': true,
  'transform': true,
  'version': true,
  'viewBox': true,
  'x1': true,
  'x2': true,
  'x': true,
  'y1': true,
  'y2': true,
  'y': true
}

/**
 * Are element's attributes SVG?
 *
 * @param {String} attr
 */

module.exports = function (attr) {
  return exports.attributes[attr] === true
}

},{}],96:[function(require,module,exports){
/**
 * Supported SVG elements
 *
 * @type {Array}
 */

exports.elements = {
  'animate': true,
  'circle': true,
  'defs': true,
  'ellipse': true,
  'g': true,
  'line': true,
  'linearGradient': true,
  'mask': true,
  'path': true,
  'pattern': true,
  'polygon': true,
  'polyline': true,
  'radialGradient': true,
  'rect': true,
  'stop': true,
  'svg': true,
  'text': true,
  'tspan': true
}

/**
 * Is element's namespace SVG?
 *
 * @param {String} name
 */

exports.isElement = function (name) {
  return name in exports.elements
}

},{}],97:[function(require,module,exports){
'use strict'

module.exports = function(target) {
  target = target || {}

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i]
    if (!source) continue

    Object.getOwnPropertyNames(source).forEach(function(key) {
      if (undefined === target[key])
        target[key] = source[key]
    })
  }

  return target
}

},{}],98:[function(require,module,exports){
(function (root, factory){
  'use strict';

  /*istanbul ignore next:cant test*/
  if (typeof module === 'object' && typeof module.exports === 'object') {
    module.exports = factory();
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else {
    // Browser globals
    root.objectPath = factory();
  }
})(this, function(){
  'use strict';

  var
    toStr = Object.prototype.toString,
    _hasOwnProperty = Object.prototype.hasOwnProperty;

  function isEmpty(value){
    if (!value) {
      return true;
    }
    if (isArray(value) && value.length === 0) {
        return true;
    } else if (!isString(value)) {
        for (var i in value) {
            if (_hasOwnProperty.call(value, i)) {
                return false;
            }
        }
        return true;
    }
    return false;
  }

  function toString(type){
    return toStr.call(type);
  }

  function isNumber(value){
    return typeof value === 'number' || toString(value) === "[object Number]";
  }

  function isString(obj){
    return typeof obj === 'string' || toString(obj) === "[object String]";
  }

  function isObject(obj){
    return typeof obj === 'object' && toString(obj) === "[object Object]";
  }

  function isArray(obj){
    return typeof obj === 'object' && typeof obj.length === 'number' && toString(obj) === '[object Array]';
  }

  function isBoolean(obj){
    return typeof obj === 'boolean' || toString(obj) === '[object Boolean]';
  }

  function getKey(key){
    var intKey = parseInt(key);
    if (intKey.toString() === key) {
      return intKey;
    }
    return key;
  }

  function set(obj, path, value, doNotReplace){
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return obj;
    }
    if (isString(path)) {
      return set(obj, path.split('.').map(getKey), value, doNotReplace);
    }
    var currentPath = path[0];

    if (path.length === 1) {
      var oldVal = obj[currentPath];
      if (oldVal === void 0 || !doNotReplace) {
        obj[currentPath] = value;
      }
      return oldVal;
    }

    if (obj[currentPath] === void 0) {
      //check if we assume an array
      if(isNumber(path[1])) {
        obj[currentPath] = [];
      } else {
        obj[currentPath] = {};
      }
    }

    return set(obj[currentPath], path.slice(1), value, doNotReplace);
  }

  function del(obj, path) {
    if (isNumber(path)) {
      path = [path];
    }

    if (isEmpty(obj)) {
      return void 0;
    }

    if (isEmpty(path)) {
      return obj;
    }
    if(isString(path)) {
      return del(obj, path.split('.'));
    }

    var currentPath = getKey(path[0]);
    var oldVal = obj[currentPath];

    if(path.length === 1) {
      if (oldVal !== void 0) {
        if (isArray(obj)) {
          obj.splice(currentPath, 1);
        } else {
          delete obj[currentPath];
        }
      }
    } else {
      if (obj[currentPath] !== void 0) {
        return del(obj[currentPath], path.slice(1));
      }
    }

    return obj;
  }

  var objectPath = function(obj) {
    return Object.keys(objectPath).reduce(function(proxy, prop) {
      if (typeof objectPath[prop] === 'function') {
        proxy[prop] = objectPath[prop].bind(objectPath, obj);
      }

      return proxy;
    }, {});
  };

  objectPath.has = function (obj, path) {
    if (isEmpty(obj)) {
      return false;
    }

    if (isNumber(path)) {
      path = [path];
    } else if (isString(path)) {
      path = path.split('.');
    }

    if (isEmpty(path) || path.length === 0) {
      return false;
    }

    for (var i = 0; i < path.length; i++) {
      var j = path[i];
      if ((isObject(obj) || isArray(obj)) && _hasOwnProperty.call(obj, j)) {
        obj = obj[j];
      } else {
        return false;
      }
    }

    return true;
  };

  objectPath.ensureExists = function (obj, path, value){
    return set(obj, path, value, true);
  };

  objectPath.set = function (obj, path, value, doNotReplace){
    return set(obj, path, value, doNotReplace);
  };

  objectPath.insert = function (obj, path, value, at){
    var arr = objectPath.get(obj, path);
    at = ~~at;
    if (!isArray(arr)) {
      arr = [];
      objectPath.set(obj, path, arr);
    }
    arr.splice(at, 0, value);
  };

  objectPath.empty = function(obj, path) {
    if (isEmpty(path)) {
      return obj;
    }
    if (isEmpty(obj)) {
      return void 0;
    }

    var value, i;
    if (!(value = objectPath.get(obj, path))) {
      return obj;
    }

    if (isString(value)) {
      return objectPath.set(obj, path, '');
    } else if (isBoolean(value)) {
      return objectPath.set(obj, path, false);
    } else if (isNumber(value)) {
      return objectPath.set(obj, path, 0);
    } else if (isArray(value)) {
      value.length = 0;
    } else if (isObject(value)) {
      for (i in value) {
        if (_hasOwnProperty.call(value, i)) {
          delete value[i];
        }
      }
    } else {
      return objectPath.set(obj, path, null);
    }
  };

  objectPath.push = function (obj, path /*, values */){
    var arr = objectPath.get(obj, path);
    if (!isArray(arr)) {
      arr = [];
      objectPath.set(obj, path, arr);
    }

    arr.push.apply(arr, Array.prototype.slice.call(arguments, 2));
  };

  objectPath.coalesce = function (obj, paths, defaultValue) {
    var value;

    for (var i = 0, len = paths.length; i < len; i++) {
      if ((value = objectPath.get(obj, paths[i])) !== void 0) {
        return value;
      }
    }

    return defaultValue;
  };

  objectPath.get = function (obj, path, defaultValue){
    if (isNumber(path)) {
      path = [path];
    }
    if (isEmpty(path)) {
      return obj;
    }
    if (isEmpty(obj)) {
      return defaultValue;
    }
    if (isString(path)) {
      return objectPath.get(obj, path.split('.'), defaultValue);
    }

    var currentPath = getKey(path[0]);

    if (path.length === 1) {
      if (obj[currentPath] === void 0) {
        return defaultValue;
      }
      return obj[currentPath];
    }

    return objectPath.get(obj[currentPath], path.slice(1), defaultValue);
  };

  objectPath.del = function(obj, path) {
    return del(obj, path);
  };

  return objectPath;
});

},{}],99:[function(require,module,exports){
/**
 * Module dependencies.
 */

var slice = require('sliced')
var flatten = require('array-flatten')

/**
 * This function lets us create virtual nodes using a simple
 * syntax. It is compatible with JSX transforms so you can use
 * JSX to write nodes that will compile to this function.
 *
 * let node = element('div', { id: 'foo' }, [
 *   element('a', { href: 'http://google.com' }, 'Google')
 * ])
 *
 * You can leave out the attributes or the children if either
 * of them aren't needed and it will figure out what you're
 * trying to do.
 */

module.exports = element

/**
 * Create virtual trees of components.
 *
 * This creates the nicer API for the user.
 * It translates that friendly API into an actual tree of nodes.
 *
 * @param {*} type
 * @param {Object} attributes
 * @param {Array} children
 * @return {Object}
 * @api public
 */

function element (type, attributes, children) {
  // Default to div with no args
  if (!type) {
    throw new TypeError('element() needs a type.')
  }

  // Skipped adding attributes and we're passing
  // in children instead.
  if (arguments.length === 2 && (typeof attributes === 'string' || Array.isArray(attributes))) {
    children = [ attributes ]
    attributes = {}
  }

  // Account for JSX putting the children as multiple arguments.
  // This is essentially just the ES6 rest param
  if (arguments.length > 2) {
    children = slice(arguments, 2)
  }

  children = children || []
  attributes = attributes || {}

  // Flatten nested child arrays. This is how JSX compiles some nodes.
  children = flatten(children, 2)

  // Filter out any `undefined` elements
  children = children.filter(function (i) { return typeof i !== 'undefined' })

  // if you pass in a function, it's a `Component` constructor.
  // otherwise it's an element.
  return {
    type: type,
    children: children,
    attributes: attributes
  }
}

},{"array-flatten":100,"sliced":101}],100:[function(require,module,exports){
'use strict'

/**
 * Expose `arrayFlatten`.
 */
module.exports = arrayFlatten

/**
 * Recursive flatten function with depth.
 *
 * @param  {Array}  array
 * @param  {Array}  result
 * @param  {Number} depth
 * @return {Array}
 */
function flattenWithDepth (array, result, depth) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (depth > 0 && Array.isArray(value)) {
      flattenWithDepth(value, result, depth - 1)
    } else {
      result.push(value)
    }
  }

  return result
}

/**
 * Recursive flatten function. Omitting depth is slightly faster.
 *
 * @param  {Array} array
 * @param  {Array} result
 * @return {Array}
 */
function flattenForever (array, result) {
  for (var i = 0; i < array.length; i++) {
    var value = array[i]

    if (Array.isArray(value)) {
      flattenForever(value, result)
    } else {
      result.push(value)
    }
  }

  return result
}

/**
 * Flatten an array, with the ability to define a depth.
 *
 * @param  {Array}  array
 * @param  {Number} depth
 * @return {Array}
 */
function arrayFlatten (array, depth) {
  if (depth == null) {
    return flattenForever(array, [])
  }

  return flattenWithDepth(array, [], depth)
}

},{}],101:[function(require,module,exports){
module.exports = exports = require('./lib/sliced');

},{"./lib/sliced":102}],102:[function(require,module,exports){
arguments[4][56][0].apply(exports,arguments)
},{"dup":56}],103:[function(require,module,exports){
'use strict';

var _virtualElement = require('virtual-element');

var _virtualElement2 = _interopRequireDefault(_virtualElement);

var _deku = require('deku');

var _src = require('../src');

var _src2 = _interopRequireDefault(_src);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var code = 'import Sheet from \'deku-sheet\'\n\nrender ({ state: { showSheet } }, setState) {\n\n  const hideSheet () = setState({ showSheet: false })\n\n  if (showSheet) { return <Sheet onClose={hideSheet} /> }\n}';

var App = {
  render: function render(_ref, setState) {
    var show = _ref.state.show;


    var hideSheet = function hideSheet() {
      return setState({ show: false });
    };

    var sheet = (0, _virtualElement2.default)(
      _src2.default,
      { onClose: hideSheet },
      (0, _virtualElement2.default)(
        'p',
        null,
        'Here you go!'
      ),
      (0, _virtualElement2.default)(
        'p',
        null,
        'You can now click on the close button or in the overlay background to close your sheet.'
      )
    );

    return (0, _virtualElement2.default)(
      'div',
      null,
      (0, _virtualElement2.default)(
        'header',
        null,
        (0, _virtualElement2.default)(
          'h4',
          null,
          'deku-sheet'
        ),
        (0, _virtualElement2.default)(
          'span',
          null,
          'A sheet component for Deku'
        )
      ),
      show && sheet,
      (0, _virtualElement2.default)(
        'main',
        null,
        (0, _virtualElement2.default)(
          'p',
          null,
          'This component allows you to integrate a sheet painlessly inside your application.'
        ),
        (0, _virtualElement2.default)(
          'button',
          { onClick: function onClick() {
              return setState({ show: true });
            } },
          'See it in action!'
        ),
        (0, _virtualElement2.default)(
          'p',
          null,
          'A basic example would look like this:'
        ),
        (0, _virtualElement2.default)(
          'div',
          { 'class': 'Code' },
          code
        )
      )
    );
  }
};

(0, _deku.render)((0, _deku.deku)((0, _virtualElement2.default)(App, null)), document.getElementById('anchor'));

},{"../src":104,"deku":76,"virtual-element":99}],104:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _virtualElement = require('virtual-element');

var _virtualElement2 = _interopRequireDefault(_virtualElement);

var _icons = require('@segment/icons');

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Exports.
 */

/**
 * Module dependencies.
 */

exports.default = {
  beforeUnmount: beforeUnmount,
  afterMount: afterMount,
  render: render
};

/**
 * After mount, do not allow body to scoll.
 */

function afterMount() {
  document.body.classList.add('NoScroll');
}

/**
 * Before unmount, allow body to scroll.
 */

function beforeUnmount() {
  document.body.classList.remove('NoScroll');
}

/**
 * Render.
 */

function render(_ref) {
  var props = _ref.props;
  var wide = props.wide;
  var onClose = props.onClose;
  var children = props.children;

  return (0, _virtualElement2.default)(
    'div',
    { 'class': 'SheetOverlay', onClick: onClose },
    (0, _virtualElement2.default)(
      'div',
      { 'class': 'SheetOverlay-close' },
      (0, _virtualElement2.default)(_icons2.default, { type: 'close', size: '52px' })
    ),
    (0, _virtualElement2.default)(
      'div',
      { 'class': 'Sheet', onClick: returnFalse, 'data-wide': wide },
      children
    )
  );
}

/**
 * Return false. This is apparently the equiv. of
 * `Event#stopPropagation()` for deku?
 */

function returnFalse() {
  return false;
}

},{"@segment/icons":52,"virtual-element":99}]},{},[103]);
