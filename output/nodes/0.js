var ke = a => {
  throw TypeError(a)
};
var Re = (a, t, s) => t.has(a) || ke("Cannot " + s);
var gt = (a, t, s) => (Re(a, t, "read from private field"), s ? s.call(a) : t.get(a)),
  Jt = (a, t, s) => t.has(a) ? ke("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(a) : t.set(a, s),
  Qt = (a, t, s, w) => (Re(a, t, "write to private field"), w ? w.call(a, s) : t.set(a, s), s);
import "../chunks/Bzak7iHL.js";
import {
  o as pt,
  s as it
} from "../chunks/BaCvcCNi.js";
import {
  p as de,
  f as et,
  d as ot,
  b as n,
  r as p,
  t as q,
  c as ue,
  bo as le,
  aD as en,
  aC as Ne,
  aE as nn,
  aI as H,
  aH as Ke,
  y as _t,
  aJ as u,
  g as e,
  u as b,
  z as $t,
  s as Mt,
  bj as Ve,
  au as ht,
  aK as g,
  a as v,
  at as an,
  aX as Fe,
  v as ne,
  bm as on
} from "../chunks/B0_b_ZC0.js";
import {
  s as qt
} from "../chunks/BKKOZo4g.js";
import {
  v as sn
} from "../chunks/DSClE1m5.js";
import {
  f as Z,
  h as xt,
  i as rn,
  u as Le,
  _ as ln,
  j as cn,
  a as dn,
  r as un,
  g as je,
  P as fn
} from "../chunks/CM0bkSp-.js";
import {
  c as vn,
  A as mn,
  s as gn,
  a as hn
} from "../chunks/BVlV0ujw.js";
import "../chunks/C5GsJ62f.js";
import {
  p as L,
  i as T,
  s as Me,
  r as _n
} from "../chunks/3GNvktHi.js";
import {
  e as Pe
} from "../chunks/5KQn9-pK.js";
import {
  c as It,
  a as Tt,
  s as A,
  e as Ae,
  b as bn,
  S as wn
} from "../chunks/D7R8LpwE.js";
import {
  b as We
} from "../chunks/Bbg9a0Hf.js";
import {
  c as Lt
} from "../chunks/SQraYq6A.js";
import "../chunks/3nD0CHXD.js";
const yn = !0,
  La = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: yn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  xn = "" + new URL("../assets/pawtect_wasm_bg.BvxCe1S1.wasm", import.meta.url).href,
  In = Array(12).fill(0);
var Tn = et('<div class="sonner-loading-bar"></div>'),
  Bn = et('<div><div class="sonner-spinner"></div></div>');

function Sn(a, t) {
  de(t, !0);
  var s = Bn(),
    w = ot(s);
  Pe(w, 23, () => In, (M, O) => `spinner-bar-${O}`, (M, O) => {
    var K = Tn();
    n(M, K)
  }), p(w), p(s), q(M => {
    Tt(s, 1, M), A(s, "data-visible", t.visible)
  }, [() => It(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), n(a, s), ue()
}
const Dn = typeof window < "u" ? window : void 0;

function En(a) {
  let t = a.activeElement;
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
    Jt(this, jt);
    Jt(this, te);
    const {
      window: s = Dn,
      document: w = s == null ? void 0 : s.document
    } = t;
    s !== void 0 && (Qt(this, jt, w), Qt(this, te, vn(M => {
      const O = le(s, "focusin", M),
        K = le(s, "focusout", M);
      return () => {
        O(), K()
      }
    })))
  }
  get current() {
    var t;
    return (t = gt(this, te)) == null || t.call(this), gt(this, jt) ? En(gt(this, jt)) : null
  }
}
jt = new WeakMap, te = new WeakMap;
new Mn;
var ee, Bt;
class An {
  constructor(t) {
    Jt(this, ee);
    Jt(this, Bt);
    Qt(this, ee, t), Qt(this, Bt, Symbol(t))
  }
  get key() {
    return gt(this, Bt)
  }
  exists() {
    return en(gt(this, Bt))
  }
  get() {
    const t = Ne(gt(this, Bt));
    if (t === void 0) throw new Error(`Context "${gt(this,ee)}" not found`);
    return t
  }
  getOr(t) {
    const s = Ne(gt(this, Bt));
    return s === void 0 ? t : s
  }
  set(t) {
    return nn(gt(this, Bt), t)
  }
}
ee = new WeakMap, Bt = new WeakMap;
const Cn = new An("<Toaster/>");

function ce(a) {
  return a.label !== void 0
}

function Pn() {
  let a = H(Ke(typeof document < "u" ? document.hidden : !1));
  return _t(() => le(document, "visibilitychange", () => {
    u(a, document.hidden, !0)
  })), {
    get current() {
      return e(a)
    }
  }
}
const Ue = 4e3,
  Ln = 14,
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
  const [t, s] = a.split("-"), w = [];
  return t && w.push(t), s && w.push(s), w
}

function ze(a) {
  return 1 / (1.5 + Math.abs(a) / 20)
}
var Fn = et("<div><!></div>"),
  jn = (a, t, s, w, M) => {
    var O, K;
    e(t) || !e(s) || (w(), (K = (O = M.toast).onDismiss) == null || K.call(O, M.toast))
  },
  Un = et('<button data-close-button=""><!></button>'),
  zn = et('<div data-icon=""><!> <!></div>'),
  Kn = et('<div data-description=""><!></div>'),
  Vn = (a, t, s, w) => {
    var M, O;
    ce(t.toast.cancel) && e(s) && ((O = (M = t.toast.cancel) == null ? void 0 : M.onClick) == null || O.call(M, a), w())
  },
  Wn = et('<button data-button="" data-cancel=""> </button>'),
  Yn = (a, t, s) => {
    var w;
    ce(t.toast.action) && ((w = t.toast.action) == null || w.onClick(a), !a.defaultPrevented && s())
  },
  Xn = et('<button data-button=""> </button>'),
  Zn = et('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  Gn = et('<li data-sonner-toast=""><!> <!></li>');

function Jn(a, t) {
  de(t, !0);
  const s = r => {
    var c = g(),
      I = v(c);
    {
      var B = h => {
          var W = Fn(),
            tt = ot(W);
          it(tt, () => t.loadingIcon), p(W), q(Y => {
            Tt(W, 1, Y), A(W, "data-visible", e(E) === "loading")
          }, [() => {
            var Y, j, m;
            return It(xt((Y = e(at)) == null ? void 0 : Y.loader, (m = (j = t.toast) == null ? void 0 : j.classes) == null ? void 0 : m.loader, "sonner-loader"))
          }]), n(h, W)
        },
        S = h => {
          {
            let W = b(() => {
                var Y, j;
                return xt((Y = e(at)) == null ? void 0 : Y.loader, (j = t.toast.classes) == null ? void 0 : j.loader)
              }),
              tt = b(() => e(E) === "loading");
            Sn(h, {
              get class() {
                return e(W)
              },
              get visible() {
                return e(tt)
              }
            })
          }
        };
      T(I, h => {
        t.loadingIcon ? h(B) : h(S, !1)
      })
    }
    n(r, c)
  };
  let w = L(t, "cancelButtonStyle", 3, ""),
    M = L(t, "actionButtonStyle", 3, ""),
    O = L(t, "descriptionClass", 3, ""),
    K = L(t, "unstyled", 3, !1),
    St = L(t, "defaultRichColors", 3, !1);
  const $ = {
    ...Rn
  };
  let N = H(!1),
    J = H(!1),
    Ot = H(!1),
    Ut = H(!1),
    zt = H(!1),
    Q = H(0),
    bt = H(0),
    Ht = t.toast.duration || t.duration || Ue,
    nt = H(void 0),
    ut = H(null),
    Kt = H(null);
  const fe = b(() => t.index === 0),
    ve = b(() => t.index + 1 <= t.visibleToasts),
    E = b(() => t.toast.type),
    ft = b(() => t.toast.dismissable !== !1),
    At = b(() => t.toast.class || ""),
    Dt = b(() => t.toast.descriptionClass || ""),
    vt = b(() => Z.heights.findIndex(r => r.toastId === t.toast.id) || 0),
    Ct = b(() => t.toast.closeButton ?? t.closeButton),
    me = b(() => t.toast.duration ?? t.duration ?? Ue);
  let Et = null;
  const ae = b(() => t.position.split("-")),
    ge = b(() => Z.heights.reduce((r, c, I) => I >= e(vt) ? r : r + c.height, 0)),
    he = Pn(),
    _e = b(() => t.toast.invert || t.invert),
    Vt = b(() => e(E) === "loading"),
    at = b(() => ({
      ...$,
      ...t.classes
    })),
    be = b(() => t.toast.title),
    Pt = b(() => t.toast.description);
  let Wt = H(0),
    oe = H(0);
  const l = b(() => Math.round(e(vt) * Ln + e(ge)));
  _t(() => {
    e(be), e(Pt);
    let r;
    t.expanded || t.expandByDefault ? r = 1 : r = 1 - t.index * kn;
    const c = $t(() => e(nt));
    if (c === void 0) return;
    c.style.setProperty("height", "auto");
    const I = c.offsetHeight,
      B = c.getBoundingClientRect().height,
      S = Math.round(B / r + Number.EPSILON & 100) / 100;
    c.style.removeProperty("height");
    let h;
    Math.abs(S - I) < 1 ? h = S : h = I, u(bt, h, !0), $t(() => {
      Z.setHeight({
        toastId: t.toast.id,
        height: h
      })
    })
  });

  function f() {
    u(J, !0), u(Q, e(l), !0), Z.removeHeight(t.toast.id), setTimeout(() => {
      Z.remove(t.toast.id)
    }, Hn)
  }
  let F;
  const wt = b(() => t.toast.promise && e(E) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function st() {
    u(Wt, new Date().getTime(), !0), F = setTimeout(() => {
      var r, c;
      (c = (r = t.toast).onAutoClose) == null || c.call(r, t.toast), f()
    }, Ht)
  }

  function kt() {
    if (e(oe) < e(Wt)) {
      const r = new Date().getTime() - e(Wt);
      Ht = Ht - r
    }
    u(oe, new Date().getTime(), !0)
  }
  _t(() => {
    t.toast.updated && (clearTimeout(F), Ht = e(me), st())
  }), _t(() => (e(wt) || (t.expanded || t.interacting || he.current ? kt() : st()), () => clearTimeout(F))), pt(() => {
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
      u(Q, e(l), !0);
      const c = r.target;
      c.setPointerCapture(r.pointerId), c.tagName !== "BUTTON" && (u(Ot, !0), Et = {
        x: r.clientX,
        y: r.clientY
      })
    },
    ie = () => {
      var h, W, tt, Y, j, m;
      if (e(Ut) || !e(ft)) return;
      Et = null;
      const r = Number(((h = e(nt)) == null ? void 0 : h.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        c = Number(((W = e(nt)) == null ? void 0 : W.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        I = new Date().getTime() - 0,
        B = e(ut) === "x" ? r : c,
        S = Math.abs(B) / I;
      if (Math.abs(B) >= On || S > .11) {
        u(Q, e(l), !0), (Y = (tt = t.toast).onDismiss) == null || Y.call(tt, t.toast), e(ut) === "x" ? u(Kt, r > 0 ? "right" : "left", !0) : u(Kt, c > 0 ? "down" : "up", !0), f(), u(Ut, !0);
        return
      } else(j = e(nt)) == null || j.style.setProperty("--swipe-amount-x", "0px"), (m = e(nt)) == null || m.style.setProperty("--swipe-amount-y", "0px");
      u(zt, !1), u(Ot, !1), u(ut, null)
    },
    mt = r => {
      var W, tt, Y;
      if (!Et || !e(ft) || (((W = window.getSelection()) == null ? void 0 : W.toString().length) ?? -1) > 0) return;
      const I = r.clientY - Et.y,
        B = r.clientX - Et.x,
        S = t.swipeDirections ?? Nn(t.position);
      !e(ut) && (Math.abs(B) > 1 || Math.abs(I) > 1) && u(ut, Math.abs(B) > Math.abs(I) ? "x" : "y", !0);
      let h = {
        x: 0,
        y: 0
      };
      if (e(ut) === "y") {
        if (S.includes("top") || S.includes("bottom"))
          if (S.includes("top") && I < 0 || S.includes("bottom") && I > 0) h.y = I;
          else {
            const j = I * ze(I);
            h.y = Math.abs(j) < Math.abs(I) ? j : I
          }
      } else if (e(ut) === "x" && (S.includes("left") || S.includes("right")))
        if (S.includes("left") && B < 0 || S.includes("right") && B > 0) h.x = B;
        else {
          const j = B * ze(B);
          h.x = Math.abs(j) < Math.abs(B) ? j : B
        }(Math.abs(h.x) > 0 || Math.abs(h.y) > 0) && u(zt, !0), (tt = e(nt)) == null || tt.style.setProperty("--swipe-amount-x", `${h.x}px`), (Y = e(nt)) == null || Y.style.setProperty("--swipe-amount-y", `${h.y}px`)
    },
    yt = () => {
      u(Ot, !1), u(ut, null), Et = null
    },
    V = b(() => t.toast.icon ? t.toast.icon : e(E) === "success" ? t.successIcon : e(E) === "error" ? t.errorIcon : e(E) === "warning" ? t.warningIcon : e(E) === "info" ? t.infoIcon : e(E) === "loading" ? t.loadingIcon : null);
  var y = Gn();
  A(y, "tabindex", 0);
  let se;
  y.__pointermove = mt, y.__pointerup = ie, y.__pointerdown = Oe;
  var we = ot(y);
  {
    var ye = r => {
      var c = Un();
      c.__click = [jn, Vt, ft, f, t];
      var I = ot(c);
      it(I, () => t.closeIcon ?? ht), p(c), q(B => {
        A(c, "aria-label", t.closeButtonAriaLabel), A(c, "data-disabled", e(Vt)), Tt(c, 1, B)
      }, [() => {
        var B, S, h;
        return It(xt((B = e(at)) == null ? void 0 : B.closeButton, (h = (S = t.toast) == null ? void 0 : S.classes) == null ? void 0 : h.closeButton))
      }]), n(r, c)
    };
    T(we, r => {
      e(Ct) && !t.toast.component && e(E) !== "loading" && t.closeIcon !== null && r(ye)
    })
  }
  var xe = Mt(we, 2);
  {
    var Ie = r => {
        const c = b(() => t.toast.component);
        var I = g(),
          B = v(I);
        Lt(B, () => e(c), (S, h) => {
          h(S, Me(() => t.toast.componentProps, {
            closeToast: f
          }))
        }), n(r, I)
      },
      Te = r => {
        var c = Zn(),
          I = v(c);
        {
          var B = x => {
            var o = zn(),
              d = ot(o);
            {
              var D = _ => {
                var C = g(),
                  U = v(C);
                {
                  var R = X => {
                      var z = g(),
                        ct = v(z);
                      Lt(ct, () => t.toast.icon, (dt, Yt) => {
                        Yt(dt, {})
                      }), n(X, z)
                    },
                    P = X => {
                      s(X)
                    };
                  T(U, X => {
                    t.toast.icon ? X(R) : X(P, !1)
                  })
                }
                n(_, C)
              };
              T(d, _ => {
                (t.toast.promise || e(E) === "loading") && _(D)
              })
            }
            var k = Mt(d, 2);
            {
              var i = _ => {
                var C = g(),
                  U = v(C);
                {
                  var R = X => {
                      var z = g(),
                        ct = v(z);
                      Lt(ct, () => t.toast.icon, (dt, Yt) => {
                        Yt(dt, {})
                      }), n(X, z)
                    },
                    P = X => {
                      var z = g(),
                        ct = v(z);
                      {
                        var dt = Rt => {
                            var Xt = g(),
                              Be = v(Xt);
                            it(Be, () => t.successIcon ?? ht), n(Rt, Xt)
                          },
                          Yt = Rt => {
                            var Xt = g(),
                              Be = v(Xt);
                            {
                              var Je = Nt => {
                                  var Zt = g(),
                                    Se = v(Zt);
                                  it(Se, () => t.errorIcon ?? ht), n(Nt, Zt)
                                },
                                Qe = Nt => {
                                  var Zt = g(),
                                    Se = v(Zt);
                                  {
                                    var qe = Ft => {
                                        var Gt = g(),
                                          De = v(Gt);
                                        it(De, () => t.warningIcon ?? ht), n(Ft, Gt)
                                      },
                                      pe = Ft => {
                                        var Gt = g(),
                                          De = v(Gt);
                                        {
                                          var $e = Ee => {
                                            var He = g(),
                                              tn = v(He);
                                            it(tn, () => t.infoIcon ?? ht), n(Ee, He)
                                          };
                                          T(De, Ee => {
                                            e(E) === "info" && Ee($e)
                                          }, !0)
                                        }
                                        n(Ft, Gt)
                                      };
                                    T(Se, Ft => {
                                      e(E) === "warning" ? Ft(qe) : Ft(pe, !1)
                                    }, !0)
                                  }
                                  n(Nt, Zt)
                                };
                              T(Be, Nt => {
                                e(E) === "error" ? Nt(Je) : Nt(Qe, !1)
                              }, !0)
                            }
                            n(Rt, Xt)
                          };
                        T(ct, Rt => {
                          e(E) === "success" ? Rt(dt) : Rt(Yt, !1)
                        }, !0)
                      }
                      n(X, z)
                    };
                  T(U, X => {
                    t.toast.icon ? X(R) : X(P, !1)
                  })
                }
                n(_, C)
              };
              T(k, _ => {
                t.toast.type !== "loading" && _(i)
              })
            }
            p(o), q(_ => Tt(o, 1, _), [() => {
              var _, C, U;
              return It(xt((_ = e(at)) == null ? void 0 : _.icon, (U = (C = t.toast) == null ? void 0 : C.classes) == null ? void 0 : U.icon))
            }]), n(x, o)
          };
          T(I, x => {
            (e(E) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (e(V) !== null || t.toast.icon) && x(B)
          })
        }
        var S = Mt(I, 2),
          h = ot(S),
          W = ot(h);
        {
          var tt = x => {
            var o = g(),
              d = v(o);
            {
              var D = i => {
                  const _ = b(() => t.toast.title);
                  var C = g(),
                    U = v(C);
                  Lt(U, () => e(_), (R, P) => {
                    P(R, Me(() => t.toast.componentProps))
                  }), n(i, C)
                },
                k = i => {
                  var _ = Fe();
                  q(() => qt(_, t.toast.title)), n(i, _)
                };
              T(d, i => {
                typeof t.toast.title != "string" ? i(D) : i(k, !1)
              })
            }
            n(x, o)
          };
          T(W, x => {
            t.toast.title && x(tt)
          })
        }
        p(h);
        var Y = Mt(h, 2);
        {
          var j = x => {
            var o = Kn(),
              d = ot(o);
            {
              var D = i => {
                  const _ = b(() => t.toast.description);
                  var C = g(),
                    U = v(C);
                  Lt(U, () => e(_), (R, P) => {
                    P(R, Me(() => t.toast.componentProps))
                  }), n(i, C)
                },
                k = i => {
                  var _ = Fe();
                  q(() => qt(_, t.toast.description)), n(i, _)
                };
              T(d, i => {
                typeof t.toast.description != "string" ? i(D) : i(k, !1)
              })
            }
            p(o), q(i => Tt(o, 1, i), [() => {
              var i, _;
              return It(xt(O(), e(Dt), (i = e(at)) == null ? void 0 : i.description, (_ = t.toast.classes) == null ? void 0 : _.description))
            }]), n(x, o)
          };
          T(Y, x => {
            t.toast.description && x(j)
          })
        }
        p(S);
        var m = Mt(S, 2);
        {
          var G = x => {
            var o = g(),
              d = v(o);
            {
              var D = i => {
                  var _ = g(),
                    C = v(_);
                  Lt(C, () => t.toast.cancel, (U, R) => {
                    R(U, {})
                  }), n(i, _)
                },
                k = i => {
                  var _ = g(),
                    C = v(_);
                  {
                    var U = R => {
                      var P = Wn();
                      P.__click = [Vn, t, ft, f];
                      var X = ot(P, !0);
                      p(P), q(z => {
                        Ae(P, t.toast.cancelButtonStyle ?? w()), Tt(P, 1, z), qt(X, t.toast.cancel.label)
                      }, [() => {
                        var z, ct, dt;
                        return It(xt((z = e(at)) == null ? void 0 : z.cancelButton, (dt = (ct = t.toast) == null ? void 0 : ct.classes) == null ? void 0 : dt.cancelButton))
                      }]), n(R, P)
                    };
                    T(C, R => {
                      ce(t.toast.cancel) && R(U)
                    }, !0)
                  }
                  n(i, _)
                };
              T(d, i => {
                typeof t.toast.cancel == "function" ? i(D) : i(k, !1)
              })
            }
            n(x, o)
          };
          T(m, x => {
            t.toast.cancel && x(G)
          })
        }
        var rt = Mt(m, 2);
        {
          var lt = x => {
            var o = g(),
              d = v(o);
            {
              var D = i => {
                  var _ = g(),
                    C = v(_);
                  Lt(C, () => t.toast.action, (U, R) => {
                    R(U, {})
                  }), n(i, _)
                },
                k = i => {
                  var _ = g(),
                    C = v(_);
                  {
                    var U = R => {
                      var P = Xn();
                      P.__click = [Yn, t, f];
                      var X = ot(P, !0);
                      p(P), q(z => {
                        Ae(P, t.toast.actionButtonStyle ?? M()), Tt(P, 1, z), qt(X, t.toast.action.label)
                      }, [() => {
                        var z, ct, dt;
                        return It(xt((z = e(at)) == null ? void 0 : z.actionButton, (dt = (ct = t.toast) == null ? void 0 : ct.classes) == null ? void 0 : dt.actionButton))
                      }]), n(R, P)
                    };
                    T(C, R => {
                      ce(t.toast.action) && R(U)
                    }, !0)
                  }
                  n(i, _)
                };
              T(d, i => {
                typeof t.toast.action == "function" ? i(D) : i(k, !1)
              })
            }
            n(x, o)
          };
          T(rt, x => {
            t.toast.action && x(lt)
          })
        }
        q(x => Tt(h, 1, x), [() => {
          var x, o, d;
          return It(xt((x = e(at)) == null ? void 0 : x.title, (d = (o = t.toast) == null ? void 0 : o.classes) == null ? void 0 : d.title))
        }]), n(r, c)
      };
    T(xe, r => {
      t.toast.component ? r(Ie) : r(Te, !1)
    })
  }
  p(y), We(y, r => u(nt, r), () => e(nt)), q((r, c, I, B) => {
    Tt(y, 1, r), A(y, "data-rich-colors", t.toast.richColors ?? St()), A(y, "data-styled", !(t.toast.component || t.toast.unstyled || K())), A(y, "data-mounted", e(N)), A(y, "data-promise", c), A(y, "data-swiped", e(zt)), A(y, "data-removed", e(J)), A(y, "data-visible", e(ve)), A(y, "data-y-position", e(ae)[0]), A(y, "data-x-position", e(ae)[1]), A(y, "data-index", t.index), A(y, "data-front", e(fe)), A(y, "data-swiping", e(Ot)), A(y, "data-dismissable", e(ft)), A(y, "data-type", e(E)), A(y, "data-invert", e(_e)), A(y, "data-swipe-out", e(Ut)), A(y, "data-swipe-direction", e(Kt)), A(y, "data-expanded", I), se = Ae(y, `${t.style} ${t.toast.style}`, se, B)
  }, [() => {
    var r, c, I, B, S, h;
    return It(xt(t.class, e(At), (r = e(at)) == null ? void 0 : r.toast, (I = (c = t.toast) == null ? void 0 : c.classes) == null ? void 0 : I.toast, (B = e(at)) == null ? void 0 : B[e(E)], (h = (S = t.toast) == null ? void 0 : S.classes) == null ? void 0 : h[e(E)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && e(N)), () => ({
    "--index": t.index,
    "--toasts-before": t.index,
    "--z-index": Z.toasts.length - t.index,
    "--offset": `${e(J)?e(Q):e(l)}px`,
    "--initial-height": t.expandByDefault ? "auto" : `${e(bt)}px`
  })]), Ve("dragend", y, yt), n(a, y), ue()
}
an(["pointermove", "pointerup", "pointerdown", "click"]);
var Qn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function qn(a) {
  var t = Qn();
  n(a, t)
}
var pn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function $n(a) {
  var t = pn();
  n(a, t)
}
var ta = ne('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function ea(a) {
  var t = ta();
  n(a, t)
}
var na = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function aa(a) {
  var t = na();
  n(a, t)
}
var oa = ne('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function ia(a) {
  var t = oa();
  n(a, t)
}
const sa = 3,
  Ye = "24px",
  Xe = "16px",
  ra = 4e3,
  la = 356,
  ca = 14,
  Ce = "dark",
  re = "light";

function da(a, t) {
  const s = {};
  return [a, t].forEach((w, M) => {
    const O = M === 1,
      K = O ? "--mobile-offset" : "--offset",
      St = O ? Xe : Ye;

    function $(N) {
      ["top", "right", "bottom", "left"].forEach(J => {
        s[`${K}-${J}`] = typeof N == "number" ? `${N}px` : N
      })
    }
    typeof w == "number" || typeof w == "string" ? $(w) : typeof w == "object" ? ["top", "right", "bottom", "left"].forEach(N => {
      const J = w[N];
      J === void 0 ? s[`${K}-${N}`] = St : s[`${K}-${N}`] = typeof J == "number" ? `${J}px` : J
    }) : $(St)
  }), s
}
var ua = et("<ol></ol>"),
  fa = et('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-tppj9g"><!></section>');

function va(a, t) {
  de(t, !0);

  function s(l) {
    return l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Ce : re
  }
  let w = L(t, "invert", 3, !1),
    M = L(t, "position", 3, "bottom-right"),
    O = L(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    K = L(t, "expand", 3, !1),
    St = L(t, "closeButton", 3, !1),
    $ = L(t, "offset", 3, Ye),
    N = L(t, "mobileOffset", 3, Xe),
    J = L(t, "theme", 3, "light"),
    Ot = L(t, "richColors", 3, !1),
    Ut = L(t, "duration", 3, ra),
    zt = L(t, "visibleToasts", 3, sa),
    Q = L(t, "toastOptions", 19, () => ({})),
    bt = L(t, "dir", 7, "auto"),
    Ht = L(t, "gap", 3, ca),
    nt = L(t, "containerAriaLabel", 3, "Notifications"),
    ut = L(t, "closeButtonAriaLabel", 3, "Close toast"),
    Kt = _n(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function fe() {
    if (bt() !== "auto") return bt();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const l = document.documentElement.getAttribute("dir");
    return l === "auto" || !l ? ($t(() => bt(window.getComputedStyle(document.documentElement).direction ?? "ltr")), bt()) : ($t(() => bt(l)), l)
  }
  const ve = b(() => Array.from(new Set([M(), ...Z.toasts.filter(l => l.position).map(l => l.position)].filter(Boolean))));
  let E = H(!1),
    ft = H(!1),
    At = H(Ke(s(J()))),
    Dt = H(void 0),
    vt = H(null),
    Ct = H(!1);
  const me = b(() => O().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  _t(() => {
    Z.toasts.length <= 1 && u(E, !1)
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
    e(Dt) && e(vt) && (e(vt).focus({
      preventScroll: !0
    }), u(vt, null), u(Ct, !1))
  }), pt(() => (Z.reset(), le(document, "keydown", f => {
    var wt, st;
    O().every(kt => f[kt] || f.code === kt) && (u(E, !0), (wt = e(Dt)) == null || wt.focus()), f.code === "Escape" && (document.activeElement === e(Dt) || (st = e(Dt)) != null && st.contains(document.activeElement)) && u(E, !1)
  }))), _t(() => {
    if (J() !== "system" && u(At, J()), typeof window < "u") {
      J() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? u(At, Ce) : u(At, re));
      const l = window.matchMedia("(prefers-color-scheme: dark)"),
        f = ({
          matches: F
        }) => {
          u(At, F ? Ce : re, !0)
        };
      "addEventListener" in l ? l.addEventListener("change", f) : l.addListener(f)
    }
  });
  const Et = l => {
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
      (f = t.onmouseenter) == null || f.call(t, l), u(E, !0)
    },
    _e = l => {
      var f;
      (f = t.onmouseleave) == null || f.call(t, l), e(ft) || u(E, !1)
    },
    Vt = l => {
      var f;
      (f = t.onmousemove) == null || f.call(t, l), u(E, !0)
    },
    at = l => {
      var f;
      (f = t.ondragend) == null || f.call(t, l), u(E, !1)
    },
    be = l => {
      var f;
      (f = t.onpointerup) == null || f.call(t, l), u(ft, !1)
    };
  Cn.set(new rn);
  var Pt = fa();
  A(Pt, "tabindex", -1);
  var Wt = ot(Pt);
  {
    var oe = l => {
      var f = g(),
        F = v(f);
      Pe(F, 18, () => e(ve), wt => wt, (wt, st, kt, Oe) => {
        const ie = b(() => {
            const [V, y] = st.split("-");
            return {
              y: V,
              x: y
            }
          }),
          mt = b(() => da($(), N()));
        var yt = ua();
        bn(yt, (V, y) => ({
          tabindex: -1,
          dir: V,
          class: t.class,
          "data-sonner-toaster": !0,
          "data-sonner-theme": e(At),
          "data-y-position": e(ie).y,
          "data-x-position": e(ie).x,
          style: t.style,
          onblur: Et,
          onfocus: ae,
          onmouseenter: he,
          onmousemove: Vt,
          onmouseleave: _e,
          ondragend: at,
          onpointerdown: ge,
          onpointerup: be,
          ...Kt,
          [wn]: y
        }), [fe, () => {
          var V;
          return {
            "--front-toast-height": `${(V=Z.heights[0])==null?void 0:V.height}px`,
            "--width": `${la}px`,
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
        }], void 0, "svelte-tppj9g"), Pe(yt, 23, () => Z.toasts.filter(V => !V.position && e(kt) === 0 || V.position === st), V => V.id, (V, y, se, we) => {
          {
            const ye = m => {
                var G = g(),
                  rt = v(G);
                {
                  var lt = o => {
                      var d = g(),
                        D = v(d);
                      it(D, () => t.successIcon ?? ht), n(o, d)
                    },
                    x = o => {
                      var d = g(),
                        D = v(d);
                      {
                        var k = i => {
                          qn(i)
                        };
                        T(D, i => {
                          t.successIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  T(rt, o => {
                    t.successIcon ? o(lt) : o(x, !1)
                  })
                }
                n(m, G)
              },
              xe = m => {
                var G = g(),
                  rt = v(G);
                {
                  var lt = o => {
                      var d = g(),
                        D = v(d);
                      it(D, () => t.errorIcon ?? ht), n(o, d)
                    },
                    x = o => {
                      var d = g(),
                        D = v(d);
                      {
                        var k = i => {
                          $n(i)
                        };
                        T(D, i => {
                          t.errorIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  T(rt, o => {
                    t.errorIcon ? o(lt) : o(x, !1)
                  })
                }
                n(m, G)
              },
              Ie = m => {
                var G = g(),
                  rt = v(G);
                {
                  var lt = o => {
                      var d = g(),
                        D = v(d);
                      it(D, () => t.warningIcon ?? ht), n(o, d)
                    },
                    x = o => {
                      var d = g(),
                        D = v(d);
                      {
                        var k = i => {
                          ea(i)
                        };
                        T(D, i => {
                          t.warningIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  T(rt, o => {
                    t.warningIcon ? o(lt) : o(x, !1)
                  })
                }
                n(m, G)
              },
              Te = m => {
                var G = g(),
                  rt = v(G);
                {
                  var lt = o => {
                      var d = g(),
                        D = v(d);
                      it(D, () => t.infoIcon ?? ht), n(o, d)
                    },
                    x = o => {
                      var d = g(),
                        D = v(d);
                      {
                        var k = i => {
                          aa(i)
                        };
                        T(D, i => {
                          t.infoIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  T(rt, o => {
                    t.infoIcon ? o(lt) : o(x, !1)
                  })
                }
                n(m, G)
              },
              r = m => {
                var G = g(),
                  rt = v(G);
                {
                  var lt = o => {
                      var d = g(),
                        D = v(d);
                      it(D, () => t.closeIcon ?? ht), n(o, d)
                    },
                    x = o => {
                      var d = g(),
                        D = v(d);
                      {
                        var k = i => {
                          ia(i)
                        };
                        T(D, i => {
                          t.closeIcon !== null && i(k)
                        }, !0)
                      }
                      n(o, d)
                    };
                  T(rt, o => {
                    t.closeIcon ? o(lt) : o(x, !1)
                  })
                }
                n(m, G)
              };
            let c = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.duration) ?? Ut()
              }),
              I = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.class) ?? ""
              }),
              B = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.descriptionClass) || ""
              }),
              S = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.style) ?? ""
              }),
              h = b(() => Q().classes || {}),
              W = b(() => Q().unstyled ?? !1),
              tt = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.cancelButtonStyle) ?? ""
              }),
              Y = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.actionButtonStyle) ?? ""
              }),
              j = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.closeButtonAriaLabel) ?? ut()
              });
            Jn(V, {
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
                return e(B)
              },
              get invert() {
                return w()
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
                return st
              },
              get style() {
                return e(S)
              },
              get classes() {
                return e(h)
              },
              get unstyled() {
                return e(W)
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
                return K()
              },
              get expanded() {
                return e(E)
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
        }), p(yt), We(yt, V => u(Dt, V), () => e(Dt)), q(() => yt.dir = yt.dir), n(wt, yt)
      }), n(l, f)
    };
    T(Wt, l => {
      Z.toasts.length > 0 && l(oe)
    })
  }
  p(Pt), q(() => A(Pt, "aria-label", `${nt()??""} ${e(me)??""}`)), n(a, Pt), ue()
}
let Ze = H(!1);

function ma() {
  e(Ze) || Le.data && ln(xn).then(ga)
}

function ga() {
  cn(Le.data.id), dn.postPawtectLoad();
  const a = fetch;
  Object.assign(window, {
    fetch: Ge((t, s) => {
      let w = null;
      return t instanceof Request ? w = t.url : w = t, un(w), a.call(window, t, s)
    })
  }), u(Ze, !0)
}

function Ge(a) {
  return a.bind().bind()
}
var ha = et('<span class="hidden"> </span> <!> <!>', 1);

function Oa(a, t) {
  de(t, !0), pt(() => {
    Le.refresh().then(ma), Object.assign(window, {
      eval: Ge(async () => {
        await fetch(fn + "/me", {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + crypto.randomUUID()
          }
        })
      })
    });
    let $ = setInterval(() => {
      gn()
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
      for (const N of Object.values(mn)) N.muted = $, $ || (N.volume = .3);
      localStorage.setItem(s, Number($).toString())
    }
  }), pt(() => {});
  var w = ha();
  Ve("beforeunload", on, () => {
    hn()
  });
  var M = v(w),
    O = ot(M);
  p(M);
  var K = Mt(M, 2);
  it(K, () => t.children);
  var St = Mt(K, 2);
  va(St, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "!top-15",
    duration: 3e3
  }), q(() => qt(O, `Version: ${sn}`)), n(a, w), ue()
}
export {
  Oa as component, La as universal
};