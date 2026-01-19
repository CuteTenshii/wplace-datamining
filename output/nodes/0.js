var ke = a => {
  throw TypeError(a)
};
var He = (a, t, c) => t.has(a) || ke("Cannot " + c);
var gt = (a, t, c) => (He(a, t, "read from private field"), c ? c.call(a) : t.get(a)),
  qt = (a, t, c) => t.has(a) ? ke("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(a) : t.set(a, c),
  Qt = (a, t, c, A) => (He(a, t, "write to private field"), A ? A.call(a, c) : t.set(a, c), c);
import "../chunks/Dzr0zEgr.js";
import {
  o as pt,
  s as rt
} from "../chunks/DC4ZOUpm.js";
import {
  p as de,
  f as at,
  d as st,
  b as n,
  r as tt,
  t as $,
  c as ue,
  bz as ce,
  aO as pe,
  aN as Re,
  aP as $e,
  e as N,
  g as ze,
  A as _t,
  i as f,
  j as e,
  u as b,
  w as $t,
  s as At,
  T as Ve,
  aY as ht,
  h as g,
  a as v,
  S as tn,
  aR as Ne,
  o as ne,
  bx as en
} from "../chunks/DcuED2r1.js";
import {
  c as nn,
  s as Jt
} from "../chunks/C7Pahv-Y.js";
import {
  v as an
} from "../chunks/s2NtHBiX.js";
import {
  g as Fe,
  P as on
} from "../chunks/4McVxkKC.js";
import {
  j as Z,
  k as xt,
  l as sn,
  n as rn,
  u as ln,
  o as cn,
  p as dn
} from "../chunks/CPCzdhld.js";
import {
  A as un,
  s as fn,
  c as vn
} from "../chunks/nysmXfr7.js";
import "../chunks/BfjUzAZv.js";
import {
  i as T
} from "../chunks/C11X_6e6.js";
import {
  e as Pe
} from "../chunks/-tVdmFD0.js";
import {
  c as It,
  a as Tt,
  s as E,
  g as Ae,
  b as mn,
  S as gn
} from "../chunks/DqnGd6Ri.js";
import {
  b as Ke
} from "../chunks/BHQvDtHR.js";
import {
  p as L,
  s as Me,
  r as hn
} from "../chunks/CVvyswV1.js";
import {
  c as Ot
} from "../chunks/CwK7l1iO.js";
import "../chunks/BXDawSpN.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "358b627090e665fa84c80454e90310d86dcaf84d"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new a.Error().stack;
    t && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[t] = "2d1dee65-fae2-428d-9594-347ea7af0a5b", a._sentryDebugIdIdentifier = "sentry-dbid-2d1dee65-fae2-428d-9594-347ea7af0a5b")
  })()
} catch {}
const _n = !0,
  Ba = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: _n
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  bn = Array(12).fill(0);
var wn = at('<div class="sonner-loading-bar"></div>'),
  yn = at('<div><div class="sonner-spinner"></div></div>');

function xn(a, t) {
  de(t, !0);
  var c = yn(),
    A = st(c);
  Pe(A, 23, () => bn, (z, X) => `spinner-bar-${X}`, (z, X) => {
    var q = wn();
    n(z, q)
  }), tt(A), tt(c), $(z => {
    Tt(c, 1, z), E(c, "data-visible", t.visible)
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
class Sn {
  constructor(t = {}) {
    qt(this, Ut);
    qt(this, te);
    const {
      window: c = In,
      document: A = c == null ? void 0 : c.document
    } = t;
    c !== void 0 && (Qt(this, Ut, A), Qt(this, te, nn(z => {
      const X = ce(c, "focusin", z),
        q = ce(c, "focusout", z);
      return () => {
        X(), q()
      }
    })))
  }
  get current() {
    var t;
    return (t = gt(this, te)) == null || t.call(this), gt(this, Ut) ? Tn(gt(this, Ut)) : null
  }
}
Ut = new WeakMap, te = new WeakMap;
new Sn;
var ee, St;
class Bn {
  constructor(t) {
    qt(this, ee);
    qt(this, St);
    Qt(this, ee, t), Qt(this, St, Symbol(t))
  }
  get key() {
    return gt(this, St)
  }
  exists() {
    return pe(gt(this, St))
  }
  get() {
    const t = Re(gt(this, St));
    if (t === void 0) throw new Error(`Context "${gt(this,ee)}" not found`);
    return t
  }
  getOr(t) {
    const c = Re(gt(this, St));
    return c === void 0 ? t : c
  }
  set(t) {
    return $e(gt(this, St), t)
  }
}
ee = new WeakMap, St = new WeakMap;
const Dn = new Bn("<Toaster/>");

function re(a) {
  return a.label !== void 0
}

function En() {
  let a = N(ze(typeof document < "u" ? document.hidden : !1));
  return _t(() => ce(document, "visibilitychange", () => {
    f(a, document.hidden, !0)
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
  On = {
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

function Ln(a) {
  const [t, c] = a.split("-"), A = [];
  return t && A.push(t), c && A.push(c), A
}

function je(a) {
  return 1 / (1.5 + Math.abs(a) / 20)
}
var kn = at("<div><!></div>"),
  Hn = at('<button data-close-button=""><!></button>'),
  Rn = at('<div data-icon=""><!> <!></div>'),
  Nn = at('<div data-description=""><!></div>'),
  Fn = at('<button data-button="" data-cancel=""> </button>'),
  Un = at('<button data-button=""> </button>'),
  jn = at('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  zn = at('<li data-sonner-toast=""><!> <!></li>');

function Vn(a, t) {
  de(t, !0);
  const c = s => {
    var l = g(),
      x = v(l);
    {
      var I = h => {
          var K = kn(),
            nt = st(K);
          rt(nt, () => t.loadingIcon), tt(K), $(W => {
            Tt(K, 1, W), E(K, "data-visible", e(D) === "loading")
          }, [() => {
            var W, U, m;
            return It(xt((W = e(it)) == null ? void 0 : W.loader, (m = (U = t.toast) == null ? void 0 : U.classes) == null ? void 0 : m.loader, "sonner-loader"))
          }]), n(h, K)
        },
        S = h => {
          {
            let K = b(() => {
                var W, U;
                return xt((W = e(it)) == null ? void 0 : W.loader, (U = t.toast.classes) == null ? void 0 : U.loader)
              }),
              nt = b(() => e(D) === "loading");
            xn(h, {
              get class() {
                return e(K)
              },
              get visible() {
                return e(nt)
              }
            })
          }
        };
      T(x, h => {
        t.loadingIcon ? h(I) : h(S, !1)
      })
    }
    n(s, l)
  };
  let A = L(t, "cancelButtonStyle", 3, ""),
    z = L(t, "actionButtonStyle", 3, ""),
    X = L(t, "descriptionClass", 3, ""),
    q = L(t, "unstyled", 3, !1),
    Bt = L(t, "defaultRichColors", 3, !1);
  const et = {
    ...On
  };
  let P = N(!1),
    V = N(!1),
    Lt = N(!1),
    jt = N(!1),
    zt = N(!1),
    Q = N(0),
    bt = N(0),
    kt = t.toast.duration || t.duration || Ue,
    ot = N(void 0),
    ut = N(null),
    Vt = N(null);
  const fe = b(() => t.index === 0),
    ve = b(() => t.index + 1 <= t.visibleToasts),
    D = b(() => t.toast.type),
    ft = b(() => t.toast.dismissable !== !1),
    Mt = b(() => t.toast.class || ""),
    Dt = b(() => t.toast.descriptionClass || ""),
    vt = b(() => Z.heights.findIndex(s => s.toastId === t.toast.id) || 0),
    Ct = b(() => t.toast.closeButton ?? t.closeButton),
    me = b(() => t.toast.duration ?? t.duration ?? Ue);
  let Et = null;
  const ae = b(() => t.position.split("-")),
    ge = b(() => Z.heights.reduce((s, l, x) => x >= e(vt) ? s : s + l.height, 0)),
    he = En(),
    _e = b(() => t.toast.invert || t.invert),
    Kt = b(() => e(D) === "loading"),
    it = b(() => ({
      ...et,
      ...t.classes
    })),
    be = b(() => t.toast.title),
    Pt = b(() => t.toast.description);
  let Wt = N(0),
    oe = N(0);
  const r = b(() => Math.round(e(vt) * An + e(ge)));
  _t(() => {
    e(be), e(Pt);
    let s;
    t.expanded || t.expandByDefault ? s = 1 : s = 1 - t.index * Pn;
    const l = $t(() => e(ot));
    if (l === void 0) return;
    l.style.setProperty("height", "auto");
    const x = l.offsetHeight,
      I = l.getBoundingClientRect().height,
      S = Math.round(I / s + Number.EPSILON & 100) / 100;
    l.style.removeProperty("height");
    let h;
    Math.abs(S - x) < 1 ? h = S : h = x, f(bt, h, !0), $t(() => {
      Z.setHeight({
        toastId: t.toast.id,
        height: h
      })
    })
  });

  function u() {
    f(V, !0), f(Q, e(r), !0), Z.removeHeight(t.toast.id), setTimeout(() => {
      Z.remove(t.toast.id)
    }, Cn)
  }
  let F;
  const wt = b(() => t.toast.promise && e(D) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function lt() {
    f(Wt, new Date().getTime(), !0), F = setTimeout(() => {
      var s, l;
      (l = (s = t.toast).onAutoClose) == null || l.call(s, t.toast), u()
    }, kt)
  }

  function Ht() {
    if (e(oe) < e(Wt)) {
      const s = new Date().getTime() - e(Wt);
      kt = kt - s
    }
    f(oe, new Date().getTime(), !0)
  }
  _t(() => {
    t.toast.updated && (clearTimeout(F), kt = e(me), lt())
  }), _t(() => (e(wt) || (t.expanded || t.interacting || he.current ? Ht() : lt()), () => clearTimeout(F))), pt(() => {
    var l;
    f(P, !0);
    const s = (l = e(ot)) == null ? void 0 : l.getBoundingClientRect().height;
    return f(bt, s, !0), Z.setHeight({
      toastId: t.toast.id,
      height: s
    }), () => {
      Z.removeHeight(t.toast.id)
    }
  }), _t(() => {
    t.toast.delete && $t(() => {
      var s, l;
      u(), (l = (s = t.toast).onDismiss) == null || l.call(s, t.toast)
    })
  });
  const Oe = s => {
      if (e(Kt)) return;
      f(Q, e(r), !0);
      const l = s.target;
      l.setPointerCapture(s.pointerId), l.tagName !== "BUTTON" && (f(Lt, !0), Et = {
        x: s.clientX,
        y: s.clientY
      })
    },
    ie = () => {
      var h, K, nt, W, U, m;
      if (e(jt) || !e(ft)) return;
      Et = null;
      const s = Number(((h = e(ot)) == null ? void 0 : h.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        l = Number(((K = e(ot)) == null ? void 0 : K.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        x = new Date().getTime() - 0,
        I = e(ut) === "x" ? s : l,
        S = Math.abs(I) / x;
      if (Math.abs(I) >= Mn || S > .11) {
        f(Q, e(r), !0), (W = (nt = t.toast).onDismiss) == null || W.call(nt, t.toast), e(ut) === "x" ? f(Vt, s > 0 ? "right" : "left", !0) : f(Vt, l > 0 ? "down" : "up", !0), u(), f(jt, !0);
        return
      } else(U = e(ot)) == null || U.style.setProperty("--swipe-amount-x", "0px"), (m = e(ot)) == null || m.style.setProperty("--swipe-amount-y", "0px");
      f(zt, !1), f(Lt, !1), f(ut, null)
    },
    mt = s => {
      var K, nt, W;
      if (!Et || !e(ft) || (((K = window.getSelection()) == null ? void 0 : K.toString().length) ?? -1) > 0) return;
      const x = s.clientY - Et.y,
        I = s.clientX - Et.x,
        S = t.swipeDirections ?? Ln(t.position);
      !e(ut) && (Math.abs(I) > 1 || Math.abs(x) > 1) && f(ut, Math.abs(I) > Math.abs(x) ? "x" : "y", !0);
      let h = {
        x: 0,
        y: 0
      };
      if (e(ut) === "y") {
        if (S.includes("top") || S.includes("bottom"))
          if (S.includes("top") && x < 0 || S.includes("bottom") && x > 0) h.y = x;
          else {
            const U = x * je(x);
            h.y = Math.abs(U) < Math.abs(x) ? U : x
          }
      } else if (e(ut) === "x" && (S.includes("left") || S.includes("right")))
        if (S.includes("left") && I < 0 || S.includes("right") && I > 0) h.x = I;
        else {
          const U = I * je(I);
          h.x = Math.abs(U) < Math.abs(I) ? U : I
        }(Math.abs(h.x) > 0 || Math.abs(h.y) > 0) && f(zt, !0), (nt = e(ot)) == null || nt.style.setProperty("--swipe-amount-x", `${h.x}px`), (W = e(ot)) == null || W.style.setProperty("--swipe-amount-y", `${h.y}px`)
    },
    yt = () => {
      f(Lt, !1), f(ut, null), Et = null
    },
    J = b(() => t.toast.icon ? t.toast.icon : e(D) === "success" ? t.successIcon : e(D) === "error" ? t.errorIcon : e(D) === "warning" ? t.warningIcon : e(D) === "info" ? t.infoIcon : e(D) === "loading" ? t.loadingIcon : null);
  var w = zn();
  E(w, "tabindex", 0);
  let se;
  w.__pointermove = mt, w.__pointerup = ie, w.__pointerdown = Oe;
  var we = st(w);
  {
    var ye = s => {
      var l = Hn();
      l.__click = () => {
        var I, S;
        e(Kt) || !e(ft) || (u(), (S = (I = t.toast).onDismiss) == null || S.call(I, t.toast))
      };
      var x = st(l);
      rt(x, () => t.closeIcon ?? ht), tt(l), $(I => {
        E(l, "aria-label", t.closeButtonAriaLabel), E(l, "data-disabled", e(Kt)), Tt(l, 1, I)
      }, [() => {
        var I, S, h;
        return It(xt((I = e(it)) == null ? void 0 : I.closeButton, (h = (S = t.toast) == null ? void 0 : S.classes) == null ? void 0 : h.closeButton))
      }]), n(s, l)
    };
    T(we, s => {
      e(Ct) && !t.toast.component && e(D) !== "loading" && t.closeIcon !== null && s(ye)
    })
  }
  var xe = At(we, 2);
  {
    var Ie = s => {
        const l = b(() => t.toast.component);
        var x = g(),
          I = v(x);
        Ot(I, () => e(l), (S, h) => {
          h(S, Me(() => t.toast.componentProps, {
            closeToast: u
          }))
        }), n(s, x)
      },
      Te = s => {
        var l = jn(),
          x = v(l);
        {
          var I = y => {
            var o = Rn(),
              d = st(o);
            {
              var B = _ => {
                var C = g(),
                  j = v(C);
                {
                  var H = Y => {
                      var M = g(),
                        R = v(M);
                      Ot(R, () => t.toast.icon, (p, Yt) => {
                        Yt(p, {})
                      }), n(Y, M)
                    },
                    O = Y => {
                      c(Y)
                    };
                  T(j, Y => {
                    t.toast.icon ? Y(H) : Y(O, !1)
                  })
                }
                n(_, C)
              };
              T(d, _ => {
                (t.toast.promise || e(D) === "loading") && _(B)
              })
            }
            var k = At(d, 2);
            {
              var i = _ => {
                var C = g(),
                  j = v(C);
                {
                  var H = Y => {
                      var M = g(),
                        R = v(M);
                      Ot(R, () => t.toast.icon, (p, Yt) => {
                        Yt(p, {})
                      }), n(Y, M)
                    },
                    O = Y => {
                      var M = g(),
                        R = v(M);
                      {
                        var p = Rt => {
                            var Zt = g(),
                              Se = v(Zt);
                            rt(Se, () => t.successIcon ?? ht), n(Rt, Zt)
                          },
                          Yt = Rt => {
                            var Zt = g(),
                              Se = v(Zt);
                            {
                              var Ze = Nt => {
                                  var Gt = g(),
                                    Be = v(Gt);
                                  rt(Be, () => t.errorIcon ?? ht), n(Nt, Gt)
                                },
                                Ge = Nt => {
                                  var Gt = g(),
                                    Be = v(Gt);
                                  {
                                    var Xe = Ft => {
                                        var Xt = g(),
                                          De = v(Xt);
                                        rt(De, () => t.warningIcon ?? ht), n(Ft, Xt)
                                      },
                                      qe = Ft => {
                                        var Xt = g(),
                                          De = v(Xt);
                                        {
                                          var Qe = Ee => {
                                            var Le = g(),
                                              Je = v(Le);
                                            rt(Je, () => t.infoIcon ?? ht), n(Ee, Le)
                                          };
                                          T(De, Ee => {
                                            e(D) === "info" && Ee(Qe)
                                          }, !0)
                                        }
                                        n(Ft, Xt)
                                      };
                                    T(Be, Ft => {
                                      e(D) === "warning" ? Ft(Xe) : Ft(qe, !1)
                                    }, !0)
                                  }
                                  n(Nt, Gt)
                                };
                              T(Se, Nt => {
                                e(D) === "error" ? Nt(Ze) : Nt(Ge, !1)
                              }, !0)
                            }
                            n(Rt, Zt)
                          };
                        T(R, Rt => {
                          e(D) === "success" ? Rt(p) : Rt(Yt, !1)
                        }, !0)
                      }
                      n(Y, M)
                    };
                  T(j, Y => {
                    t.toast.icon ? Y(H) : Y(O, !1)
                  })
                }
                n(_, C)
              };
              T(k, _ => {
                t.toast.type !== "loading" && _(i)
              })
            }
            tt(o), $(_ => Tt(o, 1, _), [() => {
              var _, C, j;
              return It(xt((_ = e(it)) == null ? void 0 : _.icon, (j = (C = t.toast) == null ? void 0 : C.classes) == null ? void 0 : j.icon))
            }]), n(y, o)
          };
          T(x, y => {
            (e(D) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (e(J) !== null || t.toast.icon) && y(I)
          })
        }
        var S = At(x, 2),
          h = st(S),
          K = st(h);
        {
          var nt = y => {
            var o = g(),
              d = v(o);
            {
              var B = i => {
                  const _ = b(() => t.toast.title);
                  var C = g(),
                    j = v(C);
                  Ot(j, () => e(_), (H, O) => {
                    O(H, Me(() => t.toast.componentProps))
                  }), n(i, C)
                },
                k = i => {
                  var _ = Ne();
                  $(() => Jt(_, t.toast.title)), n(i, _)
                };
              T(d, i => {
                typeof t.toast.title != "string" ? i(B) : i(k, !1)
              })
            }
            n(y, o)
          };
          T(K, y => {
            t.toast.title && y(nt)
          })
        }
        tt(h);
        var W = At(h, 2);
        {
          var U = y => {
            var o = Nn(),
              d = st(o);
            {
              var B = i => {
                  const _ = b(() => t.toast.description);
                  var C = g(),
                    j = v(C);
                  Ot(j, () => e(_), (H, O) => {
                    O(H, Me(() => t.toast.componentProps))
                  }), n(i, C)
                },
                k = i => {
                  var _ = Ne();
                  $(() => Jt(_, t.toast.description)), n(i, _)
                };
              T(d, i => {
                typeof t.toast.description != "string" ? i(B) : i(k, !1)
              })
            }
            tt(o), $(i => Tt(o, 1, i), [() => {
              var i, _;
              return It(xt(X(), e(Dt), (i = e(it)) == null ? void 0 : i.description, (_ = t.toast.classes) == null ? void 0 : _.description))
            }]), n(y, o)
          };
          T(W, y => {
            t.toast.description && y(U)
          })
        }
        tt(S);
        var m = At(S, 2);
        {
          var G = y => {
            var o = g(),
              d = v(o);
            {
              var B = i => {
                  var _ = g(),
                    C = v(_);
                  Ot(C, () => t.toast.cancel, (j, H) => {
                    H(j, {})
                  }), n(i, _)
                },
                k = i => {
                  var _ = g(),
                    C = v(_);
                  {
                    var j = H => {
                      var O = Fn();
                      O.__click = M => {
                        var R, p;
                        re(t.toast.cancel) && e(ft) && ((p = (R = t.toast.cancel) == null ? void 0 : R.onClick) == null || p.call(R, M), u())
                      };
                      var Y = st(O, !0);
                      tt(O), $(M => {
                        Ae(O, t.toast.cancelButtonStyle ?? A()), Tt(O, 1, M), Jt(Y, t.toast.cancel.label)
                      }, [() => {
                        var M, R, p;
                        return It(xt((M = e(it)) == null ? void 0 : M.cancelButton, (p = (R = t.toast) == null ? void 0 : R.classes) == null ? void 0 : p.cancelButton))
                      }]), n(H, O)
                    };
                    T(C, H => {
                      re(t.toast.cancel) && H(j)
                    }, !0)
                  }
                  n(i, _)
                };
              T(d, i => {
                typeof t.toast.cancel == "function" ? i(B) : i(k, !1)
              })
            }
            n(y, o)
          };
          T(m, y => {
            t.toast.cancel && y(G)
          })
        }
        var ct = At(m, 2);
        {
          var dt = y => {
            var o = g(),
              d = v(o);
            {
              var B = i => {
                  var _ = g(),
                    C = v(_);
                  Ot(C, () => t.toast.action, (j, H) => {
                    H(j, {})
                  }), n(i, _)
                },
                k = i => {
                  var _ = g(),
                    C = v(_);
                  {
                    var j = H => {
                      var O = Un();
                      O.__click = M => {
                        var R;
                        re(t.toast.action) && ((R = t.toast.action) == null || R.onClick(M), !M.defaultPrevented && u())
                      };
                      var Y = st(O, !0);
                      tt(O), $(M => {
                        Ae(O, t.toast.actionButtonStyle ?? z()), Tt(O, 1, M), Jt(Y, t.toast.action.label)
                      }, [() => {
                        var M, R, p;
                        return It(xt((M = e(it)) == null ? void 0 : M.actionButton, (p = (R = t.toast) == null ? void 0 : R.classes) == null ? void 0 : p.actionButton))
                      }]), n(H, O)
                    };
                    T(C, H => {
                      re(t.toast.action) && H(j)
                    }, !0)
                  }
                  n(i, _)
                };
              T(d, i => {
                typeof t.toast.action == "function" ? i(B) : i(k, !1)
              })
            }
            n(y, o)
          };
          T(ct, y => {
            t.toast.action && y(dt)
          })
        }
        $(y => Tt(h, 1, y), [() => {
          var y, o, d;
          return It(xt((y = e(it)) == null ? void 0 : y.title, (d = (o = t.toast) == null ? void 0 : o.classes) == null ? void 0 : d.title))
        }]), n(s, l)
      };
    T(xe, s => {
      t.toast.component ? s(Ie) : s(Te, !1)
    })
  }
  tt(w), Ke(w, s => f(ot, s), () => e(ot)), $((s, l, x) => {
    Tt(w, 1, s), E(w, "data-rich-colors", t.toast.richColors ?? Bt()), E(w, "data-styled", !(t.toast.component || t.toast.unstyled || q())), E(w, "data-mounted", e(P)), E(w, "data-promise", l), E(w, "data-swiped", e(zt)), E(w, "data-removed", e(V)), E(w, "data-visible", e(ve)), E(w, "data-y-position", e(ae)[0]), E(w, "data-x-position", e(ae)[1]), E(w, "data-index", t.index), E(w, "data-front", e(fe)), E(w, "data-swiping", e(Lt)), E(w, "data-dismissable", e(ft)), E(w, "data-type", e(D)), E(w, "data-invert", e(_e)), E(w, "data-swipe-out", e(jt)), E(w, "data-swipe-direction", e(Vt)), E(w, "data-expanded", x), se = Ae(w, `${t.style} ${t.toast.style}`, se, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": Z.toasts.length - t.index,
      "--offset": `${e(V)?e(Q):e(r)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${e(bt)}px`
    })
  }, [() => {
    var s, l, x, I, S, h;
    return It(xt(t.class, e(Mt), (s = e(it)) == null ? void 0 : s.toast, (x = (l = t.toast) == null ? void 0 : l.classes) == null ? void 0 : x.toast, (I = e(it)) == null ? void 0 : I[e(D)], (h = (S = t.toast) == null ? void 0 : S.classes) == null ? void 0 : h[e(D)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && e(P))]), Ve("dragend", w, yt), n(a, w), ue()
}
tn(["pointermove", "pointerup", "pointerdown", "click"]);
var Kn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function Wn(a) {
  var t = Kn();
  n(a, t)
}
var Yn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function Zn(a) {
  var t = Yn();
  n(a, t)
}
var Gn = ne('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function Xn(a) {
  var t = Gn();
  n(a, t)
}
var qn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function Qn(a) {
  var t = qn();
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
  return [a, t].forEach((A, z) => {
    const X = z === 1,
      q = X ? "--mobile-offset" : "--offset",
      Bt = X ? Ye : We;

    function et(P) {
      ["top", "right", "bottom", "left"].forEach(V => {
        c[`${q}-${V}`] = typeof P == "number" ? `${P}px` : P
      })
    }
    typeof A == "number" || typeof A == "string" ? et(A) : typeof A == "object" ? ["top", "right", "bottom", "left"].forEach(P => {
      const V = A[P];
      V === void 0 ? c[`${q}-${P}`] = Bt : c[`${q}-${P}`] = typeof V == "number" ? `${V}px` : V
    }) : et(Bt)
  }), c
}
var oa = at("<ol></ol>"),
  ia = at('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-v2ww3x"><!></section>');

function sa(a, t) {
  de(t, !0);

  function c(r) {
    return r !== "system" ? r : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Ce : le
  }
  let A = L(t, "invert", 3, !1),
    z = L(t, "position", 3, "bottom-right"),
    X = L(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    q = L(t, "expand", 3, !1),
    Bt = L(t, "closeButton", 3, !1),
    et = L(t, "offset", 3, We),
    P = L(t, "mobileOffset", 3, Ye),
    V = L(t, "theme", 3, "light"),
    Lt = L(t, "richColors", 3, !1),
    jt = L(t, "duration", 3, ta),
    zt = L(t, "visibleToasts", 3, $n),
    Q = L(t, "toastOptions", 19, () => ({})),
    bt = L(t, "dir", 7, "auto"),
    kt = L(t, "gap", 3, na),
    ot = L(t, "containerAriaLabel", 3, "Notifications"),
    ut = L(t, "closeButtonAriaLabel", 3, "Close toast"),
    Vt = hn(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function fe() {
    if (bt() !== "auto") return bt();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const r = document.documentElement.getAttribute("dir");
    return r === "auto" || !r ? ($t(() => bt(window.getComputedStyle(document.documentElement).direction ?? "ltr")), bt()) : ($t(() => bt(r)), r)
  }
  const ve = b(() => Array.from(new Set([z(), ...Z.toasts.filter(r => r.position).map(r => r.position)].filter(Boolean))));
  let D = N(!1),
    ft = N(!1),
    Mt = N(ze(c(V()))),
    Dt = N(void 0),
    vt = N(null),
    Ct = N(!1);
  const me = b(() => X().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  _t(() => {
    Z.toasts.length <= 1 && f(D, !1)
  }), _t(() => {
    const r = Z.toasts.filter(u => u.dismiss && !u.delete);
    if (r.length > 0) {
      const u = Z.toasts.map(F => r.find(lt => lt.id === F.id) ? {
        ...F,
        delete: !0
      } : F);
      Z.toasts = u
    }
  }), _t(() => () => {
    e(Dt) && e(vt) && (e(vt).focus({
      preventScroll: !0
    }), f(vt, null), f(Ct, !1))
  }), pt(() => (Z.reset(), ce(document, "keydown", u => {
    var wt, lt;
    X().every(Ht => u[Ht] || u.code === Ht) && (f(D, !0), (wt = e(Dt)) == null || wt.focus()), u.code === "Escape" && (document.activeElement === e(Dt) || (lt = e(Dt)) != null && lt.contains(document.activeElement)) && f(D, !1)
  }))), _t(() => {
    if (V() !== "system" && f(Mt, V()), typeof window < "u") {
      V() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? f(Mt, Ce) : f(Mt, le));
      const r = window.matchMedia("(prefers-color-scheme: dark)"),
        u = ({
          matches: F
        }) => {
          f(Mt, F ? Ce : le, !0)
        };
      "addEventListener" in r ? r.addEventListener("change", u) : r.addListener(u)
    }
  });
  const Et = r => {
      var u;
      (u = t.onblur) == null || u.call(t, r), e(Ct) && !r.currentTarget.contains(r.relatedTarget) && (f(Ct, !1), e(vt) && (e(vt).focus({
        preventScroll: !0
      }), f(vt, null)))
    },
    ae = r => {
      var F;
      (F = t.onfocus) == null || F.call(t, r), !(r.target instanceof HTMLElement && r.target.dataset.dismissable === "false") && (e(Ct) || (f(Ct, !0), f(vt, r.relatedTarget, !0)))
    },
    ge = r => {
      var F;
      (F = t.onpointerdown) == null || F.call(t, r), !(r.target instanceof HTMLElement && r.target.dataset.dismissable === "false") && f(ft, !0)
    },
    he = r => {
      var u;
      (u = t.onmouseenter) == null || u.call(t, r), f(D, !0)
    },
    _e = r => {
      var u;
      (u = t.onmouseleave) == null || u.call(t, r), e(ft) || f(D, !1)
    },
    Kt = r => {
      var u;
      (u = t.onmousemove) == null || u.call(t, r), f(D, !0)
    },
    it = r => {
      var u;
      (u = t.ondragend) == null || u.call(t, r), f(D, !1)
    },
    be = r => {
      var u;
      (u = t.onpointerup) == null || u.call(t, r), f(ft, !1)
    };
  Dn.set(new sn);
  var Pt = ia();
  E(Pt, "tabindex", -1);
  var Wt = st(Pt);
  {
    var oe = r => {
      var u = g(),
        F = v(u);
      Pe(F, 18, () => e(ve), wt => wt, (wt, lt, Ht, Oe) => {
        const ie = b(() => {
            const [J, w] = lt.split("-");
            return {
              y: J,
              x: w
            }
          }),
          mt = b(() => aa(et(), P()));
        var yt = oa();
        mn(yt, J => {
          var w;
          return {
            tabindex: -1,
            dir: J,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": e(Mt),
            "data-y-position": e(ie).y,
            "data-x-position": e(ie).x,
            style: t.style,
            onblur: Et,
            onfocus: ae,
            onmouseenter: he,
            onmousemove: Kt,
            onmouseleave: _e,
            ondragend: it,
            onpointerdown: ge,
            onpointerup: be,
            ...Vt,
            [gn]: {
              "--front-toast-height": `${(w=Z.heights[0])==null?void 0:w.height}px`,
              "--width": `${ea}px`,
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
          }
        }, [fe], void 0, void 0, "svelte-v2ww3x"), Pe(yt, 23, () => Z.toasts.filter(J => !J.position && e(Ht) === 0 || J.position === lt), J => J.id, (J, w, se, we) => {
          {
            const ye = m => {
                var G = g(),
                  ct = v(G);
                {
                  var dt = o => {
                      var d = g(),
                        B = v(d);
                      rt(B, () => t.successIcon ?? ht), n(o, d)
                    },
                    y = o => {
                      var d = g(),
                        B = v(d);
                      {
                        var k = i => {
                          Wn(i)
                        };
                        T(B, i => {
                          t.successIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  T(ct, o => {
                    t.successIcon ? o(dt) : o(y, !1)
                  })
                }
                n(m, G)
              },
              xe = m => {
                var G = g(),
                  ct = v(G);
                {
                  var dt = o => {
                      var d = g(),
                        B = v(d);
                      rt(B, () => t.errorIcon ?? ht), n(o, d)
                    },
                    y = o => {
                      var d = g(),
                        B = v(d);
                      {
                        var k = i => {
                          Zn(i)
                        };
                        T(B, i => {
                          t.errorIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  T(ct, o => {
                    t.errorIcon ? o(dt) : o(y, !1)
                  })
                }
                n(m, G)
              },
              Ie = m => {
                var G = g(),
                  ct = v(G);
                {
                  var dt = o => {
                      var d = g(),
                        B = v(d);
                      rt(B, () => t.warningIcon ?? ht), n(o, d)
                    },
                    y = o => {
                      var d = g(),
                        B = v(d);
                      {
                        var k = i => {
                          Xn(i)
                        };
                        T(B, i => {
                          t.warningIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  T(ct, o => {
                    t.warningIcon ? o(dt) : o(y, !1)
                  })
                }
                n(m, G)
              },
              Te = m => {
                var G = g(),
                  ct = v(G);
                {
                  var dt = o => {
                      var d = g(),
                        B = v(d);
                      rt(B, () => t.infoIcon ?? ht), n(o, d)
                    },
                    y = o => {
                      var d = g(),
                        B = v(d);
                      {
                        var k = i => {
                          Qn(i)
                        };
                        T(B, i => {
                          t.infoIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  T(ct, o => {
                    t.infoIcon ? o(dt) : o(y, !1)
                  })
                }
                n(m, G)
              },
              s = m => {
                var G = g(),
                  ct = v(G);
                {
                  var dt = o => {
                      var d = g(),
                        B = v(d);
                      rt(B, () => t.closeIcon ?? ht), n(o, d)
                    },
                    y = o => {
                      var d = g(),
                        B = v(d);
                      {
                        var k = i => {
                          pn(i)
                        };
                        T(B, i => {
                          t.closeIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  T(ct, o => {
                    t.closeIcon ? o(dt) : o(y, !1)
                  })
                }
                n(m, G)
              };
            let l = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.duration) ?? jt()
              }),
              x = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.class) ?? ""
              }),
              I = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.descriptionClass) || ""
              }),
              S = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.style) ?? ""
              }),
              h = b(() => Q().classes || {}),
              K = b(() => Q().unstyled ?? !1),
              nt = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.cancelButtonStyle) ?? ""
              }),
              W = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.actionButtonStyle) ?? ""
              }),
              U = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.closeButtonAriaLabel) ?? ut()
              });
            Vn(J, {
              get index() {
                return e(se)
              },
              get toast() {
                return e(w)
              },
              get defaultRichColors() {
                return Lt()
              },
              get duration() {
                return e(l)
              },
              get class() {
                return e(x)
              },
              get descriptionClass() {
                return e(I)
              },
              get invert() {
                return A()
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
                return lt
              },
              get style() {
                return e(S)
              },
              get classes() {
                return e(h)
              },
              get unstyled() {
                return e(K)
              },
              get cancelButtonStyle() {
                return e(nt)
              },
              get actionButtonStyle() {
                return e(W)
              },
              get closeButtonAriaLabel() {
                return e(U)
              },
              get expandByDefault() {
                return q()
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
        }), tt(yt), Ke(yt, J => f(Dt, J), () => e(Dt)), $(() => yt.dir = yt.dir), n(wt, yt)
      }), n(r, u)
    };
    T(Wt, r => {
      Z.toasts.length > 0 && r(oe)
    })
  }
  tt(Pt), $(() => E(Pt, "aria-label", `${ot()??""} ${e(me)??""}`)), n(a, Pt), ue()
}
var ra = at('<span class="hidden"> </span> <!> <!>', 1);

function Da(a, t) {
  de(t, !0), pt(() => {
    rn(), ln.refresh().then(P => {
      P && cn()
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
    let et = setInterval(() => {
      fn()
    }, 5e3);
    return () => {
      clearTimeout(et)
    }
  });
  const c = "muted";
  pt(() => {
    Fe.muted = localStorage.getItem(c) === "1"
  }), _t(() => {
    {
      const et = Fe.muted;
      document.querySelectorAll("audio").forEach(P => {
        P.muted = et
      });
      for (const P of Object.values(un).filter(V => V instanceof Audio)) P.muted = et, et || (P.volume = .3);
      localStorage.setItem(c, Number(et).toString())
    }
  }), pt(() => {});
  var A = ra();
  Ve("beforeunload", en, () => {
    vn()
  });
  var z = v(A),
    X = st(z);
  tt(z);
  var q = At(z, 2);
  rt(q, () => t.children);
  var Bt = At(q, 2);
  sa(Bt, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15!",
    duration: 3e3
  }), $(() => Jt(X, `Version: ${an}`)), n(a, A), ue()
}
export {
  Da as component, Ba as universal
};