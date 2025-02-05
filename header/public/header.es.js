function Tc(P) {
  return P && P.__esModule && Object.prototype.hasOwnProperty.call(P, "default") ? P.default : P;
}
var Ei = { exports: {} }, yr = {}, _i = { exports: {} }, M = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function Lc() {
  if (Ea) return M;
  Ea = 1;
  var P = Symbol.for("react.element"), A = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), ke = Symbol.for("react.strict_mode"), Ce = Symbol.for("react.profiler"), je = Symbol.for("react.provider"), Ne = Symbol.for("react.context"), se = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), Se = Symbol.for("react.memo"), me = Symbol.for("react.lazy"), q = Symbol.iterator;
  function X(f) {
    return f === null || typeof f != "object" ? null : (f = q && f[q] || f["@@iterator"], typeof f == "function" ? f : null);
  }
  var $e = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, We = Object.assign, G = {};
  function $(f, v, O) {
    this.props = f, this.context = v, this.refs = G, this.updater = O || $e;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(f, v) {
    if (typeof f != "object" && typeof f != "function" && f != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, f, v, "setState");
  }, $.prototype.forceUpdate = function(f) {
    this.updater.enqueueForceUpdate(this, f, "forceUpdate");
  };
  function yn() {
  }
  yn.prototype = $.prototype;
  function an(f, v, O) {
    this.props = f, this.context = v, this.refs = G, this.updater = O || $e;
  }
  var qe = an.prototype = new yn();
  qe.constructor = an, We(qe, $.prototype), qe.isPureReactComponent = !0;
  var he = Array.isArray, be = Object.prototype.hasOwnProperty, Ee = { current: null }, Pe = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Qe(f, v, O) {
    var D, j = {}, I = null, W = null;
    if (v != null) for (D in v.ref !== void 0 && (W = v.ref), v.key !== void 0 && (I = "" + v.key), v) be.call(v, D) && !Pe.hasOwnProperty(D) && (j[D] = v[D]);
    var V = arguments.length - 2;
    if (V === 1) j.children = O;
    else if (1 < V) {
      for (var Z = Array(V), Ue = 0; Ue < V; Ue++) Z[Ue] = arguments[Ue + 2];
      j.children = Z;
    }
    if (f && f.defaultProps) for (D in V = f.defaultProps, V) j[D] === void 0 && (j[D] = V[D]);
    return { $$typeof: P, type: f, key: I, ref: W, props: j, _owner: Ee.current };
  }
  function Pn(f, v) {
    return { $$typeof: P, type: f.type, key: v, ref: f.ref, props: f.props, _owner: f._owner };
  }
  function gn(f) {
    return typeof f == "object" && f !== null && f.$$typeof === P;
  }
  function Yn(f) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + f.replace(/[=:]/g, function(O) {
      return v[O];
    });
  }
  var fn = /\/+/g;
  function Ie(f, v) {
    return typeof f == "object" && f !== null && f.key != null ? Yn("" + f.key) : v.toString(36);
  }
  function en(f, v, O, D, j) {
    var I = typeof f;
    (I === "undefined" || I === "boolean") && (f = null);
    var W = !1;
    if (f === null) W = !0;
    else switch (I) {
      case "string":
      case "number":
        W = !0;
        break;
      case "object":
        switch (f.$$typeof) {
          case P:
          case A:
            W = !0;
        }
    }
    if (W) return W = f, j = j(W), f = D === "" ? "." + Ie(W, 0) : D, he(j) ? (O = "", f != null && (O = f.replace(fn, "$&/") + "/"), en(j, v, O, "", function(Ue) {
      return Ue;
    })) : j != null && (gn(j) && (j = Pn(j, O + (!j.key || W && W.key === j.key ? "" : ("" + j.key).replace(fn, "$&/") + "/") + f)), v.push(j)), 1;
    if (W = 0, D = D === "" ? "." : D + ":", he(f)) for (var V = 0; V < f.length; V++) {
      I = f[V];
      var Z = D + Ie(I, V);
      W += en(I, v, O, Z, j);
    }
    else if (Z = X(f), typeof Z == "function") for (f = Z.call(f), V = 0; !(I = f.next()).done; ) I = I.value, Z = D + Ie(I, V++), W += en(I, v, O, Z, j);
    else if (I === "object") throw v = String(f), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(f).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return W;
  }
  function cn(f, v, O) {
    if (f == null) return f;
    var D = [], j = 0;
    return en(f, D, "", "", function(I) {
      return v.call(O, I, j++);
    }), D;
  }
  function ze(f) {
    if (f._status === -1) {
      var v = f._result;
      v = v(), v.then(function(O) {
        (f._status === 0 || f._status === -1) && (f._status = 1, f._result = O);
      }, function(O) {
        (f._status === 0 || f._status === -1) && (f._status = 2, f._result = O);
      }), f._status === -1 && (f._status = 0, f._result = v);
    }
    if (f._status === 1) return f._result.default;
    throw f._result;
  }
  var ne = { current: null }, k = { transition: null }, L = { ReactCurrentDispatcher: ne, ReactCurrentBatchConfig: k, ReactCurrentOwner: Ee };
  function _() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  return M.Children = { map: cn, forEach: function(f, v, O) {
    cn(f, function() {
      v.apply(this, arguments);
    }, O);
  }, count: function(f) {
    var v = 0;
    return cn(f, function() {
      v++;
    }), v;
  }, toArray: function(f) {
    return cn(f, function(v) {
      return v;
    }) || [];
  }, only: function(f) {
    if (!gn(f)) throw Error("React.Children.only expected to receive a single React element child.");
    return f;
  } }, M.Component = $, M.Fragment = m, M.Profiler = Ce, M.PureComponent = an, M.StrictMode = ke, M.Suspense = B, M.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L, M.act = _, M.cloneElement = function(f, v, O) {
    if (f == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + f + ".");
    var D = We({}, f.props), j = f.key, I = f.ref, W = f._owner;
    if (v != null) {
      if (v.ref !== void 0 && (I = v.ref, W = Ee.current), v.key !== void 0 && (j = "" + v.key), f.type && f.type.defaultProps) var V = f.type.defaultProps;
      for (Z in v) be.call(v, Z) && !Pe.hasOwnProperty(Z) && (D[Z] = v[Z] === void 0 && V !== void 0 ? V[Z] : v[Z]);
    }
    var Z = arguments.length - 2;
    if (Z === 1) D.children = O;
    else if (1 < Z) {
      V = Array(Z);
      for (var Ue = 0; Ue < Z; Ue++) V[Ue] = arguments[Ue + 2];
      D.children = V;
    }
    return { $$typeof: P, type: f.type, key: j, ref: I, props: D, _owner: W };
  }, M.createContext = function(f) {
    return f = { $$typeof: Ne, _currentValue: f, _currentValue2: f, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, f.Provider = { $$typeof: je, _context: f }, f.Consumer = f;
  }, M.createElement = Qe, M.createFactory = function(f) {
    var v = Qe.bind(null, f);
    return v.type = f, v;
  }, M.createRef = function() {
    return { current: null };
  }, M.forwardRef = function(f) {
    return { $$typeof: se, render: f };
  }, M.isValidElement = gn, M.lazy = function(f) {
    return { $$typeof: me, _payload: { _status: -1, _result: f }, _init: ze };
  }, M.memo = function(f, v) {
    return { $$typeof: Se, type: f, compare: v === void 0 ? null : v };
  }, M.startTransition = function(f) {
    var v = k.transition;
    k.transition = {};
    try {
      f();
    } finally {
      k.transition = v;
    }
  }, M.unstable_act = _, M.useCallback = function(f, v) {
    return ne.current.useCallback(f, v);
  }, M.useContext = function(f) {
    return ne.current.useContext(f);
  }, M.useDebugValue = function() {
  }, M.useDeferredValue = function(f) {
    return ne.current.useDeferredValue(f);
  }, M.useEffect = function(f, v) {
    return ne.current.useEffect(f, v);
  }, M.useId = function() {
    return ne.current.useId();
  }, M.useImperativeHandle = function(f, v, O) {
    return ne.current.useImperativeHandle(f, v, O);
  }, M.useInsertionEffect = function(f, v) {
    return ne.current.useInsertionEffect(f, v);
  }, M.useLayoutEffect = function(f, v) {
    return ne.current.useLayoutEffect(f, v);
  }, M.useMemo = function(f, v) {
    return ne.current.useMemo(f, v);
  }, M.useReducer = function(f, v, O) {
    return ne.current.useReducer(f, v, O);
  }, M.useRef = function(f) {
    return ne.current.useRef(f);
  }, M.useState = function(f) {
    return ne.current.useState(f);
  }, M.useSyncExternalStore = function(f, v, O) {
    return ne.current.useSyncExternalStore(f, v, O);
  }, M.useTransition = function() {
    return ne.current.useTransition();
  }, M.version = "18.3.1", M;
}
var _a;
function Ra() {
  return _a || (_a = 1, _i.exports = Lc()), _i.exports;
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
var xa;
function Rc() {
  if (xa) return yr;
  xa = 1;
  var P = Ra(), A = Symbol.for("react.element"), m = Symbol.for("react.fragment"), ke = Object.prototype.hasOwnProperty, Ce = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, je = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Ne(se, B, Se) {
    var me, q = {}, X = null, $e = null;
    Se !== void 0 && (X = "" + Se), B.key !== void 0 && (X = "" + B.key), B.ref !== void 0 && ($e = B.ref);
    for (me in B) ke.call(B, me) && !je.hasOwnProperty(me) && (q[me] = B[me]);
    if (se && se.defaultProps) for (me in B = se.defaultProps, B) q[me] === void 0 && (q[me] = B[me]);
    return { $$typeof: A, type: se, key: X, ref: $e, props: q, _owner: Ce.current };
  }
  return yr.Fragment = m, yr.jsx = Ne, yr.jsxs = Ne, yr;
}
var Ca;
function Oc() {
  return Ca || (Ca = 1, Ei.exports = Rc()), Ei.exports;
}
var Fe = Oc(), zl = {}, xi = { exports: {} }, De = {}, Ci = { exports: {} }, Ni = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Na;
function Mc() {
  return Na || (Na = 1, function(P) {
    function A(k, L) {
      var _ = k.length;
      k.push(L);
      e: for (; 0 < _; ) {
        var f = _ - 1 >>> 1, v = k[f];
        if (0 < Ce(v, L)) k[f] = L, k[_] = v, _ = f;
        else break e;
      }
    }
    function m(k) {
      return k.length === 0 ? null : k[0];
    }
    function ke(k) {
      if (k.length === 0) return null;
      var L = k[0], _ = k.pop();
      if (_ !== L) {
        k[0] = _;
        e: for (var f = 0, v = k.length, O = v >>> 1; f < O; ) {
          var D = 2 * (f + 1) - 1, j = k[D], I = D + 1, W = k[I];
          if (0 > Ce(j, _)) I < v && 0 > Ce(W, j) ? (k[f] = W, k[I] = _, f = I) : (k[f] = j, k[D] = _, f = D);
          else if (I < v && 0 > Ce(W, _)) k[f] = W, k[I] = _, f = I;
          else break e;
        }
      }
      return L;
    }
    function Ce(k, L) {
      var _ = k.sortIndex - L.sortIndex;
      return _ !== 0 ? _ : k.id - L.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var je = performance;
      P.unstable_now = function() {
        return je.now();
      };
    } else {
      var Ne = Date, se = Ne.now();
      P.unstable_now = function() {
        return Ne.now() - se;
      };
    }
    var B = [], Se = [], me = 1, q = null, X = 3, $e = !1, We = !1, G = !1, $ = typeof setTimeout == "function" ? setTimeout : null, yn = typeof clearTimeout == "function" ? clearTimeout : null, an = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function qe(k) {
      for (var L = m(Se); L !== null; ) {
        if (L.callback === null) ke(Se);
        else if (L.startTime <= k) ke(Se), L.sortIndex = L.expirationTime, A(B, L);
        else break;
        L = m(Se);
      }
    }
    function he(k) {
      if (G = !1, qe(k), !We) if (m(B) !== null) We = !0, ze(be);
      else {
        var L = m(Se);
        L !== null && ne(he, L.startTime - k);
      }
    }
    function be(k, L) {
      We = !1, G && (G = !1, yn(Qe), Qe = -1), $e = !0;
      var _ = X;
      try {
        for (qe(L), q = m(B); q !== null && (!(q.expirationTime > L) || k && !Yn()); ) {
          var f = q.callback;
          if (typeof f == "function") {
            q.callback = null, X = q.priorityLevel;
            var v = f(q.expirationTime <= L);
            L = P.unstable_now(), typeof v == "function" ? q.callback = v : q === m(B) && ke(B), qe(L);
          } else ke(B);
          q = m(B);
        }
        if (q !== null) var O = !0;
        else {
          var D = m(Se);
          D !== null && ne(he, D.startTime - L), O = !1;
        }
        return O;
      } finally {
        q = null, X = _, $e = !1;
      }
    }
    var Ee = !1, Pe = null, Qe = -1, Pn = 5, gn = -1;
    function Yn() {
      return !(P.unstable_now() - gn < Pn);
    }
    function fn() {
      if (Pe !== null) {
        var k = P.unstable_now();
        gn = k;
        var L = !0;
        try {
          L = Pe(!0, k);
        } finally {
          L ? Ie() : (Ee = !1, Pe = null);
        }
      } else Ee = !1;
    }
    var Ie;
    if (typeof an == "function") Ie = function() {
      an(fn);
    };
    else if (typeof MessageChannel < "u") {
      var en = new MessageChannel(), cn = en.port2;
      en.port1.onmessage = fn, Ie = function() {
        cn.postMessage(null);
      };
    } else Ie = function() {
      $(fn, 0);
    };
    function ze(k) {
      Pe = k, Ee || (Ee = !0, Ie());
    }
    function ne(k, L) {
      Qe = $(function() {
        k(P.unstable_now());
      }, L);
    }
    P.unstable_IdlePriority = 5, P.unstable_ImmediatePriority = 1, P.unstable_LowPriority = 4, P.unstable_NormalPriority = 3, P.unstable_Profiling = null, P.unstable_UserBlockingPriority = 2, P.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, P.unstable_continueExecution = function() {
      We || $e || (We = !0, ze(be));
    }, P.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Pn = 0 < k ? Math.floor(1e3 / k) : 5;
    }, P.unstable_getCurrentPriorityLevel = function() {
      return X;
    }, P.unstable_getFirstCallbackNode = function() {
      return m(B);
    }, P.unstable_next = function(k) {
      switch (X) {
        case 1:
        case 2:
        case 3:
          var L = 3;
          break;
        default:
          L = X;
      }
      var _ = X;
      X = L;
      try {
        return k();
      } finally {
        X = _;
      }
    }, P.unstable_pauseExecution = function() {
    }, P.unstable_requestPaint = function() {
    }, P.unstable_runWithPriority = function(k, L) {
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
      var _ = X;
      X = k;
      try {
        return L();
      } finally {
        X = _;
      }
    }, P.unstable_scheduleCallback = function(k, L, _) {
      var f = P.unstable_now();
      switch (typeof _ == "object" && _ !== null ? (_ = _.delay, _ = typeof _ == "number" && 0 < _ ? f + _ : f) : _ = f, k) {
        case 1:
          var v = -1;
          break;
        case 2:
          v = 250;
          break;
        case 5:
          v = 1073741823;
          break;
        case 4:
          v = 1e4;
          break;
        default:
          v = 5e3;
      }
      return v = _ + v, k = { id: me++, callback: L, priorityLevel: k, startTime: _, expirationTime: v, sortIndex: -1 }, _ > f ? (k.sortIndex = _, A(Se, k), m(B) === null && k === m(Se) && (G ? (yn(Qe), Qe = -1) : G = !0, ne(he, _ - f))) : (k.sortIndex = v, A(B, k), We || $e || (We = !0, ze(be))), k;
    }, P.unstable_shouldYield = Yn, P.unstable_wrapCallback = function(k) {
      var L = X;
      return function() {
        var _ = X;
        X = L;
        try {
          return k.apply(this, arguments);
        } finally {
          X = _;
        }
      };
    };
  }(Ni)), Ni;
}
var Pa;
function Dc() {
  return Pa || (Pa = 1, Ci.exports = Mc()), Ci.exports;
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
var za;
function Fc() {
  if (za) return De;
  za = 1;
  var P = Ra(), A = Dc();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++) n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var ke = /* @__PURE__ */ new Set(), Ce = {};
  function je(e, n) {
    Ne(e, n), Ne(e + "Capture", n);
  }
  function Ne(e, n) {
    for (Ce[e] = n, e = 0; e < n.length; e++) ke.add(n[e]);
  }
  var se = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), B = Object.prototype.hasOwnProperty, Se = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, me = {}, q = {};
  function X(e) {
    return B.call(q, e) ? !0 : B.call(me, e) ? !1 : Se.test(e) ? q[e] = !0 : (me[e] = !0, !1);
  }
  function $e(e, n, t, r) {
    if (t !== null && t.type === 0) return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function We(e, n, t, r) {
    if (n === null || typeof n > "u" || $e(e, n, t, r)) return !0;
    if (r) return !1;
    if (t !== null) switch (t.type) {
      case 3:
        return !n;
      case 4:
        return n === !1;
      case 5:
        return isNaN(n);
      case 6:
        return isNaN(n) || 1 > n;
    }
    return !1;
  }
  function G(e, n, t, r, l, u, i) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = u, this.removeEmptyString = i;
  }
  var $ = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    $[e] = new G(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    $[n] = new G(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    $[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    $[e] = new G(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    $[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    $[e] = new G(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    $[e] = new G(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    $[e] = new G(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    $[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var yn = /[\-:]([a-z])/g;
  function an(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      yn,
      an
    );
    $[n] = new G(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(yn, an);
    $[n] = new G(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(yn, an);
    $[n] = new G(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    $[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), $.xlinkHref = new G("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    $[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function qe(e, n, t, r) {
    var l = $.hasOwnProperty(n) ? $[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (We(n, t, l, r) && (t = null), r || l === null ? X(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var he = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, be = Symbol.for("react.element"), Ee = Symbol.for("react.portal"), Pe = Symbol.for("react.fragment"), Qe = Symbol.for("react.strict_mode"), Pn = Symbol.for("react.profiler"), gn = Symbol.for("react.provider"), Yn = Symbol.for("react.context"), fn = Symbol.for("react.forward_ref"), Ie = Symbol.for("react.suspense"), en = Symbol.for("react.suspense_list"), cn = Symbol.for("react.memo"), ze = Symbol.for("react.lazy"), ne = Symbol.for("react.offscreen"), k = Symbol.iterator;
  function L(e) {
    return e === null || typeof e != "object" ? null : (e = k && e[k] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var _ = Object.assign, f;
  function v(e) {
    if (f === void 0) try {
      throw Error();
    } catch (t) {
      var n = t.stack.trim().match(/\n( *(at )?)/);
      f = n && n[1] || "";
    }
    return `
` + f + e;
  }
  var O = !1;
  function D(e, n) {
    if (!e || O) return "";
    O = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n) if (n = function() {
        throw Error();
      }, Object.defineProperty(n.prototype, "props", { set: function() {
        throw Error();
      } }), typeof Reflect == "object" && Reflect.construct) {
        try {
          Reflect.construct(n, []);
        } catch (p) {
          var r = p;
        }
        Reflect.construct(e, [], n);
      } else {
        try {
          n.call();
        } catch (p) {
          r = p;
        }
        e.call(n.prototype);
      }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
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
      O = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? v(e) : "";
  }
  function j(e) {
    switch (e.tag) {
      case 5:
        return v(e.type);
      case 16:
        return v("Lazy");
      case 13:
        return v("Suspense");
      case 19:
        return v("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = D(e.type, !1), e;
      case 11:
        return e = D(e.type.render, !1), e;
      case 1:
        return e = D(e.type, !0), e;
      default:
        return "";
    }
  }
  function I(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Pe:
        return "Fragment";
      case Ee:
        return "Portal";
      case Pn:
        return "Profiler";
      case Qe:
        return "StrictMode";
      case Ie:
        return "Suspense";
      case en:
        return "SuspenseList";
    }
    if (typeof e == "object") switch (e.$$typeof) {
      case Yn:
        return (e.displayName || "Context") + ".Consumer";
      case gn:
        return (e._context.displayName || "Context") + ".Provider";
      case fn:
        var n = e.render;
        return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
      case cn:
        return n = e.displayName || null, n !== null ? n : I(e.type) || "Memo";
      case ze:
        n = e._payload, e = e._init;
        try {
          return I(e(n));
        } catch {
        }
    }
    return null;
  }
  function W(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return I(n);
      case 8:
        return n === Qe ? "StrictMode" : "Mode";
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
        if (typeof n == "function") return n.displayName || n.name || null;
        if (typeof n == "string") return n;
    }
    return null;
  }
  function V(e) {
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
  function Z(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Ue(e) {
    var n = Z(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, u = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(i) {
        r = "" + i, u.call(this, i);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(i) {
        r = "" + i;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function gr(e) {
    e._valueTracker || (e._valueTracker = Ue(e));
  }
  function Pi(e) {
    if (!e) return !1;
    var n = e._valueTracker;
    if (!n) return !0;
    var t = n.getValue(), r = "";
    return e && (r = Z(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function wr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, n) {
    var t = n.checked;
    return _({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function zi(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = V(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function Ti(e, n) {
    n = n.checked, n != null && qe(e, "checked", n, !1);
  }
  function Ll(e, n) {
    Ti(e, n);
    var t = V(n.value), r = n.type;
    if (t != null) r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Rl(e, n.type, t) : n.hasOwnProperty("defaultValue") && Rl(e, n.type, V(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Li(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null)) return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Rl(e, n, t) {
    (n !== "number" || wr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Ot = Array.isArray;
  function ot(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++) n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++) l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + V(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ol(e, n) {
    if (n.dangerouslySetInnerHTML != null) throw Error(m(91));
    return _({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Ri(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null) throw Error(m(92));
        if (Ot(t)) {
          if (1 < t.length) throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: V(t) };
  }
  function Oi(e, n) {
    var t = V(n.value), r = V(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Mi(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Di(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ml(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Di(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, Fi = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = n;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = kr.firstChild; e.firstChild; ) e.removeChild(e.firstChild);
      for (; n.firstChild; ) e.appendChild(n.firstChild);
    }
  });
  function Mt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var Dt = {
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
  }, Oa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Dt).forEach(function(e) {
    Oa.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), Dt[n] = Dt[e];
    });
  });
  function ji(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || Dt.hasOwnProperty(e) && Dt[e] ? ("" + n).trim() : n + "px";
  }
  function Ii(e, n) {
    e = e.style;
    for (var t in n) if (n.hasOwnProperty(t)) {
      var r = t.indexOf("--") === 0, l = ji(t, n[t], r);
      t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
    }
  }
  var Ma = _({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dl(e, n) {
    if (n) {
      if (Ma[e] && (n.children != null || n.dangerouslySetInnerHTML != null)) throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null) throw Error(m(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML)) throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object") throw Error(m(62));
    }
  }
  function Fl(e, n) {
    if (e.indexOf("-") === -1) return typeof n.is == "string";
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
  var jl = null;
  function Il(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ul = null, st = null, at = null;
  function Ui(e) {
    if (e = tr(e)) {
      if (typeof Ul != "function") throw Error(m(280));
      var n = e.stateNode;
      n && (n = $r(n), Ul(e.stateNode, e.type, n));
    }
  }
  function Ai(e) {
    st ? at ? at.push(e) : at = [e] : st = e;
  }
  function Vi() {
    if (st) {
      var e = st, n = at;
      if (at = st = null, Ui(e), n) for (e = 0; e < n.length; e++) Ui(n[e]);
    }
  }
  function Hi(e, n) {
    return e(n);
  }
  function Bi() {
  }
  var Al = !1;
  function $i(e, n, t) {
    if (Al) return e(n, t);
    Al = !0;
    try {
      return Hi(e, n, t);
    } finally {
      Al = !1, (st !== null || at !== null) && (Bi(), Vi());
    }
  }
  function Ft(e, n) {
    var t = e.stateNode;
    if (t === null) return null;
    var r = $r(t);
    if (r === null) return null;
    t = r[n];
    e: switch (n) {
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
    if (t && typeof t != "function") throw Error(m(231, n, typeof t));
    return t;
  }
  var Vl = !1;
  if (se) try {
    var jt = {};
    Object.defineProperty(jt, "passive", { get: function() {
      Vl = !0;
    } }), window.addEventListener("test", jt, jt), window.removeEventListener("test", jt, jt);
  } catch {
    Vl = !1;
  }
  function Da(e, n, t, r, l, u, i, o, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var It = !1, Sr = null, Er = !1, Hl = null, Fa = { onError: function(e) {
    It = !0, Sr = e;
  } };
  function ja(e, n, t, r, l, u, i, o, s) {
    It = !1, Sr = null, Da.apply(Fa, arguments);
  }
  function Ia(e, n, t, r, l, u, i, o, s) {
    if (ja.apply(this, arguments), It) {
      if (It) {
        var p = Sr;
        It = !1, Sr = null;
      } else throw Error(m(198));
      Er || (Er = !0, Hl = p);
    }
  }
  function Xn(e) {
    var n = e, t = e;
    if (e.alternate) for (; n.return; ) n = n.return;
    else {
      e = n;
      do
        n = e, n.flags & 4098 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Wi(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null) return n.dehydrated;
    }
    return null;
  }
  function Qi(e) {
    if (Xn(e) !== e) throw Error(m(188));
  }
  function Ua(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Xn(e), n === null) throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === t) return Qi(l), e;
          if (u === r) return Qi(l), n;
          u = u.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return) t = l, r = u;
      else {
        for (var i = !1, o = l.child; o; ) {
          if (o === t) {
            i = !0, t = l, r = u;
            break;
          }
          if (o === r) {
            i = !0, r = l, t = u;
            break;
          }
          o = o.sibling;
        }
        if (!i) {
          for (o = u.child; o; ) {
            if (o === t) {
              i = !0, t = u, r = l;
              break;
            }
            if (o === r) {
              i = !0, r = u, t = l;
              break;
            }
            o = o.sibling;
          }
          if (!i) throw Error(m(189));
        }
      }
      if (t.alternate !== r) throw Error(m(190));
    }
    if (t.tag !== 3) throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Ki(e) {
    return e = Ua(e), e !== null ? Yi(e) : null;
  }
  function Yi(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var n = Yi(e);
      if (n !== null) return n;
      e = e.sibling;
    }
    return null;
  }
  var Xi = A.unstable_scheduleCallback, Gi = A.unstable_cancelCallback, Aa = A.unstable_shouldYield, Va = A.unstable_requestPaint, re = A.unstable_now, Ha = A.unstable_getCurrentPriorityLevel, Bl = A.unstable_ImmediatePriority, Zi = A.unstable_UserBlockingPriority, _r = A.unstable_NormalPriority, Ba = A.unstable_LowPriority, Ji = A.unstable_IdlePriority, xr = null, dn = null;
  function $a(e) {
    if (dn && typeof dn.onCommitFiberRoot == "function") try {
      dn.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
    } catch {
    }
  }
  var nn = Math.clz32 ? Math.clz32 : Ka, Wa = Math.log, Qa = Math.LN2;
  function Ka(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Wa(e) / Qa | 0) | 0;
  }
  var Cr = 64, Nr = 4194304;
  function Ut(e) {
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
  function Pr(e, n) {
    var t = e.pendingLanes;
    if (t === 0) return 0;
    var r = 0, l = e.suspendedLanes, u = e.pingedLanes, i = t & 268435455;
    if (i !== 0) {
      var o = i & ~l;
      o !== 0 ? r = Ut(o) : (u &= i, u !== 0 && (r = Ut(u)));
    } else i = t & ~l, i !== 0 ? r = Ut(i) : u !== 0 && (r = Ut(u));
    if (r === 0) return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, u = n & -n, l >= u || l === 16 && (u & 4194240) !== 0)) return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0) for (e = e.entanglements, n &= r; 0 < n; ) t = 31 - nn(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function Ya(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
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
        return n + 5e3;
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
  function Xa(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes; 0 < u; ) {
      var i = 31 - nn(u), o = 1 << i, s = l[i];
      s === -1 ? (!(o & t) || o & r) && (l[i] = Ya(o, n)) : s <= n && (e.expiredLanes |= o), u &= ~o;
    }
  }
  function $l(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function qi() {
    var e = Cr;
    return Cr <<= 1, !(Cr & 4194240) && (Cr = 64), e;
  }
  function Wl(e) {
    for (var n = [], t = 0; 31 > t; t++) n.push(e);
    return n;
  }
  function At(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - nn(n), e[n] = t;
  }
  function Ga(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - nn(t), u = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~u;
    }
  }
  function Ql(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - nn(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var H = 0;
  function bi(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var eo, Kl, no, to, ro, Yl = !1, zr = [], zn = null, Tn = null, Ln = null, Vt = /* @__PURE__ */ new Map(), Ht = /* @__PURE__ */ new Map(), Rn = [], Za = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function lo(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        zn = null;
        break;
      case "dragenter":
      case "dragleave":
        Tn = null;
        break;
      case "mouseover":
      case "mouseout":
        Ln = null;
        break;
      case "pointerover":
      case "pointerout":
        Vt.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ht.delete(n.pointerId);
    }
  }
  function Bt(e, n, t, r, l, u) {
    return e === null || e.nativeEvent !== u ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: u, targetContainers: [l] }, n !== null && (n = tr(n), n !== null && Kl(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function Ja(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return zn = Bt(zn, e, n, t, r, l), !0;
      case "dragenter":
        return Tn = Bt(Tn, e, n, t, r, l), !0;
      case "mouseover":
        return Ln = Bt(Ln, e, n, t, r, l), !0;
      case "pointerover":
        var u = l.pointerId;
        return Vt.set(u, Bt(Vt.get(u) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return u = l.pointerId, Ht.set(u, Bt(Ht.get(u) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function uo(e) {
    var n = Gn(e.target);
    if (n !== null) {
      var t = Xn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Wi(t), n !== null) {
            e.blockedOn = n, ro(e.priority, function() {
              no(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Tr(e) {
    if (e.blockedOn !== null) return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Gl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        jl = r, t.target.dispatchEvent(r), jl = null;
      } else return n = tr(t), n !== null && Kl(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function io(e, n, t) {
    Tr(e) && t.delete(n);
  }
  function qa() {
    Yl = !1, zn !== null && Tr(zn) && (zn = null), Tn !== null && Tr(Tn) && (Tn = null), Ln !== null && Tr(Ln) && (Ln = null), Vt.forEach(io), Ht.forEach(io);
  }
  function $t(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Yl || (Yl = !0, A.unstable_scheduleCallback(A.unstable_NormalPriority, qa)));
  }
  function Wt(e) {
    function n(l) {
      return $t(l, e);
    }
    if (0 < zr.length) {
      $t(zr[0], e);
      for (var t = 1; t < zr.length; t++) {
        var r = zr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (zn !== null && $t(zn, e), Tn !== null && $t(Tn, e), Ln !== null && $t(Ln, e), Vt.forEach(n), Ht.forEach(n), t = 0; t < Rn.length; t++) r = Rn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Rn.length && (t = Rn[0], t.blockedOn === null); ) uo(t), t.blockedOn === null && Rn.shift();
  }
  var ft = he.ReactCurrentBatchConfig, Lr = !0;
  function ba(e, n, t, r) {
    var l = H, u = ft.transition;
    ft.transition = null;
    try {
      H = 1, Xl(e, n, t, r);
    } finally {
      H = l, ft.transition = u;
    }
  }
  function ef(e, n, t, r) {
    var l = H, u = ft.transition;
    ft.transition = null;
    try {
      H = 4, Xl(e, n, t, r);
    } finally {
      H = l, ft.transition = u;
    }
  }
  function Xl(e, n, t, r) {
    if (Lr) {
      var l = Gl(e, n, t, r);
      if (l === null) du(e, n, r, Rr, t), lo(e, r);
      else if (Ja(l, e, n, t, r)) r.stopPropagation();
      else if (lo(e, r), n & 4 && -1 < Za.indexOf(e)) {
        for (; l !== null; ) {
          var u = tr(l);
          if (u !== null && eo(u), u = Gl(e, n, t, r), u === null && du(e, n, r, Rr, t), u === l) break;
          l = u;
        }
        l !== null && r.stopPropagation();
      } else du(e, n, r, null, t);
    }
  }
  var Rr = null;
  function Gl(e, n, t, r) {
    if (Rr = null, e = Il(r), e = Gn(e), e !== null) if (n = Xn(e), n === null) e = null;
    else if (t = n.tag, t === 13) {
      if (e = Wi(n), e !== null) return e;
      e = null;
    } else if (t === 3) {
      if (n.stateNode.current.memoizedState.isDehydrated) return n.tag === 3 ? n.stateNode.containerInfo : null;
      e = null;
    } else n !== e && (e = null);
    return Rr = e, null;
  }
  function oo(e) {
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
        switch (Ha()) {
          case Bl:
            return 1;
          case Zi:
            return 4;
          case _r:
          case Ba:
            return 16;
          case Ji:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var On = null, Zl = null, Or = null;
  function so() {
    if (Or) return Or;
    var e, n = Zl, t = n.length, r, l = "value" in On ? On.value : On.textContent, u = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++) ;
    var i = t - e;
    for (r = 1; r <= i && n[t - r] === l[u - r]; r++) ;
    return Or = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Mr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Dr() {
    return !0;
  }
  function ao() {
    return !1;
  }
  function Ae(e) {
    function n(t, r, l, u, i) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = u, this.target = i, this.currentTarget = null;
      for (var o in e) e.hasOwnProperty(o) && (t = e[o], this[o] = t ? t(u) : u[o]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? Dr : ao, this.isPropagationStopped = ao, this;
    }
    return _(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Dr);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Dr);
    }, persist: function() {
    }, isPersistent: Dr }), n;
  }
  var ct = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Jl = Ae(ct), Qt = _({}, ct, { view: 0, detail: 0 }), nf = Ae(Qt), ql, bl, Kt, Fr = _({}, Qt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: nu, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Kt && (Kt && e.type === "mousemove" ? (ql = e.screenX - Kt.screenX, bl = e.screenY - Kt.screenY) : bl = ql = 0, Kt = e), ql);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : bl;
  } }), fo = Ae(Fr), tf = _({}, Fr, { dataTransfer: 0 }), rf = Ae(tf), lf = _({}, Qt, { relatedTarget: 0 }), eu = Ae(lf), uf = _({}, ct, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), of = Ae(uf), sf = _({}, ct, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), af = Ae(sf), ff = _({}, ct, { data: 0 }), co = Ae(ff), cf = {
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
  }, df = {
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
  }, pf = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function mf(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = pf[e]) ? !!n[e] : !1;
  }
  function nu() {
    return mf;
  }
  var hf = _({}, Qt, { key: function(e) {
    if (e.key) {
      var n = cf[e.key] || e.key;
      if (n !== "Unidentified") return n;
    }
    return e.type === "keypress" ? (e = Mr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? df[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: nu, charCode: function(e) {
    return e.type === "keypress" ? Mr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Mr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), vf = Ae(hf), yf = _({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), po = Ae(yf), gf = _({}, Qt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: nu }), wf = Ae(gf), kf = _({}, ct, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sf = Ae(kf), Ef = _({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), _f = Ae(Ef), xf = [9, 13, 27, 32], tu = se && "CompositionEvent" in window, Yt = null;
  se && "documentMode" in document && (Yt = document.documentMode);
  var Cf = se && "TextEvent" in window && !Yt, mo = se && (!tu || Yt && 8 < Yt && 11 >= Yt), ho = " ", vo = !1;
  function yo(e, n) {
    switch (e) {
      case "keyup":
        return xf.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function go(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var dt = !1;
  function Nf(e, n) {
    switch (e) {
      case "compositionend":
        return go(n);
      case "keypress":
        return n.which !== 32 ? null : (vo = !0, ho);
      case "textInput":
        return e = n.data, e === ho && vo ? null : e;
      default:
        return null;
    }
  }
  function Pf(e, n) {
    if (dt) return e === "compositionend" || !tu && yo(e, n) ? (e = so(), Or = Zl = On = null, dt = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length) return n.char;
          if (n.which) return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return mo && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var zf = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function wo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!zf[e.type] : n === "textarea";
  }
  function ko(e, n, t, r) {
    Ai(r), n = Vr(n, "onChange"), 0 < n.length && (t = new Jl("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Xt = null, Gt = null;
  function Tf(e) {
    Uo(e, 0);
  }
  function jr(e) {
    var n = yt(e);
    if (Pi(n)) return e;
  }
  function Lf(e, n) {
    if (e === "change") return n;
  }
  var So = !1;
  if (se) {
    var ru;
    if (se) {
      var lu = "oninput" in document;
      if (!lu) {
        var Eo = document.createElement("div");
        Eo.setAttribute("oninput", "return;"), lu = typeof Eo.oninput == "function";
      }
      ru = lu;
    } else ru = !1;
    So = ru && (!document.documentMode || 9 < document.documentMode);
  }
  function _o() {
    Xt && (Xt.detachEvent("onpropertychange", xo), Gt = Xt = null);
  }
  function xo(e) {
    if (e.propertyName === "value" && jr(Gt)) {
      var n = [];
      ko(n, Gt, e, Il(e)), $i(Tf, n);
    }
  }
  function Rf(e, n, t) {
    e === "focusin" ? (_o(), Xt = n, Gt = t, Xt.attachEvent("onpropertychange", xo)) : e === "focusout" && _o();
  }
  function Of(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return jr(Gt);
  }
  function Mf(e, n) {
    if (e === "click") return jr(n);
  }
  function Df(e, n) {
    if (e === "input" || e === "change") return jr(n);
  }
  function Ff(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var tn = typeof Object.is == "function" ? Object.is : Ff;
  function Zt(e, n) {
    if (tn(e, n)) return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null) return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length) return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!B.call(n, l) || !tn(e[l], n[l])) return !1;
    }
    return !0;
  }
  function Co(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function No(e, n) {
    var t = Co(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n) return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = Co(t);
    }
  }
  function Po(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Po(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function zo() {
    for (var e = window, n = wr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t) e = n.contentWindow;
      else break;
      n = wr(e.document);
    }
    return n;
  }
  function uu(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function jf(e) {
    var n = zo(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && Po(t.ownerDocument.documentElement, t)) {
      if (r !== null && uu(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t) t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, u = Math.min(r.start, l);
          r = r.end === void 0 ? u : Math.min(r.end, l), !e.extend && u > r && (l = r, r = u, u = l), l = No(t, u);
          var i = No(
            t,
            r
          );
          l && i && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== i.node || e.focusOffset !== i.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), u > r ? (e.addRange(n), e.extend(i.node, i.offset)) : (n.setEnd(i.node, i.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; ) e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++) e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var If = se && "documentMode" in document && 11 >= document.documentMode, pt = null, iu = null, Jt = null, ou = !1;
  function To(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    ou || pt == null || pt !== wr(r) || (r = pt, "selectionStart" in r && uu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Jt && Zt(Jt, r) || (Jt = r, r = Vr(iu, "onSelect"), 0 < r.length && (n = new Jl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = pt)));
  }
  function Ir(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var mt = { animationend: Ir("Animation", "AnimationEnd"), animationiteration: Ir("Animation", "AnimationIteration"), animationstart: Ir("Animation", "AnimationStart"), transitionend: Ir("Transition", "TransitionEnd") }, su = {}, Lo = {};
  se && (Lo = document.createElement("div").style, "AnimationEvent" in window || (delete mt.animationend.animation, delete mt.animationiteration.animation, delete mt.animationstart.animation), "TransitionEvent" in window || delete mt.transitionend.transition);
  function Ur(e) {
    if (su[e]) return su[e];
    if (!mt[e]) return e;
    var n = mt[e], t;
    for (t in n) if (n.hasOwnProperty(t) && t in Lo) return su[e] = n[t];
    return e;
  }
  var Ro = Ur("animationend"), Oo = Ur("animationiteration"), Mo = Ur("animationstart"), Do = Ur("transitionend"), Fo = /* @__PURE__ */ new Map(), jo = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Mn(e, n) {
    Fo.set(e, n), je(n, [e]);
  }
  for (var au = 0; au < jo.length; au++) {
    var fu = jo[au], Uf = fu.toLowerCase(), Af = fu[0].toUpperCase() + fu.slice(1);
    Mn(Uf, "on" + Af);
  }
  Mn(Ro, "onAnimationEnd"), Mn(Oo, "onAnimationIteration"), Mn(Mo, "onAnimationStart"), Mn("dblclick", "onDoubleClick"), Mn("focusin", "onFocus"), Mn("focusout", "onBlur"), Mn(Do, "onTransitionEnd"), Ne("onMouseEnter", ["mouseout", "mouseover"]), Ne("onMouseLeave", ["mouseout", "mouseover"]), Ne("onPointerEnter", ["pointerout", "pointerover"]), Ne("onPointerLeave", ["pointerout", "pointerover"]), je("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), je("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), je("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), je("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), je("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), je("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var qt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Vf = new Set("cancel close invalid load scroll toggle".split(" ").concat(qt));
  function Io(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, Ia(r, n, void 0, e), e.currentTarget = null;
  }
  function Uo(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var u = void 0;
        if (n) for (var i = r.length - 1; 0 <= i; i--) {
          var o = r[i], s = o.instance, p = o.currentTarget;
          if (o = o.listener, s !== u && l.isPropagationStopped()) break e;
          Io(l, o, p), u = s;
        }
        else for (i = 0; i < r.length; i++) {
          if (o = r[i], s = o.instance, p = o.currentTarget, o = o.listener, s !== u && l.isPropagationStopped()) break e;
          Io(l, o, p), u = s;
        }
      }
    }
    if (Er) throw e = Hl, Er = !1, Hl = null, e;
  }
  function K(e, n) {
    var t = n[gu];
    t === void 0 && (t = n[gu] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (Ao(n, e, 2, !1), t.add(r));
  }
  function cu(e, n, t) {
    var r = 0;
    n && (r |= 4), Ao(t, e, r, n);
  }
  var Ar = "_reactListening" + Math.random().toString(36).slice(2);
  function bt(e) {
    if (!e[Ar]) {
      e[Ar] = !0, ke.forEach(function(t) {
        t !== "selectionchange" && (Vf.has(t) || cu(t, !1, e), cu(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Ar] || (n[Ar] = !0, cu("selectionchange", !1, n));
    }
  }
  function Ao(e, n, t, r) {
    switch (oo(n)) {
      case 1:
        var l = ba;
        break;
      case 4:
        l = ef;
        break;
      default:
        l = Xl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Vl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function du(e, n, t, r, l) {
    var u = r;
    if (!(n & 1) && !(n & 2) && r !== null) e: for (; ; ) {
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
          if (i = Gn(o), i === null) return;
          if (s = i.tag, s === 5 || s === 6) {
            r = u = i;
            continue e;
          }
          o = o.parentNode;
        }
      }
      r = r.return;
    }
    $i(function() {
      var p = u, y = Il(t), g = [];
      e: {
        var h = Fo.get(e);
        if (h !== void 0) {
          var S = Jl, x = e;
          switch (e) {
            case "keypress":
              if (Mr(t) === 0) break e;
            case "keydown":
            case "keyup":
              S = vf;
              break;
            case "focusin":
              x = "focus", S = eu;
              break;
            case "focusout":
              x = "blur", S = eu;
              break;
            case "beforeblur":
            case "afterblur":
              S = eu;
              break;
            case "click":
              if (t.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = fo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = rf;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = wf;
              break;
            case Ro:
            case Oo:
            case Mo:
              S = of;
              break;
            case Do:
              S = Sf;
              break;
            case "scroll":
              S = nf;
              break;
            case "wheel":
              S = _f;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = af;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = po;
          }
          var C = (n & 4) !== 0, le = !C && e === "scroll", c = C ? h !== null ? h + "Capture" : null : h;
          C = [];
          for (var a = p, d; a !== null; ) {
            d = a;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, c !== null && (w = Ft(a, c), w != null && C.push(er(a, w, d)))), le) break;
            a = a.return;
          }
          0 < C.length && (h = new S(h, x, null, t, y), g.push({ event: h, listeners: C }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", h && t !== jl && (x = t.relatedTarget || t.fromElement) && (Gn(x) || x[wn])) break e;
          if ((S || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, S ? (x = t.relatedTarget || t.toElement, S = p, x = x ? Gn(x) : null, x !== null && (le = Xn(x), x !== le || x.tag !== 5 && x.tag !== 6) && (x = null)) : (S = null, x = p), S !== x)) {
            if (C = fo, w = "onMouseLeave", c = "onMouseEnter", a = "mouse", (e === "pointerout" || e === "pointerover") && (C = po, w = "onPointerLeave", c = "onPointerEnter", a = "pointer"), le = S == null ? h : yt(S), d = x == null ? h : yt(x), h = new C(w, a + "leave", S, t, y), h.target = le, h.relatedTarget = d, w = null, Gn(y) === p && (C = new C(c, a + "enter", x, t, y), C.target = d, C.relatedTarget = le, w = C), le = w, S && x) n: {
              for (C = S, c = x, a = 0, d = C; d; d = ht(d)) a++;
              for (d = 0, w = c; w; w = ht(w)) d++;
              for (; 0 < a - d; ) C = ht(C), a--;
              for (; 0 < d - a; ) c = ht(c), d--;
              for (; a--; ) {
                if (C === c || c !== null && C === c.alternate) break n;
                C = ht(C), c = ht(c);
              }
              C = null;
            }
            else C = null;
            S !== null && Vo(g, h, S, C, !1), x !== null && le !== null && Vo(g, le, x, C, !0);
          }
        }
        e: {
          if (h = p ? yt(p) : window, S = h.nodeName && h.nodeName.toLowerCase(), S === "select" || S === "input" && h.type === "file") var N = Lf;
          else if (wo(h)) if (So) N = Df;
          else {
            N = Of;
            var z = Rf;
          }
          else (S = h.nodeName) && S.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (N = Mf);
          if (N && (N = N(e, p))) {
            ko(g, N, t, y);
            break e;
          }
          z && z(e, h, p), e === "focusout" && (z = h._wrapperState) && z.controlled && h.type === "number" && Rl(h, "number", h.value);
        }
        switch (z = p ? yt(p) : window, e) {
          case "focusin":
            (wo(z) || z.contentEditable === "true") && (pt = z, iu = p, Jt = null);
            break;
          case "focusout":
            Jt = iu = pt = null;
            break;
          case "mousedown":
            ou = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ou = !1, To(g, t, y);
            break;
          case "selectionchange":
            if (If) break;
          case "keydown":
          case "keyup":
            To(g, t, y);
        }
        var T;
        if (tu) e: {
          switch (e) {
            case "compositionstart":
              var R = "onCompositionStart";
              break e;
            case "compositionend":
              R = "onCompositionEnd";
              break e;
            case "compositionupdate":
              R = "onCompositionUpdate";
              break e;
          }
          R = void 0;
        }
        else dt ? yo(e, t) && (R = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (R = "onCompositionStart");
        R && (mo && t.locale !== "ko" && (dt || R !== "onCompositionStart" ? R === "onCompositionEnd" && dt && (T = so()) : (On = y, Zl = "value" in On ? On.value : On.textContent, dt = !0)), z = Vr(p, R), 0 < z.length && (R = new co(R, e, null, t, y), g.push({ event: R, listeners: z }), T ? R.data = T : (T = go(t), T !== null && (R.data = T)))), (T = Cf ? Nf(e, t) : Pf(e, t)) && (p = Vr(p, "onBeforeInput"), 0 < p.length && (y = new co("onBeforeInput", "beforeinput", null, t, y), g.push({ event: y, listeners: p }), y.data = T));
      }
      Uo(g, n);
    });
  }
  function er(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function Vr(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, u = l.stateNode;
      l.tag === 5 && u !== null && (l = u, u = Ft(e, t), u != null && r.unshift(er(e, u, l)), u = Ft(e, n), u != null && r.push(er(e, u, l))), e = e.return;
    }
    return r;
  }
  function ht(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Vo(e, n, t, r, l) {
    for (var u = n._reactName, i = []; t !== null && t !== r; ) {
      var o = t, s = o.alternate, p = o.stateNode;
      if (s !== null && s === r) break;
      o.tag === 5 && p !== null && (o = p, l ? (s = Ft(t, u), s != null && i.unshift(er(t, s, o))) : l || (s = Ft(t, u), s != null && i.push(er(t, s, o)))), t = t.return;
    }
    i.length !== 0 && e.push({ event: n, listeners: i });
  }
  var Hf = /\r\n?/g, Bf = /\u0000|\uFFFD/g;
  function Ho(e) {
    return (typeof e == "string" ? e : "" + e).replace(Hf, `
`).replace(Bf, "");
  }
  function Hr(e, n, t) {
    if (n = Ho(n), Ho(e) !== n && t) throw Error(m(425));
  }
  function Br() {
  }
  var pu = null, mu = null;
  function hu(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var vu = typeof setTimeout == "function" ? setTimeout : void 0, $f = typeof clearTimeout == "function" ? clearTimeout : void 0, Bo = typeof Promise == "function" ? Promise : void 0, Wf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Bo < "u" ? function(e) {
    return Bo.resolve(null).then(e).catch(Qf);
  } : vu;
  function Qf(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function yu(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8) if (t = l.data, t === "/$") {
        if (r === 0) {
          e.removeChild(l), Wt(n);
          return;
        }
        r--;
      } else t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Wt(n);
  }
  function Dn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3) break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?") break;
        if (n === "/$") return null;
      }
    }
    return e;
  }
  function $o(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0) return e;
          n--;
        } else t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var vt = Math.random().toString(36).slice(2), pn = "__reactFiber$" + vt, nr = "__reactProps$" + vt, wn = "__reactContainer$" + vt, gu = "__reactEvents$" + vt, Kf = "__reactListeners$" + vt, Yf = "__reactHandles$" + vt;
  function Gn(e) {
    var n = e[pn];
    if (n) return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[wn] || t[pn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null) for (e = $o(e); e !== null; ) {
          if (t = e[pn]) return t;
          e = $o(e);
        }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function tr(e) {
    return e = e[pn] || e[wn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function yt(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(m(33));
  }
  function $r(e) {
    return e[nr] || null;
  }
  var wu = [], gt = -1;
  function Fn(e) {
    return { current: e };
  }
  function Y(e) {
    0 > gt || (e.current = wu[gt], wu[gt] = null, gt--);
  }
  function Q(e, n) {
    gt++, wu[gt] = e.current, e.current = n;
  }
  var jn = {}, ve = Fn(jn), Te = Fn(!1), Zn = jn;
  function wt(e, n) {
    var t = e.type.contextTypes;
    if (!t) return jn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, u;
    for (u in t) l[u] = n[u];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Le(e) {
    return e = e.childContextTypes, e != null;
  }
  function Wr() {
    Y(Te), Y(ve);
  }
  function Wo(e, n, t) {
    if (ve.current !== jn) throw Error(m(168));
    Q(ve, n), Q(Te, t);
  }
  function Qo(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function") return t;
    r = r.getChildContext();
    for (var l in r) if (!(l in n)) throw Error(m(108, W(e) || "Unknown", l));
    return _({}, t, r);
  }
  function Qr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || jn, Zn = ve.current, Q(ve, e), Q(Te, Te.current), !0;
  }
  function Ko(e, n, t) {
    var r = e.stateNode;
    if (!r) throw Error(m(169));
    t ? (e = Qo(e, n, Zn), r.__reactInternalMemoizedMergedChildContext = e, Y(Te), Y(ve), Q(ve, e)) : Y(Te), Q(Te, t);
  }
  var kn = null, Kr = !1, ku = !1;
  function Yo(e) {
    kn === null ? kn = [e] : kn.push(e);
  }
  function Xf(e) {
    Kr = !0, Yo(e);
  }
  function In() {
    if (!ku && kn !== null) {
      ku = !0;
      var e = 0, n = H;
      try {
        var t = kn;
        for (H = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        kn = null, Kr = !1;
      } catch (l) {
        throw kn !== null && (kn = kn.slice(e + 1)), Xi(Bl, In), l;
      } finally {
        H = n, ku = !1;
      }
    }
    return null;
  }
  var kt = [], St = 0, Yr = null, Xr = 0, Ke = [], Ye = 0, Jn = null, Sn = 1, En = "";
  function qn(e, n) {
    kt[St++] = Xr, kt[St++] = Yr, Yr = e, Xr = n;
  }
  function Xo(e, n, t) {
    Ke[Ye++] = Sn, Ke[Ye++] = En, Ke[Ye++] = Jn, Jn = e;
    var r = Sn;
    e = En;
    var l = 32 - nn(r) - 1;
    r &= ~(1 << l), t += 1;
    var u = 32 - nn(n) + l;
    if (30 < u) {
      var i = l - l % 5;
      u = (r & (1 << i) - 1).toString(32), r >>= i, l -= i, Sn = 1 << 32 - nn(n) + l | t << l | r, En = u + e;
    } else Sn = 1 << u | t << l | r, En = e;
  }
  function Su(e) {
    e.return !== null && (qn(e, 1), Xo(e, 1, 0));
  }
  function Eu(e) {
    for (; e === Yr; ) Yr = kt[--St], kt[St] = null, Xr = kt[--St], kt[St] = null;
    for (; e === Jn; ) Jn = Ke[--Ye], Ke[Ye] = null, En = Ke[--Ye], Ke[Ye] = null, Sn = Ke[--Ye], Ke[Ye] = null;
  }
  var Ve = null, He = null, J = !1, rn = null;
  function Go(e, n) {
    var t = Je(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Zo(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ve = e, He = Dn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ve = e, He = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = Jn !== null ? { id: Sn, overflow: En } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = Je(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ve = e, He = null, !0) : !1;
      default:
        return !1;
    }
  }
  function _u(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function xu(e) {
    if (J) {
      var n = He;
      if (n) {
        var t = n;
        if (!Zo(e, n)) {
          if (_u(e)) throw Error(m(418));
          n = Dn(t.nextSibling);
          var r = Ve;
          n && Zo(e, n) ? Go(r, t) : (e.flags = e.flags & -4097 | 2, J = !1, Ve = e);
        }
      } else {
        if (_u(e)) throw Error(m(418));
        e.flags = e.flags & -4097 | 2, J = !1, Ve = e;
      }
    }
  }
  function Jo(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    Ve = e;
  }
  function Gr(e) {
    if (e !== Ve) return !1;
    if (!J) return Jo(e), J = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !hu(e.type, e.memoizedProps)), n && (n = He)) {
      if (_u(e)) throw qo(), Error(m(418));
      for (; n; ) Go(e, n), n = Dn(n.nextSibling);
    }
    if (Jo(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                He = Dn(e.nextSibling);
                break e;
              }
              n--;
            } else t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        He = null;
      }
    } else He = Ve ? Dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function qo() {
    for (var e = He; e; ) e = Dn(e.nextSibling);
  }
  function Et() {
    He = Ve = null, J = !1;
  }
  function Cu(e) {
    rn === null ? rn = [e] : rn.push(e);
  }
  var Gf = he.ReactCurrentBatchConfig;
  function rr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1) throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r) throw Error(m(147, e));
        var l = r, u = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === u ? n.ref : (n = function(i) {
          var o = l.refs;
          i === null ? delete o[u] : o[u] = i;
        }, n._stringRef = u, n);
      }
      if (typeof e != "string") throw Error(m(284));
      if (!t._owner) throw Error(m(290, e));
    }
    return e;
  }
  function Zr(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function bo(e) {
    var n = e._init;
    return n(e._payload);
  }
  function es(e) {
    function n(c, a) {
      if (e) {
        var d = c.deletions;
        d === null ? (c.deletions = [a], c.flags |= 16) : d.push(a);
      }
    }
    function t(c, a) {
      if (!e) return null;
      for (; a !== null; ) n(c, a), a = a.sibling;
      return null;
    }
    function r(c, a) {
      for (c = /* @__PURE__ */ new Map(); a !== null; ) a.key !== null ? c.set(a.key, a) : c.set(a.index, a), a = a.sibling;
      return c;
    }
    function l(c, a) {
      return c = Qn(c, a), c.index = 0, c.sibling = null, c;
    }
    function u(c, a, d) {
      return c.index = d, e ? (d = c.alternate, d !== null ? (d = d.index, d < a ? (c.flags |= 2, a) : d) : (c.flags |= 2, a)) : (c.flags |= 1048576, a);
    }
    function i(c) {
      return e && c.alternate === null && (c.flags |= 2), c;
    }
    function o(c, a, d, w) {
      return a === null || a.tag !== 6 ? (a = vi(d, c.mode, w), a.return = c, a) : (a = l(a, d), a.return = c, a);
    }
    function s(c, a, d, w) {
      var N = d.type;
      return N === Pe ? y(c, a, d.props.children, w, d.key) : a !== null && (a.elementType === N || typeof N == "object" && N !== null && N.$$typeof === ze && bo(N) === a.type) ? (w = l(a, d.props), w.ref = rr(c, a, d), w.return = c, w) : (w = kl(d.type, d.key, d.props, null, c.mode, w), w.ref = rr(c, a, d), w.return = c, w);
    }
    function p(c, a, d, w) {
      return a === null || a.tag !== 4 || a.stateNode.containerInfo !== d.containerInfo || a.stateNode.implementation !== d.implementation ? (a = yi(d, c.mode, w), a.return = c, a) : (a = l(a, d.children || []), a.return = c, a);
    }
    function y(c, a, d, w, N) {
      return a === null || a.tag !== 7 ? (a = it(d, c.mode, w, N), a.return = c, a) : (a = l(a, d), a.return = c, a);
    }
    function g(c, a, d) {
      if (typeof a == "string" && a !== "" || typeof a == "number") return a = vi("" + a, c.mode, d), a.return = c, a;
      if (typeof a == "object" && a !== null) {
        switch (a.$$typeof) {
          case be:
            return d = kl(a.type, a.key, a.props, null, c.mode, d), d.ref = rr(c, null, a), d.return = c, d;
          case Ee:
            return a = yi(a, c.mode, d), a.return = c, a;
          case ze:
            var w = a._init;
            return g(c, w(a._payload), d);
        }
        if (Ot(a) || L(a)) return a = it(a, c.mode, d, null), a.return = c, a;
        Zr(c, a);
      }
      return null;
    }
    function h(c, a, d, w) {
      var N = a !== null ? a.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number") return N !== null ? null : o(c, a, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            return d.key === N ? s(c, a, d, w) : null;
          case Ee:
            return d.key === N ? p(c, a, d, w) : null;
          case ze:
            return N = d._init, h(
              c,
              a,
              N(d._payload),
              w
            );
        }
        if (Ot(d) || L(d)) return N !== null ? null : y(c, a, d, w, null);
        Zr(c, d);
      }
      return null;
    }
    function S(c, a, d, w, N) {
      if (typeof w == "string" && w !== "" || typeof w == "number") return c = c.get(d) || null, o(a, c, "" + w, N);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case be:
            return c = c.get(w.key === null ? d : w.key) || null, s(a, c, w, N);
          case Ee:
            return c = c.get(w.key === null ? d : w.key) || null, p(a, c, w, N);
          case ze:
            var z = w._init;
            return S(c, a, d, z(w._payload), N);
        }
        if (Ot(w) || L(w)) return c = c.get(d) || null, y(a, c, w, N, null);
        Zr(a, w);
      }
      return null;
    }
    function x(c, a, d, w) {
      for (var N = null, z = null, T = a, R = a = 0, ce = null; T !== null && R < d.length; R++) {
        T.index > R ? (ce = T, T = null) : ce = T.sibling;
        var U = h(c, T, d[R], w);
        if (U === null) {
          T === null && (T = ce);
          break;
        }
        e && T && U.alternate === null && n(c, T), a = u(U, a, R), z === null ? N = U : z.sibling = U, z = U, T = ce;
      }
      if (R === d.length) return t(c, T), J && qn(c, R), N;
      if (T === null) {
        for (; R < d.length; R++) T = g(c, d[R], w), T !== null && (a = u(T, a, R), z === null ? N = T : z.sibling = T, z = T);
        return J && qn(c, R), N;
      }
      for (T = r(c, T); R < d.length; R++) ce = S(T, c, R, d[R], w), ce !== null && (e && ce.alternate !== null && T.delete(ce.key === null ? R : ce.key), a = u(ce, a, R), z === null ? N = ce : z.sibling = ce, z = ce);
      return e && T.forEach(function(Kn) {
        return n(c, Kn);
      }), J && qn(c, R), N;
    }
    function C(c, a, d, w) {
      var N = L(d);
      if (typeof N != "function") throw Error(m(150));
      if (d = N.call(d), d == null) throw Error(m(151));
      for (var z = N = null, T = a, R = a = 0, ce = null, U = d.next(); T !== null && !U.done; R++, U = d.next()) {
        T.index > R ? (ce = T, T = null) : ce = T.sibling;
        var Kn = h(c, T, U.value, w);
        if (Kn === null) {
          T === null && (T = ce);
          break;
        }
        e && T && Kn.alternate === null && n(c, T), a = u(Kn, a, R), z === null ? N = Kn : z.sibling = Kn, z = Kn, T = ce;
      }
      if (U.done) return t(
        c,
        T
      ), J && qn(c, R), N;
      if (T === null) {
        for (; !U.done; R++, U = d.next()) U = g(c, U.value, w), U !== null && (a = u(U, a, R), z === null ? N = U : z.sibling = U, z = U);
        return J && qn(c, R), N;
      }
      for (T = r(c, T); !U.done; R++, U = d.next()) U = S(T, c, R, U.value, w), U !== null && (e && U.alternate !== null && T.delete(U.key === null ? R : U.key), a = u(U, a, R), z === null ? N = U : z.sibling = U, z = U);
      return e && T.forEach(function(zc) {
        return n(c, zc);
      }), J && qn(c, R), N;
    }
    function le(c, a, d, w) {
      if (typeof d == "object" && d !== null && d.type === Pe && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case be:
            e: {
              for (var N = d.key, z = a; z !== null; ) {
                if (z.key === N) {
                  if (N = d.type, N === Pe) {
                    if (z.tag === 7) {
                      t(c, z.sibling), a = l(z, d.props.children), a.return = c, c = a;
                      break e;
                    }
                  } else if (z.elementType === N || typeof N == "object" && N !== null && N.$$typeof === ze && bo(N) === z.type) {
                    t(c, z.sibling), a = l(z, d.props), a.ref = rr(c, z, d), a.return = c, c = a;
                    break e;
                  }
                  t(c, z);
                  break;
                } else n(c, z);
                z = z.sibling;
              }
              d.type === Pe ? (a = it(d.props.children, c.mode, w, d.key), a.return = c, c = a) : (w = kl(d.type, d.key, d.props, null, c.mode, w), w.ref = rr(c, a, d), w.return = c, c = w);
            }
            return i(c);
          case Ee:
            e: {
              for (z = d.key; a !== null; ) {
                if (a.key === z) if (a.tag === 4 && a.stateNode.containerInfo === d.containerInfo && a.stateNode.implementation === d.implementation) {
                  t(c, a.sibling), a = l(a, d.children || []), a.return = c, c = a;
                  break e;
                } else {
                  t(c, a);
                  break;
                }
                else n(c, a);
                a = a.sibling;
              }
              a = yi(d, c.mode, w), a.return = c, c = a;
            }
            return i(c);
          case ze:
            return z = d._init, le(c, a, z(d._payload), w);
        }
        if (Ot(d)) return x(c, a, d, w);
        if (L(d)) return C(c, a, d, w);
        Zr(c, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, a !== null && a.tag === 6 ? (t(c, a.sibling), a = l(a, d), a.return = c, c = a) : (t(c, a), a = vi(d, c.mode, w), a.return = c, c = a), i(c)) : t(c, a);
    }
    return le;
  }
  var _t = es(!0), ns = es(!1), Jr = Fn(null), qr = null, xt = null, Nu = null;
  function Pu() {
    Nu = xt = qr = null;
  }
  function zu(e) {
    var n = Jr.current;
    Y(Jr), e._currentValue = n;
  }
  function Tu(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t) break;
      e = e.return;
    }
  }
  function Ct(e, n) {
    qr = e, Nu = xt = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (Re = !0), e.firstContext = null);
  }
  function Xe(e) {
    var n = e._currentValue;
    if (Nu !== e) if (e = { context: e, memoizedValue: n, next: null }, xt === null) {
      if (qr === null) throw Error(m(308));
      xt = e, qr.dependencies = { lanes: 0, firstContext: e };
    } else xt = xt.next = e;
    return n;
  }
  var bn = null;
  function Lu(e) {
    bn === null ? bn = [e] : bn.push(e);
  }
  function ts(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Lu(n)) : (t.next = l.next, l.next = t), n.interleaved = t, _n(e, r);
  }
  function _n(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; ) e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Un = !1;
  function Ru(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function rs(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function xn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function An(e, n, t) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, F & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, _n(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Lu(r)) : (n.next = l.next, l.next = n), r.interleaved = n, _n(e, t);
  }
  function br(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Ql(e, t);
    }
  }
  function ls(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, u = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var i = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          u === null ? l = u = i : u = u.next = i, t = t.next;
        } while (t !== null);
        u === null ? l = u = n : u = u.next = n;
      } else l = u = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: u, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function el(e, n, t, r) {
    var l = e.updateQueue;
    Un = !1;
    var u = l.firstBaseUpdate, i = l.lastBaseUpdate, o = l.shared.pending;
    if (o !== null) {
      l.shared.pending = null;
      var s = o, p = s.next;
      s.next = null, i === null ? u = p : i.next = p, i = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, o = y.lastBaseUpdate, o !== i && (o === null ? y.firstBaseUpdate = p : o.next = p, y.lastBaseUpdate = s));
    }
    if (u !== null) {
      var g = l.baseState;
      i = 0, y = p = s = null, o = u;
      do {
        var h = o.lane, S = o.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: S,
            lane: 0,
            tag: o.tag,
            payload: o.payload,
            callback: o.callback,
            next: null
          });
          e: {
            var x = e, C = o;
            switch (h = n, S = t, C.tag) {
              case 1:
                if (x = C.payload, typeof x == "function") {
                  g = x.call(S, g, h);
                  break e;
                }
                g = x;
                break e;
              case 3:
                x.flags = x.flags & -65537 | 128;
              case 0:
                if (x = C.payload, h = typeof x == "function" ? x.call(S, g, h) : x, h == null) break e;
                g = _({}, g, h);
                break e;
              case 2:
                Un = !0;
            }
          }
          o.callback !== null && o.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [o] : h.push(o));
        } else S = { eventTime: S, lane: h, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, y === null ? (p = y = S, s = g) : y = y.next = S, i |= h;
        if (o = o.next, o === null) {
          if (o = l.shared.pending, o === null) break;
          h = o, o = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (!0);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          i |= l.lane, l = l.next;
        while (l !== n);
      } else u === null && (l.shared.lanes = 0);
      tt |= i, e.lanes = i, e.memoizedState = g;
    }
  }
  function us(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null) for (n = 0; n < e.length; n++) {
      var r = e[n], l = r.callback;
      if (l !== null) {
        if (r.callback = null, r = t, typeof l != "function") throw Error(m(191, l));
        l.call(r);
      }
    }
  }
  var lr = {}, mn = Fn(lr), ur = Fn(lr), ir = Fn(lr);
  function et(e) {
    if (e === lr) throw Error(m(174));
    return e;
  }
  function Ou(e, n) {
    switch (Q(ir, n), Q(ur, e), Q(mn, lr), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ml(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Ml(n, e);
    }
    Y(mn), Q(mn, n);
  }
  function Nt() {
    Y(mn), Y(ur), Y(ir);
  }
  function is(e) {
    et(ir.current);
    var n = et(mn.current), t = Ml(n, e.type);
    n !== t && (Q(ur, e), Q(mn, t));
  }
  function Mu(e) {
    ur.current === e && (Y(mn), Y(ur));
  }
  var b = Fn(0);
  function nl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!")) return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128) return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e) return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var Du = [];
  function Fu() {
    for (var e = 0; e < Du.length; e++) Du[e]._workInProgressVersionPrimary = null;
    Du.length = 0;
  }
  var tl = he.ReactCurrentDispatcher, ju = he.ReactCurrentBatchConfig, nt = 0, ee = null, ie = null, ae = null, rl = !1, or = !1, sr = 0, Zf = 0;
  function ye() {
    throw Error(m(321));
  }
  function Iu(e, n) {
    if (n === null) return !1;
    for (var t = 0; t < n.length && t < e.length; t++) if (!tn(e[t], n[t])) return !1;
    return !0;
  }
  function Uu(e, n, t, r, l, u) {
    if (nt = u, ee = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, tl.current = e === null || e.memoizedState === null ? ec : nc, e = t(r, l), or) {
      u = 0;
      do {
        if (or = !1, sr = 0, 25 <= u) throw Error(m(301));
        u += 1, ae = ie = null, n.updateQueue = null, tl.current = tc, e = t(r, l);
      } while (or);
    }
    if (tl.current = il, n = ie !== null && ie.next !== null, nt = 0, ae = ie = ee = null, rl = !1, n) throw Error(m(300));
    return e;
  }
  function Au() {
    var e = sr !== 0;
    return sr = 0, e;
  }
  function hn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ae === null ? ee.memoizedState = ae = e : ae = ae.next = e, ae;
  }
  function Ge() {
    if (ie === null) {
      var e = ee.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ie.next;
    var n = ae === null ? ee.memoizedState : ae.next;
    if (n !== null) ae = n, ie = e;
    else {
      if (e === null) throw Error(m(310));
      ie = e, e = { memoizedState: ie.memoizedState, baseState: ie.baseState, baseQueue: ie.baseQueue, queue: ie.queue, next: null }, ae === null ? ee.memoizedState = ae = e : ae = ae.next = e;
    }
    return ae;
  }
  function ar(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Vu(e) {
    var n = Ge(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = ie, l = r.baseQueue, u = t.pending;
    if (u !== null) {
      if (l !== null) {
        var i = l.next;
        l.next = u.next, u.next = i;
      }
      r.baseQueue = l = u, t.pending = null;
    }
    if (l !== null) {
      u = l.next, r = r.baseState;
      var o = i = null, s = null, p = u;
      do {
        var y = p.lane;
        if ((nt & y) === y) s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (o = s = g, i = r) : s = s.next = g, ee.lanes |= y, tt |= y;
        }
        p = p.next;
      } while (p !== null && p !== u);
      s === null ? i = r : s.next = o, tn(r, n.memoizedState) || (Re = !0), n.memoizedState = r, n.baseState = i, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        u = l.lane, ee.lanes |= u, tt |= u, l = l.next;
      while (l !== e);
    } else l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Hu(e) {
    var n = Ge(), t = n.queue;
    if (t === null) throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, u = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var i = l = l.next;
      do
        u = e(u, i.action), i = i.next;
      while (i !== l);
      tn(u, n.memoizedState) || (Re = !0), n.memoizedState = u, n.baseQueue === null && (n.baseState = u), t.lastRenderedState = u;
    }
    return [u, r];
  }
  function os() {
  }
  function ss(e, n) {
    var t = ee, r = Ge(), l = n(), u = !tn(r.memoizedState, l);
    if (u && (r.memoizedState = l, Re = !0), r = r.queue, Bu(cs.bind(null, t, r, e), [e]), r.getSnapshot !== n || u || ae !== null && ae.memoizedState.tag & 1) {
      if (t.flags |= 2048, fr(9, fs.bind(null, t, r, l, n), void 0, null), fe === null) throw Error(m(349));
      nt & 30 || as(t, n, l);
    }
    return l;
  }
  function as(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = ee.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ee.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function fs(e, n, t, r) {
    n.value = t, n.getSnapshot = r, ds(n) && ps(e);
  }
  function cs(e, n, t) {
    return t(function() {
      ds(n) && ps(e);
    });
  }
  function ds(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !tn(e, t);
    } catch {
      return !0;
    }
  }
  function ps(e) {
    var n = _n(e, 1);
    n !== null && sn(n, e, 1, -1);
  }
  function ms(e) {
    var n = hn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ar, lastRenderedState: e }, n.queue = e, e = e.dispatch = bf.bind(null, ee, e), [n.memoizedState, e];
  }
  function fr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = ee.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, ee.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function hs() {
    return Ge().memoizedState;
  }
  function ll(e, n, t, r) {
    var l = hn();
    ee.flags |= e, l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function ul(e, n, t, r) {
    var l = Ge();
    r = r === void 0 ? null : r;
    var u = void 0;
    if (ie !== null) {
      var i = ie.memoizedState;
      if (u = i.destroy, r !== null && Iu(r, i.deps)) {
        l.memoizedState = fr(n, t, u, r);
        return;
      }
    }
    ee.flags |= e, l.memoizedState = fr(1 | n, t, u, r);
  }
  function vs(e, n) {
    return ll(8390656, 8, e, n);
  }
  function Bu(e, n) {
    return ul(2048, 8, e, n);
  }
  function ys(e, n) {
    return ul(4, 2, e, n);
  }
  function gs(e, n) {
    return ul(4, 4, e, n);
  }
  function ws(e, n) {
    if (typeof n == "function") return e = e(), n(e), function() {
      n(null);
    };
    if (n != null) return e = e(), n.current = e, function() {
      n.current = null;
    };
  }
  function ks(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ul(4, 4, ws.bind(null, n, e), t);
  }
  function $u() {
  }
  function Ss(e, n) {
    var t = Ge();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Iu(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Es(e, n) {
    var t = Ge();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Iu(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function _s(e, n, t) {
    return nt & 21 ? (tn(t, n) || (t = qi(), ee.lanes |= t, tt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, Re = !0), e.memoizedState = t);
  }
  function Jf(e, n) {
    var t = H;
    H = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = ju.transition;
    ju.transition = {};
    try {
      e(!1), n();
    } finally {
      H = t, ju.transition = r;
    }
  }
  function xs() {
    return Ge().memoizedState;
  }
  function qf(e, n, t) {
    var r = $n(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Cs(e)) Ns(n, t);
    else if (t = ts(e, n, t, r), t !== null) {
      var l = xe();
      sn(t, e, r, l), Ps(t, n, r);
    }
  }
  function bf(e, n, t) {
    var r = $n(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Cs(e)) Ns(n, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = n.lastRenderedReducer, u !== null)) try {
        var i = n.lastRenderedState, o = u(i, t);
        if (l.hasEagerState = !0, l.eagerState = o, tn(o, i)) {
          var s = n.interleaved;
          s === null ? (l.next = l, Lu(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
          return;
        }
      } catch {
      } finally {
      }
      t = ts(e, n, l, r), t !== null && (l = xe(), sn(t, e, r, l), Ps(t, n, r));
    }
  }
  function Cs(e) {
    var n = e.alternate;
    return e === ee || n !== null && n === ee;
  }
  function Ns(e, n) {
    or = rl = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Ps(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Ql(e, t);
    }
  }
  var il = { readContext: Xe, useCallback: ye, useContext: ye, useEffect: ye, useImperativeHandle: ye, useInsertionEffect: ye, useLayoutEffect: ye, useMemo: ye, useReducer: ye, useRef: ye, useState: ye, useDebugValue: ye, useDeferredValue: ye, useTransition: ye, useMutableSource: ye, useSyncExternalStore: ye, useId: ye, unstable_isNewReconciler: !1 }, ec = { readContext: Xe, useCallback: function(e, n) {
    return hn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: Xe, useEffect: vs, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ll(
      4194308,
      4,
      ws.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return ll(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return ll(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = hn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = hn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = qf.bind(null, ee, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = hn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: ms, useDebugValue: $u, useDeferredValue: function(e) {
    return hn().memoizedState = e;
  }, useTransition: function() {
    var e = ms(!1), n = e[0];
    return e = Jf.bind(null, e[1]), hn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = ee, l = hn();
    if (J) {
      if (t === void 0) throw Error(m(407));
      t = t();
    } else {
      if (t = n(), fe === null) throw Error(m(349));
      nt & 30 || as(r, n, t);
    }
    l.memoizedState = t;
    var u = { value: t, getSnapshot: n };
    return l.queue = u, vs(cs.bind(
      null,
      r,
      u,
      e
    ), [e]), r.flags |= 2048, fr(9, fs.bind(null, r, u, t, n), void 0, null), t;
  }, useId: function() {
    var e = hn(), n = fe.identifierPrefix;
    if (J) {
      var t = En, r = Sn;
      t = (r & ~(1 << 32 - nn(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = sr++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else t = Zf++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, nc = {
    readContext: Xe,
    useCallback: Ss,
    useContext: Xe,
    useEffect: Bu,
    useImperativeHandle: ks,
    useInsertionEffect: ys,
    useLayoutEffect: gs,
    useMemo: Es,
    useReducer: Vu,
    useRef: hs,
    useState: function() {
      return Vu(ar);
    },
    useDebugValue: $u,
    useDeferredValue: function(e) {
      var n = Ge();
      return _s(n, ie.memoizedState, e);
    },
    useTransition: function() {
      var e = Vu(ar)[0], n = Ge().memoizedState;
      return [e, n];
    },
    useMutableSource: os,
    useSyncExternalStore: ss,
    useId: xs,
    unstable_isNewReconciler: !1
  }, tc = { readContext: Xe, useCallback: Ss, useContext: Xe, useEffect: Bu, useImperativeHandle: ks, useInsertionEffect: ys, useLayoutEffect: gs, useMemo: Es, useReducer: Hu, useRef: hs, useState: function() {
    return Hu(ar);
  }, useDebugValue: $u, useDeferredValue: function(e) {
    var n = Ge();
    return ie === null ? n.memoizedState = e : _s(n, ie.memoizedState, e);
  }, useTransition: function() {
    var e = Hu(ar)[0], n = Ge().memoizedState;
    return [e, n];
  }, useMutableSource: os, useSyncExternalStore: ss, useId: xs, unstable_isNewReconciler: !1 };
  function ln(e, n) {
    if (e && e.defaultProps) {
      n = _({}, n), e = e.defaultProps;
      for (var t in e) n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  function Wu(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : _({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var ol = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = xe(), l = $n(e), u = xn(r, l);
    u.payload = n, t != null && (u.callback = t), n = An(e, u, l), n !== null && (sn(n, e, l, r), br(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = xe(), l = $n(e), u = xn(r, l);
    u.tag = 1, u.payload = n, t != null && (u.callback = t), n = An(e, u, l), n !== null && (sn(n, e, l, r), br(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = xe(), r = $n(e), l = xn(t, r);
    l.tag = 2, n != null && (l.callback = n), n = An(e, l, r), n !== null && (sn(n, e, r, t), br(n, e, r));
  } };
  function zs(e, n, t, r, l, u, i) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, u, i) : n.prototype && n.prototype.isPureReactComponent ? !Zt(t, r) || !Zt(l, u) : !0;
  }
  function Ts(e, n, t) {
    var r = !1, l = jn, u = n.contextType;
    return typeof u == "object" && u !== null ? u = Xe(u) : (l = Le(n) ? Zn : ve.current, r = n.contextTypes, u = (r = r != null) ? wt(e, l) : jn), n = new n(t, u), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = ol, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = u), n;
  }
  function Ls(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && ol.enqueueReplaceState(n, n.state, null);
  }
  function Qu(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = {}, Ru(e);
    var u = n.contextType;
    typeof u == "object" && u !== null ? l.context = Xe(u) : (u = Le(n) ? Zn : ve.current, l.context = wt(e, u)), l.state = e.memoizedState, u = n.getDerivedStateFromProps, typeof u == "function" && (Wu(e, n, u, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && ol.enqueueReplaceState(l, l.state, null), el(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function Pt(e, n) {
    try {
      var t = "", r = n;
      do
        t += j(r), r = r.return;
      while (r);
      var l = t;
    } catch (u) {
      l = `
Error generating stack: ` + u.message + `
` + u.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Ku(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Yu(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var rc = typeof WeakMap == "function" ? WeakMap : Map;
  function Rs(e, n, t) {
    t = xn(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      ml || (ml = !0, si = r), Yu(e, n);
    }, t;
  }
  function Os(e, n, t) {
    t = xn(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        Yu(e, n);
      };
    }
    var u = e.stateNode;
    return u !== null && typeof u.componentDidCatch == "function" && (t.callback = function() {
      Yu(e, n), typeof r != "function" && (Hn === null ? Hn = /* @__PURE__ */ new Set([this]) : Hn.add(this));
      var i = n.stack;
      this.componentDidCatch(n.value, { componentStack: i !== null ? i : "" });
    }), t;
  }
  function Ms(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new rc();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = yc.bind(null, e, n, t), n.then(e, e));
  }
  function Ds(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n) return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Fs(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = xn(-1, 1), n.tag = 2, An(t, n, 1))), t.lanes |= 1), e);
  }
  var lc = he.ReactCurrentOwner, Re = !1;
  function _e(e, n, t, r) {
    n.child = e === null ? ns(n, null, t, r) : _t(n, e.child, t, r);
  }
  function js(e, n, t, r, l) {
    t = t.render;
    var u = n.ref;
    return Ct(n, l), r = Uu(e, n, t, r, u, l), t = Au(), e !== null && !Re ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Cn(e, n, l)) : (J && t && Su(n), n.flags |= 1, _e(e, n, r, l), n.child);
  }
  function Is(e, n, t, r, l) {
    if (e === null) {
      var u = t.type;
      return typeof u == "function" && !hi(u) && u.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = u, Us(e, n, u, r, l)) : (e = kl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (u = e.child, !(e.lanes & l)) {
      var i = u.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Zt, t(i, r) && e.ref === n.ref) return Cn(e, n, l);
    }
    return n.flags |= 1, e = Qn(u, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function Us(e, n, t, r, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (Zt(u, r) && e.ref === n.ref) if (Re = !1, n.pendingProps = r = u, (e.lanes & l) !== 0) e.flags & 131072 && (Re = !0);
      else return n.lanes = e.lanes, Cn(e, n, l);
    }
    return Xu(e, n, t, r, l);
  }
  function As(e, n, t) {
    var r = n.pendingProps, l = r.children, u = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden") if (!(n.mode & 1)) n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Q(Tt, Be), Be |= t;
    else {
      if (!(t & 1073741824)) return e = u !== null ? u.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, Q(Tt, Be), Be |= e, null;
      n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = u !== null ? u.baseLanes : t, Q(Tt, Be), Be |= r;
    }
    else u !== null ? (r = u.baseLanes | t, n.memoizedState = null) : r = t, Q(Tt, Be), Be |= r;
    return _e(e, n, l, t), n.child;
  }
  function Vs(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Xu(e, n, t, r, l) {
    var u = Le(t) ? Zn : ve.current;
    return u = wt(n, u), Ct(n, l), t = Uu(e, n, t, r, u, l), r = Au(), e !== null && !Re ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Cn(e, n, l)) : (J && r && Su(n), n.flags |= 1, _e(e, n, t, l), n.child);
  }
  function Hs(e, n, t, r, l) {
    if (Le(t)) {
      var u = !0;
      Qr(n);
    } else u = !1;
    if (Ct(n, l), n.stateNode === null) al(e, n), Ts(n, t, r), Qu(n, t, r, l), r = !0;
    else if (e === null) {
      var i = n.stateNode, o = n.memoizedProps;
      i.props = o;
      var s = i.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = Xe(p) : (p = Le(t) ? Zn : ve.current, p = wt(n, p));
      var y = t.getDerivedStateFromProps, g = typeof y == "function" || typeof i.getSnapshotBeforeUpdate == "function";
      g || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== r || s !== p) && Ls(n, i, r, p), Un = !1;
      var h = n.memoizedState;
      i.state = h, el(n, r, i, l), s = n.memoizedState, o !== r || h !== s || Te.current || Un ? (typeof y == "function" && (Wu(n, t, y, r), s = n.memoizedState), (o = Un || zs(n, t, o, r, h, s, p)) ? (g || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), i.props = r, i.state = s, i.context = p, r = o) : (typeof i.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      i = n.stateNode, rs(e, n), o = n.memoizedProps, p = n.type === n.elementType ? o : ln(n.type, o), i.props = p, g = n.pendingProps, h = i.context, s = t.contextType, typeof s == "object" && s !== null ? s = Xe(s) : (s = Le(t) ? Zn : ve.current, s = wt(n, s));
      var S = t.getDerivedStateFromProps;
      (y = typeof S == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (o !== g || h !== s) && Ls(n, i, r, s), Un = !1, h = n.memoizedState, i.state = h, el(n, r, i, l);
      var x = n.memoizedState;
      o !== g || h !== x || Te.current || Un ? (typeof S == "function" && (Wu(n, t, S, r), x = n.memoizedState), (p = Un || zs(n, t, p, r, h, x, s) || !1) ? (y || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(r, x, s), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(r, x, s)), typeof i.componentDidUpdate == "function" && (n.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = x), i.props = r, i.state = x, i.context = s, r = p) : (typeof i.componentDidUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Gu(e, n, t, r, u, l);
  }
  function Gu(e, n, t, r, l, u) {
    Vs(e, n);
    var i = (n.flags & 128) !== 0;
    if (!r && !i) return l && Ko(n, t, !1), Cn(e, n, u);
    r = n.stateNode, lc.current = n;
    var o = i && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && i ? (n.child = _t(n, e.child, null, u), n.child = _t(n, null, o, u)) : _e(e, n, o, u), n.memoizedState = r.state, l && Ko(n, t, !0), n.child;
  }
  function Bs(e) {
    var n = e.stateNode;
    n.pendingContext ? Wo(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Wo(e, n.context, !1), Ou(e, n.containerInfo);
  }
  function $s(e, n, t, r, l) {
    return Et(), Cu(l), n.flags |= 256, _e(e, n, t, r), n.child;
  }
  var Zu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ju(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Ws(e, n, t) {
    var r = n.pendingProps, l = b.current, u = !1, i = (n.flags & 128) !== 0, o;
    if ((o = i) || (o = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), o ? (u = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), Q(b, l & 1), e === null)
      return xu(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (i = r.children, e = r.fallback, u ? (r = n.mode, u = n.child, i = { mode: "hidden", children: i }, !(r & 1) && u !== null ? (u.childLanes = 0, u.pendingProps = i) : u = Sl(i, r, 0, null), e = it(e, r, t, null), u.return = n, e.return = n, u.sibling = e, n.child = u, n.child.memoizedState = Ju(t), n.memoizedState = Zu, e) : qu(n, i));
    if (l = e.memoizedState, l !== null && (o = l.dehydrated, o !== null)) return uc(e, n, i, r, o, l, t);
    if (u) {
      u = r.fallback, i = n.mode, l = e.child, o = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(i & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = Qn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), o !== null ? u = Qn(o, u) : (u = it(u, i, t, null), u.flags |= 2), u.return = n, r.return = n, r.sibling = u, n.child = r, r = u, u = n.child, i = e.child.memoizedState, i = i === null ? Ju(t) : { baseLanes: i.baseLanes | t, cachePool: null, transitions: i.transitions }, u.memoizedState = i, u.childLanes = e.childLanes & ~t, n.memoizedState = Zu, r;
    }
    return u = e.child, e = u.sibling, r = Qn(u, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function qu(e, n) {
    return n = Sl({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function sl(e, n, t, r) {
    return r !== null && Cu(r), _t(n, e.child, null, t), e = qu(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function uc(e, n, t, r, l, u, i) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Ku(Error(m(422))), sl(e, n, i, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (u = r.fallback, l = n.mode, r = Sl({ mode: "visible", children: r.children }, l, 0, null), u = it(u, l, i, null), u.flags |= 2, r.return = n, u.return = n, r.sibling = u, n.child = r, n.mode & 1 && _t(n, e.child, null, i), n.child.memoizedState = Ju(i), n.memoizedState = Zu, u);
    if (!(n.mode & 1)) return sl(e, n, i, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r) var o = r.dgst;
      return r = o, u = Error(m(419)), r = Ku(u, r, void 0), sl(e, n, i, r);
    }
    if (o = (i & e.childLanes) !== 0, Re || o) {
      if (r = fe, r !== null) {
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
        l = l & (r.suspendedLanes | i) ? 0 : l, l !== 0 && l !== u.retryLane && (u.retryLane = l, _n(e, l), sn(r, e, l, -1));
      }
      return mi(), r = Ku(Error(m(421))), sl(e, n, i, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = gc.bind(null, e), l._reactRetry = n, null) : (e = u.treeContext, He = Dn(l.nextSibling), Ve = n, J = !0, rn = null, e !== null && (Ke[Ye++] = Sn, Ke[Ye++] = En, Ke[Ye++] = Jn, Sn = e.id, En = e.overflow, Jn = n), n = qu(n, r.children), n.flags |= 4096, n);
  }
  function Qs(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Tu(e.return, n, t);
  }
  function bu(e, n, t, r, l) {
    var u = e.memoizedState;
    u === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (u.isBackwards = n, u.rendering = null, u.renderingStartTime = 0, u.last = r, u.tail = t, u.tailMode = l);
  }
  function Ks(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, u = r.tail;
    if (_e(e, n, r.children, t), r = b.current, r & 2) r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128) e: for (e = n.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Qs(e, t, n);
        else if (e.tag === 19) Qs(e, t, n);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === n) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === n) break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
      r &= 1;
    }
    if (Q(b, r), !(n.mode & 1)) n.memoizedState = null;
    else switch (l) {
      case "forwards":
        for (t = n.child, l = null; t !== null; ) e = t.alternate, e !== null && nl(e) === null && (l = t), t = t.sibling;
        t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), bu(n, !1, l, t, u);
        break;
      case "backwards":
        for (t = null, l = n.child, n.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && nl(e) === null) {
            n.child = l;
            break;
          }
          e = l.sibling, l.sibling = t, t = l, l = e;
        }
        bu(n, !0, t, null, u);
        break;
      case "together":
        bu(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null;
    }
    return n.child;
  }
  function al(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Cn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), tt |= n.lanes, !(t & n.childLanes)) return null;
    if (e !== null && n.child !== e.child) throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = Qn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; ) e = e.sibling, t = t.sibling = Qn(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function ic(e, n, t) {
    switch (n.tag) {
      case 3:
        Bs(n), Et();
        break;
      case 5:
        is(n);
        break;
      case 1:
        Le(n.type) && Qr(n);
        break;
      case 4:
        Ou(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        Q(Jr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (Q(b, b.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Ws(e, n, t) : (Q(b, b.current & 1), e = Cn(e, n, t), e !== null ? e.sibling : null);
        Q(b, b.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r) return Ks(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Q(b, b.current), r) break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, As(e, n, t);
    }
    return Cn(e, n, t);
  }
  var Ys, ei, Xs, Gs;
  Ys = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6) e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n) return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }, ei = function() {
  }, Xs = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, et(mn.current);
      var u = null;
      switch (t) {
        case "input":
          l = Tl(e, l), r = Tl(e, r), u = [];
          break;
        case "select":
          l = _({}, l, { value: void 0 }), r = _({}, r, { value: void 0 }), u = [];
          break;
        case "textarea":
          l = Ol(e, l), r = Ol(e, r), u = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Br);
      }
      Dl(t, r);
      var i;
      t = null;
      for (p in l) if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null) if (p === "style") {
        var o = l[p];
        for (i in o) o.hasOwnProperty(i) && (t || (t = {}), t[i] = "");
      } else p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (Ce.hasOwnProperty(p) ? u || (u = []) : (u = u || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (o = l?.[p], r.hasOwnProperty(p) && s !== o && (s != null || o != null)) if (p === "style") if (o) {
          for (i in o) !o.hasOwnProperty(i) || s && s.hasOwnProperty(i) || (t || (t = {}), t[i] = "");
          for (i in s) s.hasOwnProperty(i) && o[i] !== s[i] && (t || (t = {}), t[i] = s[i]);
        } else t || (u || (u = []), u.push(
          p,
          t
        )), t = s;
        else p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, o = o ? o.__html : void 0, s != null && o !== s && (u = u || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (u = u || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (Ce.hasOwnProperty(p) ? (s != null && p === "onScroll" && K("scroll", e), u || o === s || (u = [])) : (u = u || []).push(p, s));
      }
      t && (u = u || []).push("style", t);
      var p = u;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, Gs = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function cr(e, n) {
    if (!J) switch (e.tailMode) {
      case "hidden":
        n = e.tail;
        for (var t = null; n !== null; ) n.alternate !== null && (t = n), n = n.sibling;
        t === null ? e.tail = null : t.sibling = null;
        break;
      case "collapsed":
        t = e.tail;
        for (var r = null; t !== null; ) t.alternate !== null && (r = t), t = t.sibling;
        r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    }
  }
  function ge(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n) for (var l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else for (l = e.child; l !== null; ) t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function oc(e, n, t) {
    var r = n.pendingProps;
    switch (Eu(n), n.tag) {
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
        return ge(n), null;
      case 1:
        return Le(n.type) && Wr(), ge(n), null;
      case 3:
        return r = n.stateNode, Nt(), Y(Te), Y(ve), Fu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Gr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, rn !== null && (ci(rn), rn = null))), ei(e, n), ge(n), null;
      case 5:
        Mu(n);
        var l = et(ir.current);
        if (t = n.type, e !== null && n.stateNode != null) Xs(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null) throw Error(m(166));
            return ge(n), null;
          }
          if (e = et(mn.current), Gr(n)) {
            r = n.stateNode, t = n.type;
            var u = n.memoizedProps;
            switch (r[pn] = n, r[nr] = u, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                K("cancel", r), K("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                K("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < qt.length; l++) K(qt[l], r);
                break;
              case "source":
                K("error", r);
                break;
              case "img":
              case "image":
              case "link":
                K(
                  "error",
                  r
                ), K("load", r);
                break;
              case "details":
                K("toggle", r);
                break;
              case "input":
                zi(r, u), K("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!u.multiple }, K("invalid", r);
                break;
              case "textarea":
                Ri(r, u), K("invalid", r);
            }
            Dl(t, u), l = null;
            for (var i in u) if (u.hasOwnProperty(i)) {
              var o = u[i];
              i === "children" ? typeof o == "string" ? r.textContent !== o && (u.suppressHydrationWarning !== !0 && Hr(r.textContent, o, e), l = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (u.suppressHydrationWarning !== !0 && Hr(
                r.textContent,
                o,
                e
              ), l = ["children", "" + o]) : Ce.hasOwnProperty(i) && o != null && i === "onScroll" && K("scroll", r);
            }
            switch (t) {
              case "input":
                gr(r), Li(r, u, !0);
                break;
              case "textarea":
                gr(r), Mi(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof u.onClick == "function" && (r.onclick = Br);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            i = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Di(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = i.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = i.createElement(t, { is: r.is }) : (e = i.createElement(t), t === "select" && (i = e, r.multiple ? i.multiple = !0 : r.size && (i.size = r.size))) : e = i.createElementNS(e, t), e[pn] = n, e[nr] = r, Ys(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (i = Fl(t, r), t) {
                case "dialog":
                  K("cancel", e), K("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  K("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < qt.length; l++) K(qt[l], e);
                  l = r;
                  break;
                case "source":
                  K("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  K(
                    "error",
                    e
                  ), K("load", e), l = r;
                  break;
                case "details":
                  K("toggle", e), l = r;
                  break;
                case "input":
                  zi(e, r), l = Tl(e, r), K("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = _({}, r, { value: void 0 }), K("invalid", e);
                  break;
                case "textarea":
                  Ri(e, r), l = Ol(e, r), K("invalid", e);
                  break;
                default:
                  l = r;
              }
              Dl(t, l), o = l;
              for (u in o) if (o.hasOwnProperty(u)) {
                var s = o[u];
                u === "style" ? Ii(e, s) : u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Fi(e, s)) : u === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Mt(e, s) : typeof s == "number" && Mt(e, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Ce.hasOwnProperty(u) ? s != null && u === "onScroll" && K("scroll", e) : s != null && qe(e, u, s, i));
              }
              switch (t) {
                case "input":
                  gr(e), Li(e, r, !1);
                  break;
                case "textarea":
                  gr(e), Mi(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + V(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, u = r.value, u != null ? ot(e, !!r.multiple, u, !1) : r.defaultValue != null && ot(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Br);
              }
              switch (t) {
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
            r && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return ge(n), null;
      case 6:
        if (e && n.stateNode != null) Gs(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null) throw Error(m(166));
          if (t = et(ir.current), et(mn.current), Gr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[pn] = n, (u = r.nodeValue !== t) && (e = Ve, e !== null)) switch (e.tag) {
              case 3:
                Hr(r.nodeValue, t, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 && Hr(r.nodeValue, t, (e.mode & 1) !== 0);
            }
            u && (n.flags |= 4);
          } else r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[pn] = n, n.stateNode = r;
        }
        return ge(n), null;
      case 13:
        if (Y(b), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (J && He !== null && n.mode & 1 && !(n.flags & 128)) qo(), Et(), n.flags |= 98560, u = !1;
          else if (u = Gr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(m(318));
              if (u = n.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(m(317));
              u[pn] = n;
            } else Et(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            ge(n), u = !1;
          } else rn !== null && (ci(rn), rn = null), u = !0;
          if (!u) return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || b.current & 1 ? oe === 0 && (oe = 3) : mi())), n.updateQueue !== null && (n.flags |= 4), ge(n), null);
      case 4:
        return Nt(), ei(e, n), e === null && bt(n.stateNode.containerInfo), ge(n), null;
      case 10:
        return zu(n.type._context), ge(n), null;
      case 17:
        return Le(n.type) && Wr(), ge(n), null;
      case 19:
        if (Y(b), u = n.memoizedState, u === null) return ge(n), null;
        if (r = (n.flags & 128) !== 0, i = u.rendering, i === null) if (r) cr(u, !1);
        else {
          if (oe !== 0 || e !== null && e.flags & 128) for (e = n.child; e !== null; ) {
            if (i = nl(e), i !== null) {
              for (n.flags |= 128, cr(u, !1), r = i.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; ) u = t, e = r, u.flags &= 14680066, i = u.alternate, i === null ? (u.childLanes = 0, u.lanes = e, u.child = null, u.subtreeFlags = 0, u.memoizedProps = null, u.memoizedState = null, u.updateQueue = null, u.dependencies = null, u.stateNode = null) : (u.childLanes = i.childLanes, u.lanes = i.lanes, u.child = i.child, u.subtreeFlags = 0, u.deletions = null, u.memoizedProps = i.memoizedProps, u.memoizedState = i.memoizedState, u.updateQueue = i.updateQueue, u.type = i.type, e = i.dependencies, u.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
              return Q(b, b.current & 1 | 2), n.child;
            }
            e = e.sibling;
          }
          u.tail !== null && re() > Lt && (n.flags |= 128, r = !0, cr(u, !1), n.lanes = 4194304);
        }
        else {
          if (!r) if (e = nl(i), e !== null) {
            if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), cr(u, !0), u.tail === null && u.tailMode === "hidden" && !i.alternate && !J) return ge(n), null;
          } else 2 * re() - u.renderingStartTime > Lt && t !== 1073741824 && (n.flags |= 128, r = !0, cr(u, !1), n.lanes = 4194304);
          u.isBackwards ? (i.sibling = n.child, n.child = i) : (t = u.last, t !== null ? t.sibling = i : n.child = i, u.last = i);
        }
        return u.tail !== null ? (n = u.tail, u.rendering = n, u.tail = n.sibling, u.renderingStartTime = re(), n.sibling = null, t = b.current, Q(b, r ? t & 1 | 2 : t & 1), n) : (ge(n), null);
      case 22:
      case 23:
        return pi(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Be & 1073741824 && (ge(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : ge(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function sc(e, n) {
    switch (Eu(n), n.tag) {
      case 1:
        return Le(n.type) && Wr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Nt(), Y(Te), Y(ve), Fu(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Mu(n), null;
      case 13:
        if (Y(b), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null) throw Error(m(340));
          Et();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return Y(b), null;
      case 4:
        return Nt(), null;
      case 10:
        return zu(n.type._context), null;
      case 22:
      case 23:
        return pi(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1, we = !1, ac = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function zt(e, n) {
    var t = e.ref;
    if (t !== null) if (typeof t == "function") try {
      t(null);
    } catch (r) {
      te(e, n, r);
    }
    else t.current = null;
  }
  function ni(e, n, t) {
    try {
      t();
    } catch (r) {
      te(e, n, r);
    }
  }
  var Zs = !1;
  function fc(e, n) {
    if (pu = Lr, e = zo(), uu(e)) {
      if ("selectionStart" in e) var t = { start: e.selectionStart, end: e.selectionEnd };
      else e: {
        t = (t = e.ownerDocument) && t.defaultView || window;
        var r = t.getSelection && t.getSelection();
        if (r && r.rangeCount !== 0) {
          t = r.anchorNode;
          var l = r.anchorOffset, u = r.focusNode;
          r = r.focusOffset;
          try {
            t.nodeType, u.nodeType;
          } catch {
            t = null;
            break e;
          }
          var i = 0, o = -1, s = -1, p = 0, y = 0, g = e, h = null;
          n: for (; ; ) {
            for (var S; g !== t || l !== 0 && g.nodeType !== 3 || (o = i + l), g !== u || r !== 0 && g.nodeType !== 3 || (s = i + r), g.nodeType === 3 && (i += g.nodeValue.length), (S = g.firstChild) !== null; )
              h = g, g = S;
            for (; ; ) {
              if (g === e) break n;
              if (h === t && ++p === l && (o = i), h === u && ++y === r && (s = i), (S = g.nextSibling) !== null) break;
              g = h, h = g.parentNode;
            }
            g = S;
          }
          t = o === -1 || s === -1 ? null : { start: o, end: s };
        } else t = null;
      }
      t = t || { start: 0, end: 0 };
    } else t = null;
    for (mu = { focusedElem: e, selectionRange: t }, Lr = !1, E = n; E !== null; ) if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null) e.return = n, E = e;
    else for (; E !== null; ) {
      n = E;
      try {
        var x = n.alternate;
        if (n.flags & 1024) switch (n.tag) {
          case 0:
          case 11:
          case 15:
            break;
          case 1:
            if (x !== null) {
              var C = x.memoizedProps, le = x.memoizedState, c = n.stateNode, a = c.getSnapshotBeforeUpdate(n.elementType === n.type ? C : ln(n.type, C), le);
              c.__reactInternalSnapshotBeforeUpdate = a;
            }
            break;
          case 3:
            var d = n.stateNode.containerInfo;
            d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
            break;
          case 5:
          case 6:
          case 4:
          case 17:
            break;
          default:
            throw Error(m(163));
        }
      } catch (w) {
        te(n, n.return, w);
      }
      if (e = n.sibling, e !== null) {
        e.return = n.return, E = e;
        break;
      }
      E = n.return;
    }
    return x = Zs, Zs = !1, x;
  }
  function dr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var u = l.destroy;
          l.destroy = void 0, u !== void 0 && ni(n, t, u);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function cl(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ti(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function Js(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Js(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[pn], delete n[nr], delete n[gu], delete n[Kf], delete n[Yf])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function qs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function bs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || qs(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ri(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Br));
    else if (r !== 4 && (e = e.child, e !== null)) for (ri(e, n, t), e = e.sibling; e !== null; ) ri(e, n, t), e = e.sibling;
  }
  function li(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null)) for (li(e, n, t), e = e.sibling; e !== null; ) li(e, n, t), e = e.sibling;
  }
  var de = null, un = !1;
  function Vn(e, n, t) {
    for (t = t.child; t !== null; ) ea(e, n, t), t = t.sibling;
  }
  function ea(e, n, t) {
    if (dn && typeof dn.onCommitFiberUnmount == "function") try {
      dn.onCommitFiberUnmount(xr, t);
    } catch {
    }
    switch (t.tag) {
      case 5:
        we || zt(t, n);
      case 6:
        var r = de, l = un;
        de = null, Vn(e, n, t), de = r, un = l, de !== null && (un ? (e = de, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : de.removeChild(t.stateNode));
        break;
      case 18:
        de !== null && (un ? (e = de, t = t.stateNode, e.nodeType === 8 ? yu(e.parentNode, t) : e.nodeType === 1 && yu(e, t), Wt(e)) : yu(de, t.stateNode));
        break;
      case 4:
        r = de, l = un, de = t.stateNode.containerInfo, un = !0, Vn(e, n, t), de = r, un = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!we && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var u = l, i = u.destroy;
            u = u.tag, i !== void 0 && (u & 2 || u & 4) && ni(t, n, i), l = l.next;
          } while (l !== r);
        }
        Vn(e, n, t);
        break;
      case 1:
        if (!we && (zt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function")) try {
          r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
        } catch (o) {
          te(t, n, o);
        }
        Vn(e, n, t);
        break;
      case 21:
        Vn(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (we = (r = we) || t.memoizedState !== null, Vn(e, n, t), we = r) : Vn(e, n, t);
        break;
      default:
        Vn(e, n, t);
    }
  }
  function na(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new ac()), n.forEach(function(r) {
        var l = wc.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function on(e, n) {
    var t = n.deletions;
    if (t !== null) for (var r = 0; r < t.length; r++) {
      var l = t[r];
      try {
        var u = e, i = n, o = i;
        e: for (; o !== null; ) {
          switch (o.tag) {
            case 5:
              de = o.stateNode, un = !1;
              break e;
            case 3:
              de = o.stateNode.containerInfo, un = !0;
              break e;
            case 4:
              de = o.stateNode.containerInfo, un = !0;
              break e;
          }
          o = o.return;
        }
        if (de === null) throw Error(m(160));
        ea(u, i, l), de = null, un = !1;
        var s = l.alternate;
        s !== null && (s.return = null), l.return = null;
      } catch (p) {
        te(l, n, p);
      }
    }
    if (n.subtreeFlags & 12854) for (n = n.child; n !== null; ) ta(n, e), n = n.sibling;
  }
  function ta(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (on(n, e), vn(e), r & 4) {
          try {
            dr(3, e, e.return), cl(3, e);
          } catch (C) {
            te(e, e.return, C);
          }
          try {
            dr(5, e, e.return);
          } catch (C) {
            te(e, e.return, C);
          }
        }
        break;
      case 1:
        on(n, e), vn(e), r & 512 && t !== null && zt(t, t.return);
        break;
      case 5:
        if (on(n, e), vn(e), r & 512 && t !== null && zt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Mt(l, "");
          } catch (C) {
            te(e, e.return, C);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var u = e.memoizedProps, i = t !== null ? t.memoizedProps : u, o = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null) try {
            o === "input" && u.type === "radio" && u.name != null && Ti(l, u), Fl(o, i);
            var p = Fl(o, u);
            for (i = 0; i < s.length; i += 2) {
              var y = s[i], g = s[i + 1];
              y === "style" ? Ii(l, g) : y === "dangerouslySetInnerHTML" ? Fi(l, g) : y === "children" ? Mt(l, g) : qe(l, y, g, p);
            }
            switch (o) {
              case "input":
                Ll(l, u);
                break;
              case "textarea":
                Oi(l, u);
                break;
              case "select":
                var h = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!u.multiple;
                var S = u.value;
                S != null ? ot(l, !!u.multiple, S, !1) : h !== !!u.multiple && (u.defaultValue != null ? ot(
                  l,
                  !!u.multiple,
                  u.defaultValue,
                  !0
                ) : ot(l, !!u.multiple, u.multiple ? [] : "", !1));
            }
            l[nr] = u;
          } catch (C) {
            te(e, e.return, C);
          }
        }
        break;
      case 6:
        if (on(n, e), vn(e), r & 4) {
          if (e.stateNode === null) throw Error(m(162));
          l = e.stateNode, u = e.memoizedProps;
          try {
            l.nodeValue = u;
          } catch (C) {
            te(e, e.return, C);
          }
        }
        break;
      case 3:
        if (on(n, e), vn(e), r & 4 && t !== null && t.memoizedState.isDehydrated) try {
          Wt(n.containerInfo);
        } catch (C) {
          te(e, e.return, C);
        }
        break;
      case 4:
        on(n, e), vn(e);
        break;
      case 13:
        on(n, e), vn(e), l = e.child, l.flags & 8192 && (u = l.memoizedState !== null, l.stateNode.isHidden = u, !u || l.alternate !== null && l.alternate.memoizedState !== null || (oi = re())), r & 4 && na(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (we = (p = we) || y, on(n, e), we = p) : on(n, e), vn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1) for (E = e, y = e.child; y !== null; ) {
            for (g = E = y; E !== null; ) {
              switch (h = E, S = h.child, h.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  dr(4, h, h.return);
                  break;
                case 1:
                  zt(h, h.return);
                  var x = h.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    r = h, t = h.return;
                    try {
                      n = r, x.props = n.memoizedProps, x.state = n.memoizedState, x.componentWillUnmount();
                    } catch (C) {
                      te(r, t, C);
                    }
                  }
                  break;
                case 5:
                  zt(h, h.return);
                  break;
                case 22:
                  if (h.memoizedState !== null) {
                    ua(g);
                    continue;
                  }
              }
              S !== null ? (S.return = h, E = S) : ua(g);
            }
            y = y.sibling;
          }
          e: for (y = null, g = e; ; ) {
            if (g.tag === 5) {
              if (y === null) {
                y = g;
                try {
                  l = g.stateNode, p ? (u = l.style, typeof u.setProperty == "function" ? u.setProperty("display", "none", "important") : u.display = "none") : (o = g.stateNode, s = g.memoizedProps.style, i = s != null && s.hasOwnProperty("display") ? s.display : null, o.style.display = ji("display", i));
                } catch (C) {
                  te(e, e.return, C);
                }
              }
            } else if (g.tag === 6) {
              if (y === null) try {
                g.stateNode.nodeValue = p ? "" : g.memoizedProps;
              } catch (C) {
                te(e, e.return, C);
              }
            } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
              g.child.return = g, g = g.child;
              continue;
            }
            if (g === e) break e;
            for (; g.sibling === null; ) {
              if (g.return === null || g.return === e) break e;
              y === g && (y = null), g = g.return;
            }
            y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
          }
        }
        break;
      case 19:
        on(n, e), vn(e), r & 4 && na(e);
        break;
      case 21:
        break;
      default:
        on(
          n,
          e
        ), vn(e);
    }
  }
  function vn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (qs(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Mt(l, ""), r.flags &= -33);
            var u = bs(e);
            li(e, u, l);
            break;
          case 3:
          case 4:
            var i = r.stateNode.containerInfo, o = bs(e);
            ri(e, o, i);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        te(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function cc(e, n, t) {
    E = e, ra(e);
  }
  function ra(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E, u = l.child;
      if (l.tag === 22 && r) {
        var i = l.memoizedState !== null || fl;
        if (!i) {
          var o = l.alternate, s = o !== null && o.memoizedState !== null || we;
          o = fl;
          var p = we;
          if (fl = i, (we = s) && !p) for (E = l; E !== null; ) i = E, s = i.child, i.tag === 22 && i.memoizedState !== null ? ia(l) : s !== null ? (s.return = i, E = s) : ia(l);
          for (; u !== null; ) E = u, ra(u), u = u.sibling;
          E = l, fl = o, we = p;
        }
        la(e);
      } else l.subtreeFlags & 8772 && u !== null ? (u.return = l, E = u) : la(e);
    }
  }
  function la(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772) switch (n.tag) {
            case 0:
            case 11:
            case 15:
              we || cl(5, n);
              break;
            case 1:
              var r = n.stateNode;
              if (n.flags & 4 && !we) if (t === null) r.componentDidMount();
              else {
                var l = n.elementType === n.type ? t.memoizedProps : ln(n.type, t.memoizedProps);
                r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
              }
              var u = n.updateQueue;
              u !== null && us(n, u, r);
              break;
            case 3:
              var i = n.updateQueue;
              if (i !== null) {
                if (t = null, n.child !== null) switch (n.child.tag) {
                  case 5:
                    t = n.child.stateNode;
                    break;
                  case 1:
                    t = n.child.stateNode;
                }
                us(n, i, t);
              }
              break;
            case 5:
              var o = n.stateNode;
              if (t === null && n.flags & 4) {
                t = o;
                var s = n.memoizedProps;
                switch (n.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && t.focus();
                    break;
                  case "img":
                    s.src && (t.src = s.src);
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
              if (n.memoizedState === null) {
                var p = n.alternate;
                if (p !== null) {
                  var y = p.memoizedState;
                  if (y !== null) {
                    var g = y.dehydrated;
                    g !== null && Wt(g);
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
              throw Error(m(163));
          }
          we || n.flags & 512 && ti(n);
        } catch (h) {
          te(n, n.return, h);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function ua(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function ia(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              cl(4, n);
            } catch (s) {
              te(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                te(n, l, s);
              }
            }
            var u = n.return;
            try {
              ti(n);
            } catch (s) {
              te(n, u, s);
            }
            break;
          case 5:
            var i = n.return;
            try {
              ti(n);
            } catch (s) {
              te(n, i, s);
            }
        }
      } catch (s) {
        te(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var o = n.sibling;
      if (o !== null) {
        o.return = n.return, E = o;
        break;
      }
      E = n.return;
    }
  }
  var dc = Math.ceil, dl = he.ReactCurrentDispatcher, ui = he.ReactCurrentOwner, Ze = he.ReactCurrentBatchConfig, F = 0, fe = null, ue = null, pe = 0, Be = 0, Tt = Fn(0), oe = 0, pr = null, tt = 0, pl = 0, ii = 0, mr = null, Oe = null, oi = 0, Lt = 1 / 0, Nn = null, ml = !1, si = null, Hn = null, hl = !1, Bn = null, vl = 0, hr = 0, ai = null, yl = -1, gl = 0;
  function xe() {
    return F & 6 ? re() : yl !== -1 ? yl : yl = re();
  }
  function $n(e) {
    return e.mode & 1 ? F & 2 && pe !== 0 ? pe & -pe : Gf.transition !== null ? (gl === 0 && (gl = qi()), gl) : (e = H, e !== 0 || (e = window.event, e = e === void 0 ? 16 : oo(e.type)), e) : 1;
  }
  function sn(e, n, t, r) {
    if (50 < hr) throw hr = 0, ai = null, Error(m(185));
    At(e, t, r), (!(F & 2) || e !== fe) && (e === fe && (!(F & 2) && (pl |= t), oe === 4 && Wn(e, pe)), Me(e, r), t === 1 && F === 0 && !(n.mode & 1) && (Lt = re() + 500, Kr && In()));
  }
  function Me(e, n) {
    var t = e.callbackNode;
    Xa(e, n);
    var r = Pr(e, e === fe ? pe : 0);
    if (r === 0) t !== null && Gi(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Gi(t), n === 1) e.tag === 0 ? Xf(sa.bind(null, e)) : Yo(sa.bind(null, e)), Wf(function() {
        !(F & 6) && In();
      }), t = null;
      else {
        switch (bi(r)) {
          case 1:
            t = Bl;
            break;
          case 4:
            t = Zi;
            break;
          case 16:
            t = _r;
            break;
          case 536870912:
            t = Ji;
            break;
          default:
            t = _r;
        }
        t = va(t, oa.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function oa(e, n) {
    if (yl = -1, gl = 0, F & 6) throw Error(m(327));
    var t = e.callbackNode;
    if (Rt() && e.callbackNode !== t) return null;
    var r = Pr(e, e === fe ? pe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || n) n = wl(e, r);
    else {
      n = r;
      var l = F;
      F |= 2;
      var u = fa();
      (fe !== e || pe !== n) && (Nn = null, Lt = re() + 500, lt(e, n));
      do
        try {
          hc();
          break;
        } catch (o) {
          aa(e, o);
        }
      while (!0);
      Pu(), dl.current = u, F = l, ue !== null ? n = 0 : (fe = null, pe = 0, n = oe);
    }
    if (n !== 0) {
      if (n === 2 && (l = $l(e), l !== 0 && (r = l, n = fi(e, l))), n === 1) throw t = pr, lt(e, 0), Wn(e, r), Me(e, re()), t;
      if (n === 6) Wn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !pc(l) && (n = wl(e, r), n === 2 && (u = $l(e), u !== 0 && (r = u, n = fi(e, u))), n === 1)) throw t = pr, lt(e, 0), Wn(e, r), Me(e, re()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ut(e, Oe, Nn);
            break;
          case 3:
            if (Wn(e, r), (r & 130023424) === r && (n = oi + 500 - re(), 10 < n)) {
              if (Pr(e, 0) !== 0) break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                xe(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = vu(ut.bind(null, e, Oe, Nn), n);
              break;
            }
            ut(e, Oe, Nn);
            break;
          case 4:
            if (Wn(e, r), (r & 4194240) === r) break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var i = 31 - nn(r);
              u = 1 << i, i = n[i], i > l && (l = i), r &= ~u;
            }
            if (r = l, r = re() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * dc(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = vu(ut.bind(null, e, Oe, Nn), r);
              break;
            }
            ut(e, Oe, Nn);
            break;
          case 5:
            ut(e, Oe, Nn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Me(e, re()), e.callbackNode === t ? oa.bind(null, e) : null;
  }
  function fi(e, n) {
    var t = mr;
    return e.current.memoizedState.isDehydrated && (lt(e, n).flags |= 256), e = wl(e, n), e !== 2 && (n = Oe, Oe = t, n !== null && ci(n)), e;
  }
  function ci(e) {
    Oe === null ? Oe = e : Oe.push.apply(Oe, e);
  }
  function pc(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null)) for (var r = 0; r < t.length; r++) {
          var l = t[r], u = l.getSnapshot;
          l = l.value;
          try {
            if (!tn(u(), l)) return !1;
          } catch {
            return !1;
          }
        }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null) t.return = n, n = t;
      else {
        if (n === e) break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e) return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Wn(e, n) {
    for (n &= ~ii, n &= ~pl, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - nn(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function sa(e) {
    if (F & 6) throw Error(m(327));
    Rt();
    var n = Pr(e, 0);
    if (!(n & 1)) return Me(e, re()), null;
    var t = wl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = $l(e);
      r !== 0 && (n = r, t = fi(e, r));
    }
    if (t === 1) throw t = pr, lt(e, 0), Wn(e, n), Me(e, re()), t;
    if (t === 6) throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, ut(e, Oe, Nn), Me(e, re()), null;
  }
  function di(e, n) {
    var t = F;
    F |= 1;
    try {
      return e(n);
    } finally {
      F = t, F === 0 && (Lt = re() + 500, Kr && In());
    }
  }
  function rt(e) {
    Bn !== null && Bn.tag === 0 && !(F & 6) && Rt();
    var n = F;
    F |= 1;
    var t = Ze.transition, r = H;
    try {
      if (Ze.transition = null, H = 1, e) return e();
    } finally {
      H = r, Ze.transition = t, F = n, !(F & 6) && In();
    }
  }
  function pi() {
    Be = Tt.current, Y(Tt);
  }
  function lt(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, $f(t)), ue !== null) for (t = ue.return; t !== null; ) {
      var r = t;
      switch (Eu(r), r.tag) {
        case 1:
          r = r.type.childContextTypes, r != null && Wr();
          break;
        case 3:
          Nt(), Y(Te), Y(ve), Fu();
          break;
        case 5:
          Mu(r);
          break;
        case 4:
          Nt();
          break;
        case 13:
          Y(b);
          break;
        case 19:
          Y(b);
          break;
        case 10:
          zu(r.type._context);
          break;
        case 22:
        case 23:
          pi();
      }
      t = t.return;
    }
    if (fe = e, ue = e = Qn(e.current, null), pe = Be = n, oe = 0, pr = null, ii = pl = tt = 0, Oe = mr = null, bn !== null) {
      for (n = 0; n < bn.length; n++) if (t = bn[n], r = t.interleaved, r !== null) {
        t.interleaved = null;
        var l = r.next, u = t.pending;
        if (u !== null) {
          var i = u.next;
          u.next = l, r.next = i;
        }
        t.pending = r;
      }
      bn = null;
    }
    return e;
  }
  function aa(e, n) {
    do {
      var t = ue;
      try {
        if (Pu(), tl.current = il, rl) {
          for (var r = ee.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          rl = !1;
        }
        if (nt = 0, ae = ie = ee = null, or = !1, sr = 0, ui.current = null, t === null || t.return === null) {
          oe = 1, pr = n, ue = null;
          break;
        }
        e: {
          var u = e, i = t.return, o = t, s = n;
          if (n = pe, o.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = o, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var S = Ds(i);
            if (S !== null) {
              S.flags &= -257, Fs(S, i, o, u, n), S.mode & 1 && Ms(u, p, n), n = S, s = p;
              var x = n.updateQueue;
              if (x === null) {
                var C = /* @__PURE__ */ new Set();
                C.add(s), n.updateQueue = C;
              } else x.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Ms(u, p, n), mi();
                break e;
              }
              s = Error(m(426));
            }
          } else if (J && o.mode & 1) {
            var le = Ds(i);
            if (le !== null) {
              !(le.flags & 65536) && (le.flags |= 256), Fs(le, i, o, u, n), Cu(Pt(s, o));
              break e;
            }
          }
          u = s = Pt(s, o), oe !== 4 && (oe = 2), mr === null ? mr = [u] : mr.push(u), u = i;
          do {
            switch (u.tag) {
              case 3:
                u.flags |= 65536, n &= -n, u.lanes |= n;
                var c = Rs(u, s, n);
                ls(u, c);
                break e;
              case 1:
                o = s;
                var a = u.type, d = u.stateNode;
                if (!(u.flags & 128) && (typeof a.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Hn === null || !Hn.has(d)))) {
                  u.flags |= 65536, n &= -n, u.lanes |= n;
                  var w = Os(u, o, n);
                  ls(u, w);
                  break e;
                }
            }
            u = u.return;
          } while (u !== null);
        }
        da(t);
      } catch (N) {
        n = N, ue === t && t !== null && (ue = t = t.return);
        continue;
      }
      break;
    } while (!0);
  }
  function fa() {
    var e = dl.current;
    return dl.current = il, e === null ? il : e;
  }
  function mi() {
    (oe === 0 || oe === 3 || oe === 2) && (oe = 4), fe === null || !(tt & 268435455) && !(pl & 268435455) || Wn(fe, pe);
  }
  function wl(e, n) {
    var t = F;
    F |= 2;
    var r = fa();
    (fe !== e || pe !== n) && (Nn = null, lt(e, n));
    do
      try {
        mc();
        break;
      } catch (l) {
        aa(e, l);
      }
    while (!0);
    if (Pu(), F = t, dl.current = r, ue !== null) throw Error(m(261));
    return fe = null, pe = 0, oe;
  }
  function mc() {
    for (; ue !== null; ) ca(ue);
  }
  function hc() {
    for (; ue !== null && !Aa(); ) ca(ue);
  }
  function ca(e) {
    var n = ha(e.alternate, e, Be);
    e.memoizedProps = e.pendingProps, n === null ? da(e) : ue = n, ui.current = null;
  }
  function da(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = sc(t, n), t !== null) {
          t.flags &= 32767, ue = t;
          return;
        }
        if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          oe = 6, ue = null;
          return;
        }
      } else if (t = oc(t, n, Be), t !== null) {
        ue = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        ue = n;
        return;
      }
      ue = n = e;
    } while (n !== null);
    oe === 0 && (oe = 5);
  }
  function ut(e, n, t) {
    var r = H, l = Ze.transition;
    try {
      Ze.transition = null, H = 1, vc(e, n, t, r);
    } finally {
      Ze.transition = l, H = r;
    }
    return null;
  }
  function vc(e, n, t, r) {
    do
      Rt();
    while (Bn !== null);
    if (F & 6) throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current) throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var u = t.lanes | t.childLanes;
    if (Ga(e, u), e === fe && (ue = fe = null, pe = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || hl || (hl = !0, va(_r, function() {
      return Rt(), null;
    })), u = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || u) {
      u = Ze.transition, Ze.transition = null;
      var i = H;
      H = 1;
      var o = F;
      F |= 4, ui.current = null, fc(e, t), ta(t, e), jf(mu), Lr = !!pu, mu = pu = null, e.current = t, cc(t), Va(), F = o, H = i, Ze.transition = u;
    } else e.current = t;
    if (hl && (hl = !1, Bn = e, vl = l), u = e.pendingLanes, u === 0 && (Hn = null), $a(t.stateNode), Me(e, re()), n !== null) for (r = e.onRecoverableError, t = 0; t < n.length; t++) l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (ml) throw ml = !1, e = si, si = null, e;
    return vl & 1 && e.tag !== 0 && Rt(), u = e.pendingLanes, u & 1 ? e === ai ? hr++ : (hr = 0, ai = e) : hr = 0, In(), null;
  }
  function Rt() {
    if (Bn !== null) {
      var e = bi(vl), n = Ze.transition, t = H;
      try {
        if (Ze.transition = null, H = 16 > e ? 16 : e, Bn === null) var r = !1;
        else {
          if (e = Bn, Bn = null, vl = 0, F & 6) throw Error(m(331));
          var l = F;
          for (F |= 4, E = e.current; E !== null; ) {
            var u = E, i = u.child;
            if (E.flags & 16) {
              var o = u.deletions;
              if (o !== null) {
                for (var s = 0; s < o.length; s++) {
                  var p = o[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        dr(8, y, u);
                    }
                    var g = y.child;
                    if (g !== null) g.return = y, E = g;
                    else for (; E !== null; ) {
                      y = E;
                      var h = y.sibling, S = y.return;
                      if (Js(y), y === p) {
                        E = null;
                        break;
                      }
                      if (h !== null) {
                        h.return = S, E = h;
                        break;
                      }
                      E = S;
                    }
                  }
                }
                var x = u.alternate;
                if (x !== null) {
                  var C = x.child;
                  if (C !== null) {
                    x.child = null;
                    do {
                      var le = C.sibling;
                      C.sibling = null, C = le;
                    } while (C !== null);
                  }
                }
                E = u;
              }
            }
            if (u.subtreeFlags & 2064 && i !== null) i.return = u, E = i;
            else e: for (; E !== null; ) {
              if (u = E, u.flags & 2048) switch (u.tag) {
                case 0:
                case 11:
                case 15:
                  dr(9, u, u.return);
              }
              var c = u.sibling;
              if (c !== null) {
                c.return = u.return, E = c;
                break e;
              }
              E = u.return;
            }
          }
          var a = e.current;
          for (E = a; E !== null; ) {
            i = E;
            var d = i.child;
            if (i.subtreeFlags & 2064 && d !== null) d.return = i, E = d;
            else e: for (i = a; E !== null; ) {
              if (o = E, o.flags & 2048) try {
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    cl(9, o);
                }
              } catch (N) {
                te(o, o.return, N);
              }
              if (o === i) {
                E = null;
                break e;
              }
              var w = o.sibling;
              if (w !== null) {
                w.return = o.return, E = w;
                break e;
              }
              E = o.return;
            }
          }
          if (F = l, In(), dn && typeof dn.onPostCommitFiberRoot == "function") try {
            dn.onPostCommitFiberRoot(xr, e);
          } catch {
          }
          r = !0;
        }
        return r;
      } finally {
        H = t, Ze.transition = n;
      }
    }
    return !1;
  }
  function pa(e, n, t) {
    n = Pt(t, n), n = Rs(e, n, 1), e = An(e, n, 1), n = xe(), e !== null && (At(e, 1, n), Me(e, n));
  }
  function te(e, n, t) {
    if (e.tag === 3) pa(e, e, t);
    else for (; n !== null; ) {
      if (n.tag === 3) {
        pa(n, e, t);
        break;
      } else if (n.tag === 1) {
        var r = n.stateNode;
        if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Hn === null || !Hn.has(r))) {
          e = Pt(t, e), e = Os(n, e, 1), n = An(n, e, 1), e = xe(), n !== null && (At(n, 1, e), Me(n, e));
          break;
        }
      }
      n = n.return;
    }
  }
  function yc(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = xe(), e.pingedLanes |= e.suspendedLanes & t, fe === e && (pe & t) === t && (oe === 4 || oe === 3 && (pe & 130023424) === pe && 500 > re() - oi ? lt(e, 0) : ii |= t), Me(e, n);
  }
  function ma(e, n) {
    n === 0 && (e.mode & 1 ? (n = Nr, Nr <<= 1, !(Nr & 130023424) && (Nr = 4194304)) : n = 1);
    var t = xe();
    e = _n(e, n), e !== null && (At(e, n, t), Me(e, t));
  }
  function gc(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), ma(e, t);
  }
  function wc(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), ma(e, t);
  }
  var ha;
  ha = function(e, n, t) {
    if (e !== null) if (e.memoizedProps !== n.pendingProps || Te.current) Re = !0;
    else {
      if (!(e.lanes & t) && !(n.flags & 128)) return Re = !1, ic(e, n, t);
      Re = !!(e.flags & 131072);
    }
    else Re = !1, J && n.flags & 1048576 && Xo(n, Xr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        al(e, n), e = n.pendingProps;
        var l = wt(n, ve.current);
        Ct(n, t), l = Uu(null, n, r, e, l, t);
        var u = Au();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Le(r) ? (u = !0, Qr(n)) : u = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ru(n), l.updater = ol, n.stateNode = l, l._reactInternals = n, Qu(n, r, e, t), n = Gu(null, n, r, !0, u, t)) : (n.tag = 0, J && u && Su(n), _e(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (al(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = Sc(r), e = ln(r, e), l) {
            case 0:
              n = Xu(null, n, r, e, t);
              break e;
            case 1:
              n = Hs(null, n, r, e, t);
              break e;
            case 11:
              n = js(null, n, r, e, t);
              break e;
            case 14:
              n = Is(null, n, r, ln(r.type, e), t);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ln(r, l), Xu(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ln(r, l), Hs(e, n, r, l, t);
      case 3:
        e: {
          if (Bs(n), e === null) throw Error(m(387));
          r = n.pendingProps, u = n.memoizedState, l = u.element, rs(e, n), el(n, r, null, t);
          var i = n.memoizedState;
          if (r = i.element, u.isDehydrated) if (u = { element: r, isDehydrated: !1, cache: i.cache, pendingSuspenseBoundaries: i.pendingSuspenseBoundaries, transitions: i.transitions }, n.updateQueue.baseState = u, n.memoizedState = u, n.flags & 256) {
            l = Pt(Error(m(423)), n), n = $s(e, n, r, t, l);
            break e;
          } else if (r !== l) {
            l = Pt(Error(m(424)), n), n = $s(e, n, r, t, l);
            break e;
          } else for (He = Dn(n.stateNode.containerInfo.firstChild), Ve = n, J = !0, rn = null, t = ns(n, null, r, t), n.child = t; t; ) t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (Et(), r === l) {
              n = Cn(e, n, t);
              break e;
            }
            _e(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return is(n), e === null && xu(n), r = n.type, l = n.pendingProps, u = e !== null ? e.memoizedProps : null, i = l.children, hu(r, l) ? i = null : u !== null && hu(r, u) && (n.flags |= 32), Vs(e, n), _e(e, n, i, t), n.child;
      case 6:
        return e === null && xu(n), null;
      case 13:
        return Ws(e, n, t);
      case 4:
        return Ou(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = _t(n, null, r, t) : _e(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ln(r, l), js(e, n, r, l, t);
      case 7:
        return _e(e, n, n.pendingProps, t), n.child;
      case 8:
        return _e(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return _e(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, u = n.memoizedProps, i = l.value, Q(Jr, r._currentValue), r._currentValue = i, u !== null) if (tn(u.value, i)) {
            if (u.children === l.children && !Te.current) {
              n = Cn(e, n, t);
              break e;
            }
          } else for (u = n.child, u !== null && (u.return = n); u !== null; ) {
            var o = u.dependencies;
            if (o !== null) {
              i = u.child;
              for (var s = o.firstContext; s !== null; ) {
                if (s.context === r) {
                  if (u.tag === 1) {
                    s = xn(-1, t & -t), s.tag = 2;
                    var p = u.updateQueue;
                    if (p !== null) {
                      p = p.shared;
                      var y = p.pending;
                      y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                    }
                  }
                  u.lanes |= t, s = u.alternate, s !== null && (s.lanes |= t), Tu(
                    u.return,
                    t,
                    n
                  ), o.lanes |= t;
                  break;
                }
                s = s.next;
              }
            } else if (u.tag === 10) i = u.type === n.type ? null : u.child;
            else if (u.tag === 18) {
              if (i = u.return, i === null) throw Error(m(341));
              i.lanes |= t, o = i.alternate, o !== null && (o.lanes |= t), Tu(i, t, n), i = u.sibling;
            } else i = u.child;
            if (i !== null) i.return = u;
            else for (i = u; i !== null; ) {
              if (i === n) {
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
          _e(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, Ct(n, t), l = Xe(l), r = r(l), n.flags |= 1, _e(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = ln(r, n.pendingProps), l = ln(r.type, l), Is(e, n, r, l, t);
      case 15:
        return Us(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : ln(r, l), al(e, n), n.tag = 1, Le(r) ? (e = !0, Qr(n)) : e = !1, Ct(n, t), Ts(n, r, l), Qu(n, r, l, t), Gu(null, n, r, !0, e, t);
      case 19:
        return Ks(e, n, t);
      case 22:
        return As(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function va(e, n) {
    return Xi(e, n);
  }
  function kc(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Je(e, n, t, r) {
    return new kc(e, n, t, r);
  }
  function hi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Sc(e) {
    if (typeof e == "function") return hi(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === fn) return 11;
      if (e === cn) return 14;
    }
    return 2;
  }
  function Qn(e, n) {
    var t = e.alternate;
    return t === null ? (t = Je(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function kl(e, n, t, r, l, u) {
    var i = 2;
    if (r = e, typeof e == "function") hi(e) && (i = 1);
    else if (typeof e == "string") i = 5;
    else e: switch (e) {
      case Pe:
        return it(t.children, l, u, n);
      case Qe:
        i = 8, l |= 8;
        break;
      case Pn:
        return e = Je(12, t, n, l | 2), e.elementType = Pn, e.lanes = u, e;
      case Ie:
        return e = Je(13, t, n, l), e.elementType = Ie, e.lanes = u, e;
      case en:
        return e = Je(19, t, n, l), e.elementType = en, e.lanes = u, e;
      case ne:
        return Sl(t, l, u, n);
      default:
        if (typeof e == "object" && e !== null) switch (e.$$typeof) {
          case gn:
            i = 10;
            break e;
          case Yn:
            i = 9;
            break e;
          case fn:
            i = 11;
            break e;
          case cn:
            i = 14;
            break e;
          case ze:
            i = 16, r = null;
            break e;
        }
        throw Error(m(130, e == null ? e : typeof e, ""));
    }
    return n = Je(i, t, n, l), n.elementType = e, n.type = r, n.lanes = u, n;
  }
  function it(e, n, t, r) {
    return e = Je(7, e, r, n), e.lanes = t, e;
  }
  function Sl(e, n, t, r) {
    return e = Je(22, e, r, n), e.elementType = ne, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function vi(e, n, t) {
    return e = Je(6, e, null, n), e.lanes = t, e;
  }
  function yi(e, n, t) {
    return n = Je(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Ec(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Wl(0), this.expirationTimes = Wl(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Wl(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function gi(e, n, t, r, l, u, i, o, s) {
    return e = new Ec(e, n, t, o, s), n === 1 ? (n = 1, u === !0 && (n |= 8)) : n = 0, u = Je(3, null, null, n), e.current = u, u.stateNode = e, u.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Ru(u), e;
  }
  function _c(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Ee, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function ya(e) {
    if (!e) return jn;
    e = e._reactInternals;
    e: {
      if (Xn(e) !== e || e.tag !== 1) throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Le(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Le(t)) return Qo(e, t, n);
    }
    return n;
  }
  function ga(e, n, t, r, l, u, i, o, s) {
    return e = gi(t, r, !0, e, l, u, i, o, s), e.context = ya(null), t = e.current, r = xe(), l = $n(t), u = xn(r, l), u.callback = n ?? null, An(t, u, l), e.current.lanes = l, At(e, l, r), Me(e, r), e;
  }
  function El(e, n, t, r) {
    var l = n.current, u = xe(), i = $n(l);
    return t = ya(t), n.context === null ? n.context = t : n.pendingContext = t, n = xn(u, i), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = An(l, n, i), e !== null && (sn(e, l, i, u), br(e, l, i)), i;
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
  function wa(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function wi(e, n) {
    wa(e, n), (e = e.alternate) && wa(e, n);
  }
  function xc() {
    return null;
  }
  var ka = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ki(e) {
    this._internalRoot = e;
  }
  xl.prototype.render = ki.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null) throw Error(m(409));
    El(e, n, null, null);
  }, xl.prototype.unmount = ki.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      rt(function() {
        El(null, e, null, null);
      }), n[wn] = null;
    }
  };
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = to();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Rn.length && n !== 0 && n < Rn[t].priority; t++) ;
      Rn.splice(t, 0, e), t === 0 && uo(e);
    }
  };
  function Si(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Cl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Sa() {
  }
  function Cc(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var u = r;
        r = function() {
          var p = _l(i);
          u.call(p);
        };
      }
      var i = ga(n, r, e, 0, null, !1, !1, "", Sa);
      return e._reactRootContainer = i, e[wn] = i.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(), i;
    }
    for (; l = e.lastChild; ) e.removeChild(l);
    if (typeof r == "function") {
      var o = r;
      r = function() {
        var p = _l(s);
        o.call(p);
      };
    }
    var s = gi(e, 0, !1, null, null, !1, !1, "", Sa);
    return e._reactRootContainer = s, e[wn] = s.current, bt(e.nodeType === 8 ? e.parentNode : e), rt(function() {
      El(n, s, t, r);
    }), s;
  }
  function Nl(e, n, t, r, l) {
    var u = t._reactRootContainer;
    if (u) {
      var i = u;
      if (typeof l == "function") {
        var o = l;
        l = function() {
          var s = _l(i);
          o.call(s);
        };
      }
      El(n, i, e, l);
    } else i = Cc(t, n, e, l, r);
    return _l(i);
  }
  eo = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = Ut(n.pendingLanes);
          t !== 0 && (Ql(n, t | 1), Me(n, re()), !(F & 6) && (Lt = re() + 500, In()));
        }
        break;
      case 13:
        rt(function() {
          var r = _n(e, 1);
          if (r !== null) {
            var l = xe();
            sn(r, e, 1, l);
          }
        }), wi(e, 1);
    }
  }, Kl = function(e) {
    if (e.tag === 13) {
      var n = _n(e, 134217728);
      if (n !== null) {
        var t = xe();
        sn(n, e, 134217728, t);
      }
      wi(e, 134217728);
    }
  }, no = function(e) {
    if (e.tag === 13) {
      var n = $n(e), t = _n(e, n);
      if (t !== null) {
        var r = xe();
        sn(t, e, n, r);
      }
      wi(e, n);
    }
  }, to = function() {
    return H;
  }, ro = function(e, n) {
    var t = H;
    try {
      return H = e, n();
    } finally {
      H = t;
    }
  }, Ul = function(e, n, t) {
    switch (n) {
      case "input":
        if (Ll(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; ) t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = $r(r);
              if (!l) throw Error(m(90));
              Pi(r), Ll(r, l);
            }
          }
        }
        break;
      case "textarea":
        Oi(e, t);
        break;
      case "select":
        n = t.value, n != null && ot(e, !!t.multiple, n, !1);
    }
  }, Hi = di, Bi = rt;
  var Nc = { usingClientEntryPoint: !1, Events: [tr, yt, $r, Ai, Vi, di] }, vr = { findFiberByHostInstance: Gn, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" }, Pc = { bundleType: vr.bundleType, version: vr.version, rendererPackageName: vr.rendererPackageName, rendererConfig: vr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: he.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ki(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: vr.findFiberByHostInstance || xc, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.3.1-next-f1338f8080-20240426" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Pl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Pl.isDisabled && Pl.supportsFiber) try {
      xr = Pl.inject(Pc), dn = Pl;
    } catch {
    }
  }
  return De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nc, De.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Si(n)) throw Error(m(200));
    return _c(e, n, null, t);
  }, De.createRoot = function(e, n) {
    if (!Si(e)) throw Error(m(299));
    var t = !1, r = "", l = ka;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = gi(e, 1, !1, null, null, t, !1, r, l), e[wn] = n.current, bt(e.nodeType === 8 ? e.parentNode : e), new ki(n);
  }, De.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = Ki(n), e = e === null ? null : e.stateNode, e;
  }, De.flushSync = function(e) {
    return rt(e);
  }, De.hydrate = function(e, n, t) {
    if (!Cl(n)) throw Error(m(200));
    return Nl(null, e, n, !0, t);
  }, De.hydrateRoot = function(e, n, t) {
    if (!Si(e)) throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, u = "", i = ka;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (i = t.onRecoverableError)), n = ga(n, null, e, 1, t ?? null, l, !1, u, i), e[wn] = n.current, bt(e), r) for (e = 0; e < r.length; e++) t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
      t,
      l
    );
    return new xl(n);
  }, De.render = function(e, n, t) {
    if (!Cl(n)) throw Error(m(200));
    return Nl(null, e, n, !1, t);
  }, De.unmountComponentAtNode = function(e) {
    if (!Cl(e)) throw Error(m(40));
    return e._reactRootContainer ? (rt(function() {
      Nl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[wn] = null;
      });
    }), !0) : !1;
  }, De.unstable_batchedUpdates = di, De.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Cl(t)) throw Error(m(200));
    if (e == null || e._reactInternals === void 0) throw Error(m(38));
    return Nl(e, n, t, !1, r);
  }, De.version = "18.3.1-next-f1338f8080-20240426", De;
}
var Ta;
function jc() {
  if (Ta) return xi.exports;
  Ta = 1;
  function P() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(P);
      } catch (A) {
        console.error(A);
      }
  }
  return P(), xi.exports = Fc(), xi.exports;
}
var La;
function Ic() {
  if (La) return zl;
  La = 1;
  var P = jc();
  return zl.createRoot = P.createRoot, zl.hydrateRoot = P.hydrateRoot, zl;
}
var Uc = Ic();
const Ac = /* @__PURE__ */ Tc(Uc), Vc = ({ title: P = "Header" }) => /* @__PURE__ */ Fe.jsxs("header", { className: "p-4 bg-gray-50", children: [
  /* @__PURE__ */ Fe.jsx("link", { rel: "prefetch", href: "/" }),
  /* @__PURE__ */ Fe.jsx("link", { rel: "prefetch", href: "/generic" }),
  /* @__PURE__ */ Fe.jsx("link", { rel: "prefetch", href: "/angular" }),
  /* @__PURE__ */ Fe.jsx("div", { className: "font-bold", children: P }),
  /* @__PURE__ */ Fe.jsx("div", { className: "text-xs mt-1", children: "Self hosted client side header with react props support and styles isolation" }),
  /* @__PURE__ */ Fe.jsxs("div", { className: "flex gap-4 mt-2", children: [
    /* @__PURE__ */ Fe.jsx("a", { className: "text-blue-600 underline", href: "/", children: "Home" }),
    /* @__PURE__ */ Fe.jsx("a", { className: "text-blue-600 underline", href: "/generic", children: "Home - Generic" }),
    /* @__PURE__ */ Fe.jsx("a", { className: "text-blue-600 underline", href: "/angular", children: "Angular" })
  ] })
] }), Hc = (P) => P.replace(/-([a-z])/g, (A, m) => m.toUpperCase());
class Bc extends HTMLElement {
  constructor() {
    super(), this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    const { host: A, ...m } = this.getPropsFromAttributes();
    Ac.createRoot(this.shadowRoot).render(
      /* @__PURE__ */ Fe.jsxs(Fe.Fragment, { children: [
        /* @__PURE__ */ Fe.jsx("link", { href: `${A}/header.css`, rel: "stylesheet", type: "text/css" }),
        /* @__PURE__ */ Fe.jsx(Vc, { ...m })
      ] })
    );
  }
  getPropsFromAttributes() {
    const A = {};
    for (let m = 0; m < this.attributes.length; m++) {
      const ke = this.attributes[m];
      A[Hc(ke.name)] = ke.value;
    }
    return A;
  }
}
customElements.define("symplast-header", Bc);
