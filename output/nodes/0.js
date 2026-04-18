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
var yt = (l, t, r) => qn(l, typeof t != "symbol" ? t + "" : t, r),
  nn = (l, t, r) => t.has(l) || Cn("Cannot " + r);
var p = (l, t, r) => (nn(l, t, "read from private field"), r ? r.call(l) : t.get(l)),
  dt = (l, t, r) => t.has(l) ? Cn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(l) : t.set(l, r),
  de = (l, t, r, h) => (nn(l, t, "write to private field"), h ? h.call(l, r) : t.set(l, r), r),
  _n = (l, t, r) => (nn(l, t, "access private method"), r);
import "../chunks/BU-NCdSO.js";
import {
  o as me
} from "../chunks/CwAeRfTO.js";
import {
  p as Zt,
  d as Q,
  a as _,
  r as j,
  t as Ct,
  b as $t,
  c as mt,
  bI as Pe,
  R as Xn,
  Q as bn,
  S as Qn,
  e as it,
  g as gn,
  q as Rt,
  h as y,
  i,
  x as xe,
  s as bt,
  m as he,
  v as $e,
  u as w,
  aW as Gt,
  l as q,
  f as W,
  k as An,
  o as wn,
  z as ze,
  bJ as Pn,
  n as On,
  aK as Jn
} from "../chunks/Cp19uF2I.js";
import {
  c as Zn,
  s as Pt
} from "../chunks/CEtP1x4Q.js";
import {
  i as lt
} from "../chunks/BcjibeS2.js";
import {
  s as Ot
} from "../chunks/CcaSv4Du.js";
import {
  v as $n
} from "../chunks/DdhxgOoS.js";
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
} from "../chunks/CeWdbyfN.js";
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
  r as mi,
  h as gi,
  j as pi
} from "../chunks/Bzp8ucHQ.js";
import {
  k as vi
} from "../chunks/CH3gFzTo.js";
import {
  c as re,
  a as ne,
  s as gt,
  f as an,
  d as Ce,
  S as yi,
  j as rn,
  i as Ci,
  e as kn
} from "../chunks/DWqOdrIT.js";
import {
  _ as Mn
} from "../chunks/A1f20mQ4.js";
import {
  b as en
} from "../chunks/BJn3rTYw.js";
import {
  p as F,
  s as Ae,
  r as Ee
} from "../chunks/f9FzqMmi.js";
import {
  e as Ye
} from "../chunks/ddc1ERe4.js";
import {
  c as Jt
} from "../chunks/30AFlpPV.js";
import {
  t as _i
} from "../chunks/B4RDTJnO.js";
import "../chunks/C33D4ipC.js";
import {
  p as bi,
  a as wi,
  b as Ii,
  s as Ei,
  c as Di,
  n as Ti,
  i as Si,
  d as Ni,
  r as Li,
  t as xi,
  e as Ai
} from "../chunks/C_1yVbks.js";
import {
  T as Pi
} from "../chunks/B4CHATid.js";
import "../chunks/sJvLKvyy.js";
(function() {
  try {
    var l = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    l.SENTRY_RELEASE = {
      id: "f2a47ca0cf31d67c069828387c1df370b5604651"
    };
    var t = new l.Error().stack;
    t && (l._sentryDebugIds = l._sentryDebugIds || {}, l._sentryDebugIds[t] = "45875e3d-f79b-4041-b46b-a5eabd16ae1e", l._sentryDebugIdIdentifier = "sentry-dbid-45875e3d-f79b-4041-b46b-a5eabd16ae1e")
  } catch {}
})();
const Oi = !0,
  ko = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: Oi
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Ri = Array(12).fill(0);
var ki = mt('<div class="sonner-loading-bar"></div>'),
  Mi = mt('<div><div class="sonner-spinner"></div></div>');

function Bi(l, t) {
  Zt(t, !0);
  var r = Mi(),
    h = Q(r);
  Ye(h, 23, () => Ri, (m, E) => `spinner-bar-${E}`, (m, E) => {
    var D = ki();
    _(m, D)
  }), j(h), j(r), Ct(m => {
    ne(r, 1, m), gt(r, "data-visible", t.visible)
  }, [() => re(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), _(l, r), $t()
}
const Hi = typeof window < "u" ? window : void 0;

function Ui(l) {
  let t = l.activeElement;
  for (; t != null && t.shadowRoot;) {
    const r = t.shadowRoot.activeElement;
    if (r === t) break;
    t = r
  }
  return t
}
var _e, Oe;
class Wi {
  constructor(t = {}) {
    dt(this, _e);
    dt(this, Oe);
    const {
      window: r = Hi,
      document: h = r == null ? void 0 : r.document
    } = t;
    r !== void 0 && (de(this, _e, h), de(this, Oe, Zn(m => {
      const E = Pe(r, "focusin", m),
        D = Pe(r, "focusout", m);
      return () => {
        E(), D()
      }
    })))
  }
  get current() {
    var t;
    return (t = p(this, Oe)) == null || t.call(this), p(this, _e) ? Ui(p(this, _e)) : null
  }
}
_e = new WeakMap, Oe = new WeakMap;
new Wi;
var Re, le;
class Vi {
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
const Fi = new Vi("<Toaster/>");

function Ge(l) {
  return l.label !== void 0
}

function zi() {
  let l = it(gn(typeof document < "u" ? document.hidden : !1));
  return Rt(() => Pe(document, "visibilitychange", () => {
    y(l, document.hidden, !0)
  })), {
    get current() {
      return i(l)
    }
  }
}
const Nn = 4e3,
  Gi = 14,
  ji = 45,
  Ki = 200,
  Yi = .05,
  qi = {
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

function Xi(l) {
  const [t, r] = l.split("-"), h = [];
  return t && h.push(t), r && h.push(r), h
}

function Ln(l) {
  return 1 / (1.5 + Math.abs(l) / 20)
}
var Qi = mt("<div><!></div>"),
  Ji = mt('<button data-close-button=""><!></button>'),
  Zi = mt('<div data-icon=""><!> <!></div>'),
  $i = mt('<div data-description=""><!></div>'),
  ts = mt('<button data-button="" data-cancel=""> </button>'),
  es = mt('<button data-button=""> </button>'),
  ns = mt('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  is = mt('<li data-sonner-toast=""><!> <!></li>');

function ss(l, t) {
  Zt(t, !0);
  const r = N => {
    var x = q(),
      Z = W(x);
    {
      var et = g => {
          var Dt = Qi(),
            a = Q(Dt);
          Ot(a, () => t.loadingIcon), j(Dt), Ct(e => {
            ne(Dt, 1, e), gt(Dt, "data-visible", i(G) === "loading")
          }, [() => {
            var e, n, s;
            return re(ae((e = i(ct)) == null ? void 0 : e.loader, (s = (n = t.toast) == null ? void 0 : n.classes) == null ? void 0 : s.loader, "sonner-loader"))
          }]), _(g, Dt)
        },
        Y = g => {
          {
            let Dt = w(() => {
                var e, n;
                return ae((e = i(ct)) == null ? void 0 : e.loader, (n = t.toast.classes) == null ? void 0 : n.loader)
              }),
              a = w(() => i(G) === "loading");
            Bi(g, {
              get class() {
                return i(Dt)
              },
              get visible() {
                return i(a)
              }
            })
          }
        };
      lt(Z, g => {
        t.loadingIcon ? g(et) : g(Y, !1)
      })
    }
    _(N, x)
  };
  let h = F(t, "cancelButtonStyle", 3, ""),
    m = F(t, "actionButtonStyle", 3, ""),
    E = F(t, "descriptionClass", 3, ""),
    D = F(t, "unstyled", 3, !1),
    O = F(t, "defaultRichColors", 3, !1);
  const V = {
    ...qi
  };
  let S = it(!1),
    v = it(!1),
    b = it(!1),
    I = it(!1),
    tt = it(!1),
    B = it(0),
    at = it(0),
    pt = t.toast.duration || t.duration || Nn,
    A = it(void 0),
    R = it(null),
    z = it(null);
  const P = w(() => t.index === 0),
    st = w(() => t.index + 1 <= t.visibleToasts),
    G = w(() => t.toast.type),
    ht = w(() => t.toast.dismissable !== !1),
    Nt = w(() => t.toast.class || ""),
    _t = w(() => t.toast.descriptionClass || ""),
    It = w(() => At.heights.findIndex(N => N.toastId === t.toast.id) || 0),
    Et = w(() => t.toast.closeButton ?? t.closeButton),
    Wt = w(() => t.toast.duration ?? t.duration ?? Nn);
  let Mt = null;
  const jt = w(() => t.position.split("-")),
    Bt = w(() => At.heights.reduce((N, x, Z) => Z >= i(It) ? N : N + x.height, 0)),
    ee = zi(),
    H = w(() => t.toast.invert || t.invert),
    rt = w(() => i(G) === "loading"),
    ct = w(() => ({
      ...V,
      ...t.classes
    })),
    Tt = w(() => t.toast.title),
    Kt = w(() => t.toast.description);
  let Yt = it(0),
    se = it(0);
  const T = w(() => Math.round(i(It) * Gi + i(Bt)));
  Rt(() => {
    i(Tt), i(Kt);
    let N;
    t.expanded || t.expandByDefault ? N = 1 : N = 1 - t.index * Yi;
    const x = xe(() => i(A));
    if (x === void 0) return;
    x.style.setProperty("height", "auto");
    const Z = x.offsetHeight,
      et = x.getBoundingClientRect().height,
      Y = Math.round(et / N + Number.EPSILON & 100) / 100;
    x.style.removeProperty("height");
    let g;
    Math.abs(Y - Z) < 1 ? g = Y : g = Z, y(at, g, !0), xe(() => {
      At.setHeight({
        toastId: t.toast.id,
        height: g
      })
    })
  });

  function U() {
    y(v, !0), y(B, i(T), !0), At.removeHeight(t.toast.id), setTimeout(() => {
      At.remove(t.toast.id)
    }, Ki)
  }
  let vt;
  const J = w(() => t.toast.promise && i(G) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function kt() {
    y(Yt, new Date().getTime(), !0), vt = setTimeout(() => {
      var N, x;
      (x = (N = t.toast).onAutoClose) == null || x.call(N, t.toast), U()
    }, pt)
  }

  function qt() {
    if (i(se) < i(Yt)) {
      const N = new Date().getTime() - i(Yt);
      pt = pt - N
    }
    y(se, new Date().getTime(), !0)
  }
  Rt(() => {
    t.toast.updated && (clearTimeout(vt), pt = i(Wt), kt())
  }), Rt(() => (i(J) || (t.expanded || t.interacting || ee.current ? qt() : kt()), () => clearTimeout(vt))), me(() => {
    var x;
    y(S, !0);
    const N = (x = i(A)) == null ? void 0 : x.getBoundingClientRect().height;
    return y(at, N, !0), At.setHeight({
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
      y(B, i(T), !0);
      const x = N.target;
      x.setPointerCapture(N.pointerId), x.tagName !== "BUTTON" && (y(b, !0), Mt = {
        x: N.clientX,
        y: N.clientY
      })
    },
    oe = () => {
      var g, Dt, a, e, n, s;
      if (i(I) || !i(ht)) return;
      Mt = null;
      const N = Number(((g = i(A)) == null ? void 0 : g.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        x = Number(((Dt = i(A)) == null ? void 0 : Dt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        Z = new Date().getTime() - 0,
        et = i(R) === "x" ? N : x,
        Y = Math.abs(et) / Z;
      if (Math.abs(et) >= ji || Y > .11) {
        y(B, i(T), !0), (e = (a = t.toast).onDismiss) == null || e.call(a, t.toast), i(R) === "x" ? y(z, N > 0 ? "right" : "left", !0) : y(z, x > 0 ? "down" : "up", !0), U(), y(I, !0);
        return
      } else(n = i(A)) == null || n.style.setProperty("--swipe-amount-x", "0px"), (s = i(A)) == null || s.style.setProperty("--swipe-amount-y", "0px");
      y(tt, !1), y(b, !1), y(R, null)
    },
    Ht = N => {
      var Dt, a, e;
      if (!Mt || !i(ht) || (((Dt = window.getSelection()) == null ? void 0 : Dt.toString().length) ?? -1) > 0) return;
      const Z = N.clientY - Mt.y,
        et = N.clientX - Mt.x,
        Y = t.swipeDirections ?? Xi(t.position);
      !i(R) && (Math.abs(et) > 1 || Math.abs(Z) > 1) && y(R, Math.abs(et) > Math.abs(Z) ? "x" : "y", !0);
      let g = {
        x: 0,
        y: 0
      };
      if (i(R) === "y") {
        if (Y.includes("top") || Y.includes("bottom"))
          if (Y.includes("top") && Z < 0 || Y.includes("bottom") && Z > 0) g.y = Z;
          else {
            const n = Z * Ln(Z);
            g.y = Math.abs(n) < Math.abs(Z) ? n : Z
          }
      } else if (i(R) === "x" && (Y.includes("left") || Y.includes("right")))
        if (Y.includes("left") && et < 0 || Y.includes("right") && et > 0) g.x = et;
        else {
          const n = et * Ln(et);
          g.x = Math.abs(n) < Math.abs(et) ? n : et
        }(Math.abs(g.x) > 0 || Math.abs(g.y) > 0) && y(tt, !0), (a = i(A)) == null || a.style.setProperty("--swipe-amount-x", `${g.x}px`), (e = i(A)) == null || e.style.setProperty("--swipe-amount-y", `${g.y}px`)
    },
    Vt = () => {
      y(b, !1), y(R, null), Mt = null
    },
    St = w(() => t.toast.icon ? t.toast.icon : i(G) === "success" ? t.successIcon : i(G) === "error" ? t.errorIcon : i(G) === "warning" ? t.warningIcon : i(G) === "info" ? t.infoIcon : i(G) === "loading" ? t.loadingIcon : null);
  var K = is();
  gt(K, "tabindex", 0);
  let pe;
  var De = Q(K);
  {
    var Te = N => {
      var x = Ji(),
        Z = Q(x);
      Ot(Z, () => t.closeIcon ?? Gt), j(x), Ct(et => {
        gt(x, "aria-label", t.closeButtonAriaLabel), gt(x, "data-disabled", i(rt)), ne(x, 1, et)
      }, [() => {
        var et, Y, g;
        return re(ae((et = i(ct)) == null ? void 0 : et.closeButton, (g = (Y = t.toast) == null ? void 0 : Y.classes) == null ? void 0 : g.closeButton))
      }]), he("click", x, () => {
        var et, Y;
        i(rt) || !i(ht) || (U(), (Y = (et = t.toast).onDismiss) == null || Y.call(et, t.toast))
      }), _(N, x)
    };
    lt(De, N => {
      i(Et) && !t.toast.component && i(G) !== "loading" && t.closeIcon !== null && N(Te)
    })
  }
  var Se = bt(De, 2);
  {
    var ve = N => {
        const x = w(() => t.toast.component);
        var Z = q(),
          et = W(Z);
        Jt(et, () => i(x), (Y, g) => {
          g(Y, Ae(() => t.toast.componentProps, {
            closeToast: U
          }))
        }), _(N, Z)
      },
      Ne = N => {
        var x = ns(),
          Z = W(x);
        {
          var et = f => {
            var d = Zi(),
              C = Q(d);
            {
              var L = k => {
                var M = q(),
                  ft = W(M);
                {
                  var X = $ => {
                      var Ft = q(),
                        Ut = W(Ft);
                      Jt(Ut, () => t.toast.icon, (wt, Lt) => {
                        Lt(wt, {})
                      }), _($, Ft)
                    },
                    ot = $ => {
                      r($)
                    };
                  lt(ft, $ => {
                    t.toast.icon ? $(X) : $(ot, !1)
                  })
                }
                _(k, M)
              };
              lt(C, k => {
                (t.toast.promise || i(G) === "loading") && k(L)
              })
            }
            var ut = bt(C, 2);
            {
              var nt = k => {
                var M = q(),
                  ft = W(M);
                {
                  var X = wt => {
                      var Lt = q(),
                        te = W(Lt);
                      Jt(te, () => t.toast.icon, (jn, Kn) => {
                        Kn(jn, {})
                      }), _(wt, Lt)
                    },
                    ot = wt => {
                      var Lt = q(),
                        te = W(Lt);
                      Ot(te, () => t.successIcon ?? Gt), _(wt, Lt)
                    },
                    $ = wt => {
                      var Lt = q(),
                        te = W(Lt);
                      Ot(te, () => t.errorIcon ?? Gt), _(wt, Lt)
                    },
                    Ft = wt => {
                      var Lt = q(),
                        te = W(Lt);
                      Ot(te, () => t.warningIcon ?? Gt), _(wt, Lt)
                    },
                    Ut = wt => {
                      var Lt = q(),
                        te = W(Lt);
                      Ot(te, () => t.infoIcon ?? Gt), _(wt, Lt)
                    };
                  lt(ft, wt => {
                    t.toast.icon ? wt(X) : i(G) === "success" ? wt(ot, 1) : i(G) === "error" ? wt($, 2) : i(G) === "warning" ? wt(Ft, 3) : i(G) === "info" && wt(Ut, 4)
                  })
                }
                _(k, M)
              };
              lt(ut, k => {
                t.toast.type !== "loading" && k(nt)
              })
            }
            j(d), Ct(k => ne(d, 1, k), [() => {
              var k, M, ft;
              return re(ae((k = i(ct)) == null ? void 0 : k.icon, (ft = (M = t.toast) == null ? void 0 : M.classes) == null ? void 0 : ft.icon))
            }]), _(f, d)
          };
          lt(Z, f => {
            (i(G) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (i(St) !== null || t.toast.icon) && f(et)
          })
        }
        var Y = bt(Z, 2),
          g = Q(Y),
          Dt = Q(g);
        {
          var a = f => {
            var d = q(),
              C = W(d);
            {
              var L = nt => {
                  const k = w(() => t.toast.title);
                  var M = q(),
                    ft = W(M);
                  Jt(ft, () => i(k), (X, ot) => {
                    ot(X, Ae(() => t.toast.componentProps))
                  }), _(nt, M)
                },
                ut = nt => {
                  var k = wn();
                  Ct(() => Pt(k, t.toast.title)), _(nt, k)
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
        j(g);
        var e = bt(g, 2);
        {
          var n = f => {
            var d = $i(),
              C = Q(d);
            {
              var L = nt => {
                  const k = w(() => t.toast.description);
                  var M = q(),
                    ft = W(M);
                  Jt(ft, () => i(k), (X, ot) => {
                    ot(X, Ae(() => t.toast.componentProps))
                  }), _(nt, M)
                },
                ut = nt => {
                  var k = wn();
                  Ct(() => Pt(k, t.toast.description)), _(nt, k)
                };
              lt(C, nt => {
                typeof t.toast.description != "string" ? nt(L) : nt(ut, !1)
              })
            }
            j(d), Ct(nt => ne(d, 1, nt), [() => {
              var nt, k;
              return re(ae(E(), i(_t), (nt = i(ct)) == null ? void 0 : nt.description, (k = t.toast.classes) == null ? void 0 : k.description))
            }]), _(f, d)
          };
          lt(e, f => {
            t.toast.description && f(n)
          })
        }
        j(Y);
        var s = bt(Y, 2);
        {
          var o = f => {
            var d = q(),
              C = W(d);
            {
              var L = k => {
                  var M = q(),
                    ft = W(M);
                  Jt(ft, () => t.toast.cancel, (X, ot) => {
                    ot(X, {})
                  }), _(k, M)
                },
                ut = k => {
                  var M = ts(),
                    ft = Q(M, !0);
                  j(M), Ct(X => {
                    an(M, t.toast.cancelButtonStyle ?? h()), ne(M, 1, X), Pt(ft, t.toast.cancel.label)
                  }, [() => {
                    var X, ot, $;
                    return re(ae((X = i(ct)) == null ? void 0 : X.cancelButton, ($ = (ot = t.toast) == null ? void 0 : ot.classes) == null ? void 0 : $.cancelButton))
                  }]), he("click", M, X => {
                    var ot, $;
                    Ge(t.toast.cancel) && i(ht) && (($ = (ot = t.toast.cancel) == null ? void 0 : ot.onClick) == null || $.call(ot, X), U())
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
            var d = q(),
              C = W(d);
            {
              var L = k => {
                  var M = q(),
                    ft = W(M);
                  Jt(ft, () => t.toast.action, (X, ot) => {
                    ot(X, {})
                  }), _(k, M)
                },
                ut = k => {
                  var M = es(),
                    ft = Q(M, !0);
                  j(M), Ct(X => {
                    an(M, t.toast.actionButtonStyle ?? m()), ne(M, 1, X), Pt(ft, t.toast.action.label)
                  }, [() => {
                    var X, ot, $;
                    return re(ae((X = i(ct)) == null ? void 0 : X.actionButton, ($ = (ot = t.toast) == null ? void 0 : ot.classes) == null ? void 0 : $.actionButton))
                  }]), he("click", M, X => {
                    var ot;
                    Ge(t.toast.action) && ((ot = t.toast.action) == null || ot.onClick(X), !X.defaultPrevented && U())
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
        Ct(f => ne(g, 1, f), [() => {
          var f, d, C;
          return re(ae((f = i(ct)) == null ? void 0 : f.title, (C = (d = t.toast) == null ? void 0 : d.classes) == null ? void 0 : C.title))
        }]), _(N, x)
      };
    lt(Se, N => {
      t.toast.component ? N(ve) : N(Ne, !1)
    })
  }
  j(K), en(K, N => y(A, N), () => i(A)), Ct((N, x, Z) => {
    ne(K, 1, N), gt(K, "data-rich-colors", t.toast.richColors ?? O()), gt(K, "data-styled", !(t.toast.component || t.toast.unstyled || D())), gt(K, "data-mounted", i(S)), gt(K, "data-promise", x), gt(K, "data-swiped", i(tt)), gt(K, "data-removed", i(v)), gt(K, "data-visible", i(st)), gt(K, "data-y-position", i(jt)[0]), gt(K, "data-x-position", i(jt)[1]), gt(K, "data-index", t.index), gt(K, "data-front", i(P)), gt(K, "data-swiping", i(b)), gt(K, "data-dismissable", i(ht)), gt(K, "data-type", i(G)), gt(K, "data-invert", i(H)), gt(K, "data-swipe-out", i(I)), gt(K, "data-swipe-direction", i(z)), gt(K, "data-expanded", Z), pe = an(K, `${t.style} ${t.toast.style}`, pe, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": At.toasts.length - t.index,
      "--offset": `${i(v)?i(B):i(T)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${i(at)}px`
    })
  }, [() => {
    var N, x, Z, et, Y, g;
    return re(ae(t.class, i(Nt), (N = i(ct)) == null ? void 0 : N.toast, (Z = (x = t.toast) == null ? void 0 : x.classes) == null ? void 0 : Z.toast, (et = i(ct)) == null ? void 0 : et[i(G)], (g = (Y = t.toast) == null ? void 0 : Y.classes) == null ? void 0 : g[i(G)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && i(S))]), he("pointermove", K, Ht), he("pointerup", K, oe), he("pointerdown", K, ge), $e("dragend", K, Vt), _(l, K), $t()
}
An(["pointermove", "pointerup", "pointerdown", "click"]);
var os = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function as(l) {
  var t = os();
  _(l, t)
}
var rs = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function ls(l) {
  var t = rs();
  _(l, t)
}
var us = ze('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function cs(l) {
  var t = us();
  _(l, t)
}
var ds = ze('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function hs(l) {
  var t = ds();
  _(l, t)
}
var fs = ze('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function ms(l) {
  var t = fs();
  _(l, t)
}
const gs = 3,
  Bn = "24px",
  Hn = "16px",
  ps = 4e3,
  vs = 356,
  ys = 14,
  ln = "dark",
  je = "light";

function Cs(l, t) {
  const r = {};
  return [l, t].forEach((h, m) => {
    const E = m === 1,
      D = E ? "--mobile-offset" : "--offset",
      O = E ? Hn : Bn;

    function V(S) {
      ["top", "right", "bottom", "left"].forEach(v => {
        r[`${D}-${v}`] = typeof S == "number" ? `${S}px` : S
      })
    }
    typeof h == "number" || typeof h == "string" ? V(h) : typeof h == "object" ? ["top", "right", "bottom", "left"].forEach(S => {
      const v = h[S];
      v === void 0 ? r[`${D}-${S}`] = O : r[`${D}-${S}`] = typeof v == "number" ? `${v}px` : v
    }) : V(O)
  }), r
}
var _s = mt("<ol></ol>"),
  bs = mt('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-smjlix"><!></section>');

function ws(l, t) {
  Zt(t, !0);

  function r(T) {
    return T !== "system" ? T : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ln : je
  }
  let h = F(t, "invert", 3, !1),
    m = F(t, "position", 3, "bottom-right"),
    E = F(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    D = F(t, "expand", 3, !1),
    O = F(t, "closeButton", 3, !1),
    V = F(t, "offset", 3, Bn),
    S = F(t, "mobileOffset", 3, Hn),
    v = F(t, "theme", 3, "light"),
    b = F(t, "richColors", 3, !1),
    I = F(t, "duration", 3, ps),
    tt = F(t, "visibleToasts", 3, gs),
    B = F(t, "toastOptions", 19, () => ({})),
    at = F(t, "dir", 7, "auto"),
    pt = F(t, "gap", 3, ys),
    A = F(t, "containerAriaLabel", 3, "Notifications"),
    R = F(t, "closeButtonAriaLabel", 3, "Close toast"),
    z = Ee(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function P() {
    if (at() !== "auto") return at();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const T = document.documentElement.getAttribute("dir");
    return T === "auto" || !T ? (xe(() => at(window.getComputedStyle(document.documentElement).direction ?? "ltr")), at()) : (xe(() => at(T)), T)
  }
  const st = w(() => Array.from(new Set([m(), ...At.toasts.filter(T => T.position).map(T => T.position)].filter(Boolean))));
  let G = it(!1),
    ht = it(!1),
    Nt = it(gn(r(v()))),
    _t = it(void 0),
    It = it(null),
    Et = it(!1);
  const Wt = w(() => E().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Rt(() => {
    At.toasts.length <= 1 && y(G, !1)
  }), Rt(() => {
    const T = At.toasts.filter(U => U.dismiss && !U.delete);
    if (T.length > 0) {
      const U = At.toasts.map(vt => T.find(kt => kt.id === vt.id) ? {
        ...vt,
        delete: !0
      } : vt);
      At.toasts = U
    }
  }), Rt(() => () => {
    i(_t) && i(It) && (i(It).focus({
      preventScroll: !0
    }), y(It, null), y(Et, !1))
  }), me(() => (At.reset(), Pe(document, "keydown", U => {
    var J, kt;
    E().every(qt => U[qt] || U.code === qt) && (y(G, !0), (J = i(_t)) == null || J.focus()), U.code === "Escape" && (document.activeElement === i(_t) || (kt = i(_t)) != null && kt.contains(document.activeElement)) && y(G, !1)
  }))), Rt(() => {
    if (v() !== "system" && y(Nt, v()), typeof window < "u") {
      v() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? y(Nt, ln) : y(Nt, je));
      const T = window.matchMedia("(prefers-color-scheme: dark)"),
        U = ({
          matches: vt
        }) => {
          y(Nt, vt ? ln : je, !0)
        };
      "addEventListener" in T ? T.addEventListener("change", U) : T.addListener(U)
    }
  });
  const Mt = T => {
      var U;
      (U = t.onblur) == null || U.call(t, T), i(Et) && !T.currentTarget.contains(T.relatedTarget) && (y(Et, !1), i(It) && (i(It).focus({
        preventScroll: !0
      }), y(It, null)))
    },
    jt = T => {
      var vt;
      (vt = t.onfocus) == null || vt.call(t, T), !(T.target instanceof HTMLElement && T.target.dataset.dismissable === "false") && (i(Et) || (y(Et, !0), y(It, T.relatedTarget, !0)))
    },
    Bt = T => {
      var vt;
      (vt = t.onpointerdown) == null || vt.call(t, T), !(T.target instanceof HTMLElement && T.target.dataset.dismissable === "false") && y(ht, !0)
    },
    ee = T => {
      var U;
      (U = t.onmouseenter) == null || U.call(t, T), y(G, !0)
    },
    H = T => {
      var U;
      (U = t.onmouseleave) == null || U.call(t, T), i(ht) || y(G, !1)
    },
    rt = T => {
      var U;
      (U = t.onmousemove) == null || U.call(t, T), y(G, !0)
    },
    ct = T => {
      var U;
      (U = t.ondragend) == null || U.call(t, T), y(G, !1)
    },
    Tt = T => {
      var U;
      (U = t.onpointerup) == null || U.call(t, T), y(ht, !1)
    };
  Fi.set(new ti);
  var Kt = bs();
  gt(Kt, "tabindex", -1);
  var Yt = Q(Kt);
  {
    var se = T => {
      var U = q(),
        vt = W(U);
      Ye(vt, 18, () => i(st), J => J, (J, kt, qt, ge) => {
        const oe = w(() => {
            const [St, K] = kt.split("-");
            return {
              y: St,
              x: K
            }
          }),
          Ht = w(() => Cs(V(), S()));
        var Vt = _s();
        Ce(Vt, St => {
          var K;
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
            onmouseenter: ee,
            onmousemove: rt,
            onmouseleave: H,
            ondragend: ct,
            onpointerdown: Bt,
            onpointerup: Tt,
            ...z,
            [yi]: {
              "--front-toast-height": `${(K=At.heights[0])==null?void 0:K.height}px`,
              "--width": `${vs}px`,
              "--gap": `${pt()}px`,
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
        }, [P], void 0, void 0, "svelte-smjlix"), Ye(Vt, 23, () => At.toasts.filter(St => !St.position && i(qt) === 0 || St.position === kt), St => St.id, (St, K, pe, De) => {
          {
            const Te = s => {
                var o = q(),
                  c = W(o);
                {
                  var u = d => {
                      var C = q(),
                        L = W(C);
                      Ot(L, () => t.successIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      as(d)
                    };
                  lt(c, d => {
                    t.successIcon ? d(u) : t.successIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              },
              Se = s => {
                var o = q(),
                  c = W(o);
                {
                  var u = d => {
                      var C = q(),
                        L = W(C);
                      Ot(L, () => t.errorIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      ls(d)
                    };
                  lt(c, d => {
                    t.errorIcon ? d(u) : t.errorIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              },
              ve = s => {
                var o = q(),
                  c = W(o);
                {
                  var u = d => {
                      var C = q(),
                        L = W(C);
                      Ot(L, () => t.warningIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      cs(d)
                    };
                  lt(c, d => {
                    t.warningIcon ? d(u) : t.warningIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              },
              Ne = s => {
                var o = q(),
                  c = W(o);
                {
                  var u = d => {
                      var C = q(),
                        L = W(C);
                      Ot(L, () => t.infoIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      hs(d)
                    };
                  lt(c, d => {
                    t.infoIcon ? d(u) : t.infoIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              },
              N = s => {
                var o = q(),
                  c = W(o);
                {
                  var u = d => {
                      var C = q(),
                        L = W(C);
                      Ot(L, () => t.closeIcon ?? Gt), _(d, C)
                    },
                    f = d => {
                      ms(d)
                    };
                  lt(c, d => {
                    t.closeIcon ? d(u) : t.closeIcon !== null && d(f, 1)
                  })
                }
                _(s, o)
              };
            let x = w(() => {
                var s;
                return ((s = B()) == null ? void 0 : s.duration) ?? I()
              }),
              Z = w(() => {
                var s;
                return ((s = B()) == null ? void 0 : s.class) ?? ""
              }),
              et = w(() => {
                var s;
                return ((s = B()) == null ? void 0 : s.descriptionClass) || ""
              }),
              Y = w(() => {
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
            ss(St, {
              get index() {
                return i(pe)
              },
              get toast() {
                return i(K)
              },
              get defaultRichColors() {
                return b()
              },
              get duration() {
                return i(x)
              },
              get class() {
                return i(Z)
              },
              get descriptionClass() {
                return i(et)
              },
              get invert() {
                return h()
              },
              get visibleToasts() {
                return tt()
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
                return i(Y)
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
                return D()
              },
              get expanded() {
                return i(G)
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
        }), j(Vt), en(Vt, St => y(_t, St), () => i(_t)), Ct(() => Vt.dir = Vt.dir), _(J, Vt)
      }), _(T, U)
    };
    lt(Yt, T => {
      At.toasts.length > 0 && T(se)
    })
  }
  j(Kt), Ct(() => gt(Kt, "aria-label", `${A()??""} ${i(Wt)??""}`)), _(l, Kt), $t()
}
var Is = mt('<div class="flex h-16 items-center justify-center"><span class="loading loading-spinner loading-lg"></span></div>'),
  Es = mt("<!> <div><h-captcha></h-captcha></div>", 3);

function Ds(l, t) {
  Zt(t, !0);
  let r = F(t, "theme", 19, () => cn.theme === "dark" ? "dark" : "light"),
    h = F(t, "size", 3, "normal"),
    m = it(void 0),
    E = it(!1);
  me(async () => {
    await Mn(() => import("../chunks/BkhEDlgP.js"), [], import.meta.url), i(m) && (i(m).addEventListener("verified", b => {
      var I;
      (I = t.callback) == null || I.call(t, b.token)
    }), i(m).addEventListener("error", b => {
      var I;
      (I = t.errorCallback) == null || I.call(t, b.error)
    }), i(m).addEventListener("expired", () => {
      var b;
      (b = t.expiredCallback) == null || b.call(t)
    }), i(m).addEventListener("loaded", () => {
      var b;
      y(E, !0), (b = t.onload) == null || b.call(t)
    }), "hcaptcha" in window && y(E, !0))
  });
  var D = Es(),
    O = W(D);
  {
    var V = b => {
      var I = Is();
      _(b, I)
    };
    lt(O, b => {
      i(E) || b(V)
    })
  }
  var S = bt(O, 2),
    v = Q(S);
  Ct(() => rn(v, "site-key", t.siteKey)), Ct(() => rn(v, "size", h())), Ct(() => rn(v, "theme", r())), en(v, b => y(m, b), () => i(m)), j(S), _(l, D), $t()
}

function pn(...l) {
  return _i(Ci(l))
}
var Ts = mt("<div><!></div>");

function Ss(l, t) {
  Zt(t, !0);
  let r = F(t, "ref", 15, null),
    h = Ee(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var m = Ts();
  Ce(m, D => ({
    class: D,
    ...h
  }), [() => pn("flex items-center", t.class)]);
  var E = Q(m);
  Ot(E, () => t.children ?? Gt), j(m), en(m, D => r(D), () => r()), _(l, m), $t()
}
var ke, qe;
class Ns {
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
const Ls = 1,
  xs = 9,
  As = 11;

function Ps(l) {
  return tn(l) && l.nodeType === Ls && typeof l.nodeName == "string"
}

function Un(l) {
  return tn(l) && l.nodeType === xs
}

function Os(l) {
  var t;
  return tn(l) && ((t = l.constructor) == null ? void 0 : t.name) === "VisualViewport"
}

function Rs(l) {
  return tn(l) && l.nodeType !== void 0
}

function ks(l) {
  return Rs(l) && l.nodeType === As && "host" in l
}

function Ms(l) {
  return Un(l) ? l : Os(l) ? l.document : (l == null ? void 0 : l.ownerDocument) ?? document
}

function Wn(l) {
  var t;
  return ks(l) ? Wn(l.host) : Un(l) ? l.defaultView ?? window : Ps(l) ? ((t = l.ownerDocument) == null ? void 0 : t.defaultView) ?? window : window
}

function Bs(l) {
  let t = l.activeElement;
  for (; t != null && t.shadowRoot;) {
    const r = t.shadowRoot.activeElement;
    if (r === t) break;
    t = r
  }
  return t
}
var Me;
class Hs {
  constructor(t) {
    yt(this, "element");
    dt(this, Me, w(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
    yt(this, "getDocument", () => Ms(this.root));
    yt(this, "getWindow", () => this.getDocument().defaultView ?? window);
    yt(this, "getActiveElement", () => Bs(this.root));
    yt(this, "isActiveElement", t => t === this.getActiveElement());
    yt(this, "querySelector", t => this.root ? this.root.querySelector(t) : null);
    yt(this, "querySelectorAll", t => this.root ? this.root.querySelectorAll(t) : []);
    yt(this, "setTimeout", (t, r) => this.getWindow().setTimeout(t, r));
    yt(this, "clearTimeout", t => this.getWindow().clearTimeout(t));
    typeof t == "function" ? this.element = xt(t) : this.element = t
  }
  get root() {
    return i(p(this, Me))
  }
  set root(t) {
    y(p(this, Me), t)
  }
  getElementById(t) {
    return this.root.getElementById(t)
  }
}
Me = new WeakMap;
const Us = 18,
  Vn = 40,
  Ws = `${Vn}px`,
  Vs = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");

function Fs({
  containerRef: l,
  inputRef: t,
  pushPasswordManagerStrategy: r,
  isFocused: h,
  domContext: m
}) {
  let E = it(!1),
    D = it(!1),
    O = it(!1);

  function V() {
    const v = r.current;
    return v === "none" ? !1 : v === "increase-width" && i(E) && i(D)
  }

  function S() {
    const v = l.current,
      b = t.current;
    if (!v || !b || i(O) || r.current === "none") return;
    const I = v,
      tt = I.getBoundingClientRect().left + I.offsetWidth,
      B = I.getBoundingClientRect().top + I.offsetHeight / 2,
      at = tt - Us,
      pt = B;
    m.querySelectorAll(Vs).length === 0 && m.getDocument().elementFromPoint(at, pt) === v || (y(E, !0), y(O, !0))
  }
  return Rt(() => {
    const v = l.current;
    if (!v || r.current === "none") return;

    function b() {
      const B = Wn(v).innerWidth - v.getBoundingClientRect().right;
      y(D, B >= Vn)
    }
    b();
    const I = setInterval(b, 1e3);
    return () => {
      clearInterval(I)
    }
  }), Rt(() => {
    const v = h.current || m.getActiveElement() === t.current;
    if (r.current === "none" || !v) return;
    const b = setTimeout(S, 0),
      I = setTimeout(S, 2e3),
      tt = setTimeout(S, 5e3),
      B = setTimeout(() => {
        y(O, !0)
      }, 6e3);
    return () => {
      clearTimeout(b), clearTimeout(I), clearTimeout(tt), clearTimeout(B)
    }
  }), {
    get hasPwmBadge() {
      return i(E)
    },
    get willPushPwmBadge() {
      return V()
    },
    PWM_BADGE_SPACE_WIDTH: Ws
  }
}
const Fn = di({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  zs = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var Xt, be, ue, zt, Qt, we, ie, ce, fe, Ie, Xe, Be, He, Qe, Je, zn, Ue, We, Ze, Ve;
const vn = class vn {
  constructor(t) {
    dt(this, Je);
    yt(this, "opts");
    yt(this, "attachment");
    dt(this, Xt, Dn(null));
    dt(this, be, it(!1));
    yt(this, "inputAttachment", dn(p(this, Xt)));
    dt(this, ue, Dn(!1));
    dt(this, zt, it(null));
    dt(this, Qt, it(null));
    dt(this, we, new Ns(() => this.opts.value.current ?? ""));
    dt(this, ie, w(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    dt(this, ce, it(gn({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    dt(this, fe);
    dt(this, Ie);
    yt(this, "domContext");
    yt(this, "onkeydown", t => {
      const r = t.key;
      zs.includes(r) || t.ctrlKey || t.metaKey || r && i(p(this, ie)) && !i(p(this, ie)).test(r) && t.preventDefault()
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
        y(p(this, zt), null), y(p(this, Qt), null);
        return
      }
      const h = t.selectionStart,
        m = t.selectionEnd,
        E = t.selectionDirection ?? "none",
        D = t.maxLength,
        O = t.value,
        V = i(p(this, ce)).prev;
      let S = -1,
        v = -1,
        b;
      if (O.length !== 0 && h !== null && m !== null) {
        const pt = h === m,
          A = h === O.length && O.length < D;
        if (pt && !A) {
          const R = h;
          if (R === 0) S = 0, v = 1, b = "forward";
          else if (R === D) S = R - 1, v = R, b = "backward";
          else if (D > 1 && O.length > 1) {
            let z = 0;
            if (V[0] !== null && V[1] !== null) {
              b = R < V[1] ? "backward" : "forward";
              const P = V[0] === V[1] && V[0] < D;
              b === "backward" && !P && (z = -1)
            }
            S = z + R, v = z + R + 1
          }
        }
        S !== -1 && v !== -1 && S !== v && ((at = p(this, Xt).current) == null || at.setSelectionRange(S, v, b))
      }
      const I = S !== -1 ? S : h,
        tt = v !== -1 ? v : m,
        B = b ?? E;
      y(p(this, zt), I, !0), y(p(this, Qt), tt, !0), i(p(this, ce)).prev = [I, tt, B]
    });
    yt(this, "oninput", t => {
      const r = t.currentTarget.value.slice(0, this.opts.maxLength.current);
      if (r.length > 0 && i(p(this, ie)) && !i(p(this, ie)).test(r)) {
        t.preventDefault();
        return
      }
      typeof p(this, we).current == "string" && r.length < p(this, we).current.length && this.domContext.getDocument().dispatchEvent(new Event("selectionchange")), this.opts.value.current = r
    });
    yt(this, "onfocus", t => {
      const r = p(this, Xt).current;
      if (r) {
        const h = Math.min(r.value.length, this.opts.maxLength.current - 1),
          m = r.value.length;
        r.setSelectionRange(h, m), y(p(this, zt), h, !0), y(p(this, Qt), m, !0)
      }
      p(this, ue).current = !0
    });
    yt(this, "onpaste", t => {
      var v, b, I, tt;
      const r = p(this, Xt).current;
      if (!r) return;
      const h = B => {
          const at = r.selectionStart === null ? void 0 : r.selectionStart,
            pt = r.selectionEnd === null ? void 0 : r.selectionEnd,
            A = at !== pt,
            R = this.opts.value.current;
          return (A ? R.slice(0, at) + B + R.slice(pt) : R.slice(0, at) + B + R.slice(at)).slice(0, this.opts.maxLength.current)
        },
        m = B => B.length > 0 && i(p(this, ie)) && !i(p(this, ie)).test(B);
      if (!((v = this.opts.pasteTransformer) != null && v.current) && (!p(this, Ie).isIOS || !t.clipboardData || !r)) {
        const B = h((b = t.clipboardData) == null ? void 0 : b.getData("text/plain"));
        m(B) && t.preventDefault();
        return
      }
      const E = ((I = t.clipboardData) == null ? void 0 : I.getData("text/plain")) ?? "",
        D = (tt = this.opts.pasteTransformer) != null && tt.current ? this.opts.pasteTransformer.current(E) : E;
      t.preventDefault();
      const O = h(D);
      if (m(O)) return;
      r.value = O, this.opts.value.current = O;
      const V = Math.min(O.length, this.opts.maxLength.current - 1),
        S = O.length;
      r.setSelectionRange(V, S), y(p(this, zt), V, !0), y(p(this, Qt), S, !0)
    });
    yt(this, "onmouseover", t => {
      y(p(this, be), !0)
    });
    yt(this, "onmouseleave", t => {
      y(p(this, be), !1)
    });
    yt(this, "onblur", t => {
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
    this.opts = t, this.attachment = dn(this.opts.ref), this.domContext = new Hs(t.ref), de(this, Ie, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((r = window == null ? void 0 : window.CSS) == null ? void 0 : r.supports("-webkit-touch-callout", "none"))
    }), de(this, fe, Fs({
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
      const E = Pe(this.domContext.getDocument(), "selectionchange", p(this, Ue), {
        capture: !0
      });
      p(this, Ue).call(this), this.domContext.getActiveElement() === h && (p(this, ue).current = !0), this.domContext.getElementById("pin-input-style") || _n(this, Je, zn).call(this);
      const D = () => {
        m && m.style.setProperty("--bits-pin-input-root-height", `${h.clientHeight}px`)
      };
      D();
      const O = new ResizeObserver(D);
      return O.observe(h), () => {
        E(), O.disconnect()
      }
    }), ui([() => this.opts.value.current, () => p(this, Xt).current], () => {
      Gs(() => {
        const h = p(this, Xt).current;
        if (!h) return;
        h.dispatchEvent(new Event("input"));
        const m = h.selectionStart,
          E = h.selectionEnd,
          D = h.selectionDirection ?? "none";
        m !== null && E !== null && (y(p(this, zt), m, !0), y(p(this, Qt), E, !0), i(p(this, ce)).prev = [m, E, D])
      }, this.domContext)
    }), Rt(() => {
      const h = this.opts.value.current,
        m = p(this, we).current,
        E = this.opts.maxLength.current,
        D = this.opts.onComplete.current;
      m !== void 0 && h !== m && m.length < E && h.length === E && D(h)
    })
  }
  static create(t) {
    return new vn(t)
  }
  get rootProps() {
    return i(p(this, Be))
  }
  set rootProps(t) {
    y(p(this, Be), t)
  }
  get inputWrapperProps() {
    return i(p(this, He))
  }
  set inputWrapperProps(t) {
    y(p(this, He), t)
  }
  get inputProps() {
    return i(p(this, We))
  }
  set inputProps(t) {
    y(p(this, We), t)
  }
  get snippetProps() {
    return i(p(this, Ve))
  }
  set snippetProps(t) {
    y(p(this, Ve), t)
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
    yt(this, "opts");
    yt(this, "attachment");
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
    y(p(this, Fe), t)
  }
};
Fe = new WeakMap;
let mn = yn;

function Gs(l, t) {
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
var js = mt("<div><!> <div><input/></div></div>");

function Ks(l, t) {
  const r = Pn();
  Zt(t, !0);
  let h = F(t, "id", 19, () => hn(r)),
    m = F(t, "inputId", 19, () => `${hn(r)}-input`),
    E = F(t, "ref", 15, null),
    D = F(t, "maxlength", 3, 6),
    O = F(t, "textalign", 3, "left"),
    V = F(t, "inputmode", 3, "numeric"),
    S = F(t, "onComplete", 3, Tn),
    v = F(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    b = F(t, "class", 3, ""),
    I = F(t, "autocomplete", 3, "one-time-code"),
    tt = F(t, "disabled", 3, !1),
    B = F(t, "value", 15, ""),
    at = F(t, "onValueChange", 3, Tn),
    pt = Ee(t, ["$$slots", "$$events", "$$legacy", "id", "inputId", "ref", "maxlength", "textalign", "pattern", "inputmode", "onComplete", "pushPasswordManagerStrategy", "class", "children", "autocomplete", "disabled", "value", "onValueChange", "pasteTransformer"]);
  const A = fn.create({
      id: xt(() => h()),
      ref: xt(() => E(), _t => E(_t)),
      inputId: xt(() => m()),
      autocomplete: xt(() => I()),
      maxLength: xt(() => D()),
      textAlign: xt(() => O()),
      disabled: xt(() => tt()),
      inputmode: xt(() => V()),
      pattern: xt(() => t.pattern),
      onComplete: xt(() => S()),
      value: xt(() => B(), _t => {
        B(_t), at()(_t)
      }),
      pushPasswordManagerStrategy: xt(() => v()),
      pasteTransformer: xt(() => t.pasteTransformer)
    }),
    R = w(() => Ke(pt, A.inputProps)),
    z = w(() => Ke(A.rootProps, {
      class: b()
    })),
    P = w(() => Ke(A.inputWrapperProps, {}));
  var st = js();
  Ce(st, () => ({
    ...i(z)
  }));
  var G = Q(st);
  Ot(G, () => t.children ?? Gt, () => A.snippetProps);
  var ht = bt(G, 2);
  Ce(ht, () => ({
    ...i(P)
  }));
  var Nt = Q(ht);
  Ce(Nt, () => ({
    ...i(R)
  }), void 0, void 0, void 0, void 0, !0), j(ht), j(st), _(l, st), $t()
}
var Ys = mt("<div><!></div>");

function qs(l, t) {
  const r = Pn();
  Zt(t, !0);
  let h = F(t, "id", 19, () => hn(r)),
    m = F(t, "ref", 15, null),
    E = Ee(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]);
  const D = mn.create({
      id: xt(() => h()),
      ref: xt(() => m(), I => m(I)),
      cell: xt(() => t.cell)
    }),
    O = w(() => Ke(E, D.props));
  var V = q(),
    S = W(V);
  {
    var v = I => {
        var tt = q(),
          B = W(tt);
        Ot(B, () => t.child, () => ({
          props: i(O)
        })), _(I, tt)
      },
      b = I => {
        var tt = Ys();
        Ce(tt, () => ({
          ...i(O)
        }));
        var B = Q(tt);
        Ot(B, () => t.children ?? Gt), j(tt), _(I, tt)
      };
    lt(S, I => {
      t.child ? I(v) : I(b, !1)
    })
  }
  _(l, V), $t()
}
var Xs = mt('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  Qs = mt(" <!>", 1);

function Js(l, t) {
  Zt(t, !0);
  let r = F(t, "ref", 15, null),
    h = Ee(t, ["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]);
  var m = q(),
    E = W(m);
  {
    let D = w(() => pn("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    Jt(E, () => qs, (O, V) => {
      V(O, Ae({
        get cell() {
          return t.cell
        },
        get class() {
          return i(D)
        }
      }, () => h, {
        get ref() {
          return r()
        },
        set ref(S) {
          r(S)
        },
        children: (S, v) => {
          On();
          var b = Qs(),
            I = W(b),
            tt = bt(I);
          {
            var B = at => {
              var pt = Xs();
              _(at, pt)
            };
            lt(tt, at => {
              t.cell.hasFakeCaret && at(B)
            })
          }
          Ct(() => Pt(I, `${t.cell.char??""} `)), _(S, b)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  _(l, m), $t()
}

function Zs(l, t) {
  Zt(t, !0);
  let r = F(t, "ref", 15, null),
    h = F(t, "value", 15, ""),
    m = Ee(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);
  var E = q(),
    D = W(E);
  {
    let O = w(() => pn("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    Jt(D, () => Ks, (V, S) => {
      S(V, Ae({
        get class() {
          return i(O)
        }
      }, () => m, {
        get ref() {
          return r()
        },
        set ref(v) {
          r(v)
        },
        get value() {
          return h()
        },
        set value(v) {
          h(v)
        }
      }))
    })
  }
  _(l, E), $t()
}
var un = {
    exports: {}
  },
  xn;

function $s() {
  return xn || (xn = 1, (function(l) {
    (function(t) {
      l.exports ? l.exports = t() : window.intlTelInput = t()
    })(() => {
      var t = (() => {
        var r = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          m = Object.getOwnPropertyNames,
          E = Object.prototype.hasOwnProperty,
          D = (a, e) => {
            for (var n in e) r(a, n, {
              get: e[n],
              enumerable: !0
            })
          },
          O = (a, e, n, s) => {
            if (e && typeof e == "object" || typeof e == "function")
              for (let o of m(e)) !E.call(a, o) && o !== n && r(a, o, {
                get: () => e[o],
                enumerable: !(s = h(e, o)) || s.enumerable
              });
            return a
          },
          V = a => O(r({}, "__esModule", {
            value: !0
          }), a),
          S = {};
        D(S, {
          Iti: () => Z,
          default: () => Dt
        });
        var v = [
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
          b = [];
        for (const a of v) b.push({
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
        var I = b,
          tt = {
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
          B = tt,
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
          pt = at,
          A = {
            ...B,
            ...pt
          },
          R = A,
          z = {
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
          G = {
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
          ee = {
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
          vt = a => Object.keys(a).filter(e => !!a[e]).join(" "),
          J = (a, e, n) => {
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
              } = this.options, o = vt({
                iti: !0,
                "iti--allow-dropdown": a,
                "iti--show-flags": e,
                "iti--inline-dropdown": !s,
                [n]: !!n
              }), c = J("div", {
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
                this.countryContainer = J("div", {
                  class: `iti__country-container ${P.V_HIDE}`
                }, a), e ? (this.selectedCountry = J("button", {
                  type: "button",
                  class: "iti__selected-country",
                  [H.EXPANDED]: "false",
                  [H.LABEL]: this.options.i18n.noCountrySelected,
                  [H.HASPOPUP]: "dialog",
                  [H.CONTROLS]: `iti-${this.id}__dropdown-content`
                }, this.countryContainer), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = J("div", {
                  class: "iti__selected-country"
                }, this.countryContainer);
                const o = J("div", {
                  class: "iti__selected-country-primary"
                }, this.selectedCountry);
                this.selectedCountryInner = J("div", {
                  class: P.FLAG
                }, o), e && (this.dropdownArrow = J("div", {
                  class: "iti__arrow",
                  [H.HIDDEN]: "true"
                }, o)), n && (this.selectedDialCode = J("div", {
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
              if (this.dropdownContent = J("div", {
                  id: `iti-${this.id}__dropdown-content`,
                  class: `iti__dropdown-content ${P.HIDE} ${u}`,
                  role: "dialog",
                  [H.MODAL]: "true"
                }), this.isRTL && this.dropdownContent.setAttribute("dir", "rtl"), n && this._buildSearchUI(), this.countryList = J("ul", {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  [H.LABEL]: s.countryListAriaLabel
                }, this.dropdownContent), this._appendListItems(), n && this.updateSearchResultsA11yText(), o) {
                const f = vt({
                  iti: !0,
                  "iti--container": !0,
                  "iti--fullscreen-popup": e,
                  "iti--inline-dropdown": !e,
                  [c]: !!c
                });
                this.dropdown = J("div", {
                  class: f
                }), this.dropdown.appendChild(this.dropdownContent)
              } else this.countryContainer.appendChild(this.dropdownContent)
            }
            _buildSearchUI() {
              const {
                i18n: a
              } = this.options, e = J("div", {
                class: "iti__search-input-wrapper"
              }, this.dropdownContent);
              this.searchIcon = J("span", {
                class: "iti__search-icon",
                [H.HIDDEN]: "true"
              }, e), this.searchIcon.innerHTML = kt(), this.searchInput = J("input", {
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
              }, e), this.searchClearButton = J("button", {
                type: "button",
                class: `iti__search-clear ${P.HIDE}`,
                [H.LABEL]: a.clearSearchAriaLabel,
                tabindex: "-1"
              }, e), this.searchClearButton.innerHTML = qt(this.id), this.searchResultsA11yText = J("span", {
                class: "iti__a11y-text"
              }, this.dropdownContent), this.searchNoResults = J("div", {
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
                  u ? this.hiddenInput = u : (this.hiddenInput = J("input", {
                    type: "hidden",
                    name: c.phone
                  }), a.appendChild(this.hiddenInput))
                }
                if (c.country) {
                  const u = (s = this.telInput.form) == null ? void 0 : s.querySelector(`input[name="${c.country}"]`);
                  u ? this.hiddenInputCountry = u : (this.hiddenInputCountry = J("input", {
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
                  s = vt({
                    [P.COUNTRY_ITEM]: !0
                  }),
                  o = J("li", {
                    id: `iti-${this.id}__item-${n.iso2}`,
                    class: s,
                    tabindex: "-1",
                    role: "option",
                    [H.SELECTED]: "false"
                  });
                o.dataset.dialCode = n.dialCode, o.dataset.countryCode = n.iso2, n.nodeById[this.id] = o, this.options.showFlags && J("div", {
                  class: `${P.FLAG} iti__${n.iso2}`
                }, o);
                const c = J("span", {
                  class: "iti__country-name"
                }, o);
                c.textContent = n.name;
                const u = J("span", {
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
              return I.filter(o => s.includes(o.iso2))
            } else if (n.length) {
              const s = n.map(o => o.toLowerCase());
              return I.filter(o => !s.includes(o.iso2))
            }
            return I
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
          K = a => {
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
        for (const a of I) a.name = R[a.iso2];
        var Ne = 0,
          N = new Set(I.map(a => a.iso2)),
          x = a => N.has(a),
          Z = class Gn {
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
              Ht(this.countries, this.options), St(this.countries, this.options), K(this.countries)
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
                x(n) ? (g.autoCountry = n, setTimeout(() => Y("handleAutoCountry"))) : (this._setInitialState(!0), Y("rejectAutoCountryPromise"))
              }, () => {
                this._setInitialState(!0), Y("rejectAutoCountryPromise")
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
                    X = C.substring(M);
                  this._setTelInputValue(ft + X), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(C) && this._triggerCountryChange();
                const L = (d == null ? void 0 : d.data) && ht.NON_PLUS_NUMERIC.test(d.data),
                  ut = (d == null ? void 0 : d.inputType) === G.PASTE && C;
                L || ut && !e ? u = !0 : ht.NON_PLUS_NUMERIC.test(C) || (u = !1);
                const nt = (d == null ? void 0 : d.detail) && d.detail.isSetNumber,
                  k = this.userNumeralSet === "ascii";
                if (n && !u && !nt && k) {
                  const M = this.ui.telInput.selectionStart || 0,
                    X = C.substring(0, M).replace(ht.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    ot = (d == null ? void 0 : d.inputType) === G.DELETE_FWD,
                    $ = this._getFullNumber(),
                    Ft = De($, C, g.utils, this.selectedCountryData, this.options.separateDialCode),
                    Ut = Te(X, Ft, M, ot);
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
                        X = f.slice(0, M),
                        ot = f.slice(ft),
                        $ = X + u.key + ot,
                        Ft = this._getFullNumber($),
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
                    X = M.replace(/\+/g, ""),
                    ot = ft && k ? `+${X}` : X;
                  let $ = f + ot + d;
                  if ($.length > 5) {
                    let Ut = g.utils.getCoreNumber($, C);
                    for (; Ut.length === 0 && $.length > 0;) $ = $.slice(0, -1), Ut = g.utils.getCoreNumber($, C);
                    if (!Ut) return;
                    if (this.maxCoreNumberLength && Ut.length > this.maxCoreNumberLength)
                      if (s.selectionEnd === u.length) {
                        const wt = Ut.length - this.maxCoreNumberLength;
                        $ = $.slice(0, $.length - wt)
                      } else return
                  }
                  this._setTelInputValue($);
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
              this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(P.ARROW_UP), this._trigger(z.OPEN_COUNTRY_DROPDOWN)
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
                  const ot = ut.map($ => `${c}${$}`);
                  for (const $ of ot)
                    if (f.startsWith($)) return null
                }
                const M = ut && !(nt === 0) && f.length > d.length,
                  ft = o && C.includes(o) && !M,
                  X = o === C[0];
                if (!ft && !X) return C[0]
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
              const n = e.dataset[ee.COUNTRY_CODE],
                s = this._setCountry(n);
              this._closeDropdown();
              const o = e.dataset[ee.DIAL_CODE];
              if (this._updateDialCode(o), this.options.formatOnDisplay) {
                const c = this._getTelInputValue();
                this._updateValFromNumber(c)
              }
              this.ui.telInput.focus(), s && this._triggerCountryChange()
            }
            _closeDropdown() {
              this.ui.dropdownContent.classList.contains(P.HIDE) || (this.ui.dropdownContent.classList.add(P.HIDE), this.ui.selectedCountry.setAttribute(H.EXPANDED, "false"), this.options.countrySearch && (this.ui.searchInput.removeAttribute(H.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(P.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(P.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(z.CLOSE_COUNTRY_DROPDOWN))
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
              this._trigger(z.COUNTRY_CHANGE)
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
              this._updateValFromNumber(n), s && this._triggerCountryChange(), this._trigger(z.INPUT, {
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
                return g.utils = s, Y("handleUtils"), !0
              }).catch(n => {
                throw Y("rejectUtilsScriptPromise", n), n
              })
            }
            return null
          },
          Y = (a, ...e) => {
            Object.values(g.instances).forEach(n => {
              const s = n[a];
              typeof s == "function" && s.apply(n, e)
            })
          },
          g = Object.assign((a, e) => {
            const n = new Z(a, e);
            return g.instances[n.id] = n, a.iti = n, n
          }, {
            defaults: Tt,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => I,
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
        return V(S)
      })();
      return t.default
    })
  })(un)), un.exports
}
var to = $s();
const eo = hi(to);
var no = mt('<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>'),
  io = mt('<span class="w-8"> </span>'),
  so = mt('<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary w-full"> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>', 1),
  oo = mt('<span class="w-8"> </span>'),
  ao = mt('<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-3 flex flex-col items-center gap-1"><button class="btn btn-ghost w-max"> <!></button> <button class="text-primary cursor-pointer text-xs"> </button></div>', 1),
  ro = mt('<div class="flex h-full w-full flex-col items-center"><!></div>');

function lo(l, t) {
  Zt(t, !0);
  let r = it(!0),
    h = it(""),
    m = it(0),
    E = it(!1);
  const D = w(() => i(m) > 0 || i(E));
  let O = it(!1),
    V = it(""),
    S = it(void 0);
  const v = w(() => {
    var A;
    return `phone:${(A=Rn.data)==null?void 0:A.id}`
  });
  Rt(() => {
    const A = localStorage.getItem(i(v));
    A && y(h, A, !0)
  }), me(() => {
    sn.getOtpCooldown().then(z => {
      y(m, z.cooldownMs, !0)
    }).catch(z => {
      ye.error(z.message)
    }).finally(() => {
      y(r, !1)
    });
    const A = 1e3,
      R = setInterval(() => {
        y(m, Math.max(0, i(m) - A), !0)
      }, A);
    return () => {
      clearInterval(R)
    }
  });
  async function b(A) {
    try {
      y(E, !0);
      const R = await sn.sendOtp(A);
      ye.info(`${Ai()} ${R.phone}`), y(h, R.phone, !0), y(m, R.cooldownMs, !0), localStorage.setItem(i(v), i(h))
    } catch (R) {
      ye.error(R.message)
    } finally {
      y(E, !1)
    }
  }
  Rt(() => {
    i(V).length === 6 && (y(O, !0), (async () => {
      try {
        await sn.verifyChallenge({
          type: "otp",
          code: i(V)
        }), ye.success(bi()), localStorage.removeItem(i(v)), t.onsuccess(i(h))
      } catch (A) {
        ye.error(A.message)
      } finally {
        y(V, ""), y(O, !1)
      }
    })())
  });
  var I = ro(),
    tt = Q(I);
  {
    var B = A => {
        var R = no();
        _(A, R)
      },
      at = A => {
        var R = so(),
          z = W(R),
          P = Q(z),
          st = Q(P),
          G = Q(st, !0);
        j(st);
        var ht = bt(st, 2),
          Nt = Q(ht, !0);
        j(ht), j(P);
        var _t = bt(P, 2),
          It = Q(_t);
        kn(It, () => H => (y(S, eo(H, {
          strictMode: !0,
          initialCountry: "br",
          loadUtils: () => Mn(() => import("../chunks/CbieT1Zk.js"), [], import.meta.url),
          containerClass: "w-full",
          dropdownContainer: document.body
        })), () => {
          var rt;
          (rt = i(S)) == null || rt.destroy()
        }));
        var Et = bt(It, 2),
          Wt = Q(Et),
          Mt = bt(Wt);
        {
          var jt = H => {
            var rt = io(),
              ct = Q(rt);
            j(rt), Ct(Tt => Pt(ct, `(${Tt??""})`), [() => Sn(i(m))]), _(H, rt)
          };
          lt(Mt, H => {
            i(m) > 0 && H(jt)
          })
        }
        j(Et), j(_t), j(z);
        var Bt = bt(z, 2),
          ee = Q(Bt, !0);
        j(Bt), Ct((H, rt, ct, Tt) => {
          Pt(G, H), Pt(Nt, rt), Et.disabled = i(D), Pt(Wt, `${ct??""} `), Pt(ee, Tt)
        }, [() => wi(), () => Ii(), () => Ei(), () => Di()]), $e("submit", _t, async () => {
          var rt;
          if (i(D)) return;
          if (!((rt = i(S)) != null && rt.isValidNumber())) {
            ye.error(Ti());
            return
          }
          const H = i(S).getNumber();
          await b(H)
        }), _(A, R)
      },
      pt = A => {
        var R = ao(),
          z = W(R),
          P = Q(z),
          st = Q(P, !0);
        j(P);
        var G = bt(P, 2),
          ht = Q(G);
        j(G), j(z);
        var Nt = bt(z, 2),
          _t = Q(Nt);
        {
          const H = (rt, ct) => {
            let Tt = () => ct == null ? void 0 : ct().cells;
            var Kt = q(),
              Yt = W(Kt);
            Jt(Yt, () => Ss, (se, T) => {
              T(se, {
                class: "border-primary",
                children: (U, vt) => {
                  var J = q(),
                    kt = W(J);
                  Ye(kt, 16, Tt, qt => qt, (qt, ge) => {
                    var oe = q(),
                      Ht = W(oe);
                    Jt(Ht, () => Js, (Vt, St) => {
                      St(Vt, {
                        get cell() {
                          return ge
                        },
                        class: "border-base-content/20 size-11 sm:size-12"
                      })
                    }), _(qt, oe)
                  }), _(U, J)
                },
                $$slots: {
                  default: !0
                }
              })
            }), _(rt, Kt)
          };
          Jt(_t, () => Zs, (rt, ct) => {
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
                y(V, Tt, !0)
              },
              children: H,
              $$slots: {
                default: !0
              }
            })
          })
        }
        j(Nt);
        var It = bt(Nt, 2),
          Et = Q(It),
          Wt = Q(Et),
          Mt = bt(Wt);
        {
          var jt = H => {
            var rt = oo(),
              ct = Q(rt);
            j(rt), Ct(Tt => Pt(ct, `(${Tt??""})`), [() => Sn(i(m))]), _(H, rt)
          };
          lt(Mt, H => {
            i(m) > 0 && H(jt)
          })
        }
        j(Et);
        var Bt = bt(Et, 2),
          ee = Q(Bt, !0);
        j(Bt), j(It), Ct((H, rt, ct, Tt) => {
          Pt(st, H), Pt(ht, `${rt??""} ${i(h)??""}`), Et.disabled = i(D), Pt(Wt, `${ct??""} `), Pt(ee, Tt)
        }, [() => Si(), () => Ni(), () => Li(), () => xi()]), he("click", Et, async () => {
          await b(i(h))
        }), he("click", Bt, () => {
          y(h, "")
        }), _(A, R)
      };
    lt(tt, A => {
      i(r) ? A(B) : i(h) ? A(pt, !1) : A(at, 1)
    })
  }
  j(I), _(l, I), $t()
}
An(["click"]);
var uo = mt('<dialog class="modal"><div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function co(l, t) {
  Zt(t, !0);
  const r = w(() => on.current !== null),
    h = w(() => {
      var v;
      return (v = on.current) == null ? void 0 : v.tier
    });
  var m = uo(),
    E = Q(m);
  let D;
  var O = Q(E),
    V = Q(O);
  {
    var S = v => {
      var b = q(),
        I = W(b);
      vi(I, () => on.errorCount, tt => {
        var B = q(),
          at = W(B);
        {
          var pt = z => {
              {
                let P = w(() => ii.trim());
                Pi(z, {
                  get siteKey() {
                    return i(P)
                  },
                  callback: st => En(st),
                  errorCallback: () => In()
                })
              }
            },
            A = z => {
              {
                let P = w(() => si.trim());
                Ds(z, {
                  get siteKey() {
                    return i(P)
                  },
                  callback: st => En(st),
                  errorCallback: () => In()
                })
              }
            },
            R = z => {
              lo(z, {
                onsuccess: () => ni()
              })
            };
          lt(at, z => {
            i(h) === 2 ? z(pt) : i(h) === 3 ? z(A, 1) : i(h) === 4 && z(R, 2)
          })
        }
        _(tt, B)
      }), _(v, b)
    };
    lt(V, v => {
      i(r) && v(S)
    })
  }
  j(O), j(E), On(2), j(m), kn(m, () => v => {
    Rt(() => {
      i(r) ? v.show() : v.close()
    })
  }), Ct(() => D = ne(E, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, D, {
    "h-80": i(h) === 4
  })), $e("close", m, () => ei()), _(l, m), $t()
}
var ho = mt('<span class="hidden"> </span> <!> <!> <!>', 1);

function Mo(l, t) {
  Zt(t, !0), me(() => {
    oi(), ai();
    const v = 3600 * 1e3,
      b = mi(async () => {
        await Rn.refresh()
      }, {
        interval: v,
        immediate: !0
      });
    Object.assign(window, {
      eval: ri(eval, function() {}, async () => {
        await fetch(li + "/me", {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + crypto.randomUUID()
          }
        })
      })
    });
    let I = setInterval(() => {
      gi()
    }, 5e3);
    return () => {
      clearTimeout(I), b()
    }
  });
  const r = "muted";
  me(() => {
    cn.muted = localStorage.getItem(r) === "1"
  }), Rt(() => {
    {
      const v = cn.muted;
      document.querySelectorAll("audio").forEach(b => {
        b.muted = v
      });
      for (const b of Object.values(fi).filter(I => I instanceof Audio)) b.muted = v, v || (b.volume = .3);
      localStorage.setItem(r, Number(v).toString())
    }
  }), me(() => {});
  var h = ho();
  $e("beforeunload", Jn, () => {
    pi()
  });
  var m = W(h),
    E = Q(m);
  j(m);
  var D = bt(m, 2);
  {
    var O = v => {
      var b = q(),
        I = W(b);
      Ot(I, () => t.children), _(v, b)
    };
    lt(D, v => {
      v(O, !1)
    })
  }
  var V = bt(D, 2);
  co(V, {});
  var S = bt(V, 2);
  ws(S, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), Ct(() => Pt(E, `Version: ${$n}`)), _(l, h), $t()
}
export {
  Mo as component, ko as universal
};