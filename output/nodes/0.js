var ke = o => {
  throw TypeError(o)
};
var He = (o, t, r) => t.has(o) || ke("Cannot " + r);
var gt = (o, t, r) => (He(o, t, "read from private field"), r ? r.call(o) : t.get(o)),
  qt = (o, t, r) => t.has(o) ? ke("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(o) : t.set(o, r),
  Qt = (o, t, r, S) => (He(o, t, "write to private field"), S ? S.call(o, r) : t.set(o, r), r);
import "../chunks/Bzak7iHL.js";
import {
  o as pt,
  s as it
} from "../chunks/BJ1VLM8J.js";
import {
  p as de,
  f as et,
  d as ot,
  b as n,
  r as p,
  t as J,
  c as ue,
  bo as le,
  ay as pe,
  ax as Re,
  az as $e,
  aR as R,
  aG as Ue,
  w as _t,
  aH as f,
  A as e,
  aT as b,
  x as $t,
  s as Mt,
  bj as Ve,
  ap as ht,
  aS as g,
  a as v,
  an as tn,
  aU as Ne,
  q as ne,
  bk as en
} from "../chunks/DiiYHD7c.js";
import {
  s as Jt
} from "../chunks/BDBCFYzV.js";
import {
  v as nn
} from "../chunks/DXZr2Xp7.js";
import {
  c as an,
  A as on,
  s as sn,
  a as rn
} from "../chunks/DX3OYgTE.js";
import {
  c as Z,
  d as xt,
  e as ln,
  g as Fe,
  u as cn,
  t as dn
} from "../chunks/CfhQTYOZ.js";
import {
  g as un
} from "../chunks/C5GsJ62f.js";
import {
  p as P,
  i as I,
  s as Me,
  r as fn
} from "../chunks/CtTP525L.js";
import {
  e as Oe
} from "../chunks/F0pWTI59.js";
import {
  c as It,
  s as Tt,
  b as A,
  d as Ae,
  a as vn,
  S as mn
} from "../chunks/C48aZWAE.js";
import {
  b as We
} from "../chunks/CHMHDjSt.js";
import {
  c as Pt
} from "../chunks/2r0pPFuB.js";
import "../chunks/BkRcVJg9.js";
const gn = !0,
  Ea = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: gn
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  hn = () => "Our servers are down for maintenance. We should be back soon.",
  _n = () => "Our servers are down for maintenance. We should be back soon.",
  bn = (o = {}, t = {}) => (t.locale ?? un()) === "en" ? hn() : _n(),
  wn = Array(12).fill(0);
var yn = et('<div class="sonner-loading-bar"></div>'),
  xn = et('<div><div class="sonner-spinner"></div></div>');

function In(o, t) {
  de(t, !0);
  var r = xn(),
    S = ot(r);
  Oe(S, 23, () => wn, (M, L) => `spinner-bar-${L}`, (M, L) => {
    var V = yn();
    n(M, V)
  }), p(S), p(r), J(M => {
    Tt(r, 1, M), A(r, "data-visible", t.visible)
  }, [() => It(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), n(o, r), ue()
}
const Tn = typeof window < "u" ? window : void 0;

function Sn(o) {
  let t = o.activeElement;
  for (; t != null && t.shadowRoot;) {
    const r = t.shadowRoot.activeElement;
    if (r === t) break;
    t = r
  }
  return t
}
var jt, te;
class Bn {
  constructor(t = {}) {
    qt(this, jt);
    qt(this, te);
    const {
      window: r = Tn,
      document: S = r == null ? void 0 : r.document
    } = t;
    r !== void 0 && (Qt(this, jt, S), Qt(this, te, an(M => {
      const L = le(r, "focusin", M),
        V = le(r, "focusout", M);
      return () => {
        L(), V()
      }
    })))
  }
  get current() {
    var t;
    return (t = gt(this, te)) == null || t.call(this), gt(this, jt) ? Sn(gt(this, jt)) : null
  }
}
jt = new WeakMap, te = new WeakMap;
new Bn;
var ee, St;
class Dn {
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
    const r = Re(gt(this, St));
    return r === void 0 ? t : r
  }
  set(t) {
    return $e(gt(this, St), t)
  }
}
ee = new WeakMap, St = new WeakMap;
const En = new Dn("<Toaster/>");

function ce(o) {
  return o.label !== void 0
}

function Mn() {
  let o = R(Ue(typeof document < "u" ? document.hidden : !1));
  return _t(() => le(document, "visibilitychange", () => {
    f(o, document.hidden, !0)
  })), {
    get current() {
      return e(o)
    }
  }
}
const je = 4e3,
  An = 14,
  Cn = 45,
  On = 200,
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

function kn(o) {
  const [t, r] = o.split("-"), S = [];
  return t && S.push(t), r && S.push(r), S
}

function ze(o) {
  return 1 / (1.5 + Math.abs(o) / 20)
}
var Hn = et("<div><!></div>"),
  Rn = (o, t, r, S, M) => {
    var L, V;
    e(t) || !e(r) || (S(), (V = (L = M.toast).onDismiss) == null || V.call(L, M.toast))
  },
  Nn = et('<button data-close-button=""><!></button>'),
  Fn = et('<div data-icon=""><!> <!></div>'),
  jn = et('<div data-description=""><!></div>'),
  zn = (o, t, r, S) => {
    var M, L;
    ce(t.toast.cancel) && e(r) && ((L = (M = t.toast.cancel) == null ? void 0 : M.onClick) == null || L.call(M, o), S())
  },
  Un = et('<button data-button="" data-cancel=""> </button>'),
  Vn = (o, t, r) => {
    var S;
    ce(t.toast.action) && ((S = t.toast.action) == null || S.onClick(o), !o.defaultPrevented && r())
  },
  Wn = et('<button data-button=""> </button>'),
  Kn = et('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  Yn = et('<li data-sonner-toast=""><!> <!></li>');

function Gn(o, t) {
  de(t, !0);
  const r = s => {
    var c = g(),
      x = v(c);
    {
      var T = h => {
          var K = Hn(),
            tt = ot(K);
          it(tt, () => t.loadingIcon), p(K), J(Y => {
            Tt(K, 1, Y), A(K, "data-visible", e(E) === "loading")
          }, [() => {
            var Y, j, m;
            return It(xt((Y = e(at)) == null ? void 0 : Y.loader, (m = (j = t.toast) == null ? void 0 : j.classes) == null ? void 0 : m.loader, "sonner-loader"))
          }]), n(h, K)
        },
        B = h => {
          {
            let K = b(() => {
                var Y, j;
                return xt((Y = e(at)) == null ? void 0 : Y.loader, (j = t.toast.classes) == null ? void 0 : j.loader)
              }),
              tt = b(() => e(E) === "loading");
            In(h, {
              get class() {
                return e(K)
              },
              get visible() {
                return e(tt)
              }
            })
          }
        };
      I(x, h => {
        t.loadingIcon ? h(T) : h(B, !1)
      })
    }
    n(s, c)
  };
  let S = P(t, "cancelButtonStyle", 3, ""),
    M = P(t, "actionButtonStyle", 3, ""),
    L = P(t, "descriptionClass", 3, ""),
    V = P(t, "unstyled", 3, !1),
    Bt = P(t, "defaultRichColors", 3, !1);
  const $ = {
    ...Ln
  };
  let N = R(!1),
    q = R(!1),
    Lt = R(!1),
    zt = R(!1),
    Ut = R(!1),
    Q = R(0),
    bt = R(0),
    kt = t.toast.duration || t.duration || je,
    nt = R(void 0),
    ut = R(null),
    Vt = R(null);
  const fe = b(() => t.index === 0),
    ve = b(() => t.index + 1 <= t.visibleToasts),
    E = b(() => t.toast.type),
    ft = b(() => t.toast.dismissable !== !1),
    At = b(() => t.toast.class || ""),
    Dt = b(() => t.toast.descriptionClass || ""),
    vt = b(() => Z.heights.findIndex(s => s.toastId === t.toast.id) || 0),
    Ct = b(() => t.toast.closeButton ?? t.closeButton),
    me = b(() => t.toast.duration ?? t.duration ?? je);
  let Et = null;
  const ae = b(() => t.position.split("-")),
    ge = b(() => Z.heights.reduce((s, c, x) => x >= e(vt) ? s : s + c.height, 0)),
    he = Mn(),
    _e = b(() => t.toast.invert || t.invert),
    Wt = b(() => e(E) === "loading"),
    at = b(() => ({
      ...$,
      ...t.classes
    })),
    be = b(() => t.toast.title),
    Ot = b(() => t.toast.description);
  let Kt = R(0),
    oe = R(0);
  const l = b(() => Math.round(e(vt) * An + e(ge)));
  _t(() => {
    e(be), e(Ot);
    let s;
    t.expanded || t.expandByDefault ? s = 1 : s = 1 - t.index * Pn;
    const c = $t(() => e(nt));
    if (c === void 0) return;
    c.style.setProperty("height", "auto");
    const x = c.offsetHeight,
      T = c.getBoundingClientRect().height,
      B = Math.round(T / s + Number.EPSILON & 100) / 100;
    c.style.removeProperty("height");
    let h;
    Math.abs(B - x) < 1 ? h = B : h = x, f(bt, h, !0), $t(() => {
      Z.setHeight({
        toastId: t.toast.id,
        height: h
      })
    })
  });

  function u() {
    f(q, !0), f(Q, e(l), !0), Z.removeHeight(t.toast.id), setTimeout(() => {
      Z.remove(t.toast.id)
    }, On)
  }
  let F;
  const wt = b(() => t.toast.promise && e(E) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function st() {
    f(Kt, new Date().getTime(), !0), F = setTimeout(() => {
      var s, c;
      (c = (s = t.toast).onAutoClose) == null || c.call(s, t.toast), u()
    }, kt)
  }

  function Ht() {
    if (e(oe) < e(Kt)) {
      const s = new Date().getTime() - e(Kt);
      kt = kt - s
    }
    f(oe, new Date().getTime(), !0)
  }
  _t(() => {
    t.toast.updated && (clearTimeout(F), kt = e(me), st())
  }), _t(() => (e(wt) || (t.expanded || t.interacting || he.current ? Ht() : st()), () => clearTimeout(F))), pt(() => {
    var c;
    f(N, !0);
    const s = (c = e(nt)) == null ? void 0 : c.getBoundingClientRect().height;
    return f(bt, s, !0), Z.setHeight({
      toastId: t.toast.id,
      height: s
    }), () => {
      Z.removeHeight(t.toast.id)
    }
  }), _t(() => {
    t.toast.delete && $t(() => {
      var s, c;
      u(), (c = (s = t.toast).onDismiss) == null || c.call(s, t.toast)
    })
  });
  const Pe = s => {
      if (e(Wt)) return;
      f(Q, e(l), !0);
      const c = s.target;
      c.setPointerCapture(s.pointerId), c.tagName !== "BUTTON" && (f(Lt, !0), Et = {
        x: s.clientX,
        y: s.clientY
      })
    },
    ie = () => {
      var h, K, tt, Y, j, m;
      if (e(zt) || !e(ft)) return;
      Et = null;
      const s = Number(((h = e(nt)) == null ? void 0 : h.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        c = Number(((K = e(nt)) == null ? void 0 : K.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        x = new Date().getTime() - 0,
        T = e(ut) === "x" ? s : c,
        B = Math.abs(T) / x;
      if (Math.abs(T) >= Cn || B > .11) {
        f(Q, e(l), !0), (Y = (tt = t.toast).onDismiss) == null || Y.call(tt, t.toast), e(ut) === "x" ? f(Vt, s > 0 ? "right" : "left", !0) : f(Vt, c > 0 ? "down" : "up", !0), u(), f(zt, !0);
        return
      } else(j = e(nt)) == null || j.style.setProperty("--swipe-amount-x", "0px"), (m = e(nt)) == null || m.style.setProperty("--swipe-amount-y", "0px");
      f(Ut, !1), f(Lt, !1), f(ut, null)
    },
    mt = s => {
      var K, tt, Y;
      if (!Et || !e(ft) || (((K = window.getSelection()) == null ? void 0 : K.toString().length) ?? -1) > 0) return;
      const x = s.clientY - Et.y,
        T = s.clientX - Et.x,
        B = t.swipeDirections ?? kn(t.position);
      !e(ut) && (Math.abs(T) > 1 || Math.abs(x) > 1) && f(ut, Math.abs(T) > Math.abs(x) ? "x" : "y", !0);
      let h = {
        x: 0,
        y: 0
      };
      if (e(ut) === "y") {
        if (B.includes("top") || B.includes("bottom"))
          if (B.includes("top") && x < 0 || B.includes("bottom") && x > 0) h.y = x;
          else {
            const j = x * ze(x);
            h.y = Math.abs(j) < Math.abs(x) ? j : x
          }
      } else if (e(ut) === "x" && (B.includes("left") || B.includes("right")))
        if (B.includes("left") && T < 0 || B.includes("right") && T > 0) h.x = T;
        else {
          const j = T * ze(T);
          h.x = Math.abs(j) < Math.abs(T) ? j : T
        }(Math.abs(h.x) > 0 || Math.abs(h.y) > 0) && f(Ut, !0), (tt = e(nt)) == null || tt.style.setProperty("--swipe-amount-x", `${h.x}px`), (Y = e(nt)) == null || Y.style.setProperty("--swipe-amount-y", `${h.y}px`)
    },
    yt = () => {
      f(Lt, !1), f(ut, null), Et = null
    },
    W = b(() => t.toast.icon ? t.toast.icon : e(E) === "success" ? t.successIcon : e(E) === "error" ? t.errorIcon : e(E) === "warning" ? t.warningIcon : e(E) === "info" ? t.infoIcon : e(E) === "loading" ? t.loadingIcon : null);
  var w = Yn();
  A(w, "tabindex", 0);
  let se;
  w.__pointermove = mt, w.__pointerup = ie, w.__pointerdown = Pe;
  var we = ot(w);
  {
    var ye = s => {
      var c = Nn();
      c.__click = [Rn, Wt, ft, u, t];
      var x = ot(c);
      it(x, () => t.closeIcon ?? ht), p(c), J(T => {
        A(c, "aria-label", t.closeButtonAriaLabel), A(c, "data-disabled", e(Wt)), Tt(c, 1, T)
      }, [() => {
        var T, B, h;
        return It(xt((T = e(at)) == null ? void 0 : T.closeButton, (h = (B = t.toast) == null ? void 0 : B.classes) == null ? void 0 : h.closeButton))
      }]), n(s, c)
    };
    I(we, s => {
      e(Ct) && !t.toast.component && e(E) !== "loading" && t.closeIcon !== null && s(ye)
    })
  }
  var xe = Mt(we, 2);
  {
    var Ie = s => {
        const c = b(() => t.toast.component);
        var x = g(),
          T = v(x);
        Pt(T, () => e(c), (B, h) => {
          h(B, Me(() => t.toast.componentProps, {
            closeToast: u
          }))
        }), n(s, x)
      },
      Te = s => {
        var c = Kn(),
          x = v(c);
        {
          var T = y => {
            var a = Fn(),
              d = ot(a);
            {
              var D = _ => {
                var C = g(),
                  z = v(C);
                {
                  var H = G => {
                      var U = g(),
                        ct = v(U);
                      Pt(ct, () => t.toast.icon, (dt, Yt) => {
                        Yt(dt, {})
                      }), n(G, U)
                    },
                    O = G => {
                      r(G)
                    };
                  I(z, G => {
                    t.toast.icon ? G(H) : G(O, !1)
                  })
                }
                n(_, C)
              };
              I(d, _ => {
                (t.toast.promise || e(E) === "loading") && _(D)
              })
            }
            var k = Mt(d, 2);
            {
              var i = _ => {
                var C = g(),
                  z = v(C);
                {
                  var H = G => {
                      var U = g(),
                        ct = v(U);
                      Pt(ct, () => t.toast.icon, (dt, Yt) => {
                        Yt(dt, {})
                      }), n(G, U)
                    },
                    O = G => {
                      var U = g(),
                        ct = v(U);
                      {
                        var dt = Rt => {
                            var Gt = g(),
                              Se = v(Gt);
                            it(Se, () => t.successIcon ?? ht), n(Rt, Gt)
                          },
                          Yt = Rt => {
                            var Gt = g(),
                              Se = v(Gt);
                            {
                              var Ge = Nt => {
                                  var Zt = g(),
                                    Be = v(Zt);
                                  it(Be, () => t.errorIcon ?? ht), n(Nt, Zt)
                                },
                                Ze = Nt => {
                                  var Zt = g(),
                                    Be = v(Zt);
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
                                            var Le = g(),
                                              Je = v(Le);
                                            it(Je, () => t.infoIcon ?? ht), n(Ee, Le)
                                          };
                                          I(De, Ee => {
                                            e(E) === "info" && Ee(Qe)
                                          }, !0)
                                        }
                                        n(Ft, Xt)
                                      };
                                    I(Be, Ft => {
                                      e(E) === "warning" ? Ft(Xe) : Ft(qe, !1)
                                    }, !0)
                                  }
                                  n(Nt, Zt)
                                };
                              I(Se, Nt => {
                                e(E) === "error" ? Nt(Ge) : Nt(Ze, !1)
                              }, !0)
                            }
                            n(Rt, Gt)
                          };
                        I(ct, Rt => {
                          e(E) === "success" ? Rt(dt) : Rt(Yt, !1)
                        }, !0)
                      }
                      n(G, U)
                    };
                  I(z, G => {
                    t.toast.icon ? G(H) : G(O, !1)
                  })
                }
                n(_, C)
              };
              I(k, _ => {
                t.toast.type !== "loading" && _(i)
              })
            }
            p(a), J(_ => Tt(a, 1, _), [() => {
              var _, C, z;
              return It(xt((_ = e(at)) == null ? void 0 : _.icon, (z = (C = t.toast) == null ? void 0 : C.classes) == null ? void 0 : z.icon))
            }]), n(y, a)
          };
          I(x, y => {
            (e(E) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (e(W) !== null || t.toast.icon) && y(T)
          })
        }
        var B = Mt(x, 2),
          h = ot(B),
          K = ot(h);
        {
          var tt = y => {
            var a = g(),
              d = v(a);
            {
              var D = i => {
                  const _ = b(() => t.toast.title);
                  var C = g(),
                    z = v(C);
                  Pt(z, () => e(_), (H, O) => {
                    O(H, Me(() => t.toast.componentProps))
                  }), n(i, C)
                },
                k = i => {
                  var _ = Ne();
                  J(() => Jt(_, t.toast.title)), n(i, _)
                };
              I(d, i => {
                typeof t.toast.title != "string" ? i(D) : i(k, !1)
              })
            }
            n(y, a)
          };
          I(K, y => {
            t.toast.title && y(tt)
          })
        }
        p(h);
        var Y = Mt(h, 2);
        {
          var j = y => {
            var a = jn(),
              d = ot(a);
            {
              var D = i => {
                  const _ = b(() => t.toast.description);
                  var C = g(),
                    z = v(C);
                  Pt(z, () => e(_), (H, O) => {
                    O(H, Me(() => t.toast.componentProps))
                  }), n(i, C)
                },
                k = i => {
                  var _ = Ne();
                  J(() => Jt(_, t.toast.description)), n(i, _)
                };
              I(d, i => {
                typeof t.toast.description != "string" ? i(D) : i(k, !1)
              })
            }
            p(a), J(i => Tt(a, 1, i), [() => {
              var i, _;
              return It(xt(L(), e(Dt), (i = e(at)) == null ? void 0 : i.description, (_ = t.toast.classes) == null ? void 0 : _.description))
            }]), n(y, a)
          };
          I(Y, y => {
            t.toast.description && y(j)
          })
        }
        p(B);
        var m = Mt(B, 2);
        {
          var X = y => {
            var a = g(),
              d = v(a);
            {
              var D = i => {
                  var _ = g(),
                    C = v(_);
                  Pt(C, () => t.toast.cancel, (z, H) => {
                    H(z, {})
                  }), n(i, _)
                },
                k = i => {
                  var _ = g(),
                    C = v(_);
                  {
                    var z = H => {
                      var O = Un();
                      O.__click = [zn, t, ft, u];
                      var G = ot(O, !0);
                      p(O), J(U => {
                        Ae(O, t.toast.cancelButtonStyle ?? S()), Tt(O, 1, U), Jt(G, t.toast.cancel.label)
                      }, [() => {
                        var U, ct, dt;
                        return It(xt((U = e(at)) == null ? void 0 : U.cancelButton, (dt = (ct = t.toast) == null ? void 0 : ct.classes) == null ? void 0 : dt.cancelButton))
                      }]), n(H, O)
                    };
                    I(C, H => {
                      ce(t.toast.cancel) && H(z)
                    }, !0)
                  }
                  n(i, _)
                };
              I(d, i => {
                typeof t.toast.cancel == "function" ? i(D) : i(k, !1)
              })
            }
            n(y, a)
          };
          I(m, y => {
            t.toast.cancel && y(X)
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
                    C = v(_);
                  Pt(C, () => t.toast.action, (z, H) => {
                    H(z, {})
                  }), n(i, _)
                },
                k = i => {
                  var _ = g(),
                    C = v(_);
                  {
                    var z = H => {
                      var O = Wn();
                      O.__click = [Vn, t, u];
                      var G = ot(O, !0);
                      p(O), J(U => {
                        Ae(O, t.toast.actionButtonStyle ?? M()), Tt(O, 1, U), Jt(G, t.toast.action.label)
                      }, [() => {
                        var U, ct, dt;
                        return It(xt((U = e(at)) == null ? void 0 : U.actionButton, (dt = (ct = t.toast) == null ? void 0 : ct.classes) == null ? void 0 : dt.actionButton))
                      }]), n(H, O)
                    };
                    I(C, H => {
                      ce(t.toast.action) && H(z)
                    }, !0)
                  }
                  n(i, _)
                };
              I(d, i => {
                typeof t.toast.action == "function" ? i(D) : i(k, !1)
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
  p(w), We(w, s => f(nt, s), () => e(nt)), J((s, c, x, T) => {
    Tt(w, 1, s), A(w, "data-rich-colors", t.toast.richColors ?? Bt()), A(w, "data-styled", !(t.toast.component || t.toast.unstyled || V())), A(w, "data-mounted", e(N)), A(w, "data-promise", c), A(w, "data-swiped", e(Ut)), A(w, "data-removed", e(q)), A(w, "data-visible", e(ve)), A(w, "data-y-position", e(ae)[0]), A(w, "data-x-position", e(ae)[1]), A(w, "data-index", t.index), A(w, "data-front", e(fe)), A(w, "data-swiping", e(Lt)), A(w, "data-dismissable", e(ft)), A(w, "data-type", e(E)), A(w, "data-invert", e(_e)), A(w, "data-swipe-out", e(zt)), A(w, "data-swipe-direction", e(Vt)), A(w, "data-expanded", x), se = Ae(w, `${t.style} ${t.toast.style}`, se, T)
  }, [() => {
    var s, c, x, T, B, h;
    return It(xt(t.class, e(At), (s = e(at)) == null ? void 0 : s.toast, (x = (c = t.toast) == null ? void 0 : c.classes) == null ? void 0 : x.toast, (T = e(at)) == null ? void 0 : T[e(E)], (h = (B = t.toast) == null ? void 0 : B.classes) == null ? void 0 : h[e(E)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && e(N)), () => ({
    "--index": t.index,
    "--toasts-before": t.index,
    "--z-index": Z.toasts.length - t.index,
    "--offset": `${e(q)?e(Q):e(l)}px`,
    "--initial-height": t.expandByDefault ? "auto" : `${e(bt)}px`
  })]), Ve("dragend", w, yt), n(o, w), ue()
}
tn(["pointermove", "pointerup", "pointerdown", "click"]);
var Zn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function Xn(o) {
  var t = Zn();
  n(o, t)
}
var qn = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function Qn(o) {
  var t = qn();
  n(o, t)
}
var Jn = ne('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function pn(o) {
  var t = Jn();
  n(o, t)
}
var $n = ne('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function ta(o) {
  var t = $n();
  n(o, t)
}
var ea = ne('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function na(o) {
  var t = ea();
  n(o, t)
}
const aa = 3,
  Ke = "24px",
  Ye = "16px",
  oa = 4e3,
  ia = 356,
  sa = 14,
  Ce = "dark",
  re = "light";

function ra(o, t) {
  const r = {};
  return [o, t].forEach((S, M) => {
    const L = M === 1,
      V = L ? "--mobile-offset" : "--offset",
      Bt = L ? Ye : Ke;

    function $(N) {
      ["top", "right", "bottom", "left"].forEach(q => {
        r[`${V}-${q}`] = typeof N == "number" ? `${N}px` : N
      })
    }
    typeof S == "number" || typeof S == "string" ? $(S) : typeof S == "object" ? ["top", "right", "bottom", "left"].forEach(N => {
      const q = S[N];
      q === void 0 ? r[`${V}-${N}`] = Bt : r[`${V}-${N}`] = typeof q == "number" ? `${q}px` : q
    }) : $(Bt)
  }), r
}
var la = et("<ol></ol>"),
  ca = et('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-tppj9g"><!></section>');

function da(o, t) {
  de(t, !0);

  function r(l) {
    return l !== "system" ? l : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? Ce : re
  }
  let S = P(t, "invert", 3, !1),
    M = P(t, "position", 3, "bottom-right"),
    L = P(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    V = P(t, "expand", 3, !1),
    Bt = P(t, "closeButton", 3, !1),
    $ = P(t, "offset", 3, Ke),
    N = P(t, "mobileOffset", 3, Ye),
    q = P(t, "theme", 3, "light"),
    Lt = P(t, "richColors", 3, !1),
    zt = P(t, "duration", 3, oa),
    Ut = P(t, "visibleToasts", 3, aa),
    Q = P(t, "toastOptions", 19, () => ({})),
    bt = P(t, "dir", 7, "auto"),
    kt = P(t, "gap", 3, sa),
    nt = P(t, "containerAriaLabel", 3, "Notifications"),
    ut = P(t, "closeButtonAriaLabel", 3, "Close toast"),
    Vt = fn(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function fe() {
    if (bt() !== "auto") return bt();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const l = document.documentElement.getAttribute("dir");
    return l === "auto" || !l ? ($t(() => bt(window.getComputedStyle(document.documentElement).direction ?? "ltr")), bt()) : ($t(() => bt(l)), l)
  }
  const ve = b(() => Array.from(new Set([M(), ...Z.toasts.filter(l => l.position).map(l => l.position)].filter(Boolean))));
  let E = R(!1),
    ft = R(!1),
    At = R(Ue(r(q()))),
    Dt = R(void 0),
    vt = R(null),
    Ct = R(!1);
  const me = b(() => L().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  _t(() => {
    Z.toasts.length <= 1 && f(E, !1)
  }), _t(() => {
    const l = Z.toasts.filter(u => u.dismiss && !u.delete);
    if (l.length > 0) {
      const u = Z.toasts.map(F => l.find(st => st.id === F.id) ? {
        ...F,
        delete: !0
      } : F);
      Z.toasts = u
    }
  }), _t(() => () => {
    e(Dt) && e(vt) && (e(vt).focus({
      preventScroll: !0
    }), f(vt, null), f(Ct, !1))
  }), pt(() => (Z.reset(), le(document, "keydown", u => {
    var wt, st;
    L().every(Ht => u[Ht] || u.code === Ht) && (f(E, !0), (wt = e(Dt)) == null || wt.focus()), u.code === "Escape" && (document.activeElement === e(Dt) || (st = e(Dt)) != null && st.contains(document.activeElement)) && f(E, !1)
  }))), _t(() => {
    if (q() !== "system" && f(At, q()), typeof window < "u") {
      q() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? f(At, Ce) : f(At, re));
      const l = window.matchMedia("(prefers-color-scheme: dark)"),
        u = ({
          matches: F
        }) => {
          f(At, F ? Ce : re, !0)
        };
      "addEventListener" in l ? l.addEventListener("change", u) : l.addListener(u)
    }
  });
  const Et = l => {
      var u;
      (u = t.onblur) == null || u.call(t, l), e(Ct) && !l.currentTarget.contains(l.relatedTarget) && (f(Ct, !1), e(vt) && (e(vt).focus({
        preventScroll: !0
      }), f(vt, null)))
    },
    ae = l => {
      var F;
      (F = t.onfocus) == null || F.call(t, l), !(l.target instanceof HTMLElement && l.target.dataset.dismissable === "false") && (e(Ct) || (f(Ct, !0), f(vt, l.relatedTarget, !0)))
    },
    ge = l => {
      var F;
      (F = t.onpointerdown) == null || F.call(t, l), !(l.target instanceof HTMLElement && l.target.dataset.dismissable === "false") && f(ft, !0)
    },
    he = l => {
      var u;
      (u = t.onmouseenter) == null || u.call(t, l), f(E, !0)
    },
    _e = l => {
      var u;
      (u = t.onmouseleave) == null || u.call(t, l), e(ft) || f(E, !1)
    },
    Wt = l => {
      var u;
      (u = t.onmousemove) == null || u.call(t, l), f(E, !0)
    },
    at = l => {
      var u;
      (u = t.ondragend) == null || u.call(t, l), f(E, !1)
    },
    be = l => {
      var u;
      (u = t.onpointerup) == null || u.call(t, l), f(ft, !1)
    };
  En.set(new ln);
  var Ot = ca();
  A(Ot, "tabindex", -1);
  var Kt = ot(Ot);
  {
    var oe = l => {
      var u = g(),
        F = v(u);
      Oe(F, 18, () => e(ve), wt => wt, (wt, st, Ht, Pe) => {
        const ie = b(() => {
            const [W, w] = st.split("-");
            return {
              y: W,
              x: w
            }
          }),
          mt = b(() => ra($(), N()));
        var yt = la();
        vn(yt, (W, w) => ({
          tabindex: -1,
          dir: W,
          class: t.class,
          "data-sonner-toaster": !0,
          "data-sonner-theme": e(At),
          "data-y-position": e(ie).y,
          "data-x-position": e(ie).x,
          style: t.style,
          onblur: Et,
          onfocus: ae,
          onmouseenter: he,
          onmousemove: Wt,
          onmouseleave: _e,
          ondragend: at,
          onpointerdown: ge,
          onpointerup: be,
          ...Vt,
          [mn]: w
        }), [fe, () => {
          var W;
          return {
            "--front-toast-height": `${(W=Z.heights[0])==null?void 0:W.height}px`,
            "--width": `${ia}px`,
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
        }], void 0, "svelte-tppj9g"), Oe(yt, 23, () => Z.toasts.filter(W => !W.position && e(Ht) === 0 || W.position === st), W => W.id, (W, w, se, we) => {
          {
            const ye = m => {
                var X = g(),
                  rt = v(X);
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
                        var k = i => {
                          Xn(i)
                        };
                        I(D, i => {
                          t.successIcon !== null && i(k)
                        }, !0)
                      }
                      n(a, d)
                    };
                  I(rt, a => {
                    t.successIcon ? a(lt) : a(y, !1)
                  })
                }
                n(m, X)
              },
              xe = m => {
                var X = g(),
                  rt = v(X);
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
                        var k = i => {
                          Qn(i)
                        };
                        I(D, i => {
                          t.errorIcon !== null && i(k)
                        }, !0)
                      }
                      n(a, d)
                    };
                  I(rt, a => {
                    t.errorIcon ? a(lt) : a(y, !1)
                  })
                }
                n(m, X)
              },
              Ie = m => {
                var X = g(),
                  rt = v(X);
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
                        var k = i => {
                          pn(i)
                        };
                        I(D, i => {
                          t.warningIcon !== null && i(k)
                        }, !0)
                      }
                      n(a, d)
                    };
                  I(rt, a => {
                    t.warningIcon ? a(lt) : a(y, !1)
                  })
                }
                n(m, X)
              },
              Te = m => {
                var X = g(),
                  rt = v(X);
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
                        var k = i => {
                          ta(i)
                        };
                        I(D, i => {
                          t.infoIcon !== null && i(k)
                        }, !0)
                      }
                      n(a, d)
                    };
                  I(rt, a => {
                    t.infoIcon ? a(lt) : a(y, !1)
                  })
                }
                n(m, X)
              },
              s = m => {
                var X = g(),
                  rt = v(X);
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
                        var k = i => {
                          na(i)
                        };
                        I(D, i => {
                          t.closeIcon !== null && i(k)
                        }, !0)
                      }
                      n(a, d)
                    };
                  I(rt, a => {
                    t.closeIcon ? a(lt) : a(y, !1)
                  })
                }
                n(m, X)
              };
            let c = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.duration) ?? zt()
              }),
              x = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.class) ?? ""
              }),
              T = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.descriptionClass) || ""
              }),
              B = b(() => {
                var m;
                return ((m = Q()) == null ? void 0 : m.style) ?? ""
              }),
              h = b(() => Q().classes || {}),
              K = b(() => Q().unstyled ?? !1),
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
            Gn(W, {
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
                return e(c)
              },
              get class() {
                return e(x)
              },
              get descriptionClass() {
                return e(T)
              },
              get invert() {
                return S()
              },
              get visibleToasts() {
                return Ut()
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
                return V()
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
        }), p(yt), We(yt, W => f(Dt, W), () => e(Dt)), J(() => yt.dir = yt.dir), n(wt, yt)
      }), n(l, u)
    };
    I(Kt, l => {
      Z.toasts.length > 0 && l(oe)
    })
  }
  p(Ot), J(() => A(Ot, "aria-label", `${nt()??""} ${e(me)??""}`)), n(o, Ot), ue()
}
var ua = et('<span class="hidden"> </span> <!> <!>', 1);

function Ma(o, t) {
  de(t, !0), pt(() => {
    cn.refresh();
    let $ = setInterval(() => {
      sn()
    }, 5e3);
    return () => {
      clearTimeout($)
    }
  });
  const r = "muted";
  pt(() => {
    Fe.muted = localStorage.getItem(r) === "1"
  }), _t(() => {
    {
      const $ = Fe.muted;
      document.querySelectorAll("audio").forEach(N => {
        N.muted = $
      });
      for (const N of Object.values(on)) N.muted = $, $ || (N.volume = .3);
      localStorage.setItem(r, Number($).toString())
    }
  }), pt(() => {
    dn.info(bn(), {
      duration: 6e4
    })
  });
  var S = ua();
  Ve("beforeunload", en, () => {
    rn()
  });
  var M = v(S),
    L = ot(M);
  p(M);
  var V = Mt(M, 2);
  it(V, () => t.children);
  var Bt = Mt(V, 2);
  da(Bt, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "!top-15",
    duration: 3e3
  }), J(() => Jt(L, `Version: ${nn}`)), n(o, S), ue()
}
export {
  Ma as component, Ea as universal
};