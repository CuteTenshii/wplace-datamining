var He = n => {
  throw TypeError(n)
};
var Re = (n, t, s) => t.has(n) || He("Cannot " + s);
var gt = (n, t, s) => (Re(n, t, "read from private field"), s ? s.call(n) : t.get(n)),
  Qt = (n, t, s) => t.has(n) ? He("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(n) : t.set(n, s),
  qt = (n, t, s, w) => (Re(n, t, "write to private field"), w ? w.call(n, s) : t.set(n, s), s);
import "../chunks/B1ilaoYi.js";
import {
  o as pt,
  s as it,
  v as en
} from "../chunks/D4wsffEE.js";
import {
  p as de,
  f as et,
  d as ot,
  b as a,
  r as p,
  t as J,
  c as ue,
  bn as le,
  aH as nn,
  aG as Ne,
  aI as an,
  av as k,
  au as We,
  y as _t,
  aw as u,
  g as e,
  u as b,
  z as $t,
  s as At,
  bi as Ve,
  ay as ht,
  ax as g,
  a as v,
  at as on,
  b3 as Fe,
  v as ne,
  bl as sn
} from "../chunks/Cvl6ittZ.js";
import {
  s as Jt
} from "../chunks/Kth9w-8U.js";
import {
  f as Z,
  h as xt,
  i as rn,
  j as ln,
  u as Pe,
  _ as cn,
  k as dn,
  a as un,
  r as fn,
  g as je,
  P as vn
} from "../chunks/Z2vsND-F.js";
import {
  c as mn,
  A as gn,
  s as hn,
  a as _n
} from "../chunks/CkykfU5u.js";
import "../chunks/BrwGNZk-.js";
import {
  p as P,
  i as T,
  s as Ae,
  r as bn
} from "../chunks/5zMPy-GS.js";
import {
  e as Le
} from "../chunks/DxUsi9cb.js";
import {
  c as It,
  a as Tt,
  s as M,
  e as Me,
  b as wn,
  S as yn
} from "../chunks/zea2HxI-.js";
import {
  b as Ke
} from "../chunks/Dv6TtdQD.js";
import {
  c as Pt
} from "../chunks/DLKDY7Sy.js";
import "../chunks/6erTDCqo.js";
(function() {
  try {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    n.SENTRY_RELEASE = {
      id: "b5b27c83ae3760cb72717576498367b1362fdc48"
    }
  } catch {}
})();
try {
  (function() {
    var n = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new n.Error().stack;
    t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "ed043b5b-e6d2-494a-83ae-bd31dc5f2bc9", n._sentryDebugIdIdentifier = "sentry-dbid-ed043b5b-e6d2-494a-83ae-bd31dc5f2bc9")
  })()
} catch {}
const xn = !0,
  Pa = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: xn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  In = "" + new URL("../assets/pawtect_wasm_bg.BvxCe1S1.wasm", import.meta.url).href,
  Tn = Array(12).fill(0);
var Sn = et('<div class="sonner-loading-bar"></div>'),
  Bn = et('<div><div class="sonner-spinner"></div></div>');

function En(n, t) {
  de(t, !0);
  var s = Bn(),
    w = ot(s);
  Le(w, 23, () => Tn, (A, O) => `spinner-bar-${O}`, (A, O) => {
    var W = Sn();
    a(A, W)
  }), p(w), p(s), J(A => {
    Tt(s, 1, A), M(s, "data-visible", t.visible)
  }, [() => It(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), a(n, s), ue()
}
const Dn = typeof window < "u" ? window : void 0;

function An(n) {
  let t = n.activeElement;
  for (; t != null && t.shadowRoot;) {
    const s = t.shadowRoot.activeElement;
    if (s === t) break;
    t = s
  }
  return t
}
var jt, te;
class Mn {
  constructor(t = {}) {
    Qt(this, jt);
    Qt(this, te);
    const {
      window: s = Dn,
      document: w = s == null ? void 0 : s.document
    } = t;
    s !== void 0 && (qt(this, jt, w), qt(this, te, mn(A => {
      const O = le(s, "focusin", A),
        W = le(s, "focusout", A);
      return () => {
        O(), W()
      }
    })))
  }
  get current() {
    var t;
    return (t = gt(this, te)) == null || t.call(this), gt(this, jt) ? An(gt(this, jt)) : null
  }
}
jt = new WeakMap, te = new WeakMap;
new Mn;
var ee, St;
class Cn {
  constructor(t) {
    Qt(this, ee);
    Qt(this, St);
    qt(this, ee, t), qt(this, St, Symbol(t))
  }
  get key() {
    return gt(this, St)
  }
  exists() {
    return nn(gt(this, St))
  }
  get() {
    const t = Ne(gt(this, St));
    if (t === void 0) throw new Error(`Context "${gt(this,ee)}" not found`);
    return t
  }
  getOr(t) {
    const s = Ne(gt(this, St));
    return s === void 0 ? t : s
  }
  set(t) {
    return an(gt(this, St), t)
  }
}
ee = new WeakMap, St = new WeakMap;
const Ln = new Cn("<Toaster/>");

function ce(n) {
  return n.label !== void 0
}

function Pn() {
  let n = k(We(typeof document < "u" ? document.hidden : !1));
  return _t(() => le(document, "visibilitychange", () => {
    u(n, document.hidden, !0)
  })), {
    get current() {
      return e(n)
    }
  }
}
const Ue = 4e3,
  On = 14,
  kn = 45,
  Hn = 200,
  Rn = .05,
  Nn = {
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

function Fn(n) {
  const [t, s] = n.split("-"), w = [];
  return t && w.push(t), s && w.push(s), w
}

function ze(n) {
  return 1 / (1.5 + Math.abs(n) / 20)
}
var jn = et("<div><!></div>"),
  Un = (n, t, s, w, A) => {
    var O, W;
    e(t) || !e(s) || (w(), (W = (O = A.toast).onDismiss) == null || W.call(O, A.toast))
  },
  zn = et('<button data-close-button=""><!></button>'),
  Wn = et('<div data-icon=""><!> <!></div>'),
  Vn = et('<div data-description=""><!></div>'),
  Kn = (n, t, s, w) => {
    var A, O;
    ce(t.toast.cancel) && e(s) && ((O = (A = t.toast.cancel) == null ? void 0 : A.onClick) == null || O.call(A, n), w())
  },
  Yn = et('<button data-button="" data-cancel=""> </button>'),
  Gn = (n, t, s) => {
    var w;
    ce(t.toast.action) && ((w = t.toast.action) == null || w.onClick(n), !n.defaultPrevented && s())
  },
  Zn = et('<button data-button=""> </button>'),
  Xn = et('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  Qn = et('<li data-sonner-toast=""><!> <!></li>');

function qn(n, t) {
  de(t, !0);
  const s = r => {
    var c = g(),
      I = v(c);
    {
      var S = h => {
          var K = jn(),
            tt = ot(K);
          it(tt, () => t.loadingIcon), p(K), J(Y => {
            Tt(K, 1, Y), M(K, "data-visible", e(D) === "loading")
          }, [() => {
            var Y, j, m;
            return It(xt((Y = e(at)) == null ? void 0 : Y.loader, (m = (j = t.toast) == null ? void 0 : j.classes) == null ? void 0 : m.loader, "sonner-loader"))
          }]), a(h, K)
        },
        B = h => {
          {
            let K = b(() => {
                var Y, j;
                return xt((Y = e(at)) == null ? void 0 : Y.loader, (j = t.toast.classes) == null ? void 0 : j.loader)
              }),
              tt = b(() => e(D) === "loading");
            En(h, {
              get class() {
                return e(K)
              },
              get visible() {
                return e(tt)
              }
            })
          }
        };
      T(I, h => {
        t.loadingIcon ? h(S) : h(B, !1)
      })
    }
    a(r, c)
  };
  let w = P(t, "cancelButtonStyle", 3, ""),
    A = P(t, "actionButtonStyle", 3, ""),
    O = P(t, "descriptionClass", 3, ""),
    W = P(t, "unstyled", 3, !1),
    Bt = P(t, "defaultRichColors", 3, !1);
  const $ = {
    ...Nn
  };
  let N = k(!1),
    Q = k(!1),
    Ot = k(!1),
    Ut = k(!1),
    zt = k(!1),
    q = k(0),
    bt = k(0),
    kt = t.toast.duration || t.duration || Ue,
    nt = k(void 0),
    ut = k(null),
    Wt = k(null);
  const fe = b(() => t.index === 0),
    ve = b(() => t.index + 1 <= t.visibleToasts),
    D = b(() => t.toast.type),
    ft = b(() => t.toast.dismissable !== !1),
    Mt = b(() => t.toast.class || ""),
    Et = b(() => t.toast.descriptionClass || ""),
    vt = b(() => Z.heights.findIndex(r => r.toastId === t.toast.id) || 0),
    Ct = b(() => t.toast.closeButton ?? t.closeButton),
    me = b(() => t.toast.duration ?? t.duration ?? Ue);
  let Dt = null;
  const ae = b(() => t.position.split("-")),
    ge = b(() => Z.heights.reduce((r, c, I) => I >= e(vt) ? r : r + c.height, 0)),
    he = Pn(),
    _e = b(() => t.toast.invert || t.invert),
    Vt = b(() => e(D) === "loading"),
    at = b(() => ({
      ...$,
      ...t.classes
    })),
    be = b(() => t.toast.title),
    Lt = b(() => t.toast.description);
  let Kt = k(0),
    oe = k(0);
  const l = b(() => Math.round(e(vt) * On + e(ge)));
  _t(() => {
    e(be), e(Lt);
    let r;
    t.expanded || t.expandByDefault ? r = 1 : r = 1 - t.index * Rn;
    const c = $t(() => e(nt));
    if (c === void 0) return;
    c.style.setProperty("height", "auto");
    const I = c.offsetHeight,
      S = c.getBoundingClientRect().height,
      B = Math.round(S / r + Number.EPSILON & 100) / 100;
    c.style.removeProperty("height");
    let h;
    Math.abs(B - I) < 1 ? h = B : h = I, u(bt, h, !0), $t(() => {
      Z.setHeight({
        toastId: t.toast.id,
        height: h
      })
    })
  });

  function f() {
    u(Q, !0), u(q, e(l), !0), Z.removeHeight(t.toast.id), setTimeout(() => {
      Z.remove(t.toast.id)
    }, Hn)
  }
  let F;
  const wt = b(() => t.toast.promise && e(D) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function st() {
    u(Kt, new Date().getTime(), !0), F = setTimeout(() => {
      var r, c;
      (c = (r = t.toast).onAutoClose) == null || c.call(r, t.toast), f()
    }, kt)
  }

  function Ht() {
    if (e(oe) < e(Kt)) {
      const r = new Date().getTime() - e(Kt);
      kt = kt - r
    }
    u(oe, new Date().getTime(), !0)
  }
  _t(() => {
    t.toast.updated && (clearTimeout(F), kt = e(me), st())
  }), _t(() => (e(wt) || (t.expanded || t.interacting || he.current ? Ht() : st()), () => clearTimeout(F))), pt(() => {
    var c;
    u(N, !0);
    const r = (c = e(nt)) == null ? void 0 : c.getBoundingClientRect().height;
    return u(bt, r, !0), Z.setHeight({
      toastId: t.toast.id,
      height: r
    }), () => {
      Z.removeHeight(t.toast.id)
    }
  }), _t(() => {
    t.toast.delete && $t(() => {
      var r, c;
      f(), (c = (r = t.toast).onDismiss) == null || c.call(r, t.toast)
    })
  });
  const Oe = r => {
      if (e(Vt)) return;
      u(q, e(l), !0);
      const c = r.target;
      c.setPointerCapture(r.pointerId), c.tagName !== "BUTTON" && (u(Ot, !0), Dt = {
        x: r.clientX,
        y: r.clientY
      })
    },
    ie = () => {
      var h, K, tt, Y, j, m;
      if (e(Ut) || !e(ft)) return;
      Dt = null;
      const r = Number(((h = e(nt)) == null ? void 0 : h.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        c = Number(((K = e(nt)) == null ? void 0 : K.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        I = new Date().getTime() - 0,
        S = e(ut) === "x" ? r : c,
        B = Math.abs(S) / I;
      if (Math.abs(S) >= kn || B > .11) {
        u(q, e(l), !0), (Y = (tt = t.toast).onDismiss) == null || Y.call(tt, t.toast), e(ut) === "x" ? u(Wt, r > 0 ? "right" : "left", !0) : u(Wt, c > 0 ? "down" : "up", !0), f(), u(Ut, !0);
        return
      } else(j = e(nt)) == null || j.style.setProperty("--swipe-amount-x", "0px"), (m = e(nt)) == null || m.style.setProperty("--swipe-amount-y", "0px");
      u(zt, !1), u(Ot, !1), u(ut, null)
    },
    mt = r => {
      var K, tt, Y;
      if (!Dt || !e(ft) || (((K = window.getSelection()) == null ? void 0 : K.toString().length) ?? -1) > 0) return;
      const I = r.clientY - Dt.y,
        S = r.clientX - Dt.x,
        B = t.swipeDirections ?? Fn(t.position);
      !e(ut) && (Math.abs(S) > 1 || Math.abs(I) > 1) && u(ut, Math.abs(S) > Math.abs(I) ? "x" : "y", !0);
      let h = {
        x: 0,
        y: 0
      };
      if (e(ut) === "y") {
        if (B.includes("top") || B.includes("bottom"))
          if (B.includes("top") && I < 0 || B.includes("bottom") && I > 0) h.y = I;
          else {
            const j = I * ze(I);
            h.y = Math.abs(j) < Math.abs(I) ? j : I
          }
      } else if (e(ut) === "x" && (B.includes("left") || B.includes("right")))
        if (B.includes("left") && S < 0 || B.includes("right") && S > 0) h.x = S;
        else {
          const j = S * ze(S);
          h.x = Math.abs(j) < Math.abs(S) ? j : S
        }(Math.abs(h.x) > 0 || Math.abs(h.y) > 0) && u(zt, !0), (tt = e(nt)) == null || tt.style.setProperty("--swipe-amount-x", `${h.x}px`), (Y = e(nt)) == null || Y.style.setProperty("--swipe-amount-y", `${h.y}px`)
    },
    yt = () => {
      u(Ot, !1), u(ut, null), Dt = null
    },
    V = b(() => t.toast.icon ? t.toast.icon : e(D) === "success" ? t.successIcon : e(D) === "error" ? t.errorIcon : e(D) === "warning" ? t.warningIcon : e(D) === "info" ? t.infoIcon : e(D) === "loading" ? t.loadingIcon : null);
  var y = Qn();
  M(y, "tabindex", 0);
  let se;
  y.__pointermove = mt, y.__pointerup = ie, y.__pointerdown = Oe;
  var we = ot(y);
  {
    var ye = r => {
      var c = zn();
      c.__click = [Un, Vt, ft, f, t];
      var I = ot(c);
      it(I, () => t.closeIcon ?? ht), p(c), J(S => {
        M(c, "aria-label", t.closeButtonAriaLabel), M(c, "data-disabled", e(Vt)), Tt(c, 1, S)
      }, [() => {
        var S, B, h;
        return It(xt((S = e(at)) == null ? void 0 : S.closeButton, (h = (B = t.toast) == null ? void 0 : B.classes) == null ? void 0 : h.closeButton))
      }]), a(r, c)
    };
    T(we, r => {
      e(Ct) && !t.toast.component && e(D) !== "loading" && t.closeIcon !== null && r(ye)
    })
  }
  var xe = At(we, 2);
  {
    var Ie = r => {
        const c = b(() => t.toast.component);
        var I = g(),
          S = v(I);
        Pt(S, () => e(c), (B, h) => {
          h(B, Ae(() => t.toast.componentProps, {
            closeToast: f
          }))
        }), a(r, I)
      },
      Te = r => {
        var c = Xn(),
          I = v(c);
        {
          var S = x => {
            var o = Wn(),
              d = ot(o);
            {
              var E = _ => {
                var C = g(),
                  U = v(C);
                {
                  var R = G => {
                      var z = g(),
                        ct = v(z);
                      Pt(ct, () => t.toast.icon, (dt, Yt) => {
                        Yt(dt, {})
                      }), a(G, z)
                    },
                    L = G => {
                      s(G)
                    };
                  T(U, G => {
                    t.toast.icon ? G(R) : G(L, !1)
                  })
                }
                a(_, C)
              };
              T(d, _ => {
                (t.toast.promise || e(D) === "loading") && _(E)
              })
            }
            var H = At(d, 2);
            {
              var i = _ => {
                var C = g(),
                  U = v(C);
                {
                  var R = G => {
                      var z = g(),
                        ct = v(z);
                      Pt(ct, () => t.toast.icon, (dt, Yt) => {
                        Yt(dt, {})
                      }), a(G, z)
                    },
                    L = G => {
                      var z = g(),
                        ct = v(z);
                      {
                        var dt = Rt => {
                            var Gt = g(),
                              Se = v(Gt);
                            it(Se, () => t.successIcon ?? ht), a(Rt, Gt)
                          },
                          Yt = Rt => {
                            var Gt = g(),
                              Se = v(Gt);
                            {
                              var Qe = Nt => {
                                  var Zt = g(),
                                    Be = v(Zt);
                                  it(Be, () => t.errorIcon ?? ht), a(Nt, Zt)
                                },
                                qe = Nt => {
                                  var Zt = g(),
                                    Be = v(Zt);
                                  {
                                    var Je = Ft => {
                                        var Xt = g(),
                                          Ee = v(Xt);
                                        it(Ee, () => t.warningIcon ?? ht), a(Ft, Xt)
                                      },
                                      pe = Ft => {
                                        var Xt = g(),
                                          Ee = v(Xt);
                                        {
                                          var $e = De => {
                                            var ke = g(),
                                              tn = v(ke);
                                            it(tn, () => t.infoIcon ?? ht), a(De, ke)
                                          };
                                          T(Ee, De => {
                                            e(D) === "info" && De($e)
                                          }, !0)
                                        }
                                        a(Ft, Xt)
                                      };
                                    T(Be, Ft => {
                                      e(D) === "warning" ? Ft(Je) : Ft(pe, !1)
                                    }, !0)
                                  }
                                  a(Nt, Zt)
                                };
                              T(Se, Nt => {
                                e(D) === "error" ? Nt(Qe) : Nt(qe, !1)
                              }, !0)
                            }
                            a(Rt, Gt)
                          };
                        T(ct, Rt => {
                          e(D) === "success" ? Rt(dt) : Rt(Yt, !1)
                        }, !0)
                      }
                      a(G, z)
                    };
                  T(U, G => {
                    t.toast.icon ? G(R) : G(L, !1)
                  })
                }
                a(_, C)
              };
              T(H, _ => {
                t.toast.type !== "loading" && _(i)
              })
            }
            p(o), J(_ => Tt(o, 1, _), [() => {
              var _, C, U;
              return It(xt((_ = e(at)) == null ? void 0 : _.icon, (U = (C = t.toast) == null ? void 0 : C.classes) == null ? void 0 : U.icon))
            }]), a(x, o)
          };
          T(I, x => {
            (e(D) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (e(V) !== null || t.toast.icon) && x(S)
          })
        }
        var B = At(I, 2),
          h = ot(B),
          K = ot(h);
        {
          var tt = x => {
            var o = g(),
              d = v(o);
            {
              var E = i => {
                  const _ = b(() => t.toast.title);
                  var C = g(),
                    U = v(C);
                  Pt(U, () => e(_), (R, L) => {
                    L(R, Ae(() => t.toast.componentProps))
                  }), a(i, C)
                },
                H = i => {
                  var _ = Fe();
                  J(() => Jt(_, t.toast.title)), a(i, _)
                };
              T(d, i => {
                typeof t.toast.title != "string" ? i(E) : i(H, !1)
              })
            }
            a(x, o)
          };
          T(K, x => {
            t.toast.title && x(tt)
          })
        }
        p(h);
        var Y = At(h, 2);
        {
          var j = x => {
            var o = Vn(),
              d = ot(o);
            {
              var E = i => {
                  const _ = b(() => t.toast.description);
                  var C = g(),
                    U = v(C);
                  Pt(U, () => e(_), (R, L) => {
                    L(R, Ae(() => t.toast.componentProps))
                  }), a(i, C)
                },
                H = i => {
                  var _ = Fe();
                  J(() => Jt(_, t.toast.description)), a(i, _)
                };
              T(d, i => {
                typeof t.toast.description != "string" ? i(E) : i(H, !1)
              })
            }
            p(o), J(i => Tt(o, 1, i), [() => {
              var i, _;
              return It(xt(O(), e(Et), (i = e(at)) == null ? void 0 : i.description, (_ = t.toast.classes) == null ? void 0 : _.description))
            }]), a(x, o)
          };
          T(Y, x => {
            t.toast.description && x(j)
          })
        }
        p(B);
        var m = At(B, 2);
        {
          var X = x => {
            var o = g(),
              d = v(o);
            {
              var E = i => {
                  var _ = g(),
                    C = v(_);
                  Pt(C, () => t.toast.cancel, (U, R) => {
                    R(U, {})
                  }), a(i, _)
                },
                H = i => {
                  var _ = g(),
                    C = v(_);
                  {
                    var U = R => {
                      var L = Yn();
                      L.__click = [Kn, t, ft, f];
                      var G = ot(L, !0);
                      p(L), J(z => {
                        Me(L, t.toast.cancelButtonStyle ?? w()), Tt(L, 1, z), Jt(G, t.toast.cancel.label)
                      }, [() => {
                        var z, ct, dt;
                        return It(xt((z = e(at)) == null ? void 0 : z.cancelButton, (dt = (ct = t.toast) == null ? void 0 : ct.classes) == null ? void 0 : dt.cancelButton))
                      }]), a(R, L)
                    };
                    T(C, R => {
                      ce(t.toast.cancel) && R(U)
                    }, !0)
                  }
                  a(i, _)
                };
              T(d, i => {
                typeof t.toast.cancel == "function" ? i(E) : i(H, !1)
              })
            }
            a(x, o)
          };
          T(m, x => {
            t.toast.cancel && x(X)
          })
        }
        var rt = At(m, 2);
        {
          var lt = x => {
            var o = g(),
              d = v(o);
            {
              var E = i => {
                  var _ = g(),
                    C = v(_);
                  Pt(C, () => t.toast.action, (U, R) => {
                    R(U, {})
                  }), a(i, _)
                },
                H = i => {
                  var _ = g(),
                    C = v(_);
                  {
                    var U = R => {
                      var L = Zn();
                      L.__click = [Gn, t, f];
                      var G = ot(L, !0);
                      p(L), J(z => {
                        Me(L, t.toast.actionButtonStyle ?? A()), Tt(L, 1, z), Jt(G, t.toast.action.label)
                      }, [() => {
                        var z, ct, dt;
                        return It(xt((z = e(at)) == null ? void 0 : z.actionButton, (dt = (ct = t.toast) == null ? void 0 : ct.classes) == null ? void 0 : dt.actionButton))
                      }]), a(R, L)
                    };
                    T(C, R => {
                      ce(t.toast.action) && R(U)
                    }, !0)
                  }
                  a(i, _)
                };
              T(d, i => {
                typeof t.toast.action == "function" ? i(E) : i(H, !1)
              })
            }
            a(x, o)
          };
          T(rt, x => {
            t.toast.action && x(lt)
          })
        }
        J(x => Tt(h, 1, x), [() => {
          var x, o, d;
          return It(xt((x = e(at)) == null ? void 0 : x.title, (d = (o = t.toast) == null ? void 0 : o.classes) == null ? void 0 : d.title))
        }]), a(r, c)
      };
    T(xe, r => {
      t.toast.component ? r(Ie) : r(Te, !1)
    })
  }
  p(y), Ke(y, r => u(nt, r), () => e(nt)), J((r, c, I, S) => {
    Tt(y, 1, r), M(y, "data-rich-colors", t.toast.richColors ?? Bt()), M(y, "data-styled", !(t.toast.component || t.toast.unstyled || W())), M(y, "data-mounted", e(N)), M(y, "data-promise", c), M(y, "data-swiped", e(zt)), M(y, "data-removed", e(Q)), M(y, "data-visible", e(ve)), M(y, "data-y-position", e(ae)[0]), M(y, "data-x-position", e(ae)[1]), M(y, "data-index", t.index), M(y, "data-front", e(fe)), M(y, "data-swiping", e(Ot)), M(y, "data-dismissable", e(ft)), M(y, "data-type", e(D)), M(y, "data-invert", e(_e)), M(y, "data-swipe-out", e(Ut)), M(y, "data-swipe-direction", e(Wt)), M(y, "data-expanded", I), se = Me(y, `${t.style} ${t.toast.style}`, se, S)
  }, [() => {
    var r, c, I, S, B, h;
    return It(xt(t.class, e(Mt), (r = e(at)) == null ? void 0 : r.toast, (I = (c = t.toast) == null ? void 0 : c.classes) == null ? void 0 : I.toast, (S = e(at)) == null ? void 0 : S[e(D)], (h = (B = t.toast) == null ? void 0 : B.classes) == null ? void 0 : h[e(D)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && e(N)), () => ({
    "--index": t.index,
    "--toasts-before": t.index,
    "--z-index": Z.toasts.length - t.index,
    "--offset": `${e(Q)?e(q):e(l)}px`,
    "--initial-height": t.expandByDefault ? "auto" : `${e(bt)}px`
  })]), Ve("dragend", y, yt), a(n, y), ue()
}
on(["pointermove", "pointerup", "pointerdown", "click"]);
var Jn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function pn(n) {
  var t = Jn();
  a(n, t)
}
var $n = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function ta(n) {
  var t = $n();
  a(n, t)
}
var ea = ne('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function na(n) {
  var t = ea();
  a(n, t)
}
var aa = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function oa(n) {
  var t = aa();
  a(n, t)
}
var ia = ne('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function sa(n) {
  var t = ia();
  a(n, t)
}
const ra = 3,
  Ye = "24px",
  Ge = "16px",
  la = 4e3,
  ca = 356,
  da = 14,
  Ce = "dark",
  re = "light";

function ua(n, t) {
  const s = {};
  return [n, t].forEach((w, A) => {
    const O = A === 1,
      W = O ? "--mobile-offset" : "--offset",
      Bt = O ? Ge : Ye;

    function $(N) {
      ["top", "right", "bottom", "left"].forEach(Q => {
        s[`${W}-${Q}`] = typeof N == "number" ? `${N}px` : N
      })
    }
    typeof w == "number" || typeof w == "string" ? $(w) : typeof w == "object" ? ["top", "right", "bottom", "left"].forEach(N => {
      const Q = w[N];
      Q === void 0 ? s[`${W}-${N}`] = Bt : s[`${W}-${N}`] = typeof Q == "number" ? `${Q}px` : Q
    }) : $(Bt)
  }), s
}
var fa = et("<ol></ol>"),
  va = et('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-tppj9g"><!></section>');

function ma(n, t) {
  de(t, !0);

  function s(l) {
    return l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Ce : re
  }
  let w = P(t, "invert", 3, !1),
    A = P(t, "position", 3, "bottom-right"),
    O = P(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    W = P(t, "expand", 3, !1),
    Bt = P(t, "closeButton", 3, !1),
    $ = P(t, "offset", 3, Ye),
    N = P(t, "mobileOffset", 3, Ge),
    Q = P(t, "theme", 3, "light"),
    Ot = P(t, "richColors", 3, !1),
    Ut = P(t, "duration", 3, la),
    zt = P(t, "visibleToasts", 3, ra),
    q = P(t, "toastOptions", 19, () => ({})),
    bt = P(t, "dir", 7, "auto"),
    kt = P(t, "gap", 3, da),
    nt = P(t, "containerAriaLabel", 3, "Notifications"),
    ut = P(t, "closeButtonAriaLabel", 3, "Close toast"),
    Wt = bn(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function fe() {
    if (bt() !== "auto") return bt();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const l = document.documentElement.getAttribute("dir");
    return l === "auto" || !l ? ($t(() => bt(window.getComputedStyle(document.documentElement).direction ?? "ltr")), bt()) : ($t(() => bt(l)), l)
  }
  const ve = b(() => Array.from(new Set([A(), ...Z.toasts.filter(l => l.position).map(l => l.position)].filter(Boolean))));
  let D = k(!1),
    ft = k(!1),
    Mt = k(We(s(Q()))),
    Et = k(void 0),
    vt = k(null),
    Ct = k(!1);
  const me = b(() => O().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  _t(() => {
    Z.toasts.length <= 1 && u(D, !1)
  }), _t(() => {
    const l = Z.toasts.filter(f => f.dismiss && !f.delete);
    if (l.length > 0) {
      const f = Z.toasts.map(F => l.find(st => st.id === F.id) ? {
        ...F,
        delete: !0
      } : F);
      Z.toasts = f
    }
  }), _t(() => () => {
    e(Et) && e(vt) && (e(vt).focus({
      preventScroll: !0
    }), u(vt, null), u(Ct, !1))
  }), pt(() => (Z.reset(), le(document, "keydown", f => {
    var wt, st;
    O().every(Ht => f[Ht] || f.code === Ht) && (u(D, !0), (wt = e(Et)) == null || wt.focus()), f.code === "Escape" && (document.activeElement === e(Et) || (st = e(Et)) != null && st.contains(document.activeElement)) && u(D, !1)
  }))), _t(() => {
    if (Q() !== "system" && u(Mt, Q()), typeof window < "u") {
      Q() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? u(Mt, Ce) : u(Mt, re));
      const l = window.matchMedia("(prefers-color-scheme: dark)"),
        f = ({
          matches: F
        }) => {
          u(Mt, F ? Ce : re, !0)
        };
      "addEventListener" in l ? l.addEventListener("change", f) : l.addListener(f)
    }
  });
  const Dt = l => {
      var f;
      (f = t.onblur) == null || f.call(t, l), e(Ct) && !l.currentTarget.contains(l.relatedTarget) && (u(Ct, !1), e(vt) && (e(vt).focus({
        preventScroll: !0
      }), u(vt, null)))
    },
    ae = l => {
      var F;
      (F = t.onfocus) == null || F.call(t, l), !(l.target instanceof HTMLElement && l.target.dataset.dismissable === "false") && (e(Ct) || (u(Ct, !0), u(vt, l.relatedTarget, !0)))
    },
    ge = l => {
      var F;
      (F = t.onpointerdown) == null || F.call(t, l), !(l.target instanceof HTMLElement && l.target.dataset.dismissable === "false") && u(ft, !0)
    },
    he = l => {
      var f;
      (f = t.onmouseenter) == null || f.call(t, l), u(D, !0)
    },
    _e = l => {
      var f;
      (f = t.onmouseleave) == null || f.call(t, l), e(ft) || u(D, !1)
    },
    Vt = l => {
      var f;
      (f = t.onmousemove) == null || f.call(t, l), u(D, !0)
    },
    at = l => {
      var f;
      (f = t.ondragend) == null || f.call(t, l), u(D, !1)
    },
    be = l => {
      var f;
      (f = t.onpointerup) == null || f.call(t, l), u(ft, !1)
    };
  Ln.set(new rn);
  var Lt = va();
  M(Lt, "tabindex", -1);
  var Kt = ot(Lt);
  {
    var oe = l => {
      var f = g(),
        F = v(f);
      Le(F, 18, () => e(ve), wt => wt, (wt, st, Ht, Oe) => {
        const ie = b(() => {
            const [V, y] = st.split("-");
            return {
              y: V,
              x: y
            }
          }),
          mt = b(() => ua($(), N()));
        var yt = fa();
        wn(yt, (V, y) => ({
          tabindex: -1,
          dir: V,
          class: t.class,
          "data-sonner-toaster": !0,
          "data-sonner-theme": e(Mt),
          "data-y-position": e(ie).y,
          "data-x-position": e(ie).x,
          style: t.style,
          onblur: Dt,
          onfocus: ae,
          onmouseenter: he,
          onmousemove: Vt,
          onmouseleave: _e,
          ondragend: at,
          onpointerdown: ge,
          onpointerup: be,
          ...Wt,
          [yn]: y
        }), [fe, () => {
          var V;
          return {
            "--front-toast-height": `${(V=Z.heights[0])==null?void 0:V.height}px`,
            "--width": `${ca}px`,
            "--gap": `${kt()}px`,
            "--offset-top": e(mt)["--offset-top"],
            "--offset-right": e(mt)["--offset-right"],
            "--offset-bottom": e(mt)["--offset-bottom"],
            "--offset-left": e(mt)["--offset-left"],
            "--mobile-offset-top": e(mt)["--mobile-offset-top"],
            "--mobile-offset-right": e(mt)["--mobile-offset-right"],
            "--mobile-offset-bottom": e(mt)["--mobile-offset-bottom"],
            "--mobile-offset-left": e(mt)["--mobile-offset-left"]
          }
        }], void 0, "svelte-tppj9g"), Le(yt, 23, () => Z.toasts.filter(V => !V.position && e(Ht) === 0 || V.position === st), V => V.id, (V, y, se, we) => {
          {
            const ye = m => {
                var X = g(),
                  rt = v(X);
                {
                  var lt = o => {
                      var d = g(),
                        E = v(d);
                      it(E, () => t.successIcon ?? ht), a(o, d)
                    },
                    x = o => {
                      var d = g(),
                        E = v(d);
                      {
                        var H = i => {
                          pn(i)
                        };
                        T(E, i => {
                          t.successIcon !== null && i(H)
                        }, !0)
                      }
                      a(o, d)
                    };
                  T(rt, o => {
                    t.successIcon ? o(lt) : o(x, !1)
                  })
                }
                a(m, X)
              },
              xe = m => {
                var X = g(),
                  rt = v(X);
                {
                  var lt = o => {
                      var d = g(),
                        E = v(d);
                      it(E, () => t.errorIcon ?? ht), a(o, d)
                    },
                    x = o => {
                      var d = g(),
                        E = v(d);
                      {
                        var H = i => {
                          ta(i)
                        };
                        T(E, i => {
                          t.errorIcon !== null && i(H)
                        }, !0)
                      }
                      a(o, d)
                    };
                  T(rt, o => {
                    t.errorIcon ? o(lt) : o(x, !1)
                  })
                }
                a(m, X)
              },
              Ie = m => {
                var X = g(),
                  rt = v(X);
                {
                  var lt = o => {
                      var d = g(),
                        E = v(d);
                      it(E, () => t.warningIcon ?? ht), a(o, d)
                    },
                    x = o => {
                      var d = g(),
                        E = v(d);
                      {
                        var H = i => {
                          na(i)
                        };
                        T(E, i => {
                          t.warningIcon !== null && i(H)
                        }, !0)
                      }
                      a(o, d)
                    };
                  T(rt, o => {
                    t.warningIcon ? o(lt) : o(x, !1)
                  })
                }
                a(m, X)
              },
              Te = m => {
                var X = g(),
                  rt = v(X);
                {
                  var lt = o => {
                      var d = g(),
                        E = v(d);
                      it(E, () => t.infoIcon ?? ht), a(o, d)
                    },
                    x = o => {
                      var d = g(),
                        E = v(d);
                      {
                        var H = i => {
                          oa(i)
                        };
                        T(E, i => {
                          t.infoIcon !== null && i(H)
                        }, !0)
                      }
                      a(o, d)
                    };
                  T(rt, o => {
                    t.infoIcon ? o(lt) : o(x, !1)
                  })
                }
                a(m, X)
              },
              r = m => {
                var X = g(),
                  rt = v(X);
                {
                  var lt = o => {
                      var d = g(),
                        E = v(d);
                      it(E, () => t.closeIcon ?? ht), a(o, d)
                    },
                    x = o => {
                      var d = g(),
                        E = v(d);
                      {
                        var H = i => {
                          sa(i)
                        };
                        T(E, i => {
                          t.closeIcon !== null && i(H)
                        }, !0)
                      }
                      a(o, d)
                    };
                  T(rt, o => {
                    t.closeIcon ? o(lt) : o(x, !1)
                  })
                }
                a(m, X)
              };
            let c = b(() => {
                var m;
                return ((m = q()) == null ? void 0 : m.duration) ?? Ut()
              }),
              I = b(() => {
                var m;
                return ((m = q()) == null ? void 0 : m.class) ?? ""
              }),
              S = b(() => {
                var m;
                return ((m = q()) == null ? void 0 : m.descriptionClass) || ""
              }),
              B = b(() => {
                var m;
                return ((m = q()) == null ? void 0 : m.style) ?? ""
              }),
              h = b(() => q().classes || {}),
              K = b(() => q().unstyled ?? !1),
              tt = b(() => {
                var m;
                return ((m = q()) == null ? void 0 : m.cancelButtonStyle) ?? ""
              }),
              Y = b(() => {
                var m;
                return ((m = q()) == null ? void 0 : m.actionButtonStyle) ?? ""
              }),
              j = b(() => {
                var m;
                return ((m = q()) == null ? void 0 : m.closeButtonAriaLabel) ?? ut()
              });
            qn(V, {
              get index() {
                return e(se)
              },
              get toast() {
                return e(y)
              },
              get defaultRichColors() {
                return Ot()
              },
              get duration() {
                return e(c)
              },
              get class() {
                return e(I)
              },
              get descriptionClass() {
                return e(S)
              },
              get invert() {
                return w()
              },
              get visibleToasts() {
                return zt()
              },
              get closeButton() {
                return Bt()
              },
              get interacting() {
                return e(ft)
              },
              get position() {
                return st
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
                return e(tt)
              },
              get actionButtonStyle() {
                return e(Y)
              },
              get closeButtonAriaLabel() {
                return e(j)
              },
              get expandByDefault() {
                return W()
              },
              get expanded() {
                return e(D)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: ye,
              errorIcon: xe,
              warningIcon: Ie,
              infoIcon: Te,
              closeIcon: r,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), p(yt), Ke(yt, V => u(Et, V), () => e(Et)), J(() => yt.dir = yt.dir), a(wt, yt)
      }), a(l, f)
    };
    T(Kt, l => {
      Z.toasts.length > 0 && l(oe)
    })
  }
  p(Lt), J(() => M(Lt, "aria-label", `${nt()??""} ${e(me)??""}`)), a(n, Lt), ue()
}
let Ze = k(!1);

function ga() {
  const n = ln("2025-09_pawtect");
  if (!n) throw new Error("pawtect experiment not found on load");
  n.variant !== "disabled" && (e(Ze) || Pe.data && cn(In).then(ha))
}

function ha() {
  dn(Pe.data.id), un.postPawtectLoad();
  const n = fetch;
  Object.assign(window, {
    fetch: Xe((t, s) => {
      let w = null;
      return t instanceof Request ? w = t.url : w = t, w.startsWith("/") || fn(w), n.call(window, t, s)
    })
  }), u(Ze, !0)
}

function Xe(n) {
  return n.bind().bind()
}
var _a = et('<span class="hidden"> </span> <!> <!>', 1);

function Oa(n, t) {
  de(t, !0), pt(() => {
    Pe.refresh().then(ga), Object.assign(window, {
      eval: Xe(async () => {
        await fetch(vn + "/me", {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + crypto.randomUUID()
          }
        })
      })
    });
    let $ = setInterval(() => {
      hn()
    }, 5e3);
    return () => {
      clearTimeout($)
    }
  });
  const s = "muted";
  pt(() => {
    je.muted = localStorage.getItem(s) === "1"
  }), _t(() => {
    {
      const $ = je.muted;
      document.querySelectorAll("audio").forEach(N => {
        N.muted = $
      });
      for (const N of Object.values(gn)) N.muted = $, $ || (N.volume = .3);
      localStorage.setItem(s, Number($).toString())
    }
  }), pt(() => {});
  var w = _a();
  Ve("beforeunload", sn, () => {
    _n()
  });
  var A = v(w),
    O = ot(A);
  p(A);
  var W = At(A, 2);
  it(W, () => t.children);
  var Bt = At(W, 2);
  ma(Bt, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "!top-15",
    duration: 3e3
  }), J(() => Jt(O, `Version: ${en}`)), a(n, w), ue()
}
export {
  Oa as component, Pa as universal
};