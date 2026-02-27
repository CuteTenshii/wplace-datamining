var He = a => {
  throw TypeError(a)
};
var ke = (a, t, c) => t.has(a) || He("Cannot " + c);
var gt = (a, t, c) => (ke(a, t, "read from private field"), c ? c.call(a) : t.get(a)),
  Xt = (a, t, c) => t.has(a) ? He("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(a) : t.set(a, c),
  Qt = (a, t, c, M) => (ke(a, t, "write to private field"), M ? M.call(a, c) : t.set(a, c), c);
import "../chunks/Cz-os3rt.js";
import {
  o as pt,
  s as st
} from "../chunks/B__H0ny_.js";
import {
  p as de,
  f as nt,
  d as it,
  b as n,
  r as tt,
  t as $,
  c as ue,
  by as ce,
  aG as pe,
  aF as Re,
  aH as $e,
  e as F,
  g as ze,
  v as _t,
  i as v,
  j as e,
  u as b,
  y as $t,
  s as Mt,
  w as Ve,
  bi as ht,
  h as m,
  a as f,
  o as tn,
  q as Ne,
  A as ne,
  av as en
} from "../chunks/C_uavZQJ.js";
import {
  c as nn,
  s as Jt
} from "../chunks/DMUmq8Bg.js";
import {
  i as x
} from "../chunks/ChKIMXcl.js";
import {
  v as an
} from "../chunks/DnK_2CpZ.js";
import {
  g as Fe,
  P as on
} from "../chunks/Bvn5HspS.js";
import {
  k as G,
  l as xt,
  n as sn,
  o as rn,
  u as ln,
  p as cn,
  q as dn
} from "../chunks/Crl10T8F.js";
import {
  A as un,
  s as fn,
  c as vn
} from "../chunks/CIGWfnSl.js";
import "../chunks/CFVvlG7S.js";
import "../chunks/BERb6pDx.js";
import {
  e as Pe
} from "../chunks/BlcvAwpm.js";
import {
  c as It,
  a as Tt,
  s as A,
  d as Ae,
  f as mn,
  S as gn
} from "../chunks/CiokZgy7.js";
import {
  b as Ke
} from "../chunks/BBg_GkUx.js";
import {
  p as H,
  s as Me,
  r as hn
} from "../chunks/C4tLH6MW.js";
import {
  c as Ot
} from "../chunks/Bcq9zt0w.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "448b4ed83dade10ecee1f50ce15a9606b232dc90"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new a.Error().stack;
    t && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[t] = "6995f34e-086f-4780-9388-ad9243b45ba6", a._sentryDebugIdIdentifier = "sentry-dbid-6995f34e-086f-4780-9388-ad9243b45ba6")
  })()
} catch {}
const _n = !0,
  Sa = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: _n
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  bn = Array(12).fill(0);
var yn = nt('<div class="sonner-loading-bar"></div>'),
  wn = nt('<div><div class="sonner-spinner"></div></div>');

function xn(a, t) {
  de(t, !0);
  var c = wn(),
    M = it(c);
  Pe(M, 23, () => bn, (V, q) => `spinner-bar-${q}`, (V, q) => {
    var X = yn();
    n(V, X)
  }), tt(M), tt(c), $(V => {
    Tt(c, 1, V), A(c, "data-visible", t.visible)
  }, [() => It(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), n(a, c), ue()
}
const In = typeof window < "u" ? window : void 0;

function Tn(a) {
  let t = a.activeElement;
  for (; t != null && t.shadowRoot;) {
    const c = t.shadowRoot.activeElement;
    if (c === t) break;
    t = c
  }
  return t
}
var Ut, te;
class Bn {
  constructor(t = {}) {
    Xt(this, Ut);
    Xt(this, te);
    const {
      window: c = In,
      document: M = c == null ? void 0 : c.document
    } = t;
    c !== void 0 && (Qt(this, Ut, M), Qt(this, te, nn(V => {
      const q = ce(c, "focusin", V),
        X = ce(c, "focusout", V);
      return () => {
        q(), X()
      }
    })))
  }
  get current() {
    var t;
    return (t = gt(this, te)) == null || t.call(this), gt(this, Ut) ? Tn(gt(this, Ut)) : null
  }
}
Ut = new WeakMap, te = new WeakMap;
new Bn;
var ee, Bt;
class Sn {
  constructor(t) {
    Xt(this, ee);
    Xt(this, Bt);
    Qt(this, ee, t), Qt(this, Bt, Symbol(t))
  }
  get key() {
    return gt(this, Bt)
  }
  exists() {
    return pe(gt(this, Bt))
  }
  get() {
    const t = Re(gt(this, Bt));
    if (t === void 0) throw new Error(`Context "${gt(this,ee)}" not found`);
    return t
  }
  getOr(t) {
    const c = Re(gt(this, Bt));
    return c === void 0 ? t : c
  }
  set(t) {
    return $e(gt(this, Bt), t)
  }
}
ee = new WeakMap, Bt = new WeakMap;
const Dn = new Sn("<Toaster/>");

function re(a) {
  return a.label !== void 0
}

function En() {
  let a = F(ze(typeof document < "u" ? document.hidden : !1));
  return _t(() => ce(document, "visibilitychange", () => {
    v(a, document.hidden, !0)
  })), {
    get current() {
      return e(a)
    }
  }
}
const Ue = 4e3,
  An = 14,
  Mn = 45,
  Cn = 200,
  Pn = .05,
  Ln = {
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

function On(a) {
  const [t, c] = a.split("-"), M = [];
  return t && M.push(t), c && M.push(c), M
}

function je(a) {
  return 1 / (1.5 + Math.abs(a) / 20)
}
var Hn = nt("<div><!></div>"),
  kn = nt('<button data-close-button=""><!></button>'),
  Rn = nt('<div data-icon=""><!> <!></div>'),
  Nn = nt('<div data-description=""><!></div>'),
  Fn = nt('<button data-button="" data-cancel=""> </button>'),
  Un = nt('<button data-button=""> </button>'),
  jn = nt('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  zn = nt('<li data-sonner-toast=""><!> <!></li>');

function Vn(a, t) {
  de(t, !0);
  const c = s => {
    var l = m(),
      I = f(l);
    {
      var T = h => {
          var K = Hn(),
            et = it(K);
          st(et, () => t.loadingIcon), tt(K), $(W => {
            Tt(K, 1, W), A(K, "data-visible", e(D) === "loading")
          }, [() => {
            var W, j, g;
            return It(xt((W = e(ot)) == null ? void 0 : W.loader, (g = (j = t.toast) == null ? void 0 : j.classes) == null ? void 0 : g.loader, "sonner-loader"))
          }]), n(h, K)
        },
        B = h => {
          {
            let K = b(() => {
                var W, j;
                return xt((W = e(ot)) == null ? void 0 : W.loader, (j = t.toast.classes) == null ? void 0 : j.loader)
              }),
              et = b(() => e(D) === "loading");
            xn(h, {
              get class() {
                return e(K)
              },
              get visible() {
                return e(et)
              }
            })
          }
        };
      x(I, h => {
        t.loadingIcon ? h(T) : h(B, !1)
      })
    }
    n(s, l)
  };
  let M = H(t, "cancelButtonStyle", 3, ""),
    V = H(t, "actionButtonStyle", 3, ""),
    q = H(t, "descriptionClass", 3, ""),
    X = H(t, "unstyled", 3, !1),
    St = H(t, "defaultRichColors", 3, !1);
  const Dt = {
    ...Ln
  };
  let C = F(!1),
    E = F(!1),
    dt = F(!1),
    jt = F(!1),
    zt = F(!1),
    Q = F(0),
    bt = F(0),
    Ht = t.toast.duration || t.duration || Ue,
    at = F(void 0),
    ut = F(null),
    Vt = F(null);
  const fe = b(() => t.index === 0),
    ve = b(() => t.index + 1 <= t.visibleToasts),
    D = b(() => t.toast.type),
    ft = b(() => t.toast.dismissable !== !1),
    Ct = b(() => t.toast.class || ""),
    Et = b(() => t.toast.descriptionClass || ""),
    vt = b(() => G.heights.findIndex(s => s.toastId === t.toast.id) || 0),
    Pt = b(() => t.toast.closeButton ?? t.closeButton),
    me = b(() => t.toast.duration ?? t.duration ?? Ue);
  let At = null;
  const ae = b(() => t.position.split("-")),
    ge = b(() => G.heights.reduce((s, l, I) => I >= e(vt) ? s : s + l.height, 0)),
    he = En(),
    _e = b(() => t.toast.invert || t.invert),
    Kt = b(() => e(D) === "loading"),
    ot = b(() => ({
      ...Dt,
      ...t.classes
    })),
    be = b(() => t.toast.title),
    Lt = b(() => t.toast.description);
  let Wt = F(0),
    oe = F(0);
  const r = b(() => Math.round(e(vt) * An + e(ge)));
  _t(() => {
    e(be), e(Lt);
    let s;
    t.expanded || t.expandByDefault ? s = 1 : s = 1 - t.index * Pn;
    const l = $t(() => e(at));
    if (l === void 0) return;
    l.style.setProperty("height", "auto");
    const I = l.offsetHeight,
      T = l.getBoundingClientRect().height,
      B = Math.round(T / s + Number.EPSILON & 100) / 100;
    l.style.removeProperty("height");
    let h;
    Math.abs(B - I) < 1 ? h = B : h = I, v(bt, h, !0), $t(() => {
      G.setHeight({
        toastId: t.toast.id,
        height: h
      })
    })
  });

  function u() {
    v(E, !0), v(Q, e(r), !0), G.removeHeight(t.toast.id), setTimeout(() => {
      G.remove(t.toast.id)
    }, Cn)
  }
  let U;
  const yt = b(() => t.toast.promise && e(D) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function rt() {
    v(Wt, new Date().getTime(), !0), U = setTimeout(() => {
      var s, l;
      (l = (s = t.toast).onAutoClose) == null || l.call(s, t.toast), u()
    }, Ht)
  }

  function kt() {
    if (e(oe) < e(Wt)) {
      const s = new Date().getTime() - e(Wt);
      Ht = Ht - s
    }
    v(oe, new Date().getTime(), !0)
  }
  _t(() => {
    t.toast.updated && (clearTimeout(U), Ht = e(me), rt())
  }), _t(() => (e(yt) || (t.expanded || t.interacting || he.current ? kt() : rt()), () => clearTimeout(U))), pt(() => {
    var l;
    v(C, !0);
    const s = (l = e(at)) == null ? void 0 : l.getBoundingClientRect().height;
    return v(bt, s, !0), G.setHeight({
      toastId: t.toast.id,
      height: s
    }), () => {
      G.removeHeight(t.toast.id)
    }
  }), _t(() => {
    t.toast.delete && $t(() => {
      var s, l;
      u(), (l = (s = t.toast).onDismiss) == null || l.call(s, t.toast)
    })
  });
  const Le = s => {
      if (e(Kt)) return;
      v(Q, e(r), !0);
      const l = s.target;
      l.setPointerCapture(s.pointerId), l.tagName !== "BUTTON" && (v(dt, !0), At = {
        x: s.clientX,
        y: s.clientY
      })
    },
    ie = () => {
      var h, K, et, W, j, g;
      if (e(jt) || !e(ft)) return;
      At = null;
      const s = Number(((h = e(at)) == null ? void 0 : h.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        l = Number(((K = e(at)) == null ? void 0 : K.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        I = new Date().getTime() - 0,
        T = e(ut) === "x" ? s : l,
        B = Math.abs(T) / I;
      if (Math.abs(T) >= Mn || B > .11) {
        v(Q, e(r), !0), (W = (et = t.toast).onDismiss) == null || W.call(et, t.toast), e(ut) === "x" ? v(Vt, s > 0 ? "right" : "left", !0) : v(Vt, l > 0 ? "down" : "up", !0), u(), v(jt, !0);
        return
      } else(j = e(at)) == null || j.style.setProperty("--swipe-amount-x", "0px"), (g = e(at)) == null || g.style.setProperty("--swipe-amount-y", "0px");
      v(zt, !1), v(dt, !1), v(ut, null)
    },
    mt = s => {
      var K, et, W;
      if (!At || !e(ft) || (((K = window.getSelection()) == null ? void 0 : K.toString().length) ?? -1) > 0) return;
      const I = s.clientY - At.y,
        T = s.clientX - At.x,
        B = t.swipeDirections ?? On(t.position);
      !e(ut) && (Math.abs(T) > 1 || Math.abs(I) > 1) && v(ut, Math.abs(T) > Math.abs(I) ? "x" : "y", !0);
      let h = {
        x: 0,
        y: 0
      };
      if (e(ut) === "y") {
        if (B.includes("top") || B.includes("bottom"))
          if (B.includes("top") && I < 0 || B.includes("bottom") && I > 0) h.y = I;
          else {
            const j = I * je(I);
            h.y = Math.abs(j) < Math.abs(I) ? j : I
          }
      } else if (e(ut) === "x" && (B.includes("left") || B.includes("right")))
        if (B.includes("left") && T < 0 || B.includes("right") && T > 0) h.x = T;
        else {
          const j = T * je(T);
          h.x = Math.abs(j) < Math.abs(T) ? j : T
        }(Math.abs(h.x) > 0 || Math.abs(h.y) > 0) && v(zt, !0), (et = e(at)) == null || et.style.setProperty("--swipe-amount-x", `${h.x}px`), (W = e(at)) == null || W.style.setProperty("--swipe-amount-y", `${h.y}px`)
    },
    wt = () => {
      v(dt, !1), v(ut, null), At = null
    },
    J = b(() => t.toast.icon ? t.toast.icon : e(D) === "success" ? t.successIcon : e(D) === "error" ? t.errorIcon : e(D) === "warning" ? t.warningIcon : e(D) === "info" ? t.infoIcon : e(D) === "loading" ? t.loadingIcon : null);
  var y = zn();
  A(y, "tabindex", 0);
  let se;
  y.__pointermove = mt, y.__pointerup = ie, y.__pointerdown = Le;
  var ye = it(y);
  {
    var we = s => {
      var l = kn();
      l.__click = () => {
        var T, B;
        e(Kt) || !e(ft) || (u(), (B = (T = t.toast).onDismiss) == null || B.call(T, t.toast))
      };
      var I = it(l);
      st(I, () => t.closeIcon ?? ht), tt(l), $(T => {
        A(l, "aria-label", t.closeButtonAriaLabel), A(l, "data-disabled", e(Kt)), Tt(l, 1, T)
      }, [() => {
        var T, B, h;
        return It(xt((T = e(ot)) == null ? void 0 : T.closeButton, (h = (B = t.toast) == null ? void 0 : B.classes) == null ? void 0 : h.closeButton))
      }]), n(s, l)
    };
    x(ye, s => {
      e(Pt) && !t.toast.component && e(D) !== "loading" && t.closeIcon !== null && s(we)
    })
  }
  var xe = Mt(ye, 2);
  {
    var Ie = s => {
        const l = b(() => t.toast.component);
        var I = m(),
          T = f(I);
        Ot(T, () => e(l), (B, h) => {
          h(B, Me(() => t.toast.componentProps, {
            closeToast: u
          }))
        }), n(s, I)
      },
      Te = s => {
        var l = jn(),
          I = f(l);
        {
          var T = w => {
            var o = Rn(),
              d = it(o);
            {
              var S = _ => {
                var L = m(),
                  z = f(L);
                {
                  var R = Y => {
                      var P = m(),
                        N = f(P);
                      Ot(N, () => t.toast.icon, (p, Yt) => {
                        Yt(p, {})
                      }), n(Y, P)
                    },
                    O = Y => {
                      c(Y)
                    };
                  x(z, Y => {
                    t.toast.icon ? Y(R) : Y(O, !1)
                  })
                }
                n(_, L)
              };
              x(d, _ => {
                (t.toast.promise || e(D) === "loading") && _(S)
              })
            }
            var k = Mt(d, 2);
            {
              var i = _ => {
                var L = m(),
                  z = f(L);
                {
                  var R = Y => {
                      var P = m(),
                        N = f(P);
                      Ot(N, () => t.toast.icon, (p, Yt) => {
                        Yt(p, {})
                      }), n(Y, P)
                    },
                    O = Y => {
                      var P = m(),
                        N = f(P);
                      {
                        var p = Rt => {
                            var Gt = m(),
                              Be = f(Gt);
                            st(Be, () => t.successIcon ?? ht), n(Rt, Gt)
                          },
                          Yt = Rt => {
                            var Gt = m(),
                              Be = f(Gt);
                            {
                              var Ge = Nt => {
                                  var Zt = m(),
                                    Se = f(Zt);
                                  st(Se, () => t.errorIcon ?? ht), n(Nt, Zt)
                                },
                                Ze = Nt => {
                                  var Zt = m(),
                                    Se = f(Zt);
                                  {
                                    var qe = Ft => {
                                        var qt = m(),
                                          De = f(qt);
                                        st(De, () => t.warningIcon ?? ht), n(Ft, qt)
                                      },
                                      Xe = Ft => {
                                        var qt = m(),
                                          De = f(qt);
                                        {
                                          var Qe = Ee => {
                                            var Oe = m(),
                                              Je = f(Oe);
                                            st(Je, () => t.infoIcon ?? ht), n(Ee, Oe)
                                          };
                                          x(De, Ee => {
                                            e(D) === "info" && Ee(Qe)
                                          }, !0)
                                        }
                                        n(Ft, qt)
                                      };
                                    x(Se, Ft => {
                                      e(D) === "warning" ? Ft(qe) : Ft(Xe, !1)
                                    }, !0)
                                  }
                                  n(Nt, Zt)
                                };
                              x(Be, Nt => {
                                e(D) === "error" ? Nt(Ge) : Nt(Ze, !1)
                              }, !0)
                            }
                            n(Rt, Gt)
                          };
                        x(N, Rt => {
                          e(D) === "success" ? Rt(p) : Rt(Yt, !1)
                        }, !0)
                      }
                      n(Y, P)
                    };
                  x(z, Y => {
                    t.toast.icon ? Y(R) : Y(O, !1)
                  })
                }
                n(_, L)
              };
              x(k, _ => {
                t.toast.type !== "loading" && _(i)
              })
            }
            tt(o), $(_ => Tt(o, 1, _), [() => {
              var _, L, z;
              return It(xt((_ = e(ot)) == null ? void 0 : _.icon, (z = (L = t.toast) == null ? void 0 : L.classes) == null ? void 0 : z.icon))
            }]), n(w, o)
          };
          x(I, w => {
            (e(D) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (e(J) !== null || t.toast.icon) && w(T)
          })
        }
        var B = Mt(I, 2),
          h = it(B),
          K = it(h);
        {
          var et = w => {
            var o = m(),
              d = f(o);
            {
              var S = i => {
                  const _ = b(() => t.toast.title);
                  var L = m(),
                    z = f(L);
                  Ot(z, () => e(_), (R, O) => {
                    O(R, Me(() => t.toast.componentProps))
                  }), n(i, L)
                },
                k = i => {
                  var _ = Ne();
                  $(() => Jt(_, t.toast.title)), n(i, _)
                };
              x(d, i => {
                typeof t.toast.title != "string" ? i(S) : i(k, !1)
              })
            }
            n(w, o)
          };
          x(K, w => {
            t.toast.title && w(et)
          })
        }
        tt(h);
        var W = Mt(h, 2);
        {
          var j = w => {
            var o = Nn(),
              d = it(o);
            {
              var S = i => {
                  const _ = b(() => t.toast.description);
                  var L = m(),
                    z = f(L);
                  Ot(z, () => e(_), (R, O) => {
                    O(R, Me(() => t.toast.componentProps))
                  }), n(i, L)
                },
                k = i => {
                  var _ = Ne();
                  $(() => Jt(_, t.toast.description)), n(i, _)
                };
              x(d, i => {
                typeof t.toast.description != "string" ? i(S) : i(k, !1)
              })
            }
            tt(o), $(i => Tt(o, 1, i), [() => {
              var i, _;
              return It(xt(q(), e(Et), (i = e(ot)) == null ? void 0 : i.description, (_ = t.toast.classes) == null ? void 0 : _.description))
            }]), n(w, o)
          };
          x(W, w => {
            t.toast.description && w(j)
          })
        }
        tt(B);
        var g = Mt(B, 2);
        {
          var Z = w => {
            var o = m(),
              d = f(o);
            {
              var S = i => {
                  var _ = m(),
                    L = f(_);
                  Ot(L, () => t.toast.cancel, (z, R) => {
                    R(z, {})
                  }), n(i, _)
                },
                k = i => {
                  var _ = m(),
                    L = f(_);
                  {
                    var z = R => {
                      var O = Fn();
                      O.__click = P => {
                        var N, p;
                        re(t.toast.cancel) && e(ft) && ((p = (N = t.toast.cancel) == null ? void 0 : N.onClick) == null || p.call(N, P), u())
                      };
                      var Y = it(O, !0);
                      tt(O), $(P => {
                        Ae(O, t.toast.cancelButtonStyle ?? M()), Tt(O, 1, P), Jt(Y, t.toast.cancel.label)
                      }, [() => {
                        var P, N, p;
                        return It(xt((P = e(ot)) == null ? void 0 : P.cancelButton, (p = (N = t.toast) == null ? void 0 : N.classes) == null ? void 0 : p.cancelButton))
                      }]), n(R, O)
                    };
                    x(L, R => {
                      re(t.toast.cancel) && R(z)
                    }, !0)
                  }
                  n(i, _)
                };
              x(d, i => {
                typeof t.toast.cancel == "function" ? i(S) : i(k, !1)
              })
            }
            n(w, o)
          };
          x(g, w => {
            t.toast.cancel && w(Z)
          })
        }
        var lt = Mt(g, 2);
        {
          var ct = w => {
            var o = m(),
              d = f(o);
            {
              var S = i => {
                  var _ = m(),
                    L = f(_);
                  Ot(L, () => t.toast.action, (z, R) => {
                    R(z, {})
                  }), n(i, _)
                },
                k = i => {
                  var _ = m(),
                    L = f(_);
                  {
                    var z = R => {
                      var O = Un();
                      O.__click = P => {
                        var N;
                        re(t.toast.action) && ((N = t.toast.action) == null || N.onClick(P), !P.defaultPrevented && u())
                      };
                      var Y = it(O, !0);
                      tt(O), $(P => {
                        Ae(O, t.toast.actionButtonStyle ?? V()), Tt(O, 1, P), Jt(Y, t.toast.action.label)
                      }, [() => {
                        var P, N, p;
                        return It(xt((P = e(ot)) == null ? void 0 : P.actionButton, (p = (N = t.toast) == null ? void 0 : N.classes) == null ? void 0 : p.actionButton))
                      }]), n(R, O)
                    };
                    x(L, R => {
                      re(t.toast.action) && R(z)
                    }, !0)
                  }
                  n(i, _)
                };
              x(d, i => {
                typeof t.toast.action == "function" ? i(S) : i(k, !1)
              })
            }
            n(w, o)
          };
          x(lt, w => {
            t.toast.action && w(ct)
          })
        }
        $(w => Tt(h, 1, w), [() => {
          var w, o, d;
          return It(xt((w = e(ot)) == null ? void 0 : w.title, (d = (o = t.toast) == null ? void 0 : o.classes) == null ? void 0 : d.title))
        }]), n(s, l)
      };
    x(xe, s => {
      t.toast.component ? s(Ie) : s(Te, !1)
    })
  }
  tt(y), Ke(y, s => v(at, s), () => e(at)), $((s, l, I) => {
    Tt(y, 1, s), A(y, "data-rich-colors", t.toast.richColors ?? St()), A(y, "data-styled", !(t.toast.component || t.toast.unstyled || X())), A(y, "data-mounted", e(C)), A(y, "data-promise", l), A(y, "data-swiped", e(zt)), A(y, "data-removed", e(E)), A(y, "data-visible", e(ve)), A(y, "data-y-position", e(ae)[0]), A(y, "data-x-position", e(ae)[1]), A(y, "data-index", t.index), A(y, "data-front", e(fe)), A(y, "data-swiping", e(dt)), A(y, "data-dismissable", e(ft)), A(y, "data-type", e(D)), A(y, "data-invert", e(_e)), A(y, "data-swipe-out", e(jt)), A(y, "data-swipe-direction", e(Vt)), A(y, "data-expanded", I), se = Ae(y, `${t.style} ${t.toast.style}`, se, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": G.toasts.length - t.index,
      "--offset": `${e(E)?e(Q):e(r)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${e(bt)}px`
    })
  }, [() => {
    var s, l, I, T, B, h;
    return It(xt(t.class, e(Ct), (s = e(ot)) == null ? void 0 : s.toast, (I = (l = t.toast) == null ? void 0 : l.classes) == null ? void 0 : I.toast, (T = e(ot)) == null ? void 0 : T[e(D)], (h = (B = t.toast) == null ? void 0 : B.classes) == null ? void 0 : h[e(D)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && e(C))]), Ve("dragend", y, wt), n(a, y), ue()
}
tn(["pointermove", "pointerup", "pointerdown", "click"]);
var Kn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function Wn(a) {
  var t = Kn();
  n(a, t)
}
var Yn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function Gn(a) {
  var t = Yn();
  n(a, t)
}
var Zn = ne('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function qn(a) {
  var t = Zn();
  n(a, t)
}
var Xn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function Qn(a) {
  var t = Xn();
  n(a, t)
}
var Jn = ne('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function pn(a) {
  var t = Jn();
  n(a, t)
}
const $n = 3,
  We = "24px",
  Ye = "16px",
  ta = 4e3,
  ea = 356,
  na = 14,
  Ce = "dark",
  le = "light";

function aa(a, t) {
  const c = {};
  return [a, t].forEach((M, V) => {
    const q = V === 1,
      X = q ? "--mobile-offset" : "--offset",
      St = q ? Ye : We;

    function Dt(C) {
      ["top", "right", "bottom", "left"].forEach(E => {
        c[`${X}-${E}`] = typeof C == "number" ? `${C}px` : C
      })
    }
    typeof M == "number" || typeof M == "string" ? Dt(M) : typeof M == "object" ? ["top", "right", "bottom", "left"].forEach(C => {
      const E = M[C];
      E === void 0 ? c[`${X}-${C}`] = St : c[`${X}-${C}`] = typeof E == "number" ? `${E}px` : E
    }) : Dt(St)
  }), c
}
var oa = nt("<ol></ol>"),
  ia = nt('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-v2ww3x"><!></section>');

function sa(a, t) {
  de(t, !0);

  function c(r) {
    return r !== "system" ? r : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Ce : le
  }
  let M = H(t, "invert", 3, !1),
    V = H(t, "position", 3, "bottom-right"),
    q = H(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    X = H(t, "expand", 3, !1),
    St = H(t, "closeButton", 3, !1),
    Dt = H(t, "offset", 3, We),
    C = H(t, "mobileOffset", 3, Ye),
    E = H(t, "theme", 3, "light"),
    dt = H(t, "richColors", 3, !1),
    jt = H(t, "duration", 3, ta),
    zt = H(t, "visibleToasts", 3, $n),
    Q = H(t, "toastOptions", 19, () => ({})),
    bt = H(t, "dir", 7, "auto"),
    Ht = H(t, "gap", 3, na),
    at = H(t, "containerAriaLabel", 3, "Notifications"),
    ut = H(t, "closeButtonAriaLabel", 3, "Close toast"),
    Vt = hn(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function fe() {
    if (bt() !== "auto") return bt();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const r = document.documentElement.getAttribute("dir");
    return r === "auto" || !r ? ($t(() => bt(window.getComputedStyle(document.documentElement).direction ?? "ltr")), bt()) : ($t(() => bt(r)), r)
  }
  const ve = b(() => Array.from(new Set([V(), ...G.toasts.filter(r => r.position).map(r => r.position)].filter(Boolean))));
  let D = F(!1),
    ft = F(!1),
    Ct = F(ze(c(E()))),
    Et = F(void 0),
    vt = F(null),
    Pt = F(!1);
  const me = b(() => q().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  _t(() => {
    G.toasts.length <= 1 && v(D, !1)
  }), _t(() => {
    const r = G.toasts.filter(u => u.dismiss && !u.delete);
    if (r.length > 0) {
      const u = G.toasts.map(U => r.find(rt => rt.id === U.id) ? {
        ...U,
        delete: !0
      } : U);
      G.toasts = u
    }
  }), _t(() => () => {
    e(Et) && e(vt) && (e(vt).focus({
      preventScroll: !0
    }), v(vt, null), v(Pt, !1))
  }), pt(() => (G.reset(), ce(document, "keydown", u => {
    var yt, rt;
    q().every(kt => u[kt] || u.code === kt) && (v(D, !0), (yt = e(Et)) == null || yt.focus()), u.code === "Escape" && (document.activeElement === e(Et) || (rt = e(Et)) != null && rt.contains(document.activeElement)) && v(D, !1)
  }))), _t(() => {
    if (E() !== "system" && v(Ct, E()), typeof window < "u") {
      E() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? v(Ct, Ce) : v(Ct, le));
      const r = window.matchMedia("(prefers-color-scheme: dark)"),
        u = ({
          matches: U
        }) => {
          v(Ct, U ? Ce : le, !0)
        };
      "addEventListener" in r ? r.addEventListener("change", u) : r.addListener(u)
    }
  });
  const At = r => {
      var u;
      (u = t.onblur) == null || u.call(t, r), e(Pt) && !r.currentTarget.contains(r.relatedTarget) && (v(Pt, !1), e(vt) && (e(vt).focus({
        preventScroll: !0
      }), v(vt, null)))
    },
    ae = r => {
      var U;
      (U = t.onfocus) == null || U.call(t, r), !(r.target instanceof HTMLElement && r.target.dataset.dismissable === "false") && (e(Pt) || (v(Pt, !0), v(vt, r.relatedTarget, !0)))
    },
    ge = r => {
      var U;
      (U = t.onpointerdown) == null || U.call(t, r), !(r.target instanceof HTMLElement && r.target.dataset.dismissable === "false") && v(ft, !0)
    },
    he = r => {
      var u;
      (u = t.onmouseenter) == null || u.call(t, r), v(D, !0)
    },
    _e = r => {
      var u;
      (u = t.onmouseleave) == null || u.call(t, r), e(ft) || v(D, !1)
    },
    Kt = r => {
      var u;
      (u = t.onmousemove) == null || u.call(t, r), v(D, !0)
    },
    ot = r => {
      var u;
      (u = t.ondragend) == null || u.call(t, r), v(D, !1)
    },
    be = r => {
      var u;
      (u = t.onpointerup) == null || u.call(t, r), v(ft, !1)
    };
  Dn.set(new sn);
  var Lt = ia();
  A(Lt, "tabindex", -1);
  var Wt = it(Lt);
  {
    var oe = r => {
      var u = m(),
        U = f(u);
      Pe(U, 18, () => e(ve), yt => yt, (yt, rt, kt, Le) => {
        const ie = b(() => {
            const [J, y] = rt.split("-");
            return {
              y: J,
              x: y
            }
          }),
          mt = b(() => aa(Dt(), C()));
        var wt = oa();
        mn(wt, J => {
          var y;
          return {
            tabindex: -1,
            dir: J,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": e(Ct),
            "data-y-position": e(ie).y,
            "data-x-position": e(ie).x,
            style: t.style,
            onblur: At,
            onfocus: ae,
            onmouseenter: he,
            onmousemove: Kt,
            onmouseleave: _e,
            ondragend: ot,
            onpointerdown: ge,
            onpointerup: be,
            ...Vt,
            [gn]: {
              "--front-toast-height": `${(y=G.heights[0])==null?void 0:y.height}px`,
              "--width": `${ea}px`,
              "--gap": `${Ht()}px`,
              "--offset-top": e(mt)["--offset-top"],
              "--offset-right": e(mt)["--offset-right"],
              "--offset-bottom": e(mt)["--offset-bottom"],
              "--offset-left": e(mt)["--offset-left"],
              "--mobile-offset-top": e(mt)["--mobile-offset-top"],
              "--mobile-offset-right": e(mt)["--mobile-offset-right"],
              "--mobile-offset-bottom": e(mt)["--mobile-offset-bottom"],
              "--mobile-offset-left": e(mt)["--mobile-offset-left"]
            }
          }
        }, [fe], void 0, void 0, "svelte-v2ww3x"), Pe(wt, 23, () => G.toasts.filter(J => !J.position && e(kt) === 0 || J.position === rt), J => J.id, (J, y, se, ye) => {
          {
            const we = g => {
                var Z = m(),
                  lt = f(Z);
                {
                  var ct = o => {
                      var d = m(),
                        S = f(d);
                      st(S, () => t.successIcon ?? ht), n(o, d)
                    },
                    w = o => {
                      var d = m(),
                        S = f(d);
                      {
                        var k = i => {
                          Wn(i)
                        };
                        x(S, i => {
                          t.successIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  x(lt, o => {
                    t.successIcon ? o(ct) : o(w, !1)
                  })
                }
                n(g, Z)
              },
              xe = g => {
                var Z = m(),
                  lt = f(Z);
                {
                  var ct = o => {
                      var d = m(),
                        S = f(d);
                      st(S, () => t.errorIcon ?? ht), n(o, d)
                    },
                    w = o => {
                      var d = m(),
                        S = f(d);
                      {
                        var k = i => {
                          Gn(i)
                        };
                        x(S, i => {
                          t.errorIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  x(lt, o => {
                    t.errorIcon ? o(ct) : o(w, !1)
                  })
                }
                n(g, Z)
              },
              Ie = g => {
                var Z = m(),
                  lt = f(Z);
                {
                  var ct = o => {
                      var d = m(),
                        S = f(d);
                      st(S, () => t.warningIcon ?? ht), n(o, d)
                    },
                    w = o => {
                      var d = m(),
                        S = f(d);
                      {
                        var k = i => {
                          qn(i)
                        };
                        x(S, i => {
                          t.warningIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  x(lt, o => {
                    t.warningIcon ? o(ct) : o(w, !1)
                  })
                }
                n(g, Z)
              },
              Te = g => {
                var Z = m(),
                  lt = f(Z);
                {
                  var ct = o => {
                      var d = m(),
                        S = f(d);
                      st(S, () => t.infoIcon ?? ht), n(o, d)
                    },
                    w = o => {
                      var d = m(),
                        S = f(d);
                      {
                        var k = i => {
                          Qn(i)
                        };
                        x(S, i => {
                          t.infoIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  x(lt, o => {
                    t.infoIcon ? o(ct) : o(w, !1)
                  })
                }
                n(g, Z)
              },
              s = g => {
                var Z = m(),
                  lt = f(Z);
                {
                  var ct = o => {
                      var d = m(),
                        S = f(d);
                      st(S, () => t.closeIcon ?? ht), n(o, d)
                    },
                    w = o => {
                      var d = m(),
                        S = f(d);
                      {
                        var k = i => {
                          pn(i)
                        };
                        x(S, i => {
                          t.closeIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  x(lt, o => {
                    t.closeIcon ? o(ct) : o(w, !1)
                  })
                }
                n(g, Z)
              };
            let l = b(() => {
                var g;
                return ((g = Q()) == null ? void 0 : g.duration) ?? jt()
              }),
              I = b(() => {
                var g;
                return ((g = Q()) == null ? void 0 : g.class) ?? ""
              }),
              T = b(() => {
                var g;
                return ((g = Q()) == null ? void 0 : g.descriptionClass) || ""
              }),
              B = b(() => {
                var g;
                return ((g = Q()) == null ? void 0 : g.style) ?? ""
              }),
              h = b(() => Q().classes || {}),
              K = b(() => Q().unstyled ?? !1),
              et = b(() => {
                var g;
                return ((g = Q()) == null ? void 0 : g.cancelButtonStyle) ?? ""
              }),
              W = b(() => {
                var g;
                return ((g = Q()) == null ? void 0 : g.actionButtonStyle) ?? ""
              }),
              j = b(() => {
                var g;
                return ((g = Q()) == null ? void 0 : g.closeButtonAriaLabel) ?? ut()
              });
            Vn(J, {
              get index() {
                return e(se)
              },
              get toast() {
                return e(y)
              },
              get defaultRichColors() {
                return dt()
              },
              get duration() {
                return e(l)
              },
              get class() {
                return e(I)
              },
              get descriptionClass() {
                return e(T)
              },
              get invert() {
                return M()
              },
              get visibleToasts() {
                return zt()
              },
              get closeButton() {
                return St()
              },
              get interacting() {
                return e(ft)
              },
              get position() {
                return rt
              },
              get style() {
                return e(B)
              },
              get classes() {
                return e(h)
              },
              get unstyled() {
                return e(K)
              },
              get cancelButtonStyle() {
                return e(et)
              },
              get actionButtonStyle() {
                return e(W)
              },
              get closeButtonAriaLabel() {
                return e(j)
              },
              get expandByDefault() {
                return X()
              },
              get expanded() {
                return e(D)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: we,
              errorIcon: xe,
              warningIcon: Ie,
              infoIcon: Te,
              closeIcon: s,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), tt(wt), Ke(wt, J => v(Et, J), () => e(Et)), $(() => wt.dir = wt.dir), n(yt, wt)
      }), n(r, u)
    };
    x(Wt, r => {
      G.toasts.length > 0 && r(oe)
    })
  }
  tt(Lt), $(() => A(Lt, "aria-label", `${at()??""} ${e(me)??""}`)), n(a, Lt), ue()
}
var ra = nt('<span class="hidden"> </span> <!> <!>', 1);

function Da(a, t) {
  de(t, !0), pt(() => {
    rn(), ln.refresh().then(E => {
      E && cn()
    }), Object.assign(window, {
      eval: dn(eval, function() {}, async () => {
        await fetch(on + "/me", {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + crypto.randomUUID()
          }
        })
      })
    });
    let C = setInterval(() => {
      fn()
    }, 5e3);
    return () => {
      clearTimeout(C)
    }
  });
  const c = "muted";
  pt(() => {
    Fe.muted = localStorage.getItem(c) === "1"
  }), _t(() => {
    {
      const C = Fe.muted;
      document.querySelectorAll("audio").forEach(E => {
        E.muted = C
      });
      for (const E of Object.values(un).filter(dt => dt instanceof Audio)) E.muted = C, C || (E.volume = .3);
      localStorage.setItem(c, Number(C).toString())
    }
  }), pt(() => {});
  var M = ra();
  Ve("beforeunload", en, () => {
    vn()
  });
  var V = f(M),
    q = it(V);
  tt(V);
  var X = Mt(V, 2);
  {
    var St = C => {
      var E = m(),
        dt = f(E);
      st(dt, () => t.children), n(C, E)
    };
    x(X, C => {
      C(St, !1)
    })
  }
  var Dt = Mt(X, 2);
  sa(Dt, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15!",
    duration: 3e3
  }), $(() => Jt(q, `Version: ${an}`)), n(a, M), ue()
}
export {
  Da as component, Sa as universal
};