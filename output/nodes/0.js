var Be = n => {
  throw TypeError(n)
};
var De = (n, t, r) => t.has(n) || Be("Cannot " + r);
var ft = (n, t, r) => (De(n, t, "read from private field"), r ? r.call(n) : t.get(n)),
  Kt = (n, t, r) => t.has(n) ? Be("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, r),
  Wt = (n, t, r, B) => (De(n, t, "write to private field"), B ? B.call(n, r) : t.set(n, r), r);
import "../chunks/Bd9SjhhN.js";
import {
  o as Gt
} from "../chunks/DbGItS9L.js";
import {
  p as ie,
  d as $,
  a as s,
  r as Z,
  t as p,
  b as se,
  c as tt,
  bH as oe,
  T as Ue,
  S as Ee,
  U as je,
  e as k,
  g as Pe,
  C as mt,
  h as d,
  i as e,
  G as Zt,
  s as Mt,
  A as Rt,
  D as Oe,
  u as v,
  bp as vt,
  z as S,
  f as x,
  y as ze,
  B as Ae,
  J as Jt,
  x as Ve,
  L as Ke
} from "../chunks/DOAgMrHD.js";
import {
  c as We,
  s as Yt
} from "../chunks/BvtnAOCY.js";
import {
  i as P
} from "../chunks/DWlonM8C.js";
import {
  v as Ye
} from "../chunks/EYEoAAQ9.js";
import {
  g as Me,
  P as Ge
} from "../chunks/C17y34tO.js";
import {
  k as W,
  l as wt,
  n as Ze,
  o as Xe,
  u as qe,
  p as Je,
  q as Qe,
  t as pe
} from "../chunks/CT2BteVo.js";
import {
  A as $e,
  s as tn,
  c as en
} from "../chunks/SuoYoDnC.js";
import "../chunks/XUZnH5Sm.js";
import {
  L as nn
} from "../chunks/Bpbc5lxn.js";
import "../chunks/-EY-P68S.js";
import {
  m as an
} from "../chunks/Bx_q4FPw.js";
import {
  e as Te
} from "../chunks/BgvyQ0lW.js";
import {
  s as rt
} from "../chunks/Cd_y7AyI.js";
import {
  c as xt,
  a as It,
  s as A,
  e as we,
  d as on,
  S as sn
} from "../chunks/CpI0CI6P.js";
import {
  b as He
} from "../chunks/ByDusT_w.js";
import {
  p as O,
  s as xe,
  r as rn
} from "../chunks/BElcPT_j.js";
import {
  c as Ot
} from "../chunks/DXxjWw9q.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "7a2da3ca311c6628f40e8aafbf8f9127c2b42592"
    };
    var t = new n.Error().stack;
    t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "8706759e-b96f-4e3f-9ad0-af95e8d7b61c", n._sentryDebugIdIdentifier = "sentry-dbid-8706759e-b96f-4e3f-9ad0-af95e8d7b61c")
  } catch {}
})();
const ln = !0,
  xa = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: ln
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  cn = Array(12).fill(0);
var dn = tt('<div class="sonner-loading-bar"></div>'),
  un = tt('<div><div class="sonner-spinner"></div></div>');

function fn(n, t) {
  ie(t, !0);
  var r = un(),
    B = $(r);
  Te(B, 23, () => cn, (U, X) => `spinner-bar-${X}`, (U, X) => {
    var q = dn();
    s(U, q)
  }), Z(B), Z(r), p(U => {
    It(r, 1, U), A(r, "data-visible", t.visible)
  }, [() => xt(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), s(n, r), se()
}
const vn = typeof window < "u" ? window : void 0;

function mn(n) {
  let t = n.activeElement;
  for (; t != null && t.shadowRoot;) {
    const r = t.shadowRoot.activeElement;
    if (r === t) break;
    t = r
  }
  return t
}
var Nt, Xt;
class gn {
  constructor(t = {}) {
    Kt(this, Nt);
    Kt(this, Xt);
    const {
      window: r = vn,
      document: B = r == null ? void 0 : r.document
    } = t;
    r !== void 0 && (Wt(this, Nt, B), Wt(this, Xt, We(U => {
      const X = oe(r, "focusin", U),
        q = oe(r, "focusout", U);
      return () => {
        X(), q()
      }
    })))
  }
  get current() {
    var t;
    return (t = ft(this, Xt)) == null || t.call(this), ft(this, Nt) ? mn(ft(this, Nt)) : null
  }
}
Nt = new WeakMap, Xt = new WeakMap;
new gn;
var qt, Tt;
class hn {
  constructor(t) {
    Kt(this, qt);
    Kt(this, Tt);
    Wt(this, qt, t), Wt(this, Tt, Symbol(t))
  }
  get key() {
    return ft(this, Tt)
  }
  exists() {
    return Ue(ft(this, Tt))
  }
  get() {
    const t = Ee(ft(this, Tt));
    if (t === void 0) throw new Error(`Context "${ft(this,qt)}" not found`);
    return t
  }
  getOr(t) {
    const r = Ee(ft(this, Tt));
    return r === void 0 ? t : r
  }
  set(t) {
    return je(ft(this, Tt), t)
  }
}
qt = new WeakMap, Tt = new WeakMap;
const bn = new hn("<Toaster/>");

function ne(n) {
  return n.label !== void 0
}

function yn() {
  let n = k(Pe(typeof document < "u" ? document.hidden : !1));
  return mt(() => oe(document, "visibilitychange", () => {
    d(n, document.hidden, !0)
  })), {
    get current() {
      return e(n)
    }
  }
}
const Ce = 4e3,
  _n = 14,
  wn = 45,
  xn = 200,
  In = .05,
  Tn = {
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

function Sn(n) {
  const [t, r] = n.split("-"), B = [];
  return t && B.push(t), r && B.push(r), B
}

function Le(n) {
  return 1 / (1.5 + Math.abs(n) / 20)
}
var Bn = tt("<div><!></div>"),
  Dn = tt('<button data-close-button=""><!></button>'),
  En = tt('<div data-icon=""><!> <!></div>'),
  An = tt('<div data-description=""><!></div>'),
  Mn = tt('<button data-button="" data-cancel=""> </button>'),
  Cn = tt('<button data-button=""> </button>'),
  Ln = tt('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  Pn = tt('<li data-sonner-toast=""><!> <!></li>');

function On(n, t) {
  ie(t, !0);
  const r = o => {
    var l = S(),
      y = x(l);
    {
      var _ = m => {
          var j = Bn(),
            et = $(j);
          rt(et, () => t.loadingIcon), Z(j), p(z => {
            It(j, 1, z), A(j, "data-visible", e(I) === "loading")
          }, [() => {
            var z, N, u;
            return xt(wt((z = e(at)) == null ? void 0 : z.loader, (u = (N = t.toast) == null ? void 0 : N.classes) == null ? void 0 : u.loader, "sonner-loader"))
          }]), s(m, j)
        },
        w = m => {
          {
            let j = v(() => {
                var z, N;
                return wt((z = e(at)) == null ? void 0 : z.loader, (N = t.toast.classes) == null ? void 0 : N.loader)
              }),
              et = v(() => e(I) === "loading");
            fn(m, {
              get class() {
                return e(j)
              },
              get visible() {
                return e(et)
              }
            })
          }
        };
      P(y, m => {
        t.loadingIcon ? m(_) : m(w, !1)
      })
    }
    s(o, l)
  };
  let B = O(t, "cancelButtonStyle", 3, ""),
    U = O(t, "actionButtonStyle", 3, ""),
    X = O(t, "descriptionClass", 3, ""),
    q = O(t, "unstyled", 3, !1),
    St = O(t, "defaultRichColors", 3, !1);
  const Bt = {
    ...Tn
  };
  let M = k(!1),
    L = k(!1),
    Dt = k(!1),
    Ft = k(!1),
    Ut = k(!1),
    J = k(0),
    gt = k(0),
    Ht = t.toast.duration || t.duration || Ce,
    nt = k(void 0),
    lt = k(null),
    jt = k(null);
  const re = v(() => t.index === 0),
    le = v(() => t.index + 1 <= t.visibleToasts),
    I = v(() => t.toast.type),
    ct = v(() => t.toast.dismissable !== !1),
    Ct = v(() => t.toast.class || ""),
    Et = v(() => t.toast.descriptionClass || ""),
    dt = v(() => W.heights.findIndex(o => o.toastId === t.toast.id) || 0),
    Lt = v(() => t.toast.closeButton ?? t.closeButton),
    ce = v(() => t.toast.duration ?? t.duration ?? Ce);
  let At = null;
  const Qt = v(() => t.position.split("-")),
    de = v(() => W.heights.reduce((o, l, y) => y >= e(dt) ? o : o + l.height, 0)),
    ue = yn(),
    fe = v(() => t.toast.invert || t.invert),
    zt = v(() => e(I) === "loading"),
    at = v(() => ({
      ...Bt,
      ...t.classes
    })),
    ve = v(() => t.toast.title),
    Pt = v(() => t.toast.description);
  let Vt = k(0),
    pt = k(0);
  const i = v(() => Math.round(e(dt) * _n + e(de)));
  mt(() => {
    e(ve), e(Pt);
    let o;
    t.expanded || t.expandByDefault ? o = 1 : o = 1 - t.index * In;
    const l = Zt(() => e(nt));
    if (l === void 0) return;
    l.style.setProperty("height", "auto");
    const y = l.offsetHeight,
      _ = l.getBoundingClientRect().height,
      w = Math.round(_ / o + Number.EPSILON & 100) / 100;
    l.style.removeProperty("height");
    let m;
    Math.abs(w - y) < 1 ? m = w : m = y, d(gt, m, !0), Zt(() => {
      W.setHeight({
        toastId: t.toast.id,
        height: m
      })
    })
  });

  function c() {
    d(L, !0), d(J, e(i), !0), W.removeHeight(t.toast.id), setTimeout(() => {
      W.remove(t.toast.id)
    }, xn)
  }
  let R;
  const ht = v(() => t.toast.promise && e(I) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function ot() {
    d(Vt, new Date().getTime(), !0), R = setTimeout(() => {
      var o, l;
      (l = (o = t.toast).onAutoClose) == null || l.call(o, t.toast), c()
    }, Ht)
  }

  function kt() {
    if (e(pt) < e(Vt)) {
      const o = new Date().getTime() - e(Vt);
      Ht = Ht - o
    }
    d(pt, new Date().getTime(), !0)
  }
  mt(() => {
    t.toast.updated && (clearTimeout(R), Ht = e(ce), ot())
  }), mt(() => (e(ht) || (t.expanded || t.interacting || ue.current ? kt() : ot()), () => clearTimeout(R))), Gt(() => {
    var l;
    d(M, !0);
    const o = (l = e(nt)) == null ? void 0 : l.getBoundingClientRect().height;
    return d(gt, o, !0), W.setHeight({
      toastId: t.toast.id,
      height: o
    }), () => {
      W.removeHeight(t.toast.id)
    }
  }), mt(() => {
    t.toast.delete && Zt(() => {
      var o, l;
      c(), (l = (o = t.toast).onDismiss) == null || l.call(o, t.toast)
    })
  });
  const Se = o => {
      if (e(zt)) return;
      d(J, e(i), !0);
      const l = o.target;
      l.setPointerCapture(o.pointerId), l.tagName !== "BUTTON" && (d(Dt, !0), At = {
        x: o.clientX,
        y: o.clientY
      })
    },
    $t = () => {
      var m, j, et, z, N, u;
      if (e(Ft) || !e(ct)) return;
      At = null;
      const o = Number(((m = e(nt)) == null ? void 0 : m.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        l = Number(((j = e(nt)) == null ? void 0 : j.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        y = new Date().getTime() - 0,
        _ = e(lt) === "x" ? o : l,
        w = Math.abs(_) / y;
      if (Math.abs(_) >= wn || w > .11) {
        d(J, e(i), !0), (z = (et = t.toast).onDismiss) == null || z.call(et, t.toast), e(lt) === "x" ? d(jt, o > 0 ? "right" : "left", !0) : d(jt, l > 0 ? "down" : "up", !0), c(), d(Ft, !0);
        return
      } else(N = e(nt)) == null || N.style.setProperty("--swipe-amount-x", "0px"), (u = e(nt)) == null || u.style.setProperty("--swipe-amount-y", "0px");
      d(Ut, !1), d(Dt, !1), d(lt, null)
    },
    ut = o => {
      var j, et, z;
      if (!At || !e(ct) || (((j = window.getSelection()) == null ? void 0 : j.toString().length) ?? -1) > 0) return;
      const y = o.clientY - At.y,
        _ = o.clientX - At.x,
        w = t.swipeDirections ?? Sn(t.position);
      !e(lt) && (Math.abs(_) > 1 || Math.abs(y) > 1) && d(lt, Math.abs(_) > Math.abs(y) ? "x" : "y", !0);
      let m = {
        x: 0,
        y: 0
      };
      if (e(lt) === "y") {
        if (w.includes("top") || w.includes("bottom"))
          if (w.includes("top") && y < 0 || w.includes("bottom") && y > 0) m.y = y;
          else {
            const N = y * Le(y);
            m.y = Math.abs(N) < Math.abs(y) ? N : y
          }
      } else if (e(lt) === "x" && (w.includes("left") || w.includes("right")))
        if (w.includes("left") && _ < 0 || w.includes("right") && _ > 0) m.x = _;
        else {
          const N = _ * Le(_);
          m.x = Math.abs(N) < Math.abs(_) ? N : _
        }(Math.abs(m.x) > 0 || Math.abs(m.y) > 0) && d(Ut, !0), (et = e(nt)) == null || et.style.setProperty("--swipe-amount-x", `${m.x}px`), (z = e(nt)) == null || z.style.setProperty("--swipe-amount-y", `${m.y}px`)
    },
    bt = () => {
      d(Dt, !1), d(lt, null), At = null
    },
    Q = v(() => t.toast.icon ? t.toast.icon : e(I) === "success" ? t.successIcon : e(I) === "error" ? t.errorIcon : e(I) === "warning" ? t.warningIcon : e(I) === "info" ? t.infoIcon : e(I) === "loading" ? t.loadingIcon : null);
  var g = Pn();
  A(g, "tabindex", 0);
  let te;
  var me = $(g);
  {
    var ge = o => {
      var l = Dn(),
        y = $(l);
      rt(y, () => t.closeIcon ?? vt), Z(l), p(_ => {
        A(l, "aria-label", t.closeButtonAriaLabel), A(l, "data-disabled", e(zt)), It(l, 1, _)
      }, [() => {
        var _, w, m;
        return xt(wt((_ = e(at)) == null ? void 0 : _.closeButton, (m = (w = t.toast) == null ? void 0 : w.classes) == null ? void 0 : m.closeButton))
      }]), Rt("click", l, () => {
        var _, w;
        e(zt) || !e(ct) || (c(), (w = (_ = t.toast).onDismiss) == null || w.call(_, t.toast))
      }), s(o, l)
    };
    P(me, o => {
      e(Lt) && !t.toast.component && e(I) !== "loading" && t.closeIcon !== null && o(ge)
    })
  }
  var he = Mt(me, 2);
  {
    var be = o => {
        const l = v(() => t.toast.component);
        var y = S(),
          _ = x(y);
        Ot(_, () => e(l), (w, m) => {
          m(w, xe(() => t.toast.componentProps, {
            closeToast: c
          }))
        }), s(o, y)
      },
      ye = o => {
        var l = Ln(),
          y = x(l);
        {
          var _ = h => {
            var a = En(),
              T = $(a);
            {
              var H = f => {
                var b = S(),
                  F = x(b);
                {
                  var D = V => {
                      var ee = S(),
                        _e = x(ee);
                      Ot(_e, () => t.toast.icon, (K, G) => {
                        G(K, {})
                      }), s(V, ee)
                    },
                    E = V => {
                      r(V)
                    };
                  P(F, V => {
                    t.toast.icon ? V(D) : V(E, !1)
                  })
                }
                s(f, b)
              };
              P(T, f => {
                (t.toast.promise || e(I) === "loading") && f(H)
              })
            }
            var yt = Mt(T, 2);
            {
              var C = f => {
                var b = S(),
                  F = x(b);
                {
                  var D = K => {
                      var G = S(),
                        _t = x(G);
                      Ot(_t, () => t.toast.icon, (Ne, Fe) => {
                        Fe(Ne, {})
                      }), s(K, G)
                    },
                    E = K => {
                      var G = S(),
                        _t = x(G);
                      rt(_t, () => t.successIcon ?? vt), s(K, G)
                    },
                    V = K => {
                      var G = S(),
                        _t = x(G);
                      rt(_t, () => t.errorIcon ?? vt), s(K, G)
                    },
                    ee = K => {
                      var G = S(),
                        _t = x(G);
                      rt(_t, () => t.warningIcon ?? vt), s(K, G)
                    },
                    _e = K => {
                      var G = S(),
                        _t = x(G);
                      rt(_t, () => t.infoIcon ?? vt), s(K, G)
                    };
                  P(F, K => {
                    t.toast.icon ? K(D) : e(I) === "success" ? K(E, 1) : e(I) === "error" ? K(V, 2) : e(I) === "warning" ? K(ee, 3) : e(I) === "info" && K(_e, 4)
                  })
                }
                s(f, b)
              };
              P(yt, f => {
                t.toast.type !== "loading" && f(C)
              })
            }
            Z(a), p(f => It(a, 1, f), [() => {
              var f, b, F;
              return xt(wt((f = e(at)) == null ? void 0 : f.icon, (F = (b = t.toast) == null ? void 0 : b.classes) == null ? void 0 : F.icon))
            }]), s(h, a)
          };
          P(y, h => {
            (e(I) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (e(Q) !== null || t.toast.icon) && h(_)
          })
        }
        var w = Mt(y, 2),
          m = $(w),
          j = $(m);
        {
          var et = h => {
            var a = S(),
              T = x(a);
            {
              var H = C => {
                  const f = v(() => t.toast.title);
                  var b = S(),
                    F = x(b);
                  Ot(F, () => e(f), (D, E) => {
                    E(D, xe(() => t.toast.componentProps))
                  }), s(C, b)
                },
                yt = C => {
                  var f = Ae();
                  p(() => Yt(f, t.toast.title)), s(C, f)
                };
              P(T, C => {
                typeof t.toast.title != "string" ? C(H) : C(yt, !1)
              })
            }
            s(h, a)
          };
          P(j, h => {
            t.toast.title && h(et)
          })
        }
        Z(m);
        var z = Mt(m, 2);
        {
          var N = h => {
            var a = An(),
              T = $(a);
            {
              var H = C => {
                  const f = v(() => t.toast.description);
                  var b = S(),
                    F = x(b);
                  Ot(F, () => e(f), (D, E) => {
                    E(D, xe(() => t.toast.componentProps))
                  }), s(C, b)
                },
                yt = C => {
                  var f = Ae();
                  p(() => Yt(f, t.toast.description)), s(C, f)
                };
              P(T, C => {
                typeof t.toast.description != "string" ? C(H) : C(yt, !1)
              })
            }
            Z(a), p(C => It(a, 1, C), [() => {
              var C, f;
              return xt(wt(X(), e(Et), (C = e(at)) == null ? void 0 : C.description, (f = t.toast.classes) == null ? void 0 : f.description))
            }]), s(h, a)
          };
          P(z, h => {
            t.toast.description && h(N)
          })
        }
        Z(w);
        var u = Mt(w, 2);
        {
          var Y = h => {
            var a = S(),
              T = x(a);
            {
              var H = f => {
                  var b = S(),
                    F = x(b);
                  Ot(F, () => t.toast.cancel, (D, E) => {
                    E(D, {})
                  }), s(f, b)
                },
                yt = f => {
                  var b = Mn(),
                    F = $(b, !0);
                  Z(b), p(D => {
                    we(b, t.toast.cancelButtonStyle ?? B()), It(b, 1, D), Yt(F, t.toast.cancel.label)
                  }, [() => {
                    var D, E, V;
                    return xt(wt((D = e(at)) == null ? void 0 : D.cancelButton, (V = (E = t.toast) == null ? void 0 : E.classes) == null ? void 0 : V.cancelButton))
                  }]), Rt("click", b, D => {
                    var E, V;
                    ne(t.toast.cancel) && e(ct) && ((V = (E = t.toast.cancel) == null ? void 0 : E.onClick) == null || V.call(E, D), c())
                  }), s(f, b)
                },
                C = v(() => ne(t.toast.cancel));
              P(T, f => {
                typeof t.toast.cancel == "function" ? f(H) : e(C) && f(yt, 1)
              })
            }
            s(h, a)
          };
          P(u, h => {
            t.toast.cancel && h(Y)
          })
        }
        var it = Mt(u, 2);
        {
          var st = h => {
            var a = S(),
              T = x(a);
            {
              var H = f => {
                  var b = S(),
                    F = x(b);
                  Ot(F, () => t.toast.action, (D, E) => {
                    E(D, {})
                  }), s(f, b)
                },
                yt = f => {
                  var b = Cn(),
                    F = $(b, !0);
                  Z(b), p(D => {
                    we(b, t.toast.actionButtonStyle ?? U()), It(b, 1, D), Yt(F, t.toast.action.label)
                  }, [() => {
                    var D, E, V;
                    return xt(wt((D = e(at)) == null ? void 0 : D.actionButton, (V = (E = t.toast) == null ? void 0 : E.classes) == null ? void 0 : V.actionButton))
                  }]), Rt("click", b, D => {
                    var E;
                    ne(t.toast.action) && ((E = t.toast.action) == null || E.onClick(D), !D.defaultPrevented && c())
                  }), s(f, b)
                },
                C = v(() => ne(t.toast.action));
              P(T, f => {
                typeof t.toast.action == "function" ? f(H) : e(C) && f(yt, 1)
              })
            }
            s(h, a)
          };
          P(it, h => {
            t.toast.action && h(st)
          })
        }
        p(h => It(m, 1, h), [() => {
          var h, a, T;
          return xt(wt((h = e(at)) == null ? void 0 : h.title, (T = (a = t.toast) == null ? void 0 : a.classes) == null ? void 0 : T.title))
        }]), s(o, l)
      };
    P(he, o => {
      t.toast.component ? o(be) : o(ye, !1)
    })
  }
  Z(g), He(g, o => d(nt, o), () => e(nt)), p((o, l, y) => {
    It(g, 1, o), A(g, "data-rich-colors", t.toast.richColors ?? St()), A(g, "data-styled", !(t.toast.component || t.toast.unstyled || q())), A(g, "data-mounted", e(M)), A(g, "data-promise", l), A(g, "data-swiped", e(Ut)), A(g, "data-removed", e(L)), A(g, "data-visible", e(le)), A(g, "data-y-position", e(Qt)[0]), A(g, "data-x-position", e(Qt)[1]), A(g, "data-index", t.index), A(g, "data-front", e(re)), A(g, "data-swiping", e(Dt)), A(g, "data-dismissable", e(ct)), A(g, "data-type", e(I)), A(g, "data-invert", e(fe)), A(g, "data-swipe-out", e(Ft)), A(g, "data-swipe-direction", e(jt)), A(g, "data-expanded", y), te = we(g, `${t.style} ${t.toast.style}`, te, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": W.toasts.length - t.index,
      "--offset": `${e(L)?e(J):e(i)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${e(gt)}px`
    })
  }, [() => {
    var o, l, y, _, w, m;
    return xt(wt(t.class, e(Ct), (o = e(at)) == null ? void 0 : o.toast, (y = (l = t.toast) == null ? void 0 : l.classes) == null ? void 0 : y.toast, (_ = e(at)) == null ? void 0 : _[e(I)], (m = (w = t.toast) == null ? void 0 : w.classes) == null ? void 0 : m[e(I)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && e(M))]), Rt("pointermove", g, ut), Rt("pointerup", g, $t), Rt("pointerdown", g, Se), Oe("dragend", g, bt), s(n, g), se()
}
ze(["pointermove", "pointerup", "pointerdown", "click"]);
var Hn = Jt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function kn(n) {
  var t = Hn();
  s(n, t)
}
var Rn = Jt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function Nn(n) {
  var t = Rn();
  s(n, t)
}
var Fn = Jt('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function Un(n) {
  var t = Fn();
  s(n, t)
}
var jn = Jt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function zn(n) {
  var t = jn();
  s(n, t)
}
var Vn = Jt('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function Kn(n) {
  var t = Vn();
  s(n, t)
}
const Wn = 3,
  ke = "24px",
  Re = "16px",
  Yn = 4e3,
  Gn = 356,
  Zn = 14,
  Ie = "dark",
  ae = "light";

function Xn(n, t) {
  const r = {};
  return [n, t].forEach((B, U) => {
    const X = U === 1,
      q = X ? "--mobile-offset" : "--offset",
      St = X ? Re : ke;

    function Bt(M) {
      ["top", "right", "bottom", "left"].forEach(L => {
        r[`${q}-${L}`] = typeof M == "number" ? `${M}px` : M
      })
    }
    typeof B == "number" || typeof B == "string" ? Bt(B) : typeof B == "object" ? ["top", "right", "bottom", "left"].forEach(M => {
      const L = B[M];
      L === void 0 ? r[`${q}-${M}`] = St : r[`${q}-${M}`] = typeof L == "number" ? `${L}px` : L
    }) : Bt(St)
  }), r
}
var qn = tt("<ol></ol>"),
  Jn = tt('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-smjlix"><!></section>');

function Qn(n, t) {
  ie(t, !0);

  function r(i) {
    return i !== "system" ? i : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Ie : ae
  }
  let B = O(t, "invert", 3, !1),
    U = O(t, "position", 3, "bottom-right"),
    X = O(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    q = O(t, "expand", 3, !1),
    St = O(t, "closeButton", 3, !1),
    Bt = O(t, "offset", 3, ke),
    M = O(t, "mobileOffset", 3, Re),
    L = O(t, "theme", 3, "light"),
    Dt = O(t, "richColors", 3, !1),
    Ft = O(t, "duration", 3, Yn),
    Ut = O(t, "visibleToasts", 3, Wn),
    J = O(t, "toastOptions", 19, () => ({})),
    gt = O(t, "dir", 7, "auto"),
    Ht = O(t, "gap", 3, Zn),
    nt = O(t, "containerAriaLabel", 3, "Notifications"),
    lt = O(t, "closeButtonAriaLabel", 3, "Close toast"),
    jt = rn(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function re() {
    if (gt() !== "auto") return gt();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const i = document.documentElement.getAttribute("dir");
    return i === "auto" || !i ? (Zt(() => gt(window.getComputedStyle(document.documentElement).direction ?? "ltr")), gt()) : (Zt(() => gt(i)), i)
  }
  const le = v(() => Array.from(new Set([U(), ...W.toasts.filter(i => i.position).map(i => i.position)].filter(Boolean))));
  let I = k(!1),
    ct = k(!1),
    Ct = k(Pe(r(L()))),
    Et = k(void 0),
    dt = k(null),
    Lt = k(!1);
  const ce = v(() => X().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  mt(() => {
    W.toasts.length <= 1 && d(I, !1)
  }), mt(() => {
    const i = W.toasts.filter(c => c.dismiss && !c.delete);
    if (i.length > 0) {
      const c = W.toasts.map(R => i.find(ot => ot.id === R.id) ? {
        ...R,
        delete: !0
      } : R);
      W.toasts = c
    }
  }), mt(() => () => {
    e(Et) && e(dt) && (e(dt).focus({
      preventScroll: !0
    }), d(dt, null), d(Lt, !1))
  }), Gt(() => (W.reset(), oe(document, "keydown", c => {
    var ht, ot;
    X().every(kt => c[kt] || c.code === kt) && (d(I, !0), (ht = e(Et)) == null || ht.focus()), c.code === "Escape" && (document.activeElement === e(Et) || (ot = e(Et)) != null && ot.contains(document.activeElement)) && d(I, !1)
  }))), mt(() => {
    if (L() !== "system" && d(Ct, L()), typeof window < "u") {
      L() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? d(Ct, Ie) : d(Ct, ae));
      const i = window.matchMedia("(prefers-color-scheme: dark)"),
        c = ({
          matches: R
        }) => {
          d(Ct, R ? Ie : ae, !0)
        };
      "addEventListener" in i ? i.addEventListener("change", c) : i.addListener(c)
    }
  });
  const At = i => {
      var c;
      (c = t.onblur) == null || c.call(t, i), e(Lt) && !i.currentTarget.contains(i.relatedTarget) && (d(Lt, !1), e(dt) && (e(dt).focus({
        preventScroll: !0
      }), d(dt, null)))
    },
    Qt = i => {
      var R;
      (R = t.onfocus) == null || R.call(t, i), !(i.target instanceof HTMLElement && i.target.dataset.dismissable === "false") && (e(Lt) || (d(Lt, !0), d(dt, i.relatedTarget, !0)))
    },
    de = i => {
      var R;
      (R = t.onpointerdown) == null || R.call(t, i), !(i.target instanceof HTMLElement && i.target.dataset.dismissable === "false") && d(ct, !0)
    },
    ue = i => {
      var c;
      (c = t.onmouseenter) == null || c.call(t, i), d(I, !0)
    },
    fe = i => {
      var c;
      (c = t.onmouseleave) == null || c.call(t, i), e(ct) || d(I, !1)
    },
    zt = i => {
      var c;
      (c = t.onmousemove) == null || c.call(t, i), d(I, !0)
    },
    at = i => {
      var c;
      (c = t.ondragend) == null || c.call(t, i), d(I, !1)
    },
    ve = i => {
      var c;
      (c = t.onpointerup) == null || c.call(t, i), d(ct, !1)
    };
  bn.set(new Ze);
  var Pt = Jn();
  A(Pt, "tabindex", -1);
  var Vt = $(Pt);
  {
    var pt = i => {
      var c = S(),
        R = x(c);
      Te(R, 18, () => e(le), ht => ht, (ht, ot, kt, Se) => {
        const $t = v(() => {
            const [Q, g] = ot.split("-");
            return {
              y: Q,
              x: g
            }
          }),
          ut = v(() => Xn(Bt(), M()));
        var bt = qn();
        on(bt, Q => {
          var g;
          return {
            tabindex: -1,
            dir: Q,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": e(Ct),
            "data-y-position": e($t).y,
            "data-x-position": e($t).x,
            style: t.style,
            onblur: At,
            onfocus: Qt,
            onmouseenter: ue,
            onmousemove: zt,
            onmouseleave: fe,
            ondragend: at,
            onpointerdown: de,
            onpointerup: ve,
            ...jt,
            [sn]: {
              "--front-toast-height": `${(g=W.heights[0])==null?void 0:g.height}px`,
              "--width": `${Gn}px`,
              "--gap": `${Ht()}px`,
              "--offset-top": e(ut)["--offset-top"],
              "--offset-right": e(ut)["--offset-right"],
              "--offset-bottom": e(ut)["--offset-bottom"],
              "--offset-left": e(ut)["--offset-left"],
              "--mobile-offset-top": e(ut)["--mobile-offset-top"],
              "--mobile-offset-right": e(ut)["--mobile-offset-right"],
              "--mobile-offset-bottom": e(ut)["--mobile-offset-bottom"],
              "--mobile-offset-left": e(ut)["--mobile-offset-left"]
            }
          }
        }, [re], void 0, void 0, "svelte-smjlix"), Te(bt, 23, () => W.toasts.filter(Q => !Q.position && e(kt) === 0 || Q.position === ot), Q => Q.id, (Q, g, te, me) => {
          {
            const ge = u => {
                var Y = S(),
                  it = x(Y);
                {
                  var st = a => {
                      var T = S(),
                        H = x(T);
                      rt(H, () => t.successIcon ?? vt), s(a, T)
                    },
                    h = a => {
                      kn(a)
                    };
                  P(it, a => {
                    t.successIcon ? a(st) : t.successIcon !== null && a(h, 1)
                  })
                }
                s(u, Y)
              },
              he = u => {
                var Y = S(),
                  it = x(Y);
                {
                  var st = a => {
                      var T = S(),
                        H = x(T);
                      rt(H, () => t.errorIcon ?? vt), s(a, T)
                    },
                    h = a => {
                      Nn(a)
                    };
                  P(it, a => {
                    t.errorIcon ? a(st) : t.errorIcon !== null && a(h, 1)
                  })
                }
                s(u, Y)
              },
              be = u => {
                var Y = S(),
                  it = x(Y);
                {
                  var st = a => {
                      var T = S(),
                        H = x(T);
                      rt(H, () => t.warningIcon ?? vt), s(a, T)
                    },
                    h = a => {
                      Un(a)
                    };
                  P(it, a => {
                    t.warningIcon ? a(st) : t.warningIcon !== null && a(h, 1)
                  })
                }
                s(u, Y)
              },
              ye = u => {
                var Y = S(),
                  it = x(Y);
                {
                  var st = a => {
                      var T = S(),
                        H = x(T);
                      rt(H, () => t.infoIcon ?? vt), s(a, T)
                    },
                    h = a => {
                      zn(a)
                    };
                  P(it, a => {
                    t.infoIcon ? a(st) : t.infoIcon !== null && a(h, 1)
                  })
                }
                s(u, Y)
              },
              o = u => {
                var Y = S(),
                  it = x(Y);
                {
                  var st = a => {
                      var T = S(),
                        H = x(T);
                      rt(H, () => t.closeIcon ?? vt), s(a, T)
                    },
                    h = a => {
                      Kn(a)
                    };
                  P(it, a => {
                    t.closeIcon ? a(st) : t.closeIcon !== null && a(h, 1)
                  })
                }
                s(u, Y)
              };
            let l = v(() => {
                var u;
                return ((u = J()) == null ? void 0 : u.duration) ?? Ft()
              }),
              y = v(() => {
                var u;
                return ((u = J()) == null ? void 0 : u.class) ?? ""
              }),
              _ = v(() => {
                var u;
                return ((u = J()) == null ? void 0 : u.descriptionClass) || ""
              }),
              w = v(() => {
                var u;
                return ((u = J()) == null ? void 0 : u.style) ?? ""
              }),
              m = v(() => J().classes || {}),
              j = v(() => J().unstyled ?? !1),
              et = v(() => {
                var u;
                return ((u = J()) == null ? void 0 : u.cancelButtonStyle) ?? ""
              }),
              z = v(() => {
                var u;
                return ((u = J()) == null ? void 0 : u.actionButtonStyle) ?? ""
              }),
              N = v(() => {
                var u;
                return ((u = J()) == null ? void 0 : u.closeButtonAriaLabel) ?? lt()
              });
            On(Q, {
              get index() {
                return e(te)
              },
              get toast() {
                return e(g)
              },
              get defaultRichColors() {
                return Dt()
              },
              get duration() {
                return e(l)
              },
              get class() {
                return e(y)
              },
              get descriptionClass() {
                return e(_)
              },
              get invert() {
                return B()
              },
              get visibleToasts() {
                return Ut()
              },
              get closeButton() {
                return St()
              },
              get interacting() {
                return e(ct)
              },
              get position() {
                return ot
              },
              get style() {
                return e(w)
              },
              get classes() {
                return e(m)
              },
              get unstyled() {
                return e(j)
              },
              get cancelButtonStyle() {
                return e(et)
              },
              get actionButtonStyle() {
                return e(z)
              },
              get closeButtonAriaLabel() {
                return e(N)
              },
              get expandByDefault() {
                return q()
              },
              get expanded() {
                return e(I)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: ge,
              errorIcon: he,
              warningIcon: be,
              infoIcon: ye,
              closeIcon: o,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), Z(bt), He(bt, Q => d(Et, Q), () => e(Et)), p(() => bt.dir = bt.dir), s(ht, bt)
      }), s(i, c)
    };
    P(Vt, i => {
      W.toasts.length > 0 && i(pt)
    })
  }
  Z(Pt), p(() => A(Pt, "aria-label", `${nt()??""} ${e(ce)??""}`)), s(n, Pt), se()
}
var pn = tt('<div class="flex h-full flex-col items-center justify-center gap-6"><div><!></div> <p class="max-w-3xl text-center font-medium sm:text-xl">Our servers are in maintenance. Try again later.<br/> Sorry for the inconvenience 🙇‍♂️</p></div>');

function $n(n) {
  var t = pn(),
    r = $(t),
    B = $(r);
  nn(B, {
    size: "lg",
    hasText: !0
  }), Z(r), Ve(2), Z(t), s(n, t)
}
var ta = tt('<span class="hidden"> </span> <!> <!>', 1);

function Ia(n, t) {
  ie(t, !0), Gt(() => {
    Xe(), qe.refresh().then(L => {
      L && Je()
    }), Object.assign(window, {
      eval: Qe(eval, function() {}, async () => {
        await fetch(Ge + "/me", {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + crypto.randomUUID()
          }
        })
      })
    });
    let M = setInterval(() => {
      tn()
    }, 5e3);
    return () => {
      clearTimeout(M)
    }
  });
  const r = "muted";
  Gt(() => {
    Me.muted = localStorage.getItem(r) === "1"
  }), mt(() => {
    {
      const M = Me.muted;
      document.querySelectorAll("audio").forEach(L => {
        L.muted = M
      });
      for (const L of Object.values($e).filter(Dt => Dt instanceof Audio)) L.muted = M, M || (L.volume = .3);
      localStorage.setItem(r, Number(M).toString())
    }
  }), Gt(() => {
    pe.info(an(), {
      duration: 6e4
    })
  });
  var B = ta();
  Oe("beforeunload", Ke, () => {
    en()
  });
  var U = x(B),
    X = $(U);
  Z(U);
  var q = Mt(U, 2);
  {
    var St = M => {
      $n(M)
    };
    P(q, M => {
      M(St)
    })
  }
  var Bt = Mt(q, 2);
  Qn(Bt, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), p(() => Yt(X, `Version: ${Ye}`)), s(n, B), se()
}
export {
  Ia as component, xa as universal
};