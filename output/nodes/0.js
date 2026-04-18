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
var g = (l, t, r) => (nn(l, t, "read from private field"), r ? r.call(l) : t.get(l)),
  ht = (l, t, r) => t.has(l) ? Cn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(l) : t.set(l, r),
  de = (l, t, r, h) => (nn(l, t, "write to private field"), h ? h.call(l, r) : t.set(l, r), r),
  _n = (l, t, r) => (nn(l, t, "access private method"), r);
import "../chunks/D5Mk_1eX.js";
import {
  o as me,
  a as Xn
} from "../chunks/DiNWWPR3.js";
import {
  p as Zt,
  d as Z,
  a as _,
  r as Y,
  t as vt,
  b as $t,
  c as gt,
  bI as Pe,
  R as Qn,
  Q as bn,
  S as Jn,
  e as ot,
  g as gn,
  q as Rt,
  h as v,
  i,
  x as xe,
  s as bt,
  m as he,
  v as $e,
  u as w,
  aW as Gt,
  l as Q,
  f as V,
  k as An,
  o as wn,
  z as ze,
  bJ as Pn,
  n as On,
  aK as Zn
} from "../chunks/BYTf-X4W.js";
import {
  c as $n,
  s as Pt
} from "../chunks/C8z7QA18.js";
import {
  i as ut
} from "../chunks/BQVJ6ha0.js";
import {
  s as Ot
} from "../chunks/Ch81uRg7.js";
import {
  v as ti
} from "../chunks/COPrNy2f.js";
import {
  G as At,
  H as ae,
  I as ei,
  j as cn,
  a as sn,
  t as ye,
  u as Rn,
  J as ni,
  K as on,
  L as In,
  M as En,
  N as ii,
  q as si,
  O as oi,
  Q as ai,
  R as ri,
  T as li,
  P as ui
} from "../chunks/DQgyIwwl.js";
import {
  i as tn,
  b as xt,
  s as Dn,
  a as dn,
  w as ci,
  c as di,
  d as hi,
  e as hn,
  n as Tn,
  m as Ke,
  g as fi,
  f as Sn,
  A as mi,
  r as gi,
  h as pi,
  j as vi
} from "../chunks/DlmxZOGh.js";
import {
  k as yi
} from "../chunks/xqxIcQp6.js";
import {
  c as re,
  a as ee,
  s as pt,
  f as an,
  d as Ce,
  S as Ci,
  j as rn,
  i as _i,
  e as kn
} from "../chunks/BvWEorH0.js";
import {
  _ as Mn
} from "../chunks/DxG_ijSt.js";
import {
  b as en
} from "../chunks/DWYfOKdQ.js";
import {
  p as z,
  s as Ae,
  r as Ee
} from "../chunks/DxS_2ZxM.js";
import {
  e as Ye
} from "../chunks/Cb3Of28l.js";
import {
  c as Jt
} from "../chunks/DQRHQwb9.js";
import {
  t as bi
} from "../chunks/CB4gRi1J.js";
import "../chunks/BKKpqwch.js";
import {
  p as wi,
  a as Ii,
  b as Ei,
  s as Di,
  c as Ti,
  n as Si,
  i as Ni,
  d as Li,
  r as xi,
  t as Ai,
  e as Pi
} from "../chunks/D8g9dv1L.js";
import {
  T as Oi
} from "../chunks/B9CSSPcg.js";
import "../chunks/9iuNSfqc.js";
(function() {
  try {
    var l = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    l.SENTRY_RELEASE = {
      id: "e6c43a335491af110c902083fb644fb71e659308"
    };
    var t = new l.Error().stack;
    t && (l._sentryDebugIds = l._sentryDebugIds || {}, l._sentryDebugIds[t] = "326a07c3-5665-452f-956d-3376168d0d92", l._sentryDebugIdIdentifier = "sentry-dbid-326a07c3-5665-452f-956d-3376168d0d92")
  } catch {}
})();
const Ri = !0,
  Mo = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: Ri
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  ki = Array(12).fill(0);
var Mi = gt('<div class="sonner-loading-bar"></div>'),
  Bi = gt('<div><div class="sonner-spinner"></div></div>');

function Hi(l, t) {
  Zt(t, !0);
  var r = Bi(),
    h = Z(r);
  Ye(h, 23, () => ki, (p, b) => `spinner-bar-${b}`, (p, b) => {
    var I = Mi();
    _(p, I)
  }), Y(h), Y(r), vt(p => {
    ee(r, 1, p), pt(r, "data-visible", t.visible)
  }, [() => re(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), _(l, r), $t()
}
const Ui = typeof window < "u" ? window : void 0;

function Wi(l) {
  let t = l.activeElement;
  for (; t != null && t.shadowRoot;) {
    const r = t.shadowRoot.activeElement;
    if (r === t) break;
    t = r
  }
  return t
}
var _e, Oe;
class Vi {
  constructor(t = {}) {
    ht(this, _e);
    ht(this, Oe);
    const {
      window: r = Ui,
      document: h = r == null ? void 0 : r.document
    } = t;
    r !== void 0 && (de(this, _e, h), de(this, Oe, $n(p => {
      const b = Pe(r, "focusin", p),
        I = Pe(r, "focusout", p);
      return () => {
        b(), I()
      }
    })))
  }
  get current() {
    var t;
    return (t = g(this, Oe)) == null || t.call(this), g(this, _e) ? Wi(g(this, _e)) : null
  }
}
_e = new WeakMap, Oe = new WeakMap;
new Vi;
var Re, le;
class Fi {
  constructor(t) {
    ht(this, Re);
    ht(this, le);
    de(this, Re, t), de(this, le, Symbol(t))
  }
  get key() {
    return g(this, le)
  }
  exists() {
    return Qn(g(this, le))
  }
  get() {
    const t = bn(g(this, le));
    if (t === void 0) throw new Error(`Context "${g(this,Re)}" not found`);
    return t
  }
  getOr(t) {
    const r = bn(g(this, le));
    return r === void 0 ? t : r
  }
  set(t) {
    return Jn(g(this, le), t)
  }
}
Re = new WeakMap, le = new WeakMap;
const zi = new Fi("<Toaster/>");

function Ge(l) {
  return l.label !== void 0
}

function Gi() {
  let l = ot(gn(typeof document < "u" ? document.hidden : !1));
  return Rt(() => Pe(document, "visibilitychange", () => {
    v(l, document.hidden, !0)
  })), {
    get current() {
      return i(l)
    }
  }
}
const Nn = 4e3,
  ji = 14,
  Ki = 45,
  Yi = 200,
  qi = .05,
  Xi = {
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

function Qi(l) {
  const [t, r] = l.split("-"), h = [];
  return t && h.push(t), r && h.push(r), h
}

function Ln(l) {
  return 1 / (1.5 + Math.abs(l) / 20)
}
var Ji = gt("<div><!></div>"),
  Zi = gt('<button data-close-button=""><!></button>'),
  $i = gt('<div data-icon=""><!> <!></div>'),
  ts = gt('<div data-description=""><!></div>'),
  es = gt('<button data-button="" data-cancel=""> </button>'),
  ns = gt('<button data-button=""> </button>'),
  is = gt('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  ss = gt('<li data-sonner-toast=""><!> <!></li>');

function os(l, t) {
  Zt(t, !0);
  const r = N => {
    var P = Q(),
      et = V(P);
    {
      var it = m => {
          var Dt = Ji(),
            a = Z(Dt);
          Ot(a, () => t.loadingIcon), Y(Dt), vt(e => {
            ee(Dt, 1, e), pt(Dt, "data-visible", i(K) === "loading")
          }, [() => {
            var e, n, s;
            return re(ae((e = i(dt)) == null ? void 0 : e.loader, (s = (n = t.toast) == null ? void 0 : n.classes) == null ? void 0 : s.loader, "sonner-loader"))
          }]), _(m, Dt)
        },
        X = m => {
          {
            let Dt = w(() => {
                var e, n;
                return ae((e = i(dt)) == null ? void 0 : e.loader, (n = t.toast.classes) == null ? void 0 : n.loader)
              }),
              a = w(() => i(K) === "loading");
            Hi(m, {
              get class() {
                return i(Dt)
              },
              get visible() {
                return i(a)
              }
            })
          }
        };
      ut(et, m => {
        t.loadingIcon ? m(it) : m(X, !1)
      })
    }
    _(N, P)
  };
  let h = z(t, "cancelButtonStyle", 3, ""),
    p = z(t, "actionButtonStyle", 3, ""),
    b = z(t, "descriptionClass", 3, ""),
    I = z(t, "unstyled", 3, !1),
    A = z(t, "defaultRichColors", 3, !1);
  const W = {
    ...Xi
  };
  let S = ot(!1),
    y = ot(!1),
    L = ot(!1),
    D = ot(!1),
    G = ot(!1),
    O = ot(0),
    $ = ot(0),
    F = t.toast.duration || t.duration || Nn,
    E = ot(void 0),
    k = ot(null),
    j = ot(null);
  const R = w(() => t.index === 0),
    at = w(() => t.index + 1 <= t.visibleToasts),
    K = w(() => t.toast.type),
    ft = w(() => t.toast.dismissable !== !1),
    Nt = w(() => t.toast.class || ""),
    _t = w(() => t.toast.descriptionClass || ""),
    It = w(() => At.heights.findIndex(N => N.toastId === t.toast.id) || 0),
    Et = w(() => t.toast.closeButton ?? t.closeButton),
    Wt = w(() => t.toast.duration ?? t.duration ?? Nn);
  let Mt = null;
  const jt = w(() => t.position.split("-")),
    Bt = w(() => At.heights.reduce((N, P, et) => et >= i(It) ? N : N + P.height, 0)),
    ne = Gi(),
    H = w(() => t.toast.invert || t.invert),
    lt = w(() => i(K) === "loading"),
    dt = w(() => ({
      ...W,
      ...t.classes
    })),
    Tt = w(() => t.toast.title),
    Kt = w(() => t.toast.description);
  let Yt = ot(0),
    se = ot(0);
  const T = w(() => Math.round(i(It) * ji + i(Bt)));
  Rt(() => {
    i(Tt), i(Kt);
    let N;
    t.expanded || t.expandByDefault ? N = 1 : N = 1 - t.index * qi;
    const P = xe(() => i(E));
    if (P === void 0) return;
    P.style.setProperty("height", "auto");
    const et = P.offsetHeight,
      it = P.getBoundingClientRect().height,
      X = Math.round(it / N + Number.EPSILON & 100) / 100;
    P.style.removeProperty("height");
    let m;
    Math.abs(X - et) < 1 ? m = X : m = et, v($, m, !0), xe(() => {
      At.setHeight({
        toastId: t.toast.id,
        height: m
      })
    })
  });

  function U() {
    v(y, !0), v(O, i(T), !0), At.removeHeight(t.toast.id), setTimeout(() => {
      At.remove(t.toast.id)
    }, Yi)
  }
  let yt;
  const tt = w(() => t.toast.promise && i(K) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function kt() {
    v(Yt, new Date().getTime(), !0), yt = setTimeout(() => {
      var N, P;
      (P = (N = t.toast).onAutoClose) == null || P.call(N, t.toast), U()
    }, F)
  }

  function qt() {
    if (i(se) < i(Yt)) {
      const N = new Date().getTime() - i(Yt);
      F = F - N
    }
    v(se, new Date().getTime(), !0)
  }
  Rt(() => {
    t.toast.updated && (clearTimeout(yt), F = i(Wt), kt())
  }), Rt(() => (i(tt) || (t.expanded || t.interacting || ne.current ? qt() : kt()), () => clearTimeout(yt))), me(() => {
    var P;
    v(S, !0);
    const N = (P = i(E)) == null ? void 0 : P.getBoundingClientRect().height;
    return v($, N, !0), At.setHeight({
      toastId: t.toast.id,
      height: N
    }), () => {
      At.removeHeight(t.toast.id)
    }
  }), Rt(() => {
    t.toast.delete && xe(() => {
      var N, P;
      U(), (P = (N = t.toast).onDismiss) == null || P.call(N, t.toast)
    })
  });
  const ge = N => {
      if (i(lt)) return;
      v(O, i(T), !0);
      const P = N.target;
      P.setPointerCapture(N.pointerId), P.tagName !== "BUTTON" && (v(L, !0), Mt = {
        x: N.clientX,
        y: N.clientY
      })
    },
    oe = () => {
      var m, Dt, a, e, n, s;
      if (i(D) || !i(ft)) return;
      Mt = null;
      const N = Number(((m = i(E)) == null ? void 0 : m.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        P = Number(((Dt = i(E)) == null ? void 0 : Dt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        et = new Date().getTime() - 0,
        it = i(k) === "x" ? N : P,
        X = Math.abs(it) / et;
      if (Math.abs(it) >= Ki || X > .11) {
        v(O, i(T), !0), (e = (a = t.toast).onDismiss) == null || e.call(a, t.toast), i(k) === "x" ? v(j, N > 0 ? "right" : "left", !0) : v(j, P > 0 ? "down" : "up", !0), U(), v(D, !0);
        return
      } else(n = i(E)) == null || n.style.setProperty("--swipe-amount-x", "0px"), (s = i(E)) == null || s.style.setProperty("--swipe-amount-y", "0px");
      v(G, !1), v(L, !1), v(k, null)
    },
    Ht = N => {
      var Dt, a, e;
      if (!Mt || !i(ft) || (((Dt = window.getSelection()) == null ? void 0 : Dt.toString().length) ?? -1) > 0) return;
      const et = N.clientY - Mt.y,
        it = N.clientX - Mt.x,
        X = t.swipeDirections ?? Qi(t.position);
      !i(k) && (Math.abs(it) > 1 || Math.abs(et) > 1) && v(k, Math.abs(it) > Math.abs(et) ? "x" : "y", !0);
      let m = {
        x: 0,
        y: 0
      };
      if (i(k) === "y") {
        if (X.includes("top") || X.includes("bottom"))
          if (X.includes("top") && et < 0 || X.includes("bottom") && et > 0) m.y = et;
          else {
            const n = et * Ln(et);
            m.y = Math.abs(n) < Math.abs(et) ? n : et
          }
      } else if (i(k) === "x" && (X.includes("left") || X.includes("right")))
        if (X.includes("left") && it < 0 || X.includes("right") && it > 0) m.x = it;
        else {
          const n = it * Ln(it);
          m.x = Math.abs(n) < Math.abs(it) ? n : it
        }(Math.abs(m.x) > 0 || Math.abs(m.y) > 0) && v(G, !0), (a = i(E)) == null || a.style.setProperty("--swipe-amount-x", `${m.x}px`), (e = i(E)) == null || e.style.setProperty("--swipe-amount-y", `${m.y}px`)
    },
    Vt = () => {
      v(L, !1), v(k, null), Mt = null
    },
    St = w(() => t.toast.icon ? t.toast.icon : i(K) === "success" ? t.successIcon : i(K) === "error" ? t.errorIcon : i(K) === "warning" ? t.warningIcon : i(K) === "info" ? t.infoIcon : i(K) === "loading" ? t.loadingIcon : null);
  var q = ss();
  pt(q, "tabindex", 0);
  let pe;
  var De = Z(q);
  {
    var Te = N => {
      var P = Zi(),
        et = Z(P);
      Ot(et, () => t.closeIcon ?? Gt), Y(P), vt(it => {
        pt(P, "aria-label", t.closeButtonAriaLabel), pt(P, "data-disabled", i(lt)), ee(P, 1, it)
      }, [() => {
        var it, X, m;
        return re(ae((it = i(dt)) == null ? void 0 : it.closeButton, (m = (X = t.toast) == null ? void 0 : X.classes) == null ? void 0 : m.closeButton))
      }]), he("click", P, () => {
        var it, X;
        i(lt) || !i(ft) || (U(), (X = (it = t.toast).onDismiss) == null || X.call(it, t.toast))
      }), _(N, P)
    };
    ut(De, N => {
      i(Et) && !t.toast.component && i(K) !== "loading" && t.closeIcon !== null && N(Te)
    })
  }
  var Se = bt(De, 2);
  {
    var ve = N => {
        const P = w(() => t.toast.component);
        var et = Q(),
          it = V(et);
        Jt(it, () => i(P), (X, m) => {
          m(X, Ae(() => t.toast.componentProps, {
            closeToast: U
          }))
        }), _(N, et)
      },
      Ne = N => {
        var P = is(),
          et = V(P);
        {
          var it = f => {
            var d = $i(),
              C = Z(d);
            {
              var x = M => {
                var B = Q(),
                  mt = V(B);
                {
                  var J = nt => {
                      var Ft = Q(),
                        Ut = V(Ft);
                      Jt(Ut, () => t.toast.icon, (wt, Lt) => {
                        Lt(wt, {})
                      }), _(nt, Ft)
                    },
                    rt = nt => {
                      r(nt)
                    };
                  ut(mt, nt => {
                    t.toast.icon ? nt(J) : nt(rt, !1)
                  })
                }
                _(M, B)
              };
              ut(C, M => {
                (t.toast.promise || i(K) === "loading") && M(x)
              })
            }
            var ct = bt(C, 2);
            {
              var st = M => {
                var B = Q(),
                  mt = V(B);
                {
                  var J = wt => {
                      var Lt = Q(),
                        te = V(Lt);
                      Jt(te, () => t.toast.icon, (jn, Kn) => {
                        Kn(jn, {})
                      }), _(wt, Lt)
                    },
                    rt = wt => {
                      var Lt = Q(),
                        te = V(Lt);
                      Ot(te, () => t.successIcon ?? Gt), _(wt, Lt)
                    },
                    nt = wt => {
                      var Lt = Q(),
                        te = V(Lt);
                      Ot(te, () => t.errorIcon ?? Gt), _(wt, Lt)
                    },
                    Ft = wt => {
                      var Lt = Q(),
                        te = V(Lt);
                      Ot(te, () => t.warningIcon ?? Gt), _(wt, Lt)
                    },
                    Ut = wt => {
                      var Lt = Q(),
                        te = V(Lt);
                      Ot(te, () => t.infoIcon ?? Gt), _(wt, Lt)
                    };
                  ut(mt, wt => {
                    t.toast.icon ? wt(J) : i(K) === "success" ? wt(rt, 1) : i(K) === "error" ? wt(nt, 2) : i(K) === "warning" ? wt(Ft, 3) : i(K) === "info" && wt(Ut, 4)
                  })
                }
                _(M, B)
              };
              ut(ct, M => {
                t.toast.type !== "loading" && M(st)
              })
            }
            Y(d), vt(M => ee(d, 1, M), [() => {
              var M, B, mt;
              return re(ae((M = i(dt)) == null ? void 0 : M.icon, (mt = (B = t.toast) == null ? void 0 : B.classes) == null ? void 0 : mt.icon))
            }]), _(f, d)
          };
          ut(et, f => {
            (i(K) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (i(St) !== null || t.toast.icon) && f(it)
          })
        }
        var X = bt(et, 2),
          m = Z(X),
          Dt = Z(m);
        {
          var a = f => {
            var d = Q(),
              C = V(d);
            {
              var x = st => {
                  const M = w(() => t.toast.title);
                  var B = Q(),
                    mt = V(B);
                  Jt(mt, () => i(M), (J, rt) => {
                    rt(J, Ae(() => t.toast.componentProps))
                  }), _(st, B)
                },
                ct = st => {
                  var M = wn();
                  vt(() => Pt(M, t.toast.title)), _(st, M)
                };
              ut(C, st => {
                typeof t.toast.title != "string" ? st(x) : st(ct, !1)
              })
            }
            _(f, d)
          };
          ut(Dt, f => {
            t.toast.title && f(a)
          })
        }
        Y(m);
        var e = bt(m, 2);
        {
          var n = f => {
            var d = ts(),
              C = Z(d);
            {
              var x = st => {
                  const M = w(() => t.toast.description);
                  var B = Q(),
                    mt = V(B);
                  Jt(mt, () => i(M), (J, rt) => {
                    rt(J, Ae(() => t.toast.componentProps))
                  }), _(st, B)
                },
                ct = st => {
                  var M = wn();
                  vt(() => Pt(M, t.toast.description)), _(st, M)
                };
              ut(C, st => {
                typeof t.toast.description != "string" ? st(x) : st(ct, !1)
              })
            }
            Y(d), vt(st => ee(d, 1, st), [() => {
              var st, M;
              return re(ae(b(), i(_t), (st = i(dt)) == null ? void 0 : st.description, (M = t.toast.classes) == null ? void 0 : M.description))
            }]), _(f, d)
          };
          ut(e, f => {
            t.toast.description && f(n)
          })
        }
        Y(X);
        var s = bt(X, 2);
        {
          var o = f => {
            var d = Q(),
              C = V(d);
            {
              var x = M => {
                  var B = Q(),
                    mt = V(B);
                  Jt(mt, () => t.toast.cancel, (J, rt) => {
                    rt(J, {})
                  }), _(M, B)
                },
                ct = M => {
                  var B = es(),
                    mt = Z(B, !0);
                  Y(B), vt(J => {
                    an(B, t.toast.cancelButtonStyle ?? h()), ee(B, 1, J), Pt(mt, t.toast.cancel.label)
                  }, [() => {
                    var J, rt, nt;
                    return re(ae((J = i(dt)) == null ? void 0 : J.cancelButton, (nt = (rt = t.toast) == null ? void 0 : rt.classes) == null ? void 0 : nt.cancelButton))
                  }]), he("click", B, J => {
                    var rt, nt;
                    Ge(t.toast.cancel) && i(ft) && ((nt = (rt = t.toast.cancel) == null ? void 0 : rt.onClick) == null || nt.call(rt, J), U())
                  }), _(M, B)
                },
                st = w(() => Ge(t.toast.cancel));
              ut(C, M => {
                typeof t.toast.cancel == "function" ? M(x) : i(st) && M(ct, 1)
              })
            }
            _(f, d)
          };
          ut(s, f => {
            t.toast.cancel && f(o)
          })
        }
        var c = bt(s, 2);
        {
          var u = f => {
            var d = Q(),
              C = V(d);
            {
              var x = M => {
                  var B = Q(),
                    mt = V(B);
                  Jt(mt, () => t.toast.action, (J, rt) => {
                    rt(J, {})
                  }), _(M, B)
                },
                ct = M => {
                  var B = ns(),
                    mt = Z(B, !0);
                  Y(B), vt(J => {
                    an(B, t.toast.actionButtonStyle ?? p()), ee(B, 1, J), Pt(mt, t.toast.action.label)
                  }, [() => {
                    var J, rt, nt;
                    return re(ae((J = i(dt)) == null ? void 0 : J.actionButton, (nt = (rt = t.toast) == null ? void 0 : rt.classes) == null ? void 0 : nt.actionButton))
                  }]), he("click", B, J => {
                    var rt;
                    Ge(t.toast.action) && ((rt = t.toast.action) == null || rt.onClick(J), !J.defaultPrevented && U())
                  }), _(M, B)
                },
                st = w(() => Ge(t.toast.action));
              ut(C, M => {
                typeof t.toast.action == "function" ? M(x) : i(st) && M(ct, 1)
              })
            }
            _(f, d)
          };
          ut(c, f => {
            t.toast.action && f(u)
          })
        }
        vt(f => ee(m, 1, f), [() => {
          var f, d, C;
          return re(ae((f = i(dt)) == null ? void 0 : f.title, (C = (d = t.toast) == null ? void 0 : d.classes) == null ? void 0 : C.title))
        }]), _(N, P)
      };
    ut(Se, N => {
      t.toast.component ? N(ve) : N(Ne, !1)
    })
  }
  Y(q), en(q, N => v(E, N), () => i(E)), vt((N, P, et) => {
    ee(q, 1, N), pt(q, "data-rich-colors", t.toast.richColors ?? A()), pt(q, "data-styled", !(t.toast.component || t.toast.unstyled || I())), pt(q, "data-mounted", i(S)), pt(q, "data-promise", P), pt(q, "data-swiped", i(G)), pt(q, "data-removed", i(y)), pt(q, "data-visible", i(at)), pt(q, "data-y-position", i(jt)[0]), pt(q, "data-x-position", i(jt)[1]), pt(q, "data-index", t.index), pt(q, "data-front", i(R)), pt(q, "data-swiping", i(L)), pt(q, "data-dismissable", i(ft)), pt(q, "data-type", i(K)), pt(q, "data-invert", i(H)), pt(q, "data-swipe-out", i(D)), pt(q, "data-swipe-direction", i(j)), pt(q, "data-expanded", et), pe = an(q, `${t.style} ${t.toast.style}`, pe, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": At.toasts.length - t.index,
      "--offset": `${i(y)?i(O):i(T)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${i($)}px`
    })
  }, [() => {
    var N, P, et, it, X, m;
    return re(ae(t.class, i(Nt), (N = i(dt)) == null ? void 0 : N.toast, (et = (P = t.toast) == null ? void 0 : P.classes) == null ? void 0 : et.toast, (it = i(dt)) == null ? void 0 : it[i(K)], (m = (X = t.toast) == null ? void 0 : X.classes) == null ? void 0 : m[i(K)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && i(S))]), he("pointermove", q, Ht), he("pointerup", q, oe), he("pointerdown", q, ge), $e("dragend", q, Vt), _(l, q), $t()
}
An(["pointermove", "pointerup", "pointerdown", "click"]);
var as = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function rs(l) {
  var t = as();
  _(l, t)
}
var ls = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function us(l) {
  var t = ls();
  _(l, t)
}
var cs = ze('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function ds(l) {
  var t = cs();
  _(l, t)
}
var hs = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function fs(l) {
  var t = hs();
  _(l, t)
}
var ms = ze('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function gs(l) {
  var t = ms();
  _(l, t)
}
const ps = 3,
  Bn = "24px",
  Hn = "16px",
  vs = 4e3,
  ys = 356,
  Cs = 14,
  ln = "dark",
  je = "light";

function _s(l, t) {
  const r = {};
  return [l, t].forEach((h, p) => {
    const b = p === 1,
      I = b ? "--mobile-offset" : "--offset",
      A = b ? Hn : Bn;

    function W(S) {
      ["top", "right", "bottom", "left"].forEach(y => {
        r[`${I}-${y}`] = typeof S == "number" ? `${S}px` : S
      })
    }
    typeof h == "number" || typeof h == "string" ? W(h) : typeof h == "object" ? ["top", "right", "bottom", "left"].forEach(S => {
      const y = h[S];
      y === void 0 ? r[`${I}-${S}`] = A : r[`${I}-${S}`] = typeof y == "number" ? `${y}px` : y
    }) : W(A)
  }), r
}
var bs = gt("<ol></ol>"),
  ws = gt('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-smjlix"><!></section>');

function Is(l, t) {
  Zt(t, !0);

  function r(T) {
    return T !== "system" ? T : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ln : je
  }
  let h = z(t, "invert", 3, !1),
    p = z(t, "position", 3, "bottom-right"),
    b = z(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    I = z(t, "expand", 3, !1),
    A = z(t, "closeButton", 3, !1),
    W = z(t, "offset", 3, Bn),
    S = z(t, "mobileOffset", 3, Hn),
    y = z(t, "theme", 3, "light"),
    L = z(t, "richColors", 3, !1),
    D = z(t, "duration", 3, vs),
    G = z(t, "visibleToasts", 3, ps),
    O = z(t, "toastOptions", 19, () => ({})),
    $ = z(t, "dir", 7, "auto"),
    F = z(t, "gap", 3, Cs),
    E = z(t, "containerAriaLabel", 3, "Notifications"),
    k = z(t, "closeButtonAriaLabel", 3, "Close toast"),
    j = Ee(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function R() {
    if ($() !== "auto") return $();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const T = document.documentElement.getAttribute("dir");
    return T === "auto" || !T ? (xe(() => $(window.getComputedStyle(document.documentElement).direction ?? "ltr")), $()) : (xe(() => $(T)), T)
  }
  const at = w(() => Array.from(new Set([p(), ...At.toasts.filter(T => T.position).map(T => T.position)].filter(Boolean))));
  let K = ot(!1),
    ft = ot(!1),
    Nt = ot(gn(r(y()))),
    _t = ot(void 0),
    It = ot(null),
    Et = ot(!1);
  const Wt = w(() => b().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Rt(() => {
    At.toasts.length <= 1 && v(K, !1)
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
    var tt, kt;
    b().every(qt => U[qt] || U.code === qt) && (v(K, !0), (tt = i(_t)) == null || tt.focus()), U.code === "Escape" && (document.activeElement === i(_t) || (kt = i(_t)) != null && kt.contains(document.activeElement)) && v(K, !1)
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
      (yt = t.onpointerdown) == null || yt.call(t, T), !(T.target instanceof HTMLElement && T.target.dataset.dismissable === "false") && v(ft, !0)
    },
    ne = T => {
      var U;
      (U = t.onmouseenter) == null || U.call(t, T), v(K, !0)
    },
    H = T => {
      var U;
      (U = t.onmouseleave) == null || U.call(t, T), i(ft) || v(K, !1)
    },
    lt = T => {
      var U;
      (U = t.onmousemove) == null || U.call(t, T), v(K, !0)
    },
    dt = T => {
      var U;
      (U = t.ondragend) == null || U.call(t, T), v(K, !1)
    },
    Tt = T => {
      var U;
      (U = t.onpointerup) == null || U.call(t, T), v(ft, !1)
    };
  zi.set(new ei);
  var Kt = ws();
  pt(Kt, "tabindex", -1);
  var Yt = Z(Kt);
  {
    var se = T => {
      var U = Q(),
        yt = V(U);
      Ye(yt, 18, () => i(at), tt => tt, (tt, kt, qt, ge) => {
        const oe = w(() => {
            const [St, q] = kt.split("-");
            return {
              y: St,
              x: q
            }
          }),
          Ht = w(() => _s(W(), S()));
        var Vt = bs();
        Ce(Vt, St => {
          var q;
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
            onmousemove: lt,
            onmouseleave: H,
            ondragend: dt,
            onpointerdown: Bt,
            onpointerup: Tt,
            ...j,
            [Ci]: {
              "--front-toast-height": `${(q=At.heights[0])==null?void 0:q.height}px`,
              "--width": `${ys}px`,
              "--gap": `${F()}px`,
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
        }, [R], void 0, void 0, "svelte-smjlix"), Ye(Vt, 23, () => At.toasts.filter(St => !St.position && i(qt) === 0 || St.position === kt), St => St.id, (St, q, pe, De) => {
          {
            const Te = s => {
                var o = Q(),
                  c = V(o);
                {
                  var u = d => {
                      var C = Q(),
                        x = V(C);
                      Ot(x, () => t.successIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      rs(d)
                    };
                  ut(c, d => {
                    t.successIcon ? d(u) : t.successIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              },
              Se = s => {
                var o = Q(),
                  c = V(o);
                {
                  var u = d => {
                      var C = Q(),
                        x = V(C);
                      Ot(x, () => t.errorIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      us(d)
                    };
                  ut(c, d => {
                    t.errorIcon ? d(u) : t.errorIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              },
              ve = s => {
                var o = Q(),
                  c = V(o);
                {
                  var u = d => {
                      var C = Q(),
                        x = V(C);
                      Ot(x, () => t.warningIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      ds(d)
                    };
                  ut(c, d => {
                    t.warningIcon ? d(u) : t.warningIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              },
              Ne = s => {
                var o = Q(),
                  c = V(o);
                {
                  var u = d => {
                      var C = Q(),
                        x = V(C);
                      Ot(x, () => t.infoIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      fs(d)
                    };
                  ut(c, d => {
                    t.infoIcon ? d(u) : t.infoIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              },
              N = s => {
                var o = Q(),
                  c = V(o);
                {
                  var u = d => {
                      var C = Q(),
                        x = V(C);
                      Ot(x, () => t.closeIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      gs(d)
                    };
                  ut(c, d => {
                    t.closeIcon ? d(u) : t.closeIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              };
            let P = w(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.duration) ?? D()
              }),
              et = w(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.class) ?? ""
              }),
              it = w(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.descriptionClass) || ""
              }),
              X = w(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.style) ?? ""
              }),
              m = w(() => O().classes || {}),
              Dt = w(() => O().unstyled ?? !1),
              a = w(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.cancelButtonStyle) ?? ""
              }),
              e = w(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.actionButtonStyle) ?? ""
              }),
              n = w(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.closeButtonAriaLabel) ?? k()
              });
            os(St, {
              get index() {
                return i(pe)
              },
              get toast() {
                return i(q)
              },
              get defaultRichColors() {
                return L()
              },
              get duration() {
                return i(P)
              },
              get class() {
                return i(et)
              },
              get descriptionClass() {
                return i(it)
              },
              get invert() {
                return h()
              },
              get visibleToasts() {
                return G()
              },
              get closeButton() {
                return A()
              },
              get interacting() {
                return i(ft)
              },
              get position() {
                return kt
              },
              get style() {
                return i(X)
              },
              get classes() {
                return i(m)
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
                return I()
              },
              get expanded() {
                return i(K)
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
        }), Y(Vt), en(Vt, St => v(_t, St), () => i(_t)), vt(() => Vt.dir = Vt.dir), _(tt, Vt)
      }), _(T, U)
    };
    ut(Yt, T => {
      At.toasts.length > 0 && T(se)
    })
  }
  Y(Kt), vt(() => pt(Kt, "aria-label", `${E()??""} ${i(Wt)??""}`)), _(l, Kt), $t()
}
var Es = gt('<div class="flex h-16 items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>'),
  Ds = gt("<!> <div><h-captcha></h-captcha></div>", 3);

function Ts(l, t) {
  Zt(t, !0);
  const r = 20 * 1e3;
  let h = z(t, "theme", 19, () => cn.theme === "dark" ? "dark" : "light"),
    p = z(t, "size", 3, "normal"),
    b = ot(void 0),
    I = ot(!1),
    A;

  function W() {
    A && (clearTimeout(A), A = void 0)
  }

  function S() {
    var F;
    W(), !i(I) && (v(I, !0), (F = t.onload) == null || F.call(t))
  }
  me(async () => {
    if (i(b)) {
      if (i(b).addEventListener("verified", F => {
          var E;
          W(), (E = t.callback) == null || E.call(t, F.token)
        }), i(b).addEventListener("error", F => {
          var E;
          W(), (E = t.errorCallback) == null || E.call(t, F.error)
        }), i(b).addEventListener("expired", () => {
          var F;
          (F = t.expiredCallback) == null || F.call(t)
        }), i(b).addEventListener("loaded", S), await Mn(() => import("../chunks/CqJpnCLO.js"), [], import.meta.url), "hcaptcha" in window) {
        S();
        return
      }
      A = setTimeout(() => {
        var F;
        A = void 0, i(I) || (F = t.errorCallback) == null || F.call(t, "render-timeout")
      }, r)
    }
  }), Xn(() => {
    W()
  });
  var y = Ds(),
    L = V(y);
  {
    var D = F => {
      var E = Es();
      _(F, E)
    };
    ut(L, F => {
      i(I) || F(D)
    })
  }
  var G = bt(L, 2);
  let O;
  var $ = Z(G);
  vt(() => rn($, "site-key", t.siteKey)), vt(() => rn($, "size", p())), vt(() => rn($, "theme", h())), en($, F => v(b, F), () => i(b)), Y(G), vt(() => O = ee(G, 1, "", null, O, {
    hidden: !i(I)
  })), _(l, y), $t()
}

function pn(...l) {
  return bi(_i(l))
}
var Ss = gt("<div><!></div>");

function Ns(l, t) {
  Zt(t, !0);
  let r = z(t, "ref", 15, null),
    h = Ee(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var p = Ss();
  Ce(p, I => ({
    class: I,
    ...h
  }), [() => pn("flex items-center", t.class)]);
  var b = Z(p);
  Ot(b, () => t.children ?? Gt), Y(p), en(p, I => r(I), () => r()), _(l, p), $t()
}
var ke, qe;
class Ls {
  constructor(t, r) {
    ht(this, ke, () => {});
    ht(this, qe, w(() => g(this, ke).call(this)));
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
    return i(g(this, qe))
  }
}
ke = new WeakMap, qe = new WeakMap;
const xs = 1,
  As = 9,
  Ps = 11;

function Os(l) {
  return tn(l) && l.nodeType === xs && typeof l.nodeName == "string"
}

function Un(l) {
  return tn(l) && l.nodeType === As
}

function Rs(l) {
  var t;
  return tn(l) && ((t = l.constructor) == null ? void 0 : t.name) === "VisualViewport"
}

function ks(l) {
  return tn(l) && l.nodeType !== void 0
}

function Ms(l) {
  return ks(l) && l.nodeType === Ps && "host" in l
}

function Bs(l) {
  return Un(l) ? l : Rs(l) ? l.document : (l == null ? void 0 : l.ownerDocument) ?? document
}

function Wn(l) {
  var t;
  return Ms(l) ? Wn(l.host) : Un(l) ? l.defaultView ?? window : Os(l) ? ((t = l.ownerDocument) == null ? void 0 : t.defaultView) ?? window : window
}

function Hs(l) {
  let t = l.activeElement;
  for (; t != null && t.shadowRoot;) {
    const r = t.shadowRoot.activeElement;
    if (r === t) break;
    t = r
  }
  return t
}
var Me;
class Us {
  constructor(t) {
    Ct(this, "element");
    ht(this, Me, w(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
    Ct(this, "getDocument", () => Bs(this.root));
    Ct(this, "getWindow", () => this.getDocument().defaultView ?? window);
    Ct(this, "getActiveElement", () => Hs(this.root));
    Ct(this, "isActiveElement", t => t === this.getActiveElement());
    Ct(this, "querySelector", t => this.root ? this.root.querySelector(t) : null);
    Ct(this, "querySelectorAll", t => this.root ? this.root.querySelectorAll(t) : []);
    Ct(this, "setTimeout", (t, r) => this.getWindow().setTimeout(t, r));
    Ct(this, "clearTimeout", t => this.getWindow().clearTimeout(t));
    typeof t == "function" ? this.element = xt(t) : this.element = t
  }
  get root() {
    return i(g(this, Me))
  }
  set root(t) {
    v(g(this, Me), t)
  }
  getElementById(t) {
    return this.root.getElementById(t)
  }
}
Me = new WeakMap;
const Ws = 18,
  Vn = 40,
  Vs = `${Vn}px`,
  Fs = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");

function zs({
  containerRef: l,
  inputRef: t,
  pushPasswordManagerStrategy: r,
  isFocused: h,
  domContext: p
}) {
  let b = ot(!1),
    I = ot(!1),
    A = ot(!1);

  function W() {
    const y = r.current;
    return y === "none" ? !1 : y === "increase-width" && i(b) && i(I)
  }

  function S() {
    const y = l.current,
      L = t.current;
    if (!y || !L || i(A) || r.current === "none") return;
    const D = y,
      G = D.getBoundingClientRect().left + D.offsetWidth,
      O = D.getBoundingClientRect().top + D.offsetHeight / 2,
      $ = G - Ws,
      F = O;
    p.querySelectorAll(Fs).length === 0 && p.getDocument().elementFromPoint($, F) === y || (v(b, !0), v(A, !0))
  }
  return Rt(() => {
    const y = l.current;
    if (!y || r.current === "none") return;

    function L() {
      const O = Wn(y).innerWidth - y.getBoundingClientRect().right;
      v(I, O >= Vn)
    }
    L();
    const D = setInterval(L, 1e3);
    return () => {
      clearInterval(D)
    }
  }), Rt(() => {
    const y = h.current || p.getActiveElement() === t.current;
    if (r.current === "none" || !y) return;
    const L = setTimeout(S, 0),
      D = setTimeout(S, 2e3),
      G = setTimeout(S, 5e3),
      O = setTimeout(() => {
        v(A, !0)
      }, 6e3);
    return () => {
      clearTimeout(L), clearTimeout(D), clearTimeout(G), clearTimeout(O)
    }
  }), {
    get hasPwmBadge() {
      return i(b)
    },
    get willPushPwmBadge() {
      return W()
    },
    PWM_BADGE_SPACE_WIDTH: Vs
  }
}
const Fn = hi({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  Gs = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var Xt, be, ue, zt, Qt, we, ie, ce, fe, Ie, Xe, Be, He, Qe, Je, zn, Ue, We, Ze, Ve;
const vn = class vn {
  constructor(t) {
    ht(this, Je);
    Ct(this, "opts");
    Ct(this, "attachment");
    ht(this, Xt, Dn(null));
    ht(this, be, ot(!1));
    Ct(this, "inputAttachment", dn(g(this, Xt)));
    ht(this, ue, Dn(!1));
    ht(this, zt, ot(null));
    ht(this, Qt, ot(null));
    ht(this, we, new Ls(() => this.opts.value.current ?? ""));
    ht(this, ie, w(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    ht(this, ce, ot(gn({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    ht(this, fe);
    ht(this, Ie);
    Ct(this, "domContext");
    Ct(this, "onkeydown", t => {
      const r = t.key;
      Gs.includes(r) || t.ctrlKey || t.metaKey || r && i(g(this, ie)) && !i(g(this, ie)).test(r) && t.preventDefault()
    });
    ht(this, Xe, w(() => ({
      position: "relative",
      cursor: this.opts.disabled.current ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })));
    ht(this, Be, w(() => ({
      id: this.opts.id.current,
      [Fn.root]: "",
      style: i(g(this, Xe)),
      ...this.attachment
    })));
    ht(this, He, w(() => ({
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }
    })));
    ht(this, Qe, w(() => ({
      position: "absolute",
      inset: 0,
      width: g(this, fe).willPushPwmBadge ? `calc(100% + ${g(this,fe).PWM_BADGE_SPACE_WIDTH})` : "100%",
      clipPath: g(this, fe).willPushPwmBadge ? `inset(0 ${g(this,fe).PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
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
    ht(this, Ue, () => {
      var $;
      const t = g(this, Xt).current,
        r = this.opts.ref.current;
      if (!t || !r) return;
      if (this.domContext.getActiveElement() !== t) {
        v(g(this, zt), null), v(g(this, Qt), null);
        return
      }
      const h = t.selectionStart,
        p = t.selectionEnd,
        b = t.selectionDirection ?? "none",
        I = t.maxLength,
        A = t.value,
        W = i(g(this, ce)).prev;
      let S = -1,
        y = -1,
        L;
      if (A.length !== 0 && h !== null && p !== null) {
        const F = h === p,
          E = h === A.length && A.length < I;
        if (F && !E) {
          const k = h;
          if (k === 0) S = 0, y = 1, L = "forward";
          else if (k === I) S = k - 1, y = k, L = "backward";
          else if (I > 1 && A.length > 1) {
            let j = 0;
            if (W[0] !== null && W[1] !== null) {
              L = k < W[1] ? "backward" : "forward";
              const R = W[0] === W[1] && W[0] < I;
              L === "backward" && !R && (j = -1)
            }
            S = j + k, y = j + k + 1
          }
        }
        S !== -1 && y !== -1 && S !== y && (($ = g(this, Xt).current) == null || $.setSelectionRange(S, y, L))
      }
      const D = S !== -1 ? S : h,
        G = y !== -1 ? y : p,
        O = L ?? b;
      v(g(this, zt), D, !0), v(g(this, Qt), G, !0), i(g(this, ce)).prev = [D, G, O]
    });
    Ct(this, "oninput", t => {
      const r = t.currentTarget.value.slice(0, this.opts.maxLength.current);
      if (r.length > 0 && i(g(this, ie)) && !i(g(this, ie)).test(r)) {
        t.preventDefault();
        return
      }
      typeof g(this, we).current == "string" && r.length < g(this, we).current.length && this.domContext.getDocument().dispatchEvent(new Event("selectionchange")), this.opts.value.current = r
    });
    Ct(this, "onfocus", t => {
      const r = g(this, Xt).current;
      if (r) {
        const h = Math.min(r.value.length, this.opts.maxLength.current - 1),
          p = r.value.length;
        r.setSelectionRange(h, p), v(g(this, zt), h, !0), v(g(this, Qt), p, !0)
      }
      g(this, ue).current = !0
    });
    Ct(this, "onpaste", t => {
      var y, L, D, G;
      const r = g(this, Xt).current;
      if (!r) return;
      const h = O => {
          const $ = r.selectionStart === null ? void 0 : r.selectionStart,
            F = r.selectionEnd === null ? void 0 : r.selectionEnd,
            E = $ !== F,
            k = this.opts.value.current;
          return (E ? k.slice(0, $) + O + k.slice(F) : k.slice(0, $) + O + k.slice($)).slice(0, this.opts.maxLength.current)
        },
        p = O => O.length > 0 && i(g(this, ie)) && !i(g(this, ie)).test(O);
      if (!((y = this.opts.pasteTransformer) != null && y.current) && (!g(this, Ie).isIOS || !t.clipboardData || !r)) {
        const O = h((L = t.clipboardData) == null ? void 0 : L.getData("text/plain"));
        p(O) && t.preventDefault();
        return
      }
      const b = ((D = t.clipboardData) == null ? void 0 : D.getData("text/plain")) ?? "",
        I = (G = this.opts.pasteTransformer) != null && G.current ? this.opts.pasteTransformer.current(b) : b;
      t.preventDefault();
      const A = h(I);
      if (p(A)) return;
      r.value = A, this.opts.value.current = A;
      const W = Math.min(A.length, this.opts.maxLength.current - 1),
        S = A.length;
      r.setSelectionRange(W, S), v(g(this, zt), W, !0), v(g(this, Qt), S, !0)
    });
    Ct(this, "onmouseover", t => {
      v(g(this, be), !0)
    });
    Ct(this, "onmouseleave", t => {
      v(g(this, be), !1)
    });
    Ct(this, "onblur", t => {
      if (i(g(this, ce)).willSyntheticBlur) {
        i(g(this, ce)).willSyntheticBlur = !1;
        return
      }
      g(this, ue).current = !1
    });
    ht(this, We, w(() => {
      var t;
      return {
        id: this.opts.inputId.current,
        style: i(g(this, Qe)),
        autocomplete: this.opts.autocomplete.current || "one-time-code",
        "data-pin-input-input": "",
        "data-pin-input-input-mss": i(g(this, zt)),
        "data-pin-input-input-mse": i(g(this, Qt)),
        inputmode: this.opts.inputmode.current,
        pattern: (t = i(g(this, ie))) == null ? void 0 : t.source,
        maxlength: this.opts.maxLength.current,
        value: this.opts.value.current,
        disabled: di(this.opts.disabled.current),
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
    ht(this, Ze, w(() => Array.from({
      length: this.opts.maxLength.current
    }).map((t, r) => {
      const h = g(this, ue).current && i(g(this, zt)) !== null && i(g(this, Qt)) !== null && (i(g(this, zt)) === i(g(this, Qt)) && r === i(g(this, zt)) || r >= i(g(this, zt)) && r < i(g(this, Qt))),
        p = this.opts.value.current[r] !== void 0 ? this.opts.value.current[r] : null;
      return {
        char: p,
        isActive: h,
        hasFakeCaret: h && p === null
      }
    })));
    ht(this, Ve, w(() => ({
      cells: i(g(this, Ze)),
      isFocused: g(this, ue).current,
      isHovering: i(g(this, be))
    })));
    var r;
    this.opts = t, this.attachment = dn(this.opts.ref), this.domContext = new Us(t.ref), de(this, Ie, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((r = window == null ? void 0 : window.CSS) == null ? void 0 : r.supports("-webkit-touch-callout", "none"))
    }), de(this, fe, zs({
      containerRef: this.opts.ref,
      inputRef: g(this, Xt),
      isFocused: g(this, ue),
      pushPasswordManagerStrategy: this.opts.pushPasswordManagerStrategy,
      domContext: this.domContext
    })), me(() => {
      const h = g(this, Xt).current,
        p = this.opts.ref.current;
      if (!h || !p) return;
      g(this, Ie).value.current !== h.value && (this.opts.value.current = h.value), i(g(this, ce)).prev = [h.selectionStart, h.selectionEnd, h.selectionDirection ?? "none"];
      const b = Pe(this.domContext.getDocument(), "selectionchange", g(this, Ue), {
        capture: !0
      });
      g(this, Ue).call(this), this.domContext.getActiveElement() === h && (g(this, ue).current = !0), this.domContext.getElementById("pin-input-style") || _n(this, Je, zn).call(this);
      const I = () => {
        p && p.style.setProperty("--bits-pin-input-root-height", `${h.clientHeight}px`)
      };
      I();
      const A = new ResizeObserver(I);
      return A.observe(h), () => {
        b(), A.disconnect()
      }
    }), ci([() => this.opts.value.current, () => g(this, Xt).current], () => {
      js(() => {
        const h = g(this, Xt).current;
        if (!h) return;
        h.dispatchEvent(new Event("input"));
        const p = h.selectionStart,
          b = h.selectionEnd,
          I = h.selectionDirection ?? "none";
        p !== null && b !== null && (v(g(this, zt), p, !0), v(g(this, Qt), b, !0), i(g(this, ce)).prev = [p, b, I])
      }, this.domContext)
    }), Rt(() => {
      const h = this.opts.value.current,
        p = g(this, we).current,
        b = this.opts.maxLength.current,
        I = this.opts.onComplete.current;
      p !== void 0 && h !== p && p.length < b && h.length === b && I(h)
    })
  }
  static create(t) {
    return new vn(t)
  }
  get rootProps() {
    return i(g(this, Be))
  }
  set rootProps(t) {
    v(g(this, Be), t)
  }
  get inputWrapperProps() {
    return i(g(this, He))
  }
  set inputWrapperProps(t) {
    v(g(this, He), t)
  }
  get inputProps() {
    return i(g(this, We))
  }
  set inputProps(t) {
    v(g(this, We), t)
  }
  get snippetProps() {
    return i(g(this, Ve))
  }
  set snippetProps(t) {
    v(g(this, Ve), t)
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
    ht(this, Fe, w(() => ({
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
    return i(g(this, Fe))
  }
  set props(t) {
    v(g(this, Fe), t)
  }
};
Fe = new WeakMap;
let mn = yn;

function js(l, t) {
  const r = t.setTimeout(l, 0),
    h = t.setTimeout(l, 10),
    p = t.setTimeout(l, 50);
  return [r, h, p]
}

function Le(l, t) {
  try {
    l.insertRule(t)
  } catch {
    console.error("pin input could not insert CSS rule:", t)
  }
}
var Ks = gt("<div><!> <div><input/></div></div>");

function Ys(l, t) {
  const r = Pn();
  Zt(t, !0);
  let h = z(t, "id", 19, () => hn(r)),
    p = z(t, "inputId", 19, () => `${hn(r)}-input`),
    b = z(t, "ref", 15, null),
    I = z(t, "maxlength", 3, 6),
    A = z(t, "textalign", 3, "left"),
    W = z(t, "inputmode", 3, "numeric"),
    S = z(t, "onComplete", 3, Tn),
    y = z(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    L = z(t, "class", 3, ""),
    D = z(t, "autocomplete", 3, "one-time-code"),
    G = z(t, "disabled", 3, !1),
    O = z(t, "value", 15, ""),
    $ = z(t, "onValueChange", 3, Tn),
    F = Ee(t, ["$$slots", "$$events", "$$legacy", "id", "inputId", "ref", "maxlength", "textalign", "pattern", "inputmode", "onComplete", "pushPasswordManagerStrategy", "class", "children", "autocomplete", "disabled", "value", "onValueChange", "pasteTransformer"]);
  const E = fn.create({
      id: xt(() => h()),
      ref: xt(() => b(), _t => b(_t)),
      inputId: xt(() => p()),
      autocomplete: xt(() => D()),
      maxLength: xt(() => I()),
      textAlign: xt(() => A()),
      disabled: xt(() => G()),
      inputmode: xt(() => W()),
      pattern: xt(() => t.pattern),
      onComplete: xt(() => S()),
      value: xt(() => O(), _t => {
        O(_t), $()(_t)
      }),
      pushPasswordManagerStrategy: xt(() => y()),
      pasteTransformer: xt(() => t.pasteTransformer)
    }),
    k = w(() => Ke(F, E.inputProps)),
    j = w(() => Ke(E.rootProps, {
      class: L()
    })),
    R = w(() => Ke(E.inputWrapperProps, {}));
  var at = Ks();
  Ce(at, () => ({
    ...i(j)
  }));
  var K = Z(at);
  Ot(K, () => t.children ?? Gt, () => E.snippetProps);
  var ft = bt(K, 2);
  Ce(ft, () => ({
    ...i(R)
  }));
  var Nt = Z(ft);
  Ce(Nt, () => ({
    ...i(k)
  }), void 0, void 0, void 0, void 0, !0), Y(ft), Y(at), _(l, at), $t()
}
var qs = gt("<div><!></div>");

function Xs(l, t) {
  const r = Pn();
  Zt(t, !0);
  let h = z(t, "id", 19, () => hn(r)),
    p = z(t, "ref", 15, null),
    b = Ee(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]);
  const I = mn.create({
      id: xt(() => h()),
      ref: xt(() => p(), D => p(D)),
      cell: xt(() => t.cell)
    }),
    A = w(() => Ke(b, I.props));
  var W = Q(),
    S = V(W);
  {
    var y = D => {
        var G = Q(),
          O = V(G);
        Ot(O, () => t.child, () => ({
          props: i(A)
        })), _(D, G)
      },
      L = D => {
        var G = qs();
        Ce(G, () => ({
          ...i(A)
        }));
        var O = Z(G);
        Ot(O, () => t.children ?? Gt), Y(G), _(D, G)
      };
    ut(S, D => {
      t.child ? D(y) : D(L, !1)
    })
  }
  _(l, W), $t()
}
var Qs = gt('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  Js = gt(" <!>", 1);

function Zs(l, t) {
  Zt(t, !0);
  let r = z(t, "ref", 15, null),
    h = Ee(t, ["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]);
  var p = Q(),
    b = V(p);
  {
    let I = w(() => pn("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    Jt(b, () => Xs, (A, W) => {
      W(A, Ae({
        get cell() {
          return t.cell
        },
        get class() {
          return i(I)
        }
      }, () => h, {
        get ref() {
          return r()
        },
        set ref(S) {
          r(S)
        },
        children: (S, y) => {
          On();
          var L = Js(),
            D = V(L),
            G = bt(D);
          {
            var O = $ => {
              var F = Qs();
              _($, F)
            };
            ut(G, $ => {
              t.cell.hasFakeCaret && $(O)
            })
          }
          vt(() => Pt(D, `${t.cell.char??""} `)), _(S, L)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  _(l, p), $t()
}

function $s(l, t) {
  Zt(t, !0);
  let r = z(t, "ref", 15, null),
    h = z(t, "value", 15, ""),
    p = Ee(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);
  var b = Q(),
    I = V(b);
  {
    let A = w(() => pn("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    Jt(I, () => Ys, (W, S) => {
      S(W, Ae({
        get class() {
          return i(A)
        }
      }, () => p, {
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
  _(l, b), $t()
}
var un = {
    exports: {}
  },
  xn;

function to() {
  return xn || (xn = 1, (function(l) {
    (function(t) {
      l.exports ? l.exports = t() : window.intlTelInput = t()
    })(() => {
      var t = (() => {
        var r = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          p = Object.getOwnPropertyNames,
          b = Object.prototype.hasOwnProperty,
          I = (a, e) => {
            for (var n in e) r(a, n, {
              get: e[n],
              enumerable: !0
            })
          },
          A = (a, e, n, s) => {
            if (e && typeof e == "object" || typeof e == "function")
              for (let o of p(e)) !b.call(a, o) && o !== n && r(a, o, {
                get: () => e[o],
                enumerable: !(s = h(e, o)) || s.enumerable
              });
            return a
          },
          W = a => A(r({}, "__esModule", {
            value: !0
          }), a),
          S = {};
        I(S, {
          Iti: () => et,
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
          L = [];
        for (const a of y) L.push({
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
        var D = L,
          G = {
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
          O = G,
          $ = {
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
          F = $,
          E = {
            ...O,
            ...F
          },
          k = E,
          j = {
            OPEN_COUNTRY_DROPDOWN: "open:countrydropdown",
            CLOSE_COUNTRY_DROPDOWN: "close:countrydropdown",
            COUNTRY_CHANGE: "countrychange",
            INPUT: "input"
          },
          R = {
            HIDE: "iti__hide",
            V_HIDE: "iti__v-hide",
            ARROW_UP: "iti__arrow--up",
            GLOBE: "iti__globe",
            FLAG: "iti__flag",
            COUNTRY_ITEM: "iti__country",
            HIGHLIGHT: "iti__highlight"
          },
          at = {
            ARROW_UP: "ArrowUp",
            ARROW_DOWN: "ArrowDown",
            SPACE: " ",
            ENTER: "Enter",
            ESC: "Escape",
            TAB: "Tab"
          },
          K = {
            PASTE: "insertFromPaste",
            DELETE_FWD: "deleteContentForward"
          },
          ft = {
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
          lt = a => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia(a).matches,
          dt = () => {
            if (typeof navigator < "u" && typeof window < "u") {
              const a = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                e = lt("(max-width: 500px)"),
                n = lt("(max-height: 600px)"),
                s = lt("(pointer: coarse)");
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
            useFullscreenPopup: dt(),
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
            for (const x of a) x.iso2 === n ? s.push(x) : x.normalisedName.startsWith(n) ? o.push(x) : x.normalisedName.includes(n) ? c.push(x) : n === x.dialCode || n === x.dialCodePlus ? u.push(x) : x.dialCodePlus.includes(n) ? f.push(x) : x.initials.includes(n) && d.push(x);
            const C = (x, ct) => x.priority - ct.priority;
            return [...s.sort(C), ...o.sort(C), ...c.sort(C), ...u.sort(C), ...f.sort(C), ...d.sort(C)]
          },
          U = (a, e) => {
            const n = e.toLowerCase();
            for (const s of a)
              if (s.name.toLowerCase().startsWith(n)) return s;
            return null
          },
          yt = a => Object.keys(a).filter(e => !!a[e]).join(" "),
          tt = (a, e, n) => {
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
              }), c = tt("div", {
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
                this.countryContainer = tt("div", {
                  class: `iti__country-container ${R.V_HIDE}`
                }, a), e ? (this.selectedCountry = tt("button", {
                  type: "button",
                  class: "iti__selected-country",
                  [H.EXPANDED]: "false",
                  [H.LABEL]: this.options.i18n.noCountrySelected,
                  [H.HASPOPUP]: "dialog",
                  [H.CONTROLS]: `iti-${this.id}__dropdown-content`
                }, this.countryContainer), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = tt("div", {
                  class: "iti__selected-country"
                }, this.countryContainer);
                const o = tt("div", {
                  class: "iti__selected-country-primary"
                }, this.selectedCountry);
                this.selectedCountryInner = tt("div", {
                  class: R.FLAG
                }, o), e && (this.dropdownArrow = tt("div", {
                  class: "iti__arrow",
                  [H.HIDDEN]: "true"
                }, o)), n && (this.selectedDialCode = tt("div", {
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
              if (this.dropdownContent = tt("div", {
                  id: `iti-${this.id}__dropdown-content`,
                  class: `iti__dropdown-content ${R.HIDE} ${u}`,
                  role: "dialog",
                  [H.MODAL]: "true"
                }), this.isRTL && this.dropdownContent.setAttribute("dir", "rtl"), n && this._buildSearchUI(), this.countryList = tt("ul", {
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
                this.dropdown = tt("div", {
                  class: f
                }), this.dropdown.appendChild(this.dropdownContent)
              } else this.countryContainer.appendChild(this.dropdownContent)
            }
            _buildSearchUI() {
              const {
                i18n: a
              } = this.options, e = tt("div", {
                class: "iti__search-input-wrapper"
              }, this.dropdownContent);
              this.searchIcon = tt("span", {
                class: "iti__search-icon",
                [H.HIDDEN]: "true"
              }, e), this.searchIcon.innerHTML = kt(), this.searchInput = tt("input", {
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
              }, e), this.searchClearButton = tt("button", {
                type: "button",
                class: `iti__search-clear ${R.HIDE}`,
                [H.LABEL]: a.clearSearchAriaLabel,
                tabindex: "-1"
              }, e), this.searchClearButton.innerHTML = qt(this.id), this.searchResultsA11yText = tt("span", {
                class: "iti__a11y-text"
              }, this.dropdownContent), this.searchNoResults = tt("div", {
                class: `iti__no-results ${R.HIDE}`,
                [H.HIDDEN]: "true"
              }, this.dropdownContent), this.searchNoResults.textContent = a.zeroSearchResults
            }
            _maybeUpdateInputPaddingAndReveal() {
              this.countryContainer && (this.updateInputPadding(), this.countryContainer.classList.remove(R.V_HIDE))
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
                  u ? this.hiddenInput = u : (this.hiddenInput = tt("input", {
                    type: "hidden",
                    name: c.phone
                  }), a.appendChild(this.hiddenInput))
                }
                if (c.country) {
                  const u = (s = this.telInput.form) == null ? void 0 : s.querySelector(`input[name="${c.country}"]`);
                  u ? this.hiddenInputCountry = u : (this.hiddenInputCountry = tt("input", {
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
                    [R.COUNTRY_ITEM]: !0
                  }),
                  o = tt("li", {
                    id: `iti-${this.id}__item-${n.iso2}`,
                    class: s,
                    tabindex: "-1",
                    role: "option",
                    [H.SELECTED]: "false"
                  });
                o.dataset.dialCode = n.dialCode, o.dataset.countryCode = n.iso2, n.nodeById[this.id] = o, this.options.showFlags && tt("div", {
                  class: `${R.FLAG} iti__${n.iso2}`
                }, o);
                const c = tt("span", {
                  class: "iti__country-name"
                }, o);
                c.textContent = n.name;
                const u = tt("span", {
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
                const x = s - u;
                e.scrollTop = C - x
              }
            }
            highlightListItem(a, e) {
              const n = this.highlightedItem;
              if (n && n.classList.remove(R.HIGHLIGHT), this.highlightedItem = a, this.highlightedItem && (this.highlightedItem.classList.add(R.HIGHLIGHT), this.options.countrySearch)) {
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
              e ? (this.highlightListItem(null, !1), this.searchNoResults && this.searchNoResults.classList.remove(R.HIDE)) : this.searchNoResults && this.searchNoResults.classList.add(R.HIDE), this.countryList.scrollTop = 0, this.updateSearchResultsA11yText()
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
              return D.filter(o => s.includes(o.iso2))
            } else if (n.length) {
              const s = n.map(o => o.toLowerCase());
              return D.filter(o => !s.includes(o.iso2))
            }
            return D
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
                    const x = d.substring(0, C),
                      ct = u.dialCode + x;
                    o(f, ct), o(u.iso2, ct)
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
          q = a => {
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
        for (const a of D) a.name = k[a.iso2];
        var Ne = 0,
          N = new Set(D.map(a => a.iso2)),
          P = a => N.has(a),
          et = class Gn {
            constructor(e, n = {}) {
              this.id = Ne++, this.options = {
                ...Tt,
                ...n
              }, Kt(this.options, k), this.ui = new ge(e, this.options, this.id), this.isAndroid = Gn._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = oe(this.options);
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
              Ht(this.countries, this.options), St(this.countries, this.options), q(this.countries)
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
                  geoIpLookup: x
                } = this.options,
                ct = C === Bt.AUTO && x;
              if (f && !d) this._updateCountryFromNumber(u);
              else if (!ct || e) {
                const st = C ? C.toLowerCase() : "";
                P(st) ? this._setCountry(st) : f && d ? this._setCountry(Mt.ISO2) : this._setCountry("")
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
                  this.ui.dropdownContent.classList.contains(R.HIDE) ? this.ui.telInput.focus() : u.preventDefault()
                },
                s = this.ui.telInput.closest("label");
              s && s.addEventListener("click", n, {
                signal: e
              });
              const o = () => {
                this.ui.dropdownContent.classList.contains(R.HIDE) && !this.ui.telInput.disabled && !this.ui.telInput.readOnly && this._openDropdown()
              };
              this.ui.selectedCountry.addEventListener("click", o, {
                signal: e
              });
              const c = u => {
                this.ui.dropdownContent.classList.contains(R.HIDE) && [at.ARROW_UP, at.ARROW_DOWN, at.SPACE, at.ENTER].includes(u.key) && (u.preventDefault(), u.stopPropagation(), this._openDropdown()), u.key === at.TAB && this._closeDropdown()
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
              if (e && !m.utils) {
                const c = () => {
                  var u;
                  (u = m.attachUtils(e)) == null || u.catch(() => {})
                };
                if (m.documentReady()) c();
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
              m.autoCountry ? this.handleAutoCountry() : m.startedLoadingAutoCountry || (m.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup((e = "") => {
                const n = e.toLowerCase();
                P(n) ? (m.autoCountry = n, setTimeout(() => X("handleAutoCountry"))) : (this._setInitialState(!0), X("rejectAutoCountryPromise"))
              }, () => {
                this._setInitialState(!0), X("rejectAutoCountryPromise")
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
              ft.ALPHA_UNICODE.test(this._getTelInputValue()) && (u = !0);
              const f = d => {
                const C = this._getTelInputValue();
                if (this.isAndroid && (d == null ? void 0 : d.data) === "+" && s && o && c) {
                  const B = this.ui.telInput.selectionStart || 0,
                    mt = C.substring(0, B - 1),
                    J = C.substring(B);
                  this._setTelInputValue(mt + J), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(C) && this._triggerCountryChange();
                const x = (d == null ? void 0 : d.data) && ft.NON_PLUS_NUMERIC.test(d.data),
                  ct = (d == null ? void 0 : d.inputType) === K.PASTE && C;
                x || ct && !e ? u = !0 : ft.NON_PLUS_NUMERIC.test(C) || (u = !1);
                const st = (d == null ? void 0 : d.detail) && d.detail.isSetNumber,
                  M = this.userNumeralSet === "ascii";
                if (n && !u && !st && M) {
                  const B = this.ui.telInput.selectionStart || 0,
                    J = C.substring(0, B).replace(ft.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    rt = (d == null ? void 0 : d.inputType) === K.DELETE_FWD,
                    nt = this._getFullNumber(),
                    Ft = De(nt, C, m.utils, this.selectedCountryData, this.options.separateDialCode),
                    Ut = Te(J, Ft, B, rt);
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
                        x = this._normaliseNumerals(u.key),
                        ct = /^[0-9]$/.test(x),
                        st = n ? ct : C || ct,
                        M = this.ui.telInput,
                        B = M.selectionStart,
                        mt = M.selectionEnd,
                        J = f.slice(0, B),
                        rt = f.slice(mt),
                        nt = J + u.key + rt,
                        Ft = this._getFullNumber(nt),
                        Ut = m.utils.getCoreNumber(Ft, this.selectedCountryData.iso2),
                        wt = this.maxCoreNumberLength && Ut.length > this.maxCoreNumberLength,
                        te = this._getNewCountryFromNumber(Ft) !== null;
                      (!st || wt && !te && !C) && u.preventDefault()
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
                    x = n.clipboardData.getData("text"),
                    ct = this._normaliseNumerals(x),
                    st = o === 0 && c > 0,
                    M = !u.startsWith("+") || st,
                    B = ct.replace(ft.NON_PLUS_NUMERIC_GLOBAL, ""),
                    mt = B.startsWith("+"),
                    J = B.replace(/\+/g, ""),
                    rt = mt && M ? `+${J}` : J;
                  let nt = f + rt + d;
                  if (nt.length > 5) {
                    let Ut = m.utils.getCoreNumber(nt, C);
                    for (; Ut.length === 0 && nt.length > 0;) nt = nt.slice(0, -1), Ut = m.utils.getCoreNumber(nt, C);
                    if (!Ut) return;
                    if (this.maxCoreNumberLength && Ut.length > this.maxCoreNumberLength)
                      if (s.selectionEnd === u.length) {
                        const wt = Ut.length - this.maxCoreNumberLength;
                        nt = nt.slice(0, nt.length - wt)
                      } else return
                  }
                  this._setTelInputValue(nt);
                  const Ft = o + rt.length;
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
              if (this.dropdownAbortController = new AbortController, e && (this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`), this.ui.dropdownContent.classList.remove(R.HIDE), this.ui.selectedCountry.setAttribute(H.EXPANDED, "true"), this._setDropdownPosition(), n) {
                const s = this.ui.countryList.firstElementChild;
                s && (this.ui.highlightListItem(s, !1), this.ui.countryList.scrollTop = 0), this.ui.searchInput.focus()
              }
              this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(R.ARROW_UP), this._trigger(j.OPEN_COUNTRY_DROPDOWN)
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
                const o = (c = s.target) == null ? void 0 : c.closest(`.${R.COUNTRY_ITEM}`);
                o && this.ui.highlightListItem(o, !1)
              };
              this.ui.countryList.addEventListener("mouseover", n, {
                signal: e
              })
            }
            _bindDropdownCountryClickListener(e) {
              const n = s => {
                var c;
                const o = (c = s.target) == null ? void 0 : c.closest(`.${R.COUNTRY_ITEM}`);
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
                [at.ARROW_UP, at.ARROW_DOWN, at.ENTER, at.ESC].includes(c.key) && (c.preventDefault(), c.stopPropagation(), c.key === at.ARROW_UP || c.key === at.ARROW_DOWN ? this._handleUpDownKey(c.key) : c.key === at.ENTER ? this._handleEnterKey() : c.key === at.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && ft.HIDDEN_SEARCH_CHAR.test(c.key) && (c.stopPropagation(), s && clearTimeout(s), n += c.key.toLowerCase(), this._searchForCountry(n), s = setTimeout(() => {
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
                this._filterCountriesByQuery(u), this.ui.searchInput.value ? this.ui.searchClearButton.classList.remove(R.HIDE) : this.ui.searchClearButton.classList.add(R.HIDE)
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
              let n = e === at.ARROW_UP ? (s = this.ui.highlightedItem) == null ? void 0 : s.previousElementSibling : (o = this.ui.highlightedItem) == null ? void 0 : o.nextElementSibling;
              !n && this.ui.countryList.childElementCount > 1 && (n = e === at.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), n && (this.ui.scrollTo(n), this.ui.highlightListItem(n, !1))
            }
            _handleEnterKey() {
              this.ui.highlightedItem && this._selectListItem(this.ui.highlightedItem)
            }
            _updateValFromNumber(e) {
              let n = e;
              if (this.options.formatOnDisplay && m.utils && this.selectedCountryData) {
                const s = this.options.nationalMode || !n.startsWith("+") && !this.options.separateDialCode,
                  {
                    NATIONAL: o,
                    INTERNATIONAL: c
                  } = m.utils.numberFormat,
                  u = s ? o : c;
                n = m.utils.formatNumber(n, this.selectedCountryData.iso2, u)
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
                  areaCodes: ct,
                  priority: st
                } = this.selectedCountryData;
                if (ct) {
                  const rt = ct.map(nt => `${c}${nt}`);
                  for (const nt of rt)
                    if (f.startsWith(nt)) return null
                }
                const B = ct && !(st === 0) && f.length > d.length,
                  mt = o && C.includes(o) && !B,
                  J = o === C[0];
                if (!mt && !J) return C[0]
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
                const f = e && s ? `${R.FLAG} iti__${e}` : `${R.FLAG} ${R.GLOBE}`;
                let d, C;
                if (e) {
                  const {
                    name: x,
                    dialCode: ct
                  } = this.selectedCountryData;
                  C = x, d = o.selectedCountryAriaLabel.replace("${countryName}", x).replace("${dialCode}", `+${ct}`)
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
              if (e && m.utils)
                if (o) {
                  const c = m.utils.numberType[n];
                  let u = m.utils.getExampleNumber(o, !1, c, !0),
                    f = u;
                  for (; m.utils.isPossibleNumber(u, o, s);) f = u, u += "0";
                  const d = m.utils.getCoreNumber(f, o);
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
              if (m.utils && c) {
                const u = m.utils.numberType[n];
                let f = this.selectedCountryData.iso2 ? m.utils.getExampleNumber(this.selectedCountryData.iso2, s, u) : "";
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
              this.ui.dropdownContent.classList.contains(R.HIDE) || (this.ui.dropdownContent.classList.add(R.HIDE), this.ui.selectedCountry.setAttribute(H.EXPANDED, "false"), this.options.countrySearch && (this.ui.searchInput.removeAttribute(H.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(R.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(R.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(j.CLOSE_COUNTRY_DROPDOWN))
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
              this._trigger(j.COUNTRY_CHANGE)
            }
            handleAutoCountry() {
              this.options.initialCountry === Bt.AUTO && m.autoCountry && (this.defaultCountry = m.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(R.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
            }
            handleUtils() {
              if (m.utils) {
                const e = this._getTelInputValue();
                e && this._updateValFromNumber(e), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())
              }
              this.resolveUtilsScriptPromise()
            }
            destroy() {
              this.ui.telInput && (this.options.allowDropdown && this._closeDropdown(), this.abortController.abort(), this.abortController = null, this.ui.destroy(), m.instances instanceof Map ? m.instances.delete(this.id) : delete m.instances[this.id])
            }
            getExtension() {
              return m.utils ? m.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
            }
            getNumber(e) {
              if (m.utils) {
                const {
                  iso2: n
                } = this.selectedCountryData, s = this._getFullNumber(), o = m.utils.formatNumber(s, n, e);
                return this._mapAsciiToUserNumerals(o)
              }
              return ""
            }
            getNumberType() {
              return m.utils ? m.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : _t.UNKNOWN_NUMBER_TYPE
            }
            getSelectedCountryData() {
              return this.selectedCountryData
            }
            getValidationError() {
              if (m.utils) {
                const {
                  iso2: e
                } = this.selectedCountryData;
                return m.utils.getValidationError(this._getFullNumber(), e)
              }
              return _t.UNKNOWN_VALIDATION_ERROR
            }
            isValidNumber() {
              const {
                dialCode: e,
                iso2: n
              } = this.selectedCountryData;
              if (e === Wt.DIAL_CODE && m.utils) {
                const s = this._getFullNumber(),
                  o = m.utils.getCoreNumber(s, n);
                if (o[0] === Wt.MOBILE_PREFIX && o.length !== Wt.MOBILE_CORE_LENGTH) return !1
              }
              return this._validateNumber(!1)
            }
            isValidNumberPrecise() {
              return this._validateNumber(!0)
            }
            _utilsIsPossibleNumber(e) {
              return m.utils ? m.utils.isPossibleNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            _validateNumber(e) {
              if (!m.utils) return null;
              if (!this.selectedCountryData.iso2) return !1;
              const n = u => e ? this._utilsIsValidNumber(u) : this._utilsIsPossibleNumber(u),
                s = this._getFullNumber(),
                o = s.search(ft.ALPHA_UNICODE);
              if (o > -1 && !this.options.allowPhonewords) {
                const u = s.substring(0, o),
                  f = n(u),
                  d = n(s);
                return f && d
              }
              return n(s)
            }
            _utilsIsValidNumber(e) {
              return m.utils ? m.utils.isValidNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            setCountry(e) {
              const n = e == null ? void 0 : e.toLowerCase();
              if (!P(n)) throw new Error(`Invalid country code: '${n}'`);
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
              this._updateValFromNumber(n), s && this._triggerCountryChange(), this._trigger(j.INPUT, {
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
          it = a => {
            if (!m.utils && !m.startedLoadingUtilsScript) {
              let e;
              if (typeof a == "function") try {
                e = Promise.resolve(a())
              } catch (n) {
                return Promise.reject(n)
              } else return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof a}`));
              return m.startedLoadingUtilsScript = !0, e.then(n => {
                const s = n == null ? void 0 : n.default;
                if (!s || typeof s != "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                return m.utils = s, X("handleUtils"), !0
              }).catch(n => {
                throw X("rejectUtilsScriptPromise", n), n
              })
            }
            return null
          },
          X = (a, ...e) => {
            Object.values(m.instances).forEach(n => {
              const s = n[a];
              typeof s == "function" && s.apply(n, e)
            })
          },
          m = Object.assign((a, e) => {
            const n = new et(a, e);
            return m.instances[n.id] = n, a.iti = n, n
          }, {
            defaults: Tt,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => D,
            getInstance: a => {
              const e = a.dataset.intlTelInputId;
              return e ? m.instances[e] : null
            },
            instances: {},
            attachUtils: it,
            startedLoadingUtilsScript: !1,
            startedLoadingAutoCountry: !1,
            version: "25.15.1"
          }),
          Dt = m;
        return W(S)
      })();
      return t.default
    })
  })(un)), un.exports
}
var eo = to();
const no = fi(eo);
var io = gt('<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>'),
  so = gt('<span class="w-8"> </span>'),
  oo = gt('<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary w-full"> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>', 1),
  ao = gt('<span class="w-8"> </span>'),
  ro = gt('<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-3 flex flex-col items-center gap-1"><button class="btn btn-ghost w-max"> <!></button> <button class="text-primary cursor-pointer text-xs"> </button></div>', 1),
  lo = gt('<div class="flex h-full w-full flex-col items-center"><!></div>');

function uo(l, t) {
  Zt(t, !0);
  let r = ot(!0),
    h = ot(""),
    p = ot(0),
    b = ot(!1);
  const I = w(() => i(p) > 0 || i(b));
  let A = ot(!1),
    W = ot(""),
    S = ot(void 0);
  const y = w(() => {
    var E;
    return `phone:${(E=Rn.data)==null?void 0:E.id}`
  });
  Rt(() => {
    const E = localStorage.getItem(i(y));
    E && v(h, E, !0)
  }), me(() => {
    sn.getOtpCooldown().then(j => {
      v(p, j.cooldownMs, !0)
    }).catch(j => {
      ye.error(j.message)
    }).finally(() => {
      v(r, !1)
    });
    const E = 1e3,
      k = setInterval(() => {
        v(p, Math.max(0, i(p) - E), !0)
      }, E);
    return () => {
      clearInterval(k)
    }
  });
  async function L(E) {
    try {
      v(b, !0);
      const k = await sn.sendOtp(E);
      ye.info(`${Pi()} ${k.phone}`), v(h, k.phone, !0), v(p, k.cooldownMs, !0), localStorage.setItem(i(y), i(h))
    } catch (k) {
      ye.error(k.message)
    } finally {
      v(b, !1)
    }
  }
  Rt(() => {
    i(W).length === 6 && (v(A, !0), (async () => {
      try {
        await sn.verifyChallenge({
          type: "otp",
          code: i(W)
        }), ye.success(wi()), localStorage.removeItem(i(y)), t.onsuccess(i(h))
      } catch (E) {
        ye.error(E.message)
      } finally {
        v(W, ""), v(A, !1)
      }
    })())
  });
  var D = lo(),
    G = Z(D);
  {
    var O = E => {
        var k = io();
        _(E, k)
      },
      $ = E => {
        var k = oo(),
          j = V(k),
          R = Z(j),
          at = Z(R),
          K = Z(at, !0);
        Y(at);
        var ft = bt(at, 2),
          Nt = Z(ft, !0);
        Y(ft), Y(R);
        var _t = bt(R, 2),
          It = Z(_t);
        kn(It, () => H => (v(S, no(H, {
          strictMode: !0,
          initialCountry: "br",
          loadUtils: () => Mn(() => import("../chunks/DjsSXLcb.js"), [], import.meta.url),
          containerClass: "w-full",
          dropdownContainer: document.body
        })), () => {
          var lt;
          (lt = i(S)) == null || lt.destroy()
        }));
        var Et = bt(It, 2),
          Wt = Z(Et),
          Mt = bt(Wt);
        {
          var jt = H => {
            var lt = so(),
              dt = Z(lt);
            Y(lt), vt(Tt => Pt(dt, `(${Tt??""})`), [() => Sn(i(p))]), _(H, lt)
          };
          ut(Mt, H => {
            i(p) > 0 && H(jt)
          })
        }
        Y(Et), Y(_t), Y(j);
        var Bt = bt(j, 2),
          ne = Z(Bt, !0);
        Y(Bt), vt((H, lt, dt, Tt) => {
          Pt(K, H), Pt(Nt, lt), Et.disabled = i(I), Pt(Wt, `${dt??""} `), Pt(ne, Tt)
        }, [() => Ii(), () => Ei(), () => Di(), () => Ti()]), $e("submit", _t, async () => {
          var lt;
          if (i(I)) return;
          if (!((lt = i(S)) != null && lt.isValidNumber())) {
            ye.error(Si());
            return
          }
          const H = i(S).getNumber();
          await L(H)
        }), _(E, k)
      },
      F = E => {
        var k = ro(),
          j = V(k),
          R = Z(j),
          at = Z(R, !0);
        Y(R);
        var K = bt(R, 2),
          ft = Z(K);
        Y(K), Y(j);
        var Nt = bt(j, 2),
          _t = Z(Nt);
        {
          const H = (lt, dt) => {
            let Tt = () => dt == null ? void 0 : dt().cells;
            var Kt = Q(),
              Yt = V(Kt);
            Jt(Yt, () => Ns, (se, T) => {
              T(se, {
                class: "border-primary",
                children: (U, yt) => {
                  var tt = Q(),
                    kt = V(tt);
                  Ye(kt, 16, Tt, qt => qt, (qt, ge) => {
                    var oe = Q(),
                      Ht = V(oe);
                    Jt(Ht, () => Zs, (Vt, St) => {
                      St(Vt, {
                        get cell() {
                          return ge
                        },
                        class: "border-base-content/20 size-11 sm:size-12"
                      })
                    }), _(qt, oe)
                  }), _(U, tt)
                },
                $$slots: {
                  default: !0
                }
              })
            }), _(lt, Kt)
          };
          Jt(_t, () => $s, (lt, dt) => {
            dt(lt, {
              maxlength: 6,
              class: "mx-auto w-max",
              get disabled() {
                return i(A)
              },
              get value() {
                return i(W)
              },
              set value(Tt) {
                v(W, Tt, !0)
              },
              children: H,
              $$slots: {
                default: !0
              }
            })
          })
        }
        Y(Nt);
        var It = bt(Nt, 2),
          Et = Z(It),
          Wt = Z(Et),
          Mt = bt(Wt);
        {
          var jt = H => {
            var lt = ao(),
              dt = Z(lt);
            Y(lt), vt(Tt => Pt(dt, `(${Tt??""})`), [() => Sn(i(p))]), _(H, lt)
          };
          ut(Mt, H => {
            i(p) > 0 && H(jt)
          })
        }
        Y(Et);
        var Bt = bt(Et, 2),
          ne = Z(Bt, !0);
        Y(Bt), Y(It), vt((H, lt, dt, Tt) => {
          Pt(at, H), Pt(ft, `${lt??""} ${i(h)??""}`), Et.disabled = i(I), Pt(Wt, `${dt??""} `), Pt(ne, Tt)
        }, [() => Ni(), () => Li(), () => xi(), () => Ai()]), he("click", Et, async () => {
          await L(i(h))
        }), he("click", Bt, () => {
          v(h, "")
        }), _(E, k)
      };
    ut(G, E => {
      i(r) ? E(O) : i(h) ? E(F, !1) : E($, 1)
    })
  }
  Y(D), _(l, D), $t()
}
An(["click"]);
var co = gt('<dialog class="modal"><div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function ho(l, t) {
  Zt(t, !0);
  const r = w(() => on.current !== null),
    h = w(() => {
      var y;
      return (y = on.current) == null ? void 0 : y.tier
    });
  var p = co(),
    b = Z(p);
  let I;
  var A = Z(b),
    W = Z(A);
  {
    var S = y => {
      var L = Q(),
        D = V(L);
      yi(D, () => on.errorCount, G => {
        var O = Q(),
          $ = V(O);
        {
          var F = j => {
              {
                let R = w(() => si.trim());
                Oi(j, {
                  get siteKey() {
                    return i(R)
                  },
                  callback: at => En(at),
                  errorCallback: () => In()
                })
              }
            },
            E = j => {
              {
                let R = w(() => oi.trim());
                Ts(j, {
                  get siteKey() {
                    return i(R)
                  },
                  callback: at => En(at),
                  errorCallback: () => In()
                })
              }
            },
            k = j => {
              uo(j, {
                onsuccess: () => ii()
              })
            };
          ut($, j => {
            i(h) === 2 ? j(F) : i(h) === 3 ? j(E, 1) : i(h) === 4 && j(k, 2)
          })
        }
        _(G, O)
      }), _(y, L)
    };
    ut(W, y => {
      i(r) && y(S)
    })
  }
  Y(A), Y(b), On(2), Y(p), kn(p, () => y => {
    Rt(() => {
      i(r) ? y.show() : y.close()
    })
  }), vt(() => I = ee(b, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, I, {
    "h-80": i(h) === 4
  })), $e("close", p, () => ni()), _(l, p), $t()
}
var fo = gt('<span class="hidden"> </span> <!> <!> <!>', 1);

function Bo(l, t) {
  Zt(t, !0), me(() => {
    ai(), ri();
    const y = 3600 * 1e3,
      L = gi(async () => {
        await Rn.refresh()
      }, {
        interval: y,
        immediate: !0
      });
    Object.assign(window, {
      eval: li(eval, function() {}, async () => {
        await fetch(ui + "/me", {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + crypto.randomUUID()
          }
        })
      })
    });
    let D = setInterval(() => {
      pi()
    }, 5e3);
    return () => {
      clearTimeout(D), L()
    }
  });
  const r = "muted";
  me(() => {
    cn.muted = localStorage.getItem(r) === "1"
  }), Rt(() => {
    {
      const y = cn.muted;
      document.querySelectorAll("audio").forEach(L => {
        L.muted = y
      });
      for (const L of Object.values(mi).filter(D => D instanceof Audio)) L.muted = y, y || (L.volume = .3);
      localStorage.setItem(r, Number(y).toString())
    }
  }), me(() => {});
  var h = fo();
  $e("beforeunload", Zn, () => {
    vi()
  });
  var p = V(h),
    b = Z(p);
  Y(p);
  var I = bt(p, 2);
  {
    var A = y => {
      var L = Q(),
        D = V(L);
      Ot(D, () => t.children), _(y, L)
    };
    ut(I, y => {
      y(A, !1)
    })
  }
  var W = bt(I, 2);
  ho(W, {});
  var S = bt(W, 2);
  Is(S, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), vt(() => Pt(b, `Version: ${ti}`)), _(l, h), $t()
}
export {
  Bo as component, Mo as universal
};