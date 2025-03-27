function Ua(h) {
  return h && h.__esModule && Object.prototype.hasOwnProperty.call(h, "default") ? h.default : h;
}
var Ci = { exports: {} }, gr = {}, Pi = { exports: {} }, D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Na;
function Uc() {
  if (Na) return D;
  Na = 1;
  var h = Symbol.for("react.element"), x = Symbol.for("react.portal"), p = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), b = Symbol.for("react.profiler"), ae = Symbol.for("react.provider"), ye = Symbol.for("react.context"), ue = Symbol.for("react.forward_ref"), F = Symbol.for("react.suspense"), Ce = Symbol.for("react.memo"), ge = Symbol.for("react.lazy"), ee = Symbol.iterator;
  function G(f) {
    return f === null || typeof f != "object" ? null : (f = ee && f[ee] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var We = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, $e = Object.assign, Z = {};
  function $(f, y, M) {
    this.props = f, this.context = y, this.refs = Z, this.updater = M || We;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(f, y) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, y, "setState");
  }, $.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function vt() {
  }
  vt.prototype = $.prototype;
  function st(f, y, M) {
    this.props = f, this.context = y, this.refs = Z, this.updater = M || We;
  }
  var qe = st.prototype = new vt();
  qe.constructor = st, $e(qe, $.prototype), qe.isPureReactComponent = !0;
  var we = Array.isArray, be = Object.prototype.hasOwnProperty, Pe = { current: null }, Te = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(f, y, M) {
    var I, V = {}, A = null, Q = null;
    if (y != null) for (I in y.ref !== void 0 && (Q = y.ref), y.key !== void 0 && (A = "" + y.key), y) be.call(y, I) && !Te.hasOwnProperty(I) && (V[I] = y[I]);
    var B = arguments.length - 2;
    if (B === 1) V.children = M;
    else if (1 < B) {
      for (var J = Array(B), Ue = 0; Ue < B; Ue++) J[Ue] = arguments[Ue + 2];
      V.children = J;
    }
    if (f && f.defaultProps) for (I in B = f.defaultProps, B) V[I] === void 0 && (V[I] = B[I]);
    return { $$typeof: h, type: f, key: A, ref: Q, props: V, _owner: Pe.current };
  }
  function Pt(f, y) {
    return { $$typeof: h, type: f.type, key: y, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function yt(f) {
    return typeof f == "object" && f !== null && f.$$typeof === h;
  }
  function Kt(f) {
    var y = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(M) {
      return y[M];
    });
  }
  var at = /\/+/g;
  function Fe(f, y) {
    return typeof f == "object" && f !== null && f.key != null ? Kt("" + f.key) : y.toString(36);
  }
  function et(f, y, M, I, V) {
    var A = typeof f;
    (A === "undefined" || A === "boolean") && (f = null);
    var Q = !1;
    if (f === null) Q = !0;
    else switch (A) {
      case "string":
      case "number":
        Q = !0;
        break;
      case "object":
        switch (f.$$typeof) {
          case h:
          case x:
            Q = !0;
        }
    }
    if (Q) return Q = f, V = V(Q), f = I === "" ? "." + Fe(Q, 0) : I, we(V) ? (M = "", f != null && (M = f.replace(at, "$&/") + "/"), et(V, y, M, "", function(Ue) {
      return Ue;
    })) : V != null && (yt(V) && (V = Pt(V, M + (!V.key || Q && Q.key === V.key ? "" : ("" + V.key).replace(at, "$&/") + "/") + f)), y.push(V)), 1;
    if (Q = 0, I = I === "" ? "." : I + ":", we(f)) for (var B = 0; B < f.length; B++) {
      A = f[B];
      var J = I + Fe(A, B);
      Q += et(A, y, M, J, V);
    }
    else if (J = G(f), typeof J == "function") for (f = J.call(f), B = 0; !(A = f.next()).done; ) A = A.value, J = I + Fe(A, B++), Q += et(A, y, M, J, V);
    else if (A === "object") throw y = String(f), Error("Objects are not valid as a React child (found: " + (y === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : y) + "). If you meant to render a collection of children, use an array instead.");
    return Q;
  }
  function ft(f, y, M) {
    if (f == null) return f;
    var I = [], V = 0;
    return et(f, I, "", "", function(A) {
      return y.call(M, A, V++);
    }), I;
  }
  function Le(f) {
    if (f._status === -1) {
      var y = f._result;
      y = y(), y.then(function(M) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = M);
      }, function(M) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = M);
      }), f._status === -1 && (f._status = 0, f._result = y);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var re = { current: null }, k = { transition: null }, R = { ReactCurrentDispatcher: re, ReactCurrentBatchConfig: k, ReactCurrentOwner: Pe };
  function C() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return D.Children = { map: ft, forEach: function(f, y, M) {
    ft(f, function() {
      y.apply(this, arguments);
    }, M);
  }, count: function(f) {
    var y = 0;
    return ft(f, function() {
      y++;
    }), y;
  }, toArray: function(f) {
    return ft(f, function(y) {
      return y;
    }) || [];
  }, only: function(f) {
    if (!yt(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, D.Component = $, D.Fragment = p, D.Profiler = b, D.PureComponent = st, D.StrictMode = j, D.Suspense = F, D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, D.act = C, D.cloneElement = function(f, y, M) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var I = $e({}, f.props), V = f.key, A = f.ref, Q = f._owner;
    if (y != null) {
      if (y.ref !== void 0 && (A = y.ref, Q = Pe.current), y.key !== void 0 && (V = "" + y.key), f.type && f.type.defaultProps) var B = f.type.defaultProps;
      for (J in y) be.call(y, J) && !Te.hasOwnProperty(J) && (I[J] = y[J] === void 0 && B !== void 0 ? B[J] : y[J]);
    }
    var J = arguments.length - 2;
    if (J === 1) I.children = M;
    else if (1 < J) {
      B = Array(J);
      for (var Ue = 0; Ue < J; Ue++) B[Ue] = arguments[Ue + 2];
      I.children = B;
    }
    return { $$typeof: h, type: f.type, key: V, ref: A, props: I, _owner: Q };
  }, D.createContext = function(f) {
    return f = { $$typeof: ye, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: ae, _context: f }, f.Consumer = f;
  }, D.createElement = Qe, D.createFactory = function(f) {
    var y = Qe.bind(null, f);
    return y.type = f, y;
  }, D.createRef = function() {
    return { current: null };
  }, D.forwardRef = function(f) {
    return { $$typeof: ue, render: f };
  }, D.isValidElement = yt, D.lazy = function(f) {
    return { $$typeof: ge, _payload: { _status: -1, _result: f }, _init: Le };
  }, D.memo = function(f, y) {
    return { $$typeof: Ce, type: f, compare: y === void 0 ? null : y };
  }, D.startTransition = function(f) {
    var y = k.transition;
    k.transition = {};
    try {
      f();
    } finally {
      k.transition = y;
    }
  }, D.unstable_act = C, D.useCallback = function(f, y) {
    return re.current.useCallback(f, y);
  }, D.useContext = function(f) {
    return re.current.useContext(f);
  }, D.useDebugValue = function() {
  }, D.useDeferredValue = function(f) {
    return re.current.useDeferredValue(f);
  }, D.useEffect = function(f, y) {
    return re.current.useEffect(f, y);
  }, D.useId = function() {
    return re.current.useId();
  }, D.useImperativeHandle = function(f, y, M) {
    return re.current.useImperativeHandle(f, y, M);
  }, D.useInsertionEffect = function(f, y) {
    return re.current.useInsertionEffect(f, y);
  }, D.useLayoutEffect = function(f, y) {
    return re.current.useLayoutEffect(f, y);
  }, D.useMemo = function(f, y) {
    return re.current.useMemo(f, y);
  }, D.useReducer = function(f, y, M) {
    return re.current.useReducer(f, y, M);
  }, D.useRef = function(f) {
    return re.current.useRef(f);
  }, D.useState = function(f) {
    return re.current.useState(f);
  }, D.useSyncExternalStore = function(f, y, M) {
    return re.current.useSyncExternalStore(f, y, M);
  }, D.useTransition = function() {
    return re.current.useTransition();
  }, D.version = "18.3.1", D;
}
var za;
function Li() {
  return za || (za = 1, Pi.exports = Uc()), Pi.exports;
}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ta;
function Vc() {
  if (Ta) return gr;
  Ta = 1;
  var h = Li(), x = Symbol.for("react.element"), p = Symbol.for("react.fragment"), j = Object.prototype.hasOwnProperty, b = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, ae = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ye(ue, F, Ce) {
    var ge, ee = {}, G = null, We = null;
    Ce !== void 0 && (G = "" + Ce), F.key !== void 0 && (G = "" + F.key), F.ref !== void 0 && (We = F.ref);
    for (ge in F) j.call(F, ge) && !ae.hasOwnProperty(ge) && (ee[ge] = F[ge]);
    if (ue && ue.defaultProps) for (ge in F = ue.defaultProps, F) ee[ge] === void 0 && (ee[ge] = F[ge]);
    return { $$typeof: x, type: ue, key: G, ref: We, props: ee, _owner: b.current };
  }
  return gr.Fragment = p, gr.jsx = ye, gr.jsxs = ye, gr;
}
var La;
function Ac() {
  return La || (La = 1, Ci.exports = Vc()), Ci.exports;
}
var _e = Ac(), Tl = {}, Ni = { exports: {} }, Ie = {}, zi = { exports: {} }, Ti = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ra;
function Hc() {
  return Ra || (Ra = 1, function(h) {
    function x(k, R) {
      var C = k.length;
      k.push(R);
      e: for (; 0 < C; ) {
        var f = C - 1 >>> 1, y = k[f];
        if (0 < b(y, R)) k[f] = R, k[C] = y, C = f;
        else break e;
      }
    }
    function p(k) {
      return k.length === 0 ? null : k[0];
    }
    function j(k) {
      if (k.length === 0) return null;
      var R = k[0], C = k.pop();
      if (C !== R) {
        k[0] = C;
        e: for (var f = 0, y = k.length, M = y >>> 1; f < M; ) {
          var I = 2 * (f + 1) - 1, V = k[I], A = I + 1, Q = k[A];
          if (0 > b(V, C)) A < y && 0 > b(Q, V) ? (k[f] = Q, k[A] = C, f = A) : (k[f] = V, k[I] = C, f = I);
          else if (A < y && 0 > b(Q, C)) k[f] = Q, k[A] = C, f = A;
          else break e;
        }
      }
      return R;
    }
    function b(k, R) {
      var C = k.sortIndex - R.sortIndex;
      return C !== 0 ? C : k.id - R.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var ae = performance;
      h.unstable_now = function() {
        return ae.now();
      };
    } else {
      var ye = Date, ue = ye.now();
      h.unstable_now = function() {
        return ye.now() - ue;
      };
    }
    var F = [], Ce = [], ge = 1, ee = null, G = 3, We = !1, $e = !1, Z = !1, $ = typeof setTimeout == "function" ? setTimeout : null, vt = typeof clearTimeout == "function" ? clearTimeout : null, st = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function qe(k) {
      for (var R = p(Ce); R !== null; ) {
        if (R.callback === null) j(Ce);
        else if (R.startTime <= k) j(Ce), R.sortIndex = R.expirationTime, x(F, R);
        else break;
        R = p(Ce);
      }
    }
    function we(k) {
      if (Z = !1, qe(k), !$e) if (p(F) !== null) $e = !0, Le(be);
      else {
        var R = p(Ce);
        R !== null && re(we, R.startTime - k);
      }
    }
    function be(k, R) {
      $e = !1, Z && (Z = !1, vt(Qe), Qe = -1), We = !0;
      var C = G;
      try {
        for (qe(R), ee = p(F); ee !== null && (!(ee.expirationTime > R) || k && !Kt()); ) {
          var f = ee.callback;
          if (typeof f == "function") {
            ee.callback = null, G = ee.priorityLevel;
            var y = f(ee.expirationTime <= R);
            R = h.unstable_now(), typeof y == "function" ? ee.callback = y : ee === p(F) && j(F), qe(R);
          } else j(F);
          ee = p(F);
        }
        if (ee !== null) var M = !0;
        else {
          var I = p(Ce);
          I !== null && re(we, I.startTime - R), M = !1;
        }
        return M;
      } finally {
        ee = null, G = C, We = !1;
      }
    }
    var Pe = !1, Te = null, Qe = -1, Pt = 5, yt = -1;
    function Kt() {
      return !(h.unstable_now() - yt < Pt);
    }
    function at() {
      if (Te !== null) {
        var k = h.unstable_now();
        yt = k;
        var R = !0;
        try {
          R = Te(!0, k);
        } finally {
          R ? Fe() : (Pe = !1, Te = null);
        }
      } else Pe = !1;
    }
    var Fe;
    if (typeof st == "function") Fe = function() {
      st(at);
    };
    else if (typeof MessageChannel < "u") {
      var et = new MessageChannel(), ft = et.port2;
      et.port1.onmessage = at, Fe = function() {
        ft.postMessage(null);
      };
    } else Fe = function() {
      $(at, 0);
    };
    function Le(k) {
      Te = k, Pe || (Pe = !0, Fe());
    }
    function re(k, R) {
      Qe = $(function() {
        k(h.unstable_now());
      }, R);
    }
    h.unstable_IdlePriority = 5, h.unstable_ImmediatePriority = 1, h.unstable_LowPriority = 4, h.unstable_NormalPriority = 3, h.unstable_Profiling = null, h.unstable_UserBlockingPriority = 2, h.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, h.unstable_continueExecution = function() {
      $e || We || ($e = !0, Le(be));
    }, h.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pt = 0 < k ? Math.floor(1e3 / k) : 5;
    }, h.unstable_getCurrentPriorityLevel = function() {
      return G;
    }, h.unstable_getFirstCallbackNode = function() {
      return p(F);
    }, h.unstable_next = function(k) {
      switch (G) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = G;
      }
      var C = G;
      G = R;
      try {
        return k();
      } finally {
        G = C;
      }
    }, h.unstable_pauseExecution = function() {
    }, h.unstable_requestPaint = function() {
    }, h.unstable_runWithPriority = function(k, R) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var C = G;
      G = k;
      try {
        return R();
      } finally {
        G = C;
      }
    }, h.unstable_scheduleCallback = function(k, R, C) {
      var f = h.unstable_now();
      switch (typeof C == "object" && C !== null ? (C = C.delay, C = typeof C == "number" && 0 < C ? f + C : f) : C = f, k) {
        case 1:
          var y = -1;
          break;
        case 2:
          y = 250;
          break;
        case 5:
          y = 1073741823;
          break;
        case 4:
          y = 1e4;
          break;
        default:
          y = 5e3;
      }
      return y = C + y, k = { id: ge++, callback: R, priorityLevel: k, startTime: C, expirationTime: y, sortIndex: -1 }, C > f ? (k.sortIndex = C, x(Ce, k), p(F) === null && k === p(Ce) && (Z ? (vt(Qe), Qe = -1) : Z = !0, re(we, C - f))) : (k.sortIndex = y, x(F, k), $e || We || ($e = !0, Le(be))), k;
    }, h.unstable_shouldYield = Kt, h.unstable_wrapCallback = function(k) {
      var R = G;
      return function() {
        var C = G;
        G = R;
        try {
          return k.apply(this, arguments);
        } finally {
          G = C;
        }
      };
    };
  }(Ti)), Ti;
}
var Oa;
function Bc() {
  return Oa || (Oa = 1, zi.exports = Hc()), zi.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ja;
function Wc() {
  if (ja) return Ie;
  ja = 1;
  var h = Li(), x = Bc();
  function p(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var j = /* @__PURE__ */ new Set(), b = {};
  function ae(e, t) {
    ye(e, t), ye(e + "Capture", t);
  }
  function ye(e, t) {
    for (b[e] = t, e = 0; e < t.length; e++) j.add(t[e]);
  }
  var ue = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), F = Object.prototype.hasOwnProperty, Ce = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ge = {}, ee = {};
  function G(e) {
    return F.call(ee, e) ? !0 : F.call(ge, e) ? !1 : Ce.test(e) ? ee[e] = !0 : (ge[e] = !0, !1);
  }
  function We(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function $e(e, t, n, r) {
    if (t === null || typeof t > "u" || We(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
    return !1;
  }
  function Z(e, t, n, r, l, u, i) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = u, this.removeEmptyString = i;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    $[e] = new Z(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    $[t] = new Z(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    $[e] = new Z(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    $[e] = new Z(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    $[e] = new Z(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    $[e] = new Z(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    $[e] = new Z(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    $[e] = new Z(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    $[e] = new Z(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var vt = /[\-:]([a-z])/g;
  function st(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      vt,
      st
    );
    $[t] = new Z(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(vt, st);
    $[t] = new Z(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(vt, st);
    $[t] = new Z(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    $[e] = new Z(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new Z("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    $[e] = new Z(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function qe(e, t, n, r) {
    var l = $.hasOwnProperty(t) ? $[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && ($e(t, n, l, r) && (n = null), r || l === null ? G(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var we = h.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), Pe = Symbol.for("react.portal"), Te = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), Pt = Symbol.for("react.profiler"), yt = Symbol.for("react.provider"), Kt = Symbol.for("react.context"), at = Symbol.for("react.forward_ref"), Fe = Symbol.for("react.suspense"), et = Symbol.for("react.suspense_list"), ft = Symbol.for("react.memo"), Le = Symbol.for("react.lazy"), re = Symbol.for("react.offscreen"), k = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var C = Object.assign, f;
  function y(e) {
    if (f === void 0) try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      f = t && t[1] || "";
    }
    return `
` + f + e;
  }
  var M = !1;
  function I(e, t) {
    if (!e || M) return "";
    M = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t) if (t = function() {
        throw Error();
      }, Object.defineProperty(t.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(t, []);
        } catch (m) {
          var r = m;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (m) {
          r = m;
        }
        e.call(t.prototype);
      }
      else {
        try {
          throw Error();
        } catch (m) {
          r = m;
        }
        e();
      }
    } catch (m) {
      if (m && r && typeof m.stack == "string") {
        for (var l = m.stack.split(`
`), u = r.stack.split(`
`), i = l.length - 1, o = u.length - 1; 1 <= i && 0 <= o && l[i] !== u[o]; ) o--;
        for (; 1 <= i && 0 <= o; i--, o--) if (l[i] !== u[o]) {
          if (i !== 1 || o !== 1)
            do
              if (i--, o--, 0 > o || l[i] !== u[o]) {
                var s = `
` + l[i].replace(" at new ", " at ");
                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
              }
            while (1 <= i && 0 <= o);
          break;
        }
      }
    } finally {
      M = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? y(e) : "";
  }
  function V(e) {
    switch (e.tag) {
      case 5:
        return y(e.type);
      case 16:
        return y("Lazy");
      case 13:
        return y("Suspense");
      case 19:
        return y("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = I(e.type, !1), e;
      case 11:
        return e = I(e.type.render, !1), e;
      case 1:
        return e = I(e.type, !0), e;
      default:
        return "";
    }
  }
  function A(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Te:
        return "Fragment";
      case Pe:
        return "Portal";
      case Pt:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Fe:
        return "Suspense";
      case et:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Kt:
        return (e.displayName || "Context") + ".Consumer";
      case yt:
        return (e._context.displayName || "Context") + ".Provider";
      case at:
        var t = e.render;
        return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case ft:
        return t = e.displayName || null, t !== null ? t : A(e.type) || "Memo";
      case Le:
        t = e._payload, e = e._init;
        try {
          return A(e(t));
        } catch {
        }
    }
    return null;
  }
  function Q(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return A(t);
      case 8:
        return t === Qe ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function") return t.displayName || t.name || null;
        if (typeof t == "string") return t;
    }
    return null;
  }
  function B(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function J(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ue(e) {
    var t = J(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var l = n.get, u = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, u.call(this, i);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Oi(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), r = "";
    return e && (r = J(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Sr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ol(e, t) {
    var n = t.checked;
    return C({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function ji(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = B(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function Mi(e, t) {
    t = t.checked, t != null && qe(e, "checked", t, !1);
  }
  function jl(e, t) {
    Mi(e, t);
    var n = B(t.value), r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? Ml(e, t.type, n) : t.hasOwnProperty("defaultValue") && Ml(e, t.type, B(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function Di(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function Ml(e, t, n) {
    (t !== "number" || Sr(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var jn = Array.isArray;
  function sn(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + B(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Dl(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(p(91));
    return C({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ii(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null) throw Error(p(92));
        if (jn(n)) {
          if (1 < n.length) throw Error(p(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: B(n) };
  }
  function Fi(e, t) {
    var n = B(t.value), r = B(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Ui(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Vi(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Il(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Vi(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, Ai = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, l);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
  function Mn(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Dn = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Ha = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dn).forEach(function(e) {
    Ha.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Dn[t] = Dn[e];
    });
  });
  function Hi(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Dn.hasOwnProperty(e) && Dn[e] ? ("" + t).trim() : t + "px";
  }
  function Bi(e, t) {
    e = e.style;
    for (var n in t) if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0, l = Hi(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l;
    }
  }
  var Ba = C({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Fl(e, t) {
    if (t) {
      if (Ba[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(p(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(p(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(p(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(p(62));
    }
  }
  function Ul(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Vl = null;
  function Al(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Hl = null, an = null, fn = null;
  function Wi(e) {
    if (e = rr(e)) {
      if (typeof Hl != "function") throw Error(p(280));
      var t = e.stateNode;
      t && (t = $r(t), Hl(e.stateNode, e.type, t));
    }
  }
  function $i(e) {
    an ? fn ? fn.push(e) : fn = [e] : an = e;
  }
  function Qi() {
    if (an) {
      var e = an, t = fn;
      if (fn = an = null, Wi(e), t) for (e = 0; e < t.length; e++) Wi(t[e]);
    }
  }
  function Ki(e, t) {
    return e(t);
  }
  function Yi() {
  }
  var Bl = !1;
  function Xi(e, t, n) {
    if (Bl) return e(t, n);
    Bl = !0;
    try {
      return Ki(e, t, n);
    } finally {
      Bl = !1, (an !== null || fn !== null) && (Yi(), Qi());
    }
  }
  function In(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = $r(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(p(231, t, typeof n));
    return n;
  }
  var Wl = !1;
  if (ue) try {
    var Fn = {};
    Object.defineProperty(Fn, "passive", { get: function() {
      Wl = !0;
    } }), window.addEventListener("test", Fn, Fn), window.removeEventListener("test", Fn, Fn);
  } catch {
    Wl = !1;
  }
  function Wa(e, t, n, r, l, u, i, o, s) {
    var m = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, m);
    } catch (g) {
      this.onError(g);
    }
  }
  var Un = !1, Er = null, xr = !1, $l = null, $a = { onError: function(e) {
    Un = !0, Er = e;
  } };
  function Qa(e, t, n, r, l, u, i, o, s) {
    Un = !1, Er = null, Wa.apply($a, arguments);
  }
  function Ka(e, t, n, r, l, u, i, o, s) {
    if (Qa.apply(this, arguments), Un) {
      if (Un) {
        var m = Er;
        Un = !1, Er = null;
      } else throw Error(p(198));
      xr || (xr = !0, $l = m);
    }
  }
  function Yt(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Gi(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Zi(e) {
    if (Yt(e) !== e) throw Error(p(188));
  }
  function Ya(e) {
    var t = e.alternate;
    if (!t) {
      if (t = Yt(e), t === null) throw Error(p(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (r = l.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return Zi(l), e;
          if (u === r) return Zi(l), t;
          u = u.sibling;
        }
        throw Error(p(188));
      }
      if (n.return !== r.return) n = l, r = u;
      else {
        for (var i = !1, o = l.child; o; ) {
          if (o === n) {
            i = !0, n = l, r = u;
            break;
          }
          if (o === r) {
            i = !0, r = l, n = u;
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === n) {
              i = !0, n = u, r = l;
              break;
            }
            if (o === r) {
              i = !0, r = u, n = l;
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(p(189));
        }
      }
      if (n.alternate !== r) throw Error(p(190));
    }
    if (n.tag !== 3) throw Error(p(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ji(e) {
    return e = Ya(e), e !== null ? qi(e) : null;
  }
  function qi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = qi(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var bi = x.unstable_scheduleCallback, eo = x.unstable_cancelCallback, Xa = x.unstable_shouldYield, Ga = x.unstable_requestPaint, ie = x.unstable_now, Za = x.unstable_getCurrentPriorityLevel, Ql = x.unstable_ImmediatePriority, to = x.unstable_UserBlockingPriority, _r = x.unstable_NormalPriority, Ja = x.unstable_LowPriority, no = x.unstable_IdlePriority, Cr = null, ct = null;
  function qa(e) {
    if (ct && typeof ct.onCommitFiberRoot == "function") try {
      ct.onCommitFiberRoot(Cr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var tt = Math.clz32 ? Math.clz32 : tf, ba = Math.log, ef = Math.LN2;
  function tf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (ba(e) / ef | 0) | 0;
  }
  var Pr = 64, Nr = 4194304;
  function Vn(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function zr(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, i = n & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? r = Vn(o) : (u &= i, u !== 0 && (r = Vn(u)));
    } else i = n & ~l, i !== 0 ? r = Vn(i) : u !== 0 && (r = Vn(u));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, u = t & -t, l >= u || l === 16 && (u & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0) for (e = e.entanglements, t &= r; 0 < t; ) n = 31 - tt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r;
  }
  function nf(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function rf(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var i = 31 - tt(u), o = 1 << i, s = l[i];
      s === -1 ? (!(o & n) || o & r) && (l[i] = nf(o, t)) : s <= t && (e.expiredLanes |= o), u &= ~o;
    }
  }
  function Kl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function ro() {
    var e = Pr;
    return Pr <<= 1, !(Pr & 4194240) && (Pr = 64), e;
  }
  function Yl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function An(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - tt(t), e[t] = n;
  }
  function lf(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var l = 31 - tt(n), u = 1 << l;
      t[l] = 0, r[l] = -1, e[l] = -1, n &= ~u;
    }
  }
  function Xl(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - tt(n), l = 1 << r;
      l & t | e[r] & t && (e[r] |= t), n &= ~l;
    }
  }
  var W = 0;
  function lo(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var uo, Gl, io, oo, so, Zl = !1, Tr = [], Nt = null, zt = null, Tt = null, Hn = /* @__PURE__ */ new Map(), Bn = /* @__PURE__ */ new Map(), Lt = [], uf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ao(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Nt = null;
        break;
      case "dragenter":
      case "dragleave":
        zt = null;
        break;
      case "mouseover":
      case "mouseout":
        Tt = null;
        break;
      case "pointerover":
      case "pointerout":
        Hn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bn.delete(t.pointerId);
    }
  }
  function Wn(e, t, n, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, t !== null && (t = rr(t), t !== null && Gl(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function of(e, t, n, r, l) {
    switch (t) {
      case "focusin":
        return Nt = Wn(Nt, e, t, n, r, l), !0;
      case "dragenter":
        return zt = Wn(zt, e, t, n, r, l), !0;
      case "mouseover":
        return Tt = Wn(Tt, e, t, n, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Hn.set(u, Wn(Hn.get(u) || null, e, t, n, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Bn.set(u, Wn(Bn.get(u) || null, e, t, n, r, l)), !0;
    }
    return !1;
  }
  function fo(e) {
    var t = Xt(e.target);
    if (t !== null) {
      var n = Yt(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Gi(n), t !== null) {
            e.blockedOn = t, so(e.priority, function() {
              io(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Lr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ql(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Vl = r, n.target.dispatchEvent(r), Vl = null;
      } else return t = rr(n), t !== null && Gl(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function co(e, t, n) {
    Lr(e) && n.delete(t);
  }
  function sf() {
    Zl = !1, Nt !== null && Lr(Nt) && (Nt = null), zt !== null && Lr(zt) && (zt = null), Tt !== null && Lr(Tt) && (Tt = null), Hn.forEach(co), Bn.forEach(co);
  }
  function $n(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Zl || (Zl = !0, x.unstable_scheduleCallback(x.unstable_NormalPriority, sf)));
  }
  function Qn(e) {
    function t(l) {
      return $n(l, e);
    }
    if (0 < Tr.length) {
      $n(Tr[0], e);
      for (var n = 1; n < Tr.length; n++) {
        var r = Tr[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Nt !== null && $n(Nt, e), zt !== null && $n(zt, e), Tt !== null && $n(Tt, e), Hn.forEach(t), Bn.forEach(t), n = 0; n < Lt.length; n++) r = Lt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Lt.length && (n = Lt[0], n.blockedOn === null); ) fo(n), n.blockedOn === null && Lt.shift();
  }
  var cn = we.ReactCurrentBatchConfig, Rr = !0;
  function af(e, t, n, r) {
    var l = W, u = cn.transition;
    cn.transition = null;
    try {
      W = 1, Jl(e, t, n, r);
    } finally {
      W = l, cn.transition = u;
    }
  }
  function ff(e, t, n, r) {
    var l = W, u = cn.transition;
    cn.transition = null;
    try {
      W = 4, Jl(e, t, n, r);
    } finally {
      W = l, cn.transition = u;
    }
  }
  function Jl(e, t, n, r) {
    if (Rr) {
      var l = ql(e, t, n, r);
      if (l === null) hu(e, t, r, Or, n), ao(e, r);
      else if (of(l, e, t, n, r)) r.stopPropagation();
      else if (ao(e, r), t & 4 && -1 < uf.indexOf(e)) {
        for (; l !== null; ) {
          var u = rr(l);
          if (u !== null && uo(u), u = ql(e, t, n, r), u === null && hu(e, t, r, Or, n), u === l) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else hu(e, t, r, null, n);
    }
  }
  var Or = null;
  function ql(e, t, n, r) {
    if (Or = null, e = Al(r), e = Xt(e), e !== null) if (t = Yt(e), t === null) e = null;
    else if (n = t.tag, n === 13) {
      if (e = Gi(t), e !== null) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
    return Or = e, null;
  }
  function po(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (Za()) {
          case Ql:
            return 1;
          case to:
            return 4;
          case _r:
          case Ja:
            return 16;
          case no:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Rt = null, bl = null, jr = null;
  function mo() {
    if (jr) return jr;
    var e, t = bl, n = t.length, r, l = "value" in Rt ? Rt.value : Rt.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var i = n - e;
    for (r = 1; r <= i && t[n - r] === l[u - r]; r++) ;
    return jr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Mr(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Dr() {
    return !0;
  }
  function ho() {
    return !1;
  }
  function Ve(e) {
    function t(n, r, l, u, i) {
      this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var o in e) e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Dr : ho, this.isPropagationStopped = ho, this;
    }
    return C(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Dr);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Dr);
    }, persist: function() {
    }, isPersistent: Dr }), t;
  }
  var dn = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, eu = Ve(dn), Kn = C({}, dn, { view: 0, detail: 0 }), cf = Ve(Kn), tu, nu, Yn, Ir = C({}, Kn, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: lu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Yn && (Yn && e.type === "mousemove" ? (tu = e.screenX - Yn.screenX, nu = e.screenY - Yn.screenY) : nu = tu = 0, Yn = e), tu);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : nu;
  } }), vo = Ve(Ir), df = C({}, Ir, { dataTransfer: 0 }), pf = Ve(df), mf = C({}, Kn, { relatedTarget: 0 }), ru = Ve(mf), hf = C({}, dn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), vf = Ve(hf), yf = C({}, dn, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), gf = Ve(yf), wf = C({}, dn, { data: 0 }), yo = Ve(wf), Sf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, kf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Ef = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function xf(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ef[e]) ? !!t[e] : !1;
  }
  function lu() {
    return xf;
  }
  var _f = C({}, Kn, { key: function(e) {
    if (e.key) {
      var t = Sf[e.key] || e.key;
      if (t !== "Unidentified") return t;
    }
    return e.type === "keypress" ? (e = Mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kf[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: lu, charCode: function(e) {
    return e.type === "keypress" ? Mr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), Cf = Ve(_f), Pf = C({}, Ir, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), go = Ve(Pf), Nf = C({}, Kn, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: lu }), zf = Ve(Nf), Tf = C({}, dn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Lf = Ve(Tf), Rf = C({}, Ir, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Of = Ve(Rf), jf = [9, 13, 27, 32], uu = ue && "CompositionEvent" in window, Xn = null;
  ue && "documentMode" in document && (Xn = document.documentMode);
  var Mf = ue && "TextEvent" in window && !Xn, wo = ue && (!uu || Xn && 8 < Xn && 11 >= Xn), So = " ", ko = !1;
  function Eo(e, t) {
    switch (e) {
      case "keyup":
        return jf.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function xo(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pn = !1;
  function Df(e, t) {
    switch (e) {
      case "compositionend":
        return xo(t);
      case "keypress":
        return t.which !== 32 ? null : (ko = !0, So);
      case "textInput":
        return e = t.data, e === So && ko ? null : e;
      default:
        return null;
    }
  }
  function If(e, t) {
    if (pn) return e === "compositionend" || !uu && Eo(e, t) ? (e = mo(), jr = bl = Rt = null, pn = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return wo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Ff = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function _o(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Ff[e.type] : t === "textarea";
  }
  function Co(e, t, n, r) {
    $i(r), t = Hr(t, "onChange"), 0 < t.length && (n = new eu("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var Gn = null, Zn = null;
  function Uf(e) {
    Wo(e, 0);
  }
  function Fr(e) {
    var t = gn(e);
    if (Oi(t)) return e;
  }
  function Vf(e, t) {
    if (e === "change") return t;
  }
  var Po = !1;
  if (ue) {
    var iu;
    if (ue) {
      var ou = "oninput" in document;
      if (!ou) {
        var No = document.createElement("div");
        No.setAttribute("oninput", "return;"), ou = typeof No.oninput == "function";
      }
      iu = ou;
    } else iu = !1;
    Po = iu && (!document.documentMode || 9 < document.documentMode);
  }
  function zo() {
    Gn && (Gn.detachEvent("onpropertychange", To), Zn = Gn = null);
  }
  function To(e) {
    if (e.propertyName === "value" && Fr(Zn)) {
      var t = [];
      Co(t, Zn, e, Al(e)), Xi(Uf, t);
    }
  }
  function Af(e, t, n) {
    e === "focusin" ? (zo(), Gn = t, Zn = n, Gn.attachEvent("onpropertychange", To)) : e === "focusout" && zo();
  }
  function Hf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Fr(Zn);
  }
  function Bf(e, t) {
    if (e === "click") return Fr(t);
  }
  function Wf(e, t) {
    if (e === "input" || e === "change") return Fr(t);
  }
  function $f(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var nt = typeof Object.is == "function" ? Object.is : $f;
  function Jn(e, t) {
    if (nt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var l = n[r];
      if (!F.call(t, l) || !nt(e[l], t[l])) return !1;
    }
    return !0;
  }
  function Lo(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Ro(e, t) {
    var n = Lo(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t) return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Lo(n);
    }
  }
  function Oo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Oo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function jo() {
    for (var e = window, t = Sr(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Sr(e.document);
    }
    return t;
  }
  function su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function Qf(e) {
    var t = jo(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Oo(n.ownerDocument.documentElement, n)) {
      if (r !== null && su(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = n.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = Ro(n, u);
          var i = Ro(
            n,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(t), e.extend(i.node, i.offset)) : (t.setEnd(i.node, i.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; ) e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Kf = ue && "documentMode" in document && 11 >= document.documentMode, mn = null, au = null, qn = null, fu = !1;
  function Mo(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fu || mn == null || mn !== Sr(r) || (r = mn, "selectionStart" in r && su(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), qn && Jn(qn, r) || (qn = r, r = Hr(au, "onSelect"), 0 < r.length && (t = new eu("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = mn)));
  }
  function Ur(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var hn = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, cu = {}, Do = {};
  ue && (Do = document.createElement("div").style, "AnimationEvent" in window || (delete hn.animationend.animation, delete hn.animationiteration.animation, delete hn.animationstart.animation), "TransitionEvent" in window || delete hn.transitionend.transition);
  function Vr(e) {
    if (cu[e]) return cu[e];
    if (!hn[e]) return e;
    var t = hn[e], n;
    for (n in t) if (t.hasOwnProperty(n) && n in Do) return cu[e] = t[n];
    return e;
  }
  var Io = Vr("animationend"), Fo = Vr("animationiteration"), Uo = Vr("animationstart"), Vo = Vr("transitionend"), Ao = /* @__PURE__ */ new Map(), Ho = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ot(e, t) {
    Ao.set(e, t), ae(t, [e]);
  }
  for (var du = 0; du < Ho.length; du++) {
    var pu = Ho[du], Yf = pu.toLowerCase(), Xf = pu[0].toUpperCase() + pu.slice(1);
    Ot(Yf, "on" + Xf);
  }
  Ot(Io, "onAnimationEnd"), Ot(Fo, "onAnimationIteration"), Ot(Uo, "onAnimationStart"), Ot("dblclick", "onDoubleClick"), Ot("focusin", "onFocus"), Ot("focusout", "onBlur"), Ot(Vo, "onTransitionEnd"), ye("onMouseEnter", ["mouseout", "mouseover"]), ye("onMouseLeave", ["mouseout", "mouseover"]), ye("onPointerEnter", ["pointerout", "pointerover"]), ye("onPointerLeave", ["pointerout", "pointerover"]), ae("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), ae("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), ae("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), ae("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), ae("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), ae("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bn = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gf = new Set("cancel close invalid load scroll toggle".split(" ").concat(bn));
  function Bo(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Ka(r, t, void 0, e), e.currentTarget = null;
  }
  function Wo(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (t) for (var i = r.length - 1; 0 <= i; i--) {
          var o = r[i], s = o.instance, m = o.currentTarget;
          if (o = o.listener, s !== u && l.isPropagationStopped()) break e;
          Bo(l, o, m), u = s;
        }
        else for (i = 0; i < r.length; i++) {
          if (o = r[i], s = o.instance, m = o.currentTarget, o = o.listener, s !== u && l.isPropagationStopped()) break e;
          Bo(l, o, m), u = s;
        }
      }
    }
    if (xr) throw e = $l, xr = !1, $l = null, e;
  }
  function Y(e, t) {
    var n = t[ku];
    n === void 0 && (n = t[ku] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || ($o(t, e, 2, !1), n.add(r));
  }
  function mu(e, t, n) {
    var r = 0;
    t && (r |= 4), $o(n, e, r, t);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Ar]) {
      e[Ar] = !0, j.forEach(function(n) {
        n !== "selectionchange" && (Gf.has(n) || mu(n, !1, e), mu(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Ar] || (t[Ar] = !0, mu("selectionchange", !1, t));
    }
  }
  function $o(e, t, n, r) {
    switch (po(t)) {
      case 1:
        var l = af;
        break;
      case 4:
        l = ff;
        break;
      default:
        l = Jl;
    }
    n = l.bind(null, t, n, e), l = void 0, !Wl || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: l }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, { passive: l }) : e.addEventListener(t, n, !1);
  }
  function hu(e, t, n, r, l) {
    var u = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (; ; ) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var o = r.stateNode.containerInfo;
        if (o === l || o.nodeType === 8 && o.parentNode === l) break;
        if (i === 4) for (i = r.return; i !== null; ) {
          var s = i.tag;
          if ((s === 3 || s === 4) && (s = i.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
          i = i.return;
        }
        for (; o !== null; ) {
          if (i = Xt(o), i === null) return;
          if (s = i.tag, s === 5 || s === 6) {
            r = u = i;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
    Xi(function() {
      var m = u, g = Al(n), w = [];
      e: {
        var v = Ao.get(e);
        if (v !== void 0) {
          var E = eu, P = e;
          switch (e) {
            case "keypress":
              if (Mr(n) === 0) break e;
            case "keydown":
            case "keyup":
              E = Cf;
              break;
            case "focusin":
              P = "focus", E = ru;
              break;
            case "focusout":
              P = "blur", E = ru;
              break;
            case "beforeblur":
            case "afterblur":
              E = ru;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              E = vo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              E = pf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              E = zf;
              break;
            case Io:
            case Fo:
            case Uo:
              E = vf;
              break;
            case Vo:
              E = Lf;
              break;
            case "scroll":
              E = cf;
              break;
            case "wheel":
              E = Of;
              break;
            case "copy":
            case "cut":
            case "paste":
              E = gf;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              E = go;
          }
          var N = (t & 4) !== 0, oe = !N && e === "scroll", c = N ? v !== null ? v + "Capture" : null : v;
          N = [];
          for (var a = m, d; a !== null; ) {
            d = a;
            var S = d.stateNode;
            if (d.tag === 5 && S !== null && (d = S, c !== null && (S = In(a, c), S != null && N.push(tr(a, S, d)))), oe) break;
            a = a.return;
          }
          0 < N.length && (v = new E(v, P, null, n, g), w.push({ event: v, listeners: N }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (v = e === "mouseover" || e === "pointerover", E = e === "mouseout" || e === "pointerout", v && n !== Vl && (P = n.relatedTarget || n.fromElement) && (Xt(P) || P[gt])) break e;
          if ((E || v) && (v = g.window === g ? g : (v = g.ownerDocument) ? v.defaultView || v.parentWindow : window, E ? (P = n.relatedTarget || n.toElement, E = m, P = P ? Xt(P) : null, P !== null && (oe = Yt(P), P !== oe || P.tag !== 5 && P.tag !== 6) && (P = null)) : (E = null, P = m), E !== P)) {
            if (N = vo, S = "onMouseLeave", c = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (N = go, S = "onPointerLeave", c = "onPointerEnter", a = "pointer"), oe = E == null ? v : gn(E), d = P == null ? v : gn(P), v = new N(S, a + "leave", E, n, g), v.target = oe, v.relatedTarget = d, S = null, Xt(g) === m && (N = new N(c, a + "enter", P, n, g), N.target = d, N.relatedTarget = oe, S = N), oe = S, E && P) t: {
              for (N = E, c = P, a = 0, d = N; d; d = vn(d)) a++;
              for (d = 0, S = c; S; S = vn(S)) d++;
              for (; 0 < a - d; ) N = vn(N), a--;
              for (; 0 < d - a; ) c = vn(c), d--;
              for (; a--; ) {
                if (N === c || c !== null && N === c.alternate) break t;
                N = vn(N), c = vn(c);
              }
              N = null;
            }
            else N = null;
            E !== null && Qo(w, v, E, N, !1), P !== null && oe !== null && Qo(w, oe, P, N, !0);
          }
        }
        e: {
          if (v = m ? gn(m) : window, E = v.nodeName && v.nodeName.toLowerCase(), E === "select" || E === "input" && v.type === "file") var z = Vf;
          else if (_o(v)) if (Po) z = Wf;
          else {
            z = Hf;
            var T = Af;
          }
          else (E = v.nodeName) && E.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (z = Bf);
          if (z && (z = z(e, m))) {
            Co(w, z, n, g);
            break e;
          }
          T && T(e, v, m), e === "focusout" && (T = v._wrapperState) && T.controlled && v.type === "number" && Ml(v, "number", v.value);
        }
        switch (T = m ? gn(m) : window, e) {
          case "focusin":
            (_o(T) || T.contentEditable === "true") && (mn = T, au = m, qn = null);
            break;
          case "focusout":
            qn = au = mn = null;
            break;
          case "mousedown":
            fu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fu = !1, Mo(w, n, g);
            break;
          case "selectionchange":
            if (Kf) break;
          case "keydown":
          case "keyup":
            Mo(w, n, g);
        }
        var L;
        if (uu) e: {
          switch (e) {
            case "compositionstart":
              var O = "onCompositionStart";
              break e;
            case "compositionend":
              O = "onCompositionEnd";
              break e;
            case "compositionupdate":
              O = "onCompositionUpdate";
              break e;
          }
          O = void 0;
        }
        else pn ? Eo(e, n) && (O = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (O = "onCompositionStart");
        O && (wo && n.locale !== "ko" && (pn || O !== "onCompositionStart" ? O === "onCompositionEnd" && pn && (L = mo()) : (Rt = g, bl = "value" in Rt ? Rt.value : Rt.textContent, pn = !0)), T = Hr(m, O), 0 < T.length && (O = new yo(O, e, null, n, g), w.push({ event: O, listeners: T }), L ? O.data = L : (L = xo(n), L !== null && (O.data = L)))), (L = Mf ? Df(e, n) : If(e, n)) && (m = Hr(m, "onBeforeInput"), 0 < m.length && (g = new yo("onBeforeInput", "beforeinput", null, n, g), w.push({ event: g, listeners: m }), g.data = L));
      }
      Wo(w, t);
    });
  }
  function tr(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Hr(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = In(e, n), u != null && r.unshift(tr(e, u, l)), u = In(e, t), u != null && r.push(tr(e, u, l))), e = e.return;
    }
    return r;
  }
  function vn(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Qo(e, t, n, r, l) {
    for (var u = t._reactName, i = []; n !== null && n !== r; ) {
      var o = n, s = o.alternate, m = o.stateNode;
      if (s !== null && s === r) break;
      o.tag === 5 && m !== null && (o = m, l ? (s = In(n, u), s != null && i.unshift(tr(n, s, o))) : l || (s = In(n, u), s != null && i.push(tr(n, s, o)))), n = n.return;
    }
    i.length !== 0 && e.push({ event: t, listeners: i });
  }
  var Zf = /\r\n?/g, Jf = /\u0000|\uFFFD/g;
  function Ko(e) {
    return (typeof e == "string" ? e : "" + e).replace(Zf, `
`).replace(Jf, "");
  }
  function Br(e, t, n) {
    if (t = Ko(t), Ko(e) !== t && n) throw Error(p(425));
  }
  function Wr() {
  }
  var vu = null, yu = null;
  function gu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var wu = typeof setTimeout == "function" ? setTimeout : void 0, qf = typeof clearTimeout == "function" ? clearTimeout : void 0, Yo = typeof Promise == "function" ? Promise : void 0, bf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Yo < "u" ? function(e) {
    return Yo.resolve(null).then(e).catch(ec);
  } : wu;
  function ec(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Su(e, t) {
    var n = t, r = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8) if (n = l.data, n === "/$") {
        if (r === 0) {
          e.removeChild(l), Qn(t);
          return;
        }
        r--;
      } else n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = l;
    } while (n);
    Qn(t);
  }
  function jt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Xo(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yn = Math.random().toString(36).slice(2), dt = "__reactFiber$" + yn, nr = "__reactProps$" + yn, gt = "__reactContainer$" + yn, ku = "__reactEvents$" + yn, tc = "__reactListeners$" + yn, nc = "__reactHandles$" + yn;
  function Xt(e) {
    var t = e[dt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[gt] || n[dt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null) for (e = Xo(e); e !== null; ) {
          if (n = e[dt]) return n;
          e = Xo(e);
        }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function rr(e) {
    return e = e[dt] || e[gt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function gn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(p(33));
  }
  function $r(e) {
    return e[nr] || null;
  }
  var Eu = [], wn = -1;
  function Mt(e) {
    return { current: e };
  }
  function X(e) {
    0 > wn || (e.current = Eu[wn], Eu[wn] = null, wn--);
  }
  function K(e, t) {
    wn++, Eu[wn] = e.current, e.current = t;
  }
  var Dt = {}, Se = Mt(Dt), Re = Mt(!1), Gt = Dt;
  function Sn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Dt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in n) l[u] = t[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Oe(e) {
    return e = e.childContextTypes, e != null;
  }
  function Qr() {
    X(Re), X(Se);
  }
  function Go(e, t, n) {
    if (Se.current !== Dt) throw Error(p(168));
    K(Se, t), K(Re, n);
  }
  function Zo(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r) if (!(l in t)) throw Error(p(108, Q(e) || "Unknown", l));
    return C({}, n, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Dt, Gt = Se.current, K(Se, e), K(Re, Re.current), !0;
  }
  function Jo(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(p(169));
    n ? (e = Zo(e, t, Gt), r.__reactInternalMemoizedMergedChildContext = e, X(Re), X(Se), K(Se, e)) : X(Re), K(Re, n);
  }
  var wt = null, Yr = !1, xu = !1;
  function qo(e) {
    wt === null ? wt = [e] : wt.push(e);
  }
  function rc(e) {
    Yr = !0, qo(e);
  }
  function It() {
    if (!xu && wt !== null) {
      xu = !0;
      var e = 0, t = W;
      try {
        var n = wt;
        for (W = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        wt = null, Yr = !1;
      } catch (l) {
        throw wt !== null && (wt = wt.slice(e + 1)), bi(Ql, It), l;
      } finally {
        W = t, xu = !1;
      }
    }
    return null;
  }
  var kn = [], En = 0, Xr = null, Gr = 0, Ke = [], Ye = 0, Zt = null, St = 1, kt = "";
  function Jt(e, t) {
    kn[En++] = Gr, kn[En++] = Xr, Xr = e, Gr = t;
  }
  function bo(e, t, n) {
    Ke[Ye++] = St, Ke[Ye++] = kt, Ke[Ye++] = Zt, Zt = e;
    var r = St;
    e = kt;
    var l = 32 - tt(r) - 1;
    r &= ~(1 << l), n += 1;
    var u = 32 - tt(t) + l;
    if (30 < u) {
      var i = l - l % 5;
      u = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, St = 1 << 32 - tt(t) + l | n << l | r, kt = u + e;
    } else St = 1 << u | n << l | r, kt = e;
  }
  function _u(e) {
    e.return !== null && (Jt(e, 1), bo(e, 1, 0));
  }
  function Cu(e) {
    for (; e === Xr; ) Xr = kn[--En], kn[En] = null, Gr = kn[--En], kn[En] = null;
    for (; e === Zt; ) Zt = Ke[--Ye], Ke[Ye] = null, kt = Ke[--Ye], Ke[Ye] = null, St = Ke[--Ye], Ke[Ye] = null;
  }
  var Ae = null, He = null, q = !1, rt = null;
  function es(e, t) {
    var n = Je(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ts(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Ae = e, He = jt(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Ae = e, He = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Zt !== null ? { id: St, overflow: kt } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = Je(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Ae = e, He = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Pu(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function Nu(e) {
    if (q) {
      var t = He;
      if (t) {
        var n = t;
        if (!ts(e, t)) {
          if (Pu(e)) throw Error(p(418));
          t = jt(n.nextSibling);
          var r = Ae;
          t && ts(e, t) ? es(r, n) : (e.flags = e.flags & -4097 | 2, q = !1, Ae = e);
        }
      } else {
        if (Pu(e)) throw Error(p(418));
        e.flags = e.flags & -4097 | 2, q = !1, Ae = e;
      }
    }
  }
  function ns(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ae = e;
  }
  function Zr(e) {
    if (e !== Ae) return !1;
    if (!q) return ns(e), q = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !gu(e.type, e.memoizedProps)), t && (t = He)) {
      if (Pu(e)) throw rs(), Error(p(418));
      for (; t; ) es(e, t), t = jt(t.nextSibling);
    }
    if (ns(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(p(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                He = jt(e.nextSibling);
                break e;
              }
              t--;
            } else n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        He = null;
      }
    } else He = Ae ? jt(e.stateNode.nextSibling) : null;
    return !0;
  }
  function rs() {
    for (var e = He; e; ) e = jt(e.nextSibling);
  }
  function xn() {
    He = Ae = null, q = !1;
  }
  function zu(e) {
    rt === null ? rt = [e] : rt.push(e);
  }
  var lc = we.ReactCurrentBatchConfig;
  function lr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1) throw Error(p(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(p(147, e));
        var l = r, u = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === u ? t.ref : (t = function(i) {
          var o = l.refs;
          i === null ? delete o[u] : o[u] = i;
        }, t._stringRef = u, t);
      }
      if (typeof e != "string") throw Error(p(284));
      if (!n._owner) throw Error(p(290, e));
    }
    return e;
  }
  function Jr(e, t) {
    throw e = Object.prototype.toString.call(t), Error(p(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function ls(e) {
    var t = e._init;
    return t(e._payload);
  }
  function us(e) {
    function t(c, a) {
      if (e) {
        var d = c.deletions;
        d === null ? (c.deletions = [a], c.flags |= 16) : d.push(a);
      }
    }
    function n(c, a) {
      if (!e) return null;
      for (; a !== null; ) t(c, a), a = a.sibling;
      return null;
    }
    function r(c, a) {
      for (c = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
      return c;
    }
    function l(c, a) {
      return c = $t(c, a), c.index = 0, c.sibling = null, c;
    }
    function u(c, a, d) {
      return c.index = d, e ? (d = c.alternate, d !== null ? (d = d.index, d < a ? (c.flags |= 2, a) : d) : (c.flags |= 2, a)) : (c.flags |= 1048576, a);
    }
    function i(c) {
      return e && c.alternate === null && (c.flags |= 2), c;
    }
    function o(c, a, d, S) {
      return a === null || a.tag !== 6 ? (a = wi(d, c.mode, S), a.return = c, a) : (a = l(a, d), a.return = c, a);
    }
    function s(c, a, d, S) {
      var z = d.type;
      return z === Te ? g(c, a, d.props.children, S, d.key) : a !== null && (a.elementType === z || typeof z == "object" && z !== null && z.$$typeof === Le && ls(z) === a.type) ? (S = l(a, d.props), S.ref = lr(c, a, d), S.return = c, S) : (S = kl(d.type, d.key, d.props, null, c.mode, S), S.ref = lr(c, a, d), S.return = c, S);
    }
    function m(c, a, d, S) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = Si(d, c.mode, S), a.return = c, a) : (a = l(a, d.children || []), a.return = c, a);
    }
    function g(c, a, d, S, z) {
      return a === null || a.tag !== 7 ? (a = un(d, c.mode, S, z), a.return = c, a) : (a = l(a, d), a.return = c, a);
    }
    function w(c, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = wi("" + a, c.mode, d), a.return = c, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return d = kl(a.type, a.key, a.props, null, c.mode, d), d.ref = lr(c, null, a), d.return = c, d;
          case Pe:
            return a = Si(a, c.mode, d), a.return = c, a;
          case Le:
            var S = a._init;
            return w(c, S(a._payload), d);
        }
        if (jn(a) || R(a)) return a = un(a, c.mode, d, null), a.return = c, a;
        Jr(c, a);
      }
      return null;
    }
    function v(c, a, d, S) {
      var z = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return z !== null ? null : o(c, a, "" + d, S);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === z ? s(c, a, d, S) : null;
          case Pe:
            return d.key === z ? m(c, a, d, S) : null;
          case Le:
            return z = d._init, v(
              c,
              a,
              z(d._payload),
              S
            );
        }
        if (jn(d) || R(d)) return z !== null ? null : g(c, a, d, S, null);
        Jr(c, d);
      }
      return null;
    }
    function E(c, a, d, S, z) {
      if (typeof S == "string" && S !== "" || typeof S == "number") return c = c.get(d) || null, o(a, c, "" + S, z);
      if (typeof S == "object" && S !== null) {
        switch (S.$$typeof) {
          case be:
            return c = c.get(S.key === null ? d : S.key) || null, s(a, c, S, z);
          case Pe:
            return c = c.get(S.key === null ? d : S.key) || null, m(a, c, S, z);
          case Le:
            var T = S._init;
            return E(c, a, d, T(S._payload), z);
        }
        if (jn(S) || R(S)) return c = c.get(d) || null, g(a, c, S, z, null);
        Jr(a, S);
      }
      return null;
    }
    function P(c, a, d, S) {
      for (var z = null, T = null, L = a, O = a = 0, me = null; L !== null && O < d.length; O++) {
        L.index > O ? (me = L, L = null) : me = L.sibling;
        var H = v(c, L, d[O], S);
        if (H === null) {
          L === null && (L = me);
          break;
        }
        e && L && H.alternate === null && t(c, L), a = u(H, a, O), T === null ? z = H : T.sibling = H, T = H, L = me;
      }
      if (O === d.length) return n(c, L), q && Jt(c, O), z;
      if (L === null) {
        for (; O < d.length; O++) L = w(c, d[O], S), L !== null && (a = u(L, a, O), T === null ? z = L : T.sibling = L, T = L);
        return q && Jt(c, O), z;
      }
      for (L = r(c, L); O < d.length; O++) me = E(L, c, O, d[O], S), me !== null && (e && me.alternate !== null && L.delete(me.key === null ? O : me.key), a = u(me, a, O), T === null ? z = me : T.sibling = me, T = me);
      return e && L.forEach(function(Qt) {
        return t(c, Qt);
      }), q && Jt(c, O), z;
    }
    function N(c, a, d, S) {
      var z = R(d);
      if (typeof z != "function") throw Error(p(150));
      if (d = z.call(d), d == null) throw Error(p(151));
      for (var T = z = null, L = a, O = a = 0, me = null, H = d.next(); L !== null && !H.done; O++, H = d.next()) {
        L.index > O ? (me = L, L = null) : me = L.sibling;
        var Qt = v(c, L, H.value, S);
        if (Qt === null) {
          L === null && (L = me);
          break;
        }
        e && L && Qt.alternate === null && t(c, L), a = u(Qt, a, O), T === null ? z = Qt : T.sibling = Qt, T = Qt, L = me;
      }
      if (H.done) return n(
        c,
        L
      ), q && Jt(c, O), z;
      if (L === null) {
        for (; !H.done; O++, H = d.next()) H = w(c, H.value, S), H !== null && (a = u(H, a, O), T === null ? z = H : T.sibling = H, T = H);
        return q && Jt(c, O), z;
      }
      for (L = r(c, L); !H.done; O++, H = d.next()) H = E(L, c, O, H.value, S), H !== null && (e && H.alternate !== null && L.delete(H.key === null ? O : H.key), a = u(H, a, O), T === null ? z = H : T.sibling = H, T = H);
      return e && L.forEach(function(Fc) {
        return t(c, Fc);
      }), q && Jt(c, O), z;
    }
    function oe(c, a, d, S) {
      if (typeof d == "object" && d !== null && d.type === Te && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var z = d.key, T = a; T !== null; ) {
                if (T.key === z) {
                  if (z = d.type, z === Te) {
                    if (T.tag === 7) {
                      n(c, T.sibling), a = l(T, d.props.children), a.return = c, c = a;
                      break e;
                    }
                  } else if (T.elementType === z || typeof z == "object" && z !== null && z.$$typeof === Le && ls(z) === T.type) {
                    n(c, T.sibling), a = l(T, d.props), a.ref = lr(c, T, d), a.return = c, c = a;
                    break e;
                  }
                  n(c, T);
                  break;
                } else t(c, T);
                T = T.sibling;
              }
              d.type === Te ? (a = un(d.props.children, c.mode, S, d.key), a.return = c, c = a) : (S = kl(d.type, d.key, d.props, null, c.mode, S), S.ref = lr(c, a, d), S.return = c, c = S);
            }
            return i(c);
          case Pe:
            e: {
              for (T = d.key; a !== null; ) {
                if (a.key === T) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  n(c, a.sibling), a = l(a, d.children || []), a.return = c, c = a;
                  break e;
                } else {
                  n(c, a);
                  break;
                }
                else t(c, a);
                a = a.sibling;
              }
              a = Si(d, c.mode, S), a.return = c, c = a;
            }
            return i(c);
          case Le:
            return T = d._init, oe(c, a, T(d._payload), S);
        }
        if (jn(d)) return P(c, a, d, S);
        if (R(d)) return N(c, a, d, S);
        Jr(c, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (n(c, a.sibling), a = l(a, d), a.return = c, c = a) : (n(c, a), a = wi(d, c.mode, S), a.return = c, c = a), i(c)) : n(c, a);
    }
    return oe;
  }
  var _n = us(!0), is = us(!1), qr = Mt(null), br = null, Cn = null, Tu = null;
  function Lu() {
    Tu = Cn = br = null;
  }
  function Ru(e) {
    var t = qr.current;
    X(qr), e._currentValue = t;
  }
  function Ou(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Pn(e, t) {
    br = e, Tu = Cn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (je = !0), e.firstContext = null);
  }
  function Xe(e) {
    var t = e._currentValue;
    if (Tu !== e) if (e = { context: e, memoizedValue: t, next: null }, Cn === null) {
      if (br === null) throw Error(p(308));
      Cn = e, br.dependencies = { lanes: 0, firstContext: e };
    } else Cn = Cn.next = e;
    return t;
  }
  var qt = null;
  function ju(e) {
    qt === null ? qt = [e] : qt.push(e);
  }
  function os(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, ju(t)) : (n.next = l.next, l.next = n), t.interleaved = n, Et(e, r);
  }
  function Et(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; ) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var Ft = !1;
  function Mu(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function ss(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function xt(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function Ut(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, U & 2) {
      var l = r.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, Et(e, n);
    }
    return l = r.interleaved, l === null ? (t.next = t, ju(r)) : (t.next = l.next, l.next = t), r.interleaved = t, Et(e, n);
  }
  function el(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xl(e, n);
    }
  }
  function as(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var i = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          u === null ? l = u = i : u = u.next = i, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function tl(e, t, n, r) {
    var l = e.updateQueue;
    Ft = !1;
    var u = l.firstBaseUpdate, i = l.lastBaseUpdate, o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o, m = s.next;
      s.next = null, i === null ? u = m : i.next = m, i = s;
      var g = e.alternate;
      g !== null && (g = g.updateQueue, o = g.lastBaseUpdate, o !== i && (o === null ? g.firstBaseUpdate = m : o.next = m, g.lastBaseUpdate = s));
    }
    if (u !== null) {
      var w = l.baseState;
      i = 0, g = m = s = null, o = u;
      do {
        var v = o.lane, E = o.eventTime;
        if ((r & v) === v) {
          g !== null && (g = g.next = {
            eventTime: E,
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          });
          e: {
            var P = e, N = o;
            switch (v = t, E = n, N.tag) {
              case 1:
                if (P = N.payload, typeof P == "function") {
                  w = P.call(E, w, v);
                  break e;
                }
                w = P;
                break e;
              case 3:
                P.flags = P.flags & -65537 | 128;
              case 0:
                if (P = N.payload, v = typeof P == "function" ? P.call(E, w, v) : P, v == null) break e;
                w = C({}, w, v);
                break e;
              case 2:
                Ft = !0;
            }
          }
          o.callback !== null && o.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [o] : v.push(o));
        } else E = { eventTime: E, lane: v, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, g === null ? (m = g = E, s = w) : g = g.next = E, i |= v;
        if (o = o.next, o === null) {
          if (o = l.shared.pending, o === null) break;
          v = o, o = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null;
        }
      } while (!0);
      if (g === null && (s = w), l.baseState = s, l.firstBaseUpdate = m, l.lastBaseUpdate = g, t = l.shared.interleaved, t !== null) {
        l = t;
        do
          i |= l.lane, l = l.next;
        while (l !== t);
      } else u === null && (l.shared.lanes = 0);
      tn |= i, e.lanes = i, e.memoizedState = w;
    }
  }
  function fs(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null) for (t = 0; t < e.length; t++) {
      var r = e[t], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = n, typeof l != "function") throw Error(p(191, l));
        l.call(r);
      }
    }
  }
  var ur = {}, pt = Mt(ur), ir = Mt(ur), or = Mt(ur);
  function bt(e) {
    if (e === ur) throw Error(p(174));
    return e;
  }
  function Du(e, t) {
    switch (K(or, t), K(ir, e), K(pt, ur), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Il(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Il(t, e);
    }
    X(pt), K(pt, t);
  }
  function Nn() {
    X(pt), X(ir), X(or);
  }
  function cs(e) {
    bt(or.current);
    var t = bt(pt.current), n = Il(t, e.type);
    t !== n && (K(ir, e), K(pt, n));
  }
  function Iu(e) {
    ir.current === e && (X(pt), X(ir));
  }
  var te = Mt(0);
  function nl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Fu = [];
  function Uu() {
    for (var e = 0; e < Fu.length; e++) Fu[e]._workInProgressVersionPrimary = null;
    Fu.length = 0;
  }
  var rl = we.ReactCurrentDispatcher, Vu = we.ReactCurrentBatchConfig, en = 0, ne = null, fe = null, de = null, ll = !1, sr = !1, ar = 0, uc = 0;
  function ke() {
    throw Error(p(321));
  }
  function Au(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!nt(e[n], t[n])) return !1;
    return !0;
  }
  function Hu(e, t, n, r, l, u) {
    if (en = u, ne = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, rl.current = e === null || e.memoizedState === null ? ac : fc, e = n(r, l), sr) {
      u = 0;
      do {
        if (sr = !1, ar = 0, 25 <= u) throw Error(p(301));
        u += 1, de = fe = null, t.updateQueue = null, rl.current = cc, e = n(r, l);
      } while (sr);
    }
    if (rl.current = ol, t = fe !== null && fe.next !== null, en = 0, de = fe = ne = null, ll = !1, t) throw Error(p(300));
    return e;
  }
  function Bu() {
    var e = ar !== 0;
    return ar = 0, e;
  }
  function mt() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return de === null ? ne.memoizedState = de = e : de = de.next = e, de;
  }
  function Ge() {
    if (fe === null) {
      var e = ne.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = fe.next;
    var t = de === null ? ne.memoizedState : de.next;
    if (t !== null) de = t, fe = e;
    else {
      if (e === null) throw Error(p(310));
      fe = e, e = { memoizedState: fe.memoizedState, baseState: fe.baseState, baseQueue: fe.baseQueue, queue: fe.queue, next: null }, de === null ? ne.memoizedState = de = e : de = de.next = e;
    }
    return de;
  }
  function fr(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Wu(e) {
    var t = Ge(), n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = fe, l = r.baseQueue, u = n.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = u.next, u.next = i;
      }
      r.baseQueue = l = u, n.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var o = i = null, s = null, m = u;
      do {
        var g = m.lane;
        if ((en & g) === g) s !== null && (s = s.next = { lane: 0, action: m.action, hasEagerState: m.hasEagerState, eagerState: m.eagerState, next: null }), r = m.hasEagerState ? m.eagerState : e(r, m.action);
        else {
          var w = {
            lane: g,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          };
          s === null ? (o = s = w, i = r) : s = s.next = w, ne.lanes |= g, tn |= g;
        }
        m = m.next;
      } while (m !== null && m !== u);
      s === null ? i = r : s.next = o, nt(r, t.memoizedState) || (je = !0), t.memoizedState = r, t.baseState = i, t.baseQueue = s, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, ne.lanes |= u, tn |= u, l = l.next;
      while (l !== e);
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function $u(e) {
    var t = Ge(), n = t.queue;
    if (n === null) throw Error(p(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var i = l = l.next;
      do
        u = e(u, i.action), i = i.next;
      while (i !== l);
      nt(u, t.memoizedState) || (je = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, r];
  }
  function ds() {
  }
  function ps(e, t) {
    var n = ne, r = Ge(), l = t(), u = !nt(r.memoizedState, l);
    if (u && (r.memoizedState = l, je = !0), r = r.queue, Qu(vs.bind(null, n, r, e), [e]), r.getSnapshot !== t || u || de !== null && de.memoizedState.tag & 1) {
      if (n.flags |= 2048, cr(9, hs.bind(null, n, r, l, t), void 0, null), pe === null) throw Error(p(349));
      en & 30 || ms(n, t, l);
    }
    return l;
  }
  function ms(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function hs(e, t, n, r) {
    t.value = n, t.getSnapshot = r, ys(t) && gs(e);
  }
  function vs(e, t, n) {
    return n(function() {
      ys(t) && gs(e);
    });
  }
  function ys(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !nt(e, n);
    } catch {
      return !0;
    }
  }
  function gs(e) {
    var t = Et(e, 1);
    t !== null && ot(t, e, 1, -1);
  }
  function ws(e) {
    var t = mt();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: fr, lastRenderedState: e }, t.queue = e, e = e.dispatch = sc.bind(null, ne, e), [t.memoizedState, e];
  }
  function cr(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = ne.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, ne.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function Ss() {
    return Ge().memoizedState;
  }
  function ul(e, t, n, r) {
    var l = mt();
    ne.flags |= e, l.memoizedState = cr(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function il(e, t, n, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (fe !== null) {
      var i = fe.memoizedState;
      if (u = i.destroy, r !== null && Au(r, i.deps)) {
        l.memoizedState = cr(t, n, u, r);
        return;
      }
    }
    ne.flags |= e, l.memoizedState = cr(1 | t, n, u, r);
  }
  function ks(e, t) {
    return ul(8390656, 8, e, t);
  }
  function Qu(e, t) {
    return il(2048, 8, e, t);
  }
  function Es(e, t) {
    return il(4, 2, e, t);
  }
  function xs(e, t) {
    return il(4, 4, e, t);
  }
  function _s(e, t) {
    if (typeof t == "function") return e = e(), t(e), function() {
      t(null);
    };
    if (t != null) return e = e(), t.current = e, function() {
      t.current = null;
    };
  }
  function Cs(e, t, n) {
    return n = n != null ? n.concat([e]) : null, il(4, 4, _s.bind(null, t, e), n);
  }
  function Ku() {
  }
  function Ps(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Au(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function Ns(e, t) {
    var n = Ge();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Au(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function zs(e, t, n) {
    return en & 21 ? (nt(n, t) || (n = ro(), ne.lanes |= n, tn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, je = !0), e.memoizedState = n);
  }
  function ic(e, t) {
    var n = W;
    W = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Vu.transition;
    Vu.transition = {};
    try {
      e(!1), t();
    } finally {
      W = n, Vu.transition = r;
    }
  }
  function Ts() {
    return Ge().memoizedState;
  }
  function oc(e, t, n) {
    var r = Bt(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Ls(e)) Rs(t, n);
    else if (n = os(e, t, n, r), n !== null) {
      var l = ze();
      ot(n, e, r, l), Os(n, t, r);
    }
  }
  function sc(e, t, n) {
    var r = Bt(e), l = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Ls(e)) Rs(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null)) try {
        var i = t.lastRenderedState, o = u(i, n);
        if (l.hasEagerState = !0, l.eagerState = o, nt(o, i)) {
          var s = t.interleaved;
          s === null ? (l.next = l, ju(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      n = os(e, t, l, r), n !== null && (l = ze(), ot(n, e, r, l), Os(n, t, r));
    }
  }
  function Ls(e) {
    var t = e.alternate;
    return e === ne || t !== null && t === ne;
  }
  function Rs(e, t) {
    sr = ll = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Os(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Xl(e, n);
    }
  }
  var ol = { readContext: Xe, useCallback: ke, useContext: ke, useEffect: ke, useImperativeHandle: ke, useInsertionEffect: ke, useLayoutEffect: ke, useMemo: ke, useReducer: ke, useRef: ke, useState: ke, useDebugValue: ke, useDeferredValue: ke, useTransition: ke, useMutableSource: ke, useSyncExternalStore: ke, useId: ke, unstable_isNewReconciler: !1 }, ac = { readContext: Xe, useCallback: function(e, t) {
    return mt().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: Xe, useEffect: ks, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, ul(
      4194308,
      4,
      _s.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return ul(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return ul(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = mt();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = mt();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = oc.bind(null, ne, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = mt();
    return e = { current: e }, t.memoizedState = e;
  }, useState: ws, useDebugValue: Ku, useDeferredValue: function(e) {
    return mt().memoizedState = e;
  }, useTransition: function() {
    var e = ws(!1), t = e[0];
    return e = ic.bind(null, e[1]), mt().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = ne, l = mt();
    if (q) {
      if (n === void 0) throw Error(p(407));
      n = n();
    } else {
      if (n = t(), pe === null) throw Error(p(349));
      en & 30 || ms(r, t, n);
    }
    l.memoizedState = n;
    var u = { value: n, getSnapshot: t };
    return l.queue = u, ks(vs.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, cr(9, hs.bind(null, r, u, n, t), void 0, null), n;
  }, useId: function() {
    var e = mt(), t = pe.identifierPrefix;
    if (q) {
      var n = kt, r = St;
      n = (r & ~(1 << 32 - tt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = ar++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else n = uc++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, fc = {
    readContext: Xe,
    useCallback: Ps,
    useContext: Xe,
    useEffect: Qu,
    useImperativeHandle: Cs,
    useInsertionEffect: Es,
    useLayoutEffect: xs,
    useMemo: Ns,
    useReducer: Wu,
    useRef: Ss,
    useState: function() {
      return Wu(fr);
    },
    useDebugValue: Ku,
    useDeferredValue: function(e) {
      var t = Ge();
      return zs(t, fe.memoizedState, e);
    },
    useTransition: function() {
      var e = Wu(fr)[0], t = Ge().memoizedState;
      return [e, t];
    },
    useMutableSource: ds,
    useSyncExternalStore: ps,
    useId: Ts,
    unstable_isNewReconciler: !1
  }, cc = { readContext: Xe, useCallback: Ps, useContext: Xe, useEffect: Qu, useImperativeHandle: Cs, useInsertionEffect: Es, useLayoutEffect: xs, useMemo: Ns, useReducer: $u, useRef: Ss, useState: function() {
    return $u(fr);
  }, useDebugValue: Ku, useDeferredValue: function(e) {
    var t = Ge();
    return fe === null ? t.memoizedState = e : zs(t, fe.memoizedState, e);
  }, useTransition: function() {
    var e = $u(fr)[0], t = Ge().memoizedState;
    return [e, t];
  }, useMutableSource: ds, useSyncExternalStore: ps, useId: Ts, unstable_isNewReconciler: !1 };
  function lt(e, t) {
    if (e && e.defaultProps) {
      t = C({}, t), e = e.defaultProps;
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function Yu(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : C({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var sl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Yt(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = ze(), l = Bt(e), u = xt(r, l);
    u.payload = t, n != null && (u.callback = n), t = Ut(e, u, l), t !== null && (ot(t, e, l, r), el(t, e, l));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = ze(), l = Bt(e), u = xt(r, l);
    u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Ut(e, u, l), t !== null && (ot(t, e, l, r), el(t, e, l));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = ze(), r = Bt(e), l = xt(n, r);
    l.tag = 2, t != null && (l.callback = t), t = Ut(e, l, r), t !== null && (ot(t, e, r, n), el(t, e, r));
  } };
  function js(e, t, n, r, l, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, i) : t.prototype && t.prototype.isPureReactComponent ? !Jn(n, r) || !Jn(l, u) : !0;
  }
  function Ms(e, t, n) {
    var r = !1, l = Dt, u = t.contextType;
    return typeof u == "object" && u !== null ? u = Xe(u) : (l = Oe(t) ? Gt : Se.current, r = t.contextTypes, u = (r = r != null) ? Sn(e, l) : Dt), t = new t(n, u), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = sl, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), t;
  }
  function Ds(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && sl.enqueueReplaceState(t, t.state, null);
  }
  function Xu(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = {}, Mu(e);
    var u = t.contextType;
    typeof u == "object" && u !== null ? l.context = Xe(u) : (u = Oe(t) ? Gt : Se.current, l.context = Sn(e, u)), l.state = e.memoizedState, u = t.getDerivedStateFromProps, typeof u == "function" && (Yu(e, t, u, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && sl.enqueueReplaceState(l, l.state, null), tl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zn(e, t) {
    try {
      var n = "", r = t;
      do
        n += V(r), r = r.return;
      while (r);
      var l = n;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: t, stack: l, digest: null };
  }
  function Gu(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function Zu(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var dc = typeof WeakMap == "function" ? WeakMap : Map;
  function Is(e, t, n) {
    n = xt(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      hl || (hl = !0, ci = r), Zu(e, t);
    }, n;
  }
  function Fs(e, t, n) {
    n = xt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = t.value;
      n.payload = function() {
        return r(l);
      }, n.callback = function() {
        Zu(e, t);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (n.callback = function() {
      Zu(e, t), typeof r != "function" && (At === null ? At = /* @__PURE__ */ new Set([this]) : At.add(this));
      var i = t.stack;
      this.componentDidCatch(t.value, { componentStack: i !== null ? i : "" });
    }), n;
  }
  function Us(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new dc();
      var l = /* @__PURE__ */ new Set();
      r.set(t, l);
    } else l = r.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(t, l));
    l.has(n) || (l.add(n), e = Pc.bind(null, e, t, n), t.then(e, e));
  }
  function Vs(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function As(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = xt(-1, 1), t.tag = 2, Ut(n, t, 1))), n.lanes |= 1), e);
  }
  var pc = we.ReactCurrentOwner, je = !1;
  function Ne(e, t, n, r) {
    t.child = e === null ? is(t, null, n, r) : _n(t, e.child, n, r);
  }
  function Hs(e, t, n, r, l) {
    n = n.render;
    var u = t.ref;
    return Pn(t, l), r = Hu(e, t, n, r, u, l), n = Bu(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, _t(e, t, l)) : (q && n && _u(t), t.flags |= 1, Ne(e, t, r, l), t.child);
  }
  function Bs(e, t, n, r, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !gi(u) && u.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = u, Ws(e, t, u, r, l)) : (e = kl(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !(e.lanes & l)) {
      var i = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Jn, n(i, r) && e.ref === t.ref) return _t(e, t, l);
    }
    return t.flags |= 1, e = $t(u, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Ws(e, t, n, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Jn(u, r) && e.ref === t.ref) if (je = !1, t.pendingProps = r = u, (e.lanes & l) !== 0) e.flags & 131072 && (je = !0);
      else return t.lanes = e.lanes, _t(e, t, l);
    }
    return Ju(e, t, n, r, l);
  }
  function $s(e, t, n) {
    var r = t.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(t.mode & 1)) t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, K(Ln, Be), Be |= n;
    else {
      if (!(n & 1073741824)) return e = u !== null ? u.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, K(Ln, Be), Be |= e, null;
      t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : n, K(Ln, Be), Be |= r;
    }
    else u !== null ? (r = u.baseLanes | n, t.memoizedState = null) : r = n, K(Ln, Be), Be |= r;
    return Ne(e, t, l, n), t.child;
  }
  function Qs(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function Ju(e, t, n, r, l) {
    var u = Oe(n) ? Gt : Se.current;
    return u = Sn(t, u), Pn(t, l), n = Hu(e, t, n, r, u, l), r = Bu(), e !== null && !je ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, _t(e, t, l)) : (q && r && _u(t), t.flags |= 1, Ne(e, t, n, l), t.child);
  }
  function Ks(e, t, n, r, l) {
    if (Oe(n)) {
      var u = !0;
      Kr(t);
    } else u = !1;
    if (Pn(t, l), t.stateNode === null) fl(e, t), Ms(t, n, r), Xu(t, n, r, l), r = !0;
    else if (e === null) {
      var i = t.stateNode, o = t.memoizedProps;
      i.props = o;
      var s = i.context, m = n.contextType;
      typeof m == "object" && m !== null ? m = Xe(m) : (m = Oe(n) ? Gt : Se.current, m = Sn(t, m));
      var g = n.getDerivedStateFromProps, w = typeof g == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      w || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== r || s !== m) && Ds(t, i, r, m), Ft = !1;
      var v = t.memoizedState;
      i.state = v, tl(t, r, i, l), s = t.memoizedState, o !== r || v !== s || Re.current || Ft ? (typeof g == "function" && (Yu(t, n, g, r), s = t.memoizedState), (o = Ft || js(t, n, o, r, v, s, m)) ? (w || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), i.props = r, i.state = s, i.context = m, r = o) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      i = t.stateNode, ss(e, t), o = t.memoizedProps, m = t.type === t.elementType ? o : lt(t.type, o), i.props = m, w = t.pendingProps, v = i.context, s = n.contextType, typeof s == "object" && s !== null ? s = Xe(s) : (s = Oe(n) ? Gt : Se.current, s = Sn(t, s));
      var E = n.getDerivedStateFromProps;
      (g = typeof E == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== w || v !== s) && Ds(t, i, r, s), Ft = !1, v = t.memoizedState, i.state = v, tl(t, r, i, l);
      var P = t.memoizedState;
      o !== w || v !== P || Re.current || Ft ? (typeof E == "function" && (Yu(t, n, E, r), P = t.memoizedState), (m = Ft || js(t, n, m, r, v, P, s) || !1) ? (g || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, P, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, P, s)), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = P), i.props = r, i.state = P, i.context = s, r = m) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return qu(e, t, n, r, u, l);
  }
  function qu(e, t, n, r, l, u) {
    Qs(e, t);
    var i = (t.flags & 128) !== 0;
    if (!r && !i) return l && Jo(t, n, !1), _t(e, t, u);
    r = t.stateNode, pc.current = t;
    var o = i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && i ? (t.child = _n(t, e.child, null, u), t.child = _n(t, null, o, u)) : Ne(e, t, o, u), t.memoizedState = r.state, l && Jo(t, n, !0), t.child;
  }
  function Ys(e) {
    var t = e.stateNode;
    t.pendingContext ? Go(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Go(e, t.context, !1), Du(e, t.containerInfo);
  }
  function Xs(e, t, n, r, l) {
    return xn(), zu(l), t.flags |= 256, Ne(e, t, n, r), t.child;
  }
  var bu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function ei(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Gs(e, t, n) {
    var r = t.pendingProps, l = te.current, u = !1, i = (t.flags & 128) !== 0, o;
    if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (u = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), K(te, l & 1), e === null)
      return Nu(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (i = r.children, e = r.fallback, u ? (r = t.mode, u = t.child, i = { mode: "hidden", children: i }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = i) : u = El(i, r, 0, null), e = un(e, r, n, null), u.return = t, e.return = t, u.sibling = e, t.child = u, t.child.memoizedState = ei(n), t.memoizedState = bu, e) : ti(t, i));
    if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return mc(e, t, i, r, o, l, n);
    if (u) {
      u = r.fallback, i = t.mode, l = e.child, o = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(i & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = $t(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? u = $t(o, u) : (u = un(u, i, n, null), u.flags |= 2), u.return = t, r.return = t, r.sibling = u, t.child = r, r = u, u = t.child, i = e.child.memoizedState, i = i === null ? ei(n) : { baseLanes: i.baseLanes | n, cachePool: null, transitions: i.transitions }, u.memoizedState = i, u.childLanes = e.childLanes & ~n, t.memoizedState = bu, r;
    }
    return u = e.child, e = u.sibling, r = $t(u, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function ti(e, t) {
    return t = El({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function al(e, t, n, r) {
    return r !== null && zu(r), _n(t, e.child, null, n), e = ti(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function mc(e, t, n, r, l, u, i) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = Gu(Error(p(422))), al(e, t, i, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (u = r.fallback, l = t.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), u = un(u, l, i, null), u.flags |= 2, r.return = t, u.return = t, r.sibling = u, t.child = r, t.mode & 1 && _n(t, e.child, null, i), t.child.memoizedState = ei(i), t.memoizedState = bu, u);
    if (!(t.mode & 1)) return al(e, t, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
      return r = o, u = Error(p(419)), r = Gu(u, r, void 0), al(e, t, i, r);
    }
    if (o = (i & e.childLanes) !== 0, je || o) {
      if (r = pe, r !== null) {
        switch (i & -i) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, Et(e, l), ot(r, e, l, -1));
      }
      return yi(), r = Gu(Error(p(421))), al(e, t, i, r);
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Nc.bind(null, e), l._reactRetry = t, null) : (e = u.treeContext, He = jt(l.nextSibling), Ae = t, q = !0, rt = null, e !== null && (Ke[Ye++] = St, Ke[Ye++] = kt, Ke[Ye++] = Zt, St = e.id, kt = e.overflow, Zt = t), t = ti(t, r.children), t.flags |= 4096, t);
  }
  function Zs(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ou(e.return, t, n);
  }
  function ni(e, t, n, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: l } : (u.isBackwards = t, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = n, u.tailMode = l);
  }
  function Js(e, t, n) {
    var r = t.pendingProps, l = r.revealOrder, u = r.tail;
    if (Ne(e, t, r.children, n), r = te.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Zs(e, n, t);
        else if (e.tag === 19) Zs(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (K(te, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; ) e = n.alternate, e !== null && nl(e) === null && (l = n), n = n.sibling;
        n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), ni(t, !1, l, n, u);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && nl(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        ni(t, !0, n, null, u);
        break;
      case "together":
        ni(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function fl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function _t(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), tn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(p(153));
    if (t.child !== null) {
      for (e = t.child, n = $t(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; ) e = e.sibling, n = n.sibling = $t(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function hc(e, t, n) {
    switch (t.tag) {
      case 3:
        Ys(t), xn();
        break;
      case 5:
        cs(t);
        break;
      case 1:
        Oe(t.type) && Kr(t);
        break;
      case 4:
        Du(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, l = t.memoizedProps.value;
        K(qr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (K(te, te.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Gs(e, t, n) : (K(te, te.current & 1), e = _t(e, t, n), e !== null ? e.sibling : null);
        K(te, te.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r) return Js(e, t, n);
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), K(te, te.current), r) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, $s(e, t, n);
    }
    return _t(e, t, n);
  }
  var qs, ri, bs, ea;
  qs = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, ri = function() {
  }, bs = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = t.stateNode, bt(pt.current);
      var u = null;
      switch (n) {
        case "input":
          l = Ol(e, l), r = Ol(e, r), u = [];
          break;
        case "select":
          l = C({}, l, { value: void 0 }), r = C({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Dl(e, l), r = Dl(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wr);
      }
      Fl(n, r);
      var i;
      n = null;
      for (m in l) if (!r.hasOwnProperty(m) && l.hasOwnProperty(m) && l[m] != null) if (m === "style") {
        var o = l[m];
        for (i in o) o.hasOwnProperty(i) && (n || (n = {}), n[i] = "");
      } else m !== "dangerouslySetInnerHTML" && m !== "children" && m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && m !== "autoFocus" && (b.hasOwnProperty(m) ? u || (u = []) : (u = u || []).push(m, null));
      for (m in r) {
        var s = r[m];
        if (o = l?.[m], r.hasOwnProperty(m) && s !== o && (s != null || o != null)) if (m === "style") if (o) {
          for (i in o) !o.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (n || (n = {}), n[i] = "");
          for (i in s) s.hasOwnProperty(i) && o[i] !== s[i] && (n || (n = {}), n[i] = s[i]);
        } else n || (u || (u = []), u.push(
          m,
          n
        )), n = s;
        else m === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, o = o ? o.__html : void 0, s != null && o !== s && (u = u || []).push(m, s)) : m === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(m, "" + s) : m !== "suppressContentEditableWarning" && m !== "suppressHydrationWarning" && (b.hasOwnProperty(m) ? (s != null && m === "onScroll" && Y("scroll", e), u || o === s || (u = [])) : (u = u || []).push(m, s));
      }
      n && (u = u || []).push("style", n);
      var m = u;
      (t.updateQueue = m) && (t.flags |= 4);
    }
  }, ea = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function dr(e, t) {
    if (!q) switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; ) t.alternate !== null && (n = t), t = t.sibling;
        n === null ? e.tail = null : n.sibling = null;
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; ) n.alternate !== null && (r = n), n = n.sibling;
        r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function Ee(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t) for (var l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function vc(e, t, n) {
    var r = t.pendingProps;
    switch (Cu(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ee(t), null;
      case 1:
        return Oe(t.type) && Qr(), Ee(t), null;
      case 3:
        return r = t.stateNode, Nn(), X(Re), X(Se), Uu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, rt !== null && (mi(rt), rt = null))), ri(e, t), Ee(t), null;
      case 5:
        Iu(t);
        var l = bt(or.current);
        if (n = t.type, e !== null && t.stateNode != null) bs(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(p(166));
            return Ee(t), null;
          }
          if (e = bt(pt.current), Zr(t)) {
            r = t.stateNode, n = t.type;
            var u = t.memoizedProps;
            switch (r[dt] = t, r[nr] = u, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Y("cancel", r), Y("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Y("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bn.length; l++) Y(bn[l], r);
                break;
              case "source":
                Y("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Y(
                  "error",
                  r
                ), Y("load", r);
                break;
              case "details":
                Y("toggle", r);
                break;
              case "input":
                ji(r, u), Y("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, Y("invalid", r);
                break;
              case "textarea":
                Ii(r, u), Y("invalid", r);
            }
            Fl(n, u), l = null;
            for (var i in u) if (u.hasOwnProperty(i)) {
              var o = u[i];
              i === "children" ? typeof o == "string" ? r.textContent !== o && (u.suppressHydrationWarning !== !0 && Br(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (u.suppressHydrationWarning !== !0 && Br(
                r.textContent,
                o,
                e
              ), l = ["children", "" + o]) : b.hasOwnProperty(i) && o != null && i === "onScroll" && Y("scroll", r);
            }
            switch (n) {
              case "input":
                wr(r), Di(r, u, !0);
                break;
              case "textarea":
                wr(r), Ui(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Wr);
            }
            r = l, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Vi(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(n, { is: r.is }) : (e = i.createElement(n), n === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, n), e[dt] = t, e[nr] = r, qs(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (i = Ul(n, r), n) {
                case "dialog":
                  Y("cancel", e), Y("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Y("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bn.length; l++) Y(bn[l], e);
                  l = r;
                  break;
                case "source":
                  Y("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Y(
                    "error",
                    e
                  ), Y("load", e), l = r;
                  break;
                case "details":
                  Y("toggle", e), l = r;
                  break;
                case "input":
                  ji(e, r), l = Ol(e, r), Y("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = C({}, r, { value: void 0 }), Y("invalid", e);
                  break;
                case "textarea":
                  Ii(e, r), l = Dl(e, r), Y("invalid", e);
                  break;
                default:
                  l = r;
              }
              Fl(n, l), o = l;
              for (u in o) if (o.hasOwnProperty(u)) {
                var s = o[u];
                u === "style" ? Bi(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Ai(e, s)) : u === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Mn(e, s) : typeof s == "number" && Mn(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (b.hasOwnProperty(u) ? s != null && u === "onScroll" && Y("scroll", e) : s != null && qe(e, u, s, i));
              }
              switch (n) {
                case "input":
                  wr(e), Di(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Ui(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + B(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? sn(e, !!r.multiple, u, !1) : r.defaultValue != null && sn(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Wr);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return Ee(t), null;
      case 6:
        if (e && t.stateNode != null) ea(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(p(166));
          if (n = bt(or.current), bt(pt.current), Zr(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[dt] = t, (u = r.nodeValue !== n) && (e = Ae, e !== null)) switch (e.tag) {
              case 3:
                Br(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, n, (e.mode & 1) !== 0);
            }
            u && (t.flags |= 4);
          } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[dt] = t, t.stateNode = r;
        }
        return Ee(t), null;
      case 13:
        if (X(te), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (q && He !== null && t.mode & 1 && !(t.flags & 128)) rs(), xn(), t.flags |= 98560, u = !1;
          else if (u = Zr(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(p(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(p(317));
              u[dt] = t;
            } else xn(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            Ee(t), u = !1;
          } else rt !== null && (mi(rt), rt = null), u = !0;
          if (!u) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || te.current & 1 ? ce === 0 && (ce = 3) : yi())), t.updateQueue !== null && (t.flags |= 4), Ee(t), null);
      case 4:
        return Nn(), ri(e, t), e === null && er(t.stateNode.containerInfo), Ee(t), null;
      case 10:
        return Ru(t.type._context), Ee(t), null;
      case 17:
        return Oe(t.type) && Qr(), Ee(t), null;
      case 19:
        if (X(te), u = t.memoizedState, u === null) return Ee(t), null;
        if (r = (t.flags & 128) !== 0, i = u.rendering, i === null) if (r) dr(u, !1);
        else {
          if (ce !== 0 || e !== null && e.flags & 128) for (e = t.child; e !== null; ) {
            if (i = nl(e), i !== null) {
              for (t.flags |= 128, dr(u, !1), r = i.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; ) u = n, e = r, u.flags &= 14680066, i = u.alternate, i === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, u.type = i.type, e = i.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
              return K(te, te.current & 1 | 2), t.child;
            }
            e = e.sibling;
          }
          u.tail !== null && ie() > Rn && (t.flags |= 128, r = !0, dr(u, !1), t.lanes = 4194304);
        }
        else {
          if (!r) if (e = nl(i), e !== null) {
            if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), dr(u, !0), u.tail === null && u.tailMode === "hidden" && !i.alternate && !q) return Ee(t), null;
          } else 2 * ie() - u.renderingStartTime > Rn && n !== 1073741824 && (t.flags |= 128, r = !0, dr(u, !1), t.lanes = 4194304);
          u.isBackwards ? (i.sibling = t.child, t.child = i) : (n = u.last, n !== null ? n.sibling = i : t.child = i, u.last = i);
        }
        return u.tail !== null ? (t = u.tail, u.rendering = t, u.tail = t.sibling, u.renderingStartTime = ie(), t.sibling = null, n = te.current, K(te, r ? n & 1 | 2 : n & 1), t) : (Ee(t), null);
      case 22:
      case 23:
        return vi(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Be & 1073741824 && (Ee(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ee(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(p(156, t.tag));
  }
  function yc(e, t) {
    switch (Cu(t), t.tag) {
      case 1:
        return Oe(t.type) && Qr(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Nn(), X(Re), X(Se), Uu(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return Iu(t), null;
      case 13:
        if (X(te), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null) throw Error(p(340));
          xn();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return X(te), null;
      case 4:
        return Nn(), null;
      case 10:
        return Ru(t.type._context), null;
      case 22:
      case 23:
        return vi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var cl = !1, xe = !1, gc = typeof WeakSet == "function" ? WeakSet : Set, _ = null;
  function Tn(e, t) {
    var n = e.ref;
    if (n !== null) if (typeof n == "function") try {
      n(null);
    } catch (r) {
      le(e, t, r);
    }
    else n.current = null;
  }
  function li(e, t, n) {
    try {
      n();
    } catch (r) {
      le(e, t, r);
    }
  }
  var ta = !1;
  function wc(e, t) {
    if (vu = Rr, e = jo(), su(e)) {
      if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        n = (n = e.ownerDocument) && n.defaultView || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, u.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0, o = -1, s = -1, m = 0, g = 0, w = e, v = null;
          t: for (; ; ) {
            for (var E; w !== n || l !== 0 && w.nodeType !== 3 || (o = i + l), w !== u || r !== 0 && w.nodeType !== 3 || (s = i + r), w.nodeType === 3 && (i += w.nodeValue.length), (E = w.firstChild) !== null; )
              v = w, w = E;
            for (; ; ) {
              if (w === e) break t;
              if (v === n && ++m === l && (o = i), v === u && ++g === r && (s = i), (E = w.nextSibling) !== null) break;
              w = v, v = w.parentNode;
            }
            w = E;
          }
          n = o === -1 || s === -1 ? null : { start: o, end: s };
        } else n = null;
      }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (yu = { focusedElem: e, selectionRange: n }, Rr = !1, _ = t; _ !== null; ) if (t = _, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, _ = e;
    else for (; _ !== null; ) {
      t = _;
      try {
        var P = t.alternate;
        if (t.flags & 1024) switch (t.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (P !== null) {
              var N = P.memoizedProps, oe = P.memoizedState, c = t.stateNode, a = c.getSnapshotBeforeUpdate(t.elementType === t.type ? N : lt(t.type, N), oe);
              c.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var d = t.stateNode.containerInfo;
            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(p(163));
        }
      } catch (S) {
        le(t, t.return, S);
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, _ = e;
        break;
      }
      _ = t.return;
    }
    return P = ta, ta = !1, P;
  }
  function pr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && li(t, n, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function ui(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function na(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, na(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[dt], delete t[nr], delete t[ku], delete t[tc], delete t[nc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function ra(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function la(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || ra(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ii(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wr));
    else if (r !== 4 && (e = e.child, e !== null)) for (ii(e, t, n), e = e.sibling; e !== null; ) ii(e, t, n), e = e.sibling;
  }
  function oi(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (oi(e, t, n), e = e.sibling; e !== null; ) oi(e, t, n), e = e.sibling;
  }
  var he = null, ut = !1;
  function Vt(e, t, n) {
    for (n = n.child; n !== null; ) ua(e, t, n), n = n.sibling;
  }
  function ua(e, t, n) {
    if (ct && typeof ct.onCommitFiberUnmount == "function") try {
      ct.onCommitFiberUnmount(Cr, n);
    } catch {
    }
    switch (n.tag) {
      case 5:
        xe || Tn(n, t);
      case 6:
        var r = he, l = ut;
        he = null, Vt(e, t, n), he = r, ut = l, he !== null && (ut ? (e = he, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : he.removeChild(n.stateNode));
        break;
      case 18:
        he !== null && (ut ? (e = he, n = n.stateNode, e.nodeType === 8 ? Su(e.parentNode, n) : e.nodeType === 1 && Su(e, n), Qn(e)) : Su(he, n.stateNode));
        break;
      case 4:
        r = he, l = ut, he = n.stateNode.containerInfo, ut = !0, Vt(e, t, n), he = r, ut = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!xe && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, i = u.destroy;
            u = u.tag, i !== void 0 && (u & 2 || u & 4) && li(n, t, i), l = l.next;
          } while (l !== r);
        }
        Vt(e, t, n);
        break;
      case 1:
        if (!xe && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
        } catch (o) {
          le(n, t, o);
        }
        Vt(e, t, n);
        break;
      case 21:
        Vt(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (xe = (r = xe) || n.memoizedState !== null, Vt(e, t, n), xe = r) : Vt(e, t, n);
        break;
      default:
        Vt(e, t, n);
    }
  }
  function ia(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new gc()), t.forEach(function(r) {
        var l = zc.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
    }
  }
  function it(e, t) {
    var n = t.deletions;
    if (n !== null) for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var u = e, i = t, o = i;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              he = o.stateNode, ut = !1;
              break e;
            case 3:
              he = o.stateNode.containerInfo, ut = !0;
              break e;
            case 4:
              he = o.stateNode.containerInfo, ut = !0;
              break e;
          }
          o = o.return;
        }
        if (he === null) throw Error(p(160));
        ua(u, i, l), he = null, ut = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (m) {
        le(l, t, m);
      }
    }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) oa(t, e), t = t.sibling;
  }
  function oa(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (it(t, e), ht(e), r & 4) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (N) {
            le(e, e.return, N);
          }
          try {
            pr(5, e, e.return);
          } catch (N) {
            le(e, e.return, N);
          }
        }
        break;
      case 1:
        it(t, e), ht(e), r & 512 && n !== null && Tn(n, n.return);
        break;
      case 5:
        if (it(t, e), ht(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Mn(l, "");
          } catch (N) {
            le(e, e.return, N);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, i = n !== null ? n.memoizedProps : u, o = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            o === "input" && u.type === "radio" && u.name != null && Mi(l, u), Ul(o, i);
            var m = Ul(o, u);
            for (i = 0; i < s.length; i += 2) {
              var g = s[i], w = s[i + 1];
              g === "style" ? Bi(l, w) : g === "dangerouslySetInnerHTML" ? Ai(l, w) : g === "children" ? Mn(l, w) : qe(l, g, w, m);
            }
            switch (o) {
              case "input":
                jl(l, u);
                break;
              case "textarea":
                Fi(l, u);
                break;
              case "select":
                var v = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var E = u.value;
                E != null ? sn(l, !!u.multiple, E, !1) : v !== !!u.multiple && (u.defaultValue != null ? sn(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : sn(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[nr] = u;
          } catch (N) {
            le(e, e.return, N);
          }
        }
        break;
      case 6:
        if (it(t, e), ht(e), r & 4) {
          if (e.stateNode === null) throw Error(p(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (N) {
            le(e, e.return, N);
          }
        }
        break;
      case 3:
        if (it(t, e), ht(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
          Qn(t.containerInfo);
        } catch (N) {
          le(e, e.return, N);
        }
        break;
      case 4:
        it(t, e), ht(e);
        break;
      case 13:
        it(t, e), ht(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (fi = ie())), r & 4 && ia(e);
        break;
      case 22:
        if (g = n !== null && n.memoizedState !== null, e.mode & 1 ? (xe = (m = xe) || g, it(t, e), xe = m) : it(t, e), ht(e), r & 8192) {
          if (m = e.memoizedState !== null, (e.stateNode.isHidden = m) && !g && e.mode & 1) for (_ = e, g = e.child; g !== null; ) {
            for (w = _ = g; _ !== null; ) {
              switch (v = _, E = v.child, v.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  pr(4, v, v.return);
                  break;
                case 1:
                  Tn(v, v.return);
                  var P = v.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    r = v, n = v.return;
                    try {
                      t = r, P.props = t.memoizedProps, P.state = t.memoizedState, P.componentWillUnmount();
                    } catch (N) {
                      le(r, n, N);
                    }
                  }
                  break;
                case 5:
                  Tn(v, v.return);
                  break;
                case 22:
                  if (v.memoizedState !== null) {
                    fa(w);
                    continue;
                  }
              }
              E !== null ? (E.return = v, _ = E) : fa(w);
            }
            g = g.sibling;
          }
          e: for (g = null, w = e; ; ) {
            if (w.tag === 5) {
              if (g === null) {
                g = w;
                try {
                  l = w.stateNode, m ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (o = w.stateNode, s = w.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, o.style.display = Hi("display", i));
                } catch (N) {
                  le(e, e.return, N);
                }
              }
            } else if (w.tag === 6) {
              if (g === null) try {
                w.stateNode.nodeValue = m ? "" : w.memoizedProps;
              } catch (N) {
                le(e, e.return, N);
              }
            } else if ((w.tag !== 22 && w.tag !== 23 || w.memoizedState === null || w === e) && w.child !== null) {
              w.child.return = w, w = w.child;
              continue;
            }
            if (w === e) break e;
            for (; w.sibling === null; ) {
              if (w.return === null || w.return === e) break e;
              g === w && (g = null), w = w.return;
            }
            g === w && (g = null), w.sibling.return = w.return, w = w.sibling;
          }
        }
        break;
      case 19:
        it(t, e), ht(e), r & 4 && ia(e);
        break;
      case 21:
        break;
      default:
        it(
          t,
          e
        ), ht(e);
    }
  }
  function ht(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (ra(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(p(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Mn(l, ""), r.flags &= -33);
            var u = la(e);
            oi(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, o = la(e);
            ii(e, o, i);
            break;
          default:
            throw Error(p(161));
        }
      } catch (s) {
        le(e, e.return, s);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Sc(e, t, n) {
    _ = e, sa(e);
  }
  function sa(e, t, n) {
    for (var r = (e.mode & 1) !== 0; _ !== null; ) {
      var l = _, u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || cl;
        if (!i) {
          var o = l.alternate, s = o !== null && o.memoizedState !== null || xe;
          o = cl;
          var m = xe;
          if (cl = i, (xe = s) && !m) for (_ = l; _ !== null; ) i = _, s = i.child, i.tag === 22 && i.memoizedState !== null ? ca(l) : s !== null ? (s.return = i, _ = s) : ca(l);
          for (; u !== null; ) _ = u, sa(u), u = u.sibling;
          _ = l, cl = o, xe = m;
        }
        aa(e);
      } else l.subtreeFlags & 8772 && u !== null ? (u.return = l, _ = u) : aa(e);
    }
  }
  function aa(e) {
    for (; _ !== null; ) {
      var t = _;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772) switch (t.tag) {
            case 0:
            case 11:
            case 15:
              xe || dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !xe) if (n === null) r.componentDidMount();
              else {
                var l = t.elementType === t.type ? n.memoizedProps : lt(t.type, n.memoizedProps);
                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = t.updateQueue;
              u !== null && fs(t, u, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (n = null, t.child !== null) switch (t.child.tag) {
                  case 5:
                    n = t.child.stateNode;
                    break;
                  case 1:
                    n = t.child.stateNode;
                }
                fs(t, i, n);
              }
              break;
            case 5:
              var o = t.stateNode;
              if (n === null && t.flags & 4) {
                n = o;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var m = t.alternate;
                if (m !== null) {
                  var g = m.memoizedState;
                  if (g !== null) {
                    var w = g.dehydrated;
                    w !== null && Qn(w);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
          xe || t.flags & 512 && ui(t);
        } catch (v) {
          le(t, t.return, v);
        }
      }
      if (t === e) {
        _ = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, _ = n;
        break;
      }
      _ = t.return;
    }
  }
  function fa(e) {
    for (; _ !== null; ) {
      var t = _;
      if (t === e) {
        _ = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, _ = n;
        break;
      }
      _ = t.return;
    }
  }
  function ca(e) {
    for (; _ !== null; ) {
      var t = _;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              dl(4, t);
            } catch (s) {
              le(t, n, s);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = t.return;
              try {
                r.componentDidMount();
              } catch (s) {
                le(t, l, s);
              }
            }
            var u = t.return;
            try {
              ui(t);
            } catch (s) {
              le(t, u, s);
            }
            break;
          case 5:
            var i = t.return;
            try {
              ui(t);
            } catch (s) {
              le(t, i, s);
            }
        }
      } catch (s) {
        le(t, t.return, s);
      }
      if (t === e) {
        _ = null;
        break;
      }
      var o = t.sibling;
      if (o !== null) {
        o.return = t.return, _ = o;
        break;
      }
      _ = t.return;
    }
  }
  var kc = Math.ceil, pl = we.ReactCurrentDispatcher, si = we.ReactCurrentOwner, Ze = we.ReactCurrentBatchConfig, U = 0, pe = null, se = null, ve = 0, Be = 0, Ln = Mt(0), ce = 0, mr = null, tn = 0, ml = 0, ai = 0, hr = null, Me = null, fi = 0, Rn = 1 / 0, Ct = null, hl = !1, ci = null, At = null, vl = !1, Ht = null, yl = 0, vr = 0, di = null, gl = -1, wl = 0;
  function ze() {
    return U & 6 ? ie() : gl !== -1 ? gl : gl = ie();
  }
  function Bt(e) {
    return e.mode & 1 ? U & 2 && ve !== 0 ? ve & -ve : lc.transition !== null ? (wl === 0 && (wl = ro()), wl) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : po(e.type)), e) : 1;
  }
  function ot(e, t, n, r) {
    if (50 < vr) throw vr = 0, di = null, Error(p(185));
    An(e, n, r), (!(U & 2) || e !== pe) && (e === pe && (!(U & 2) && (ml |= n), ce === 4 && Wt(e, ve)), De(e, r), n === 1 && U === 0 && !(t.mode & 1) && (Rn = ie() + 500, Yr && It()));
  }
  function De(e, t) {
    var n = e.callbackNode;
    rf(e, t);
    var r = zr(e, e === pe ? ve : 0);
    if (r === 0) n !== null && eo(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && eo(n), t === 1) e.tag === 0 ? rc(pa.bind(null, e)) : qo(pa.bind(null, e)), bf(function() {
        !(U & 6) && It();
      }), n = null;
      else {
        switch (lo(r)) {
          case 1:
            n = Ql;
            break;
          case 4:
            n = to;
            break;
          case 16:
            n = _r;
            break;
          case 536870912:
            n = no;
            break;
          default:
            n = _r;
        }
        n = ka(n, da.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function da(e, t) {
    if (gl = -1, wl = 0, U & 6) throw Error(p(327));
    var n = e.callbackNode;
    if (On() && e.callbackNode !== n) return null;
    var r = zr(e, e === pe ? ve : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = Sl(e, r);
    else {
      t = r;
      var l = U;
      U |= 2;
      var u = ha();
      (pe !== e || ve !== t) && (Ct = null, Rn = ie() + 500, rn(e, t));
      do
        try {
          _c();
          break;
        } catch (o) {
          ma(e, o);
        }
      while (!0);
      Lu(), pl.current = u, U = l, se !== null ? t = 0 : (pe = null, ve = 0, t = ce);
    }
    if (t !== 0) {
      if (t === 2 && (l = Kl(e), l !== 0 && (r = l, t = pi(e, l))), t === 1) throw n = mr, rn(e, 0), Wt(e, r), De(e, ie()), n;
      if (t === 6) Wt(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !Ec(l) && (t = Sl(e, r), t === 2 && (u = Kl(e), u !== 0 && (r = u, t = pi(e, u))), t === 1)) throw n = mr, rn(e, 0), Wt(e, r), De(e, ie()), n;
        switch (e.finishedWork = l, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(p(345));
          case 2:
            ln(e, Me, Ct);
            break;
          case 3:
            if (Wt(e, r), (r & 130023424) === r && (t = fi + 500 - ie(), 10 < t)) {
              if (zr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                ze(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = wu(ln.bind(null, e, Me, Ct), t);
              break;
            }
            ln(e, Me, Ct);
            break;
          case 4:
            if (Wt(e, r), (r & 4194240) === r) break;
            for (t = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - tt(r);
              u = 1 << i, i = t[i], i > l && (l = i), r &= ~u;
            }
            if (r = l, r = ie() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * kc(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = wu(ln.bind(null, e, Me, Ct), r);
              break;
            }
            ln(e, Me, Ct);
            break;
          case 5:
            ln(e, Me, Ct);
            break;
          default:
            throw Error(p(329));
        }
      }
    }
    return De(e, ie()), e.callbackNode === n ? da.bind(null, e) : null;
  }
  function pi(e, t) {
    var n = hr;
    return e.current.memoizedState.isDehydrated && (rn(e, t).flags |= 256), e = Sl(e, t), e !== 2 && (t = Me, Me = n, t !== null && mi(t)), e;
  }
  function mi(e) {
    Me === null ? Me = e : Me.push.apply(Me, e);
  }
  function Ec(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null)) for (var r = 0; r < n.length; r++) {
          var l = n[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!nt(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Wt(e, t) {
    for (t &= ~ai, t &= ~ml, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - tt(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function pa(e) {
    if (U & 6) throw Error(p(327));
    On();
    var t = zr(e, 0);
    if (!(t & 1)) return De(e, ie()), null;
    var n = Sl(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Kl(e);
      r !== 0 && (t = r, n = pi(e, r));
    }
    if (n === 1) throw n = mr, rn(e, 0), Wt(e, t), De(e, ie()), n;
    if (n === 6) throw Error(p(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, ln(e, Me, Ct), De(e, ie()), null;
  }
  function hi(e, t) {
    var n = U;
    U |= 1;
    try {
      return e(t);
    } finally {
      U = n, U === 0 && (Rn = ie() + 500, Yr && It());
    }
  }
  function nn(e) {
    Ht !== null && Ht.tag === 0 && !(U & 6) && On();
    var t = U;
    U |= 1;
    var n = Ze.transition, r = W;
    try {
      if (Ze.transition = null, W = 1, e) return e();
    } finally {
      W = r, Ze.transition = n, U = t, !(U & 6) && It();
    }
  }
  function vi() {
    Be = Ln.current, X(Ln);
  }
  function rn(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, qf(n)), se !== null) for (n = se.return; n !== null; ) {
      var r = n;
      switch (Cu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Qr();
          break;
        case 3:
          Nn(), X(Re), X(Se), Uu();
          break;
        case 5:
          Iu(r);
          break;
        case 4:
          Nn();
          break;
        case 13:
          X(te);
          break;
        case 19:
          X(te);
          break;
        case 10:
          Ru(r.type._context);
          break;
        case 22:
        case 23:
          vi();
      }
      n = n.return;
    }
    if (pe = e, se = e = $t(e.current, null), ve = Be = t, ce = 0, mr = null, ai = ml = tn = 0, Me = hr = null, qt !== null) {
      for (t = 0; t < qt.length; t++) if (n = qt[t], r = n.interleaved, r !== null) {
        n.interleaved = null;
        var l = r.next, u = n.pending;
        if (u !== null) {
          var i = u.next;
          u.next = l, r.next = i;
        }
        n.pending = r;
      }
      qt = null;
    }
    return e;
  }
  function ma(e, t) {
    do {
      var n = se;
      try {
        if (Lu(), rl.current = ol, ll) {
          for (var r = ne.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ll = !1;
        }
        if (en = 0, de = fe = ne = null, sr = !1, ar = 0, si.current = null, n === null || n.return === null) {
          ce = 1, mr = t, se = null;
          break;
        }
        e: {
          var u = e, i = n.return, o = n, s = t;
          if (t = ve, o.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var m = s, g = o, w = g.tag;
            if (!(g.mode & 1) && (w === 0 || w === 11 || w === 15)) {
              var v = g.alternate;
              v ? (g.updateQueue = v.updateQueue, g.memoizedState = v.memoizedState, g.lanes = v.lanes) : (g.updateQueue = null, g.memoizedState = null);
            }
            var E = Vs(i);
            if (E !== null) {
              E.flags &= -257, As(E, i, o, u, t), E.mode & 1 && Us(u, m, t), t = E, s = m;
              var P = t.updateQueue;
              if (P === null) {
                var N = /* @__PURE__ */ new Set();
                N.add(s), t.updateQueue = N;
              } else P.add(s);
              break e;
            } else {
              if (!(t & 1)) {
                Us(u, m, t), yi();
                break e;
              }
              s = Error(p(426));
            }
          } else if (q && o.mode & 1) {
            var oe = Vs(i);
            if (oe !== null) {
              !(oe.flags & 65536) && (oe.flags |= 256), As(oe, i, o, u, t), zu(zn(s, o));
              break e;
            }
          }
          u = s = zn(s, o), ce !== 4 && (ce = 2), hr === null ? hr = [u] : hr.push(u), u = i;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, t &= -t, u.lanes |= t;
                var c = Is(u, s, t);
                as(u, c);
                break e;
              case 1:
                o = s;
                var a = u.type, d = u.stateNode;
                if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (At === null || !At.has(d)))) {
                  u.flags |= 65536, t &= -t, u.lanes |= t;
                  var S = Fs(u, o, t);
                  as(u, S);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        ya(n);
      } catch (z) {
        t = z, se === n && n !== null && (se = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function ha() {
    var e = pl.current;
    return pl.current = ol, e === null ? ol : e;
  }
  function yi() {
    (ce === 0 || ce === 3 || ce === 2) && (ce = 4), pe === null || !(tn & 268435455) && !(ml & 268435455) || Wt(pe, ve);
  }
  function Sl(e, t) {
    var n = U;
    U |= 2;
    var r = ha();
    (pe !== e || ve !== t) && (Ct = null, rn(e, t));
    do
      try {
        xc();
        break;
      } catch (l) {
        ma(e, l);
      }
    while (!0);
    if (Lu(), U = n, pl.current = r, se !== null) throw Error(p(261));
    return pe = null, ve = 0, ce;
  }
  function xc() {
    for (; se !== null; ) va(se);
  }
  function _c() {
    for (; se !== null && !Xa(); ) va(se);
  }
  function va(e) {
    var t = Sa(e.alternate, e, Be);
    e.memoizedProps = e.pendingProps, t === null ? ya(e) : se = t, si.current = null;
  }
  function ya(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = yc(n, t), n !== null) {
          n.flags &= 32767, se = n;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ce = 6, se = null;
          return;
        }
      } else if (n = vc(n, t, Be), n !== null) {
        se = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        se = t;
        return;
      }
      se = t = e;
    } while (t !== null);
    ce === 0 && (ce = 5);
  }
  function ln(e, t, n) {
    var r = W, l = Ze.transition;
    try {
      Ze.transition = null, W = 1, Cc(e, t, n, r);
    } finally {
      Ze.transition = l, W = r;
    }
    return null;
  }
  function Cc(e, t, n, r) {
    do
      On();
    while (Ht !== null);
    if (U & 6) throw Error(p(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(p(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = n.lanes | n.childLanes;
    if (lf(e, u), e === pe && (se = pe = null, ve = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || vl || (vl = !0, ka(_r, function() {
      return On(), null;
    })), u = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || u) {
      u = Ze.transition, Ze.transition = null;
      var i = W;
      W = 1;
      var o = U;
      U |= 4, si.current = null, wc(e, n), oa(n, e), Qf(yu), Rr = !!vu, yu = vu = null, e.current = n, Sc(n), Ga(), U = o, W = i, Ze.transition = u;
    } else e.current = n;
    if (vl && (vl = !1, Ht = e, yl = l), u = e.pendingLanes, u === 0 && (At = null), qa(n.stateNode), De(e, ie()), t !== null) for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl) throw hl = !1, e = ci, ci = null, e;
    return yl & 1 && e.tag !== 0 && On(), u = e.pendingLanes, u & 1 ? e === di ? vr++ : (vr = 0, di = e) : vr = 0, It(), null;
  }
  function On() {
    if (Ht !== null) {
      var e = lo(yl), t = Ze.transition, n = W;
      try {
        if (Ze.transition = null, W = 16 > e ? 16 : e, Ht === null) var r = !1;
        else {
          if (e = Ht, Ht = null, yl = 0, U & 6) throw Error(p(331));
          var l = U;
          for (U |= 4, _ = e.current; _ !== null; ) {
            var u = _, i = u.child;
            if (_.flags & 16) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var m = o[s];
                  for (_ = m; _ !== null; ) {
                    var g = _;
                    switch (g.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, g, u);
                    }
                    var w = g.child;
                    if (w !== null) w.return = g, _ = w;
                    else for (; _ !== null; ) {
                      g = _;
                      var v = g.sibling, E = g.return;
                      if (na(g), g === m) {
                        _ = null;
                        break;
                      }
                      if (v !== null) {
                        v.return = E, _ = v;
                        break;
                      }
                      _ = E;
                    }
                  }
                }
                var P = u.alternate;
                if (P !== null) {
                  var N = P.child;
                  if (N !== null) {
                    P.child = null;
                    do {
                      var oe = N.sibling;
                      N.sibling = null, N = oe;
                    } while (N !== null);
                  }
                }
                _ = u;
              }
            }
            if (u.subtreeFlags & 2064 && i !== null) i.return = u, _ = i;
            else e: for (; _ !== null; ) {
              if (u = _, u.flags & 2048) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  pr(9, u, u.return);
              }
              var c = u.sibling;
              if (c !== null) {
                c.return = u.return, _ = c;
                break e;
              }
              _ = u.return;
            }
          }
          var a = e.current;
          for (_ = a; _ !== null; ) {
            i = _;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) d.return = i, _ = d;
            else e: for (i = a; _ !== null; ) {
              if (o = _, o.flags & 2048) try {
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    dl(9, o);
                }
              } catch (z) {
                le(o, o.return, z);
              }
              if (o === i) {
                _ = null;
                break e;
              }
              var S = o.sibling;
              if (S !== null) {
                S.return = o.return, _ = S;
                break e;
              }
              _ = o.return;
            }
          }
          if (U = l, It(), ct && typeof ct.onPostCommitFiberRoot == "function") try {
            ct.onPostCommitFiberRoot(Cr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        W = n, Ze.transition = t;
      }
    }
    return !1;
  }
  function ga(e, t, n) {
    t = zn(n, t), t = Is(e, t, 1), e = Ut(e, t, 1), t = ze(), e !== null && (An(e, 1, t), De(e, t));
  }
  function le(e, t, n) {
    if (e.tag === 3) ga(e, e, n);
    else for (; t !== null; ) {
      if (t.tag === 3) {
        ga(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (At === null || !At.has(r))) {
          e = zn(n, e), e = Fs(t, e, 1), t = Ut(t, e, 1), e = ze(), t !== null && (An(t, 1, e), De(t, e));
          break;
        }
      }
      t = t.return;
    }
  }
  function Pc(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = ze(), e.pingedLanes |= e.suspendedLanes & n, pe === e && (ve & n) === n && (ce === 4 || ce === 3 && (ve & 130023424) === ve && 500 > ie() - fi ? rn(e, 0) : ai |= n), De(e, t);
  }
  function wa(e, t) {
    t === 0 && (e.mode & 1 ? (t = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : t = 1);
    var n = ze();
    e = Et(e, t), e !== null && (An(e, t, n), De(e, n));
  }
  function Nc(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), wa(e, n);
  }
  function zc(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(p(314));
    }
    r !== null && r.delete(t), wa(e, n);
  }
  var Sa;
  Sa = function(e, t, n) {
    if (e !== null) if (e.memoizedProps !== t.pendingProps || Re.current) je = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return je = !1, hc(e, t, n);
      je = !!(e.flags & 131072);
    }
    else je = !1, q && t.flags & 1048576 && bo(t, Gr, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        fl(e, t), e = t.pendingProps;
        var l = Sn(t, Se.current);
        Pn(t, n), l = Hu(null, t, r, e, l, n);
        var u = Bu();
        return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Oe(r) ? (u = !0, Kr(t)) : u = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Mu(t), l.updater = sl, t.stateNode = l, l._reactInternals = t, Xu(t, r, e, n), t = qu(null, t, r, !0, u, n)) : (t.tag = 0, q && u && _u(t), Ne(null, t, l, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (fl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Lc(r), e = lt(r, e), l) {
            case 0:
              t = Ju(null, t, r, e, n);
              break e;
            case 1:
              t = Ks(null, t, r, e, n);
              break e;
            case 11:
              t = Hs(null, t, r, e, n);
              break e;
            case 14:
              t = Bs(null, t, r, lt(r.type, e), n);
              break e;
          }
          throw Error(p(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), Ju(e, t, r, l, n);
      case 1:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), Ks(e, t, r, l, n);
      case 3:
        e: {
          if (Ys(t), e === null) throw Error(p(387));
          r = t.pendingProps, u = t.memoizedState, l = u.element, ss(e, t), tl(t, r, null, n);
          var i = t.memoizedState;
          if (r = i.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
            l = zn(Error(p(423)), t), t = Xs(e, t, r, n, l);
            break e;
          } else if (r !== l) {
            l = zn(Error(p(424)), t), t = Xs(e, t, r, n, l);
            break e;
          } else for (He = jt(t.stateNode.containerInfo.firstChild), Ae = t, q = !0, rt = null, n = is(t, null, r, n), t.child = n; n; ) n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (xn(), r === l) {
              t = _t(e, t, n);
              break e;
            }
            Ne(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return cs(t), e === null && Nu(t), r = t.type, l = t.pendingProps, u = e !== null ? e.memoizedProps : null, i = l.children, gu(r, l) ? i = null : u !== null && gu(r, u) && (t.flags |= 32), Qs(e, t), Ne(e, t, i, n), t.child;
      case 6:
        return e === null && Nu(t), null;
      case 13:
        return Gs(e, t, n);
      case 4:
        return Du(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = _n(t, null, r, n) : Ne(e, t, r, n), t.child;
      case 11:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), Hs(e, t, r, l, n);
      case 7:
        return Ne(e, t, t.pendingProps, n), t.child;
      case 8:
        return Ne(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return Ne(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, l = t.pendingProps, u = t.memoizedProps, i = l.value, K(qr, r._currentValue), r._currentValue = i, u !== null) if (nt(u.value, i)) {
            if (u.children === l.children && !Re.current) {
              t = _t(e, t, n);
              break e;
            }
          } else for (u = t.child, u !== null && (u.return = t); u !== null; ) {
            var o = u.dependencies;
            if (o !== null) {
              i = u.child;
              for (var s = o.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (u.tag === 1) {
                    s = xt(-1, n & -n), s.tag = 2;
                    var m = u.updateQueue;
                    if (m !== null) {
                      m = m.shared;
                      var g = m.pending;
                      g === null ? s.next = s : (s.next = g.next, g.next = s), m.pending = s;
                    }
                  }
                  u.lanes |= n, s = u.alternate, s !== null && (s.lanes |= n), Ou(
                    u.return,
                    n,
                    t
                  ), o.lanes |= n;
                  break;
                }
                s = s.next;
              }
            } else if (u.tag === 10) i = u.type === t.type ? null : u.child;
            else if (u.tag === 18) {
              if (i = u.return, i === null) throw Error(p(341));
              i.lanes |= n, o = i.alternate, o !== null && (o.lanes |= n), Ou(i, n, t), i = u.sibling;
            } else i = u.child;
            if (i !== null) i.return = u;
            else for (i = u; i !== null; ) {
              if (i === t) {
                i = null;
                break;
              }
              if (u = i.sibling, u !== null) {
                u.return = i.return, i = u;
                break;
              }
              i = i.return;
            }
            u = i;
          }
          Ne(e, t, l.children, n), t = t.child;
        }
        return t;
      case 9:
        return l = t.type, r = t.pendingProps.children, Pn(t, n), l = Xe(l), r = r(l), t.flags |= 1, Ne(e, t, r, n), t.child;
      case 14:
        return r = t.type, l = lt(r, t.pendingProps), l = lt(r.type, l), Bs(e, t, r, l, n);
      case 15:
        return Ws(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : lt(r, l), fl(e, t), t.tag = 1, Oe(r) ? (e = !0, Kr(t)) : e = !1, Pn(t, n), Ms(t, r, l), Xu(t, r, l, n), qu(null, t, r, !0, e, n);
      case 19:
        return Js(e, t, n);
      case 22:
        return $s(e, t, n);
    }
    throw Error(p(156, t.tag));
  };
  function ka(e, t) {
    return bi(e, t);
  }
  function Tc(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Je(e, t, n, r) {
    return new Tc(e, t, n, r);
  }
  function gi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Lc(e) {
    if (typeof e == "function") return gi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === at) return 11;
      if (e === ft) return 14;
    }
    return 2;
  }
  function $t(e, t) {
    var n = e.alternate;
    return n === null ? (n = Je(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function kl(e, t, n, r, l, u) {
    var i = 2;
    if (r = e, typeof e == "function") gi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case Te:
        return un(n.children, l, u, t);
      case Qe:
        i = 8, l |= 8;
        break;
      case Pt:
        return e = Je(12, n, t, l | 2), e.elementType = Pt, e.lanes = u, e;
      case Fe:
        return e = Je(13, n, t, l), e.elementType = Fe, e.lanes = u, e;
      case et:
        return e = Je(19, n, t, l), e.elementType = et, e.lanes = u, e;
      case re:
        return El(n, l, u, t);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case yt:
            i = 10;
            break e;
          case Kt:
            i = 9;
            break e;
          case at:
            i = 11;
            break e;
          case ft:
            i = 14;
            break e;
          case Le:
            i = 16, r = null;
            break e;
        }
        throw Error(p(130, e == null ? e : typeof e, ""));
    }
    return t = Je(i, n, t, l), t.elementType = e, t.type = r, t.lanes = u, t;
  }
  function un(e, t, n, r) {
    return e = Je(7, e, r, t), e.lanes = n, e;
  }
  function El(e, t, n, r) {
    return e = Je(22, e, r, t), e.elementType = re, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function wi(e, t, n) {
    return e = Je(6, e, null, t), e.lanes = n, e;
  }
  function Si(e, t, n) {
    return t = Je(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Rc(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Yl(0), this.expirationTimes = Yl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function ki(e, t, n, r, l, u, i, o, s) {
    return e = new Rc(e, t, n, o, s), t === 1 ? (t = 1, u === !0 && (t |= 8)) : t = 0, u = Je(3, null, null, t), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Mu(u), e;
  }
  function Oc(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Pe, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function Ea(e) {
    if (!e) return Dt;
    e = e._reactInternals;
    e: {
      if (Yt(e) !== e || e.tag !== 1) throw Error(p(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (Oe(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(p(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (Oe(n)) return Zo(e, n, t);
    }
    return t;
  }
  function xa(e, t, n, r, l, u, i, o, s) {
    return e = ki(n, r, !0, e, l, u, i, o, s), e.context = Ea(null), n = e.current, r = ze(), l = Bt(n), u = xt(r, l), u.callback = t ?? null, Ut(n, u, l), e.current.lanes = l, An(e, l, r), De(e, r), e;
  }
  function xl(e, t, n, r) {
    var l = t.current, u = ze(), i = Bt(l);
    return n = Ea(n), t.context === null ? t.context = n : t.pendingContext = n, t = xt(u, i), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = Ut(l, t, i), e !== null && (ot(e, l, i, u), el(e, l, i)), i;
  }
  function _l(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function _a(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ei(e, t) {
    _a(e, t), (e = e.alternate) && _a(e, t);
  }
  function jc() {
    return null;
  }
  var Ca = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function xi(e) {
    this._internalRoot = e;
  }
  Cl.prototype.render = xi.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(p(409));
    xl(e, t, null, null);
  }, Cl.prototype.unmount = xi.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      nn(function() {
        xl(null, e, null, null);
      }), t[gt] = null;
    }
  };
  function Cl(e) {
    this._internalRoot = e;
  }
  Cl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = oo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Lt.length && t !== 0 && t < Lt[n].priority; n++) ;
      Lt.splice(n, 0, e), n === 0 && fo(e);
    }
  };
  function _i(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Pl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Pa() {
  }
  function Mc(e, t, n, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var m = _l(i);
          u.call(m);
        };
      }
      var i = xa(t, r, e, 0, null, !1, !1, "", Pa);
      return e._reactRootContainer = i, e[gt] = i.current, er(e.nodeType === 8 ? e.parentNode : e), nn(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var m = _l(s);
        o.call(m);
      };
    }
    var s = ki(e, 0, !1, null, null, !1, !1, "", Pa);
    return e._reactRootContainer = s, e[gt] = s.current, er(e.nodeType === 8 ? e.parentNode : e), nn(function() {
      xl(t, s, n, r);
    }), s;
  }
  function Nl(e, t, n, r, l) {
    var u = n._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function() {
          var s = _l(i);
          o.call(s);
        };
      }
      xl(t, i, e, l);
    } else i = Mc(n, t, e, l, r);
    return _l(i);
  }
  uo = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vn(t.pendingLanes);
          n !== 0 && (Xl(t, n | 1), De(t, ie()), !(U & 6) && (Rn = ie() + 500, It()));
        }
        break;
      case 13:
        nn(function() {
          var r = Et(e, 1);
          if (r !== null) {
            var l = ze();
            ot(r, e, 1, l);
          }
        }), Ei(e, 1);
    }
  }, Gl = function(e) {
    if (e.tag === 13) {
      var t = Et(e, 134217728);
      if (t !== null) {
        var n = ze();
        ot(t, e, 134217728, n);
      }
      Ei(e, 134217728);
    }
  }, io = function(e) {
    if (e.tag === 13) {
      var t = Bt(e), n = Et(e, t);
      if (n !== null) {
        var r = ze();
        ot(n, e, t, r);
      }
      Ei(e, t);
    }
  }, oo = function() {
    return W;
  }, so = function(e, t) {
    var n = W;
    try {
      return W = e, t();
    } finally {
      W = n;
    }
  }, Hl = function(e, t, n) {
    switch (t) {
      case "input":
        if (jl(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var l = $r(r);
              if (!l) throw Error(p(90));
              Oi(r), jl(r, l);
            }
          }
        }
        break;
      case "textarea":
        Fi(e, n);
        break;
      case "select":
        t = n.value, t != null && sn(e, !!n.multiple, t, !1);
    }
  }, Ki = hi, Yi = nn;
  var Dc = { usingClientEntryPoint: !1, Events: [rr, gn, $r, $i, Qi, hi] }, yr = { findFiberByHostInstance: Xt, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Ic = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: we.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ji(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance || jc, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber) try {
      Cr = zl.inject(Ic), ct = zl;
    } catch {
    }
  }
  return Ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dc, Ie.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!_i(t)) throw Error(p(200));
    return Oc(e, t, null, n);
  }, Ie.createRoot = function(e, t) {
    if (!_i(e)) throw Error(p(299));
    var n = !1, r = "", l = Ca;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = ki(e, 1, !1, null, null, n, !1, r, l), e[gt] = t.current, er(e.nodeType === 8 ? e.parentNode : e), new xi(t);
  }, Ie.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(p(188)) : (e = Object.keys(e).join(","), Error(p(268, e)));
    return e = Ji(t), e = e === null ? null : e.stateNode, e;
  }, Ie.flushSync = function(e) {
    return nn(e);
  }, Ie.hydrate = function(e, t, n) {
    if (!Pl(t)) throw Error(p(200));
    return Nl(null, e, t, !0, n);
  }, Ie.hydrateRoot = function(e, t, n) {
    if (!_i(e)) throw Error(p(405));
    var r = n != null && n.hydratedSources || null, l = !1, u = "", i = Ca;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onRecoverableError !== void 0 && (i = n.onRecoverableError)), t = xa(t, null, e, 1, n ?? null, l, !1, u, i), e[gt] = t.current, er(e), r) for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(
      n,
      l
    );
    return new Cl(t);
  }, Ie.render = function(e, t, n) {
    if (!Pl(t)) throw Error(p(200));
    return Nl(null, e, t, !1, n);
  }, Ie.unmountComponentAtNode = function(e) {
    if (!Pl(e)) throw Error(p(40));
    return e._reactRootContainer ? (nn(function() {
      Nl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[gt] = null;
      });
    }), !0) : !1;
  }, Ie.unstable_batchedUpdates = hi, Ie.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Pl(n)) throw Error(p(200));
    if (e == null || e._reactInternals === void 0) throw Error(p(38));
    return Nl(e, t, n, !1, r);
  }, Ie.version = "18.3.1-next-f1338f8080-20240426", Ie;
}
var Ma;
function $c() {
  if (Ma) return Ni.exports;
  Ma = 1;
  function h() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h);
      } catch (x) {
        console.error(x);
      }
  }
  return h(), Ni.exports = Wc(), Ni.exports;
}
var Da;
function Qc() {
  if (Da) return Tl;
  Da = 1;
  var h = $c();
  return Tl.createRoot = h.createRoot, Tl.hydrateRoot = h.hydrateRoot, Tl;
}
var Kc = Qc();
const Yc = /* @__PURE__ */ Ua(Kc);
var Xc = Li();
const on = /* @__PURE__ */ Ua(Xc);
var Va = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, Ia = on.createContext && /* @__PURE__ */ on.createContext(Va), Gc = ["attr", "size", "title"];
function Zc(h, x) {
  if (h == null) return {};
  var p = Jc(h, x), j, b;
  if (Object.getOwnPropertySymbols) {
    var ae = Object.getOwnPropertySymbols(h);
    for (b = 0; b < ae.length; b++)
      j = ae[b], !(x.indexOf(j) >= 0) && Object.prototype.propertyIsEnumerable.call(h, j) && (p[j] = h[j]);
  }
  return p;
}
function Jc(h, x) {
  if (h == null) return {};
  var p = {};
  for (var j in h)
    if (Object.prototype.hasOwnProperty.call(h, j)) {
      if (x.indexOf(j) >= 0) continue;
      p[j] = h[j];
    }
  return p;
}
function Ll() {
  return Ll = Object.assign ? Object.assign.bind() : function(h) {
    for (var x = 1; x < arguments.length; x++) {
      var p = arguments[x];
      for (var j in p)
        Object.prototype.hasOwnProperty.call(p, j) && (h[j] = p[j]);
    }
    return h;
  }, Ll.apply(this, arguments);
}
function Fa(h, x) {
  var p = Object.keys(h);
  if (Object.getOwnPropertySymbols) {
    var j = Object.getOwnPropertySymbols(h);
    x && (j = j.filter(function(b) {
      return Object.getOwnPropertyDescriptor(h, b).enumerable;
    })), p.push.apply(p, j);
  }
  return p;
}
function Rl(h) {
  for (var x = 1; x < arguments.length; x++) {
    var p = arguments[x] != null ? arguments[x] : {};
    x % 2 ? Fa(Object(p), !0).forEach(function(j) {
      qc(h, j, p[j]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(p)) : Fa(Object(p)).forEach(function(j) {
      Object.defineProperty(h, j, Object.getOwnPropertyDescriptor(p, j));
    });
  }
  return h;
}
function qc(h, x, p) {
  return x = bc(x), x in h ? Object.defineProperty(h, x, { value: p, enumerable: !0, configurable: !0, writable: !0 }) : h[x] = p, h;
}
function bc(h) {
  var x = ed(h, "string");
  return typeof x == "symbol" ? x : x + "";
}
function ed(h, x) {
  if (typeof h != "object" || !h) return h;
  var p = h[Symbol.toPrimitive];
  if (p !== void 0) {
    var j = p.call(h, x);
    if (typeof j != "object") return j;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (x === "string" ? String : Number)(h);
}
function Aa(h) {
  return h && h.map((x, p) => /* @__PURE__ */ on.createElement(x.tag, Rl({
    key: p
  }, x.attr), Aa(x.child)));
}
function Ri(h) {
  return (x) => /* @__PURE__ */ on.createElement(td, Ll({
    attr: Rl({}, h.attr)
  }, x), Aa(h.child));
}
function td(h) {
  var x = (p) => {
    var {
      attr: j,
      size: b,
      title: ae
    } = h, ye = Zc(h, Gc), ue = b || p.size || "1em", F;
    return p.className && (F = p.className), h.className && (F = (F ? F + " " : "") + h.className), /* @__PURE__ */ on.createElement("svg", Ll({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, p.attr, j, ye, {
      className: F,
      style: Rl(Rl({
        color: h.color || p.color
      }, p.style), h.style),
      height: ue,
      width: ue,
      xmlns: "http://www.w3.org/2000/svg"
    }), ae && /* @__PURE__ */ on.createElement("title", null, ae), h.children);
  };
  return Ia !== void 0 ? /* @__PURE__ */ on.createElement(Ia.Consumer, null, (p) => x(p)) : x(Va);
}
function nd(h) {
  return Ri({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" }, child: [] }] })(h);
}
function rd(h) {
  return Ri({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" }, child: [] }] })(h);
}
function ld(h) {
  return Ri({ attr: { viewBox: "0 0 24 24" }, child: [{ tag: "path", attr: { fill: "none", d: "M0 0h24v24H0z" }, child: [] }, { tag: "path", attr: { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" }, child: [] }] })(h);
}
const ud = ({ title: h }) => (console.log(h), /* @__PURE__ */ _e.jsxs("header", { className: "bg-white fixed h-full left-0", children: [
  /* @__PURE__ */ _e.jsx("link", { rel: "prefetch", href: "/" }),
  /* @__PURE__ */ _e.jsx("link", { rel: "prefetch", href: "/generic" }),
  /* @__PURE__ */ _e.jsx("link", { rel: "prefetch", href: "/angular" }),
  /* @__PURE__ */ _e.jsxs("div", { className: "flex gap-4 flex-col mt-4", children: [
    /* @__PURE__ */ _e.jsx(
      "a",
      {
        className: "text-brand w-[72px] h-12 flex items-center justify-center",
        href: "/",
        children: /* @__PURE__ */ _e.jsx(rd, { size: 24 })
      }
    ),
    /* @__PURE__ */ _e.jsx(
      "a",
      {
        className: "text-brand w-[72px] h-12 flex items-center justify-center",
        href: "/angular",
        children: /* @__PURE__ */ _e.jsx(nd, { size: 24 })
      }
    ),
    /* @__PURE__ */ _e.jsx(
      "a",
      {
        className: "text-brand w-[72px] h-12 flex items-center justify-center",
        href: "/generic",
        children: /* @__PURE__ */ _e.jsx(ld, { size: 24 })
      }
    )
  ] }),
  /* @__PURE__ */ _e.jsx("div", { className: "absolute w-[1px] h-full bg-gray-100 right-0 top-0" })
] })), id = (h) => h.replace(/-([a-z])/g, (x, p) => p.toUpperCase());
class od extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { host: x, ...p } = this.getPropsFromAttributes();
    Yc.createRoot(this.shadowRoot).render(
      /* @__PURE__ */ _e.jsxs(_e.Fragment, { children: [
        /* @__PURE__ */ _e.jsx("link", { href: `${x}/header.css`, rel: "stylesheet", type: "text/css" }),
        /* @__PURE__ */ _e.jsx(ud, { ...p })
      ] })
    );
  }
  getPropsFromAttributes() {
    const x = {};
    for (let p = 0; p < this.attributes.length; p++) {
      const j = this.attributes[p];
      x[id(j.name)] = j.value;
    }
    return x;
  }
}
customElements.define("symplast-header", od);
