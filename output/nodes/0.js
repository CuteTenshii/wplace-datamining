var ke = o => {
  throw TypeError(o)
};
var He = (o, t, l) => t.has(o) || ke("Cannot " + l);
var gt = (o, t, l) => (He(o, t, "read from private field"), l ? l.call(o) : t.get(o)),
  qt = (o, t, l) => t.has(o) ? ke("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, l),
  Qt = (o, t, l, B) => (He(o, t, "write to private field"), B ? B.call(o, l) : t.set(o, l), l);
import "../chunks/Bzak7iHL.js";
import {
  o as pt,
  s as it
} from "../chunks/XwJtV06w.js";
import {
  p as de,
  f as et,
  d as ot,
  b as n,
  r as p,
  t as J,
  c as ue,
  bo as le,
  aG as pe,
  aF as Ne,
  aH as $e,
  aL as R,
  aK as ze,
  B as _t,
  aM as f,
  g as e,
  u as b,
  C as $t,
  s as Mt,
  bj as Ke,
  ax as ht,
  aN as g,
  a as v,
  aw as tn,
  b4 as Re,
  y as ne,
  bm as en
} from "../chunks/DDWIi-vs.js";
import {
  s as Jt
} from "../chunks/Ob_J7Gis.js";
import {
  v as nn
} from "../chunks/CyAm3K7E.js";
import {
  d as X,
  e as xt,
  f as an,
  g as Fe,
  u as on,
  c as sn
} from "../chunks/DC_O4ofs.js";
import {
  c as rn,
  A as ln,
  s as cn,
  a as dn
} from "../chunks/BfUyLi6m.js";
import "../chunks/C5GsJ62f.js";
import {
  p as L,
  i as I,
  s as Me,
  r as un
} from "../chunks/Cotyqp2D.js";
import {
  e as Pe
} from "../chunks/DieFH19D.js";
import {
  c as It,
  a as Tt,
  s as C,
  d as Ce,
  b as fn,
  S as vn
} from "../chunks/CwJjPkYo.js";
import {
  b as Ve
} from "../chunks/BXxY18WV.js";
import {
  c as Lt
} from "../chunks/BU7TSmCo.js";
import "../chunks/C8SGYYB9.js";
const mn = !0,
  Ta = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: mn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  gn = Array(12).fill(0);
var hn = et('<div class="sonner-loading-bar"></div>'),
  _n = et('<div><div class="sonner-spinner"></div></div>');

function bn(o, t) {
  de(t, !0);
  var l = _n(),
    B = ot(l);
  Pe(B, 23, () => gn, (M, O) => `spinner-bar-${O}`, (M, O) => {
    var K = hn();
    n(M, K)
  }), p(B), p(l), J(M => {
    Tt(l, 1, M), C(l, "data-visible", t.visible)
  }, [() => It(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), n(o, l), ue()
}
const wn = typeof window < "u" ? window : void 0;

function yn(o) {
  let t = o.activeElement;
  for (; t != null && t.shadowRoot;) {
    const l = t.shadowRoot.activeElement;
    if (l === t) break;
    t = l
  }
  return t
}
var jt, te;
class xn {
  constructor(t = {}) {
    qt(this, jt);
    qt(this, te);
    const {
      window: l = wn,
      document: B = l == null ? void 0 : l.document
    } = t;
    l !== void 0 && (Qt(this, jt, B), Qt(this, te, rn(M => {
      const O = le(l, "focusin", M),
        K = le(l, "focusout", M);
      return () => {
        O(), K()
      }
    })))
  }
  get current() {
    var t;
    return (t = gt(this, te)) == null || t.call(this), gt(this, jt) ? yn(gt(this, jt)) : null
  }
}
jt = new WeakMap, te = new WeakMap;
new xn;
var ee, Bt;
class In {
  constructor(t) {
    qt(this, ee);
    qt(this, Bt);
    Qt(this, ee, t), Qt(this, Bt, Symbol(t))
  }
  get key() {
    return gt(this, Bt)
  }
  exists() {
    return pe(gt(this, Bt))
  }
  get() {
    const t = Ne(gt(this, Bt));
    if (t === void 0) throw new Error(`Context "${gt(this,ee)}" not found`);
    return t
  }
  getOr(t) {
    const l = Ne(gt(this, Bt));
    return l === void 0 ? t : l
  }
  set(t) {
    return $e(gt(this, Bt), t)
  }
}
ee = new WeakMap, Bt = new WeakMap;
const Tn = new In("<Toaster/>");

function ce(o) {
  return o.label !== void 0
}

function Bn() {
  let o = R(ze(typeof document < "u" ? document.hidden : !1));
  return _t(() => le(document, "visibilitychange", () => {
    f(o, document.hidden, !0)
  })), {
    get current() {
      return e(o)
    }
  }
}
const je = 4e3,
  Sn = 14,
  Dn = 45,
  En = 200,
  Mn = .05,
  Cn = {
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

function An(o) {
  const [t, l] = o.split("-"), B = [];
  return t && B.push(t), l && B.push(l), B
}

function Ue(o) {
  return 1 / (1.5 + Math.abs(o) / 20)
}
var Pn = et("<div><!></div>"),
  Ln = (o, t, l, B, M) => {
    var O, K;
    e(t) || !e(l) || (B(), (K = (O = M.toast).onDismiss) == null || K.call(O, M.toast))
  },
  On = et('<button data-close-button=""><!></button>'),
  kn = et('<div data-icon=""><!> <!></div>'),
  Hn = et('<div data-description=""><!></div>'),
  Nn = (o, t, l, B) => {
    var M, O;
    ce(t.toast.cancel) && e(l) && ((O = (M = t.toast.cancel) == null ? void 0 : M.onClick) == null || O.call(M, o), B())
  },
  Rn = et('<button data-button="" data-cancel=""> </button>'),
  Fn = (o, t, l) => {
    var B;
    ce(t.toast.action) && ((B = t.toast.action) == null || B.onClick(o), !o.defaultPrevented && l())
  },
  jn = et('<button data-button=""> </button>'),
  Un = et('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  zn = et('<li data-sonner-toast=""><!> <!></li>');

function Kn(o, t) {
  de(t, !0);
  const l = s => {
    var c = g(),
      x = v(c);
    {
      var T = h => {
          var Y = Pn(),
            tt = ot(Y);
          it(tt, () => t.loadingIcon), p(Y), J(G => {
            Tt(Y, 1, G), C(Y, "data-visible", e(E) === "loading")
          }, [() => {
            var G, j, m;
            return It(xt((G = e(at)) == null ? void 0 : G.loader, (m = (j = t.toast) == null ? void 0 : j.classes) == null ? void 0 : m.loader, "sonner-loader"))
          }]), n(h, Y)
        },
        S = h => {
          {
            let Y = b(() => {
                var G, j;
                return xt((G = e(at)) == null ? void 0 : G.loader, (j = t.toast.classes) == null ? void 0 : j.loader)
              }),
              tt = b(() => e(E) === "loading");
            bn(h, {
              get class() {
                return e(Y)
              },
              get visible() {
                return e(tt)
              }
            })
          }
        };
      I(x, h => {
        t.loadingIcon ? h(T) : h(S, !1)
      })
    }
    n(s, c)
  };
  let B = L(t, "cancelButtonStyle", 3, ""),
    M = L(t, "actionButtonStyle", 3, ""),
    O = L(t, "descriptionClass", 3, ""),
    K = L(t, "unstyled", 3, !1),
    St = L(t, "defaultRichColors", 3, !1);
  const $ = {
    ...Cn
  };
  let k = R(!1),
    V = R(!1),
    Ot = R(!1),
    Ut = R(!1),
    zt = R(!1),
    Q = R(0),
    bt = R(0),
    kt = t.toast.duration || t.duration || je,
    nt = R(void 0),
    ut = R(null),
    Kt = R(null);
  const fe = b(() => t.index === 0),
    ve = b(() => t.index + 1 <= t.visibleToasts),
    E = b(() => t.toast.type),
    ft = b(() => t.toast.dismissable !== !1),
    Ct = b(() => t.toast.class || ""),
    Dt = b(() => t.toast.descriptionClass || ""),
    vt = b(() => X.heights.findIndex(s => s.toastId === t.toast.id) || 0),
    At = b(() => t.toast.closeButton ?? t.closeButton),
    me = b(() => t.toast.duration ?? t.duration ?? je);
  let Et = null;
  const ae = b(() => t.position.split("-")),
    ge = b(() => X.heights.reduce((s, c, x) => x >= e(vt) ? s : s + c.height, 0)),
    he = Bn(),
    _e = b(() => t.toast.invert || t.invert),
    Vt = b(() => e(E) === "loading"),
    at = b(() => ({
      ...$,
      ...t.classes
    })),
    be = b(() => t.toast.title),
    Pt = b(() => t.toast.description);
  let Wt = R(0),
    oe = R(0);
  const r = b(() => Math.round(e(vt) * Sn + e(ge)));
  _t(() => {
    e(be), e(Pt);
    let s;
    t.expanded || t.expandByDefault ? s = 1 : s = 1 - t.index * Mn;
    const c = $t(() => e(nt));
    if (c === void 0) return;
    c.style.setProperty("height", "auto");
    const x = c.offsetHeight,
      T = c.getBoundingClientRect().height,
      S = Math.round(T / s + Number.EPSILON & 100) / 100;
    c.style.removeProperty("height");
    let h;
    Math.abs(S - x) < 1 ? h = S : h = x, f(bt, h, !0), $t(() => {
      X.setHeight({
        toastId: t.toast.id,
        height: h
      })
    })
  });

  function u() {
    f(V, !0), f(Q, e(r), !0), X.removeHeight(t.toast.id), setTimeout(() => {
      X.remove(t.toast.id)
    }, En)
  }
  let F;
  const wt = b(() => t.toast.promise && e(E) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function st() {
    f(Wt, new Date().getTime(), !0), F = setTimeout(() => {
      var s, c;
      (c = (s = t.toast).onAutoClose) == null || c.call(s, t.toast), u()
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
    t.toast.updated && (clearTimeout(F), kt = e(me), st())
  }), _t(() => (e(wt) || (t.expanded || t.interacting || he.current ? Ht() : st()), () => clearTimeout(F))), pt(() => {
    var c;
    f(k, !0);
    const s = (c = e(nt)) == null ? void 0 : c.getBoundingClientRect().height;
    return f(bt, s, !0), X.setHeight({
      toastId: t.toast.id,
      height: s
    }), () => {
      X.removeHeight(t.toast.id)
    }
  }), _t(() => {
    t.toast.delete && $t(() => {
      var s, c;
      u(), (c = (s = t.toast).onDismiss) == null || c.call(s, t.toast)
    })
  });
  const Le = s => {
      if (e(Vt)) return;
      f(Q, e(r), !0);
      const c = s.target;
      c.setPointerCapture(s.pointerId), c.tagName !== "BUTTON" && (f(Ot, !0), Et = {
        x: s.clientX,
        y: s.clientY
      })
    },
    ie = () => {
      var h, Y, tt, G, j, m;
      if (e(Ut) || !e(ft)) return;
      Et = null;
      const s = Number(((h = e(nt)) == null ? void 0 : h.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        c = Number(((Y = e(nt)) == null ? void 0 : Y.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        x = new Date().getTime() - 0,
        T = e(ut) === "x" ? s : c,
        S = Math.abs(T) / x;
      if (Math.abs(T) >= Dn || S > .11) {
        f(Q, e(r), !0), (G = (tt = t.toast).onDismiss) == null || G.call(tt, t.toast), e(ut) === "x" ? f(Kt, s > 0 ? "right" : "left", !0) : f(Kt, c > 0 ? "down" : "up", !0), u(), f(Ut, !0);
        return
      } else(j = e(nt)) == null || j.style.setProperty("--swipe-amount-x", "0px"), (m = e(nt)) == null || m.style.setProperty("--swipe-amount-y", "0px");
      f(zt, !1), f(Ot, !1), f(ut, null)
    },
    mt = s => {
      var Y, tt, G;
      if (!Et || !e(ft) || (((Y = window.getSelection()) == null ? void 0 : Y.toString().length) ?? -1) > 0) return;
      const x = s.clientY - Et.y,
        T = s.clientX - Et.x,
        S = t.swipeDirections ?? An(t.position);
      !e(ut) && (Math.abs(T) > 1 || Math.abs(x) > 1) && f(ut, Math.abs(T) > Math.abs(x) ? "x" : "y", !0);
      let h = {
        x: 0,
        y: 0
      };
      if (e(ut) === "y") {
        if (S.includes("top") || S.includes("bottom"))
          if (S.includes("top") && x < 0 || S.includes("bottom") && x > 0) h.y = x;
          else {
            const j = x * Ue(x);
            h.y = Math.abs(j) < Math.abs(x) ? j : x
          }
      } else if (e(ut) === "x" && (S.includes("left") || S.includes("right")))
        if (S.includes("left") && T < 0 || S.includes("right") && T > 0) h.x = T;
        else {
          const j = T * Ue(T);
          h.x = Math.abs(j) < Math.abs(T) ? j : T
        }(Math.abs(h.x) > 0 || Math.abs(h.y) > 0) && f(zt, !0), (tt = e(nt)) == null || tt.style.setProperty("--swipe-amount-x", `${h.x}px`), (G = e(nt)) == null || G.style.setProperty("--swipe-amount-y", `${h.y}px`)
    },
    yt = () => {
      f(Ot, !1), f(ut, null), Et = null
    },
    W = b(() => t.toast.icon ? t.toast.icon : e(E) === "success" ? t.successIcon : e(E) === "error" ? t.errorIcon : e(E) === "warning" ? t.warningIcon : e(E) === "info" ? t.infoIcon : e(E) === "loading" ? t.loadingIcon : null);
  var w = zn();
  C(w, "tabindex", 0);
  let se;
  w.__pointermove = mt, w.__pointerup = ie, w.__pointerdown = Le;
  var we = ot(w);
  {
    var ye = s => {
      var c = On();
      c.__click = [Ln, Vt, ft, u, t];
      var x = ot(c);
      it(x, () => t.closeIcon ?? ht), p(c), J(T => {
        C(c, "aria-label", t.closeButtonAriaLabel), C(c, "data-disabled", e(Vt)), Tt(c, 1, T)
      }, [() => {
        var T, S, h;
        return It(xt((T = e(at)) == null ? void 0 : T.closeButton, (h = (S = t.toast) == null ? void 0 : S.classes) == null ? void 0 : h.closeButton))
      }]), n(s, c)
    };
    I(we, s => {
      e(At) && !t.toast.component && e(E) !== "loading" && t.closeIcon !== null && s(ye)
    })
  }
  var xe = Mt(we, 2);
  {
    var Ie = s => {
        const c = b(() => t.toast.component);
        var x = g(),
          T = v(x);
        Lt(T, () => e(c), (S, h) => {
          h(S, Me(() => t.toast.componentProps, {
            closeToast: u
          }))
        }), n(s, x)
      },
      Te = s => {
        var c = Un(),
          x = v(c);
        {
          var T = y => {
            var a = kn(),
              d = ot(a);
            {
              var D = _ => {
                var A = g(),
                  U = v(A);
                {
                  var N = Z => {
                      var z = g(),
                        ct = v(z);
                      Lt(ct, () => t.toast.icon, (dt, Yt) => {
                        Yt(dt, {})
                      }), n(Z, z)
                    },
                    P = Z => {
                      l(Z)
                    };
                  I(U, Z => {
                    t.toast.icon ? Z(N) : Z(P, !1)
                  })
                }
                n(_, A)
              };
              I(d, _ => {
                (t.toast.promise || e(E) === "loading") && _(D)
              })
            }
            var H = Mt(d, 2);
            {
              var i = _ => {
                var A = g(),
                  U = v(A);
                {
                  var N = Z => {
                      var z = g(),
                        ct = v(z);
                      Lt(ct, () => t.toast.icon, (dt, Yt) => {
                        Yt(dt, {})
                      }), n(Z, z)
                    },
                    P = Z => {
                      var z = g(),
                        ct = v(z);
                      {
                        var dt = Nt => {
                            var Gt = g(),
                              Be = v(Gt);
                            it(Be, () => t.successIcon ?? ht), n(Nt, Gt)
                          },
                          Yt = Nt => {
                            var Gt = g(),
                              Be = v(Gt);
                            {
                              var Ge = Rt => {
                                  var Zt = g(),
                                    Se = v(Zt);
                                  it(Se, () => t.errorIcon ?? ht), n(Rt, Zt)
                                },
                                Ze = Rt => {
                                  var Zt = g(),
                                    Se = v(Zt);
                                  {
                                    var Xe = Ft => {
                                        var Xt = g(),
                                          De = v(Xt);
                                        it(De, () => t.warningIcon ?? ht), n(Ft, Xt)
                                      },
                                      qe = Ft => {
                                        var Xt = g(),
                                          De = v(Xt);
                                        {
                                          var Qe = Ee => {
                                            var Oe = g(),
                                              Je = v(Oe);
                                            it(Je, () => t.infoIcon ?? ht), n(Ee, Oe)
                                          };
                                          I(De, Ee => {
                                            e(E) === "info" && Ee(Qe)
                                          }, !0)
                                        }
                                        n(Ft, Xt)
                                      };
                                    I(Se, Ft => {
                                      e(E) === "warning" ? Ft(Xe) : Ft(qe, !1)
                                    }, !0)
                                  }
                                  n(Rt, Zt)
                                };
                              I(Be, Rt => {
                                e(E) === "error" ? Rt(Ge) : Rt(Ze, !1)
                              }, !0)
                            }
                            n(Nt, Gt)
                          };
                        I(ct, Nt => {
                          e(E) === "success" ? Nt(dt) : Nt(Yt, !1)
                        }, !0)
                      }
                      n(Z, z)
                    };
                  I(U, Z => {
                    t.toast.icon ? Z(N) : Z(P, !1)
                  })
                }
                n(_, A)
              };
              I(H, _ => {
                t.toast.type !== "loading" && _(i)
              })
            }
            p(a), J(_ => Tt(a, 1, _), [() => {
              var _, A, U;
              return It(xt((_ = e(at)) == null ? void 0 : _.icon, (U = (A = t.toast) == null ? void 0 : A.classes) == null ? void 0 : U.icon))
            }]), n(y, a)
          };
          I(x, y => {
            (e(E) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (e(W) !== null || t.toast.icon) && y(T)
          })
        }
        var S = Mt(x, 2),
          h = ot(S),
          Y = ot(h);
        {
          var tt = y => {
            var a = g(),
              d = v(a);
            {
              var D = i => {
                  const _ = b(() => t.toast.title);
                  var A = g(),
                    U = v(A);
                  Lt(U, () => e(_), (N, P) => {
                    P(N, Me(() => t.toast.componentProps))
                  }), n(i, A)
                },
                H = i => {
                  var _ = Re();
                  J(() => Jt(_, t.toast.title)), n(i, _)
                };
              I(d, i => {
                typeof t.toast.title != "string" ? i(D) : i(H, !1)
              })
            }
            n(y, a)
          };
          I(Y, y => {
            t.toast.title && y(tt)
          })
        }
        p(h);
        var G = Mt(h, 2);
        {
          var j = y => {
            var a = Hn(),
              d = ot(a);
            {
              var D = i => {
                  const _ = b(() => t.toast.description);
                  var A = g(),
                    U = v(A);
                  Lt(U, () => e(_), (N, P) => {
                    P(N, Me(() => t.toast.componentProps))
                  }), n(i, A)
                },
                H = i => {
                  var _ = Re();
                  J(() => Jt(_, t.toast.description)), n(i, _)
                };
              I(d, i => {
                typeof t.toast.description != "string" ? i(D) : i(H, !1)
              })
            }
            p(a), J(i => Tt(a, 1, i), [() => {
              var i, _;
              return It(xt(O(), e(Dt), (i = e(at)) == null ? void 0 : i.description, (_ = t.toast.classes) == null ? void 0 : _.description))
            }]), n(y, a)
          };
          I(G, y => {
            t.toast.description && y(j)
          })
        }
        p(S);
        var m = Mt(S, 2);
        {
          var q = y => {
            var a = g(),
              d = v(a);
            {
              var D = i => {
                  var _ = g(),
                    A = v(_);
                  Lt(A, () => t.toast.cancel, (U, N) => {
                    N(U, {})
                  }), n(i, _)
                },
                H = i => {
                  var _ = g(),
                    A = v(_);
                  {
                    var U = N => {
                      var P = Rn();
                      P.__click = [Nn, t, ft, u];
                      var Z = ot(P, !0);
                      p(P), J(z => {
                        Ce(P, t.toast.cancelButtonStyle ?? B()), Tt(P, 1, z), Jt(Z, t.toast.cancel.label)
                      }, [() => {
                        var z, ct, dt;
                        return It(xt((z = e(at)) == null ? void 0 : z.cancelButton, (dt = (ct = t.toast) == null ? void 0 : ct.classes) == null ? void 0 : dt.cancelButton))
                      }]), n(N, P)
                    };
                    I(A, N => {
                      ce(t.toast.cancel) && N(U)
                    }, !0)
                  }
                  n(i, _)
                };
              I(d, i => {
                typeof t.toast.cancel == "function" ? i(D) : i(H, !1)
              })
            }
            n(y, a)
          };
          I(m, y => {
            t.toast.cancel && y(q)
          })
        }
        var rt = Mt(m, 2);
        {
          var lt = y => {
            var a = g(),
              d = v(a);
            {
              var D = i => {
                  var _ = g(),
                    A = v(_);
                  Lt(A, () => t.toast.action, (U, N) => {
                    N(U, {})
                  }), n(i, _)
                },
                H = i => {
                  var _ = g(),
                    A = v(_);
                  {
                    var U = N => {
                      var P = jn();
                      P.__click = [Fn, t, u];
                      var Z = ot(P, !0);
                      p(P), J(z => {
                        Ce(P, t.toast.actionButtonStyle ?? M()), Tt(P, 1, z), Jt(Z, t.toast.action.label)
                      }, [() => {
                        var z, ct, dt;
                        return It(xt((z = e(at)) == null ? void 0 : z.actionButton, (dt = (ct = t.toast) == null ? void 0 : ct.classes) == null ? void 0 : dt.actionButton))
                      }]), n(N, P)
                    };
                    I(A, N => {
                      ce(t.toast.action) && N(U)
                    }, !0)
                  }
                  n(i, _)
                };
              I(d, i => {
                typeof t.toast.action == "function" ? i(D) : i(H, !1)
              })
            }
            n(y, a)
          };
          I(rt, y => {
            t.toast.action && y(lt)
          })
        }
        J(y => Tt(h, 1, y), [() => {
          var y, a, d;
          return It(xt((y = e(at)) == null ? void 0 : y.title, (d = (a = t.toast) == null ? void 0 : a.classes) == null ? void 0 : d.title))
        }]), n(s, c)
      };
    I(xe, s => {
      t.toast.component ? s(Ie) : s(Te, !1)
    })
  }
  p(w), Ve(w, s => f(nt, s), () => e(nt)), J((s, c, x, T) => {
    Tt(w, 1, s), C(w, "data-rich-colors", t.toast.richColors ?? St()), C(w, "data-styled", !(t.toast.component || t.toast.unstyled || K())), C(w, "data-mounted", e(k)), C(w, "data-promise", c), C(w, "data-swiped", e(zt)), C(w, "data-removed", e(V)), C(w, "data-visible", e(ve)), C(w, "data-y-position", e(ae)[0]), C(w, "data-x-position", e(ae)[1]), C(w, "data-index", t.index), C(w, "data-front", e(fe)), C(w, "data-swiping", e(Ot)), C(w, "data-dismissable", e(ft)), C(w, "data-type", e(E)), C(w, "data-invert", e(_e)), C(w, "data-swipe-out", e(Ut)), C(w, "data-swipe-direction", e(Kt)), C(w, "data-expanded", x), se = Ce(w, `${t.style} ${t.toast.style}`, se, T)
  }, [() => {
    var s, c, x, T, S, h;
    return It(xt(t.class, e(Ct), (s = e(at)) == null ? void 0 : s.toast, (x = (c = t.toast) == null ? void 0 : c.classes) == null ? void 0 : x.toast, (T = e(at)) == null ? void 0 : T[e(E)], (h = (S = t.toast) == null ? void 0 : S.classes) == null ? void 0 : h[e(E)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && e(k)), () => ({
    "--index": t.index,
    "--toasts-before": t.index,
    "--z-index": X.toasts.length - t.index,
    "--offset": `${e(V)?e(Q):e(r)}px`,
    "--initial-height": t.expandByDefault ? "auto" : `${e(bt)}px`
  })]), Ke("dragend", w, yt), n(o, w), ue()
}
tn(["pointermove", "pointerup", "pointerdown", "click"]);
var Vn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function Wn(o) {
  var t = Vn();
  n(o, t)
}
var Yn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function Gn(o) {
  var t = Yn();
  n(o, t)
}
var Zn = ne('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function Xn(o) {
  var t = Zn();
  n(o, t)
}
var qn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function Qn(o) {
  var t = qn();
  n(o, t)
}
var Jn = ne('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function pn(o) {
  var t = Jn();
  n(o, t)
}
const $n = 3,
  We = "24px",
  Ye = "16px",
  ta = 4e3,
  ea = 356,
  na = 14,
  Ae = "dark",
  re = "light";

function aa(o, t) {
  const l = {};
  return [o, t].forEach((B, M) => {
    const O = M === 1,
      K = O ? "--mobile-offset" : "--offset",
      St = O ? Ye : We;

    function $(k) {
      ["top", "right", "bottom", "left"].forEach(V => {
        l[`${K}-${V}`] = typeof k == "number" ? `${k}px` : k
      })
    }
    typeof B == "number" || typeof B == "string" ? $(B) : typeof B == "object" ? ["top", "right", "bottom", "left"].forEach(k => {
      const V = B[k];
      V === void 0 ? l[`${K}-${k}`] = St : l[`${K}-${k}`] = typeof V == "number" ? `${V}px` : V
    }) : $(St)
  }), l
}
var oa = et("<ol></ol>"),
  ia = et('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-tppj9g"><!></section>');

function sa(o, t) {
  de(t, !0);

  function l(r) {
    return r !== "system" ? r : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Ae : re
  }
  let B = L(t, "invert", 3, !1),
    M = L(t, "position", 3, "bottom-right"),
    O = L(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    K = L(t, "expand", 3, !1),
    St = L(t, "closeButton", 3, !1),
    $ = L(t, "offset", 3, We),
    k = L(t, "mobileOffset", 3, Ye),
    V = L(t, "theme", 3, "light"),
    Ot = L(t, "richColors", 3, !1),
    Ut = L(t, "duration", 3, ta),
    zt = L(t, "visibleToasts", 3, $n),
    Q = L(t, "toastOptions", 19, () => ({})),
    bt = L(t, "dir", 7, "auto"),
    kt = L(t, "gap", 3, na),
    nt = L(t, "containerAriaLabel", 3, "Notifications"),
    ut = L(t, "closeButtonAriaLabel", 3, "Close toast"),
    Kt = un(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function fe() {
    if (bt() !== "auto") return bt();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const r = document.documentElement.getAttribute("dir");
    return r === "auto" || !r ? ($t(() => bt(window.getComputedStyle(document.documentElement).direction ?? "ltr")), bt()) : ($t(() => bt(r)), r)
  }
  const ve = b(() => Array.from(new Set([M(), ...X.toasts.filter(r => r.position).map(r => r.position)].filter(Boolean))));
  let E = R(!1),
    ft = R(!1),
    Ct = R(ze(l(V()))),
    Dt = R(void 0),
    vt = R(null),
    At = R(!1);
  const me = b(() => O().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  _t(() => {
    X.toasts.length <= 1 && f(E, !1)
  }), _t(() => {
    const r = X.toasts.filter(u => u.dismiss && !u.delete);
    if (r.length > 0) {
      const u = X.toasts.map(F => r.find(st => st.id === F.id) ? {
        ...F,
        delete: !0
      } : F);
      X.toasts = u
    }
  }), _t(() => () => {
    e(Dt) && e(vt) && (e(vt).focus({
      preventScroll: !0
    }), f(vt, null), f(At, !1))
  }), pt(() => (X.reset(), le(document, "keydown", u => {
    var wt, st;
    O().every(Ht => u[Ht] || u.code === Ht) && (f(E, !0), (wt = e(Dt)) == null || wt.focus()), u.code === "Escape" && (document.activeElement === e(Dt) || (st = e(Dt)) != null && st.contains(document.activeElement)) && f(E, !1)
  }))), _t(() => {
    if (V() !== "system" && f(Ct, V()), typeof window < "u") {
      V() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? f(Ct, Ae) : f(Ct, re));
      const r = window.matchMedia("(prefers-color-scheme: dark)"),
        u = ({
          matches: F
        }) => {
          f(Ct, F ? Ae : re, !0)
        };
      "addEventListener" in r ? r.addEventListener("change", u) : r.addListener(u)
    }
  });
  const Et = r => {
      var u;
      (u = t.onblur) == null || u.call(t, r), e(At) && !r.currentTarget.contains(r.relatedTarget) && (f(At, !1), e(vt) && (e(vt).focus({
        preventScroll: !0
      }), f(vt, null)))
    },
    ae = r => {
      var F;
      (F = t.onfocus) == null || F.call(t, r), !(r.target instanceof HTMLElement && r.target.dataset.dismissable === "false") && (e(At) || (f(At, !0), f(vt, r.relatedTarget, !0)))
    },
    ge = r => {
      var F;
      (F = t.onpointerdown) == null || F.call(t, r), !(r.target instanceof HTMLElement && r.target.dataset.dismissable === "false") && f(ft, !0)
    },
    he = r => {
      var u;
      (u = t.onmouseenter) == null || u.call(t, r), f(E, !0)
    },
    _e = r => {
      var u;
      (u = t.onmouseleave) == null || u.call(t, r), e(ft) || f(E, !1)
    },
    Vt = r => {
      var u;
      (u = t.onmousemove) == null || u.call(t, r), f(E, !0)
    },
    at = r => {
      var u;
      (u = t.ondragend) == null || u.call(t, r), f(E, !1)
    },
    be = r => {
      var u;
      (u = t.onpointerup) == null || u.call(t, r), f(ft, !1)
    };
  Tn.set(new an);
  var Pt = ia();
  C(Pt, "tabindex", -1);
  var Wt = ot(Pt);
  {
    var oe = r => {
      var u = g(),
        F = v(u);
      Pe(F, 18, () => e(ve), wt => wt, (wt, st, Ht, Le) => {
        const ie = b(() => {
            const [W, w] = st.split("-");
            return {
              y: W,
              x: w
            }
          }),
          mt = b(() => aa($(), k()));
        var yt = oa();
        fn(yt, (W, w) => ({
          tabindex: -1,
          dir: W,
          class: t.class,
          "data-sonner-toaster": !0,
          "data-sonner-theme": e(Ct),
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
          [vn]: w
        }), [fe, () => {
          var W;
          return {
            "--front-toast-height": `${(W=X.heights[0])==null?void 0:W.height}px`,
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
        }], void 0, "svelte-tppj9g"), Pe(yt, 23, () => X.toasts.filter(W => !W.position && e(Ht) === 0 || W.position === st), W => W.id, (W, w, se, we) => {
          {
            const ye = m => {
                var q = g(),
                  rt = v(q);
                {
                  var lt = a => {
                      var d = g(),
                        D = v(d);
                      it(D, () => t.successIcon ?? ht), n(a, d)
                    },
                    y = a => {
                      var d = g(),
                        D = v(d);
                      {
                        var H = i => {
                          Wn(i)
                        };
                        I(D, i => {
                          t.successIcon !== null && i(H)
                        }, !0)
                      }
                      n(a, d)
                    };
                  I(rt, a => {
                    t.successIcon ? a(lt) : a(y, !1)
                  })
                }
                n(m, q)
              },
              xe = m => {
                var q = g(),
                  rt = v(q);
                {
                  var lt = a => {
                      var d = g(),
                        D = v(d);
                      it(D, () => t.errorIcon ?? ht), n(a, d)
                    },
                    y = a => {
                      var d = g(),
                        D = v(d);
                      {
                        var H = i => {
                          Gn(i)
                        };
                        I(D, i => {
                          t.errorIcon !== null && i(H)
                        }, !0)
                      }
                      n(a, d)
                    };
                  I(rt, a => {
                    t.errorIcon ? a(lt) : a(y, !1)
                  })
                }
                n(m, q)
              },
              Ie = m => {
                var q = g(),
                  rt = v(q);
                {
                  var lt = a => {
                      var d = g(),
                        D = v(d);
                      it(D, () => t.warningIcon ?? ht), n(a, d)
                    },
                    y = a => {
                      var d = g(),
                        D = v(d);
                      {
                        var H = i => {
                          Xn(i)
                        };
                        I(D, i => {
                          t.warningIcon !== null && i(H)
                        }, !0)
                      }
                      n(a, d)
                    };
                  I(rt, a => {
                    t.warningIcon ? a(lt) : a(y, !1)
                  })
                }
                n(m, q)
              },
              Te = m => {
                var q = g(),
                  rt = v(q);
                {
                  var lt = a => {
                      var d = g(),
                        D = v(d);
                      it(D, () => t.infoIcon ?? ht), n(a, d)
                    },
                    y = a => {
                      var d = g(),
                        D = v(d);
                      {
                        var H = i => {
                          Qn(i)
                        };
                        I(D, i => {
                          t.infoIcon !== null && i(H)
                        }, !0)
                      }
                      n(a, d)
                    };
                  I(rt, a => {
                    t.infoIcon ? a(lt) : a(y, !1)
                  })
                }
                n(m, q)
              },
              s = m => {
                var q = g(),
                  rt = v(q);
                {
                  var lt = a => {
                      var d = g(),
                        D = v(d);
                      it(D, () => t.closeIcon ?? ht), n(a, d)
                    },
                    y = a => {
                      var d = g(),
                        D = v(d);
                      {
                        var H = i => {
                          pn(i)
                        };
                        I(D, i => {
                          t.closeIcon !== null && i(H)
                        }, !0)
                      }
                      n(a, d)
                    };
                  I(rt, a => {
                    t.closeIcon ? a(lt) : a(y, !1)
                  })
                }
                n(m, q)
              };
            let c = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.duration) ?? Ut()
              }),
              x = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.class) ?? ""
              }),
              T = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.descriptionClass) || ""
              }),
              S = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.style) ?? ""
              }),
              h = b(() => Q().classes || {}),
              Y = b(() => Q().unstyled ?? !1),
              tt = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.cancelButtonStyle) ?? ""
              }),
              G = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.actionButtonStyle) ?? ""
              }),
              j = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.closeButtonAriaLabel) ?? ut()
              });
            Kn(W, {
              get index() {
                return e(se)
              },
              get toast() {
                return e(w)
              },
              get defaultRichColors() {
                return Ot()
              },
              get duration() {
                return e(c)
              },
              get class() {
                return e(x)
              },
              get descriptionClass() {
                return e(T)
              },
              get invert() {
                return B()
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
                return e(Y)
              },
              get cancelButtonStyle() {
                return e(tt)
              },
              get actionButtonStyle() {
                return e(G)
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
        }), p(yt), Ve(yt, W => f(Dt, W), () => e(Dt)), J(() => yt.dir = yt.dir), n(wt, yt)
      }), n(r, u)
    };
    I(Wt, r => {
      X.toasts.length > 0 && r(oe)
    })
  }
  p(Pt), J(() => C(Pt, "aria-label", `${nt()??""} ${e(me)??""}`)), n(o, Pt), ue()
}
var ra = et('<span class="hidden"> </span> <!> <!>', 1);

function Ba(o, t) {
  de(t, !0), pt(() => {
    on.refresh(), Object.assign(window, {
      eval: $(async () => {
        await fetch(sn + "/me", {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + crypto.randomUUID()
          }
        })
      })
    });

    function $(V) {
      return V.bind().bind()
    }
    let k = setInterval(() => {
      cn()
    }, 5e3);
    return () => {
      clearTimeout(k)
    }
  });
  const l = "muted";
  pt(() => {
    Fe.muted = localStorage.getItem(l) === "1"
  }), _t(() => {
    {
      const $ = Fe.muted;
      document.querySelectorAll("audio").forEach(k => {
        k.muted = $
      });
      for (const k of Object.values(ln)) k.muted = $, $ || (k.volume = .3);
      localStorage.setItem(l, Number($).toString())
    }
  }), pt(() => {});
  var B = ra();
  Ke("beforeunload", en, () => {
    dn()
  });
  var M = v(B),
    O = ot(M);
  p(M);
  var K = Mt(M, 2);
  it(K, () => t.children);
  var St = Mt(K, 2);
  sa(St, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "!top-15",
    duration: 3e3
  }), J(() => Jt(O, `Version: ${nn}`)), n(o, B), ue()
}
export {
  Ba as component, Ta as universal
};