// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }
  return bundleURL;
}
function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }
  return '/';
}
function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)?\/[^/]+(?:\?.*)?$/, '$1') + '/';
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');
function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }
  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }
    cssTimeout = null;
  }, 50);
}
module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/styles.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');
module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index2.js":[function(require,module,exports) {
"use strict";

require("./styles.css");
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
document.getElementById('app').innerHTML = "\n<h1>Vanilla study again</h1>\n<div>\n <p>\uC5EC\uAE30\uC5D0 \uC4F0\uC5EC\uC9D1\uB2C8\uB2E4.</p>\n</div>\n";

//제어문 - 순차적 흐름을 제어해야 할 때 사용하는 실행문
//조건문, 반복문 등이 있다.

//if문, if-else문, if-else if문
//if(조건-표현식식) {참일때 실행하는 코드/실행문}
// 조건이 참일 때 코드를 실행한다.

var a = 1;
if (a + 1 === 2) {
  console.log('a+1은 2입니다.');
}

//실행할 코드가 한줄이면 중괄호 생략 가능하다.
a = 1;
if (a + 1 === 2) console.log('a+1은 2입니다.');

//if-else 참이면 if문 코드 실행, 아니면 else문 코드 실행
a = 10;
if (a > 15) {
  console.log('a가 15보다 크다');
} else {
  console.log('안크다');
}

//if-else문은 삼항연산자 조건문으로 표현할 수 있다.
a > 15 ? console.log('a가 커') : console.log('a가 작아');

//if-else if
a = 20;
if (a === 5) {
  console.log('5다');
} else if (a === 10) {
  console.log('10이다');
} else {
  console.log('둘다 아니다.');
}

//switch문
//case문 마지막에는 break를 해줘야 해당 코드에서 멈춘다.
//default: 는 case로 준비되지 않은 값인 경우를 의미미
var device = 'iphone';
switch (device) {
  // default:
  //   console.log('몰라요..');
  //   break;
  case 'iphone':
    console.log('아이폰');
    break;
  case 'ipad':
    console.log('아이패드');
    break;
  case 'galaxy':
    console.log('갤럭시');
    break;
  default:
    console.log('몰라요..');
    break;
}

//default절은 반드시 존재해야 하는 것은 아니고, 필요시 선언할 수 있다.
//default절 위치가 반드시 맨 뒤일 필요는 없다.

//여러 개의 case절 가지는 switch문
/*
let day = new Date().getDay(); // 오늘의 요일을 반환함. (일요일: 0 ~ 토요일: 6)

switch (day) {
  case 1: // 월요일인 경우
  case 2: // 화요일인 경우
  case 3: // 수요일인 경우
  case 4: // 목요일인 경우
  default:
    // 0부터 6까지의 값이 아닌 경우
    console.log('아직도 주말은 멀었네요... 힘내자구요!!');
    break;
  case 5: // 금요일인 경우
    console.log('오늘은 불금이네요!!');
    break;
  case 6: // 토요일인 경우
  case 0: // 일요일인 경우
    console.log('즐거운 주말에도 열심히 공부하는 당신~ 최고에요!!');
    break;
}*/

//반복문 - 명령을 일정 횟수만큼 반복해 수행하도록 제어
//while, do-while, for, for-in, for-of문
//표현식의 검사를 통해 반복해서 실행되는 반복문 - 루프(loop)

//1.while문 - 특정 조건 만족할 때까지 계속해 반복
var i = 1;
while (i < 10) {
  console.log(i);
  i++;
}

//while문 내부에 표현식의 결과를 변경하는 실행문이 존재하지 않으면,
//프로그램은 루프를 계속 반복한다. - 무한루프
//*즉 어느순간에는 거짓의 결과를 갖도록 해야함

//2.do-while
//do-while문은 먼저 루프를 1회 실행 후 표현식을 검사한다.

i = 1;
var j = 1;
while (i > 3) {
  document.write('i:' + i++ + '<br>');
} //i =1 이므로 실행 x

do {
  document.write('j:' + j++ + '<br>');
} while (j > 3); //1회 실행된다.

//for문
//초기식, 표현식, 증감식 모두 포함하고 있다.
//쉼표 연산자 사용시 초기식이나 증감식을 동시에 사용할 수도 있다.
/* for(초기식; 표현식; 증감식) {
  실행문
} */

for (i = 0; i < 10; i++) {
  console.log(i + '이다');
}

//for-in문
//for/in문은 해당 객체의 모든 열거할 수 있는 프로퍼티를 순회할 수 있다.
/* for (변수 in 객체) {
  객체의 열거할 수 있는 프로퍼티 개수만큼 반복하고자 하는 실행문
} */

var arr = [3, 4, 5];
for (i = 0; i < arr.length; i++) {
  //배열의 모든 인덱스 출력
  console.log('인덱스 ' + i + '입니다');
} //0,1,2출력

//위 for문과 같은 동작 -배열에서 인덱스를 뽑아줌
for (i in arr) {
  console.log('인덱스 ' + i + '입니다');
} //0,1,2출력

//객체에서 프로퍼티에 접근
//모든 프로퍼티를 반환하는 것 x
//열거 가능한 프로퍼티만을 반환한다.
var obj = {
  name: '김씨',
  age: 20
};
console.log(Object.entries(obj));
//[[키, 값], [키, 값]] 형태의 배열로 변환
//[Array(2), Array(2)]//
//[['name','김씨'], ['age',20]]
console.log(Object.keys(obj));
//[키, 키, 키] 형태의 배열로 변환
//["name", "age"]
console.log(Object.values(obj));
//[값, 값, 값] 형태의 배열로 변환
//["김씨", 20]

for (i in obj) {
  console.log('프로퍼티 ' + i + '입니다');
} //name, age 출력

for (var key in obj) {
  console.log("".concat(key, ": ").concat(obj[key]));
}

//for-of문
//반복할 수 있는 객체를 순회할 수 있도록 해주는 반복문
//반복할 수 있는 객체는 Array, Map, Set, arguments 객체 등이 있다.
//루프마다 객체의 열거할 수 있는 프로퍼티 값을 지정된 변수에 대입해준다.
//익스플로러에서는 지원x

/*for (변수 of 객체) {
  객체의 모든 열거 가능한 프로퍼티 개수만큼 반복적으로 실행하고자 하는 실행문
} */

arr = [3, 4, 5];
for (i = 0; i < arr.length; i++) {
  //배열의 모든 인덱스 출력
  console.log('인덱스 ' + arr[i] + '입니다');
} //3,4,5 출력

//위 for문과 같은 동작 -배열에서 인덱스를 뽑아줌
for (var _i = 0, _arr = arr; _i < _arr.length; _i++) {
  i = _arr[_i];
  console.log('인덱스 ' + i + '입니다');
} //3,4,5 출력

arr = new Set([1, 1, 2, 2, 3, 3]);
//set 객체-동일 값 중복 포함x, 순서 의미 x, 인덱스로 접근 x
var _iterator = _createForOfIteratorHelper(arr),
  _step;
try {
  for (_iterator.s(); !(_step = _iterator.n()).done;) {
    var value = _step.value;
    console.log(value + '값 입니다.');
  }

  //label문
  //프로그램 내 특정 영역을 식별할 수 있게 해주는 식별자
  //label문 사용시, continue문과 break문 동작이 프로그램 흐름을 특정 영역으로 이동시킬 수 있다.

  /* lebel :
    식별하고자 하는 영역 */
} catch (err) {
  _iterator.e(err);
} finally {
  _iterator.f();
}
arrIndex: for (i in arr) {
  document.write(i);
}

//continue문
//루프 내에 사용해, 해당 루프의 나머지 부분을 건너뛰고,
//바로 다음 표현식의 판단으로 넘어가게 한다.
//특정 조건에 대한 처리 제외하고 할 때 사용

//1-20 정수 중 3의 배수 제외하고 출력
var exceptNum = 3;
for (i = 0; i <= 20; i++) {
  if (i % exceptNum == 0) {
    continue;
  }
  document.write(i + ' ');
}

//continue + label
gugudan: for (i = 2; i <= 9; i++) {
  dan: for (j = 1; j <= 9; j++) {
    if (i * j % 2 == 0) {
      continue dan;
    }
    console.log(i + ' * ' + j + ' = ' + i * j);
  }
}

//break문
//루프 내 사용해 해당 반복문 완전히 종료하고,
//바로 다음 위치한 실행문으로 프로그램 흐름을 이동시킴
//판단 결과와 상관없이 반복문을 빠져나가고 싶을 때 사용

var lectures = ['html', 'css', 'js', 'php'];
var topic = 'js';
for (i = 0; i < lectures.length; i++) {
  if (lectures[i] == topic) {
    console.log(topic + '과목은 ' + (i + 1) + '번째 과목');
    break;
  }
}

//break + label;
gugudan: for (i = 2; i <= 9; i++) {
  dan: for (j = 1; j <= 9; j++) {
    if (i > 3) break gugudan;
    console.log(i + ' * ' + j + ' = ' + i * j);
  }
}
},{"./styles.css":"src/styles.css"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40315" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index2.js"], null)
//# sourceMappingURL=/index2.943df8ae.js.map