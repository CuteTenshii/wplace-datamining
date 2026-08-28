var Kn = Object.defineProperty;
var _n = m => {
  throw TypeError(m)
};
var Yn = (m, t, r) => t in m ? Kn(m, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : m[t] = r;
var Vt = (m, t, r) => Yn(m, typeof t != "symbol" ? t + "" : t, r),
  sn = (m, t, r) => t.has(m) || _n("Cannot " + r);
var C = (m, t, r) => (sn(m, t, "read from private field"), r ? r.call(m) : t.get(m)),
  yt = (m, t, r) => t.has(m) ? _n("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(m) : t.set(m, r),
  me = (m, t, r, h) => (sn(m, t, "write to private field"), h ? h.call(m, r) : t.set(m, r), r),
  bn = (m, t, r) => (sn(m, t, "access private method"), r);
import "../chunks/Bzak7iHL.js";
import {
  o as de
} from "../chunks/D68Ns86n.js";
import {
  p as Qt,
  d as et,
  a as y,
  r as J,
  t as Dt,
  b as Zt,
  c as ft,
  bu as Oe,
  I as qn,
  H as wn,
  J as Xn,
  e as Y,
  g as vn,
  y as Ut,
  h as f,
  i,
  E as Pe,
  s as wt,
  m as se,
  v as tn,
  u as D,
  z as Xt,
  l as $,
  f as G,
  k as en,
  o as In,
  w as je,
  aO as On,
  n as Rn,
  x as Qn
} from "../chunks/D5GL_E7i.js";
import {
  c as Zn,
  s as Bt
} from "../chunks/BATewRf7.js";
import {
  i as rt
} from "../chunks/unjGrhDm.js";
import {
  s as Ht
} from "../chunks/BMTVjKyu.js";
import {
  v as Jn
} from "../chunks/Cs4RbjOP.js";
import {
  o as Ot,
  p as oe,
  q as $n,
  g as cn,
  a as an,
  t as ye,
  u as dn,
  r as En,
  w as ti,
  x as on,
  y as Dn,
  z as xn,
  B as ei,
  h as Tn,
  D as ni,
  T as ii
} from "../chunks/CT6bOf-I.js";
import {
  A as si
} from "../chunks/CwG1zf2_.js";
import {
  s as ai,
  a as oi
} from "../chunks/B49yUQkc.js";
import {
  a as Mn,
  g as ri,
  s as li,
  b as hn,
  D as ui,
  w as ci,
  c as di,
  d as hi,
  e as fn,
  n as Sn,
  f as kt,
  m as Ye,
  h as fi,
  i as mi,
  j as gi,
  k as vi
} from "../chunks/CMxueFbF.js";
import {
  k as pi
} from "../chunks/BSqwrFfw.js";
import {
  c as re,
  a as qt,
  s as Ct,
  b as rn,
  e as Ce,
  S as yi,
  k as Ci,
  f as Bn
} from "../chunks/Ce1mtF2R.js";
import {
  b as nn
} from "../chunks/59dp7Pbq.js";
import {
  j as _i,
  k as bi
} from "../chunks/D5blgKZB.js";
import {
  p as k,
  s as ke,
  r as Ee
} from "../chunks/LT-XNHCk.js";
import {
  _ as wi
} from "../chunks/o88EtIUh.js";
import {
  e as qe
} from "../chunks/Clrj6tX0.js";
import {
  c as $t
} from "../chunks/BkCB8krf.js";
import {
  t as Ii
} from "../chunks/Ct12j0u0.js";
import {
  m as ee
} from "../chunks/XL5Wf48w.js";
import {
  k as Ei
} from "../chunks/BDW2UD0r.js";
import "../chunks/DG1CTLCN.js";
const Di = !0,
  La = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: Di
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  xi = Array(12).fill(0);
var Ti = ft('<div class="sonner-loading-bar"></div>'),
  Si = ft('<div><div class="sonner-spinner"></div></div>');

function Ni(m, t) {
  Qt(t, !0);
  var r = Si(),
    h = et(r);
  qe(h, 23, () => xi, (p, E) => `spinner-bar-${E}`, (p, E) => {
    var x = Ti();
    y(p, x)
  }), J(h), J(r), Dt(p => {
    qt(r, 1, p), Ct(r, "data-visible", t.visible)
  }, [() => re(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), y(m, r), Zt()
}
const Li = typeof window < "u" ? window : void 0;

function Ai(m) {
  let t = m.activeElement;
  for (; t != null && t.shadowRoot;) {
    const r = t.shadowRoot.activeElement;
    if (r === t) break;
    t = r
  }
  return t
}
var _e, Re;
class Pi {
  constructor(t = {}) {
    yt(this, _e);
    yt(this, Re);
    const {
      window: r = Li,
      document: h = r == null ? void 0 : r.document
    } = t;
    r !== void 0 && (me(this, _e, h), me(this, Re, Zn(p => {
      const E = Oe(r, "focusin", p),
        x = Oe(r, "focusout", p);
      return () => {
        E(), x()
      }
    })))
  }
  get current() {
    var t;
    return (t = C(this, Re)) == null || t.call(this), C(this, _e) ? Ai(C(this, _e)) : null
  }
}
_e = new WeakMap, Re = new WeakMap;
new Pi;
var Me, le;
class ki {
  constructor(t) {
    yt(this, Me);
    yt(this, le);
    me(this, Me, t), me(this, le, Symbol(t))
  }
  get key() {
    return C(this, le)
  }
  exists() {
    return qn(C(this, le))
  }
  get() {
    const t = wn(C(this, le));
    if (t === void 0) throw new Error(`Context "${C(this,Me)}" not found`);
    return t
  }
  getOr(t) {
    const r = wn(C(this, le));
    return r === void 0 ? t : r
  }
  set(t) {
    return Xn(C(this, le), t)
  }
}
Me = new WeakMap, le = new WeakMap;
const Oi = new ki("<Toaster/>");

function Ge(m) {
  return m.label !== void 0
}

function Ri() {
  let m = Y(vn(typeof document < "u" ? document.hidden : !1));
  return Ut(() => Oe(document, "visibilitychange", () => {
    f(m, document.hidden, !0)
  })), {
    get current() {
      return i(m)
    }
  }
}
const Nn = 4e3,
  Mi = 14,
  Bi = 45,
  Hi = 200,
  Ui = .05,
  Wi = {
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

function Fi(m) {
  const [t, r] = m.split("-"), h = [];
  return t && h.push(t), r && h.push(r), h
}

function Ln(m) {
  return 1 / (1.5 + Math.abs(m) / 20)
}
var Vi = ft("<div><!></div>"),
  zi = ft('<button data-close-button=""><!></button>'),
  ji = ft('<div data-icon=""><!> <!></div>'),
  Gi = ft('<div data-description=""><!></div>'),
  Ki = ft('<button data-button="" data-cancel=""> </button>'),
  Yi = ft('<button data-button=""> </button>'),
  qi = ft('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  Xi = ft('<li data-sonner-toast=""><!> <!></li>');

function Qi(m, t) {
  Qt(t, !0);
  const r = R => {
    var F = $(),
      at = G(F);
    {
      var lt = v => {
          var Nt = Vi(),
            o = et(Nt);
          Ht(o, () => t.loadingIcon), J(Nt), Dt(e => {
            qt(Nt, 1, e), Ct(Nt, "data-visible", i(W) === "loading")
          }, [() => {
            var e, n, s;
            return re(oe((e = i(Q)) == null ? void 0 : e.loader, (s = (n = t.toast) == null ? void 0 : n.classes) == null ? void 0 : s.loader, "sonner-loader"))
          }]), y(v, Nt)
        },
        tt = v => {
          {
            let Nt = D(() => {
                var e, n;
                return oe((e = i(Q)) == null ? void 0 : e.loader, (n = t.toast.classes) == null ? void 0 : n.loader)
              }),
              o = D(() => i(W) === "loading");
            Ni(v, {
              get class() {
                return i(Nt)
              },
              get visible() {
                return i(o)
              }
            })
          }
        };
      rt(at, v => {
        t.loadingIcon ? v(lt) : v(tt, -1)
      })
    }
    y(R, F)
  };
  let h = k(t, "cancelButtonStyle", 3, ""),
    p = k(t, "actionButtonStyle", 3, ""),
    E = k(t, "descriptionClass", 3, ""),
    x = k(t, "unstyled", 3, !1),
    B = k(t, "defaultRichColors", 3, !1);
  const H = {
    ...Wi
  };
  let S = Y(!1),
    _ = Y(!1),
    N = Y(!1),
    L = Y(!1),
    q = Y(!1),
    O = Y(0),
    K = Y(0),
    g = t.toast.duration || t.duration || Nn,
    w = Y(void 0),
    T = Y(null),
    nt = Y(null);
  const A = D(() => t.index === 0),
    X = D(() => t.index + 1 <= t.visibleToasts),
    W = D(() => t.toast.type),
    gt = D(() => t.toast.dismissable !== !1),
    It = D(() => t.toast.class || ""),
    I = D(() => t.toast.descriptionClass || ""),
    M = D(() => Ot.heights.findIndex(R => R.toastId === t.toast.id) || 0),
    ct = D(() => t.toast.closeButton ?? t.closeButton),
    Tt = D(() => t.toast.duration ?? t.duration ?? Nn);
  let Lt = null;
  const St = D(() => t.position.split("-")),
    Rt = D(() => Ot.heights.reduce((R, F, at) => at >= i(M) ? R : R + F.height, 0)),
    zt = Ri(),
    mt = D(() => t.toast.invert || t.invert),
    st = D(() => i(W) === "loading"),
    Q = D(() => ({
      ...H,
      ...t.classes
    })),
    Et = D(() => t.toast.title),
    _t = D(() => t.toast.description);
  let jt = Y(0),
    ae = Y(0);
  const P = D(() => Math.round(i(M) * Mi + i(Rt)));
  Ut(() => {
    i(Et), i(_t);
    let R;
    t.expanded || t.expandByDefault ? R = 1 : R = 1 - t.index * Ui;
    const F = Pe(() => i(w));
    if (F === void 0) return;
    F.style.setProperty("height", "auto");
    const at = F.offsetHeight,
      lt = F.getBoundingClientRect().height,
      tt = Math.round(lt / R + Number.EPSILON & 100) / 100;
    F.style.removeProperty("height");
    let v;
    Math.abs(tt - at) < 1 ? v = tt : v = at, f(K, v, !0), Pe(() => {
      Ot.setHeight({
        toastId: t.toast.id,
        height: v
      })
    })
  });

  function j() {
    f(_, !0), f(O, i(P), !0), Ot.removeHeight(t.toast.id), setTimeout(() => {
      Ot.remove(t.toast.id)
    }, Hi)
  }
  let bt;
  const dt = D(() => t.toast.promise && i(W) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function Mt() {
    f(jt, new Date().getTime(), !0), bt = setTimeout(() => {
      var R, F;
      (F = (R = t.toast).onAutoClose) == null || F.call(R, t.toast), j()
    }, g)
  }

  function ne() {
    if (i(ae) < i(jt)) {
      const R = new Date().getTime() - i(jt);
      g = g - R
    }
    f(ae, new Date().getTime(), !0)
  }
  Ut(() => {
    t.toast.updated && (clearTimeout(bt), g = i(Tt), Mt())
  }), Ut(() => (i(dt) || (t.expanded || t.interacting || zt.current ? ne() : Mt()), () => clearTimeout(bt))), de(() => {
    var F;
    f(S, !0);
    const R = (F = i(w)) == null ? void 0 : F.getBoundingClientRect().height;
    return f(K, R, !0), Ot.setHeight({
      toastId: t.toast.id,
      height: R
    }), () => {
      Ot.removeHeight(t.toast.id)
    }
  }), Ut(() => {
    t.toast.delete && Pe(() => {
      var R, F;
      j(), (F = (R = t.toast).onDismiss) == null || F.call(R, t.toast)
    })
  });
  const he = R => {
      if (i(st)) return;
      f(O, i(P), !0);
      const F = R.target;
      F.setPointerCapture(R.pointerId), F.tagName !== "BUTTON" && (f(N, !0), Lt = {
        x: R.clientX,
        y: R.clientY
      })
    },
    fe = () => {
      var v, Nt, o, e, n, s;
      if (i(L) || !i(gt)) return;
      Lt = null;
      const R = Number(((v = i(w)) == null ? void 0 : v.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        F = Number(((Nt = i(w)) == null ? void 0 : Nt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        at = new Date().getTime() - 0,
        lt = i(T) === "x" ? R : F,
        tt = Math.abs(lt) / at;
      if (Math.abs(lt) >= Bi || tt > .11) {
        f(O, i(P), !0), (e = (o = t.toast).onDismiss) == null || e.call(o, t.toast), i(T) === "x" ? f(nt, R > 0 ? "right" : "left", !0) : f(nt, F > 0 ? "down" : "up", !0), j(), f(L, !0);
        return
      } else(n = i(w)) == null || n.style.setProperty("--swipe-amount-x", "0px"), (s = i(w)) == null || s.style.setProperty("--swipe-amount-y", "0px");
      f(q, !1), f(N, !1), f(T, null)
    },
    Wt = R => {
      var Nt, o, e;
      if (!Lt || !i(gt) || (((Nt = window.getSelection()) == null ? void 0 : Nt.toString().length) ?? -1) > 0) return;
      const at = R.clientY - Lt.y,
        lt = R.clientX - Lt.x,
        tt = t.swipeDirections ?? Fi(t.position);
      !i(T) && (Math.abs(lt) > 1 || Math.abs(at) > 1) && f(T, Math.abs(lt) > Math.abs(at) ? "x" : "y", !0);
      let v = {
        x: 0,
        y: 0
      };
      if (i(T) === "y") {
        if (tt.includes("top") || tt.includes("bottom"))
          if (tt.includes("top") && at < 0 || tt.includes("bottom") && at > 0) v.y = at;
          else {
            const n = at * Ln(at);
            v.y = Math.abs(n) < Math.abs(at) ? n : at
          }
      } else if (i(T) === "x" && (tt.includes("left") || tt.includes("right")))
        if (tt.includes("left") && lt < 0 || tt.includes("right") && lt > 0) v.x = lt;
        else {
          const n = lt * Ln(lt);
          v.x = Math.abs(n) < Math.abs(lt) ? n : lt
        }(Math.abs(v.x) > 0 || Math.abs(v.y) > 0) && f(q, !0), (o = i(w)) == null || o.style.setProperty("--swipe-amount-x", `${v.x}px`), (e = i(w)) == null || e.style.setProperty("--swipe-amount-y", `${v.y}px`)
    },
    Gt = () => {
      f(N, !1), f(T, null), Lt = null
    },
    At = D(() => t.toast.icon ? t.toast.icon : i(W) === "success" ? t.successIcon : i(W) === "error" ? t.errorIcon : i(W) === "warning" ? t.warningIcon : i(W) === "info" ? t.infoIcon : i(W) === "loading" ? t.loadingIcon : null);
  var Z = Xi();
  Ct(Z, "tabindex", 0);
  let ve;
  var De = et(Z);
  {
    var xe = R => {
      var F = zi(),
        at = et(F);
      Ht(at, () => t.closeIcon ?? Xt), J(F), Dt(lt => {
        Ct(F, "aria-label", t.closeButtonAriaLabel), Ct(F, "data-disabled", i(st)), qt(F, 1, lt)
      }, [() => {
        var lt, tt, v;
        return re(oe((lt = i(Q)) == null ? void 0 : lt.closeButton, (v = (tt = t.toast) == null ? void 0 : tt.classes) == null ? void 0 : v.closeButton))
      }]), se("click", F, () => {
        var lt, tt;
        i(st) || !i(gt) || (j(), (tt = (lt = t.toast).onDismiss) == null || tt.call(lt, t.toast))
      }), y(R, F)
    };
    rt(De, R => {
      i(ct) && !t.toast.component && i(W) !== "loading" && t.closeIcon !== null && R(xe)
    })
  }
  var Te = wt(De, 2);
  {
    var pe = R => {
        const F = D(() => t.toast.component);
        var at = $(),
          lt = G(at);
        $t(lt, () => i(F), (tt, v) => {
          v(tt, ke(() => t.toast.componentProps, {
            closeToast: j
          }))
        }), y(R, at)
      },
      Se = R => {
        var F = qi(),
          at = G(F);
        {
          var lt = d => {
            var c = ji(),
              b = et(c);
            {
              var U = V => {
                var z = $(),
                  pt = G(z);
                {
                  var it = ot => {
                      var Kt = $(),
                        Ft = G(Kt);
                      $t(Ft, () => t.toast.icon, (xt, Pt) => {
                        Pt(xt, {})
                      }), y(ot, Kt)
                    },
                    ht = ot => {
                      r(ot)
                    };
                  rt(pt, ot => {
                    t.toast.icon ? ot(it) : ot(ht, -1)
                  })
                }
                y(V, z)
              };
              rt(b, V => {
                (t.toast.promise || i(W) === "loading") && V(U)
              })
            }
            var vt = wt(b, 2);
            {
              var ut = V => {
                var z = $(),
                  pt = G(z);
                {
                  var it = xt => {
                      var Pt = $(),
                        te = G(Pt);
                      $t(te, () => t.toast.icon, (jn, Gn) => {
                        Gn(jn, {})
                      }), y(xt, Pt)
                    },
                    ht = xt => {
                      var Pt = $(),
                        te = G(Pt);
                      Ht(te, () => t.successIcon ?? Xt), y(xt, Pt)
                    },
                    ot = xt => {
                      var Pt = $(),
                        te = G(Pt);
                      Ht(te, () => t.errorIcon ?? Xt), y(xt, Pt)
                    },
                    Kt = xt => {
                      var Pt = $(),
                        te = G(Pt);
                      Ht(te, () => t.warningIcon ?? Xt), y(xt, Pt)
                    },
                    Ft = xt => {
                      var Pt = $(),
                        te = G(Pt);
                      Ht(te, () => t.infoIcon ?? Xt), y(xt, Pt)
                    };
                  rt(pt, xt => {
                    t.toast.icon ? xt(it) : i(W) === "success" ? xt(ht, 1) : i(W) === "error" ? xt(ot, 2) : i(W) === "warning" ? xt(Kt, 3) : i(W) === "info" && xt(Ft, 4)
                  })
                }
                y(V, z)
              };
              rt(vt, V => {
                t.toast.type !== "loading" && V(ut)
              })
            }
            J(c), Dt(V => qt(c, 1, V), [() => {
              var V, z, pt;
              return re(oe((V = i(Q)) == null ? void 0 : V.icon, (pt = (z = t.toast) == null ? void 0 : z.classes) == null ? void 0 : pt.icon))
            }]), y(d, c)
          };
          rt(at, d => {
            (i(W) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (i(At) !== null || t.toast.icon) && d(lt)
          })
        }
        var tt = wt(at, 2),
          v = et(tt),
          Nt = et(v);
        {
          var o = d => {
            var c = $(),
              b = G(c);
            {
              var U = ut => {
                  const V = D(() => t.toast.title);
                  var z = $(),
                    pt = G(z);
                  $t(pt, () => i(V), (it, ht) => {
                    ht(it, ke(() => t.toast.componentProps))
                  }), y(ut, z)
                },
                vt = ut => {
                  var V = In();
                  Dt(() => Bt(V, t.toast.title)), y(ut, V)
                };
              rt(b, ut => {
                typeof t.toast.title != "string" ? ut(U) : ut(vt, -1)
              })
            }
            y(d, c)
          };
          rt(Nt, d => {
            t.toast.title && d(o)
          })
        }
        J(v);
        var e = wt(v, 2);
        {
          var n = d => {
            var c = Gi(),
              b = et(c);
            {
              var U = ut => {
                  const V = D(() => t.toast.description);
                  var z = $(),
                    pt = G(z);
                  $t(pt, () => i(V), (it, ht) => {
                    ht(it, ke(() => t.toast.componentProps))
                  }), y(ut, z)
                },
                vt = ut => {
                  var V = In();
                  Dt(() => Bt(V, t.toast.description)), y(ut, V)
                };
              rt(b, ut => {
                typeof t.toast.description != "string" ? ut(U) : ut(vt, -1)
              })
            }
            J(c), Dt(ut => qt(c, 1, ut), [() => {
              var ut, V;
              return re(oe(E(), i(I), (ut = i(Q)) == null ? void 0 : ut.description, (V = t.toast.classes) == null ? void 0 : V.description))
            }]), y(d, c)
          };
          rt(e, d => {
            t.toast.description && d(n)
          })
        }
        J(tt);
        var s = wt(tt, 2);
        {
          var a = d => {
            var c = $(),
              b = G(c);
            {
              var U = V => {
                  var z = $(),
                    pt = G(z);
                  $t(pt, () => t.toast.cancel, (it, ht) => {
                    ht(it, {})
                  }), y(V, z)
                },
                vt = V => {
                  var z = Ki(),
                    pt = et(z, !0);
                  J(z), Dt(it => {
                    rn(z, t.toast.cancelButtonStyle ?? h()), qt(z, 1, it), Bt(pt, t.toast.cancel.label)
                  }, [() => {
                    var it, ht, ot;
                    return re(oe((it = i(Q)) == null ? void 0 : it.cancelButton, (ot = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : ot.cancelButton))
                  }]), se("click", z, it => {
                    var ht, ot;
                    Ge(t.toast.cancel) && i(gt) && ((ot = (ht = t.toast.cancel) == null ? void 0 : ht.onClick) == null || ot.call(ht, it), j())
                  }), y(V, z)
                },
                ut = D(() => Ge(t.toast.cancel));
              rt(b, V => {
                typeof t.toast.cancel == "function" ? V(U) : i(ut) && V(vt, 1)
              })
            }
            y(d, c)
          };
          rt(s, d => {
            t.toast.cancel && d(a)
          })
        }
        var u = wt(s, 2);
        {
          var l = d => {
            var c = $(),
              b = G(c);
            {
              var U = V => {
                  var z = $(),
                    pt = G(z);
                  $t(pt, () => t.toast.action, (it, ht) => {
                    ht(it, {})
                  }), y(V, z)
                },
                vt = V => {
                  var z = Yi(),
                    pt = et(z, !0);
                  J(z), Dt(it => {
                    rn(z, t.toast.actionButtonStyle ?? p()), qt(z, 1, it), Bt(pt, t.toast.action.label)
                  }, [() => {
                    var it, ht, ot;
                    return re(oe((it = i(Q)) == null ? void 0 : it.actionButton, (ot = (ht = t.toast) == null ? void 0 : ht.classes) == null ? void 0 : ot.actionButton))
                  }]), se("click", z, it => {
                    var ht;
                    Ge(t.toast.action) && ((ht = t.toast.action) == null || ht.onClick(it), !it.defaultPrevented && j())
                  }), y(V, z)
                },
                ut = D(() => Ge(t.toast.action));
              rt(b, V => {
                typeof t.toast.action == "function" ? V(U) : i(ut) && V(vt, 1)
              })
            }
            y(d, c)
          };
          rt(u, d => {
            t.toast.action && d(l)
          })
        }
        Dt(d => qt(v, 1, d), [() => {
          var d, c, b;
          return re(oe((d = i(Q)) == null ? void 0 : d.title, (b = (c = t.toast) == null ? void 0 : c.classes) == null ? void 0 : b.title))
        }]), y(R, F)
      };
    rt(Te, R => {
      t.toast.component ? R(pe) : R(Se, -1)
    })
  }
  J(Z), nn(Z, R => f(w, R), () => i(w)), Dt((R, F, at) => {
    qt(Z, 1, R), Ct(Z, "data-rich-colors", t.toast.richColors ?? B()), Ct(Z, "data-styled", !(t.toast.component || t.toast.unstyled || x())), Ct(Z, "data-mounted", i(S)), Ct(Z, "data-promise", F), Ct(Z, "data-swiped", i(q)), Ct(Z, "data-removed", i(_)), Ct(Z, "data-visible", i(X)), Ct(Z, "data-y-position", i(St)[0]), Ct(Z, "data-x-position", i(St)[1]), Ct(Z, "data-index", t.index), Ct(Z, "data-front", i(A)), Ct(Z, "data-swiping", i(N)), Ct(Z, "data-dismissable", i(gt)), Ct(Z, "data-type", i(W)), Ct(Z, "data-invert", i(mt)), Ct(Z, "data-swipe-out", i(L)), Ct(Z, "data-swipe-direction", i(nt)), Ct(Z, "data-expanded", at), ve = rn(Z, `${t.style} ${t.toast.style}`, ve, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": Ot.toasts.length - t.index,
      "--offset": `${i(_)?i(O):i(P)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${i(K)}px`
    })
  }, [() => {
    var R, F, at, lt, tt, v;
    return re(oe(t.class, i(It), (R = i(Q)) == null ? void 0 : R.toast, (at = (F = t.toast) == null ? void 0 : F.classes) == null ? void 0 : at.toast, (lt = i(Q)) == null ? void 0 : lt[i(W)], (v = (tt = t.toast) == null ? void 0 : tt.classes) == null ? void 0 : v[i(W)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && i(S))]), se("pointermove", Z, Wt), se("pointerup", Z, fe), se("pointerdown", Z, he), tn("dragend", Z, Gt), y(m, Z), Zt()
}
en(["pointermove", "pointerup", "pointerdown", "click"]);
var Zi = je('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function Ji(m) {
  var t = Zi();
  y(m, t)
}
var $i = je('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function ts(m) {
  var t = $i();
  y(m, t)
}
var es = je('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function ns(m) {
  var t = es();
  y(m, t)
}
var is = je('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function ss(m) {
  var t = is();
  y(m, t)
}
var as = je('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function os(m) {
  var t = as();
  y(m, t)
}
const rs = 3,
  Hn = "24px",
  Un = "16px",
  ls = 4e3,
  us = 356,
  cs = 14,
  ln = "dark",
  Ke = "light";

function ds(m, t) {
  const r = {};
  return [m, t].forEach((h, p) => {
    const E = p === 1,
      x = E ? "--mobile-offset" : "--offset",
      B = E ? Un : Hn;

    function H(S) {
      ["top", "right", "bottom", "left"].forEach(_ => {
        r[`${x}-${_}`] = typeof S == "number" ? `${S}px` : S
      })
    }
    typeof h == "number" || typeof h == "string" ? H(h) : typeof h == "object" ? ["top", "right", "bottom", "left"].forEach(S => {
      const _ = h[S];
      _ === void 0 ? r[`${x}-${S}`] = B : r[`${x}-${S}`] = typeof _ == "number" ? `${_}px` : _
    }) : H(B)
  }), r
}
var hs = new Set(["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]),
  fs = ft("<ol></ol>"),
  ms = ft('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-wiukfn"><!></section>');

function gs(m, t) {
  Qt(t, !0);

  function r(P) {
    return P !== "system" ? P : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? ln : Ke
  }
  let h = k(t, "invert", 3, !1),
    p = k(t, "position", 3, "bottom-right"),
    E = k(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    x = k(t, "expand", 3, !1),
    B = k(t, "closeButton", 3, !1),
    H = k(t, "offset", 3, Hn),
    S = k(t, "mobileOffset", 3, Un),
    _ = k(t, "theme", 3, "light"),
    N = k(t, "richColors", 3, !1),
    L = k(t, "duration", 3, ls),
    q = k(t, "visibleToasts", 3, rs),
    O = k(t, "toastOptions", 19, () => ({})),
    K = k(t, "dir", 7, "auto"),
    g = k(t, "gap", 3, cs),
    w = k(t, "containerAriaLabel", 3, "Notifications"),
    T = k(t, "closeButtonAriaLabel", 3, "Close toast"),
    nt = Ee(t, hs);

  function A() {
    if (K() !== "auto") return K();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const P = document.documentElement.getAttribute("dir");
    return P === "auto" || !P ? (Pe(() => K(window.getComputedStyle(document.documentElement).direction ?? "ltr")), K()) : (Pe(() => K(P)), P)
  }
  const X = D(() => Array.from(new Set([p(), ...Ot.toasts.filter(P => P.position).map(P => P.position)].filter(Boolean))));
  let W = Y(!1),
    gt = Y(!1),
    It = Y(vn(r(_()))),
    I = Y(void 0),
    M = Y(null),
    ct = Y(!1);
  const Tt = D(() => E().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Ut(() => {
    Ot.toasts.length <= 1 && f(W, !1)
  }), Ut(() => {
    const P = Ot.toasts.filter(j => j.dismiss && !j.delete);
    if (P.length > 0) {
      const j = Ot.toasts.map(bt => P.find(Mt => Mt.id === bt.id) ? {
        ...bt,
        delete: !0
      } : bt);
      Ot.toasts = j
    }
  }), Ut(() => () => {
    i(I) && i(M) && (i(M).focus({
      preventScroll: !0
    }), f(M, null), f(ct, !1))
  }), de(() => (Ot.reset(), Oe(document, "keydown", j => {
    var dt, Mt;
    E().every(ne => j[ne] || j.code === ne) && (f(W, !0), (dt = i(I)) == null || dt.focus()), j.code === "Escape" && (document.activeElement === i(I) || (Mt = i(I)) != null && Mt.contains(document.activeElement)) && f(W, !1)
  }))), Ut(() => {
    if (_() !== "system" && f(It, _()), typeof window < "u") {
      _() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? f(It, ln) : f(It, Ke));
      const P = window.matchMedia("(prefers-color-scheme: dark)"),
        j = ({
          matches: bt
        }) => {
          f(It, bt ? ln : Ke, !0)
        };
      "addEventListener" in P ? P.addEventListener("change", j) : P.addListener(j)
    }
  });
  const Lt = P => {
      var j;
      (j = t.onblur) == null || j.call(t, P), i(ct) && !P.currentTarget.contains(P.relatedTarget) && (f(ct, !1), i(M) && (i(M).focus({
        preventScroll: !0
      }), f(M, null)))
    },
    St = P => {
      var bt;
      (bt = t.onfocus) == null || bt.call(t, P), !(P.target instanceof HTMLElement && P.target.dataset.dismissable === "false") && (i(ct) || (f(ct, !0), f(M, P.relatedTarget, !0)))
    },
    Rt = P => {
      var bt;
      (bt = t.onpointerdown) == null || bt.call(t, P), !(P.target instanceof HTMLElement && P.target.dataset.dismissable === "false") && f(gt, !0)
    },
    zt = P => {
      var j;
      (j = t.onmouseenter) == null || j.call(t, P), f(W, !0)
    },
    mt = P => {
      var j;
      (j = t.onmouseleave) == null || j.call(t, P), i(gt) || f(W, !1)
    },
    st = P => {
      var j;
      (j = t.onmousemove) == null || j.call(t, P), f(W, !0)
    },
    Q = P => {
      var j;
      (j = t.ondragend) == null || j.call(t, P), f(W, !1)
    },
    Et = P => {
      var j;
      (j = t.onpointerup) == null || j.call(t, P), f(gt, !1)
    };
  Oi.set(new $n);
  var _t = ms();
  Ct(_t, "tabindex", -1);
  var jt = et(_t);
  {
    var ae = P => {
      var j = $(),
        bt = G(j);
      qe(bt, 18, () => i(X), dt => dt, (dt, Mt, ne, he) => {
        const fe = D(() => {
            const [At, Z] = Mt.split("-");
            return {
              y: At,
              x: Z
            }
          }),
          Wt = D(() => ds(H(), S()));
        var Gt = fs();
        Ce(Gt, At => {
          var Z;
          return {
            tabindex: -1,
            dir: At,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": i(It),
            "data-y-position": i(fe).y,
            "data-x-position": i(fe).x,
            style: t.style,
            onblur: Lt,
            onfocus: St,
            onmouseenter: zt,
            onmousemove: st,
            onmouseleave: mt,
            ondragend: Q,
            onpointerdown: Rt,
            onpointerup: Et,
            ...nt,
            [yi]: {
              "--front-toast-height": `${(Z=Ot.heights[0])==null?void 0:Z.height}px`,
              "--width": `${us}px`,
              "--gap": `${g()}px`,
              "--offset-top": i(Wt)["--offset-top"],
              "--offset-right": i(Wt)["--offset-right"],
              "--offset-bottom": i(Wt)["--offset-bottom"],
              "--offset-left": i(Wt)["--offset-left"],
              "--mobile-offset-top": i(Wt)["--mobile-offset-top"],
              "--mobile-offset-right": i(Wt)["--mobile-offset-right"],
              "--mobile-offset-bottom": i(Wt)["--mobile-offset-bottom"],
              "--mobile-offset-left": i(Wt)["--mobile-offset-left"]
            }
          }
        }, [() => A()], void 0, void 0, "svelte-wiukfn"), qe(Gt, 23, () => Ot.toasts.filter(At => !At.position && i(ne) === 0 || At.position === Mt), At => At.id, (At, Z, ve, De) => {
          {
            const xe = s => {
                var a = $(),
                  u = G(a);
                {
                  var l = c => {
                      var b = $(),
                        U = G(b);
                      Ht(U, () => t.successIcon ?? Xt), y(c, b)
                    },
                    d = c => {
                      Ji(c)
                    };
                  rt(u, c => {
                    t.successIcon ? c(l) : t.successIcon !== null && c(d, 1)
                  })
                }
                y(s, a)
              },
              Te = s => {
                var a = $(),
                  u = G(a);
                {
                  var l = c => {
                      var b = $(),
                        U = G(b);
                      Ht(U, () => t.errorIcon ?? Xt), y(c, b)
                    },
                    d = c => {
                      ts(c)
                    };
                  rt(u, c => {
                    t.errorIcon ? c(l) : t.errorIcon !== null && c(d, 1)
                  })
                }
                y(s, a)
              },
              pe = s => {
                var a = $(),
                  u = G(a);
                {
                  var l = c => {
                      var b = $(),
                        U = G(b);
                      Ht(U, () => t.warningIcon ?? Xt), y(c, b)
                    },
                    d = c => {
                      ns(c)
                    };
                  rt(u, c => {
                    t.warningIcon ? c(l) : t.warningIcon !== null && c(d, 1)
                  })
                }
                y(s, a)
              },
              Se = s => {
                var a = $(),
                  u = G(a);
                {
                  var l = c => {
                      var b = $(),
                        U = G(b);
                      Ht(U, () => t.infoIcon ?? Xt), y(c, b)
                    },
                    d = c => {
                      ss(c)
                    };
                  rt(u, c => {
                    t.infoIcon ? c(l) : t.infoIcon !== null && c(d, 1)
                  })
                }
                y(s, a)
              },
              R = s => {
                var a = $(),
                  u = G(a);
                {
                  var l = c => {
                      var b = $(),
                        U = G(b);
                      Ht(U, () => t.closeIcon ?? Xt), y(c, b)
                    },
                    d = c => {
                      os(c)
                    };
                  rt(u, c => {
                    t.closeIcon ? c(l) : t.closeIcon !== null && c(d, 1)
                  })
                }
                y(s, a)
              };
            let F = D(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.duration) ?? L()
              }),
              at = D(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.class) ?? ""
              }),
              lt = D(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.descriptionClass) || ""
              }),
              tt = D(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.style) ?? ""
              }),
              v = D(() => O().classes || {}),
              Nt = D(() => O().unstyled ?? !1),
              o = D(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.cancelButtonStyle) ?? ""
              }),
              e = D(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.actionButtonStyle) ?? ""
              }),
              n = D(() => {
                var s;
                return ((s = O()) == null ? void 0 : s.closeButtonAriaLabel) ?? T()
              });
            Qi(At, {
              get index() {
                return i(ve)
              },
              get toast() {
                return i(Z)
              },
              get defaultRichColors() {
                return N()
              },
              get duration() {
                return i(F)
              },
              get class() {
                return i(at)
              },
              get descriptionClass() {
                return i(lt)
              },
              get invert() {
                return h()
              },
              get visibleToasts() {
                return q()
              },
              get closeButton() {
                return B()
              },
              get interacting() {
                return i(gt)
              },
              get position() {
                return Mt
              },
              get style() {
                return i(tt)
              },
              get classes() {
                return i(v)
              },
              get unstyled() {
                return i(Nt)
              },
              get cancelButtonStyle() {
                return i(o)
              },
              get actionButtonStyle() {
                return i(e)
              },
              get closeButtonAriaLabel() {
                return i(n)
              },
              get expandByDefault() {
                return x()
              },
              get expanded() {
                return i(W)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: xe,
              errorIcon: Te,
              warningIcon: pe,
              infoIcon: Se,
              closeIcon: R,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), J(Gt), nn(Gt, At => f(I, At), () => i(I)), Dt(() => Gt.dir = Gt.dir), y(dt, Gt)
      }), y(P, j)
    };
    rt(jt, P => {
      Ot.toasts.length > 0 && P(ae)
    })
  }
  J(_t), Dt(() => Ct(_t, "aria-label", `${w()??""} ${i(Tt)??""}`)), y(m, _t), Zt()
}
let Ne = Y(!1);
var vs = ft("<div></div>"),
  ps = ft('<button type="button" class="btn">Retry</button>'),
  ys = ft('<span class="loading loading-spinner loading-lg"></span>'),
  Cs = ft('<div class="flex h-16 items-center justify-center"><!></div>');

function _s(m, t) {
  Qt(t, !0);
  let r = k(t, "theme", 19, () => cn.theme === "dark" ? "dark" : "light"),
    h = k(t, "size", 3, "normal");
  const p = D(() => ({
      sitekey: t.siteKey,
      theme: r(),
      size: h(),
      ...t.challengeContainer ? {
        "challenge-container": t.challengeContainer
      } : {},
      callback: g => {
        var w;
        return (w = t.callback) == null ? void 0 : w.call(t, g)
      },
      "open-callback": () => {
        var g;
        return (g = t.openCallback) == null ? void 0 : g.call(t)
      },
      "close-callback": () => {
        var g;
        return (g = t.closeCallback) == null ? void 0 : g.call(t)
      },
      "error-callback": g => {
        var w;
        return (w = t.errorCallback) == null ? void 0 : w.call(t, g)
      },
      "expired-callback": () => {
        var g;
        return (g = t.expiredCallback) == null ? void 0 : g.call(t)
      }
    })),
    E = (g, w) => {
      var nt;
      let T = window.hcaptcha.render(g, w);
      return (nt = t.onload) == null || nt.call(t), {
        destroy() {
          var A;
          (A = window.hcaptcha) == null || A.remove(T)
        },
        update(A) {
          var X;
          (X = window.hcaptcha) == null || X.remove(T), T = window.hcaptcha.render(g, A)
        }
      }
    };
  let x = Y(!1),
    B = Y(!1),
    H;

  function S() {
    const g = document.createElement("script");
    g.type = "text/javascript";
    const w = new URL("https://js.hcaptcha.com/1/api.js");
    w.searchParams.set("render", "explicit"), g.src = w.toString(), g.async = !0, g.defer = !0, g.addEventListener("load", () => f(Ne, !0), {
      once: !0
    }), document.head.appendChild(g)
  }

  function _() {
    f(B, !1), H && clearTimeout(H), H = setTimeout(() => {
      (!i(Ne) || !i(x)) && f(B, !0)
    }, 5e3)
  }

  function N() {
    document.querySelectorAll('script[src*="js.hcaptcha.com"]').forEach(g => g.remove()), f(Ne, !1), S(), _()
  }
  de(() => (f(x, !0), i(Ne) || S(), _(), () => {
    f(x, !1), H && clearTimeout(H)
  }));
  var L = $(),
    q = G(L);
  {
    var O = g => {
        var w = vs();
        Mn(w, (T, nt) => E == null ? void 0 : E(T, nt), () => i(p)), y(g, w)
      },
      K = g => {
        var w = Cs(),
          T = et(w);
        {
          var nt = X => {
              var W = ps();
              se("click", W, N), y(X, W)
            },
            A = X => {
              var W = ys();
              y(X, W)
            };
          rt(T, X => {
            i(B) ? X(nt) : X(A, -1)
          })
        }
        J(w), y(g, w)
      };
    rt(q, g => {
      i(Ne) && i(x) ? g(O) : g(K, -1)
    })
  }
  y(m, L), Zt()
}
en(["click"]);

function pn(...m) {
  return Ii(Ci(m))
}
var bs = new Set(["$$slots", "$$events", "$$legacy", "ref", "class", "children"]),
  ws = ft("<div><!></div>");

function Is(m, t) {
  Qt(t, !0);
  let r = k(t, "ref", 15, null),
    h = Ee(t, bs);
  var p = ws();
  Ce(p, x => ({
    class: x,
    ...h
  }), [() => pn("flex items-center", t.class)]);
  var E = et(p);
  Ht(E, () => t.children ?? Xt), J(p), nn(p, x => r(x), () => r()), y(m, p), Zt()
}
var Be, Xe;
class Es {
  constructor(t, r) {
    yt(this, Be, () => {});
    yt(this, Xe, D(() => C(this, Be).call(this)));
    let h;
    r !== void 0 && (h = r), me(this, Be, () => {
      try {
        return h
      } finally {
        h = t()
      }
    })
  }
  get current() {
    return i(C(this, Xe))
  }
}
Be = new WeakMap, Xe = new WeakMap;
const Ds = 18,
  Wn = 40,
  xs = `${Wn}px`,
  Ts = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");

function Ss({
  containerRef: m,
  inputRef: t,
  pushPasswordManagerStrategy: r,
  isFocused: h,
  domContext: p
}) {
  let E = Y(!1),
    x = Y(!1),
    B = Y(!1);

  function H() {
    const _ = r.current;
    return _ === "none" ? !1 : _ === "increase-width" && i(E) && i(x)
  }

  function S() {
    const _ = m.current,
      N = t.current;
    if (!_ || !N || i(B) || r.current === "none") return;
    const L = _,
      q = L.getBoundingClientRect().left + L.offsetWidth,
      O = L.getBoundingClientRect().top + L.offsetHeight / 2,
      K = q - Ds,
      g = O;
    p.querySelectorAll(Ts).length === 0 && p.getDocument().elementFromPoint(K, g) === _ || (f(E, !0), f(B, !0))
  }
  return Ut(() => {
    const _ = m.current;
    if (!_ || r.current === "none") return;

    function N() {
      const O = ri(_).innerWidth - _.getBoundingClientRect().right;
      f(x, O >= Wn)
    }
    N();
    const L = setInterval(N, 1e3);
    return () => {
      clearInterval(L)
    }
  }), Ut(() => {
    const _ = h.current || p.getActiveElement() === t.current;
    if (r.current === "none" || !_) return;
    const N = setTimeout(S, 0),
      L = setTimeout(S, 2e3),
      q = setTimeout(S, 5e3),
      O = setTimeout(() => {
        f(B, !0)
      }, 6e3);
    return () => {
      clearTimeout(N), clearTimeout(L), clearTimeout(q), clearTimeout(O)
    }
  }), {
    get hasPwmBadge() {
      return i(E)
    },
    get willPushPwmBadge() {
      return H()
    },
    PWM_BADGE_SPACE_WIDTH: xs
  }
}
const Fn = hi({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  Ns = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var be, ue, Yt, Jt, we, ie, ce, ge, Ie, Qe, He, Ue, Ze, Je, Vn, We, Fe, $e, Ve;
const yn = class yn {
  constructor(t) {
    yt(this, Je);
    Vt(this, "opts");
    Vt(this, "attachment");
    Vt(this, "inputAttachment");
    yt(this, be, Y(!1));
    yt(this, ue, li(!1));
    yt(this, Yt, Y(null));
    yt(this, Jt, Y(null));
    yt(this, we, new Es(() => this.opts.value.current ?? ""));
    yt(this, ie, D(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    yt(this, ce, Y(vn({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    yt(this, ge);
    yt(this, Ie);
    Vt(this, "domContext");
    Vt(this, "onkeydown", t => {
      const r = t.key;
      Ns.includes(r) || t.ctrlKey || t.metaKey || r && i(C(this, ie)) && !i(C(this, ie)).test(r) && t.preventDefault()
    });
    yt(this, Qe, D(() => ({
      position: "relative",
      cursor: this.opts.disabled.current ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })));
    yt(this, He, D(() => ({
      id: this.opts.id.current,
      [Fn.root]: "",
      style: i(C(this, Qe)),
      ...this.attachment
    })));
    yt(this, Ue, D(() => ({
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }
    })));
    yt(this, Ze, D(() => ({
      position: "absolute",
      inset: 0,
      width: C(this, ge).willPushPwmBadge ? `calc(100% + ${C(this,ge).PWM_BADGE_SPACE_WIDTH})` : "100%",
      clipPath: C(this, ge).willPushPwmBadge ? `inset(0 ${C(this,ge).PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
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
    yt(this, We, () => {
      var K;
      const t = this.opts.inputRef.current,
        r = this.opts.ref.current;
      if (!t || !r) return;
      if (this.domContext.getActiveElement() !== t) {
        f(C(this, Yt), null), f(C(this, Jt), null);
        return
      }
      const h = t.selectionStart,
        p = t.selectionEnd,
        E = t.selectionDirection ?? "none",
        x = t.maxLength,
        B = t.value,
        H = i(C(this, ce)).prev;
      let S = -1,
        _ = -1,
        N;
      if (B.length !== 0 && h !== null && p !== null) {
        const g = h === p,
          w = h === B.length && B.length < x;
        if (g && !w) {
          const T = h;
          if (T === 0) S = 0, _ = 1, N = "forward";
          else if (T === x) S = T - 1, _ = T, N = "backward";
          else if (x > 1 && B.length > 1) {
            let nt = 0;
            if (H[0] !== null && H[1] !== null) {
              N = T < H[1] ? "backward" : "forward";
              const A = H[0] === H[1] && H[0] < x;
              N === "backward" && !A && (nt = -1)
            }
            S = nt + T, _ = nt + T + 1
          }
        }
        S !== -1 && _ !== -1 && S !== _ && ((K = this.opts.inputRef.current) == null || K.setSelectionRange(S, _, N))
      }
      const L = S !== -1 ? S : h,
        q = _ !== -1 ? _ : p,
        O = N ?? E;
      f(C(this, Yt), L, !0), f(C(this, Jt), q, !0), i(C(this, ce)).prev = [L, q, O]
    });
    Vt(this, "oninput", t => {
      const r = t.currentTarget.value.slice(0, this.opts.maxLength.current);
      if (r.length > 0 && i(C(this, ie)) && !i(C(this, ie)).test(r)) {
        t.preventDefault();
        return
      }
      typeof C(this, we).current == "string" && r.length < C(this, we).current.length && this.domContext.getDocument().dispatchEvent(new Event("selectionchange")), this.opts.value.current = r
    });
    Vt(this, "onfocus", t => {
      const r = this.opts.inputRef.current;
      if (r) {
        const h = Math.min(r.value.length, this.opts.maxLength.current - 1),
          p = r.value.length;
        r.setSelectionRange(h, p), f(C(this, Yt), h, !0), f(C(this, Jt), p, !0)
      }
      C(this, ue).current = !0
    });
    Vt(this, "onpaste", t => {
      var _, N, L, q;
      const r = this.opts.inputRef.current;
      if (!r) return;
      const h = O => {
          const K = r.selectionStart === null ? void 0 : r.selectionStart,
            g = r.selectionEnd === null ? void 0 : r.selectionEnd,
            w = K !== g,
            T = this.opts.value.current;
          return (w ? T.slice(0, K) + O + T.slice(g) : T.slice(0, K) + O + T.slice(K)).slice(0, this.opts.maxLength.current)
        },
        p = O => O.length > 0 && i(C(this, ie)) && !i(C(this, ie)).test(O);
      if (!((_ = this.opts.pasteTransformer) != null && _.current) && (!C(this, Ie).isIOS || !t.clipboardData || !r)) {
        const O = h((N = t.clipboardData) == null ? void 0 : N.getData("text/plain"));
        p(O) && t.preventDefault();
        return
      }
      const E = ((L = t.clipboardData) == null ? void 0 : L.getData("text/plain")) ?? "",
        x = (q = this.opts.pasteTransformer) != null && q.current ? this.opts.pasteTransformer.current(E) : E;
      t.preventDefault();
      const B = h(x);
      if (p(B)) return;
      r.value = B, this.opts.value.current = B;
      const H = Math.min(B.length, this.opts.maxLength.current - 1),
        S = B.length;
      r.setSelectionRange(H, S), f(C(this, Yt), H, !0), f(C(this, Jt), S, !0)
    });
    Vt(this, "onmouseover", t => {
      f(C(this, be), !0)
    });
    Vt(this, "onmouseleave", t => {
      f(C(this, be), !1)
    });
    Vt(this, "onblur", t => {
      if (i(C(this, ce)).willSyntheticBlur) {
        i(C(this, ce)).willSyntheticBlur = !1;
        return
      }
      C(this, ue).current = !1
    });
    yt(this, Fe, D(() => {
      var t;
      return {
        id: this.opts.inputId.current,
        style: i(C(this, Ze)),
        autocomplete: this.opts.autocomplete.current || "one-time-code",
        "data-pin-input-input": "",
        "data-pin-input-input-mss": i(C(this, Yt)),
        "data-pin-input-input-mse": i(C(this, Jt)),
        inputmode: this.opts.inputmode.current,
        pattern: (t = i(C(this, ie))) == null ? void 0 : t.source,
        maxlength: this.opts.maxLength.current,
        value: this.opts.value.current,
        disabled: di(this.opts.disabled.current),
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
    yt(this, $e, D(() => Array.from({
      length: this.opts.maxLength.current
    }).map((t, r) => {
      const h = C(this, ue).current && i(C(this, Yt)) !== null && i(C(this, Jt)) !== null && (i(C(this, Yt)) === i(C(this, Jt)) && r === i(C(this, Yt)) || r >= i(C(this, Yt)) && r < i(C(this, Jt))),
        p = this.opts.value.current[r] !== void 0 ? this.opts.value.current[r] : null;
      return {
        char: p,
        isActive: h,
        hasFakeCaret: h && p === null
      }
    })));
    yt(this, Ve, D(() => ({
      cells: i(C(this, $e)),
      isFocused: C(this, ue).current,
      isHovering: i(C(this, be))
    })));
    var r;
    this.opts = t, this.attachment = hn(this.opts.ref), this.inputAttachment = hn(this.opts.inputRef), this.domContext = new ui(t.ref), me(this, Ie, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((r = window == null ? void 0 : window.CSS) == null ? void 0 : r.supports("-webkit-touch-callout", "none"))
    }), me(this, ge, Ss({
      containerRef: this.opts.ref,
      inputRef: this.opts.inputRef,
      isFocused: C(this, ue),
      pushPasswordManagerStrategy: this.opts.pushPasswordManagerStrategy,
      domContext: this.domContext
    })), de(() => {
      const h = this.opts.inputRef.current,
        p = this.opts.ref.current;
      if (!h || !p) return;
      C(this, Ie).value.current !== h.value && (this.opts.value.current = h.value), i(C(this, ce)).prev = [h.selectionStart, h.selectionEnd, h.selectionDirection ?? "none"];
      const E = Oe(this.domContext.getDocument(), "selectionchange", C(this, We), {
        capture: !0
      });
      C(this, We).call(this), this.domContext.getActiveElement() === h && (C(this, ue).current = !0), this.domContext.getElementById("pin-input-style") || bn(this, Je, Vn).call(this);
      const x = () => {
        p && p.style.setProperty("--bits-pin-input-root-height", `${h.clientHeight}px`)
      };
      x();
      const B = new ResizeObserver(x);
      return B.observe(h), () => {
        E(), B.disconnect()
      }
    }), ci([() => this.opts.value.current, () => this.opts.inputRef.current], () => {
      Ls(() => {
        const h = this.opts.inputRef.current;
        if (!h) return;
        h.dispatchEvent(new Event("input"));
        const p = h.selectionStart,
          E = h.selectionEnd,
          x = h.selectionDirection ?? "none";
        p !== null && E !== null && (f(C(this, Yt), p, !0), f(C(this, Jt), E, !0), i(C(this, ce)).prev = [p, E, x])
      }, this.domContext)
    }), Ut(() => {
      const h = this.opts.value.current,
        p = C(this, we).current,
        E = this.opts.maxLength.current,
        x = this.opts.onComplete.current;
      p !== void 0 && h !== p && p.length < E && h.length === E && x(h)
    })
  }
  static create(t) {
    return new yn(t)
  }
  get rootProps() {
    return i(C(this, He))
  }
  set rootProps(t) {
    f(C(this, He), t)
  }
  get inputWrapperProps() {
    return i(C(this, Ue))
  }
  set inputWrapperProps(t) {
    f(C(this, Ue), t)
  }
  get inputProps() {
    return i(C(this, Fe))
  }
  set inputProps(t) {
    f(C(this, Fe), t)
  }
  get snippetProps() {
    return i(C(this, Ve))
  }
  set snippetProps(t) {
    f(C(this, Ve), t)
  }
};
be = new WeakMap, ue = new WeakMap, Yt = new WeakMap, Jt = new WeakMap, we = new WeakMap, ie = new WeakMap, ce = new WeakMap, ge = new WeakMap, Ie = new WeakMap, Qe = new WeakMap, He = new WeakMap, Ue = new WeakMap, Ze = new WeakMap, Je = new WeakSet, Vn = function() {
  const t = this.domContext.getDocument(),
    r = t.createElement("style");
  if (r.id = "pin-input-style", t.head.appendChild(r), r.sheet) {
    const h = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
    Le(r.sheet, "[data-pin-input-input]::selection { background: transparent !important; color: transparent !important; }"), Le(r.sheet, `[data-pin-input-input]:autofill { ${h} }`), Le(r.sheet, `[data-pin-input-input]:-webkit-autofill { ${h} }`), Le(r.sheet, "@supports (-webkit-touch-callout: none) { [data-pin-input-input] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Le(r.sheet, "[data-pin-input-input] + * { pointer-events: all !important; }")
  }
}, We = new WeakMap, Fe = new WeakMap, $e = new WeakMap, Ve = new WeakMap;
let mn = yn;
var ze;
const Cn = class Cn {
  constructor(t) {
    Vt(this, "opts");
    Vt(this, "attachment");
    yt(this, ze, D(() => ({
      id: this.opts.id.current,
      [Fn.cell]: "",
      "data-active": this.opts.cell.current.isActive ? "" : void 0,
      "data-inactive": this.opts.cell.current.isActive ? void 0 : "",
      ...this.attachment
    })));
    this.opts = t, this.attachment = hn(this.opts.ref)
  }
  static create(t) {
    return new Cn(t)
  }
  get props() {
    return i(C(this, ze))
  }
  set props(t) {
    f(C(this, ze), t)
  }
};
ze = new WeakMap;
let gn = Cn;

function Ls(m, t) {
  const r = t.setTimeout(m, 0),
    h = t.setTimeout(m, 10),
    p = t.setTimeout(m, 50);
  return [r, h, p]
}

function Le(m, t) {
  try {
    m.insertRule(t)
  } catch {
    console.error("pin input could not insert CSS rule:", t)
  }
}
var As = new Set(["$$slots", "$$events", "$$legacy", "id", "inputId", "ref", "inputRef", "maxlength", "textalign", "pattern", "inputmode", "onComplete", "pushPasswordManagerStrategy", "class", "children", "autocomplete", "disabled", "value", "onValueChange", "pasteTransformer"]),
  Ps = ft("<div><!> <div><input/></div></div>");

function ks(m, t) {
  const r = On();
  Qt(t, !0);
  let h = k(t, "id", 19, () => fn(r)),
    p = k(t, "inputId", 19, () => `${fn(r)}-input`),
    E = k(t, "ref", 15, null),
    x = k(t, "inputRef", 15, null),
    B = k(t, "maxlength", 3, 6),
    H = k(t, "textalign", 3, "left"),
    S = k(t, "inputmode", 3, "numeric"),
    _ = k(t, "onComplete", 3, Sn),
    N = k(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    L = k(t, "class", 3, ""),
    q = k(t, "autocomplete", 3, "one-time-code"),
    O = k(t, "disabled", 3, !1),
    K = k(t, "value", 15, ""),
    g = k(t, "onValueChange", 3, Sn),
    w = Ee(t, As);
  const T = mn.create({
      id: kt(() => h()),
      ref: kt(() => E(), M => E(M)),
      inputRef: kt(() => x(), M => x(M)),
      inputId: kt(() => p()),
      autocomplete: kt(() => q()),
      maxLength: kt(() => B()),
      textAlign: kt(() => H()),
      disabled: kt(() => O()),
      inputmode: kt(() => S()),
      pattern: kt(() => t.pattern),
      onComplete: kt(() => _()),
      value: kt(() => K(), M => {
        K(M), g()(M)
      }),
      pushPasswordManagerStrategy: kt(() => N()),
      pasteTransformer: kt(() => t.pasteTransformer)
    }),
    nt = D(() => Ye(w, T.inputProps)),
    A = D(() => Ye(T.rootProps, {
      class: L()
    })),
    X = D(() => Ye(T.inputWrapperProps, {}));
  var W = Ps();
  Ce(W, () => ({
    ...i(A)
  }));
  var gt = et(W);
  Ht(gt, () => t.children ?? Xt, () => T.snippetProps);
  var It = wt(gt, 2);
  Ce(It, () => ({
    ...i(X)
  }));
  var I = et(It);
  Ce(I, () => ({
    ...i(nt)
  }), void 0, void 0, void 0, void 0, !0), J(It), J(W), y(m, W), Zt()
}
var Os = new Set(["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]),
  Rs = ft("<div><!></div>");

function Ms(m, t) {
  const r = On();
  Qt(t, !0);
  let h = k(t, "id", 19, () => fn(r)),
    p = k(t, "ref", 15, null),
    E = Ee(t, Os);
  const x = gn.create({
      id: kt(() => h()),
      ref: kt(() => p(), L => p(L)),
      cell: kt(() => t.cell)
    }),
    B = D(() => Ye(E, x.props));
  var H = $(),
    S = G(H);
  {
    var _ = L => {
        var q = $(),
          O = G(q);
        Ht(O, () => t.child, () => ({
          props: i(B)
        })), y(L, q)
      },
      N = L => {
        var q = Rs();
        Ce(q, () => ({
          ...i(B)
        }));
        var O = et(q);
        Ht(O, () => t.children ?? Xt), J(q), y(L, q)
      };
    rt(S, L => {
      t.child ? L(_) : L(N, -1)
    })
  }
  y(m, H), Zt()
}
var Bs = new Set(["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]),
  Hs = ft('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  Us = ft(" <!>", 1);

function Ws(m, t) {
  Qt(t, !0);
  let r = k(t, "ref", 15, null),
    h = Ee(t, Bs);
  var p = $(),
    E = G(p);
  {
    let x = D(() => pn("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    $t(E, () => Ms, (B, H) => {
      H(B, ke({
        get cell() {
          return t.cell
        },
        get class() {
          return i(x)
        }
      }, () => h, {
        get ref() {
          return r()
        },
        set ref(S) {
          r(S)
        },
        children: (S, _) => {
          Rn();
          var N = Us(),
            L = G(N),
            q = wt(L);
          {
            var O = K => {
              var g = Hs();
              y(K, g)
            };
            rt(q, K => {
              t.cell.hasFakeCaret && K(O)
            })
          }
          Dt(() => Bt(L, `${t.cell.char??""} `)), y(S, N)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  y(m, p), Zt()
}
var Fs = new Set(["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);

function Vs(m, t) {
  Qt(t, !0);
  let r = k(t, "ref", 15, null),
    h = k(t, "value", 15, ""),
    p = Ee(t, Fs);
  var E = $(),
    x = G(E);
  {
    let B = D(() => pn("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    $t(x, () => ks, (H, S) => {
      S(H, ke({
        get class() {
          return i(B)
        }
      }, () => p, {
        get ref() {
          return r()
        },
        set ref(_) {
          r(_)
        },
        get value() {
          return h()
        },
        set value(_) {
          h(_)
        }
      }))
    })
  }
  y(m, E), Zt()
}

function zs(m) {
  return m.closest("dialog") ?? document.body
}
var un = {
    exports: {}
  },
  An;

function js() {
  return An || (An = 1, (function(m) {
    (function(t) {
      m.exports ? m.exports = t() : window.intlTelInput = t()
    })(() => {
      var t = (() => {
        var r = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          p = Object.getOwnPropertyNames,
          E = Object.prototype.hasOwnProperty,
          x = (o, e) => {
            for (var n in e) r(o, n, {
              get: e[n],
              enumerable: !0
            })
          },
          B = (o, e, n, s) => {
            if (e && typeof e == "object" || typeof e == "function")
              for (let a of p(e)) !E.call(o, a) && a !== n && r(o, a, {
                get: () => e[a],
                enumerable: !(s = h(e, a)) || s.enumerable
              });
            return o
          },
          H = o => B(r({}, "__esModule", {
            value: !0
          }), o),
          S = {};
        x(S, {
          Iti: () => at,
          default: () => Nt
        });
        var _ = [
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
          N = [];
        for (const o of _) N.push({
          name: "",
          iso2: o[0],
          dialCode: o[1],
          priority: o[2] || 0,
          areaCodes: o[3] || null,
          nodeById: {},
          nationalPrefix: o[4] || null,
          normalisedName: "",
          initials: "",
          dialCodePlus: ""
        });
        var L = N,
          q = {
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
          O = q,
          K = {
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
          g = K,
          w = {
            ...O,
            ...g
          },
          T = w,
          nt = {
            OPEN_COUNTRY_DROPDOWN: "open:countrydropdown",
            CLOSE_COUNTRY_DROPDOWN: "close:countrydropdown",
            COUNTRY_CHANGE: "countrychange",
            INPUT: "input"
          },
          A = {
            HIDE: "iti__hide",
            V_HIDE: "iti__v-hide",
            ARROW_UP: "iti__arrow--up",
            GLOBE: "iti__globe",
            FLAG: "iti__flag",
            COUNTRY_ITEM: "iti__country",
            HIGHLIGHT: "iti__highlight"
          },
          X = {
            ARROW_UP: "ArrowUp",
            ARROW_DOWN: "ArrowDown",
            SPACE: " ",
            ENTER: "Enter",
            ESC: "Escape",
            TAB: "Tab"
          },
          W = {
            PASTE: "insertFromPaste",
            DELETE_FWD: "deleteContentForward"
          },
          gt = {
            ALPHA_UNICODE: new RegExp("\\p{L}", "u"),
            NON_PLUS_NUMERIC: /[^+0-9]/,
            NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g,
            HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/
          },
          It = {
            HIDDEN_SEARCH_RESET_MS: 1e3
          },
          I = {
            UNKNOWN_NUMBER_TYPE: -99,
            UNKNOWN_VALIDATION_ERROR: -99
          },
          M = {
            SANE_SELECTED_WITH_DIAL_WIDTH: 78,
            SANE_SELECTED_NO_DIAL_WIDTH: 42,
            INPUT_PADDING_EXTRA_LEFT: 6
          },
          ct = {
            NANP: "1"
          },
          Tt = {
            DIAL_CODE: "44",
            MOBILE_PREFIX: "7",
            MOBILE_CORE_LENGTH: 10
          },
          Lt = {
            ISO2: "us"
          },
          St = {
            AGGRESSIVE: "aggressive",
            POLITE: "polite"
          },
          Rt = {
            AUTO: "auto"
          },
          zt = {
            COUNTRY_CODE: "countryCode",
            DIAL_CODE: "dialCode"
          },
          mt = {
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
          st = o => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia(o).matches,
          Q = () => {
            if (typeof navigator < "u" && typeof window < "u") {
              const o = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                e = st("(max-width: 500px)"),
                n = st("(max-height: 600px)"),
                s = st("(pointer: coarse)");
              return o || e || s && n
            }
            return !1
          },
          Et = {
            allowPhonewords: !1,
            allowDropdown: !0,
            autoPlaceholder: St.POLITE,
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
            useFullscreenPopup: Q(),
            validationNumberTypes: ["MOBILE"]
          },
          _t = (o, e) => {
            o.useFullscreenPopup && (o.fixDropdownWidth = !1), o.onlyCountries.length === 1 && (o.initialCountry = o.onlyCountries[0]), o.separateDialCode && (o.nationalMode = !1), o.allowDropdown && !o.showFlags && !o.separateDialCode && (o.nationalMode = !1), o.useFullscreenPopup && !o.dropdownContainer && (o.dropdownContainer = document.body), o.i18n = {
              ...e,
              ...o.i18n
            }
          },
          jt = o => o.replace(/\D/g, ""),
          ae = (o = "") => o.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase(),
          P = (o, e) => {
            const n = ae(e),
              s = [],
              a = [],
              u = [],
              l = [],
              d = [],
              c = [];
            for (const U of o) U.iso2 === n ? s.push(U) : U.normalisedName.startsWith(n) ? a.push(U) : U.normalisedName.includes(n) ? u.push(U) : n === U.dialCode || n === U.dialCodePlus ? l.push(U) : U.dialCodePlus.includes(n) ? d.push(U) : U.initials.includes(n) && c.push(U);
            const b = (U, vt) => U.priority - vt.priority;
            return [...s.sort(b), ...a.sort(b), ...u.sort(b), ...l.sort(b), ...d.sort(b), ...c.sort(b)]
          },
          j = (o, e) => {
            const n = e.toLowerCase();
            for (const s of o)
              if (s.name.toLowerCase().startsWith(n)) return s;
            return null
          },
          bt = o => Object.keys(o).filter(e => !!o[e]).join(" "),
          dt = (o, e, n) => {
            const s = document.createElement(o);
            return e && Object.entries(e).forEach(([a, u]) => s.setAttribute(a, u)), n && n.appendChild(s), s
          },
          Mt = () => `
  <svg class="iti__search-icon-svg" width="14" height="14" viewBox="0 0 24 24" focusable="false" ${mt.HIDDEN}="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>`,
          ne = o => {
            const e = `iti-${o}-clear-mask`;
            return `
    <svg class="iti__search-clear-svg" width="12" height="12" viewBox="0 0 16 16" ${mt.HIDDEN}="true" focusable="false">
      <mask id="${e}" maskUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="white" />
        <path d="M5.2 5.2 L10.8 10.8 M10.8 5.2 L5.2 10.8" stroke="black" stroke-linecap="round" class="iti__search-clear-x" />
      </mask>
      <circle cx="8" cy="8" r="8" class="iti__search-clear-bg" mask="url(#${e})" />
    </svg>`
          },
          he = class {
            constructor(o, e, n) {
              this.highlightedItem = null, this.selectedItem = null, o.dataset.intlTelInputId = n.toString(), this.telInput = o, this.options = e, this.id = n, this.hadInitialPlaceholder = !!o.getAttribute("placeholder"), this.isRTL = !!this.telInput.closest("[dir=rtl]"), this.options.separateDialCode && (this.originalPaddingLeft = this.telInput.style.paddingLeft)
            }
            generateMarkup(o) {
              this.countries = o, this._prepareTelInput();
              const e = this._createWrapperAndInsert();
              this._maybeBuildCountryContainer(e), e.appendChild(this.telInput), this._maybeUpdateInputPaddingAndReveal(), this._maybeBuildHiddenInputs(e)
            }
            _prepareTelInput() {
              var o;
              this.telInput.classList.add("iti__tel-input"), !this.telInput.hasAttribute("autocomplete") && !((o = this.telInput.form) != null && o.hasAttribute("autocomplete")) && this.telInput.setAttribute("autocomplete", "off")
            }
            _createWrapperAndInsert() {
              const {
                allowDropdown: o,
                showFlags: e,
                containerClass: n,
                useFullscreenPopup: s
              } = this.options, a = bt({
                iti: !0,
                "iti--allow-dropdown": o,
                "iti--show-flags": e,
                "iti--inline-dropdown": !s,
                [n]: !!n
              }), u = dt("div", {
                class: a
              });
              return this.isRTL && u.setAttribute("dir", "ltr"), this.telInput.before(u), u
            }
            _maybeBuildCountryContainer(o) {
              const {
                allowDropdown: e,
                separateDialCode: n,
                showFlags: s
              } = this.options;
              if (e || s || n) {
                this.countryContainer = dt("div", {
                  class: `iti__country-container ${A.V_HIDE}`
                }, o), e ? (this.selectedCountry = dt("button", {
                  type: "button",
                  class: "iti__selected-country",
                  [mt.EXPANDED]: "false",
                  [mt.LABEL]: this.options.i18n.noCountrySelected,
                  [mt.HASPOPUP]: "dialog",
                  [mt.CONTROLS]: `iti-${this.id}__dropdown-content`
                }, this.countryContainer), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = dt("div", {
                  class: "iti__selected-country"
                }, this.countryContainer);
                const a = dt("div", {
                  class: "iti__selected-country-primary"
                }, this.selectedCountry);
                this.selectedCountryInner = dt("div", {
                  class: A.FLAG
                }, a), e && (this.dropdownArrow = dt("div", {
                  class: "iti__arrow",
                  [mt.HIDDEN]: "true"
                }, a)), n && (this.selectedDialCode = dt("div", {
                  class: "iti__selected-dial-code"
                }, this.selectedCountry)), e && this._buildDropdownContent()
              }
            }
            _buildDropdownContent() {
              const {
                fixDropdownWidth: o,
                useFullscreenPopup: e,
                countrySearch: n,
                i18n: s,
                dropdownContainer: a,
                containerClass: u
              } = this.options, l = o ? "" : "iti--flexible-dropdown-width";
              if (this.dropdownContent = dt("div", {
                  id: `iti-${this.id}__dropdown-content`,
                  class: `iti__dropdown-content ${A.HIDE} ${l}`,
                  role: "dialog",
                  [mt.MODAL]: "true"
                }), this.isRTL && this.dropdownContent.setAttribute("dir", "rtl"), n && this._buildSearchUI(), this.countryList = dt("ul", {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  [mt.LABEL]: s.countryListAriaLabel
                }, this.dropdownContent), this._appendListItems(), n && this.updateSearchResultsA11yText(), a) {
                const d = bt({
                  iti: !0,
                  "iti--container": !0,
                  "iti--fullscreen-popup": e,
                  "iti--inline-dropdown": !e,
                  [u]: !!u
                });
                this.dropdown = dt("div", {
                  class: d
                }), this.dropdown.appendChild(this.dropdownContent)
              } else this.countryContainer.appendChild(this.dropdownContent)
            }
            _buildSearchUI() {
              const {
                i18n: o
              } = this.options, e = dt("div", {
                class: "iti__search-input-wrapper"
              }, this.dropdownContent);
              this.searchIcon = dt("span", {
                class: "iti__search-icon",
                [mt.HIDDEN]: "true"
              }, e), this.searchIcon.innerHTML = Mt(), this.searchInput = dt("input", {
                id: `iti-${this.id}__search-input`,
                type: "search",
                class: "iti__search-input",
                placeholder: o.searchPlaceholder,
                role: "combobox",
                [mt.EXPANDED]: "true",
                [mt.LABEL]: o.searchPlaceholder,
                [mt.CONTROLS]: `iti-${this.id}__country-listbox`,
                [mt.AUTOCOMPLETE]: "list",
                autocomplete: "off"
              }, e), this.searchClearButton = dt("button", {
                type: "button",
                class: `iti__search-clear ${A.HIDE}`,
                [mt.LABEL]: o.clearSearchAriaLabel,
                tabindex: "-1"
              }, e), this.searchClearButton.innerHTML = ne(this.id), this.searchResultsA11yText = dt("span", {
                class: "iti__a11y-text"
              }, this.dropdownContent), this.searchNoResults = dt("div", {
                class: `iti__no-results ${A.HIDE}`,
                [mt.HIDDEN]: "true"
              }, this.dropdownContent), this.searchNoResults.textContent = o.zeroSearchResults
            }
            _maybeUpdateInputPaddingAndReveal() {
              this.countryContainer && (this.updateInputPadding(), this.countryContainer.classList.remove(A.V_HIDE))
            }
            _maybeBuildHiddenInputs(o) {
              var n, s;
              const {
                hiddenInput: e
              } = this.options;
              if (e) {
                const a = this.telInput.getAttribute("name") || "",
                  u = e(a);
                if (u.phone) {
                  const l = (n = this.telInput.form) == null ? void 0 : n.querySelector(`input[name="${u.phone}"]`);
                  l ? this.hiddenInput = l : (this.hiddenInput = dt("input", {
                    type: "hidden",
                    name: u.phone
                  }), o.appendChild(this.hiddenInput))
                }
                if (u.country) {
                  const l = (s = this.telInput.form) == null ? void 0 : s.querySelector(`input[name="${u.country}"]`);
                  l ? this.hiddenInputCountry = l : (this.hiddenInputCountry = dt("input", {
                    type: "hidden",
                    name: u.country
                  }), o.appendChild(this.hiddenInputCountry))
                }
              }
            }
            _appendListItems() {
              const o = document.createDocumentFragment();
              for (let e = 0; e < this.countries.length; e++) {
                const n = this.countries[e],
                  s = bt({
                    [A.COUNTRY_ITEM]: !0
                  }),
                  a = dt("li", {
                    id: `iti-${this.id}__item-${n.iso2}`,
                    class: s,
                    tabindex: "-1",
                    role: "option",
                    [mt.SELECTED]: "false"
                  });
                a.dataset.dialCode = n.dialCode, a.dataset.countryCode = n.iso2, n.nodeById[this.id] = a, this.options.showFlags && dt("div", {
                  class: `${A.FLAG} iti__${n.iso2}`
                }, a);
                const u = dt("span", {
                  class: "iti__country-name"
                }, a);
                u.textContent = n.name;
                const l = dt("span", {
                  class: "iti__dial-code"
                }, a);
                this.isRTL && l.setAttribute("dir", "ltr"), l.textContent = `+${n.dialCode}`, o.appendChild(a)
              }
              this.countryList.appendChild(o)
            }
            updateInputPadding() {
              if (this.selectedCountry) {
                const o = this.options.separateDialCode ? M.SANE_SELECTED_WITH_DIAL_WIDTH : M.SANE_SELECTED_NO_DIAL_WIDTH,
                  n = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth() || o) + M.INPUT_PADDING_EXTRA_LEFT;
                this.telInput.style.paddingLeft = `${n}px`
              }
            }
            _getHiddenSelectedCountryWidth() {
              if (this.telInput.parentNode) {
                let o;
                try {
                  o = window.top.document.body
                } catch {
                  o = document.body
                }
                const e = this.telInput.parentNode.cloneNode(!1);
                e.style.visibility = "hidden", o.appendChild(e);
                const n = this.countryContainer.cloneNode();
                e.appendChild(n);
                const s = this.selectedCountry.cloneNode(!0);
                n.appendChild(s);
                const a = s.offsetWidth;
                return o.removeChild(e), a
              }
              return 0
            }
            updateSearchResultsA11yText() {
              const {
                i18n: o
              } = this.options, e = this.countryList.childElementCount;
              let n;
              e === 0 ? n = o.zeroSearchResults : o.searchResultsText ? n = o.searchResultsText(e) : e === 1 ? n = o.oneSearchResult : n = o.multipleSearchResults.replace("${count}", e.toString()), this.searchResultsA11yText.textContent = n
            }
            scrollTo(o) {
              const e = this.countryList,
                n = document.documentElement.scrollTop,
                s = e.offsetHeight,
                a = e.getBoundingClientRect().top + n,
                u = a + s,
                l = o.offsetHeight,
                d = o.getBoundingClientRect().top + n,
                c = d + l,
                b = d - a + e.scrollTop;
              if (d < a) e.scrollTop = b;
              else if (c > u) {
                const U = s - l;
                e.scrollTop = b - U
              }
            }
            highlightListItem(o, e) {
              const n = this.highlightedItem;
              if (n && n.classList.remove(A.HIGHLIGHT), this.highlightedItem = o, this.highlightedItem && (this.highlightedItem.classList.add(A.HIGHLIGHT), this.options.countrySearch)) {
                const s = this.highlightedItem.getAttribute("id") || "";
                this.searchInput.setAttribute(mt.ACTIVE_DESCENDANT, s)
              }
              e && this.highlightedItem.focus()
            }
            updateSelectedItem(o) {
              if (this.selectedItem && this.selectedItem.dataset.countryCode !== o && (this.selectedItem.setAttribute(mt.SELECTED, "false"), this.selectedItem = null), o && !this.selectedItem) {
                const e = this.countryList.querySelector(`[data-country-code="${o}"]`);
                e && (e.setAttribute(mt.SELECTED, "true"), this.selectedItem = e)
              }
            }
            filterCountries(o) {
              this.countryList.innerHTML = "";
              let e = !0;
              for (const n of o) {
                const s = n.nodeById[this.id];
                s && (this.countryList.appendChild(s), e && (this.highlightListItem(s, !1), e = !1))
              }
              e ? (this.highlightListItem(null, !1), this.searchNoResults && this.searchNoResults.classList.remove(A.HIDE)) : this.searchNoResults && this.searchNoResults.classList.add(A.HIDE), this.countryList.scrollTop = 0, this.updateSearchResultsA11yText()
            }
            destroy() {
              this.telInput.iti = void 0, delete this.telInput.dataset.intlTelInputId, this.options.separateDialCode && (this.telInput.style.paddingLeft = this.originalPaddingLeft);
              const o = this.telInput.parentNode;
              o.before(this.telInput), o.remove(), this.telInput = null, this.countryContainer = null, this.selectedCountry = null, this.selectedCountryInner = null, this.selectedDialCode = null, this.dropdownArrow = null, this.dropdownContent = null, this.searchInput = null, this.searchIcon = null, this.searchClearButton = null, this.searchNoResults = null, this.searchResultsA11yText = null, this.countryList = null, this.dropdown = null, this.hiddenInput = null, this.hiddenInputCountry = null, this.highlightedItem = null, this.selectedItem = null;
              for (const e of this.countries) delete e.nodeById[this.id];
              this.countries = null
            }
          },
          fe = o => {
            const {
              onlyCountries: e,
              excludeCountries: n
            } = o;
            if (e.length) {
              const s = e.map(a => a.toLowerCase());
              return L.filter(a => s.includes(a.iso2))
            } else if (n.length) {
              const s = n.map(a => a.toLowerCase());
              return L.filter(a => !s.includes(a.iso2))
            }
            return L
          },
          Wt = (o, e) => {
            for (const n of o) {
              const s = n.iso2.toLowerCase();
              e.i18n[s] && (n.name = e.i18n[s])
            }
          },
          Gt = o => {
            const e = new Set;
            let n = 0;
            const s = {},
              a = (l, d) => {
                if (!l || !d) return;
                d.length > n && (n = d.length), s.hasOwnProperty(d) || (s[d] = []);
                const c = s[d];
                c.includes(l) || c.push(l)
              },
              u = [...o].sort((l, d) => l.priority - d.priority);
            for (const l of u) {
              e.has(l.dialCode) || e.add(l.dialCode);
              for (let d = 1; d < l.dialCode.length; d++) {
                const c = l.dialCode.substring(0, d);
                a(l.iso2, c)
              }
              if (a(l.iso2, l.dialCode), l.areaCodes) {
                const d = s[l.dialCode][0];
                for (const c of l.areaCodes) {
                  for (let b = 1; b < c.length; b++) {
                    const U = c.substring(0, b),
                      vt = l.dialCode + U;
                    a(d, vt), a(l.iso2, vt)
                  }
                  a(l.iso2, l.dialCode + c)
                }
              }
            }
            return {
              dialCodes: e,
              dialCodeMaxLen: n,
              dialCodeToIso2Map: s
            }
          },
          At = (o, e) => {
            e.countryOrder && (e.countryOrder = e.countryOrder.map(n => n.toLowerCase())), o.sort((n, s) => {
              const {
                countryOrder: a
              } = e;
              if (a) {
                const u = a.indexOf(n.iso2),
                  l = a.indexOf(s.iso2),
                  d = u > -1,
                  c = l > -1;
                if (d || c) return d && c ? u - l : d ? -1 : 1
              }
              return n.name.localeCompare(s.name)
            })
          },
          Z = o => {
            for (const e of o) e.normalisedName = ae(e.name), e.initials = e.normalisedName.split(/[^a-z]/).map(n => n[0]).join(""), e.dialCodePlus = `+${e.dialCode}`
          },
          ve = (o, e, n, s) => {
            let a = o;
            if (n && e) {
              e = `+${s.dialCode}`;
              const u = a[e.length] === " " || a[e.length] === "-" ? e.length + 1 : e.length;
              a = a.substring(u)
            }
            return a
          },
          De = (o, e, n, s, a) => {
            const u = n ? n.formatNumberAsYouType(o, s.iso2) : o,
              {
                dialCode: l
              } = s;
            return a && e.charAt(0) !== "+" && u.includes(`+${l}`) ? (u.split(`+${l}`)[1] || "").trim() : u
          },
          xe = (o, e, n, s) => {
            if (n === 0 && !s) return 0;
            let a = 0;
            for (let u = 0; u < e.length; u++) {
              if (/[+0-9]/.test(e[u]) && a++, a === o && !s) return u + 1;
              if (s && a === o + 1) return u
            }
            return e.length
          },
          Te = ["800", "822", "833", "844", "855", "866", "877", "880", "881", "882", "883", "884", "885", "886", "887", "888", "889"],
          pe = o => {
            const e = jt(o);
            if (e.startsWith(ct.NANP) && e.length >= 4) {
              const n = e.substring(1, 4);
              return Te.includes(n)
            }
            return !1
          };
        for (const o of L) o.name = T[o.iso2];
        var Se = 0,
          R = new Set(L.map(o => o.iso2)),
          F = o => R.has(o),
          at = class zn {
            constructor(e, n = {}) {
              this.id = Se++, this.options = {
                ...Et,
                ...n
              }, _t(this.options, T), this.ui = new he(e, this.options, this.id), this.isAndroid = zn._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = fe(this.options);
              const {
                dialCodes: s,
                dialCodeMaxLen: a,
                dialCodeToIso2Map: u
              } = Gt(this.countries);
              this.dialCodes = s, this.dialCodeMaxLen = a, this.dialCodeToIso2Map = u, this.countryByIso2 = new Map(this.countries.map(l => [l.iso2, l])), this._init()
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
              return e.replace(s, a => String.fromCharCode(48 + (a.charCodeAt(0) - n)))
            }
            _getTelInputValue() {
              const e = this.ui.telInput.value.trim();
              return this._normaliseNumerals(e)
            }
            _setTelInputValue(e) {
              this.ui.telInput.value = this._mapAsciiToUserNumerals(e)
            }
            _createInitPromises() {
              const e = new Promise((s, a) => {
                  this.resolveAutoCountryPromise = s, this.rejectAutoCountryPromise = a
                }),
                n = new Promise((s, a) => {
                  this.resolveUtilsScriptPromise = s, this.rejectUtilsScriptPromise = a
                });
              return Promise.all([e, n])
            }
            _init() {
              this.selectedCountryData = {}, this.abortController = new AbortController, this._processCountryData(), this.ui.generateMarkup(this.countries), this._setInitialState(), this._initListeners(), this._initRequests()
            }
            _processCountryData() {
              Wt(this.countries, this.options), At(this.countries, this.options), Z(this.countries)
            }
            _setInitialState(e = !1) {
              const n = this.ui.telInput.getAttribute("value"),
                s = this._normaliseNumerals(n),
                a = this._getTelInputValue(),
                l = s && s.startsWith("+") && (!a || !a.startsWith("+")) ? s : a,
                d = this._getDialCode(l),
                c = pe(l),
                {
                  initialCountry: b,
                  geoIpLookup: U
                } = this.options,
                vt = b === Rt.AUTO && U;
              if (d && !c) this._updateCountryFromNumber(l);
              else if (!vt || e) {
                const ut = b ? b.toLowerCase() : "";
                F(ut) ? this._setCountry(ut) : d && c ? this._setCountry(Lt.ISO2) : this._setCountry("")
              }
              l && this._updateValFromNumber(l)
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
                n = l => {
                  this.ui.dropdownContent.classList.contains(A.HIDE) ? this.ui.telInput.focus() : l.preventDefault()
                },
                s = this.ui.telInput.closest("label");
              s && s.addEventListener("click", n, {
                signal: e
              });
              const a = () => {
                this.ui.dropdownContent.classList.contains(A.HIDE) && !this.ui.telInput.disabled && !this.ui.telInput.readOnly && this._openDropdown()
              };
              this.ui.selectedCountry.addEventListener("click", a, {
                signal: e
              });
              const u = l => {
                this.ui.dropdownContent.classList.contains(A.HIDE) && [X.ARROW_UP, X.ARROW_DOWN, X.SPACE, X.ENTER].includes(l.key) && (l.preventDefault(), l.stopPropagation(), this._openDropdown()), l.key === X.TAB && this._closeDropdown()
              };
              this.ui.countryContainer.addEventListener("keydown", u, {
                signal: e
              })
            }
            _initRequests() {
              const {
                loadUtils: e,
                initialCountry: n,
                geoIpLookup: s
              } = this.options;
              if (e && !v.utils) {
                const u = () => {
                  var l;
                  (l = v.attachUtils(e)) == null || l.catch(() => {})
                };
                if (v.documentReady()) u();
                else {
                  const l = () => {
                    u()
                  };
                  window.addEventListener("load", l, {
                    signal: this.abortController.signal
                  })
                }
              } else this.resolveUtilsScriptPromise();
              n === Rt.AUTO && s && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
            }
            _loadAutoCountry() {
              v.autoCountry ? this.handleAutoCountry() : v.startedLoadingAutoCountry || (v.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup((e = "") => {
                const n = e.toLowerCase();
                F(n) ? (v.autoCountry = n, setTimeout(() => tt("handleAutoCountry"))) : (this._setInitialState(!0), tt("rejectAutoCountryPromise"))
              }, () => {
                this._setInitialState(!0), tt("rejectAutoCountryPromise")
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
                allowDropdown: a,
                countrySearch: u
              } = this.options;
              let l = !1;
              gt.ALPHA_UNICODE.test(this._getTelInputValue()) && (l = !0);
              const d = c => {
                const b = this._getTelInputValue();
                if (this.isAndroid && (c == null ? void 0 : c.data) === "+" && s && a && u) {
                  const z = this.ui.telInput.selectionStart || 0,
                    pt = b.substring(0, z - 1),
                    it = b.substring(z);
                  this._setTelInputValue(pt + it), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(b) && this._triggerCountryChange();
                const U = (c == null ? void 0 : c.data) && gt.NON_PLUS_NUMERIC.test(c.data),
                  vt = (c == null ? void 0 : c.inputType) === W.PASTE && b;
                U || vt && !e ? l = !0 : gt.NON_PLUS_NUMERIC.test(b) || (l = !1);
                const ut = (c == null ? void 0 : c.detail) && c.detail.isSetNumber,
                  V = this.userNumeralSet === "ascii";
                if (n && !l && !ut && V) {
                  const z = this.ui.telInput.selectionStart || 0,
                    it = b.substring(0, z).replace(gt.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    ht = (c == null ? void 0 : c.inputType) === W.DELETE_FWD,
                    ot = this._getFullNumber(),
                    Kt = De(ot, b, v.utils, this.selectedCountryData, this.options.separateDialCode),
                    Ft = xe(it, Kt, z, ht);
                  this._setTelInputValue(Kt), this.ui.telInput.setSelectionRange(Ft, Ft)
                }
              };
              this.ui.telInput.addEventListener("input", d, {
                signal: this.abortController.signal
              })
            }
            _maybeBindKeydownListener() {
              const {
                strictMode: e,
                separateDialCode: n,
                allowDropdown: s,
                countrySearch: a
              } = this.options;
              if (e || n) {
                const u = l => {
                  if (l.key && l.key.length === 1 && !l.altKey && !l.ctrlKey && !l.metaKey) {
                    if (n && s && a && l.key === "+") {
                      l.preventDefault(), this._openDropdownWithPlus();
                      return
                    }
                    if (e) {
                      const d = this._getTelInputValue(),
                        b = !d.startsWith("+") && this.ui.telInput.selectionStart === 0 && l.key === "+",
                        U = this._normaliseNumerals(l.key),
                        vt = /^[0-9]$/.test(U),
                        ut = n ? vt : b || vt,
                        V = this.ui.telInput,
                        z = V.selectionStart,
                        pt = V.selectionEnd,
                        it = d.slice(0, z),
                        ht = d.slice(pt),
                        ot = it + l.key + ht,
                        Kt = this._getFullNumber(ot),
                        Ft = v.utils.getCoreNumber(Kt, this.selectedCountryData.iso2),
                        xt = this.maxCoreNumberLength && Ft.length > this.maxCoreNumberLength,
                        te = this._getNewCountryFromNumber(Kt) !== null;
                      (!ut || xt && !te && !b) && l.preventDefault()
                    }
                  }
                };
                this.ui.telInput.addEventListener("keydown", u, {
                  signal: this.abortController.signal
                })
              }
            }
            _maybeBindPasteListener() {
              if (this.options.strictMode) {
                const e = n => {
                  n.preventDefault();
                  const s = this.ui.telInput,
                    a = s.selectionStart,
                    u = s.selectionEnd,
                    l = this._getTelInputValue(),
                    d = l.slice(0, a),
                    c = l.slice(u),
                    b = this.selectedCountryData.iso2,
                    U = n.clipboardData.getData("text"),
                    vt = this._normaliseNumerals(U),
                    ut = a === 0 && u > 0,
                    V = !l.startsWith("+") || ut,
                    z = vt.replace(gt.NON_PLUS_NUMERIC_GLOBAL, ""),
                    pt = z.startsWith("+"),
                    it = z.replace(/\+/g, ""),
                    ht = pt && V ? `+${it}` : it;
                  let ot = d + ht + c;
                  if (ot.length > 5) {
                    let Ft = v.utils.getCoreNumber(ot, b);
                    for (; Ft.length === 0 && ot.length > 0;) ot = ot.slice(0, -1), Ft = v.utils.getCoreNumber(ot, b);
                    if (!Ft) return;
                    if (this.maxCoreNumberLength && Ft.length > this.maxCoreNumberLength)
                      if (s.selectionEnd === l.length) {
                        const xt = Ft.length - this.maxCoreNumberLength;
                        ot = ot.slice(0, ot.length - xt)
                      } else return
                  }
                  this._setTelInputValue(ot);
                  const Kt = a + ht.length;
                  s.setSelectionRange(Kt, Kt), s.dispatchEvent(new InputEvent("input", {
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
              if (this.dropdownAbortController = new AbortController, e && (this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`), this.ui.dropdownContent.classList.remove(A.HIDE), this.ui.selectedCountry.setAttribute(mt.EXPANDED, "true"), this._setDropdownPosition(), n) {
                const s = this.ui.countryList.firstElementChild;
                s && (this.ui.highlightListItem(s, !1), this.ui.countryList.scrollTop = 0), this.ui.searchInput.focus()
              }
              this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(A.ARROW_UP), this._trigger(nt.OPEN_COUNTRY_DROPDOWN)
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
                var u;
                const a = (u = s.target) == null ? void 0 : u.closest(`.${A.COUNTRY_ITEM}`);
                a && this.ui.highlightListItem(a, !1)
              };
              this.ui.countryList.addEventListener("mouseover", n, {
                signal: e
              })
            }
            _bindDropdownCountryClickListener(e) {
              const n = s => {
                var u;
                const a = (u = s.target) == null ? void 0 : u.closest(`.${A.COUNTRY_ITEM}`);
                a && this._selectListItem(a)
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
              const a = u => {
                [X.ARROW_UP, X.ARROW_DOWN, X.ENTER, X.ESC].includes(u.key) && (u.preventDefault(), u.stopPropagation(), u.key === X.ARROW_UP || u.key === X.ARROW_DOWN ? this._handleUpDownKey(u.key) : u.key === X.ENTER ? this._handleEnterKey() : u.key === X.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && gt.HIDDEN_SEARCH_CHAR.test(u.key) && (u.stopPropagation(), s && clearTimeout(s), n += u.key.toLowerCase(), this._searchForCountry(n), s = setTimeout(() => {
                  n = ""
                }, It.HIDDEN_SEARCH_RESET_MS))
              };
              document.addEventListener("keydown", a, {
                signal: e
              })
            }
            _bindDropdownSearchListeners(e) {
              const n = () => {
                const l = this.ui.searchInput.value.trim();
                this._filterCountriesByQuery(l), this.ui.searchInput.value ? this.ui.searchClearButton.classList.remove(A.HIDE) : this.ui.searchClearButton.classList.add(A.HIDE)
              };
              let s = null;
              const a = () => {
                s && clearTimeout(s), s = setTimeout(() => {
                  n(), s = null
                }, 100)
              };
              this.ui.searchInput.addEventListener("input", a, {
                signal: e
              });
              const u = () => {
                this.ui.searchInput.value = "", this.ui.searchInput.focus(), n()
              };
              this.ui.searchClearButton.addEventListener("click", u, {
                signal: e
              })
            }
            _searchForCountry(e) {
              const n = j(this.countries, e);
              if (n) {
                const s = n.nodeById[this.id];
                this.ui.highlightListItem(s, !1), this.ui.scrollTo(s)
              }
            }
            _filterCountriesByQuery(e) {
              let n;
              e === "" ? n = this.countries : n = P(this.countries, e), this.ui.filterCountries(n)
            }
            _handleUpDownKey(e) {
              var s, a;
              let n = e === X.ARROW_UP ? (s = this.ui.highlightedItem) == null ? void 0 : s.previousElementSibling : (a = this.ui.highlightedItem) == null ? void 0 : a.nextElementSibling;
              !n && this.ui.countryList.childElementCount > 1 && (n = e === X.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), n && (this.ui.scrollTo(n), this.ui.highlightListItem(n, !1))
            }
            _handleEnterKey() {
              this.ui.highlightedItem && this._selectListItem(this.ui.highlightedItem)
            }
            _updateValFromNumber(e) {
              let n = e;
              if (this.options.formatOnDisplay && v.utils && this.selectedCountryData) {
                const s = this.options.nationalMode || !n.startsWith("+") && !this.options.separateDialCode,
                  {
                    NATIONAL: a,
                    INTERNATIONAL: u
                  } = v.utils.numberFormat,
                  l = s ? a : u;
                n = v.utils.formatNumber(n, this.selectedCountryData.iso2, l)
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
              const l = s && e.startsWith(s) && !this.options.separateDialCode ? e.substring(1) : e;
              return `+${n}${l}`
            }
            _getNewCountryFromNumber(e) {
              const n = e.indexOf("+");
              let s = n ? e.substring(n) : e;
              const a = this.selectedCountryData.iso2,
                u = this.selectedCountryData.dialCode;
              s = this._ensureHasDialCode(s);
              const l = this._getDialCode(s, !0),
                d = jt(s);
              if (l) {
                const c = jt(l),
                  b = this.dialCodeToIso2Map[c];
                if (b.length === 1) return b[0] === a ? null : b[0];
                if (!a && this.defaultCountry && b.includes(this.defaultCountry)) return this.defaultCountry;
                if (u === ct.NANP && pe(d)) return null;
                const {
                  areaCodes: vt,
                  priority: ut
                } = this.selectedCountryData;
                if (vt) {
                  const ht = vt.map(ot => `${u}${ot}`);
                  for (const ot of ht)
                    if (d.startsWith(ot)) return null
                }
                const z = vt && !(ut === 0) && d.length > c.length,
                  pt = a && b.includes(a) && !z,
                  it = a === b[0];
                if (!pt && !it) return b[0]
              } else if (s.startsWith("+") && d.length) {
                const c = this.selectedCountryData.dialCode || "";
                return c && c.startsWith(d) ? null : ""
              } else if ((!s || s === "+") && !a) return this.defaultCountry;
              return null
            }
            _setCountry(e) {
              const {
                separateDialCode: n,
                showFlags: s,
                i18n: a,
                allowDropdown: u
              } = this.options, l = this.selectedCountryData.iso2 || "";
              if (u && this.ui.updateSelectedItem(e), this.selectedCountryData = e ? this.countryByIso2.get(e) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.ui.selectedCountry) {
                const d = e && s ? `${A.FLAG} iti__${e}` : `${A.FLAG} ${A.GLOBE}`;
                let c, b;
                if (e) {
                  const {
                    name: U,
                    dialCode: vt
                  } = this.selectedCountryData;
                  b = U, c = a.selectedCountryAriaLabel.replace("${countryName}", U).replace("${dialCode}", `+${vt}`)
                } else b = a.noCountrySelected, c = a.noCountrySelected;
                this.ui.selectedCountryInner.className = d, this.ui.selectedCountry.setAttribute("title", b), this.ui.selectedCountry.setAttribute(mt.LABEL, c)
              }
              if (n) {
                const d = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
                this.ui.selectedDialCode.textContent = d, this.ui.updateInputPadding()
              }
              return this._updatePlaceholder(), this._updateMaxLength(), l !== e
            }
            _updateMaxLength() {
              const {
                strictMode: e,
                placeholderNumberType: n,
                validationNumberTypes: s
              } = this.options, {
                iso2: a
              } = this.selectedCountryData;
              if (e && v.utils)
                if (a) {
                  const u = v.utils.numberType[n];
                  let l = v.utils.getExampleNumber(a, !1, u, !0),
                    d = l;
                  for (; v.utils.isPossibleNumber(l, a, s);) d = l, l += "0";
                  const c = v.utils.getCoreNumber(d, a);
                  this.maxCoreNumberLength = c.length, a === "by" && (this.maxCoreNumberLength = c.length + 1)
                } else this.maxCoreNumberLength = null
            }
            _updatePlaceholder() {
              const {
                autoPlaceholder: e,
                placeholderNumberType: n,
                nationalMode: s,
                customPlaceholder: a
              } = this.options, u = e === St.AGGRESSIVE || !this.ui.hadInitialPlaceholder && e === St.POLITE;
              if (v.utils && u) {
                const l = v.utils.numberType[n];
                let d = this.selectedCountryData.iso2 ? v.utils.getExampleNumber(this.selectedCountryData.iso2, s, l) : "";
                d = this._beforeSetNumber(d), typeof a == "function" && (d = a(d, this.selectedCountryData)), this.ui.telInput.setAttribute("placeholder", d)
              }
            }
            _selectListItem(e) {
              const n = e.dataset[zt.COUNTRY_CODE],
                s = this._setCountry(n);
              this._closeDropdown();
              const a = e.dataset[zt.DIAL_CODE];
              if (this._updateDialCode(a), this.options.formatOnDisplay) {
                const u = this._getTelInputValue();
                this._updateValFromNumber(u)
              }
              this.ui.telInput.focus(), s && this._triggerCountryChange()
            }
            _closeDropdown() {
              this.ui.dropdownContent.classList.contains(A.HIDE) || (this.ui.dropdownContent.classList.add(A.HIDE), this.ui.selectedCountry.setAttribute(mt.EXPANDED, "false"), this.options.countrySearch && (this.ui.searchInput.removeAttribute(mt.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(A.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(A.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(nt.CLOSE_COUNTRY_DROPDOWN))
            }
            _updateDialCode(e) {
              const n = this._getTelInputValue(),
                s = `+${e}`;
              let a;
              if (n.startsWith("+")) {
                const u = this._getDialCode(n);
                u ? a = n.replace(u, s) : a = s, this._setTelInputValue(a)
              }
            }
            _getDialCode(e, n) {
              let s = "";
              if (e.startsWith("+")) {
                let a = "",
                  u = !1;
                for (let l = 0; l < e.length; l++) {
                  const d = e.charAt(l);
                  if (/[0-9]/.test(d)) {
                    if (a += d, !!!this.dialCodeToIso2Map[a]) break;
                    if (this.dialCodes.has(a)) {
                      if (s = e.substring(0, l + 1), u = !0, !n) break
                    } else n && u && (s = e.substring(0, l + 1));
                    if (a.length === this.dialCodeMaxLen) break
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
              let a;
              const u = jt(n);
              return this.options.separateDialCode && !n.startsWith("+") && s && u ? a = `+${s}` : a = "", a + n
            }
            _beforeSetNumber(e) {
              const n = this._getDialCode(e),
                s = ve(e, n, this.options.separateDialCode, this.selectedCountryData);
              return this._cap(s)
            }
            _triggerCountryChange() {
              this._trigger(nt.COUNTRY_CHANGE)
            }
            handleAutoCountry() {
              this.options.initialCountry === Rt.AUTO && v.autoCountry && (this.defaultCountry = v.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(A.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
            }
            handleUtils() {
              if (v.utils) {
                const e = this._getTelInputValue();
                e && this._updateValFromNumber(e), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())
              }
              this.resolveUtilsScriptPromise()
            }
            destroy() {
              this.ui.telInput && (this.options.allowDropdown && this._closeDropdown(), this.abortController.abort(), this.abortController = null, this.ui.destroy(), v.instances instanceof Map ? v.instances.delete(this.id) : delete v.instances[this.id])
            }
            getExtension() {
              return v.utils ? v.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
            }
            getNumber(e) {
              if (v.utils) {
                const {
                  iso2: n
                } = this.selectedCountryData, s = this._getFullNumber(), a = v.utils.formatNumber(s, n, e);
                return this._mapAsciiToUserNumerals(a)
              }
              return ""
            }
            getNumberType() {
              return v.utils ? v.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : I.UNKNOWN_NUMBER_TYPE
            }
            getSelectedCountryData() {
              return this.selectedCountryData
            }
            getValidationError() {
              if (v.utils) {
                const {
                  iso2: e
                } = this.selectedCountryData;
                return v.utils.getValidationError(this._getFullNumber(), e)
              }
              return I.UNKNOWN_VALIDATION_ERROR
            }
            isValidNumber() {
              const {
                dialCode: e,
                iso2: n
              } = this.selectedCountryData;
              if (e === Tt.DIAL_CODE && v.utils) {
                const s = this._getFullNumber(),
                  a = v.utils.getCoreNumber(s, n);
                if (a[0] === Tt.MOBILE_PREFIX && a.length !== Tt.MOBILE_CORE_LENGTH) return !1
              }
              return this._validateNumber(!1)
            }
            isValidNumberPrecise() {
              return this._validateNumber(!0)
            }
            _utilsIsPossibleNumber(e) {
              return v.utils ? v.utils.isPossibleNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            _validateNumber(e) {
              if (!v.utils) return null;
              if (!this.selectedCountryData.iso2) return !1;
              const n = l => e ? this._utilsIsValidNumber(l) : this._utilsIsPossibleNumber(l),
                s = this._getFullNumber(),
                a = s.search(gt.ALPHA_UNICODE);
              if (a > -1 && !this.options.allowPhonewords) {
                const l = s.substring(0, a),
                  d = n(l),
                  c = n(s);
                return d && c
              }
              return n(s)
            }
            _utilsIsValidNumber(e) {
              return v.utils ? v.utils.isValidNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            setCountry(e) {
              const n = e == null ? void 0 : e.toLowerCase();
              if (!F(n)) throw new Error(`Invalid country code: '${n}'`);
              const s = this.selectedCountryData.iso2;
              if (e && n !== s || !e && s) {
                if (this._setCountry(n), this._updateDialCode(this.selectedCountryData.dialCode), this.options.formatOnDisplay) {
                  const u = this._getTelInputValue();
                  this._updateValFromNumber(u)
                }
                this._triggerCountryChange()
              }
            }
            setNumber(e) {
              const n = this._normaliseNumerals(e),
                s = this._updateCountryFromNumber(n);
              this._updateValFromNumber(n), s && this._triggerCountryChange(), this._trigger(nt.INPUT, {
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
          lt = o => {
            if (!v.utils && !v.startedLoadingUtilsScript) {
              let e;
              if (typeof o == "function") try {
                e = Promise.resolve(o())
              } catch (n) {
                return Promise.reject(n)
              } else return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof o}`));
              return v.startedLoadingUtilsScript = !0, e.then(n => {
                const s = n == null ? void 0 : n.default;
                if (!s || typeof s != "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                return v.utils = s, tt("handleUtils"), !0
              }).catch(n => {
                throw tt("rejectUtilsScriptPromise", n), n
              })
            }
            return null
          },
          tt = (o, ...e) => {
            Object.values(v.instances).forEach(n => {
              const s = n[o];
              typeof s == "function" && s.apply(n, e)
            })
          },
          v = Object.assign((o, e) => {
            const n = new at(o, e);
            return v.instances[n.id] = n, o.iti = n, n
          }, {
            defaults: Et,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => L,
            getInstance: o => {
              const e = o.dataset.intlTelInputId;
              return e ? v.instances[e] : null
            },
            instances: {},
            attachUtils: lt,
            startedLoadingUtilsScript: !1,
            startedLoadingAutoCountry: !1,
            version: "25.15.1"
          }),
          Nt = v;
        return H(S)
      })();
      return t.default
    })
  })(un)), un.exports
}
var Gs = js();
const Ks = fi(Gs);
var Ys = ft('<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>'),
  Pn = ft('<span class="w-8"> </span>'),
  kn = ft('<span class="loading loading-spinner center-absolute absolute"></span>'),
  qs = ft('<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary relative w-full"> <!> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>', 1),
  Xs = ft('<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-4 flex flex-col items-center gap-1"><button class="btn btn-ghost relative mb-1 w-max"> <!> <!></button> <button class="text-primary/80 cursor-pointer text-xs"> </button></div>', 1),
  Qs = ft('<div class="flex h-full w-full flex-col items-center"><!></div>');

function Zs(m, t) {
  Qt(t, !0);
  let r = k(t, "verifyingPhone", 15, ""),
    h = Y(!0),
    p = Y(0),
    E = Y(!1);
  const x = D(() => i(p) > 0 || i(E));
  let B = Y(!1),
    H = Y(""),
    S = Y(void 0);
  de(() => {
    an.getOtpCooldown().then(T => {
      f(p, T.cooldownMs, !0)
    }).catch(T => {
      ye.error(T.message)
    }).finally(() => {
      f(h, !1)
    });
    const g = 1e3,
      w = setInterval(() => {
        f(p, Math.max(0, i(p) - g), !0)
      }, g);
    return () => {
      clearInterval(w)
    }
  });
  async function _(g) {
    try {
      f(E, !0);
      const w = await an.sendOtp(g),
        T = {
          sms: "SMS",
          telegram: "Telegram",
          whatsapp: "WhatsApp"
        };
      ye.info(ee.code_sent_to_phone({
        channel: T[w.channel],
        phone: w.phone
      }), {
        duration: 15e3
      }), r(w.phone), f(p, w.cooldownMs, !0)
    } catch (w) {
      ye.error(w.message)
    } finally {
      f(E, !1)
    }
  }
  Ut(() => {
    i(H).length === 6 && (f(B, !0), (async () => {
      try {
        await an.verifyChallenge({
          type: "otp",
          code: i(H)
        }), ye.success(ee.phone_verified()), t.onsuccess(r())
      } catch (g) {
        ye.error(g.message)
      } finally {
        f(H, ""), f(B, !1)
      }
    })())
  });
  var N = Qs(),
    L = et(N);
  {
    var q = g => {
        var w = Ys();
        y(g, w)
      },
      O = g => {
        var w = qs(),
          T = G(w),
          nt = et(T),
          A = et(nt),
          X = et(A, !0);
        J(A);
        var W = wt(A, 2),
          gt = et(W, !0);
        J(W), J(nt);
        var It = wt(nt, 2),
          I = et(It);
        Bn(I, () => st => {
          var Q, Et;
          return f(S, Ks(st, {
            strictMode: !0,
            initialCountry: ((Et = (Q = dn.data) == null ? void 0 : Q.country) == null ? void 0 : Et.toLocaleLowerCase()) ?? "br",
            loadUtils: () => wi(() => import("../chunks/3P6Si2Fo.js"), [], import.meta.url),
            containerClass: "w-full hide-search",
            dropdownContainer: zs(st)
          })), () => {
            var _t;
            (_t = i(S)) == null || _t.destroy()
          }
        });
        var M = wt(I, 2),
          ct = et(M),
          Tt = wt(ct);
        {
          var Lt = st => {
            var Q = Pn(),
              Et = et(Q);
            J(Q), Dt(_t => Bt(Et, `(${_t??""})`), [() => En(i(p))]), y(st, Q)
          };
          rt(Tt, st => {
            i(p) > 0 && st(Lt)
          })
        }
        var St = wt(Tt, 2);
        {
          var Rt = st => {
            var Q = kn();
            y(st, Q)
          };
          rt(St, st => {
            i(E) && st(Rt)
          })
        }
        J(M), J(It), J(T);
        var zt = wt(T, 2),
          mt = et(zt, !0);
        J(zt), Dt((st, Q, Et, _t) => {
          Bt(X, st), Bt(gt, Q), M.disabled = i(x), Bt(ct, `${Et??""} `), Bt(mt, _t)
        }, [() => ee.phone_verification(), () => ee.phone_verification_description(), () => ee.send_code(), () => ee.phone_privacy_notice()]), tn("submit", It, async () => {
          var Q;
          if (i(x)) return;
          if (!((Q = i(S)) != null && Q.isValidNumber())) {
            ye.error(ee.not_valid_phone());
            return
          }
          const st = i(S).getNumber();
          await _(st)
        }), y(g, w)
      },
      K = g => {
        var w = Xs(),
          T = G(w),
          nt = et(T),
          A = et(nt, !0);
        J(nt);
        var X = wt(nt, 2),
          W = et(X, !0);
        J(X), J(T);
        var gt = wt(T, 2),
          It = et(gt);
        {
          const st = (Q, Et) => {
            let _t = () => Et == null ? void 0 : Et().cells;
            var jt = $(),
              ae = G(jt);
            $t(ae, () => Is, (P, j) => {
              j(P, {
                class: "border-primary",
                children: (bt, dt) => {
                  var Mt = $(),
                    ne = G(Mt);
                  qe(ne, 16, _t, he => he, (he, fe) => {
                    var Wt = $(),
                      Gt = G(Wt);
                    $t(Gt, () => Ws, (At, Z) => {
                      Z(At, {
                        get cell() {
                          return fe
                        },
                        class: "border-base-content/20 size-11 sm:size-12"
                      })
                    }), y(he, Wt)
                  }), y(bt, Mt)
                },
                $$slots: {
                  default: !0
                }
              })
            }), y(Q, jt)
          };
          $t(It, () => Vs, (Q, Et) => {
            Et(Q, {
              maxlength: 6,
              class: "mx-auto w-max",
              get disabled() {
                return i(B)
              },
              get value() {
                return i(H)
              },
              set value(_t) {
                f(H, _t, !0)
              },
              children: st,
              $$slots: {
                default: !0
              }
            })
          })
        }
        J(gt);
        var I = wt(gt, 2),
          M = et(I),
          ct = et(M),
          Tt = wt(ct);
        {
          var Lt = st => {
            var Q = Pn(),
              Et = et(Q);
            J(Q), Dt(_t => Bt(Et, `(${_t??""})`), [() => En(i(p))]), y(st, Q)
          };
          rt(Tt, st => {
            i(p) > 0 && st(Lt)
          })
        }
        var St = wt(Tt, 2);
        {
          var Rt = st => {
            var Q = kn();
            y(st, Q)
          };
          rt(St, st => {
            i(E) && st(Rt)
          })
        }
        J(M);
        var zt = wt(M, 2),
          mt = et(zt, !0);
        J(zt), J(I), Dt((st, Q, Et, _t) => {
          Bt(A, st), Bt(W, Q), M.disabled = i(x), Bt(ct, `${Et??""} `), Bt(mt, _t)
        }, [() => ee.input_the_code(), () => ee.sent_to_phone({
          phone: r()
        }), () => ee.resend_code(), () => ee.try_another_number()]), se("click", M, async () => {
          await _(r())
        }), se("click", zt, () => {
          r("")
        }), y(g, w)
      };
    rt(L, g => {
      i(h) ? g(q) : r() ? g(K, -1) : g(O, 1)
    })
  }
  J(N), y(m, N), Zt()
}
en(["click"]);
let Ae = Y(!1);
var Js = ft("<div></div>"),
  $s = ft('<button type="button" class="btn">Retry</button>'),
  ta = ft('<span class="loading loading-spinner loading-lg"></span>'),
  ea = ft("<div><!></div>");

function na(m, t) {
  Qt(t, !0);
  let r = k(t, "widgetId", 15),
    h = k(t, "appearance", 3, "always"),
    p = k(t, "language", 3, "auto"),
    E = k(t, "execution", 3, "render"),
    x = k(t, "retryInterval", 3, 8e3),
    B = k(t, "retry", 3, "auto"),
    H = k(t, "refreshExpired", 3, "auto"),
    S = k(t, "theme", 3, "auto"),
    _ = k(t, "size", 3, "normal"),
    N = k(t, "tabIndex", 3, 0);
  k(t, "reset", 15)(() => {
    var I;
    r() && ((I = window == null ? void 0 : window.turnstile) == null || I.reset(r()))
  });
  const q = D(() => ({
      sitekey: t.siteKey,
      callback: (I, M) => {
        var ct;
        (ct = t.callback) == null || ct.call(t, I, M)
      },
      "error-callback": I => {
        var M;
        (M = t.errorCallback) == null || M.call(t, I)
      },
      "timeout-callback": () => {
        var I;
        (I = t.timeoutCallback) == null || I.call(t)
      },
      "expired-callback": () => {
        var I;
        (I = t.expiredCallback) == null || I.call(t)
      },
      "before-interactive-callback": () => {
        var I;
        (I = t.beforeInteractiveCallback) == null || I.call(t)
      },
      "after-interactive-callback": () => {
        var I;
        (I = t.afterInteractiveCallback) == null || I.call(t)
      },
      "unsupported-callback": () => {
        var I;
        return (I = t.unsupportedCallback) == null ? void 0 : I.call(t)
      },
      "response-field-name": t.responseFieldName ?? t.formsField ?? "cf-turnstile-response",
      "response-field": t.responseField ?? t.forms ?? !0,
      "refresh-expired": H(),
      "retry-interval": x(),
      tabindex: N(),
      appearance: h(),
      execution: E(),
      language: p(),
      action: t.action,
      retry: B(),
      theme: S(),
      cData: t.cData,
      size: _()
    })),
    O = (I, M) => {
      let ct = window.turnstile.render(I, M);
      return r(ct), {
        destroy() {
          window.turnstile.remove(ct)
        },
        update(Tt) {
          window.turnstile.remove(ct), ct = window.turnstile.render(I, Tt), r(ct)
        }
      }
    };
  let K = Y(!1),
    g = Y(!1),
    w;

  function T() {
    const I = document.createElement("script");
    I.type = "text/javascript", I.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit", I.async = !0, I.addEventListener("load", () => f(Ae, !0), {
      once: !0
    }), document.head.appendChild(I)
  }

  function nt() {
    f(g, !1), w && clearTimeout(w), w = setTimeout(() => {
      (!i(Ae) || !i(K)) && f(g, !0)
    }, 5e3)
  }

  function A() {
    document.querySelectorAll('script[src*="challenges.cloudflare.com/turnstile"]').forEach(I => I.remove()), f(Ae, !1), T(), nt()
  }
  de(() => (f(K, !0), i(Ae) || T(), nt(), () => {
    f(K, !1), w && clearTimeout(w)
  }));
  var X = $(),
    W = G(X);
  {
    var gt = I => {
        var M = Js();
        let ct;
        Mn(M, (Tt, Lt) => O == null ? void 0 : O(Tt, Lt), () => i(q)), Dt(() => ct = qt(M, 1, `h-16 ${t.class??""}`, "svelte-1lm836y", ct, {
          flexible: _() == "flexible"
        })), y(I, M)
      },
      It = I => {
        var M = ea(),
          ct = et(M);
        {
          var Tt = St => {
              var Rt = $s();
              se("click", Rt, A), y(St, Rt)
            },
            Lt = St => {
              var Rt = ta();
              y(St, Rt)
            };
          rt(ct, St => {
            i(g) ? St(Tt) : St(Lt, -1)
          })
        }
        J(M), Dt(() => qt(M, 1, `flex h-16 items-center justify-center ${t.class??""}`, "svelte-1lm836y")), y(I, M)
      };
    rt(W, I => {
      i(Ae) && i(K) ? I(gt) : I(It, -1)
    })
  }
  y(m, X), Zt()
}
en(["click"]);
var ia = ft('<dialog class="modal"><div></div> <div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function sa(m, t) {
  Qt(t, !0);
  const r = D(() => on.current !== null),
    h = D(() => {
      var g;
      return (g = on.current) == null ? void 0 : g.tier
    }),
    p = Ei(() => i(r));
  let E = Y(""),
    x = Y(void 0),
    B = Y(!1);
  var H = ia(),
    S = et(H);
  let _;
  nn(S, g => f(x, g), () => i(x));
  var N = wt(S, 2);
  let L;
  var q = et(N),
    O = et(q);
  {
    var K = g => {
      var w = $(),
        T = G(w);
      pi(T, () => on.errorCount, nt => {
        var A = $(),
          X = G(A);
        {
          var W = I => {
              {
                let M = D(() => _i.trim());
                na(I, {
                  get siteKey() {
                    return i(M)
                  },
                  callback: ct => xn(ct),
                  errorCallback: () => Dn()
                })
              }
            },
            gt = I => {
              {
                let M = D(() => bi.trim());
                _s(I, {
                  get siteKey() {
                    return i(M)
                  },
                  get challengeContainer() {
                    return i(x)
                  },
                  callback: ct => xn(ct),
                  openCallback: () => f(B, !0),
                  closeCallback: () => f(B, !1),
                  errorCallback: () => Dn()
                })
              }
            },
            It = I => {
              Zs(I, {
                onsuccess: () => ei(),
                get verifyingPhone() {
                  return i(E)
                },
                set verifyingPhone(M) {
                  f(E, M, !0)
                }
              })
            };
          rt(X, I => {
            i(h) === 2 ? I(W) : i(h) === 3 ? I(gt, 1) : i(h) === 4 && I(It, 2)
          })
        }
        y(nt, A)
      }), y(g, w)
    };
    rt(O, g => {
      p.current && g(K)
    })
  }
  J(q), J(N), Rn(2), J(H), Bn(H, () => g => {
    Ut(() => {
      i(r) && !g.open ? g.showModal() : !i(r) && g.open && g.close()
    })
  }), Dt(() => {
    _ = qt(S, 1, "hcaptcha-challenge-container svelte-efugoh", null, _, {
      "is-open": i(B)
    }), L = qt(N, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, L, {
      "h-84": i(h) === 4 && !i(E)
    })
  }), tn("close", H, () => {
    f(B, !1), ti()
  }), y(m, H), Zt()
}
var aa = ft('<span class="hidden"> </span> <!> <!> <!>', 1);

function Aa(m, t) {
  Qt(t, !0), de(() => {
    for (const O of ["localStorage", "sessionStorage"]) try {
      const K = window[O];
      for (let g = K.length - 1; g >= 0; g -= 1) {
        const w = K.key(g);
        w != null && w.startsWith("phone:") && K.removeItem(w)
      }
    } catch {}
    const _ = ai();
    Tn.init();
    let N = Y(!1);
    Ut(() => {
      i(N) || dn.data && (f(N, !0), oi.loadTWA())
    }), ni();
    const L = mi(async () => {
      await dn.refresh()
    }, {
      interval: ii.hour,
      immediate: !0
    });
    let q = setInterval(() => {
      gi().catch(O => console.warn("[sw] message failed", O))
    }, 5e3);
    return () => {
      clearTimeout(q), _(), L(), Tn.cleanup()
    }
  });
  const r = "muted";
  de(() => {
    cn.muted = localStorage.getItem(r) === "1"
  }), Ut(() => {
    {
      const _ = cn.muted;
      document.querySelectorAll("audio").forEach(N => {
        N.muted = _
      });
      for (const N of Object.values(si).filter(L => L instanceof Audio)) N.muted = _, _ || (N.volume = .3);
      localStorage.setItem(r, Number(_).toString())
    }
  }), de(() => {});
  var h = aa();
  tn("beforeunload", Qn, () => {
    vi().catch(_ => console.warn("[sw] message failed", _))
  });
  var p = G(h),
    E = et(p);
  J(p);
  var x = wt(p, 2);
  {
    var B = _ => {
      var N = $(),
        L = G(N);
      Ht(L, () => t.children), y(_, N)
    };
    rt(x, _ => {
      _(B, -1)
    })
  }
  var H = wt(x, 2);
  sa(H, {});
  var S = wt(H, 2);
  gs(S, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), Dt(() => Bt(E, `Version: ${Jn}`)), y(m, h), Zt()
}
export {
  Aa as component, La as universal
};