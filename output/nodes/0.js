var Kn = Object.defineProperty;
var bn = u => {
  throw TypeError(u)
};
var Yn = (u, t, r) => t in u ? Kn(u, t, {
  enumerable: !0,
  configurable: !0,
  writable: !0,
  value: r
}) : u[t] = r;
var yt = (u, t, r) => Yn(u, typeof t != "symbol" ? t + "" : t, r),
  nn = (u, t, r) => t.has(u) || bn("Cannot " + r);
var p = (u, t, r) => (nn(u, t, "read from private field"), r ? r.call(u) : t.get(u)),
  ft = (u, t, r) => t.has(u) ? bn("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(u) : t.set(u, r),
  he = (u, t, r, h) => (nn(u, t, "write to private field"), h ? h.call(u, r) : t.set(u, r), r),
  wn = (u, t, r) => (nn(u, t, "access private method"), r);
import "../chunks/Bzak7iHL.js";
import {
  o as me
} from "../chunks/DL6VqNy4.js";
import {
  p as Zt,
  d as $,
  a as C,
  r as Y,
  t as Et,
  b as $t,
  c as dt,
  bJ as Oe,
  R as qn,
  Q as In,
  S as Xn,
  e as it,
  g as pn,
  q as Rt,
  h as v,
  i,
  x as Ae,
  s as bt,
  m as le,
  v as tn,
  u as w,
  aW as Gt,
  l as q,
  f as j,
  k as gn,
  o as En,
  z as Ge,
  bK as On,
  n as Rn,
  aK as Qn
} from "../chunks/B66BVdRM.js";
import {
  c as Jn,
  s as Pt
} from "../chunks/D1f3t9ko.js";
import {
  i as lt
} from "../chunks/BLRpBUXo.js";
import {
  s as Ot
} from "../chunks/Dd8KoMQq.js";
import {
  v as Zn
} from "../chunks/D1SBHn8C.js";
import {
  G as At,
  H as ae,
  I as $n,
  j as un,
  a as sn,
  t as ye,
  u as cn,
  J as ti,
  K as on,
  L as Dn,
  M as Tn,
  N as ei,
  q as ni,
  O as ii,
  Q as si,
  R as oi,
  T as ai,
  P as ri
} from "../chunks/6VMe-q54.js";
import {
  i as en,
  b as Lt,
  s as Sn,
  a as dn,
  w as li,
  c as ui,
  d as ci,
  e as hn,
  n as Nn,
  m as Ye,
  g as di,
  f as xn,
  A as hi,
  r as fi,
  h as mi,
  j as pi,
  k as gi
} from "../chunks/DsSrX1L7.js";
import {
  k as vi
} from "../chunks/DOiIV6LW.js";
import {
  c as re,
  a as ne,
  s as gt,
  f as an,
  d as Ce,
  S as yi,
  i as Ci,
  e as kn
} from "../chunks/D6WlI9xC.js";
import {
  a as _i,
  T as bi
} from "../chunks/DrQNfEYS.js";
import {
  p as K,
  s as Pe,
  r as Ee
} from "../chunks/DFHlj6pU.js";
import {
  _ as wi
} from "../chunks/Dp1pzeXC.js";
import {
  e as qe
} from "../chunks/DnUMEYYS.js";
import {
  c as Jt
} from "../chunks/0mDgwpqj.js";
import {
  b as vn
} from "../chunks/C6-mkiPL.js";
import {
  t as Ii
} from "../chunks/CPcsbTWB.js";
import "../chunks/BhCkpOlh.js";
import {
  p as Ei,
  a as Di,
  b as Ti,
  s as Si,
  c as Ni,
  n as xi,
  i as Li,
  d as Ai,
  r as Pi,
  t as Oi,
  e as Ri
} from "../chunks/BQOQAbaH.js";
import "../chunks/CMfXY_iA.js";
const ki = !0,
  Uo = Object.freeze(Object.defineProperty({
    __proto__: null,
    prerender: ki
  }, Symbol.toStringTag, {
    value: "Module"
  })),
  Mi = Array(12).fill(0);
var Bi = dt('<div class="sonner-loading-bar"></div>'),
  Hi = dt('<div><div class="sonner-spinner"></div></div>');

function Ui(u, t) {
  Zt(t, !0);
  var r = Hi(),
    h = $(r);
  qe(h, 23, () => Mi, (g, I) => `spinner-bar-${I}`, (g, I) => {
    var E = Bi();
    C(g, E)
  }), Y(h), Y(r), Et(g => {
    ne(r, 1, g), gt(r, "data-visible", t.visible)
  }, [() => re(["sonner-loading-wrapper", t.class].filter(Boolean).join(" "))]), C(u, r), $t()
}
const Wi = typeof window < "u" ? window : void 0;

function Vi(u) {
  let t = u.activeElement;
  for (; t != null && t.shadowRoot;) {
    const r = t.shadowRoot.activeElement;
    if (r === t) break;
    t = r
  }
  return t
}
var _e, Re;
class Fi {
  constructor(t = {}) {
    ft(this, _e);
    ft(this, Re);
    const {
      window: r = Wi,
      document: h = r == null ? void 0 : r.document
    } = t;
    r !== void 0 && (he(this, _e, h), he(this, Re, Jn(g => {
      const I = Oe(r, "focusin", g),
        E = Oe(r, "focusout", g);
      return () => {
        I(), E()
      }
    })))
  }
  get current() {
    var t;
    return (t = p(this, Re)) == null || t.call(this), p(this, _e) ? Vi(p(this, _e)) : null
  }
}
_e = new WeakMap, Re = new WeakMap;
new Fi;
var ke, ue;
class zi {
  constructor(t) {
    ft(this, ke);
    ft(this, ue);
    he(this, ke, t), he(this, ue, Symbol(t))
  }
  get key() {
    return p(this, ue)
  }
  exists() {
    return qn(p(this, ue))
  }
  get() {
    const t = In(p(this, ue));
    if (t === void 0) throw new Error(`Context "${p(this,ke)}" not found`);
    return t
  }
  getOr(t) {
    const r = In(p(this, ue));
    return r === void 0 ? t : r
  }
  set(t) {
    return Xn(p(this, ue), t)
  }
}
ke = new WeakMap, ue = new WeakMap;
const Gi = new zi("<Toaster/>");

function je(u) {
  return u.label !== void 0
}

function ji() {
  let u = it(pn(typeof document < "u" ? document.hidden : !1));
  return Rt(() => Oe(document, "visibilitychange", () => {
    v(u, document.hidden, !0)
  })), {
    get current() {
      return i(u)
    }
  }
}
const Ln = 4e3,
  Ki = 14,
  Yi = 45,
  qi = 200,
  Xi = .05,
  Qi = {
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

function Ji(u) {
  const [t, r] = u.split("-"), h = [];
  return t && h.push(t), r && h.push(r), h
}

function An(u) {
  return 1 / (1.5 + Math.abs(u) / 20)
}
var Zi = dt("<div><!></div>"),
  $i = dt('<button data-close-button=""><!></button>'),
  ts = dt('<div data-icon=""><!> <!></div>'),
  es = dt('<div data-description=""><!></div>'),
  ns = dt('<button data-button="" data-cancel=""> </button>'),
  is = dt('<button data-button=""> </button>'),
  ss = dt('<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>', 1),
  os = dt('<li data-sonner-toast=""><!> <!></li>');

function as(u, t) {
  Zt(t, !0);
  const r = L => {
    var O = q(),
      et = j(O);
    {
      var st = m => {
          var Dt = Zi(),
            a = $(Dt);
          Ot(a, () => t.loadingIcon), Y(Dt), Et(e => {
            ne(Dt, 1, e), gt(Dt, "data-visible", i(G) === "loading")
          }, [() => {
            var e, n, s;
            return re(ae((e = i(ht)) == null ? void 0 : e.loader, (s = (n = t.toast) == null ? void 0 : n.classes) == null ? void 0 : s.loader, "sonner-loader"))
          }]), C(m, Dt)
        },
        J = m => {
          {
            let Dt = w(() => {
                var e, n;
                return ae((e = i(ht)) == null ? void 0 : e.loader, (n = t.toast.classes) == null ? void 0 : n.loader)
              }),
              a = w(() => i(G) === "loading");
            Ui(m, {
              get class() {
                return i(Dt)
              },
              get visible() {
                return i(a)
              }
            })
          }
        };
      lt(et, m => {
        t.loadingIcon ? m(st) : m(J, !1)
      })
    }
    C(L, O)
  };
  let h = K(t, "cancelButtonStyle", 3, ""),
    g = K(t, "actionButtonStyle", 3, ""),
    I = K(t, "descriptionClass", 3, ""),
    E = K(t, "unstyled", 3, !1),
    M = K(t, "defaultRichColors", 3, !1);
  const U = {
    ...Qi
  };
  let x = it(!1),
    y = it(!1),
    A = it(!1),
    D = it(!1),
    X = it(!1),
    R = it(0),
    rt = it(0),
    k = t.toast.duration || t.duration || Ln,
    b = it(void 0),
    S = it(null),
    W = it(null);
  const T = w(() => t.index === 0),
    z = w(() => t.index + 1 <= t.visibleToasts),
    G = w(() => t.toast.type),
    mt = w(() => t.toast.dismissable !== !1),
    Nt = w(() => t.toast.class || ""),
    Ct = w(() => t.toast.descriptionClass || ""),
    wt = w(() => At.heights.findIndex(L => L.toastId === t.toast.id) || 0),
    It = w(() => t.toast.closeButton ?? t.closeButton),
    Wt = w(() => t.toast.duration ?? t.duration ?? Ln);
  let Mt = null;
  const jt = w(() => t.position.split("-")),
    Bt = w(() => At.heights.reduce((L, O, et) => et >= i(wt) ? L : L + O.height, 0)),
    ee = ji(),
    V = w(() => t.toast.invert || t.invert),
    ut = w(() => i(G) === "loading"),
    ht = w(() => ({
      ...U,
      ...t.classes
    })),
    Tt = w(() => t.toast.title),
    Kt = w(() => t.toast.description);
  let Yt = it(0),
    se = it(0);
  const N = w(() => Math.round(i(wt) * Ki + i(Bt)));
  Rt(() => {
    i(Tt), i(Kt);
    let L;
    t.expanded || t.expandByDefault ? L = 1 : L = 1 - t.index * Xi;
    const O = Ae(() => i(b));
    if (O === void 0) return;
    O.style.setProperty("height", "auto");
    const et = O.offsetHeight,
      st = O.getBoundingClientRect().height,
      J = Math.round(st / L + Number.EPSILON & 100) / 100;
    O.style.removeProperty("height");
    let m;
    Math.abs(J - et) < 1 ? m = J : m = et, v(rt, m, !0), Ae(() => {
      At.setHeight({
        toastId: t.toast.id,
        height: m
      })
    })
  });

  function F() {
    v(y, !0), v(R, i(N), !0), At.removeHeight(t.toast.id), setTimeout(() => {
      At.remove(t.toast.id)
    }, qi)
  }
  let vt;
  const tt = w(() => t.toast.promise && i(G) === "loading" || t.toast.duration === Number.POSITIVE_INFINITY);

  function kt() {
    v(Yt, new Date().getTime(), !0), vt = setTimeout(() => {
      var L, O;
      (O = (L = t.toast).onAutoClose) == null || O.call(L, t.toast), F()
    }, k)
  }

  function qt() {
    if (i(se) < i(Yt)) {
      const L = new Date().getTime() - i(Yt);
      k = k - L
    }
    v(se, new Date().getTime(), !0)
  }
  Rt(() => {
    t.toast.updated && (clearTimeout(vt), k = i(Wt), kt())
  }), Rt(() => (i(tt) || (t.expanded || t.interacting || ee.current ? qt() : kt()), () => clearTimeout(vt))), me(() => {
    var O;
    v(x, !0);
    const L = (O = i(b)) == null ? void 0 : O.getBoundingClientRect().height;
    return v(rt, L, !0), At.setHeight({
      toastId: t.toast.id,
      height: L
    }), () => {
      At.removeHeight(t.toast.id)
    }
  }), Rt(() => {
    t.toast.delete && Ae(() => {
      var L, O;
      F(), (O = (L = t.toast).onDismiss) == null || O.call(L, t.toast)
    })
  });
  const pe = L => {
      if (i(ut)) return;
      v(R, i(N), !0);
      const O = L.target;
      O.setPointerCapture(L.pointerId), O.tagName !== "BUTTON" && (v(A, !0), Mt = {
        x: L.clientX,
        y: L.clientY
      })
    },
    oe = () => {
      var m, Dt, a, e, n, s;
      if (i(D) || !i(mt)) return;
      Mt = null;
      const L = Number(((m = i(b)) == null ? void 0 : m.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0),
        O = Number(((Dt = i(b)) == null ? void 0 : Dt.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0),
        et = new Date().getTime() - 0,
        st = i(S) === "x" ? L : O,
        J = Math.abs(st) / et;
      if (Math.abs(st) >= Yi || J > .11) {
        v(R, i(N), !0), (e = (a = t.toast).onDismiss) == null || e.call(a, t.toast), i(S) === "x" ? v(W, L > 0 ? "right" : "left", !0) : v(W, O > 0 ? "down" : "up", !0), F(), v(D, !0);
        return
      } else(n = i(b)) == null || n.style.setProperty("--swipe-amount-x", "0px"), (s = i(b)) == null || s.style.setProperty("--swipe-amount-y", "0px");
      v(X, !1), v(A, !1), v(S, null)
    },
    Ht = L => {
      var Dt, a, e;
      if (!Mt || !i(mt) || (((Dt = window.getSelection()) == null ? void 0 : Dt.toString().length) ?? -1) > 0) return;
      const et = L.clientY - Mt.y,
        st = L.clientX - Mt.x,
        J = t.swipeDirections ?? Ji(t.position);
      !i(S) && (Math.abs(st) > 1 || Math.abs(et) > 1) && v(S, Math.abs(st) > Math.abs(et) ? "x" : "y", !0);
      let m = {
        x: 0,
        y: 0
      };
      if (i(S) === "y") {
        if (J.includes("top") || J.includes("bottom"))
          if (J.includes("top") && et < 0 || J.includes("bottom") && et > 0) m.y = et;
          else {
            const n = et * An(et);
            m.y = Math.abs(n) < Math.abs(et) ? n : et
          }
      } else if (i(S) === "x" && (J.includes("left") || J.includes("right")))
        if (J.includes("left") && st < 0 || J.includes("right") && st > 0) m.x = st;
        else {
          const n = st * An(st);
          m.x = Math.abs(n) < Math.abs(st) ? n : st
        }(Math.abs(m.x) > 0 || Math.abs(m.y) > 0) && v(X, !0), (a = i(b)) == null || a.style.setProperty("--swipe-amount-x", `${m.x}px`), (e = i(b)) == null || e.style.setProperty("--swipe-amount-y", `${m.y}px`)
    },
    Vt = () => {
      v(A, !1), v(S, null), Mt = null
    },
    St = w(() => t.toast.icon ? t.toast.icon : i(G) === "success" ? t.successIcon : i(G) === "error" ? t.errorIcon : i(G) === "warning" ? t.warningIcon : i(G) === "info" ? t.infoIcon : i(G) === "loading" ? t.loadingIcon : null);
  var Q = os();
  gt(Q, "tabindex", 0);
  let ge;
  var De = $(Q);
  {
    var Te = L => {
      var O = $i(),
        et = $(O);
      Ot(et, () => t.closeIcon ?? Gt), Y(O), Et(st => {
        gt(O, "aria-label", t.closeButtonAriaLabel), gt(O, "data-disabled", i(ut)), ne(O, 1, st)
      }, [() => {
        var st, J, m;
        return re(ae((st = i(ht)) == null ? void 0 : st.closeButton, (m = (J = t.toast) == null ? void 0 : J.classes) == null ? void 0 : m.closeButton))
      }]), le("click", O, () => {
        var st, J;
        i(ut) || !i(mt) || (F(), (J = (st = t.toast).onDismiss) == null || J.call(st, t.toast))
      }), C(L, O)
    };
    lt(De, L => {
      i(It) && !t.toast.component && i(G) !== "loading" && t.closeIcon !== null && L(Te)
    })
  }
  var Se = bt(De, 2);
  {
    var ve = L => {
        const O = w(() => t.toast.component);
        var et = q(),
          st = j(et);
        Jt(st, () => i(O), (J, m) => {
          m(J, Pe(() => t.toast.componentProps, {
            closeToast: F
          }))
        }), C(L, et)
      },
      Ne = L => {
        var O = ss(),
          et = j(O);
        {
          var st = f => {
            var d = ts(),
              _ = $(d);
            {
              var P = B => {
                var H = q(),
                  pt = j(H);
                {
                  var Z = nt => {
                      var Ft = q(),
                        Ut = j(Ft);
                      Jt(Ut, () => t.toast.icon, (_t, xt) => {
                        xt(_t, {})
                      }), C(nt, Ft)
                    },
                    at = nt => {
                      r(nt)
                    };
                  lt(pt, nt => {
                    t.toast.icon ? nt(Z) : nt(at, !1)
                  })
                }
                C(B, H)
              };
              lt(_, B => {
                (t.toast.promise || i(G) === "loading") && B(P)
              })
            }
            var ct = bt(_, 2);
            {
              var ot = B => {
                var H = q(),
                  pt = j(H);
                {
                  var Z = _t => {
                      var xt = q(),
                        te = j(xt);
                      Jt(te, () => t.toast.icon, (Gn, jn) => {
                        jn(Gn, {})
                      }), C(_t, xt)
                    },
                    at = _t => {
                      var xt = q(),
                        te = j(xt);
                      Ot(te, () => t.successIcon ?? Gt), C(_t, xt)
                    },
                    nt = _t => {
                      var xt = q(),
                        te = j(xt);
                      Ot(te, () => t.errorIcon ?? Gt), C(_t, xt)
                    },
                    Ft = _t => {
                      var xt = q(),
                        te = j(xt);
                      Ot(te, () => t.warningIcon ?? Gt), C(_t, xt)
                    },
                    Ut = _t => {
                      var xt = q(),
                        te = j(xt);
                      Ot(te, () => t.infoIcon ?? Gt), C(_t, xt)
                    };
                  lt(pt, _t => {
                    t.toast.icon ? _t(Z) : i(G) === "success" ? _t(at, 1) : i(G) === "error" ? _t(nt, 2) : i(G) === "warning" ? _t(Ft, 3) : i(G) === "info" && _t(Ut, 4)
                  })
                }
                C(B, H)
              };
              lt(ct, B => {
                t.toast.type !== "loading" && B(ot)
              })
            }
            Y(d), Et(B => ne(d, 1, B), [() => {
              var B, H, pt;
              return re(ae((B = i(ht)) == null ? void 0 : B.icon, (pt = (H = t.toast) == null ? void 0 : H.classes) == null ? void 0 : pt.icon))
            }]), C(f, d)
          };
          lt(et, f => {
            (i(G) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (i(St) !== null || t.toast.icon) && f(st)
          })
        }
        var J = bt(et, 2),
          m = $(J),
          Dt = $(m);
        {
          var a = f => {
            var d = q(),
              _ = j(d);
            {
              var P = ot => {
                  const B = w(() => t.toast.title);
                  var H = q(),
                    pt = j(H);
                  Jt(pt, () => i(B), (Z, at) => {
                    at(Z, Pe(() => t.toast.componentProps))
                  }), C(ot, H)
                },
                ct = ot => {
                  var B = En();
                  Et(() => Pt(B, t.toast.title)), C(ot, B)
                };
              lt(_, ot => {
                typeof t.toast.title != "string" ? ot(P) : ot(ct, !1)
              })
            }
            C(f, d)
          };
          lt(Dt, f => {
            t.toast.title && f(a)
          })
        }
        Y(m);
        var e = bt(m, 2);
        {
          var n = f => {
            var d = es(),
              _ = $(d);
            {
              var P = ot => {
                  const B = w(() => t.toast.description);
                  var H = q(),
                    pt = j(H);
                  Jt(pt, () => i(B), (Z, at) => {
                    at(Z, Pe(() => t.toast.componentProps))
                  }), C(ot, H)
                },
                ct = ot => {
                  var B = En();
                  Et(() => Pt(B, t.toast.description)), C(ot, B)
                };
              lt(_, ot => {
                typeof t.toast.description != "string" ? ot(P) : ot(ct, !1)
              })
            }
            Y(d), Et(ot => ne(d, 1, ot), [() => {
              var ot, B;
              return re(ae(I(), i(Ct), (ot = i(ht)) == null ? void 0 : ot.description, (B = t.toast.classes) == null ? void 0 : B.description))
            }]), C(f, d)
          };
          lt(e, f => {
            t.toast.description && f(n)
          })
        }
        Y(J);
        var s = bt(J, 2);
        {
          var o = f => {
            var d = q(),
              _ = j(d);
            {
              var P = B => {
                  var H = q(),
                    pt = j(H);
                  Jt(pt, () => t.toast.cancel, (Z, at) => {
                    at(Z, {})
                  }), C(B, H)
                },
                ct = B => {
                  var H = ns(),
                    pt = $(H, !0);
                  Y(H), Et(Z => {
                    an(H, t.toast.cancelButtonStyle ?? h()), ne(H, 1, Z), Pt(pt, t.toast.cancel.label)
                  }, [() => {
                    var Z, at, nt;
                    return re(ae((Z = i(ht)) == null ? void 0 : Z.cancelButton, (nt = (at = t.toast) == null ? void 0 : at.classes) == null ? void 0 : nt.cancelButton))
                  }]), le("click", H, Z => {
                    var at, nt;
                    je(t.toast.cancel) && i(mt) && ((nt = (at = t.toast.cancel) == null ? void 0 : at.onClick) == null || nt.call(at, Z), F())
                  }), C(B, H)
                },
                ot = w(() => je(t.toast.cancel));
              lt(_, B => {
                typeof t.toast.cancel == "function" ? B(P) : i(ot) && B(ct, 1)
              })
            }
            C(f, d)
          };
          lt(s, f => {
            t.toast.cancel && f(o)
          })
        }
        var c = bt(s, 2);
        {
          var l = f => {
            var d = q(),
              _ = j(d);
            {
              var P = B => {
                  var H = q(),
                    pt = j(H);
                  Jt(pt, () => t.toast.action, (Z, at) => {
                    at(Z, {})
                  }), C(B, H)
                },
                ct = B => {
                  var H = is(),
                    pt = $(H, !0);
                  Y(H), Et(Z => {
                    an(H, t.toast.actionButtonStyle ?? g()), ne(H, 1, Z), Pt(pt, t.toast.action.label)
                  }, [() => {
                    var Z, at, nt;
                    return re(ae((Z = i(ht)) == null ? void 0 : Z.actionButton, (nt = (at = t.toast) == null ? void 0 : at.classes) == null ? void 0 : nt.actionButton))
                  }]), le("click", H, Z => {
                    var at;
                    je(t.toast.action) && ((at = t.toast.action) == null || at.onClick(Z), !Z.defaultPrevented && F())
                  }), C(B, H)
                },
                ot = w(() => je(t.toast.action));
              lt(_, B => {
                typeof t.toast.action == "function" ? B(P) : i(ot) && B(ct, 1)
              })
            }
            C(f, d)
          };
          lt(c, f => {
            t.toast.action && f(l)
          })
        }
        Et(f => ne(m, 1, f), [() => {
          var f, d, _;
          return re(ae((f = i(ht)) == null ? void 0 : f.title, (_ = (d = t.toast) == null ? void 0 : d.classes) == null ? void 0 : _.title))
        }]), C(L, O)
      };
    lt(Se, L => {
      t.toast.component ? L(ve) : L(Ne, !1)
    })
  }
  Y(Q), vn(Q, L => v(b, L), () => i(b)), Et((L, O, et) => {
    ne(Q, 1, L), gt(Q, "data-rich-colors", t.toast.richColors ?? M()), gt(Q, "data-styled", !(t.toast.component || t.toast.unstyled || E())), gt(Q, "data-mounted", i(x)), gt(Q, "data-promise", O), gt(Q, "data-swiped", i(X)), gt(Q, "data-removed", i(y)), gt(Q, "data-visible", i(z)), gt(Q, "data-y-position", i(jt)[0]), gt(Q, "data-x-position", i(jt)[1]), gt(Q, "data-index", t.index), gt(Q, "data-front", i(T)), gt(Q, "data-swiping", i(A)), gt(Q, "data-dismissable", i(mt)), gt(Q, "data-type", i(G)), gt(Q, "data-invert", i(V)), gt(Q, "data-swipe-out", i(D)), gt(Q, "data-swipe-direction", i(W)), gt(Q, "data-expanded", et), ge = an(Q, `${t.style} ${t.toast.style}`, ge, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": At.toasts.length - t.index,
      "--offset": `${i(y)?i(R):i(N)}px`,
      "--initial-height": t.expandByDefault ? "auto" : `${i(rt)}px`
    })
  }, [() => {
    var L, O, et, st, J, m;
    return re(ae(t.class, i(Nt), (L = i(ht)) == null ? void 0 : L.toast, (et = (O = t.toast) == null ? void 0 : O.classes) == null ? void 0 : et.toast, (st = i(ht)) == null ? void 0 : st[i(G)], (m = (J = t.toast) == null ? void 0 : J.classes) == null ? void 0 : m[i(G)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && i(x))]), le("pointermove", Q, Ht), le("pointerup", Q, oe), le("pointerdown", Q, pe), tn("dragend", Q, Vt), C(u, Q), $t()
}
gn(["pointermove", "pointerup", "pointerdown", "click"]);
var rs = Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>');

function ls(u) {
  var t = rs();
  C(u, t)
}
var us = Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>');

function cs(u) {
  var t = us();
  C(u, t)
}
var ds = Ge('<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>');

function hs(u) {
  var t = ds();
  C(u, t)
}
var fs = Ge('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>');

function ms(u) {
  var t = fs();
  C(u, t)
}
var ps = Ge('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>');

function gs(u) {
  var t = ps();
  C(u, t)
}
const vs = 3,
  Mn = "24px",
  Bn = "16px",
  ys = 4e3,
  Cs = 356,
  _s = 14,
  rn = "dark",
  Ke = "light";

function bs(u, t) {
  const r = {};
  return [u, t].forEach((h, g) => {
    const I = g === 1,
      E = I ? "--mobile-offset" : "--offset",
      M = I ? Bn : Mn;

    function U(x) {
      ["top", "right", "bottom", "left"].forEach(y => {
        r[`${E}-${y}`] = typeof x == "number" ? `${x}px` : x
      })
    }
    typeof h == "number" || typeof h == "string" ? U(h) : typeof h == "object" ? ["top", "right", "bottom", "left"].forEach(x => {
      const y = h[x];
      y === void 0 ? r[`${E}-${x}`] = M : r[`${E}-${x}`] = typeof y == "number" ? `${y}px` : y
    }) : U(M)
  }), r
}
var ws = dt("<ol></ol>"),
  Is = dt('<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-smjlix"><!></section>');

function Es(u, t) {
  Zt(t, !0);

  function r(N) {
    return N !== "system" ? N : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? rn : Ke
  }
  let h = K(t, "invert", 3, !1),
    g = K(t, "position", 3, "bottom-right"),
    I = K(t, "hotkey", 19, () => ["altKey", "KeyT"]),
    E = K(t, "expand", 3, !1),
    M = K(t, "closeButton", 3, !1),
    U = K(t, "offset", 3, Mn),
    x = K(t, "mobileOffset", 3, Bn),
    y = K(t, "theme", 3, "light"),
    A = K(t, "richColors", 3, !1),
    D = K(t, "duration", 3, ys),
    X = K(t, "visibleToasts", 3, vs),
    R = K(t, "toastOptions", 19, () => ({})),
    rt = K(t, "dir", 7, "auto"),
    k = K(t, "gap", 3, _s),
    b = K(t, "containerAriaLabel", 3, "Notifications"),
    S = K(t, "closeButtonAriaLabel", 3, "Close toast"),
    W = Ee(t, ["$$slots", "$$events", "$$legacy", "invert", "position", "hotkey", "expand", "closeButton", "offset", "mobileOffset", "theme", "richColors", "duration", "visibleToasts", "toastOptions", "dir", "gap", "loadingIcon", "successIcon", "errorIcon", "warningIcon", "closeIcon", "infoIcon", "containerAriaLabel", "class", "closeButtonAriaLabel", "onblur", "onfocus", "onmouseenter", "onmousemove", "onmouseleave", "ondragend", "onpointerdown", "onpointerup"]);

  function T() {
    if (rt() !== "auto") return rt();
    if (typeof window > "u" || typeof document > "u") return "ltr";
    const N = document.documentElement.getAttribute("dir");
    return N === "auto" || !N ? (Ae(() => rt(window.getComputedStyle(document.documentElement).direction ?? "ltr")), rt()) : (Ae(() => rt(N)), N)
  }
  const z = w(() => Array.from(new Set([g(), ...At.toasts.filter(N => N.position).map(N => N.position)].filter(Boolean))));
  let G = it(!1),
    mt = it(!1),
    Nt = it(pn(r(y()))),
    Ct = it(void 0),
    wt = it(null),
    It = it(!1);
  const Wt = w(() => I().join("+").replace(/Key/g, "").replace(/Digit/g, ""));
  Rt(() => {
    At.toasts.length <= 1 && v(G, !1)
  }), Rt(() => {
    const N = At.toasts.filter(F => F.dismiss && !F.delete);
    if (N.length > 0) {
      const F = At.toasts.map(vt => N.find(kt => kt.id === vt.id) ? {
        ...vt,
        delete: !0
      } : vt);
      At.toasts = F
    }
  }), Rt(() => () => {
    i(Ct) && i(wt) && (i(wt).focus({
      preventScroll: !0
    }), v(wt, null), v(It, !1))
  }), me(() => (At.reset(), Oe(document, "keydown", F => {
    var tt, kt;
    I().every(qt => F[qt] || F.code === qt) && (v(G, !0), (tt = i(Ct)) == null || tt.focus()), F.code === "Escape" && (document.activeElement === i(Ct) || (kt = i(Ct)) != null && kt.contains(document.activeElement)) && v(G, !1)
  }))), Rt(() => {
    if (y() !== "system" && v(Nt, y()), typeof window < "u") {
      y() === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? v(Nt, rn) : v(Nt, Ke));
      const N = window.matchMedia("(prefers-color-scheme: dark)"),
        F = ({
          matches: vt
        }) => {
          v(Nt, vt ? rn : Ke, !0)
        };
      "addEventListener" in N ? N.addEventListener("change", F) : N.addListener(F)
    }
  });
  const Mt = N => {
      var F;
      (F = t.onblur) == null || F.call(t, N), i(It) && !N.currentTarget.contains(N.relatedTarget) && (v(It, !1), i(wt) && (i(wt).focus({
        preventScroll: !0
      }), v(wt, null)))
    },
    jt = N => {
      var vt;
      (vt = t.onfocus) == null || vt.call(t, N), !(N.target instanceof HTMLElement && N.target.dataset.dismissable === "false") && (i(It) || (v(It, !0), v(wt, N.relatedTarget, !0)))
    },
    Bt = N => {
      var vt;
      (vt = t.onpointerdown) == null || vt.call(t, N), !(N.target instanceof HTMLElement && N.target.dataset.dismissable === "false") && v(mt, !0)
    },
    ee = N => {
      var F;
      (F = t.onmouseenter) == null || F.call(t, N), v(G, !0)
    },
    V = N => {
      var F;
      (F = t.onmouseleave) == null || F.call(t, N), i(mt) || v(G, !1)
    },
    ut = N => {
      var F;
      (F = t.onmousemove) == null || F.call(t, N), v(G, !0)
    },
    ht = N => {
      var F;
      (F = t.ondragend) == null || F.call(t, N), v(G, !1)
    },
    Tt = N => {
      var F;
      (F = t.onpointerup) == null || F.call(t, N), v(mt, !1)
    };
  Gi.set(new $n);
  var Kt = Is();
  gt(Kt, "tabindex", -1);
  var Yt = $(Kt);
  {
    var se = N => {
      var F = q(),
        vt = j(F);
      qe(vt, 18, () => i(z), tt => tt, (tt, kt, qt, pe) => {
        const oe = w(() => {
            const [St, Q] = kt.split("-");
            return {
              y: St,
              x: Q
            }
          }),
          Ht = w(() => bs(U(), x()));
        var Vt = ws();
        Ce(Vt, St => {
          var Q;
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
            onmousemove: ut,
            onmouseleave: V,
            ondragend: ht,
            onpointerdown: Bt,
            onpointerup: Tt,
            ...W,
            [yi]: {
              "--front-toast-height": `${(Q=At.heights[0])==null?void 0:Q.height}px`,
              "--width": `${Cs}px`,
              "--gap": `${k()}px`,
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
        }, [T], void 0, void 0, "svelte-smjlix"), qe(Vt, 23, () => At.toasts.filter(St => !St.position && i(qt) === 0 || St.position === kt), St => St.id, (St, Q, ge, De) => {
          {
            const Te = s => {
                var o = q(),
                  c = j(o);
                {
                  var l = d => {
                      var _ = q(),
                        P = j(_);
                      Ot(P, () => t.successIcon ?? Gt), C(d, _)
                    },
                    f = d => {
                      ls(d)
                    };
                  lt(c, d => {
                    t.successIcon ? d(l) : t.successIcon !== null && d(f, 1)
                  })
                }
                C(s, o)
              },
              Se = s => {
                var o = q(),
                  c = j(o);
                {
                  var l = d => {
                      var _ = q(),
                        P = j(_);
                      Ot(P, () => t.errorIcon ?? Gt), C(d, _)
                    },
                    f = d => {
                      cs(d)
                    };
                  lt(c, d => {
                    t.errorIcon ? d(l) : t.errorIcon !== null && d(f, 1)
                  })
                }
                C(s, o)
              },
              ve = s => {
                var o = q(),
                  c = j(o);
                {
                  var l = d => {
                      var _ = q(),
                        P = j(_);
                      Ot(P, () => t.warningIcon ?? Gt), C(d, _)
                    },
                    f = d => {
                      hs(d)
                    };
                  lt(c, d => {
                    t.warningIcon ? d(l) : t.warningIcon !== null && d(f, 1)
                  })
                }
                C(s, o)
              },
              Ne = s => {
                var o = q(),
                  c = j(o);
                {
                  var l = d => {
                      var _ = q(),
                        P = j(_);
                      Ot(P, () => t.infoIcon ?? Gt), C(d, _)
                    },
                    f = d => {
                      ms(d)
                    };
                  lt(c, d => {
                    t.infoIcon ? d(l) : t.infoIcon !== null && d(f, 1)
                  })
                }
                C(s, o)
              },
              L = s => {
                var o = q(),
                  c = j(o);
                {
                  var l = d => {
                      var _ = q(),
                        P = j(_);
                      Ot(P, () => t.closeIcon ?? Gt), C(d, _)
                    },
                    f = d => {
                      gs(d)
                    };
                  lt(c, d => {
                    t.closeIcon ? d(l) : t.closeIcon !== null && d(f, 1)
                  })
                }
                C(s, o)
              };
            let O = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.duration) ?? D()
              }),
              et = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.class) ?? ""
              }),
              st = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.descriptionClass) || ""
              }),
              J = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.style) ?? ""
              }),
              m = w(() => R().classes || {}),
              Dt = w(() => R().unstyled ?? !1),
              a = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.cancelButtonStyle) ?? ""
              }),
              e = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.actionButtonStyle) ?? ""
              }),
              n = w(() => {
                var s;
                return ((s = R()) == null ? void 0 : s.closeButtonAriaLabel) ?? S()
              });
            as(St, {
              get index() {
                return i(ge)
              },
              get toast() {
                return i(Q)
              },
              get defaultRichColors() {
                return A()
              },
              get duration() {
                return i(O)
              },
              get class() {
                return i(et)
              },
              get descriptionClass() {
                return i(st)
              },
              get invert() {
                return h()
              },
              get visibleToasts() {
                return X()
              },
              get closeButton() {
                return M()
              },
              get interacting() {
                return i(mt)
              },
              get position() {
                return kt
              },
              get style() {
                return i(J)
              },
              get classes() {
                return i(m)
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
                return E()
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
              closeIcon: L,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), Y(Vt), vn(Vt, St => v(Ct, St), () => i(Ct)), Et(() => Vt.dir = Vt.dir), C(tt, Vt)
      }), C(N, F)
    };
    lt(Yt, N => {
      At.toasts.length > 0 && N(se)
    })
  }
  Y(Kt), Et(() => gt(Kt, "aria-label", `${b()??""} ${i(Wt)??""}`)), C(u, Kt), $t()
}
let xe = it(!1);
var Ds = dt("<div></div>"),
  Ts = dt('<button type="button" class="btn">Retry</button>'),
  Ss = dt('<span class="loading loading-spinner loading-lg"></span>'),
  Ns = dt('<div class="flex h-16 items-center justify-center"><!></div>');

function xs(u, t) {
  Zt(t, !0);
  let r = K(t, "theme", 19, () => un.theme === "dark" ? "dark" : "light"),
    h = K(t, "size", 3, "normal");
  const g = w(() => ({
      sitekey: t.siteKey,
      theme: r(),
      size: h(),
      callback: k => {
        var b;
        return (b = t.callback) == null ? void 0 : b.call(t, k)
      },
      "error-callback": k => {
        var b;
        return (b = t.errorCallback) == null ? void 0 : b.call(t, k)
      },
      "expired-callback": () => {
        var k;
        return (k = t.expiredCallback) == null ? void 0 : k.call(t)
      }
    })),
    I = (k, b) => {
      var W;
      let S = window.hcaptcha.render(k, b);
      return (W = t.onload) == null || W.call(t), {
        destroy() {
          var T;
          (T = window.hcaptcha) == null || T.remove(S)
        },
        update(T) {
          var z;
          (z = window.hcaptcha) == null || z.remove(S), S = window.hcaptcha.render(k, T)
        }
      }
    };
  let E = it(!1),
    M = it(!1),
    U;

  function x() {
    const k = document.createElement("script");
    k.type = "text/javascript", k.src = "https://js.hcaptcha.com/1/api.js?render=explicit", k.async = !0, k.defer = !0, k.addEventListener("load", () => v(xe, !0), {
      once: !0
    }), document.head.appendChild(k)
  }

  function y() {
    v(M, !1), U && clearTimeout(U), U = setTimeout(() => {
      (!i(xe) || !i(E)) && v(M, !0)
    }, 5e3)
  }

  function A() {
    document.querySelectorAll('script[src*="js.hcaptcha.com"]').forEach(k => k.remove()), v(xe, !1), x(), y()
  }
  me(() => (v(E, !0), i(xe) || x(), y(), () => {
    v(E, !1), U && clearTimeout(U)
  }));
  var D = q(),
    X = j(D);
  {
    var R = k => {
        var b = Ds();
        _i(b, (S, W) => I == null ? void 0 : I(S, W), () => i(g)), C(k, b)
      },
      rt = k => {
        var b = Ns(),
          S = $(b);
        {
          var W = z => {
              var G = Ts();
              le("click", G, A), C(z, G)
            },
            T = z => {
              var G = Ss();
              C(z, G)
            };
          lt(S, z => {
            i(M) ? z(W) : z(T, !1)
          })
        }
        Y(b), C(k, b)
      };
    lt(X, k => {
      i(xe) && i(E) ? k(R) : k(rt, !1)
    })
  }
  C(u, D), $t()
}
gn(["click"]);

function yn(...u) {
  return Ii(Ci(u))
}
var Ls = dt("<div><!></div>");

function As(u, t) {
  Zt(t, !0);
  let r = K(t, "ref", 15, null),
    h = Ee(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "children"]);
  var g = Ls();
  Ce(g, E => ({
    class: E,
    ...h
  }), [() => yn("flex items-center", t.class)]);
  var I = $(g);
  Ot(I, () => t.children ?? Gt), Y(g), vn(g, E => r(E), () => r()), C(u, g), $t()
}
var Me, Xe;
class Ps {
  constructor(t, r) {
    ft(this, Me, () => {});
    ft(this, Xe, w(() => p(this, Me).call(this)));
    let h;
    r !== void 0 && (h = r), he(this, Me, () => {
      try {
        return h
      } finally {
        h = t()
      }
    })
  }
  get current() {
    return i(p(this, Xe))
  }
}
Me = new WeakMap, Xe = new WeakMap;
const Os = 1,
  Rs = 9,
  ks = 11;

function Ms(u) {
  return en(u) && u.nodeType === Os && typeof u.nodeName == "string"
}

function Hn(u) {
  return en(u) && u.nodeType === Rs
}

function Bs(u) {
  var t;
  return en(u) && ((t = u.constructor) == null ? void 0 : t.name) === "VisualViewport"
}

function Hs(u) {
  return en(u) && u.nodeType !== void 0
}

function Us(u) {
  return Hs(u) && u.nodeType === ks && "host" in u
}

function Ws(u) {
  return Hn(u) ? u : Bs(u) ? u.document : (u == null ? void 0 : u.ownerDocument) ?? document
}

function Un(u) {
  var t;
  return Us(u) ? Un(u.host) : Hn(u) ? u.defaultView ?? window : Ms(u) ? ((t = u.ownerDocument) == null ? void 0 : t.defaultView) ?? window : window
}

function Vs(u) {
  let t = u.activeElement;
  for (; t != null && t.shadowRoot;) {
    const r = t.shadowRoot.activeElement;
    if (r === t) break;
    t = r
  }
  return t
}
var Be;
class Fs {
  constructor(t) {
    yt(this, "element");
    ft(this, Be, w(() => this.element.current ? this.element.current.getRootNode() ?? document : document));
    yt(this, "getDocument", () => Ws(this.root));
    yt(this, "getWindow", () => this.getDocument().defaultView ?? window);
    yt(this, "getActiveElement", () => Vs(this.root));
    yt(this, "isActiveElement", t => t === this.getActiveElement());
    yt(this, "querySelector", t => this.root ? this.root.querySelector(t) : null);
    yt(this, "querySelectorAll", t => this.root ? this.root.querySelectorAll(t) : []);
    yt(this, "setTimeout", (t, r) => this.getWindow().setTimeout(t, r));
    yt(this, "clearTimeout", t => this.getWindow().clearTimeout(t));
    typeof t == "function" ? this.element = Lt(t) : this.element = t
  }
  get root() {
    return i(p(this, Be))
  }
  set root(t) {
    v(p(this, Be), t)
  }
  getElementById(t) {
    return this.root.getElementById(t)
  }
}
Be = new WeakMap;
const zs = 18,
  Wn = 40,
  Gs = `${Wn}px`,
  js = ["[data-lastpass-icon-root]", "com-1password-button", "[data-dashlanecreated]", '[style$="2147483647 !important;"]'].join(",");

function Ks({
  containerRef: u,
  inputRef: t,
  pushPasswordManagerStrategy: r,
  isFocused: h,
  domContext: g
}) {
  let I = it(!1),
    E = it(!1),
    M = it(!1);

  function U() {
    const y = r.current;
    return y === "none" ? !1 : y === "increase-width" && i(I) && i(E)
  }

  function x() {
    const y = u.current,
      A = t.current;
    if (!y || !A || i(M) || r.current === "none") return;
    const D = y,
      X = D.getBoundingClientRect().left + D.offsetWidth,
      R = D.getBoundingClientRect().top + D.offsetHeight / 2,
      rt = X - zs,
      k = R;
    g.querySelectorAll(js).length === 0 && g.getDocument().elementFromPoint(rt, k) === y || (v(I, !0), v(M, !0))
  }
  return Rt(() => {
    const y = u.current;
    if (!y || r.current === "none") return;

    function A() {
      const R = Un(y).innerWidth - y.getBoundingClientRect().right;
      v(E, R >= Wn)
    }
    A();
    const D = setInterval(A, 1e3);
    return () => {
      clearInterval(D)
    }
  }), Rt(() => {
    const y = h.current || g.getActiveElement() === t.current;
    if (r.current === "none" || !y) return;
    const A = setTimeout(x, 0),
      D = setTimeout(x, 2e3),
      X = setTimeout(x, 5e3),
      R = setTimeout(() => {
        v(M, !0)
      }, 6e3);
    return () => {
      clearTimeout(A), clearTimeout(D), clearTimeout(X), clearTimeout(R)
    }
  }), {
    get hasPwmBadge() {
      return i(I)
    },
    get willPushPwmBadge() {
      return U()
    },
    PWM_BADGE_SPACE_WIDTH: Gs
  }
}
const Vn = ci({
    component: "pin-input",
    parts: ["root", "cell"]
  }),
  Ys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "Home", "End", "Escape", "Enter", "Tab", "Shift", "Control", "Meta"];
var Xt, be, ce, zt, Qt, we, ie, de, fe, Ie, Qe, He, Ue, Je, Ze, Fn, We, Ve, $e, Fe;
const Cn = class Cn {
  constructor(t) {
    ft(this, Ze);
    yt(this, "opts");
    yt(this, "attachment");
    ft(this, Xt, Sn(null));
    ft(this, be, it(!1));
    yt(this, "inputAttachment", dn(p(this, Xt)));
    ft(this, ce, Sn(!1));
    ft(this, zt, it(null));
    ft(this, Qt, it(null));
    ft(this, we, new Ps(() => this.opts.value.current ?? ""));
    ft(this, ie, w(() => typeof this.opts.pattern.current == "string" ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current));
    ft(this, de, it(pn({
      prev: [null, null, "none"],
      willSyntheticBlur: !1
    })));
    ft(this, fe);
    ft(this, Ie);
    yt(this, "domContext");
    yt(this, "onkeydown", t => {
      const r = t.key;
      Ys.includes(r) || t.ctrlKey || t.metaKey || r && i(p(this, ie)) && !i(p(this, ie)).test(r) && t.preventDefault()
    });
    ft(this, Qe, w(() => ({
      position: "relative",
      cursor: this.opts.disabled.current ? "default" : "text",
      userSelect: "none",
      WebkitUserSelect: "none",
      pointerEvents: "none"
    })));
    ft(this, He, w(() => ({
      id: this.opts.id.current,
      [Vn.root]: "",
      style: i(p(this, Qe)),
      ...this.attachment
    })));
    ft(this, Ue, w(() => ({
      style: {
        position: "absolute",
        inset: 0,
        pointerEvents: "none"
      }
    })));
    ft(this, Je, w(() => ({
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
    ft(this, We, () => {
      var rt;
      const t = p(this, Xt).current,
        r = this.opts.ref.current;
      if (!t || !r) return;
      if (this.domContext.getActiveElement() !== t) {
        v(p(this, zt), null), v(p(this, Qt), null);
        return
      }
      const h = t.selectionStart,
        g = t.selectionEnd,
        I = t.selectionDirection ?? "none",
        E = t.maxLength,
        M = t.value,
        U = i(p(this, de)).prev;
      let x = -1,
        y = -1,
        A;
      if (M.length !== 0 && h !== null && g !== null) {
        const k = h === g,
          b = h === M.length && M.length < E;
        if (k && !b) {
          const S = h;
          if (S === 0) x = 0, y = 1, A = "forward";
          else if (S === E) x = S - 1, y = S, A = "backward";
          else if (E > 1 && M.length > 1) {
            let W = 0;
            if (U[0] !== null && U[1] !== null) {
              A = S < U[1] ? "backward" : "forward";
              const T = U[0] === U[1] && U[0] < E;
              A === "backward" && !T && (W = -1)
            }
            x = W + S, y = W + S + 1
          }
        }
        x !== -1 && y !== -1 && x !== y && ((rt = p(this, Xt).current) == null || rt.setSelectionRange(x, y, A))
      }
      const D = x !== -1 ? x : h,
        X = y !== -1 ? y : g,
        R = A ?? I;
      v(p(this, zt), D, !0), v(p(this, Qt), X, !0), i(p(this, de)).prev = [D, X, R]
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
          g = r.value.length;
        r.setSelectionRange(h, g), v(p(this, zt), h, !0), v(p(this, Qt), g, !0)
      }
      p(this, ce).current = !0
    });
    yt(this, "onpaste", t => {
      var y, A, D, X;
      const r = p(this, Xt).current;
      if (!r) return;
      const h = R => {
          const rt = r.selectionStart === null ? void 0 : r.selectionStart,
            k = r.selectionEnd === null ? void 0 : r.selectionEnd,
            b = rt !== k,
            S = this.opts.value.current;
          return (b ? S.slice(0, rt) + R + S.slice(k) : S.slice(0, rt) + R + S.slice(rt)).slice(0, this.opts.maxLength.current)
        },
        g = R => R.length > 0 && i(p(this, ie)) && !i(p(this, ie)).test(R);
      if (!((y = this.opts.pasteTransformer) != null && y.current) && (!p(this, Ie).isIOS || !t.clipboardData || !r)) {
        const R = h((A = t.clipboardData) == null ? void 0 : A.getData("text/plain"));
        g(R) && t.preventDefault();
        return
      }
      const I = ((D = t.clipboardData) == null ? void 0 : D.getData("text/plain")) ?? "",
        E = (X = this.opts.pasteTransformer) != null && X.current ? this.opts.pasteTransformer.current(I) : I;
      t.preventDefault();
      const M = h(E);
      if (g(M)) return;
      r.value = M, this.opts.value.current = M;
      const U = Math.min(M.length, this.opts.maxLength.current - 1),
        x = M.length;
      r.setSelectionRange(U, x), v(p(this, zt), U, !0), v(p(this, Qt), x, !0)
    });
    yt(this, "onmouseover", t => {
      v(p(this, be), !0)
    });
    yt(this, "onmouseleave", t => {
      v(p(this, be), !1)
    });
    yt(this, "onblur", t => {
      if (i(p(this, de)).willSyntheticBlur) {
        i(p(this, de)).willSyntheticBlur = !1;
        return
      }
      p(this, ce).current = !1
    });
    ft(this, Ve, w(() => {
      var t;
      return {
        id: this.opts.inputId.current,
        style: i(p(this, Je)),
        autocomplete: this.opts.autocomplete.current || "one-time-code",
        "data-pin-input-input": "",
        "data-pin-input-input-mss": i(p(this, zt)),
        "data-pin-input-input-mse": i(p(this, Qt)),
        inputmode: this.opts.inputmode.current,
        pattern: (t = i(p(this, ie))) == null ? void 0 : t.source,
        maxlength: this.opts.maxLength.current,
        value: this.opts.value.current,
        disabled: ui(this.opts.disabled.current),
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
    ft(this, $e, w(() => Array.from({
      length: this.opts.maxLength.current
    }).map((t, r) => {
      const h = p(this, ce).current && i(p(this, zt)) !== null && i(p(this, Qt)) !== null && (i(p(this, zt)) === i(p(this, Qt)) && r === i(p(this, zt)) || r >= i(p(this, zt)) && r < i(p(this, Qt))),
        g = this.opts.value.current[r] !== void 0 ? this.opts.value.current[r] : null;
      return {
        char: g,
        isActive: h,
        hasFakeCaret: h && g === null
      }
    })));
    ft(this, Fe, w(() => ({
      cells: i(p(this, $e)),
      isFocused: p(this, ce).current,
      isHovering: i(p(this, be))
    })));
    var r;
    this.opts = t, this.attachment = dn(this.opts.ref), this.domContext = new Fs(t.ref), he(this, Ie, {
      value: this.opts.value,
      isIOS: typeof window < "u" && ((r = window == null ? void 0 : window.CSS) == null ? void 0 : r.supports("-webkit-touch-callout", "none"))
    }), he(this, fe, Ks({
      containerRef: this.opts.ref,
      inputRef: p(this, Xt),
      isFocused: p(this, ce),
      pushPasswordManagerStrategy: this.opts.pushPasswordManagerStrategy,
      domContext: this.domContext
    })), me(() => {
      const h = p(this, Xt).current,
        g = this.opts.ref.current;
      if (!h || !g) return;
      p(this, Ie).value.current !== h.value && (this.opts.value.current = h.value), i(p(this, de)).prev = [h.selectionStart, h.selectionEnd, h.selectionDirection ?? "none"];
      const I = Oe(this.domContext.getDocument(), "selectionchange", p(this, We), {
        capture: !0
      });
      p(this, We).call(this), this.domContext.getActiveElement() === h && (p(this, ce).current = !0), this.domContext.getElementById("pin-input-style") || wn(this, Ze, Fn).call(this);
      const E = () => {
        g && g.style.setProperty("--bits-pin-input-root-height", `${h.clientHeight}px`)
      };
      E();
      const M = new ResizeObserver(E);
      return M.observe(h), () => {
        I(), M.disconnect()
      }
    }), li([() => this.opts.value.current, () => p(this, Xt).current], () => {
      qs(() => {
        const h = p(this, Xt).current;
        if (!h) return;
        h.dispatchEvent(new Event("input"));
        const g = h.selectionStart,
          I = h.selectionEnd,
          E = h.selectionDirection ?? "none";
        g !== null && I !== null && (v(p(this, zt), g, !0), v(p(this, Qt), I, !0), i(p(this, de)).prev = [g, I, E])
      }, this.domContext)
    }), Rt(() => {
      const h = this.opts.value.current,
        g = p(this, we).current,
        I = this.opts.maxLength.current,
        E = this.opts.onComplete.current;
      g !== void 0 && h !== g && g.length < I && h.length === I && E(h)
    })
  }
  static create(t) {
    return new Cn(t)
  }
  get rootProps() {
    return i(p(this, He))
  }
  set rootProps(t) {
    v(p(this, He), t)
  }
  get inputWrapperProps() {
    return i(p(this, Ue))
  }
  set inputWrapperProps(t) {
    v(p(this, Ue), t)
  }
  get inputProps() {
    return i(p(this, Ve))
  }
  set inputProps(t) {
    v(p(this, Ve), t)
  }
  get snippetProps() {
    return i(p(this, Fe))
  }
  set snippetProps(t) {
    v(p(this, Fe), t)
  }
};
Xt = new WeakMap, be = new WeakMap, ce = new WeakMap, zt = new WeakMap, Qt = new WeakMap, we = new WeakMap, ie = new WeakMap, de = new WeakMap, fe = new WeakMap, Ie = new WeakMap, Qe = new WeakMap, He = new WeakMap, Ue = new WeakMap, Je = new WeakMap, Ze = new WeakSet, Fn = function() {
  const t = this.domContext.getDocument(),
    r = t.createElement("style");
  if (r.id = "pin-input-style", t.head.appendChild(r), r.sheet) {
    const h = "background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;";
    Le(r.sheet, "[data-pin-input-input]::selection { background: transparent !important; color: transparent !important; }"), Le(r.sheet, `[data-pin-input-input]:autofill { ${h} }`), Le(r.sheet, `[data-pin-input-input]:-webkit-autofill { ${h} }`), Le(r.sheet, "@supports (-webkit-touch-callout: none) { [data-pin-input-input] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }"), Le(r.sheet, "[data-pin-input-input] + * { pointer-events: all !important; }")
  }
}, We = new WeakMap, Ve = new WeakMap, $e = new WeakMap, Fe = new WeakMap;
let fn = Cn;
var ze;
const _n = class _n {
  constructor(t) {
    yt(this, "opts");
    yt(this, "attachment");
    ft(this, ze, w(() => ({
      id: this.opts.id.current,
      [Vn.cell]: "",
      "data-active": this.opts.cell.current.isActive ? "" : void 0,
      "data-inactive": this.opts.cell.current.isActive ? void 0 : "",
      ...this.attachment
    })));
    this.opts = t, this.attachment = dn(this.opts.ref)
  }
  static create(t) {
    return new _n(t)
  }
  get props() {
    return i(p(this, ze))
  }
  set props(t) {
    v(p(this, ze), t)
  }
};
ze = new WeakMap;
let mn = _n;

function qs(u, t) {
  const r = t.setTimeout(u, 0),
    h = t.setTimeout(u, 10),
    g = t.setTimeout(u, 50);
  return [r, h, g]
}

function Le(u, t) {
  try {
    u.insertRule(t)
  } catch {
    console.error("pin input could not insert CSS rule:", t)
  }
}
var Xs = dt("<div><!> <div><input/></div></div>");

function Qs(u, t) {
  const r = On();
  Zt(t, !0);
  let h = K(t, "id", 19, () => hn(r)),
    g = K(t, "inputId", 19, () => `${hn(r)}-input`),
    I = K(t, "ref", 15, null),
    E = K(t, "maxlength", 3, 6),
    M = K(t, "textalign", 3, "left"),
    U = K(t, "inputmode", 3, "numeric"),
    x = K(t, "onComplete", 3, Nn),
    y = K(t, "pushPasswordManagerStrategy", 3, "increase-width"),
    A = K(t, "class", 3, ""),
    D = K(t, "autocomplete", 3, "one-time-code"),
    X = K(t, "disabled", 3, !1),
    R = K(t, "value", 15, ""),
    rt = K(t, "onValueChange", 3, Nn),
    k = Ee(t, ["$$slots", "$$events", "$$legacy", "id", "inputId", "ref", "maxlength", "textalign", "pattern", "inputmode", "onComplete", "pushPasswordManagerStrategy", "class", "children", "autocomplete", "disabled", "value", "onValueChange", "pasteTransformer"]);
  const b = fn.create({
      id: Lt(() => h()),
      ref: Lt(() => I(), Ct => I(Ct)),
      inputId: Lt(() => g()),
      autocomplete: Lt(() => D()),
      maxLength: Lt(() => E()),
      textAlign: Lt(() => M()),
      disabled: Lt(() => X()),
      inputmode: Lt(() => U()),
      pattern: Lt(() => t.pattern),
      onComplete: Lt(() => x()),
      value: Lt(() => R(), Ct => {
        R(Ct), rt()(Ct)
      }),
      pushPasswordManagerStrategy: Lt(() => y()),
      pasteTransformer: Lt(() => t.pasteTransformer)
    }),
    S = w(() => Ye(k, b.inputProps)),
    W = w(() => Ye(b.rootProps, {
      class: A()
    })),
    T = w(() => Ye(b.inputWrapperProps, {}));
  var z = Xs();
  Ce(z, () => ({
    ...i(W)
  }));
  var G = $(z);
  Ot(G, () => t.children ?? Gt, () => b.snippetProps);
  var mt = bt(G, 2);
  Ce(mt, () => ({
    ...i(T)
  }));
  var Nt = $(mt);
  Ce(Nt, () => ({
    ...i(S)
  }), void 0, void 0, void 0, void 0, !0), Y(mt), Y(z), C(u, z), $t()
}
var Js = dt("<div><!></div>");

function Zs(u, t) {
  const r = On();
  Zt(t, !0);
  let h = K(t, "id", 19, () => hn(r)),
    g = K(t, "ref", 15, null),
    I = Ee(t, ["$$slots", "$$events", "$$legacy", "id", "ref", "cell", "child", "children"]);
  const E = mn.create({
      id: Lt(() => h()),
      ref: Lt(() => g(), D => g(D)),
      cell: Lt(() => t.cell)
    }),
    M = w(() => Ye(I, E.props));
  var U = q(),
    x = j(U);
  {
    var y = D => {
        var X = q(),
          R = j(X);
        Ot(R, () => t.child, () => ({
          props: i(M)
        })), C(D, X)
      },
      A = D => {
        var X = Js();
        Ce(X, () => ({
          ...i(M)
        }));
        var R = $(X);
        Ot(R, () => t.children ?? Gt), Y(X), C(D, X)
      };
    lt(x, D => {
      t.child ? D(y) : D(A, !1)
    })
  }
  C(u, U), $t()
}
var $s = dt('<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>'),
  to = dt(" <!>", 1);

function eo(u, t) {
  Zt(t, !0);
  let r = K(t, "ref", 15, null),
    h = Ee(t, ["$$slots", "$$events", "$$legacy", "ref", "cell", "class"]);
  var g = q(),
    I = j(g);
  {
    let E = w(() => yn("border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md", t.cell.isActive && "ring-base-content/40 z-10 ring-2", t.class));
    Jt(I, () => Zs, (M, U) => {
      U(M, Pe({
        get cell() {
          return t.cell
        },
        get class() {
          return i(E)
        }
      }, () => h, {
        get ref() {
          return r()
        },
        set ref(x) {
          r(x)
        },
        children: (x, y) => {
          Rn();
          var A = to(),
            D = j(A),
            X = bt(D);
          {
            var R = rt => {
              var k = $s();
              C(rt, k)
            };
            lt(X, rt => {
              t.cell.hasFakeCaret && rt(R)
            })
          }
          Et(() => Pt(D, `${t.cell.char??""} `)), C(x, A)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  C(u, g), $t()
}

function no(u, t) {
  Zt(t, !0);
  let r = K(t, "ref", 15, null),
    h = K(t, "value", 15, ""),
    g = Ee(t, ["$$slots", "$$events", "$$legacy", "ref", "class", "value"]);
  var I = q(),
    E = j(I);
  {
    let M = w(() => yn("flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed", t.class));
    Jt(E, () => Qs, (U, x) => {
      x(U, Pe({
        get class() {
          return i(M)
        }
      }, () => g, {
        get ref() {
          return r()
        },
        set ref(y) {
          r(y)
        },
        get value() {
          return h()
        },
        set value(y) {
          h(y)
        }
      }))
    })
  }
  C(u, I), $t()
}
var ln = {
    exports: {}
  },
  Pn;

function io() {
  return Pn || (Pn = 1, (function(u) {
    (function(t) {
      u.exports ? u.exports = t() : window.intlTelInput = t()
    })(() => {
      var t = (() => {
        var r = Object.defineProperty,
          h = Object.getOwnPropertyDescriptor,
          g = Object.getOwnPropertyNames,
          I = Object.prototype.hasOwnProperty,
          E = (a, e) => {
            for (var n in e) r(a, n, {
              get: e[n],
              enumerable: !0
            })
          },
          M = (a, e, n, s) => {
            if (e && typeof e == "object" || typeof e == "function")
              for (let o of g(e)) !I.call(a, o) && o !== n && r(a, o, {
                get: () => e[o],
                enumerable: !(s = h(e, o)) || s.enumerable
              });
            return a
          },
          U = a => M(r({}, "__esModule", {
            value: !0
          }), a),
          x = {};
        E(x, {
          Iti: () => et,
          default: () => Dt
        });
        var y = [
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
          A = [];
        for (const a of y) A.push({
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
        var D = A,
          X = {
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
          R = X,
          rt = {
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
          k = rt,
          b = {
            ...R,
            ...k
          },
          S = b,
          W = {
            OPEN_COUNTRY_DROPDOWN: "open:countrydropdown",
            CLOSE_COUNTRY_DROPDOWN: "close:countrydropdown",
            COUNTRY_CHANGE: "countrychange",
            INPUT: "input"
          },
          T = {
            HIDE: "iti__hide",
            V_HIDE: "iti__v-hide",
            ARROW_UP: "iti__arrow--up",
            GLOBE: "iti__globe",
            FLAG: "iti__flag",
            COUNTRY_ITEM: "iti__country",
            HIGHLIGHT: "iti__highlight"
          },
          z = {
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
          mt = {
            ALPHA_UNICODE: new RegExp("\\p{L}", "u"),
            NON_PLUS_NUMERIC: /[^+0-9]/,
            NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g,
            HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/
          },
          Nt = {
            HIDDEN_SEARCH_RESET_MS: 1e3
          },
          Ct = {
            UNKNOWN_NUMBER_TYPE: -99,
            UNKNOWN_VALIDATION_ERROR: -99
          },
          wt = {
            SANE_SELECTED_WITH_DIAL_WIDTH: 78,
            SANE_SELECTED_NO_DIAL_WIDTH: 42,
            INPUT_PADDING_EXTRA_LEFT: 6
          },
          It = {
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
          V = {
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
          ut = a => typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia(a).matches,
          ht = () => {
            if (typeof navigator < "u" && typeof window < "u") {
              const a = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                e = ut("(max-width: 500px)"),
                n = ut("(max-height: 600px)"),
                s = ut("(pointer: coarse)");
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
            useFullscreenPopup: ht(),
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
          N = (a, e) => {
            const n = se(e),
              s = [],
              o = [],
              c = [],
              l = [],
              f = [],
              d = [];
            for (const P of a) P.iso2 === n ? s.push(P) : P.normalisedName.startsWith(n) ? o.push(P) : P.normalisedName.includes(n) ? c.push(P) : n === P.dialCode || n === P.dialCodePlus ? l.push(P) : P.dialCodePlus.includes(n) ? f.push(P) : P.initials.includes(n) && d.push(P);
            const _ = (P, ct) => P.priority - ct.priority;
            return [...s.sort(_), ...o.sort(_), ...c.sort(_), ...l.sort(_), ...f.sort(_), ...d.sort(_)]
          },
          F = (a, e) => {
            const n = e.toLowerCase();
            for (const s of a)
              if (s.name.toLowerCase().startsWith(n)) return s;
            return null
          },
          vt = a => Object.keys(a).filter(e => !!a[e]).join(" "),
          tt = (a, e, n) => {
            const s = document.createElement(a);
            return e && Object.entries(e).forEach(([o, c]) => s.setAttribute(o, c)), n && n.appendChild(s), s
          },
          kt = () => `
  <svg class="iti__search-icon-svg" width="14" height="14" viewBox="0 0 24 24" focusable="false" ${V.HIDDEN}="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>`,
          qt = a => {
            const e = `iti-${a}-clear-mask`;
            return `
    <svg class="iti__search-clear-svg" width="12" height="12" viewBox="0 0 16 16" ${V.HIDDEN}="true" focusable="false">
      <mask id="${e}" maskUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="white" />
        <path d="M5.2 5.2 L10.8 10.8 M10.8 5.2 L5.2 10.8" stroke="black" stroke-linecap="round" class="iti__search-clear-x" />
      </mask>
      <circle cx="8" cy="8" r="8" class="iti__search-clear-bg" mask="url(#${e})" />
    </svg>`
          },
          pe = class {
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
              }), c = tt("div", {
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
                this.countryContainer = tt("div", {
                  class: `iti__country-container ${T.V_HIDE}`
                }, a), e ? (this.selectedCountry = tt("button", {
                  type: "button",
                  class: "iti__selected-country",
                  [V.EXPANDED]: "false",
                  [V.LABEL]: this.options.i18n.noCountrySelected,
                  [V.HASPOPUP]: "dialog",
                  [V.CONTROLS]: `iti-${this.id}__dropdown-content`
                }, this.countryContainer), this.telInput.disabled && this.selectedCountry.setAttribute("disabled", "true")) : this.selectedCountry = tt("div", {
                  class: "iti__selected-country"
                }, this.countryContainer);
                const o = tt("div", {
                  class: "iti__selected-country-primary"
                }, this.selectedCountry);
                this.selectedCountryInner = tt("div", {
                  class: T.FLAG
                }, o), e && (this.dropdownArrow = tt("div", {
                  class: "iti__arrow",
                  [V.HIDDEN]: "true"
                }, o)), n && (this.selectedDialCode = tt("div", {
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
              } = this.options, l = a ? "" : "iti--flexible-dropdown-width";
              if (this.dropdownContent = tt("div", {
                  id: `iti-${this.id}__dropdown-content`,
                  class: `iti__dropdown-content ${T.HIDE} ${l}`,
                  role: "dialog",
                  [V.MODAL]: "true"
                }), this.isRTL && this.dropdownContent.setAttribute("dir", "rtl"), n && this._buildSearchUI(), this.countryList = tt("ul", {
                  class: "iti__country-list",
                  id: `iti-${this.id}__country-listbox`,
                  role: "listbox",
                  [V.LABEL]: s.countryListAriaLabel
                }, this.dropdownContent), this._appendListItems(), n && this.updateSearchResultsA11yText(), o) {
                const f = vt({
                  iti: !0,
                  "iti--container": !0,
                  "iti--fullscreen-popup": e,
                  "iti--inline-dropdown": !e,
                  [c]: !!c
                });
                this.dropdown = tt("div", {
                  class: f
                }), this.dropdown.appendChild(this.dropdownContent)
              } else this.countryContainer.appendChild(this.dropdownContent)
            }
            _buildSearchUI() {
              const {
                i18n: a
              } = this.options, e = tt("div", {
                class: "iti__search-input-wrapper"
              }, this.dropdownContent);
              this.searchIcon = tt("span", {
                class: "iti__search-icon",
                [V.HIDDEN]: "true"
              }, e), this.searchIcon.innerHTML = kt(), this.searchInput = tt("input", {
                id: `iti-${this.id}__search-input`,
                type: "search",
                class: "iti__search-input",
                placeholder: a.searchPlaceholder,
                role: "combobox",
                [V.EXPANDED]: "true",
                [V.LABEL]: a.searchPlaceholder,
                [V.CONTROLS]: `iti-${this.id}__country-listbox`,
                [V.AUTOCOMPLETE]: "list",
                autocomplete: "off"
              }, e), this.searchClearButton = tt("button", {
                type: "button",
                class: `iti__search-clear ${T.HIDE}`,
                [V.LABEL]: a.clearSearchAriaLabel,
                tabindex: "-1"
              }, e), this.searchClearButton.innerHTML = qt(this.id), this.searchResultsA11yText = tt("span", {
                class: "iti__a11y-text"
              }, this.dropdownContent), this.searchNoResults = tt("div", {
                class: `iti__no-results ${T.HIDE}`,
                [V.HIDDEN]: "true"
              }, this.dropdownContent), this.searchNoResults.textContent = a.zeroSearchResults
            }
            _maybeUpdateInputPaddingAndReveal() {
              this.countryContainer && (this.updateInputPadding(), this.countryContainer.classList.remove(T.V_HIDE))
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
                  const l = (n = this.telInput.form) == null ? void 0 : n.querySelector(`input[name="${c.phone}"]`);
                  l ? this.hiddenInput = l : (this.hiddenInput = tt("input", {
                    type: "hidden",
                    name: c.phone
                  }), a.appendChild(this.hiddenInput))
                }
                if (c.country) {
                  const l = (s = this.telInput.form) == null ? void 0 : s.querySelector(`input[name="${c.country}"]`);
                  l ? this.hiddenInputCountry = l : (this.hiddenInputCountry = tt("input", {
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
                    [T.COUNTRY_ITEM]: !0
                  }),
                  o = tt("li", {
                    id: `iti-${this.id}__item-${n.iso2}`,
                    class: s,
                    tabindex: "-1",
                    role: "option",
                    [V.SELECTED]: "false"
                  });
                o.dataset.dialCode = n.dialCode, o.dataset.countryCode = n.iso2, n.nodeById[this.id] = o, this.options.showFlags && tt("div", {
                  class: `${T.FLAG} iti__${n.iso2}`
                }, o);
                const c = tt("span", {
                  class: "iti__country-name"
                }, o);
                c.textContent = n.name;
                const l = tt("span", {
                  class: "iti__dial-code"
                }, o);
                this.isRTL && l.setAttribute("dir", "ltr"), l.textContent = `+${n.dialCode}`, a.appendChild(o)
              }
              this.countryList.appendChild(a)
            }
            updateInputPadding() {
              if (this.selectedCountry) {
                const a = this.options.separateDialCode ? wt.SANE_SELECTED_WITH_DIAL_WIDTH : wt.SANE_SELECTED_NO_DIAL_WIDTH,
                  n = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth() || a) + wt.INPUT_PADDING_EXTRA_LEFT;
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
                l = a.offsetHeight,
                f = a.getBoundingClientRect().top + n,
                d = f + l,
                _ = f - o + e.scrollTop;
              if (f < o) e.scrollTop = _;
              else if (d > c) {
                const P = s - l;
                e.scrollTop = _ - P
              }
            }
            highlightListItem(a, e) {
              const n = this.highlightedItem;
              if (n && n.classList.remove(T.HIGHLIGHT), this.highlightedItem = a, this.highlightedItem && (this.highlightedItem.classList.add(T.HIGHLIGHT), this.options.countrySearch)) {
                const s = this.highlightedItem.getAttribute("id") || "";
                this.searchInput.setAttribute(V.ACTIVE_DESCENDANT, s)
              }
              e && this.highlightedItem.focus()
            }
            updateSelectedItem(a) {
              if (this.selectedItem && this.selectedItem.dataset.countryCode !== a && (this.selectedItem.setAttribute(V.SELECTED, "false"), this.selectedItem = null), a && !this.selectedItem) {
                const e = this.countryList.querySelector(`[data-country-code="${a}"]`);
                e && (e.setAttribute(V.SELECTED, "true"), this.selectedItem = e)
              }
            }
            filterCountries(a) {
              this.countryList.innerHTML = "";
              let e = !0;
              for (const n of a) {
                const s = n.nodeById[this.id];
                s && (this.countryList.appendChild(s), e && (this.highlightListItem(s, !1), e = !1))
              }
              e ? (this.highlightListItem(null, !1), this.searchNoResults && this.searchNoResults.classList.remove(T.HIDE)) : this.searchNoResults && this.searchNoResults.classList.add(T.HIDE), this.countryList.scrollTop = 0, this.updateSearchResultsA11yText()
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
              return D.filter(o => s.includes(o.iso2))
            } else if (n.length) {
              const s = n.map(o => o.toLowerCase());
              return D.filter(o => !s.includes(o.iso2))
            }
            return D
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
              o = (l, f) => {
                if (!l || !f) return;
                f.length > n && (n = f.length), s.hasOwnProperty(f) || (s[f] = []);
                const d = s[f];
                d.includes(l) || d.push(l)
              },
              c = [...a].sort((l, f) => l.priority - f.priority);
            for (const l of c) {
              e.has(l.dialCode) || e.add(l.dialCode);
              for (let f = 1; f < l.dialCode.length; f++) {
                const d = l.dialCode.substring(0, f);
                o(l.iso2, d)
              }
              if (o(l.iso2, l.dialCode), l.areaCodes) {
                const f = s[l.dialCode][0];
                for (const d of l.areaCodes) {
                  for (let _ = 1; _ < d.length; _++) {
                    const P = d.substring(0, _),
                      ct = l.dialCode + P;
                    o(f, ct), o(l.iso2, ct)
                  }
                  o(l.iso2, l.dialCode + d)
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
                  l = o.indexOf(s.iso2),
                  f = c > -1,
                  d = l > -1;
                if (f || d) return f && d ? c - l : f ? -1 : 1
              }
              return n.name.localeCompare(s.name)
            })
          },
          Q = a => {
            for (const e of a) e.normalisedName = se(e.name), e.initials = e.normalisedName.split(/[^a-z]/).map(n => n[0]).join(""), e.dialCodePlus = `+${e.dialCode}`
          },
          ge = (a, e, n, s) => {
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
                dialCode: l
              } = s;
            return o && e.charAt(0) !== "+" && c.includes(`+${l}`) ? (c.split(`+${l}`)[1] || "").trim() : c
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
            if (e.startsWith(It.NANP) && e.length >= 4) {
              const n = e.substring(1, 4);
              return Se.includes(n)
            }
            return !1
          };
        for (const a of D) a.name = S[a.iso2];
        var Ne = 0,
          L = new Set(D.map(a => a.iso2)),
          O = a => L.has(a),
          et = class zn {
            constructor(e, n = {}) {
              this.id = Ne++, this.options = {
                ...Tt,
                ...n
              }, Kt(this.options, S), this.ui = new pe(e, this.options, this.id), this.isAndroid = zn._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = oe(this.options);
              const {
                dialCodes: s,
                dialCodeMaxLen: o,
                dialCodeToIso2Map: c
              } = Vt(this.countries);
              this.dialCodes = s, this.dialCodeMaxLen = o, this.dialCodeToIso2Map = c, this.countryByIso2 = new Map(this.countries.map(l => [l.iso2, l])), this._init()
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
              Ht(this.countries, this.options), St(this.countries, this.options), Q(this.countries)
            }
            _setInitialState(e = !1) {
              const n = this.ui.telInput.getAttribute("value"),
                s = this._normaliseNumerals(n),
                o = this._getTelInputValue(),
                l = s && s.startsWith("+") && (!o || !o.startsWith("+")) ? s : o,
                f = this._getDialCode(l),
                d = ve(l),
                {
                  initialCountry: _,
                  geoIpLookup: P
                } = this.options,
                ct = _ === Bt.AUTO && P;
              if (f && !d) this._updateCountryFromNumber(l);
              else if (!ct || e) {
                const ot = _ ? _.toLowerCase() : "";
                O(ot) ? this._setCountry(ot) : f && d ? this._setCountry(Mt.ISO2) : this._setCountry("")
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
                  this.ui.dropdownContent.classList.contains(T.HIDE) ? this.ui.telInput.focus() : l.preventDefault()
                },
                s = this.ui.telInput.closest("label");
              s && s.addEventListener("click", n, {
                signal: e
              });
              const o = () => {
                this.ui.dropdownContent.classList.contains(T.HIDE) && !this.ui.telInput.disabled && !this.ui.telInput.readOnly && this._openDropdown()
              };
              this.ui.selectedCountry.addEventListener("click", o, {
                signal: e
              });
              const c = l => {
                this.ui.dropdownContent.classList.contains(T.HIDE) && [z.ARROW_UP, z.ARROW_DOWN, z.SPACE, z.ENTER].includes(l.key) && (l.preventDefault(), l.stopPropagation(), this._openDropdown()), l.key === z.TAB && this._closeDropdown()
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
              if (e && !m.utils) {
                const c = () => {
                  var l;
                  (l = m.attachUtils(e)) == null || l.catch(() => {})
                };
                if (m.documentReady()) c();
                else {
                  const l = () => {
                    c()
                  };
                  window.addEventListener("load", l, {
                    signal: this.abortController.signal
                  })
                }
              } else this.resolveUtilsScriptPromise();
              n === Bt.AUTO && s && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
            }
            _loadAutoCountry() {
              m.autoCountry ? this.handleAutoCountry() : m.startedLoadingAutoCountry || (m.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == "function" && this.options.geoIpLookup((e = "") => {
                const n = e.toLowerCase();
                O(n) ? (m.autoCountry = n, setTimeout(() => J("handleAutoCountry"))) : (this._setInitialState(!0), J("rejectAutoCountryPromise"))
              }, () => {
                this._setInitialState(!0), J("rejectAutoCountryPromise")
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
              let l = !1;
              mt.ALPHA_UNICODE.test(this._getTelInputValue()) && (l = !0);
              const f = d => {
                const _ = this._getTelInputValue();
                if (this.isAndroid && (d == null ? void 0 : d.data) === "+" && s && o && c) {
                  const H = this.ui.telInput.selectionStart || 0,
                    pt = _.substring(0, H - 1),
                    Z = _.substring(H);
                  this._setTelInputValue(pt + Z), this._openDropdownWithPlus();
                  return
                }
                this._updateCountryFromNumber(_) && this._triggerCountryChange();
                const P = (d == null ? void 0 : d.data) && mt.NON_PLUS_NUMERIC.test(d.data),
                  ct = (d == null ? void 0 : d.inputType) === G.PASTE && _;
                P || ct && !e ? l = !0 : mt.NON_PLUS_NUMERIC.test(_) || (l = !1);
                const ot = (d == null ? void 0 : d.detail) && d.detail.isSetNumber,
                  B = this.userNumeralSet === "ascii";
                if (n && !l && !ot && B) {
                  const H = this.ui.telInput.selectionStart || 0,
                    Z = _.substring(0, H).replace(mt.NON_PLUS_NUMERIC_GLOBAL, "").length,
                    at = (d == null ? void 0 : d.inputType) === G.DELETE_FWD,
                    nt = this._getFullNumber(),
                    Ft = De(nt, _, m.utils, this.selectedCountryData, this.options.separateDialCode),
                    Ut = Te(Z, Ft, H, at);
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
                const c = l => {
                  if (l.key && l.key.length === 1 && !l.altKey && !l.ctrlKey && !l.metaKey) {
                    if (n && s && o && l.key === "+") {
                      l.preventDefault(), this._openDropdownWithPlus();
                      return
                    }
                    if (e) {
                      const f = this._getTelInputValue(),
                        _ = !f.startsWith("+") && this.ui.telInput.selectionStart === 0 && l.key === "+",
                        P = this._normaliseNumerals(l.key),
                        ct = /^[0-9]$/.test(P),
                        ot = n ? ct : _ || ct,
                        B = this.ui.telInput,
                        H = B.selectionStart,
                        pt = B.selectionEnd,
                        Z = f.slice(0, H),
                        at = f.slice(pt),
                        nt = Z + l.key + at,
                        Ft = this._getFullNumber(nt),
                        Ut = m.utils.getCoreNumber(Ft, this.selectedCountryData.iso2),
                        _t = this.maxCoreNumberLength && Ut.length > this.maxCoreNumberLength,
                        te = this._getNewCountryFromNumber(Ft) !== null;
                      (!ot || _t && !te && !_) && l.preventDefault()
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
                    l = this._getTelInputValue(),
                    f = l.slice(0, o),
                    d = l.slice(c),
                    _ = this.selectedCountryData.iso2,
                    P = n.clipboardData.getData("text"),
                    ct = this._normaliseNumerals(P),
                    ot = o === 0 && c > 0,
                    B = !l.startsWith("+") || ot,
                    H = ct.replace(mt.NON_PLUS_NUMERIC_GLOBAL, ""),
                    pt = H.startsWith("+"),
                    Z = H.replace(/\+/g, ""),
                    at = pt && B ? `+${Z}` : Z;
                  let nt = f + at + d;
                  if (nt.length > 5) {
                    let Ut = m.utils.getCoreNumber(nt, _);
                    for (; Ut.length === 0 && nt.length > 0;) nt = nt.slice(0, -1), Ut = m.utils.getCoreNumber(nt, _);
                    if (!Ut) return;
                    if (this.maxCoreNumberLength && Ut.length > this.maxCoreNumberLength)
                      if (s.selectionEnd === l.length) {
                        const _t = Ut.length - this.maxCoreNumberLength;
                        nt = nt.slice(0, nt.length - _t)
                      } else return
                  }
                  this._setTelInputValue(nt);
                  const Ft = o + at.length;
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
              if (this.dropdownAbortController = new AbortController, e && (this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`), this.ui.dropdownContent.classList.remove(T.HIDE), this.ui.selectedCountry.setAttribute(V.EXPANDED, "true"), this._setDropdownPosition(), n) {
                const s = this.ui.countryList.firstElementChild;
                s && (this.ui.highlightListItem(s, !1), this.ui.countryList.scrollTop = 0), this.ui.searchInput.focus()
              }
              this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(T.ARROW_UP), this._trigger(W.OPEN_COUNTRY_DROPDOWN)
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
                const o = (c = s.target) == null ? void 0 : c.closest(`.${T.COUNTRY_ITEM}`);
                o && this.ui.highlightListItem(o, !1)
              };
              this.ui.countryList.addEventListener("mouseover", n, {
                signal: e
              })
            }
            _bindDropdownCountryClickListener(e) {
              const n = s => {
                var c;
                const o = (c = s.target) == null ? void 0 : c.closest(`.${T.COUNTRY_ITEM}`);
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
                [z.ARROW_UP, z.ARROW_DOWN, z.ENTER, z.ESC].includes(c.key) && (c.preventDefault(), c.stopPropagation(), c.key === z.ARROW_UP || c.key === z.ARROW_DOWN ? this._handleUpDownKey(c.key) : c.key === z.ENTER ? this._handleEnterKey() : c.key === z.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && mt.HIDDEN_SEARCH_CHAR.test(c.key) && (c.stopPropagation(), s && clearTimeout(s), n += c.key.toLowerCase(), this._searchForCountry(n), s = setTimeout(() => {
                  n = ""
                }, Nt.HIDDEN_SEARCH_RESET_MS))
              };
              document.addEventListener("keydown", o, {
                signal: e
              })
            }
            _bindDropdownSearchListeners(e) {
              const n = () => {
                const l = this.ui.searchInput.value.trim();
                this._filterCountriesByQuery(l), this.ui.searchInput.value ? this.ui.searchClearButton.classList.remove(T.HIDE) : this.ui.searchClearButton.classList.add(T.HIDE)
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
              const n = F(this.countries, e);
              if (n) {
                const s = n.nodeById[this.id];
                this.ui.highlightListItem(s, !1), this.ui.scrollTo(s)
              }
            }
            _filterCountriesByQuery(e) {
              let n;
              e === "" ? n = this.countries : n = N(this.countries, e), this.ui.filterCountries(n)
            }
            _handleUpDownKey(e) {
              var s, o;
              let n = e === z.ARROW_UP ? (s = this.ui.highlightedItem) == null ? void 0 : s.previousElementSibling : (o = this.ui.highlightedItem) == null ? void 0 : o.nextElementSibling;
              !n && this.ui.countryList.childElementCount > 1 && (n = e === z.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), n && (this.ui.scrollTo(n), this.ui.highlightListItem(n, !1))
            }
            _handleEnterKey() {
              this.ui.highlightedItem && this._selectListItem(this.ui.highlightedItem)
            }
            _updateValFromNumber(e) {
              let n = e;
              if (this.options.formatOnDisplay && m.utils && this.selectedCountryData) {
                const s = this.options.nationalMode || !n.startsWith("+") && !this.options.separateDialCode,
                  {
                    NATIONAL: o,
                    INTERNATIONAL: c
                  } = m.utils.numberFormat,
                  l = s ? o : c;
                n = m.utils.formatNumber(n, this.selectedCountryData.iso2, l)
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
              const o = this.selectedCountryData.iso2,
                c = this.selectedCountryData.dialCode;
              s = this._ensureHasDialCode(s);
              const l = this._getDialCode(s, !0),
                f = Yt(s);
              if (l) {
                const d = Yt(l),
                  _ = this.dialCodeToIso2Map[d];
                if (_.length === 1) return _[0] === o ? null : _[0];
                if (!o && this.defaultCountry && _.includes(this.defaultCountry)) return this.defaultCountry;
                if (c === It.NANP && ve(f)) return null;
                const {
                  areaCodes: ct,
                  priority: ot
                } = this.selectedCountryData;
                if (ct) {
                  const at = ct.map(nt => `${c}${nt}`);
                  for (const nt of at)
                    if (f.startsWith(nt)) return null
                }
                const H = ct && !(ot === 0) && f.length > d.length,
                  pt = o && _.includes(o) && !H,
                  Z = o === _[0];
                if (!pt && !Z) return _[0]
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
              } = this.options, l = this.selectedCountryData.iso2 || "";
              if (c && this.ui.updateSelectedItem(e), this.selectedCountryData = e ? this.countryByIso2.get(e) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.ui.selectedCountry) {
                const f = e && s ? `${T.FLAG} iti__${e}` : `${T.FLAG} ${T.GLOBE}`;
                let d, _;
                if (e) {
                  const {
                    name: P,
                    dialCode: ct
                  } = this.selectedCountryData;
                  _ = P, d = o.selectedCountryAriaLabel.replace("${countryName}", P).replace("${dialCode}", `+${ct}`)
                } else _ = o.noCountrySelected, d = o.noCountrySelected;
                this.ui.selectedCountryInner.className = f, this.ui.selectedCountry.setAttribute("title", _), this.ui.selectedCountry.setAttribute(V.LABEL, d)
              }
              if (n) {
                const f = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
                this.ui.selectedDialCode.textContent = f, this.ui.updateInputPadding()
              }
              return this._updatePlaceholder(), this._updateMaxLength(), l !== e
            }
            _updateMaxLength() {
              const {
                strictMode: e,
                placeholderNumberType: n,
                validationNumberTypes: s
              } = this.options, {
                iso2: o
              } = this.selectedCountryData;
              if (e && m.utils)
                if (o) {
                  const c = m.utils.numberType[n];
                  let l = m.utils.getExampleNumber(o, !1, c, !0),
                    f = l;
                  for (; m.utils.isPossibleNumber(l, o, s);) f = l, l += "0";
                  const d = m.utils.getCoreNumber(f, o);
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
              if (m.utils && c) {
                const l = m.utils.numberType[n];
                let f = this.selectedCountryData.iso2 ? m.utils.getExampleNumber(this.selectedCountryData.iso2, s, l) : "";
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
              this.ui.dropdownContent.classList.contains(T.HIDE) || (this.ui.dropdownContent.classList.add(T.HIDE), this.ui.selectedCountry.setAttribute(V.EXPANDED, "false"), this.options.countrySearch && (this.ui.searchInput.removeAttribute(V.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(T.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(T.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(W.CLOSE_COUNTRY_DROPDOWN))
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
                for (let l = 0; l < e.length; l++) {
                  const f = e.charAt(l);
                  if (/[0-9]/.test(f)) {
                    if (o += f, !!!this.dialCodeToIso2Map[o]) break;
                    if (this.dialCodes.has(o)) {
                      if (s = e.substring(0, l + 1), c = !0, !n) break
                    } else n && c && (s = e.substring(0, l + 1));
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
                s = ge(e, n, this.options.separateDialCode, this.selectedCountryData);
              return this._cap(s)
            }
            _triggerCountryChange() {
              this._trigger(W.COUNTRY_CHANGE)
            }
            handleAutoCountry() {
              this.options.initialCountry === Bt.AUTO && m.autoCountry && (this.defaultCountry = m.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(T.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
            }
            handleUtils() {
              if (m.utils) {
                const e = this._getTelInputValue();
                e && this._updateValFromNumber(e), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())
              }
              this.resolveUtilsScriptPromise()
            }
            destroy() {
              this.ui.telInput && (this.options.allowDropdown && this._closeDropdown(), this.abortController.abort(), this.abortController = null, this.ui.destroy(), m.instances instanceof Map ? m.instances.delete(this.id) : delete m.instances[this.id])
            }
            getExtension() {
              return m.utils ? m.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ""
            }
            getNumber(e) {
              if (m.utils) {
                const {
                  iso2: n
                } = this.selectedCountryData, s = this._getFullNumber(), o = m.utils.formatNumber(s, n, e);
                return this._mapAsciiToUserNumerals(o)
              }
              return ""
            }
            getNumberType() {
              return m.utils ? m.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : Ct.UNKNOWN_NUMBER_TYPE
            }
            getSelectedCountryData() {
              return this.selectedCountryData
            }
            getValidationError() {
              if (m.utils) {
                const {
                  iso2: e
                } = this.selectedCountryData;
                return m.utils.getValidationError(this._getFullNumber(), e)
              }
              return Ct.UNKNOWN_VALIDATION_ERROR
            }
            isValidNumber() {
              const {
                dialCode: e,
                iso2: n
              } = this.selectedCountryData;
              if (e === Wt.DIAL_CODE && m.utils) {
                const s = this._getFullNumber(),
                  o = m.utils.getCoreNumber(s, n);
                if (o[0] === Wt.MOBILE_PREFIX && o.length !== Wt.MOBILE_CORE_LENGTH) return !1
              }
              return this._validateNumber(!1)
            }
            isValidNumberPrecise() {
              return this._validateNumber(!0)
            }
            _utilsIsPossibleNumber(e) {
              return m.utils ? m.utils.isPossibleNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            _validateNumber(e) {
              if (!m.utils) return null;
              if (!this.selectedCountryData.iso2) return !1;
              const n = l => e ? this._utilsIsValidNumber(l) : this._utilsIsPossibleNumber(l),
                s = this._getFullNumber(),
                o = s.search(mt.ALPHA_UNICODE);
              if (o > -1 && !this.options.allowPhonewords) {
                const l = s.substring(0, o),
                  f = n(l),
                  d = n(s);
                return f && d
              }
              return n(s)
            }
            _utilsIsValidNumber(e) {
              return m.utils ? m.utils.isValidNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
            }
            setCountry(e) {
              const n = e == null ? void 0 : e.toLowerCase();
              if (!O(n)) throw new Error(`Invalid country code: '${n}'`);
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
              this._updateValFromNumber(n), s && this._triggerCountryChange(), this._trigger(W.INPUT, {
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
          st = a => {
            if (!m.utils && !m.startedLoadingUtilsScript) {
              let e;
              if (typeof a == "function") try {
                e = Promise.resolve(a())
              } catch (n) {
                return Promise.reject(n)
              } else return Promise.reject(new TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof a}`));
              return m.startedLoadingUtilsScript = !0, e.then(n => {
                const s = n == null ? void 0 : n.default;
                if (!s || typeof s != "object") throw new TypeError("The loader function passed to attachUtils did not resolve to a module object with utils as its default export.");
                return m.utils = s, J("handleUtils"), !0
              }).catch(n => {
                throw J("rejectUtilsScriptPromise", n), n
              })
            }
            return null
          },
          J = (a, ...e) => {
            Object.values(m.instances).forEach(n => {
              const s = n[a];
              typeof s == "function" && s.apply(n, e)
            })
          },
          m = Object.assign((a, e) => {
            const n = new et(a, e);
            return m.instances[n.id] = n, a.iti = n, n
          }, {
            defaults: Tt,
            documentReady: () => document.readyState === "complete",
            getCountryData: () => D,
            getInstance: a => {
              const e = a.dataset.intlTelInputId;
              return e ? m.instances[e] : null
            },
            instances: {},
            attachUtils: st,
            startedLoadingUtilsScript: !1,
            startedLoadingAutoCountry: !1,
            version: "25.15.1"
          }),
          Dt = m;
        return U(x)
      })();
      return t.default
    })
  })(ln)), ln.exports
}
var so = io();
const oo = di(so);
var ao = dt('<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>'),
  ro = dt('<span class="w-8"> </span>'),
  lo = dt('<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary w-full"> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>', 1),
  uo = dt('<span class="w-8"> </span>'),
  co = dt('<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-3 flex flex-col items-center gap-1"><button class="btn btn-ghost w-max"> <!></button> <button class="text-primary cursor-pointer text-xs"> </button></div>', 1),
  ho = dt('<div class="flex h-full w-full flex-col items-center"><!></div>');

function fo(u, t) {
  Zt(t, !0);
  let r = it(!0),
    h = it(""),
    g = it(0),
    I = it(!1);
  const E = w(() => i(g) > 0 || i(I));
  let M = it(!1),
    U = it(""),
    x = it(void 0);
  const y = w(() => {
    var b;
    return `phone:${(b=cn.data)==null?void 0:b.id}`
  });
  Rt(() => {
    const b = localStorage.getItem(i(y));
    b && v(h, b, !0)
  }), me(() => {
    sn.getOtpCooldown().then(W => {
      v(g, W.cooldownMs, !0)
    }).catch(W => {
      ye.error(W.message)
    }).finally(() => {
      v(r, !1)
    });
    const b = 1e3,
      S = setInterval(() => {
        v(g, Math.max(0, i(g) - b), !0)
      }, b);
    return () => {
      clearInterval(S)
    }
  });
  async function A(b) {
    try {
      v(I, !0);
      const S = await sn.sendOtp(b);
      ye.info(`${Ri()} ${S.phone}`), v(h, S.phone, !0), v(g, S.cooldownMs, !0), localStorage.setItem(i(y), i(h))
    } catch (S) {
      ye.error(S.message)
    } finally {
      v(I, !1)
    }
  }
  Rt(() => {
    i(U).length === 6 && (v(M, !0), (async () => {
      try {
        await sn.verifyChallenge({
          type: "otp",
          code: i(U)
        }), ye.success(Ei()), localStorage.removeItem(i(y)), t.onsuccess(i(h))
      } catch (b) {
        ye.error(b.message)
      } finally {
        v(U, ""), v(M, !1)
      }
    })())
  });
  var D = ho(),
    X = $(D);
  {
    var R = b => {
        var S = ao();
        C(b, S)
      },
      rt = b => {
        var S = lo(),
          W = j(S),
          T = $(W),
          z = $(T),
          G = $(z, !0);
        Y(z);
        var mt = bt(z, 2),
          Nt = $(mt, !0);
        Y(mt), Y(T);
        var Ct = bt(T, 2),
          wt = $(Ct);
        kn(wt, () => V => (v(x, oo(V, {
          strictMode: !0,
          initialCountry: "br",
          loadUtils: () => wi(() => import("../chunks/3P6Si2Fo.js"), [], import.meta.url),
          containerClass: "w-full",
          dropdownContainer: document.body
        })), () => {
          var ut;
          (ut = i(x)) == null || ut.destroy()
        }));
        var It = bt(wt, 2),
          Wt = $(It),
          Mt = bt(Wt);
        {
          var jt = V => {
            var ut = ro(),
              ht = $(ut);
            Y(ut), Et(Tt => Pt(ht, `(${Tt??""})`), [() => xn(i(g))]), C(V, ut)
          };
          lt(Mt, V => {
            i(g) > 0 && V(jt)
          })
        }
        Y(It), Y(Ct), Y(W);
        var Bt = bt(W, 2),
          ee = $(Bt, !0);
        Y(Bt), Et((V, ut, ht, Tt) => {
          Pt(G, V), Pt(Nt, ut), It.disabled = i(E), Pt(Wt, `${ht??""} `), Pt(ee, Tt)
        }, [() => Di(), () => Ti(), () => Si(), () => Ni()]), tn("submit", Ct, async () => {
          var ut;
          if (i(E)) return;
          if (!((ut = i(x)) != null && ut.isValidNumber())) {
            ye.error(xi());
            return
          }
          const V = i(x).getNumber();
          await A(V)
        }), C(b, S)
      },
      k = b => {
        var S = co(),
          W = j(S),
          T = $(W),
          z = $(T, !0);
        Y(T);
        var G = bt(T, 2),
          mt = $(G);
        Y(G), Y(W);
        var Nt = bt(W, 2),
          Ct = $(Nt);
        {
          const V = (ut, ht) => {
            let Tt = () => ht == null ? void 0 : ht().cells;
            var Kt = q(),
              Yt = j(Kt);
            Jt(Yt, () => As, (se, N) => {
              N(se, {
                class: "border-primary",
                children: (F, vt) => {
                  var tt = q(),
                    kt = j(tt);
                  qe(kt, 16, Tt, qt => qt, (qt, pe) => {
                    var oe = q(),
                      Ht = j(oe);
                    Jt(Ht, () => eo, (Vt, St) => {
                      St(Vt, {
                        get cell() {
                          return pe
                        },
                        class: "border-base-content/20 size-11 sm:size-12"
                      })
                    }), C(qt, oe)
                  }), C(F, tt)
                },
                $$slots: {
                  default: !0
                }
              })
            }), C(ut, Kt)
          };
          Jt(Ct, () => no, (ut, ht) => {
            ht(ut, {
              maxlength: 6,
              class: "mx-auto w-max",
              get disabled() {
                return i(M)
              },
              get value() {
                return i(U)
              },
              set value(Tt) {
                v(U, Tt, !0)
              },
              children: V,
              $$slots: {
                default: !0
              }
            })
          })
        }
        Y(Nt);
        var wt = bt(Nt, 2),
          It = $(wt),
          Wt = $(It),
          Mt = bt(Wt);
        {
          var jt = V => {
            var ut = uo(),
              ht = $(ut);
            Y(ut), Et(Tt => Pt(ht, `(${Tt??""})`), [() => xn(i(g))]), C(V, ut)
          };
          lt(Mt, V => {
            i(g) > 0 && V(jt)
          })
        }
        Y(It);
        var Bt = bt(It, 2),
          ee = $(Bt, !0);
        Y(Bt), Y(wt), Et((V, ut, ht, Tt) => {
          Pt(z, V), Pt(mt, `${ut??""} ${i(h)??""}`), It.disabled = i(E), Pt(Wt, `${ht??""} `), Pt(ee, Tt)
        }, [() => Li(), () => Ai(), () => Pi(), () => Oi()]), le("click", It, async () => {
          await A(i(h))
        }), le("click", Bt, () => {
          v(h, "")
        }), C(b, S)
      };
    lt(X, b => {
      i(r) ? b(R) : i(h) ? b(k, !1) : b(rt, 1)
    })
  }
  Y(D), C(u, D), $t()
}
gn(["click"]);
var mo = dt('<dialog class="modal"><div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function po(u, t) {
  Zt(t, !0);
  const r = w(() => on.current !== null),
    h = w(() => {
      var y;
      return (y = on.current) == null ? void 0 : y.tier
    });
  var g = mo(),
    I = $(g);
  let E;
  var M = $(I),
    U = $(M);
  {
    var x = y => {
      var A = q(),
        D = j(A);
      vi(D, () => on.errorCount, X => {
        var R = q(),
          rt = j(R);
        {
          var k = W => {
              {
                let T = w(() => ni.trim());
                bi(W, {
                  get siteKey() {
                    return i(T)
                  },
                  callback: z => Tn(z),
                  errorCallback: () => Dn()
                })
              }
            },
            b = W => {
              {
                let T = w(() => ii.trim());
                xs(W, {
                  get siteKey() {
                    return i(T)
                  },
                  callback: z => Tn(z),
                  errorCallback: () => Dn()
                })
              }
            },
            S = W => {
              fo(W, {
                onsuccess: () => ei()
              })
            };
          lt(rt, W => {
            i(h) === 2 ? W(k) : i(h) === 3 ? W(b, 1) : i(h) === 4 && W(S, 2)
          })
        }
        C(X, R)
      }), C(y, A)
    };
    lt(U, y => {
      i(r) && y(x)
    })
  }
  Y(M), Y(I), Rn(2), Y(g), kn(g, () => y => {
    Rt(() => {
      i(r) ? y.show() : y.close()
    })
  }), Et(() => E = ne(I, 1, "modal-box flex max-w-sm flex-col items-center gap-4", null, E, {
    "h-80": i(h) === 4
  })), tn("close", g, () => ti()), C(u, g), $t()
}
var go = dt('<span class="hidden"> </span> <!> <!> <!>', 1);

function Wo(u, t) {
  Zt(t, !0), me(() => {
    si(), oi();
    const y = 3600 * 1e3,
      A = fi(async () => {
        await cn.refresh()
      }, {
        interval: y,
        immediate: !0
      });
    cn.refresh();
    const D = mi();
    Object.assign(window, {
      eval: ai(eval, function() {}, async () => {
        await fetch(ri + "/me", {
          credentials: "include",
          headers: {
            Authorization: "Bearer " + crypto.randomUUID()
          }
        })
      })
    });
    let X = setInterval(() => {
      pi()
    }, 5e3);
    return () => {
      clearTimeout(X), A(), D()
    }
  });
  const r = "muted";
  me(() => {
    un.muted = localStorage.getItem(r) === "1"
  }), Rt(() => {
    {
      const y = un.muted;
      document.querySelectorAll("audio").forEach(A => {
        A.muted = y
      });
      for (const A of Object.values(hi).filter(D => D instanceof Audio)) A.muted = y, y || (A.volume = .3);
      localStorage.setItem(r, Number(y).toString())
    }
  }), me(() => {});
  var h = go();
  tn("beforeunload", Qn, () => {
    gi()
  });
  var g = j(h),
    I = $(g);
  Y(g);
  var E = bt(g, 2);
  {
    var M = y => {
      var A = q(),
        D = j(A);
      Ot(D, () => t.children), C(y, A)
    };
    lt(E, y => {
      y(M, !1)
    })
  }
  var U = bt(E, 2);
  po(U, {});
  var x = bt(U, 2);
  Es(x, {
    closeButton: !0,
    richColors: !0,
    position: "top-right",
    class: "top-15! whitespace-pre-line!",
    duration: 3e3
  }), Et(() => Pt(I, `Version: ${Zn}`)), C(u, h), $t()
}
export {
  Wo as component, Uo as universal
};