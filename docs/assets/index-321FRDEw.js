var ph = Object.defineProperty;
var mh = (e, t, n) =>
  t in e
    ? ph(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n);
var hh = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var Kr = (e, t, n) => mh(e, typeof t != "symbol" ? t + "" : t, n);
var Fx = hh((Vx, Zo) => {
  function gh(e, t) {
    for (var n = 0; n < t.length; n++) {
      const r = t[n];
      if (typeof r != "string" && !Array.isArray(r)) {
        for (const o in r)
          if (o !== "default" && !(o in e)) {
            const i = Object.getOwnPropertyDescriptor(r, o);
            i &&
              Object.defineProperty(
                e,
                o,
                i.get ? i : { enumerable: !0, get: () => r[o] }
              );
          }
      }
    }
    return Object.freeze(
      Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
    );
  }
  (function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]'))
      r(o);
    new MutationObserver((o) => {
      for (const i of o)
        if (i.type === "childList")
          for (const l of i.addedNodes)
            l.tagName === "LINK" && l.rel === "modulepreload" && r(l);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
      const i = {};
      return (
        o.integrity && (i.integrity = o.integrity),
        o.referrerPolicy && (i.referrerPolicy = o.referrerPolicy),
        o.crossOrigin === "use-credentials"
          ? (i.credentials = "include")
          : o.crossOrigin === "anonymous"
          ? (i.credentials = "omit")
          : (i.credentials = "same-origin"),
        i
      );
    }
    function r(o) {
      if (o.ep) return;
      o.ep = !0;
      const i = n(o);
      fetch(o.href, i);
    }
  })();
  function qd(e) {
    return e &&
      e.__esModule &&
      Object.prototype.hasOwnProperty.call(e, "default")
      ? e.default
      : e;
  }
  var Zd = { exports: {} },
    yl = {},
    Jd = { exports: {} },
    Q = {};
  /**
   * @license React
   * react.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Uo = Symbol.for("react.element"),
    yh = Symbol.for("react.portal"),
    vh = Symbol.for("react.fragment"),
    Sh = Symbol.for("react.strict_mode"),
    wh = Symbol.for("react.profiler"),
    xh = Symbol.for("react.provider"),
    Ch = Symbol.for("react.context"),
    kh = Symbol.for("react.forward_ref"),
    Eh = Symbol.for("react.suspense"),
    Th = Symbol.for("react.memo"),
    Ph = Symbol.for("react.lazy"),
    sc = Symbol.iterator;
  function $h(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (sc && e[sc]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var ef = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    tf = Object.assign,
    nf = {};
  function Fr(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = nf),
      (this.updater = n || ef);
  }
  Fr.prototype.isReactComponent = {};
  Fr.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
      throw Error(
        "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, e, t, "setState");
  };
  Fr.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
  };
  function rf() {}
  rf.prototype = Fr.prototype;
  function Wa(e, t, n) {
    (this.props = e),
      (this.context = t),
      (this.refs = nf),
      (this.updater = n || ef);
  }
  var Ua = (Wa.prototype = new rf());
  Ua.constructor = Wa;
  tf(Ua, Fr.prototype);
  Ua.isPureReactComponent = !0;
  var ac = Array.isArray,
    of = Object.prototype.hasOwnProperty,
    Va = { current: null },
    lf = { key: !0, ref: !0, __self: !0, __source: !0 };
  function sf(e, t, n) {
    var r,
      o = {},
      i = null,
      l = null;
    if (t != null)
      for (r in (t.ref !== void 0 && (l = t.ref),
      t.key !== void 0 && (i = "" + t.key),
      t))
        of.call(t, r) && !lf.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1) o.children = n;
    else if (1 < s) {
      for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2];
      o.children = a;
    }
    if (e && e.defaultProps)
      for (r in ((s = e.defaultProps), s)) o[r] === void 0 && (o[r] = s[r]);
    return {
      $$typeof: Uo,
      type: e,
      key: i,
      ref: l,
      props: o,
      _owner: Va.current,
    };
  }
  function Mh(e, t) {
    return {
      $$typeof: Uo,
      type: e.type,
      key: t,
      ref: e.ref,
      props: e.props,
      _owner: e._owner,
    };
  }
  function Ha(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Uo;
  }
  function Rh(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
      "$" +
      e.replace(/[=:]/g, function (n) {
        return t[n];
      })
    );
  }
  var uc = /\/+/g;
  function ls(e, t) {
    return typeof e == "object" && e !== null && e.key != null
      ? Rh("" + e.key)
      : t.toString(36);
  }
  function Ei(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var l = !1;
    if (e === null) l = !0;
    else
      switch (i) {
        case "string":
        case "number":
          l = !0;
          break;
        case "object":
          switch (e.$$typeof) {
            case Uo:
            case yh:
              l = !0;
          }
      }
    if (l)
      return (
        (l = e),
        (o = o(l)),
        (e = r === "" ? "." + ls(l, 0) : r),
        ac(o)
          ? ((n = ""),
            e != null && (n = e.replace(uc, "$&/") + "/"),
            Ei(o, t, n, "", function (u) {
              return u;
            }))
          : o != null &&
            (Ha(o) &&
              (o = Mh(
                o,
                n +
                  (!o.key || (l && l.key === o.key)
                    ? ""
                    : ("" + o.key).replace(uc, "$&/") + "/") +
                  e
              )),
            t.push(o)),
        1
      );
    if (((l = 0), (r = r === "" ? "." : r + ":"), ac(e)))
      for (var s = 0; s < e.length; s++) {
        i = e[s];
        var a = r + ls(i, s);
        l += Ei(i, t, n, a, o);
      }
    else if (((a = $h(e)), typeof a == "function"))
      for (e = a.call(e), s = 0; !(i = e.next()).done; )
        (i = i.value), (a = r + ls(i, s++)), (l += Ei(i, t, n, a, o));
    else if (i === "object")
      throw (
        ((t = String(e)),
        Error(
          "Objects are not valid as a React child (found: " +
            (t === "[object Object]"
              ? "object with keys {" + Object.keys(e).join(", ") + "}"
              : t) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    return l;
  }
  function Jo(e, t, n) {
    if (e == null) return e;
    var r = [],
      o = 0;
    return (
      Ei(e, r, "", "", function (i) {
        return t.call(n, i, o++);
      }),
      r
    );
  }
  function _h(e) {
    if (e._status === -1) {
      var t = e._result;
      (t = t()),
        t.then(
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 1), (e._result = n));
          },
          function (n) {
            (e._status === 0 || e._status === -1) &&
              ((e._status = 2), (e._result = n));
          }
        ),
        e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
  }
  var et = { current: null },
    Ti = { transition: null },
    bh = {
      ReactCurrentDispatcher: et,
      ReactCurrentBatchConfig: Ti,
      ReactCurrentOwner: Va,
    };
  function af() {
    throw Error("act(...) is not supported in production builds of React.");
  }
  Q.Children = {
    map: Jo,
    forEach: function (e, t, n) {
      Jo(
        e,
        function () {
          t.apply(this, arguments);
        },
        n
      );
    },
    count: function (e) {
      var t = 0;
      return (
        Jo(e, function () {
          t++;
        }),
        t
      );
    },
    toArray: function (e) {
      return (
        Jo(e, function (t) {
          return t;
        }) || []
      );
    },
    only: function (e) {
      if (!Ha(e))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return e;
    },
  };
  Q.Component = Fr;
  Q.Fragment = vh;
  Q.Profiler = wh;
  Q.PureComponent = Wa;
  Q.StrictMode = Sh;
  Q.Suspense = Eh;
  Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = bh;
  Q.act = af;
  Q.cloneElement = function (e, t, n) {
    if (e == null)
      throw Error(
        "React.cloneElement(...): The argument must be a React element, but you passed " +
          e +
          "."
      );
    var r = tf({}, e.props),
      o = e.key,
      i = e.ref,
      l = e._owner;
    if (t != null) {
      if (
        (t.ref !== void 0 && ((i = t.ref), (l = Va.current)),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
      )
        var s = e.type.defaultProps;
      for (a in t)
        of.call(t, a) &&
          !lf.hasOwnProperty(a) &&
          (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a]);
    }
    var a = arguments.length - 2;
    if (a === 1) r.children = n;
    else if (1 < a) {
      s = Array(a);
      for (var u = 0; u < a; u++) s[u] = arguments[u + 2];
      r.children = s;
    }
    return { $$typeof: Uo, type: e.type, key: o, ref: i, props: r, _owner: l };
  };
  Q.createContext = function (e) {
    return (
      (e = {
        $$typeof: Ch,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null,
      }),
      (e.Provider = { $$typeof: xh, _context: e }),
      (e.Consumer = e)
    );
  };
  Q.createElement = sf;
  Q.createFactory = function (e) {
    var t = sf.bind(null, e);
    return (t.type = e), t;
  };
  Q.createRef = function () {
    return { current: null };
  };
  Q.forwardRef = function (e) {
    return { $$typeof: kh, render: e };
  };
  Q.isValidElement = Ha;
  Q.lazy = function (e) {
    return { $$typeof: Ph, _payload: { _status: -1, _result: e }, _init: _h };
  };
  Q.memo = function (e, t) {
    return { $$typeof: Th, type: e, compare: t === void 0 ? null : t };
  };
  Q.startTransition = function (e) {
    var t = Ti.transition;
    Ti.transition = {};
    try {
      e();
    } finally {
      Ti.transition = t;
    }
  };
  Q.unstable_act = af;
  Q.useCallback = function (e, t) {
    return et.current.useCallback(e, t);
  };
  Q.useContext = function (e) {
    return et.current.useContext(e);
  };
  Q.useDebugValue = function () {};
  Q.useDeferredValue = function (e) {
    return et.current.useDeferredValue(e);
  };
  Q.useEffect = function (e, t) {
    return et.current.useEffect(e, t);
  };
  Q.useId = function () {
    return et.current.useId();
  };
  Q.useImperativeHandle = function (e, t, n) {
    return et.current.useImperativeHandle(e, t, n);
  };
  Q.useInsertionEffect = function (e, t) {
    return et.current.useInsertionEffect(e, t);
  };
  Q.useLayoutEffect = function (e, t) {
    return et.current.useLayoutEffect(e, t);
  };
  Q.useMemo = function (e, t) {
    return et.current.useMemo(e, t);
  };
  Q.useReducer = function (e, t, n) {
    return et.current.useReducer(e, t, n);
  };
  Q.useRef = function (e) {
    return et.current.useRef(e);
  };
  Q.useState = function (e) {
    return et.current.useState(e);
  };
  Q.useSyncExternalStore = function (e, t, n) {
    return et.current.useSyncExternalStore(e, t, n);
  };
  Q.useTransition = function () {
    return et.current.useTransition();
  };
  Q.version = "18.3.1";
  Jd.exports = Q;
  var M = Jd.exports;
  const Nn = qd(M),
    cc = gh({ __proto__: null, default: Nn }, [M]);
  /**
   * @license React
   * react-jsx-runtime.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Ih = M,
    Oh = Symbol.for("react.element"),
    Ah = Symbol.for("react.fragment"),
    Nh = Object.prototype.hasOwnProperty,
    zh =
      Ih.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Lh = { key: !0, ref: !0, __self: !0, __source: !0 };
  function uf(e, t, n) {
    var r,
      o = {},
      i = null,
      l = null;
    n !== void 0 && (i = "" + n),
      t.key !== void 0 && (i = "" + t.key),
      t.ref !== void 0 && (l = t.ref);
    for (r in t) Nh.call(t, r) && !Lh.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
      for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return {
      $$typeof: Oh,
      type: e,
      key: i,
      ref: l,
      props: o,
      _owner: zh.current,
    };
  }
  yl.Fragment = Ah;
  yl.jsx = uf;
  yl.jsxs = uf;
  Zd.exports = yl;
  var I = Zd.exports,
    cf = { exports: {} },
    St = {},
    df = { exports: {} },
    ff = {};
  /**
   * @license React
   * scheduler.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ (function (e) {
    function t(A, z) {
      var C = A.length;
      A.push(z);
      e: for (; 0 < C; ) {
        var y = (C - 1) >>> 1,
          O = A[y];
        if (0 < o(O, z)) (A[y] = z), (A[C] = O), (C = y);
        else break e;
      }
    }
    function n(A) {
      return A.length === 0 ? null : A[0];
    }
    function r(A) {
      if (A.length === 0) return null;
      var z = A[0],
        C = A.pop();
      if (C !== z) {
        A[0] = C;
        e: for (var y = 0, O = A.length, D = O >>> 1; y < D; ) {
          var j = 2 * (y + 1) - 1,
            U = A[j],
            W = j + 1,
            B = A[W];
          if (0 > o(U, C))
            W < O && 0 > o(B, U)
              ? ((A[y] = B), (A[W] = C), (y = W))
              : ((A[y] = U), (A[j] = C), (y = j));
          else if (W < O && 0 > o(B, C)) (A[y] = B), (A[W] = C), (y = W);
          else break e;
        }
      }
      return z;
    }
    function o(A, z) {
      var C = A.sortIndex - z.sortIndex;
      return C !== 0 ? C : A.id - z.id;
    }
    if (
      typeof performance == "object" &&
      typeof performance.now == "function"
    ) {
      var i = performance;
      e.unstable_now = function () {
        return i.now();
      };
    } else {
      var l = Date,
        s = l.now();
      e.unstable_now = function () {
        return l.now() - s;
      };
    }
    var a = [],
      u = [],
      f = 1,
      p = null,
      m = 3,
      w = !1,
      v = !1,
      S = !1,
      P = typeof setTimeout == "function" ? setTimeout : null,
      g = typeof clearTimeout == "function" ? clearTimeout : null,
      h = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
      navigator.scheduling !== void 0 &&
      navigator.scheduling.isInputPending !== void 0 &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function c(A) {
      for (var z = n(u); z !== null; ) {
        if (z.callback === null) r(u);
        else if (z.startTime <= A)
          r(u), (z.sortIndex = z.expirationTime), t(a, z);
        else break;
        z = n(u);
      }
    }
    function x(A) {
      if (((S = !1), c(A), !v))
        if (n(a) !== null) (v = !0), X(k);
        else {
          var z = n(u);
          z !== null && We(x, z.startTime - A);
        }
    }
    function k(A, z) {
      (v = !1), S && ((S = !1), g(_), (_ = -1)), (w = !0);
      var C = m;
      try {
        for (
          c(z), p = n(a);
          p !== null && (!(p.expirationTime > z) || (A && !L()));

        ) {
          var y = p.callback;
          if (typeof y == "function") {
            (p.callback = null), (m = p.priorityLevel);
            var O = y(p.expirationTime <= z);
            (z = e.unstable_now()),
              typeof O == "function" ? (p.callback = O) : p === n(a) && r(a),
              c(z);
          } else r(a);
          p = n(a);
        }
        if (p !== null) var D = !0;
        else {
          var j = n(u);
          j !== null && We(x, j.startTime - z), (D = !1);
        }
        return D;
      } finally {
        (p = null), (m = C), (w = !1);
      }
    }
    var E = !1,
      T = null,
      _ = -1,
      d = 5,
      R = -1;
    function L() {
      return !(e.unstable_now() - R < d);
    }
    function F() {
      if (T !== null) {
        var A = e.unstable_now();
        R = A;
        var z = !0;
        try {
          z = T(!0, A);
        } finally {
          z ? G() : ((E = !1), (T = null));
        }
      } else E = !1;
    }
    var G;
    if (typeof h == "function")
      G = function () {
        h(F);
      };
    else if (typeof MessageChannel < "u") {
      var Y = new MessageChannel(),
        re = Y.port2;
      (Y.port1.onmessage = F),
        (G = function () {
          re.postMessage(null);
        });
    } else
      G = function () {
        P(F, 0);
      };
    function X(A) {
      (T = A), E || ((E = !0), G());
    }
    function We(A, z) {
      _ = P(function () {
        A(e.unstable_now());
      }, z);
    }
    (e.unstable_IdlePriority = 5),
      (e.unstable_ImmediatePriority = 1),
      (e.unstable_LowPriority = 4),
      (e.unstable_NormalPriority = 3),
      (e.unstable_Profiling = null),
      (e.unstable_UserBlockingPriority = 2),
      (e.unstable_cancelCallback = function (A) {
        A.callback = null;
      }),
      (e.unstable_continueExecution = function () {
        v || w || ((v = !0), X(k));
      }),
      (e.unstable_forceFrameRate = function (A) {
        0 > A || 125 < A
          ? console.error(
              "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
            )
          : (d = 0 < A ? Math.floor(1e3 / A) : 5);
      }),
      (e.unstable_getCurrentPriorityLevel = function () {
        return m;
      }),
      (e.unstable_getFirstCallbackNode = function () {
        return n(a);
      }),
      (e.unstable_next = function (A) {
        switch (m) {
          case 1:
          case 2:
          case 3:
            var z = 3;
            break;
          default:
            z = m;
        }
        var C = m;
        m = z;
        try {
          return A();
        } finally {
          m = C;
        }
      }),
      (e.unstable_pauseExecution = function () {}),
      (e.unstable_requestPaint = function () {}),
      (e.unstable_runWithPriority = function (A, z) {
        switch (A) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break;
          default:
            A = 3;
        }
        var C = m;
        m = A;
        try {
          return z();
        } finally {
          m = C;
        }
      }),
      (e.unstable_scheduleCallback = function (A, z, C) {
        var y = e.unstable_now();
        switch (
          (typeof C == "object" && C !== null
            ? ((C = C.delay), (C = typeof C == "number" && 0 < C ? y + C : y))
            : (C = y),
          A)
        ) {
          case 1:
            var O = -1;
            break;
          case 2:
            O = 250;
            break;
          case 5:
            O = 1073741823;
            break;
          case 4:
            O = 1e4;
            break;
          default:
            O = 5e3;
        }
        return (
          (O = C + O),
          (A = {
            id: f++,
            callback: z,
            priorityLevel: A,
            startTime: C,
            expirationTime: O,
            sortIndex: -1,
          }),
          C > y
            ? ((A.sortIndex = C),
              t(u, A),
              n(a) === null &&
                A === n(u) &&
                (S ? (g(_), (_ = -1)) : (S = !0), We(x, C - y)))
            : ((A.sortIndex = O), t(a, A), v || w || ((v = !0), X(k))),
          A
        );
      }),
      (e.unstable_shouldYield = L),
      (e.unstable_wrapCallback = function (A) {
        var z = m;
        return function () {
          var C = m;
          m = z;
          try {
            return A.apply(this, arguments);
          } finally {
            m = C;
          }
        };
      });
  })(ff);
  df.exports = ff;
  var jh = df.exports;
  /**
   * @license React
   * react-dom.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Bh = M,
    vt = jh;
  function b(e) {
    for (
      var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
        n = 1;
      n < arguments.length;
      n++
    )
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  var pf = new Set(),
    xo = {};
  function Xn(e, t) {
    br(e, t), br(e + "Capture", t);
  }
  function br(e, t) {
    for (xo[e] = t, e = 0; e < t.length; e++) pf.add(t[e]);
  }
  var nn = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    Fs = Object.prototype.hasOwnProperty,
    Fh =
      /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    dc = {},
    fc = {};
  function Dh(e) {
    return Fs.call(fc, e)
      ? !0
      : Fs.call(dc, e)
      ? !1
      : Fh.test(e)
      ? (fc[e] = !0)
      : ((dc[e] = !0), !1);
  }
  function Wh(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r
          ? !1
          : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Uh(e, t, n, r) {
    if (t === null || typeof t > "u" || Wh(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
      switch (n.type) {
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
  function tt(e, t, n, r, o, i, l) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
      (this.attributeName = r),
      (this.attributeNamespace = o),
      (this.mustUseProperty = n),
      (this.propertyName = e),
      (this.type = t),
      (this.sanitizeURL = i),
      (this.removeEmptyString = l);
  }
  var De = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
      De[e] = new tt(e, 0, !1, e, null, !1, !1);
    });
  [
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
  ].forEach(function (e) {
    var t = e[0];
    De[t] = new tt(t, 1, !1, e[1], null, !1, !1);
  });
  ["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    De[e] = new tt(e, 2, !1, e.toLowerCase(), null, !1, !1);
  });
  [
    "autoReverse",
    "externalResourcesRequired",
    "focusable",
    "preserveAlpha",
  ].forEach(function (e) {
    De[e] = new tt(e, 2, !1, e, null, !1, !1);
  });
  "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
      De[e] = new tt(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
  ["checked", "multiple", "muted", "selected"].forEach(function (e) {
    De[e] = new tt(e, 3, !0, e, null, !1, !1);
  });
  ["capture", "download"].forEach(function (e) {
    De[e] = new tt(e, 4, !1, e, null, !1, !1);
  });
  ["cols", "rows", "size", "span"].forEach(function (e) {
    De[e] = new tt(e, 6, !1, e, null, !1, !1);
  });
  ["rowSpan", "start"].forEach(function (e) {
    De[e] = new tt(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Ga = /[\-:]([a-z])/g;
  function Ka(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Ga, Ka);
      De[t] = new tt(t, 1, !1, e, null, !1, !1);
    });
  "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
    .split(" ")
    .forEach(function (e) {
      var t = e.replace(Ga, Ka);
      De[t] = new tt(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
    });
  ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Ga, Ka);
    De[t] = new tt(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  });
  ["tabIndex", "crossOrigin"].forEach(function (e) {
    De[e] = new tt(e, 1, !1, e.toLowerCase(), null, !1, !1);
  });
  De.xlinkHref = new tt(
    "xlinkHref",
    1,
    !1,
    "xlink:href",
    "http://www.w3.org/1999/xlink",
    !0,
    !1
  );
  ["src", "href", "action", "formAction"].forEach(function (e) {
    De[e] = new tt(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function Qa(e, t, n, r) {
    var o = De.hasOwnProperty(t) ? De[t] : null;
    (o !== null
      ? o.type !== 0
      : r ||
        !(2 < t.length) ||
        (t[0] !== "o" && t[0] !== "O") ||
        (t[1] !== "n" && t[1] !== "N")) &&
      (Uh(t, n, o, r) && (n = null),
      r || o === null
        ? Dh(t) &&
          (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
        : o.mustUseProperty
        ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
        : ((t = o.attributeName),
          (r = o.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((o = o.type),
              (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var sn = Bh.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    ei = Symbol.for("react.element"),
    dr = Symbol.for("react.portal"),
    fr = Symbol.for("react.fragment"),
    Ya = Symbol.for("react.strict_mode"),
    Ds = Symbol.for("react.profiler"),
    mf = Symbol.for("react.provider"),
    hf = Symbol.for("react.context"),
    Xa = Symbol.for("react.forward_ref"),
    Ws = Symbol.for("react.suspense"),
    Us = Symbol.for("react.suspense_list"),
    qa = Symbol.for("react.memo"),
    cn = Symbol.for("react.lazy"),
    gf = Symbol.for("react.offscreen"),
    pc = Symbol.iterator;
  function Qr(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (pc && e[pc]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Ce = Object.assign,
    ss;
  function oo(e) {
    if (ss === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ss = (t && t[1]) || "";
      }
    return (
      `
` +
      ss +
      e
    );
  }
  var as = !1;
  function us(e, t) {
    if (!e || as) return "";
    as = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (
          ((t = function () {
            throw Error();
          }),
          Object.defineProperty(t.prototype, "props", {
            set: function () {
              throw Error();
            },
          }),
          typeof Reflect == "object" && Reflect.construct)
        ) {
          try {
            Reflect.construct(t, []);
          } catch (u) {
            var r = u;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch (u) {
            r = u;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch (u) {
          r = u;
        }
        e();
      }
    } catch (u) {
      if (u && r && typeof u.stack == "string") {
        for (
          var o = u.stack.split(`
`),
            i = r.stack.split(`
`),
            l = o.length - 1,
            s = i.length - 1;
          1 <= l && 0 <= s && o[l] !== i[s];

        )
          s--;
        for (; 1 <= l && 0 <= s; l--, s--)
          if (o[l] !== i[s]) {
            if (l !== 1 || s !== 1)
              do
                if ((l--, s--, 0 > s || o[l] !== i[s])) {
                  var a =
                    `
` + o[l].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      a.includes("<anonymous>") &&
                      (a = a.replace("<anonymous>", e.displayName)),
                    a
                  );
                }
              while (1 <= l && 0 <= s);
            break;
          }
      }
    } finally {
      (as = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? oo(e) : "";
  }
  function Vh(e) {
    switch (e.tag) {
      case 5:
        return oo(e.type);
      case 16:
        return oo("Lazy");
      case 13:
        return oo("Suspense");
      case 19:
        return oo("SuspenseList");
      case 0:
      case 2:
      case 15:
        return (e = us(e.type, !1)), e;
      case 11:
        return (e = us(e.type.render, !1)), e;
      case 1:
        return (e = us(e.type, !0)), e;
      default:
        return "";
    }
  }
  function Vs(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case fr:
        return "Fragment";
      case dr:
        return "Portal";
      case Ds:
        return "Profiler";
      case Ya:
        return "StrictMode";
      case Ws:
        return "Suspense";
      case Us:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case hf:
          return (e.displayName || "Context") + ".Consumer";
        case mf:
          return (e._context.displayName || "Context") + ".Provider";
        case Xa:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case qa:
          return (
            (t = e.displayName || null), t !== null ? t : Vs(e.type) || "Memo"
          );
        case cn:
          (t = e._payload), (e = e._init);
          try {
            return Vs(e(t));
          } catch {}
      }
    return null;
  }
  function Hh(e) {
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
        return (
          (e = t.render),
          (e = e.displayName || e.name || ""),
          t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
        );
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
        return Vs(t);
      case 8:
        return t === Ya ? "StrictMode" : "Mode";
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
  function Tn(e) {
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
  function yf(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Gh(e) {
    var t = yf(e) ? "checked" : "value",
      n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      r = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof n < "u" &&
      typeof n.get == "function" &&
      typeof n.set == "function"
    ) {
      var o = n.get,
        i = n.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return o.call(this);
          },
          set: function (l) {
            (r = "" + l), i.call(this, l);
          },
        }),
        Object.defineProperty(e, t, { enumerable: n.enumerable }),
        {
          getValue: function () {
            return r;
          },
          setValue: function (l) {
            r = "" + l;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function ti(e) {
    e._valueTracker || (e._valueTracker = Gh(e));
  }
  function vf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
      r = "";
    return (
      e && (r = yf(e) ? (e.checked ? "true" : "false") : e.value),
      (e = r),
      e !== n ? (t.setValue(e), !0) : !1
    );
  }
  function Di(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Hs(e, t) {
    var n = t.checked;
    return Ce({}, t, {
      defaultChecked: void 0,
      defaultValue: void 0,
      value: void 0,
      checked: n ?? e._wrapperState.initialChecked,
    });
  }
  function mc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
      r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Tn(t.value != null ? t.value : n)),
      (e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled:
          t.type === "checkbox" || t.type === "radio"
            ? t.checked != null
            : t.value != null,
      });
  }
  function Sf(e, t) {
    (t = t.checked), t != null && Qa(e, "checked", t, !1);
  }
  function Gs(e, t) {
    Sf(e, t);
    var n = Tn(t.value),
      r = t.type;
    if (n != null)
      r === "number"
        ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
        : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value")
      ? Ks(e, t.type, n)
      : t.hasOwnProperty("defaultValue") && Ks(e, t.type, Tn(t.defaultValue)),
      t.checked == null &&
        t.defaultChecked != null &&
        (e.defaultChecked = !!t.defaultChecked);
  }
  function hc(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (
        !(
          (r !== "submit" && r !== "reset") ||
          (t.value !== void 0 && t.value !== null)
        )
      )
        return;
      (t = "" + e._wrapperState.initialValue),
        n || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (n = e.name),
      n !== "" && (e.name = ""),
      (e.defaultChecked = !!e._wrapperState.initialChecked),
      n !== "" && (e.name = n);
  }
  function Ks(e, t, n) {
    (t !== "number" || Di(e.ownerDocument) !== e) &&
      (n == null
        ? (e.defaultValue = "" + e._wrapperState.initialValue)
        : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var io = Array.isArray;
  function kr(e, t, n, r) {
    if (((e = e.options), t)) {
      t = {};
      for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        (o = t.hasOwnProperty("$" + e[n].value)),
          e[n].selected !== o && (e[n].selected = o),
          o && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Tn(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          (e[o].selected = !0), r && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Qs(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(b(91));
    return Ce({}, t, {
      value: void 0,
      defaultValue: void 0,
      children: "" + e._wrapperState.initialValue,
    });
  }
  function gc(e, t) {
    var n = t.value;
    if (n == null) {
      if (((n = t.children), (t = t.defaultValue), n != null)) {
        if (t != null) throw Error(b(92));
        if (io(n)) {
          if (1 < n.length) throw Error(b(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Tn(n) };
  }
  function wf(e, t) {
    var n = Tn(t.value),
      r = Tn(t.defaultValue);
    n != null &&
      ((n = "" + n),
      n !== e.value && (e.value = n),
      t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
      r != null && (e.defaultValue = "" + r);
  }
  function yc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue &&
      t !== "" &&
      t !== null &&
      (e.value = t);
  }
  function xf(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ys(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
      ? xf(t)
      : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
      ? "http://www.w3.org/1999/xhtml"
      : e;
  }
  var ni,
    Cf = (function (e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
        ? function (t, n, r, o) {
            MSApp.execUnsafeLocalFunction(function () {
              return e(t, n, r, o);
            });
          }
        : e;
    })(function (e, t) {
      if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
        e.innerHTML = t;
      else {
        for (
          ni = ni || document.createElement("div"),
            ni.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
            t = ni.firstChild;
          e.firstChild;

        )
          e.removeChild(e.firstChild);
        for (; t.firstChild; ) e.appendChild(t.firstChild);
      }
    });
  function Co(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var co = {
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
      strokeWidth: !0,
    },
    Kh = ["Webkit", "ms", "Moz", "O"];
  Object.keys(co).forEach(function (e) {
    Kh.forEach(function (t) {
      (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (co[t] = co[e]);
    });
  });
  function kf(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
      ? ""
      : n || typeof t != "number" || t === 0 || (co.hasOwnProperty(e) && co[e])
      ? ("" + t).trim()
      : t + "px";
  }
  function Ef(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0,
          o = kf(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
      }
  }
  var Qh = Ce(
    { menuitem: !0 },
    {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0,
    }
  );
  function Xs(e, t) {
    if (t) {
      if (Qh[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(b(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null) throw Error(b(60));
        if (
          typeof t.dangerouslySetInnerHTML != "object" ||
          !("__html" in t.dangerouslySetInnerHTML)
        )
          throw Error(b(61));
      }
      if (t.style != null && typeof t.style != "object") throw Error(b(62));
    }
  }
  function qs(e, t) {
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
  var Zs = null;
  function Za(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var Js = null,
    Er = null,
    Tr = null;
  function vc(e) {
    if ((e = Go(e))) {
      if (typeof Js != "function") throw Error(b(280));
      var t = e.stateNode;
      t && ((t = Cl(t)), Js(e.stateNode, e.type, t));
    }
  }
  function Tf(e) {
    Er ? (Tr ? Tr.push(e) : (Tr = [e])) : (Er = e);
  }
  function Pf() {
    if (Er) {
      var e = Er,
        t = Tr;
      if (((Tr = Er = null), vc(e), t)) for (e = 0; e < t.length; e++) vc(t[e]);
    }
  }
  function $f(e, t) {
    return e(t);
  }
  function Mf() {}
  var cs = !1;
  function Rf(e, t, n) {
    if (cs) return e(t, n);
    cs = !0;
    try {
      return $f(e, t, n);
    } finally {
      (cs = !1), (Er !== null || Tr !== null) && (Mf(), Pf());
    }
  }
  function ko(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Cl(n);
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
        (r = !r.disabled) ||
          ((e = e.type),
          (r = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !r);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(b(231, t, typeof n));
    return n;
  }
  var ea = !1;
  if (nn)
    try {
      var Yr = {};
      Object.defineProperty(Yr, "passive", {
        get: function () {
          ea = !0;
        },
      }),
        window.addEventListener("test", Yr, Yr),
        window.removeEventListener("test", Yr, Yr);
    } catch {
      ea = !1;
    }
  function Yh(e, t, n, r, o, i, l, s, a) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, u);
    } catch (f) {
      this.onError(f);
    }
  }
  var fo = !1,
    Wi = null,
    Ui = !1,
    ta = null,
    Xh = {
      onError: function (e) {
        (fo = !0), (Wi = e);
      },
    };
  function qh(e, t, n, r, o, i, l, s, a) {
    (fo = !1), (Wi = null), Yh.apply(Xh, arguments);
  }
  function Zh(e, t, n, r, o, i, l, s, a) {
    if ((qh.apply(this, arguments), fo)) {
      if (fo) {
        var u = Wi;
        (fo = !1), (Wi = null);
      } else throw Error(b(198));
      Ui || ((Ui = !0), (ta = u));
    }
  }
  function qn(e) {
    var t = e,
      n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function _f(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Sc(e) {
    if (qn(e) !== e) throw Error(b(188));
  }
  function Jh(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = qn(e)), t === null)) throw Error(b(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var i = o.alternate;
      if (i === null) {
        if (((r = o.return), r !== null)) {
          n = r;
          continue;
        }
        break;
      }
      if (o.child === i.child) {
        for (i = o.child; i; ) {
          if (i === n) return Sc(o), e;
          if (i === r) return Sc(o), t;
          i = i.sibling;
        }
        throw Error(b(188));
      }
      if (n.return !== r.return) (n = o), (r = i);
      else {
        for (var l = !1, s = o.child; s; ) {
          if (s === n) {
            (l = !0), (n = o), (r = i);
            break;
          }
          if (s === r) {
            (l = !0), (r = o), (n = i);
            break;
          }
          s = s.sibling;
        }
        if (!l) {
          for (s = i.child; s; ) {
            if (s === n) {
              (l = !0), (n = i), (r = o);
              break;
            }
            if (s === r) {
              (l = !0), (r = i), (n = o);
              break;
            }
            s = s.sibling;
          }
          if (!l) throw Error(b(189));
        }
      }
      if (n.alternate !== r) throw Error(b(190));
    }
    if (n.tag !== 3) throw Error(b(188));
    return n.stateNode.current === n ? e : t;
  }
  function bf(e) {
    return (e = Jh(e)), e !== null ? If(e) : null;
  }
  function If(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
      var t = If(e);
      if (t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var Of = vt.unstable_scheduleCallback,
    wc = vt.unstable_cancelCallback,
    eg = vt.unstable_shouldYield,
    tg = vt.unstable_requestPaint,
    Pe = vt.unstable_now,
    ng = vt.unstable_getCurrentPriorityLevel,
    Ja = vt.unstable_ImmediatePriority,
    Af = vt.unstable_UserBlockingPriority,
    Vi = vt.unstable_NormalPriority,
    rg = vt.unstable_LowPriority,
    Nf = vt.unstable_IdlePriority,
    vl = null,
    Kt = null;
  function og(e) {
    if (Kt && typeof Kt.onCommitFiberRoot == "function")
      try {
        Kt.onCommitFiberRoot(vl, e, void 0, (e.current.flags & 128) === 128);
      } catch {}
  }
  var Nt = Math.clz32 ? Math.clz32 : sg,
    ig = Math.log,
    lg = Math.LN2;
  function sg(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((ig(e) / lg) | 0)) | 0;
  }
  var ri = 64,
    oi = 4194304;
  function lo(e) {
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
  function Hi(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
      o = e.suspendedLanes,
      i = e.pingedLanes,
      l = n & 268435455;
    if (l !== 0) {
      var s = l & ~o;
      s !== 0 ? (r = lo(s)) : ((i &= l), i !== 0 && (r = lo(i)));
    } else (l = n & ~o), l !== 0 ? (r = lo(l)) : i !== 0 && (r = lo(i));
    if (r === 0) return 0;
    if (
      t !== 0 &&
      t !== r &&
      !(t & o) &&
      ((o = r & -r), (i = t & -t), o >= i || (o === 16 && (i & 4194240) !== 0))
    )
      return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
      for (e = e.entanglements, t &= r; 0 < t; )
        (n = 31 - Nt(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
  }
  function ag(e, t) {
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
  function ug(e, t) {
    for (
      var n = e.suspendedLanes,
        r = e.pingedLanes,
        o = e.expirationTimes,
        i = e.pendingLanes;
      0 < i;

    ) {
      var l = 31 - Nt(i),
        s = 1 << l,
        a = o[l];
      a === -1
        ? (!(s & n) || s & r) && (o[l] = ag(s, t))
        : a <= t && (e.expiredLanes |= s),
        (i &= ~s);
    }
  }
  function na(e) {
    return (
      (e = e.pendingLanes & -1073741825),
      e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    );
  }
  function zf() {
    var e = ri;
    return (ri <<= 1), !(ri & 4194240) && (ri = 64), e;
  }
  function ds(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Vo(e, t, n) {
    (e.pendingLanes |= t),
      t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
      (e = e.eventTimes),
      (t = 31 - Nt(t)),
      (e[t] = n);
  }
  function cg(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.expiredLanes &= t),
      (e.mutableReadLanes &= t),
      (e.entangledLanes &= t),
      (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var o = 31 - Nt(n),
        i = 1 << o;
      (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i);
    }
  }
  function eu(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
      var r = 31 - Nt(n),
        o = 1 << r;
      (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
  }
  var ie = 0;
  function Lf(e) {
    return (
      (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
    );
  }
  var jf,
    tu,
    Bf,
    Ff,
    Df,
    ra = !1,
    ii = [],
    gn = null,
    yn = null,
    vn = null,
    Eo = new Map(),
    To = new Map(),
    fn = [],
    dg =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
        " "
      );
  function xc(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        gn = null;
        break;
      case "dragenter":
      case "dragleave":
        yn = null;
        break;
      case "mouseover":
      case "mouseout":
        vn = null;
        break;
      case "pointerover":
      case "pointerout":
        Eo.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        To.delete(t.pointerId);
    }
  }
  function Xr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: n,
          eventSystemFlags: r,
          nativeEvent: i,
          targetContainers: [o],
        }),
        t !== null && ((t = Go(t)), t !== null && tu(t)),
        e)
      : ((e.eventSystemFlags |= r),
        (t = e.targetContainers),
        o !== null && t.indexOf(o) === -1 && t.push(o),
        e);
  }
  function fg(e, t, n, r, o) {
    switch (t) {
      case "focusin":
        return (gn = Xr(gn, e, t, n, r, o)), !0;
      case "dragenter":
        return (yn = Xr(yn, e, t, n, r, o)), !0;
      case "mouseover":
        return (vn = Xr(vn, e, t, n, r, o)), !0;
      case "pointerover":
        var i = o.pointerId;
        return Eo.set(i, Xr(Eo.get(i) || null, e, t, n, r, o)), !0;
      case "gotpointercapture":
        return (
          (i = o.pointerId), To.set(i, Xr(To.get(i) || null, e, t, n, r, o)), !0
        );
    }
    return !1;
  }
  function Wf(e) {
    var t = zn(e.target);
    if (t !== null) {
      var n = qn(t);
      if (n !== null) {
        if (((t = n.tag), t === 13)) {
          if (((t = _f(n)), t !== null)) {
            (e.blockedOn = t),
              Df(e.priority, function () {
                Bf(n);
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
  function Pi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = oa(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        (Zs = r), n.target.dispatchEvent(r), (Zs = null);
      } else return (t = Go(n)), t !== null && tu(t), (e.blockedOn = n), !1;
      t.shift();
    }
    return !0;
  }
  function Cc(e, t, n) {
    Pi(e) && n.delete(t);
  }
  function pg() {
    (ra = !1),
      gn !== null && Pi(gn) && (gn = null),
      yn !== null && Pi(yn) && (yn = null),
      vn !== null && Pi(vn) && (vn = null),
      Eo.forEach(Cc),
      To.forEach(Cc);
  }
  function qr(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      ra ||
        ((ra = !0),
        vt.unstable_scheduleCallback(vt.unstable_NormalPriority, pg)));
  }
  function Po(e) {
    function t(o) {
      return qr(o, e);
    }
    if (0 < ii.length) {
      qr(ii[0], e);
      for (var n = 1; n < ii.length; n++) {
        var r = ii[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (
      gn !== null && qr(gn, e),
        yn !== null && qr(yn, e),
        vn !== null && qr(vn, e),
        Eo.forEach(t),
        To.forEach(t),
        n = 0;
      n < fn.length;
      n++
    )
      (r = fn[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < fn.length && ((n = fn[0]), n.blockedOn === null); )
      Wf(n), n.blockedOn === null && fn.shift();
  }
  var Pr = sn.ReactCurrentBatchConfig,
    Gi = !0;
  function mg(e, t, n, r) {
    var o = ie,
      i = Pr.transition;
    Pr.transition = null;
    try {
      (ie = 1), nu(e, t, n, r);
    } finally {
      (ie = o), (Pr.transition = i);
    }
  }
  function hg(e, t, n, r) {
    var o = ie,
      i = Pr.transition;
    Pr.transition = null;
    try {
      (ie = 4), nu(e, t, n, r);
    } finally {
      (ie = o), (Pr.transition = i);
    }
  }
  function nu(e, t, n, r) {
    if (Gi) {
      var o = oa(e, t, n, r);
      if (o === null) xs(e, t, r, Ki, n), xc(e, r);
      else if (fg(o, e, t, n, r)) r.stopPropagation();
      else if ((xc(e, r), t & 4 && -1 < dg.indexOf(e))) {
        for (; o !== null; ) {
          var i = Go(o);
          if (
            (i !== null && jf(i),
            (i = oa(e, t, n, r)),
            i === null && xs(e, t, r, Ki, n),
            i === o)
          )
            break;
          o = i;
        }
        o !== null && r.stopPropagation();
      } else xs(e, t, r, null, n);
    }
  }
  var Ki = null;
  function oa(e, t, n, r) {
    if (((Ki = null), (e = Za(r)), (e = zn(e)), e !== null))
      if (((t = qn(e)), t === null)) e = null;
      else if (((n = t.tag), n === 13)) {
        if (((e = _f(t)), e !== null)) return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else t !== e && (e = null);
    return (Ki = e), null;
  }
  function Uf(e) {
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
        switch (ng()) {
          case Ja:
            return 1;
          case Af:
            return 4;
          case Vi:
          case rg:
            return 16;
          case Nf:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var mn = null,
    ru = null,
    $i = null;
  function Vf() {
    if ($i) return $i;
    var e,
      t = ru,
      n = t.length,
      r,
      o = "value" in mn ? mn.value : mn.textContent,
      i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === o[i - r]; r++);
    return ($i = o.slice(e, 1 < r ? 1 - r : void 0));
  }
  function Mi(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function li() {
    return !0;
  }
  function kc() {
    return !1;
  }
  function wt(e) {
    function t(n, r, o, i, l) {
      (this._reactName = n),
        (this._targetInst = o),
        (this.type = r),
        (this.nativeEvent = i),
        (this.target = l),
        (this.currentTarget = null);
      for (var s in e)
        e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(i) : i[s]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? li
          : kc),
        (this.isPropagationStopped = kc),
        this
      );
    }
    return (
      Ce(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var n = this.nativeEvent;
          n &&
            (n.preventDefault
              ? n.preventDefault()
              : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            (this.isDefaultPrevented = li));
        },
        stopPropagation: function () {
          var n = this.nativeEvent;
          n &&
            (n.stopPropagation
              ? n.stopPropagation()
              : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            (this.isPropagationStopped = li));
        },
        persist: function () {},
        isPersistent: li,
      }),
      t
    );
  }
  var Dr = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    ou = wt(Dr),
    Ho = Ce({}, Dr, { view: 0, detail: 0 }),
    gg = wt(Ho),
    fs,
    ps,
    Zr,
    Sl = Ce({}, Ho, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: iu,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== Zr &&
              (Zr && e.type === "mousemove"
                ? ((fs = e.screenX - Zr.screenX), (ps = e.screenY - Zr.screenY))
                : (ps = fs = 0),
              (Zr = e)),
            fs);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : ps;
      },
    }),
    Ec = wt(Sl),
    yg = Ce({}, Sl, { dataTransfer: 0 }),
    vg = wt(yg),
    Sg = Ce({}, Ho, { relatedTarget: 0 }),
    ms = wt(Sg),
    wg = Ce({}, Dr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    xg = wt(wg),
    Cg = Ce({}, Dr, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    kg = wt(Cg),
    Eg = Ce({}, Dr, { data: 0 }),
    Tc = wt(Eg),
    Tg = {
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
      MozPrintableKey: "Unidentified",
    },
    Pg = {
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
      224: "Meta",
    },
    $g = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function Mg(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = $g[e])
      ? !!t[e]
      : !1;
  }
  function iu() {
    return Mg;
  }
  var Rg = Ce({}, Ho, {
      key: function (e) {
        if (e.key) {
          var t = Tg[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = Mi(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? Pg[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: iu,
      charCode: function (e) {
        return e.type === "keypress" ? Mi(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? Mi(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    _g = wt(Rg),
    bg = Ce({}, Sl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Pc = wt(bg),
    Ig = Ce({}, Ho, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: iu,
    }),
    Og = wt(Ig),
    Ag = Ce({}, Dr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Ng = wt(Ag),
    zg = Ce({}, Sl, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    Lg = wt(zg),
    jg = [9, 13, 27, 32],
    lu = nn && "CompositionEvent" in window,
    po = null;
  nn && "documentMode" in document && (po = document.documentMode);
  var Bg = nn && "TextEvent" in window && !po,
    Hf = nn && (!lu || (po && 8 < po && 11 >= po)),
    $c = " ",
    Mc = !1;
  function Gf(e, t) {
    switch (e) {
      case "keyup":
        return jg.indexOf(t.keyCode) !== -1;
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
  function Kf(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var pr = !1;
  function Fg(e, t) {
    switch (e) {
      case "compositionend":
        return Kf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Mc = !0), $c);
      case "textInput":
        return (e = t.data), e === $c && Mc ? null : e;
      default:
        return null;
    }
  }
  function Dg(e, t) {
    if (pr)
      return e === "compositionend" || (!lu && Gf(e, t))
        ? ((e = Vf()), ($i = ru = mn = null), (pr = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Hf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Wg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function Rc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Wg[e.type] : t === "textarea";
  }
  function Qf(e, t, n, r) {
    Tf(r),
      (t = Qi(t, "onChange")),
      0 < t.length &&
        ((n = new ou("onChange", "change", null, n, r)),
        e.push({ event: n, listeners: t }));
  }
  var mo = null,
    $o = null;
  function Ug(e) {
    ip(e, 0);
  }
  function wl(e) {
    var t = gr(e);
    if (vf(t)) return e;
  }
  function Vg(e, t) {
    if (e === "change") return t;
  }
  var Yf = !1;
  if (nn) {
    var hs;
    if (nn) {
      var gs = "oninput" in document;
      if (!gs) {
        var _c = document.createElement("div");
        _c.setAttribute("oninput", "return;"),
          (gs = typeof _c.oninput == "function");
      }
      hs = gs;
    } else hs = !1;
    Yf = hs && (!document.documentMode || 9 < document.documentMode);
  }
  function bc() {
    mo && (mo.detachEvent("onpropertychange", Xf), ($o = mo = null));
  }
  function Xf(e) {
    if (e.propertyName === "value" && wl($o)) {
      var t = [];
      Qf(t, $o, e, Za(e)), Rf(Ug, t);
    }
  }
  function Hg(e, t, n) {
    e === "focusin"
      ? (bc(), (mo = t), ($o = n), mo.attachEvent("onpropertychange", Xf))
      : e === "focusout" && bc();
  }
  function Gg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return wl($o);
  }
  function Kg(e, t) {
    if (e === "click") return wl(t);
  }
  function Qg(e, t) {
    if (e === "input" || e === "change") return wl(t);
  }
  function Yg(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var jt = typeof Object.is == "function" ? Object.is : Yg;
  function Mo(e, t) {
    if (jt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var n = Object.keys(e),
      r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
      var o = n[r];
      if (!Fs.call(t, o) || !jt(e[o], t[o])) return !1;
    }
    return !0;
  }
  function Ic(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Oc(e, t) {
    var n = Ic(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (((r = e + n.textContent.length), e <= t && r >= t))
          return { node: n, offset: t - e };
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
      n = Ic(n);
    }
  }
  function qf(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? qf(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function Zf() {
    for (var e = window, t = Di(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Di(e.document);
    }
    return t;
  }
  function su(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  function Xg(e) {
    var t = Zf(),
      n = e.focusedElem,
      r = e.selectionRange;
    if (
      t !== n &&
      n &&
      n.ownerDocument &&
      qf(n.ownerDocument.documentElement, n)
    ) {
      if (r !== null && su(n)) {
        if (
          ((t = r.start),
          (e = r.end),
          e === void 0 && (e = t),
          "selectionStart" in n)
        )
          (n.selectionStart = t),
            (n.selectionEnd = Math.min(e, n.value.length));
        else if (
          ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
          e.getSelection)
        ) {
          e = e.getSelection();
          var o = n.textContent.length,
            i = Math.min(r.start, o);
          (r = r.end === void 0 ? i : Math.min(r.end, o)),
            !e.extend && i > r && ((o = r), (r = i), (i = o)),
            (o = Oc(n, i));
          var l = Oc(n, r);
          o &&
            l &&
            (e.rangeCount !== 1 ||
              e.anchorNode !== o.node ||
              e.anchorOffset !== o.offset ||
              e.focusNode !== l.node ||
              e.focusOffset !== l.offset) &&
            ((t = t.createRange()),
            t.setStart(o.node, o.offset),
            e.removeAllRanges(),
            i > r
              ? (e.addRange(t), e.extend(l.node, l.offset))
              : (t.setEnd(l.node, l.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; (e = e.parentNode); )
        e.nodeType === 1 &&
          t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        (e = t[n]),
          (e.element.scrollLeft = e.left),
          (e.element.scrollTop = e.top);
    }
  }
  var qg = nn && "documentMode" in document && 11 >= document.documentMode,
    mr = null,
    ia = null,
    ho = null,
    la = !1;
  function Ac(e, t, n) {
    var r =
      n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    la ||
      mr == null ||
      mr !== Di(r) ||
      ((r = mr),
      "selectionStart" in r && su(r)
        ? (r = { start: r.selectionStart, end: r.selectionEnd })
        : ((r = (
            (r.ownerDocument && r.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (r = {
            anchorNode: r.anchorNode,
            anchorOffset: r.anchorOffset,
            focusNode: r.focusNode,
            focusOffset: r.focusOffset,
          })),
      (ho && Mo(ho, r)) ||
        ((ho = r),
        (r = Qi(ia, "onSelect")),
        0 < r.length &&
          ((t = new ou("onSelect", "select", null, t, n)),
          e.push({ event: t, listeners: r }),
          (t.target = mr))));
  }
  function si(e, t) {
    var n = {};
    return (
      (n[e.toLowerCase()] = t.toLowerCase()),
      (n["Webkit" + e] = "webkit" + t),
      (n["Moz" + e] = "moz" + t),
      n
    );
  }
  var hr = {
      animationend: si("Animation", "AnimationEnd"),
      animationiteration: si("Animation", "AnimationIteration"),
      animationstart: si("Animation", "AnimationStart"),
      transitionend: si("Transition", "TransitionEnd"),
    },
    ys = {},
    Jf = {};
  nn &&
    ((Jf = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete hr.animationend.animation,
      delete hr.animationiteration.animation,
      delete hr.animationstart.animation),
    "TransitionEvent" in window || delete hr.transitionend.transition);
  function xl(e) {
    if (ys[e]) return ys[e];
    if (!hr[e]) return e;
    var t = hr[e],
      n;
    for (n in t) if (t.hasOwnProperty(n) && n in Jf) return (ys[e] = t[n]);
    return e;
  }
  var ep = xl("animationend"),
    tp = xl("animationiteration"),
    np = xl("animationstart"),
    rp = xl("transitionend"),
    op = new Map(),
    Nc =
      "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  function Rn(e, t) {
    op.set(e, t), Xn(t, [e]);
  }
  for (var vs = 0; vs < Nc.length; vs++) {
    var Ss = Nc[vs],
      Zg = Ss.toLowerCase(),
      Jg = Ss[0].toUpperCase() + Ss.slice(1);
    Rn(Zg, "on" + Jg);
  }
  Rn(ep, "onAnimationEnd");
  Rn(tp, "onAnimationIteration");
  Rn(np, "onAnimationStart");
  Rn("dblclick", "onDoubleClick");
  Rn("focusin", "onFocus");
  Rn("focusout", "onBlur");
  Rn(rp, "onTransitionEnd");
  br("onMouseEnter", ["mouseout", "mouseover"]);
  br("onMouseLeave", ["mouseout", "mouseover"]);
  br("onPointerEnter", ["pointerout", "pointerover"]);
  br("onPointerLeave", ["pointerout", "pointerover"]);
  Xn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(
      " "
    )
  );
  Xn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  );
  Xn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
  Xn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  );
  Xn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  );
  Xn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var so =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    e0 = new Set(
      "cancel close invalid load scroll toggle".split(" ").concat(so)
    );
  function zc(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), Zh(r, t, void 0, e), (e.currentTarget = null);
  }
  function ip(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n],
        o = r.event;
      r = r.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var l = r.length - 1; 0 <= l; l--) {
            var s = r[l],
              a = s.instance,
              u = s.currentTarget;
            if (((s = s.listener), a !== i && o.isPropagationStopped()))
              break e;
            zc(o, s, u), (i = a);
          }
        else
          for (l = 0; l < r.length; l++) {
            if (
              ((s = r[l]),
              (a = s.instance),
              (u = s.currentTarget),
              (s = s.listener),
              a !== i && o.isPropagationStopped())
            )
              break e;
            zc(o, s, u), (i = a);
          }
      }
    }
    if (Ui) throw ((e = ta), (Ui = !1), (ta = null), e);
  }
  function ge(e, t) {
    var n = t[da];
    n === void 0 && (n = t[da] = new Set());
    var r = e + "__bubble";
    n.has(r) || (lp(t, e, 2, !1), n.add(r));
  }
  function ws(e, t, n) {
    var r = 0;
    t && (r |= 4), lp(n, e, r, t);
  }
  var ai = "_reactListening" + Math.random().toString(36).slice(2);
  function Ro(e) {
    if (!e[ai]) {
      (e[ai] = !0),
        pf.forEach(function (n) {
          n !== "selectionchange" && (e0.has(n) || ws(n, !1, e), ws(n, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ai] || ((t[ai] = !0), ws("selectionchange", !1, t));
    }
  }
  function lp(e, t, n, r) {
    switch (Uf(t)) {
      case 1:
        var o = mg;
        break;
      case 4:
        o = hg;
        break;
      default:
        o = nu;
    }
    (n = o.bind(null, t, n, e)),
      (o = void 0),
      !ea ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (o = !0),
      r
        ? o !== void 0
          ? e.addEventListener(t, n, { capture: !0, passive: o })
          : e.addEventListener(t, n, !0)
        : o !== void 0
        ? e.addEventListener(t, n, { passive: o })
        : e.addEventListener(t, n, !1);
  }
  function xs(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e: for (;;) {
        if (r === null) return;
        var l = r.tag;
        if (l === 3 || l === 4) {
          var s = r.stateNode.containerInfo;
          if (s === o || (s.nodeType === 8 && s.parentNode === o)) break;
          if (l === 4)
            for (l = r.return; l !== null; ) {
              var a = l.tag;
              if (
                (a === 3 || a === 4) &&
                ((a = l.stateNode.containerInfo),
                a === o || (a.nodeType === 8 && a.parentNode === o))
              )
                return;
              l = l.return;
            }
          for (; s !== null; ) {
            if (((l = zn(s)), l === null)) return;
            if (((a = l.tag), a === 5 || a === 6)) {
              r = i = l;
              continue e;
            }
            s = s.parentNode;
          }
        }
        r = r.return;
      }
    Rf(function () {
      var u = i,
        f = Za(n),
        p = [];
      e: {
        var m = op.get(e);
        if (m !== void 0) {
          var w = ou,
            v = e;
          switch (e) {
            case "keypress":
              if (Mi(n) === 0) break e;
            case "keydown":
            case "keyup":
              w = _g;
              break;
            case "focusin":
              (v = "focus"), (w = ms);
              break;
            case "focusout":
              (v = "blur"), (w = ms);
              break;
            case "beforeblur":
            case "afterblur":
              w = ms;
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
              w = Ec;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = vg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = Og;
              break;
            case ep:
            case tp:
            case np:
              w = xg;
              break;
            case rp:
              w = Ng;
              break;
            case "scroll":
              w = gg;
              break;
            case "wheel":
              w = Lg;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = kg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = Pc;
          }
          var S = (t & 4) !== 0,
            P = !S && e === "scroll",
            g = S ? (m !== null ? m + "Capture" : null) : m;
          S = [];
          for (var h = u, c; h !== null; ) {
            c = h;
            var x = c.stateNode;
            if (
              (c.tag === 5 &&
                x !== null &&
                ((c = x),
                g !== null &&
                  ((x = ko(h, g)), x != null && S.push(_o(h, x, c)))),
              P)
            )
              break;
            h = h.return;
          }
          0 < S.length &&
            ((m = new w(m, v, null, n, f)), p.push({ event: m, listeners: S }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (
            ((m = e === "mouseover" || e === "pointerover"),
            (w = e === "mouseout" || e === "pointerout"),
            m &&
              n !== Zs &&
              (v = n.relatedTarget || n.fromElement) &&
              (zn(v) || v[rn]))
          )
            break e;
          if (
            (w || m) &&
            ((m =
              f.window === f
                ? f
                : (m = f.ownerDocument)
                ? m.defaultView || m.parentWindow
                : window),
            w
              ? ((v = n.relatedTarget || n.toElement),
                (w = u),
                (v = v ? zn(v) : null),
                v !== null &&
                  ((P = qn(v)), v !== P || (v.tag !== 5 && v.tag !== 6)) &&
                  (v = null))
              : ((w = null), (v = u)),
            w !== v)
          ) {
            if (
              ((S = Ec),
              (x = "onMouseLeave"),
              (g = "onMouseEnter"),
              (h = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((S = Pc),
                (x = "onPointerLeave"),
                (g = "onPointerEnter"),
                (h = "pointer")),
              (P = w == null ? m : gr(w)),
              (c = v == null ? m : gr(v)),
              (m = new S(x, h + "leave", w, n, f)),
              (m.target = P),
              (m.relatedTarget = c),
              (x = null),
              zn(f) === u &&
                ((S = new S(g, h + "enter", v, n, f)),
                (S.target = c),
                (S.relatedTarget = P),
                (x = S)),
              (P = x),
              w && v)
            )
              t: {
                for (S = w, g = v, h = 0, c = S; c; c = rr(c)) h++;
                for (c = 0, x = g; x; x = rr(x)) c++;
                for (; 0 < h - c; ) (S = rr(S)), h--;
                for (; 0 < c - h; ) (g = rr(g)), c--;
                for (; h--; ) {
                  if (S === g || (g !== null && S === g.alternate)) break t;
                  (S = rr(S)), (g = rr(g));
                }
                S = null;
              }
            else S = null;
            w !== null && Lc(p, m, w, S, !1),
              v !== null && P !== null && Lc(p, P, v, S, !0);
          }
        }
        e: {
          if (
            ((m = u ? gr(u) : window),
            (w = m.nodeName && m.nodeName.toLowerCase()),
            w === "select" || (w === "input" && m.type === "file"))
          )
            var k = Vg;
          else if (Rc(m))
            if (Yf) k = Qg;
            else {
              k = Gg;
              var E = Hg;
            }
          else
            (w = m.nodeName) &&
              w.toLowerCase() === "input" &&
              (m.type === "checkbox" || m.type === "radio") &&
              (k = Kg);
          if (k && (k = k(e, u))) {
            Qf(p, k, n, f);
            break e;
          }
          E && E(e, m, u),
            e === "focusout" &&
              (E = m._wrapperState) &&
              E.controlled &&
              m.type === "number" &&
              Ks(m, "number", m.value);
        }
        switch (((E = u ? gr(u) : window), e)) {
          case "focusin":
            (Rc(E) || E.contentEditable === "true") &&
              ((mr = E), (ia = u), (ho = null));
            break;
          case "focusout":
            ho = ia = mr = null;
            break;
          case "mousedown":
            la = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (la = !1), Ac(p, n, f);
            break;
          case "selectionchange":
            if (qg) break;
          case "keydown":
          case "keyup":
            Ac(p, n, f);
        }
        var T;
        if (lu)
          e: {
            switch (e) {
              case "compositionstart":
                var _ = "onCompositionStart";
                break e;
              case "compositionend":
                _ = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _ = "onCompositionUpdate";
                break e;
            }
            _ = void 0;
          }
        else
          pr
            ? Gf(e, n) && (_ = "onCompositionEnd")
            : e === "keydown" &&
              n.keyCode === 229 &&
              (_ = "onCompositionStart");
        _ &&
          (Hf &&
            n.locale !== "ko" &&
            (pr || _ !== "onCompositionStart"
              ? _ === "onCompositionEnd" && pr && (T = Vf())
              : ((mn = f),
                (ru = "value" in mn ? mn.value : mn.textContent),
                (pr = !0))),
          (E = Qi(u, _)),
          0 < E.length &&
            ((_ = new Tc(_, e, null, n, f)),
            p.push({ event: _, listeners: E }),
            T ? (_.data = T) : ((T = Kf(n)), T !== null && (_.data = T)))),
          (T = Bg ? Fg(e, n) : Dg(e, n)) &&
            ((u = Qi(u, "onBeforeInput")),
            0 < u.length &&
              ((f = new Tc("onBeforeInput", "beforeinput", null, n, f)),
              p.push({ event: f, listeners: u }),
              (f.data = T)));
      }
      ip(p, t);
    });
  }
  function _o(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Qi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var o = e,
        i = o.stateNode;
      o.tag === 5 &&
        i !== null &&
        ((o = i),
        (i = ko(e, n)),
        i != null && r.unshift(_o(e, i, o)),
        (i = ko(e, t)),
        i != null && r.push(_o(e, i, o))),
        (e = e.return);
    }
    return r;
  }
  function rr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Lc(e, t, n, r, o) {
    for (var i = t._reactName, l = []; n !== null && n !== r; ) {
      var s = n,
        a = s.alternate,
        u = s.stateNode;
      if (a !== null && a === r) break;
      s.tag === 5 &&
        u !== null &&
        ((s = u),
        o
          ? ((a = ko(n, i)), a != null && l.unshift(_o(n, a, s)))
          : o || ((a = ko(n, i)), a != null && l.push(_o(n, a, s)))),
        (n = n.return);
    }
    l.length !== 0 && e.push({ event: t, listeners: l });
  }
  var t0 = /\r\n?/g,
    n0 = /\u0000|\uFFFD/g;
  function jc(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        t0,
        `
`
      )
      .replace(n0, "");
  }
  function ui(e, t, n) {
    if (((t = jc(t)), jc(e) !== t && n)) throw Error(b(425));
  }
  function Yi() {}
  var sa = null,
    aa = null;
  function ua(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var ca = typeof setTimeout == "function" ? setTimeout : void 0,
    r0 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Bc = typeof Promise == "function" ? Promise : void 0,
    o0 =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Bc < "u"
        ? function (e) {
            return Bc.resolve(null).then(e).catch(i0);
          }
        : ca;
  function i0(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function Cs(e, t) {
    var n = t,
      r = 0;
    do {
      var o = n.nextSibling;
      if ((e.removeChild(n), o && o.nodeType === 8))
        if (((n = o.data), n === "/$")) {
          if (r === 0) {
            e.removeChild(o), Po(t);
            return;
          }
          r--;
        } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
      n = o;
    } while (n);
    Po(t);
  }
  function Sn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  function Fc(e) {
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
  var Wr = Math.random().toString(36).slice(2),
    Ht = "__reactFiber$" + Wr,
    bo = "__reactProps$" + Wr,
    rn = "__reactContainer$" + Wr,
    da = "__reactEvents$" + Wr,
    l0 = "__reactListeners$" + Wr,
    s0 = "__reactHandles$" + Wr;
  function zn(e) {
    var t = e[Ht];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if ((t = n[rn] || n[Ht])) {
        if (
          ((n = t.alternate),
          t.child !== null || (n !== null && n.child !== null))
        )
          for (e = Fc(e); e !== null; ) {
            if ((n = e[Ht])) return n;
            e = Fc(e);
          }
        return t;
      }
      (e = n), (n = e.parentNode);
    }
    return null;
  }
  function Go(e) {
    return (
      (e = e[Ht] || e[rn]),
      !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
        ? null
        : e
    );
  }
  function gr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(b(33));
  }
  function Cl(e) {
    return e[bo] || null;
  }
  var fa = [],
    yr = -1;
  function _n(e) {
    return { current: e };
  }
  function ye(e) {
    0 > yr || ((e.current = fa[yr]), (fa[yr] = null), yr--);
  }
  function pe(e, t) {
    yr++, (fa[yr] = e.current), (e.current = t);
  }
  var Pn = {},
    Ye = _n(Pn),
    lt = _n(!1),
    Un = Pn;
  function Ir(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Pn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
      i;
    for (i in n) o[i] = t[i];
    return (
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = t),
        (e.__reactInternalMemoizedMaskedChildContext = o)),
      o
    );
  }
  function st(e) {
    return (e = e.childContextTypes), e != null;
  }
  function Xi() {
    ye(lt), ye(Ye);
  }
  function Dc(e, t, n) {
    if (Ye.current !== Pn) throw Error(b(168));
    pe(Ye, t), pe(lt, n);
  }
  function sp(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
      return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(b(108, Hh(e) || "Unknown", o));
    return Ce({}, n, r);
  }
  function qi(e) {
    return (
      (e =
        ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
        Pn),
      (Un = Ye.current),
      pe(Ye, e),
      pe(lt, lt.current),
      !0
    );
  }
  function Wc(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(b(169));
    n
      ? ((e = sp(e, t, Un)),
        (r.__reactInternalMemoizedMergedChildContext = e),
        ye(lt),
        ye(Ye),
        pe(Ye, e))
      : ye(lt),
      pe(lt, n);
  }
  var Zt = null,
    kl = !1,
    ks = !1;
  function ap(e) {
    Zt === null ? (Zt = [e]) : Zt.push(e);
  }
  function a0(e) {
    (kl = !0), ap(e);
  }
  function bn() {
    if (!ks && Zt !== null) {
      ks = !0;
      var e = 0,
        t = ie;
      try {
        var n = Zt;
        for (ie = 1; e < n.length; e++) {
          var r = n[e];
          do r = r(!0);
          while (r !== null);
        }
        (Zt = null), (kl = !1);
      } catch (o) {
        throw (Zt !== null && (Zt = Zt.slice(e + 1)), Of(Ja, bn), o);
      } finally {
        (ie = t), (ks = !1);
      }
    }
    return null;
  }
  var vr = [],
    Sr = 0,
    Zi = null,
    Ji = 0,
    kt = [],
    Et = 0,
    Vn = null,
    Jt = 1,
    en = "";
  function On(e, t) {
    (vr[Sr++] = Ji), (vr[Sr++] = Zi), (Zi = e), (Ji = t);
  }
  function up(e, t, n) {
    (kt[Et++] = Jt), (kt[Et++] = en), (kt[Et++] = Vn), (Vn = e);
    var r = Jt;
    e = en;
    var o = 32 - Nt(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var i = 32 - Nt(t) + o;
    if (30 < i) {
      var l = o - (o % 5);
      (i = (r & ((1 << l) - 1)).toString(32)),
        (r >>= l),
        (o -= l),
        (Jt = (1 << (32 - Nt(t) + o)) | (n << o) | r),
        (en = i + e);
    } else (Jt = (1 << i) | (n << o) | r), (en = e);
  }
  function au(e) {
    e.return !== null && (On(e, 1), up(e, 1, 0));
  }
  function uu(e) {
    for (; e === Zi; )
      (Zi = vr[--Sr]), (vr[Sr] = null), (Ji = vr[--Sr]), (vr[Sr] = null);
    for (; e === Vn; )
      (Vn = kt[--Et]),
        (kt[Et] = null),
        (en = kt[--Et]),
        (kt[Et] = null),
        (Jt = kt[--Et]),
        (kt[Et] = null);
  }
  var gt = null,
    ht = null,
    Se = !1,
    At = null;
  function cp(e, t) {
    var n = Pt(5, null, null, 0);
    (n.elementType = "DELETED"),
      (n.stateNode = t),
      (n.return = e),
      (t = e.deletions),
      t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
  }
  function Uc(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return (
          (t =
            t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
              ? null
              : t),
          t !== null
            ? ((e.stateNode = t), (gt = e), (ht = Sn(t.firstChild)), !0)
            : !1
        );
      case 6:
        return (
          (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
          t !== null ? ((e.stateNode = t), (gt = e), (ht = null), !0) : !1
        );
      case 13:
        return (
          (t = t.nodeType !== 8 ? null : t),
          t !== null
            ? ((n = Vn !== null ? { id: Jt, overflow: en } : null),
              (e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824,
              }),
              (n = Pt(18, null, null, 0)),
              (n.stateNode = t),
              (n.return = e),
              (e.child = n),
              (gt = e),
              (ht = null),
              !0)
            : !1
        );
      default:
        return !1;
    }
  }
  function pa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function ma(e) {
    if (Se) {
      var t = ht;
      if (t) {
        var n = t;
        if (!Uc(e, t)) {
          if (pa(e)) throw Error(b(418));
          t = Sn(n.nextSibling);
          var r = gt;
          t && Uc(e, t)
            ? cp(r, n)
            : ((e.flags = (e.flags & -4097) | 2), (Se = !1), (gt = e));
        }
      } else {
        if (pa(e)) throw Error(b(418));
        (e.flags = (e.flags & -4097) | 2), (Se = !1), (gt = e);
      }
    }
  }
  function Vc(e) {
    for (
      e = e.return;
      e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
      e = e.return;
    gt = e;
  }
  function ci(e) {
    if (e !== gt) return !1;
    if (!Se) return Vc(e), (Se = !0), !1;
    var t;
    if (
      ((t = e.tag !== 3) &&
        !(t = e.tag !== 5) &&
        ((t = e.type),
        (t = t !== "head" && t !== "body" && !ua(e.type, e.memoizedProps))),
      t && (t = ht))
    ) {
      if (pa(e)) throw (dp(), Error(b(418)));
      for (; t; ) cp(e, t), (t = Sn(t.nextSibling));
    }
    if ((Vc(e), e.tag === 13)) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(b(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                ht = Sn(e.nextSibling);
                break e;
              }
              t--;
            } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
          }
          e = e.nextSibling;
        }
        ht = null;
      }
    } else ht = gt ? Sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function dp() {
    for (var e = ht; e; ) e = Sn(e.nextSibling);
  }
  function Or() {
    (ht = gt = null), (Se = !1);
  }
  function cu(e) {
    At === null ? (At = [e]) : At.push(e);
  }
  var u0 = sn.ReactCurrentBatchConfig;
  function Jr(e, t, n) {
    if (
      ((e = n.ref),
      e !== null && typeof e != "function" && typeof e != "object")
    ) {
      if (n._owner) {
        if (((n = n._owner), n)) {
          if (n.tag !== 1) throw Error(b(309));
          var r = n.stateNode;
        }
        if (!r) throw Error(b(147, e));
        var o = r,
          i = "" + e;
        return t !== null &&
          t.ref !== null &&
          typeof t.ref == "function" &&
          t.ref._stringRef === i
          ? t.ref
          : ((t = function (l) {
              var s = o.refs;
              l === null ? delete s[i] : (s[i] = l);
            }),
            (t._stringRef = i),
            t);
      }
      if (typeof e != "string") throw Error(b(284));
      if (!n._owner) throw Error(b(290, e));
    }
    return e;
  }
  function di(e, t) {
    throw (
      ((e = Object.prototype.toString.call(t)),
      Error(
        b(
          31,
          e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e
        )
      ))
    );
  }
  function Hc(e) {
    var t = e._init;
    return t(e._payload);
  }
  function fp(e) {
    function t(g, h) {
      if (e) {
        var c = g.deletions;
        c === null ? ((g.deletions = [h]), (g.flags |= 16)) : c.push(h);
      }
    }
    function n(g, h) {
      if (!e) return null;
      for (; h !== null; ) t(g, h), (h = h.sibling);
      return null;
    }
    function r(g, h) {
      for (g = new Map(); h !== null; )
        h.key !== null ? g.set(h.key, h) : g.set(h.index, h), (h = h.sibling);
      return g;
    }
    function o(g, h) {
      return (g = kn(g, h)), (g.index = 0), (g.sibling = null), g;
    }
    function i(g, h, c) {
      return (
        (g.index = c),
        e
          ? ((c = g.alternate),
            c !== null
              ? ((c = c.index), c < h ? ((g.flags |= 2), h) : c)
              : ((g.flags |= 2), h))
          : ((g.flags |= 1048576), h)
      );
    }
    function l(g) {
      return e && g.alternate === null && (g.flags |= 2), g;
    }
    function s(g, h, c, x) {
      return h === null || h.tag !== 6
        ? ((h = _s(c, g.mode, x)), (h.return = g), h)
        : ((h = o(h, c)), (h.return = g), h);
    }
    function a(g, h, c, x) {
      var k = c.type;
      return k === fr
        ? f(g, h, c.props.children, x, c.key)
        : h !== null &&
          (h.elementType === k ||
            (typeof k == "object" &&
              k !== null &&
              k.$$typeof === cn &&
              Hc(k) === h.type))
        ? ((x = o(h, c.props)), (x.ref = Jr(g, h, c)), (x.return = g), x)
        : ((x = Ni(c.type, c.key, c.props, null, g.mode, x)),
          (x.ref = Jr(g, h, c)),
          (x.return = g),
          x);
    }
    function u(g, h, c, x) {
      return h === null ||
        h.tag !== 4 ||
        h.stateNode.containerInfo !== c.containerInfo ||
        h.stateNode.implementation !== c.implementation
        ? ((h = bs(c, g.mode, x)), (h.return = g), h)
        : ((h = o(h, c.children || [])), (h.return = g), h);
    }
    function f(g, h, c, x, k) {
      return h === null || h.tag !== 7
        ? ((h = Wn(c, g.mode, x, k)), (h.return = g), h)
        : ((h = o(h, c)), (h.return = g), h);
    }
    function p(g, h, c) {
      if ((typeof h == "string" && h !== "") || typeof h == "number")
        return (h = _s("" + h, g.mode, c)), (h.return = g), h;
      if (typeof h == "object" && h !== null) {
        switch (h.$$typeof) {
          case ei:
            return (
              (c = Ni(h.type, h.key, h.props, null, g.mode, c)),
              (c.ref = Jr(g, null, h)),
              (c.return = g),
              c
            );
          case dr:
            return (h = bs(h, g.mode, c)), (h.return = g), h;
          case cn:
            var x = h._init;
            return p(g, x(h._payload), c);
        }
        if (io(h) || Qr(h))
          return (h = Wn(h, g.mode, c, null)), (h.return = g), h;
        di(g, h);
      }
      return null;
    }
    function m(g, h, c, x) {
      var k = h !== null ? h.key : null;
      if ((typeof c == "string" && c !== "") || typeof c == "number")
        return k !== null ? null : s(g, h, "" + c, x);
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case ei:
            return c.key === k ? a(g, h, c, x) : null;
          case dr:
            return c.key === k ? u(g, h, c, x) : null;
          case cn:
            return (k = c._init), m(g, h, k(c._payload), x);
        }
        if (io(c) || Qr(c)) return k !== null ? null : f(g, h, c, x, null);
        di(g, c);
      }
      return null;
    }
    function w(g, h, c, x, k) {
      if ((typeof x == "string" && x !== "") || typeof x == "number")
        return (g = g.get(c) || null), s(h, g, "" + x, k);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ei:
            return (
              (g = g.get(x.key === null ? c : x.key) || null), a(h, g, x, k)
            );
          case dr:
            return (
              (g = g.get(x.key === null ? c : x.key) || null), u(h, g, x, k)
            );
          case cn:
            var E = x._init;
            return w(g, h, c, E(x._payload), k);
        }
        if (io(x) || Qr(x)) return (g = g.get(c) || null), f(h, g, x, k, null);
        di(h, x);
      }
      return null;
    }
    function v(g, h, c, x) {
      for (
        var k = null, E = null, T = h, _ = (h = 0), d = null;
        T !== null && _ < c.length;
        _++
      ) {
        T.index > _ ? ((d = T), (T = null)) : (d = T.sibling);
        var R = m(g, T, c[_], x);
        if (R === null) {
          T === null && (T = d);
          break;
        }
        e && T && R.alternate === null && t(g, T),
          (h = i(R, h, _)),
          E === null ? (k = R) : (E.sibling = R),
          (E = R),
          (T = d);
      }
      if (_ === c.length) return n(g, T), Se && On(g, _), k;
      if (T === null) {
        for (; _ < c.length; _++)
          (T = p(g, c[_], x)),
            T !== null &&
              ((h = i(T, h, _)),
              E === null ? (k = T) : (E.sibling = T),
              (E = T));
        return Se && On(g, _), k;
      }
      for (T = r(g, T); _ < c.length; _++)
        (d = w(T, g, _, c[_], x)),
          d !== null &&
            (e && d.alternate !== null && T.delete(d.key === null ? _ : d.key),
            (h = i(d, h, _)),
            E === null ? (k = d) : (E.sibling = d),
            (E = d));
      return (
        e &&
          T.forEach(function (L) {
            return t(g, L);
          }),
        Se && On(g, _),
        k
      );
    }
    function S(g, h, c, x) {
      var k = Qr(c);
      if (typeof k != "function") throw Error(b(150));
      if (((c = k.call(c)), c == null)) throw Error(b(151));
      for (
        var E = (k = null), T = h, _ = (h = 0), d = null, R = c.next();
        T !== null && !R.done;
        _++, R = c.next()
      ) {
        T.index > _ ? ((d = T), (T = null)) : (d = T.sibling);
        var L = m(g, T, R.value, x);
        if (L === null) {
          T === null && (T = d);
          break;
        }
        e && T && L.alternate === null && t(g, T),
          (h = i(L, h, _)),
          E === null ? (k = L) : (E.sibling = L),
          (E = L),
          (T = d);
      }
      if (R.done) return n(g, T), Se && On(g, _), k;
      if (T === null) {
        for (; !R.done; _++, R = c.next())
          (R = p(g, R.value, x)),
            R !== null &&
              ((h = i(R, h, _)),
              E === null ? (k = R) : (E.sibling = R),
              (E = R));
        return Se && On(g, _), k;
      }
      for (T = r(g, T); !R.done; _++, R = c.next())
        (R = w(T, g, _, R.value, x)),
          R !== null &&
            (e && R.alternate !== null && T.delete(R.key === null ? _ : R.key),
            (h = i(R, h, _)),
            E === null ? (k = R) : (E.sibling = R),
            (E = R));
      return (
        e &&
          T.forEach(function (F) {
            return t(g, F);
          }),
        Se && On(g, _),
        k
      );
    }
    function P(g, h, c, x) {
      if (
        (typeof c == "object" &&
          c !== null &&
          c.type === fr &&
          c.key === null &&
          (c = c.props.children),
        typeof c == "object" && c !== null)
      ) {
        switch (c.$$typeof) {
          case ei:
            e: {
              for (var k = c.key, E = h; E !== null; ) {
                if (E.key === k) {
                  if (((k = c.type), k === fr)) {
                    if (E.tag === 7) {
                      n(g, E.sibling),
                        (h = o(E, c.props.children)),
                        (h.return = g),
                        (g = h);
                      break e;
                    }
                  } else if (
                    E.elementType === k ||
                    (typeof k == "object" &&
                      k !== null &&
                      k.$$typeof === cn &&
                      Hc(k) === E.type)
                  ) {
                    n(g, E.sibling),
                      (h = o(E, c.props)),
                      (h.ref = Jr(g, E, c)),
                      (h.return = g),
                      (g = h);
                    break e;
                  }
                  n(g, E);
                  break;
                } else t(g, E);
                E = E.sibling;
              }
              c.type === fr
                ? ((h = Wn(c.props.children, g.mode, x, c.key)),
                  (h.return = g),
                  (g = h))
                : ((x = Ni(c.type, c.key, c.props, null, g.mode, x)),
                  (x.ref = Jr(g, h, c)),
                  (x.return = g),
                  (g = x));
            }
            return l(g);
          case dr:
            e: {
              for (E = c.key; h !== null; ) {
                if (h.key === E)
                  if (
                    h.tag === 4 &&
                    h.stateNode.containerInfo === c.containerInfo &&
                    h.stateNode.implementation === c.implementation
                  ) {
                    n(g, h.sibling),
                      (h = o(h, c.children || [])),
                      (h.return = g),
                      (g = h);
                    break e;
                  } else {
                    n(g, h);
                    break;
                  }
                else t(g, h);
                h = h.sibling;
              }
              (h = bs(c, g.mode, x)), (h.return = g), (g = h);
            }
            return l(g);
          case cn:
            return (E = c._init), P(g, h, E(c._payload), x);
        }
        if (io(c)) return v(g, h, c, x);
        if (Qr(c)) return S(g, h, c, x);
        di(g, c);
      }
      return (typeof c == "string" && c !== "") || typeof c == "number"
        ? ((c = "" + c),
          h !== null && h.tag === 6
            ? (n(g, h.sibling), (h = o(h, c)), (h.return = g), (g = h))
            : (n(g, h), (h = _s(c, g.mode, x)), (h.return = g), (g = h)),
          l(g))
        : n(g, h);
    }
    return P;
  }
  var Ar = fp(!0),
    pp = fp(!1),
    el = _n(null),
    tl = null,
    wr = null,
    du = null;
  function fu() {
    du = wr = tl = null;
  }
  function pu(e) {
    var t = el.current;
    ye(el), (e._currentValue = t);
  }
  function ha(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
          : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
      )
        break;
      e = e.return;
    }
  }
  function $r(e, t) {
    (tl = e),
      (du = wr = null),
      (e = e.dependencies),
      e !== null &&
        e.firstContext !== null &&
        (e.lanes & t && (it = !0), (e.firstContext = null));
  }
  function Mt(e) {
    var t = e._currentValue;
    if (du !== e)
      if (((e = { context: e, memoizedValue: t, next: null }), wr === null)) {
        if (tl === null) throw Error(b(308));
        (wr = e), (tl.dependencies = { lanes: 0, firstContext: e });
      } else wr = wr.next = e;
    return t;
  }
  var Ln = null;
  function mu(e) {
    Ln === null ? (Ln = [e]) : Ln.push(e);
  }
  function mp(e, t, n, r) {
    var o = t.interleaved;
    return (
      o === null ? ((n.next = n), mu(t)) : ((n.next = o.next), (o.next = n)),
      (t.interleaved = n),
      on(e, r)
    );
  }
  function on(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      (e.childLanes |= t),
        (n = e.alternate),
        n !== null && (n.childLanes |= t),
        (n = e),
        (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
  }
  var dn = !1;
  function hu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, interleaved: null, lanes: 0 },
      effects: null,
    };
  }
  function hp(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          effects: e.effects,
        });
  }
  function tn(e, t) {
    return {
      eventTime: e,
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null,
    };
  }
  function wn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), q & 2)) {
      var o = r.pending;
      return (
        o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)),
        (r.pending = t),
        on(e, n)
      );
    }
    return (
      (o = r.interleaved),
      o === null ? ((t.next = t), mu(r)) : ((t.next = o.next), (o.next = t)),
      (r.interleaved = t),
      on(e, n)
    );
  }
  function Ri(e, t, n) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), eu(e, n);
    }
  }
  function Gc(e, t) {
    var n = e.updateQueue,
      r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
      var o = null,
        i = null;
      if (((n = n.firstBaseUpdate), n !== null)) {
        do {
          var l = {
            eventTime: n.eventTime,
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: n.callback,
            next: null,
          };
          i === null ? (o = i = l) : (i = i.next = l), (n = n.next);
        } while (n !== null);
        i === null ? (o = i = t) : (i = i.next = t);
      } else o = i = t;
      (n = {
        baseState: r.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: i,
        shared: r.shared,
        effects: r.effects,
      }),
        (e.updateQueue = n);
      return;
    }
    (e = n.lastBaseUpdate),
      e === null ? (n.firstBaseUpdate = t) : (e.next = t),
      (n.lastBaseUpdate = t);
  }
  function nl(e, t, n, r) {
    var o = e.updateQueue;
    dn = !1;
    var i = o.firstBaseUpdate,
      l = o.lastBaseUpdate,
      s = o.shared.pending;
    if (s !== null) {
      o.shared.pending = null;
      var a = s,
        u = a.next;
      (a.next = null), l === null ? (i = u) : (l.next = u), (l = a);
      var f = e.alternate;
      f !== null &&
        ((f = f.updateQueue),
        (s = f.lastBaseUpdate),
        s !== l &&
          (s === null ? (f.firstBaseUpdate = u) : (s.next = u),
          (f.lastBaseUpdate = a)));
    }
    if (i !== null) {
      var p = o.baseState;
      (l = 0), (f = u = a = null), (s = i);
      do {
        var m = s.lane,
          w = s.eventTime;
        if ((r & m) === m) {
          f !== null &&
            (f = f.next =
              {
                eventTime: w,
                lane: 0,
                tag: s.tag,
                payload: s.payload,
                callback: s.callback,
                next: null,
              });
          e: {
            var v = e,
              S = s;
            switch (((m = t), (w = n), S.tag)) {
              case 1:
                if (((v = S.payload), typeof v == "function")) {
                  p = v.call(w, p, m);
                  break e;
                }
                p = v;
                break e;
              case 3:
                v.flags = (v.flags & -65537) | 128;
              case 0:
                if (
                  ((v = S.payload),
                  (m = typeof v == "function" ? v.call(w, p, m) : v),
                  m == null)
                )
                  break e;
                p = Ce({}, p, m);
                break e;
              case 2:
                dn = !0;
            }
          }
          s.callback !== null &&
            s.lane !== 0 &&
            ((e.flags |= 64),
            (m = o.effects),
            m === null ? (o.effects = [s]) : m.push(s));
        } else
          (w = {
            eventTime: w,
            lane: m,
            tag: s.tag,
            payload: s.payload,
            callback: s.callback,
            next: null,
          }),
            f === null ? ((u = f = w), (a = p)) : (f = f.next = w),
            (l |= m);
        if (((s = s.next), s === null)) {
          if (((s = o.shared.pending), s === null)) break;
          (m = s),
            (s = m.next),
            (m.next = null),
            (o.lastBaseUpdate = m),
            (o.shared.pending = null);
        }
      } while (!0);
      if (
        (f === null && (a = p),
        (o.baseState = a),
        (o.firstBaseUpdate = u),
        (o.lastBaseUpdate = f),
        (t = o.shared.interleaved),
        t !== null)
      ) {
        o = t;
        do (l |= o.lane), (o = o.next);
        while (o !== t);
      } else i === null && (o.shared.lanes = 0);
      (Gn |= l), (e.lanes = l), (e.memoizedState = p);
    }
  }
  function Kc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
      for (t = 0; t < e.length; t++) {
        var r = e[t],
          o = r.callback;
        if (o !== null) {
          if (((r.callback = null), (r = n), typeof o != "function"))
            throw Error(b(191, o));
          o.call(r);
        }
      }
  }
  var Ko = {},
    Qt = _n(Ko),
    Io = _n(Ko),
    Oo = _n(Ko);
  function jn(e) {
    if (e === Ko) throw Error(b(174));
    return e;
  }
  function gu(e, t) {
    switch ((pe(Oo, t), pe(Io, e), pe(Qt, Ko), (e = t.nodeType), e)) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Ys(null, "");
        break;
      default:
        (e = e === 8 ? t.parentNode : t),
          (t = e.namespaceURI || null),
          (e = e.tagName),
          (t = Ys(t, e));
    }
    ye(Qt), pe(Qt, t);
  }
  function Nr() {
    ye(Qt), ye(Io), ye(Oo);
  }
  function gp(e) {
    jn(Oo.current);
    var t = jn(Qt.current),
      n = Ys(t, e.type);
    t !== n && (pe(Io, e), pe(Qt, n));
  }
  function yu(e) {
    Io.current === e && (ye(Qt), ye(Io));
  }
  var we = _n(0);
  function rl(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (
          n !== null &&
          ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  var Es = [];
  function vu() {
    for (var e = 0; e < Es.length; e++)
      Es[e]._workInProgressVersionPrimary = null;
    Es.length = 0;
  }
  var _i = sn.ReactCurrentDispatcher,
    Ts = sn.ReactCurrentBatchConfig,
    Hn = 0,
    xe = null,
    Ie = null,
    Ne = null,
    ol = !1,
    go = !1,
    Ao = 0,
    c0 = 0;
  function He() {
    throw Error(b(321));
  }
  function Su(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!jt(e[n], t[n])) return !1;
    return !0;
  }
  function wu(e, t, n, r, o, i) {
    if (
      ((Hn = i),
      (xe = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (_i.current = e === null || e.memoizedState === null ? m0 : h0),
      (e = n(r, o)),
      go)
    ) {
      i = 0;
      do {
        if (((go = !1), (Ao = 0), 25 <= i)) throw Error(b(301));
        (i += 1),
          (Ne = Ie = null),
          (t.updateQueue = null),
          (_i.current = g0),
          (e = n(r, o));
      } while (go);
    }
    if (
      ((_i.current = il),
      (t = Ie !== null && Ie.next !== null),
      (Hn = 0),
      (Ne = Ie = xe = null),
      (ol = !1),
      t)
    )
      throw Error(b(300));
    return e;
  }
  function xu() {
    var e = Ao !== 0;
    return (Ao = 0), e;
  }
  function Wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return Ne === null ? (xe.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne;
  }
  function Rt() {
    if (Ie === null) {
      var e = xe.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ie.next;
    var t = Ne === null ? xe.memoizedState : Ne.next;
    if (t !== null) (Ne = t), (Ie = e);
    else {
      if (e === null) throw Error(b(310));
      (Ie = e),
        (e = {
          memoizedState: Ie.memoizedState,
          baseState: Ie.baseState,
          baseQueue: Ie.baseQueue,
          queue: Ie.queue,
          next: null,
        }),
        Ne === null ? (xe.memoizedState = Ne = e) : (Ne = Ne.next = e);
    }
    return Ne;
  }
  function No(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Ps(e) {
    var t = Rt(),
      n = t.queue;
    if (n === null) throw Error(b(311));
    n.lastRenderedReducer = e;
    var r = Ie,
      o = r.baseQueue,
      i = n.pending;
    if (i !== null) {
      if (o !== null) {
        var l = o.next;
        (o.next = i.next), (i.next = l);
      }
      (r.baseQueue = o = i), (n.pending = null);
    }
    if (o !== null) {
      (i = o.next), (r = r.baseState);
      var s = (l = null),
        a = null,
        u = i;
      do {
        var f = u.lane;
        if ((Hn & f) === f)
          a !== null &&
            (a = a.next =
              {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null,
              }),
            (r = u.hasEagerState ? u.eagerState : e(r, u.action));
        else {
          var p = {
            lane: f,
            action: u.action,
            hasEagerState: u.hasEagerState,
            eagerState: u.eagerState,
            next: null,
          };
          a === null ? ((s = a = p), (l = r)) : (a = a.next = p),
            (xe.lanes |= f),
            (Gn |= f);
        }
        u = u.next;
      } while (u !== null && u !== i);
      a === null ? (l = r) : (a.next = s),
        jt(r, t.memoizedState) || (it = !0),
        (t.memoizedState = r),
        (t.baseState = l),
        (t.baseQueue = a),
        (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
      o = e;
      do (i = o.lane), (xe.lanes |= i), (Gn |= i), (o = o.next);
      while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function $s(e) {
    var t = Rt(),
      n = t.queue;
    if (n === null) throw Error(b(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
      o = n.pending,
      i = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var l = (o = o.next);
      do (i = e(i, l.action)), (l = l.next);
      while (l !== o);
      jt(i, t.memoizedState) || (it = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (n.lastRenderedState = i);
    }
    return [i, r];
  }
  function yp() {}
  function vp(e, t) {
    var n = xe,
      r = Rt(),
      o = t(),
      i = !jt(r.memoizedState, o);
    if (
      (i && ((r.memoizedState = o), (it = !0)),
      (r = r.queue),
      Cu(xp.bind(null, n, r, e), [e]),
      r.getSnapshot !== t || i || (Ne !== null && Ne.memoizedState.tag & 1))
    ) {
      if (
        ((n.flags |= 2048),
        zo(9, wp.bind(null, n, r, o, t), void 0, null),
        ze === null)
      )
        throw Error(b(349));
      Hn & 30 || Sp(n, t, o);
    }
    return o;
  }
  function Sp(e, t, n) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: n }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (xe.updateQueue = t),
          (t.stores = [e]))
        : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
  }
  function wp(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Cp(t) && kp(e);
  }
  function xp(e, t, n) {
    return n(function () {
      Cp(t) && kp(e);
    });
  }
  function Cp(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !jt(e, n);
    } catch {
      return !0;
    }
  }
  function kp(e) {
    var t = on(e, 1);
    t !== null && zt(t, e, 1, -1);
  }
  function Qc(e) {
    var t = Wt();
    return (
      typeof e == "function" && (e = e()),
      (t.memoizedState = t.baseState = e),
      (e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: No,
        lastRenderedState: e,
      }),
      (t.queue = e),
      (e = e.dispatch = p0.bind(null, xe, e)),
      [t.memoizedState, e]
    );
  }
  function zo(e, t, n, r) {
    return (
      (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
      (t = xe.updateQueue),
      t === null
        ? ((t = { lastEffect: null, stores: null }),
          (xe.updateQueue = t),
          (t.lastEffect = e.next = e))
        : ((n = t.lastEffect),
          n === null
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
      e
    );
  }
  function Ep() {
    return Rt().memoizedState;
  }
  function bi(e, t, n, r) {
    var o = Wt();
    (xe.flags |= e),
      (o.memoizedState = zo(1 | t, n, void 0, r === void 0 ? null : r));
  }
  function El(e, t, n, r) {
    var o = Rt();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (Ie !== null) {
      var l = Ie.memoizedState;
      if (((i = l.destroy), r !== null && Su(r, l.deps))) {
        o.memoizedState = zo(t, n, i, r);
        return;
      }
    }
    (xe.flags |= e), (o.memoizedState = zo(1 | t, n, i, r));
  }
  function Yc(e, t) {
    return bi(8390656, 8, e, t);
  }
  function Cu(e, t) {
    return El(2048, 8, e, t);
  }
  function Tp(e, t) {
    return El(4, 2, e, t);
  }
  function Pp(e, t) {
    return El(4, 4, e, t);
  }
  function $p(e, t) {
    if (typeof t == "function")
      return (
        (e = e()),
        t(e),
        function () {
          t(null);
        }
      );
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function Mp(e, t, n) {
    return (
      (n = n != null ? n.concat([e]) : null), El(4, 4, $p.bind(null, t, e), n)
    );
  }
  function ku() {}
  function Rp(e, t) {
    var n = Rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Su(t, r[1])
      ? r[0]
      : ((n.memoizedState = [e, t]), e);
  }
  function _p(e, t) {
    var n = Rt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Su(t, r[1])
      ? r[0]
      : ((e = e()), (n.memoizedState = [e, t]), e);
  }
  function bp(e, t, n) {
    return Hn & 21
      ? (jt(n, t) ||
          ((n = zf()), (xe.lanes |= n), (Gn |= n), (e.baseState = !0)),
        t)
      : (e.baseState && ((e.baseState = !1), (it = !0)), (e.memoizedState = n));
  }
  function d0(e, t) {
    var n = ie;
    (ie = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Ts.transition;
    Ts.transition = {};
    try {
      e(!1), t();
    } finally {
      (ie = n), (Ts.transition = r);
    }
  }
  function Ip() {
    return Rt().memoizedState;
  }
  function f0(e, t, n) {
    var r = Cn(e);
    if (
      ((n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Op(e))
    )
      Ap(t, n);
    else if (((n = mp(e, t, n, r)), n !== null)) {
      var o = Ze();
      zt(n, e, r, o), Np(n, t, r);
    }
  }
  function p0(e, t, n) {
    var r = Cn(e),
      o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      };
    if (Op(e)) Ap(t, o);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var l = t.lastRenderedState,
            s = i(l, n);
          if (((o.hasEagerState = !0), (o.eagerState = s), jt(s, l))) {
            var a = t.interleaved;
            a === null
              ? ((o.next = o), mu(t))
              : ((o.next = a.next), (a.next = o)),
              (t.interleaved = o);
            return;
          }
        } catch {
        } finally {
        }
      (n = mp(e, t, o, r)),
        n !== null && ((o = Ze()), zt(n, e, r, o), Np(n, t, r));
    }
  }
  function Op(e) {
    var t = e.alternate;
    return e === xe || (t !== null && t === xe);
  }
  function Ap(e, t) {
    go = ol = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
      (e.pending = t);
  }
  function Np(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      (r &= e.pendingLanes), (n |= r), (t.lanes = n), eu(e, n);
    }
  }
  var il = {
      readContext: Mt,
      useCallback: He,
      useContext: He,
      useEffect: He,
      useImperativeHandle: He,
      useInsertionEffect: He,
      useLayoutEffect: He,
      useMemo: He,
      useReducer: He,
      useRef: He,
      useState: He,
      useDebugValue: He,
      useDeferredValue: He,
      useTransition: He,
      useMutableSource: He,
      useSyncExternalStore: He,
      useId: He,
      unstable_isNewReconciler: !1,
    },
    m0 = {
      readContext: Mt,
      useCallback: function (e, t) {
        return (Wt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Mt,
      useEffect: Yc,
      useImperativeHandle: function (e, t, n) {
        return (
          (n = n != null ? n.concat([e]) : null),
          bi(4194308, 4, $p.bind(null, t, e), n)
        );
      },
      useLayoutEffect: function (e, t) {
        return bi(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        return bi(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var n = Wt();
        return (
          (t = t === void 0 ? null : t),
          (e = e()),
          (n.memoizedState = [e, t]),
          e
        );
      },
      useReducer: function (e, t, n) {
        var r = Wt();
        return (
          (t = n !== void 0 ? n(t) : t),
          (r.memoizedState = r.baseState = t),
          (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t,
          }),
          (r.queue = e),
          (e = e.dispatch = f0.bind(null, xe, e)),
          [r.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = Wt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: Qc,
      useDebugValue: ku,
      useDeferredValue: function (e) {
        return (Wt().memoizedState = e);
      },
      useTransition: function () {
        var e = Qc(!1),
          t = e[0];
        return (e = d0.bind(null, e[1])), (Wt().memoizedState = e), [t, e];
      },
      useMutableSource: function () {},
      useSyncExternalStore: function (e, t, n) {
        var r = xe,
          o = Wt();
        if (Se) {
          if (n === void 0) throw Error(b(407));
          n = n();
        } else {
          if (((n = t()), ze === null)) throw Error(b(349));
          Hn & 30 || Sp(r, t, n);
        }
        o.memoizedState = n;
        var i = { value: n, getSnapshot: t };
        return (
          (o.queue = i),
          Yc(xp.bind(null, r, i, e), [e]),
          (r.flags |= 2048),
          zo(9, wp.bind(null, r, i, n, t), void 0, null),
          n
        );
      },
      useId: function () {
        var e = Wt(),
          t = ze.identifierPrefix;
        if (Se) {
          var n = en,
            r = Jt;
          (n = (r & ~(1 << (32 - Nt(r) - 1))).toString(32) + n),
            (t = ":" + t + "R" + n),
            (n = Ao++),
            0 < n && (t += "H" + n.toString(32)),
            (t += ":");
        } else (n = c0++), (t = ":" + t + "r" + n.toString(32) + ":");
        return (e.memoizedState = t);
      },
      unstable_isNewReconciler: !1,
    },
    h0 = {
      readContext: Mt,
      useCallback: Rp,
      useContext: Mt,
      useEffect: Cu,
      useImperativeHandle: Mp,
      useInsertionEffect: Tp,
      useLayoutEffect: Pp,
      useMemo: _p,
      useReducer: Ps,
      useRef: Ep,
      useState: function () {
        return Ps(No);
      },
      useDebugValue: ku,
      useDeferredValue: function (e) {
        var t = Rt();
        return bp(t, Ie.memoizedState, e);
      },
      useTransition: function () {
        var e = Ps(No)[0],
          t = Rt().memoizedState;
        return [e, t];
      },
      useMutableSource: yp,
      useSyncExternalStore: vp,
      useId: Ip,
      unstable_isNewReconciler: !1,
    },
    g0 = {
      readContext: Mt,
      useCallback: Rp,
      useContext: Mt,
      useEffect: Cu,
      useImperativeHandle: Mp,
      useInsertionEffect: Tp,
      useLayoutEffect: Pp,
      useMemo: _p,
      useReducer: $s,
      useRef: Ep,
      useState: function () {
        return $s(No);
      },
      useDebugValue: ku,
      useDeferredValue: function (e) {
        var t = Rt();
        return Ie === null ? (t.memoizedState = e) : bp(t, Ie.memoizedState, e);
      },
      useTransition: function () {
        var e = $s(No)[0],
          t = Rt().memoizedState;
        return [e, t];
      },
      useMutableSource: yp,
      useSyncExternalStore: vp,
      useId: Ip,
      unstable_isNewReconciler: !1,
    };
  function It(e, t) {
    if (e && e.defaultProps) {
      (t = Ce({}, t)), (e = e.defaultProps);
      for (var n in e) t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  function ga(e, t, n, r) {
    (t = e.memoizedState),
      (n = n(r, t)),
      (n = n == null ? t : Ce({}, t, n)),
      (e.memoizedState = n),
      e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Tl = {
    isMounted: function (e) {
      return (e = e._reactInternals) ? qn(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ze(),
        o = Cn(e),
        i = tn(r, o);
      (i.payload = t),
        n != null && (i.callback = n),
        (t = wn(e, i, o)),
        t !== null && (zt(t, e, o, r), Ri(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
      e = e._reactInternals;
      var r = Ze(),
        o = Cn(e),
        i = tn(r, o);
      (i.tag = 1),
        (i.payload = t),
        n != null && (i.callback = n),
        (t = wn(e, i, o)),
        t !== null && (zt(t, e, o, r), Ri(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var n = Ze(),
        r = Cn(e),
        o = tn(n, r);
      (o.tag = 2),
        t != null && (o.callback = t),
        (t = wn(e, o, r)),
        t !== null && (zt(t, e, r, n), Ri(t, e, r));
    },
  };
  function Xc(e, t, n, r, o, i, l) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(r, i, l)
        : t.prototype && t.prototype.isPureReactComponent
        ? !Mo(n, r) || !Mo(o, i)
        : !0
    );
  }
  function zp(e, t, n) {
    var r = !1,
      o = Pn,
      i = t.contextType;
    return (
      typeof i == "object" && i !== null
        ? (i = Mt(i))
        : ((o = st(t) ? Un : Ye.current),
          (r = t.contextTypes),
          (i = (r = r != null) ? Ir(e, o) : Pn)),
      (t = new t(n, i)),
      (e.memoizedState =
        t.state !== null && t.state !== void 0 ? t.state : null),
      (t.updater = Tl),
      (e.stateNode = t),
      (t._reactInternals = e),
      r &&
        ((e = e.stateNode),
        (e.__reactInternalMemoizedUnmaskedChildContext = o),
        (e.__reactInternalMemoizedMaskedChildContext = i)),
      t
    );
  }
  function qc(e, t, n, r) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(n, r),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(n, r),
      t.state !== e && Tl.enqueueReplaceState(t, t.state, null);
  }
  function ya(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), hu(e);
    var i = t.contextType;
    typeof i == "object" && i !== null
      ? (o.context = Mt(i))
      : ((i = st(t) ? Un : Ye.current), (o.context = Ir(e, i))),
      (o.state = e.memoizedState),
      (i = t.getDerivedStateFromProps),
      typeof i == "function" && (ga(e, t, i, n), (o.state = e.memoizedState)),
      typeof t.getDerivedStateFromProps == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function" ||
        (typeof o.UNSAFE_componentWillMount != "function" &&
          typeof o.componentWillMount != "function") ||
        ((t = o.state),
        typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" &&
          o.UNSAFE_componentWillMount(),
        t !== o.state && Tl.enqueueReplaceState(o, o.state, null),
        nl(e, n, o, r),
        (o.state = e.memoizedState)),
      typeof o.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function zr(e, t) {
    try {
      var n = "",
        r = t;
      do (n += Vh(r)), (r = r.return);
      while (r);
      var o = n;
    } catch (i) {
      o =
        `
Error generating stack: ` +
        i.message +
        `
` +
        i.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
  }
  function Ms(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function va(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  var y0 = typeof WeakMap == "function" ? WeakMap : Map;
  function Lp(e, t, n) {
    (n = tn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
      (n.callback = function () {
        sl || ((sl = !0), (Ma = r)), va(e, t);
      }),
      n
    );
  }
  function jp(e, t, n) {
    (n = tn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var o = t.value;
      (n.payload = function () {
        return r(o);
      }),
        (n.callback = function () {
          va(e, t);
        });
    }
    var i = e.stateNode;
    return (
      i !== null &&
        typeof i.componentDidCatch == "function" &&
        (n.callback = function () {
          va(e, t),
            typeof r != "function" &&
              (xn === null ? (xn = new Set([this])) : xn.add(this));
          var l = t.stack;
          this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : "",
          });
        }),
      n
    );
  }
  function Zc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new y0();
      var o = new Set();
      r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = b0.bind(null, e, t, n)), t.then(e, e));
  }
  function Jc(e) {
    do {
      var t;
      if (
        ((t = e.tag === 13) &&
          ((t = e.memoizedState),
          (t = t !== null ? t.dehydrated !== null : !0)),
        t)
      )
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function ed(e, t, n, r, o) {
    return e.mode & 1
      ? ((e.flags |= 65536), (e.lanes = o), e)
      : (e === t
          ? (e.flags |= 65536)
          : ((e.flags |= 128),
            (n.flags |= 131072),
            (n.flags &= -52805),
            n.tag === 1 &&
              (n.alternate === null
                ? (n.tag = 17)
                : ((t = tn(-1, 1)), (t.tag = 2), wn(n, t, 1))),
            (n.lanes |= 1)),
        e);
  }
  var v0 = sn.ReactCurrentOwner,
    it = !1;
  function qe(e, t, n, r) {
    t.child = e === null ? pp(t, null, n, r) : Ar(t, e.child, n, r);
  }
  function td(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return (
      $r(t, o),
      (r = wu(e, t, n, r, i, o)),
      (n = xu()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          ln(e, t, o))
        : (Se && n && au(t), (t.flags |= 1), qe(e, t, r, o), t.child)
    );
  }
  function nd(e, t, n, r, o) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" &&
        !bu(i) &&
        i.defaultProps === void 0 &&
        n.compare === null &&
        n.defaultProps === void 0
        ? ((t.tag = 15), (t.type = i), Bp(e, t, i, r, o))
        : ((e = Ni(n.type, null, r, t, t.mode, o)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !(e.lanes & o))) {
      var l = i.memoizedProps;
      if (
        ((n = n.compare), (n = n !== null ? n : Mo), n(l, r) && e.ref === t.ref)
      )
        return ln(e, t, o);
    }
    return (
      (t.flags |= 1),
      (e = kn(i, r)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Bp(e, t, n, r, o) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (Mo(i, r) && e.ref === t.ref)
        if (((it = !1), (t.pendingProps = r = i), (e.lanes & o) !== 0))
          e.flags & 131072 && (it = !0);
        else return (t.lanes = e.lanes), ln(e, t, o);
    }
    return Sa(e, t, n, r, o);
  }
  function Fp(e, t, n) {
    var r = t.pendingProps,
      o = r.children,
      i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          pe(Cr, pt),
          (pt |= n);
      else {
        if (!(n & 1073741824))
          return (
            (e = i !== null ? i.baseLanes | n : n),
            (t.lanes = t.childLanes = 1073741824),
            (t.memoizedState = {
              baseLanes: e,
              cachePool: null,
              transitions: null,
            }),
            (t.updateQueue = null),
            pe(Cr, pt),
            (pt |= e),
            null
          );
        (t.memoizedState = {
          baseLanes: 0,
          cachePool: null,
          transitions: null,
        }),
          (r = i !== null ? i.baseLanes : n),
          pe(Cr, pt),
          (pt |= r);
      }
    else
      i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
        pe(Cr, pt),
        (pt |= r);
    return qe(e, t, o, n), t.child;
  }
  function Dp(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
      ((t.flags |= 512), (t.flags |= 2097152));
  }
  function Sa(e, t, n, r, o) {
    var i = st(n) ? Un : Ye.current;
    return (
      (i = Ir(t, i)),
      $r(t, o),
      (n = wu(e, t, n, r, i, o)),
      (r = xu()),
      e !== null && !it
        ? ((t.updateQueue = e.updateQueue),
          (t.flags &= -2053),
          (e.lanes &= ~o),
          ln(e, t, o))
        : (Se && r && au(t), (t.flags |= 1), qe(e, t, n, o), t.child)
    );
  }
  function rd(e, t, n, r, o) {
    if (st(n)) {
      var i = !0;
      qi(t);
    } else i = !1;
    if (($r(t, o), t.stateNode === null))
      Ii(e, t), zp(t, n, r), ya(t, n, r, o), (r = !0);
    else if (e === null) {
      var l = t.stateNode,
        s = t.memoizedProps;
      l.props = s;
      var a = l.context,
        u = n.contextType;
      typeof u == "object" && u !== null
        ? (u = Mt(u))
        : ((u = st(n) ? Un : Ye.current), (u = Ir(t, u)));
      var f = n.getDerivedStateFromProps,
        p =
          typeof f == "function" ||
          typeof l.getSnapshotBeforeUpdate == "function";
      p ||
        (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
          typeof l.componentWillReceiveProps != "function") ||
        ((s !== r || a !== u) && qc(t, l, r, u)),
        (dn = !1);
      var m = t.memoizedState;
      (l.state = m),
        nl(t, r, l, o),
        (a = t.memoizedState),
        s !== r || m !== a || lt.current || dn
          ? (typeof f == "function" && (ga(t, n, f, r), (a = t.memoizedState)),
            (s = dn || Xc(t, n, s, r, m, a, u))
              ? (p ||
                  (typeof l.UNSAFE_componentWillMount != "function" &&
                    typeof l.componentWillMount != "function") ||
                  (typeof l.componentWillMount == "function" &&
                    l.componentWillMount(),
                  typeof l.UNSAFE_componentWillMount == "function" &&
                    l.UNSAFE_componentWillMount()),
                typeof l.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof l.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = r),
                (t.memoizedState = a)),
            (l.props = r),
            (l.state = a),
            (l.context = u),
            (r = s))
          : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
            (r = !1));
    } else {
      (l = t.stateNode),
        hp(e, t),
        (s = t.memoizedProps),
        (u = t.type === t.elementType ? s : It(t.type, s)),
        (l.props = u),
        (p = t.pendingProps),
        (m = l.context),
        (a = n.contextType),
        typeof a == "object" && a !== null
          ? (a = Mt(a))
          : ((a = st(n) ? Un : Ye.current), (a = Ir(t, a)));
      var w = n.getDerivedStateFromProps;
      (f =
        typeof w == "function" ||
        typeof l.getSnapshotBeforeUpdate == "function") ||
        (typeof l.UNSAFE_componentWillReceiveProps != "function" &&
          typeof l.componentWillReceiveProps != "function") ||
        ((s !== p || m !== a) && qc(t, l, r, a)),
        (dn = !1),
        (m = t.memoizedState),
        (l.state = m),
        nl(t, r, l, o);
      var v = t.memoizedState;
      s !== p || m !== v || lt.current || dn
        ? (typeof w == "function" && (ga(t, n, w, r), (v = t.memoizedState)),
          (u = dn || Xc(t, n, u, r, m, v, a) || !1)
            ? (f ||
                (typeof l.UNSAFE_componentWillUpdate != "function" &&
                  typeof l.componentWillUpdate != "function") ||
                (typeof l.componentWillUpdate == "function" &&
                  l.componentWillUpdate(r, v, a),
                typeof l.UNSAFE_componentWillUpdate == "function" &&
                  l.UNSAFE_componentWillUpdate(r, v, a)),
              typeof l.componentDidUpdate == "function" && (t.flags |= 4),
              typeof l.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof l.componentDidUpdate != "function" ||
                (s === e.memoizedProps && m === e.memoizedState) ||
                (t.flags |= 4),
              typeof l.getSnapshotBeforeUpdate != "function" ||
                (s === e.memoizedProps && m === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = r),
              (t.memoizedState = v)),
          (l.props = r),
          (l.state = v),
          (l.context = a),
          (r = u))
        : (typeof l.componentDidUpdate != "function" ||
            (s === e.memoizedProps && m === e.memoizedState) ||
            (t.flags |= 4),
          typeof l.getSnapshotBeforeUpdate != "function" ||
            (s === e.memoizedProps && m === e.memoizedState) ||
            (t.flags |= 1024),
          (r = !1));
    }
    return wa(e, t, n, r, i, o);
  }
  function wa(e, t, n, r, o, i) {
    Dp(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l) return o && Wc(t, n, !1), ln(e, t, i);
    (r = t.stateNode), (v0.current = t);
    var s =
      l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
      (t.flags |= 1),
      e !== null && l
        ? ((t.child = Ar(t, e.child, null, i)), (t.child = Ar(t, null, s, i)))
        : qe(e, t, s, i),
      (t.memoizedState = r.state),
      o && Wc(t, n, !0),
      t.child
    );
  }
  function Wp(e) {
    var t = e.stateNode;
    t.pendingContext
      ? Dc(e, t.pendingContext, t.pendingContext !== t.context)
      : t.context && Dc(e, t.context, !1),
      gu(e, t.containerInfo);
  }
  function od(e, t, n, r, o) {
    return Or(), cu(o), (t.flags |= 256), qe(e, t, n, r), t.child;
  }
  var xa = { dehydrated: null, treeContext: null, retryLane: 0 };
  function Ca(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Up(e, t, n) {
    var r = t.pendingProps,
      o = we.current,
      i = !1,
      l = (t.flags & 128) !== 0,
      s;
    if (
      ((s = l) ||
        (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
      s
        ? ((i = !0), (t.flags &= -129))
        : (e === null || e.memoizedState !== null) && (o |= 1),
      pe(we, o & 1),
      e === null)
    )
      return (
        ma(t),
        (e = t.memoizedState),
        e !== null && ((e = e.dehydrated), e !== null)
          ? (t.mode & 1
              ? e.data === "$!"
                ? (t.lanes = 8)
                : (t.lanes = 1073741824)
              : (t.lanes = 1),
            null)
          : ((l = r.children),
            (e = r.fallback),
            i
              ? ((r = t.mode),
                (i = t.child),
                (l = { mode: "hidden", children: l }),
                !(r & 1) && i !== null
                  ? ((i.childLanes = 0), (i.pendingProps = l))
                  : (i = Ml(l, r, 0, null)),
                (e = Wn(e, r, n, null)),
                (i.return = t),
                (e.return = t),
                (i.sibling = e),
                (t.child = i),
                (t.child.memoizedState = Ca(n)),
                (t.memoizedState = xa),
                e)
              : Eu(t, l))
      );
    if (((o = e.memoizedState), o !== null && ((s = o.dehydrated), s !== null)))
      return S0(e, t, l, r, s, o, n);
    if (i) {
      (i = r.fallback), (l = t.mode), (o = e.child), (s = o.sibling);
      var a = { mode: "hidden", children: r.children };
      return (
        !(l & 1) && t.child !== o
          ? ((r = t.child),
            (r.childLanes = 0),
            (r.pendingProps = a),
            (t.deletions = null))
          : ((r = kn(o, a)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
        s !== null ? (i = kn(s, i)) : ((i = Wn(i, l, n, null)), (i.flags |= 2)),
        (i.return = t),
        (r.return = t),
        (r.sibling = i),
        (t.child = r),
        (r = i),
        (i = t.child),
        (l = e.child.memoizedState),
        (l =
          l === null
            ? Ca(n)
            : {
                baseLanes: l.baseLanes | n,
                cachePool: null,
                transitions: l.transitions,
              }),
        (i.memoizedState = l),
        (i.childLanes = e.childLanes & ~n),
        (t.memoizedState = xa),
        r
      );
    }
    return (
      (i = e.child),
      (e = i.sibling),
      (r = kn(i, { mode: "visible", children: r.children })),
      !(t.mode & 1) && (r.lanes = n),
      (r.return = t),
      (r.sibling = null),
      e !== null &&
        ((n = t.deletions),
        n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
      (t.child = r),
      (t.memoizedState = null),
      r
    );
  }
  function Eu(e, t) {
    return (
      (t = Ml({ mode: "visible", children: t }, e.mode, 0, null)),
      (t.return = e),
      (e.child = t)
    );
  }
  function fi(e, t, n, r) {
    return (
      r !== null && cu(r),
      Ar(t, e.child, null, n),
      (e = Eu(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function S0(e, t, n, r, o, i, l) {
    if (n)
      return t.flags & 256
        ? ((t.flags &= -257), (r = Ms(Error(b(422)))), fi(e, t, l, r))
        : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((i = r.fallback),
          (o = t.mode),
          (r = Ml({ mode: "visible", children: r.children }, o, 0, null)),
          (i = Wn(i, o, l, null)),
          (i.flags |= 2),
          (r.return = t),
          (i.return = t),
          (r.sibling = i),
          (t.child = r),
          t.mode & 1 && Ar(t, e.child, null, l),
          (t.child.memoizedState = Ca(l)),
          (t.memoizedState = xa),
          i);
    if (!(t.mode & 1)) return fi(e, t, l, null);
    if (o.data === "$!") {
      if (((r = o.nextSibling && o.nextSibling.dataset), r)) var s = r.dgst;
      return (
        (r = s), (i = Error(b(419))), (r = Ms(i, r, void 0)), fi(e, t, l, r)
      );
    }
    if (((s = (l & e.childLanes) !== 0), it || s)) {
      if (((r = ze), r !== null)) {
        switch (l & -l) {
          case 4:
            o = 2;
            break;
          case 16:
            o = 8;
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
            o = 32;
            break;
          case 536870912:
            o = 268435456;
            break;
          default:
            o = 0;
        }
        (o = o & (r.suspendedLanes | l) ? 0 : o),
          o !== 0 &&
            o !== i.retryLane &&
            ((i.retryLane = o), on(e, o), zt(r, e, o, -1));
      }
      return _u(), (r = Ms(Error(b(421)))), fi(e, t, l, r);
    }
    return o.data === "$?"
      ? ((t.flags |= 128),
        (t.child = e.child),
        (t = I0.bind(null, e)),
        (o._reactRetry = t),
        null)
      : ((e = i.treeContext),
        (ht = Sn(o.nextSibling)),
        (gt = t),
        (Se = !0),
        (At = null),
        e !== null &&
          ((kt[Et++] = Jt),
          (kt[Et++] = en),
          (kt[Et++] = Vn),
          (Jt = e.id),
          (en = e.overflow),
          (Vn = t)),
        (t = Eu(t, r.children)),
        (t.flags |= 4096),
        t);
  }
  function id(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), ha(e.return, t, n);
  }
  function Rs(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: r,
          tail: n,
          tailMode: o,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = r),
        (i.tail = n),
        (i.tailMode = o));
  }
  function Vp(e, t, n) {
    var r = t.pendingProps,
      o = r.revealOrder,
      i = r.tail;
    if ((qe(e, t, r.children, n), (r = we.current), r & 2))
      (r = (r & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && e.flags & 128)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && id(e, n, t);
          else if (e.tag === 19) id(e, n, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      r &= 1;
    }
    if ((pe(we, r), !(t.mode & 1))) t.memoizedState = null;
    else
      switch (o) {
        case "forwards":
          for (n = t.child, o = null; n !== null; )
            (e = n.alternate),
              e !== null && rl(e) === null && (o = n),
              (n = n.sibling);
          (n = o),
            n === null
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
            Rs(t, !1, o, n, i);
          break;
        case "backwards":
          for (n = null, o = t.child, t.child = null; o !== null; ) {
            if (((e = o.alternate), e !== null && rl(e) === null)) {
              t.child = o;
              break;
            }
            (e = o.sibling), (o.sibling = n), (n = o), (o = e);
          }
          Rs(t, !0, n, null, i);
          break;
        case "together":
          Rs(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Ii(e, t) {
    !(t.mode & 1) &&
      e !== null &&
      ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
  }
  function ln(e, t, n) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Gn |= t.lanes),
      !(n & t.childLanes))
    )
      return null;
    if (e !== null && t.child !== e.child) throw Error(b(153));
    if (t.child !== null) {
      for (
        e = t.child, n = kn(e, e.pendingProps), t.child = n, n.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (n = n.sibling = kn(e, e.pendingProps)),
          (n.return = t);
      n.sibling = null;
    }
    return t.child;
  }
  function w0(e, t, n) {
    switch (t.tag) {
      case 3:
        Wp(t), Or();
        break;
      case 5:
        gp(t);
        break;
      case 1:
        st(t.type) && qi(t);
        break;
      case 4:
        gu(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context,
          o = t.memoizedProps.value;
        pe(el, r._currentValue), (r._currentValue = o);
        break;
      case 13:
        if (((r = t.memoizedState), r !== null))
          return r.dehydrated !== null
            ? (pe(we, we.current & 1), (t.flags |= 128), null)
            : n & t.child.childLanes
            ? Up(e, t, n)
            : (pe(we, we.current & 1),
              (e = ln(e, t, n)),
              e !== null ? e.sibling : null);
        pe(we, we.current & 1);
        break;
      case 19:
        if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
          if (r) return Vp(e, t, n);
          t.flags |= 128;
        }
        if (
          ((o = t.memoizedState),
          o !== null &&
            ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
          pe(we, we.current),
          r)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Fp(e, t, n);
    }
    return ln(e, t, n);
  }
  var Hp, ka, Gp, Kp;
  Hp = function (e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        (n.child.return = n), (n = n.child);
        continue;
      }
      if (n === t) break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t) return;
        n = n.return;
      }
      (n.sibling.return = n.return), (n = n.sibling);
    }
  };
  ka = function () {};
  Gp = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
      (e = t.stateNode), jn(Qt.current);
      var i = null;
      switch (n) {
        case "input":
          (o = Hs(e, o)), (r = Hs(e, r)), (i = []);
          break;
        case "select":
          (o = Ce({}, o, { value: void 0 })),
            (r = Ce({}, r, { value: void 0 })),
            (i = []);
          break;
        case "textarea":
          (o = Qs(e, o)), (r = Qs(e, r)), (i = []);
          break;
        default:
          typeof o.onClick != "function" &&
            typeof r.onClick == "function" &&
            (e.onclick = Yi);
      }
      Xs(n, r);
      var l;
      n = null;
      for (u in o)
        if (!r.hasOwnProperty(u) && o.hasOwnProperty(u) && o[u] != null)
          if (u === "style") {
            var s = o[u];
            for (l in s) s.hasOwnProperty(l) && (n || (n = {}), (n[l] = ""));
          } else
            u !== "dangerouslySetInnerHTML" &&
              u !== "children" &&
              u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              u !== "autoFocus" &&
              (xo.hasOwnProperty(u)
                ? i || (i = [])
                : (i = i || []).push(u, null));
      for (u in r) {
        var a = r[u];
        if (
          ((s = o != null ? o[u] : void 0),
          r.hasOwnProperty(u) && a !== s && (a != null || s != null))
        )
          if (u === "style")
            if (s) {
              for (l in s)
                !s.hasOwnProperty(l) ||
                  (a && a.hasOwnProperty(l)) ||
                  (n || (n = {}), (n[l] = ""));
              for (l in a)
                a.hasOwnProperty(l) &&
                  s[l] !== a[l] &&
                  (n || (n = {}), (n[l] = a[l]));
            } else n || (i || (i = []), i.push(u, n)), (n = a);
          else
            u === "dangerouslySetInnerHTML"
              ? ((a = a ? a.__html : void 0),
                (s = s ? s.__html : void 0),
                a != null && s !== a && (i = i || []).push(u, a))
              : u === "children"
              ? (typeof a != "string" && typeof a != "number") ||
                (i = i || []).push(u, "" + a)
              : u !== "suppressContentEditableWarning" &&
                u !== "suppressHydrationWarning" &&
                (xo.hasOwnProperty(u)
                  ? (a != null && u === "onScroll" && ge("scroll", e),
                    i || s === a || (i = []))
                  : (i = i || []).push(u, a));
      }
      n && (i = i || []).push("style", n);
      var u = i;
      (t.updateQueue = u) && (t.flags |= 4);
    }
  };
  Kp = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function eo(e, t) {
    if (!Se)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), (t = t.sibling);
          n === null ? (e.tail = null) : (n.sibling = null);
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), (n = n.sibling);
          r === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (r.sibling = null);
      }
  }
  function Ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      n = 0,
      r = 0;
    if (t)
      for (var o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags & 14680064),
          (r |= o.flags & 14680064),
          (o.return = e),
          (o = o.sibling);
    else
      for (o = e.child; o !== null; )
        (n |= o.lanes | o.childLanes),
          (r |= o.subtreeFlags),
          (r |= o.flags),
          (o.return = e),
          (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
  }
  function x0(e, t, n) {
    var r = t.pendingProps;
    switch ((uu(t), t.tag)) {
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
        return Ge(t), null;
      case 1:
        return st(t.type) && Xi(), Ge(t), null;
      case 3:
        return (
          (r = t.stateNode),
          Nr(),
          ye(lt),
          ye(Ye),
          vu(),
          r.pendingContext &&
            ((r.context = r.pendingContext), (r.pendingContext = null)),
          (e === null || e.child === null) &&
            (ci(t)
              ? (t.flags |= 4)
              : e === null ||
                (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                ((t.flags |= 1024), At !== null && (ba(At), (At = null)))),
          ka(e, t),
          Ge(t),
          null
        );
      case 5:
        yu(t);
        var o = jn(Oo.current);
        if (((n = t.type), e !== null && t.stateNode != null))
          Gp(e, t, n, r, o),
            e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
        else {
          if (!r) {
            if (t.stateNode === null) throw Error(b(166));
            return Ge(t), null;
          }
          if (((e = jn(Qt.current)), ci(t))) {
            (r = t.stateNode), (n = t.type);
            var i = t.memoizedProps;
            switch (((r[Ht] = t), (r[bo] = i), (e = (t.mode & 1) !== 0), n)) {
              case "dialog":
                ge("cancel", r), ge("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ge("load", r);
                break;
              case "video":
              case "audio":
                for (o = 0; o < so.length; o++) ge(so[o], r);
                break;
              case "source":
                ge("error", r);
                break;
              case "img":
              case "image":
              case "link":
                ge("error", r), ge("load", r);
                break;
              case "details":
                ge("toggle", r);
                break;
              case "input":
                mc(r, i), ge("invalid", r);
                break;
              case "select":
                (r._wrapperState = { wasMultiple: !!i.multiple }),
                  ge("invalid", r);
                break;
              case "textarea":
                gc(r, i), ge("invalid", r);
            }
            Xs(n, i), (o = null);
            for (var l in i)
              if (i.hasOwnProperty(l)) {
                var s = i[l];
                l === "children"
                  ? typeof s == "string"
                    ? r.textContent !== s &&
                      (i.suppressHydrationWarning !== !0 &&
                        ui(r.textContent, s, e),
                      (o = ["children", s]))
                    : typeof s == "number" &&
                      r.textContent !== "" + s &&
                      (i.suppressHydrationWarning !== !0 &&
                        ui(r.textContent, s, e),
                      (o = ["children", "" + s]))
                  : xo.hasOwnProperty(l) &&
                    s != null &&
                    l === "onScroll" &&
                    ge("scroll", r);
              }
            switch (n) {
              case "input":
                ti(r), hc(r, i, !0);
                break;
              case "textarea":
                ti(r), yc(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof i.onClick == "function" && (r.onclick = Yi);
            }
            (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
          } else {
            (l = o.nodeType === 9 ? o : o.ownerDocument),
              e === "http://www.w3.org/1999/xhtml" && (e = xf(n)),
              e === "http://www.w3.org/1999/xhtml"
                ? n === "script"
                  ? ((e = l.createElement("div")),
                    (e.innerHTML = "<script></script>"),
                    (e = e.removeChild(e.firstChild)))
                  : typeof r.is == "string"
                  ? (e = l.createElement(n, { is: r.is }))
                  : ((e = l.createElement(n)),
                    n === "select" &&
                      ((l = e),
                      r.multiple
                        ? (l.multiple = !0)
                        : r.size && (l.size = r.size)))
                : (e = l.createElementNS(e, n)),
              (e[Ht] = t),
              (e[bo] = r),
              Hp(e, t, !1, !1),
              (t.stateNode = e);
            e: {
              switch (((l = qs(n, r)), n)) {
                case "dialog":
                  ge("cancel", e), ge("close", e), (o = r);
                  break;
                case "iframe":
                case "object":
                case "embed":
                  ge("load", e), (o = r);
                  break;
                case "video":
                case "audio":
                  for (o = 0; o < so.length; o++) ge(so[o], e);
                  o = r;
                  break;
                case "source":
                  ge("error", e), (o = r);
                  break;
                case "img":
                case "image":
                case "link":
                  ge("error", e), ge("load", e), (o = r);
                  break;
                case "details":
                  ge("toggle", e), (o = r);
                  break;
                case "input":
                  mc(e, r), (o = Hs(e, r)), ge("invalid", e);
                  break;
                case "option":
                  o = r;
                  break;
                case "select":
                  (e._wrapperState = { wasMultiple: !!r.multiple }),
                    (o = Ce({}, r, { value: void 0 })),
                    ge("invalid", e);
                  break;
                case "textarea":
                  gc(e, r), (o = Qs(e, r)), ge("invalid", e);
                  break;
                default:
                  o = r;
              }
              Xs(n, o), (s = o);
              for (i in s)
                if (s.hasOwnProperty(i)) {
                  var a = s[i];
                  i === "style"
                    ? Ef(e, a)
                    : i === "dangerouslySetInnerHTML"
                    ? ((a = a ? a.__html : void 0), a != null && Cf(e, a))
                    : i === "children"
                    ? typeof a == "string"
                      ? (n !== "textarea" || a !== "") && Co(e, a)
                      : typeof a == "number" && Co(e, "" + a)
                    : i !== "suppressContentEditableWarning" &&
                      i !== "suppressHydrationWarning" &&
                      i !== "autoFocus" &&
                      (xo.hasOwnProperty(i)
                        ? a != null && i === "onScroll" && ge("scroll", e)
                        : a != null && Qa(e, i, a, l));
                }
              switch (n) {
                case "input":
                  ti(e), hc(e, r, !1);
                  break;
                case "textarea":
                  ti(e), yc(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Tn(r.value));
                  break;
                case "select":
                  (e.multiple = !!r.multiple),
                    (i = r.value),
                    i != null
                      ? kr(e, !!r.multiple, i, !1)
                      : r.defaultValue != null &&
                        kr(e, !!r.multiple, r.defaultValue, !0);
                  break;
                default:
                  typeof o.onClick == "function" && (e.onclick = Yi);
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
          t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
        }
        return Ge(t), null;
      case 6:
        if (e && t.stateNode != null) Kp(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null) throw Error(b(166));
          if (((n = jn(Oo.current)), jn(Qt.current), ci(t))) {
            if (
              ((r = t.stateNode),
              (n = t.memoizedProps),
              (r[Ht] = t),
              (i = r.nodeValue !== n) && ((e = gt), e !== null))
            )
              switch (e.tag) {
                case 3:
                  ui(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 &&
                    ui(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            i && (t.flags |= 4);
          } else
            (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
              (r[Ht] = t),
              (t.stateNode = r);
        }
        return Ge(t), null;
      case 13:
        if (
          (ye(we),
          (r = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (Se && ht !== null && t.mode & 1 && !(t.flags & 128))
            dp(), Or(), (t.flags |= 98560), (i = !1);
          else if (((i = ci(t)), r !== null && r.dehydrated !== null)) {
            if (e === null) {
              if (!i) throw Error(b(318));
              if (
                ((i = t.memoizedState),
                (i = i !== null ? i.dehydrated : null),
                !i)
              )
                throw Error(b(317));
              i[Ht] = t;
            } else
              Or(),
                !(t.flags & 128) && (t.memoizedState = null),
                (t.flags |= 4);
            Ge(t), (i = !1);
          } else At !== null && (ba(At), (At = null)), (i = !0);
          if (!i) return t.flags & 65536 ? t : null;
        }
        return t.flags & 128
          ? ((t.lanes = n), t)
          : ((r = r !== null),
            r !== (e !== null && e.memoizedState !== null) &&
              r &&
              ((t.child.flags |= 8192),
              t.mode & 1 &&
                (e === null || we.current & 1 ? Oe === 0 && (Oe = 3) : _u())),
            t.updateQueue !== null && (t.flags |= 4),
            Ge(t),
            null);
      case 4:
        return (
          Nr(),
          ka(e, t),
          e === null && Ro(t.stateNode.containerInfo),
          Ge(t),
          null
        );
      case 10:
        return pu(t.type._context), Ge(t), null;
      case 17:
        return st(t.type) && Xi(), Ge(t), null;
      case 19:
        if ((ye(we), (i = t.memoizedState), i === null)) return Ge(t), null;
        if (((r = (t.flags & 128) !== 0), (l = i.rendering), l === null))
          if (r) eo(i, !1);
          else {
            if (Oe !== 0 || (e !== null && e.flags & 128))
              for (e = t.child; e !== null; ) {
                if (((l = rl(e)), l !== null)) {
                  for (
                    t.flags |= 128,
                      eo(i, !1),
                      r = l.updateQueue,
                      r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                      t.subtreeFlags = 0,
                      r = n,
                      n = t.child;
                    n !== null;

                  )
                    (i = n),
                      (e = r),
                      (i.flags &= 14680066),
                      (l = i.alternate),
                      l === null
                        ? ((i.childLanes = 0),
                          (i.lanes = e),
                          (i.child = null),
                          (i.subtreeFlags = 0),
                          (i.memoizedProps = null),
                          (i.memoizedState = null),
                          (i.updateQueue = null),
                          (i.dependencies = null),
                          (i.stateNode = null))
                        : ((i.childLanes = l.childLanes),
                          (i.lanes = l.lanes),
                          (i.child = l.child),
                          (i.subtreeFlags = 0),
                          (i.deletions = null),
                          (i.memoizedProps = l.memoizedProps),
                          (i.memoizedState = l.memoizedState),
                          (i.updateQueue = l.updateQueue),
                          (i.type = l.type),
                          (e = l.dependencies),
                          (i.dependencies =
                            e === null
                              ? null
                              : {
                                  lanes: e.lanes,
                                  firstContext: e.firstContext,
                                })),
                      (n = n.sibling);
                  return pe(we, (we.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            i.tail !== null &&
              Pe() > Lr &&
              ((t.flags |= 128), (r = !0), eo(i, !1), (t.lanes = 4194304));
          }
        else {
          if (!r)
            if (((e = rl(l)), e !== null)) {
              if (
                ((t.flags |= 128),
                (r = !0),
                (n = e.updateQueue),
                n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                eo(i, !0),
                i.tail === null &&
                  i.tailMode === "hidden" &&
                  !l.alternate &&
                  !Se)
              )
                return Ge(t), null;
            } else
              2 * Pe() - i.renderingStartTime > Lr &&
                n !== 1073741824 &&
                ((t.flags |= 128), (r = !0), eo(i, !1), (t.lanes = 4194304));
          i.isBackwards
            ? ((l.sibling = t.child), (t.child = l))
            : ((n = i.last),
              n !== null ? (n.sibling = l) : (t.child = l),
              (i.last = l));
        }
        return i.tail !== null
          ? ((t = i.tail),
            (i.rendering = t),
            (i.tail = t.sibling),
            (i.renderingStartTime = Pe()),
            (t.sibling = null),
            (n = we.current),
            pe(we, r ? (n & 1) | 2 : n & 1),
            t)
          : (Ge(t), null);
      case 22:
      case 23:
        return (
          Ru(),
          (r = t.memoizedState !== null),
          e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
          r && t.mode & 1
            ? pt & 1073741824 &&
              (Ge(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : Ge(t),
          null
        );
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(b(156, t.tag));
  }
  function C0(e, t) {
    switch ((uu(t), t.tag)) {
      case 1:
        return (
          st(t.type) && Xi(),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          Nr(),
          ye(lt),
          ye(Ye),
          vu(),
          (e = t.flags),
          e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 5:
        return yu(t), null;
      case 13:
        if (
          (ye(we), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(b(340));
          Or();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return ye(we), null;
      case 4:
        return Nr(), null;
      case 10:
        return pu(t.type._context), null;
      case 22:
      case 23:
        return Ru(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var pi = !1,
    Qe = !1,
    k0 = typeof WeakSet == "function" ? WeakSet : Set,
    N = null;
  function xr(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          Te(e, t, r);
        }
      else n.current = null;
  }
  function Ea(e, t, n) {
    try {
      n();
    } catch (r) {
      Te(e, t, r);
    }
  }
  var ld = !1;
  function E0(e, t) {
    if (((sa = Gi), (e = Zf()), su(e))) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = ((n = e.ownerDocument) && n.defaultView) || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var o = r.anchorOffset,
              i = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, i.nodeType;
            } catch {
              n = null;
              break e;
            }
            var l = 0,
              s = -1,
              a = -1,
              u = 0,
              f = 0,
              p = e,
              m = null;
            t: for (;;) {
              for (
                var w;
                p !== n || (o !== 0 && p.nodeType !== 3) || (s = l + o),
                  p !== i || (r !== 0 && p.nodeType !== 3) || (a = l + r),
                  p.nodeType === 3 && (l += p.nodeValue.length),
                  (w = p.firstChild) !== null;

              )
                (m = p), (p = w);
              for (;;) {
                if (p === e) break t;
                if (
                  (m === n && ++u === o && (s = l),
                  m === i && ++f === r && (a = l),
                  (w = p.nextSibling) !== null)
                )
                  break;
                (p = m), (m = p.parentNode);
              }
              p = w;
            }
            n = s === -1 || a === -1 ? null : { start: s, end: a };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (
      aa = { focusedElem: e, selectionRange: n }, Gi = !1, N = t;
      N !== null;

    )
      if (((t = N), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
        (e.return = t), (N = e);
      else
        for (; N !== null; ) {
          t = N;
          try {
            var v = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (v !== null) {
                    var S = v.memoizedProps,
                      P = v.memoizedState,
                      g = t.stateNode,
                      h = g.getSnapshotBeforeUpdate(
                        t.elementType === t.type ? S : It(t.type, S),
                        P
                      );
                    g.__reactInternalSnapshotBeforeUpdate = h;
                  }
                  break;
                case 3:
                  var c = t.stateNode.containerInfo;
                  c.nodeType === 1
                    ? (c.textContent = "")
                    : c.nodeType === 9 &&
                      c.documentElement &&
                      c.removeChild(c.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(b(163));
              }
          } catch (x) {
            Te(t, t.return, x);
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (N = e);
            break;
          }
          N = t.return;
        }
    return (v = ld), (ld = !1), v;
  }
  function yo(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
      var o = (r = r.next);
      do {
        if ((o.tag & e) === e) {
          var i = o.destroy;
          (o.destroy = void 0), i !== void 0 && Ea(t, n, i);
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function Pl(e, t) {
    if (
      ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
    ) {
      var n = (t = t.next);
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function Ta(e) {
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
      typeof t == "function" ? t(e) : (t.current = e);
    }
  }
  function Qp(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), Qp(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 &&
        ((t = e.stateNode),
        t !== null &&
          (delete t[Ht],
          delete t[bo],
          delete t[da],
          delete t[l0],
          delete t[s0])),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  function Yp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function sd(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || Yp(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Pa(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode),
        t
          ? n.nodeType === 8
            ? n.parentNode.insertBefore(e, t)
            : n.insertBefore(e, t)
          : (n.nodeType === 8
              ? ((t = n.parentNode), t.insertBefore(e, n))
              : ((t = n), t.appendChild(e)),
            (n = n._reactRootContainer),
            n != null || t.onclick !== null || (t.onclick = Yi));
    else if (r !== 4 && ((e = e.child), e !== null))
      for (Pa(e, t, n), e = e.sibling; e !== null; )
        Pa(e, t, n), (e = e.sibling);
  }
  function $a(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
      for ($a(e, t, n), e = e.sibling; e !== null; )
        $a(e, t, n), (e = e.sibling);
  }
  var je = null,
    Ot = !1;
  function un(e, t, n) {
    for (n = n.child; n !== null; ) Xp(e, t, n), (n = n.sibling);
  }
  function Xp(e, t, n) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function")
      try {
        Kt.onCommitFiberUnmount(vl, n);
      } catch {}
    switch (n.tag) {
      case 5:
        Qe || xr(n, t);
      case 6:
        var r = je,
          o = Ot;
        (je = null),
          un(e, t, n),
          (je = r),
          (Ot = o),
          je !== null &&
            (Ot
              ? ((e = je),
                (n = n.stateNode),
                e.nodeType === 8
                  ? e.parentNode.removeChild(n)
                  : e.removeChild(n))
              : je.removeChild(n.stateNode));
        break;
      case 18:
        je !== null &&
          (Ot
            ? ((e = je),
              (n = n.stateNode),
              e.nodeType === 8
                ? Cs(e.parentNode, n)
                : e.nodeType === 1 && Cs(e, n),
              Po(e))
            : Cs(je, n.stateNode));
        break;
      case 4:
        (r = je),
          (o = Ot),
          (je = n.stateNode.containerInfo),
          (Ot = !0),
          un(e, t, n),
          (je = r),
          (Ot = o);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (
          !Qe &&
          ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
        ) {
          o = r = r.next;
          do {
            var i = o,
              l = i.destroy;
            (i = i.tag),
              l !== void 0 && (i & 2 || i & 4) && Ea(n, t, l),
              (o = o.next);
          } while (o !== r);
        }
        un(e, t, n);
        break;
      case 1:
        if (
          !Qe &&
          (xr(n, t),
          (r = n.stateNode),
          typeof r.componentWillUnmount == "function")
        )
          try {
            (r.props = n.memoizedProps),
              (r.state = n.memoizedState),
              r.componentWillUnmount();
          } catch (s) {
            Te(n, t, s);
          }
        un(e, t, n);
        break;
      case 21:
        un(e, t, n);
        break;
      case 22:
        n.mode & 1
          ? ((Qe = (r = Qe) || n.memoizedState !== null), un(e, t, n), (Qe = r))
          : un(e, t, n);
        break;
      default:
        un(e, t, n);
    }
  }
  function ad(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new k0()),
        t.forEach(function (r) {
          var o = O0.bind(null, e, r);
          n.has(r) || (n.add(r), r.then(o, o));
        });
    }
  }
  function bt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var o = n[r];
        try {
          var i = e,
            l = t,
            s = l;
          e: for (; s !== null; ) {
            switch (s.tag) {
              case 5:
                (je = s.stateNode), (Ot = !1);
                break e;
              case 3:
                (je = s.stateNode.containerInfo), (Ot = !0);
                break e;
              case 4:
                (je = s.stateNode.containerInfo), (Ot = !0);
                break e;
            }
            s = s.return;
          }
          if (je === null) throw Error(b(160));
          Xp(i, l, o), (je = null), (Ot = !1);
          var a = o.alternate;
          a !== null && (a.return = null), (o.return = null);
        } catch (u) {
          Te(o, t, u);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; ) qp(t, e), (t = t.sibling);
  }
  function qp(e, t) {
    var n = e.alternate,
      r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if ((bt(t, e), Ft(e), r & 4)) {
          try {
            yo(3, e, e.return), Pl(3, e);
          } catch (S) {
            Te(e, e.return, S);
          }
          try {
            yo(5, e, e.return);
          } catch (S) {
            Te(e, e.return, S);
          }
        }
        break;
      case 1:
        bt(t, e), Ft(e), r & 512 && n !== null && xr(n, n.return);
        break;
      case 5:
        if (
          (bt(t, e),
          Ft(e),
          r & 512 && n !== null && xr(n, n.return),
          e.flags & 32)
        ) {
          var o = e.stateNode;
          try {
            Co(o, "");
          } catch (S) {
            Te(e, e.return, S);
          }
        }
        if (r & 4 && ((o = e.stateNode), o != null)) {
          var i = e.memoizedProps,
            l = n !== null ? n.memoizedProps : i,
            s = e.type,
            a = e.updateQueue;
          if (((e.updateQueue = null), a !== null))
            try {
              s === "input" && i.type === "radio" && i.name != null && Sf(o, i),
                qs(s, l);
              var u = qs(s, i);
              for (l = 0; l < a.length; l += 2) {
                var f = a[l],
                  p = a[l + 1];
                f === "style"
                  ? Ef(o, p)
                  : f === "dangerouslySetInnerHTML"
                  ? Cf(o, p)
                  : f === "children"
                  ? Co(o, p)
                  : Qa(o, f, p, u);
              }
              switch (s) {
                case "input":
                  Gs(o, i);
                  break;
                case "textarea":
                  wf(o, i);
                  break;
                case "select":
                  var m = o._wrapperState.wasMultiple;
                  o._wrapperState.wasMultiple = !!i.multiple;
                  var w = i.value;
                  w != null
                    ? kr(o, !!i.multiple, w, !1)
                    : m !== !!i.multiple &&
                      (i.defaultValue != null
                        ? kr(o, !!i.multiple, i.defaultValue, !0)
                        : kr(o, !!i.multiple, i.multiple ? [] : "", !1));
              }
              o[bo] = i;
            } catch (S) {
              Te(e, e.return, S);
            }
        }
        break;
      case 6:
        if ((bt(t, e), Ft(e), r & 4)) {
          if (e.stateNode === null) throw Error(b(162));
          (o = e.stateNode), (i = e.memoizedProps);
          try {
            o.nodeValue = i;
          } catch (S) {
            Te(e, e.return, S);
          }
        }
        break;
      case 3:
        if (
          (bt(t, e), Ft(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
        )
          try {
            Po(t.containerInfo);
          } catch (S) {
            Te(e, e.return, S);
          }
        break;
      case 4:
        bt(t, e), Ft(e);
        break;
      case 13:
        bt(t, e),
          Ft(e),
          (o = e.child),
          o.flags & 8192 &&
            ((i = o.memoizedState !== null),
            (o.stateNode.isHidden = i),
            !i ||
              (o.alternate !== null && o.alternate.memoizedState !== null) ||
              ($u = Pe())),
          r & 4 && ad(e);
        break;
      case 22:
        if (
          ((f = n !== null && n.memoizedState !== null),
          e.mode & 1 ? ((Qe = (u = Qe) || f), bt(t, e), (Qe = u)) : bt(t, e),
          Ft(e),
          r & 8192)
        ) {
          if (
            ((u = e.memoizedState !== null),
            (e.stateNode.isHidden = u) && !f && e.mode & 1)
          )
            for (N = e, f = e.child; f !== null; ) {
              for (p = N = f; N !== null; ) {
                switch (((m = N), (w = m.child), m.tag)) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    yo(4, m, m.return);
                    break;
                  case 1:
                    xr(m, m.return);
                    var v = m.stateNode;
                    if (typeof v.componentWillUnmount == "function") {
                      (r = m), (n = m.return);
                      try {
                        (t = r),
                          (v.props = t.memoizedProps),
                          (v.state = t.memoizedState),
                          v.componentWillUnmount();
                      } catch (S) {
                        Te(r, n, S);
                      }
                    }
                    break;
                  case 5:
                    xr(m, m.return);
                    break;
                  case 22:
                    if (m.memoizedState !== null) {
                      cd(p);
                      continue;
                    }
                }
                w !== null ? ((w.return = m), (N = w)) : cd(p);
              }
              f = f.sibling;
            }
          e: for (f = null, p = e; ; ) {
            if (p.tag === 5) {
              if (f === null) {
                f = p;
                try {
                  (o = p.stateNode),
                    u
                      ? ((i = o.style),
                        typeof i.setProperty == "function"
                          ? i.setProperty("display", "none", "important")
                          : (i.display = "none"))
                      : ((s = p.stateNode),
                        (a = p.memoizedProps.style),
                        (l =
                          a != null && a.hasOwnProperty("display")
                            ? a.display
                            : null),
                        (s.style.display = kf("display", l)));
                } catch (S) {
                  Te(e, e.return, S);
                }
              }
            } else if (p.tag === 6) {
              if (f === null)
                try {
                  p.stateNode.nodeValue = u ? "" : p.memoizedProps;
                } catch (S) {
                  Te(e, e.return, S);
                }
            } else if (
              ((p.tag !== 22 && p.tag !== 23) ||
                p.memoizedState === null ||
                p === e) &&
              p.child !== null
            ) {
              (p.child.return = p), (p = p.child);
              continue;
            }
            if (p === e) break e;
            for (; p.sibling === null; ) {
              if (p.return === null || p.return === e) break e;
              f === p && (f = null), (p = p.return);
            }
            f === p && (f = null),
              (p.sibling.return = p.return),
              (p = p.sibling);
          }
        }
        break;
      case 19:
        bt(t, e), Ft(e), r & 4 && ad(e);
        break;
      case 21:
        break;
      default:
        bt(t, e), Ft(e);
    }
  }
  function Ft(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Yp(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(b(160));
        }
        switch (r.tag) {
          case 5:
            var o = r.stateNode;
            r.flags & 32 && (Co(o, ""), (r.flags &= -33));
            var i = sd(e);
            $a(e, i, o);
            break;
          case 3:
          case 4:
            var l = r.stateNode.containerInfo,
              s = sd(e);
            Pa(e, s, l);
            break;
          default:
            throw Error(b(161));
        }
      } catch (a) {
        Te(e, e.return, a);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function T0(e, t, n) {
    (N = e), Zp(e);
  }
  function Zp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; N !== null; ) {
      var o = N,
        i = o.child;
      if (o.tag === 22 && r) {
        var l = o.memoizedState !== null || pi;
        if (!l) {
          var s = o.alternate,
            a = (s !== null && s.memoizedState !== null) || Qe;
          s = pi;
          var u = Qe;
          if (((pi = l), (Qe = a) && !u))
            for (N = o; N !== null; )
              (l = N),
                (a = l.child),
                l.tag === 22 && l.memoizedState !== null
                  ? dd(o)
                  : a !== null
                  ? ((a.return = l), (N = a))
                  : dd(o);
          for (; i !== null; ) (N = i), Zp(i), (i = i.sibling);
          (N = o), (pi = s), (Qe = u);
        }
        ud(e);
      } else
        o.subtreeFlags & 8772 && i !== null ? ((i.return = o), (N = i)) : ud(e);
    }
  }
  function ud(e) {
    for (; N !== null; ) {
      var t = N;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Qe || Pl(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Qe)
                  if (n === null) r.componentDidMount();
                  else {
                    var o =
                      t.elementType === t.type
                        ? n.memoizedProps
                        : It(t.type, n.memoizedProps);
                    r.componentDidUpdate(
                      o,
                      n.memoizedState,
                      r.__reactInternalSnapshotBeforeUpdate
                    );
                  }
                var i = t.updateQueue;
                i !== null && Kc(t, i, r);
                break;
              case 3:
                var l = t.updateQueue;
                if (l !== null) {
                  if (((n = null), t.child !== null))
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  Kc(t, l, n);
                }
                break;
              case 5:
                var s = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = s;
                  var a = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      a.autoFocus && n.focus();
                      break;
                    case "img":
                      a.src && (n.src = a.src);
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
                  var u = t.alternate;
                  if (u !== null) {
                    var f = u.memoizedState;
                    if (f !== null) {
                      var p = f.dehydrated;
                      p !== null && Po(p);
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
                throw Error(b(163));
            }
          Qe || (t.flags & 512 && Ta(t));
        } catch (m) {
          Te(t, t.return, m);
        }
      }
      if (t === e) {
        N = null;
        break;
      }
      if (((n = t.sibling), n !== null)) {
        (n.return = t.return), (N = n);
        break;
      }
      N = t.return;
    }
  }
  function cd(e) {
    for (; N !== null; ) {
      var t = N;
      if (t === e) {
        N = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        (n.return = t.return), (N = n);
        break;
      }
      N = t.return;
    }
  }
  function dd(e) {
    for (; N !== null; ) {
      var t = N;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Pl(4, t);
            } catch (a) {
              Te(t, n, a);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var o = t.return;
              try {
                r.componentDidMount();
              } catch (a) {
                Te(t, o, a);
              }
            }
            var i = t.return;
            try {
              Ta(t);
            } catch (a) {
              Te(t, i, a);
            }
            break;
          case 5:
            var l = t.return;
            try {
              Ta(t);
            } catch (a) {
              Te(t, l, a);
            }
        }
      } catch (a) {
        Te(t, t.return, a);
      }
      if (t === e) {
        N = null;
        break;
      }
      var s = t.sibling;
      if (s !== null) {
        (s.return = t.return), (N = s);
        break;
      }
      N = t.return;
    }
  }
  var P0 = Math.ceil,
    ll = sn.ReactCurrentDispatcher,
    Tu = sn.ReactCurrentOwner,
    $t = sn.ReactCurrentBatchConfig,
    q = 0,
    ze = null,
    _e = null,
    Fe = 0,
    pt = 0,
    Cr = _n(0),
    Oe = 0,
    Lo = null,
    Gn = 0,
    $l = 0,
    Pu = 0,
    vo = null,
    rt = null,
    $u = 0,
    Lr = 1 / 0,
    qt = null,
    sl = !1,
    Ma = null,
    xn = null,
    mi = !1,
    hn = null,
    al = 0,
    So = 0,
    Ra = null,
    Oi = -1,
    Ai = 0;
  function Ze() {
    return q & 6 ? Pe() : Oi !== -1 ? Oi : (Oi = Pe());
  }
  function Cn(e) {
    return e.mode & 1
      ? q & 2 && Fe !== 0
        ? Fe & -Fe
        : u0.transition !== null
        ? (Ai === 0 && (Ai = zf()), Ai)
        : ((e = ie),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Uf(e.type))),
          e)
      : 1;
  }
  function zt(e, t, n, r) {
    if (50 < So) throw ((So = 0), (Ra = null), Error(b(185)));
    Vo(e, n, r),
      (!(q & 2) || e !== ze) &&
        (e === ze && (!(q & 2) && ($l |= n), Oe === 4 && pn(e, Fe)),
        at(e, r),
        n === 1 && q === 0 && !(t.mode & 1) && ((Lr = Pe() + 500), kl && bn()));
  }
  function at(e, t) {
    var n = e.callbackNode;
    ug(e, t);
    var r = Hi(e, e === ze ? Fe : 0);
    if (r === 0)
      n !== null && wc(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
      if ((n != null && wc(n), t === 1))
        e.tag === 0 ? a0(fd.bind(null, e)) : ap(fd.bind(null, e)),
          o0(function () {
            !(q & 6) && bn();
          }),
          (n = null);
      else {
        switch (Lf(r)) {
          case 1:
            n = Ja;
            break;
          case 4:
            n = Af;
            break;
          case 16:
            n = Vi;
            break;
          case 536870912:
            n = Nf;
            break;
          default:
            n = Vi;
        }
        n = lm(n, Jp.bind(null, e));
      }
      (e.callbackPriority = t), (e.callbackNode = n);
    }
  }
  function Jp(e, t) {
    if (((Oi = -1), (Ai = 0), q & 6)) throw Error(b(327));
    var n = e.callbackNode;
    if (Mr() && e.callbackNode !== n) return null;
    var r = Hi(e, e === ze ? Fe : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ul(e, r);
    else {
      t = r;
      var o = q;
      q |= 2;
      var i = tm();
      (ze !== e || Fe !== t) && ((qt = null), (Lr = Pe() + 500), Dn(e, t));
      do
        try {
          R0();
          break;
        } catch (s) {
          em(e, s);
        }
      while (!0);
      fu(),
        (ll.current = i),
        (q = o),
        _e !== null ? (t = 0) : ((ze = null), (Fe = 0), (t = Oe));
    }
    if (t !== 0) {
      if (
        (t === 2 && ((o = na(e)), o !== 0 && ((r = o), (t = _a(e, o)))),
        t === 1)
      )
        throw ((n = Lo), Dn(e, 0), pn(e, r), at(e, Pe()), n);
      if (t === 6) pn(e, r);
      else {
        if (
          ((o = e.current.alternate),
          !(r & 30) &&
            !$0(o) &&
            ((t = ul(e, r)),
            t === 2 && ((i = na(e)), i !== 0 && ((r = i), (t = _a(e, i)))),
            t === 1))
        )
          throw ((n = Lo), Dn(e, 0), pn(e, r), at(e, Pe()), n);
        switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
          case 0:
          case 1:
            throw Error(b(345));
          case 2:
            An(e, rt, qt);
            break;
          case 3:
            if (
              (pn(e, r),
              (r & 130023424) === r && ((t = $u + 500 - Pe()), 10 < t))
            ) {
              if (Hi(e, 0) !== 0) break;
              if (((o = e.suspendedLanes), (o & r) !== r)) {
                Ze(), (e.pingedLanes |= e.suspendedLanes & o);
                break;
              }
              e.timeoutHandle = ca(An.bind(null, e, rt, qt), t);
              break;
            }
            An(e, rt, qt);
            break;
          case 4:
            if ((pn(e, r), (r & 4194240) === r)) break;
            for (t = e.eventTimes, o = -1; 0 < r; ) {
              var l = 31 - Nt(r);
              (i = 1 << l), (l = t[l]), l > o && (o = l), (r &= ~i);
            }
            if (
              ((r = o),
              (r = Pe() - r),
              (r =
                (120 > r
                  ? 120
                  : 480 > r
                  ? 480
                  : 1080 > r
                  ? 1080
                  : 1920 > r
                  ? 1920
                  : 3e3 > r
                  ? 3e3
                  : 4320 > r
                  ? 4320
                  : 1960 * P0(r / 1960)) - r),
              10 < r)
            ) {
              e.timeoutHandle = ca(An.bind(null, e, rt, qt), r);
              break;
            }
            An(e, rt, qt);
            break;
          case 5:
            An(e, rt, qt);
            break;
          default:
            throw Error(b(329));
        }
      }
    }
    return at(e, Pe()), e.callbackNode === n ? Jp.bind(null, e) : null;
  }
  function _a(e, t) {
    var n = vo;
    return (
      e.current.memoizedState.isDehydrated && (Dn(e, t).flags |= 256),
      (e = ul(e, t)),
      e !== 2 && ((t = rt), (rt = n), t !== null && ba(t)),
      e
    );
  }
  function ba(e) {
    rt === null ? (rt = e) : rt.push.apply(rt, e);
  }
  function $0(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && ((n = n.stores), n !== null))
          for (var r = 0; r < n.length; r++) {
            var o = n[r],
              i = o.getSnapshot;
            o = o.value;
            try {
              if (!jt(i(), o)) return !1;
            } catch {
              return !1;
            }
          }
      }
      if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
        (n.return = t), (t = n);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function pn(e, t) {
    for (
      t &= ~Pu,
        t &= ~$l,
        e.suspendedLanes |= t,
        e.pingedLanes &= ~t,
        e = e.expirationTimes;
      0 < t;

    ) {
      var n = 31 - Nt(t),
        r = 1 << n;
      (e[n] = -1), (t &= ~r);
    }
  }
  function fd(e) {
    if (q & 6) throw Error(b(327));
    Mr();
    var t = Hi(e, 0);
    if (!(t & 1)) return at(e, Pe()), null;
    var n = ul(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = na(e);
      r !== 0 && ((t = r), (n = _a(e, r)));
    }
    if (n === 1) throw ((n = Lo), Dn(e, 0), pn(e, t), at(e, Pe()), n);
    if (n === 6) throw Error(b(345));
    return (
      (e.finishedWork = e.current.alternate),
      (e.finishedLanes = t),
      An(e, rt, qt),
      at(e, Pe()),
      null
    );
  }
  function Mu(e, t) {
    var n = q;
    q |= 1;
    try {
      return e(t);
    } finally {
      (q = n), q === 0 && ((Lr = Pe() + 500), kl && bn());
    }
  }
  function Kn(e) {
    hn !== null && hn.tag === 0 && !(q & 6) && Mr();
    var t = q;
    q |= 1;
    var n = $t.transition,
      r = ie;
    try {
      if ((($t.transition = null), (ie = 1), e)) return e();
    } finally {
      (ie = r), ($t.transition = n), (q = t), !(q & 6) && bn();
    }
  }
  function Ru() {
    (pt = Cr.current), ye(Cr);
  }
  function Dn(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), r0(n)), _e !== null))
      for (n = _e.return; n !== null; ) {
        var r = n;
        switch ((uu(r), r.tag)) {
          case 1:
            (r = r.type.childContextTypes), r != null && Xi();
            break;
          case 3:
            Nr(), ye(lt), ye(Ye), vu();
            break;
          case 5:
            yu(r);
            break;
          case 4:
            Nr();
            break;
          case 13:
            ye(we);
            break;
          case 19:
            ye(we);
            break;
          case 10:
            pu(r.type._context);
            break;
          case 22:
          case 23:
            Ru();
        }
        n = n.return;
      }
    if (
      ((ze = e),
      (_e = e = kn(e.current, null)),
      (Fe = pt = t),
      (Oe = 0),
      (Lo = null),
      (Pu = $l = Gn = 0),
      (rt = vo = null),
      Ln !== null)
    ) {
      for (t = 0; t < Ln.length; t++)
        if (((n = Ln[t]), (r = n.interleaved), r !== null)) {
          n.interleaved = null;
          var o = r.next,
            i = n.pending;
          if (i !== null) {
            var l = i.next;
            (i.next = o), (r.next = l);
          }
          n.pending = r;
        }
      Ln = null;
    }
    return e;
  }
  function em(e, t) {
    do {
      var n = _e;
      try {
        if ((fu(), (_i.current = il), ol)) {
          for (var r = xe.memoizedState; r !== null; ) {
            var o = r.queue;
            o !== null && (o.pending = null), (r = r.next);
          }
          ol = !1;
        }
        if (
          ((Hn = 0),
          (Ne = Ie = xe = null),
          (go = !1),
          (Ao = 0),
          (Tu.current = null),
          n === null || n.return === null)
        ) {
          (Oe = 1), (Lo = t), (_e = null);
          break;
        }
        e: {
          var i = e,
            l = n.return,
            s = n,
            a = t;
          if (
            ((t = Fe),
            (s.flags |= 32768),
            a !== null && typeof a == "object" && typeof a.then == "function")
          ) {
            var u = a,
              f = s,
              p = f.tag;
            if (!(f.mode & 1) && (p === 0 || p === 11 || p === 15)) {
              var m = f.alternate;
              m
                ? ((f.updateQueue = m.updateQueue),
                  (f.memoizedState = m.memoizedState),
                  (f.lanes = m.lanes))
                : ((f.updateQueue = null), (f.memoizedState = null));
            }
            var w = Jc(l);
            if (w !== null) {
              (w.flags &= -257),
                ed(w, l, s, i, t),
                w.mode & 1 && Zc(i, u, t),
                (t = w),
                (a = u);
              var v = t.updateQueue;
              if (v === null) {
                var S = new Set();
                S.add(a), (t.updateQueue = S);
              } else v.add(a);
              break e;
            } else {
              if (!(t & 1)) {
                Zc(i, u, t), _u();
                break e;
              }
              a = Error(b(426));
            }
          } else if (Se && s.mode & 1) {
            var P = Jc(l);
            if (P !== null) {
              !(P.flags & 65536) && (P.flags |= 256),
                ed(P, l, s, i, t),
                cu(zr(a, s));
              break e;
            }
          }
          (i = a = zr(a, s)),
            Oe !== 4 && (Oe = 2),
            vo === null ? (vo = [i]) : vo.push(i),
            (i = l);
          do {
            switch (i.tag) {
              case 3:
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var g = Lp(i, a, t);
                Gc(i, g);
                break e;
              case 1:
                s = a;
                var h = i.type,
                  c = i.stateNode;
                if (
                  !(i.flags & 128) &&
                  (typeof h.getDerivedStateFromError == "function" ||
                    (c !== null &&
                      typeof c.componentDidCatch == "function" &&
                      (xn === null || !xn.has(c))))
                ) {
                  (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                  var x = jp(i, s, t);
                  Gc(i, x);
                  break e;
                }
            }
            i = i.return;
          } while (i !== null);
        }
        rm(n);
      } catch (k) {
        (t = k), _e === n && n !== null && (_e = n = n.return);
        continue;
      }
      break;
    } while (!0);
  }
  function tm() {
    var e = ll.current;
    return (ll.current = il), e === null ? il : e;
  }
  function _u() {
    (Oe === 0 || Oe === 3 || Oe === 2) && (Oe = 4),
      ze === null || (!(Gn & 268435455) && !($l & 268435455)) || pn(ze, Fe);
  }
  function ul(e, t) {
    var n = q;
    q |= 2;
    var r = tm();
    (ze !== e || Fe !== t) && ((qt = null), Dn(e, t));
    do
      try {
        M0();
        break;
      } catch (o) {
        em(e, o);
      }
    while (!0);
    if ((fu(), (q = n), (ll.current = r), _e !== null)) throw Error(b(261));
    return (ze = null), (Fe = 0), Oe;
  }
  function M0() {
    for (; _e !== null; ) nm(_e);
  }
  function R0() {
    for (; _e !== null && !eg(); ) nm(_e);
  }
  function nm(e) {
    var t = im(e.alternate, e, pt);
    (e.memoizedProps = e.pendingProps),
      t === null ? rm(e) : (_e = t),
      (Tu.current = null);
  }
  function rm(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (((e = t.return), t.flags & 32768)) {
        if (((n = C0(n, t)), n !== null)) {
          (n.flags &= 32767), (_e = n);
          return;
        }
        if (e !== null)
          (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
        else {
          (Oe = 6), (_e = null);
          return;
        }
      } else if (((n = x0(n, t, pt)), n !== null)) {
        _e = n;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    Oe === 0 && (Oe = 5);
  }
  function An(e, t, n) {
    var r = ie,
      o = $t.transition;
    try {
      ($t.transition = null), (ie = 1), _0(e, t, n, r);
    } finally {
      ($t.transition = o), (ie = r);
    }
    return null;
  }
  function _0(e, t, n, r) {
    do Mr();
    while (hn !== null);
    if (q & 6) throw Error(b(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
      throw Error(b(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var i = n.lanes | n.childLanes;
    if (
      (cg(e, i),
      e === ze && ((_e = ze = null), (Fe = 0)),
      (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
        mi ||
        ((mi = !0),
        lm(Vi, function () {
          return Mr(), null;
        })),
      (i = (n.flags & 15990) !== 0),
      n.subtreeFlags & 15990 || i)
    ) {
      (i = $t.transition), ($t.transition = null);
      var l = ie;
      ie = 1;
      var s = q;
      (q |= 4),
        (Tu.current = null),
        E0(e, n),
        qp(n, e),
        Xg(aa),
        (Gi = !!sa),
        (aa = sa = null),
        (e.current = n),
        T0(n),
        tg(),
        (q = s),
        (ie = l),
        ($t.transition = i);
    } else e.current = n;
    if (
      (mi && ((mi = !1), (hn = e), (al = o)),
      (i = e.pendingLanes),
      i === 0 && (xn = null),
      og(n.stateNode),
      at(e, Pe()),
      t !== null)
    )
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (sl) throw ((sl = !1), (e = Ma), (Ma = null), e);
    return (
      al & 1 && e.tag !== 0 && Mr(),
      (i = e.pendingLanes),
      i & 1 ? (e === Ra ? So++ : ((So = 0), (Ra = e))) : (So = 0),
      bn(),
      null
    );
  }
  function Mr() {
    if (hn !== null) {
      var e = Lf(al),
        t = $t.transition,
        n = ie;
      try {
        if ((($t.transition = null), (ie = 16 > e ? 16 : e), hn === null))
          var r = !1;
        else {
          if (((e = hn), (hn = null), (al = 0), q & 6)) throw Error(b(331));
          var o = q;
          for (q |= 4, N = e.current; N !== null; ) {
            var i = N,
              l = i.child;
            if (N.flags & 16) {
              var s = i.deletions;
              if (s !== null) {
                for (var a = 0; a < s.length; a++) {
                  var u = s[a];
                  for (N = u; N !== null; ) {
                    var f = N;
                    switch (f.tag) {
                      case 0:
                      case 11:
                      case 15:
                        yo(8, f, i);
                    }
                    var p = f.child;
                    if (p !== null) (p.return = f), (N = p);
                    else
                      for (; N !== null; ) {
                        f = N;
                        var m = f.sibling,
                          w = f.return;
                        if ((Qp(f), f === u)) {
                          N = null;
                          break;
                        }
                        if (m !== null) {
                          (m.return = w), (N = m);
                          break;
                        }
                        N = w;
                      }
                  }
                }
                var v = i.alternate;
                if (v !== null) {
                  var S = v.child;
                  if (S !== null) {
                    v.child = null;
                    do {
                      var P = S.sibling;
                      (S.sibling = null), (S = P);
                    } while (S !== null);
                  }
                }
                N = i;
              }
            }
            if (i.subtreeFlags & 2064 && l !== null) (l.return = i), (N = l);
            else
              e: for (; N !== null; ) {
                if (((i = N), i.flags & 2048))
                  switch (i.tag) {
                    case 0:
                    case 11:
                    case 15:
                      yo(9, i, i.return);
                  }
                var g = i.sibling;
                if (g !== null) {
                  (g.return = i.return), (N = g);
                  break e;
                }
                N = i.return;
              }
          }
          var h = e.current;
          for (N = h; N !== null; ) {
            l = N;
            var c = l.child;
            if (l.subtreeFlags & 2064 && c !== null) (c.return = l), (N = c);
            else
              e: for (l = h; N !== null; ) {
                if (((s = N), s.flags & 2048))
                  try {
                    switch (s.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Pl(9, s);
                    }
                  } catch (k) {
                    Te(s, s.return, k);
                  }
                if (s === l) {
                  N = null;
                  break e;
                }
                var x = s.sibling;
                if (x !== null) {
                  (x.return = s.return), (N = x);
                  break e;
                }
                N = s.return;
              }
          }
          if (
            ((q = o), bn(), Kt && typeof Kt.onPostCommitFiberRoot == "function")
          )
            try {
              Kt.onPostCommitFiberRoot(vl, e);
            } catch {}
          r = !0;
        }
        return r;
      } finally {
        (ie = n), ($t.transition = t);
      }
    }
    return !1;
  }
  function pd(e, t, n) {
    (t = zr(n, t)),
      (t = Lp(e, t, 1)),
      (e = wn(e, t, 1)),
      (t = Ze()),
      e !== null && (Vo(e, 1, t), at(e, t));
  }
  function Te(e, t, n) {
    if (e.tag === 3) pd(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          pd(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof r.componentDidCatch == "function" &&
              (xn === null || !xn.has(r)))
          ) {
            (e = zr(n, e)),
              (e = jp(t, e, 1)),
              (t = wn(t, e, 1)),
              (e = Ze()),
              t !== null && (Vo(t, 1, e), at(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function b0(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
      (t = Ze()),
      (e.pingedLanes |= e.suspendedLanes & n),
      ze === e &&
        (Fe & n) === n &&
        (Oe === 4 || (Oe === 3 && (Fe & 130023424) === Fe && 500 > Pe() - $u)
          ? Dn(e, 0)
          : (Pu |= n)),
      at(e, t);
  }
  function om(e, t) {
    t === 0 &&
      (e.mode & 1
        ? ((t = oi), (oi <<= 1), !(oi & 130023424) && (oi = 4194304))
        : (t = 1));
    var n = Ze();
    (e = on(e, t)), e !== null && (Vo(e, t, n), at(e, n));
  }
  function I0(e) {
    var t = e.memoizedState,
      n = 0;
    t !== null && (n = t.retryLane), om(e, n);
  }
  function O0(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode,
          o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(b(314));
    }
    r !== null && r.delete(t), om(e, n);
  }
  var im;
  im = function (e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || lt.current) it = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128)) return (it = !1), w0(e, t, n);
        it = !!(e.flags & 131072);
      }
    else (it = !1), Se && t.flags & 1048576 && up(t, Ji, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 2:
        var r = t.type;
        Ii(e, t), (e = t.pendingProps);
        var o = Ir(t, Ye.current);
        $r(t, n), (o = wu(null, t, r, e, o, n));
        var i = xu();
        return (
          (t.flags |= 1),
          typeof o == "object" &&
          o !== null &&
          typeof o.render == "function" &&
          o.$$typeof === void 0
            ? ((t.tag = 1),
              (t.memoizedState = null),
              (t.updateQueue = null),
              st(r) ? ((i = !0), qi(t)) : (i = !1),
              (t.memoizedState =
                o.state !== null && o.state !== void 0 ? o.state : null),
              hu(t),
              (o.updater = Tl),
              (t.stateNode = o),
              (o._reactInternals = t),
              ya(t, r, e, n),
              (t = wa(null, t, r, !0, i, n)))
            : ((t.tag = 0), Se && i && au(t), qe(null, t, o, n), (t = t.child)),
          t
        );
      case 16:
        r = t.elementType;
        e: {
          switch (
            (Ii(e, t),
            (e = t.pendingProps),
            (o = r._init),
            (r = o(r._payload)),
            (t.type = r),
            (o = t.tag = N0(r)),
            (e = It(r, e)),
            o)
          ) {
            case 0:
              t = Sa(null, t, r, e, n);
              break e;
            case 1:
              t = rd(null, t, r, e, n);
              break e;
            case 11:
              t = td(null, t, r, e, n);
              break e;
            case 14:
              t = nd(null, t, r, It(r.type, e), n);
              break e;
          }
          throw Error(b(306, r, ""));
        }
        return t;
      case 0:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : It(r, o)),
          Sa(e, t, r, o, n)
        );
      case 1:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : It(r, o)),
          rd(e, t, r, o, n)
        );
      case 3:
        e: {
          if ((Wp(t), e === null)) throw Error(b(387));
          (r = t.pendingProps),
            (i = t.memoizedState),
            (o = i.element),
            hp(e, t),
            nl(t, r, null, n);
          var l = t.memoizedState;
          if (((r = l.element), i.isDehydrated))
            if (
              ((i = {
                element: r,
                isDehydrated: !1,
                cache: l.cache,
                pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                transitions: l.transitions,
              }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              (o = zr(Error(b(423)), t)), (t = od(e, t, r, n, o));
              break e;
            } else if (r !== o) {
              (o = zr(Error(b(424)), t)), (t = od(e, t, r, n, o));
              break e;
            } else
              for (
                ht = Sn(t.stateNode.containerInfo.firstChild),
                  gt = t,
                  Se = !0,
                  At = null,
                  n = pp(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
          else {
            if ((Or(), r === o)) {
              t = ln(e, t, n);
              break e;
            }
            qe(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return (
          gp(t),
          e === null && ma(t),
          (r = t.type),
          (o = t.pendingProps),
          (i = e !== null ? e.memoizedProps : null),
          (l = o.children),
          ua(r, o) ? (l = null) : i !== null && ua(r, i) && (t.flags |= 32),
          Dp(e, t),
          qe(e, t, l, n),
          t.child
        );
      case 6:
        return e === null && ma(t), null;
      case 13:
        return Up(e, t, n);
      case 4:
        return (
          gu(t, t.stateNode.containerInfo),
          (r = t.pendingProps),
          e === null ? (t.child = Ar(t, null, r, n)) : qe(e, t, r, n),
          t.child
        );
      case 11:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : It(r, o)),
          td(e, t, r, o, n)
        );
      case 7:
        return qe(e, t, t.pendingProps, n), t.child;
      case 8:
        return qe(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return qe(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (
            ((r = t.type._context),
            (o = t.pendingProps),
            (i = t.memoizedProps),
            (l = o.value),
            pe(el, r._currentValue),
            (r._currentValue = l),
            i !== null)
          )
            if (jt(i.value, l)) {
              if (i.children === o.children && !lt.current) {
                t = ln(e, t, n);
                break e;
              }
            } else
              for (i = t.child, i !== null && (i.return = t); i !== null; ) {
                var s = i.dependencies;
                if (s !== null) {
                  l = i.child;
                  for (var a = s.firstContext; a !== null; ) {
                    if (a.context === r) {
                      if (i.tag === 1) {
                        (a = tn(-1, n & -n)), (a.tag = 2);
                        var u = i.updateQueue;
                        if (u !== null) {
                          u = u.shared;
                          var f = u.pending;
                          f === null
                            ? (a.next = a)
                            : ((a.next = f.next), (f.next = a)),
                            (u.pending = a);
                        }
                      }
                      (i.lanes |= n),
                        (a = i.alternate),
                        a !== null && (a.lanes |= n),
                        ha(i.return, n, t),
                        (s.lanes |= n);
                      break;
                    }
                    a = a.next;
                  }
                } else if (i.tag === 10) l = i.type === t.type ? null : i.child;
                else if (i.tag === 18) {
                  if (((l = i.return), l === null)) throw Error(b(341));
                  (l.lanes |= n),
                    (s = l.alternate),
                    s !== null && (s.lanes |= n),
                    ha(l, n, t),
                    (l = i.sibling);
                } else l = i.child;
                if (l !== null) l.return = i;
                else
                  for (l = i; l !== null; ) {
                    if (l === t) {
                      l = null;
                      break;
                    }
                    if (((i = l.sibling), i !== null)) {
                      (i.return = l.return), (l = i);
                      break;
                    }
                    l = l.return;
                  }
                i = l;
              }
          qe(e, t, o.children, n), (t = t.child);
        }
        return t;
      case 9:
        return (
          (o = t.type),
          (r = t.pendingProps.children),
          $r(t, n),
          (o = Mt(o)),
          (r = r(o)),
          (t.flags |= 1),
          qe(e, t, r, n),
          t.child
        );
      case 14:
        return (
          (r = t.type),
          (o = It(r, t.pendingProps)),
          (o = It(r.type, o)),
          nd(e, t, r, o, n)
        );
      case 15:
        return Bp(e, t, t.type, t.pendingProps, n);
      case 17:
        return (
          (r = t.type),
          (o = t.pendingProps),
          (o = t.elementType === r ? o : It(r, o)),
          Ii(e, t),
          (t.tag = 1),
          st(r) ? ((e = !0), qi(t)) : (e = !1),
          $r(t, n),
          zp(t, r, o),
          ya(t, r, o, n),
          wa(null, t, r, !0, e, n)
        );
      case 19:
        return Vp(e, t, n);
      case 22:
        return Fp(e, t, n);
    }
    throw Error(b(156, t.tag));
  };
  function lm(e, t) {
    return Of(e, t);
  }
  function A0(e, t, n, r) {
    (this.tag = e),
      (this.key = n),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = r),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function Pt(e, t, n, r) {
    return new A0(e, t, n, r);
  }
  function bu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function N0(e) {
    if (typeof e == "function") return bu(e) ? 1 : 0;
    if (e != null) {
      if (((e = e.$$typeof), e === Xa)) return 11;
      if (e === qa) return 14;
    }
    return 2;
  }
  function kn(e, t) {
    var n = e.alternate;
    return (
      n === null
        ? ((n = Pt(e.tag, t, e.key, e.mode)),
          (n.elementType = e.elementType),
          (n.type = e.type),
          (n.stateNode = e.stateNode),
          (n.alternate = e),
          (e.alternate = n))
        : ((n.pendingProps = t),
          (n.type = e.type),
          (n.flags = 0),
          (n.subtreeFlags = 0),
          (n.deletions = null)),
      (n.flags = e.flags & 14680064),
      (n.childLanes = e.childLanes),
      (n.lanes = e.lanes),
      (n.child = e.child),
      (n.memoizedProps = e.memoizedProps),
      (n.memoizedState = e.memoizedState),
      (n.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (n.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (n.sibling = e.sibling),
      (n.index = e.index),
      (n.ref = e.ref),
      n
    );
  }
  function Ni(e, t, n, r, o, i) {
    var l = 2;
    if (((r = e), typeof e == "function")) bu(e) && (l = 1);
    else if (typeof e == "string") l = 5;
    else
      e: switch (e) {
        case fr:
          return Wn(n.children, o, i, t);
        case Ya:
          (l = 8), (o |= 8);
          break;
        case Ds:
          return (
            (e = Pt(12, n, t, o | 2)), (e.elementType = Ds), (e.lanes = i), e
          );
        case Ws:
          return (e = Pt(13, n, t, o)), (e.elementType = Ws), (e.lanes = i), e;
        case Us:
          return (e = Pt(19, n, t, o)), (e.elementType = Us), (e.lanes = i), e;
        case gf:
          return Ml(n, o, i, t);
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case mf:
                l = 10;
                break e;
              case hf:
                l = 9;
                break e;
              case Xa:
                l = 11;
                break e;
              case qa:
                l = 14;
                break e;
              case cn:
                (l = 16), (r = null);
                break e;
            }
          throw Error(b(130, e == null ? e : typeof e, ""));
      }
    return (
      (t = Pt(l, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = i), t
    );
  }
  function Wn(e, t, n, r) {
    return (e = Pt(7, e, r, t)), (e.lanes = n), e;
  }
  function Ml(e, t, n, r) {
    return (
      (e = Pt(22, e, r, t)),
      (e.elementType = gf),
      (e.lanes = n),
      (e.stateNode = { isHidden: !1 }),
      e
    );
  }
  function _s(e, t, n) {
    return (e = Pt(6, e, null, t)), (e.lanes = n), e;
  }
  function bs(e, t, n) {
    return (
      (t = Pt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = n),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  function z0(e, t, n, r, o) {
    (this.tag = t),
      (this.containerInfo = e),
      (this.finishedWork =
        this.pingCache =
        this.current =
        this.pendingChildren =
          null),
      (this.timeoutHandle = -1),
      (this.callbackNode = this.pendingContext = this.context = null),
      (this.callbackPriority = 0),
      (this.eventTimes = ds(0)),
      (this.expirationTimes = ds(-1)),
      (this.entangledLanes =
        this.finishedLanes =
        this.mutableReadLanes =
        this.expiredLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = ds(0)),
      (this.identifierPrefix = r),
      (this.onRecoverableError = o),
      (this.mutableSourceEagerHydrationData = null);
  }
  function Iu(e, t, n, r, o, i, l, s, a) {
    return (
      (e = new z0(e, t, n, s, a)),
      t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
      (i = Pt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null,
      }),
      hu(i),
      e
    );
  }
  function L0(e, t, n) {
    var r =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: dr,
      key: r == null ? null : "" + r,
      children: e,
      containerInfo: t,
      implementation: n,
    };
  }
  function sm(e) {
    if (!e) return Pn;
    e = e._reactInternals;
    e: {
      if (qn(e) !== e || e.tag !== 1) throw Error(b(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (st(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(b(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (st(n)) return sp(e, n, t);
    }
    return t;
  }
  function am(e, t, n, r, o, i, l, s, a) {
    return (
      (e = Iu(n, r, !0, e, o, i, l, s, a)),
      (e.context = sm(null)),
      (n = e.current),
      (r = Ze()),
      (o = Cn(n)),
      (i = tn(r, o)),
      (i.callback = t ?? null),
      wn(n, i, o),
      (e.current.lanes = o),
      Vo(e, o, r),
      at(e, r),
      e
    );
  }
  function Rl(e, t, n, r) {
    var o = t.current,
      i = Ze(),
      l = Cn(o);
    return (
      (n = sm(n)),
      t.context === null ? (t.context = n) : (t.pendingContext = n),
      (t = tn(i, l)),
      (t.payload = { element: e }),
      (r = r === void 0 ? null : r),
      r !== null && (t.callback = r),
      (e = wn(o, t, l)),
      e !== null && (zt(e, o, l, i), Ri(e, o, l)),
      l
    );
  }
  function cl(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function md(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Ou(e, t) {
    md(e, t), (e = e.alternate) && md(e, t);
  }
  function j0() {
    return null;
  }
  var um =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          console.error(e);
        };
  function Au(e) {
    this._internalRoot = e;
  }
  _l.prototype.render = Au.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(b(409));
    Rl(e, t, null, null);
  };
  _l.prototype.unmount = Au.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Kn(function () {
        Rl(null, e, null, null);
      }),
        (t[rn] = null);
    }
  };
  function _l(e) {
    this._internalRoot = e;
  }
  _l.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Ff();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < fn.length && t !== 0 && t < fn[n].priority; n++);
      fn.splice(n, 0, e), n === 0 && Wf(e);
    }
  };
  function Nu(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function bl(e) {
    return !(
      !e ||
      (e.nodeType !== 1 &&
        e.nodeType !== 9 &&
        e.nodeType !== 11 &&
        (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
  }
  function hd() {}
  function B0(e, t, n, r, o) {
    if (o) {
      if (typeof r == "function") {
        var i = r;
        r = function () {
          var u = cl(l);
          i.call(u);
        };
      }
      var l = am(t, r, e, 0, null, !1, !1, "", hd);
      return (
        (e._reactRootContainer = l),
        (e[rn] = l.current),
        Ro(e.nodeType === 8 ? e.parentNode : e),
        Kn(),
        l
      );
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var u = cl(a);
        s.call(u);
      };
    }
    var a = Iu(e, 0, !1, null, null, !1, !1, "", hd);
    return (
      (e._reactRootContainer = a),
      (e[rn] = a.current),
      Ro(e.nodeType === 8 ? e.parentNode : e),
      Kn(function () {
        Rl(t, a, n, r);
      }),
      a
    );
  }
  function Il(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
      var l = i;
      if (typeof o == "function") {
        var s = o;
        o = function () {
          var a = cl(l);
          s.call(a);
        };
      }
      Rl(t, l, e, o);
    } else l = B0(n, t, e, o, r);
    return cl(l);
  }
  jf = function (e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = lo(t.pendingLanes);
          n !== 0 &&
            (eu(t, n | 1), at(t, Pe()), !(q & 6) && ((Lr = Pe() + 500), bn()));
        }
        break;
      case 13:
        Kn(function () {
          var r = on(e, 1);
          if (r !== null) {
            var o = Ze();
            zt(r, e, 1, o);
          }
        }),
          Ou(e, 1);
    }
  };
  tu = function (e) {
    if (e.tag === 13) {
      var t = on(e, 134217728);
      if (t !== null) {
        var n = Ze();
        zt(t, e, 134217728, n);
      }
      Ou(e, 134217728);
    }
  };
  Bf = function (e) {
    if (e.tag === 13) {
      var t = Cn(e),
        n = on(e, t);
      if (n !== null) {
        var r = Ze();
        zt(n, e, t, r);
      }
      Ou(e, t);
    }
  };
  Ff = function () {
    return ie;
  };
  Df = function (e, t) {
    var n = ie;
    try {
      return (ie = e), t();
    } finally {
      ie = n;
    }
  };
  Js = function (e, t, n) {
    switch (t) {
      case "input":
        if ((Gs(e, n), (t = n.name), n.type === "radio" && t != null)) {
          for (n = e; n.parentNode; ) n = n.parentNode;
          for (
            n = n.querySelectorAll(
              "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
            ),
              t = 0;
            t < n.length;
            t++
          ) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var o = Cl(r);
              if (!o) throw Error(b(90));
              vf(r), Gs(r, o);
            }
          }
        }
        break;
      case "textarea":
        wf(e, n);
        break;
      case "select":
        (t = n.value), t != null && kr(e, !!n.multiple, t, !1);
    }
  };
  $f = Mu;
  Mf = Kn;
  var F0 = { usingClientEntryPoint: !1, Events: [Go, gr, Cl, Tf, Pf, Mu] },
    to = {
      findFiberByHostInstance: zn,
      bundleType: 0,
      version: "18.3.1",
      rendererPackageName: "react-dom",
    },
    D0 = {
      bundleType: to.bundleType,
      version: to.version,
      rendererPackageName: to.rendererPackageName,
      rendererConfig: to.rendererConfig,
      overrideHookState: null,
      overrideHookStateDeletePath: null,
      overrideHookStateRenamePath: null,
      overrideProps: null,
      overridePropsDeletePath: null,
      overridePropsRenamePath: null,
      setErrorHandler: null,
      setSuspenseHandler: null,
      scheduleUpdate: null,
      currentDispatcherRef: sn.ReactCurrentDispatcher,
      findHostInstanceByFiber: function (e) {
        return (e = bf(e)), e === null ? null : e.stateNode;
      },
      findFiberByHostInstance: to.findFiberByHostInstance || j0,
      findHostInstancesForRefresh: null,
      scheduleRefresh: null,
      scheduleRoot: null,
      setRefreshHandler: null,
      getCurrentFiber: null,
      reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var hi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!hi.isDisabled && hi.supportsFiber)
      try {
        (vl = hi.inject(D0)), (Kt = hi);
      } catch {}
  }
  St.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = F0;
  St.createPortal = function (e, t) {
    var n =
      2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Nu(t)) throw Error(b(200));
    return L0(e, t, null, n);
  };
  St.createRoot = function (e, t) {
    if (!Nu(e)) throw Error(b(299));
    var n = !1,
      r = "",
      o = um;
    return (
      t != null &&
        (t.unstable_strictMode === !0 && (n = !0),
        t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
        t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
      (t = Iu(e, 1, !1, null, null, n, !1, r, o)),
      (e[rn] = t.current),
      Ro(e.nodeType === 8 ? e.parentNode : e),
      new Au(t)
    );
  };
  St.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(b(188))
        : ((e = Object.keys(e).join(",")), Error(b(268, e)));
    return (e = bf(t)), (e = e === null ? null : e.stateNode), e;
  };
  St.flushSync = function (e) {
    return Kn(e);
  };
  St.hydrate = function (e, t, n) {
    if (!bl(t)) throw Error(b(200));
    return Il(null, e, t, !0, n);
  };
  St.hydrateRoot = function (e, t, n) {
    if (!Nu(e)) throw Error(b(405));
    var r = (n != null && n.hydratedSources) || null,
      o = !1,
      i = "",
      l = um;
    if (
      (n != null &&
        (n.unstable_strictMode === !0 && (o = !0),
        n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
        n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
      (t = am(t, null, e, 1, n ?? null, o, !1, i, l)),
      (e[rn] = t.current),
      Ro(e),
      r)
    )
      for (e = 0; e < r.length; e++)
        (n = r[e]),
          (o = n._getVersion),
          (o = o(n._source)),
          t.mutableSourceEagerHydrationData == null
            ? (t.mutableSourceEagerHydrationData = [n, o])
            : t.mutableSourceEagerHydrationData.push(n, o);
    return new _l(t);
  };
  St.render = function (e, t, n) {
    if (!bl(t)) throw Error(b(200));
    return Il(null, e, t, !1, n);
  };
  St.unmountComponentAtNode = function (e) {
    if (!bl(e)) throw Error(b(40));
    return e._reactRootContainer
      ? (Kn(function () {
          Il(null, null, e, !1, function () {
            (e._reactRootContainer = null), (e[rn] = null);
          });
        }),
        !0)
      : !1;
  };
  St.unstable_batchedUpdates = Mu;
  St.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!bl(n)) throw Error(b(200));
    if (e == null || e._reactInternals === void 0) throw Error(b(38));
    return Il(e, t, n, !1, r);
  };
  St.version = "18.3.1-next-f1338f8080-20240426";
  function cm() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(cm);
      } catch (e) {
        console.error(e);
      }
  }
  cm(), (cf.exports = St);
  var W0 = cf.exports,
    dm,
    gd = W0;
  (dm = gd.createRoot), gd.hydrateRoot;
  const jo = { black: "#000", white: "#fff" },
    or = {
      50: "#ffebee",
      100: "#ffcdd2",
      200: "#ef9a9a",
      300: "#e57373",
      400: "#ef5350",
      500: "#f44336",
      600: "#e53935",
      700: "#d32f2f",
      800: "#c62828",
      900: "#b71c1c",
      A100: "#ff8a80",
      A200: "#ff5252",
      A400: "#ff1744",
      A700: "#d50000",
    },
    ir = {
      50: "#f3e5f5",
      100: "#e1bee7",
      200: "#ce93d8",
      300: "#ba68c8",
      400: "#ab47bc",
      500: "#9c27b0",
      600: "#8e24aa",
      700: "#7b1fa2",
      800: "#6a1b9a",
      900: "#4a148c",
      A100: "#ea80fc",
      A200: "#e040fb",
      A400: "#d500f9",
      A700: "#aa00ff",
    },
    lr = {
      50: "#e3f2fd",
      100: "#bbdefb",
      200: "#90caf9",
      300: "#64b5f6",
      400: "#42a5f5",
      500: "#2196f3",
      600: "#1e88e5",
      700: "#1976d2",
      800: "#1565c0",
      900: "#0d47a1",
      A100: "#82b1ff",
      A200: "#448aff",
      A400: "#2979ff",
      A700: "#2962ff",
    },
    sr = {
      50: "#e1f5fe",
      100: "#b3e5fc",
      200: "#81d4fa",
      300: "#4fc3f7",
      400: "#29b6f6",
      500: "#03a9f4",
      600: "#039be5",
      700: "#0288d1",
      800: "#0277bd",
      900: "#01579b",
      A100: "#80d8ff",
      A200: "#40c4ff",
      A400: "#00b0ff",
      A700: "#0091ea",
    },
    ar = {
      50: "#e8f5e9",
      100: "#c8e6c9",
      200: "#a5d6a7",
      300: "#81c784",
      400: "#66bb6a",
      500: "#4caf50",
      600: "#43a047",
      700: "#388e3c",
      800: "#2e7d32",
      900: "#1b5e20",
      A100: "#b9f6ca",
      A200: "#69f0ae",
      A400: "#00e676",
      A700: "#00c853",
    },
    no = {
      50: "#fff3e0",
      100: "#ffe0b2",
      200: "#ffcc80",
      300: "#ffb74d",
      400: "#ffa726",
      500: "#ff9800",
      600: "#fb8c00",
      700: "#f57c00",
      800: "#ef6c00",
      900: "#e65100",
      A100: "#ffd180",
      A200: "#ffab40",
      A400: "#ff9100",
      A700: "#ff6d00",
    },
    U0 = {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
      A100: "#f5f5f5",
      A200: "#eeeeee",
      A400: "#bdbdbd",
      A700: "#616161",
    };
  function Qn(e) {
    let t = "https://mui.com/production-error/?code=" + e;
    for (let n = 1; n < arguments.length; n += 1)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
      "Minified MUI error #" + e + "; visit " + t + " for the full message."
    );
  }
  const Lt = "$$material";
  function dl() {
    return (
      (dl = Object.assign
        ? Object.assign.bind()
        : function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }),
      dl.apply(null, arguments)
    );
  }
  function fm(e) {
    var t = Object.create(null);
    return function (n) {
      return t[n] === void 0 && (t[n] = e(n)), t[n];
    };
  }
  var V0 =
      /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
    H0 = fm(function (e) {
      return (
        V0.test(e) ||
        (e.charCodeAt(0) === 111 &&
          e.charCodeAt(1) === 110 &&
          e.charCodeAt(2) < 91)
      );
    }),
    G0 = !1;
  function K0(e) {
    if (e.sheet) return e.sheet;
    for (var t = 0; t < document.styleSheets.length; t++)
      if (document.styleSheets[t].ownerNode === e)
        return document.styleSheets[t];
  }
  function Q0(e) {
    var t = document.createElement("style");
    return (
      t.setAttribute("data-emotion", e.key),
      e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
      t.appendChild(document.createTextNode("")),
      t.setAttribute("data-s", ""),
      t
    );
  }
  var Y0 = (function () {
      function e(n) {
        var r = this;
        (this._insertTag = function (o) {
          var i;
          r.tags.length === 0
            ? r.insertionPoint
              ? (i = r.insertionPoint.nextSibling)
              : r.prepend
              ? (i = r.container.firstChild)
              : (i = r.before)
            : (i = r.tags[r.tags.length - 1].nextSibling),
            r.container.insertBefore(o, i),
            r.tags.push(o);
        }),
          (this.isSpeedy = n.speedy === void 0 ? !G0 : n.speedy),
          (this.tags = []),
          (this.ctr = 0),
          (this.nonce = n.nonce),
          (this.key = n.key),
          (this.container = n.container),
          (this.prepend = n.prepend),
          (this.insertionPoint = n.insertionPoint),
          (this.before = null);
      }
      var t = e.prototype;
      return (
        (t.hydrate = function (r) {
          r.forEach(this._insertTag);
        }),
        (t.insert = function (r) {
          this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
            this._insertTag(Q0(this));
          var o = this.tags[this.tags.length - 1];
          if (this.isSpeedy) {
            var i = K0(o);
            try {
              i.insertRule(r, i.cssRules.length);
            } catch {}
          } else o.appendChild(document.createTextNode(r));
          this.ctr++;
        }),
        (t.flush = function () {
          this.tags.forEach(function (r) {
            var o;
            return (o = r.parentNode) == null ? void 0 : o.removeChild(r);
          }),
            (this.tags = []),
            (this.ctr = 0);
        }),
        e
      );
    })(),
    Ke = "-ms-",
    fl = "-moz-",
    ee = "-webkit-",
    pm = "comm",
    zu = "rule",
    Lu = "decl",
    X0 = "@import",
    mm = "@keyframes",
    q0 = "@layer",
    Z0 = Math.abs,
    Ol = String.fromCharCode,
    J0 = Object.assign;
  function ey(e, t) {
    return Be(e, 0) ^ 45
      ? (((((((t << 2) ^ Be(e, 0)) << 2) ^ Be(e, 1)) << 2) ^ Be(e, 2)) << 2) ^
          Be(e, 3)
      : 0;
  }
  function hm(e) {
    return e.trim();
  }
  function ty(e, t) {
    return (e = t.exec(e)) ? e[0] : e;
  }
  function te(e, t, n) {
    return e.replace(t, n);
  }
  function Ia(e, t) {
    return e.indexOf(t);
  }
  function Be(e, t) {
    return e.charCodeAt(t) | 0;
  }
  function Bo(e, t, n) {
    return e.slice(t, n);
  }
  function Ut(e) {
    return e.length;
  }
  function ju(e) {
    return e.length;
  }
  function gi(e, t) {
    return t.push(e), e;
  }
  function ny(e, t) {
    return e.map(t).join("");
  }
  var Al = 1,
    jr = 1,
    gm = 0,
    ut = 0,
    Re = 0,
    Ur = "";
  function Nl(e, t, n, r, o, i, l) {
    return {
      value: e,
      root: t,
      parent: n,
      type: r,
      props: o,
      children: i,
      line: Al,
      column: jr,
      length: l,
      return: "",
    };
  }
  function ro(e, t) {
    return J0(
      Nl("", null, null, "", null, null, 0),
      e,
      { length: -e.length },
      t
    );
  }
  function ry() {
    return Re;
  }
  function oy() {
    return (
      (Re = ut > 0 ? Be(Ur, --ut) : 0), jr--, Re === 10 && ((jr = 1), Al--), Re
    );
  }
  function yt() {
    return (
      (Re = ut < gm ? Be(Ur, ut++) : 0), jr++, Re === 10 && ((jr = 1), Al++), Re
    );
  }
  function Yt() {
    return Be(Ur, ut);
  }
  function zi() {
    return ut;
  }
  function Qo(e, t) {
    return Bo(Ur, e, t);
  }
  function Fo(e) {
    switch (e) {
      case 0:
      case 9:
      case 10:
      case 13:
      case 32:
        return 5;
      case 33:
      case 43:
      case 44:
      case 47:
      case 62:
      case 64:
      case 126:
      case 59:
      case 123:
      case 125:
        return 4;
      case 58:
        return 3;
      case 34:
      case 39:
      case 40:
      case 91:
        return 2;
      case 41:
      case 93:
        return 1;
    }
    return 0;
  }
  function ym(e) {
    return (Al = jr = 1), (gm = Ut((Ur = e))), (ut = 0), [];
  }
  function vm(e) {
    return (Ur = ""), e;
  }
  function Li(e) {
    return hm(Qo(ut - 1, Oa(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
  }
  function iy(e) {
    for (; (Re = Yt()) && Re < 33; ) yt();
    return Fo(e) > 2 || Fo(Re) > 3 ? "" : " ";
  }
  function ly(e, t) {
    for (
      ;
      --t &&
      yt() &&
      !(Re < 48 || Re > 102 || (Re > 57 && Re < 65) || (Re > 70 && Re < 97));

    );
    return Qo(e, zi() + (t < 6 && Yt() == 32 && yt() == 32));
  }
  function Oa(e) {
    for (; yt(); )
      switch (Re) {
        case e:
          return ut;
        case 34:
        case 39:
          e !== 34 && e !== 39 && Oa(Re);
          break;
        case 40:
          e === 41 && Oa(e);
          break;
        case 92:
          yt();
          break;
      }
    return ut;
  }
  function sy(e, t) {
    for (; yt() && e + Re !== 57; ) if (e + Re === 84 && Yt() === 47) break;
    return "/*" + Qo(t, ut - 1) + "*" + Ol(e === 47 ? e : yt());
  }
  function ay(e) {
    for (; !Fo(Yt()); ) yt();
    return Qo(e, ut);
  }
  function uy(e) {
    return vm(ji("", null, null, null, [""], (e = ym(e)), 0, [0], e));
  }
  function ji(e, t, n, r, o, i, l, s, a) {
    for (
      var u = 0,
        f = 0,
        p = l,
        m = 0,
        w = 0,
        v = 0,
        S = 1,
        P = 1,
        g = 1,
        h = 0,
        c = "",
        x = o,
        k = i,
        E = r,
        T = c;
      P;

    )
      switch (((v = h), (h = yt()))) {
        case 40:
          if (v != 108 && Be(T, p - 1) == 58) {
            Ia((T += te(Li(h), "&", "&\f")), "&\f") != -1 && (g = -1);
            break;
          }
        case 34:
        case 39:
        case 91:
          T += Li(h);
          break;
        case 9:
        case 10:
        case 13:
        case 32:
          T += iy(v);
          break;
        case 92:
          T += ly(zi() - 1, 7);
          continue;
        case 47:
          switch (Yt()) {
            case 42:
            case 47:
              gi(cy(sy(yt(), zi()), t, n), a);
              break;
            default:
              T += "/";
          }
          break;
        case 123 * S:
          s[u++] = Ut(T) * g;
        case 125 * S:
        case 59:
        case 0:
          switch (h) {
            case 0:
            case 125:
              P = 0;
            case 59 + f:
              g == -1 && (T = te(T, /\f/g, "")),
                w > 0 &&
                  Ut(T) - p &&
                  gi(
                    w > 32
                      ? vd(T + ";", r, n, p - 1)
                      : vd(te(T, " ", "") + ";", r, n, p - 2),
                    a
                  );
              break;
            case 59:
              T += ";";
            default:
              if (
                (gi((E = yd(T, t, n, u, f, o, s, c, (x = []), (k = []), p)), i),
                h === 123)
              )
                if (f === 0) ji(T, t, E, E, x, i, p, s, k);
                else
                  switch (m === 99 && Be(T, 3) === 110 ? 100 : m) {
                    case 100:
                    case 108:
                    case 109:
                    case 115:
                      ji(
                        e,
                        E,
                        E,
                        r && gi(yd(e, E, E, 0, 0, o, s, c, o, (x = []), p), k),
                        o,
                        k,
                        p,
                        s,
                        r ? x : k
                      );
                      break;
                    default:
                      ji(T, E, E, E, [""], k, 0, s, k);
                  }
          }
          (u = f = w = 0), (S = g = 1), (c = T = ""), (p = l);
          break;
        case 58:
          (p = 1 + Ut(T)), (w = v);
        default:
          if (S < 1) {
            if (h == 123) --S;
            else if (h == 125 && S++ == 0 && oy() == 125) continue;
          }
          switch (((T += Ol(h)), h * S)) {
            case 38:
              g = f > 0 ? 1 : ((T += "\f"), -1);
              break;
            case 44:
              (s[u++] = (Ut(T) - 1) * g), (g = 1);
              break;
            case 64:
              Yt() === 45 && (T += Li(yt())),
                (m = Yt()),
                (f = p = Ut((c = T += ay(zi())))),
                h++;
              break;
            case 45:
              v === 45 && Ut(T) == 2 && (S = 0);
          }
      }
    return i;
  }
  function yd(e, t, n, r, o, i, l, s, a, u, f) {
    for (
      var p = o - 1, m = o === 0 ? i : [""], w = ju(m), v = 0, S = 0, P = 0;
      v < r;
      ++v
    )
      for (var g = 0, h = Bo(e, p + 1, (p = Z0((S = l[v])))), c = e; g < w; ++g)
        (c = hm(S > 0 ? m[g] + " " + h : te(h, /&\f/g, m[g]))) && (a[P++] = c);
    return Nl(e, t, n, o === 0 ? zu : s, a, u, f);
  }
  function cy(e, t, n) {
    return Nl(e, t, n, pm, Ol(ry()), Bo(e, 2, -2), 0);
  }
  function vd(e, t, n, r) {
    return Nl(e, t, n, Lu, Bo(e, 0, r), Bo(e, r + 1, -1), r);
  }
  function Rr(e, t) {
    for (var n = "", r = ju(e), o = 0; o < r; o++) n += t(e[o], o, e, t) || "";
    return n;
  }
  function dy(e, t, n, r) {
    switch (e.type) {
      case q0:
        if (e.children.length) break;
      case X0:
      case Lu:
        return (e.return = e.return || e.value);
      case pm:
        return "";
      case mm:
        return (e.return = e.value + "{" + Rr(e.children, r) + "}");
      case zu:
        e.value = e.props.join(",");
    }
    return Ut((n = Rr(e.children, r)))
      ? (e.return = e.value + "{" + n + "}")
      : "";
  }
  function fy(e) {
    var t = ju(e);
    return function (n, r, o, i) {
      for (var l = "", s = 0; s < t; s++) l += e[s](n, r, o, i) || "";
      return l;
    };
  }
  function py(e) {
    return function (t) {
      t.root || ((t = t.return) && e(t));
    };
  }
  var my = function (t, n, r) {
      for (
        var o = 0, i = 0;
        (o = i), (i = Yt()), o === 38 && i === 12 && (n[r] = 1), !Fo(i);

      )
        yt();
      return Qo(t, ut);
    },
    hy = function (t, n) {
      var r = -1,
        o = 44;
      do
        switch (Fo(o)) {
          case 0:
            o === 38 && Yt() === 12 && (n[r] = 1), (t[r] += my(ut - 1, n, r));
            break;
          case 2:
            t[r] += Li(o);
            break;
          case 4:
            if (o === 44) {
              (t[++r] = Yt() === 58 ? "&\f" : ""), (n[r] = t[r].length);
              break;
            }
          default:
            t[r] += Ol(o);
        }
      while ((o = yt()));
      return t;
    },
    gy = function (t, n) {
      return vm(hy(ym(t), n));
    },
    Sd = new WeakMap(),
    yy = function (t) {
      if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
        for (
          var n = t.value,
            r = t.parent,
            o = t.column === r.column && t.line === r.line;
          r.type !== "rule";

        )
          if (((r = r.parent), !r)) return;
        if (
          !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !Sd.get(r)) &&
          !o
        ) {
          Sd.set(t, !0);
          for (
            var i = [], l = gy(n, i), s = r.props, a = 0, u = 0;
            a < l.length;
            a++
          )
            for (var f = 0; f < s.length; f++, u++)
              t.props[u] = i[a]
                ? l[a].replace(/&\f/g, s[f])
                : s[f] + " " + l[a];
        }
      }
    },
    vy = function (t) {
      if (t.type === "decl") {
        var n = t.value;
        n.charCodeAt(0) === 108 &&
          n.charCodeAt(2) === 98 &&
          ((t.return = ""), (t.value = ""));
      }
    };
  function Sm(e, t) {
    switch (ey(e, t)) {
      case 5103:
        return ee + "print-" + e + e;
      case 5737:
      case 4201:
      case 3177:
      case 3433:
      case 1641:
      case 4457:
      case 2921:
      case 5572:
      case 6356:
      case 5844:
      case 3191:
      case 6645:
      case 3005:
      case 6391:
      case 5879:
      case 5623:
      case 6135:
      case 4599:
      case 4855:
      case 4215:
      case 6389:
      case 5109:
      case 5365:
      case 5621:
      case 3829:
        return ee + e + e;
      case 5349:
      case 4246:
      case 4810:
      case 6968:
      case 2756:
        return ee + e + fl + e + Ke + e + e;
      case 6828:
      case 4268:
        return ee + e + Ke + e + e;
      case 6165:
        return ee + e + Ke + "flex-" + e + e;
      case 5187:
        return (
          ee +
          e +
          te(e, /(\w+).+(:[^]+)/, ee + "box-$1$2" + Ke + "flex-$1$2") +
          e
        );
      case 5443:
        return ee + e + Ke + "flex-item-" + te(e, /flex-|-self/, "") + e;
      case 4675:
        return (
          ee +
          e +
          Ke +
          "flex-line-pack" +
          te(e, /align-content|flex-|-self/, "") +
          e
        );
      case 5548:
        return ee + e + Ke + te(e, "shrink", "negative") + e;
      case 5292:
        return ee + e + Ke + te(e, "basis", "preferred-size") + e;
      case 6060:
        return (
          ee +
          "box-" +
          te(e, "-grow", "") +
          ee +
          e +
          Ke +
          te(e, "grow", "positive") +
          e
        );
      case 4554:
        return ee + te(e, /([^-])(transform)/g, "$1" + ee + "$2") + e;
      case 6187:
        return (
          te(
            te(te(e, /(zoom-|grab)/, ee + "$1"), /(image-set)/, ee + "$1"),
            e,
            ""
          ) + e
        );
      case 5495:
      case 3959:
        return te(e, /(image-set\([^]*)/, ee + "$1$`$1");
      case 4968:
        return (
          te(
            te(
              e,
              /(.+:)(flex-)?(.*)/,
              ee + "box-pack:$3" + Ke + "flex-pack:$3"
            ),
            /s.+-b[^;]+/,
            "justify"
          ) +
          ee +
          e +
          e
        );
      case 4095:
      case 3583:
      case 4068:
      case 2532:
        return te(e, /(.+)-inline(.+)/, ee + "$1$2") + e;
      case 8116:
      case 7059:
      case 5753:
      case 5535:
      case 5445:
      case 5701:
      case 4933:
      case 4677:
      case 5533:
      case 5789:
      case 5021:
      case 4765:
        if (Ut(e) - 1 - t > 6)
          switch (Be(e, t + 1)) {
            case 109:
              if (Be(e, t + 4) !== 45) break;
            case 102:
              return (
                te(
                  e,
                  /(.+:)(.+)-([^]+)/,
                  "$1" +
                    ee +
                    "$2-$3$1" +
                    fl +
                    (Be(e, t + 3) == 108 ? "$3" : "$2-$3")
                ) + e
              );
            case 115:
              return ~Ia(e, "stretch")
                ? Sm(te(e, "stretch", "fill-available"), t) + e
                : e;
          }
        break;
      case 4949:
        if (Be(e, t + 1) !== 115) break;
      case 6444:
        switch (Be(e, Ut(e) - 3 - (~Ia(e, "!important") && 10))) {
          case 107:
            return te(e, ":", ":" + ee) + e;
          case 101:
            return (
              te(
                e,
                /(.+:)([^;!]+)(;|!.+)?/,
                "$1" +
                  ee +
                  (Be(e, 14) === 45 ? "inline-" : "") +
                  "box$3$1" +
                  ee +
                  "$2$3$1" +
                  Ke +
                  "$2box$3"
              ) + e
            );
        }
        break;
      case 5936:
        switch (Be(e, t + 11)) {
          case 114:
            return ee + e + Ke + te(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
          case 108:
            return ee + e + Ke + te(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
          case 45:
            return ee + e + Ke + te(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
        }
        return ee + e + Ke + e + e;
    }
    return e;
  }
  var Sy = function (t, n, r, o) {
      if (t.length > -1 && !t.return)
        switch (t.type) {
          case Lu:
            t.return = Sm(t.value, t.length);
            break;
          case mm:
            return Rr([ro(t, { value: te(t.value, "@", "@" + ee) })], o);
          case zu:
            if (t.length)
              return ny(t.props, function (i) {
                switch (ty(i, /(::plac\w+|:read-\w+)/)) {
                  case ":read-only":
                  case ":read-write":
                    return Rr(
                      [
                        ro(t, {
                          props: [te(i, /:(read-\w+)/, ":" + fl + "$1")],
                        }),
                      ],
                      o
                    );
                  case "::placeholder":
                    return Rr(
                      [
                        ro(t, {
                          props: [te(i, /:(plac\w+)/, ":" + ee + "input-$1")],
                        }),
                        ro(t, {
                          props: [te(i, /:(plac\w+)/, ":" + fl + "$1")],
                        }),
                        ro(t, {
                          props: [te(i, /:(plac\w+)/, Ke + "input-$1")],
                        }),
                      ],
                      o
                    );
                }
                return "";
              });
        }
    },
    wy = [Sy],
    xy = function (t) {
      var n = t.key;
      if (n === "css") {
        var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
        Array.prototype.forEach.call(r, function (S) {
          var P = S.getAttribute("data-emotion");
          P.indexOf(" ") !== -1 &&
            (document.head.appendChild(S), S.setAttribute("data-s", ""));
        });
      }
      var o = t.stylisPlugins || wy,
        i = {},
        l,
        s = [];
      (l = t.container || document.head),
        Array.prototype.forEach.call(
          document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
          function (S) {
            for (
              var P = S.getAttribute("data-emotion").split(" "), g = 1;
              g < P.length;
              g++
            )
              i[P[g]] = !0;
            s.push(S);
          }
        );
      var a,
        u = [yy, vy];
      {
        var f,
          p = [
            dy,
            py(function (S) {
              f.insert(S);
            }),
          ],
          m = fy(u.concat(o, p)),
          w = function (P) {
            return Rr(uy(P), m);
          };
        a = function (P, g, h, c) {
          (f = h),
            w(P ? P + "{" + g.styles + "}" : g.styles),
            c && (v.inserted[g.name] = !0);
        };
      }
      var v = {
        key: n,
        sheet: new Y0({
          key: n,
          container: l,
          nonce: t.nonce,
          speedy: t.speedy,
          prepend: t.prepend,
          insertionPoint: t.insertionPoint,
        }),
        nonce: t.nonce,
        inserted: i,
        registered: {},
        insert: a,
      };
      return v.sheet.hydrate(s), v;
    },
    wm = { exports: {} },
    le = {};
  /** @license React v16.13.1
   * react-is.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Le = typeof Symbol == "function" && Symbol.for,
    Bu = Le ? Symbol.for("react.element") : 60103,
    Fu = Le ? Symbol.for("react.portal") : 60106,
    zl = Le ? Symbol.for("react.fragment") : 60107,
    Ll = Le ? Symbol.for("react.strict_mode") : 60108,
    jl = Le ? Symbol.for("react.profiler") : 60114,
    Bl = Le ? Symbol.for("react.provider") : 60109,
    Fl = Le ? Symbol.for("react.context") : 60110,
    Du = Le ? Symbol.for("react.async_mode") : 60111,
    Dl = Le ? Symbol.for("react.concurrent_mode") : 60111,
    Wl = Le ? Symbol.for("react.forward_ref") : 60112,
    Ul = Le ? Symbol.for("react.suspense") : 60113,
    Cy = Le ? Symbol.for("react.suspense_list") : 60120,
    Vl = Le ? Symbol.for("react.memo") : 60115,
    Hl = Le ? Symbol.for("react.lazy") : 60116,
    ky = Le ? Symbol.for("react.block") : 60121,
    Ey = Le ? Symbol.for("react.fundamental") : 60117,
    Ty = Le ? Symbol.for("react.responder") : 60118,
    Py = Le ? Symbol.for("react.scope") : 60119;
  function xt(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Bu:
          switch (((e = e.type), e)) {
            case Du:
            case Dl:
            case zl:
            case jl:
            case Ll:
            case Ul:
              return e;
            default:
              switch (((e = e && e.$$typeof), e)) {
                case Fl:
                case Wl:
                case Hl:
                case Vl:
                case Bl:
                  return e;
                default:
                  return t;
              }
          }
        case Fu:
          return t;
      }
    }
  }
  function xm(e) {
    return xt(e) === Dl;
  }
  le.AsyncMode = Du;
  le.ConcurrentMode = Dl;
  le.ContextConsumer = Fl;
  le.ContextProvider = Bl;
  le.Element = Bu;
  le.ForwardRef = Wl;
  le.Fragment = zl;
  le.Lazy = Hl;
  le.Memo = Vl;
  le.Portal = Fu;
  le.Profiler = jl;
  le.StrictMode = Ll;
  le.Suspense = Ul;
  le.isAsyncMode = function (e) {
    return xm(e) || xt(e) === Du;
  };
  le.isConcurrentMode = xm;
  le.isContextConsumer = function (e) {
    return xt(e) === Fl;
  };
  le.isContextProvider = function (e) {
    return xt(e) === Bl;
  };
  le.isElement = function (e) {
    return typeof e == "object" && e !== null && e.$$typeof === Bu;
  };
  le.isForwardRef = function (e) {
    return xt(e) === Wl;
  };
  le.isFragment = function (e) {
    return xt(e) === zl;
  };
  le.isLazy = function (e) {
    return xt(e) === Hl;
  };
  le.isMemo = function (e) {
    return xt(e) === Vl;
  };
  le.isPortal = function (e) {
    return xt(e) === Fu;
  };
  le.isProfiler = function (e) {
    return xt(e) === jl;
  };
  le.isStrictMode = function (e) {
    return xt(e) === Ll;
  };
  le.isSuspense = function (e) {
    return xt(e) === Ul;
  };
  le.isValidElementType = function (e) {
    return (
      typeof e == "string" ||
      typeof e == "function" ||
      e === zl ||
      e === Dl ||
      e === jl ||
      e === Ll ||
      e === Ul ||
      e === Cy ||
      (typeof e == "object" &&
        e !== null &&
        (e.$$typeof === Hl ||
          e.$$typeof === Vl ||
          e.$$typeof === Bl ||
          e.$$typeof === Fl ||
          e.$$typeof === Wl ||
          e.$$typeof === Ey ||
          e.$$typeof === Ty ||
          e.$$typeof === Py ||
          e.$$typeof === ky))
    );
  };
  le.typeOf = xt;
  wm.exports = le;
  var $y = wm.exports,
    Cm = $y,
    My = {
      $$typeof: !0,
      render: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
    },
    Ry = {
      $$typeof: !0,
      compare: !0,
      defaultProps: !0,
      displayName: !0,
      propTypes: !0,
      type: !0,
    },
    km = {};
  km[Cm.ForwardRef] = My;
  km[Cm.Memo] = Ry;
  var _y = !0;
  function by(e, t, n) {
    var r = "";
    return (
      n.split(" ").forEach(function (o) {
        e[o] !== void 0 ? t.push(e[o] + ";") : (r += o + " ");
      }),
      r
    );
  }
  var Em = function (t, n, r) {
      var o = t.key + "-" + n.name;
      (r === !1 || _y === !1) &&
        t.registered[o] === void 0 &&
        (t.registered[o] = n.styles);
    },
    Tm = function (t, n, r) {
      Em(t, n, r);
      var o = t.key + "-" + n.name;
      if (t.inserted[n.name] === void 0) {
        var i = n;
        do t.insert(n === i ? "." + o : "", i, t.sheet, !0), (i = i.next);
        while (i !== void 0);
      }
    };
  function Iy(e) {
    for (var t = 0, n, r = 0, o = e.length; o >= 4; ++r, o -= 4)
      (n =
        (e.charCodeAt(r) & 255) |
        ((e.charCodeAt(++r) & 255) << 8) |
        ((e.charCodeAt(++r) & 255) << 16) |
        ((e.charCodeAt(++r) & 255) << 24)),
        (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
        (n ^= n >>> 24),
        (t =
          ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
          ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
    switch (o) {
      case 3:
        t ^= (e.charCodeAt(r + 2) & 255) << 16;
      case 2:
        t ^= (e.charCodeAt(r + 1) & 255) << 8;
      case 1:
        (t ^= e.charCodeAt(r) & 255),
          (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
    }
    return (
      (t ^= t >>> 13),
      (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
      ((t ^ (t >>> 15)) >>> 0).toString(36)
    );
  }
  var Oy = {
      animationIterationCount: 1,
      aspectRatio: 1,
      borderImageOutset: 1,
      borderImageSlice: 1,
      borderImageWidth: 1,
      boxFlex: 1,
      boxFlexGroup: 1,
      boxOrdinalGroup: 1,
      columnCount: 1,
      columns: 1,
      flex: 1,
      flexGrow: 1,
      flexPositive: 1,
      flexShrink: 1,
      flexNegative: 1,
      flexOrder: 1,
      gridRow: 1,
      gridRowEnd: 1,
      gridRowSpan: 1,
      gridRowStart: 1,
      gridColumn: 1,
      gridColumnEnd: 1,
      gridColumnSpan: 1,
      gridColumnStart: 1,
      msGridRow: 1,
      msGridRowSpan: 1,
      msGridColumn: 1,
      msGridColumnSpan: 1,
      fontWeight: 1,
      lineHeight: 1,
      opacity: 1,
      order: 1,
      orphans: 1,
      scale: 1,
      tabSize: 1,
      widows: 1,
      zIndex: 1,
      zoom: 1,
      WebkitLineClamp: 1,
      fillOpacity: 1,
      floodOpacity: 1,
      stopOpacity: 1,
      strokeDasharray: 1,
      strokeDashoffset: 1,
      strokeMiterlimit: 1,
      strokeOpacity: 1,
      strokeWidth: 1,
    },
    Ay = !1,
    Ny = /[A-Z]|^ms/g,
    zy = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
    Pm = function (t) {
      return t.charCodeAt(1) === 45;
    },
    wd = function (t) {
      return t != null && typeof t != "boolean";
    },
    Is = fm(function (e) {
      return Pm(e) ? e : e.replace(Ny, "-$&").toLowerCase();
    }),
    xd = function (t, n) {
      switch (t) {
        case "animation":
        case "animationName":
          if (typeof n == "string")
            return n.replace(zy, function (r, o, i) {
              return (Vt = { name: o, styles: i, next: Vt }), o;
            });
      }
      return Oy[t] !== 1 && !Pm(t) && typeof n == "number" && n !== 0
        ? n + "px"
        : n;
    },
    Ly =
      "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
  function Do(e, t, n) {
    if (n == null) return "";
    var r = n;
    if (r.__emotion_styles !== void 0) return r;
    switch (typeof n) {
      case "boolean":
        return "";
      case "object": {
        var o = n;
        if (o.anim === 1)
          return (Vt = { name: o.name, styles: o.styles, next: Vt }), o.name;
        var i = n;
        if (i.styles !== void 0) {
          var l = i.next;
          if (l !== void 0)
            for (; l !== void 0; )
              (Vt = { name: l.name, styles: l.styles, next: Vt }), (l = l.next);
          var s = i.styles + ";";
          return s;
        }
        return jy(e, t, n);
      }
      case "function": {
        if (e !== void 0) {
          var a = Vt,
            u = n(e);
          return (Vt = a), Do(e, t, u);
        }
        break;
      }
    }
    var f = n;
    if (t == null) return f;
    var p = t[f];
    return p !== void 0 ? p : f;
  }
  function jy(e, t, n) {
    var r = "";
    if (Array.isArray(n))
      for (var o = 0; o < n.length; o++) r += Do(e, t, n[o]) + ";";
    else
      for (var i in n) {
        var l = n[i];
        if (typeof l != "object") {
          var s = l;
          t != null && t[s] !== void 0
            ? (r += i + "{" + t[s] + "}")
            : wd(s) && (r += Is(i) + ":" + xd(i, s) + ";");
        } else {
          if (i === "NO_COMPONENT_SELECTOR" && Ay) throw new Error(Ly);
          if (
            Array.isArray(l) &&
            typeof l[0] == "string" &&
            (t == null || t[l[0]] === void 0)
          )
            for (var a = 0; a < l.length; a++)
              wd(l[a]) && (r += Is(i) + ":" + xd(i, l[a]) + ";");
          else {
            var u = Do(e, t, l);
            switch (i) {
              case "animation":
              case "animationName": {
                r += Is(i) + ":" + u + ";";
                break;
              }
              default:
                r += i + "{" + u + "}";
            }
          }
        }
      }
    return r;
  }
  var Cd = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
    Vt;
  function Wu(e, t, n) {
    if (
      e.length === 1 &&
      typeof e[0] == "object" &&
      e[0] !== null &&
      e[0].styles !== void 0
    )
      return e[0];
    var r = !0,
      o = "";
    Vt = void 0;
    var i = e[0];
    if (i == null || i.raw === void 0) (r = !1), (o += Do(n, t, i));
    else {
      var l = i;
      o += l[0];
    }
    for (var s = 1; s < e.length; s++)
      if (((o += Do(n, t, e[s])), r)) {
        var a = i;
        o += a[s];
      }
    Cd.lastIndex = 0;
    for (var u = "", f; (f = Cd.exec(o)) !== null; ) u += "-" + f[1];
    var p = Iy(o) + u;
    return { name: p, styles: o, next: Vt };
  }
  var By = function (t) {
      return t();
    },
    $m = cc.useInsertionEffect ? cc.useInsertionEffect : !1,
    Fy = $m || By,
    kd = $m || M.useLayoutEffect,
    Mm = M.createContext(typeof HTMLElement < "u" ? xy({ key: "css" }) : null);
  Mm.Provider;
  var Rm = function (t) {
      return M.forwardRef(function (n, r) {
        var o = M.useContext(Mm);
        return t(n, o, r);
      });
    },
    Gl = M.createContext({}),
    Dy = Rm(function (e, t) {
      var n = e.styles,
        r = Wu([n], void 0, M.useContext(Gl)),
        o = M.useRef();
      return (
        kd(
          function () {
            var i = t.key + "-global",
              l = new t.sheet.constructor({
                key: i,
                nonce: t.sheet.nonce,
                container: t.sheet.container,
                speedy: t.sheet.isSpeedy,
              }),
              s = !1,
              a = document.querySelector(
                'style[data-emotion="' + i + " " + r.name + '"]'
              );
            return (
              t.sheet.tags.length && (l.before = t.sheet.tags[0]),
              a !== null &&
                ((s = !0), a.setAttribute("data-emotion", i), l.hydrate([a])),
              (o.current = [l, s]),
              function () {
                l.flush();
              }
            );
          },
          [t]
        ),
        kd(
          function () {
            var i = o.current,
              l = i[0],
              s = i[1];
            if (s) {
              i[1] = !1;
              return;
            }
            if ((r.next !== void 0 && Tm(t, r.next, !0), l.tags.length)) {
              var a = l.tags[l.tags.length - 1].nextElementSibling;
              (l.before = a), l.flush();
            }
            t.insert("", r, l, !1);
          },
          [t, r.name]
        ),
        null
      );
    });
  function Wy() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return Wu(t);
  }
  var Uu = function () {
      var t = Wy.apply(void 0, arguments),
        n = "animation-" + t.name;
      return {
        name: n,
        styles: "@keyframes " + n + "{" + t.styles + "}",
        anim: 1,
        toString: function () {
          return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
        },
      };
    },
    Uy = H0,
    Vy = function (t) {
      return t !== "theme";
    },
    Ed = function (t) {
      return typeof t == "string" && t.charCodeAt(0) > 96 ? Uy : Vy;
    },
    Td = function (t, n, r) {
      var o;
      if (n) {
        var i = n.shouldForwardProp;
        o =
          t.__emotion_forwardProp && i
            ? function (l) {
                return t.__emotion_forwardProp(l) && i(l);
              }
            : i;
      }
      return typeof o != "function" && r && (o = t.__emotion_forwardProp), o;
    },
    Hy = !1,
    Gy = function (t) {
      var n = t.cache,
        r = t.serialized,
        o = t.isStringTag;
      return (
        Em(n, r, o),
        Fy(function () {
          return Tm(n, r, o);
        }),
        null
      );
    },
    Ky = function e(t, n) {
      var r = t.__emotion_real === t,
        o = (r && t.__emotion_base) || t,
        i,
        l;
      n !== void 0 && ((i = n.label), (l = n.target));
      var s = Td(t, n, r),
        a = s || Ed(o),
        u = !a("as");
      return function () {
        var f = arguments,
          p =
            r && t.__emotion_styles !== void 0
              ? t.__emotion_styles.slice(0)
              : [];
        if (
          (i !== void 0 && p.push("label:" + i + ";"),
          f[0] == null || f[0].raw === void 0)
        )
          p.push.apply(p, f);
        else {
          p.push(f[0][0]);
          for (var m = f.length, w = 1; w < m; w++) p.push(f[w], f[0][w]);
        }
        var v = Rm(function (S, P, g) {
          var h = (u && S.as) || o,
            c = "",
            x = [],
            k = S;
          if (S.theme == null) {
            k = {};
            for (var E in S) k[E] = S[E];
            k.theme = M.useContext(Gl);
          }
          typeof S.className == "string"
            ? (c = by(P.registered, x, S.className))
            : S.className != null && (c = S.className + " ");
          var T = Wu(p.concat(x), P.registered, k);
          (c += P.key + "-" + T.name), l !== void 0 && (c += " " + l);
          var _ = u && s === void 0 ? Ed(h) : a,
            d = {};
          for (var R in S) (u && R === "as") || (_(R) && (d[R] = S[R]));
          return (
            (d.className = c),
            g && (d.ref = g),
            M.createElement(
              M.Fragment,
              null,
              M.createElement(Gy, {
                cache: P,
                serialized: T,
                isStringTag: typeof h == "string",
              }),
              M.createElement(h, d)
            )
          );
        });
        return (
          (v.displayName =
            i !== void 0
              ? i
              : "Styled(" +
                (typeof o == "string"
                  ? o
                  : o.displayName || o.name || "Component") +
                ")"),
          (v.defaultProps = t.defaultProps),
          (v.__emotion_real = v),
          (v.__emotion_base = o),
          (v.__emotion_styles = p),
          (v.__emotion_forwardProp = s),
          Object.defineProperty(v, "toString", {
            value: function () {
              return l === void 0 && Hy ? "NO_COMPONENT_SELECTOR" : "." + l;
            },
          }),
          (v.withComponent = function (S, P) {
            return e(
              S,
              dl({}, n, P, { shouldForwardProp: Td(v, P, !0) })
            ).apply(void 0, p);
          }),
          v
        );
      };
    },
    Qy = [
      "a",
      "abbr",
      "address",
      "area",
      "article",
      "aside",
      "audio",
      "b",
      "base",
      "bdi",
      "bdo",
      "big",
      "blockquote",
      "body",
      "br",
      "button",
      "canvas",
      "caption",
      "cite",
      "code",
      "col",
      "colgroup",
      "data",
      "datalist",
      "dd",
      "del",
      "details",
      "dfn",
      "dialog",
      "div",
      "dl",
      "dt",
      "em",
      "embed",
      "fieldset",
      "figcaption",
      "figure",
      "footer",
      "form",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "head",
      "header",
      "hgroup",
      "hr",
      "html",
      "i",
      "iframe",
      "img",
      "input",
      "ins",
      "kbd",
      "keygen",
      "label",
      "legend",
      "li",
      "link",
      "main",
      "map",
      "mark",
      "marquee",
      "menu",
      "menuitem",
      "meta",
      "meter",
      "nav",
      "noscript",
      "object",
      "ol",
      "optgroup",
      "option",
      "output",
      "p",
      "param",
      "picture",
      "pre",
      "progress",
      "q",
      "rp",
      "rt",
      "ruby",
      "s",
      "samp",
      "script",
      "section",
      "select",
      "small",
      "source",
      "span",
      "strong",
      "style",
      "sub",
      "summary",
      "sup",
      "table",
      "tbody",
      "td",
      "textarea",
      "tfoot",
      "th",
      "thead",
      "time",
      "title",
      "tr",
      "track",
      "u",
      "ul",
      "var",
      "video",
      "wbr",
      "circle",
      "clipPath",
      "defs",
      "ellipse",
      "foreignObject",
      "g",
      "image",
      "line",
      "linearGradient",
      "mask",
      "path",
      "pattern",
      "polygon",
      "polyline",
      "radialGradient",
      "rect",
      "stop",
      "svg",
      "text",
      "tspan",
    ],
    Aa = Ky.bind();
  Qy.forEach(function (e) {
    Aa[e] = Aa(e);
  });
  function Yy(e) {
    return e == null || Object.keys(e).length === 0;
  }
  function _m(e) {
    const { styles: t, defaultTheme: n = {} } = e,
      r = typeof t == "function" ? (o) => t(Yy(o) ? n : o) : t;
    return I.jsx(Dy, { styles: r });
  }
  /**
   * @mui/styled-engine v6.0.2
   *
   * @license MIT
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ function bm(e, t) {
    return Aa(e, t);
  }
  const Xy = (e, t) => {
    Array.isArray(e.__emotion_styles) &&
      (e.__emotion_styles = t(e.__emotion_styles));
  };
  function Gt(e) {
    if (typeof e != "object" || e === null) return !1;
    const t = Object.getPrototypeOf(e);
    return (
      (t === null ||
        t === Object.prototype ||
        Object.getPrototypeOf(t) === null) &&
      !(Symbol.toStringTag in e) &&
      !(Symbol.iterator in e)
    );
  }
  function Im(e) {
    if (!Gt(e)) return e;
    const t = {};
    return (
      Object.keys(e).forEach((n) => {
        t[n] = Im(e[n]);
      }),
      t
    );
  }
  function Je(e, t, n = { clone: !0 }) {
    const r = n.clone ? { ...e } : e;
    return (
      Gt(e) &&
        Gt(t) &&
        Object.keys(t).forEach((o) => {
          Gt(t[o]) && Object.prototype.hasOwnProperty.call(e, o) && Gt(e[o])
            ? (r[o] = Je(e[o], t[o], n))
            : n.clone
            ? (r[o] = Gt(t[o]) ? Im(t[o]) : t[o])
            : (r[o] = t[o]);
        }),
      r
    );
  }
  const qy = (e) => {
    const t = Object.keys(e).map((n) => ({ key: n, val: e[n] })) || [];
    return (
      t.sort((n, r) => n.val - r.val),
      t.reduce((n, r) => ({ ...n, [r.key]: r.val }), {})
    );
  };
  function Zy(e) {
    const {
        values: t = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
        unit: n = "px",
        step: r = 5,
        ...o
      } = e,
      i = qy(t),
      l = Object.keys(i);
    function s(m) {
      return `@media (min-width:${typeof t[m] == "number" ? t[m] : m}${n})`;
    }
    function a(m) {
      return `@media (max-width:${
        (typeof t[m] == "number" ? t[m] : m) - r / 100
      }${n})`;
    }
    function u(m, w) {
      const v = l.indexOf(w);
      return `@media (min-width:${
        typeof t[m] == "number" ? t[m] : m
      }${n}) and (max-width:${
        (v !== -1 && typeof t[l[v]] == "number" ? t[l[v]] : w) - r / 100
      }${n})`;
    }
    function f(m) {
      return l.indexOf(m) + 1 < l.length ? u(m, l[l.indexOf(m) + 1]) : s(m);
    }
    function p(m) {
      const w = l.indexOf(m);
      return w === 0
        ? s(l[1])
        : w === l.length - 1
        ? a(l[w])
        : u(m, l[l.indexOf(m) + 1]).replace("@media", "@media not all and");
    }
    return {
      keys: l,
      values: i,
      up: s,
      down: a,
      between: u,
      only: f,
      not: p,
      unit: n,
      ...o,
    };
  }
  function Jy(e, t) {
    if (!e.containerQueries) return t;
    const n = Object.keys(t)
      .filter((r) => r.startsWith("@container"))
      .sort((r, o) => {
        var l, s;
        const i = /min-width:\s*([0-9.]+)/;
        return (
          +(((l = r.match(i)) == null ? void 0 : l[1]) || 0) -
          +(((s = o.match(i)) == null ? void 0 : s[1]) || 0)
        );
      });
    return n.length
      ? n.reduce(
          (r, o) => {
            const i = t[o];
            return delete r[o], (r[o] = i), r;
          },
          { ...t }
        )
      : t;
  }
  function ev(e, t) {
    return (
      t === "@" ||
      (t.startsWith("@") &&
        (e.some((n) => t.startsWith(`@${n}`)) || !!t.match(/^@\d/)))
    );
  }
  function tv(e, t) {
    const n = t.match(/^@([^/]+)?\/?(.+)?$/);
    if (!n) return null;
    const [, r, o] = n,
      i = Number.isNaN(+r) ? r || 0 : +r;
    return e.containerQueries(o).up(i);
  }
  function nv(e) {
    const t = (i, l) =>
      i.replace("@media", l ? `@container ${l}` : "@container");
    function n(i, l) {
      (i.up = (...s) => t(e.breakpoints.up(...s), l)),
        (i.down = (...s) => t(e.breakpoints.down(...s), l)),
        (i.between = (...s) => t(e.breakpoints.between(...s), l)),
        (i.only = (...s) => t(e.breakpoints.only(...s), l)),
        (i.not = (...s) => {
          const a = t(e.breakpoints.not(...s), l);
          return a.includes("not all and")
            ? a
                .replace("not all and ", "")
                .replace("min-width:", "width<")
                .replace("max-width:", "width>")
                .replace("and", "or")
            : a;
        });
    }
    const r = {},
      o = (i) => (n(r, i), r);
    return n(o), { ...e, containerQueries: o };
  }
  const rv = { borderRadius: 4 };
  function wo(e, t) {
    return t ? Je(e, t, { clone: !1 }) : e;
  }
  const Kl = { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 },
    Pd = {
      keys: ["xs", "sm", "md", "lg", "xl"],
      up: (e) => `@media (min-width:${Kl[e]}px)`,
    },
    ov = {
      containerQueries: (e) => ({
        up: (t) => {
          let n = typeof t == "number" ? t : Kl[t] || t;
          return (
            typeof n == "number" && (n = `${n}px`),
            e
              ? `@container ${e} (min-width:${n})`
              : `@container (min-width:${n})`
          );
        },
      }),
    };
  function Bt(e, t, n) {
    const r = e.theme || {};
    if (Array.isArray(t)) {
      const i = r.breakpoints || Pd;
      return t.reduce((l, s, a) => ((l[i.up(i.keys[a])] = n(t[a])), l), {});
    }
    if (typeof t == "object") {
      const i = r.breakpoints || Pd;
      return Object.keys(t).reduce((l, s) => {
        if (ev(i.keys, s)) {
          const a = tv(r.containerQueries ? r : ov, s);
          a && (l[a] = n(t[s], s));
        } else if (Object.keys(i.values || Kl).includes(s)) {
          const a = i.up(s);
          l[a] = n(t[s], s);
        } else {
          const a = s;
          l[a] = t[a];
        }
        return l;
      }, {});
    }
    return n(t);
  }
  function Om(e = {}) {
    var n;
    return (
      ((n = e.keys) == null
        ? void 0
        : n.reduce((r, o) => {
            const i = e.up(o);
            return (r[i] = {}), r;
          }, {})) || {}
    );
  }
  function Am(e, t) {
    return e.reduce((n, r) => {
      const o = n[r];
      return (!o || Object.keys(o).length === 0) && delete n[r], n;
    }, t);
  }
  function iv(e, ...t) {
    const n = Om(e),
      r = [n, ...t].reduce((o, i) => Je(o, i), {});
    return Am(Object.keys(n), r);
  }
  function lv(e, t) {
    if (typeof e != "object") return {};
    const n = {},
      r = Object.keys(t);
    return (
      Array.isArray(e)
        ? r.forEach((o, i) => {
            i < e.length && (n[o] = !0);
          })
        : r.forEach((o) => {
            e[o] != null && (n[o] = !0);
          }),
      n
    );
  }
  function Os({ values: e, breakpoints: t, base: n }) {
    const r = n || lv(e, t),
      o = Object.keys(r);
    if (o.length === 0) return e;
    let i;
    return o.reduce(
      (l, s, a) => (
        Array.isArray(e)
          ? ((l[s] = e[a] != null ? e[a] : e[i]), (i = a))
          : typeof e == "object"
          ? ((l[s] = e[s] != null ? e[s] : e[i]), (i = s))
          : (l[s] = e),
        l
      ),
      {}
    );
  }
  function oe(e) {
    if (typeof e != "string") throw new Error(Qn(7));
    return e.charAt(0).toUpperCase() + e.slice(1);
  }
  function Ql(e, t, n = !0) {
    if (!t || typeof t != "string") return null;
    if (e && e.vars && n) {
      const r = `vars.${t}`
        .split(".")
        .reduce((o, i) => (o && o[i] ? o[i] : null), e);
      if (r != null) return r;
    }
    return t.split(".").reduce((r, o) => (r && r[o] != null ? r[o] : null), e);
  }
  function pl(e, t, n, r = n) {
    let o;
    return (
      typeof e == "function"
        ? (o = e(n))
        : Array.isArray(e)
        ? (o = e[n] || r)
        : (o = Ql(e, n) || r),
      t && (o = t(o, r, e)),
      o
    );
  }
  function $e(e) {
    const { prop: t, cssProperty: n = e.prop, themeKey: r, transform: o } = e,
      i = (l) => {
        if (l[t] == null) return null;
        const s = l[t],
          a = l.theme,
          u = Ql(a, r) || {};
        return Bt(l, s, (p) => {
          let m = pl(u, o, p);
          return (
            p === m &&
              typeof p == "string" &&
              (m = pl(u, o, `${t}${p === "default" ? "" : oe(p)}`, p)),
            n === !1 ? m : { [n]: m }
          );
        });
      };
    return (i.propTypes = {}), (i.filterProps = [t]), i;
  }
  function sv(e) {
    const t = {};
    return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
  }
  const av = { m: "margin", p: "padding" },
    uv = {
      t: "Top",
      r: "Right",
      b: "Bottom",
      l: "Left",
      x: ["Left", "Right"],
      y: ["Top", "Bottom"],
    },
    $d = { marginX: "mx", marginY: "my", paddingX: "px", paddingY: "py" },
    cv = sv((e) => {
      if (e.length > 2)
        if ($d[e]) e = $d[e];
        else return [e];
      const [t, n] = e.split(""),
        r = av[t],
        o = uv[n] || "";
      return Array.isArray(o) ? o.map((i) => r + i) : [r + o];
    }),
    Vu = [
      "m",
      "mt",
      "mr",
      "mb",
      "ml",
      "mx",
      "my",
      "margin",
      "marginTop",
      "marginRight",
      "marginBottom",
      "marginLeft",
      "marginX",
      "marginY",
      "marginInline",
      "marginInlineStart",
      "marginInlineEnd",
      "marginBlock",
      "marginBlockStart",
      "marginBlockEnd",
    ],
    Hu = [
      "p",
      "pt",
      "pr",
      "pb",
      "pl",
      "px",
      "py",
      "padding",
      "paddingTop",
      "paddingRight",
      "paddingBottom",
      "paddingLeft",
      "paddingX",
      "paddingY",
      "paddingInline",
      "paddingInlineStart",
      "paddingInlineEnd",
      "paddingBlock",
      "paddingBlockStart",
      "paddingBlockEnd",
    ];
  [...Vu, ...Hu];
  function Yo(e, t, n, r) {
    const o = Ql(e, t, !0) ?? n;
    return typeof o == "number" || typeof o == "string"
      ? (i) =>
          typeof i == "string"
            ? i
            : typeof o == "string"
            ? `calc(${i} * ${o})`
            : o * i
      : Array.isArray(o)
      ? (i) => {
          if (typeof i == "string") return i;
          const l = Math.abs(i),
            s = o[l];
          return i >= 0 ? s : typeof s == "number" ? -s : `-${s}`;
        }
      : typeof o == "function"
      ? o
      : () => {};
  }
  function Yl(e) {
    return Yo(e, "spacing", 8);
  }
  function Yn(e, t) {
    return typeof t == "string" || t == null ? t : e(t);
  }
  function dv(e, t) {
    return (n) => e.reduce((r, o) => ((r[o] = Yn(t, n)), r), {});
  }
  function fv(e, t, n, r) {
    if (!t.includes(n)) return null;
    const o = cv(n),
      i = dv(o, r),
      l = e[n];
    return Bt(e, l, i);
  }
  function Nm(e, t) {
    const n = Yl(e.theme);
    return Object.keys(e)
      .map((r) => fv(e, t, r, n))
      .reduce(wo, {});
  }
  function ke(e) {
    return Nm(e, Vu);
  }
  ke.propTypes = {};
  ke.filterProps = Vu;
  function Ee(e) {
    return Nm(e, Hu);
  }
  Ee.propTypes = {};
  Ee.filterProps = Hu;
  function zm(e = 8, t = Yl({ spacing: e })) {
    if (e.mui) return e;
    const n = (...r) =>
      (r.length === 0 ? [1] : r)
        .map((i) => {
          const l = t(i);
          return typeof l == "number" ? `${l}px` : l;
        })
        .join(" ");
    return (n.mui = !0), n;
  }
  function Xl(...e) {
    const t = e.reduce(
        (r, o) => (
          o.filterProps.forEach((i) => {
            r[i] = o;
          }),
          r
        ),
        {}
      ),
      n = (r) =>
        Object.keys(r).reduce((o, i) => (t[i] ? wo(o, t[i](r)) : o), {});
    return (
      (n.propTypes = {}),
      (n.filterProps = e.reduce((r, o) => r.concat(o.filterProps), [])),
      n
    );
  }
  function Tt(e) {
    return typeof e != "number" ? e : `${e}px solid`;
  }
  function _t(e, t) {
    return $e({ prop: e, themeKey: "borders", transform: t });
  }
  const pv = _t("border", Tt),
    mv = _t("borderTop", Tt),
    hv = _t("borderRight", Tt),
    gv = _t("borderBottom", Tt),
    yv = _t("borderLeft", Tt),
    vv = _t("borderColor"),
    Sv = _t("borderTopColor"),
    wv = _t("borderRightColor"),
    xv = _t("borderBottomColor"),
    Cv = _t("borderLeftColor"),
    kv = _t("outline", Tt),
    Ev = _t("outlineColor"),
    ql = (e) => {
      if (e.borderRadius !== void 0 && e.borderRadius !== null) {
        const t = Yo(e.theme, "shape.borderRadius", 4),
          n = (r) => ({ borderRadius: Yn(t, r) });
        return Bt(e, e.borderRadius, n);
      }
      return null;
    };
  ql.propTypes = {};
  ql.filterProps = ["borderRadius"];
  Xl(pv, mv, hv, gv, yv, vv, Sv, wv, xv, Cv, ql, kv, Ev);
  const Zl = (e) => {
    if (e.gap !== void 0 && e.gap !== null) {
      const t = Yo(e.theme, "spacing", 8),
        n = (r) => ({ gap: Yn(t, r) });
      return Bt(e, e.gap, n);
    }
    return null;
  };
  Zl.propTypes = {};
  Zl.filterProps = ["gap"];
  const Jl = (e) => {
    if (e.columnGap !== void 0 && e.columnGap !== null) {
      const t = Yo(e.theme, "spacing", 8),
        n = (r) => ({ columnGap: Yn(t, r) });
      return Bt(e, e.columnGap, n);
    }
    return null;
  };
  Jl.propTypes = {};
  Jl.filterProps = ["columnGap"];
  const es = (e) => {
    if (e.rowGap !== void 0 && e.rowGap !== null) {
      const t = Yo(e.theme, "spacing", 8),
        n = (r) => ({ rowGap: Yn(t, r) });
      return Bt(e, e.rowGap, n);
    }
    return null;
  };
  es.propTypes = {};
  es.filterProps = ["rowGap"];
  const Tv = $e({ prop: "gridColumn" }),
    Pv = $e({ prop: "gridRow" }),
    $v = $e({ prop: "gridAutoFlow" }),
    Mv = $e({ prop: "gridAutoColumns" }),
    Rv = $e({ prop: "gridAutoRows" }),
    _v = $e({ prop: "gridTemplateColumns" }),
    bv = $e({ prop: "gridTemplateRows" }),
    Iv = $e({ prop: "gridTemplateAreas" }),
    Ov = $e({ prop: "gridArea" });
  Xl(Zl, Jl, es, Tv, Pv, $v, Mv, Rv, _v, bv, Iv, Ov);
  function _r(e, t) {
    return t === "grey" ? t : e;
  }
  const Av = $e({ prop: "color", themeKey: "palette", transform: _r }),
    Nv = $e({
      prop: "bgcolor",
      cssProperty: "backgroundColor",
      themeKey: "palette",
      transform: _r,
    }),
    zv = $e({ prop: "backgroundColor", themeKey: "palette", transform: _r });
  Xl(Av, Nv, zv);
  function mt(e) {
    return e <= 1 && e !== 0 ? `${e * 100}%` : e;
  }
  const Lv = $e({ prop: "width", transform: mt }),
    Gu = (e) => {
      if (e.maxWidth !== void 0 && e.maxWidth !== null) {
        const t = (n) => {
          var o, i, l, s, a;
          const r =
            ((l =
              (i = (o = e.theme) == null ? void 0 : o.breakpoints) == null
                ? void 0
                : i.values) == null
              ? void 0
              : l[n]) || Kl[n];
          return r
            ? ((a = (s = e.theme) == null ? void 0 : s.breakpoints) == null
                ? void 0
                : a.unit) !== "px"
              ? { maxWidth: `${r}${e.theme.breakpoints.unit}` }
              : { maxWidth: r }
            : { maxWidth: mt(n) };
        };
        return Bt(e, e.maxWidth, t);
      }
      return null;
    };
  Gu.filterProps = ["maxWidth"];
  const jv = $e({ prop: "minWidth", transform: mt }),
    Bv = $e({ prop: "height", transform: mt }),
    Fv = $e({ prop: "maxHeight", transform: mt }),
    Dv = $e({ prop: "minHeight", transform: mt });
  $e({ prop: "size", cssProperty: "width", transform: mt });
  $e({ prop: "size", cssProperty: "height", transform: mt });
  const Wv = $e({ prop: "boxSizing" });
  Xl(Lv, Gu, jv, Bv, Fv, Dv, Wv);
  const Xo = {
    border: { themeKey: "borders", transform: Tt },
    borderTop: { themeKey: "borders", transform: Tt },
    borderRight: { themeKey: "borders", transform: Tt },
    borderBottom: { themeKey: "borders", transform: Tt },
    borderLeft: { themeKey: "borders", transform: Tt },
    borderColor: { themeKey: "palette" },
    borderTopColor: { themeKey: "palette" },
    borderRightColor: { themeKey: "palette" },
    borderBottomColor: { themeKey: "palette" },
    borderLeftColor: { themeKey: "palette" },
    outline: { themeKey: "borders", transform: Tt },
    outlineColor: { themeKey: "palette" },
    borderRadius: { themeKey: "shape.borderRadius", style: ql },
    color: { themeKey: "palette", transform: _r },
    bgcolor: {
      themeKey: "palette",
      cssProperty: "backgroundColor",
      transform: _r,
    },
    backgroundColor: { themeKey: "palette", transform: _r },
    p: { style: Ee },
    pt: { style: Ee },
    pr: { style: Ee },
    pb: { style: Ee },
    pl: { style: Ee },
    px: { style: Ee },
    py: { style: Ee },
    padding: { style: Ee },
    paddingTop: { style: Ee },
    paddingRight: { style: Ee },
    paddingBottom: { style: Ee },
    paddingLeft: { style: Ee },
    paddingX: { style: Ee },
    paddingY: { style: Ee },
    paddingInline: { style: Ee },
    paddingInlineStart: { style: Ee },
    paddingInlineEnd: { style: Ee },
    paddingBlock: { style: Ee },
    paddingBlockStart: { style: Ee },
    paddingBlockEnd: { style: Ee },
    m: { style: ke },
    mt: { style: ke },
    mr: { style: ke },
    mb: { style: ke },
    ml: { style: ke },
    mx: { style: ke },
    my: { style: ke },
    margin: { style: ke },
    marginTop: { style: ke },
    marginRight: { style: ke },
    marginBottom: { style: ke },
    marginLeft: { style: ke },
    marginX: { style: ke },
    marginY: { style: ke },
    marginInline: { style: ke },
    marginInlineStart: { style: ke },
    marginInlineEnd: { style: ke },
    marginBlock: { style: ke },
    marginBlockStart: { style: ke },
    marginBlockEnd: { style: ke },
    displayPrint: {
      cssProperty: !1,
      transform: (e) => ({ "@media print": { display: e } }),
    },
    display: {},
    overflow: {},
    textOverflow: {},
    visibility: {},
    whiteSpace: {},
    flexBasis: {},
    flexDirection: {},
    flexWrap: {},
    justifyContent: {},
    alignItems: {},
    alignContent: {},
    order: {},
    flex: {},
    flexGrow: {},
    flexShrink: {},
    alignSelf: {},
    justifyItems: {},
    justifySelf: {},
    gap: { style: Zl },
    rowGap: { style: es },
    columnGap: { style: Jl },
    gridColumn: {},
    gridRow: {},
    gridAutoFlow: {},
    gridAutoColumns: {},
    gridAutoRows: {},
    gridTemplateColumns: {},
    gridTemplateRows: {},
    gridTemplateAreas: {},
    gridArea: {},
    position: {},
    zIndex: { themeKey: "zIndex" },
    top: {},
    right: {},
    bottom: {},
    left: {},
    boxShadow: { themeKey: "shadows" },
    width: { transform: mt },
    maxWidth: { style: Gu },
    minWidth: { transform: mt },
    height: { transform: mt },
    maxHeight: { transform: mt },
    minHeight: { transform: mt },
    boxSizing: {},
    font: { themeKey: "font" },
    fontFamily: { themeKey: "typography" },
    fontSize: { themeKey: "typography" },
    fontStyle: { themeKey: "typography" },
    fontWeight: { themeKey: "typography" },
    letterSpacing: {},
    textTransform: {},
    lineHeight: {},
    textAlign: {},
    typography: { cssProperty: !1, themeKey: "typography" },
  };
  function Uv(...e) {
    const t = e.reduce((r, o) => r.concat(Object.keys(o)), []),
      n = new Set(t);
    return e.every((r) => n.size === Object.keys(r).length);
  }
  function Vv(e, t) {
    return typeof e == "function" ? e(t) : e;
  }
  function Hv() {
    function e(n, r, o, i) {
      const l = { [n]: r, theme: o },
        s = i[n];
      if (!s) return { [n]: r };
      const { cssProperty: a = n, themeKey: u, transform: f, style: p } = s;
      if (r == null) return null;
      if (u === "typography" && r === "inherit") return { [n]: r };
      const m = Ql(o, u) || {};
      return p
        ? p(l)
        : Bt(l, r, (v) => {
            let S = pl(m, f, v);
            return (
              v === S &&
                typeof v == "string" &&
                (S = pl(m, f, `${n}${v === "default" ? "" : oe(v)}`, v)),
              a === !1 ? S : { [a]: S }
            );
          });
    }
    function t(n) {
      const { sx: r, theme: o = {} } = n || {};
      if (!r) return null;
      const i = o.unstable_sxConfig ?? Xo;
      function l(s) {
        let a = s;
        if (typeof s == "function") a = s(o);
        else if (typeof s != "object") return s;
        if (!a) return null;
        const u = Om(o.breakpoints),
          f = Object.keys(u);
        let p = u;
        return (
          Object.keys(a).forEach((m) => {
            const w = Vv(a[m], o);
            if (w != null)
              if (typeof w == "object")
                if (i[m]) p = wo(p, e(m, w, o, i));
                else {
                  const v = Bt({ theme: o }, w, (S) => ({ [m]: S }));
                  Uv(v, w) ? (p[m] = t({ sx: w, theme: o })) : (p = wo(p, v));
                }
              else p = wo(p, e(m, w, o, i));
          }),
          Jy(o, Am(f, p))
        );
      }
      return Array.isArray(r) ? r.map(l) : l(r);
    }
    return t;
  }
  const Zn = Hv();
  Zn.filterProps = ["sx"];
  function Gv(e, t) {
    var r;
    const n = this;
    if (n.vars) {
      if (
        !((r = n.colorSchemes) != null && r[e]) ||
        typeof n.getColorSchemeSelector != "function"
      )
        return {};
      let o = n.getColorSchemeSelector(e);
      return (
        (o.includes("data-") || o.includes(".")) &&
          (o = `*:where(${o.replace(/\s*&$/, "")}) &`),
        { [o]: t }
      );
    }
    return n.palette.mode === e ? t : {};
  }
  function qo(e = {}, ...t) {
    const {
        breakpoints: n = {},
        palette: r = {},
        spacing: o,
        shape: i = {},
        ...l
      } = e,
      s = Zy(n),
      a = zm(o);
    let u = Je(
      {
        breakpoints: s,
        direction: "ltr",
        components: {},
        palette: { mode: "light", ...r },
        spacing: a,
        shape: { ...rv, ...i },
      },
      l
    );
    return (
      (u = nv(u)),
      (u.applyStyles = Gv),
      (u = t.reduce((f, p) => Je(f, p), u)),
      (u.unstable_sxConfig = {
        ...Xo,
        ...(l == null ? void 0 : l.unstable_sxConfig),
      }),
      (u.unstable_sx = function (p) {
        return Zn({ sx: p, theme: this });
      }),
      u
    );
  }
  function Kv(e) {
    return Object.keys(e).length === 0;
  }
  function Lm(e = null) {
    const t = M.useContext(Gl);
    return !t || Kv(t) ? e : t;
  }
  const Qv = qo();
  function ts(e = Qv) {
    return Lm(e);
  }
  function Yv({ styles: e, themeId: t, defaultTheme: n = {} }) {
    const r = ts(n),
      o = typeof e == "function" ? e((t && r[t]) || r) : e;
    return I.jsx(_m, { styles: o });
  }
  const Xv = (e) => {
    var r;
    const t = { systemProps: {}, otherProps: {} },
      n =
        ((r = e == null ? void 0 : e.theme) == null
          ? void 0
          : r.unstable_sxConfig) ?? Xo;
    return (
      Object.keys(e).forEach((o) => {
        n[o] ? (t.systemProps[o] = e[o]) : (t.otherProps[o] = e[o]);
      }),
      t
    );
  };
  function Ku(e) {
    const { sx: t, ...n } = e,
      { systemProps: r, otherProps: o } = Xv(n);
    let i;
    return (
      Array.isArray(t)
        ? (i = [r, ...t])
        : typeof t == "function"
        ? (i = (...l) => {
            const s = t(...l);
            return Gt(s) ? { ...r, ...s } : r;
          })
        : (i = { ...r, ...t }),
      { ...o, sx: i }
    );
  }
  const Md = (e) => e,
    qv = () => {
      let e = Md;
      return {
        configure(t) {
          e = t;
        },
        generate(t) {
          return e(t);
        },
        reset() {
          e = Md;
        },
      };
    },
    jm = qv();
  function Bm(e) {
    var t,
      n,
      r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
      if (Array.isArray(e)) {
        var o = e.length;
        for (t = 0; t < o; t++)
          e[t] && (n = Bm(e[t])) && (r && (r += " "), (r += n));
      } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
  }
  function de() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
      (e = arguments[n]) && (t = Bm(e)) && (r && (r += " "), (r += t));
    return r;
  }
  function Zv(e = {}) {
    const {
        themeId: t,
        defaultTheme: n,
        defaultClassName: r = "MuiBox-root",
        generateClassName: o,
      } = e,
      i = bm("div", {
        shouldForwardProp: (s) => s !== "theme" && s !== "sx" && s !== "as",
      })(Zn);
    return M.forwardRef(function (a, u) {
      const f = ts(n),
        { className: p, component: m = "div", ...w } = Ku(a);
      return I.jsx(i, {
        as: m,
        ref: u,
        className: de(p, o ? o(r) : r),
        theme: (t && f[t]) || f,
        ...w,
      });
    });
  }
  const Jv = {
    active: "active",
    checked: "checked",
    completed: "completed",
    disabled: "disabled",
    error: "error",
    expanded: "expanded",
    focused: "focused",
    focusVisible: "focusVisible",
    open: "open",
    readOnly: "readOnly",
    required: "required",
    selected: "selected",
  };
  function nt(e, t, n = "Mui") {
    const r = Jv[t];
    return r ? `${n}-${r}` : `${jm.generate(e)}-${t}`;
  }
  function ct(e, t, n = "Mui") {
    const r = {};
    return (
      t.forEach((o) => {
        r[o] = nt(e, o, n);
      }),
      r
    );
  }
  const e1 = qo();
  function As(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  }
  function Na(e, t, n) {
    return n1(t) ? n : t[e] || t;
  }
  const yi = Symbol("mui.processed_props");
  function vi(e, t, n) {
    if (yi in e) return e[yi];
    const r = { ...e, theme: Na(t, e.theme, n) };
    return (e[yi] = r), (r[yi] = r), r;
  }
  function t1(e) {
    return e ? (t, n) => n[e] : null;
  }
  function Bi(e, t) {
    var r;
    const n = typeof e == "function" ? e(t) : e;
    if (Array.isArray(n)) return n.flatMap((o) => Bi(o, t));
    if (Array.isArray(n == null ? void 0 : n.variants)) {
      const { variants: o, ...i } = n;
      let l = i,
        s;
      e: for (let a = 0; a < o.length; a += 1) {
        const u = o[a];
        if (typeof u.props == "function") {
          if (
            (s ?? (s = { ...t, ...t.ownerState, ownerState: t.ownerState }),
            !u.props(s))
          )
            continue;
        } else
          for (const f in u.props)
            if (
              t[f] !== u.props[f] &&
              ((r = t.ownerState) == null ? void 0 : r[f]) !== u.props[f]
            )
              continue e;
        Array.isArray(l) || (l = [l]),
          typeof u.style == "function"
            ? (s ?? (s = { ...t, ...t.ownerState, ownerState: t.ownerState }),
              l.push(u.style(s)))
            : l.push(u.style);
      }
      return l;
    }
    return n;
  }
  function Fm(e = {}) {
    const {
        themeId: t,
        defaultTheme: n = e1,
        rootShouldForwardProp: r = As,
        slotShouldForwardProp: o = As,
      } = e,
      i = (s) => Zn(vi(s, t, n));
    return (
      (i.__mui_systemSx = !0),
      (s, a = {}) => {
        Xy(s, (E) => E.filter((T) => !(T != null && T.__mui_systemSx)));
        const {
            name: u,
            slot: f,
            skipVariantsResolver: p,
            skipSx: m,
            overridesResolver: w = t1(o1(f)),
            ...v
          } = a,
          S = p !== void 0 ? p : (f && f !== "Root" && f !== "root") || !1,
          P = m || !1;
        let g,
          h = As;
        f === "Root" || f === "root"
          ? (h = r)
          : f
          ? (h = o)
          : r1(s) && (h = void 0);
        const c = bm(s, { shouldForwardProp: h, label: g, ...v }),
          x = (E) =>
            (typeof E == "function" && E.__emotion_real !== E) || Gt(E)
              ? (T) => Bi(E, vi(T, t, n))
              : E,
          k = (E, ...T) => {
            let _ = x(E);
            const d = T ? T.map(x) : [];
            u &&
              w &&
              d.push((F) => {
                const G = Na(t, F.theme, n);
                if (
                  !G.components ||
                  !G.components[u] ||
                  !G.components[u].styleOverrides
                )
                  return null;
                const Y = G.components[u].styleOverrides,
                  re = {},
                  X = vi(F, t, n);
                for (const We in Y) re[We] = Bi(Y[We], X);
                return w(F, re);
              }),
              u &&
                !S &&
                d.push((F) => {
                  var re, X;
                  const G = Na(t, F.theme, n),
                    Y =
                      (X =
                        (re = G == null ? void 0 : G.components) == null
                          ? void 0
                          : re[u]) == null
                        ? void 0
                        : X.variants;
                  return Y ? Bi({ variants: Y }, vi(F, t, n)) : null;
                }),
              P || d.push(i);
            const R = d.length - T.length;
            if (Array.isArray(E) && R > 0) {
              const F = new Array(R).fill("");
              (_ = [...E, ...F]), (_.raw = [...E.raw, ...F]);
            }
            const L = c(_, ...d);
            return s.muiName && (L.muiName = s.muiName), L;
          };
        return c.withConfig && (k.withConfig = c.withConfig), k;
      }
    );
  }
  function n1(e) {
    for (const t in e) return !1;
    return !0;
  }
  function r1(e) {
    return typeof e == "string" && e.charCodeAt(0) > 96;
  }
  function o1(e) {
    return e && e.charAt(0).toLowerCase() + e.slice(1);
  }
  const Dm = Fm();
  function Wo(e, t) {
    const n = { ...t };
    for (const r in e)
      if (Object.prototype.hasOwnProperty.call(e, r)) {
        const o = r;
        if (o === "components" || o === "slots") n[o] = { ...e[o], ...n[o] };
        else if (o === "componentsProps" || o === "slotProps") {
          const i = e[o],
            l = t[o];
          if (!l) n[o] = i || {};
          else if (!i) n[o] = l;
          else {
            n[o] = { ...l };
            for (const s in i)
              if (Object.prototype.hasOwnProperty.call(i, s)) {
                const a = s;
                n[o][a] = Wo(i[a], l[a]);
              }
          }
        } else n[o] === void 0 && (n[o] = e[o]);
      }
    return n;
  }
  function i1(e) {
    const { theme: t, name: n, props: r } = e;
    return !t ||
      !t.components ||
      !t.components[n] ||
      !t.components[n].defaultProps
      ? r
      : Wo(t.components[n].defaultProps, r);
  }
  function Qu({ props: e, name: t, defaultTheme: n, themeId: r }) {
    let o = ts(n);
    return r && (o = o[r] || o), i1({ theme: o, name: t, props: e });
  }
  const Wm = typeof window < "u" ? M.useLayoutEffect : M.useEffect;
  function l1(e, t = Number.MIN_SAFE_INTEGER, n = Number.MAX_SAFE_INTEGER) {
    return Math.max(t, Math.min(e, n));
  }
  function Yu(e, t = 0, n = 1) {
    return l1(e, t, n);
  }
  function s1(e) {
    e = e.slice(1);
    const t = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
    let n = e.match(t);
    return (
      n && n[0].length === 1 && (n = n.map((r) => r + r)),
      n
        ? `rgb${n.length === 4 ? "a" : ""}(${n
            .map((r, o) =>
              o < 3
                ? parseInt(r, 16)
                : Math.round((parseInt(r, 16) / 255) * 1e3) / 1e3
            )
            .join(", ")})`
        : ""
    );
  }
  function $n(e) {
    if (e.type) return e;
    if (e.charAt(0) === "#") return $n(s1(e));
    const t = e.indexOf("("),
      n = e.substring(0, t);
    if (!["rgb", "rgba", "hsl", "hsla", "color"].includes(n))
      throw new Error(Qn(9, e));
    let r = e.substring(t + 1, e.length - 1),
      o;
    if (n === "color") {
      if (
        ((r = r.split(" ")),
        (o = r.shift()),
        r.length === 4 && r[3].charAt(0) === "/" && (r[3] = r[3].slice(1)),
        !["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].includes(
          o
        ))
      )
        throw new Error(Qn(10, o));
    } else r = r.split(",");
    return (
      (r = r.map((i) => parseFloat(i))), { type: n, values: r, colorSpace: o }
    );
  }
  const a1 = (e) => {
      const t = $n(e);
      return t.values
        .slice(0, 3)
        .map((n, r) => (t.type.includes("hsl") && r !== 0 ? `${n}%` : n))
        .join(" ");
    },
    ao = (e, t) => {
      try {
        return a1(e);
      } catch {
        return e;
      }
    };
  function ns(e) {
    const { type: t, colorSpace: n } = e;
    let { values: r } = e;
    return (
      t.includes("rgb")
        ? (r = r.map((o, i) => (i < 3 ? parseInt(o, 10) : o)))
        : t.includes("hsl") && ((r[1] = `${r[1]}%`), (r[2] = `${r[2]}%`)),
      t.includes("color")
        ? (r = `${n} ${r.join(" ")}`)
        : (r = `${r.join(", ")}`),
      `${t}(${r})`
    );
  }
  function Um(e) {
    e = $n(e);
    const { values: t } = e,
      n = t[0],
      r = t[1] / 100,
      o = t[2] / 100,
      i = r * Math.min(o, 1 - o),
      l = (u, f = (u + n / 30) % 12) =>
        o - i * Math.max(Math.min(f - 3, 9 - f, 1), -1);
    let s = "rgb";
    const a = [
      Math.round(l(0) * 255),
      Math.round(l(8) * 255),
      Math.round(l(4) * 255),
    ];
    return (
      e.type === "hsla" && ((s += "a"), a.push(t[3])),
      ns({ type: s, values: a })
    );
  }
  function za(e) {
    e = $n(e);
    let t = e.type === "hsl" || e.type === "hsla" ? $n(Um(e)).values : e.values;
    return (
      (t = t.map(
        (n) => (
          e.type !== "color" && (n /= 255),
          n <= 0.03928 ? n / 12.92 : ((n + 0.055) / 1.055) ** 2.4
        )
      )),
      Number((0.2126 * t[0] + 0.7152 * t[1] + 0.0722 * t[2]).toFixed(3))
    );
  }
  function u1(e, t) {
    const n = za(e),
      r = za(t);
    return (Math.max(n, r) + 0.05) / (Math.min(n, r) + 0.05);
  }
  function ot(e, t) {
    return (
      (e = $n(e)),
      (t = Yu(t)),
      (e.type === "rgb" || e.type === "hsl") && (e.type += "a"),
      e.type === "color" ? (e.values[3] = `/${t}`) : (e.values[3] = t),
      ns(e)
    );
  }
  function Si(e, t, n) {
    try {
      return ot(e, t);
    } catch {
      return e;
    }
  }
  function Xu(e, t) {
    if (((e = $n(e)), (t = Yu(t)), e.type.includes("hsl")))
      e.values[2] *= 1 - t;
    else if (e.type.includes("rgb") || e.type.includes("color"))
      for (let n = 0; n < 3; n += 1) e.values[n] *= 1 - t;
    return ns(e);
  }
  function ue(e, t, n) {
    try {
      return Xu(e, t);
    } catch {
      return e;
    }
  }
  function qu(e, t) {
    if (((e = $n(e)), (t = Yu(t)), e.type.includes("hsl")))
      e.values[2] += (100 - e.values[2]) * t;
    else if (e.type.includes("rgb"))
      for (let n = 0; n < 3; n += 1) e.values[n] += (255 - e.values[n]) * t;
    else if (e.type.includes("color"))
      for (let n = 0; n < 3; n += 1) e.values[n] += (1 - e.values[n]) * t;
    return ns(e);
  }
  function ce(e, t, n) {
    try {
      return qu(e, t);
    } catch {
      return e;
    }
  }
  function c1(e, t = 0.15) {
    return za(e) > 0.5 ? Xu(e, t) : qu(e, t);
  }
  function wi(e, t, n) {
    try {
      return c1(e, t);
    } catch {
      return e;
    }
  }
  function d1(e, t) {
    var n, r, o;
    return (
      M.isValidElement(e) &&
      t.indexOf(
        e.type.muiName ??
          ((o =
            (r = (n = e.type) == null ? void 0 : n._payload) == null
              ? void 0
              : r.value) == null
            ? void 0
            : o.muiName)
      ) !== -1
    );
  }
  function f1(e, t) {
    typeof e == "function" ? e(t) : e && (e.current = t);
  }
  function xi(e) {
    const t = M.useRef(e);
    return (
      Wm(() => {
        t.current = e;
      }),
      M.useRef((...n) => (0, t.current)(...n)).current
    );
  }
  function ml(...e) {
    return M.useMemo(
      () =>
        e.every((t) => t == null)
          ? null
          : (t) => {
              e.forEach((n) => {
                f1(n, t);
              });
            },
      e
    );
  }
  const Rd = {};
  function Vm(e, t) {
    const n = M.useRef(Rd);
    return n.current === Rd && (n.current = e(t)), n;
  }
  const p1 = [];
  function m1(e) {
    M.useEffect(e, p1);
  }
  class Zu {
    constructor() {
      Kr(this, "currentId", null);
      Kr(this, "clear", () => {
        this.currentId !== null &&
          (clearTimeout(this.currentId), (this.currentId = null));
      });
      Kr(this, "disposeEffect", () => this.clear);
    }
    static create() {
      return new Zu();
    }
    start(t, n) {
      this.clear(),
        (this.currentId = setTimeout(() => {
          (this.currentId = null), n();
        }, t));
    }
  }
  function h1() {
    const e = Vm(Zu.create).current;
    return m1(e.disposeEffect), e;
  }
  function _d(e) {
    try {
      return e.matches(":focus-visible");
    } catch {}
    return !1;
  }
  function dt(e, t, n = void 0) {
    const r = {};
    for (const o in e) {
      const i = e[o];
      let l = "",
        s = !0;
      for (let a = 0; a < i.length; a += 1) {
        const u = i[a];
        u &&
          ((l += (s === !0 ? "" : " ") + t(u)),
          (s = !1),
          n && n[u] && (l += " " + n[u]));
      }
      r[o] = l;
    }
    return r;
  }
  const Hm = M.createContext(null);
  function Ju() {
    return M.useContext(Hm);
  }
  const g1 = typeof Symbol == "function" && Symbol.for,
    y1 = g1 ? Symbol.for("mui.nested") : "__THEME_NESTED__";
  function v1(e, t) {
    return typeof t == "function" ? t(e) : { ...e, ...t };
  }
  function S1(e) {
    const { children: t, theme: n } = e,
      r = Ju(),
      o = M.useMemo(() => {
        const i = r === null ? { ...n } : v1(r, n);
        return i != null && (i[y1] = r !== null), i;
      }, [n, r]);
    return I.jsx(Hm.Provider, { value: o, children: t });
  }
  const w1 = M.createContext();
  function x1({ value: e, ...t }) {
    return I.jsx(w1.Provider, { value: e ?? !0, ...t });
  }
  const Gm = M.createContext(void 0);
  function C1({ value: e, children: t }) {
    return I.jsx(Gm.Provider, { value: e, children: t });
  }
  function k1(e) {
    const { theme: t, name: n, props: r } = e;
    if (!t || !t.components || !t.components[n]) return r;
    const o = t.components[n];
    return o.defaultProps
      ? Wo(o.defaultProps, r)
      : !o.styleOverrides && !o.variants
      ? Wo(o, r)
      : r;
  }
  function E1({ props: e, name: t }) {
    const n = M.useContext(Gm);
    return k1({ props: e, name: t, theme: { components: n } });
  }
  const bd = {};
  function Id(e, t, n, r = !1) {
    return M.useMemo(() => {
      const o = (e && t[e]) || t;
      if (typeof n == "function") {
        const i = n(o),
          l = e ? { ...t, [e]: i } : i;
        return r ? () => l : l;
      }
      return e ? { ...t, [e]: n } : { ...t, ...n };
    }, [e, t, n, r]);
  }
  function Km(e) {
    const { children: t, theme: n, themeId: r } = e,
      o = Lm(bd),
      i = Ju() || bd,
      l = Id(r, o, n),
      s = Id(r, i, n, !0),
      a = l.direction === "rtl";
    return I.jsx(S1, {
      theme: s,
      children: I.jsx(Gl.Provider, {
        value: l,
        children: I.jsx(x1, {
          value: a,
          children: I.jsx(C1, {
            value: l == null ? void 0 : l.components,
            children: t,
          }),
        }),
      }),
    });
  }
  const ec = "mode",
    tc = "color-scheme",
    T1 = "data-color-scheme";
  function P1(e) {
    const {
      defaultLightColorScheme: t = "light",
      defaultDarkColorScheme: n = "dark",
      modeStorageKey: r = ec,
      colorSchemeStorageKey: o = tc,
      attribute: i = T1,
      colorSchemeNode: l = "document.documentElement",
      nonce: s,
    } = e || {};
    let a = "",
      u = i;
    if (
      (i === "class" && (u = ".%s"),
      i === "data" && (u = "[data-%s]"),
      u.startsWith("."))
    ) {
      const p = u.substring(1);
      a += `${l}.classList.remove('${p}'.replace('%s', light), '${p}'.replace('%s', dark));
      ${l}.classList.add('${p}'.replace('%s', colorScheme));`;
    }
    const f = u.match(/\[([^\]]+)\]/);
    if (f) {
      const [p, m] = f[1].split("=");
      m ||
        (a += `${l}.removeAttribute('${p}'.replace('%s', light));
      ${l}.removeAttribute('${p}'.replace('%s', dark));`),
        (a += `
      ${l}.setAttribute('${p}'.replace('%s', colorScheme), ${
          m ? `${m}.replace('%s', colorScheme)` : '""'
        });`);
    } else a += `${l}.setAttribute('${u}', colorScheme);`;
    return I.jsx(
      "script",
      {
        suppressHydrationWarning: !0,
        nonce: typeof window > "u" ? s : "",
        dangerouslySetInnerHTML: {
          __html: `(function() {
try {
  let colorScheme = '';
  const mode = localStorage.getItem('${r}') || 'system';
  const dark = localStorage.getItem('${o}-dark') || '${n}';
  const light = localStorage.getItem('${o}-light') || '${t}';
  if (mode === 'system') {
    // handle system mode
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    if (mql.matches) {
      colorScheme = dark
    } else {
      colorScheme = light
    }
  }
  if (mode === 'light') {
    colorScheme = light;
  }
  if (mode === 'dark') {
    colorScheme = dark;
  }
  if (colorScheme) {
    ${a}
  }
} catch(e){}})();`,
        },
      },
      "mui-color-scheme-init"
    );
  }
  function Od(e) {
    if (
      typeof window < "u" &&
      typeof window.matchMedia == "function" &&
      e === "system"
    )
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  }
  function Qm(e, t) {
    if (e.mode === "light" || (e.mode === "system" && e.systemMode === "light"))
      return t("light");
    if (e.mode === "dark" || (e.mode === "system" && e.systemMode === "dark"))
      return t("dark");
  }
  function $1(e) {
    return Qm(e, (t) => {
      if (t === "light") return e.lightColorScheme;
      if (t === "dark") return e.darkColorScheme;
    });
  }
  function Ns(e, t) {
    if (typeof window > "u") return;
    let n;
    try {
      (n = localStorage.getItem(e) || void 0), n || localStorage.setItem(e, t);
    } catch {}
    return n || t;
  }
  function M1(e) {
    const {
        defaultMode: t = "light",
        defaultLightColorScheme: n,
        defaultDarkColorScheme: r,
        supportedColorSchemes: o = [],
        modeStorageKey: i = ec,
        colorSchemeStorageKey: l = tc,
        storageWindow: s = typeof window > "u" ? void 0 : window,
      } = e,
      a = o.join(","),
      u = o.length > 1,
      [f, p] = M.useState(() => {
        const c = Ns(i, t),
          x = Ns(`${l}-light`, n),
          k = Ns(`${l}-dark`, r);
        return {
          mode: c,
          systemMode: Od(c),
          lightColorScheme: x,
          darkColorScheme: k,
        };
      }),
      [, m] = M.useState(!1),
      w = M.useRef(!1);
    M.useEffect(() => {
      u && m(!0), (w.current = !0);
    }, [u]);
    const v = $1(f),
      S = M.useCallback(
        (c) => {
          p((x) => {
            if (c === x.mode) return x;
            const k = c ?? t;
            try {
              localStorage.setItem(i, k);
            } catch {}
            return { ...x, mode: k, systemMode: Od(k) };
          });
        },
        [i, t]
      ),
      P = M.useCallback(
        (c) => {
          c
            ? typeof c == "string"
              ? c && !a.includes(c)
                ? console.error(
                    `\`${c}\` does not exist in \`theme.colorSchemes\`.`
                  )
                : p((x) => {
                    const k = { ...x };
                    return (
                      Qm(x, (E) => {
                        try {
                          localStorage.setItem(`${l}-${E}`, c);
                        } catch {}
                        E === "light" && (k.lightColorScheme = c),
                          E === "dark" && (k.darkColorScheme = c);
                      }),
                      k
                    );
                  })
              : p((x) => {
                  const k = { ...x },
                    E = c.light === null ? n : c.light,
                    T = c.dark === null ? r : c.dark;
                  if (E)
                    if (!a.includes(E))
                      console.error(
                        `\`${E}\` does not exist in \`theme.colorSchemes\`.`
                      );
                    else {
                      k.lightColorScheme = E;
                      try {
                        localStorage.setItem(`${l}-light`, E);
                      } catch {}
                    }
                  if (T)
                    if (!a.includes(T))
                      console.error(
                        `\`${T}\` does not exist in \`theme.colorSchemes\`.`
                      );
                    else {
                      k.darkColorScheme = T;
                      try {
                        localStorage.setItem(`${l}-dark`, T);
                      } catch {}
                    }
                  return k;
                })
            : p((x) => {
                try {
                  localStorage.setItem(`${l}-light`, n),
                    localStorage.setItem(`${l}-dark`, r);
                } catch {}
                return { ...x, lightColorScheme: n, darkColorScheme: r };
              });
        },
        [a, l, n, r]
      ),
      g = M.useCallback(
        (c) => {
          f.mode === "system" &&
            p((x) => {
              const k = c != null && c.matches ? "dark" : "light";
              return x.systemMode === k ? x : { ...x, systemMode: k };
            });
        },
        [f.mode]
      ),
      h = M.useRef(g);
    return (
      (h.current = g),
      M.useEffect(() => {
        if (typeof window.matchMedia != "function" || !u) return;
        const c = (...k) => h.current(...k),
          x = window.matchMedia("(prefers-color-scheme: dark)");
        return (
          x.addListener(c),
          c(x),
          () => {
            x.removeListener(c);
          }
        );
      }, [u]),
      M.useEffect(() => {
        if (s && u) {
          const c = (x) => {
            const k = x.newValue;
            typeof x.key == "string" &&
              x.key.startsWith(l) &&
              (!k || a.match(k)) &&
              (x.key.endsWith("light") && P({ light: k }),
              x.key.endsWith("dark") && P({ dark: k })),
              x.key === i &&
                (!k || ["light", "dark", "system"].includes(k)) &&
                S(k || t);
          };
          return (
            s.addEventListener("storage", c),
            () => {
              s.removeEventListener("storage", c);
            }
          );
        }
      }, [P, S, i, l, a, t, s, u]),
      {
        ...f,
        mode: w.current || !u ? f.mode : void 0,
        systemMode: w.current || !u ? f.systemMode : void 0,
        colorScheme: w.current || !u ? v : void 0,
        setMode: S,
        setColorScheme: P,
      }
    );
  }
  const R1 =
    "*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}";
  function _1(e) {
    const {
        themeId: t,
        theme: n = {},
        modeStorageKey: r = ec,
        colorSchemeStorageKey: o = tc,
        disableTransitionOnChange: i = !1,
        defaultColorScheme: l,
        resolveTheme: s,
      } = e,
      a = {
        allColorSchemes: [],
        colorScheme: void 0,
        darkColorScheme: void 0,
        lightColorScheme: void 0,
        mode: void 0,
        setColorScheme: () => {},
        setMode: () => {},
        systemMode: void 0,
      },
      u = M.createContext(void 0),
      f = () => M.useContext(u) || a;
    function p(S) {
      var In, Jn, V, an, er;
      const {
          children: P,
          theme: g,
          modeStorageKey: h = r,
          colorSchemeStorageKey: c = o,
          disableTransitionOnChange: x = i,
          storageWindow: k = typeof window > "u" ? void 0 : window,
          documentNode: E = typeof document > "u" ? void 0 : document,
          colorSchemeNode: T = typeof document > "u"
            ? void 0
            : document.documentElement,
          disableNestedContext: _ = !1,
          disableStyleSheetGeneration: d = !1,
        } = S,
        R = M.useRef(!1),
        L = Ju(),
        F = M.useContext(u),
        G = !!F && !_,
        Y = M.useMemo(() => g || (typeof n == "function" ? n() : n), [g]),
        re = Y[t],
        {
          colorSchemes: X = {},
          components: We = {},
          cssVarPrefix: A,
          ...z
        } = re || Y,
        C = Object.keys(X)
          .filter((ae) => !!X[ae])
          .join(","),
        y = M.useMemo(() => C.split(","), [C]),
        O = typeof l == "string" ? l : l.light,
        D = typeof l == "string" ? l : l.dark,
        j =
          X[O] && X[D]
            ? "system"
            : ((Jn =
                (In = X[z.defaultColorScheme]) == null ? void 0 : In.palette) ==
              null
                ? void 0
                : Jn.mode) || ((V = z.palette) == null ? void 0 : V.mode),
        {
          mode: U,
          setMode: W,
          systemMode: B,
          lightColorScheme: H,
          darkColorScheme: Z,
          colorScheme: fe,
          setColorScheme: ne,
        } = M1({
          supportedColorSchemes: y,
          defaultLightColorScheme: O,
          defaultDarkColorScheme: D,
          modeStorageKey: h,
          colorSchemeStorageKey: c,
          defaultMode: j,
          storageWindow: k,
        });
      let se = U,
        J = fe;
      G && ((se = F.mode), (J = F.colorScheme));
      const K = J || z.defaultColorScheme,
        Me =
          ((an = z.generateThemeVars) == null ? void 0 : an.call(z)) || z.vars,
        me = {
          ...z,
          components: We,
          colorSchemes: X,
          cssVarPrefix: A,
          vars: Me,
        };
      if (
        (typeof me.generateSpacing == "function" &&
          (me.spacing = me.generateSpacing()),
        K)
      ) {
        const ae = X[K];
        ae &&
          typeof ae == "object" &&
          Object.keys(ae).forEach((he) => {
            ae[he] && typeof ae[he] == "object"
              ? (me[he] = { ...me[he], ...ae[he] })
              : (me[he] = ae[he]);
          });
      }
      const be = z.colorSchemeSelector;
      M.useEffect(() => {
        if (J && T && be && be !== "media") {
          const ae = be;
          let he = be;
          if (
            (ae === "class" && (he = ".%s"),
            ae === "data" && (he = "[data-%s]"),
            ae != null &&
              ae.startsWith("data-") &&
              !ae.includes("%s") &&
              (he = `[${ae}="%s"]`),
            he.startsWith("."))
          )
            T.classList.remove(
              ...y.map((tr) => he.substring(1).replace("%s", tr))
            ),
              T.classList.add(he.substring(1).replace("%s", J));
          else {
            const tr = he.replace("%s", J).match(/\[([^\]]+)\]/);
            if (tr) {
              const [Hr, nr] = tr[1].split("=");
              nr ||
                y.forEach((Gr) => {
                  T.removeAttribute(Hr.replace(J, Gr));
                }),
                T.setAttribute(Hr, nr ? nr.replace(/"|'/g, "") : "");
            } else T.setAttribute(he, J);
          }
        }
      }, [J, be, T, y]),
        M.useEffect(() => {
          let ae;
          if (x && R.current && E) {
            const he = E.createElement("style");
            he.appendChild(E.createTextNode(R1)),
              E.head.appendChild(he),
              window.getComputedStyle(E.body),
              (ae = setTimeout(() => {
                E.head.removeChild(he);
              }, 1));
          }
          return () => {
            clearTimeout(ae);
          };
        }, [J, x, E]),
        M.useEffect(
          () => (
            (R.current = !0),
            () => {
              R.current = !1;
            }
          ),
          []
        );
      const Ue = M.useMemo(
        () => ({
          allColorSchemes: y,
          colorScheme: J,
          darkColorScheme: Z,
          lightColorScheme: H,
          mode: se,
          setColorScheme: ne,
          setMode: W,
          systemMode: B,
        }),
        [y, J, Z, H, se, ne, W, B]
      );
      let Ve = !0;
      (d ||
        z.cssVariables === !1 ||
        (G && (L == null ? void 0 : L.cssVarPrefix) === A)) &&
        (Ve = !1);
      const Xe = I.jsxs(M.Fragment, {
        children: [
          Ve &&
            I.jsx(M.Fragment, {
              children: (
                ((er = me.generateStyleSheets) == null
                  ? void 0
                  : er.call(me)) || []
              ).map((ae, he) => I.jsx(_m, { styles: ae }, he)),
            }),
          I.jsx(Km, {
            themeId: re ? t : void 0,
            theme: s ? s(me) : me,
            children: P,
          }),
        ],
      });
      return G ? Xe : I.jsx(u.Provider, { value: Ue, children: Xe });
    }
    const m = typeof l == "string" ? l : l.light,
      w = typeof l == "string" ? l : l.dark;
    return {
      CssVarsProvider: p,
      useColorScheme: f,
      getInitColorSchemeScript: (S) =>
        P1({
          colorSchemeStorageKey: o,
          defaultLightColorScheme: m,
          defaultDarkColorScheme: w,
          modeStorageKey: r,
          ...S,
        }),
    };
  }
  function b1(e = "") {
    function t(...r) {
      if (!r.length) return "";
      const o = r[0];
      return typeof o == "string" &&
        !o.match(
          /(#|\(|\)|(-?(\d*\.)?\d+)(px|em|%|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc))|^(-?(\d*\.)?\d+)$|(\d+ \d+ \d+)/
        )
        ? `, var(--${e ? `${e}-` : ""}${o}${t(...r.slice(1))})`
        : `, ${o}`;
    }
    return (r, ...o) => `var(--${e ? `${e}-` : ""}${r}${t(...o)})`;
  }
  const Ad = (e, t, n, r = []) => {
      let o = e;
      t.forEach((i, l) => {
        l === t.length - 1
          ? Array.isArray(o)
            ? (o[Number(i)] = n)
            : o && typeof o == "object" && (o[i] = n)
          : o &&
            typeof o == "object" &&
            (o[i] || (o[i] = r.includes(i) ? [] : {}), (o = o[i]));
      });
    },
    I1 = (e, t, n) => {
      function r(o, i = [], l = []) {
        Object.entries(o).forEach(([s, a]) => {
          (!n || (n && !n([...i, s]))) &&
            a != null &&
            (typeof a == "object" && Object.keys(a).length > 0
              ? r(a, [...i, s], Array.isArray(a) ? [...l, s] : l)
              : t([...i, s], a, l));
        });
      }
      r(e);
    },
    O1 = (e, t) =>
      typeof t == "number"
        ? ["lineHeight", "fontWeight", "opacity", "zIndex"].some((r) =>
            e.includes(r)
          ) || e[e.length - 1].toLowerCase().indexOf("opacity") >= 0
          ? t
          : `${t}px`
        : t;
  function zs(e, t) {
    const { prefix: n, shouldSkipGeneratingVar: r } = t || {},
      o = {},
      i = {},
      l = {};
    return (
      I1(
        e,
        (s, a, u) => {
          if (
            (typeof a == "string" || typeof a == "number") &&
            (!r || !r(s, a))
          ) {
            const f = `--${n ? `${n}-` : ""}${s.join("-")}`,
              p = O1(s, a);
            Object.assign(o, { [f]: p }),
              Ad(i, s, `var(${f})`, u),
              Ad(l, s, `var(${f}, ${p})`, u);
          }
        },
        (s) => s[0] === "vars"
      ),
      { css: o, vars: i, varsWithDefaults: l }
    );
  }
  function A1(e, t = {}) {
    const {
        getSelector: n = P,
        disableCssColorScheme: r,
        colorSchemeSelector: o,
      } = t,
      {
        colorSchemes: i = {},
        components: l,
        defaultColorScheme: s = "light",
        ...a
      } = e,
      { vars: u, css: f, varsWithDefaults: p } = zs(a, t);
    let m = p;
    const w = {},
      { [s]: v, ...S } = i;
    if (
      (Object.entries(S || {}).forEach(([c, x]) => {
        const { vars: k, css: E, varsWithDefaults: T } = zs(x, t);
        (m = Je(m, T)), (w[c] = { css: E, vars: k });
      }),
      v)
    ) {
      const { css: c, vars: x, varsWithDefaults: k } = zs(v, t);
      (m = Je(m, k)), (w[s] = { css: c, vars: x });
    }
    function P(c, x) {
      var E, T;
      let k = o;
      if (
        (o === "class" && (k = ".%s"),
        o === "data" && (k = "[data-%s]"),
        o != null &&
          o.startsWith("data-") &&
          !o.includes("%s") &&
          (k = `[${o}="%s"]`),
        c)
      ) {
        if (k === "media")
          return e.defaultColorScheme === c
            ? ":root"
            : {
                [`@media (prefers-color-scheme: ${
                  ((T = (E = i[c]) == null ? void 0 : E.palette) == null
                    ? void 0
                    : T.mode) || c
                })`]: { ":root": x },
              };
        if (k)
          return e.defaultColorScheme === c
            ? `:root, ${k.replace("%s", String(c))}`
            : k.replace("%s", String(c));
      }
      return ":root";
    }
    return {
      vars: m,
      generateThemeVars: () => {
        let c = { ...u };
        return (
          Object.entries(w).forEach(([, { vars: x }]) => {
            c = Je(c, x);
          }),
          c
        );
      },
      generateStyleSheets: () => {
        var _, d;
        const c = [],
          x = e.defaultColorScheme || "light";
        function k(R, L) {
          Object.keys(L).length &&
            c.push(typeof R == "string" ? { [R]: { ...L } } : R);
        }
        k(n(void 0, { ...f }), f);
        const { [x]: E, ...T } = w;
        if (E) {
          const { css: R } = E,
            L =
              (d = (_ = i[x]) == null ? void 0 : _.palette) == null
                ? void 0
                : d.mode,
            F = !r && L ? { colorScheme: L, ...R } : { ...R };
          k(n(x, { ...F }), F);
        }
        return (
          Object.entries(T).forEach(([R, { css: L }]) => {
            var Y, re;
            const F =
                (re = (Y = i[R]) == null ? void 0 : Y.palette) == null
                  ? void 0
                  : re.mode,
              G = !r && F ? { colorScheme: F, ...L } : { ...L };
            k(n(R, { ...G }), G);
          }),
          c
        );
      },
    };
  }
  function N1(e) {
    return function (n) {
      return e === "media"
        ? `@media (prefers-color-scheme: ${n})`
        : e
        ? e.startsWith("data-") && !e.includes("%s")
          ? `[${e}="${n}"] &`
          : e === "class"
          ? `.${n} &`
          : e === "data"
          ? `[data-${n}] &`
          : `${e.replace("%s", n)} &`
        : "&";
    };
  }
  const z1 = qo(),
    L1 = Dm("div", {
      name: "MuiContainer",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[`maxWidth${oe(String(n.maxWidth))}`],
          n.fixed && t.fixed,
          n.disableGutters && t.disableGutters,
        ];
      },
    }),
    j1 = (e) => Qu({ props: e, name: "MuiContainer", defaultTheme: z1 }),
    B1 = (e, t) => {
      const n = (a) => nt(t, a),
        { classes: r, fixed: o, disableGutters: i, maxWidth: l } = e,
        s = {
          root: [
            "root",
            l && `maxWidth${oe(String(l))}`,
            o && "fixed",
            i && "disableGutters",
          ],
        };
      return dt(s, n, r);
    };
  function F1(e = {}) {
    const {
        createStyledComponent: t = L1,
        useThemeProps: n = j1,
        componentName: r = "MuiContainer",
      } = e,
      o = t(
        ({ theme: l, ownerState: s }) => ({
          width: "100%",
          marginLeft: "auto",
          boxSizing: "border-box",
          marginRight: "auto",
          ...(!s.disableGutters && {
            paddingLeft: l.spacing(2),
            paddingRight: l.spacing(2),
            [l.breakpoints.up("sm")]: {
              paddingLeft: l.spacing(3),
              paddingRight: l.spacing(3),
            },
          }),
        }),
        ({ theme: l, ownerState: s }) =>
          s.fixed &&
          Object.keys(l.breakpoints.values).reduce((a, u) => {
            const f = u,
              p = l.breakpoints.values[f];
            return (
              p !== 0 &&
                (a[l.breakpoints.up(f)] = {
                  maxWidth: `${p}${l.breakpoints.unit}`,
                }),
              a
            );
          }, {}),
        ({ theme: l, ownerState: s }) => ({
          ...(s.maxWidth === "xs" && {
            [l.breakpoints.up("xs")]: {
              maxWidth: Math.max(l.breakpoints.values.xs, 444),
            },
          }),
          ...(s.maxWidth &&
            s.maxWidth !== "xs" && {
              [l.breakpoints.up(s.maxWidth)]: {
                maxWidth: `${l.breakpoints.values[s.maxWidth]}${
                  l.breakpoints.unit
                }`,
              },
            }),
        })
      );
    return M.forwardRef(function (s, a) {
      const u = n(s),
        {
          className: f,
          component: p = "div",
          disableGutters: m = !1,
          fixed: w = !1,
          maxWidth: v = "lg",
          classes: S,
          ...P
        } = u,
        g = { ...u, component: p, disableGutters: m, fixed: w, maxWidth: v },
        h = B1(g, r);
      return I.jsx(o, {
        as: p,
        ownerState: g,
        className: de(h.root, f),
        ref: a,
        ...P,
      });
    });
  }
  const D1 = qo(),
    W1 = Dm("div", {
      name: "MuiStack",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    });
  function U1(e) {
    return Qu({ props: e, name: "MuiStack", defaultTheme: D1 });
  }
  function V1(e, t) {
    const n = M.Children.toArray(e).filter(Boolean);
    return n.reduce(
      (r, o, i) => (
        r.push(o),
        i < n.length - 1 &&
          r.push(M.cloneElement(t, { key: `separator-${i}` })),
        r
      ),
      []
    );
  }
  const H1 = (e) =>
      ({
        row: "Left",
        "row-reverse": "Right",
        column: "Top",
        "column-reverse": "Bottom",
      }[e]),
    G1 = ({ ownerState: e, theme: t }) => {
      let n = {
        display: "flex",
        flexDirection: "column",
        ...Bt(
          { theme: t },
          Os({ values: e.direction, breakpoints: t.breakpoints.values }),
          (r) => ({ flexDirection: r })
        ),
      };
      if (e.spacing) {
        const r = Yl(t),
          o = Object.keys(t.breakpoints.values).reduce(
            (a, u) => (
              ((typeof e.spacing == "object" && e.spacing[u] != null) ||
                (typeof e.direction == "object" && e.direction[u] != null)) &&
                (a[u] = !0),
              a
            ),
            {}
          ),
          i = Os({ values: e.direction, base: o }),
          l = Os({ values: e.spacing, base: o });
        typeof i == "object" &&
          Object.keys(i).forEach((a, u, f) => {
            if (!i[a]) {
              const m = u > 0 ? i[f[u - 1]] : "column";
              i[a] = m;
            }
          }),
          (n = Je(
            n,
            Bt({ theme: t }, l, (a, u) =>
              e.useFlexGap
                ? { gap: Yn(r, a) }
                : {
                    "& > :not(style):not(style)": { margin: 0 },
                    "& > :not(style) ~ :not(style)": {
                      [`margin${H1(u ? i[u] : e.direction)}`]: Yn(r, a),
                    },
                  }
            )
          ));
      }
      return (n = iv(t.breakpoints, n)), n;
    };
  function K1(e = {}) {
    const {
        createStyledComponent: t = W1,
        useThemeProps: n = U1,
        componentName: r = "MuiStack",
      } = e,
      o = () => dt({ root: ["root"] }, (a) => nt(r, a), {}),
      i = t(G1);
    return M.forwardRef(function (a, u) {
      const f = n(a),
        p = Ku(f),
        {
          component: m = "div",
          direction: w = "column",
          spacing: v = 0,
          divider: S,
          children: P,
          className: g,
          useFlexGap: h = !1,
          ...c
        } = p,
        x = { direction: w, spacing: v, useFlexGap: h },
        k = o();
      return I.jsx(i, {
        as: m,
        ownerState: x,
        ref: u,
        className: de(k.root, g),
        ...c,
        children: S ? V1(P, S) : P,
      });
    });
  }
  const Nd = {
      text: {
        primary: "rgba(0, 0, 0, 0.87)",
        secondary: "rgba(0, 0, 0, 0.6)",
        disabled: "rgba(0, 0, 0, 0.38)",
      },
      divider: "rgba(0, 0, 0, 0.12)",
      background: { paper: jo.white, default: jo.white },
      action: {
        active: "rgba(0, 0, 0, 0.54)",
        hover: "rgba(0, 0, 0, 0.04)",
        hoverOpacity: 0.04,
        selected: "rgba(0, 0, 0, 0.08)",
        selectedOpacity: 0.08,
        disabled: "rgba(0, 0, 0, 0.26)",
        disabledBackground: "rgba(0, 0, 0, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(0, 0, 0, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.12,
      },
    },
    Ls = {
      text: {
        primary: jo.white,
        secondary: "rgba(255, 255, 255, 0.7)",
        disabled: "rgba(255, 255, 255, 0.5)",
        icon: "rgba(255, 255, 255, 0.5)",
      },
      divider: "rgba(255, 255, 255, 0.12)",
      background: { paper: "#121212", default: "#121212" },
      action: {
        active: jo.white,
        hover: "rgba(255, 255, 255, 0.08)",
        hoverOpacity: 0.08,
        selected: "rgba(255, 255, 255, 0.16)",
        selectedOpacity: 0.16,
        disabled: "rgba(255, 255, 255, 0.3)",
        disabledBackground: "rgba(255, 255, 255, 0.12)",
        disabledOpacity: 0.38,
        focus: "rgba(255, 255, 255, 0.12)",
        focusOpacity: 0.12,
        activatedOpacity: 0.24,
      },
    };
  function zd(e, t, n, r) {
    const o = r.light || r,
      i = r.dark || r * 1.5;
    e[t] ||
      (e.hasOwnProperty(n)
        ? (e[t] = e[n])
        : t === "light"
        ? (e.light = qu(e.main, o))
        : t === "dark" && (e.dark = Xu(e.main, i)));
  }
  function Q1(e = "light") {
    return e === "dark"
      ? { main: lr[200], light: lr[50], dark: lr[400] }
      : { main: lr[700], light: lr[400], dark: lr[800] };
  }
  function Y1(e = "light") {
    return e === "dark"
      ? { main: ir[200], light: ir[50], dark: ir[400] }
      : { main: ir[500], light: ir[300], dark: ir[700] };
  }
  function X1(e = "light") {
    return e === "dark"
      ? { main: or[500], light: or[300], dark: or[700] }
      : { main: or[700], light: or[400], dark: or[800] };
  }
  function q1(e = "light") {
    return e === "dark"
      ? { main: sr[400], light: sr[300], dark: sr[700] }
      : { main: sr[700], light: sr[500], dark: sr[900] };
  }
  function Z1(e = "light") {
    return e === "dark"
      ? { main: ar[400], light: ar[300], dark: ar[700] }
      : { main: ar[800], light: ar[500], dark: ar[900] };
  }
  function J1(e = "light") {
    return e === "dark"
      ? { main: no[400], light: no[300], dark: no[700] }
      : { main: "#ed6c02", light: no[500], dark: no[900] };
  }
  function nc(e) {
    const {
        mode: t = "light",
        contrastThreshold: n = 3,
        tonalOffset: r = 0.2,
        ...o
      } = e,
      i = e.primary || Q1(t),
      l = e.secondary || Y1(t),
      s = e.error || X1(t),
      a = e.info || q1(t),
      u = e.success || Z1(t),
      f = e.warning || J1(t);
    function p(S) {
      return u1(S, Ls.text.primary) >= n ? Ls.text.primary : Nd.text.primary;
    }
    const m = ({
        color: S,
        name: P,
        mainShade: g = 500,
        lightShade: h = 300,
        darkShade: c = 700,
      }) => {
        if (
          ((S = { ...S }),
          !S.main && S[g] && (S.main = S[g]),
          !S.hasOwnProperty("main"))
        )
          throw new Error(Qn(11, P ? ` (${P})` : "", g));
        if (typeof S.main != "string")
          throw new Error(Qn(12, P ? ` (${P})` : "", JSON.stringify(S.main)));
        return (
          zd(S, "light", h, r),
          zd(S, "dark", c, r),
          S.contrastText || (S.contrastText = p(S.main)),
          S
        );
      },
      w = { dark: Ls, light: Nd };
    return Je(
      {
        common: { ...jo },
        mode: t,
        primary: m({ color: i, name: "primary" }),
        secondary: m({
          color: l,
          name: "secondary",
          mainShade: "A400",
          lightShade: "A200",
          darkShade: "A700",
        }),
        error: m({ color: s, name: "error" }),
        warning: m({ color: f, name: "warning" }),
        info: m({ color: a, name: "info" }),
        success: m({ color: u, name: "success" }),
        grey: U0,
        contrastThreshold: n,
        getContrastText: p,
        augmentColor: m,
        tonalOffset: r,
        ...w[t],
      },
      o
    );
  }
  function eS(e) {
    const t = {};
    return (
      Object.entries(e).forEach((r) => {
        const [o, i] = r;
        typeof i == "object" &&
          (t[o] = `${i.fontStyle ? `${i.fontStyle} ` : ""}${
            i.fontVariant ? `${i.fontVariant} ` : ""
          }${i.fontWeight ? `${i.fontWeight} ` : ""}${
            i.fontStretch ? `${i.fontStretch} ` : ""
          }${i.fontSize || ""}${i.lineHeight ? `/${i.lineHeight} ` : ""}${
            i.fontFamily || ""
          }`);
      }),
      t
    );
  }
  function tS(e, t) {
    return {
      toolbar: {
        minHeight: 56,
        [e.up("xs")]: { "@media (orientation: landscape)": { minHeight: 48 } },
        [e.up("sm")]: { minHeight: 64 },
      },
      ...t,
    };
  }
  function nS(e) {
    return Math.round(e * 1e5) / 1e5;
  }
  const Ld = { textTransform: "uppercase" },
    jd = '"Roboto", "Helvetica", "Arial", sans-serif';
  function Ym(e, t) {
    const {
        fontFamily: n = jd,
        fontSize: r = 14,
        fontWeightLight: o = 300,
        fontWeightRegular: i = 400,
        fontWeightMedium: l = 500,
        fontWeightBold: s = 700,
        htmlFontSize: a = 16,
        allVariants: u,
        pxToRem: f,
        ...p
      } = typeof t == "function" ? t(e) : t,
      m = r / 14,
      w = f || ((P) => `${(P / a) * m}rem`),
      v = (P, g, h, c, x) => ({
        fontFamily: n,
        fontWeight: P,
        fontSize: w(g),
        lineHeight: h,
        ...(n === jd ? { letterSpacing: `${nS(c / g)}em` } : {}),
        ...x,
        ...u,
      }),
      S = {
        h1: v(o, 96, 1.167, -1.5),
        h2: v(o, 60, 1.2, -0.5),
        h3: v(i, 48, 1.167, 0),
        h4: v(i, 34, 1.235, 0.25),
        h5: v(i, 24, 1.334, 0),
        h6: v(l, 20, 1.6, 0.15),
        subtitle1: v(i, 16, 1.75, 0.15),
        subtitle2: v(l, 14, 1.57, 0.1),
        body1: v(i, 16, 1.5, 0.15),
        body2: v(i, 14, 1.43, 0.15),
        button: v(l, 14, 1.75, 0.4, Ld),
        caption: v(i, 12, 1.66, 0.4),
        overline: v(i, 12, 2.66, 1, Ld),
        inherit: {
          fontFamily: "inherit",
          fontWeight: "inherit",
          fontSize: "inherit",
          lineHeight: "inherit",
          letterSpacing: "inherit",
        },
      };
    return Je(
      {
        htmlFontSize: a,
        pxToRem: w,
        fontFamily: n,
        fontSize: r,
        fontWeightLight: o,
        fontWeightRegular: i,
        fontWeightMedium: l,
        fontWeightBold: s,
        ...S,
      },
      p,
      { clone: !1 }
    );
  }
  const rS = 0.2,
    oS = 0.14,
    iS = 0.12;
  function ve(...e) {
    return [
      `${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${rS})`,
      `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${oS})`,
      `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${iS})`,
    ].join(",");
  }
  const lS = [
      "none",
      ve(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0),
      ve(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0),
      ve(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0),
      ve(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0),
      ve(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0),
      ve(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0),
      ve(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1),
      ve(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2),
      ve(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2),
      ve(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3),
      ve(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3),
      ve(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4),
      ve(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4),
      ve(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4),
      ve(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5),
      ve(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5),
      ve(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5),
      ve(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6),
      ve(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6),
      ve(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7),
      ve(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7),
      ve(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7),
      ve(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8),
      ve(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8),
    ],
    sS = {
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
      easeIn: "cubic-bezier(0.4, 0, 1, 1)",
      sharp: "cubic-bezier(0.4, 0, 0.6, 1)",
    },
    aS = {
      shortest: 150,
      shorter: 200,
      short: 250,
      standard: 300,
      complex: 375,
      enteringScreen: 225,
      leavingScreen: 195,
    };
  function Bd(e) {
    return `${Math.round(e)}ms`;
  }
  function uS(e) {
    if (!e) return 0;
    const t = e / 36;
    return Math.min(Math.round((4 + 15 * t ** 0.25 + t / 5) * 10), 3e3);
  }
  function cS(e) {
    const t = { ...sS, ...e.easing },
      n = { ...aS, ...e.duration };
    return {
      getAutoHeightDuration: uS,
      create: (o = ["all"], i = {}) => {
        const {
          duration: l = n.standard,
          easing: s = t.easeInOut,
          delay: a = 0,
          ...u
        } = i;
        return (Array.isArray(o) ? o : [o])
          .map(
            (f) =>
              `${f} ${typeof l == "string" ? l : Bd(l)} ${s} ${
                typeof a == "string" ? a : Bd(a)
              }`
          )
          .join(",");
      },
      ...e,
      easing: t,
      duration: n,
    };
  }
  const dS = {
    mobileStepper: 1e3,
    fab: 1050,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  };
  function La(e = {}, ...t) {
    const {
      breakpoints: n,
      mixins: r = {},
      spacing: o,
      palette: i = {},
      transitions: l = {},
      typography: s = {},
      shape: a,
      ...u
    } = e;
    if (e.vars) throw new Error(Qn(20));
    const f = nc(i),
      p = qo(e);
    let m = Je(p, {
      mixins: tS(p.breakpoints, r),
      palette: f,
      shadows: lS.slice(),
      typography: Ym(f, s),
      transitions: cS(l),
      zIndex: { ...dS },
    });
    return (
      (m = Je(m, u)),
      (m = t.reduce((w, v) => Je(w, v), m)),
      (m.unstable_sxConfig = {
        ...Xo,
        ...(u == null ? void 0 : u.unstable_sxConfig),
      }),
      (m.unstable_sx = function (v) {
        return Zn({ sx: v, theme: this });
      }),
      m
    );
  }
  function ja(e) {
    let t;
    return (
      e < 1 ? (t = 5.11916 * e ** 2) : (t = 4.5 * Math.log(e + 1) + 2),
      Math.round(t * 10) / 1e3
    );
  }
  const fS = [...Array(25)].map((e, t) => {
    if (t === 0) return;
    const n = ja(t);
    return `linear-gradient(rgba(255 255 255 / ${n}), rgba(255 255 255 / ${n}))`;
  });
  function Xm(e) {
    return {
      inputPlaceholder: e === "dark" ? 0.5 : 0.42,
      inputUnderline: e === "dark" ? 0.7 : 0.42,
      switchTrackDisabled: e === "dark" ? 0.2 : 0.12,
      switchTrack: e === "dark" ? 0.3 : 0.38,
    };
  }
  function qm(e) {
    return e === "dark" ? fS : [];
  }
  function pS(e) {
    const { palette: t = { mode: "light" }, opacity: n, overlays: r, ...o } = e,
      i = nc(t);
    return {
      palette: i,
      opacity: { ...Xm(i.mode), ...n },
      overlays: r || qm(i.mode),
      ...o,
    };
  }
  function mS(e) {
    var t;
    return (
      !!e[0].match(
        /(cssVarPrefix|colorSchemeSelector|typography|mixins|breakpoints|direction|transitions)/
      ) ||
      !!e[0].match(/sxConfig$/) ||
      (e[0] === "palette" &&
        !!(
          (t = e[1]) != null && t.match(/(mode|contrastThreshold|tonalOffset)/)
        ))
    );
  }
  const hS = (e) => [
      ...[...Array(24)].map((t, n) => `--${e ? `${e}-` : ""}overlays-${n + 1}`),
      `--${e ? `${e}-` : ""}palette-AppBar-darkBg`,
      `--${e ? `${e}-` : ""}palette-AppBar-darkColor`,
    ],
    gS = (e) => (t, n) => {
      const r = e.colorSchemeSelector;
      let o = r;
      if (
        (r === "class" && (o = ".%s"),
        r === "data" && (o = "[data-%s]"),
        r != null &&
          r.startsWith("data-") &&
          !r.includes("%s") &&
          (o = `[${r}="%s"]`),
        e.defaultColorScheme === t)
      ) {
        if (t === "dark") {
          const i = {};
          return (
            hS(e.cssVarPrefix).forEach((l) => {
              (i[l] = n[l]), delete n[l];
            }),
            o === "media"
              ? {
                  ":root": n,
                  "@media (prefers-color-scheme: dark)": { ":root": i },
                }
              : o
              ? { [o.replace("%s", t)]: i, [`:root, ${o.replace("%s", t)}`]: n }
              : { ":root": { ...n, ...i } }
          );
        }
        if (o && o !== "media") return `:root, ${o.replace("%s", String(t))}`;
      } else if (t) {
        if (o === "media")
          return {
            [`@media (prefers-color-scheme: ${String(t)})`]: { ":root": n },
          };
        if (o) return o.replace("%s", String(t));
      }
      return ":root";
    };
  function yS(e) {
    return (
      Gt(e) ||
      typeof e > "u" ||
      typeof e == "string" ||
      typeof e == "boolean" ||
      typeof e == "number" ||
      Array.isArray(e)
    );
  }
  function vS(e = {}) {
    const t = { ...e };
    function n(r) {
      const o = Object.entries(r);
      for (let i = 0; i < o.length; i++) {
        const [l, s] = o[i];
        !yS(s) || l.startsWith("unstable_")
          ? delete r[l]
          : Gt(s) && ((r[l] = { ...s }), n(r[l]));
      }
    }
    return (
      n(t),
      `import { unstable_createBreakpoints as createBreakpoints, createTransitions } from '@mui/material/styles';

const theme = ${JSON.stringify(t, null, 2)};

theme.breakpoints = createBreakpoints(theme.breakpoints || {});
theme.transitions = createTransitions(theme.transitions || {});

export default theme;`
    );
  }
  function SS(e, t) {
    t.forEach((n) => {
      e[n] || (e[n] = {});
    });
  }
  function $(e, t, n) {
    !e[t] && n && (e[t] = n);
  }
  function uo(e) {
    return !e || !e.startsWith("hsl") ? e : Um(e);
  }
  function Xt(e, t) {
    `${t}Channel` in e ||
      (e[`${t}Channel`] = ao(
        uo(e[t]),
        `MUI: Can't create \`palette.${t}Channel\` because \`palette.${t}\` is not one of these formats: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().
To suppress this warning, you need to explicitly provide the \`palette.${t}Channel\` as a string (in rgb format, for example "12 12 12") or undefined if you want to remove the channel token.`
      ));
  }
  function wS(e) {
    return typeof e == "number"
      ? `${e}px`
      : typeof e == "string" || typeof e == "function" || Array.isArray(e)
      ? e
      : "8px";
  }
  const Dt = (e) => {
      try {
        return e();
      } catch {}
    },
    xS = (e = "mui") => b1(e);
  function js(e, t, n, r) {
    if (!t) return;
    t = t === !0 ? {} : t;
    const o = r === "dark" ? "dark" : "light";
    if (!n) {
      e[r] = pS({
        ...t,
        palette: { mode: o, ...(t == null ? void 0 : t.palette) },
      });
      return;
    }
    const { palette: i, ...l } = La({
      ...n,
      palette: { mode: o, ...(t == null ? void 0 : t.palette) },
    });
    return (
      (e[r] = {
        ...t,
        palette: i,
        opacity: { ...Xm(o), ...(t == null ? void 0 : t.opacity) },
        overlays: (t == null ? void 0 : t.overlays) || qm(o),
      }),
      l
    );
  }
  function CS(e = {}, ...t) {
    const {
        colorSchemes: n = { light: !0 },
        defaultColorScheme: r,
        disableCssColorScheme: o = !1,
        cssVarPrefix: i = "mui",
        shouldSkipGeneratingVar: l = mS,
        colorSchemeSelector: s = n.light && n.dark ? "media" : void 0,
        ...a
      } = e,
      u = Object.keys(n)[0],
      f = r || (n.light && u !== "light" ? "light" : u),
      p = xS(i),
      { [f]: m, light: w, dark: v, ...S } = n,
      P = { ...S };
    let g = m;
    if (
      (((f === "dark" && !("dark" in n)) ||
        (f === "light" && !("light" in n))) &&
        (g = !0),
      !g)
    )
      throw new Error(Qn(21, f));
    const h = js(P, g, a, f);
    w && !P.light && js(P, w, void 0, "light"),
      v && !P.dark && js(P, v, void 0, "dark");
    let c = {
      defaultColorScheme: f,
      ...h,
      cssVarPrefix: i,
      colorSchemeSelector: s,
      getCssVar: p,
      colorSchemes: P,
      font: { ...eS(h.typography), ...h.font },
      spacing: wS(a.spacing),
    };
    Object.keys(c.colorSchemes).forEach((_) => {
      const d = c.colorSchemes[_].palette,
        R = (L) => {
          const F = L.split("-"),
            G = F[1],
            Y = F[2];
          return p(L, d[G][Y]);
        };
      if (
        (d.mode === "light" &&
          ($(d.common, "background", "#fff"),
          $(d.common, "onBackground", "#000")),
        d.mode === "dark" &&
          ($(d.common, "background", "#000"),
          $(d.common, "onBackground", "#fff")),
        SS(d, [
          "Alert",
          "AppBar",
          "Avatar",
          "Button",
          "Chip",
          "FilledInput",
          "LinearProgress",
          "Skeleton",
          "Slider",
          "SnackbarContent",
          "SpeedDialAction",
          "StepConnector",
          "StepContent",
          "Switch",
          "TableCell",
          "Tooltip",
        ]),
        d.mode === "light")
      ) {
        $(d.Alert, "errorColor", ue(d.error.light, 0.6)),
          $(d.Alert, "infoColor", ue(d.info.light, 0.6)),
          $(d.Alert, "successColor", ue(d.success.light, 0.6)),
          $(d.Alert, "warningColor", ue(d.warning.light, 0.6)),
          $(d.Alert, "errorFilledBg", R("palette-error-main")),
          $(d.Alert, "infoFilledBg", R("palette-info-main")),
          $(d.Alert, "successFilledBg", R("palette-success-main")),
          $(d.Alert, "warningFilledBg", R("palette-warning-main")),
          $(
            d.Alert,
            "errorFilledColor",
            Dt(() => d.getContrastText(d.error.main))
          ),
          $(
            d.Alert,
            "infoFilledColor",
            Dt(() => d.getContrastText(d.info.main))
          ),
          $(
            d.Alert,
            "successFilledColor",
            Dt(() => d.getContrastText(d.success.main))
          ),
          $(
            d.Alert,
            "warningFilledColor",
            Dt(() => d.getContrastText(d.warning.main))
          ),
          $(d.Alert, "errorStandardBg", ce(d.error.light, 0.9)),
          $(d.Alert, "infoStandardBg", ce(d.info.light, 0.9)),
          $(d.Alert, "successStandardBg", ce(d.success.light, 0.9)),
          $(d.Alert, "warningStandardBg", ce(d.warning.light, 0.9)),
          $(d.Alert, "errorIconColor", R("palette-error-main")),
          $(d.Alert, "infoIconColor", R("palette-info-main")),
          $(d.Alert, "successIconColor", R("palette-success-main")),
          $(d.Alert, "warningIconColor", R("palette-warning-main")),
          $(d.AppBar, "defaultBg", R("palette-grey-100")),
          $(d.Avatar, "defaultBg", R("palette-grey-400")),
          $(d.Button, "inheritContainedBg", R("palette-grey-300")),
          $(d.Button, "inheritContainedHoverBg", R("palette-grey-A100")),
          $(d.Chip, "defaultBorder", R("palette-grey-400")),
          $(d.Chip, "defaultAvatarColor", R("palette-grey-700")),
          $(d.Chip, "defaultIconColor", R("palette-grey-700")),
          $(d.FilledInput, "bg", "rgba(0, 0, 0, 0.06)"),
          $(d.FilledInput, "hoverBg", "rgba(0, 0, 0, 0.09)"),
          $(d.FilledInput, "disabledBg", "rgba(0, 0, 0, 0.12)"),
          $(d.LinearProgress, "primaryBg", ce(d.primary.main, 0.62)),
          $(d.LinearProgress, "secondaryBg", ce(d.secondary.main, 0.62)),
          $(d.LinearProgress, "errorBg", ce(d.error.main, 0.62)),
          $(d.LinearProgress, "infoBg", ce(d.info.main, 0.62)),
          $(d.LinearProgress, "successBg", ce(d.success.main, 0.62)),
          $(d.LinearProgress, "warningBg", ce(d.warning.main, 0.62)),
          $(
            d.Skeleton,
            "bg",
            `rgba(${R("palette-text-primaryChannel")} / 0.11)`
          ),
          $(d.Slider, "primaryTrack", ce(d.primary.main, 0.62)),
          $(d.Slider, "secondaryTrack", ce(d.secondary.main, 0.62)),
          $(d.Slider, "errorTrack", ce(d.error.main, 0.62)),
          $(d.Slider, "infoTrack", ce(d.info.main, 0.62)),
          $(d.Slider, "successTrack", ce(d.success.main, 0.62)),
          $(d.Slider, "warningTrack", ce(d.warning.main, 0.62));
        const L = wi(d.background.default, 0.8);
        $(d.SnackbarContent, "bg", L),
          $(
            d.SnackbarContent,
            "color",
            Dt(() => d.getContrastText(L))
          ),
          $(d.SpeedDialAction, "fabHoverBg", wi(d.background.paper, 0.15)),
          $(d.StepConnector, "border", R("palette-grey-400")),
          $(d.StepContent, "border", R("palette-grey-400")),
          $(d.Switch, "defaultColor", R("palette-common-white")),
          $(d.Switch, "defaultDisabledColor", R("palette-grey-100")),
          $(d.Switch, "primaryDisabledColor", ce(d.primary.main, 0.62)),
          $(d.Switch, "secondaryDisabledColor", ce(d.secondary.main, 0.62)),
          $(d.Switch, "errorDisabledColor", ce(d.error.main, 0.62)),
          $(d.Switch, "infoDisabledColor", ce(d.info.main, 0.62)),
          $(d.Switch, "successDisabledColor", ce(d.success.main, 0.62)),
          $(d.Switch, "warningDisabledColor", ce(d.warning.main, 0.62)),
          $(d.TableCell, "border", ce(Si(d.divider, 1), 0.88)),
          $(d.Tooltip, "bg", Si(d.grey[700], 0.92));
      }
      if (d.mode === "dark") {
        $(d.Alert, "errorColor", ce(d.error.light, 0.6)),
          $(d.Alert, "infoColor", ce(d.info.light, 0.6)),
          $(d.Alert, "successColor", ce(d.success.light, 0.6)),
          $(d.Alert, "warningColor", ce(d.warning.light, 0.6)),
          $(d.Alert, "errorFilledBg", R("palette-error-dark")),
          $(d.Alert, "infoFilledBg", R("palette-info-dark")),
          $(d.Alert, "successFilledBg", R("palette-success-dark")),
          $(d.Alert, "warningFilledBg", R("palette-warning-dark")),
          $(
            d.Alert,
            "errorFilledColor",
            Dt(() => d.getContrastText(d.error.dark))
          ),
          $(
            d.Alert,
            "infoFilledColor",
            Dt(() => d.getContrastText(d.info.dark))
          ),
          $(
            d.Alert,
            "successFilledColor",
            Dt(() => d.getContrastText(d.success.dark))
          ),
          $(
            d.Alert,
            "warningFilledColor",
            Dt(() => d.getContrastText(d.warning.dark))
          ),
          $(d.Alert, "errorStandardBg", ue(d.error.light, 0.9)),
          $(d.Alert, "infoStandardBg", ue(d.info.light, 0.9)),
          $(d.Alert, "successStandardBg", ue(d.success.light, 0.9)),
          $(d.Alert, "warningStandardBg", ue(d.warning.light, 0.9)),
          $(d.Alert, "errorIconColor", R("palette-error-main")),
          $(d.Alert, "infoIconColor", R("palette-info-main")),
          $(d.Alert, "successIconColor", R("palette-success-main")),
          $(d.Alert, "warningIconColor", R("palette-warning-main")),
          $(d.AppBar, "defaultBg", R("palette-grey-900")),
          $(d.AppBar, "darkBg", R("palette-background-paper")),
          $(d.AppBar, "darkColor", R("palette-text-primary")),
          $(d.Avatar, "defaultBg", R("palette-grey-600")),
          $(d.Button, "inheritContainedBg", R("palette-grey-800")),
          $(d.Button, "inheritContainedHoverBg", R("palette-grey-700")),
          $(d.Chip, "defaultBorder", R("palette-grey-700")),
          $(d.Chip, "defaultAvatarColor", R("palette-grey-300")),
          $(d.Chip, "defaultIconColor", R("palette-grey-300")),
          $(d.FilledInput, "bg", "rgba(255, 255, 255, 0.09)"),
          $(d.FilledInput, "hoverBg", "rgba(255, 255, 255, 0.13)"),
          $(d.FilledInput, "disabledBg", "rgba(255, 255, 255, 0.12)"),
          $(d.LinearProgress, "primaryBg", ue(d.primary.main, 0.5)),
          $(d.LinearProgress, "secondaryBg", ue(d.secondary.main, 0.5)),
          $(d.LinearProgress, "errorBg", ue(d.error.main, 0.5)),
          $(d.LinearProgress, "infoBg", ue(d.info.main, 0.5)),
          $(d.LinearProgress, "successBg", ue(d.success.main, 0.5)),
          $(d.LinearProgress, "warningBg", ue(d.warning.main, 0.5)),
          $(
            d.Skeleton,
            "bg",
            `rgba(${R("palette-text-primaryChannel")} / 0.13)`
          ),
          $(d.Slider, "primaryTrack", ue(d.primary.main, 0.5)),
          $(d.Slider, "secondaryTrack", ue(d.secondary.main, 0.5)),
          $(d.Slider, "errorTrack", ue(d.error.main, 0.5)),
          $(d.Slider, "infoTrack", ue(d.info.main, 0.5)),
          $(d.Slider, "successTrack", ue(d.success.main, 0.5)),
          $(d.Slider, "warningTrack", ue(d.warning.main, 0.5));
        const L = wi(d.background.default, 0.98);
        $(d.SnackbarContent, "bg", L),
          $(
            d.SnackbarContent,
            "color",
            Dt(() => d.getContrastText(L))
          ),
          $(d.SpeedDialAction, "fabHoverBg", wi(d.background.paper, 0.15)),
          $(d.StepConnector, "border", R("palette-grey-600")),
          $(d.StepContent, "border", R("palette-grey-600")),
          $(d.Switch, "defaultColor", R("palette-grey-300")),
          $(d.Switch, "defaultDisabledColor", R("palette-grey-600")),
          $(d.Switch, "primaryDisabledColor", ue(d.primary.main, 0.55)),
          $(d.Switch, "secondaryDisabledColor", ue(d.secondary.main, 0.55)),
          $(d.Switch, "errorDisabledColor", ue(d.error.main, 0.55)),
          $(d.Switch, "infoDisabledColor", ue(d.info.main, 0.55)),
          $(d.Switch, "successDisabledColor", ue(d.success.main, 0.55)),
          $(d.Switch, "warningDisabledColor", ue(d.warning.main, 0.55)),
          $(d.TableCell, "border", ue(Si(d.divider, 1), 0.68)),
          $(d.Tooltip, "bg", Si(d.grey[700], 0.92));
      }
      Xt(d.background, "default"),
        Xt(d.background, "paper"),
        Xt(d.common, "background"),
        Xt(d.common, "onBackground"),
        Xt(d, "divider"),
        Object.keys(d).forEach((L) => {
          const F = d[L];
          F &&
            typeof F == "object" &&
            (F.main && $(d[L], "mainChannel", ao(uo(F.main))),
            F.light && $(d[L], "lightChannel", ao(uo(F.light))),
            F.dark && $(d[L], "darkChannel", ao(uo(F.dark))),
            F.contrastText &&
              $(d[L], "contrastTextChannel", ao(uo(F.contrastText))),
            L === "text" && (Xt(d[L], "primary"), Xt(d[L], "secondary")),
            L === "action" &&
              (F.active && Xt(d[L], "active"),
              F.selected && Xt(d[L], "selected")));
        });
    }),
      (c = t.reduce((_, d) => Je(_, d), c));
    const x = {
        prefix: i,
        disableCssColorScheme: o,
        shouldSkipGeneratingVar: l,
        getSelector: gS(c),
      },
      { vars: k, generateThemeVars: E, generateStyleSheets: T } = A1(c, x);
    return (
      (c.vars = k),
      Object.entries(c.colorSchemes[c.defaultColorScheme]).forEach(([_, d]) => {
        c[_] = d;
      }),
      (c.generateThemeVars = E),
      (c.generateStyleSheets = T),
      (c.generateSpacing = function () {
        return zm(a.spacing, Yl(this));
      }),
      (c.getColorSchemeSelector = N1(s)),
      (c.spacing = c.generateSpacing()),
      (c.shouldSkipGeneratingVar = l),
      (c.unstable_sxConfig = {
        ...Xo,
        ...(a == null ? void 0 : a.unstable_sxConfig),
      }),
      (c.unstable_sx = function (d) {
        return Zn({ sx: d, theme: this });
      }),
      (c.toRuntimeSource = vS),
      c
    );
  }
  function Fd(e, t, n) {
    e.colorSchemes &&
      n &&
      (e.colorSchemes[t] = {
        ...(n !== !0 && n),
        palette: nc({ ...(n === !0 ? {} : n.palette), mode: t }),
      });
  }
  function rs(e = {}, ...t) {
    const {
        palette: n,
        cssVariables: r = !1,
        colorSchemes: o = n ? void 0 : { light: !0 },
        defaultColorScheme: i = n == null ? void 0 : n.mode,
        ...l
      } = e,
      s = i || "light",
      a = o == null ? void 0 : o[s],
      u = {
        ...o,
        ...(n
          ? { [s]: { ...(typeof a != "boolean" && a), palette: n } }
          : void 0),
      };
    if (r === !1) {
      if (!("colorSchemes" in e)) return La(e, ...t);
      let f = n;
      "palette" in e ||
        (u[s] &&
          (u[s] !== !0
            ? (f = u[s].palette)
            : s === "dark" && (f = { mode: "dark" })));
      const p = La({ ...e, palette: f }, ...t);
      return (
        (p.defaultColorScheme = s),
        (p.colorSchemes = u),
        p.palette.mode === "light" &&
          ((p.colorSchemes.light = {
            ...(u.light !== !0 && u.light),
            palette: p.palette,
          }),
          Fd(p, "dark", u.dark)),
        p.palette.mode === "dark" &&
          ((p.colorSchemes.dark = {
            ...(u.dark !== !0 && u.dark),
            palette: p.palette,
          }),
          Fd(p, "light", u.light)),
        p
      );
    }
    return (
      !n && !("light" in u) && s === "light" && (u.light = !0),
      CS(
        {
          ...l,
          colorSchemes: u,
          defaultColorScheme: s,
          ...(typeof r != "boolean" && r),
        },
        ...t
      )
    );
  }
  const os = rs();
  function kS() {
    const e = ts(os);
    return e[Lt] || e;
  }
  function Zm({ props: e, name: t }) {
    return Qu({ props: e, name: t, defaultTheme: os, themeId: Lt });
  }
  function ES(e) {
    return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
  }
  const rc = (e) => ES(e) && e !== "classes",
    Ae = Fm({ themeId: Lt, defaultTheme: os, rootShouldForwardProp: rc });
  function Dd({ theme: e, ...t }) {
    const n = Lt in e ? e[Lt] : void 0;
    return I.jsx(Km, { ...t, themeId: n ? Lt : void 0, theme: n || e });
  }
  const Ci = {
      attribute: "data-mui-color-scheme",
      colorSchemeStorageKey: "mui-color-scheme",
      defaultLightColorScheme: "light",
      defaultDarkColorScheme: "dark",
      modeStorageKey: "mui-mode",
    },
    {
      CssVarsProvider: TS,
      useColorScheme: Wx,
      getInitColorSchemeScript: Ux,
    } = _1({
      themeId: Lt,
      theme: () => rs({ cssVariables: !0 }),
      colorSchemeStorageKey: Ci.colorSchemeStorageKey,
      modeStorageKey: Ci.modeStorageKey,
      defaultColorScheme: {
        light: Ci.defaultLightColorScheme,
        dark: Ci.defaultDarkColorScheme,
      },
      resolveTheme: (e) => {
        const t = { ...e, typography: Ym(e.palette, e.typography) };
        return (
          (t.unstable_sx = function (r) {
            return Zn({ sx: r, theme: this });
          }),
          t
        );
      },
    }),
    PS = TS;
  function $S({ theme: e, ...t }) {
    return typeof e == "function"
      ? I.jsx(Dd, { theme: e, ...t })
      : "colorSchemes" in (Lt in e ? e[Lt] : e)
      ? I.jsx(PS, { theme: e, ...t })
      : I.jsx(Dd, { theme: e, ...t });
  }
  function MS(e) {
    return I.jsx(Yv, { ...e, defaultTheme: os, themeId: Lt });
  }
  function Jm(e) {
    return function (n) {
      return I.jsx(MS, {
        styles: typeof e == "function" ? (r) => e({ theme: r, ...n }) : e,
      });
    };
  }
  function RS() {
    return Ku;
  }
  const Wd = { theme: void 0 };
  function Mn(e) {
    let t, n;
    return (r) => {
      let o = t;
      return (
        (o === void 0 || r.theme !== n) &&
          ((Wd.theme = r.theme), (o = e(Wd)), (t = o), (n = r.theme)),
        o
      );
    };
  }
  function ft(e) {
    return E1(e);
  }
  function _S(e) {
    return nt("MuiSvgIcon", e);
  }
  ct("MuiSvgIcon", [
    "root",
    "colorPrimary",
    "colorSecondary",
    "colorAction",
    "colorError",
    "colorDisabled",
    "fontSizeInherit",
    "fontSizeSmall",
    "fontSizeMedium",
    "fontSizeLarge",
  ]);
  const bS = (e) => {
      const { color: t, fontSize: n, classes: r } = e,
        o = {
          root: [
            "root",
            t !== "inherit" && `color${oe(t)}`,
            `fontSize${oe(n)}`,
          ],
        };
      return dt(o, _S, r);
    },
    IS = Ae("svg", {
      name: "MuiSvgIcon",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.color !== "inherit" && t[`color${oe(n.color)}`],
          t[`fontSize${oe(n.fontSize)}`],
        ];
      },
    })(
      Mn(({ theme: e }) => {
        var t, n, r, o, i, l, s, a, u, f, p, m, w, v;
        return {
          userSelect: "none",
          width: "1em",
          height: "1em",
          display: "inline-block",
          flexShrink: 0,
          transition:
            (o = (t = e.transitions) == null ? void 0 : t.create) == null
              ? void 0
              : o.call(t, "fill", {
                  duration:
                    (r =
                      (n = (e.vars ?? e).transitions) == null
                        ? void 0
                        : n.duration) == null
                      ? void 0
                      : r.shorter,
                }),
          variants: [
            { props: (S) => !S.hasSvgAsChild, style: { fill: "currentColor" } },
            { props: { fontSize: "inherit" }, style: { fontSize: "inherit" } },
            {
              props: { fontSize: "small" },
              style: {
                fontSize:
                  ((l = (i = e.typography) == null ? void 0 : i.pxToRem) == null
                    ? void 0
                    : l.call(i, 20)) || "1.25rem",
              },
            },
            {
              props: { fontSize: "medium" },
              style: {
                fontSize:
                  ((a = (s = e.typography) == null ? void 0 : s.pxToRem) == null
                    ? void 0
                    : a.call(s, 24)) || "1.5rem",
              },
            },
            {
              props: { fontSize: "large" },
              style: {
                fontSize:
                  ((f = (u = e.typography) == null ? void 0 : u.pxToRem) == null
                    ? void 0
                    : f.call(u, 35)) || "2.1875rem",
              },
            },
            ...Object.entries((e.vars ?? e).palette)
              .filter(([, S]) => S && S.main)
              .map(([S]) => {
                var P, g;
                return {
                  props: { color: S },
                  style: {
                    color:
                      (g =
                        (P = (e.vars ?? e).palette) == null ? void 0 : P[S]) ==
                      null
                        ? void 0
                        : g.main,
                  },
                };
              }),
            {
              props: { color: "action" },
              style: {
                color:
                  (m =
                    (p = (e.vars ?? e).palette) == null ? void 0 : p.action) ==
                  null
                    ? void 0
                    : m.active,
              },
            },
            {
              props: { color: "disabled" },
              style: {
                color:
                  (v =
                    (w = (e.vars ?? e).palette) == null ? void 0 : w.action) ==
                  null
                    ? void 0
                    : v.disabled,
              },
            },
            { props: { color: "inherit" }, style: { color: void 0 } },
          ],
        };
      })
    ),
    hl = M.forwardRef(function (t, n) {
      const r = ft({ props: t, name: "MuiSvgIcon" }),
        {
          children: o,
          className: i,
          color: l = "inherit",
          component: s = "svg",
          fontSize: a = "medium",
          htmlColor: u,
          inheritViewBox: f = !1,
          titleAccess: p,
          viewBox: m = "0 0 24 24",
          ...w
        } = r,
        v = M.isValidElement(o) && o.type === "svg",
        S = {
          ...r,
          color: l,
          component: s,
          fontSize: a,
          instanceFontSize: t.fontSize,
          inheritViewBox: f,
          viewBox: m,
          hasSvgAsChild: v,
        },
        P = {};
      f || (P.viewBox = m);
      const g = bS(S);
      return I.jsxs(IS, {
        as: s,
        className: de(g.root, i),
        focusable: "false",
        color: u,
        "aria-hidden": p ? void 0 : !0,
        role: p ? "img" : void 0,
        ref: n,
        ...P,
        ...w,
        ...(v && o.props),
        ownerState: S,
        children: [
          v ? o.props.children : o,
          p ? I.jsx("title", { children: p }) : null,
        ],
      });
    });
  hl && (hl.muiName = "SvgIcon");
  function eh(e, t) {
    function n(r, o) {
      return I.jsx(hl, {
        "data-testid": `${t}Icon`,
        ref: o,
        ...r,
        children: e,
      });
    }
    return (n.muiName = hl.muiName), M.memo(M.forwardRef(n));
  }
  function OS(e, t) {
    if (e == null) return {};
    var n = {};
    for (var r in e)
      if ({}.hasOwnProperty.call(e, r)) {
        if (t.includes(r)) continue;
        n[r] = e[r];
      }
    return n;
  }
  function Ba(e, t) {
    return (
      (Ba = Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (n, r) {
            return (n.__proto__ = r), n;
          }),
      Ba(e, t)
    );
  }
  function AS(e, t) {
    (e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      Ba(e, t);
  }
  const Ud = Nn.createContext(null);
  function NS(e) {
    if (e === void 0)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called"
      );
    return e;
  }
  function oc(e, t) {
    var n = function (i) {
        return t && M.isValidElement(i) ? t(i) : i;
      },
      r = Object.create(null);
    return (
      e &&
        M.Children.map(e, function (o) {
          return o;
        }).forEach(function (o) {
          r[o.key] = n(o);
        }),
      r
    );
  }
  function zS(e, t) {
    (e = e || {}), (t = t || {});
    function n(f) {
      return f in t ? t[f] : e[f];
    }
    var r = Object.create(null),
      o = [];
    for (var i in e) i in t ? o.length && ((r[i] = o), (o = [])) : o.push(i);
    var l,
      s = {};
    for (var a in t) {
      if (r[a])
        for (l = 0; l < r[a].length; l++) {
          var u = r[a][l];
          s[r[a][l]] = n(u);
        }
      s[a] = n(a);
    }
    for (l = 0; l < o.length; l++) s[o[l]] = n(o[l]);
    return s;
  }
  function Bn(e, t, n) {
    return n[t] != null ? n[t] : e.props[t];
  }
  function LS(e, t) {
    return oc(e.children, function (n) {
      return M.cloneElement(n, {
        onExited: t.bind(null, n),
        in: !0,
        appear: Bn(n, "appear", e),
        enter: Bn(n, "enter", e),
        exit: Bn(n, "exit", e),
      });
    });
  }
  function jS(e, t, n) {
    var r = oc(e.children),
      o = zS(t, r);
    return (
      Object.keys(o).forEach(function (i) {
        var l = o[i];
        if (M.isValidElement(l)) {
          var s = i in t,
            a = i in r,
            u = t[i],
            f = M.isValidElement(u) && !u.props.in;
          a && (!s || f)
            ? (o[i] = M.cloneElement(l, {
                onExited: n.bind(null, l),
                in: !0,
                exit: Bn(l, "exit", e),
                enter: Bn(l, "enter", e),
              }))
            : !a && s && !f
            ? (o[i] = M.cloneElement(l, { in: !1 }))
            : a &&
              s &&
              M.isValidElement(u) &&
              (o[i] = M.cloneElement(l, {
                onExited: n.bind(null, l),
                in: u.props.in,
                exit: Bn(l, "exit", e),
                enter: Bn(l, "enter", e),
              }));
        }
      }),
      o
    );
  }
  var BS =
      Object.values ||
      function (e) {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      },
    FS = {
      component: "div",
      childFactory: function (t) {
        return t;
      },
    },
    ic = (function (e) {
      AS(t, e);
      function t(r, o) {
        var i;
        i = e.call(this, r, o) || this;
        var l = i.handleExited.bind(NS(i));
        return (
          (i.state = {
            contextValue: { isMounting: !0 },
            handleExited: l,
            firstRender: !0,
          }),
          i
        );
      }
      var n = t.prototype;
      return (
        (n.componentDidMount = function () {
          (this.mounted = !0),
            this.setState({ contextValue: { isMounting: !1 } });
        }),
        (n.componentWillUnmount = function () {
          this.mounted = !1;
        }),
        (t.getDerivedStateFromProps = function (o, i) {
          var l = i.children,
            s = i.handleExited,
            a = i.firstRender;
          return { children: a ? LS(o, s) : jS(o, l, s), firstRender: !1 };
        }),
        (n.handleExited = function (o, i) {
          var l = oc(this.props.children);
          o.key in l ||
            (o.props.onExited && o.props.onExited(i),
            this.mounted &&
              this.setState(function (s) {
                var a = dl({}, s.children);
                return delete a[o.key], { children: a };
              }));
        }),
        (n.render = function () {
          var o = this.props,
            i = o.component,
            l = o.childFactory,
            s = OS(o, ["component", "childFactory"]),
            a = this.state.contextValue,
            u = BS(this.state.children).map(l);
          return (
            delete s.appear,
            delete s.enter,
            delete s.exit,
            i === null
              ? Nn.createElement(Ud.Provider, { value: a }, u)
              : Nn.createElement(
                  Ud.Provider,
                  { value: a },
                  Nn.createElement(i, s, u)
                )
          );
        }),
        t
      );
    })(Nn.Component);
  ic.propTypes = {};
  ic.defaultProps = FS;
  function DS(e) {
    return nt("MuiPaper", e);
  }
  ct("MuiPaper", [
    "root",
    "rounded",
    "outlined",
    "elevation",
    "elevation0",
    "elevation1",
    "elevation2",
    "elevation3",
    "elevation4",
    "elevation5",
    "elevation6",
    "elevation7",
    "elevation8",
    "elevation9",
    "elevation10",
    "elevation11",
    "elevation12",
    "elevation13",
    "elevation14",
    "elevation15",
    "elevation16",
    "elevation17",
    "elevation18",
    "elevation19",
    "elevation20",
    "elevation21",
    "elevation22",
    "elevation23",
    "elevation24",
  ]);
  const WS = (e) => {
      const { square: t, elevation: n, variant: r, classes: o } = e,
        i = {
          root: [
            "root",
            r,
            !t && "rounded",
            r === "elevation" && `elevation${n}`,
          ],
        };
      return dt(i, DS, o);
    },
    US = Ae("div", {
      name: "MuiPaper",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          !n.square && t.rounded,
          n.variant === "elevation" && t[`elevation${n.elevation}`],
        ];
      },
    })(
      Mn(({ theme: e }) => ({
        backgroundColor: (e.vars || e).palette.background.paper,
        color: (e.vars || e).palette.text.primary,
        transition: e.transitions.create("box-shadow"),
        variants: [
          {
            props: ({ ownerState: t }) => !t.square,
            style: { borderRadius: e.shape.borderRadius },
          },
          {
            props: { variant: "outlined" },
            style: { border: `1px solid ${(e.vars || e).palette.divider}` },
          },
          {
            props: { variant: "elevation" },
            style: {
              boxShadow: "var(--Paper-shadow)",
              backgroundImage: "var(--Paper-overlay)",
            },
          },
        ],
      }))
    ),
    VS = M.forwardRef(function (t, n) {
      var w;
      const r = ft({ props: t, name: "MuiPaper" }),
        o = kS(),
        {
          className: i,
          component: l = "div",
          elevation: s = 1,
          square: a = !1,
          variant: u = "elevation",
          ...f
        } = r,
        p = { ...r, component: l, elevation: s, square: a, variant: u },
        m = WS(p);
      return I.jsx(US, {
        as: l,
        ownerState: p,
        className: de(m.root, i),
        ref: n,
        ...f,
        style: {
          ...(u === "elevation" && {
            "--Paper-shadow": (o.vars || o).shadows[s],
            ...(o.vars && {
              "--Paper-overlay": (w = o.vars.overlays) == null ? void 0 : w[s],
            }),
            ...(!o.vars &&
              o.palette.mode === "dark" && {
                "--Paper-overlay": `linear-gradient(${ot("#fff", ja(s))}, ${ot(
                  "#fff",
                  ja(s)
                )})`,
              }),
          }),
          ...f.style,
        },
      });
    });
  class gl {
    constructor() {
      Kr(this, "mountEffect", () => {
        this.shouldMount &&
          !this.didMount &&
          this.ref.current !== null &&
          ((this.didMount = !0), this.mounted.resolve());
      });
      (this.ref = { current: null }),
        (this.mounted = null),
        (this.didMount = !1),
        (this.shouldMount = !1),
        (this.setShouldMount = null);
    }
    static create() {
      return new gl();
    }
    static use() {
      const t = Vm(gl.create).current,
        [n, r] = M.useState(!1);
      return (
        (t.shouldMount = n),
        (t.setShouldMount = r),
        M.useEffect(t.mountEffect, [n]),
        t
      );
    }
    mount() {
      return (
        this.mounted ||
          ((this.mounted = GS()),
          (this.shouldMount = !0),
          this.setShouldMount(this.shouldMount)),
        this.mounted
      );
    }
    start(...t) {
      this.mount().then(() => {
        var n;
        return (n = this.ref.current) == null ? void 0 : n.start(...t);
      });
    }
    stop(...t) {
      this.mount().then(() => {
        var n;
        return (n = this.ref.current) == null ? void 0 : n.stop(...t);
      });
    }
    pulsate(...t) {
      this.mount().then(() => {
        var n;
        return (n = this.ref.current) == null ? void 0 : n.pulsate(...t);
      });
    }
  }
  function HS() {
    return gl.use();
  }
  function GS() {
    let e, t;
    const n = new Promise((r, o) => {
      (e = r), (t = o);
    });
    return (n.resolve = e), (n.reject = t), n;
  }
  function KS(e) {
    const {
        className: t,
        classes: n,
        pulsate: r = !1,
        rippleX: o,
        rippleY: i,
        rippleSize: l,
        in: s,
        onExited: a,
        timeout: u,
      } = e,
      [f, p] = M.useState(!1),
      m = de(t, n.ripple, n.rippleVisible, r && n.ripplePulsate),
      w = { width: l, height: l, top: -(l / 2) + i, left: -(l / 2) + o },
      v = de(n.child, f && n.childLeaving, r && n.childPulsate);
    return (
      !s && !f && p(!0),
      M.useEffect(() => {
        if (!s && a != null) {
          const S = setTimeout(a, u);
          return () => {
            clearTimeout(S);
          };
        }
      }, [a, s, u]),
      I.jsx("span", {
        className: m,
        style: w,
        children: I.jsx("span", { className: v }),
      })
    );
  }
  const Ct = ct("MuiTouchRipple", [
      "root",
      "ripple",
      "rippleVisible",
      "ripplePulsate",
      "child",
      "childLeaving",
      "childPulsate",
    ]),
    Fa = 550,
    QS = 80,
    YS = Uu`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`,
    XS = Uu`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`,
    qS = Uu`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`,
    ZS = Ae("span", { name: "MuiTouchRipple", slot: "Root" })({
      overflow: "hidden",
      pointerEvents: "none",
      position: "absolute",
      zIndex: 0,
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      borderRadius: "inherit",
    }),
    JS = Ae(KS, { name: "MuiTouchRipple", slot: "Ripple" })`
  opacity: 0;
  position: absolute;

  &.${Ct.rippleVisible} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${YS};
    animation-duration: ${Fa}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  &.${Ct.ripplePulsate} {
    animation-duration: ${({ theme: e }) => e.transitions.duration.shorter}ms;
  }

  & .${Ct.child} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${Ct.childLeaving} {
    opacity: 0;
    animation-name: ${XS};
    animation-duration: ${Fa}ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
  }

  & .${Ct.childPulsate} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${qS};
    animation-duration: 2500ms;
    animation-timing-function: ${({ theme: e }) =>
      e.transitions.easing.easeInOut};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`,
    ew = M.forwardRef(function (t, n) {
      const r = ft({ props: t, name: "MuiTouchRipple" }),
        { center: o = !1, classes: i = {}, className: l, ...s } = r,
        [a, u] = M.useState([]),
        f = M.useRef(0),
        p = M.useRef(null);
      M.useEffect(() => {
        p.current && (p.current(), (p.current = null));
      }, [a]);
      const m = M.useRef(!1),
        w = h1(),
        v = M.useRef(null),
        S = M.useRef(null),
        P = M.useCallback(
          (x) => {
            const {
              pulsate: k,
              rippleX: E,
              rippleY: T,
              rippleSize: _,
              cb: d,
            } = x;
            u((R) => [
              ...R,
              I.jsx(
                JS,
                {
                  classes: {
                    ripple: de(i.ripple, Ct.ripple),
                    rippleVisible: de(i.rippleVisible, Ct.rippleVisible),
                    ripplePulsate: de(i.ripplePulsate, Ct.ripplePulsate),
                    child: de(i.child, Ct.child),
                    childLeaving: de(i.childLeaving, Ct.childLeaving),
                    childPulsate: de(i.childPulsate, Ct.childPulsate),
                  },
                  timeout: Fa,
                  pulsate: k,
                  rippleX: E,
                  rippleY: T,
                  rippleSize: _,
                },
                f.current
              ),
            ]),
              (f.current += 1),
              (p.current = d);
          },
          [i]
        ),
        g = M.useCallback(
          (x = {}, k = {}, E = () => {}) => {
            const {
              pulsate: T = !1,
              center: _ = o || k.pulsate,
              fakeElement: d = !1,
            } = k;
            if ((x == null ? void 0 : x.type) === "mousedown" && m.current) {
              m.current = !1;
              return;
            }
            (x == null ? void 0 : x.type) === "touchstart" && (m.current = !0);
            const R = d ? null : S.current,
              L = R
                ? R.getBoundingClientRect()
                : { width: 0, height: 0, left: 0, top: 0 };
            let F, G, Y;
            if (
              _ ||
              x === void 0 ||
              (x.clientX === 0 && x.clientY === 0) ||
              (!x.clientX && !x.touches)
            )
              (F = Math.round(L.width / 2)), (G = Math.round(L.height / 2));
            else {
              const { clientX: re, clientY: X } =
                x.touches && x.touches.length > 0 ? x.touches[0] : x;
              (F = Math.round(re - L.left)), (G = Math.round(X - L.top));
            }
            if (_)
              (Y = Math.sqrt((2 * L.width ** 2 + L.height ** 2) / 3)),
                Y % 2 === 0 && (Y += 1);
            else {
              const re =
                  Math.max(Math.abs((R ? R.clientWidth : 0) - F), F) * 2 + 2,
                X = Math.max(Math.abs((R ? R.clientHeight : 0) - G), G) * 2 + 2;
              Y = Math.sqrt(re ** 2 + X ** 2);
            }
            x != null && x.touches
              ? v.current === null &&
                ((v.current = () => {
                  P({
                    pulsate: T,
                    rippleX: F,
                    rippleY: G,
                    rippleSize: Y,
                    cb: E,
                  });
                }),
                w.start(QS, () => {
                  v.current && (v.current(), (v.current = null));
                }))
              : P({ pulsate: T, rippleX: F, rippleY: G, rippleSize: Y, cb: E });
          },
          [o, P, w]
        ),
        h = M.useCallback(() => {
          g({}, { pulsate: !0 });
        }, [g]),
        c = M.useCallback(
          (x, k) => {
            if (
              (w.clear(),
              (x == null ? void 0 : x.type) === "touchend" && v.current)
            ) {
              v.current(),
                (v.current = null),
                w.start(0, () => {
                  c(x, k);
                });
              return;
            }
            (v.current = null),
              u((E) => (E.length > 0 ? E.slice(1) : E)),
              (p.current = k);
          },
          [w]
        );
      return (
        M.useImperativeHandle(n, () => ({ pulsate: h, start: g, stop: c }), [
          h,
          g,
          c,
        ]),
        I.jsx(ZS, {
          className: de(Ct.root, i.root, l),
          ref: S,
          ...s,
          children: I.jsx(ic, { component: null, exit: !0, children: a }),
        })
      );
    });
  function tw(e) {
    return nt("MuiButtonBase", e);
  }
  const nw = ct("MuiButtonBase", ["root", "disabled", "focusVisible"]),
    rw = (e) => {
      const {
          disabled: t,
          focusVisible: n,
          focusVisibleClassName: r,
          classes: o,
        } = e,
        l = dt({ root: ["root", t && "disabled", n && "focusVisible"] }, tw, o);
      return n && r && (l.root += ` ${r}`), l;
    },
    ow = Ae("button", {
      name: "MuiButtonBase",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
      boxSizing: "border-box",
      WebkitTapHighlightColor: "transparent",
      backgroundColor: "transparent",
      outline: 0,
      border: 0,
      margin: 0,
      borderRadius: 0,
      padding: 0,
      cursor: "pointer",
      userSelect: "none",
      verticalAlign: "middle",
      MozAppearance: "none",
      WebkitAppearance: "none",
      textDecoration: "none",
      color: "inherit",
      "&::-moz-focus-inner": { borderStyle: "none" },
      [`&.${nw.disabled}`]: { pointerEvents: "none", cursor: "default" },
      "@media print": { colorAdjust: "exact" },
    }),
    lc = M.forwardRef(function (t, n) {
      const r = ft({ props: t, name: "MuiButtonBase" }),
        {
          action: o,
          centerRipple: i = !1,
          children: l,
          className: s,
          component: a = "button",
          disabled: u = !1,
          disableRipple: f = !1,
          disableTouchRipple: p = !1,
          focusRipple: m = !1,
          focusVisibleClassName: w,
          LinkComponent: v = "a",
          onBlur: S,
          onClick: P,
          onContextMenu: g,
          onDragLeave: h,
          onFocus: c,
          onFocusVisible: x,
          onKeyDown: k,
          onKeyUp: E,
          onMouseDown: T,
          onMouseLeave: _,
          onMouseUp: d,
          onTouchEnd: R,
          onTouchMove: L,
          onTouchStart: F,
          tabIndex: G = 0,
          TouchRippleProps: Y,
          touchRippleRef: re,
          type: X,
          ...We
        } = r,
        A = M.useRef(null),
        z = HS(),
        C = ml(z.ref, re),
        [y, O] = M.useState(!1);
      u && y && O(!1),
        M.useImperativeHandle(
          o,
          () => ({
            focusVisible: () => {
              O(!0), A.current.focus();
            },
          }),
          []
        );
      const D = z.shouldMount && !f && !u;
      M.useEffect(() => {
        y && m && !f && z.pulsate();
      }, [f, m, y, z]);
      function j(V, an, er = p) {
        return xi((ae) => (an && an(ae), er || z[V](ae), !0));
      }
      const U = j("start", T),
        W = j("stop", g),
        B = j("stop", h),
        H = j("stop", d),
        Z = j("stop", (V) => {
          y && V.preventDefault(), _ && _(V);
        }),
        fe = j("start", F),
        ne = j("stop", R),
        se = j("stop", L),
        J = j(
          "stop",
          (V) => {
            _d(V.target) || O(!1), S && S(V);
          },
          !1
        ),
        K = xi((V) => {
          A.current || (A.current = V.currentTarget),
            _d(V.target) && (O(!0), x && x(V)),
            c && c(V);
        }),
        Me = () => {
          const V = A.current;
          return a && a !== "button" && !(V.tagName === "A" && V.href);
        },
        me = xi((V) => {
          m &&
            !V.repeat &&
            y &&
            V.key === " " &&
            z.stop(V, () => {
              z.start(V);
            }),
            V.target === V.currentTarget &&
              Me() &&
              V.key === " " &&
              V.preventDefault(),
            k && k(V),
            V.target === V.currentTarget &&
              Me() &&
              V.key === "Enter" &&
              !u &&
              (V.preventDefault(), P && P(V));
        }),
        be = xi((V) => {
          m &&
            V.key === " " &&
            y &&
            !V.defaultPrevented &&
            z.stop(V, () => {
              z.pulsate(V);
            }),
            E && E(V),
            P &&
              V.target === V.currentTarget &&
              Me() &&
              V.key === " " &&
              !V.defaultPrevented &&
              P(V);
        });
      let Ue = a;
      Ue === "button" && (We.href || We.to) && (Ue = v);
      const Ve = {};
      Ue === "button"
        ? ((Ve.type = X === void 0 ? "button" : X), (Ve.disabled = u))
        : (!We.href && !We.to && (Ve.role = "button"),
          u && (Ve["aria-disabled"] = u));
      const Xe = ml(n, A),
        In = {
          ...r,
          centerRipple: i,
          component: a,
          disabled: u,
          disableRipple: f,
          disableTouchRipple: p,
          focusRipple: m,
          tabIndex: G,
          focusVisible: y,
        },
        Jn = rw(In);
      return I.jsxs(ow, {
        as: Ue,
        className: de(Jn.root, s),
        ownerState: In,
        onBlur: J,
        onClick: P,
        onContextMenu: W,
        onFocus: K,
        onKeyDown: me,
        onKeyUp: be,
        onMouseDown: U,
        onMouseLeave: Z,
        onMouseUp: H,
        onDragLeave: B,
        onTouchEnd: ne,
        onTouchMove: se,
        onTouchStart: fe,
        ref: Xe,
        tabIndex: u ? -1 : G,
        type: X,
        ...Ve,
        ...We,
        children: [l, D ? I.jsx(ew, { ref: C, center: i, ...Y }) : null],
      });
    });
  function iw(e) {
    return nt("MuiIconButton", e);
  }
  const lw = ct("MuiIconButton", [
      "root",
      "disabled",
      "colorInherit",
      "colorPrimary",
      "colorSecondary",
      "colorError",
      "colorInfo",
      "colorSuccess",
      "colorWarning",
      "edgeStart",
      "edgeEnd",
      "sizeSmall",
      "sizeMedium",
      "sizeLarge",
    ]),
    sw = (e) => {
      const { classes: t, disabled: n, color: r, edge: o, size: i } = e,
        l = {
          root: [
            "root",
            n && "disabled",
            r !== "default" && `color${oe(r)}`,
            o && `edge${oe(o)}`,
            `size${oe(i)}`,
          ],
        };
      return dt(l, iw, t);
    },
    aw = Ae(lc, {
      name: "MuiIconButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.color !== "default" && t[`color${oe(n.color)}`],
          n.edge && t[`edge${oe(n.edge)}`],
          t[`size${oe(n.size)}`],
        ];
      },
    })(
      Mn(({ theme: e }) => ({
        textAlign: "center",
        flex: "0 0 auto",
        fontSize: e.typography.pxToRem(24),
        padding: 8,
        borderRadius: "50%",
        color: (e.vars || e).palette.action.active,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shortest,
        }),
        variants: [
          {
            props: { disableRipple: !1 },
            style: {
              "&:hover": {
                backgroundColor: e.vars
                  ? `rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`
                  : ot(e.palette.action.active, e.palette.action.hoverOpacity),
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            },
          },
          { props: { edge: "start" }, style: { marginLeft: -12 } },
          {
            props: { edge: "start", size: "small" },
            style: { marginLeft: -3 },
          },
          { props: { edge: "end" }, style: { marginRight: -12 } },
          { props: { edge: "end", size: "small" }, style: { marginRight: -3 } },
        ],
      })),
      Mn(({ theme: e }) => ({
        variants: [
          { props: { color: "inherit" }, style: { color: "inherit" } },
          ...Object.entries(e.palette)
            .filter(([, t]) => t && t.main)
            .map(([t]) => ({
              props: { color: t },
              style: { color: (e.vars || e).palette[t].main },
            })),
          ...Object.entries(e.palette)
            .filter(([, t]) => t && t.main)
            .map(([t]) => ({
              props: { color: t, disableRipple: !1 },
              style: {
                "&:hover": {
                  backgroundColor: e.vars
                    ? `rgba(${(e.vars || e).palette[t].mainChannel} / ${
                        e.vars.palette.action.hoverOpacity
                      })`
                    : ot(
                        (e.vars || e).palette[t].main,
                        e.palette.action.hoverOpacity
                      ),
                  "@media (hover: none)": { backgroundColor: "transparent" },
                },
              },
            })),
          {
            props: { size: "small" },
            style: { padding: 5, fontSize: e.typography.pxToRem(18) },
          },
          {
            props: { size: "large" },
            style: { padding: 12, fontSize: e.typography.pxToRem(28) },
          },
        ],
        [`&.${lw.disabled}`]: {
          backgroundColor: "transparent",
          color: (e.vars || e).palette.action.disabled,
        },
      }))
    ),
    Vd = M.forwardRef(function (t, n) {
      const r = ft({ props: t, name: "MuiIconButton" }),
        {
          edge: o = !1,
          children: i,
          className: l,
          color: s = "default",
          disabled: a = !1,
          disableFocusRipple: u = !1,
          disableRipple: f = !1,
          size: p = "medium",
          ...m
        } = r,
        w = {
          ...r,
          edge: o,
          color: s,
          disabled: a,
          disableFocusRipple: u,
          disableRipple: f,
          size: p,
        },
        v = sw(w);
      return I.jsx(aw, {
        className: de(v.root, l),
        centerRipple: !0,
        focusRipple: !u,
        disabled: a,
        disableRipple: f,
        ref: n,
        ...m,
        ownerState: w,
        children: i,
      });
    });
  function uw(e) {
    return nt("MuiTypography", e);
  }
  const Hd = ct("MuiTypography", [
      "root",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "subtitle1",
      "subtitle2",
      "body1",
      "body2",
      "inherit",
      "button",
      "caption",
      "overline",
      "alignLeft",
      "alignRight",
      "alignCenter",
      "alignJustify",
      "noWrap",
      "gutterBottom",
      "paragraph",
    ]),
    cw = {
      primary: !0,
      secondary: !0,
      error: !0,
      info: !0,
      success: !0,
      warning: !0,
      textPrimary: !0,
      textSecondary: !0,
      textDisabled: !0,
    },
    dw = RS(),
    fw = (e) => {
      const {
          align: t,
          gutterBottom: n,
          noWrap: r,
          paragraph: o,
          variant: i,
          classes: l,
        } = e,
        s = {
          root: [
            "root",
            i,
            e.align !== "inherit" && `align${oe(t)}`,
            n && "gutterBottom",
            r && "noWrap",
            o && "paragraph",
          ],
        };
      return dt(s, uw, l);
    },
    pw = Ae("span", {
      name: "MuiTypography",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          n.variant && t[n.variant],
          n.align !== "inherit" && t[`align${oe(n.align)}`],
          n.noWrap && t.noWrap,
          n.gutterBottom && t.gutterBottom,
          n.paragraph && t.paragraph,
        ];
      },
    })(
      Mn(({ theme: e }) => {
        var t;
        return {
          margin: 0,
          variants: [
            {
              props: { variant: "inherit" },
              style: {
                font: "inherit",
                lineHeight: "inherit",
                letterSpacing: "inherit",
              },
            },
            ...Object.entries(e.typography)
              .filter(([n, r]) => n !== "inherit" && r && typeof r == "object")
              .map(([n, r]) => ({ props: { variant: n }, style: r })),
            ...Object.entries(e.palette)
              .filter(([, n]) => n && n.main)
              .map(([n]) => ({
                props: { color: n },
                style: { color: (e.vars || e).palette[n].main },
              })),
            ...Object.entries(((t = e.palette) == null ? void 0 : t.text) || {})
              .filter(([, n]) => typeof n == "string")
              .map(([n]) => ({
                props: { color: `text${oe(n)}` },
                style: { color: (e.vars || e).palette.text[n] },
              })),
            {
              props: ({ ownerState: n }) => n.align !== "inherit",
              style: { textAlign: "var(--Typography-textAlign)" },
            },
            {
              props: ({ ownerState: n }) => n.noWrap,
              style: {
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              },
            },
            {
              props: ({ ownerState: n }) => n.gutterBottom,
              style: { marginBottom: "0.35em" },
            },
            {
              props: ({ ownerState: n }) => n.paragraph,
              style: { marginBottom: 16 },
            },
          ],
        };
      })
    ),
    Gd = {
      h1: "h1",
      h2: "h2",
      h3: "h3",
      h4: "h4",
      h5: "h5",
      h6: "h6",
      subtitle1: "h6",
      subtitle2: "h6",
      body1: "p",
      body2: "p",
      inherit: "p",
    },
    Fn = M.forwardRef(function (t, n) {
      const { color: r, ...o } = ft({ props: t, name: "MuiTypography" }),
        i = !cw[r],
        l = dw({ ...o, ...(i && { color: r }) }),
        {
          align: s = "inherit",
          className: a,
          component: u,
          gutterBottom: f = !1,
          noWrap: p = !1,
          paragraph: m = !1,
          variant: w = "body1",
          variantMapping: v = Gd,
          ...S
        } = l,
        P = {
          ...l,
          align: s,
          color: r,
          className: a,
          component: u,
          gutterBottom: f,
          noWrap: p,
          paragraph: m,
          variant: w,
          variantMapping: v,
        },
        g = u || (m ? "p" : v[w] || Gd[w]) || "span",
        h = fw(P);
      return I.jsx(pw, {
        as: g,
        ref: n,
        className: de(h.root, a),
        ...S,
        ownerState: P,
        style: {
          ...(s !== "inherit" && { "--Typography-textAlign": s }),
          ...S.style,
        },
      });
    });
  function Kd(e) {
    return typeof e == "string";
  }
  const mw = ct("MuiBox", ["root"]),
    hw = rs(),
    th = Zv({
      themeId: Lt,
      defaultTheme: hw,
      defaultClassName: mw.root,
      generateClassName: jm.generate,
    });
  function gw(e) {
    return nt("MuiButton", e);
  }
  const ur = ct("MuiButton", [
      "root",
      "text",
      "textInherit",
      "textPrimary",
      "textSecondary",
      "textSuccess",
      "textError",
      "textInfo",
      "textWarning",
      "outlined",
      "outlinedInherit",
      "outlinedPrimary",
      "outlinedSecondary",
      "outlinedSuccess",
      "outlinedError",
      "outlinedInfo",
      "outlinedWarning",
      "contained",
      "containedInherit",
      "containedPrimary",
      "containedSecondary",
      "containedSuccess",
      "containedError",
      "containedInfo",
      "containedWarning",
      "disableElevation",
      "focusVisible",
      "disabled",
      "colorInherit",
      "colorPrimary",
      "colorSecondary",
      "colorSuccess",
      "colorError",
      "colorInfo",
      "colorWarning",
      "textSizeSmall",
      "textSizeMedium",
      "textSizeLarge",
      "outlinedSizeSmall",
      "outlinedSizeMedium",
      "outlinedSizeLarge",
      "containedSizeSmall",
      "containedSizeMedium",
      "containedSizeLarge",
      "sizeMedium",
      "sizeSmall",
      "sizeLarge",
      "fullWidth",
      "startIcon",
      "endIcon",
      "icon",
      "iconSizeSmall",
      "iconSizeMedium",
      "iconSizeLarge",
    ]),
    yw = M.createContext({}),
    vw = M.createContext(void 0),
    Sw = (e) => {
      const {
          color: t,
          disableElevation: n,
          fullWidth: r,
          size: o,
          variant: i,
          classes: l,
        } = e,
        s = {
          root: [
            "root",
            i,
            `${i}${oe(t)}`,
            `size${oe(o)}`,
            `${i}Size${oe(o)}`,
            `color${oe(t)}`,
            n && "disableElevation",
            r && "fullWidth",
          ],
          label: ["label"],
          startIcon: ["icon", "startIcon", `iconSize${oe(o)}`],
          endIcon: ["icon", "endIcon", `iconSize${oe(o)}`],
        },
        a = dt(s, gw, l);
      return { ...l, ...a };
    },
    nh = [
      {
        props: { size: "small" },
        style: { "& > *:nth-of-type(1)": { fontSize: 18 } },
      },
      {
        props: { size: "medium" },
        style: { "& > *:nth-of-type(1)": { fontSize: 20 } },
      },
      {
        props: { size: "large" },
        style: { "& > *:nth-of-type(1)": { fontSize: 22 } },
      },
    ],
    ww = Ae(lc, {
      shouldForwardProp: (e) => rc(e) || e === "classes",
      name: "MuiButton",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          t[n.variant],
          t[`${n.variant}${oe(n.color)}`],
          t[`size${oe(n.size)}`],
          t[`${n.variant}Size${oe(n.size)}`],
          n.color === "inherit" && t.colorInherit,
          n.disableElevation && t.disableElevation,
          n.fullWidth && t.fullWidth,
        ];
      },
    })(
      Mn(({ theme: e }) => {
        var r, o;
        const t =
            e.palette.mode === "light"
              ? e.palette.grey[300]
              : e.palette.grey[800],
          n =
            e.palette.mode === "light"
              ? e.palette.grey.A100
              : e.palette.grey[700];
        return {
          ...e.typography.button,
          minWidth: 64,
          padding: "6px 16px",
          border: 0,
          borderRadius: (e.vars || e).shape.borderRadius,
          transition: e.transitions.create(
            ["background-color", "box-shadow", "border-color", "color"],
            { duration: e.transitions.duration.short }
          ),
          "&:hover": { textDecoration: "none" },
          [`&.${ur.disabled}`]: {
            color: (e.vars || e).palette.action.disabled,
          },
          variants: [
            {
              props: { variant: "contained" },
              style: {
                color: "var(--variant-containedColor)",
                backgroundColor: "var(--variant-containedBg)",
                boxShadow: (e.vars || e).shadows[2],
                "&:hover": {
                  boxShadow: (e.vars || e).shadows[4],
                  "@media (hover: none)": {
                    boxShadow: (e.vars || e).shadows[2],
                  },
                },
                "&:active": { boxShadow: (e.vars || e).shadows[8] },
                [`&.${ur.focusVisible}`]: {
                  boxShadow: (e.vars || e).shadows[6],
                },
                [`&.${ur.disabled}`]: {
                  color: (e.vars || e).palette.action.disabled,
                  boxShadow: (e.vars || e).shadows[0],
                  backgroundColor: (e.vars || e).palette.action
                    .disabledBackground,
                },
              },
            },
            {
              props: { variant: "outlined" },
              style: {
                padding: "5px 15px",
                border: "1px solid currentColor",
                borderColor: "var(--variant-outlinedBorder, currentColor)",
                backgroundColor: "var(--variant-outlinedBg)",
                color: "var(--variant-outlinedColor)",
                [`&.${ur.disabled}`]: {
                  border: `1px solid ${
                    (e.vars || e).palette.action.disabledBackground
                  }`,
                },
              },
            },
            {
              props: { variant: "text" },
              style: {
                padding: "6px 8px",
                color: "var(--variant-textColor)",
                backgroundColor: "var(--variant-textBg)",
              },
            },
            ...Object.entries(e.palette)
              .filter(([, i]) => i && i.main && i.dark && i.contrastText)
              .map(([i]) => ({
                props: { color: i },
                style: {
                  "--variant-textColor": (e.vars || e).palette[i].main,
                  "--variant-outlinedColor": (e.vars || e).palette[i].main,
                  "--variant-outlinedBorder": e.vars
                    ? `rgba(${e.vars.palette[i].mainChannel} / 0.5)`
                    : ot(e.palette[i].main, 0.5),
                  "--variant-containedColor": (e.vars || e).palette[i]
                    .contrastText,
                  "--variant-containedBg": (e.vars || e).palette[i].main,
                  "@media (hover: hover)": {
                    "&:hover": {
                      "--variant-containedBg": (e.vars || e).palette[i].dark,
                      "--variant-textBg": e.vars
                        ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                        : ot(e.palette[i].main, e.palette.action.hoverOpacity),
                      "--variant-outlinedBorder": (e.vars || e).palette[i].main,
                      "--variant-outlinedBg": e.vars
                        ? `rgba(${e.vars.palette[i].mainChannel} / ${e.vars.palette.action.hoverOpacity})`
                        : ot(e.palette[i].main, e.palette.action.hoverOpacity),
                    },
                  },
                },
              })),
            {
              props: { color: "inherit" },
              style: {
                "--variant-containedColor": e.vars
                  ? e.vars.palette.text.primary
                  : (o = (r = e.palette).getContrastText) == null
                  ? void 0
                  : o.call(r, t),
                "--variant-containedBg": e.vars
                  ? e.vars.palette.Button.inheritContainedBg
                  : t,
                "@media (hover: hover)": {
                  "&:hover": {
                    "--variant-containedBg": e.vars
                      ? e.vars.palette.Button.inheritContainedHoverBg
                      : n,
                    "--variant-textBg": e.vars
                      ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : ot(
                          e.palette.text.primary,
                          e.palette.action.hoverOpacity
                        ),
                    "--variant-outlinedBg": e.vars
                      ? `rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`
                      : ot(
                          e.palette.text.primary,
                          e.palette.action.hoverOpacity
                        ),
                  },
                },
              },
            },
            {
              props: { size: "small", variant: "text" },
              style: { padding: "4px 5px", fontSize: e.typography.pxToRem(13) },
            },
            {
              props: { size: "large", variant: "text" },
              style: {
                padding: "8px 11px",
                fontSize: e.typography.pxToRem(15),
              },
            },
            {
              props: { size: "small", variant: "outlined" },
              style: { padding: "3px 9px", fontSize: e.typography.pxToRem(13) },
            },
            {
              props: { size: "large", variant: "outlined" },
              style: {
                padding: "7px 21px",
                fontSize: e.typography.pxToRem(15),
              },
            },
            {
              props: { size: "small", variant: "contained" },
              style: {
                padding: "4px 10px",
                fontSize: e.typography.pxToRem(13),
              },
            },
            {
              props: { size: "large", variant: "contained" },
              style: {
                padding: "8px 22px",
                fontSize: e.typography.pxToRem(15),
              },
            },
            {
              props: { disableElevation: !0 },
              style: {
                boxShadow: "none",
                "&:hover": { boxShadow: "none" },
                [`&.${ur.focusVisible}`]: { boxShadow: "none" },
                "&:active": { boxShadow: "none" },
                [`&.${ur.disabled}`]: { boxShadow: "none" },
              },
            },
            { props: { fullWidth: !0 }, style: { width: "100%" } },
          ],
        };
      })
    ),
    xw = Ae("span", {
      name: "MuiButton",
      slot: "StartIcon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.startIcon, t[`iconSize${oe(n.size)}`]];
      },
    })({
      display: "inherit",
      marginRight: 8,
      marginLeft: -4,
      variants: [
        { props: { size: "small" }, style: { marginLeft: -2 } },
        ...nh,
      ],
    }),
    Cw = Ae("span", {
      name: "MuiButton",
      slot: "EndIcon",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.endIcon, t[`iconSize${oe(n.size)}`]];
      },
    })({
      display: "inherit",
      marginRight: -4,
      marginLeft: 8,
      variants: [
        { props: { size: "small" }, style: { marginRight: -2 } },
        ...nh,
      ],
    }),
    rh = M.forwardRef(function (t, n) {
      const r = M.useContext(yw),
        o = M.useContext(vw),
        i = Wo(r, t),
        l = ft({ props: i, name: "MuiButton" }),
        {
          children: s,
          color: a = "primary",
          component: u = "button",
          className: f,
          disabled: p = !1,
          disableElevation: m = !1,
          disableFocusRipple: w = !1,
          endIcon: v,
          focusVisibleClassName: S,
          fullWidth: P = !1,
          size: g = "medium",
          startIcon: h,
          type: c,
          variant: x = "text",
          ...k
        } = l,
        E = {
          ...l,
          color: a,
          component: u,
          disabled: p,
          disableElevation: m,
          disableFocusRipple: w,
          fullWidth: P,
          size: g,
          type: c,
          variant: x,
        },
        T = Sw(E),
        _ =
          h &&
          I.jsx(xw, { className: T.startIcon, ownerState: E, children: h }),
        d =
          v && I.jsx(Cw, { className: T.endIcon, ownerState: E, children: v }),
        R = o || "";
      return I.jsxs(ww, {
        ownerState: E,
        className: de(r.className, T.root, f, R),
        component: u,
        disabled: p,
        focusRipple: !w,
        focusVisibleClassName: de(T.focusVisible, S),
        ref: n,
        type: c,
        ...k,
        classes: T,
        children: [_, s, d],
      });
    });
  function kw(e) {
    return nt("MuiCard", e);
  }
  ct("MuiCard", ["root"]);
  const Ew = (e) => {
      const { classes: t } = e;
      return dt({ root: ["root"] }, kw, t);
    },
    Tw = Ae(VS, {
      name: "MuiCard",
      slot: "Root",
      overridesResolver: (e, t) => t.root,
    })({ overflow: "hidden" }),
    Pw = M.forwardRef(function (t, n) {
      const r = ft({ props: t, name: "MuiCard" }),
        { className: o, raised: i = !1, ...l } = r,
        s = { ...r, raised: i },
        a = Ew(s);
      return I.jsx(Tw, {
        className: de(a.root, o),
        elevation: i ? 8 : void 0,
        ref: n,
        ownerState: s,
        ...l,
      });
    }),
    $w = F1({
      createStyledComponent: Ae("div", {
        name: "MuiContainer",
        slot: "Root",
        overridesResolver: (e, t) => {
          const { ownerState: n } = e;
          return [
            t.root,
            t[`maxWidth${oe(String(n.maxWidth))}`],
            n.fixed && t.fixed,
            n.disableGutters && t.disableGutters,
          ];
        },
      }),
      useThemeProps: (e) => Zm({ props: e, name: "MuiContainer" }),
    }),
    Da = typeof Jm({}) == "function",
    Mw = (e, t) => ({
      WebkitFontSmoothing: "antialiased",
      MozOsxFontSmoothing: "grayscale",
      boxSizing: "border-box",
      WebkitTextSizeAdjust: "100%",
      ...(t && !e.vars && { colorScheme: e.palette.mode }),
    }),
    Rw = (e) => ({
      color: (e.vars || e).palette.text.primary,
      ...e.typography.body1,
      backgroundColor: (e.vars || e).palette.background.default,
      "@media print": { backgroundColor: (e.vars || e).palette.common.white },
    }),
    oh = (e, t = !1) => {
      var i, l;
      const n = {};
      t &&
        e.colorSchemes &&
        typeof e.getColorSchemeSelector == "function" &&
        Object.entries(e.colorSchemes).forEach(([s, a]) => {
          var f, p;
          const u = e.getColorSchemeSelector(s);
          u.startsWith("@")
            ? (n[u] = {
                ":root": {
                  colorScheme: (f = a.palette) == null ? void 0 : f.mode,
                },
              })
            : (n[u.replace(/\s*&/, "")] = {
                colorScheme: (p = a.palette) == null ? void 0 : p.mode,
              });
        });
      let r = {
        html: Mw(e, t),
        "*, *::before, *::after": { boxSizing: "inherit" },
        "strong, b": { fontWeight: e.typography.fontWeightBold },
        body: {
          margin: 0,
          ...Rw(e),
          "&::backdrop": {
            backgroundColor: (e.vars || e).palette.background.default,
          },
        },
        ...n,
      };
      const o =
        (l = (i = e.components) == null ? void 0 : i.MuiCssBaseline) == null
          ? void 0
          : l.styleOverrides;
      return o && (r = [r, o]), r;
    },
    Fi = "mui-ecs",
    _w = (e) => {
      const t = oh(e, !1),
        n = Array.isArray(t) ? t[0] : t;
      return (
        !e.vars &&
          n &&
          (n.html[`:root:has(${Fi})`] = { colorScheme: e.palette.mode }),
        e.colorSchemes &&
          Object.entries(e.colorSchemes).forEach(([r, o]) => {
            var l, s;
            const i = e.getColorSchemeSelector(r);
            i.startsWith("@")
              ? (n[i] = {
                  [`:root:not(:has(.${Fi}))`]: {
                    colorScheme: (l = o.palette) == null ? void 0 : l.mode,
                  },
                })
              : (n[i.replace(/\s*&/, "")] = {
                  [`&:not(:has(.${Fi}))`]: {
                    colorScheme: (s = o.palette) == null ? void 0 : s.mode,
                  },
                });
          }),
        t
      );
    },
    bw = Jm(
      Da
        ? ({ theme: e, enableColorScheme: t }) => oh(e, t)
        : ({ theme: e }) => _w(e)
    );
  function Iw(e) {
    const t = ft({ props: e, name: "MuiCssBaseline" }),
      { children: n, enableColorScheme: r = !1 } = t;
    return I.jsxs(M.Fragment, {
      children: [
        Da && I.jsx(bw, { enableColorScheme: r }),
        !Da &&
          !r &&
          I.jsx("span", { className: Fi, style: { display: "none" } }),
        n,
      ],
    });
  }
  const En = M.createContext({});
  function Ow(e) {
    return nt("MuiList", e);
  }
  ct("MuiList", ["root", "padding", "dense", "subheader"]);
  const Aw = (e) => {
      const { classes: t, disablePadding: n, dense: r, subheader: o } = e;
      return dt(
        { root: ["root", !n && "padding", r && "dense", o && "subheader"] },
        Ow,
        t
      );
    },
    Nw = Ae("ul", {
      name: "MuiList",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          t.root,
          !n.disablePadding && t.padding,
          n.dense && t.dense,
          n.subheader && t.subheader,
        ];
      },
    })({
      listStyle: "none",
      margin: 0,
      padding: 0,
      position: "relative",
      variants: [
        {
          props: ({ ownerState: e }) => !e.disablePadding,
          style: { paddingTop: 8, paddingBottom: 8 },
        },
        { props: ({ ownerState: e }) => e.subheader, style: { paddingTop: 0 } },
      ],
    }),
    zw = M.forwardRef(function (t, n) {
      const r = ft({ props: t, name: "MuiList" }),
        {
          children: o,
          className: i,
          component: l = "ul",
          dense: s = !1,
          disablePadding: a = !1,
          subheader: u,
          ...f
        } = r,
        p = M.useMemo(() => ({ dense: s }), [s]),
        m = { ...r, component: l, dense: s, disablePadding: a },
        w = Aw(m);
      return I.jsx(En.Provider, {
        value: p,
        children: I.jsxs(Nw, {
          as: l,
          className: de(w.root, i),
          ref: n,
          ownerState: m,
          ...f,
          children: [u, o],
        }),
      });
    });
  function Lw(e) {
    return nt("MuiListItem", e);
  }
  ct("MuiListItem", [
    "root",
    "container",
    "dense",
    "alignItemsFlexStart",
    "divider",
    "gutters",
    "padding",
    "secondaryAction",
  ]);
  function jw(e) {
    return nt("MuiListItemButton", e);
  }
  const cr = ct("MuiListItemButton", [
      "root",
      "focusVisible",
      "dense",
      "alignItemsFlexStart",
      "disabled",
      "divider",
      "gutters",
      "selected",
    ]),
    Bw = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.dense && t.dense,
        n.alignItems === "flex-start" && t.alignItemsFlexStart,
        n.divider && t.divider,
        !n.disableGutters && t.gutters,
      ];
    },
    Fw = (e) => {
      const {
          alignItems: t,
          classes: n,
          dense: r,
          disabled: o,
          disableGutters: i,
          divider: l,
          selected: s,
        } = e,
        u = dt(
          {
            root: [
              "root",
              r && "dense",
              !i && "gutters",
              l && "divider",
              o && "disabled",
              t === "flex-start" && "alignItemsFlexStart",
              s && "selected",
            ],
          },
          jw,
          n
        );
      return { ...n, ...u };
    },
    Dw = Ae(lc, {
      shouldForwardProp: (e) => rc(e) || e === "classes",
      name: "MuiListItemButton",
      slot: "Root",
      overridesResolver: Bw,
    })(
      Mn(({ theme: e }) => ({
        display: "flex",
        flexGrow: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        minWidth: 0,
        boxSizing: "border-box",
        textAlign: "left",
        paddingTop: 8,
        paddingBottom: 8,
        transition: e.transitions.create("background-color", {
          duration: e.transitions.duration.shortest,
        }),
        "&:hover": {
          textDecoration: "none",
          backgroundColor: (e.vars || e).palette.action.hover,
          "@media (hover: none)": { backgroundColor: "transparent" },
        },
        [`&.${cr.selected}`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
            : ot(e.palette.primary.main, e.palette.action.selectedOpacity),
          [`&.${cr.focusVisible}`]: {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`
              : ot(
                  e.palette.primary.main,
                  e.palette.action.selectedOpacity +
                    e.palette.action.focusOpacity
                ),
          },
        },
        [`&.${cr.selected}:hover`]: {
          backgroundColor: e.vars
            ? `rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`
            : ot(
                e.palette.primary.main,
                e.palette.action.selectedOpacity + e.palette.action.hoverOpacity
              ),
          "@media (hover: none)": {
            backgroundColor: e.vars
              ? `rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`
              : ot(e.palette.primary.main, e.palette.action.selectedOpacity),
          },
        },
        [`&.${cr.focusVisible}`]: {
          backgroundColor: (e.vars || e).palette.action.focus,
        },
        [`&.${cr.disabled}`]: {
          opacity: (e.vars || e).palette.action.disabledOpacity,
        },
        variants: [
          {
            props: ({ ownerState: t }) => t.divider,
            style: {
              borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
              backgroundClip: "padding-box",
            },
          },
          {
            props: { alignItems: "flex-start" },
            style: { alignItems: "flex-start" },
          },
          {
            props: ({ ownerState: t }) => !t.disableGutters,
            style: { paddingLeft: 16, paddingRight: 16 },
          },
          {
            props: ({ ownerState: t }) => t.dense,
            style: { paddingTop: 4, paddingBottom: 4 },
          },
        ],
      }))
    ),
    Ww = M.forwardRef(function (t, n) {
      const r = ft({ props: t, name: "MuiListItemButton" }),
        {
          alignItems: o = "center",
          autoFocus: i = !1,
          component: l = "div",
          children: s,
          dense: a = !1,
          disableGutters: u = !1,
          divider: f = !1,
          focusVisibleClassName: p,
          selected: m = !1,
          className: w,
          ...v
        } = r,
        S = M.useContext(En),
        P = M.useMemo(
          () => ({
            dense: a || S.dense || !1,
            alignItems: o,
            disableGutters: u,
          }),
          [o, S.dense, a, u]
        ),
        g = M.useRef(null);
      Wm(() => {
        i && g.current && g.current.focus();
      }, [i]);
      const h = {
          ...r,
          alignItems: o,
          dense: P.dense,
          disableGutters: u,
          divider: f,
          selected: m,
        },
        c = Fw(h),
        x = ml(g, n);
      return I.jsx(En.Provider, {
        value: P,
        children: I.jsx(Dw, {
          ref: x,
          href: v.href || v.to,
          component: (v.href || v.to) && l === "div" ? "button" : l,
          focusVisibleClassName: de(c.focusVisible, p),
          ownerState: h,
          className: de(c.root, w),
          ...v,
          classes: c,
          children: s,
        }),
      });
    });
  function Uw(e) {
    return nt("MuiListItemSecondaryAction", e);
  }
  ct("MuiListItemSecondaryAction", ["root", "disableGutters"]);
  const Vw = (e) => {
      const { disableGutters: t, classes: n } = e;
      return dt({ root: ["root", t && "disableGutters"] }, Uw, n);
    },
    Hw = Ae("div", {
      name: "MuiListItemSecondaryAction",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [t.root, n.disableGutters && t.disableGutters];
      },
    })({
      position: "absolute",
      right: 16,
      top: "50%",
      transform: "translateY(-50%)",
      variants: [
        { props: ({ ownerState: e }) => e.disableGutters, style: { right: 0 } },
      ],
    }),
    ih = M.forwardRef(function (t, n) {
      const r = ft({ props: t, name: "MuiListItemSecondaryAction" }),
        { className: o, ...i } = r,
        l = M.useContext(En),
        s = { ...r, disableGutters: l.disableGutters },
        a = Vw(s);
      return I.jsx(Hw, {
        className: de(a.root, o),
        ownerState: s,
        ref: n,
        ...i,
      });
    });
  ih.muiName = "ListItemSecondaryAction";
  const Gw = (e, t) => {
      const { ownerState: n } = e;
      return [
        t.root,
        n.dense && t.dense,
        n.alignItems === "flex-start" && t.alignItemsFlexStart,
        n.divider && t.divider,
        !n.disableGutters && t.gutters,
        !n.disablePadding && t.padding,
        n.hasSecondaryAction && t.secondaryAction,
      ];
    },
    Kw = (e) => {
      const {
        alignItems: t,
        classes: n,
        dense: r,
        disableGutters: o,
        disablePadding: i,
        divider: l,
        hasSecondaryAction: s,
      } = e;
      return dt(
        {
          root: [
            "root",
            r && "dense",
            !o && "gutters",
            !i && "padding",
            l && "divider",
            t === "flex-start" && "alignItemsFlexStart",
            s && "secondaryAction",
          ],
          container: ["container"],
        },
        Lw,
        n
      );
    },
    Qw = Ae("div", {
      name: "MuiListItem",
      slot: "Root",
      overridesResolver: Gw,
    })(
      Mn(({ theme: e }) => ({
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        position: "relative",
        textDecoration: "none",
        width: "100%",
        boxSizing: "border-box",
        textAlign: "left",
        variants: [
          {
            props: ({ ownerState: t }) => !t.disablePadding,
            style: { paddingTop: 8, paddingBottom: 8 },
          },
          {
            props: ({ ownerState: t }) => !t.disablePadding && t.dense,
            style: { paddingTop: 4, paddingBottom: 4 },
          },
          {
            props: ({ ownerState: t }) =>
              !t.disablePadding && !t.disableGutters,
            style: { paddingLeft: 16, paddingRight: 16 },
          },
          {
            props: ({ ownerState: t }) =>
              !t.disablePadding && !!t.secondaryAction,
            style: { paddingRight: 48 },
          },
          {
            props: ({ ownerState: t }) => !!t.secondaryAction,
            style: { [`& > .${cr.root}`]: { paddingRight: 48 } },
          },
          {
            props: { alignItems: "flex-start" },
            style: { alignItems: "flex-start" },
          },
          {
            props: ({ ownerState: t }) => t.divider,
            style: {
              borderBottom: `1px solid ${(e.vars || e).palette.divider}`,
              backgroundClip: "padding-box",
            },
          },
          {
            props: ({ ownerState: t }) => t.button,
            style: {
              transition: e.transitions.create("background-color", {
                duration: e.transitions.duration.shortest,
              }),
              "&:hover": {
                textDecoration: "none",
                backgroundColor: (e.vars || e).palette.action.hover,
                "@media (hover: none)": { backgroundColor: "transparent" },
              },
            },
          },
          {
            props: ({ ownerState: t }) => t.hasSecondaryAction,
            style: { paddingRight: 48 },
          },
        ],
      }))
    ),
    Yw = Ae("li", {
      name: "MuiListItem",
      slot: "Container",
      overridesResolver: (e, t) => t.container,
    })({ position: "relative" }),
    Xw = M.forwardRef(function (t, n) {
      const r = ft({ props: t, name: "MuiListItem" }),
        {
          alignItems: o = "center",
          children: i,
          className: l,
          component: s,
          components: a = {},
          componentsProps: u = {},
          ContainerComponent: f = "li",
          ContainerProps: { className: p, ...m } = {},
          dense: w = !1,
          disableGutters: v = !1,
          disablePadding: S = !1,
          divider: P = !1,
          secondaryAction: g,
          slotProps: h = {},
          slots: c = {},
          ...x
        } = r,
        k = M.useContext(En),
        E = M.useMemo(
          () => ({
            dense: w || k.dense || !1,
            alignItems: o,
            disableGutters: v,
          }),
          [o, k.dense, w, v]
        ),
        T = M.useRef(null),
        _ = M.Children.toArray(i),
        d = _.length && d1(_[_.length - 1], ["ListItemSecondaryAction"]),
        R = {
          ...r,
          alignItems: o,
          dense: E.dense,
          disableGutters: v,
          disablePadding: S,
          divider: P,
          hasSecondaryAction: d,
        },
        L = Kw(R),
        F = ml(T, n),
        G = c.root || a.Root || Qw,
        Y = h.root || u.root || {},
        re = { className: de(L.root, Y.className, l), ...x };
      let X = s || "li";
      return d
        ? ((X = !re.component && !s ? "div" : X),
          f === "li" &&
            (X === "li"
              ? (X = "div")
              : re.component === "li" && (re.component = "div")),
          I.jsx(En.Provider, {
            value: E,
            children: I.jsxs(Yw, {
              as: f,
              className: de(L.container, p),
              ref: F,
              ownerState: R,
              ...m,
              children: [
                I.jsx(G, {
                  ...Y,
                  ...(!Kd(G) && {
                    as: X,
                    ownerState: { ...R, ...Y.ownerState },
                  }),
                  ...re,
                  children: _,
                }),
                _.pop(),
              ],
            }),
          }))
        : I.jsx(En.Provider, {
            value: E,
            children: I.jsxs(G, {
              ...Y,
              as: X,
              ref: F,
              ...(!Kd(G) && { ownerState: { ...R, ...Y.ownerState } }),
              ...re,
              children: [_, g && I.jsx(ih, { children: g })],
            }),
          });
    });
  function qw(e) {
    return nt("MuiListItemText", e);
  }
  const ki = ct("MuiListItemText", [
      "root",
      "multiline",
      "dense",
      "inset",
      "primary",
      "secondary",
    ]),
    Zw = (e) => {
      const { classes: t, inset: n, primary: r, secondary: o, dense: i } = e;
      return dt(
        {
          root: ["root", n && "inset", i && "dense", r && o && "multiline"],
          primary: ["primary"],
          secondary: ["secondary"],
        },
        qw,
        t
      );
    },
    Jw = Ae("div", {
      name: "MuiListItemText",
      slot: "Root",
      overridesResolver: (e, t) => {
        const { ownerState: n } = e;
        return [
          { [`& .${ki.primary}`]: t.primary },
          { [`& .${ki.secondary}`]: t.secondary },
          t.root,
          n.inset && t.inset,
          n.primary && n.secondary && t.multiline,
          n.dense && t.dense,
        ];
      },
    })({
      flex: "1 1 auto",
      minWidth: 0,
      marginTop: 4,
      marginBottom: 4,
      [`.${Hd.root}:where(& .${ki.primary})`]: { display: "block" },
      [`.${Hd.root}:where(& .${ki.secondary})`]: { display: "block" },
      variants: [
        {
          props: ({ ownerState: e }) => e.primary && e.secondary,
          style: { marginTop: 6, marginBottom: 6 },
        },
        { props: ({ ownerState: e }) => e.inset, style: { paddingLeft: 56 } },
      ],
    }),
    ex = M.forwardRef(function (t, n) {
      const r = ft({ props: t, name: "MuiListItemText" }),
        {
          children: o,
          className: i,
          disableTypography: l = !1,
          inset: s = !1,
          primary: a,
          primaryTypographyProps: u,
          secondary: f,
          secondaryTypographyProps: p,
          ...m
        } = r,
        { dense: w } = M.useContext(En);
      let v = a ?? o,
        S = f;
      const P = {
          ...r,
          disableTypography: l,
          inset: s,
          primary: !!v,
          secondary: !!S,
          dense: w,
        },
        g = Zw(P);
      return (
        v != null &&
          v.type !== Fn &&
          !l &&
          (v = I.jsx(Fn, {
            variant: w ? "body2" : "body1",
            className: g.primary,
            component: u != null && u.variant ? void 0 : "span",
            ...u,
            children: v,
          })),
        S != null &&
          S.type !== Fn &&
          !l &&
          (S = I.jsx(Fn, {
            variant: "body2",
            className: g.secondary,
            color: "textSecondary",
            ...p,
            children: S,
          })),
        I.jsxs(Jw, {
          className: de(g.root, i),
          ownerState: P,
          ref: n,
          ...m,
          children: [v, S],
        })
      );
    }),
    tx = K1({
      createStyledComponent: Ae("div", {
        name: "MuiStack",
        slot: "Root",
        overridesResolver: (e, t) => t.root,
      }),
      useThemeProps: (e) => Zm({ props: e, name: "MuiStack" }),
    }),
    nx = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
    Qd = (e) => {
      let t;
      const n = new Set(),
        r = (f, p) => {
          const m = typeof f == "function" ? f(t) : f;
          if (!Object.is(m, t)) {
            const w = t;
            (t =
              p ?? (typeof m != "object" || m === null)
                ? m
                : Object.assign({}, t, m)),
              n.forEach((v) => v(t, w));
          }
        },
        o = () => t,
        a = {
          setState: r,
          getState: o,
          getInitialState: () => u,
          subscribe: (f) => (n.add(f), () => n.delete(f)),
          destroy: () => {
            (nx ? "production" : void 0) !== "production" &&
              console.warn(
                "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
              ),
              n.clear();
          },
        },
        u = (t = e(r, o, a));
      return a;
    },
    rx = (e) => (e ? Qd(e) : Qd);
  var lh = { exports: {} },
    sh = {},
    ah = { exports: {} },
    uh = {};
  /**
   * @license React
   * use-sync-external-store-shim.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var Br = M;
  function ox(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var ix = typeof Object.is == "function" ? Object.is : ox,
    lx = Br.useState,
    sx = Br.useEffect,
    ax = Br.useLayoutEffect,
    ux = Br.useDebugValue;
  function cx(e, t) {
    var n = t(),
      r = lx({ inst: { value: n, getSnapshot: t } }),
      o = r[0].inst,
      i = r[1];
    return (
      ax(
        function () {
          (o.value = n), (o.getSnapshot = t), Bs(o) && i({ inst: o });
        },
        [e, n, t]
      ),
      sx(
        function () {
          return (
            Bs(o) && i({ inst: o }),
            e(function () {
              Bs(o) && i({ inst: o });
            })
          );
        },
        [e]
      ),
      ux(n),
      n
    );
  }
  function Bs(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !ix(e, n);
    } catch {
      return !0;
    }
  }
  function dx(e, t) {
    return t();
  }
  var fx =
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
      ? dx
      : cx;
  uh.useSyncExternalStore =
    Br.useSyncExternalStore !== void 0 ? Br.useSyncExternalStore : fx;
  ah.exports = uh;
  var px = ah.exports;
  /**
   * @license React
   * use-sync-external-store-shim/with-selector.production.min.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var is = M,
    mx = px;
  function hx(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var gx = typeof Object.is == "function" ? Object.is : hx,
    yx = mx.useSyncExternalStore,
    vx = is.useRef,
    Sx = is.useEffect,
    wx = is.useMemo,
    xx = is.useDebugValue;
  sh.useSyncExternalStoreWithSelector = function (e, t, n, r, o) {
    var i = vx(null);
    if (i.current === null) {
      var l = { hasValue: !1, value: null };
      i.current = l;
    } else l = i.current;
    i = wx(
      function () {
        function a(w) {
          if (!u) {
            if (((u = !0), (f = w), (w = r(w)), o !== void 0 && l.hasValue)) {
              var v = l.value;
              if (o(v, w)) return (p = v);
            }
            return (p = w);
          }
          if (((v = p), gx(f, w))) return v;
          var S = r(w);
          return o !== void 0 && o(v, S) ? v : ((f = w), (p = S));
        }
        var u = !1,
          f,
          p,
          m = n === void 0 ? null : n;
        return [
          function () {
            return a(t());
          },
          m === null
            ? void 0
            : function () {
                return a(m());
              },
        ];
      },
      [t, n, r, o]
    );
    var s = yx(e, i[0], i[1]);
    return (
      Sx(
        function () {
          (l.hasValue = !0), (l.value = s);
        },
        [s]
      ),
      xx(s),
      s
    );
  };
  lh.exports = sh;
  var Cx = lh.exports;
  const kx = qd(Cx),
    ch = { BASE_URL: "/", DEV: !1, MODE: "production", PROD: !0, SSR: !1 },
    { useDebugValue: Ex } = Nn,
    { useSyncExternalStoreWithSelector: Tx } = kx;
  let Yd = !1;
  const Px = (e) => e;
  function $x(e, t = Px, n) {
    (ch ? "production" : void 0) !== "production" &&
      n &&
      !Yd &&
      (console.warn(
        "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
      ),
      (Yd = !0));
    const r = Tx(
      e.subscribe,
      e.getState,
      e.getServerState || e.getInitialState,
      t,
      n
    );
    return Ex(r), r;
  }
  const Xd = (e) => {
      (ch ? "production" : void 0) !== "production" &&
        typeof e != "function" &&
        console.warn(
          "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
        );
      const t = typeof e == "function" ? rx(e) : e,
        n = (r, o) => $x(t, r, o);
      return Object.assign(n, t), n;
    },
    Mx = (e) => (e ? Xd(e) : Xd);
  var Zo = {};
  (function e(t, n, r, o) {
    var i = !!(
        t.Worker &&
        t.Blob &&
        t.Promise &&
        t.OffscreenCanvas &&
        t.OffscreenCanvasRenderingContext2D &&
        t.HTMLCanvasElement &&
        t.HTMLCanvasElement.prototype.transferControlToOffscreen &&
        t.URL &&
        t.URL.createObjectURL
      ),
      l = typeof Path2D == "function" && typeof DOMMatrix == "function",
      s = (function () {
        if (!t.OffscreenCanvas) return !1;
        var C = new OffscreenCanvas(1, 1),
          y = C.getContext("2d");
        y.fillRect(0, 0, 1, 1);
        var O = C.transferToImageBitmap();
        try {
          y.createPattern(O, "no-repeat");
        } catch {
          return !1;
        }
        return !0;
      })();
    function a() {}
    function u(C) {
      var y = n.exports.Promise,
        O = y !== void 0 ? y : t.Promise;
      return typeof O == "function" ? new O(C) : (C(a, a), null);
    }
    var f = (function (C, y) {
        return {
          transform: function (O) {
            if (C) return O;
            if (y.has(O)) return y.get(O);
            var D = new OffscreenCanvas(O.width, O.height),
              j = D.getContext("2d");
            return j.drawImage(O, 0, 0), y.set(O, D), D;
          },
          clear: function () {
            y.clear();
          },
        };
      })(s, new Map()),
      p = (function () {
        var C = Math.floor(16.666666666666668),
          y,
          O,
          D = {},
          j = 0;
        return (
          typeof requestAnimationFrame == "function" &&
          typeof cancelAnimationFrame == "function"
            ? ((y = function (U) {
                var W = Math.random();
                return (
                  (D[W] = requestAnimationFrame(function B(H) {
                    j === H || j + C - 1 < H
                      ? ((j = H), delete D[W], U())
                      : (D[W] = requestAnimationFrame(B));
                  })),
                  W
                );
              }),
              (O = function (U) {
                D[U] && cancelAnimationFrame(D[U]);
              }))
            : ((y = function (U) {
                return setTimeout(U, C);
              }),
              (O = function (U) {
                return clearTimeout(U);
              })),
          { frame: y, cancel: O }
        );
      })(),
      m = (function () {
        var C,
          y,
          O = {};
        function D(j) {
          function U(W, B) {
            j.postMessage({ options: W || {}, callback: B });
          }
          (j.init = function (B) {
            var H = B.transferControlToOffscreen();
            j.postMessage({ canvas: H }, [H]);
          }),
            (j.fire = function (B, H, Z) {
              if (y) return U(B, null), y;
              var fe = Math.random().toString(36).slice(2);
              return (
                (y = u(function (ne) {
                  function se(J) {
                    J.data.callback === fe &&
                      (delete O[fe],
                      j.removeEventListener("message", se),
                      (y = null),
                      f.clear(),
                      Z(),
                      ne());
                  }
                  j.addEventListener("message", se),
                    U(B, fe),
                    (O[fe] = se.bind(null, { data: { callback: fe } }));
                })),
                y
              );
            }),
            (j.reset = function () {
              j.postMessage({ reset: !0 });
              for (var B in O) O[B](), delete O[B];
            });
        }
        return function () {
          if (C) return C;
          if (!r && i) {
            var j = [
              "var CONFETTI, SIZE = {}, module = {};",
              "(" + e.toString() + ")(this, module, true, SIZE);",
              "onmessage = function(msg) {",
              "  if (msg.data.options) {",
              "    CONFETTI(msg.data.options).then(function () {",
              "      if (msg.data.callback) {",
              "        postMessage({ callback: msg.data.callback });",
              "      }",
              "    });",
              "  } else if (msg.data.reset) {",
              "    CONFETTI && CONFETTI.reset();",
              "  } else if (msg.data.resize) {",
              "    SIZE.width = msg.data.resize.width;",
              "    SIZE.height = msg.data.resize.height;",
              "  } else if (msg.data.canvas) {",
              "    SIZE.width = msg.data.canvas.width;",
              "    SIZE.height = msg.data.canvas.height;",
              "    CONFETTI = module.exports.create(msg.data.canvas);",
              "  }",
              "}",
            ].join(`
`);
            try {
              C = new Worker(URL.createObjectURL(new Blob([j])));
            } catch (U) {
              return (
                typeof console !== void 0 &&
                  typeof console.warn == "function" &&
                  console.warn("🎊 Could not load worker", U),
                null
              );
            }
            D(C);
          }
          return C;
        };
      })(),
      w = {
        particleCount: 50,
        angle: 90,
        spread: 45,
        startVelocity: 45,
        decay: 0.9,
        gravity: 1,
        drift: 0,
        ticks: 200,
        x: 0.5,
        y: 0.5,
        shapes: ["square", "circle"],
        zIndex: 100,
        colors: [
          "#26ccff",
          "#a25afd",
          "#ff5e7e",
          "#88ff5a",
          "#fcff42",
          "#ffa62d",
          "#ff36ff",
        ],
        disableForReducedMotion: !1,
        scalar: 1,
      };
    function v(C, y) {
      return y ? y(C) : C;
    }
    function S(C) {
      return C != null;
    }
    function P(C, y, O) {
      return v(C && S(C[y]) ? C[y] : w[y], O);
    }
    function g(C) {
      return C < 0 ? 0 : Math.floor(C);
    }
    function h(C, y) {
      return Math.floor(Math.random() * (y - C)) + C;
    }
    function c(C) {
      return parseInt(C, 16);
    }
    function x(C) {
      return C.map(k);
    }
    function k(C) {
      var y = String(C).replace(/[^0-9a-f]/gi, "");
      return (
        y.length < 6 && (y = y[0] + y[0] + y[1] + y[1] + y[2] + y[2]),
        {
          r: c(y.substring(0, 2)),
          g: c(y.substring(2, 4)),
          b: c(y.substring(4, 6)),
        }
      );
    }
    function E(C) {
      var y = P(C, "origin", Object);
      return (y.x = P(y, "x", Number)), (y.y = P(y, "y", Number)), y;
    }
    function T(C) {
      (C.width = document.documentElement.clientWidth),
        (C.height = document.documentElement.clientHeight);
    }
    function _(C) {
      var y = C.getBoundingClientRect();
      (C.width = y.width), (C.height = y.height);
    }
    function d(C) {
      var y = document.createElement("canvas");
      return (
        (y.style.position = "fixed"),
        (y.style.top = "0px"),
        (y.style.left = "0px"),
        (y.style.pointerEvents = "none"),
        (y.style.zIndex = C),
        y
      );
    }
    function R(C, y, O, D, j, U, W, B, H) {
      C.save(),
        C.translate(y, O),
        C.rotate(U),
        C.scale(D, j),
        C.arc(0, 0, 1, W, B, H),
        C.restore();
    }
    function L(C) {
      var y = C.angle * (Math.PI / 180),
        O = C.spread * (Math.PI / 180);
      return {
        x: C.x,
        y: C.y,
        wobble: Math.random() * 10,
        wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
        velocity: C.startVelocity * 0.5 + Math.random() * C.startVelocity,
        angle2D: -y + (0.5 * O - Math.random() * O),
        tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
        color: C.color,
        shape: C.shape,
        tick: 0,
        totalTicks: C.ticks,
        decay: C.decay,
        drift: C.drift,
        random: Math.random() + 2,
        tiltSin: 0,
        tiltCos: 0,
        wobbleX: 0,
        wobbleY: 0,
        gravity: C.gravity * 3,
        ovalScalar: 0.6,
        scalar: C.scalar,
        flat: C.flat,
      };
    }
    function F(C, y) {
      (y.x += Math.cos(y.angle2D) * y.velocity + y.drift),
        (y.y += Math.sin(y.angle2D) * y.velocity + y.gravity),
        (y.velocity *= y.decay),
        y.flat
          ? ((y.wobble = 0),
            (y.wobbleX = y.x + 10 * y.scalar),
            (y.wobbleY = y.y + 10 * y.scalar),
            (y.tiltSin = 0),
            (y.tiltCos = 0),
            (y.random = 1))
          : ((y.wobble += y.wobbleSpeed),
            (y.wobbleX = y.x + 10 * y.scalar * Math.cos(y.wobble)),
            (y.wobbleY = y.y + 10 * y.scalar * Math.sin(y.wobble)),
            (y.tiltAngle += 0.1),
            (y.tiltSin = Math.sin(y.tiltAngle)),
            (y.tiltCos = Math.cos(y.tiltAngle)),
            (y.random = Math.random() + 2));
      var O = y.tick++ / y.totalTicks,
        D = y.x + y.random * y.tiltCos,
        j = y.y + y.random * y.tiltSin,
        U = y.wobbleX + y.random * y.tiltCos,
        W = y.wobbleY + y.random * y.tiltSin;
      if (
        ((C.fillStyle =
          "rgba(" +
          y.color.r +
          ", " +
          y.color.g +
          ", " +
          y.color.b +
          ", " +
          (1 - O) +
          ")"),
        C.beginPath(),
        l &&
          y.shape.type === "path" &&
          typeof y.shape.path == "string" &&
          Array.isArray(y.shape.matrix))
      )
        C.fill(
          We(
            y.shape.path,
            y.shape.matrix,
            y.x,
            y.y,
            Math.abs(U - D) * 0.1,
            Math.abs(W - j) * 0.1,
            (Math.PI / 10) * y.wobble
          )
        );
      else if (y.shape.type === "bitmap") {
        var B = (Math.PI / 10) * y.wobble,
          H = Math.abs(U - D) * 0.1,
          Z = Math.abs(W - j) * 0.1,
          fe = y.shape.bitmap.width * y.scalar,
          ne = y.shape.bitmap.height * y.scalar,
          se = new DOMMatrix([
            Math.cos(B) * H,
            Math.sin(B) * H,
            -Math.sin(B) * Z,
            Math.cos(B) * Z,
            y.x,
            y.y,
          ]);
        se.multiplySelf(new DOMMatrix(y.shape.matrix));
        var J = C.createPattern(f.transform(y.shape.bitmap), "no-repeat");
        J.setTransform(se),
          (C.globalAlpha = 1 - O),
          (C.fillStyle = J),
          C.fillRect(y.x - fe / 2, y.y - ne / 2, fe, ne),
          (C.globalAlpha = 1);
      } else if (y.shape === "circle")
        C.ellipse
          ? C.ellipse(
              y.x,
              y.y,
              Math.abs(U - D) * y.ovalScalar,
              Math.abs(W - j) * y.ovalScalar,
              (Math.PI / 10) * y.wobble,
              0,
              2 * Math.PI
            )
          : R(
              C,
              y.x,
              y.y,
              Math.abs(U - D) * y.ovalScalar,
              Math.abs(W - j) * y.ovalScalar,
              (Math.PI / 10) * y.wobble,
              0,
              2 * Math.PI
            );
      else if (y.shape === "star")
        for (
          var K = (Math.PI / 2) * 3,
            Me = 4 * y.scalar,
            me = 8 * y.scalar,
            be = y.x,
            Ue = y.y,
            Ve = 5,
            Xe = Math.PI / Ve;
          Ve--;

        )
          (be = y.x + Math.cos(K) * me),
            (Ue = y.y + Math.sin(K) * me),
            C.lineTo(be, Ue),
            (K += Xe),
            (be = y.x + Math.cos(K) * Me),
            (Ue = y.y + Math.sin(K) * Me),
            C.lineTo(be, Ue),
            (K += Xe);
      else
        C.moveTo(Math.floor(y.x), Math.floor(y.y)),
          C.lineTo(Math.floor(y.wobbleX), Math.floor(j)),
          C.lineTo(Math.floor(U), Math.floor(W)),
          C.lineTo(Math.floor(D), Math.floor(y.wobbleY));
      return C.closePath(), C.fill(), y.tick < y.totalTicks;
    }
    function G(C, y, O, D, j) {
      var U = y.slice(),
        W = C.getContext("2d"),
        B,
        H,
        Z = u(function (fe) {
          function ne() {
            (B = H = null),
              W.clearRect(0, 0, D.width, D.height),
              f.clear(),
              j(),
              fe();
          }
          function se() {
            r &&
              !(D.width === o.width && D.height === o.height) &&
              ((D.width = C.width = o.width), (D.height = C.height = o.height)),
              !D.width &&
                !D.height &&
                (O(C), (D.width = C.width), (D.height = C.height)),
              W.clearRect(0, 0, D.width, D.height),
              (U = U.filter(function (J) {
                return F(W, J);
              })),
              U.length ? (B = p.frame(se)) : ne();
          }
          (B = p.frame(se)), (H = ne);
        });
      return {
        addFettis: function (fe) {
          return (U = U.concat(fe)), Z;
        },
        canvas: C,
        promise: Z,
        reset: function () {
          B && p.cancel(B), H && H();
        },
      };
    }
    function Y(C, y) {
      var O = !C,
        D = !!P(y || {}, "resize"),
        j = !1,
        U = P(y, "disableForReducedMotion", Boolean),
        W = i && !!P(y || {}, "useWorker"),
        B = W ? m() : null,
        H = O ? T : _,
        Z = C && B ? !!C.__confetti_initialized : !1,
        fe =
          typeof matchMedia == "function" &&
          matchMedia("(prefers-reduced-motion)").matches,
        ne;
      function se(K, Me, me) {
        for (
          var be = P(K, "particleCount", g),
            Ue = P(K, "angle", Number),
            Ve = P(K, "spread", Number),
            Xe = P(K, "startVelocity", Number),
            In = P(K, "decay", Number),
            Jn = P(K, "gravity", Number),
            V = P(K, "drift", Number),
            an = P(K, "colors", x),
            er = P(K, "ticks", Number),
            ae = P(K, "shapes"),
            he = P(K, "scalar"),
            tr = !!P(K, "flat"),
            Hr = E(K),
            nr = be,
            Gr = [],
            dh = C.width * Hr.x,
            fh = C.height * Hr.y;
          nr--;

        )
          Gr.push(
            L({
              x: dh,
              y: fh,
              angle: Ue,
              spread: Ve,
              startVelocity: Xe,
              color: an[nr % an.length],
              shape: ae[h(0, ae.length)],
              ticks: er,
              decay: In,
              gravity: Jn,
              drift: V,
              scalar: he,
              flat: tr,
            })
          );
        return ne ? ne.addFettis(Gr) : ((ne = G(C, Gr, H, Me, me)), ne.promise);
      }
      function J(K) {
        var Me = U || P(K, "disableForReducedMotion", Boolean),
          me = P(K, "zIndex", Number);
        if (Me && fe)
          return u(function (Xe) {
            Xe();
          });
        O && ne
          ? (C = ne.canvas)
          : O && !C && ((C = d(me)), document.body.appendChild(C)),
          D && !Z && H(C);
        var be = { width: C.width, height: C.height };
        B && !Z && B.init(C), (Z = !0), B && (C.__confetti_initialized = !0);
        function Ue() {
          if (B) {
            var Xe = {
              getBoundingClientRect: function () {
                if (!O) return C.getBoundingClientRect();
              },
            };
            H(Xe),
              B.postMessage({ resize: { width: Xe.width, height: Xe.height } });
            return;
          }
          be.width = be.height = null;
        }
        function Ve() {
          (ne = null),
            D && ((j = !1), t.removeEventListener("resize", Ue)),
            O &&
              C &&
              (document.body.contains(C) && document.body.removeChild(C),
              (C = null),
              (Z = !1));
        }
        return (
          D && !j && ((j = !0), t.addEventListener("resize", Ue, !1)),
          B ? B.fire(K, be, Ve) : se(K, be, Ve)
        );
      }
      return (
        (J.reset = function () {
          B && B.reset(), ne && ne.reset();
        }),
        J
      );
    }
    var re;
    function X() {
      return re || (re = Y(null, { useWorker: !0, resize: !0 })), re;
    }
    function We(C, y, O, D, j, U, W) {
      var B = new Path2D(C),
        H = new Path2D();
      H.addPath(B, new DOMMatrix(y));
      var Z = new Path2D();
      return (
        Z.addPath(
          H,
          new DOMMatrix([
            Math.cos(W) * j,
            Math.sin(W) * j,
            -Math.sin(W) * U,
            Math.cos(W) * U,
            O,
            D,
          ])
        ),
        Z
      );
    }
    function A(C) {
      if (!l)
        throw new Error("path confetti are not supported in this browser");
      var y, O;
      typeof C == "string" ? (y = C) : ((y = C.path), (O = C.matrix));
      var D = new Path2D(y),
        j = document.createElement("canvas"),
        U = j.getContext("2d");
      if (!O) {
        for (
          var W = 1e3, B = W, H = W, Z = 0, fe = 0, ne, se, J = 0;
          J < W;
          J += 2
        )
          for (var K = 0; K < W; K += 2)
            U.isPointInPath(D, J, K, "nonzero") &&
              ((B = Math.min(B, J)),
              (H = Math.min(H, K)),
              (Z = Math.max(Z, J)),
              (fe = Math.max(fe, K)));
        (ne = Z - B), (se = fe - H);
        var Me = 10,
          me = Math.min(Me / ne, Me / se);
        O = [
          me,
          0,
          0,
          me,
          -Math.round(ne / 2 + B) * me,
          -Math.round(se / 2 + H) * me,
        ];
      }
      return { type: "path", path: y, matrix: O };
    }
    function z(C) {
      var y,
        O = 1,
        D = "#000000",
        j =
          '"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';
      typeof C == "string"
        ? (y = C)
        : ((y = C.text),
          (O = "scalar" in C ? C.scalar : O),
          (j = "fontFamily" in C ? C.fontFamily : j),
          (D = "color" in C ? C.color : D));
      var U = 10 * O,
        W = "" + U + "px " + j,
        B = new OffscreenCanvas(U, U),
        H = B.getContext("2d");
      H.font = W;
      var Z = H.measureText(y),
        fe = Math.ceil(Z.actualBoundingBoxRight + Z.actualBoundingBoxLeft),
        ne = Math.ceil(Z.actualBoundingBoxAscent + Z.actualBoundingBoxDescent),
        se = 2,
        J = Z.actualBoundingBoxLeft + se,
        K = Z.actualBoundingBoxAscent + se;
      (fe += se + se),
        (ne += se + se),
        (B = new OffscreenCanvas(fe, ne)),
        (H = B.getContext("2d")),
        (H.font = W),
        (H.fillStyle = D),
        H.fillText(y, J, K);
      var Me = 1 / O;
      return {
        type: "bitmap",
        bitmap: B.transferToImageBitmap(),
        matrix: [Me, 0, 0, Me, (-fe * Me) / 2, (-ne * Me) / 2],
      };
    }
    (n.exports = function () {
      return X().apply(this, arguments);
    }),
      (n.exports.reset = function () {
        X().reset();
      }),
      (n.exports.create = Y),
      (n.exports.shapeFromPath = A),
      (n.exports.shapeFromText = z);
  })(
    (function () {
      return typeof window < "u"
        ? window
        : typeof self < "u"
        ? self
        : this || {};
    })(),
    Zo,
    !1
  );
  const Rx = Zo.exports;
  Zo.exports.create;
  const Vr = Mx((e, t) => ({
      questions: [],
      currentQuestion: 0,
      fetchQuestions: async () => {
        const r = await (await fetch("../quiz.json")).json();
        e({ questions: r.questions.sort(() => 0.5 - Math.random()) });
      },
      setCurrentQuestion: (n) => {
        const { currentQuestion: r, questions: o } = t();
        n === "next" && r < o.length - 1
          ? e({ currentQuestion: r + 1 })
          : n === "previous" && r > 0 && e({ currentQuestion: r - 1 });
      },
      setResults: (n) => {
        const { currentQuestion: r, questions: o } = t(),
          i = structuredClone(o),
          l = i[r],
          s = l.options[n],
          a = s === l.answer;
        a && Rx(),
          (i[r] = { ...l, userSelectedAnswer: s, isCorrectUserAnswer: a }),
          e({ questions: i });
      },
      reset: () => e({ questions: [], currentQuestion: 0 }),
    })),
    _x = () => {
      const { fetchQuestions: e } = Vr();
      return I.jsx("div", {
        style: { padding: "16px", textAlign: "center" },
        children: I.jsx(rh, {
          onClick: e,
          variant: "contained",
          children: "Start",
        }),
      });
    },
    bx = eh(
      I.jsx("path", { d: "M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z" }),
      "ArrowBackIosNew"
    ),
    Ix = eh(
      I.jsx("path", { d: "M6.23 20.23 8 22l10-10L8 2 6.23 3.77 14.46 12z" }),
      "ArrowForwardIos"
    ),
    Ox = () => {
      const { questions: e } = Vr(),
        t = e.filter((o) => o.isCorrectUserAnswer).length,
        n = e.filter((o) => o.userSelectedAnswer == null).length,
        r = e.length - t - n;
      return { correct: t, incorrect: r, unanswered: n };
    },
    Ax = () => {
      const { reset: e } = Vr(),
        { correct: t, incorrect: n, unanswered: r } = Ox();
      return I.jsxs(th, {
        sx: { padding: 3 },
        children: [
          I.jsx("strong", {
            children: `✅ ${t} correctas - ❌ ${n} incorrectas - ❓ ${r} sin responder`,
          }),
          I.jsx("div", {
            style: { marginTop: "16px" },
            children: I.jsx(rh, {
              onClick: () => e(),
              children: "Resetear juego",
            }),
          }),
        ],
      });
    },
    Nx = (e, t) => {
      const { userSelectedAnswer: n, answer: r } = e,
        o = e.options.indexOf(r);
      if (n == null) return "transparent";
      const i = e.options.indexOf(n);
      return t !== i && t !== o
        ? "transparent"
        : t === o
        ? "green"
        : (console.log(i, o, t), t === i ? "red" : "transparent");
    },
    zx = ({ info: e }) => {
      const { setResults: t } = Vr();
      return I.jsxs(Pw, {
        sx: {
          bgcolor: "#111",
          padding: 2,
          textAlign: "left",
          marginTop: 6,
          maxWidth: "100%",
        },
        children: [
          I.jsx(Fn, { variant: "h5", children: e.question }),
          I.jsx(zw, {
            disablePadding: !0,
            sx: { bgcolor: "#333", marginTop: 2 },
            children: e.options.map((n, r) =>
              I.jsx(
                Xw,
                {
                  disablePadding: !0,
                  divider: !0,
                  children: I.jsx(Ww, {
                    sx: { backgroundColor: Nx(e, r) },
                    disabled: e.userSelectedAnswer != null,
                    onClick: () => t(r),
                    children: I.jsx(ex, {
                      sx: { textAlign: "center" },
                      children: n,
                    }),
                  }),
                },
                r
              )
            ),
          }),
        ],
      });
    },
    Lx = () => {
      const { questions: e, currentQuestion: t, setCurrentQuestion: n } = Vr();
      return I.jsxs(th, {
        paddingTop: 2,
        children: [
          I.jsx(Vd, {
            disabled: t === 0,
            onClick: () => n("previous"),
            children: I.jsx(bx, {}),
          }),
          I.jsxs("span", { children: [t + 1, "/", e.length] }),
          I.jsx(Vd, {
            disabled: t === e.length - 1,
            onClick: () => n("next"),
            children: I.jsx(Ix, {}),
          }),
          I.jsx(zx, { info: e[t] }),
          I.jsx(Ax, {}),
        ],
      });
    };
  function jx() {
    const { questions: e } = Vr();
    return I.jsx(I.Fragment, {
      children: I.jsx("main", {
        children: I.jsxs($w, {
          maxWidth: "sm",
          sx: { my: 4 },
          children: [
            I.jsxs(tx, {
              direction: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 2,
              children: [
                I.jsx(Fn, {
                  variant: "h3",
                  component: "h1",
                  children: "Juego de Tronos Quiz",
                }),
                I.jsx(Fn, {
                  variant: "h6",
                  component: "h1",
                  children:
                    "Pon a prueba tus conocimientos sobre la famosa serie Juego de Tronos.",
                }),
              ],
            }),
            e.length === 0 ? I.jsx(_x, {}) : I.jsx(Lx, {}),
          ],
        }),
      }),
    });
  }
  const Bx = rs({ palette: { mode: "dark" } });
  dm(document.getElementById("root")).render(
    I.jsxs($S, { theme: Bx, children: [I.jsx(Iw, {}), I.jsx(jx, {})] })
  );
});
export default Fx();
