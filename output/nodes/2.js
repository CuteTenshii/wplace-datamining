const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../chunks/CkVsvSFT.js", "../chunks/D2z8HFb7.js", "../chunks/C1mx_Hw6.js", "../chunks/Dln6VEfo.js", "../chunks/Bpg9SJXw.js", "../chunks/DP7ilGQK.js", "../chunks/CZtdCIYn.js", "../chunks/a7QZC4SB.js", "../chunks/HVsDxreN.js", "../chunks/pKOrQQBa.js", "../chunks/Bz1_WS0V.js", "../chunks/0Ho1GZgV.js", "../chunks/BwaMM2Ka.js", "../chunks/C8yDr8fi.js", "../chunks/BTkb9x1Z.js", "../chunks/C11nHvVM.js", "../chunks/B8UK1oE5.js", "../chunks/DlkQLHW-.js", "../chunks/DxdGK6Xj.js", "../chunks/v5AYchSF.js", "../chunks/C9cDlC8C.js", "../assets/ChallengeDialog.ZVAQIJPp.css", "../chunks/BOlDLAl_.js", "../chunks/CIeTpte3.js", "../chunks/tjBOdb9L.js", "../chunks/d_pK3fN6.js", "../chunks/K9Wy6l00.js", "../assets/Dialog.DNSr87Ge.css", "../chunks/DgqpivqW.js", "../chunks/CPQnwcpY.js", "../chunks/CP-orNnm.js", "../chunks/dIctyUL4.js", "../chunks/Dc370grl.js", "../chunks/BjPbgMqK.js", "../chunks/C2hO9Kb4.js", "../chunks/BFo0c1sy.js", "../chunks/QvZHQFCz.js", "../chunks/3BkwG7sj.js", "../chunks/D4u-g8BL.js", "../chunks/Dev2g1NU.js", "../chunks/DjUN-5g7.js", "../chunks/C9i0jsij.js", "../chunks/JiSlwO49.js", "../chunks/M3ZRllNz.js", "../chunks/DsRJG1f2.js", "../chunks/B3Y0AZv_.js", "../chunks/BbuTRH8S.js", "../chunks/CPMd0QOP.js", "../chunks/CDzPGP9j.js", "../chunks/Cs6QoDoW.js", "../chunks/BXhmIuI-.js", "../chunks/vO_945Ep.js"]))) => i.map(i => d[i]);
import {
  $ as e,
  B as t,
  Bt as n,
  D as r,
  Dt as i,
  Et as a,
  G as o,
  H as s,
  Ht as c,
  It as l,
  J as u,
  Jt as d,
  K as ee,
  Lt as f,
  Nt as p,
  O as m,
  Ot as h,
  Q as g,
  Qt as _,
  Rt as v,
  Tt as te,
  X as y,
  Xt as ne,
  Yt as b,
  Z as x,
  Zt as S,
  a as C,
  at as w,
  bt as T,
  cn as E,
  f as re,
  in as D,
  it as O,
  jt as k,
  k as A,
  kt as ie,
  mt as j,
  o as ae,
  ot as M,
  r as N,
  rt as oe,
  s as se,
  tt as ce,
  ut as P,
  v as le,
  x as F,
  xt as I,
  y as ue,
  z as L
} from "../chunks/D2z8HFb7.js";
import {
  C as R,
  S as z,
  y as B
} from "../chunks/C1mx_Hw6.js";
import {
  a as V
} from "../chunks/DP7ilGQK.js";
import "../chunks/B8UK1oE5.js";
import {
  i as H,
  n as U
} from "../chunks/HVsDxreN.js";
import {
  t as W
} from "../chunks/Bpg9SJXw.js";
import {
  t as de
} from "../chunks/BbTcAyk7.js";
import "../chunks/pKOrQQBa.js";
import {
  M as fe,
  Tt as pe,
  a as G,
  b as me,
  f as he,
  i as K,
  m as ge,
  n as q,
  o as J,
  p as _e,
  pt as ve,
  r as ye,
  t as Y,
  y as be,
  yt as X
} from "../chunks/CZtdCIYn.js";
import "../chunks/Bz1_WS0V.js";
import "../chunks/CPMd0QOP.js";
import {
  c as xe,
  l as Se,
  n as Ce,
  t as Z
} from "../chunks/CGQ8r1SQ.js";
import {
  t as we
} from "../chunks/BwaMM2Ka.js";
import {
  i as Te,
  t as Ee
} from "../chunks/0Ho1GZgV.js";
import {
  t as De
} from "../chunks/DlkQLHW-.js";
var Oe = e(`<svg class="pointer-events-none fixed size-0" aria-hidden="true" focusable="false"><defs><filter id="wplace-colorblind" x="0" y="0" width="100%" height="100%" color-interpolation-filters="linearRGB"><feColorMatrix type="matrix"></feColorMatrix></filter></defs></svg>`);

function ke(e, t) {
  S(t, !0);
  let n = l(() => H(U.colorblindMode, U.colorblindStrength).join(` `));
  I(() => (document.documentElement.toggleAttribute(`data-colorblind-filter`, U.colorblindMode !== `none` && U.colorblindStrength > 0), () => document.documentElement.removeAttribute(`data-colorblind-filter`)));
  var r = Oe(),
    i = a(r),
    o = a(i),
    s = a(o);
  D(o), D(i), D(r), T(() => F(s, `values`, P(n))), y(e, r), ne()
}
var Ae = Array(12).fill(0),
  je = g(`<div class="sonner-loading-bar"></div>`),
  Me = g(`<div><div class="sonner-spinner"></div></div>`);

function Ne(e, t) {
  S(t, !0);
  var n = Me(),
    r = a(n);
  s(r, 23, () => Ae, (e, t) => `spinner-bar-${t}`, (e, t) => {
    var n = je();
    y(e, n)
  }), D(r), D(n), T(e => {
    m(n, 1, e), F(n, `data-visible`, t.visible)
  }, [() => A([`sonner-loading-wrapper`, t.class].filter(Boolean).join(` `))]), y(e, n), ne()
}
var Q = typeof window < `u` ? window : void 0;
typeof window < `u` && window.document, typeof window < `u` && window.navigator, typeof window < `u` && window.location;

function Pe(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot;) {
    let e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var Fe = new WeakMap,
  Ie = new WeakMap;
new class {
  constructor(e = {}) {
    n(this, Fe, void 0), n(this, Ie, void 0);
    let {
      window: t = Q,
      document: r = t == null ? void 0 : t.document
    } = e;
    t !== void 0 && (v(Fe, this, r), v(Ie, this, c(e => {
      let n = M(t, `focusin`, e),
        r = M(t, `focusout`, e);
      return () => {
        n(), r()
      }
    })))
  }
  get current() {
    var e;
    return (e = f(Ie, this)) == null || e.call(this), f(Fe, this) ? Pe(f(Fe, this)) : null
  }
};
var Le = new WeakMap,
  $ = new WeakMap,
  Re = class {
    constructor(e) {
      n(this, Le, void 0), n(this, $, void 0), v(Le, this, e), v($, this, Symbol(e))
    }
    get key() {
      return f($, this)
    }
    exists() {
      return b(f($, this))
    }
    get() {
      let e = d(f($, this));
      if (e === void 0) throw Error(`Context "${f(Le,this)}" not found`);
      return e
    }
    getOr(e) {
      let t = d(f($, this));
      return t === void 0 ? e : t
    }
    set(e) {
      return _(f($, this), e)
    }
  };
new Re(`richColorsContext`);
var ze = new Re(`<Toaster/>`);

function Be(e) {
  return e.label !== void 0
}

function Ve() {
  let e = p(ie(typeof document < `u` && document.hidden));
  return I(() => M(document, `visibilitychange`, () => {
    k(e, document.hidden, !0)
  })), {
    get current() {
      return P(e)
    }
  }
}
var He = 4e3,
  Ue = 14,
  We = 45,
  Ge = 200,
  Ke = .05,
  qe = {
    toast: ``,
    title: ``,
    description: ``,
    loader: ``,
    closeButton: ``,
    cancelButton: ``,
    actionButton: ``,
    action: ``,
    warning: ``,
    error: ``,
    success: ``,
    default: ``,
    info: ``,
    loading: ``
  };

function Je(e) {
  let [t, n] = e.split(`-`), r = [];
  return t && r.push(t), n && r.push(n), r
}

function Ye(e) {
  return 1 / (1.5 + Math.abs(e) / 20)
}
var Xe = new Set(`$$slots.$$events.$$legacy.toast.index.expanded.invert.position.visibleToasts.expandByDefault.closeButton.interacting.cancelButtonStyle.actionButtonStyle.duration.descriptionClass.classes.unstyled.loadingIcon.successIcon.errorIcon.warningIcon.closeIcon.infoIcon.defaultRichColors.swipeDirections.closeButtonAriaLabel`.split(`.`)),
  Ze = g(`<div><!></div>`),
  Qe = g(`<button data-close-button=""><!></button>`),
  $e = g(`<div data-icon=""><!> <!></div>`),
  et = g(`<div data-description=""><!></div>`),
  tt = g(`<button data-button="" data-cancel=""> </button>`),
  nt = g(`<button data-button=""> </button>`),
  rt = g(`<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>`, 1),
  it = g(`<li data-sonner-toast=""><!> <!></li>`);

function at(e, n) {
  S(n, !0);
  let s = e => {
      var r = x(),
        s = i(r),
        c = e => {
          var r = Ze(),
            i = a(r);
          t(i, () => n.loadingIcon), D(r), T(e => {
            m(r, 1, e), F(r, `data-visible`, P(U) === `loading`)
          }, [() => {
            var e, t;
            return A(J((e = P(Y)) == null ? void 0 : e.loader, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.loader, `sonner-loader`))
          }]), y(e, r)
        },
        u = e => {
          {
            let t = l(() => {
                var e, t;
                return J((e = P(Y)) == null ? void 0 : e.loader, (t = n.toast.classes) == null ? void 0 : t.loader)
              }),
              r = l(() => P(U) === `loading`);
            Ne(e, {
              get class() {
                return P(t)
              },
              get visible() {
                return P(r)
              }
            })
          }
        };
      o(s, e => {
        n.loadingIcon ? e(c) : e(u, -1)
      }), y(e, r)
    },
    c = C(n, `cancelButtonStyle`, 3, ``),
    d = C(n, `actionButtonStyle`, 3, ``),
    ee = C(n, `descriptionClass`, 3, ``),
    f = C(n, `unstyled`, 3, !1),
    g = C(n, `defaultRichColors`, 3, !1);
  ae(n, Xe);
  let _ = {
      ...qe
    },
    v = p(!1),
    te = p(!1),
    b = p(!1),
    ie = p(!1),
    M = p(!1),
    oe = p(0),
    le = p(0),
    ue = n.toast.duration || n.duration || He,
    R = p(void 0),
    z = p(null),
    B = p(null),
    V = l(() => n.index === 0),
    H = l(() => n.index + 1 <= n.visibleToasts),
    U = l(() => n.toast.type),
    W = l(() => n.toast.dismissable !== !1),
    de = l(() => n.toast.class || ``),
    fe = l(() => n.toast.descriptionClass || ``),
    pe = l(() => G.heights.findIndex(e => e.toastId === n.toast.id) || 0),
    me = l(() => n.toast.closeButton ?? n.closeButton),
    he = l(() => n.toast.duration ?? n.duration ?? He),
    K = null,
    ge = l(() => n.position.split(`-`)),
    q = l(() => G.heights.reduce((e, t, n) => n >= P(pe) ? e : e + t.height, 0)),
    _e = Ve(),
    ve = l(() => n.toast.invert || n.invert),
    ye = l(() => P(U) === `loading`),
    Y = l(() => ({
      ..._,
      ...n.classes
    })),
    be = l(() => n.toast.title),
    X = l(() => n.toast.description),
    xe = p(0),
    Se = p(0),
    Ce = l(() => Math.round(P(pe) * Ue + P(q)));
  I(() => {
    P(be), P(X);
    let e;
    e = n.expanded || n.expandByDefault ? 1 : 1 - n.index * Ke;
    let t = j(() => P(R));
    if (t === void 0) return;
    t.style.setProperty(`height`, `auto`);
    let r = t.offsetHeight,
      i = t.getBoundingClientRect().height,
      a = Math.round(i / e + 2 ** -52 & 100) / 100;
    t.style.removeProperty(`height`);
    let o;
    o = Math.abs(a - r) < 1 ? a : r, k(le, o, !0), j(() => {
      G.setHeight({
        toastId: n.toast.id,
        height: o
      })
    })
  });

  function Z() {
    k(te, !0), k(oe, P(Ce), !0), G.removeHeight(n.toast.id), setTimeout(() => {
      G.remove(n.toast.id)
    }, Ge)
  }
  let we, Te = l(() => n.toast.promise && P(U) === `loading` || n.toast.duration === 1 / 0);

  function Ee() {
    k(xe, new Date().getTime(), !0), we = setTimeout(() => {
      var e, t;
      (e = (t = n.toast).onAutoClose) == null || e.call(t, n.toast), Z()
    }, ue)
  }

  function De() {
    if (P(Se) < P(xe)) {
      let e = new Date().getTime() - P(xe);
      ue -= e
    }
    k(Se, new Date().getTime(), !0)
  }
  I(() => {
    n.toast.updated && (clearTimeout(we), ue = P(he), Ee())
  }), I(() => (P(Te) || (n.expanded || n.interacting || _e.current ? De() : Ee()), () => clearTimeout(we))), N(() => {
    var e;
    k(v, !0);
    let t = (e = P(R)) == null ? void 0 : e.getBoundingClientRect().height;
    return k(le, t, !0), G.setHeight({
      toastId: n.toast.id,
      height: t
    }), () => {
      G.removeHeight(n.toast.id)
    }
  }), I(() => {
    n.toast.delete && j(() => {
      var e, t;
      Z(), (e = (t = n.toast).onDismiss) == null || e.call(t, n.toast)
    })
  });
  let Oe = e => {
      if (P(ye)) return;
      k(oe, P(Ce), !0);
      let t = e.target;
      t.setPointerCapture(e.pointerId), t.tagName !== `BUTTON` && (k(b, !0), K = {
        x: e.clientX,
        y: e.clientY
      })
    },
    ke = () => {
      var e, t;
      if (P(ie) || !P(W)) return;
      K = null;
      let r = Number(((e = P(R)) == null ? void 0 : e.style.getPropertyValue(`--swipe-amount-x`).replace(`px`, ``)) || 0),
        i = Number(((t = P(R)) == null ? void 0 : t.style.getPropertyValue(`--swipe-amount-y`).replace(`px`, ``)) || 0),
        a = new Date().getTime() - 0,
        o = P(z) === `x` ? r : i,
        s = Math.abs(o) / a;
      if (Math.abs(o) >= We || s > .11) {
        var c, l;
        k(oe, P(Ce), !0), (c = (l = n.toast).onDismiss) == null || c.call(l, n.toast), P(z) === `x` ? k(B, r > 0 ? `right` : `left`, !0) : k(B, i > 0 ? `down` : `up`, !0), Z(), k(ie, !0);
        return
      }
      var u, d;
      (u = P(R)) == null || u.style.setProperty(`--swipe-amount-x`, `0px`), (d = P(R)) == null || d.style.setProperty(`--swipe-amount-y`, `0px`), k(M, !1), k(b, !1), k(z, null)
    },
    Ae = e => {
      var t, r, i;
      if (!K || !P(W) || (((t = window.getSelection()) == null ? void 0 : t.toString().length) ?? -1) > 0) return;
      let a = e.clientY - K.y,
        o = e.clientX - K.x,
        s = n.swipeDirections ?? Je(n.position);
      !P(z) && (Math.abs(o) > 1 || Math.abs(a) > 1) && k(z, Math.abs(o) > Math.abs(a) ? `x` : `y`, !0);
      let c = {
        x: 0,
        y: 0
      };
      if (P(z) === `y`) {
        if (s.includes(`top`) || s.includes(`bottom`)) {
          if (s.includes(`top`) && a < 0 || s.includes(`bottom`) && a > 0) c.y = a;
          else {
            let e = a * Ye(a);
            c.y = Math.abs(e) < Math.abs(a) ? e : a
          }
        }
      } else if (P(z) === `x` && (s.includes(`left`) || s.includes(`right`))) {
        if (s.includes(`left`) && o < 0 || s.includes(`right`) && o > 0) c.x = o;
        else {
          let e = o * Ye(o);
          c.x = Math.abs(e) < Math.abs(o) ? e : o
        }
      }(Math.abs(c.x) > 0 || Math.abs(c.y) > 0) && k(M, !0), (r = P(R)) == null || r.style.setProperty(`--swipe-amount-x`, `${c.x}px`), (i = P(R)) == null || i.style.setProperty(`--swipe-amount-y`, `${c.y}px`)
    },
    je = () => {
      k(b, !1), k(z, null), K = null
    },
    Me = l(() => n.toast.icon ? n.toast.icon : P(U) === `success` ? n.successIcon : P(U) === `error` ? n.errorIcon : P(U) === `warning` ? n.warningIcon : P(U) === `info` ? n.infoIcon : P(U) === `loading` ? n.loadingIcon : null);
  var Q = it();
  F(Q, `tabindex`, 0);
  let Pe;
  var Fe = a(Q),
    Ie = e => {
      var r = Qe(),
        i = a(r);
      t(i, () => n.closeIcon ?? E), D(r), T(e => {
        F(r, `aria-label`, n.closeButtonAriaLabel), F(r, `data-disabled`, P(ye)), m(r, 1, e)
      }, [() => {
        var e, t;
        return A(J((e = P(Y)) == null ? void 0 : e.closeButton, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.closeButton))
      }]), O(`click`, r, () => {
        var e, t;
        P(ye) || !P(W) || (Z(), (e = (t = n.toast).onDismiss) == null || e.call(t, n.toast))
      }), y(e, r)
    };
  o(Fe, e => {
    P(me) && !n.toast.component && P(U) !== `loading` && n.closeIcon !== null && e(Ie)
  });
  var Le = h(Fe, 2),
    $ = e => {
      let t = l(() => n.toast.component);
      var r = x(),
        a = i(r);
      L(a, () => P(t), (e, t) => {
        t(e, se(() => n.toast.componentProps, {
          closeToast: Z
        }))
      }), y(e, r)
    },
    Re = e => {
      var f = rt(),
        p = i(f),
        g = e => {
          var r = $e(),
            c = a(r),
            l = e => {
              var t = x(),
                r = i(t),
                a = e => {
                  var t = x(),
                    r = i(t);
                  L(r, () => n.toast.icon, (e, t) => {
                    t(e, {})
                  }), y(e, t)
                },
                c = e => {
                  s(e)
                };
              o(r, e => {
                n.toast.icon ? e(a) : e(c, -1)
              }), y(e, t)
            };
          o(c, e => {
            (n.toast.promise || P(U) === `loading`) && e(l)
          });
          var u = h(c, 2),
            d = e => {
              var r = x(),
                a = i(r),
                s = e => {
                  var t = x(),
                    r = i(t);
                  L(r, () => n.toast.icon, (e, t) => {
                    t(e, {})
                  }), y(e, t)
                },
                c = e => {
                  var r = x(),
                    a = i(r);
                  t(a, () => n.successIcon ?? E), y(e, r)
                },
                l = e => {
                  var r = x(),
                    a = i(r);
                  t(a, () => n.errorIcon ?? E), y(e, r)
                },
                u = e => {
                  var r = x(),
                    a = i(r);
                  t(a, () => n.warningIcon ?? E), y(e, r)
                },
                d = e => {
                  var r = x(),
                    a = i(r);
                  t(a, () => n.infoIcon ?? E), y(e, r)
                };
              o(a, e => {
                n.toast.icon ? e(s) : P(U) === `success` ? e(c, 1) : P(U) === `error` ? e(l, 2) : P(U) === `warning` ? e(u, 3) : P(U) === `info` && e(d, 4)
              }), y(e, r)
            };
          o(u, e => {
            n.toast.type !== `loading` && e(d)
          }), D(r), T(e => m(r, 1, e), [() => {
            var e, t;
            return A(J((e = P(Y)) == null ? void 0 : e.icon, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.icon))
          }]), y(e, r)
        };
      o(p, e => {
        (P(U) || n.toast.icon || n.toast.promise) && n.toast.icon !== null && (P(Me) !== null || n.toast.icon) && e(g)
      });
      var _ = h(p, 2),
        v = a(_),
        te = a(v),
        ne = e => {
          var t = x(),
            r = i(t),
            a = e => {
              let t = l(() => n.toast.title);
              var r = x(),
                a = i(r);
              L(a, () => P(t), (e, t) => {
                t(e, se(() => n.toast.componentProps))
              }), y(e, r)
            },
            s = e => {
              var t = ce();
              T(() => u(t, n.toast.title)), y(e, t)
            };
          o(r, e => {
            typeof n.toast.title == `string` ? e(s, -1) : e(a)
          }), y(e, t)
        };
      o(te, e => {
        n.toast.title && e(ne)
      }), D(v);
      var b = h(v, 2),
        S = e => {
          var t = et(),
            r = a(t),
            s = e => {
              let t = l(() => n.toast.description);
              var r = x(),
                a = i(r);
              L(a, () => P(t), (e, t) => {
                t(e, se(() => n.toast.componentProps))
              }), y(e, r)
            },
            c = e => {
              var t = ce();
              T(() => u(t, n.toast.description)), y(e, t)
            };
          o(r, e => {
            typeof n.toast.description == `string` ? e(c, -1) : e(s)
          }), D(t), T(e => m(t, 1, e), [() => {
            var e, t;
            return A(J(ee(), P(fe), (e = P(Y)) == null ? void 0 : e.description, (t = n.toast.classes) == null ? void 0 : t.description))
          }]), y(e, t)
        };
      o(b, e => {
        n.toast.description && e(S)
      }), D(_);
      var C = h(_, 2),
        w = e => {
          var t = x(),
            s = i(t),
            d = e => {
              var t = x(),
                r = i(t);
              L(r, () => n.toast.cancel, (e, t) => {
                t(e, {})
              }), y(e, t)
            },
            ee = e => {
              var t = tt(),
                i = a(t, !0);
              D(t), T(e => {
                r(t, n.toast.cancelButtonStyle ?? c()), m(t, 1, e), u(i, n.toast.cancel.label)
              }, [() => {
                var e, t;
                return A(J((e = P(Y)) == null ? void 0 : e.cancelButton, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.cancelButton))
              }]), O(`click`, t, e => {
                var t, r;
                Be(n.toast.cancel) && P(W) && ((t = n.toast.cancel) == null || (r = t.onClick) == null || r.call(t, e), Z())
              }), y(e, t)
            },
            f = l(() => Be(n.toast.cancel));
          o(s, e => {
            typeof n.toast.cancel == `function` ? e(d) : P(f) && e(ee, 1)
          }), y(e, t)
        };
      o(C, e => {
        n.toast.cancel && e(w)
      });
      var re = h(C, 2),
        k = e => {
          var t = x(),
            s = i(t),
            c = e => {
              var t = x(),
                r = i(t);
              L(r, () => n.toast.action, (e, t) => {
                t(e, {})
              }), y(e, t)
            },
            ee = e => {
              var t = nt(),
                i = a(t, !0);
              D(t), T(e => {
                r(t, n.toast.actionButtonStyle ?? d()), m(t, 1, e), u(i, n.toast.action.label)
              }, [() => {
                var e, t;
                return A(J((e = P(Y)) == null ? void 0 : e.actionButton, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.actionButton))
              }]), O(`click`, t, e => {
                var t;
                Be(n.toast.action) && ((t = n.toast.action) == null || t.onClick(e), !e.defaultPrevented && Z())
              }), y(e, t)
            },
            f = l(() => Be(n.toast.action));
          o(s, e => {
            typeof n.toast.action == `function` ? e(c) : P(f) && e(ee, 1)
          }), y(e, t)
        };
      o(re, e => {
        n.toast.action && e(k)
      }), T(e => m(v, 1, e), [() => {
        var e, t;
        return A(J((e = P(Y)) == null ? void 0 : e.title, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.title))
      }]), y(e, f)
    };
  o(Le, e => {
    n.toast.component ? e($) : e(Re, -1)
  }), D(Q), re(Q, e => k(R, e), () => P(R)), T((e, t, i) => {
    m(Q, 1, e), F(Q, `data-rich-colors`, n.toast.richColors ?? g()), F(Q, `data-styled`, !(n.toast.component || n.toast.unstyled || f())), F(Q, `data-mounted`, P(v)), F(Q, `data-promise`, t), F(Q, `data-swiped`, P(M)), F(Q, `data-removed`, P(te)), F(Q, `data-visible`, P(H)), F(Q, `data-y-position`, P(ge)[0]), F(Q, `data-x-position`, P(ge)[1]), F(Q, `data-index`, n.index), F(Q, `data-front`, P(V)), F(Q, `data-swiping`, P(b)), F(Q, `data-dismissable`, P(W)), F(Q, `data-type`, P(U)), F(Q, `data-invert`, P(ve)), F(Q, `data-swipe-out`, P(ie)), F(Q, `data-swipe-direction`, P(B)), F(Q, `data-expanded`, i), Pe = r(Q, `${n.style} ${n.toast.style}`, Pe, {
      "--index": n.index,
      "--toasts-before": n.index,
      "--z-index": G.toasts.length - n.index,
      "--offset": `${P(te)?P(oe):P(Ce)}px`,
      "--initial-height": n.expandByDefault ? `auto` : `${P(le)}px`
    })
  }, [() => {
    var e, t, r, i;
    return A(J(n.class, P(de), (e = P(Y)) == null ? void 0 : e.toast, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.toast, (r = P(Y)) == null ? void 0 : r[P(U)], (i = n.toast) == null || (i = i.classes) == null ? void 0 : i[P(U)]))
  }, () => !!n.toast.promise, () => !!(n.expanded || n.expandByDefault && P(v))]), O(`pointermove`, Q, Ae), O(`pointerup`, Q, ke), O(`pointerdown`, Q, Oe), w(`dragend`, Q, je), y(e, Q), ne()
}
oe([`pointermove`, `pointerup`, `pointerdown`, `click`]);
var ot = e(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`);

function st(e) {
  var t = ot();
  y(e, t)
}
var ct = e(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`);

function lt(e) {
  var t = ct();
  y(e, t)
}
var ut = e(`<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`);

function dt(e) {
  var t = ut();
  y(e, t)
}
var ft = e(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`);

function pt(e) {
  var t = ft();
  y(e, t)
}
var mt = e(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);

function ht(e) {
  var t = mt();
  y(e, t)
}
var gt = 3,
  _t = `24px`,
  vt = `16px`,
  yt = 4e3,
  bt = 356,
  xt = 14,
  St = `dark`,
  Ct = `light`;

function wt(e, t) {
  let n = {};
  return [e, t].forEach((e, t) => {
    let r = t === 1,
      i = r ? `--mobile-offset` : `--offset`,
      a = r ? vt : _t;

    function o(e) {
      [`top`, `right`, `bottom`, `left`].forEach(t => {
        n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e
      })
    }
    typeof e == `number` || typeof e == `string` ? o(e) : typeof e == `object` ? [`top`, `right`, `bottom`, `left`].forEach(t => {
      let r = e[t];
      r === void 0 ? n[`${i}-${t}`] = a : n[`${i}-${t}`] = typeof r == `number` ? `${r}px` : r
    }) : o(a)
  }), n
}
var Tt = new Set(`$$slots.$$events.$$legacy.invert.position.hotkey.expand.closeButton.offset.mobileOffset.theme.richColors.duration.visibleToasts.toastOptions.dir.gap.loadingIcon.successIcon.errorIcon.warningIcon.closeIcon.infoIcon.containerAriaLabel.class.closeButtonAriaLabel.onblur.onfocus.onmouseenter.onmousemove.onmouseleave.ondragend.onpointerdown.onpointerup`.split(`.`)),
  Et = g(`<ol></ol>`),
  Dt = g(`<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-wiukfn"><!></section>`);

function Ot(e, n) {
  S(n, !0);

  function r(e) {
    return e === `system` ? typeof window < `u` && window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches ? St : Ct : e
  }
  let c = C(n, `invert`, 3, !1),
    u = C(n, `position`, 3, `bottom-right`),
    d = C(n, `hotkey`, 19, () => [`altKey`, `KeyT`]),
    ee = C(n, `expand`, 3, !1),
    f = C(n, `closeButton`, 3, !1),
    m = C(n, `offset`, 3, _t),
    h = C(n, `mobileOffset`, 3, vt),
    g = C(n, `theme`, 3, `light`),
    _ = C(n, `richColors`, 3, !1),
    v = C(n, `duration`, 3, yt),
    te = C(n, `visibleToasts`, 3, gt),
    b = C(n, `toastOptions`, 19, () => ({})),
    w = C(n, `dir`, 7, `auto`),
    O = C(n, `gap`, 3, xt),
    A = C(n, `containerAriaLabel`, 3, `Notifications`),
    oe = C(n, `closeButtonAriaLabel`, 3, `Close toast`),
    se = ae(n, Tt);

  function ce() {
    if (w() !== `auto`) return w();
    if (typeof window > `u` || typeof document > `u`) return `ltr`;
    let e = document.documentElement.getAttribute(`dir`);
    return e === `auto` || !e ? (j(() => w(window.getComputedStyle(document.documentElement).direction ?? `ltr`)), w()) : (j(() => w(e)), e)
  }
  let L = l(() => Array.from(new Set([u(), ...G.toasts.filter(e => e.position).map(e => e.position)].filter(Boolean)))),
    R = p(!1),
    z = p(!1),
    B = p(ie(r(g()))),
    V = p(void 0),
    H = p(null),
    U = p(!1),
    W = l(() => d().join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``));
  I(() => {
    G.toasts.length <= 1 && k(R, !1)
  }), I(() => {
    let e = G.toasts.filter(e => e.dismiss && !e.delete);
    if (e.length > 0) {
      let t = G.toasts.map(t => e.find(e => e.id === t.id) ? {
        ...t,
        delete: !0
      } : t);
      G.toasts = t
    }
  }), I(() => () => {
    P(V) && P(H) && (P(H).focus({
      preventScroll: !0
    }), k(H, null), k(U, !1))
  }), N(() => (G.reset(), M(document, `keydown`, e => {
    var t;
    if (d().every(t => e[t] || e.code === t)) {
      var n;
      k(R, !0), (n = P(V)) == null || n.focus()
    }
    e.code === `Escape` && (document.activeElement === P(V) || (t = P(V)) != null && t.contains(document.activeElement)) && k(R, !1)
  }))), I(() => {
    if (g() !== `system` && k(B, g()), typeof window < `u`) {
      g() === `system` && (window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches ? k(B, St) : k(B, Ct));
      let e = window.matchMedia(`(prefers-color-scheme: dark)`),
        t = ({
          matches: e
        }) => {
          k(B, e ? St : Ct, !0)
        };
      `addEventListener` in e ? e.addEventListener(`change`, t) : e.addListener(t)
    }
  });
  let de = e => {
      var t;
      (t = n.onblur) == null || t.call(n, e), P(U) && !e.currentTarget.contains(e.relatedTarget) && (k(U, !1), P(H) && (P(H).focus({
        preventScroll: !0
      }), k(H, null)))
    },
    fe = e => {
      var t;
      (t = n.onfocus) == null || t.call(n, e), !(e.target instanceof HTMLElement && e.target.dataset.dismissable === `false`) && (P(U) || (k(U, !0), k(H, e.relatedTarget, !0)))
    },
    pe = e => {
      var t;
      (t = n.onpointerdown) == null || t.call(n, e), !(e.target instanceof HTMLElement && e.target.dataset.dismissable === `false`) && k(z, !0)
    },
    me = e => {
      var t;
      (t = n.onmouseenter) == null || t.call(n, e), k(R, !0)
    },
    he = e => {
      var t;
      (t = n.onmouseleave) == null || t.call(n, e), P(z) || k(R, !1)
    },
    K = e => {
      var t;
      (t = n.onmousemove) == null || t.call(n, e), k(R, !0)
    },
    ge = e => {
      var t;
      (t = n.ondragend) == null || t.call(n, e), k(R, !1)
    },
    q = e => {
      var t;
      (t = n.onpointerup) == null || t.call(n, e), k(z, !1)
    };
  ze.set(new ye);
  var J = Dt();
  F(J, `tabindex`, -1);
  var _e = a(J),
    ve = e => {
      var r = x(),
        a = i(r);
      s(a, 18, () => P(L), e => e, (e, r, a, u) => {
        let d = l(() => {
            let [e, t] = r.split(`-`);
            return {
              y: e,
              x: t
            }
          }),
          p = l(() => wt(m(), h()));
        var g = Et();
        ue(g, e => {
          var t;
          return {
            tabindex: -1,
            dir: e,
            class: n.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": P(B),
            "data-y-position": P(d).y,
            "data-x-position": P(d).x,
            style: n.style,
            onblur: de,
            onfocus: fe,
            onmouseenter: me,
            onmousemove: K,
            onmouseleave: he,
            ondragend: ge,
            onpointerdown: pe,
            onpointerup: q,
            ...se,
            [le]: {
              "--front-toast-height": `${(t=G.heights[0])==null?void 0:t.height}px`,
              "--width": `${bt}px`,
              "--gap": `${O()}px`,
              "--offset-top": P(p)[`--offset-top`],
              "--offset-right": P(p)[`--offset-right`],
              "--offset-bottom": P(p)[`--offset-bottom`],
              "--offset-left": P(p)[`--offset-left`],
              "--mobile-offset-top": P(p)[`--mobile-offset-top`],
              "--mobile-offset-right": P(p)[`--mobile-offset-right`],
              "--mobile-offset-bottom": P(p)[`--mobile-offset-bottom`],
              "--mobile-offset-left": P(p)[`--mobile-offset-left`]
            }
          }
        }, [() => ce()], void 0, void 0, `svelte-wiukfn`), s(g, 23, () => G.toasts.filter(e => !e.position && P(a) === 0 || e.position === r), e => e.id, (e, a, s, u) => {
          {
            let u = e => {
                var r = x(),
                  a = i(r),
                  s = e => {
                    var r = x(),
                      a = i(r);
                    t(a, () => n.successIcon ?? E), y(e, r)
                  },
                  c = e => {
                    st(e, {})
                  };
                o(a, e => {
                  n.successIcon ? e(s) : n.successIcon !== null && e(c, 1)
                }), y(e, r)
              },
              d = e => {
                var r = x(),
                  a = i(r),
                  s = e => {
                    var r = x(),
                      a = i(r);
                    t(a, () => n.errorIcon ?? E), y(e, r)
                  },
                  c = e => {
                    lt(e, {})
                  };
                o(a, e => {
                  n.errorIcon ? e(s) : n.errorIcon !== null && e(c, 1)
                }), y(e, r)
              },
              p = e => {
                var r = x(),
                  a = i(r),
                  s = e => {
                    var r = x(),
                      a = i(r);
                    t(a, () => n.warningIcon ?? E), y(e, r)
                  },
                  c = e => {
                    dt(e, {})
                  };
                o(a, e => {
                  n.warningIcon ? e(s) : n.warningIcon !== null && e(c, 1)
                }), y(e, r)
              },
              m = e => {
                var r = x(),
                  a = i(r),
                  s = e => {
                    var r = x(),
                      a = i(r);
                    t(a, () => n.infoIcon ?? E), y(e, r)
                  },
                  c = e => {
                    pt(e, {})
                  };
                o(a, e => {
                  n.infoIcon ? e(s) : n.infoIcon !== null && e(c, 1)
                }), y(e, r)
              },
              h = e => {
                var r = x(),
                  a = i(r),
                  s = e => {
                    var r = x(),
                      a = i(r);
                    t(a, () => n.closeIcon ?? E), y(e, r)
                  },
                  c = e => {
                    ht(e, {})
                  };
                o(a, e => {
                  n.closeIcon ? e(s) : n.closeIcon !== null && e(c, 1)
                }), y(e, r)
              },
              g = l(() => {
                var e;
                return ((e = b()) == null ? void 0 : e.duration) ?? v()
              }),
              ne = l(() => {
                var e;
                return ((e = b()) == null ? void 0 : e.class) ?? ``
              }),
              S = l(() => {
                var e;
                return ((e = b()) == null ? void 0 : e.descriptionClass) || ``
              }),
              C = l(() => {
                var e;
                return ((e = b()) == null ? void 0 : e.style) ?? ``
              }),
              w = l(() => b().classes || {}),
              T = l(() => b().unstyled ?? !1),
              re = l(() => {
                var e;
                return ((e = b()) == null ? void 0 : e.cancelButtonStyle) ?? ``
              }),
              D = l(() => {
                var e;
                return ((e = b()) == null ? void 0 : e.actionButtonStyle) ?? ``
              }),
              O = l(() => {
                var e;
                return ((e = b()) == null ? void 0 : e.closeButtonAriaLabel) ?? oe()
              });
            at(e, {
              get index() {
                return P(s)
              },
              get toast() {
                return P(a)
              },
              get defaultRichColors() {
                return _()
              },
              get duration() {
                return P(g)
              },
              get class() {
                return P(ne)
              },
              get descriptionClass() {
                return P(S)
              },
              get invert() {
                return c()
              },
              get visibleToasts() {
                return te()
              },
              get closeButton() {
                return f()
              },
              get interacting() {
                return P(z)
              },
              get position() {
                return r
              },
              get style() {
                return P(C)
              },
              get classes() {
                return P(w)
              },
              get unstyled() {
                return P(T)
              },
              get cancelButtonStyle() {
                return P(re)
              },
              get actionButtonStyle() {
                return P(D)
              },
              get closeButtonAriaLabel() {
                return P(O)
              },
              get expandByDefault() {
                return ee()
              },
              get expanded() {
                return P(R)
              },
              get loadingIcon() {
                return n.loadingIcon
              },
              successIcon: u,
              errorIcon: d,
              warningIcon: p,
              infoIcon: m,
              closeIcon: h,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), D(g), re(g, e => k(V, e), () => P(V)), T(() => g.dir = g.dir), y(e, g)
      }), y(e, r)
    };
  o(_e, e => {
    G.toasts.length > 0 && e(ve)
  }), D(J), T(() => F(J, `aria-label`, `${A()??``} ${P(W)??``}`)), y(e, J), ne()
}

function kt({
  version: e,
  versionUrl: t,
  onUpdate: n
}) {
  let r = !1,
    i = !1,
    a;
  async function o() {
    if (r || i || a || document.visibilityState !== `visible` || !navigator.onLine) return;
    let o = new AbortController;
    a = o;
    let s = setTimeout(() => o.abort(), 10 * fe.second);
    try {
      let a = await fetch(t, {
        cache: `no-store`,
        headers: {
          "cache-control": `no-cache`
        },
        signal: o.signal
      });
      if (!a.ok) return;
      let s = await a.json();
      if (r || o.signal.aborted || !s || typeof s != `object` || !(`version` in s) || typeof s.version != `string` || !s.version.trim() || s.version === e || `notifyUsers` in s && s.notifyUsers === !1) return;
      i = !0, n()
    } catch {} finally {
      clearTimeout(s), a = void 0
    }
  }
  let s = Se(o, {
    interval: fe.minute,
    immediate: !0
  });
  return () => {
    r = !0, s(), a == null || a.abort()
  }
}

function At() {
  if (!(`serviceWorker` in navigator)) return;
  let e = () => {
    navigator.serviceWorker.register(`${R}/service-worker.js`, {}).catch(e => console.warn(`[sw] registration failed`, e))
  };
  return document.readyState === `complete` ? e() : window.addEventListener(`load`, e, {
    once: !0
  }), () => window.removeEventListener(`load`, e)
}
var jt = () => {};

function Mt(e) {
  return jt
}
var Nt = g(`<span class="hidden"> </span> <!> <!> <!> <!> <!>`, 1);

function Pt(e, n) {
  S(n, !0), N(At), I(() => {
    var e;
    let t = (e = q.data) == null ? void 0 : e.id;
    return j(() => {
      let e = he.start(t),
        n = Z.start(t);
      return () => {
        e == null || e(), n()
      }
    })
  }), I(() => {
    let e = W.device_notifications_body(),
      t = W.device_notifications_charges_full(),
      n = X.muted || U.sounds.playerNotification === 0;
    Z.state === `on` && !Z.busy && j(() => void Z.syncPreferences(e, n, t))
  });
  let r = De(() => ve.current !== null);
  N(() => {
    let e = `frontend-update`,
      t = kt({
        version: B,
        versionUrl: `${z||R}/_app/version.json`,
        onUpdate: () => {
          U.alerts.updates && K.info(W.frontend_update_available(), {
            id: e,
            description: W.frontend_update_description(),
            duration: 1 / 0,
            classes: {
              toast: `grid! grid-cols-[auto_minmax(0,1fr)]! items-start! gap-x-3! gap-y-3! [&>[data-content]]:col-start-2 [&>[data-content]]:row-start-1 [&>[data-content]]:min-w-0`,
              icon: `col-start-1 row-start-1 mx-0! mt-0.5!`,
              description: `break-words`,
              actionButton: `col-start-2 row-start-2 m-0! h-auto! min-h-11 justify-self-start px-4! py-2! whitespace-normal!`
            },
            action: {
              label: W.frontend_update_reload(),
              onClick: () => window.location.reload()
            }
          })
        }
      });
    return () => {
      t(), K.dismiss(e)
    }
  }), N(() => {
    for (let e of [`localStorage`, `sessionStorage`]) try {
      let t = window[e];
      for (let e = t.length - 1; e >= 0; --e) {
        let n = t.key(e);
        n != null && n.startsWith(`phone:`) && t.removeItem(n)
      }
    } catch {}
    let e = Te();
    Y.init();
    let t = p(!1);
    I(() => {
      P(t) || q.data && Ee() && (k(t, !0), V(async () => {
        let {
          TWAServices: e
        } = await import(`../chunks/CkVsvSFT.js`).then(e => e.i);
        return {
          TWAServices: e
        }
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]), import.meta.url).then(({
        TWAServices: e
      }) => e.loadTWA()))
    }), we.onInit(), I(() => {
      we.syncStatusBar(X.theme === `dark`)
    });
    let n = p(!1);
    I(() => {
      !q.data || P(n) || (k(n, !0), we.recoverUnfinished().catch(Mt(`[ios-app] recover purchases:`)))
    });
    let r = p(!1);
    I(() => {
      !q.data || P(r) || (k(r, !0), we.attestDevice().catch(Mt(`[ios-app] device attest:`)))
    }), pe();
    let i = Se(async () => {
        await q.refresh()
      }, {
        interval: fe.hour,
        immediate: !0
      }),
      a = setInterval(() => {
        xe().catch(e => console.warn(`[sw] message failed`, e))
      }, 5e3);
    return () => {
      clearTimeout(a), e(), i(), Y.cleanup()
    }
  }), N(ge);
  let s = `muted`;
  N(() => {
    X.muted = localStorage.getItem(s) === `1`
  }), I(() => {
    {
      let e = X.muted;
      be(), document.querySelectorAll(`audio`).forEach(t => {
        t.muted = e
      });
      for (let t of Object.values(_e).filter(e => e instanceof Audio)) t.muted = e;
      localStorage.setItem(s, Number(e).toString())
    }
  }), I(() => {
    me()
  });
  let c = `haptics`;
  N(() => {
    X.haptics = localStorage.getItem(c) !== `0`
  }), I(() => {
    localStorage.setItem(c, Number(X.haptics).toString())
  }), N(() => {});
  var l = Nt();
  w(`beforeunload`, te, () => {
    Ce().catch(e => console.warn(`[sw] message failed`, e))
  });
  var d = i(l),
    f = a(d);
  D(d);
  var m = h(d, 2);
  ke(m, {});
  var g = h(m, 2),
    _ = e => {
      var r = x(),
        a = i(r);
      t(a, () => n.children), y(e, r)
    };
  o(g, e => {
    e(_, -1)
  });
  var v = h(g, 2),
    b = e => {
      var t = x(),
        n = i(t);
      ee(n, () => V(() => import(`../chunks/C11nHvVM.js`), __vite__mapDeps([15, 1, 5, 16, 4, 9, 6, 7, 8, 10, 17, 18, 19, 20, 21]), import.meta.url), null, (e, t) => {
        var n = x(),
          r = i(n);
        L(r, () => P(t).default, (e, t) => {
          t(e, {})
        }), y(e, n)
      }), y(e, t)
    };
  o(v, e => {
    r.current && e(b)
  });
  var C = h(v, 2);
  Ot(C, {
    closeButton: !0,
    richColors: !0,
    position: `top-right`,
    class: `top-safe-15! whitespace-pre-line!`,
    duration: 3e3
  });
  var E = h(C, 2),
    re = e => {
      var t = x(),
        n = i(t);
      ee(n, () => V(() => import(`../chunks/BOlDLAl_.js`), __vite__mapDeps([22, 1, 2, 16, 4, 5, 6, 7, 8, 9, 10, 23, 24, 25, 26, 18, 27, 28, 29, 30, 3, 31, 32, 33, 34, 35, 19, 36, 37, 20, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51]), import.meta.url), null, (e, t) => {
        var n = x(),
          r = i(n);
        L(r, () => P(t).default, (e, t) => {
          t(e, {
            get initialContext() {
              return de.context
            },
            get open() {
              return de.open
            },
            set open(e) {
              de.open = e
            }
          })
        }), y(e, n)
      }), y(e, t)
    };
  o(E, e => {
    de.open && e(re)
  }), T(() => u(f, `Version: 1791398844087`)), y(e, l), ne()
}
export {
  Pt as component
};