var Yn = Object.defineProperty;
var Cn = l => {
  throw TypeError(l)
};
var qn = (l, t, r) => t in l ? Yn(l, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : l[t] = r;
var Ct = (l, t, r) => qn(l, typeof t != "symbol" ? t + "" : t, r),
  nn = (l, t, r) => t.has(l) || Cn("Cannot " + r);
var p = (l, t, r) => (nn(l, t, "read from private field"), r ? r.call(l) : t.get(l)),
  dt = (l, t, r) => t.has(l) ? Cn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(l) : t.set(l, r),
  de = (l, t, r, h) => (nn(l, t, "write to private field"), h ? h.call(l, r) : t.set(l, r), r),
  _n = (l, t, r) => (nn(l, t, "access private method"), r);
import "../chunks/BKJ2pe-w.js";
import {
  o as me
} from "../chunks/B_cT3nxV.js";
import {
  p as Zt,
  d as J,
  a as _,
  r as K,
  t as pt,
  b as $t,
  c as mt,
  bI as Pe,
  S as Xn,
  R as bn,
  T as Qn,
  e as it,
  g as gn,
  q as Rt,
  h as v,
  i,
  x as xe,
  s as bt,
  m as he,
  v as $e,
  u as w,
  bq as Gt,
  l as X,
  f as W,
  k as An,
  o as wn,
  z as ze,
  bJ as Pn,
  n as On,
  aK as Jn
} from "../chunks/CJNfechn.js";
import {
  c as Zn,
  s as Pt
} from "../chunks/s5v90nM5.js";
import {
  i as lt
} from "../chunks/BM3OJIe0.js";
import {
  s as Ot
} from "../chunks/D_Tyjb_G.js";
import {
  v as $n
} from "../chunks/CWb7Thcn.js";
import {
  G as At,
  H as ae,
  I as ti,
  j as cn,
  a as sn,
  t as ye,
  u as Rn,
  J as ei,
  K as on,
  L as In,
  M as En,
  N as ni,
  q as ii,
  O as si,
  Q as oi,
  R as ai,
  T as ri,
  P as li
} from "../chunks/lMLNvyke.js";
import {
  i as tn,
  b as xt,
  s as Dn,
  a as dn,
  w as ui,
  c as ci,
  d as di,
  e as hn,
  n as Tn,
  m as Ke,
  g as hi,
  f as Sn,
  A as fi,
  h as mi,
  j as gi
} from "../chunks/CIdfHRDK.js";
import {
  k as pi
} from "../chunks/CO1dukIg.js";
import {
  c as re,
  a as ee,
  s as gt,
  f as an,
  d as Ce,
  S as vi,
  j as rn,
  i as yi,
  e as kn
} from "../chunks/BcrYfpfr.js";
import {
  _ as Mn
} from "../chunks/BIXTh_-0.js";
import {
  b as en
} from "../chunks/BeYUqbjK.js";
import {
  p as z,
  s as Ae,
  r as Ee
} from "../chunks/B4a-viyR.js";
import {
  e as Ye
} from "../chunks/Vl4ma4my.js";
import {
  c as Jt
} from "../chunks/DUs4G7qg.js";
import {
  t as Ci
} from "../chunks/CC_DaAPP.js";
import "../chunks/C-uTzaOB.js";
import {
  p as _i,
  a as bi,
  b as wi,
  s as Ii,
  c as Ei,
  n as Di,
  i as Ti,
  d as Si,
  r as Ni,
  t as Li,
  e as xi
} from "../chunks/hkht4gxw.js";
import {
  T as Ai
} from "../chunks/Cc8YCP8G.js";
import "../chunks/CLAiy8ns.js";
(function() {
  try {
    var l = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    l.SENTRY_RELEASE = {
      id: "bd6ed46249e1ed5fe7432cfb3a9b80dcfb887d57"
    };
    var t = new l.Error().stack;
    t && (l._sentryDebugIds = l._sentryDebugIds || {}, l._sentryDebugIds[t] = "62e1a43b-9019-4aa0-897d-406a25d69b96", l._sentryDebugIdIdentifier = "sentry-dbid-62e1a43b-9019-4aa0-897d-406a25d69b96")
  } catch {}
})();
const Pi = !0,
  Ro = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: Pi
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Oi = Array(12).fill(0);
var Ri = mt('<div class="sonner-loading-bar"></div>'),
  ki = mt('<div><div class="sonner-spinner"></div></div>');

function Mi(l, t) {
  Zt(t, !0);
  var r = ki(),
    h = J(r);
  Ye(h, 23, () => Oi, (m, I) => `spinner-bar-${I}`, (m, I) => {
    var E = Ri();
    _(m, E)
  }), K(h), K(r), pt(m => {
    ee(r, 1, m), gt(r, "data-visible", t.visible)
  }, [() => re(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), _(l, r), $t()
}
const Bi = typeof window < "u" ? window : void 0;

function Hi(l) {
  let t = l.activeElement;
  for (; t != null && t.shadowRoot;) {
    const r = t.shadowRoot.activeElement;
    if (r === t) break;
    t = r
  }
  return t
}
var _e, Oe;
class Ui {
  constructor(t = {}) {
    dt(this, _e);
    dt(this, Oe);
    const {
      window: r = Bi,
      document: h = r == null ? void 0 : r.document
    } = t;
    r !== void 0 && (de(this, _e, h), de(this, Oe, Zn(m => {
      const I = Pe(r, "focusin", m),
        E = Pe(r, "focusout", m);
      return () => {
        I(), E()
      }
    })))
  }
  get current() {
    var t;
    return (t = p(this, Oe)) == null || t.call(this), p(this, _e) ? Hi(p(this, _e)) : null
  }
}
_e = new WeakMap, Oe = new WeakMap;
new Ui;
var Re, le;
class Wi {
  constructor(t) {
    dt(this, Re);
    dt(this, le);
    de(this, Re, t), de(this, le, Symbol(t))
  }
  get key() {
    return p(this, le)
  }
  exists() {
    return Xn(p(this, le))
  }
  get() {
    const t = bn(p(this, le));
    if (t === void 0) throw new Error(`Context "${p(this,Re)}" not found`);
    return t
  }
  getOr(t) {
    const r = bn(p(this, le));
    return r === void 0 ? t : r
  }
  set(t) {
    return Qn(p(this, le), t)
  }
}
Re = new WeakMap, le = new WeakMap;
const Vi = new Wi("<Toaster/>");

function Ge(l) {
  return l.label !== void 0
}

function Fi() {
  let l = it(gn(typeof document < "u" ? document.hidden : !1));
  return Rt(() => Pe(document, "visibilitychange", () => {
    v(l, document.hidden, !0)
  })), {
    get current() {
      return i(l)
    }
  }
}
const Nn = 4e3,
  zi = 14,
  Gi = 45,
  ji = 200,
  Ki = .05,
  Yi = {
    toast: "",
    title: "",
    description: "",
    loader: "",
    closeButton: "",
    cancelButton: "",
    actionButton: "",
    action: "",
    warning: "",
    error: "",
    success: "",
    default: "",
    info: "",
    loading: ""
  };

function qi(l) {
  const [t, r] = l.split("-"), h = [];
  return t && h.push(t), r && h.push(r), h
}

function Ln(l) {
  return 1 / (1.5 + Math.abs(l) / 20)
}
var Xi = mt("<div><!></div>"),
  Qi = mt('<button data-close-button=""><!></button>'),
  Ji = mt('<div data-icon=""><!> <!></div>'),
  Zi = mt('<div data-description=""><!></div>'),
  $i = mt('<button data-button="" data-cancel=""> </button>'),
  ts = mt('<button data-button=""> </button>'),
  es = mt('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  ns = mt('<li data-sonner-toast=""><!> <!></li>');

function is(l, t) {
  Zt(t, !0);
  const r = N => {
    var x = X(),
      $ = W(x);
    {
      var et = g => {
          var Dt = Xi(),
            a = J(Dt);
          Ot(a, () => t.loadingIcon), K(Dt), pt(e => {
            ee(Dt, 1, e), gt(Dt, "data-visible", i(j) === "loading")
          }, [() => {
            var e, n, s;
            return re(ae((e = i(ct)) == null ? void 0 : e.loader, (s = (n = t.toast) == null ? void 0 : n.classes) == null ? void 0 : s.loader, "sonner-loader"))
          }]), _(g, Dt)
        },
        q = g => {
          {
            let Dt = w(() => {
                var e, n;
                return ae((e = i(ct)) == null ? void 0 : e.loader, (n = t.toast.classes) == null ? void 0 : n.loader)
              }),
              a = w(() => i(j) === "loading");
            Mi(g, {
              get class() {
                return i(Dt)
              },
              get visible() {
                return i(a)
              }
            })
          }
        };
      lt($, g => {
        t.loadingIcon ? g(et) : g(q, !1)
      })
    }
    _(N, x)
  };
  let h = z(t, "cancelButtonStyle", 3, ""),
    m = z(t, "actionButtonStyle", 3, ""),
    I = z(t, "descriptionClass", 3, ""),
    E = z(t, "unstyled", 3, !1),
    O = z(t, "defaultRichColors", 3, !1);
  const V = {
    ...Yi
  };
  let D = it(!1),
    y = it(!1),
    S = it(!1),
    b = it(!1),
    F = it(!1),
    B = it(0),
    at = it(0),
    vt = t.toast.duration || t.duration || Nn,
    A = it(void 0),
    R = it(null),
    G = it(null);
  const P = w(() => t.index === 0),
    st = w(() => t.index + 1 <= t.visibleToasts),
    j = w(() => t.toast.type),
    ht = w(() => t.toast.dismissable !== !1),
    Nt = w(() => t.toast.class || ""),
    _t = w(() => t.toast.descriptionClass || ""),
    It = w(() => At.heights.findIndex(N => N.toastId === t.toast.id) || 0),
    Et = w(() => t.toast.closeButton ?? t.closeButton),
    Wt = w(() => t.toast.duration ?? t.duration ?? Nn);
  let Mt = null;
  const jt = w(() => t.position.split("-")),
    Bt = w(() => At.heights.reduce((N, x, $) => $ >= i(It) ? N : N + x.height, 0)),
    ne = Fi(),
    H = w(() => t.toast.invert || t.invert),
    rt = w(() => i(j) === "loading"),
    ct = w(() => ({
      ...V,
      ...t.classes
    })),
    Tt = w(() => t.toast.title),
    Kt = w(() => t.toast.description);
  let Yt = it(0),
    se = it(0);
  const T = w(() => Math.round(i(It) * zi + i(Bt)));
  Rt(() => {
    i(Tt), i(Kt);
    let N;
    t.expanded || t.expandByDefault ? N = 1 : N = 1 - t.index * Ki;
    const x = xe(() => i(A));
    if (x === void 0) return;
    x.style.setProperty("height", "auto");
    const $ = x.offsetHeight,
      et = x.getBoundingClientRect().height,
      q = Math.round(et / N + Number.EPSILON & 100) / 100;
    x.style.removeProperty("height");
    let g;
    Math.abs(q - $) < 1 ? g = q : g = $, v(at, g, !0), xe(() => {
      At.setHeight({
        toastId: t.toast.id,
        height: g
      })
    })
  });

  function U() {
    v(y, !0), v(B, i(T), !0), At.removeHeight(t.toast.id), setTimeout(() => {
      At.remove(t.toast.id)
    }, ji)
  }
  let yt;
  const Z = w(() => t.toast.promise && i(j) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function kt() {
    v(Yt, new Date().getTime(), !0), yt = setTimeout(() => {
      var N, x;
      (x = (N = t.toast).onAutoClose) == null || x.call(N, t.toast), U()
    }, vt)
  }

  function qt() {
    if (i(se) < i(Yt)) {
      const N = new Date().getTime() - i(Yt);
      vt = vt - N
    }
    v(se, new Date().getTime(), !0)
  }
  Rt(() => {
    t.toast.updated && (clearTimeout(yt), vt = i(Wt), kt())
  }), Rt(() => (i(Z) || (t.expanded || t.interacting || ne.current ? qt() : kt()), () => clearTimeout(yt))), me(() => {
    var x;
    v(D, !0);
    const N = (x = i(A)) == null ? void 0 : x.getBoundingClientRect().height;
    return v(at, N, !0), At.setHeight({
      toastId: t.toast.id,
      height: N
    }), () => {
      At.removeHeight(t.toast.id)
    }
  }), Rt(() => {
    t.toast.delete && xe(() => {
      var N, x;
      U(), (x = (N = t.toast).onDismiss) == null || x.call(N, t.toast)
    })
  });
  const ge = N => {
      if (i(rt)) return;
      v(B, i(T), !0);
      const x = N.target;
      x.setPointerCapture(N.pointerId), x.tagName !== "BUTTON" && (v(S, !0), Mt = {
        x: N.clientX,
        y: N.clientY
      })
    },
    oe = () => {
      var g, Dt, a, e, n, s;
      if (i(b) || !i(ht)) return;
      Mt = null;
      const N = Number(((g = i(A)) == null ? void 0 : g.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        x = Number(((Dt = i(A)) == null ? void 0 : Dt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        $ = new Date().getTime() - 0,
        et = i(R) === "x" ? N : x,
        q = Math.abs(et) / $;
      if (Math.abs(et) >= Gi || q > .11) {
        v(B, i(T), !0), (e = (a = t.toast).onDismiss) == null || e.call(a, t.toast), i(R) === "x" ? v(G, N > 0 ? "right" : "left", !0) : v(G, x > 0 ? "down" : "up", !0), U(), v(b, !0);
        return
      } else(n = i(A)) == null || n.style.setProperty("--swipe-amount-x", "0px"), (s = i(A)) == null || s.style.setProperty("--swipe-amount-y", "0px");
      v(F, !1), v(S, !1), v(R, null)
    },
    Ht = N => {
      var Dt, a, e;
      if (!Mt || !i(ht) || (((Dt = window.getSelection()) == null ? void 0 : Dt.toString().length) ?? -1) > 0) return;
      const $ = N.clientY - Mt.y,
        et = N.clientX - Mt.x,
        q = t.swipeDirections ?? qi(t.position);
      !i(R) && (Math.abs(et) > 1 || Math.abs($) > 1) && v(R, Math.abs(et) > Math.abs($) ? "x" : "y", !0);
      let g = {
        x: 0,
        y: 0
      };
      if (i(R) === "y") {
        if (q.includes("top") || q.includes("bottom"))
          if (q.includes("top") && $ < 0 || q.includes("bottom") && $ > 0) g.y = $;
          else {
            const n = $ * Ln($);
            g.y = Math.abs(n) < Math.abs($) ? n : $
          }
      } else if (i(R) === "x" && (q.includes("left") || q.includes("right")))
        if (q.includes("left") && et < 0 || q.includes("right") && et > 0) g.x = et;
        else {
          const n = et * Ln(et);
          g.x = Math.abs(n) < Math.abs(et) ? n : et
        }(Math.abs(g.x) > 0 || Math.abs(g.y) > 0) && v(F, !0), (a = i(A)) == null || a.style.setProperty("--swipe-amount-x", `${g.x}px`), (e = i(A)) == null || e.style.setProperty("--swipe-amount-y", `${g.y}px`)
    },
    Vt = () => {
      v(S, !1), v(R, null), Mt = null
    },
    St = w(() => t.toast.icon ? t.toast.icon : i(j) === "success" ? t.successIcon : i(j) === "error" ? t.errorIcon : i(j) === "warning" ? t.warningIcon : i(j) === "info" ? t.infoIcon : i(j) === "loading" ? t.loadingIcon : null);
  var Y = ns();
  gt(Y, "tabindex", 0);
  let pe;
  var De = J(Y);
  {
    var Te = N => {
      var x = Qi(),
        $ = J(x);
      Ot($, () => t.closeIcon ?? Gt), K(x), pt(et => {
        gt(x, "aria-label", t.closeButtonAriaLabel), gt(x, "data-disabled", i(rt)), ee(x, 1, et)
      }, [() => {
        var et, q, g;
        return re(ae((et = i(ct)) == null ? void 0 : et.closeButton, (g = (q = t.toast) == null ? void 0 : q.classes) == null ? void 0 : g.closeButton))
      }]), he("click", x, () => {
        var et, q;
        i(rt) || !i(ht) || (U(), (q = (et = t.toast).onDismiss) == null || q.call(et, t.toast))
      }), _(N, x)
    };
    lt(De, N => {
      i(Et) && !t.toast.component && i(j) !== "loading" && t.closeIcon !== null && N(Te)
    })
  }
  var Se = bt(De, 2);
  {
    var ve = N => {
        const x = w(() => t.toast.component);
        var $ = X(),
          et = W($);
        Jt(et, () => i(x), (q, g) => {
          g(q, Ae(() => t.toast.componentProps, {
            closeToast: U
          }))
        }), _(N, $)
      },
      Ne = N => {
        var x = es(),
          $ = W(x);
        {
          var et = f => {
            var d = Ji(),
              C = J(d);
            {
              var L = k => {
                var M = X(),
                  ft = W(M);
                {
                  var Q = tt => {
                      var Ft = X(),
                        Ut = W(Ft);
                      Jt(Ut, () => t.toast.icon, (wt, Lt) => {
                        Lt(wt, {})
                      }), _(tt, Ft)
                    },
                    ot = tt => {
                      r(tt)
                    };
                  lt(ft, tt => {
                    t.toast.icon ? tt(Q) : tt(ot, !1)
                  })
                }
                _(k, M)
              };
              lt(C, k => {
                (t.toast.promise || i(j) === "loading") && k(L)
              })
            }
            var ut = bt(C, 2);
            {
              var nt = k => {
                var M = X(),
                  ft = W(M);
                {
                  var Q = wt => {
                      var Lt = X(),
                        te = W(Lt);
                      Jt(te, () => t.toast.icon, (jn, Kn) => {
                        Kn(jn, {})
                      }), _(wt, Lt)
                    },
                    ot = wt => {
                      var Lt = X(),
                        te = W(Lt);
                      Ot(te, () => t.successIcon ?? Gt), _(wt, Lt)
                    },
                    tt = wt => {
                      var Lt = X(),
                        te = W(Lt);
                      Ot(te, () => t.errorIcon ?? Gt), _(wt, Lt)
                    },
                    Ft = wt => {
                      var Lt = X(),
                        te = W(Lt);
                      Ot(te, () => t.warningIcon ?? Gt), _(wt, Lt)
                    },
                    Ut = wt => {
                      var Lt = X(),
                        te = W(Lt);
                      Ot(te, () => t.infoIcon ?? Gt), _(wt, Lt)
                    };
                  lt(ft, wt => {
                    t.toast.icon ? wt(Q) : i(j) === "success" ? wt(ot, 1) : i(j) === "error" ? wt(tt, 2) : i(j) === "warning" ? wt(Ft, 3) : i(j) === "info" && wt(Ut, 4)
                  })
                }
                _(k, M)
              };
              lt(ut, k => {
                t.toast.type !== "loading" && k(nt)
              })
            }
            K(d), pt(k => ee(d, 1, k), [() => {
              var k, M, ft;
              return re(ae((k = i(ct)) == null ? void 0 : k.icon, (ft = (M = t.toast) == null ? void 0 : M.classes) == null ? void 0 : ft.icon))
            }]), _(f, d)
          };
          lt($, f => {
            (i(j) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (i(St) !== null || t.toast.icon) && f(et)
          })
        }
        var q = bt($, 2),
          g = J(q),
          Dt = J(g);
        {
          var a = f => {
            var d = X(),
              C = W(d);
            {
              var L = nt => {
                  const k = w(() => t.toast.title);
                  var M = X(),
                    ft = W(M);
                  Jt(ft, () => i(k), (Q, ot) => {
                    ot(Q, Ae(() => t.toast.componentProps))
                  }), _(nt, M)
                },
                ut = nt => {
                  var k = wn();
                  pt(() => Pt(k, t.toast.title)), _(nt, k)
                };
              lt(C, nt => {
                typeof t.toast.title != "string" ? nt(L) : nt(ut, !1)
              })
            }
            _(f, d)
          };
          lt(Dt, f => {
            t.toast.title && f(a)
          })
        }
        K(g);
        var e = bt(g, 2);
        {
          var n = f => {
            var d = Zi(),
              C = J(d);
            {
              var L = nt => {
                  const k = w(() => t.toast.description);
                  var M = X(),
                    ft = W(M);
                  Jt(ft, () => i(k), (Q, ot) => {
                    ot(Q, Ae(() => t.toast.componentProps))
                  }), _(nt, M)
                },
                ut = nt => {
                  var k = wn();
                  pt(() => Pt(k, t.toast.description)), _(nt, k)
                };
              lt(C, nt => {
                typeof t.toast.description != "string" ? nt(L) : nt(ut, !1)
              })
            }
            K(d), pt(nt => ee(d, 1, nt), [() => {
              var nt, k;
              return re(ae(I(), i(_t), (nt = i(ct)) == null ? void 0 : nt.description, (k = t.toast.classes) == null ? void 0 : k.description))
            }]), _(f, d)
          };
          lt(e, f => {
            t.toast.description && f(n)
          })
        }
        K(q);
        var s = bt(q, 2);
        {
          var o = f => {
            var d = X(),
              C = W(d);
            {
              var L = k => {
                  var M = X(),
                    ft = W(M);
                  Jt(ft, () => t.toast.cancel, (Q, ot) => {
                    ot(Q, {})
                  }), _(k, M)
                },
                ut = k => {
                  var M = $i(),
                    ft = J(M, !0);
                  K(M), pt(Q => {
                    an(M, t.toast.cancelButtonStyle ?? h()), ee(M, 1, Q), Pt(ft, t.toast.cancel.label)
                  }, [() => {
                    var Q, ot, tt;
                    return re(ae((Q = i(ct)) == null ? void 0 : Q.cancelButton, (tt = (ot = t.toast) == null ? void 0 : ot.classes) == null ? void 0 : tt.cancelButton))
                  }]), he("click", M, Q => {
                    var ot, tt;
                    Ge(t.toast.cancel) && i(ht) && ((tt = (ot = t.toast.cancel) == null ? void 0 : ot.onClick) == null || tt.call(ot, Q), U())
                  }), _(k, M)
                },
                nt = w(() => Ge(t.toast.cancel));
              lt(C, k => {
                typeof t.toast.cancel == "function" ? k(L) : i(nt) && k(ut, 1)
              })
            }
            _(f, d)
          };
          lt(s, f => {
            t.toast.cancel && f(o)
          })
        }
        var c = bt(s, 2);
        {
          var u = f => {
            var d = X(),
              C = W(d);
            {
              var L = k => {
                  var M = X(),
                    ft = W(M);
                  Jt(ft, () => t.toast.action, (Q, ot) => {
                    ot(Q, {})
                  }), _(k, M)
                },
                ut = k => {
                  var M = ts(),
                    ft = J(M, !0);
                  K(M), pt(Q => {
                    an(M, t.toast.actionButtonStyle ?? m()), ee(M, 1, Q), Pt(ft, t.toast.action.label)
                  }, [() => {
                    var Q, ot, tt;
                    return re(ae((Q = i(ct)) == null ? void 0 : Q.actionButton, (tt = (ot = t.toast) == null ? void 0 : ot.classes) == null ? void 0 : tt.actionButton))
                  }]), he("click", M, Q => {
                    var ot;
                    Ge(t.toast.action) && ((ot = t.toast.action) == null || ot.onClick(Q), !Q.defaultPrevented && U())
                  }), _(k, M)
                },
                nt = w(() => Ge(t.toast.action));
              lt(C, k => {
                typeof t.toast.action == "function" ? k(L) : i(nt) && k(ut, 1)
              })
            }
            _(f, d)
          };
          lt(c, f => {
            t.toast.action && f(u)
          })
        }
        pt(f => ee(g, 1, f), [() => {
          var f, d, C;
          return re(ae((f = i(ct)) == null ? void 0 : f.title, (C = (d = t.toast) == null ? void 0 : d.classes) == null ? void 0 : C.title))
        }]), _(N, x)
      };
    lt(Se, N => {
      t.toast.component ? N(ve) : N(Ne, !1)
    })
  }
  K(Y), en(Y, N => v(A, N), () => i(A)), pt((N, x, $) => {
    ee(Y, 1, N), gt(Y, "data-rich-colors", t.toast.richColors ?? O()), gt(Y, "data-styled", !(t.toast.component || t.toast.unstyled || E())), gt(Y, "data-mounted", i(D)), gt(Y, "data-promise", x), gt(Y, "data-swiped", i(F)), gt(Y, "data-removed", i(y)), gt(Y, "data-visible", i(st)), gt(Y, "data-y-position", i(jt)[0]), gt(Y, "data-x-position", i(jt)[1]), gt(Y, "data-index", t.index), gt(Y, "data-front", i(P)), gt(Y, "data-swiping", i(S)), gt(Y, "data-dismissable", i(ht)), gt(Y, "data-type", i(j)), gt(Y, "data-invert", i(H)), gt(Y, "data-swipe-out", i(b)), gt(Y, "data-swipe-direction", i(G)), gt(Y, "data-expanded", $), pe = an(Y, `${t.style} ${t.toast.style}`, pe, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": At.toasts.length - t.index,
      "--offset": `${i(y)?i(B):i(T)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${i(at)}px`
    })
  }, [() => {
    var N, x, $, et, q, g;
    return re(ae(t.class, i(Nt), (N = i(ct)) == null ? void 0 : N.toast, ($ = (x = t.toast) == null ? void 0 : x.classes) == null ? void 0 : $.toast, (et = i(ct)) == null ? void 0 : et[i(j)], (g = (q = t.toast) == null ? void 0 : q.classes) == null ? void 0 : g[i(j)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && i(D))]), he("pointermove", Y, Ht), he("pointerup", Y, oe), he("pointerdown", Y, ge), $e("dragend", Y, Vt), _(l, Y), $t()
}
An(["pointermove", "pointerup", "pointerdown", "click"]);
var ss = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function os(l) {
  var t = ss();
  _(l, t)
}
var as = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function rs(l) {
  var t = as();
  _(l, t)
}
var ls = ze('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function us(l) {
  var t = ls();
  _(l, t)
}
var cs = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function ds(l) {
  var t = cs();
  _(l, t)
}
var hs = ze('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function fs(l) {
  var t = hs();
  _(l, t)
}
const ms = 3,
  Bn = "24px",
  Hn = "16px",
  gs = 4e3,
  ps = 356,
  vs = 14,
  ln = "dark",
  je = "light";

function ys(l, t) {
  const r = {};
  return [l, t].forEach((h, m) => {
    const I = m === 1,
      E = I ? "--mobile-offset" : "--offset",
      O = I ? Hn : Bn;

    function V(D) {
      ["top", "right", "bottom", "left"].forEach(y => {
        r[`${E}-${y}`] = typeof D == "number" ? `${D}px` : D
      })
    }
    typeof h == "number" || typeof h == "string" ? V(h) : typeof h == "object" ? ["top", "right", "bottom", "left"].forEach(D => {
      const y = h[D];
      y === void 0 ? r[`${E}-${D}`] = O : r[`${E}-${D}`] = typeof y == "number" ? `${y}px` : y
    }) : V(O)
  }), r
}
var Cs = mt("<ol></ol>"),
  _s = mt('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-smjlix"><!></section>');

function bs(l, t) {
  Zt(t, !0);

  function r(T) {
    return T !== "system" ? T : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ln : je
  }
  let h = z(t, "invert", 3, !1),
    m = z(t, "position", 3, "bottom-right"),
    I = z(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    E = z(t, "expand", 3, !1),
    O = z(t, "closeButton", 3, !1),
    V = z(t, "offset", 3, Bn),
    D = z(t, "mobileOffset", 3, Hn),
    y = z(t, "theme", 3, "light"),
    S = z(t, "richColors", 3, !1),
    b = z(t, "duration", 3, gs),
    F = z(t, "visibleToasts", 3, ms),
    B = z(t, "toastOptions", 19, () => ({})),
    at = z(t, "dir", 7, "auto"),
    vt = z(t, "gap", 3, vs),
    A = z(t, "containerAriaLabel", 3, "Notifications"),
    R = z(t, "closeButtonAriaLabel", 3, "Close toast"),
    G = Ee(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function P() {
    if (at() !== "auto") return at();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const T = document.documentElement.getAttribute("dir");
    return T === "auto" || !T ? (xe(() => at(window.getComputedStyle(document.documentElement).direction ?? "ltr")), at()) : (xe(() => at(T)), T)
  }
  const st = w(() => Array.from(new Set([m(), ...At.toasts.filter(T => T.position).map(T => T.position)].filter(Boolean))));
  let j = it(!1),
    ht = it(!1),
    Nt = it(gn(r(y()))),
    _t = it(void 0),
    It = it(null),
    Et = it(!1);
  const Wt = w(() => I().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Rt(() => {
    At.toasts.length <= 1 && v(j, !1)
  }), Rt(() => {
    const T = At.toasts.filter(U => U.dismiss && !U.delete);
    if (T.length > 0) {
      const U = At.toasts.map(yt => T.find(kt => kt.id === yt.id) ? {
        ...yt,
        delete: !0
      } : yt);
      At.toasts = U
    }
  }), Rt(() => () => {
    i(_t) && i(It) && (i(It).focus({
      preventScroll: !0
    }), v(It, null), v(Et, !1))
  }), me(() => (At.reset(), Pe(document, "keydown", U => {
    var Z, kt;
    I().every(qt => U[qt] || U.code === qt) && (v(j, !0), (Z = i(_t)) == null || Z.focus()), U.code === "Escape" && (document.activeElement === i(_t) || (kt = i(_t)) != null && kt.contains(document.activeElement)) && v(j, !1)
  }))), Rt(() => {
    if (y() !== "system" && v(Nt, y()), typeof window < "u") {
      y() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? v(Nt, ln) : v(Nt, je));
      const T = window.matchMedia("(prefers-color-scheme: dark)"),
        U = ({
          matches: yt
        }) => {
          v(Nt, yt ? ln : je, !0)
        };
      "addEventListener" in T ? T.addEventListener("change", U) : T.addListener(U)
    }
  });
  const Mt = T => {
      var U;
      (U = t.onblur) == null || U.call(t, T), i(Et) && !T.currentTarget.contains(T.relatedTarget) && (v(Et, !1), i(It) && (i(It).focus({
        preventScroll: !0
      }), v(It, null)))
    },
    jt = T => {
      var yt;
      (yt = t.onfocus) == null || yt.call(t, T), !(T.target instanceof HTMLElement && T.target.dataset.dismissable === "false") && (i(Et) || (v(Et, !0), v(It, T.relatedTarget, !0)))
    },
    Bt = T => {
      var yt;
      (yt = t.onpointerdown) == null || yt.call(t, T), !(T.target instanceof HTMLElement && T.target.dataset.dismissable === "false") && v(ht, !0)
    },
    ne = T => {
      var U;
      (U = t.onmouseenter) == null || U.call(t, T), v(j, !0)
    },
    H = T => {
      var U;
      (U = t.onmouseleave) == null || U.call(t, T), i(ht) || v(j, !1)
    },
    rt = T => {
      var U;
      (U = t.onmousemove) == null || U.call(t, T), v(j, !0)
    },
    ct = T => {
      var U;
      (U = t.ondragend) == null || U.call(t, T), v(j, !1)
    },
    Tt = T => {
      var U;
      (U = t.onpointerup) == null || U.call(t, T), v(ht, !1)
    };
  Vi.set(new ti);
  var Kt = _s();
  gt(Kt, "tabindex", -1);
  var Yt = J(Kt);
  {
    var se = T => {
      var U = X(),
        yt = W(U);
      Ye(yt, 18, () => i(st), Z => Z, (Z, kt, qt, ge) => {
        const oe = w(() => {
            const [St, Y] = kt.split("-");
            return {
              y: St,
              x: Y
            }
          }),
          Ht = w(() => ys(V(), D()));
        var Vt = Cs();
        Ce(Vt, St => {
          var Y;
          return {
            tabindex: -1,
            dir: St,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": i(Nt),
            "data-y-position": i(oe).y,
            "data-x-position": i(oe).x,
            style: t.style,
            onblur: Mt,
            onfocus: jt,
            onmouseenter: ne,
            onmousemove: rt,
            onmouseleave: H,
            ondragend: ct,
            onpointerdown: Bt,
            onpointerup: Tt,
            ...G,
            [vi]: {
              "--front-toast-height": `${(Y=At.heights[0])==null?void 0:Y.height}px`,
              "--width": `${ps}px`,
              "--gap": `${vt()}px`,
              "--offset-top": i(Ht)["--offset-top"],
              "--offset-right": i(Ht)["--offset-right"],
              "--offset-bottom": i(Ht)["--offset-bottom"],
              "--offset-left": i(Ht)["--offset-left"],
              "--mobile-offset-top": i(Ht)["--mobile-offset-top"],
              "--mobile-offset-right": i(Ht)["--mobile-offset-right"],
              "--mobile-offset-bottom": i(Ht)["--mobile-offset-bottom"],
              "--mobile-offset-left": i(Ht)["--mobile-offset-left"]
            }
          }
        }, [P], void 0, void 0, "svelte-smjlix"), Ye(Vt, 23, () => At.toasts.filter(St => !St.position && i(qt) === 0 || St.position === kt), St => St.id, (St, Y, pe, De) => {
          {
            const Te = s => {
                var o = X(),
                  c = W(o);
                {
                  var u = d => {
                      var C = X(),
                        L = W(C);
                      Ot(L, () => t.successIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      os(d)
                    };
                  lt(c, d => {
                    t.successIcon ? d(u) : t.successIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              },
              Se = s => {
                var o = X(),
                  c = W(o);
                {
                  var u = d => {
                      var C = X(),
                        L = W(C);
                      Ot(L, () => t.errorIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      rs(d)
                    };
                  lt(c, d => {
                    t.errorIcon ? d(u) : t.errorIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              },
              ve = s => {
                var o = X(),
                  c = W(o);
                {
                  var u = d => {
                      var C = X(),
                        L = W(C);
                      Ot(L, () => t.warningIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      us(d)
                    };
                  lt(c, d => {
                    t.warningIcon ? d(u) : t.warningIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              },
              Ne = s => {
                var o = X(),
                  c = W(o);
                {
                  var u = d => {
                      var C = X(),
                        L = W(C);
                      Ot(L, () => t.infoIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      ds(d)
                    };
                  lt(c, d => {
                    t.infoIcon ? d(u) : t.infoIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              },
              N = s => {
                var o = X(),
                  c = W(o);
                {
                  var u = d => {
                      var C = X(),
                        L = W(C);
                      Ot(L, () => t.closeIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      fs(d)
                    };
                  lt(c, d => {
                    t.closeIcon ? d(u) : t.closeIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              };
            let x = w(() => {
                var s;
                return ((s = B()) == null ? void 0 : s.duration) ?? b()
              }),
              $ = w(() => {
                var s;
                return ((s = B()) == null ? void 0 : s.class) ?? ""
              }),
              et = w(() => {
                var s;
                return ((s = B()) == null ? void 0 : s.descriptionClass) || ""
              }),
              q = w(() => {
                var s;
                return ((s = B()) == null ? void 0 : s.style) ?? ""
              }),
              g = w(() => B().classes || {}),
              Dt = w(() => B().unstyled ?? !1),
              a = w(() => {
                var s;
                return ((s = B()) == null ? void 0 : s.cancelButtonStyle) ?? ""
              }),
              e = w(() => {
                var s;
                return ((s = B()) == null ? void 0 : s.actionButtonStyle) ?? ""
              }),
              n = w(() => {
                var s;
                return ((s = B()) == null ? void 0 : s.closeButtonAriaLabel) ?? R()
              });
            is(St, {
              get index() {
                return i(pe)
              },
              get toast() {
                return i(Y)
              },
              get defaultRichColors() {
                return S()
              },
              get duration() {
                return i(x)
              },
              get class() {
                return i($)
              },
              get descriptionClass() {
                return i(et)
              },
              get invert() {
                return h()
              },
              get visibleToasts() {
                return F()
              },
              get closeButton() {
                return O()
              },
              get interacting() {
                return i(ht)
              },
              get position() {
                return kt
              },
              get style() {
                return i(q)
              },
              get classes() {
                return i(g)
              },
              get unstyled() {
                return i(Dt)
              },
              get cancelButtonStyle() {
                return i(a)
              },
              get actionButtonStyle() {
                return i(e)
              },
              get closeButtonAriaLabel() {
                return i(n)
              },
              get expandByDefault() {
                return E()
              },
              get expanded() {
                return i(j)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: Te,
              errorIcon: Se,
              warningIcon: ve,
              infoIcon: Ne,
              closeIcon: N,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), K(Vt), en(Vt, St => v(_t, St), () => i(_t)), pt(() => Vt.dir = Vt.dir), _(Z, Vt)
      }), _(T, U)
    };
    lt(Yt, T => {
      At.toasts.length > 0 && T(se)
    })
  }
  K(Kt), pt(() => gt(Kt, "aria-label", `${A()??""} ${i(Wt)??""}`)), _(l, Kt), $t()
}
var ws = mt('<div class="flex h-16 items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>'),
  Is = mt("<!> <div><h-captcha></h-captcha></div>", 3);

function Es(l, t) {
  Zt(t, !0);
  let r = z(t, "theme", 19, () => cn.theme === "dark" ? "dark" : "light"),
    h = z(t, "size", 3, "normal"),
    m = it(void 0),
    I = it(!1);
  me(async () => {
    await Mn(() => import("../chunks/DBbNF2NY.js"), [], import.meta.url), i(m) && (i(m).addEventListener("verified", b => {
      var F;
      (F = t.callback) == null || F.call(t, b.token)
    }), i(m).addEventListener("error", b => {
      var F;
      (F = t.errorCallback) == null || F.call(t, b.error)
    }), i(m).addEventListener("expired", () => {
      var b;
      (b = t.expiredCallback) == null || b.call(t)
    }), i(m).addEventListener("loaded", () => {
      var b;
      v(I, !0), (b = t.onload) == null || b.call(t)
    }), "hcaptcha" in window && v(I, !0))
  });
  var E = Is(),
    O = W(E);
  {
    var V = b => {
      var F = ws();
      _(b, F)
    };
    lt(O, b => {
      i(I) || b(V)
    })
  }
  var D = bt(O, 2);
  let y;
  var S = J(D);
  pt(() => rn(S, "site-key", t.siteKey)), pt(() => rn(S, "size", h())), pt(() => rn(S, "theme", r())), en(S, b => v(m, b), () => i(m)), K(D), pt(() => y = ee(D, 1, "", null, y, {
    hidden: !i(I)
  })), _(l, E), $t()
}

function pn(...l) {
  return Ci(yi(l))
}
var Ds = mt("<div><!></div>");

function Ts(l, t) {
  Zt(t, !0);
  let r = z(t, "ref", 15, null),
    h = Ee(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var m = Ds();
  Ce(m, E => ({
    class: E,
    ...h
  }), [() => pn("flex items-center", t.class)]);
  var I = J(m);
  Ot(I, () => t.children ?? Gt), K(m), en(m, E => r(E), () => r()), _(l, m), $t()
}
var ke, qe;
class Ss {
  constructor(t, r) {
    dt(this, ke, () => {});
    dt(this, qe, w(() => p(this, ke).call(this)));
    let h;
    r !== void 0 && (h = r), de(this, ke, () => {
      try {
        return h
      } finally {
        h = t()
      }
    })
  }
  get current() {
    return i(p(this, qe))
  }
}
ke = new WeakMap, qe = new WeakMap;
const Ns = 1,
  Ls = 9,
  xs = 11;

function As(l) {
  return tn(l) && l.nodeType === Ns && typeof l.nodeName == "string"
}

function Un(l) {
  return tn(l) && l.nodeType === Ls
}

function Ps(l) {
  var t;
  return tn(l) && ((t = l.constructor) == null ? void 0 : t.name) === "VisualViewport"
}

function Os(l) {
  return tn(l) && l.nodeType !== void 0
}

function Rs(l) {
  return Os(l) && l.nodeType === xs && "host" in l
}

function ks(l) {
  return Un(l) ? l : Ps(l) ? l.document : (l == null ? void 0 : l.ownerDocument) ?? document
}

function Wn(l) {
  var t;
  return Rs(l) ? Wn(l.host) : Un(l) ? l.defaultView ?? window : As(l) ? ((t = l.ownerDocument) == null ? void 0 : t.defaultView) ?? window : window
}

function Ms(l) {
  let t = l.activeElement;
  for (; t != null && t.shadowRoot;) {
    const r = t.shadowRoot.activeElement;
    if (r === t) break;
    t = r
  }
  return t
}
var Me;
class Bs {
  constructor(t) {
    Ct(this, "element");
    dt(this, Me, w(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
    Ct(this, "getDocument", () => ks(this.root));
    Ct(this, "getWindow", () => this.getDocument().defaultView ?? window);
    Ct(this, "getActiveElement", () => Ms(this.root));
    Ct(this, "isActiveElement", t => t === this.getActiveElement());
    Ct(this, "querySelector", t => this.root ? this.root.querySelector(t) : null);
    Ct(this, "querySelectorAll", t => this.root ? this.root.querySelectorAll(t) : []);
    Ct(this, "setTimeout", (t, r) => this.getWindow().setTimeout(t, r));
    Ct(this, "clearTimeout", t => this.getWindow().clearTimeout(t));
    typeof t == "function" ? this.element = xt(t) : this.element = t
  }
  get root() {
    return i(p(this, Me))
  }
  set root(t) {
    v(p(this, Me), t)
  }
  getElementById(t) {
    return this.root.getElementById(t)
  }
}
Me = new WeakMap;
const Hs = 18,
  Vn = 40,
  Us = `${Vn}px`,
  Ws = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");

function Vs({
  containerRef: l,
  inputRef: t,
  pushPasswordManagerStrategy: r,
  isFocused: h,
  domContext: m
}) {
  let I = it(!1),
    E = it(!1),
    O = it(!1);

  function V() {
    const y = r.current;
    return y === "none" ? !1 : y === "increase-width" && i(I) && i(E)
  }

  function D() {
    const y = l.current,
      S = t.current;
    if (!y || !S || i(O) || r.current === "none") return;
    const b = y,
      F = b.getBoundingClientRect().left + b.offsetWidth,
      B = b.getBoundingClientRect().top + b.offsetHeight / 2,
      at = F - Hs,
      vt = B;
    m.querySelectorAll(Ws).length === 0 && m.getDocument().elementFromPoint(at, vt) === y || (v(I, !0), v(O, !0))
  }
  return Rt(() => {
    const y = l.current;
    if (!y || r.current === "none") return;

    function S() {
      const B = Wn(y).innerWidth - y.getBoundingClientRect().right;
      v(E, B >= Vn)
    }
    S();
    const b = setInterval(S, 1e3);
    return () => {
      clearInterval(b)
    }
  }), Rt(() => {
    const y = h.current || m.getActiveElement() === t.current;
    if (r.current === "none" || !y) return;
    const S = setTimeout(D, 0),
      b = setTimeout(D, 2e3),
      F = setTimeout(D, 5e3),
      B = setTimeout(() => {
        v(O, !0)
      }, 6e3);
    return () => {
      clearTimeout(S), clearTimeout(b), clearTimeout(F), clearTimeout(B)
    }
  }), {
    get hasPwmBadge() {
      return i(I)
    },
    get willPushPwmBadge() {
      return V()
    },
    PWM_BADGE_SPACE_WIDTH: Us
  }
}
const Fn = di({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  Fs = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var Xt, be, ue, zt, Qt, we, ie, ce, fe, Ie, Xe, Be, He, Qe, Je, zn, Ue, We, Ze, Ve;
const vn = class vn {
  constructor(t) {
    dt(this, Je);
    Ct(this, "opts");
    Ct(this, "attachment");
    dt(this, Xt, Dn(null));
    dt(this, be, it(!1));
    Ct(this, "inputAttachment", dn(p(this, Xt)));
    dt(this, ue, Dn(!1));
    dt(this, zt, it(null));
    dt(this, Qt, it(null));
    dt(this, we, new Ss(() => this.opts.value.current ?? ""));
    dt(this, ie, w(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    dt(this, ce, it(gn({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    dt(this, fe);
    dt(this, Ie);
    Ct(this, "domContext");
    Ct(this, "onkeydown", t => {
      const r = t.key;
      Fs.includes(r) || t.ctrlKey || t.metaKey || r && i(p(this, ie)) && !i(p(this, ie)).test(r) && t.preventDefault()
    });
    dt(this, Xe, w(() => ({
      position: "relative",
      cursor: this.opts.disabled.current ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })));
    dt(this, Be, w(() => ({
      id: this.opts.id.current,
      [Fn.root]: "",
      style: i(p(this, Xe)),
      ...this.attachment
    })));
    dt(this, He, w(() => ({
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }
    })));
    dt(this, Qe, w(() => ({
      position: "absolute",
      inset: 0,
      width: p(this, fe).willPushPwmBadge ? `calc(100% + ${p(this,fe).PWM_BADGE_SPACE_WIDTH})` : "100%",
      clipPath: p(this, fe).willPushPwmBadge ? `inset(0 ${p(this,fe).PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
      height: "100%",
      display: "flex",
      textAlign: this.opts.textAlign.current,
      opacity: "1",
      color: "transparent",
      pointerEvents: "all",
      background: "transparent",
      caretColor: "transparent",
      border: "0 solid transparent",
      outline: "0 solid transparent",
      boxShadow: "none",
      lineHeight: "1",
      letterSpacing: "-.5em",
      fontSize: "var(--bits-pin-input-root-height)",
      fontFamily: "monospace",
      fontVariantNumeric: "tabular-nums"
    })));
    dt(this, Ue, () => {
      var at;
      const t = p(this, Xt).current,
        r = this.opts.ref.current;
      if (!t || !r) return;
      if (this.domContext.getActiveElement() !== t) {
        v(p(this, zt), null), v(p(this, Qt), null);
        return
      }
      const h = t.selectionStart,
        m = t.selectionEnd,
        I = t.selectionDirection ?? "none",
        E = t.maxLength,
        O = t.value,
        V = i(p(this, ce)).prev;
      let D = -1,
        y = -1,
        S;
      if (O.length !== 0 && h !== null && m !== null) {
        const vt = h === m,
          A = h === O.length && O.length < E;
        if (vt && !A) {
          const R = h;
          if (R === 0) D = 0, y = 1, S = "forward";
          else if (R === E) D = R - 1, y = R, S = "backward";
          else if (E > 1 && O.length > 1) {
            let G = 0;
            if (V[0] !== null && V[1] !== null) {
              S = R < V[1] ? "backward" : "forward";
              const P = V[0] === V[1] && V[0] < E;
              S === "backward" && !P && (G = -1)
            }
            D = G + R, y = G + R + 1
          }
        }
        D !== -1 && y !== -1 && D !== y && ((at = p(this, Xt).current) == null || at.setSelectionRange(D, y, S))
      }
      const b = D !== -1 ? D : h,
        F = y !== -1 ? y : m,
        B = S ?? I;
      v(p(this, zt), b, !0), v(p(this, Qt), F, !0), i(p(this, ce)).prev = [b, F, B]
    });
    Ct(this, "oninput", t => {
      const r = t.currentTarget.value.slice(0, this.opts.maxLength.current);
      if (r.length > 0 && i(p(this, ie)) && !i(p(this, ie)).test(r)) {
        t.preventDefault();
        return
      }
      typeof p(this, we).current == "string" && r.length < p(this, we).current.length && this.domContext.getDocument().dispatchEvent(new Event("selectionchange")), this.opts.value.current = r
    });
    Ct(this, "onfocus", t => {
      const r = p(this, Xt).current;
      if (r) {
        const h = Math.min(r.value.length, this.opts.maxLength.current - 1),
          m = r.value.length;
        r.setSelectionRange(h, m), v(p(this, zt), h, !0), v(p(this, Qt), m, !0)
      }
      p(this, ue).current = !0
    });
    Ct(this, "onpaste", t => {
      var y, S, b, F;
      const r = p(this, Xt).current;
      if (!r) return;
      const h = B => {
          const at = r.selectionStart === null ? void 0 : r.selectionStart,
            vt = r.selectionEnd === null ? void 0 : r.selectionEnd,
            A = at !== vt,
            R = this.opts.value.current;
          return (A ? R.slice(0, at) + B + R.slice(vt) : R.slice(0, at) + B + R.slice(at)).slice(0, this.opts.maxLength.current)
        },
        m = B => B.length > 0 && i(p(this, ie)) && !i(p(this, ie)).test(B);
      if (!((y = this.opts.pasteTransformer) != null && y.current) && (!p(this, Ie).isIOS || !t.clipboardData || !r)) {
        const B = h((S = t.clipboardData) == null ? void 0 : S.getData("text/plain"));
        m(B) && t.preventDefault();
        return
      }
      const I = ((b = t.clipboardData) == null ? void 0 : b.getData("text/plain")) ?? "",
        E = (F = this.opts.pasteTransformer) != null && F.current ? this.opts.pasteTransformer.current(I) : I;
      t.preventDefault();
      const O = h(E);
      if (m(O)) return;
      r.value = O, this.opts.value.current = O;
      const V = Math.min(O.length, this.opts.maxLength.current - 1),
        D = O.length;
      r.setSelectionRange(V, D), v(p(this, zt), V, !0), v(p(this, Qt), D, !0)
    });
    Ct(this, "onmouseover", t => {
      v(p(this, be), !0)
    });
    Ct(this, "onmouseleave", t => {
      v(p(this, be), !1)
    });
    Ct(this, "onblur", t => {
      if (i(p(this, ce)).willSyntheticBlur) {
        i(p(this, ce)).willSyntheticBlur = !1;
        return
      }
      p(this, ue).current = !1
    });
    dt(this, We, w(() => {
      var t;
      return {
        id: this.opts.inputId.current,
        style: i(p(this, Qe)),
        autocomplete: this.opts.autocomplete.current || "one-time-code",
        "data-pin-input-input": "",
        "data-pin-input-input-mss": i(p(this, zt)),
        "data-pin-input-input-mse": i(p(this, Qt)),
        inputmode: this.opts.inputmode.current,
        pattern: (t = i(p(this, ie))) == null ? void 0 : t.source,
        maxlength: this.opts.maxLength.current,
        value: this.opts.value.current,
        disabled: ci(this.opts.disabled.current),
        onpaste: this.onpaste,
        oninput: this.oninput,
        onkeydown: this.onkeydown,
        onmouseover: this.onmouseover,
        onmouseleave: this.onmouseleave,
        onfocus: this.onfocus,
        onblur: this.onblur,
        ...this.inputAttachment
      }
    }));
    dt(this, Ze, w(() => Array.from({
      length: this.opts.maxLength.current
    }).map((t, r) => {
      const h = p(this, ue).current && i(p(this, zt)) !== null && i(p(this, Qt)) !== null && (i(p(this, zt)) === i(p(this, Qt)) && r === i(p(this, zt)) || r >= i(p(this, zt)) && r < i(p(this, Qt))),
        m = this.opts.value.current[r] !== void 0 ? this.opts.value.current[r] : null;
      return {
        char: m,
        isActive: h,
        hasFakeCaret: h && m === null
      }
    })));
    dt(this, Ve, w(() => ({
      cells: i(p(this, Ze)),
      isFocused: p(this, ue).current,
      isHovering: i(p(this, be))
    })));
    var r;
    this.opts = t, this.attachment = dn(this.opts.ref), this.domContext = new Bs(t.ref), de(this, Ie, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((r = window == null ? void 0 : window.CSS) == null ? void 0 : r.supports("-webkit-touch-callout", "none"))
    }), de(this, fe, Vs({
      containerRef: this.opts.ref,
      inputRef: p(this, Xt),
      isFocused: p(this, ue),
      pushPasswordManagerStrategy: this.opts.pushPasswordManagerStrategy,
      domContext: this.domContext
    })), me(() => {
      const h = p(this, Xt).current,
        m = this.opts.ref.current;
      if (!h || !m) return;
      p(this, Ie).value.current !== h.value && (this.opts.value.current = h.value), i(p(this, ce)).prev = [h.selectionStart, h.selectionEnd, h.selectionDirection ?? "none"];
      const I = Pe(this.domContext.getDocument(), "selectionchange", p(this, Ue), {
        capture: !0
      });
      p(this, Ue).call(this), this.domContext.getActiveElement() === h && (p(this, ue).current = !0), this.domContext.getElementById("pin-input-style") || _n(this, Je, zn).call(this);
      const E = () => {
        m && m.style.setProperty("--bits-pin-input-root-height", `${h.clientHeight}px`)
      };
      E();
      const O = new ResizeObserver(E);
      return O.observe(h), () => {
        I(), O.disconnect()
      }
    }), ui([() => this.opts.value.current, () => p(this, Xt).current], () => {
      zs(() => {
        const h = p(this, Xt).current;
        if (!h) return;
        h.dispatchEvent(new Event("input"));
        const m = h.selectionStart,
          I = h.selectionEnd,
          E = h.selectionDirection ?? "none";
        m !== null && I !== null && (v(p(this, zt), m, !0), v(p(this, Qt), I, !0), i(p(this, ce)).prev = [m, I, E])
      }, this.domContext)
    }), Rt(() => {
      const h = this.opts.value.current,
        m = p(this, we).current,
        I = this.opts.maxLength.current,
        E = this.opts.onComplete.current;
      m !== void 0 && h !== m && m.length < I && h.length === I && E(h)
    })
  }
  static create(t) {
    return new vn(t)
  }
  get rootProps() {
    return i(p(this, Be))
  }
  set rootProps(t) {
    v(p(this, Be), t)
  }
  get inputWrapperProps() {
    return i(p(this, He))
  }
  set inputWrapperProps(t) {
    v(p(this, He), t)
  }
  get inputProps() {
    return i(p(this, We))
  }
  set inputProps(t) {
    v(p(this, We), t)
  }
  get snippetProps() {
    return i(p(this, Ve))
  }
  set snippetProps(t) {
    v(p(this, Ve), t)
  }
};
Xt = new WeakMap, be = new WeakMap, ue = new WeakMap, zt = new WeakMap, Qt = new WeakMap, we = new WeakMap, ie = new WeakMap, ce = new WeakMap, fe = new WeakMap, Ie = new WeakMap, Xe = new WeakMap, Be = new WeakMap, He = new WeakMap, Qe = new WeakMap, Je = new WeakSet, zn = function() {
  const t = this.domContext.getDocument(),
    r = t.createElement("style");
  if (r.id = "pin-input-style", t.head.appendChild(r), r.sheet) {
    const h = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
    Le(r.sheet, "[data-pin-input-input]::selection { background: transparent !important; color: transparent !important; }"), Le(r.sheet, `[data-pin-input-input]:autofill { ${h} }`), Le(r.sheet, `[data-pin-input-input]:-webkit-autofill { ${h} }`), Le(r.sheet, "@supports (-webkit-touch-callout: none) { [data-pin-input-input] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Le(r.sheet, "[data-pin-input-input] + * { pointer-events: all !important; }")
  }
}, Ue = new WeakMap, We = new WeakMap, Ze = new WeakMap, Ve = new WeakMap;
let fn = vn;
var Fe;
const yn = class yn {
  constructor(t) {
    Ct(this, "opts");
    Ct(this, "attachment");
    dt(this, Fe, w(() => ({
      id: this.opts.id.current,
      [Fn.cell]: "",
      "data-active": this.opts.cell.current.isActive ? "" : void 0,
      "data-inactive": this.opts.cell.current.isActive ? void 0 : "",
      ...this.attachment
    })));
    this.opts = t, this.attachment = dn(this.opts.ref)
  }
  static create(t) {
    return new yn(t)
  }
  get props() {
    return i(p(this, Fe))
  }
  set props(t) {
    v(p(this, Fe), t)
  }
};
Fe = new WeakMap;
let mn = yn;

function zs(l, t) {
  const r = t.setTimeout(l, 0),
    h = t.setTimeout(l, 10),
    m = t.setTimeout(l, 50);
  return [r, h, m]
}

function Le(l, t) {
  try {
    l.insertRule(t)
  } catch {
    console.error("pin input could not insert CSS rule:", t)
  }
}
var Gs = mt("<div><!> <div><input/></div></div>");

function js(l, t) {
  const r = Pn();
  Zt(t, !0);
  let h = z(t, "id", 19, () => hn(r)),
    m = z(t, "inputId", 19, () => `${hn(r)}-input`),
    I = z(t, "ref", 15, null),
    E = z(t, "maxlength", 3, 6),
    O = z(t, "textalign", 3, "left"),
    V = z(t, "inputmode", 3, "numeric"),
    D = z(t, "onComplete", 3, Tn),
    y = z(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    S = z(t, "class", 3, ""),
    b = z(t, "autocomplete", 3, "one-time-code"),
    F = z(t, "disabled", 3, !1),
    B = z(t, "value", 15, ""),
    at = z(t, "onValueChange", 3, Tn),
    vt = Ee(t, ["$$slots", "$$events", "$$legacy", "id", "inputId", "ref", "maxlength", "textalign", "pattern", "inputmode", "onComplete", "pushPasswordManagerStrategy", "class", "children", "autocomplete", "disabled", "value", "onValueChange", "pasteTransformer"]);
  const A = fn.create({
      id: xt(() => h()),
      ref: xt(() => I(), _t => I(_t)),
      inputId: xt(() => m()),
      autocomplete: xt(() => b()),
      maxLength: xt(() => E()),
      textAlign: xt(() => O()),
      disabled: xt(() => F()),
      inputmode: xt(() => V()),
      pattern: xt(() => t.pattern),
      onComplete: xt(() => D()),
      value: xt(() => B(), _t => {
        B(_t), at()(_t)
      }),
      pushPasswordManagerStrategy: xt(() => y()),
      pasteTransformer: xt(() => t.pasteTransformer)
    }),
    R = w(() => Ke(vt, A.inputProps)),
    G = w(() => Ke(A.rootProps, {
      class: S()
    })),
    P = w(() => Ke(A.inputWrapperProps, {}));
  var st = Gs();
  Ce(st, () => ({
    ...i(G)
  }));
  var j = J(st);
  Ot(j, () => t.children ?? Gt, () => A.snippetProps);
  var ht = bt(j, 2);
  Ce(ht, () => ({
    ...i(P)
  }));
  var Nt = J(ht);
  Ce(Nt, () => ({
    ...i(R)
  }), void 0, void 0, void 0, void 0, !0), K(ht), K(st), _(l, st), $t()
}
var Ks = mt("<div><!></div>");

function Ys(l, t) {
  const r = Pn();
  Zt(t, !0);
  let h = z(t, "id", 19, () => hn(r)),
    m = z(t, "ref", 15, null),
    I = Ee(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]);
  const E = mn.create({
      id: xt(() => h()),
      ref: xt(() => m(), b => m(b)),
      cell: xt(() => t.cell)
    }),
    O = w(() => Ke(I, E.props));
  var V = X(),
    D = W(V);
  {
    var y = b => {
        var F = X(),
          B = W(F);
        Ot(B, () => t.child, () => ({
          props: i(O)
        })), _(b, F)
      },
      S = b => {
        var F = Ks();
        Ce(F, () => ({
          ...i(O)
        }));
        var B = J(F);
        Ot(B, () => t.children ?? Gt), K(F), _(b, F)
      };
    lt(D, b => {
      t.child ? b(y) : b(S, !1)
    })
  }
  _(l, V), $t()
}
var qs = mt('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  Xs = mt(" <!>", 1);

function Qs(l, t) {
  Zt(t, !0);
  let r = z(t, "ref", 15, null),
    h = Ee(t, ["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]);
  var m = X(),
    I = W(m);
  {
    let E = w(() => pn("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    Jt(I, () => Ys, (O, V) => {
      V(O, Ae({
        get cell() {
          return t.cell
        },
        get class() {
          return i(E)
        }
      }, () => h, {
        get ref() {
          return r()
        },
        set ref(D) {
          r(D)
        },
        children: (D, y) => {
          On();
          var S = Xs(),
            b = W(S),
            F = bt(b);
          {
            var B = at => {
              var vt = qs();
              _(at, vt)
            };
            lt(F, at => {
              t.cell.hasFakeCaret && at(B)
            })
          }
          pt(() => Pt(b, `${t.cell.char??""} `)), _(D, S)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  _(l, m), $t()
}

function Js(l, t) {
  Zt(t, !0);
  let r = z(t, "ref", 15, null),
    h = z(t, "value", 15, ""),
    m = Ee(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);
  var I = X(),
    E = W(I);
  {
    let O = w(() => pn("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    Jt(E, () => js, (V, D) => {
      D(V, Ae({
        get class() {
          return i(O)
        }
      }, () => m, {
        get ref() {
          return r()
        },
        set ref(y) {
          r(y)
        },
        get value() {
          return h()
        },
        set value(y) {
          h(y)
        }
      }))
    })
  }
  _(l, I), $t()
}
var un = {
    exports: {}
  },
  xn;

function Zs() {
  return xn || (xn = 1, (function(l) {
    (function(t) {
      l.exports ? l.exports = t() : window.intlTelInput = t()
    })(() => {
      var t = (() => {
        var r = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          m = Object.getOwnPropertyNames,
          I = Object.prototype.hasOwnProperty,
          E = (a, e) => {
            for (var n in e) r(a, n, {
              get: e[n],
              enumerable: !0
            })
          },
          O = (a, e, n, s) => {
            if (e && typeof e == "object" || typeof e == "function")
              for (let o of m(e)) !I.call(a, o) && o !== n && r(a, o, {
                get: () => e[o],
                enumerable: !(s = h(e, o)) || s.enumerable
              });
            return a
          },
          V = a => O(r({}, "__esModule", {
            value: !0
          }), a),
          D = {};
        E(D, {
          Iti: () => $,
          default: () => Dt
        });
        var y = [
            ["af", "93", 0, null, "0"],
            ["ax", "358", 1, ["18", "4"], "0"],
            ["al", "355", 0, null, "0"],
            ["dz", "213", 0, null, "0"],
            ["as", "1", 5, ["684"], "1"],
            ["ad", "376"],
            ["ao", "244"],
            ["ai", "1", 6, ["264"], "1"],
            ["ag", "1", 7, ["268"], "1"],
            ["ar", "54", 0, null, "0"],
            ["am", "374", 0, null, "0"],
            ["aw", "297"],
            ["ac", "247"],
            ["au", "61", 0, ["4"], "0"],
            ["at", "43", 0, null, "0"],
            ["az", "994", 0, null, "0"],
            ["bs", "1", 8, ["242"], "1"],
            ["bh", "973"],
            ["bd", "880", 0, null, "0"],
            ["bb", "1", 9, ["246"], "1"],
            ["by", "375", 0, null, "8"],
            ["be", "32", 0, null, "0"],
            ["bz", "501"],
            ["bj", "229"],
            ["bm", "1", 10, ["441"], "1"],
            ["bt", "975"],
            ["bo", "591", 0, null, "0"],
            ["ba", "387", 0, null, "0"],
            ["bw", "267"],
            ["br", "55", 0, null, "0"],
            ["io", "246"],
            ["vg", "1", 11, ["284"], "1"],
            ["bn", "673"],
            ["bg", "359", 0, null, "0"],
            ["bf", "226"],
            ["bi", "257"],
            ["kh", "855", 0, null, "0"],
            ["cm", "237"],
            ["ca", "1", 1, ["204", "226", "236", "249", "250", "257", "263", "289", "306", "343", "354", "365", "367", "368", "382", "403", "416", "418", "428", "431", "437", "438", "450", "468", "474", "506", "514", "519", "548", "579", "581", "584", "587", "604", "613", "639", "647", "672", "683", "705", "709", "742", "753", "778", "780", "782", "807", "819", "825", "867", "873", "879", "902", "905", "942"], "1"],
            ["cv", "238"],
            ["bq", "599", 1, ["3", "4", "7"]],
            ["ky", "1", 12, ["345"], "1"],
            ["cf", "236"],
            ["td", "235"],
            ["cl", "56"],
            ["cn", "86", 0, null, "0"],
            ["cx", "61", 2, ["4", "89164"], "0"],
            ["cc", "61", 1, ["4", "89162"], "0"],
            ["co", "57", 0, null, "0"],
            ["km", "269"],
            ["cg", "242"],
            ["cd", "243", 0, null, "0"],
            ["ck", "682"],
            ["cr", "506"],
            ["ci", "225"],
            ["hr", "385", 0, null, "0"],
            ["cu", "53", 0, null, "0"],
            ["cw", "599", 0],
            ["cy", "357"],
            ["cz", "420"],
            ["dk", "45"],
            ["dj", "253"],
            ["dm", "1", 13, ["767"], "1"],
            ["do", "1", 2, ["809", "829", "849"], "1"],
            ["ec", "593", 0, null, "0"],
            ["eg", "20", 0, null, "0"],
            ["sv", "503"],
            ["gq", "240"],
            ["er", "291", 0, null, "0"],
            ["ee", "372"],
            ["sz", "268"],
            ["et", "251", 0, null, "0"],
            ["fk", "500"],
            ["fo", "298"],
            ["fj", "679"],
            ["fi", "358", 0, ["4"], "0"],
            ["fr", "33", 0, null, "0"],
            ["gf", "594", 0, null, "0"],
            ["pf", "689"],
            ["ga", "241"],
            ["gm", "220"],
            ["ge", "995", 0, null, "0"],
            ["de", "49", 0, null, "0"],
            ["gh", "233", 0, null, "0"],
            ["gi", "350"],
            ["gr", "30"],
            ["gl", "299"],
            ["gd", "1", 14, ["473"], "1"],
            ["gp", "590", 0, null, "0"],
            ["gu", "1", 15, ["671"], "1"],
            ["gt", "502"],
            ["gg", "44", 1, ["1481", "7781", "7839", "7911"], "0"],
            ["gn", "224"],
            ["gw", "245"],
            ["gy", "592"],
            ["ht", "509"],
            ["hn", "504"],
            ["hk", "852"],
            ["hu", "36", 0, null, "06"],
            ["is", "354"],
            ["in", "91", 0, null, "0"],
            ["id", "62", 0, null, "0"],
            ["ir", "98", 0, null, "0"],
            ["iq", "964", 0, null, "0"],
            ["ie", "353", 0, null, "0"],
            ["im", "44", 2, ["1624", "74576", "7524", "7624", "7924"], "0"],
            ["il", "972", 0, null, "0"],
            ["it", "39", 0, ["3"]],
            ["jm", "1", 4, ["658", "876"], "1"],
            ["jp", "81", 0, null, "0"],
            ["je", "44", 3, ["1534", "7509", "7700", "7797", "7829", "7937"], "0"],
            ["jo", "962", 0, null, "0"],
            ["kz", "7", 1, ["33", "7"], "8"],
            ["ke", "254", 0, null, "0"],
            ["ki", "686", 0, null, "0"],
            ["xk", "383", 0, null, "0"],
            ["kw", "965"],
            ["kg", "996", 0, null, "0"],
            ["la", "856", 0, null, "0"],
            ["lv", "371"],
            ["lb", "961", 0, null, "0"],
            ["ls", "266"],
            ["lr", "231", 0, null, "0"],
            ["ly", "218", 0, null, "0"],
            ["li", "423", 0, null, "0"],
            ["lt", "370", 0, null, "0"],
            ["lu", "352"],
            ["mo", "853"],
            ["mg", "261", 0, null, "0"],
            ["mw", "265", 0, null, "0"],
            ["my", "60", 0, null, "0"],
            ["mv", "960"],
            ["ml", "223"],
            ["mt", "356"],
            ["mh", "692", 0, null, "1"],
            ["mq", "596", 0, null, "0"],
            ["mr", "222"],
            ["mu", "230"],
            ["yt", "262", 1, ["269", "639"], "0"],
            ["mx", "52"],
            ["fm", "691"],
            ["md", "373", 0, null, "0"],
            ["mc", "377", 0, null, "0"],
            ["mn", "976", 0, null, "0"],
            ["me", "382", 0, null, "0"],
            ["ms", "1", 16, ["664"], "1"],
            ["ma", "212", 0, ["6", "7"], "0"],
            ["mz", "258"],
            ["mm", "95", 0, null, "0"],
            ["na", "264", 0, null, "0"],
            ["nr", "674"],
            ["np", "977", 0, null, "0"],
            ["nl", "31", 0, null, "0"],
            ["nc", "687"],
            ["nz", "64", 0, null, "0"],
            ["ni", "505"],
            ["ne", "227"],
            ["ng", "234", 0, null, "0"],
            ["nu", "683"],
            ["nf", "672"],
            ["kp", "850", 0, null, "0"],
            ["mk", "389", 0, null, "0"],
            ["mp", "1", 17, ["670"], "1"],
            ["no", "47", 0, ["4", "9"]],
            ["om", "968"],
            ["pk", "92", 0, null, "0"],
            ["pw", "680"],
            ["ps", "970", 0, null, "0"],
            ["pa", "507"],
            ["pg", "675"],
            ["py", "595", 0, null, "0"],
            ["pe", "51", 0, null, "0"],
            ["ph", "63", 0, null, "0"],
            ["pl", "48"],
            ["pt", "351"],
            ["pr", "1", 3, ["787", "939"], "1"],
            ["qa", "974"],
            ["re", "262", 0, null, "0"],
            ["ro", "40", 0, null, "0"],
            ["ru", "7", 0, ["33"], "8"],
            ["rw", "250", 0, null, "0"],
            ["ws", "685"],
            ["sm", "378"],
            ["st", "239"],
            ["sa", "966", 0, null, "0"],
            ["sn", "221"],
            ["rs", "381", 0, null, "0"],
            ["sc", "248"],
            ["sl", "232", 0, null, "0"],
            ["sg", "65"],
            ["sx", "1", 21, ["721"], "1"],
            ["sk", "421", 0, null, "0"],
            ["si", "386", 0, null, "0"],
            ["sb", "677"],
            ["so", "252", 0, null, "0"],
            ["za", "27", 0, null, "0"],
            ["kr", "82", 0, null, "0"],
            ["ss", "211", 0, null, "0"],
            ["es", "34"],
            ["lk", "94", 0, null, "0"],
            ["bl", "590", 1, null, "0"],
            ["sh", "290"],
            ["kn", "1", 18, ["869"], "1"],
            ["lc", "1", 19, ["758"], "1"],
            ["mf", "590", 2, null, "0"],
            ["pm", "508", 0, null, "0"],
            ["vc", "1", 20, ["784"], "1"],
            ["sd", "249", 0, null, "0"],
            ["sr", "597"],
            ["sj", "47", 1, ["4", "79", "9"]],
            ["se", "46", 0, null, "0"],
            ["ch", "41", 0, null, "0"],
            ["sy", "963", 0, null, "0"],
            ["tw", "886", 0, null, "0"],
            ["tj", "992"],
            ["tz", "255", 0, null, "0"],
            ["th", "66", 0, null, "0"],
            ["tl", "670"],
            ["tg", "228"],
            ["tk", "690"],
            ["to", "676"],
            ["tt", "1", 22, ["868"], "1"],
            ["tn", "216"],
            ["tr", "90", 0, null, "0"],
            ["tm", "993", 0, null, "8"],
            ["tc", "1", 23, ["649"], "1"],
            ["tv", "688"],
            ["vi", "1", 24, ["340"], "1"],
            ["ug", "256", 0, null, "0"],
            ["ua", "380", 0, null, "0"],
            ["ae", "971", 0, null, "0"],
            ["gb", "44", 0, null, "0"],
            ["us", "1", 0, null, "1"],
            ["uy", "598", 0, null, "0"],
            ["uz", "998"],
            ["vu", "678"],
            ["va", "39", 1, ["06698", "3"]],
            ["ve", "58", 0, null, "0"],
            ["vn", "84", 0, null, "0"],
            ["wf", "681"],
            ["eh", "212", 1, ["5288", "5289", "6", "7"], "0"],
            ["ye", "967", 0, null, "0"],
            ["zm", "260", 0, null, "0"],
            ["zw", "263", 0, null, "0"]
          ],
          S = [];
        for (const a of y) S.push({
          name: "",
          iso2: a[0],
          dialCode: a[1],
          priority: a[2] || 0,
          areaCodes: a[3] || null,
          nodeById: {},
          nationalPrefix: a[4] || null,
          normalisedName: "",
          initials: "",
          dialCodePlus: ""
        });
        var b = S,
          F = {
            ad: "Andorra",
            ae: "United Arab Emirates",
            af: "Afghanistan",
            ag: "Antigua & Barbuda",
            ai: "Anguilla",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            ar: "Argentina",
            as: "American Samoa",
            at: "Austria",
            au: "Australia",
            aw: "Aruba",
            ax: "Åland Islands",
            az: "Azerbaijan",
            ba: "Bosnia & Herzegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Belgium",
            bf: "Burkina Faso",
            bg: "Bulgaria",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bl: "St. Barthélemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "Caribbean Netherlands",
            br: "Brazil",
            bs: "Bahamas",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Belarus",
            bz: "Belize",
            ca: "Canada",
            cc: "Cocos (Keeling) Islands",
            cd: "Congo - Kinshasa",
            cf: "Central African Republic",
            cg: "Congo - Brazzaville",
            ch: "Switzerland",
            ci: "Côte d’Ivoire",
            ck: "Cook Islands",
            cl: "Chile",
            cm: "Cameroon",
            cn: "China",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Cape Verde",
            cw: "Curaçao",
            cx: "Christmas Island",
            cy: "Cyprus",
            cz: "Czechia",
            de: "Germany",
            dj: "Djibouti",
            dk: "Denmark",
            dm: "Dominica",
            do: "Dominican Republic",
            dz: "Algeria",
            ec: "Ecuador",
            ee: "Estonia",
            eg: "Egypt",
            eh: "Western Sahara",
            er: "Eritrea",
            es: "Spain",
            et: "Ethiopia",
            fi: "Finland",
            fj: "Fiji",
            fk: "Falkland Islands",
            fm: "Micronesia",
            fo: "Faroe Islands",
            fr: "France",
            ga: "Gabon",
            gb: "United Kingdom",
            gd: "Grenada",
            ge: "Georgia",
            gf: "French Guiana",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Greenland",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Equatorial Guinea",
            gr: "Greece",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "Hong Kong SAR China",
            hn: "Honduras",
            hr: "Croatia",
            ht: "Haiti",
            hu: "Hungary",
            id: "Indonesia",
            ie: "Ireland",
            il: "Israel",
            im: "Isle of Man",
            in: "India",
            io: "British Indian Ocean Territory",
            iq: "Iraq",
            ir: "Iran",
            is: "Iceland",
            it: "Italy",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordan",
            jp: "Japan",
            ke: "Kenya",
            kg: "Kyrgyzstan",
            kh: "Cambodia",
            ki: "Kiribati",
            km: "Comoros",
            kn: "St. Kitts & Nevis",
            kp: "North Korea",
            kr: "South Korea",
            kw: "Kuwait",
            ky: "Cayman Islands",
            kz: "Kazakhstan",
            la: "Laos",
            lb: "Lebanon",
            lc: "St. Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Lithuania",
            lu: "Luxembourg",
            lv: "Latvia",
            ly: "Libya",
            ma: "Morocco",
            mc: "Monaco",
            md: "Moldova",
            me: "Montenegro",
            mf: "St. Martin",
            mg: "Madagascar",
            mh: "Marshall Islands",
            mk: "North Macedonia",
            ml: "Mali",
            mm: "Myanmar (Burma)",
            mn: "Mongolia",
            mo: "Macao SAR China",
            mp: "Northern Mariana Islands",
            mq: "Martinique",
            mr: "Mauritania",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldives",
            mw: "Malawi",
            mx: "Mexico",
            my: "Malaysia",
            mz: "Mozambique",
            na: "Namibia",
            nc: "New Caledonia",
            ne: "Niger",
            nf: "Norfolk Island",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Netherlands",
            no: "Norway",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "New Zealand",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "French Polynesia",
            pg: "Papua New Guinea",
            ph: "Philippines",
            pk: "Pakistan",
            pl: "Poland",
            pm: "St. Pierre & Miquelon",
            pr: "Puerto Rico",
            ps: "Palestinian Territories",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "Réunion",
            ro: "Romania",
            rs: "Serbia",
            ru: "Russia",
            rw: "Rwanda",
            sa: "Saudi Arabia",
            sb: "Solomon Islands",
            sc: "Seychelles",
            sd: "Sudan",
            se: "Sweden",
            sg: "Singapore",
            sh: "St. Helena",
            si: "Slovenia",
            sj: "Svalbard & Jan Mayen",
            sk: "Slovakia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Suriname",
            ss: "South Sudan",
            st: "São Tomé & Príncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Syria",
            sz: "Eswatini",
            tc: "Turks & Caicos Islands",
            td: "Chad",
            tg: "Togo",
            th: "Thailand",
            tj: "Tajikistan",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Turkmenistan",
            tn: "Tunisia",
            to: "Tonga",
            tr: "Turkey",
            tt: "Trinidad & Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzania",
            ua: "Ukraine",
            ug: "Uganda",
            us: "United States",
            uy: "Uruguay",
            uz: "Uzbekistan",
            va: "Vatican City",
            vc: "St. Vincent & Grenadines",
            ve: "Venezuela",
            vg: "British Virgin Islands",
            vi: "U.S. Virgin Islands",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis & Futuna",
            ws: "Samoa",
            ye: "Yemen",
            yt: "Mayotte",
            za: "South Africa",
            zm: "Zambia",
            zw: "Zimbabwe"
          },
          B = F,
          at = {
            selectedCountryAriaLabel: "Change country, selected ${countryName} (${dialCode})",
            noCountrySelected: "Select country",
            countryListAriaLabel: "List of countries",
            searchPlaceholder: "Search",
            clearSearchAriaLabel: "Clear search",
            zeroSearchResults: "No results found",
            oneSearchResult: "1 result found",
            multipleSearchResults: "${count} results found",
            ac: "Ascension Island",
            xk: "Kosovo"
          },
          vt = at,
          A = {
            ...B,
            ...vt
          },
          R = A,
          G = {
            OPEN_COUNTRY_DROPDOWN: "open:countrydropdown",
            CLOSE_COUNTRY_DROPDOWN: "close:countrydropdown",
            COUNTRY_CHANGE: "countrychange",
            INPUT: "input"
          },
          P = {
            HIDE: "iti__hide",
            V_HIDE: "iti__v-hide",
            ARROW_UP: "iti__arrow--up",
            GLOBE: "iti__globe",
            FLAG: "iti__flag",
            COUNTRY_ITEM: "iti__country",
            HIGHLIGHT: "iti__highlight"
          },
          st = {
            ARROW_UP: "ArrowUp",
            ARROW_DOWN: "ArrowDown",
            SPACE: " ",
            ENTER: "Enter",
            ESC: "Escape",
            TAB: "Tab"
          },
          j = {
            PASTE: "insertFromPaste",
            DELETE_FWD: "deleteContentForward"
          },
          ht = {
            ALPHA_UNICODE: new RegExp("\\p{L}", "u"),
            NON_PLUS_NUMERIC: /[^+0-9]/,
            NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g,
            HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/
          },
          Nt = {
            HIDDEN_SEARCH_RESET_MS: 1e3
          },
          _t = {
            UNKNOWN_NUMBER_TYPE: -99,
            UNKNOWN_VALIDATION_ERROR: -99
          },
          It = {
            SANE_SELECTED_WITH_DIAL_WIDTH: 78,
            SANE_SELECTED_NO_DIAL_WIDTH: 42,
            INPUT_PADDING_EXTRA_LEFT: 6
          },
          Et = {
            NANP: "1"
          },
          Wt = {
            DIAL_CODE: "44",
            MOBILE_PREFIX: "7",
            MOBILE_CORE_LENGTH: 10
          },
          Mt = {
            ISO2: "us"
          },
          jt = {
            AGGRESSIVE: "aggressive",
            POLITE: "polite"
          },
          Bt = {
            AUTO: "auto"
          },
          ne = {
            COUNTRY_CODE: "countryCode",
            DIAL_CODE: "dialCode"
          },
          H = {
            EXPANDED: "aria-expanded",
            LABEL: "aria-label",
            SELECTED: "aria-selected",
            ACTIVE_DESCENDANT: "aria-activedescendant",
            HASPOPUP: "aria-haspopup",
            CONTROLS: "aria-controls",
            HIDDEN: "aria-hidden",
            AUTOCOMPLETE: "aria-autocomplete",
            MODAL: "aria-modal"
          },
          rt = a => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia(a).matches,
          ct = () => {
            if (typeof navigator < "u" && typeof window < "u") {
              const a = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                e = rt("(max-width: 500px)"),
                n = rt("(max-height: 600px)"),
                s = rt("(pointer: coarse)");
              return a || e || s && n
            }
            return !1
          },
          Tt = {
            allowPhonewords: !1,
            allowDropdown: !0,
            autoPlaceholder: jt.POLITE,
            containerClass: "",
            countryOrder: null,
            countrySearch: !0,
            customPlaceholder: null,
            dropdownContainer: null,
            excludeCountries: [],
            fixDropdownWidth: !0,
            formatAsYouType: !0,
            formatOnDisplay: !0,
            geoIpLookup: null,
            hiddenInput: null,
            i18n: {},
            initialCountry: "",
            loadUtils: null,
            nationalMode: !0,
            onlyCountries: [],
            placeholderNumberType: "MOBILE",
            showFlags: !0,
            separateDialCode: !1,
            strictMode: !1,
            useFullscreenPopup: ct(),
            validationNumberTypes: ["MOBILE"]
          },
          Kt = (a, e) => {
            a.useFullscreenPopup && (a.fixDropdownWidth = !1), a.onlyCountries.length === 1 && (a.initialCountry = a.onlyCountries[0]), a.separateDialCode && (a.nationalMode = !1), a.allowDropdown && !a.showFlags && !a.separateDialCode && (a.nationalMode = !1), a.useFullscreenPopup && !a.dropdownContainer && (a.dropdownContainer = document.body), a.i18n = {
              ...e,
              ...a.i18n
            }
          },
          Yt = a => a.replace(/\D/g, ""),
          se = (a = "") => a.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
          T = (a, e) => {
            const n = se(e),
              s = [],
              o = [],
              c = [],
              u = [],
              f = [],
              d = [];
            for (const L of a) L.iso2 === n ? s.push(L) : L.normalisedName.startsWith(n) ? o.push(L) : L.normalisedName.includes(n) ? c.push(L) : n === L.dialCode || n === L.dialCodePlus ? u.push(L) : L.dialCodePlus.includes(n) ? f.push(L) : L.initials.includes(n) && d.push(L);
            const C = (L, ut) => L.priority - ut.priority;
            return [...s.sort(C), ...o.sort(C), ...c.sort(C), ...u.sort(C), ...f.sort(C), ...d.sort(C)]
          },
          U = (a, e) => {
            const n = e.toLowerCase();
            for (const s of a)
              if (s.name.toLowerCase().startsWith(n)) return s;
            return null
          },
          yt = a => Object.keys(a).filter(e => !!a[e]).join(" "),
          Z = (a, e, n) => {
            const s = document.createElement(a);
            return e && Object.entries(e).forEach(([o, c]) => s.setAttribute(o, c)), n && n.appendChild(s), s
          },
          kt = () => `
  <svg class="iti__search-icon-svg" width="14" height="14" viewBox="0 0 24 24" focusable="false" ${H.HIDDEN}="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>`,
          qt = a => {
            const e = `iti-${a}-clear-mask`;
            return `
    <svg class="iti__search-clear-svg" width="12" height="12" viewBox="0 0 16 16" ${H.HIDDEN}="true" focusable="false">
      <mask id="${e}" maskUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="white" />
        <path d="M5.2 5.2 L10.8 10.8 M10.8 5.2 L5.2 10.8" stroke="black" stroke-linecap="round" class="iti__search-clear-x" />
      </mask>
      <circle cx="8" cy="8" r="8" class="iti__search-clear-bg" mask="url(#${e})" />
    </svg>`
          },
          ge = class {
            constructor(a, e, n) {
              this.highlightedItem = null, this.selectedItem = null, a.dataset.intlTelInputId = n.toString(), this.telInput = a, this.options = e, this.id = n, this.hadInitialPlaceholder = !!a.getAttribute("placeholder"), this.isRTL = !!this.telInput.closest("[dir=rtl]"), this.options.separateDialCode && (this.originalPaddingLeft = this.telInput.style.paddingLeft)
            }
            generateMarkup(a) {
              this.countries = a, this._prepareTelInput();
              const e = this._createWrapperAndInsert();
              this._maybeBuildCountryContainer(e), e.appendChild(this.telInput), this._maybeUpdateInputPaddingAndReveal(), this._maybeBuildHiddenInputs(e)
            }
            _prepareTelInput() {
              var a;
              this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !((a = this.telInput.form) != null && a.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off")
            }
            _createWrapperAndInsert() {
              const {
                allowDropdown: a,
                showFlags: e,
                containerClass: n,
                useFullscreenPopup: s
              } = this.options, o = yt({
                iti: !0,
                "iti--allow-dropdown": a,
                "iti--show-flags": e,
                "iti--inline-dropdown": !s,
                [n]: !!n
              }), c = Z("div", {
                class: o
              });
              return this.isRTL && c.setAttribute("dir", "ltr"), this.telInput.before(c), c
            }
            _maybeBuildCountryContainer(a) {
              const {
                allowDropdown: e,
                separateDialCode: n,
                showFlags: s
              } = this.options;
              if (e || s || n) {
                this.countryContainer = Z("div", {
                  class: `iti__country-container ${P.V_HIDE}`
                }, a), e ? (this.selectedCountry = Z("button", {
                  type: "button",
                  class: "iti__selected-country",
                  [H.EXPANDED]: "false",
                  [H.LABEL]: this.options.i18n.noCountrySelected,
                  [H.HASPOPUP]: "dialog",
                  [H.CONTROLS]: `iti-${this.id}__dropdown-content`
                }, this.countryContainer), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = Z("div", {
                  class: "iti__selected-country"
                }, this.countryContainer);
                const o = Z("div", {
                  class: "iti__selected-country-primary"
                }, this.selectedCountry);
                this.selectedCountryInner = Z("div", {
                  class: P.FLAG
                }, o), e && (this.dropdownArrow = Z("div", {
                  class: "iti__arrow",
                  [H.HIDDEN]: "true"
                }, o)), n && (this.selectedDialCode = Z("div", {
                  class: "iti__selected-dial-code"
                }, this.selectedCountry)), e && this._buildDropdownContent()
              }
            }
            _buildDropdownContent() {
              const {
                fixDropdownWidth: a,
                useFullscreenPopup: e,
                countrySearch: n,
                i18n: s,
                dropdownContainer: o,
                containerClass: c
              } = this.options, u = a ? "" : "iti--flexible-dropdown-width";
              if (this.dropdownContent = Z("div", {
                  id: `iti-${this.id}__dropdown-content`,
                  class: `iti__dropdown-content ${P.HIDE} ${u}`,
                  role: "dialog",
                  [H.MODAL]: "true"
                }), this.isRTL && this.dropdownContent.setAttribute("dir", "rtl"), n && this._buildSearchUI(), this.countryList = Z("ul", {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  [H.LABEL]: s.countryListAriaLabel
                }, this.dropdownContent), this._appendListItems(), n && this.updateSearchResultsA11yText(), o) {
                const f = yt({
                  iti: !0,
                  "iti--container": !0,
                  "iti--fullscreen-popup": e,
                  "iti--inline-dropdown": !e,
                  [c]: !!c
                });
                this.dropdown = Z("div", {
                  class: f
                }), this.dropdown.appendChild(this.dropdownContent)
              } else this.countryContainer.appendChild(this.dropdownContent)
            }
            _buildSearchUI() {
              const {
                i18n: a
              } = this.options, e = Z("div", {
                class: "iti__search-input-wrapper"
              }, this.dropdownContent);
              this.searchIcon = Z("span", {
                class: "iti__search-icon",
                [H.HIDDEN]: "true"
              }, e), this.searchIcon.innerHTML = kt(), this.searchInput = Z("input", {
                id: `iti-${this.id}__search-input`,
                type: "search",
                class: "iti__search-input",
                placeholder: a.searchPlaceholder,
                role: "combobox",
                [H.EXPANDED]: "true",
                [H.LABEL]: a.searchPlaceholder,
                [H.CONTROLS]: `iti-${this.id}__country-listbox`,
                [H.AUTOCOMPLETE]: "list",
                autocomplete: "off"
              }, e), this.searchClearButton = Z("button", {
                type: "button",
                class: `iti__search-clear ${P.HIDE}`,
                [H.LABEL]: a.clearSearchAriaLabel,
                tabindex: "-1"
              }, e), this.searchClearButton.innerHTML = qt(this.id), this.searchResultsA11yText = Z("span", {
                class: "iti__a11y-text"
              }, this.dropdownContent), this.searchNoResults = Z("div", {
                class: `iti__no-results ${P.HIDE}`,
                [H.HIDDEN]: "true"
              }, this.dropdownContent), this.searchNoResults.textContent = a.zeroSearchResults
            }
            _maybeUpdateInputPaddingAndReveal() {
              this.countryContainer && (this.updateInputPadding(), this.countryContainer.classList.remove(P.V_HIDE))
            }
            _maybeBuildHiddenInputs(a) {
              var n, s;
              const {
                hiddenInput: e
              } = this.options;
              if (e) {
                const o = this.telInput.getAttribute("name") || "",
                  c = e(o);
                if (c.phone) {
                  const u = (n = this.telInput.form) == null ? void 0 : n.querySelector(`input[name="${c.phone}"]`);
                  u ? this.hiddenInput = u : (this.hiddenInput = Z("input", {
                    type: "hidden",
                    name: c.phone
                  }), a.appendChild(this.hiddenInput))
                }
                if (c.country) {
                  const u = (s = this.telInput.form) == null ? void 0 : s.querySelector(`input[name="${c.country}"]`);
                  u ? this.hiddenInputCountry = u : (this.hiddenInputCountry = Z("input", {
                    type: "hidden",
                    name: c.country
                  }), a.appendChild(this.hiddenInputCountry))
                }
              }
            }
            _appendListItems() {
              const a = document.createDocumentFragment();
              for (let e = 0; e < this.countries.length; e++) {
                const n = this.countries[e],
                  s = yt({
                    [P.COUNTRY_ITEM]: !0
                  }),
                  o = Z("li", {
                    id: `iti-${this.id}__item-${n.iso2}`,
                    class: s,
                    tabindex: "-1",
                    role: "option",
                    [H.SELECTED]: "false"
                  });
                o.dataset.dialCode = n.dialCode, o.dataset.countryCode = n.iso2, n.nodeById[this.id] = o, this.options.showFlags && Z("div", {
                  class: `${P.FLAG} iti__${n.iso2}`
                }, o);
                const c = Z("span", {
                  class: "iti__country-name"
                }, o);
                c.textContent = n.name;
                const u = Z("span", {
                  class: "iti__dial-code"
                }, o);
                this.isRTL && u.setAttribute("dir", "ltr"), u.textContent = `+${n.dialCode}`, a.appendChild(o)
              }
              this.countryList.appendChild(a)
            }
            updateInputPadding() {
              if (this.selectedCountry) {
                const a = this.options.separateDialCode ? It.SANE_SELECTED_WITH_DIAL_WIDTH : It.SANE_SELECTED_NO_DIAL_WIDTH,
                  n = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth() || a) + It.INPUT_PADDING_EXTRA_LEFT;
                this.telInput.style.paddingLeft = `${n}px`
              }
            }
            _getHiddenSelectedCountryWidth() {
              if (this.telInput.parentNode) {
                let a;
                try {
                  a = window.top.document.body
                } catch {
                  a = document.body
                }
                const e = this.telInput.parentNode.cloneNode(!1);
                e.style.visibility = "hidden", a.appendChild(e);
                const n = this.countryContainer.cloneNode();
                e.appendChild(n);
                const s = this.selectedCountry.cloneNode(!0);
                n.appendChild(s);
                const o = s.offsetWidth;
                return a.removeChild(e), o
              }
              return 0
            }
            updateSearchResultsA11yText() {
              const {
                i18n: a
              } = this.options, e = this.countryList.childElementCount;
              let n;
              e === 0 ? n = a.zeroSearchResults : a.searchResultsText ? n = a.searchResultsText(e) : e === 1 ? n = a.oneSearchResult : n = a.multipleSearchResults.replace("${count}", e.toString()), this.searchResultsA11yText.textContent = n
            }
            scrollTo(a) {
              const e = this.countryList,
                n = document.documentElement.scrollTop,
                s = e.offsetHeight,
                o = e.getBoundingClientRect().top + n,
                c = o + s,
                u = a.offsetHeight,
                f = a.getBoundingClientRect().top + n,
                d = f + u,
                C = f - o + e.scrollTop;
              if (f < o) e.scrollTop = C;
              else if (d > c) {
                const L = s - u;
                e.scrollTop = C - L
              }
            }
            highlightListItem(a, e) {
              const n = this.highlightedItem;
              if (n && n.classList.remove(P.HIGHLIGHT), this.highlightedItem = a, this.highlightedItem && (this.highlightedItem.classList.add(P.HIGHLIGHT), this.options.countrySearch)) {
                const s = this.highlightedItem.getAttribute("id") || "";
                this.searchInput.setAttribute(H.ACTIVE_DESCENDANT, s)
              }
              e && this.highlightedItem.focus()
            }
            updateSelectedItem(a) {
              if (this.selectedItem && this.selectedItem.dataset.countryCode !== a && (this.selectedItem.setAttribute(H.SELECTED, "false"), this.selectedItem = null), a && !this.selectedItem) {
                const e = this.countryList.querySelector(`[data-country-code="${a}"]`);
                e && (e.setAttribute(H.SELECTED, "true"), this.selectedItem = e)
              }
            }
            filterCountries(a) {
              this.countryList.innerHTML = "";
              let e = !0;
              for (const n of a) {
                const s = n.nodeById[this.id];
                s && (this.countryList.appendChild(s), e && (this.highlightListItem(s, !1), e = !1))
              }
              e ? (this.highlightListItem(null, !1), this.searchNoResults && this.searchNoResults.classList.remove(P.HIDE)) : this.searchNoResults && this.searchNoResults.classList.add(P.HIDE), this.countryList.scrollTop = 0, this.updateSearchResultsA11yText()
            }
            destroy() {
              this.telInput.iti = void 0, delete this.telInput.dataset.intlTelInputId, this.options.separateDialCode && (this.telInput.style.paddingLeft = this.originalPaddingLeft);
              const a = this.telInput.parentNode;
              a.before(this.telInput), a.remove(), this.telInput = null, this.countryContainer = null, this.selectedCountry = null, this.selectedCountryInner = null, this.selectedDialCode = null, this.dropdownArrow = null, this.dropdownContent = null, this.searchInput = null, this.searchIcon = null, this.searchClearButton = null, this.searchNoResults = null, this.searchResultsA11yText = null, this.countryList = null, this.dropdown = null, this.hiddenInput = null, this.hiddenInputCountry = null, this.highlightedItem = null, this.selectedItem = null;
              for (const e of this.countries) delete e.nodeById[this.id];
              this.countries = null
            }
          },
          oe = a => {
            const {
              onlyCountries: e,
              excludeCountries: n
            } = a;
            if (e.length) {
              const s = e.map(o => o.toLowerCase());
              return b.filter(o => s.includes(o.iso2))
            } else if (n.length) {
              const s = n.map(o => o.toLowerCase());
              return b.filter(o => !s.includes(o.iso2))
            }
            return b
          },
          Ht = (a, e) => {
            for (const n of a) {
              const s = n.iso2.toLowerCase();
              e.i18n[s] && (n.name = e.i18n[s])
            }
          },
          Vt = a => {
            const e = new Set;
            let n = 0;
            const s = {},
              o = (u, f) => {
                if (!u || !f) return;
                f.length > n && (n = f.length), s.hasOwnProperty(f) || (s[f] = []);
                const d = s[f];
                d.includes(u) || d.push(u)
              },
              c = [...a].sort((u, f) => u.priority - f.priority);
            for (const u of c) {
              e.has(u.dialCode) || e.add(u.dialCode);
              for (let f = 1; f < u.dialCode.length; f++) {
                const d = u.dialCode.substring(0, f);
                o(u.iso2, d)
              }
              if (o(u.iso2, u.dialCode), u.areaCodes) {
                const f = s[u.dialCode][0];
                for (const d of u.areaCodes) {
                  for (let C = 1; C < d.length; C++) {
                    const L = d.substring(0, C),
                      ut = u.dialCode + L;
                    o(f, ut), o(u.iso2, ut)
                  }
                  o(u.iso2, u.dialCode + d)
                }
              }
            }
            return {
              dialCodes: e,
              dialCodeMaxLen: n,
              dialCodeToIso2Map: s
            }
          },
          St = (a, e) => {
            e.countryOrder && (e.countryOrder = e.countryOrder.map(n => n.toLowerCase())), a.sort((n, s) => {
              const {
                countryOrder: o
              } = e;
              if (o) {
                const c = o.indexOf(n.iso2),
                  u = o.indexOf(s.iso2),
                  f = c > -1,
                  d = u > -1;
                if (f || d) return f && d ? c - u : f ? -1 : 1
              }
              return n.name.localeCompare(s.name)
            })
          },
          Y = a => {
            for (const e of a) e.normalisedName = se(e.name), e.initials = e.normalisedName.split(/[^a-z]/).map(n => n[0]).join(""), e.dialCodePlus = `+${e.dialCode}`
          },
          pe = (a, e, n, s) => {
            let o = a;
            if (n && e) {
              e = `+${s.dialCode}`;
              const c = o[e.length] === " " || o[e.length] === "-" ? e.length + 1 : e.length;
              o = o.substring(c)
            }
            return o
          },
          De = (a, e, n, s, o) => {
            const c = n ? n.formatNumberAsYouType(a, s.iso2) : a,
              {
                dialCode: u
              } = s;
            return o && e.charAt(0) !== "+" && c.includes(`+${u}`) ? (c.split(`+${u}`)[1] || "").trim() : c
          },
          Te = (a, e, n, s) => {
            if (n === 0 && !s) return 0;
            let o = 0;
            for (let c = 0; c < e.length; c++) {
              if (/[+0-9]/.test(e[c]) && o++, o === a && !s) return c + 1;
              if (s && o === a + 1) return c
            }
            return e.length
          },
          Se = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
          ve = a => {
            const e = Yt(a);
            if (e.startsWith(Et.NANP) && e.length >= 4) {
              const n = e.substring(1, 4);
              return Se.includes(n)
            }
            return !1
          };
        for (const a of b) a.name = R[a.iso2];
        var Ne = 0,
          N = new Set(b.map(a => a.iso2)),
          x = a => N.has(a),
          $ = class Gn {
            constructor(e, n = {}) {
              this.id = Ne++, this.options = {
                ...Tt,
                ...n
              }, Kt(this.options, R), this.ui = new ge(e, this.options, this.id), this.isAndroid = Gn._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = oe(this.options);
              const {
                dialCodes: s,
                dialCodeMaxLen: o,
                dialCodeToIso2Map: c
              } = Vt(this.countries);
              this.dialCodes = s, this.dialCodeMaxLen = o, this.dialCodeToIso2Map = c, this.countryByIso2 = new Map(this.countries.map(u => [u.iso2, u])), this._init()
            }
            static _getIsAndroid() {
              return typeof navigator < "u" ? /Android/i.test(navigator.userAgent) : !1
            }
            _updateNumeralSet(e) {
              /[\u0660-\u0669]/.test(e) ? this.userNumeralSet = "arabic-indic" : /[\u06F0-\u06F9]/.test(e) ? this.userNumeralSet = "persian" : this.userNumeralSet = "ascii"
            }
            _mapAsciiToUserNumerals(e) {
              if (this.userNumeralSet || this._updateNumeralSet(this.ui.telInput.value), this.userNumeralSet === "ascii") return e;
              const n = this.userNumeralSet === "arabic-indic" ? 1632 : 1776;
              return e.replace(/[0-9]/g, s => String.fromCharCode(n + Number(s)))
            }
            _normaliseNumerals(e) {
              if (!e) return "";
              if (this._updateNumeralSet(e), this.userNumeralSet === "ascii") return e;
              const n = this.userNumeralSet === "arabic-indic" ? 1632 : 1776,
                s = this.userNumeralSet === "arabic-indic" ? /[\u0660-\u0669]/g : /[\u06F0-\u06F9]/g;
              return e.replace(s, o => String.fromCharCode(48 + (o.charCodeAt(0) - n)))
            }
            _getTelInputValue() {
              const e = this.ui.telInput.value.trim();
              return this._normaliseNumerals(e)
            }
            _setTelInputValue(e) {
              this.ui.telInput.value = this._mapAsciiToUserNumerals(e)
            }
            _createInitPromises() {
              const e = new Promise((s, o) => {
                  this.resolveAutoCountryPromise = s, this.rejectAutoCountryPromise = o
                }),
                n = new Promise((s, o) => {
                  this.resolveUtilsScriptPromise = s, this.rejectUtilsScriptPromise = o
                });
              return Promise.all([e, n])
            }
            _init() {
              this.selectedCountryData = {}, this.abortController = new AbortController, this._processCountryData(), this.ui.generateMarkup(this.countries), this._setInitialState(), this._initListeners(), this._initRequests()
            }
            _processCountryData() {
              Ht(this.countries, this.options), St(this.countries, this.options), Y(this.countries)
            }
            _setInitialState(e = !1) {
              const n = this.ui.telInput.getAttribute("value"),
                s = this._normaliseNumerals(n),
                o = this._getTelInputValue(),
                u = s && s.startsWith("+") && (!o || !o.startsWith("+")) ? s : o,
                f = this._getDialCode(u),
                d = ve(u),
                {
                  initialCountry: C,
                  geoIpLookup: L
                } = this.options,
                ut = C === Bt.AUTO && L;
              if (f && !d) this._updateCountryFromNumber(u);
              else if (!ut || e) {
                const nt = C ? C.toLowerCase() : "";
                x(nt) ? this._setCountry(nt) : f && d ? this._setCountry(Mt.ISO2) : this._setCountry("")
              }
              u && this._updateValFromNumber(u)
            }
            _initListeners() {
              this._initTelInputListeners(), this.options.allowDropdown && this._initDropdownListeners(), (this.ui.hiddenInput || this.ui.hiddenInputCountry) && this.ui.telInput.form && this._initHiddenInputListener()
            }
            _initHiddenInputListener() {
              var n;
              const e = () => {
                this.ui.hiddenInput && (this.ui.hiddenInput.value = this.getNumber()), this.ui.hiddenInputCountry && (this.ui.hiddenInputCountry.value = this.selectedCountryData.iso2 || "")
              };
              (n = this.ui.telInput.form) == null || n.addEventListener("submit", e, {
                signal: this.abortController.signal
              })
            }
            _initDropdownListeners() {
              const e = this.abortController.signal,
                n = u => {
                  this.ui.dropdownContent.classList.contains(P.HIDE) ? this.ui.telInput.focus() : u.preventDefault()
                },
                s = this.ui.telInput.closest("label");
              s && s.addEventListener("click", n, {
                signal: e
              });
              const o = () => {
                this.ui.dropdownContent.classList.contains(P.HIDE) && !this.ui.telInput.disabled && !this.ui.telInput.readOnly && this._openDropdown()
              };
              this.ui.selectedCountry.addEventListener("click", o, {
                signal: e
              });
              const c = u => {
                this.ui.dropdownContent.classList.contains(P.HIDE) && [st.ARROW_UP, st.ARROW_DOWN, st.SPACE, st.ENTER].includes(u.key) && (u.preventDefault(), u.stopPropagation(), this._openDropdown()), u.key === st.TAB && this._closeDropdown()
              };
              this.ui.countryContainer.addEventListener("keydown", c, {
                signal: e
              })
            }
            _initRequests() {
              const {
                loadUtils: e,
                initialCountry: n,
                geoIpLookup: s
              } = this.options;
              if (e && !g.utils) {
                const c = () => {
                  var u;
                  (u = g.attachUtils(e)) == null || u.catch(() => {})
                };
                if (g.documentReady()) c();
                else {
                  const u = () => {
                    c()
                  };
                  window.addEventListener("load", u, {
                    signal: this.abortController.signal
                  })
                }
              } else this.resolveUtilsScriptPromise();
              n === Bt.AUTO && s && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
            }
            _loadAutoCountry() {
              g.autoCountry ? this.handleAutoCountry() : g.startedLoadingAutoCountry || (g.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup((e = "") => {
                const n = e.toLowerCase();
                x(n) ? (g.autoCountry = n, setTimeout(() => q("handleAutoCountry"))) : (this._setInitialState(!0), q("rejectAutoCountryPromise"))
              }, () => {
                this._setInitialState(!0), q("rejectAutoCountryPromise")
              }))
            }
            _openDropdownWithPlus() {
              this._openDropdown(), this.ui.searchInput.value = "+", this._filterCountriesByQuery("")
            }
            _initTelInputListeners() {
              this._bindInputListener(), this._maybeBindKeydownListener(), this._maybeBindPasteListener()
            }
            _bindInputListener() {
              const {
                strictMode: e,
                formatAsYouType: n,
                separateDialCode: s,
                allowDropdown: o,
                countrySearch: c
              } = this.options;
              let u = !1;
              ht.ALPHA_UNICODE.test(this._getTelInputValue()) && (u = !0);
              const f = d => {
                const C = this._getTelInputValue();
                if (this.isAndroid && (d == null ? void 0 : d.data) === "+" && s && o && c) {
                  const M = this.ui.telInput.selectionStart || 0,
                    ft = C.substring(0, M - 1),
                    Q = C.substring(M);
                  this._setTelInputValue(ft + Q), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(C) && this._triggerCountryChange();
                const L = (d == null ? void 0 : d.data) && ht.NON_PLUS_NUMERIC.test(d.data),
                  ut = (d == null ? void 0 : d.inputType) === j.PASTE && C;
                L || ut && !e ? u = !0 : ht.NON_PLUS_NUMERIC.test(C) || (u = !1);
                const nt = (d == null ? void 0 : d.detail) && d.detail.isSetNumber,
                  k = this.userNumeralSet === "ascii";
                if (n && !u && !nt && k) {
                  const M = this.ui.telInput.selectionStart || 0,
                    Q = C.substring(0, M).replace(ht.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    ot = (d == null ? void 0 : d.inputType) === j.DELETE_FWD,
                    tt = this._getFullNumber(),
                    Ft = De(tt, C, g.utils, this.selectedCountryData, this.options.separateDialCode),
                    Ut = Te(Q, Ft, M, ot);
                  this._setTelInputValue(Ft), this.ui.telInput.setSelectionRange(Ut, Ut)
                }
              };
              this.ui.telInput.addEventListener("input", f, {
                signal: this.abortController.signal
              })
            }
            _maybeBindKeydownListener() {
              const {
                strictMode: e,
                separateDialCode: n,
                allowDropdown: s,
                countrySearch: o
              } = this.options;
              if (e || n) {
                const c = u => {
                  if (u.key && u.key.length === 1 && !u.altKey && !u.ctrlKey && !u.metaKey) {
                    if (n && s && o && u.key === "+") {
                      u.preventDefault(), this._openDropdownWithPlus();
                      return
                    }
                    if (e) {
                      const f = this._getTelInputValue(),
                        C = !f.startsWith("+") && this.ui.telInput.selectionStart === 0 && u.key === "+",
                        L = this._normaliseNumerals(u.key),
                        ut = /^[0-9]$/.test(L),
                        nt = n ? ut : C || ut,
                        k = this.ui.telInput,
                        M = k.selectionStart,
                        ft = k.selectionEnd,
                        Q = f.slice(0, M),
                        ot = f.slice(ft),
                        tt = Q + u.key + ot,
                        Ft = this._getFullNumber(tt),
                        Ut = g.utils.getCoreNumber(Ft, this.selectedCountryData.iso2),
                        wt = this.maxCoreNumberLength && Ut.length > this.maxCoreNumberLength,
                        te = this._getNewCountryFromNumber(Ft) !== null;
                      (!nt || wt && !te && !C) && u.preventDefault()
                    }
                  }
                };
                this.ui.telInput.addEventListener("keydown", c, {
                  signal: this.abortController.signal
                })
              }
            }
            _maybeBindPasteListener() {
              if (this.options.strictMode) {
                const e = n => {
                  n.preventDefault();
                  const s = this.ui.telInput,
                    o = s.selectionStart,
                    c = s.selectionEnd,
                    u = this._getTelInputValue(),
                    f = u.slice(0, o),
                    d = u.slice(c),
                    C = this.selectedCountryData.iso2,
                    L = n.clipboardData.getData("text"),
                    ut = this._normaliseNumerals(L),
                    nt = o === 0 && c > 0,
                    k = !u.startsWith("+") || nt,
                    M = ut.replace(ht.NON_PLUS_NUMERIC_GLOBAL, ""),
                    ft = M.startsWith("+"),
                    Q = M.replace(/\+/g, ""),
                    ot = ft && k ? `+${Q}` : Q;
                  let tt = f + ot + d;
                  if (tt.length > 5) {
                    let Ut = g.utils.getCoreNumber(tt, C);
                    for (; Ut.length === 0 && tt.length > 0;) tt = tt.slice(0, -1), Ut = g.utils.getCoreNumber(tt, C);
                    if (!Ut) return;
                    if (this.maxCoreNumberLength && Ut.length > this.maxCoreNumberLength)
                      if (s.selectionEnd === u.length) {
                        const wt = Ut.length - this.maxCoreNumberLength;
                        tt = tt.slice(0, tt.length - wt)
                      } else return
                  }
                  this._setTelInputValue(tt);
                  const Ft = o + ot.length;
                  s.setSelectionRange(Ft, Ft), s.dispatchEvent(new InputEvent("input", {
                    bubbles: !0
                  }))
                };
                this.ui.telInput.addEventListener("paste", e, {
                  signal: this.abortController.signal
                })
              }
            }
            _cap(e) {
              const n = Number(this.ui.telInput.getAttribute("maxlength"));
              return n && e.length > n ? e.substring(0, n) : e
            }
            _trigger(e, n = {}) {
              const s = new CustomEvent(e, {
                bubbles: !0,
                cancelable: !0,
                detail: n
              });
              this.ui.telInput.dispatchEvent(s)
            }
            _openDropdown() {
              const {
                fixDropdownWidth: e,
                countrySearch: n
              } = this.options;
              if (this.dropdownAbortController = new AbortController, e && (this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`), this.ui.dropdownContent.classList.remove(P.HIDE), this.ui.selectedCountry.setAttribute(H.EXPANDED, "true"), this._setDropdownPosition(), n) {
                const s = this.ui.countryList.firstElementChild;
                s && (this.ui.highlightListItem(s, !1), this.ui.countryList.scrollTop = 0), this.ui.searchInput.focus()
              }
              this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(P.ARROW_UP), this._trigger(G.OPEN_COUNTRY_DROPDOWN)
            }
            _setDropdownPosition() {
              if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.ui.dropdown), !this.options.useFullscreenPopup) {
                const e = this.ui.telInput.getBoundingClientRect(),
                  n = this.ui.telInput.offsetHeight;
                if (this.options.dropdownContainer) {
                  this.ui.dropdown.style.top = `${e.top+n}px`, this.ui.dropdown.style.left = `${e.left}px`;
                  const s = () => this._closeDropdown();
                  window.addEventListener("scroll", s, {
                    signal: this.dropdownAbortController.signal
                  })
                }
              }
            }
            _bindDropdownListeners() {
              const e = this.dropdownAbortController.signal;
              this._bindDropdownMouseoverListener(e), this._bindDropdownCountryClickListener(e), this._bindDropdownClickOffListener(e), this._bindDropdownKeydownListener(e), this.options.countrySearch && this._bindDropdownSearchListeners(e)
            }
            _bindDropdownMouseoverListener(e) {
              const n = s => {
                var c;
                const o = (c = s.target) == null ? void 0 : c.closest(`.${P.COUNTRY_ITEM}`);
                o && this.ui.highlightListItem(o, !1)
              };
              this.ui.countryList.addEventListener("mouseover", n, {
                signal: e
              })
            }
            _bindDropdownCountryClickListener(e) {
              const n = s => {
                var c;
                const o = (c = s.target) == null ? void 0 : c.closest(`.${P.COUNTRY_ITEM}`);
                o && this._selectListItem(o)
              };
              this.ui.countryList.addEventListener("click", n, {
                signal: e
              })
            }
            _bindDropdownClickOffListener(e) {
              const n = s => {
                !!s.target.closest(`#iti-${this.id}__dropdown-content`) || this._closeDropdown()
              };
              setTimeout(() => {
                document.documentElement.addEventListener("click", n, {
                  signal: e
                })
              }, 0)
            }
            _bindDropdownKeydownListener(e) {
              let n = "",
                s = null;
              const o = c => {
                [st.ARROW_UP, st.ARROW_DOWN, st.ENTER, st.ESC].includes(c.key) && (c.preventDefault(), c.stopPropagation(), c.key === st.ARROW_UP || c.key === st.ARROW_DOWN ? this._handleUpDownKey(c.key) : c.key === st.ENTER ? this._handleEnterKey() : c.key === st.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && ht.HIDDEN_SEARCH_CHAR.test(c.key) && (c.stopPropagation(), s && clearTimeout(s), n += c.key.toLowerCase(), this._searchForCountry(n), s = setTimeout(() => {
                  n = ""
                }, Nt.HIDDEN_SEARCH_RESET_MS))
              };
              document.addEventListener("keydown", o, {
                signal: e
              })
            }
            _bindDropdownSearchListeners(e) {
              const n = () => {
                const u = this.ui.searchInput.value.trim();
                this._filterCountriesByQuery(u), this.ui.searchInput.value ? this.ui.searchClearButton.classList.remove(P.HIDE) : this.ui.searchClearButton.classList.add(P.HIDE)
              };
              let s = null;
              const o = () => {
                s && clearTimeout(s), s = setTimeout(() => {
                  n(), s = null
                }, 100)
              };
              this.ui.searchInput.addEventListener("input", o, {
                signal: e
              });
              const c = () => {
                this.ui.searchInput.value = "", this.ui.searchInput.focus(), n()
              };
              this.ui.searchClearButton.addEventListener("click", c, {
                signal: e
              })
            }
            _searchForCountry(e) {
              const n = U(this.countries, e);
              if (n) {
                const s = n.nodeById[this.id];
                this.ui.highlightListItem(s, !1), this.ui.scrollTo(s)
              }
            }
            _filterCountriesByQuery(e) {
              let n;
              e === "" ? n = this.countries : n = T(this.countries, e), this.ui.filterCountries(n)
            }
            _handleUpDownKey(e) {
              var s, o;
              let n = e === st.ARROW_UP ? (s = this.ui.highlightedItem) == null ? void 0 : s.previousElementSibling : (o = this.ui.highlightedItem) == null ? void 0 : o.nextElementSibling;
              !n && this.ui.countryList.childElementCount > 1 && (n = e === st.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), n && (this.ui.scrollTo(n), this.ui.highlightListItem(n, !1))
            }
            _handleEnterKey() {
              this.ui.highlightedItem && this._selectListItem(this.ui.highlightedItem)
            }
            _updateValFromNumber(e) {
              let n = e;
              if (this.options.formatOnDisplay && g.utils && this.selectedCountryData) {
                const s = this.options.nationalMode || !n.startsWith("+") && !this.options.separateDialCode,
                  {
                    NATIONAL: o,
                    INTERNATIONAL: c
                  } = g.utils.numberFormat,
                  u = s ? o : c;
                n = g.utils.formatNumber(n, this.selectedCountryData.iso2, u)
              }
              n = this._beforeSetNumber(n), this._setTelInputValue(n)
            }
            _updateCountryFromNumber(e) {
              const n = this._getNewCountryFromNumber(e);
              return n !== null ? this._setCountry(n) : !1
            }
            _ensureHasDialCode(e) {
              const {
                dialCode: n,
                nationalPrefix: s
              } = this.selectedCountryData;
              if (e.startsWith("+") || !n) return e;
              const u = s && e.startsWith(s) && !this.options.separateDialCode ? e.substring(1) : e;
              return `+${n}${u}`
            }
            _getNewCountryFromNumber(e) {
              const n = e.indexOf("+");
              let s = n ? e.substring(n) : e;
              const o = this.selectedCountryData.iso2,
                c = this.selectedCountryData.dialCode;
              s = this._ensureHasDialCode(s);
              const u = this._getDialCode(s, !0),
                f = Yt(s);
              if (u) {
                const d = Yt(u),
                  C = this.dialCodeToIso2Map[d];
                if (C.length === 1) return C[0] === o ? null : C[0];
                if (!o && this.defaultCountry && C.includes(this.defaultCountry)) return this.defaultCountry;
                if (c === Et.NANP && ve(f)) return null;
                const {
                  areaCodes: ut,
                  priority: nt
                } = this.selectedCountryData;
                if (ut) {
                  const ot = ut.map(tt => `${c}${tt}`);
                  for (const tt of ot)
                    if (f.startsWith(tt)) return null
                }
                const M = ut && !(nt === 0) && f.length > d.length,
                  ft = o && C.includes(o) && !M,
                  Q = o === C[0];
                if (!ft && !Q) return C[0]
              } else if (s.startsWith("+") && f.length) {
                const d = this.selectedCountryData.dialCode || "";
                return d && d.startsWith(f) ? null : ""
              } else if ((!s || s === "+") && !o) return this.defaultCountry;
              return null
            }
            _setCountry(e) {
              const {
                separateDialCode: n,
                showFlags: s,
                i18n: o,
                allowDropdown: c
              } = this.options, u = this.selectedCountryData.iso2 || "";
              if (c && this.ui.updateSelectedItem(e), this.selectedCountryData = e ? this.countryByIso2.get(e) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.ui.selectedCountry) {
                const f = e && s ? `${P.FLAG} iti__${e}` : `${P.FLAG} ${P.GLOBE}`;
                let d, C;
                if (e) {
                  const {
                    name: L,
                    dialCode: ut
                  } = this.selectedCountryData;
                  C = L, d = o.selectedCountryAriaLabel.replace("${countryName}", L).replace("${dialCode}", `+${ut}`)
                } else C = o.noCountrySelected, d = o.noCountrySelected;
                this.ui.selectedCountryInner.className = f, this.ui.selectedCountry.setAttribute("title", C), this.ui.selectedCountry.setAttribute(H.LABEL, d)
              }
              if (n) {
                const f = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
                this.ui.selectedDialCode.textContent = f, this.ui.updateInputPadding()
              }
              return this._updatePlaceholder(), this._updateMaxLength(), u !== e
            }
            _updateMaxLength() {
              const {
                strictMode: e,
                placeholderNumberType: n,
                validationNumberTypes: s
              } = this.options, {
                iso2: o
              } = this.selectedCountryData;
              if (e && g.utils)
                if (o) {
                  const c = g.utils.numberType[n];
                  let u = g.utils.getExampleNumber(o, !1, c, !0),
                    f = u;
                  for (; g.utils.isPossibleNumber(u, o, s);) f = u, u += "0";
                  const d = g.utils.getCoreNumber(f, o);
                  this.maxCoreNumberLength = d.length, o === "by" && (this.maxCoreNumberLength = d.length + 1)
                } else this.maxCoreNumberLength = null
            }
            _updatePlaceholder() {
              const {
                autoPlaceholder: e,
                placeholderNumberType: n,
                nationalMode: s,
                customPlaceholder: o
              } = this.options, c = e === jt.AGGRESSIVE || !this.ui.hadInitialPlaceholder && e === jt.POLITE;
              if (g.utils && c) {
                const u = g.utils.numberType[n];
                let f = this.selectedCountryData.iso2 ? g.utils.getExampleNumber(this.selectedCountryData.iso2, s, u) : "";
                f = this._beforeSetNumber(f), typeof o == "function" && (f = o(f, this.selectedCountryData)), this.ui.telInput.setAttribute("placeholder", f)
              }
            }
            _selectListItem(e) {
              const n = e.dataset[ne.COUNTRY_CODE],
                s = this._setCountry(n);
              this._closeDropdown();
              const o = e.dataset[ne.DIAL_CODE];
              if (this._updateDialCode(o), this.options.formatOnDisplay) {
                const c = this._getTelInputValue();
                this._updateValFromNumber(c)
              }
              this.ui.telInput.focus(), s && this._triggerCountryChange()
            }
            _closeDropdown() {
              this.ui.dropdownContent.classList.contains(P.HIDE) || (this.ui.dropdownContent.classList.add(P.HIDE), this.ui.selectedCountry.setAttribute(H.EXPANDED, "false"), this.options.countrySearch && (this.ui.searchInput.removeAttribute(H.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(P.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(P.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(G.CLOSE_COUNTRY_DROPDOWN))
            }
            _updateDialCode(e) {
              const n = this._getTelInputValue(),
                s = `+${e}`;
              let o;
              if (n.startsWith("+")) {
                const c = this._getDialCode(n);
                c ? o = n.replace(c, s) : o = s, this._setTelInputValue(o)
              }
            }
            _getDialCode(e, n) {
              let s = "";
              if (e.startsWith("+")) {
                let o = "",
                  c = !1;
                for (let u = 0; u < e.length; u++) {
                  const f = e.charAt(u);
                  if (/[0-9]/.test(f)) {
                    if (o += f, !!!this.dialCodeToIso2Map[o]) break;
                    if (this.dialCodes.has(o)) {
                      if (s = e.substring(0, u + 1), c = !0, !n) break
                    } else n && c && (s = e.substring(0, u + 1));
                    if (o.length === this.dialCodeMaxLen) break
                  }
                }
              }
              return s
            }
            _getFullNumber(e) {
              const n = e ? this._normaliseNumerals(e) : this._getTelInputValue(),
                {
                  dialCode: s
                } = this.selectedCountryData;
              let o;
              const c = Yt(n);
              return this.options.separateDialCode && !n.startsWith("+") && s && c ? o = `+${s}` : o = "", o + n
            }
            _beforeSetNumber(e) {
              const n = this._getDialCode(e),
                s = pe(e, n, this.options.separateDialCode, this.selectedCountryData);
              return this._cap(s)
            }
            _triggerCountryChange() {
              this._trigger(G.COUNTRY_CHANGE)
            }
            handleAutoCountry() {
              this.options.initialCountry === Bt.AUTO && g.autoCountry && (this.defaultCountry = g.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(P.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
            }
            handleUtils() {
              if (g.utils) {
                const e = this._getTelInputValue();
                e && this._updateValFromNumber(e), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())
              }
              this.resolveUtilsScriptPromise()
            }
            destroy() {
              this.ui.telInput && (this.options.allowDropdown && this._closeDropdown(), this.abortController.abort(), this.abortController = null, this.ui.destroy(), g.instances instanceof Map ? g.instances.delete(this.id) : delete g.instances[this.id])
            }
            getExtension() {
              return g.utils ? g.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
            }
            getNumber(e) {
              if (g.utils) {
                const {
                  iso2: n
                } = this.selectedCountryData, s = this._getFullNumber(), o = g.utils.formatNumber(s, n, e);
                return this._mapAsciiToUserNumerals(o)
              }
              return ""
            }
            getNumberType() {
              return g.utils ? g.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : _t.UNKNOWN_NUMBER_TYPE
            }
            getSelectedCountryData() {
              return this.selectedCountryData
            }
            getValidationError() {
              if (g.utils) {
                const {
                  iso2: e
                } = this.selectedCountryData;
                return g.utils.getValidationError(this._getFullNumber(), e)
              }
              return _t.UNKNOWN_VALIDATION_ERROR
            }
            isValidNumber() {
              const {
                dialCode: e,
                iso2: n
              } = this.selectedCountryData;
              if (e === Wt.DIAL_CODE && g.utils) {
                const s = this._getFullNumber(),
                  o = g.utils.getCoreNumber(s, n);
                if (o[0] === Wt.MOBILE_PREFIX && o.length !== Wt.MOBILE_CORE_LENGTH) return !1
              }
              return this._validateNumber(!1)
            }
            isValidNumberPrecise() {
              return this._validateNumber(!0)
            }
            _utilsIsPossibleNumber(e) {
              return g.utils ? g.utils.isPossibleNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            _validateNumber(e) {
              if (!g.utils) return null;
              if (!this.selectedCountryData.iso2) return !1;
              const n = u => e ? this._utilsIsValidNumber(u) : this._utilsIsPossibleNumber(u),
                s = this._getFullNumber(),
                o = s.search(ht.ALPHA_UNICODE);
              if (o > -1 && !this.options.allowPhonewords) {
                const u = s.substring(0, o),
                  f = n(u),
                  d = n(s);
                return f && d
              }
              return n(s)
            }
            _utilsIsValidNumber(e) {
              return g.utils ? g.utils.isValidNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            setCountry(e) {
              const n = e == null ? void 0 : e.toLowerCase();
              if (!x(n)) throw new Error(`Invalid country code: '${n}'`);
              const s = this.selectedCountryData.iso2;
              if (e && n !== s || !e && s) {
                if (this._setCountry(n), this._updateDialCode(this.selectedCountryData.dialCode), this.options.formatOnDisplay) {
                  const c = this._getTelInputValue();
                  this._updateValFromNumber(c)
                }
                this._triggerCountryChange()
              }
            }
            setNumber(e) {
              const n = this._normaliseNumerals(e),
                s = this._updateCountryFromNumber(n);
              this._updateValFromNumber(n), s && this._triggerCountryChange(), this._trigger(G.INPUT, {
                isSetNumber: !0
              })
            }
            setPlaceholderNumberType(e) {
              this.options.placeholderNumberType = e, this._updatePlaceholder()
            }
            setDisabled(e) {
              this.ui.telInput.disabled = e, e ? this.ui.selectedCountry.setAttribute("disabled", "true") : this.ui.selectedCountry.removeAttribute("disabled")
            }
          },
          et = a => {
            if (!g.utils && !g.startedLoadingUtilsScript) {
              let e;
              if (typeof a == "function") try {
                e = Promise.resolve(a())
              } catch (n) {
                return Promise.reject(n)
              } else return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof a}`));
              return g.startedLoadingUtilsScript = !0, e.then(n => {
                const s = n == null ? void 0 : n.default;
                if (!s || typeof s != "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                return g.utils = s, q("handleUtils"), !0
              }).catch(n => {
                throw q("rejectUtilsScriptPromise", n), n
              })
            }
            return null
          },
          q = (a, ...e) => {
            Object.values(g.instances).forEach(n => {
              const s = n[a];
              typeof s == "function" && s.apply(n, e)
            })
          },
          g = Object.assign((a, e) => {
            const n = new $(a, e);
            return g.instances[n.id] = n, a.iti = n, n
          }, {
            defaults: Tt,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => b,
            getInstance: a => {
              const e = a.dataset.intlTelInputId;
              return e ? g.instances[e] : null
            },
            instances: {},
            attachUtils: et,
            startedLoadingUtilsScript: !1,
            startedLoadingAutoCountry: !1,
            version: "25.15.1"
          }),
          Dt = g;
        return V(D)
      })();
      return t.default
    })
  })(un)), un.exports
}
var $s = Zs();
const to = hi($s);
var eo = mt('<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>'),
  no = mt('<span class="w-8"> </span>'),
  io = mt('<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary w-full"> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>', 1),
  so = mt('<span class="w-8"> </span>'),
  oo = mt('<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-3 flex flex-col items-center gap-1"><button class="btn btn-ghost w-max"> <!></button> <button class="text-primary cursor-pointer text-xs"> </button></div>', 1),
  ao = mt('<div class="flex h-full w-full flex-col items-center"><!></div>');

function ro(l, t) {
  Zt(t, !0);
  let r = it(!0),
    h = it(""),
    m = it(0),
    I = it(!1);
  const E = w(() => i(m) > 0 || i(I));
  let O = it(!1),
    V = it(""),
    D = it(void 0);
  const y = w(() => {
    var A;
    return `phone:${(A=Rn.data)==null?void 0:A.id}`
  });
  Rt(() => {
    const A = localStorage.getItem(i(y));
    A && v(h, A, !0)
  }), me(() => {
    sn.getOtpCooldown().then(G => {
      v(m, G.cooldownMs, !0)
    }).catch(G => {
      ye.error(G.message)
    }).finally(() => {
      v(r, !1)
    });
    const A = 1e3,
      R = setInterval(() => {
        v(m, Math.max(0, i(m) - A), !0)
      }, A);
    return () => {
      clearInterval(R)
    }
  });
  async function S(A) {
    try {
      v(I, !0);
      const R = await sn.sendOtp(A);
      ye.info(`${xi()} ${R.phone}`), v(h, R.phone, !0), v(m, R.cooldownMs, !0), localStorage.setItem(i(y), i(h))
    } catch (R) {
      ye.error(R.message)
    } finally {
      v(I, !1)
    }
  }
  Rt(() => {
    i(V).length === 6 && (v(O, !0), (async () => {
      try {
        await sn.verifyChallenge({
          type: "otp",
          code: i(V)
        }), ye.success(_i()), localStorage.removeItem(i(y)), t.onsuccess(i(h))
      } catch (A) {
        ye.error(A.message)
      } finally {
        v(V, ""), v(O, !1)
      }
    })())
  });
  var b = ao(),
    F = J(b);
  {
    var B = A => {
        var R = eo();
        _(A, R)
      },
      at = A => {
        var R = io(),
          G = W(R),
          P = J(G),
          st = J(P),
          j = J(st, !0);
        K(st);
        var ht = bt(st, 2),
          Nt = J(ht, !0);
        K(ht), K(P);
        var _t = bt(P, 2),
          It = J(_t);
        kn(It, () => H => (v(D, to(H, {
          strictMode: !0,
          initialCountry: "br",
          loadUtils: () => Mn(() => import("../chunks/R4w-VVKk.js"), [], import.meta.url),
          containerClass: "w-full",
          dropdownContainer: document.body
        })), () => {
          var rt;
          (rt = i(D)) == null || rt.destroy()
        }));
        var Et = bt(It, 2),
          Wt = J(Et),
          Mt = bt(Wt);
        {
          var jt = H => {
            var rt = no(),
              ct = J(rt);
            K(rt), pt(Tt => Pt(ct, `(${Tt??""})`), [() => Sn(i(m))]), _(H, rt)
          };
          lt(Mt, H => {
            i(m) > 0 && H(jt)
          })
        }
        K(Et), K(_t), K(G);
        var Bt = bt(G, 2),
          ne = J(Bt, !0);
        K(Bt), pt((H, rt, ct, Tt) => {
          Pt(j, H), Pt(Nt, rt), Et.disabled = i(E), Pt(Wt, `${ct??""} `), Pt(ne, Tt)
        }, [() => bi(), () => wi(), () => Ii(), () => Ei()]), $e("submit", _t, async () => {
          var rt;
          if (i(E)) return;
          if (!((rt = i(D)) != null && rt.isValidNumber())) {
            ye.error(Di());
            return
          }
          const H = i(D).getNumber();
          await S(H)
        }), _(A, R)
      },
      vt = A => {
        var R = oo(),
          G = W(R),
          P = J(G),
          st = J(P, !0);
        K(P);
        var j = bt(P, 2),
          ht = J(j);
        K(j), K(G);
        var Nt = bt(G, 2),
          _t = J(Nt);
        {
          const H = (rt, ct) => {
            let Tt = () => ct == null ? void 0 : ct().cells;
            var Kt = X(),
              Yt = W(Kt);
            Jt(Yt, () => Ts, (se, T) => {
              T(se, {
                class: "border-primary",
                children: (U, yt) => {
                  var Z = X(),
                    kt = W(Z);
                  Ye(kt, 16, Tt, qt => qt, (qt, ge) => {
                    var oe = X(),
                      Ht = W(oe);
                    Jt(Ht, () => Qs, (Vt, St) => {
                      St(Vt, {
                        get cell() {
                          return ge
                        },
                        class: "border-base-content/20 size-11 sm:size-12"
                      })
                    }), _(qt, oe)
                  }), _(U, Z)
                },
                $$slots: {
                  default: !0
                }
              })
            }), _(rt, Kt)
          };
          Jt(_t, () => Js, (rt, ct) => {
            ct(rt, {
              maxlength: 6,
              class: "mx-auto w-max",
              get disabled() {
                return i(O)
              },
              get value() {
                return i(V)
              },
              set value(Tt) {
                v(V, Tt, !0)
              },
              children: H,
              $$slots: {
                default: !0
              }
            })
          })
        }
        K(Nt);
        var It = bt(Nt, 2),
          Et = J(It),
          Wt = J(Et),
          Mt = bt(Wt);
        {
          var jt = H => {
            var rt = so(),
              ct = J(rt);
            K(rt), pt(Tt => Pt(ct, `(${Tt??""})`), [() => Sn(i(m))]), _(H, rt)
          };
          lt(Mt, H => {
            i(m) > 0 && H(jt)
          })
        }
        K(Et);
        var Bt = bt(Et, 2),
          ne = J(Bt, !0);
        K(Bt), K(It), pt((H, rt, ct, Tt) => {
          Pt(st, H), Pt(ht, `${rt??""} ${i(h)??""}`), Et.disabled = i(E), Pt(Wt, `${ct??""} `), Pt(ne, Tt)
        }, [() => Ti(), () => Si(), () => Ni(), () => Li()]), he("click", Et, async () => {
          await S(i(h))
        }), he("click", Bt, () => {
          v(h, "")
        }), _(A, R)
      };
    lt(F, A => {
      i(r) ? A(B) : i(h) ? A(vt, !1) : A(at, 1)
    })
  }
  K(b), _(l, b), $t()
}
An(["click"]);
var lo = mt('<dialog class="modal"><div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function uo(l, t) {
  Zt(t, !0);
  const r = w(() => on.current !== null),
    h = w(() => {
      var y;
      return (y = on.current) == null ? void 0 : y.tier
    });
  var m = lo(),
    I = J(m);
  let E;
  var O = J(I),
    V = J(O);
  {
    var D = y => {
      var S = X(),
        b = W(S);
      pi(b, () => on.errorCount, F => {
        var B = X(),
          at = W(B);
        {
          var vt = G => {
              {
                let P = w(() => ii.trim());
                Ai(G, {
                  get siteKey() {
                    return i(P)
                  },
                  callback: st => En(st),
                  errorCallback: () => In()
                })
              }
            },
            A = G => {
              {
                let P = w(() => si.trim());
                Es(G, {
                  get siteKey() {
                    return i(P)
                  },
                  callback: st => En(st),
                  errorCallback: () => In()
                })
              }
            },
            R = G => {
              ro(G, {
                onsuccess: () => ni()
              })
            };
          lt(at, G => {
            i(h) === 2 ? G(vt) : i(h) === 3 ? G(A, 1) : i(h) === 4 && G(R, 2)
          })
        }
        _(F, B)
      }), _(y, S)
    };
    lt(V, y => {
      i(r) && y(D)
    })
  }
  K(O), K(I), On(2), K(m), kn(m, () => y => {
    Rt(() => {
      i(r) ? y.show() : y.close()
    })
  }), pt(() => E = ee(I, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, E, {
    "h-76": i(h) === 4
  })), $e("close", m, () => ei()), _(l, m), $t()
}
var co = mt('<span class="hidden"> </span> <!> <!> <!>', 1);

function ko(l, t) {
  Zt(t, !0), me(() => {
    oi(), ai(), Rn.refresh(), Object.assign(window, {
      eval: ri(eval, function() {}, async () => {
        await fetch(li + "/me", {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + crypto.randomUUID()
          }
        })
      })
    });
    let y = setInterval(() => {
      mi()
    }, 5e3);
    return () => {
      clearTimeout(y)
    }
  });
  const r = "muted";
  me(() => {
    cn.muted = localStorage.getItem(r) === "1"
  }), Rt(() => {
    {
      const y = cn.muted;
      document.querySelectorAll("audio").forEach(S => {
        S.muted = y
      });
      for (const S of Object.values(fi).filter(b => b instanceof Audio)) S.muted = y, y || (S.volume = .3);
      localStorage.setItem(r, Number(y).toString())
    }
  }), me(() => {});
  var h = co();
  $e("beforeunload", Jn, () => {
    gi()
  });
  var m = W(h),
    I = J(m);
  K(m);
  var E = bt(m, 2);
  {
    var O = y => {
      var S = X(),
        b = W(S);
      Ot(b, () => t.children), _(y, S)
    };
    lt(E, y => {
      y(O, !1)
    })
  }
  var V = bt(E, 2);
  uo(V, {});
  var D = bt(V, 2);
  bs(D, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), pt(() => Pt(I, `Version: ${$n}`)), _(l, h), $t()
}
export {
  ko as component, Ro as universal
};