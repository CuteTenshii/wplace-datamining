var Se = a => {
  throw TypeError(a)
};
var De = (a, t, l) => t.has(a) || Se("Cannot " + l);
var vt = (a, t, l) => (De(a, t, "read from private field"), l ? l.call(a) : t.get(a)),
  Kt = (a, t, l) => t.has(a) ? Se("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(a) : t.set(a, l),
  Wt = (a, t, l, M) => (De(a, t, "write to private field"), M ? M.call(a, l) : t.set(a, l), l);
import "../chunks/DWiaIDSa.js";
import {
  o as Gt
} from "../chunks/DhsOqLaA.js";
import {
  p as ie,
  d as at,
  a as s,
  r as p,
  t as Q,
  b as se,
  c as tt,
  bI as oe,
  T as Ue,
  S as Ee,
  U as je,
  e as k,
  g as Le,
  C as gt,
  h as d,
  i as e,
  G as Zt,
  s as Mt,
  A as Rt,
  D as Oe,
  u as v,
  bp as mt,
  z as I,
  f as x,
  y as ze,
  B as Ae,
  J as Jt,
  L as Ve
} from "../chunks/C6Ld_Ouf.js";
import {
  c as Ke,
  s as Yt
} from "../chunks/C_VcZRp0.js";
import {
  i as L
} from "../chunks/DqvAWVT4.js";
import {
  s as ot
} from "../chunks/CwLShC5N.js";
import {
  v as We
} from "../chunks/DPFdiWeB.js";
import {
  g as Me,
  P as Ye
} from "../chunks/CmOznUX0.js";
import {
  l as W,
  n as xt,
  o as Ge,
  p as Ze,
  u as Xe,
  q as qe,
  r as Je
} from "../chunks/DkGJDvMv.js";
import {
  A as Qe,
  s as pe,
  c as $e
} from "../chunks/CmqbMj-x.js";
import "../chunks/CsthDKuu.js";
import "../chunks/CshrrOY6.js";
import {
  e as Te
} from "../chunks/CW8d8ZWe.js";
import {
  c as It,
  a as Tt,
  s as A,
  e as we,
  d as tn,
  S as en
} from "../chunks/ozaL_Q3i.js";
import {
  b as He
} from "../chunks/Bb48Kdes.js";
import {
  p as O,
  s as xe,
  r as nn
} from "../chunks/CtRVT2QZ.js";
import {
  c as Ot
} from "../chunks/a70ccHTV.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "524c6de5688559bfa8d287b7b1a6e5caba19cb91"
    };
    var t = new a.Error().stack;
    t && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[t] = "81e859a9-8432-4922-9c34-28f1bdbdb4cb", a._sentryDebugIdIdentifier = "sentry-dbid-81e859a9-8432-4922-9c34-28f1bdbdb4cb")
  } catch {}
})();
const an = !0,
  va = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: an
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  on = Array(12).fill(0);
var sn = tt('<div class="sonner-loading-bar"></div>'),
  rn = tt('<div><div class="sonner-spinner"></div></div>');

function ln(a, t) {
  ie(t, !0);
  var l = rn(),
    M = at(l);
  Te(M, 23, () => on, (U, Z) => `spinner-bar-${Z}`, (U, Z) => {
    var X = sn();
    s(U, X)
  }), p(M), p(l), Q(U => {
    Tt(l, 1, U), A(l, "data-visible", t.visible)
  }, [() => It(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), s(a, l), se()
}
const cn = typeof window < "u" ? window : void 0;

function dn(a) {
  let t = a.activeElement;
  for (; t != null && t.shadowRoot;) {
    const l = t.shadowRoot.activeElement;
    if (l === t) break;
    t = l
  }
  return t
}
var Nt, Xt;
class un {
  constructor(t = {}) {
    Kt(this, Nt);
    Kt(this, Xt);
    const {
      window: l = cn,
      document: M = l == null ? void 0 : l.document
    } = t;
    l !== void 0 && (Wt(this, Nt, M), Wt(this, Xt, Ke(U => {
      const Z = oe(l, "focusin", U),
        X = oe(l, "focusout", U);
      return () => {
        Z(), X()
      }
    })))
  }
  get current() {
    var t;
    return (t = vt(this, Xt)) == null || t.call(this), vt(this, Nt) ? dn(vt(this, Nt)) : null
  }
}
Nt = new WeakMap, Xt = new WeakMap;
new un;
var qt, Bt;
class fn {
  constructor(t) {
    Kt(this, qt);
    Kt(this, Bt);
    Wt(this, qt, t), Wt(this, Bt, Symbol(t))
  }
  get key() {
    return vt(this, Bt)
  }
  exists() {
    return Ue(vt(this, Bt))
  }
  get() {
    const t = Ee(vt(this, Bt));
    if (t === void 0) throw new Error(`Context "${vt(this,qt)}" not found`);
    return t
  }
  getOr(t) {
    const l = Ee(vt(this, Bt));
    return l === void 0 ? t : l
  }
  set(t) {
    return je(vt(this, Bt), t)
  }
}
qt = new WeakMap, Bt = new WeakMap;
const vn = new fn("<Toaster/>");

function ne(a) {
  return a.label !== void 0
}

function mn() {
  let a = k(Le(typeof document < "u" ? document.hidden : !1));
  return gt(() => oe(document, "visibilitychange", () => {
    d(a, document.hidden, !0)
  })), {
    get current() {
      return e(a)
    }
  }
}
const Ce = 4e3,
  gn = 14,
  hn = 45,
  bn = 200,
  _n = .05,
  yn = {
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

function wn(a) {
  const [t, l] = a.split("-"), M = [];
  return t && M.push(t), l && M.push(l), M
}

function Pe(a) {
  return 1 / (1.5 + Math.abs(a) / 20)
}
var xn = tt("<div><!></div>"),
  In = tt('<button data-close-button=""><!></button>'),
  Tn = tt('<div data-icon=""><!> <!></div>'),
  Bn = tt('<div data-description=""><!></div>'),
  Sn = tt('<button data-button="" data-cancel=""> </button>'),
  Dn = tt('<button data-button=""> </button>'),
  En = tt('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  An = tt('<li data-sonner-toast=""><!> <!></li>');

function Mn(a, t) {
  ie(t, !0);
  const l = o => {
    var r = I(),
      _ = x(r);
    {
      var y = m => {
          var j = xn(),
            $ = at(j);
          ot($, () => t.loadingIcon), p(j), Q(z => {
            Tt(j, 1, z), A(j, "data-visible", e(T) === "loading")
          }, [() => {
            var z, N, u;
            return It(xt((z = e(nt)) == null ? void 0 : z.loader, (u = (N = t.toast) == null ? void 0 : N.classes) == null ? void 0 : u.loader, "sonner-loader"))
          }]), s(m, j)
        },
        w = m => {
          {
            let j = v(() => {
                var z, N;
                return xt((z = e(nt)) == null ? void 0 : z.loader, (N = t.toast.classes) == null ? void 0 : N.loader)
              }),
              $ = v(() => e(T) === "loading");
            ln(m, {
              get class() {
                return e(j)
              },
              get visible() {
                return e($)
              }
            })
          }
        };
      L(_, m => {
        t.loadingIcon ? m(y) : m(w, !1)
      })
    }
    s(o, r)
  };
  let M = O(t, "cancelButtonStyle", 3, ""),
    U = O(t, "actionButtonStyle", 3, ""),
    Z = O(t, "descriptionClass", 3, ""),
    X = O(t, "unstyled", 3, !1),
    St = O(t, "defaultRichColors", 3, !1);
  const Dt = {
    ...yn
  };
  let C = k(!1),
    S = k(!1),
    lt = k(!1),
    Ft = k(!1),
    Ut = k(!1),
    q = k(0),
    ht = k(0),
    Ht = t.toast.duration || t.duration || Ce,
    et = k(void 0),
    ct = k(null),
    jt = k(null);
  const re = v(() => t.index === 0),
    le = v(() => t.index + 1 <= t.visibleToasts),
    T = v(() => t.toast.type),
    dt = v(() => t.toast.dismissable !== !1),
    Ct = v(() => t.toast.class || ""),
    Et = v(() => t.toast.descriptionClass || ""),
    ut = v(() => W.heights.findIndex(o => o.toastId === t.toast.id) || 0),
    Pt = v(() => t.toast.closeButton ?? t.closeButton),
    ce = v(() => t.toast.duration ?? t.duration ?? Ce);
  let At = null;
  const Qt = v(() => t.position.split("-")),
    de = v(() => W.heights.reduce((o, r, _) => _ >= e(ut) ? o : o + r.height, 0)),
    ue = mn(),
    fe = v(() => t.toast.invert || t.invert),
    zt = v(() => e(T) === "loading"),
    nt = v(() => ({
      ...Dt,
      ...t.classes
    })),
    ve = v(() => t.toast.title),
    Lt = v(() => t.toast.description);
  let Vt = k(0),
    pt = k(0);
  const i = v(() => Math.round(e(ut) * gn + e(de)));
  gt(() => {
    e(ve), e(Lt);
    let o;
    t.expanded || t.expandByDefault ? o = 1 : o = 1 - t.index * _n;
    const r = Zt(() => e(et));
    if (r === void 0) return;
    r.style.setProperty("height", "auto");
    const _ = r.offsetHeight,
      y = r.getBoundingClientRect().height,
      w = Math.round(y / o + Number.EPSILON & 100) / 100;
    r.style.removeProperty("height");
    let m;
    Math.abs(w - _) < 1 ? m = w : m = _, d(ht, m, !0), Zt(() => {
      W.setHeight({
        toastId: t.toast.id,
        height: m
      })
    })
  });

  function c() {
    d(S, !0), d(q, e(i), !0), W.removeHeight(t.toast.id), setTimeout(() => {
      W.remove(t.toast.id)
    }, bn)
  }
  let R;
  const bt = v(() => t.toast.promise && e(T) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function it() {
    d(Vt, new Date().getTime(), !0), R = setTimeout(() => {
      var o, r;
      (r = (o = t.toast).onAutoClose) == null || r.call(o, t.toast), c()
    }, Ht)
  }

  function kt() {
    if (e(pt) < e(Vt)) {
      const o = new Date().getTime() - e(Vt);
      Ht = Ht - o
    }
    d(pt, new Date().getTime(), !0)
  }
  gt(() => {
    t.toast.updated && (clearTimeout(R), Ht = e(ce), it())
  }), gt(() => (e(bt) || (t.expanded || t.interacting || ue.current ? kt() : it()), () => clearTimeout(R))), Gt(() => {
    var r;
    d(C, !0);
    const o = (r = e(et)) == null ? void 0 : r.getBoundingClientRect().height;
    return d(ht, o, !0), W.setHeight({
      toastId: t.toast.id,
      height: o
    }), () => {
      W.removeHeight(t.toast.id)
    }
  }), gt(() => {
    t.toast.delete && Zt(() => {
      var o, r;
      c(), (r = (o = t.toast).onDismiss) == null || r.call(o, t.toast)
    })
  });
  const Be = o => {
      if (e(zt)) return;
      d(q, e(i), !0);
      const r = o.target;
      r.setPointerCapture(o.pointerId), r.tagName !== "BUTTON" && (d(lt, !0), At = {
        x: o.clientX,
        y: o.clientY
      })
    },
    $t = () => {
      var m, j, $, z, N, u;
      if (e(Ft) || !e(dt)) return;
      At = null;
      const o = Number(((m = e(et)) == null ? void 0 : m.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        r = Number(((j = e(et)) == null ? void 0 : j.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        _ = new Date().getTime() - 0,
        y = e(ct) === "x" ? o : r,
        w = Math.abs(y) / _;
      if (Math.abs(y) >= hn || w > .11) {
        d(q, e(i), !0), (z = ($ = t.toast).onDismiss) == null || z.call($, t.toast), e(ct) === "x" ? d(jt, o > 0 ? "right" : "left", !0) : d(jt, r > 0 ? "down" : "up", !0), c(), d(Ft, !0);
        return
      } else(N = e(et)) == null || N.style.setProperty("--swipe-amount-x", "0px"), (u = e(et)) == null || u.style.setProperty("--swipe-amount-y", "0px");
      d(Ut, !1), d(lt, !1), d(ct, null)
    },
    ft = o => {
      var j, $, z;
      if (!At || !e(dt) || (((j = window.getSelection()) == null ? void 0 : j.toString().length) ?? -1) > 0) return;
      const _ = o.clientY - At.y,
        y = o.clientX - At.x,
        w = t.swipeDirections ?? wn(t.position);
      !e(ct) && (Math.abs(y) > 1 || Math.abs(_) > 1) && d(ct, Math.abs(y) > Math.abs(_) ? "x" : "y", !0);
      let m = {
        x: 0,
        y: 0
      };
      if (e(ct) === "y") {
        if (w.includes("top") || w.includes("bottom"))
          if (w.includes("top") && _ < 0 || w.includes("bottom") && _ > 0) m.y = _;
          else {
            const N = _ * Pe(_);
            m.y = Math.abs(N) < Math.abs(_) ? N : _
          }
      } else if (e(ct) === "x" && (w.includes("left") || w.includes("right")))
        if (w.includes("left") && y < 0 || w.includes("right") && y > 0) m.x = y;
        else {
          const N = y * Pe(y);
          m.x = Math.abs(N) < Math.abs(y) ? N : y
        }(Math.abs(m.x) > 0 || Math.abs(m.y) > 0) && d(Ut, !0), ($ = e(et)) == null || $.style.setProperty("--swipe-amount-x", `${m.x}px`), (z = e(et)) == null || z.style.setProperty("--swipe-amount-y", `${m.y}px`)
    },
    _t = () => {
      d(lt, !1), d(ct, null), At = null
    },
    J = v(() => t.toast.icon ? t.toast.icon : e(T) === "success" ? t.successIcon : e(T) === "error" ? t.errorIcon : e(T) === "warning" ? t.warningIcon : e(T) === "info" ? t.infoIcon : e(T) === "loading" ? t.loadingIcon : null);
  var g = An();
  A(g, "tabindex", 0);
  let te;
  var me = at(g);
  {
    var ge = o => {
      var r = In(),
        _ = at(r);
      ot(_, () => t.closeIcon ?? mt), p(r), Q(y => {
        A(r, "aria-label", t.closeButtonAriaLabel), A(r, "data-disabled", e(zt)), Tt(r, 1, y)
      }, [() => {
        var y, w, m;
        return It(xt((y = e(nt)) == null ? void 0 : y.closeButton, (m = (w = t.toast) == null ? void 0 : w.classes) == null ? void 0 : m.closeButton))
      }]), Rt("click", r, () => {
        var y, w;
        e(zt) || !e(dt) || (c(), (w = (y = t.toast).onDismiss) == null || w.call(y, t.toast))
      }), s(o, r)
    };
    L(me, o => {
      e(Pt) && !t.toast.component && e(T) !== "loading" && t.closeIcon !== null && o(ge)
    })
  }
  var he = Mt(me, 2);
  {
    var be = o => {
        const r = v(() => t.toast.component);
        var _ = I(),
          y = x(_);
        Ot(y, () => e(r), (w, m) => {
          m(w, xe(() => t.toast.componentProps, {
            closeToast: c
          }))
        }), s(o, _)
      },
      _e = o => {
        var r = En(),
          _ = x(r);
        {
          var y = h => {
            var n = Tn(),
              B = at(n);
            {
              var H = f => {
                var b = I(),
                  F = x(b);
                {
                  var D = V => {
                      var ee = I(),
                        ye = x(ee);
                      Ot(ye, () => t.toast.icon, (K, G) => {
                        G(K, {})
                      }), s(V, ee)
                    },
                    E = V => {
                      l(V)
                    };
                  L(F, V => {
                    t.toast.icon ? V(D) : V(E, !1)
                  })
                }
                s(f, b)
              };
              L(B, f => {
                (t.toast.promise || e(T) === "loading") && f(H)
              })
            }
            var yt = Mt(B, 2);
            {
              var P = f => {
                var b = I(),
                  F = x(b);
                {
                  var D = K => {
                      var G = I(),
                        wt = x(G);
                      Ot(wt, () => t.toast.icon, (Ne, Fe) => {
                        Fe(Ne, {})
                      }), s(K, G)
                    },
                    E = K => {
                      var G = I(),
                        wt = x(G);
                      ot(wt, () => t.successIcon ?? mt), s(K, G)
                    },
                    V = K => {
                      var G = I(),
                        wt = x(G);
                      ot(wt, () => t.errorIcon ?? mt), s(K, G)
                    },
                    ee = K => {
                      var G = I(),
                        wt = x(G);
                      ot(wt, () => t.warningIcon ?? mt), s(K, G)
                    },
                    ye = K => {
                      var G = I(),
                        wt = x(G);
                      ot(wt, () => t.infoIcon ?? mt), s(K, G)
                    };
                  L(F, K => {
                    t.toast.icon ? K(D) : e(T) === "success" ? K(E, 1) : e(T) === "error" ? K(V, 2) : e(T) === "warning" ? K(ee, 3) : e(T) === "info" && K(ye, 4)
                  })
                }
                s(f, b)
              };
              L(yt, f => {
                t.toast.type !== "loading" && f(P)
              })
            }
            p(n), Q(f => Tt(n, 1, f), [() => {
              var f, b, F;
              return It(xt((f = e(nt)) == null ? void 0 : f.icon, (F = (b = t.toast) == null ? void 0 : b.classes) == null ? void 0 : F.icon))
            }]), s(h, n)
          };
          L(_, h => {
            (e(T) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (e(J) !== null || t.toast.icon) && h(y)
          })
        }
        var w = Mt(_, 2),
          m = at(w),
          j = at(m);
        {
          var $ = h => {
            var n = I(),
              B = x(n);
            {
              var H = P => {
                  const f = v(() => t.toast.title);
                  var b = I(),
                    F = x(b);
                  Ot(F, () => e(f), (D, E) => {
                    E(D, xe(() => t.toast.componentProps))
                  }), s(P, b)
                },
                yt = P => {
                  var f = Ae();
                  Q(() => Yt(f, t.toast.title)), s(P, f)
                };
              L(B, P => {
                typeof t.toast.title != "string" ? P(H) : P(yt, !1)
              })
            }
            s(h, n)
          };
          L(j, h => {
            t.toast.title && h($)
          })
        }
        p(m);
        var z = Mt(m, 2);
        {
          var N = h => {
            var n = Bn(),
              B = at(n);
            {
              var H = P => {
                  const f = v(() => t.toast.description);
                  var b = I(),
                    F = x(b);
                  Ot(F, () => e(f), (D, E) => {
                    E(D, xe(() => t.toast.componentProps))
                  }), s(P, b)
                },
                yt = P => {
                  var f = Ae();
                  Q(() => Yt(f, t.toast.description)), s(P, f)
                };
              L(B, P => {
                typeof t.toast.description != "string" ? P(H) : P(yt, !1)
              })
            }
            p(n), Q(P => Tt(n, 1, P), [() => {
              var P, f;
              return It(xt(Z(), e(Et), (P = e(nt)) == null ? void 0 : P.description, (f = t.toast.classes) == null ? void 0 : f.description))
            }]), s(h, n)
          };
          L(z, h => {
            t.toast.description && h(N)
          })
        }
        p(w);
        var u = Mt(w, 2);
        {
          var Y = h => {
            var n = I(),
              B = x(n);
            {
              var H = f => {
                  var b = I(),
                    F = x(b);
                  Ot(F, () => t.toast.cancel, (D, E) => {
                    E(D, {})
                  }), s(f, b)
                },
                yt = f => {
                  var b = Sn(),
                    F = at(b, !0);
                  p(b), Q(D => {
                    we(b, t.toast.cancelButtonStyle ?? M()), Tt(b, 1, D), Yt(F, t.toast.cancel.label)
                  }, [() => {
                    var D, E, V;
                    return It(xt((D = e(nt)) == null ? void 0 : D.cancelButton, (V = (E = t.toast) == null ? void 0 : E.classes) == null ? void 0 : V.cancelButton))
                  }]), Rt("click", b, D => {
                    var E, V;
                    ne(t.toast.cancel) && e(dt) && ((V = (E = t.toast.cancel) == null ? void 0 : E.onClick) == null || V.call(E, D), c())
                  }), s(f, b)
                },
                P = v(() => ne(t.toast.cancel));
              L(B, f => {
                typeof t.toast.cancel == "function" ? f(H) : e(P) && f(yt, 1)
              })
            }
            s(h, n)
          };
          L(u, h => {
            t.toast.cancel && h(Y)
          })
        }
        var st = Mt(u, 2);
        {
          var rt = h => {
            var n = I(),
              B = x(n);
            {
              var H = f => {
                  var b = I(),
                    F = x(b);
                  Ot(F, () => t.toast.action, (D, E) => {
                    E(D, {})
                  }), s(f, b)
                },
                yt = f => {
                  var b = Dn(),
                    F = at(b, !0);
                  p(b), Q(D => {
                    we(b, t.toast.actionButtonStyle ?? U()), Tt(b, 1, D), Yt(F, t.toast.action.label)
                  }, [() => {
                    var D, E, V;
                    return It(xt((D = e(nt)) == null ? void 0 : D.actionButton, (V = (E = t.toast) == null ? void 0 : E.classes) == null ? void 0 : V.actionButton))
                  }]), Rt("click", b, D => {
                    var E;
                    ne(t.toast.action) && ((E = t.toast.action) == null || E.onClick(D), !D.defaultPrevented && c())
                  }), s(f, b)
                },
                P = v(() => ne(t.toast.action));
              L(B, f => {
                typeof t.toast.action == "function" ? f(H) : e(P) && f(yt, 1)
              })
            }
            s(h, n)
          };
          L(st, h => {
            t.toast.action && h(rt)
          })
        }
        Q(h => Tt(m, 1, h), [() => {
          var h, n, B;
          return It(xt((h = e(nt)) == null ? void 0 : h.title, (B = (n = t.toast) == null ? void 0 : n.classes) == null ? void 0 : B.title))
        }]), s(o, r)
      };
    L(he, o => {
      t.toast.component ? o(be) : o(_e, !1)
    })
  }
  p(g), He(g, o => d(et, o), () => e(et)), Q((o, r, _) => {
    Tt(g, 1, o), A(g, "data-rich-colors", t.toast.richColors ?? St()), A(g, "data-styled", !(t.toast.component || t.toast.unstyled || X())), A(g, "data-mounted", e(C)), A(g, "data-promise", r), A(g, "data-swiped", e(Ut)), A(g, "data-removed", e(S)), A(g, "data-visible", e(le)), A(g, "data-y-position", e(Qt)[0]), A(g, "data-x-position", e(Qt)[1]), A(g, "data-index", t.index), A(g, "data-front", e(re)), A(g, "data-swiping", e(lt)), A(g, "data-dismissable", e(dt)), A(g, "data-type", e(T)), A(g, "data-invert", e(fe)), A(g, "data-swipe-out", e(Ft)), A(g, "data-swipe-direction", e(jt)), A(g, "data-expanded", _), te = we(g, `${t.style} ${t.toast.style}`, te, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": W.toasts.length - t.index,
      "--offset": `${e(S)?e(q):e(i)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${e(ht)}px`
    })
  }, [() => {
    var o, r, _, y, w, m;
    return It(xt(t.class, e(Ct), (o = e(nt)) == null ? void 0 : o.toast, (_ = (r = t.toast) == null ? void 0 : r.classes) == null ? void 0 : _.toast, (y = e(nt)) == null ? void 0 : y[e(T)], (m = (w = t.toast) == null ? void 0 : w.classes) == null ? void 0 : m[e(T)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && e(C))]), Rt("pointermove", g, ft), Rt("pointerup", g, $t), Rt("pointerdown", g, Be), Oe("dragend", g, _t), s(a, g), se()
}
ze(["pointermove", "pointerup", "pointerdown", "click"]);
var Cn = Jt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function Pn(a) {
  var t = Cn();
  s(a, t)
}
var Ln = Jt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function On(a) {
  var t = Ln();
  s(a, t)
}
var Hn = Jt('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function kn(a) {
  var t = Hn();
  s(a, t)
}
var Rn = Jt('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function Nn(a) {
  var t = Rn();
  s(a, t)
}
var Fn = Jt('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function Un(a) {
  var t = Fn();
  s(a, t)
}
const jn = 3,
  ke = "24px",
  Re = "16px",
  zn = 4e3,
  Vn = 356,
  Kn = 14,
  Ie = "dark",
  ae = "light";

function Wn(a, t) {
  const l = {};
  return [a, t].forEach((M, U) => {
    const Z = U === 1,
      X = Z ? "--mobile-offset" : "--offset",
      St = Z ? Re : ke;

    function Dt(C) {
      ["top", "right", "bottom", "left"].forEach(S => {
        l[`${X}-${S}`] = typeof C == "number" ? `${C}px` : C
      })
    }
    typeof M == "number" || typeof M == "string" ? Dt(M) : typeof M == "object" ? ["top", "right", "bottom", "left"].forEach(C => {
      const S = M[C];
      S === void 0 ? l[`${X}-${C}`] = St : l[`${X}-${C}`] = typeof S == "number" ? `${S}px` : S
    }) : Dt(St)
  }), l
}
var Yn = tt("<ol></ol>"),
  Gn = tt('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-smjlix"><!></section>');

function Zn(a, t) {
  ie(t, !0);

  function l(i) {
    return i !== "system" ? i : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Ie : ae
  }
  let M = O(t, "invert", 3, !1),
    U = O(t, "position", 3, "bottom-right"),
    Z = O(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    X = O(t, "expand", 3, !1),
    St = O(t, "closeButton", 3, !1),
    Dt = O(t, "offset", 3, ke),
    C = O(t, "mobileOffset", 3, Re),
    S = O(t, "theme", 3, "light"),
    lt = O(t, "richColors", 3, !1),
    Ft = O(t, "duration", 3, zn),
    Ut = O(t, "visibleToasts", 3, jn),
    q = O(t, "toastOptions", 19, () => ({})),
    ht = O(t, "dir", 7, "auto"),
    Ht = O(t, "gap", 3, Kn),
    et = O(t, "containerAriaLabel", 3, "Notifications"),
    ct = O(t, "closeButtonAriaLabel", 3, "Close toast"),
    jt = nn(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function re() {
    if (ht() !== "auto") return ht();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const i = document.documentElement.getAttribute("dir");
    return i === "auto" || !i ? (Zt(() => ht(window.getComputedStyle(document.documentElement).direction ?? "ltr")), ht()) : (Zt(() => ht(i)), i)
  }
  const le = v(() => Array.from(new Set([U(), ...W.toasts.filter(i => i.position).map(i => i.position)].filter(Boolean))));
  let T = k(!1),
    dt = k(!1),
    Ct = k(Le(l(S()))),
    Et = k(void 0),
    ut = k(null),
    Pt = k(!1);
  const ce = v(() => Z().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  gt(() => {
    W.toasts.length <= 1 && d(T, !1)
  }), gt(() => {
    const i = W.toasts.filter(c => c.dismiss && !c.delete);
    if (i.length > 0) {
      const c = W.toasts.map(R => i.find(it => it.id === R.id) ? {
        ...R,
        delete: !0
      } : R);
      W.toasts = c
    }
  }), gt(() => () => {
    e(Et) && e(ut) && (e(ut).focus({
      preventScroll: !0
    }), d(ut, null), d(Pt, !1))
  }), Gt(() => (W.reset(), oe(document, "keydown", c => {
    var bt, it;
    Z().every(kt => c[kt] || c.code === kt) && (d(T, !0), (bt = e(Et)) == null || bt.focus()), c.code === "Escape" && (document.activeElement === e(Et) || (it = e(Et)) != null && it.contains(document.activeElement)) && d(T, !1)
  }))), gt(() => {
    if (S() !== "system" && d(Ct, S()), typeof window < "u") {
      S() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? d(Ct, Ie) : d(Ct, ae));
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
      (c = t.onblur) == null || c.call(t, i), e(Pt) && !i.currentTarget.contains(i.relatedTarget) && (d(Pt, !1), e(ut) && (e(ut).focus({
        preventScroll: !0
      }), d(ut, null)))
    },
    Qt = i => {
      var R;
      (R = t.onfocus) == null || R.call(t, i), !(i.target instanceof HTMLElement && i.target.dataset.dismissable === "false") && (e(Pt) || (d(Pt, !0), d(ut, i.relatedTarget, !0)))
    },
    de = i => {
      var R;
      (R = t.onpointerdown) == null || R.call(t, i), !(i.target instanceof HTMLElement && i.target.dataset.dismissable === "false") && d(dt, !0)
    },
    ue = i => {
      var c;
      (c = t.onmouseenter) == null || c.call(t, i), d(T, !0)
    },
    fe = i => {
      var c;
      (c = t.onmouseleave) == null || c.call(t, i), e(dt) || d(T, !1)
    },
    zt = i => {
      var c;
      (c = t.onmousemove) == null || c.call(t, i), d(T, !0)
    },
    nt = i => {
      var c;
      (c = t.ondragend) == null || c.call(t, i), d(T, !1)
    },
    ve = i => {
      var c;
      (c = t.onpointerup) == null || c.call(t, i), d(dt, !1)
    };
  vn.set(new Ge);
  var Lt = Gn();
  A(Lt, "tabindex", -1);
  var Vt = at(Lt);
  {
    var pt = i => {
      var c = I(),
        R = x(c);
      Te(R, 18, () => e(le), bt => bt, (bt, it, kt, Be) => {
        const $t = v(() => {
            const [J, g] = it.split("-");
            return {
              y: J,
              x: g
            }
          }),
          ft = v(() => Wn(Dt(), C()));
        var _t = Yn();
        tn(_t, J => {
          var g;
          return {
            tabindex: -1,
            dir: J,
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
            ondragend: nt,
            onpointerdown: de,
            onpointerup: ve,
            ...jt,
            [en]: {
              "--front-toast-height": `${(g=W.heights[0])==null?void 0:g.height}px`,
              "--width": `${Vn}px`,
              "--gap": `${Ht()}px`,
              "--offset-top": e(ft)["--offset-top"],
              "--offset-right": e(ft)["--offset-right"],
              "--offset-bottom": e(ft)["--offset-bottom"],
              "--offset-left": e(ft)["--offset-left"],
              "--mobile-offset-top": e(ft)["--mobile-offset-top"],
              "--mobile-offset-right": e(ft)["--mobile-offset-right"],
              "--mobile-offset-bottom": e(ft)["--mobile-offset-bottom"],
              "--mobile-offset-left": e(ft)["--mobile-offset-left"]
            }
          }
        }, [re], void 0, void 0, "svelte-smjlix"), Te(_t, 23, () => W.toasts.filter(J => !J.position && e(kt) === 0 || J.position === it), J => J.id, (J, g, te, me) => {
          {
            const ge = u => {
                var Y = I(),
                  st = x(Y);
                {
                  var rt = n => {
                      var B = I(),
                        H = x(B);
                      ot(H, () => t.successIcon ?? mt), s(n, B)
                    },
                    h = n => {
                      Pn(n)
                    };
                  L(st, n => {
                    t.successIcon ? n(rt) : t.successIcon !== null && n(h, 1)
                  })
                }
                s(u, Y)
              },
              he = u => {
                var Y = I(),
                  st = x(Y);
                {
                  var rt = n => {
                      var B = I(),
                        H = x(B);
                      ot(H, () => t.errorIcon ?? mt), s(n, B)
                    },
                    h = n => {
                      On(n)
                    };
                  L(st, n => {
                    t.errorIcon ? n(rt) : t.errorIcon !== null && n(h, 1)
                  })
                }
                s(u, Y)
              },
              be = u => {
                var Y = I(),
                  st = x(Y);
                {
                  var rt = n => {
                      var B = I(),
                        H = x(B);
                      ot(H, () => t.warningIcon ?? mt), s(n, B)
                    },
                    h = n => {
                      kn(n)
                    };
                  L(st, n => {
                    t.warningIcon ? n(rt) : t.warningIcon !== null && n(h, 1)
                  })
                }
                s(u, Y)
              },
              _e = u => {
                var Y = I(),
                  st = x(Y);
                {
                  var rt = n => {
                      var B = I(),
                        H = x(B);
                      ot(H, () => t.infoIcon ?? mt), s(n, B)
                    },
                    h = n => {
                      Nn(n)
                    };
                  L(st, n => {
                    t.infoIcon ? n(rt) : t.infoIcon !== null && n(h, 1)
                  })
                }
                s(u, Y)
              },
              o = u => {
                var Y = I(),
                  st = x(Y);
                {
                  var rt = n => {
                      var B = I(),
                        H = x(B);
                      ot(H, () => t.closeIcon ?? mt), s(n, B)
                    },
                    h = n => {
                      Un(n)
                    };
                  L(st, n => {
                    t.closeIcon ? n(rt) : t.closeIcon !== null && n(h, 1)
                  })
                }
                s(u, Y)
              };
            let r = v(() => {
                var u;
                return ((u = q()) == null ? void 0 : u.duration) ?? Ft()
              }),
              _ = v(() => {
                var u;
                return ((u = q()) == null ? void 0 : u.class) ?? ""
              }),
              y = v(() => {
                var u;
                return ((u = q()) == null ? void 0 : u.descriptionClass) || ""
              }),
              w = v(() => {
                var u;
                return ((u = q()) == null ? void 0 : u.style) ?? ""
              }),
              m = v(() => q().classes || {}),
              j = v(() => q().unstyled ?? !1),
              $ = v(() => {
                var u;
                return ((u = q()) == null ? void 0 : u.cancelButtonStyle) ?? ""
              }),
              z = v(() => {
                var u;
                return ((u = q()) == null ? void 0 : u.actionButtonStyle) ?? ""
              }),
              N = v(() => {
                var u;
                return ((u = q()) == null ? void 0 : u.closeButtonAriaLabel) ?? ct()
              });
            Mn(J, {
              get index() {
                return e(te)
              },
              get toast() {
                return e(g)
              },
              get defaultRichColors() {
                return lt()
              },
              get duration() {
                return e(r)
              },
              get class() {
                return e(_)
              },
              get descriptionClass() {
                return e(y)
              },
              get invert() {
                return M()
              },
              get visibleToasts() {
                return Ut()
              },
              get closeButton() {
                return St()
              },
              get interacting() {
                return e(dt)
              },
              get position() {
                return it
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
                return e($)
              },
              get actionButtonStyle() {
                return e(z)
              },
              get closeButtonAriaLabel() {
                return e(N)
              },
              get expandByDefault() {
                return X()
              },
              get expanded() {
                return e(T)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: ge,
              errorIcon: he,
              warningIcon: be,
              infoIcon: _e,
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
        }), p(_t), He(_t, J => d(Et, J), () => e(Et)), Q(() => _t.dir = _t.dir), s(bt, _t)
      }), s(i, c)
    };
    L(Vt, i => {
      W.toasts.length > 0 && i(pt)
    })
  }
  p(Lt), Q(() => A(Lt, "aria-label", `${et()??""} ${e(ce)??""}`)), s(a, Lt), se()
}
var Xn = tt('<span class="hidden"> </span> <!> <!>', 1);

function ma(a, t) {
  ie(t, !0), Gt(() => {
    Ze(), Xe.refresh().then(S => {
      S && qe()
    }), Object.assign(window, {
      eval: Je(eval, function() {}, async () => {
        await fetch(Ye + "/me", {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + crypto.randomUUID()
          }
        })
      })
    });
    let C = setInterval(() => {
      pe()
    }, 5e3);
    return () => {
      clearTimeout(C)
    }
  });
  const l = "muted";
  Gt(() => {
    Me.muted = localStorage.getItem(l) === "1"
  }), gt(() => {
    {
      const C = Me.muted;
      document.querySelectorAll("audio").forEach(S => {
        S.muted = C
      });
      for (const S of Object.values(Qe).filter(lt => lt instanceof Audio)) S.muted = C, C || (S.volume = .3);
      localStorage.setItem(l, Number(C).toString())
    }
  }), Gt(() => {});
  var M = Xn();
  Oe("beforeunload", Ve, () => {
    $e()
  });
  var U = x(M),
    Z = at(U);
  p(U);
  var X = Mt(U, 2);
  {
    var St = C => {
      var S = I(),
        lt = x(S);
      ot(lt, () => t.children), s(C, S)
    };
    L(X, C => {
      C(St, !1)
    })
  }
  var Dt = Mt(X, 2);
  Zn(Dt, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), Q(() => Yt(Z, `Version: ${We}`)), s(a, M), se()
}
export {
  ma as component, va as universal
};