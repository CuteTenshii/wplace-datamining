var He = a => {
  throw TypeError(a)
};
var ke = (a, t, l) => t.has(a) || He("Cannot " + l);
var mt = (a, t, l) => (ke(a, t, "read from private field"), l ? l.call(a) : t.get(a)),
  Xt = (a, t, l) => t.has(a) ? He("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(a) : t.set(a, l),
  Qt = (a, t, l, E) => (ke(a, t, "write to private field"), E ? E.call(a, l) : t.set(a, l), l);
import "../chunks/DfSPqPjB.js";
import {
  o as pt,
  s as ct
} from "../chunks/BZ6PCc8E.js";
import {
  p as de,
  f as nt,
  d as et,
  b as n,
  r as q,
  t as tt,
  c as ue,
  bx as ce,
  aG as pe,
  aF as Re,
  aH as $e,
  e as F,
  g as ze,
  v as ht,
  i as f,
  j as e,
  u as b,
  y as $t,
  s as Mt,
  w as Ve,
  bi as gt,
  h as g,
  a as v,
  o as tn,
  q as Ne,
  A as ne,
  n as en,
  av as nn
} from "../chunks/BX08WKHH.js";
import {
  c as an,
  s as Jt
} from "../chunks/BuYVmOfq.js";
import {
  i as x
} from "../chunks/WtIPnxxX.js";
import {
  v as on
} from "../chunks/DQ6fSC86.js";
import {
  g as Fe,
  P as sn
} from "../chunks/D_ezuiS5.js";
import {
  k as G,
  l as wt,
  n as rn,
  o as ln,
  u as cn,
  p as dn,
  q as un,
  t as fn
} from "../chunks/B9oDgigm.js";
import {
  A as vn,
  s as mn,
  c as gn
} from "../chunks/CYauzv3p.js";
import "../chunks/CJA2c4gL.js";
import {
  L as hn
} from "../chunks/D2ykjXls.js";
import "../chunks/DvwOtY4M.js";
import {
  m as _n
} from "../chunks/kk5okhae.js";
import {
  e as Le
} from "../chunks/v4_ylhi3.js";
import {
  c as xt,
  a as It,
  s as A,
  d as Ae,
  f as bn,
  S as yn
} from "../chunks/D1NSdIK5.js";
import {
  b as Ke
} from "../chunks/BGV5BNDW.js";
import {
  p as H,
  s as Me,
  r as wn
} from "../chunks/BdjyGa6-.js";
import {
  c as Ot
} from "../chunks/DuE7WchC.js";
(function() {
  try {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    a.SENTRY_RELEASE = {
      id: "7643ba5d2918c38f2d3e1507dfee87cd2c0bfa50"
    }
  } catch {}
})();
try {
  (function() {
    var a = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      t = new a.Error().stack;
    t && (a._sentryDebugIds = a._sentryDebugIds || {}, a._sentryDebugIds[t] = "ee637022-f7ce-4b6a-9356-fa1c95b7d963", a._sentryDebugIdIdentifier = "sentry-dbid-ee637022-f7ce-4b6a-9356-fa1c95b7d963")
  })()
} catch {}
const xn = !0,
  Oa = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: xn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  In = Array(12).fill(0);
var Tn = nt('<div class="sonner-loading-bar"></div>'),
  Sn = nt('<div><div class="sonner-spinner"></div></div>');

function Bn(a, t) {
  de(t, !0);
  var l = Sn(),
    E = et(l);
  Le(E, 23, () => In, (V, X) => `spinner-bar-${X}`, (V, X) => {
    var Q = Tn();
    n(V, Q)
  }), q(E), q(l), tt(V => {
    It(l, 1, V), A(l, "data-visible", t.visible)
  }, [() => xt(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), n(a, l), ue()
}
const Dn = typeof window < "u" ? window : void 0;

function En(a) {
  let t = a.activeElement;
  for (; t != null && t.shadowRoot;) {
    const l = t.shadowRoot.activeElement;
    if (l === t) break;
    t = l
  }
  return t
}
var Ut, te;
class An {
  constructor(t = {}) {
    Xt(this, Ut);
    Xt(this, te);
    const {
      window: l = Dn,
      document: E = l == null ? void 0 : l.document
    } = t;
    l !== void 0 && (Qt(this, Ut, E), Qt(this, te, an(V => {
      const X = ce(l, "focusin", V),
        Q = ce(l, "focusout", V);
      return () => {
        X(), Q()
      }
    })))
  }
  get current() {
    var t;
    return (t = mt(this, te)) == null || t.call(this), mt(this, Ut) ? En(mt(this, Ut)) : null
  }
}
Ut = new WeakMap, te = new WeakMap;
new An;
var ee, Tt;
class Mn {
  constructor(t) {
    Xt(this, ee);
    Xt(this, Tt);
    Qt(this, ee, t), Qt(this, Tt, Symbol(t))
  }
  get key() {
    return mt(this, Tt)
  }
  exists() {
    return pe(mt(this, Tt))
  }
  get() {
    const t = Re(mt(this, Tt));
    if (t === void 0) throw new Error(`Context "${mt(this,ee)}" not found`);
    return t
  }
  getOr(t) {
    const l = Re(mt(this, Tt));
    return l === void 0 ? t : l
  }
  set(t) {
    return $e(mt(this, Tt), t)
  }
}
ee = new WeakMap, Tt = new WeakMap;
const Cn = new Mn("<Toaster/>");

function re(a) {
  return a.label !== void 0
}

function Ln() {
  let a = F(ze(typeof document < "u" ? document.hidden : !1));
  return ht(() => ce(document, "visibilitychange", () => {
    f(a, document.hidden, !0)
  })), {
    get current() {
      return e(a)
    }
  }
}
const Ue = 4e3,
  Pn = 14,
  On = 45,
  Hn = 200,
  kn = .05,
  Rn = {
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

function Nn(a) {
  const [t, l] = a.split("-"), E = [];
  return t && E.push(t), l && E.push(l), E
}

function je(a) {
  return 1 / (1.5 + Math.abs(a) / 20)
}
var Fn = nt("<div><!></div>"),
  Un = nt('<button data-close-button=""><!></button>'),
  jn = nt('<div data-icon=""><!> <!></div>'),
  zn = nt('<div data-description=""><!></div>'),
  Vn = nt('<button data-button="" data-cancel=""> </button>'),
  Kn = nt('<button data-button=""> </button>'),
  Wn = nt('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  Yn = nt('<li data-sonner-toast=""><!> <!></li>');

function Gn(a, t) {
  de(t, !0);
  const l = s => {
    var c = g(),
      I = v(c);
    {
      var T = h => {
          var K = Fn(),
            at = et(K);
          ct(at, () => t.loadingIcon), q(K), tt(W => {
            It(K, 1, W), A(K, "data-visible", e(D) === "loading")
          }, [() => {
            var W, j, m;
            return xt(wt((W = e(it)) == null ? void 0 : W.loader, (m = (j = t.toast) == null ? void 0 : j.classes) == null ? void 0 : m.loader, "sonner-loader"))
          }]), n(h, K)
        },
        S = h => {
          {
            let K = b(() => {
                var W, j;
                return wt((W = e(it)) == null ? void 0 : W.loader, (j = t.toast.classes) == null ? void 0 : j.loader)
              }),
              at = b(() => e(D) === "loading");
            Bn(h, {
              get class() {
                return e(K)
              },
              get visible() {
                return e(at)
              }
            })
          }
        };
      x(I, h => {
        t.loadingIcon ? h(T) : h(S, !1)
      })
    }
    n(s, c)
  };
  let E = H(t, "cancelButtonStyle", 3, ""),
    V = H(t, "actionButtonStyle", 3, ""),
    X = H(t, "descriptionClass", 3, ""),
    Q = H(t, "unstyled", 3, !1),
    St = H(t, "defaultRichColors", 3, !1);
  const Bt = {
    ...Rn
  };
  let M = F(!1),
    C = F(!1),
    Dt = F(!1),
    jt = F(!1),
    zt = F(!1),
    J = F(0),
    _t = F(0),
    Ht = t.toast.duration || t.duration || Ue,
    ot = F(void 0),
    dt = F(null),
    Vt = F(null);
  const fe = b(() => t.index === 0),
    ve = b(() => t.index + 1 <= t.visibleToasts),
    D = b(() => t.toast.type),
    ut = b(() => t.toast.dismissable !== !1),
    Ct = b(() => t.toast.class || ""),
    Et = b(() => t.toast.descriptionClass || ""),
    ft = b(() => G.heights.findIndex(s => s.toastId === t.toast.id) || 0),
    Lt = b(() => t.toast.closeButton ?? t.closeButton),
    me = b(() => t.toast.duration ?? t.duration ?? Ue);
  let At = null;
  const ae = b(() => t.position.split("-")),
    ge = b(() => G.heights.reduce((s, c, I) => I >= e(ft) ? s : s + c.height, 0)),
    he = Ln(),
    _e = b(() => t.toast.invert || t.invert),
    Kt = b(() => e(D) === "loading"),
    it = b(() => ({
      ...Bt,
      ...t.classes
    })),
    be = b(() => t.toast.title),
    Pt = b(() => t.toast.description);
  let Wt = F(0),
    oe = F(0);
  const r = b(() => Math.round(e(ft) * Pn + e(ge)));
  ht(() => {
    e(be), e(Pt);
    let s;
    t.expanded || t.expandByDefault ? s = 1 : s = 1 - t.index * kn;
    const c = $t(() => e(ot));
    if (c === void 0) return;
    c.style.setProperty("height", "auto");
    const I = c.offsetHeight,
      T = c.getBoundingClientRect().height,
      S = Math.round(T / s + Number.EPSILON & 100) / 100;
    c.style.removeProperty("height");
    let h;
    Math.abs(S - I) < 1 ? h = S : h = I, f(_t, h, !0), $t(() => {
      G.setHeight({
        toastId: t.toast.id,
        height: h
      })
    })
  });

  function u() {
    f(C, !0), f(J, e(r), !0), G.removeHeight(t.toast.id), setTimeout(() => {
      G.remove(t.toast.id)
    }, Hn)
  }
  let U;
  const bt = b(() => t.toast.promise && e(D) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function st() {
    f(Wt, new Date().getTime(), !0), U = setTimeout(() => {
      var s, c;
      (c = (s = t.toast).onAutoClose) == null || c.call(s, t.toast), u()
    }, Ht)
  }

  function kt() {
    if (e(oe) < e(Wt)) {
      const s = new Date().getTime() - e(Wt);
      Ht = Ht - s
    }
    f(oe, new Date().getTime(), !0)
  }
  ht(() => {
    t.toast.updated && (clearTimeout(U), Ht = e(me), st())
  }), ht(() => (e(bt) || (t.expanded || t.interacting || he.current ? kt() : st()), () => clearTimeout(U))), pt(() => {
    var c;
    f(M, !0);
    const s = (c = e(ot)) == null ? void 0 : c.getBoundingClientRect().height;
    return f(_t, s, !0), G.setHeight({
      toastId: t.toast.id,
      height: s
    }), () => {
      G.removeHeight(t.toast.id)
    }
  }), ht(() => {
    t.toast.delete && $t(() => {
      var s, c;
      u(), (c = (s = t.toast).onDismiss) == null || c.call(s, t.toast)
    })
  });
  const Pe = s => {
      if (e(Kt)) return;
      f(J, e(r), !0);
      const c = s.target;
      c.setPointerCapture(s.pointerId), c.tagName !== "BUTTON" && (f(Dt, !0), At = {
        x: s.clientX,
        y: s.clientY
      })
    },
    ie = () => {
      var h, K, at, W, j, m;
      if (e(jt) || !e(ut)) return;
      At = null;
      const s = Number(((h = e(ot)) == null ? void 0 : h.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        c = Number(((K = e(ot)) == null ? void 0 : K.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        I = new Date().getTime() - 0,
        T = e(dt) === "x" ? s : c,
        S = Math.abs(T) / I;
      if (Math.abs(T) >= On || S > .11) {
        f(J, e(r), !0), (W = (at = t.toast).onDismiss) == null || W.call(at, t.toast), e(dt) === "x" ? f(Vt, s > 0 ? "right" : "left", !0) : f(Vt, c > 0 ? "down" : "up", !0), u(), f(jt, !0);
        return
      } else(j = e(ot)) == null || j.style.setProperty("--swipe-amount-x", "0px"), (m = e(ot)) == null || m.style.setProperty("--swipe-amount-y", "0px");
      f(zt, !1), f(Dt, !1), f(dt, null)
    },
    vt = s => {
      var K, at, W;
      if (!At || !e(ut) || (((K = window.getSelection()) == null ? void 0 : K.toString().length) ?? -1) > 0) return;
      const I = s.clientY - At.y,
        T = s.clientX - At.x,
        S = t.swipeDirections ?? Nn(t.position);
      !e(dt) && (Math.abs(T) > 1 || Math.abs(I) > 1) && f(dt, Math.abs(T) > Math.abs(I) ? "x" : "y", !0);
      let h = {
        x: 0,
        y: 0
      };
      if (e(dt) === "y") {
        if (S.includes("top") || S.includes("bottom"))
          if (S.includes("top") && I < 0 || S.includes("bottom") && I > 0) h.y = I;
          else {
            const j = I * je(I);
            h.y = Math.abs(j) < Math.abs(I) ? j : I
          }
      } else if (e(dt) === "x" && (S.includes("left") || S.includes("right")))
        if (S.includes("left") && T < 0 || S.includes("right") && T > 0) h.x = T;
        else {
          const j = T * je(T);
          h.x = Math.abs(j) < Math.abs(T) ? j : T
        }(Math.abs(h.x) > 0 || Math.abs(h.y) > 0) && f(zt, !0), (at = e(ot)) == null || at.style.setProperty("--swipe-amount-x", `${h.x}px`), (W = e(ot)) == null || W.style.setProperty("--swipe-amount-y", `${h.y}px`)
    },
    yt = () => {
      f(Dt, !1), f(dt, null), At = null
    },
    p = b(() => t.toast.icon ? t.toast.icon : e(D) === "success" ? t.successIcon : e(D) === "error" ? t.errorIcon : e(D) === "warning" ? t.warningIcon : e(D) === "info" ? t.infoIcon : e(D) === "loading" ? t.loadingIcon : null);
  var y = Yn();
  A(y, "tabindex", 0);
  let se;
  y.__pointermove = vt, y.__pointerup = ie, y.__pointerdown = Pe;
  var ye = et(y);
  {
    var we = s => {
      var c = Un();
      c.__click = () => {
        var T, S;
        e(Kt) || !e(ut) || (u(), (S = (T = t.toast).onDismiss) == null || S.call(T, t.toast))
      };
      var I = et(c);
      ct(I, () => t.closeIcon ?? gt), q(c), tt(T => {
        A(c, "aria-label", t.closeButtonAriaLabel), A(c, "data-disabled", e(Kt)), It(c, 1, T)
      }, [() => {
        var T, S, h;
        return xt(wt((T = e(it)) == null ? void 0 : T.closeButton, (h = (S = t.toast) == null ? void 0 : S.classes) == null ? void 0 : h.closeButton))
      }]), n(s, c)
    };
    x(ye, s => {
      e(Lt) && !t.toast.component && e(D) !== "loading" && t.closeIcon !== null && s(we)
    })
  }
  var xe = Mt(ye, 2);
  {
    var Ie = s => {
        const c = b(() => t.toast.component);
        var I = g(),
          T = v(I);
        Ot(T, () => e(c), (S, h) => {
          h(S, Me(() => t.toast.componentProps, {
            closeToast: u
          }))
        }), n(s, I)
      },
      Te = s => {
        var c = Wn(),
          I = v(c);
        {
          var T = w => {
            var o = jn(),
              d = et(o);
            {
              var B = _ => {
                var P = g(),
                  z = v(P);
                {
                  var R = Y => {
                      var L = g(),
                        N = v(L);
                      Ot(N, () => t.toast.icon, ($, Yt) => {
                        Yt($, {})
                      }), n(Y, L)
                    },
                    O = Y => {
                      l(Y)
                    };
                  x(z, Y => {
                    t.toast.icon ? Y(R) : Y(O, !1)
                  })
                }
                n(_, P)
              };
              x(d, _ => {
                (t.toast.promise || e(D) === "loading") && _(B)
              })
            }
            var k = Mt(d, 2);
            {
              var i = _ => {
                var P = g(),
                  z = v(P);
                {
                  var R = Y => {
                      var L = g(),
                        N = v(L);
                      Ot(N, () => t.toast.icon, ($, Yt) => {
                        Yt($, {})
                      }), n(Y, L)
                    },
                    O = Y => {
                      var L = g(),
                        N = v(L);
                      {
                        var $ = Rt => {
                            var Gt = g(),
                              Se = v(Gt);
                            ct(Se, () => t.successIcon ?? gt), n(Rt, Gt)
                          },
                          Yt = Rt => {
                            var Gt = g(),
                              Se = v(Gt);
                            {
                              var Ge = Nt => {
                                  var Zt = g(),
                                    Be = v(Zt);
                                  ct(Be, () => t.errorIcon ?? gt), n(Nt, Zt)
                                },
                                Ze = Nt => {
                                  var Zt = g(),
                                    Be = v(Zt);
                                  {
                                    var qe = Ft => {
                                        var qt = g(),
                                          De = v(qt);
                                        ct(De, () => t.warningIcon ?? gt), n(Ft, qt)
                                      },
                                      Xe = Ft => {
                                        var qt = g(),
                                          De = v(qt);
                                        {
                                          var Qe = Ee => {
                                            var Oe = g(),
                                              Je = v(Oe);
                                            ct(Je, () => t.infoIcon ?? gt), n(Ee, Oe)
                                          };
                                          x(De, Ee => {
                                            e(D) === "info" && Ee(Qe)
                                          }, !0)
                                        }
                                        n(Ft, qt)
                                      };
                                    x(Be, Ft => {
                                      e(D) === "warning" ? Ft(qe) : Ft(Xe, !1)
                                    }, !0)
                                  }
                                  n(Nt, Zt)
                                };
                              x(Se, Nt => {
                                e(D) === "error" ? Nt(Ge) : Nt(Ze, !1)
                              }, !0)
                            }
                            n(Rt, Gt)
                          };
                        x(N, Rt => {
                          e(D) === "success" ? Rt($) : Rt(Yt, !1)
                        }, !0)
                      }
                      n(Y, L)
                    };
                  x(z, Y => {
                    t.toast.icon ? Y(R) : Y(O, !1)
                  })
                }
                n(_, P)
              };
              x(k, _ => {
                t.toast.type !== "loading" && _(i)
              })
            }
            q(o), tt(_ => It(o, 1, _), [() => {
              var _, P, z;
              return xt(wt((_ = e(it)) == null ? void 0 : _.icon, (z = (P = t.toast) == null ? void 0 : P.classes) == null ? void 0 : z.icon))
            }]), n(w, o)
          };
          x(I, w => {
            (e(D) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (e(p) !== null || t.toast.icon) && w(T)
          })
        }
        var S = Mt(I, 2),
          h = et(S),
          K = et(h);
        {
          var at = w => {
            var o = g(),
              d = v(o);
            {
              var B = i => {
                  const _ = b(() => t.toast.title);
                  var P = g(),
                    z = v(P);
                  Ot(z, () => e(_), (R, O) => {
                    O(R, Me(() => t.toast.componentProps))
                  }), n(i, P)
                },
                k = i => {
                  var _ = Ne();
                  tt(() => Jt(_, t.toast.title)), n(i, _)
                };
              x(d, i => {
                typeof t.toast.title != "string" ? i(B) : i(k, !1)
              })
            }
            n(w, o)
          };
          x(K, w => {
            t.toast.title && w(at)
          })
        }
        q(h);
        var W = Mt(h, 2);
        {
          var j = w => {
            var o = zn(),
              d = et(o);
            {
              var B = i => {
                  const _ = b(() => t.toast.description);
                  var P = g(),
                    z = v(P);
                  Ot(z, () => e(_), (R, O) => {
                    O(R, Me(() => t.toast.componentProps))
                  }), n(i, P)
                },
                k = i => {
                  var _ = Ne();
                  tt(() => Jt(_, t.toast.description)), n(i, _)
                };
              x(d, i => {
                typeof t.toast.description != "string" ? i(B) : i(k, !1)
              })
            }
            q(o), tt(i => It(o, 1, i), [() => {
              var i, _;
              return xt(wt(X(), e(Et), (i = e(it)) == null ? void 0 : i.description, (_ = t.toast.classes) == null ? void 0 : _.description))
            }]), n(w, o)
          };
          x(W, w => {
            t.toast.description && w(j)
          })
        }
        q(S);
        var m = Mt(S, 2);
        {
          var Z = w => {
            var o = g(),
              d = v(o);
            {
              var B = i => {
                  var _ = g(),
                    P = v(_);
                  Ot(P, () => t.toast.cancel, (z, R) => {
                    R(z, {})
                  }), n(i, _)
                },
                k = i => {
                  var _ = g(),
                    P = v(_);
                  {
                    var z = R => {
                      var O = Vn();
                      O.__click = L => {
                        var N, $;
                        re(t.toast.cancel) && e(ut) && (($ = (N = t.toast.cancel) == null ? void 0 : N.onClick) == null || $.call(N, L), u())
                      };
                      var Y = et(O, !0);
                      q(O), tt(L => {
                        Ae(O, t.toast.cancelButtonStyle ?? E()), It(O, 1, L), Jt(Y, t.toast.cancel.label)
                      }, [() => {
                        var L, N, $;
                        return xt(wt((L = e(it)) == null ? void 0 : L.cancelButton, ($ = (N = t.toast) == null ? void 0 : N.classes) == null ? void 0 : $.cancelButton))
                      }]), n(R, O)
                    };
                    x(P, R => {
                      re(t.toast.cancel) && R(z)
                    }, !0)
                  }
                  n(i, _)
                };
              x(d, i => {
                typeof t.toast.cancel == "function" ? i(B) : i(k, !1)
              })
            }
            n(w, o)
          };
          x(m, w => {
            t.toast.cancel && w(Z)
          })
        }
        var rt = Mt(m, 2);
        {
          var lt = w => {
            var o = g(),
              d = v(o);
            {
              var B = i => {
                  var _ = g(),
                    P = v(_);
                  Ot(P, () => t.toast.action, (z, R) => {
                    R(z, {})
                  }), n(i, _)
                },
                k = i => {
                  var _ = g(),
                    P = v(_);
                  {
                    var z = R => {
                      var O = Kn();
                      O.__click = L => {
                        var N;
                        re(t.toast.action) && ((N = t.toast.action) == null || N.onClick(L), !L.defaultPrevented && u())
                      };
                      var Y = et(O, !0);
                      q(O), tt(L => {
                        Ae(O, t.toast.actionButtonStyle ?? V()), It(O, 1, L), Jt(Y, t.toast.action.label)
                      }, [() => {
                        var L, N, $;
                        return xt(wt((L = e(it)) == null ? void 0 : L.actionButton, ($ = (N = t.toast) == null ? void 0 : N.classes) == null ? void 0 : $.actionButton))
                      }]), n(R, O)
                    };
                    x(P, R => {
                      re(t.toast.action) && R(z)
                    }, !0)
                  }
                  n(i, _)
                };
              x(d, i => {
                typeof t.toast.action == "function" ? i(B) : i(k, !1)
              })
            }
            n(w, o)
          };
          x(rt, w => {
            t.toast.action && w(lt)
          })
        }
        tt(w => It(h, 1, w), [() => {
          var w, o, d;
          return xt(wt((w = e(it)) == null ? void 0 : w.title, (d = (o = t.toast) == null ? void 0 : o.classes) == null ? void 0 : d.title))
        }]), n(s, c)
      };
    x(xe, s => {
      t.toast.component ? s(Ie) : s(Te, !1)
    })
  }
  q(y), Ke(y, s => f(ot, s), () => e(ot)), tt((s, c, I) => {
    It(y, 1, s), A(y, "data-rich-colors", t.toast.richColors ?? St()), A(y, "data-styled", !(t.toast.component || t.toast.unstyled || Q())), A(y, "data-mounted", e(M)), A(y, "data-promise", c), A(y, "data-swiped", e(zt)), A(y, "data-removed", e(C)), A(y, "data-visible", e(ve)), A(y, "data-y-position", e(ae)[0]), A(y, "data-x-position", e(ae)[1]), A(y, "data-index", t.index), A(y, "data-front", e(fe)), A(y, "data-swiping", e(Dt)), A(y, "data-dismissable", e(ut)), A(y, "data-type", e(D)), A(y, "data-invert", e(_e)), A(y, "data-swipe-out", e(jt)), A(y, "data-swipe-direction", e(Vt)), A(y, "data-expanded", I), se = Ae(y, `${t.style} ${t.toast.style}`, se, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": G.toasts.length - t.index,
      "--offset": `${e(C)?e(J):e(r)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${e(_t)}px`
    })
  }, [() => {
    var s, c, I, T, S, h;
    return xt(wt(t.class, e(Ct), (s = e(it)) == null ? void 0 : s.toast, (I = (c = t.toast) == null ? void 0 : c.classes) == null ? void 0 : I.toast, (T = e(it)) == null ? void 0 : T[e(D)], (h = (S = t.toast) == null ? void 0 : S.classes) == null ? void 0 : h[e(D)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && e(M))]), Ve("dragend", y, yt), n(a, y), ue()
}
tn(["pointermove", "pointerup", "pointerdown", "click"]);
var Zn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function qn(a) {
  var t = Zn();
  n(a, t)
}
var Xn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function Qn(a) {
  var t = Xn();
  n(a, t)
}
var Jn = ne('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function pn(a) {
  var t = Jn();
  n(a, t)
}
var $n = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function ta(a) {
  var t = $n();
  n(a, t)
}
var ea = ne('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function na(a) {
  var t = ea();
  n(a, t)
}
const aa = 3,
  We = "24px",
  Ye = "16px",
  oa = 4e3,
  ia = 356,
  sa = 14,
  Ce = "dark",
  le = "light";

function ra(a, t) {
  const l = {};
  return [a, t].forEach((E, V) => {
    const X = V === 1,
      Q = X ? "--mobile-offset" : "--offset",
      St = X ? Ye : We;

    function Bt(M) {
      ["top", "right", "bottom", "left"].forEach(C => {
        l[`${Q}-${C}`] = typeof M == "number" ? `${M}px` : M
      })
    }
    typeof E == "number" || typeof E == "string" ? Bt(E) : typeof E == "object" ? ["top", "right", "bottom", "left"].forEach(M => {
      const C = E[M];
      C === void 0 ? l[`${Q}-${M}`] = St : l[`${Q}-${M}`] = typeof C == "number" ? `${C}px` : C
    }) : Bt(St)
  }), l
}
var la = nt("<ol></ol>"),
  ca = nt('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-v2ww3x"><!></section>');

function da(a, t) {
  de(t, !0);

  function l(r) {
    return r !== "system" ? r : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Ce : le
  }
  let E = H(t, "invert", 3, !1),
    V = H(t, "position", 3, "bottom-right"),
    X = H(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    Q = H(t, "expand", 3, !1),
    St = H(t, "closeButton", 3, !1),
    Bt = H(t, "offset", 3, We),
    M = H(t, "mobileOffset", 3, Ye),
    C = H(t, "theme", 3, "light"),
    Dt = H(t, "richColors", 3, !1),
    jt = H(t, "duration", 3, oa),
    zt = H(t, "visibleToasts", 3, aa),
    J = H(t, "toastOptions", 19, () => ({})),
    _t = H(t, "dir", 7, "auto"),
    Ht = H(t, "gap", 3, sa),
    ot = H(t, "containerAriaLabel", 3, "Notifications"),
    dt = H(t, "closeButtonAriaLabel", 3, "Close toast"),
    Vt = wn(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function fe() {
    if (_t() !== "auto") return _t();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const r = document.documentElement.getAttribute("dir");
    return r === "auto" || !r ? ($t(() => _t(window.getComputedStyle(document.documentElement).direction ?? "ltr")), _t()) : ($t(() => _t(r)), r)
  }
  const ve = b(() => Array.from(new Set([V(), ...G.toasts.filter(r => r.position).map(r => r.position)].filter(Boolean))));
  let D = F(!1),
    ut = F(!1),
    Ct = F(ze(l(C()))),
    Et = F(void 0),
    ft = F(null),
    Lt = F(!1);
  const me = b(() => X().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  ht(() => {
    G.toasts.length <= 1 && f(D, !1)
  }), ht(() => {
    const r = G.toasts.filter(u => u.dismiss && !u.delete);
    if (r.length > 0) {
      const u = G.toasts.map(U => r.find(st => st.id === U.id) ? {
        ...U,
        delete: !0
      } : U);
      G.toasts = u
    }
  }), ht(() => () => {
    e(Et) && e(ft) && (e(ft).focus({
      preventScroll: !0
    }), f(ft, null), f(Lt, !1))
  }), pt(() => (G.reset(), ce(document, "keydown", u => {
    var bt, st;
    X().every(kt => u[kt] || u.code === kt) && (f(D, !0), (bt = e(Et)) == null || bt.focus()), u.code === "Escape" && (document.activeElement === e(Et) || (st = e(Et)) != null && st.contains(document.activeElement)) && f(D, !1)
  }))), ht(() => {
    if (C() !== "system" && f(Ct, C()), typeof window < "u") {
      C() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? f(Ct, Ce) : f(Ct, le));
      const r = window.matchMedia("(prefers-color-scheme: dark)"),
        u = ({
          matches: U
        }) => {
          f(Ct, U ? Ce : le, !0)
        };
      "addEventListener" in r ? r.addEventListener("change", u) : r.addListener(u)
    }
  });
  const At = r => {
      var u;
      (u = t.onblur) == null || u.call(t, r), e(Lt) && !r.currentTarget.contains(r.relatedTarget) && (f(Lt, !1), e(ft) && (e(ft).focus({
        preventScroll: !0
      }), f(ft, null)))
    },
    ae = r => {
      var U;
      (U = t.onfocus) == null || U.call(t, r), !(r.target instanceof HTMLElement && r.target.dataset.dismissable === "false") && (e(Lt) || (f(Lt, !0), f(ft, r.relatedTarget, !0)))
    },
    ge = r => {
      var U;
      (U = t.onpointerdown) == null || U.call(t, r), !(r.target instanceof HTMLElement && r.target.dataset.dismissable === "false") && f(ut, !0)
    },
    he = r => {
      var u;
      (u = t.onmouseenter) == null || u.call(t, r), f(D, !0)
    },
    _e = r => {
      var u;
      (u = t.onmouseleave) == null || u.call(t, r), e(ut) || f(D, !1)
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
      (u = t.onpointerup) == null || u.call(t, r), f(ut, !1)
    };
  Cn.set(new rn);
  var Pt = ca();
  A(Pt, "tabindex", -1);
  var Wt = et(Pt);
  {
    var oe = r => {
      var u = g(),
        U = v(u);
      Le(U, 18, () => e(ve), bt => bt, (bt, st, kt, Pe) => {
        const ie = b(() => {
            const [p, y] = st.split("-");
            return {
              y: p,
              x: y
            }
          }),
          vt = b(() => ra(Bt(), M()));
        var yt = la();
        bn(yt, p => {
          var y;
          return {
            tabindex: -1,
            dir: p,
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
            ondragend: it,
            onpointerdown: ge,
            onpointerup: be,
            ...Vt,
            [yn]: {
              "--front-toast-height": `${(y=G.heights[0])==null?void 0:y.height}px`,
              "--width": `${ia}px`,
              "--gap": `${Ht()}px`,
              "--offset-top": e(vt)["--offset-top"],
              "--offset-right": e(vt)["--offset-right"],
              "--offset-bottom": e(vt)["--offset-bottom"],
              "--offset-left": e(vt)["--offset-left"],
              "--mobile-offset-top": e(vt)["--mobile-offset-top"],
              "--mobile-offset-right": e(vt)["--mobile-offset-right"],
              "--mobile-offset-bottom": e(vt)["--mobile-offset-bottom"],
              "--mobile-offset-left": e(vt)["--mobile-offset-left"]
            }
          }
        }, [fe], void 0, void 0, "svelte-v2ww3x"), Le(yt, 23, () => G.toasts.filter(p => !p.position && e(kt) === 0 || p.position === st), p => p.id, (p, y, se, ye) => {
          {
            const we = m => {
                var Z = g(),
                  rt = v(Z);
                {
                  var lt = o => {
                      var d = g(),
                        B = v(d);
                      ct(B, () => t.successIcon ?? gt), n(o, d)
                    },
                    w = o => {
                      var d = g(),
                        B = v(d);
                      {
                        var k = i => {
                          qn(i)
                        };
                        x(B, i => {
                          t.successIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  x(rt, o => {
                    t.successIcon ? o(lt) : o(w, !1)
                  })
                }
                n(m, Z)
              },
              xe = m => {
                var Z = g(),
                  rt = v(Z);
                {
                  var lt = o => {
                      var d = g(),
                        B = v(d);
                      ct(B, () => t.errorIcon ?? gt), n(o, d)
                    },
                    w = o => {
                      var d = g(),
                        B = v(d);
                      {
                        var k = i => {
                          Qn(i)
                        };
                        x(B, i => {
                          t.errorIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  x(rt, o => {
                    t.errorIcon ? o(lt) : o(w, !1)
                  })
                }
                n(m, Z)
              },
              Ie = m => {
                var Z = g(),
                  rt = v(Z);
                {
                  var lt = o => {
                      var d = g(),
                        B = v(d);
                      ct(B, () => t.warningIcon ?? gt), n(o, d)
                    },
                    w = o => {
                      var d = g(),
                        B = v(d);
                      {
                        var k = i => {
                          pn(i)
                        };
                        x(B, i => {
                          t.warningIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  x(rt, o => {
                    t.warningIcon ? o(lt) : o(w, !1)
                  })
                }
                n(m, Z)
              },
              Te = m => {
                var Z = g(),
                  rt = v(Z);
                {
                  var lt = o => {
                      var d = g(),
                        B = v(d);
                      ct(B, () => t.infoIcon ?? gt), n(o, d)
                    },
                    w = o => {
                      var d = g(),
                        B = v(d);
                      {
                        var k = i => {
                          ta(i)
                        };
                        x(B, i => {
                          t.infoIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  x(rt, o => {
                    t.infoIcon ? o(lt) : o(w, !1)
                  })
                }
                n(m, Z)
              },
              s = m => {
                var Z = g(),
                  rt = v(Z);
                {
                  var lt = o => {
                      var d = g(),
                        B = v(d);
                      ct(B, () => t.closeIcon ?? gt), n(o, d)
                    },
                    w = o => {
                      var d = g(),
                        B = v(d);
                      {
                        var k = i => {
                          na(i)
                        };
                        x(B, i => {
                          t.closeIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  x(rt, o => {
                    t.closeIcon ? o(lt) : o(w, !1)
                  })
                }
                n(m, Z)
              };
            let c = b(() => {
                var m;
                return ((m = J()) == null ? void 0 : m.duration) ?? jt()
              }),
              I = b(() => {
                var m;
                return ((m = J()) == null ? void 0 : m.class) ?? ""
              }),
              T = b(() => {
                var m;
                return ((m = J()) == null ? void 0 : m.descriptionClass) || ""
              }),
              S = b(() => {
                var m;
                return ((m = J()) == null ? void 0 : m.style) ?? ""
              }),
              h = b(() => J().classes || {}),
              K = b(() => J().unstyled ?? !1),
              at = b(() => {
                var m;
                return ((m = J()) == null ? void 0 : m.cancelButtonStyle) ?? ""
              }),
              W = b(() => {
                var m;
                return ((m = J()) == null ? void 0 : m.actionButtonStyle) ?? ""
              }),
              j = b(() => {
                var m;
                return ((m = J()) == null ? void 0 : m.closeButtonAriaLabel) ?? dt()
              });
            Gn(p, {
              get index() {
                return e(se)
              },
              get toast() {
                return e(y)
              },
              get defaultRichColors() {
                return Dt()
              },
              get duration() {
                return e(c)
              },
              get class() {
                return e(I)
              },
              get descriptionClass() {
                return e(T)
              },
              get invert() {
                return E()
              },
              get visibleToasts() {
                return zt()
              },
              get closeButton() {
                return St()
              },
              get interacting() {
                return e(ut)
              },
              get position() {
                return st
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
                return e(at)
              },
              get actionButtonStyle() {
                return e(W)
              },
              get closeButtonAriaLabel() {
                return e(j)
              },
              get expandByDefault() {
                return Q()
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
        }), q(yt), Ke(yt, p => f(Et, p), () => e(Et)), tt(() => yt.dir = yt.dir), n(bt, yt)
      }), n(r, u)
    };
    x(Wt, r => {
      G.toasts.length > 0 && r(oe)
    })
  }
  q(Pt), tt(() => A(Pt, "aria-label", `${ot()??""} ${e(me)??""}`)), n(a, Pt), ue()
}
var ua = nt('<div class="flex h-full flex-col items-center justify-center gap-6"><div><!></div> <p class="max-w-3xl text-center font-medium sm:text-xl">Our servers are in maintenance. Try again later.<br/> Sorry for the inconvenience 🙇‍♂️</p></div>');

function fa(a) {
  var t = ua(),
    l = et(t),
    E = et(l);
  hn(E, {
    size: "lg",
    hasText: !0
  }), q(l), en(2), q(t), n(a, t)
}
var va = nt('<span class="hidden"> </span> <!> <!>', 1);

function Ha(a, t) {
  de(t, !0), pt(() => {
    ln(), cn.refresh().then(C => {
      C && dn()
    }), Object.assign(window, {
      eval: un(eval, function() {}, async () => {
        await fetch(sn + "/me", {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + crypto.randomUUID()
          }
        })
      })
    });
    let M = setInterval(() => {
      mn()
    }, 5e3);
    return () => {
      clearTimeout(M)
    }
  });
  const l = "muted";
  pt(() => {
    Fe.muted = localStorage.getItem(l) === "1"
  }), ht(() => {
    {
      const M = Fe.muted;
      document.querySelectorAll("audio").forEach(C => {
        C.muted = M
      });
      for (const C of Object.values(vn).filter(Dt => Dt instanceof Audio)) C.muted = M, M || (C.volume = .3);
      localStorage.setItem(l, Number(M).toString())
    }
  }), pt(() => {
    fn.info(_n(), {
      duration: 6e4
    })
  });
  var E = va();
  Ve("beforeunload", nn, () => {
    gn()
  });
  var V = v(E),
    X = et(V);
  q(V);
  var Q = Mt(V, 2);
  {
    var St = M => {
      fa(M)
    };
    x(Q, M => {
      M(St)
    })
  }
  var Bt = Mt(Q, 2);
  da(Bt, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15!",
    duration: 3e3
  }), tt(() => Jt(X, `Version: ${on}`)), n(a, E), ue()
}
export {
  Ha as component, Oa as universal
};