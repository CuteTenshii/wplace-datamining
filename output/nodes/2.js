const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../chunks/LjXxo1Gq.js", "../chunks/D2z8HFb7.js", "../chunks/C-l9IXmX.js", "../chunks/COwC9nXI.js", "../chunks/B60Wf4VA.js", "../chunks/CR04akpm.js", "../chunks/Bqje1HXi.js", "../chunks/a7QZC4SB.js", "../chunks/16AH6ZqH.js", "../chunks/pKOrQQBa.js", "../chunks/DOmS4MBC.js", "../chunks/BrtrtlEe.js", "../chunks/aXflQl2K.js", "../chunks/cD22R5HB.js", "../chunks/C8yDr8fi.js", "../chunks/DG8R2unG.js", "../chunks/1I1joxOl.js", "../chunks/B8UK1oE5.js", "../chunks/DlkQLHW-.js", "../chunks/DxdGK6Xj.js", "../chunks/1G3hozcZ.js", "../chunks/MAYLck6z.js", "../assets/ChallengeDialog.ZVAQIJPp.css", "../chunks/CgmRZnh2.js", "../chunks/BcTwUJO0.js", "../chunks/BUfYjYOC.js", "../chunks/R7y8S9hK.js", "../chunks/CD3N2W5s.js", "../assets/Dialog.DNSr87Ge.css", "../chunks/J8mbed7J.js", "../chunks/B4JYNUuP.js", "../chunks/BXwShjFs.js", "../chunks/dIctyUL4.js", "../chunks/yWvON2ed.js", "../chunks/DhdClfJL.js", "../chunks/Ch-MaBl_.js", "../chunks/B3gIincL.js", "../chunks/B768lyVA.js", "../chunks/BhK5QdHv.js", "../chunks/CY4bX6_G.js", "../chunks/B-iUZBNE.js", "../chunks/CC3ulgpt.js", "../chunks/DaJR7X6m.js", "../chunks/C9i0jsij.js", "../chunks/DZUvmyEj.js", "../chunks/DiSVnluZ.js", "../chunks/DqckaTl0.js", "../chunks/B6z9p5ul.js", "../chunks/D1eYulwB.js", "../chunks/CPMd0QOP.js", "../chunks/BZCuSWIG.js", "../chunks/CrEqEH-i.js", "../chunks/HnwH5Mr3.js", "../chunks/BlQ99c3a.js", "../chunks/kO087tK1.js"]))) => i.map(i => d[i]);
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
  Xt as b,
  Yt as x,
  Z as S,
  Zt as C,
  a as w,
  at as T,
  bt as E,
  cn as D,
  f as ne,
  in as O,
  it as k,
  jt as A,
  k as j,
  kt as re,
  mt as M,
  o as ie,
  ot as N,
  r as P,
  rt as ae,
  s as oe,
  tt as se,
  ut as F,
  v as ce,
  x as I,
  xt as L,
  y as le,
  z as R
} from "../chunks/D2z8HFb7.js";
import {
  C as z,
  S as B,
  y as V
} from "../chunks/C-l9IXmX.js";
import {
  a as H
} from "../chunks/CR04akpm.js";
import "../chunks/B8UK1oE5.js";
import {
  i as U,
  n as W
} from "../chunks/16AH6ZqH.js";
import "../chunks/BrtrtlEe.js";
import {
  t as G
} from "../chunks/B60Wf4VA.js";
import {
  t as ue
} from "../chunks/BbTcAyk7.js";
import "../chunks/pKOrQQBa.js";
import {
  M as de,
  Tt as fe,
  a as K,
  b as pe,
  f as me,
  i as q,
  m as he,
  n as J,
  o as Y,
  p as ge,
  pt as _e,
  r as ve,
  t as X,
  y as ye,
  yt as be
} from "../chunks/Bqje1HXi.js";
import "../chunks/DOmS4MBC.js";
import "../chunks/CPMd0QOP.js";
import {
  c as xe,
  s as Se,
  t as Ce
} from "../chunks/BwSA7jr4.js";
import {
  t as Z
} from "../chunks/cD22R5HB.js";
import {
  i as we,
  t as Te
} from "../chunks/aXflQl2K.js";
import {
  t as Ee
} from "../chunks/Cx0QHACC.js";
import {
  t as De
} from "../chunks/DlkQLHW-.js";
var Oe = e(`<svg class="pointer-events-none fixed size-0" aria-hidden="true" focusable="false"><defs><filter id="wplace-colorblind" x="0" y="0" width="100%" height="100%" color-interpolation-filters="linearRGB"><feColorMatrix type="matrix"></feColorMatrix></filter></defs></svg>`);

function ke(e, t) {
  C(t, !0);
  let n = l(() => U(W.colorblindMode, W.colorblindStrength).join(` `));
  L(() => (document.documentElement.toggleAttribute(`data-colorblind-filter`, W.colorblindMode !== `none` && W.colorblindStrength > 0), () => document.documentElement.removeAttribute(`data-colorblind-filter`)));
  var r = Oe(),
    i = a(r),
    o = a(i),
    s = a(o);
  O(o), O(i), O(r), E(() => I(s, `values`, F(n))), y(e, r), b()
}
var Ae = Array(12).fill(0),
  je = g(`<div class="sonner-loading-bar"></div>`),
  Me = g(`<div><div class="sonner-spinner"></div></div>`);

function Ne(e, t) {
  C(t, !0);
  var n = Me(),
    r = a(n);
  s(r, 23, () => Ae, (e, t) => `spinner-bar-${t}`, (e, t) => {
    var n = je();
    y(e, n)
  }), O(r), O(n), E(e => {
    m(n, 1, e), I(n, `data-visible`, t.visible)
  }, [() => j([`sonner-loading-wrapper`, t.class].filter(Boolean).join(` `))]), y(e, n), b()
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
      let n = N(t, `focusin`, e),
        r = N(t, `focusout`, e);
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
      return x(f($, this))
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
  let e = p(re(typeof document < `u` && document.hidden));
  return L(() => N(document, `visibilitychange`, () => {
    A(e, document.hidden, !0)
  })), {
    get current() {
      return F(e)
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
  C(n, !0);
  let s = e => {
      var r = S(),
        s = i(r),
        c = e => {
          var r = Ze(),
            i = a(r);
          t(i, () => n.loadingIcon), O(r), E(e => {
            m(r, 1, e), I(r, `data-visible`, F(W) === `loading`)
          }, [() => {
            var e, t;
            return j(Y((e = F(X)) == null ? void 0 : e.loader, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.loader, `sonner-loader`))
          }]), y(e, r)
        },
        u = e => {
          {
            let t = l(() => {
                var e, t;
                return Y((e = F(X)) == null ? void 0 : e.loader, (t = n.toast.classes) == null ? void 0 : t.loader)
              }),
              r = l(() => F(W) === `loading`);
            Ne(e, {
              get class() {
                return F(t)
              },
              get visible() {
                return F(r)
              }
            })
          }
        };
      o(s, e => {
        n.loadingIcon ? e(c) : e(u, -1)
      }), y(e, r)
    },
    c = w(n, `cancelButtonStyle`, 3, ``),
    d = w(n, `actionButtonStyle`, 3, ``),
    ee = w(n, `descriptionClass`, 3, ``),
    f = w(n, `unstyled`, 3, !1),
    g = w(n, `defaultRichColors`, 3, !1);
  ie(n, Xe);
  let _ = {
      ...qe
    },
    v = p(!1),
    te = p(!1),
    x = p(!1),
    re = p(!1),
    N = p(!1),
    ae = p(0),
    ce = p(0),
    le = n.toast.duration || n.duration || He,
    z = p(void 0),
    B = p(null),
    V = p(null),
    H = l(() => n.index === 0),
    U = l(() => n.index + 1 <= n.visibleToasts),
    W = l(() => n.toast.type),
    G = l(() => n.toast.dismissable !== !1),
    ue = l(() => n.toast.class || ``),
    de = l(() => n.toast.descriptionClass || ``),
    fe = l(() => K.heights.findIndex(e => e.toastId === n.toast.id) || 0),
    pe = l(() => n.toast.closeButton ?? n.closeButton),
    me = l(() => n.toast.duration ?? n.duration ?? He),
    q = null,
    he = l(() => n.position.split(`-`)),
    J = l(() => K.heights.reduce((e, t, n) => n >= F(fe) ? e : e + t.height, 0)),
    ge = Ve(),
    _e = l(() => n.toast.invert || n.invert),
    ve = l(() => F(W) === `loading`),
    X = l(() => ({
      ..._,
      ...n.classes
    })),
    ye = l(() => n.toast.title),
    be = l(() => n.toast.description),
    xe = p(0),
    Se = p(0),
    Ce = l(() => Math.round(F(fe) * Ue + F(J)));
  L(() => {
    F(ye), F(be);
    let e;
    e = n.expanded || n.expandByDefault ? 1 : 1 - n.index * Ke;
    let t = M(() => F(z));
    if (t === void 0) return;
    t.style.setProperty(`height`, `auto`);
    let r = t.offsetHeight,
      i = t.getBoundingClientRect().height,
      a = Math.round(i / e + 2 ** -52 & 100) / 100;
    t.style.removeProperty(`height`);
    let o;
    o = Math.abs(a - r) < 1 ? a : r, A(ce, o, !0), M(() => {
      K.setHeight({
        toastId: n.toast.id,
        height: o
      })
    })
  });

  function Z() {
    A(te, !0), A(ae, F(Ce), !0), K.removeHeight(n.toast.id), setTimeout(() => {
      K.remove(n.toast.id)
    }, Ge)
  }
  let we, Te = l(() => n.toast.promise && F(W) === `loading` || n.toast.duration === 1 / 0);

  function Ee() {
    A(xe, new Date().getTime(), !0), we = setTimeout(() => {
      var e, t;
      (e = (t = n.toast).onAutoClose) == null || e.call(t, n.toast), Z()
    }, le)
  }

  function De() {
    if (F(Se) < F(xe)) {
      let e = new Date().getTime() - F(xe);
      le -= e
    }
    A(Se, new Date().getTime(), !0)
  }
  L(() => {
    n.toast.updated && (clearTimeout(we), le = F(me), Ee())
  }), L(() => (F(Te) || (n.expanded || n.interacting || ge.current ? De() : Ee()), () => clearTimeout(we))), P(() => {
    var e;
    A(v, !0);
    let t = (e = F(z)) == null ? void 0 : e.getBoundingClientRect().height;
    return A(ce, t, !0), K.setHeight({
      toastId: n.toast.id,
      height: t
    }), () => {
      K.removeHeight(n.toast.id)
    }
  }), L(() => {
    n.toast.delete && M(() => {
      var e, t;
      Z(), (e = (t = n.toast).onDismiss) == null || e.call(t, n.toast)
    })
  });
  let Oe = e => {
      if (F(ve)) return;
      A(ae, F(Ce), !0);
      let t = e.target;
      t.setPointerCapture(e.pointerId), t.tagName !== `BUTTON` && (A(x, !0), q = {
        x: e.clientX,
        y: e.clientY
      })
    },
    ke = () => {
      var e, t;
      if (F(re) || !F(G)) return;
      q = null;
      let r = Number(((e = F(z)) == null ? void 0 : e.style.getPropertyValue(`--swipe-amount-x`).replace(`px`, ``)) || 0),
        i = Number(((t = F(z)) == null ? void 0 : t.style.getPropertyValue(`--swipe-amount-y`).replace(`px`, ``)) || 0),
        a = new Date().getTime() - 0,
        o = F(B) === `x` ? r : i,
        s = Math.abs(o) / a;
      if (Math.abs(o) >= We || s > .11) {
        var c, l;
        A(ae, F(Ce), !0), (c = (l = n.toast).onDismiss) == null || c.call(l, n.toast), F(B) === `x` ? A(V, r > 0 ? `right` : `left`, !0) : A(V, i > 0 ? `down` : `up`, !0), Z(), A(re, !0);
        return
      }
      var u, d;
      (u = F(z)) == null || u.style.setProperty(`--swipe-amount-x`, `0px`), (d = F(z)) == null || d.style.setProperty(`--swipe-amount-y`, `0px`), A(N, !1), A(x, !1), A(B, null)
    },
    Ae = e => {
      var t, r, i;
      if (!q || !F(G) || (((t = window.getSelection()) == null ? void 0 : t.toString().length) ?? -1) > 0) return;
      let a = e.clientY - q.y,
        o = e.clientX - q.x,
        s = n.swipeDirections ?? Je(n.position);
      !F(B) && (Math.abs(o) > 1 || Math.abs(a) > 1) && A(B, Math.abs(o) > Math.abs(a) ? `x` : `y`, !0);
      let c = {
        x: 0,
        y: 0
      };
      if (F(B) === `y`) {
        if (s.includes(`top`) || s.includes(`bottom`)) {
          if (s.includes(`top`) && a < 0 || s.includes(`bottom`) && a > 0) c.y = a;
          else {
            let e = a * Ye(a);
            c.y = Math.abs(e) < Math.abs(a) ? e : a
          }
        }
      } else if (F(B) === `x` && (s.includes(`left`) || s.includes(`right`))) {
        if (s.includes(`left`) && o < 0 || s.includes(`right`) && o > 0) c.x = o;
        else {
          let e = o * Ye(o);
          c.x = Math.abs(e) < Math.abs(o) ? e : o
        }
      }(Math.abs(c.x) > 0 || Math.abs(c.y) > 0) && A(N, !0), (r = F(z)) == null || r.style.setProperty(`--swipe-amount-x`, `${c.x}px`), (i = F(z)) == null || i.style.setProperty(`--swipe-amount-y`, `${c.y}px`)
    },
    je = () => {
      A(x, !1), A(B, null), q = null
    },
    Me = l(() => n.toast.icon ? n.toast.icon : F(W) === `success` ? n.successIcon : F(W) === `error` ? n.errorIcon : F(W) === `warning` ? n.warningIcon : F(W) === `info` ? n.infoIcon : F(W) === `loading` ? n.loadingIcon : null);
  var Q = it();
  I(Q, `tabindex`, 0);
  let Pe;
  var Fe = a(Q),
    Ie = e => {
      var r = Qe(),
        i = a(r);
      t(i, () => n.closeIcon ?? D), O(r), E(e => {
        I(r, `aria-label`, n.closeButtonAriaLabel), I(r, `data-disabled`, F(ve)), m(r, 1, e)
      }, [() => {
        var e, t;
        return j(Y((e = F(X)) == null ? void 0 : e.closeButton, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.closeButton))
      }]), k(`click`, r, () => {
        var e, t;
        F(ve) || !F(G) || (Z(), (e = (t = n.toast).onDismiss) == null || e.call(t, n.toast))
      }), y(e, r)
    };
  o(Fe, e => {
    F(pe) && !n.toast.component && F(W) !== `loading` && n.closeIcon !== null && e(Ie)
  });
  var Le = h(Fe, 2),
    $ = e => {
      let t = l(() => n.toast.component);
      var r = S(),
        a = i(r);
      R(a, () => F(t), (e, t) => {
        t(e, oe(() => n.toast.componentProps, {
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
              var t = S(),
                r = i(t),
                a = e => {
                  var t = S(),
                    r = i(t);
                  R(r, () => n.toast.icon, (e, t) => {
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
            (n.toast.promise || F(W) === `loading`) && e(l)
          });
          var u = h(c, 2),
            d = e => {
              var r = S(),
                a = i(r),
                s = e => {
                  var t = S(),
                    r = i(t);
                  R(r, () => n.toast.icon, (e, t) => {
                    t(e, {})
                  }), y(e, t)
                },
                c = e => {
                  var r = S(),
                    a = i(r);
                  t(a, () => n.successIcon ?? D), y(e, r)
                },
                l = e => {
                  var r = S(),
                    a = i(r);
                  t(a, () => n.errorIcon ?? D), y(e, r)
                },
                u = e => {
                  var r = S(),
                    a = i(r);
                  t(a, () => n.warningIcon ?? D), y(e, r)
                },
                d = e => {
                  var r = S(),
                    a = i(r);
                  t(a, () => n.infoIcon ?? D), y(e, r)
                };
              o(a, e => {
                n.toast.icon ? e(s) : F(W) === `success` ? e(c, 1) : F(W) === `error` ? e(l, 2) : F(W) === `warning` ? e(u, 3) : F(W) === `info` && e(d, 4)
              }), y(e, r)
            };
          o(u, e => {
            n.toast.type !== `loading` && e(d)
          }), O(r), E(e => m(r, 1, e), [() => {
            var e, t;
            return j(Y((e = F(X)) == null ? void 0 : e.icon, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.icon))
          }]), y(e, r)
        };
      o(p, e => {
        (F(W) || n.toast.icon || n.toast.promise) && n.toast.icon !== null && (F(Me) !== null || n.toast.icon) && e(g)
      });
      var _ = h(p, 2),
        v = a(_),
        te = a(v),
        b = e => {
          var t = S(),
            r = i(t),
            a = e => {
              let t = l(() => n.toast.title);
              var r = S(),
                a = i(r);
              R(a, () => F(t), (e, t) => {
                t(e, oe(() => n.toast.componentProps))
              }), y(e, r)
            },
            s = e => {
              var t = se();
              E(() => u(t, n.toast.title)), y(e, t)
            };
          o(r, e => {
            typeof n.toast.title == `string` ? e(s, -1) : e(a)
          }), y(e, t)
        };
      o(te, e => {
        n.toast.title && e(b)
      }), O(v);
      var x = h(v, 2),
        C = e => {
          var t = et(),
            r = a(t),
            s = e => {
              let t = l(() => n.toast.description);
              var r = S(),
                a = i(r);
              R(a, () => F(t), (e, t) => {
                t(e, oe(() => n.toast.componentProps))
              }), y(e, r)
            },
            c = e => {
              var t = se();
              E(() => u(t, n.toast.description)), y(e, t)
            };
          o(r, e => {
            typeof n.toast.description == `string` ? e(c, -1) : e(s)
          }), O(t), E(e => m(t, 1, e), [() => {
            var e, t;
            return j(Y(ee(), F(de), (e = F(X)) == null ? void 0 : e.description, (t = n.toast.classes) == null ? void 0 : t.description))
          }]), y(e, t)
        };
      o(x, e => {
        n.toast.description && e(C)
      }), O(_);
      var w = h(_, 2),
        T = e => {
          var t = S(),
            s = i(t),
            d = e => {
              var t = S(),
                r = i(t);
              R(r, () => n.toast.cancel, (e, t) => {
                t(e, {})
              }), y(e, t)
            },
            ee = e => {
              var t = tt(),
                i = a(t, !0);
              O(t), E(e => {
                r(t, n.toast.cancelButtonStyle ?? c()), m(t, 1, e), u(i, n.toast.cancel.label)
              }, [() => {
                var e, t;
                return j(Y((e = F(X)) == null ? void 0 : e.cancelButton, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.cancelButton))
              }]), k(`click`, t, e => {
                var t, r;
                Be(n.toast.cancel) && F(G) && ((t = n.toast.cancel) == null || (r = t.onClick) == null || r.call(t, e), Z())
              }), y(e, t)
            },
            f = l(() => Be(n.toast.cancel));
          o(s, e => {
            typeof n.toast.cancel == `function` ? e(d) : F(f) && e(ee, 1)
          }), y(e, t)
        };
      o(w, e => {
        n.toast.cancel && e(T)
      });
      var ne = h(w, 2),
        A = e => {
          var t = S(),
            s = i(t),
            c = e => {
              var t = S(),
                r = i(t);
              R(r, () => n.toast.action, (e, t) => {
                t(e, {})
              }), y(e, t)
            },
            ee = e => {
              var t = nt(),
                i = a(t, !0);
              O(t), E(e => {
                r(t, n.toast.actionButtonStyle ?? d()), m(t, 1, e), u(i, n.toast.action.label)
              }, [() => {
                var e, t;
                return j(Y((e = F(X)) == null ? void 0 : e.actionButton, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.actionButton))
              }]), k(`click`, t, e => {
                var t;
                Be(n.toast.action) && ((t = n.toast.action) == null || t.onClick(e), !e.defaultPrevented && Z())
              }), y(e, t)
            },
            f = l(() => Be(n.toast.action));
          o(s, e => {
            typeof n.toast.action == `function` ? e(c) : F(f) && e(ee, 1)
          }), y(e, t)
        };
      o(ne, e => {
        n.toast.action && e(A)
      }), E(e => m(v, 1, e), [() => {
        var e, t;
        return j(Y((e = F(X)) == null ? void 0 : e.title, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.title))
      }]), y(e, f)
    };
  o(Le, e => {
    n.toast.component ? e($) : e(Re, -1)
  }), O(Q), ne(Q, e => A(z, e), () => F(z)), E((e, t, i) => {
    m(Q, 1, e), I(Q, `data-rich-colors`, n.toast.richColors ?? g()), I(Q, `data-styled`, !(n.toast.component || n.toast.unstyled || f())), I(Q, `data-mounted`, F(v)), I(Q, `data-promise`, t), I(Q, `data-swiped`, F(N)), I(Q, `data-removed`, F(te)), I(Q, `data-visible`, F(U)), I(Q, `data-y-position`, F(he)[0]), I(Q, `data-x-position`, F(he)[1]), I(Q, `data-index`, n.index), I(Q, `data-front`, F(H)), I(Q, `data-swiping`, F(x)), I(Q, `data-dismissable`, F(G)), I(Q, `data-type`, F(W)), I(Q, `data-invert`, F(_e)), I(Q, `data-swipe-out`, F(re)), I(Q, `data-swipe-direction`, F(V)), I(Q, `data-expanded`, i), Pe = r(Q, `${n.style} ${n.toast.style}`, Pe, {
      "--index": n.index,
      "--toasts-before": n.index,
      "--z-index": K.toasts.length - n.index,
      "--offset": `${F(te)?F(ae):F(Ce)}px`,
      "--initial-height": n.expandByDefault ? `auto` : `${F(ce)}px`
    })
  }, [() => {
    var e, t, r, i;
    return j(Y(n.class, F(ue), (e = F(X)) == null ? void 0 : e.toast, (t = n.toast) == null || (t = t.classes) == null ? void 0 : t.toast, (r = F(X)) == null ? void 0 : r[F(W)], (i = n.toast) == null || (i = i.classes) == null ? void 0 : i[F(W)]))
  }, () => !!n.toast.promise, () => !!(n.expanded || n.expandByDefault && F(v))]), k(`pointermove`, Q, Ae), k(`pointerup`, Q, ke), k(`pointerdown`, Q, Oe), T(`dragend`, Q, je), y(e, Q), b()
}
ae([`pointermove`, `pointerup`, `pointerdown`, `click`]);
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
  C(n, !0);

  function r(e) {
    return e === `system` ? typeof window < `u` && window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches ? St : Ct : e
  }
  let c = w(n, `invert`, 3, !1),
    u = w(n, `position`, 3, `bottom-right`),
    d = w(n, `hotkey`, 19, () => [`altKey`, `KeyT`]),
    ee = w(n, `expand`, 3, !1),
    f = w(n, `closeButton`, 3, !1),
    m = w(n, `offset`, 3, _t),
    h = w(n, `mobileOffset`, 3, vt),
    g = w(n, `theme`, 3, `light`),
    _ = w(n, `richColors`, 3, !1),
    v = w(n, `duration`, 3, yt),
    te = w(n, `visibleToasts`, 3, gt),
    x = w(n, `toastOptions`, 19, () => ({})),
    T = w(n, `dir`, 7, `auto`),
    k = w(n, `gap`, 3, xt),
    j = w(n, `containerAriaLabel`, 3, `Notifications`),
    ae = w(n, `closeButtonAriaLabel`, 3, `Close toast`),
    oe = ie(n, Tt);

  function se() {
    if (T() !== `auto`) return T();
    if (typeof window > `u` || typeof document > `u`) return `ltr`;
    let e = document.documentElement.getAttribute(`dir`);
    return e === `auto` || !e ? (M(() => T(window.getComputedStyle(document.documentElement).direction ?? `ltr`)), T()) : (M(() => T(e)), e)
  }
  let R = l(() => Array.from(new Set([u(), ...K.toasts.filter(e => e.position).map(e => e.position)].filter(Boolean)))),
    z = p(!1),
    B = p(!1),
    V = p(re(r(g()))),
    H = p(void 0),
    U = p(null),
    W = p(!1),
    G = l(() => d().join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``));
  L(() => {
    K.toasts.length <= 1 && A(z, !1)
  }), L(() => {
    let e = K.toasts.filter(e => e.dismiss && !e.delete);
    if (e.length > 0) {
      let t = K.toasts.map(t => e.find(e => e.id === t.id) ? {
        ...t,
        delete: !0
      } : t);
      K.toasts = t
    }
  }), L(() => () => {
    F(H) && F(U) && (F(U).focus({
      preventScroll: !0
    }), A(U, null), A(W, !1))
  }), P(() => (K.reset(), N(document, `keydown`, e => {
    var t;
    if (d().every(t => e[t] || e.code === t)) {
      var n;
      A(z, !0), (n = F(H)) == null || n.focus()
    }
    e.code === `Escape` && (document.activeElement === F(H) || (t = F(H)) != null && t.contains(document.activeElement)) && A(z, !1)
  }))), L(() => {
    if (g() !== `system` && A(V, g()), typeof window < `u`) {
      g() === `system` && (window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches ? A(V, St) : A(V, Ct));
      let e = window.matchMedia(`(prefers-color-scheme: dark)`),
        t = ({
          matches: e
        }) => {
          A(V, e ? St : Ct, !0)
        };
      `addEventListener` in e ? e.addEventListener(`change`, t) : e.addListener(t)
    }
  });
  let ue = e => {
      var t;
      (t = n.onblur) == null || t.call(n, e), F(W) && !e.currentTarget.contains(e.relatedTarget) && (A(W, !1), F(U) && (F(U).focus({
        preventScroll: !0
      }), A(U, null)))
    },
    de = e => {
      var t;
      (t = n.onfocus) == null || t.call(n, e), !(e.target instanceof HTMLElement && e.target.dataset.dismissable === `false`) && (F(W) || (A(W, !0), A(U, e.relatedTarget, !0)))
    },
    fe = e => {
      var t;
      (t = n.onpointerdown) == null || t.call(n, e), !(e.target instanceof HTMLElement && e.target.dataset.dismissable === `false`) && A(B, !0)
    },
    pe = e => {
      var t;
      (t = n.onmouseenter) == null || t.call(n, e), A(z, !0)
    },
    me = e => {
      var t;
      (t = n.onmouseleave) == null || t.call(n, e), F(B) || A(z, !1)
    },
    q = e => {
      var t;
      (t = n.onmousemove) == null || t.call(n, e), A(z, !0)
    },
    he = e => {
      var t;
      (t = n.ondragend) == null || t.call(n, e), A(z, !1)
    },
    J = e => {
      var t;
      (t = n.onpointerup) == null || t.call(n, e), A(B, !1)
    };
  ze.set(new ve);
  var Y = Dt();
  I(Y, `tabindex`, -1);
  var ge = a(Y),
    _e = e => {
      var r = S(),
        a = i(r);
      s(a, 18, () => F(R), e => e, (e, r, a, u) => {
        let d = l(() => {
            let [e, t] = r.split(`-`);
            return {
              y: e,
              x: t
            }
          }),
          p = l(() => wt(m(), h()));
        var g = Et();
        le(g, e => {
          var t;
          return {
            tabindex: -1,
            dir: e,
            class: n.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": F(V),
            "data-y-position": F(d).y,
            "data-x-position": F(d).x,
            style: n.style,
            onblur: ue,
            onfocus: de,
            onmouseenter: pe,
            onmousemove: q,
            onmouseleave: me,
            ondragend: he,
            onpointerdown: fe,
            onpointerup: J,
            ...oe,
            [ce]: {
              "--front-toast-height": `${(t=K.heights[0])==null?void 0:t.height}px`,
              "--width": `${bt}px`,
              "--gap": `${k()}px`,
              "--offset-top": F(p)[`--offset-top`],
              "--offset-right": F(p)[`--offset-right`],
              "--offset-bottom": F(p)[`--offset-bottom`],
              "--offset-left": F(p)[`--offset-left`],
              "--mobile-offset-top": F(p)[`--mobile-offset-top`],
              "--mobile-offset-right": F(p)[`--mobile-offset-right`],
              "--mobile-offset-bottom": F(p)[`--mobile-offset-bottom`],
              "--mobile-offset-left": F(p)[`--mobile-offset-left`]
            }
          }
        }, [() => se()], void 0, void 0, `svelte-wiukfn`), s(g, 23, () => K.toasts.filter(e => !e.position && F(a) === 0 || e.position === r), e => e.id, (e, a, s, u) => {
          {
            let u = e => {
                var r = S(),
                  a = i(r),
                  s = e => {
                    var r = S(),
                      a = i(r);
                    t(a, () => n.successIcon ?? D), y(e, r)
                  },
                  c = e => {
                    st(e, {})
                  };
                o(a, e => {
                  n.successIcon ? e(s) : n.successIcon !== null && e(c, 1)
                }), y(e, r)
              },
              d = e => {
                var r = S(),
                  a = i(r),
                  s = e => {
                    var r = S(),
                      a = i(r);
                    t(a, () => n.errorIcon ?? D), y(e, r)
                  },
                  c = e => {
                    lt(e, {})
                  };
                o(a, e => {
                  n.errorIcon ? e(s) : n.errorIcon !== null && e(c, 1)
                }), y(e, r)
              },
              p = e => {
                var r = S(),
                  a = i(r),
                  s = e => {
                    var r = S(),
                      a = i(r);
                    t(a, () => n.warningIcon ?? D), y(e, r)
                  },
                  c = e => {
                    dt(e, {})
                  };
                o(a, e => {
                  n.warningIcon ? e(s) : n.warningIcon !== null && e(c, 1)
                }), y(e, r)
              },
              m = e => {
                var r = S(),
                  a = i(r),
                  s = e => {
                    var r = S(),
                      a = i(r);
                    t(a, () => n.infoIcon ?? D), y(e, r)
                  },
                  c = e => {
                    pt(e, {})
                  };
                o(a, e => {
                  n.infoIcon ? e(s) : n.infoIcon !== null && e(c, 1)
                }), y(e, r)
              },
              h = e => {
                var r = S(),
                  a = i(r),
                  s = e => {
                    var r = S(),
                      a = i(r);
                    t(a, () => n.closeIcon ?? D), y(e, r)
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
                return ((e = x()) == null ? void 0 : e.duration) ?? v()
              }),
              b = l(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.class) ?? ``
              }),
              C = l(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.descriptionClass) || ``
              }),
              w = l(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.style) ?? ``
              }),
              T = l(() => x().classes || {}),
              E = l(() => x().unstyled ?? !1),
              ne = l(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.cancelButtonStyle) ?? ``
              }),
              O = l(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.actionButtonStyle) ?? ``
              }),
              k = l(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.closeButtonAriaLabel) ?? ae()
              });
            at(e, {
              get index() {
                return F(s)
              },
              get toast() {
                return F(a)
              },
              get defaultRichColors() {
                return _()
              },
              get duration() {
                return F(g)
              },
              get class() {
                return F(b)
              },
              get descriptionClass() {
                return F(C)
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
                return F(B)
              },
              get position() {
                return r
              },
              get style() {
                return F(w)
              },
              get classes() {
                return F(T)
              },
              get unstyled() {
                return F(E)
              },
              get cancelButtonStyle() {
                return F(ne)
              },
              get actionButtonStyle() {
                return F(O)
              },
              get closeButtonAriaLabel() {
                return F(k)
              },
              get expandByDefault() {
                return ee()
              },
              get expanded() {
                return F(z)
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
        }), O(g), ne(g, e => A(H, e), () => F(H)), E(() => g.dir = g.dir), y(e, g)
      }), y(e, r)
    };
  o(ge, e => {
    K.toasts.length > 0 && e(_e)
  }), O(Y), E(() => I(Y, `aria-label`, `${j()??``} ${F(G)??``}`)), y(e, Y), b()
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
    let s = setTimeout(() => o.abort(), 10 * de.second);
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
  let s = xe(o, {
    interval: de.minute,
    immediate: !0
  });
  return () => {
    r = !0, s(), a == null || a.abort()
  }
}

function At() {
  if (!(`serviceWorker` in navigator)) return;
  let e = () => {
    navigator.serviceWorker.register(`${z}/service-worker.js`, {}).catch(e => console.warn(`[sw] registration failed`, e))
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
  C(n, !0), P(At), L(() => {
    var e;
    let t = (e = J.data) == null ? void 0 : e.id;
    return M(() => {
      let e = me.start(t),
        n = Ee.start(t);
      return () => {
        e == null || e(), n()
      }
    })
  }), L(() => {
    let e = G.device_notifications_body(),
      t = G.device_notifications_charges_full(),
      n = be.muted || W.sounds.playerNotification === 0;
    Ee.state === `on` && !Ee.busy && M(() => void Ee.syncPreferences(e, n, t))
  });
  let r = De(() => _e.current !== null);
  P(() => {
    let e = `frontend-update`,
      t = kt({
        version: V,
        versionUrl: `${B||z}/_app/version.json`,
        onUpdate: () => {
          W.alerts.updates && q.info(G.frontend_update_available(), {
            id: e,
            description: G.frontend_update_description(),
            duration: 1 / 0,
            classes: {
              toast: `grid! grid-cols-[auto_minmax(0,1fr)]! items-start! gap-x-3! gap-y-3! [&>[data-content]]:col-start-2 [&>[data-content]]:row-start-1 [&>[data-content]]:min-w-0`,
              icon: `col-start-1 row-start-1 mx-0! mt-0.5!`,
              description: `break-words`,
              actionButton: `col-start-2 row-start-2 m-0! h-auto! min-h-11 justify-self-start px-4! py-2! whitespace-normal!`
            },
            action: {
              label: G.frontend_update_reload(),
              onClick: () => window.location.reload()
            }
          })
        }
      });
    return () => {
      t(), q.dismiss(e)
    }
  }), P(() => {
    for (let e of [`localStorage`, `sessionStorage`]) try {
      let t = window[e];
      for (let e = t.length - 1; e >= 0; --e) {
        let n = t.key(e);
        n != null && n.startsWith(`phone:`) && t.removeItem(n)
      }
    } catch {}
    let e = we();
    X.init();
    let t = p(!1);
    L(() => {
      F(t) || J.data && Te() && (A(t, !0), H(async () => {
        let {
          TWAServices: e
        } = await import(`../chunks/LjXxo1Gq.js`).then(e => e.i);
        return {
          TWAServices: e
        }
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), import.meta.url).then(({
        TWAServices: e
      }) => e.loadTWA()))
    }), Z.onInit(), L(() => {
      Z.syncStatusBar(be.theme === `dark`)
    });
    let n = p(!1);
    L(() => {
      !J.data || F(n) || (A(n, !0), Z.recoverUnfinished().catch(Mt(`[ios-app] recover purchases:`)))
    });
    let r = p(!1);
    L(() => {
      !J.data || F(r) || (A(r, !0), Z.attestDevice().catch(Mt(`[ios-app] device attest:`)))
    }), fe();
    let i = xe(async () => {
        await J.refresh()
      }, {
        interval: de.hour,
        immediate: !0
      }),
      a = setInterval(() => {
        Se().catch(e => console.warn(`[sw] message failed`, e))
      }, 5e3);
    return () => {
      clearTimeout(a), e(), i(), X.cleanup()
    }
  }), P(he);
  let s = `muted`;
  P(() => {
    be.muted = localStorage.getItem(s) === `1`
  }), L(() => {
    {
      let e = be.muted;
      ye(), document.querySelectorAll(`audio`).forEach(t => {
        t.muted = e
      });
      for (let t of Object.values(ge).filter(e => e instanceof Audio)) t.muted = e;
      localStorage.setItem(s, Number(e).toString())
    }
  }), L(() => {
    pe()
  });
  let c = `haptics`;
  P(() => {
    be.haptics = localStorage.getItem(c) !== `0`
  }), L(() => {
    localStorage.setItem(c, Number(be.haptics).toString())
  }), P(() => {});
  var l = Nt();
  T(`beforeunload`, te, () => {
    Ce().catch(e => console.warn(`[sw] message failed`, e))
  });
  var d = i(l),
    f = a(d);
  O(d);
  var m = h(d, 2);
  ke(m, {});
  var g = h(m, 2),
    _ = e => {
      var r = S(),
        a = i(r);
      t(a, () => n.children), y(e, r)
    };
  o(g, e => {
    e(_, -1)
  });
  var v = h(g, 2),
    x = e => {
      var t = S(),
        n = i(t);
      ee(n, () => H(() => import(`../chunks/1I1joxOl.js`), __vite__mapDeps([16, 1, 5, 17, 11, 4, 9, 6, 7, 8, 10, 18, 19, 20, 21, 22]), import.meta.url), null, (e, t) => {
        var n = S(),
          r = i(n);
        R(r, () => F(t).default, (e, t) => {
          t(e, {})
        }), y(e, n)
      }), y(e, t)
    };
  o(v, e => {
    r.current && e(x)
  });
  var w = h(v, 2);
  Ot(w, {
    closeButton: !0,
    richColors: !0,
    position: `top-right`,
    class: `top-safe-15! whitespace-pre-line!`,
    duration: 3e3
  });
  var D = h(w, 2),
    ne = e => {
      var t = S(),
        n = i(t);
      ee(n, () => H(() => import(`../chunks/CgmRZnh2.js`), __vite__mapDeps([23, 1, 2, 17, 4, 5, 6, 7, 8, 9, 10, 11, 24, 25, 26, 27, 19, 28, 29, 30, 31, 3, 32, 33, 34, 35, 36, 37, 20, 38, 39, 21, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54]), import.meta.url), null, (e, t) => {
        var n = S(),
          r = i(n);
        R(r, () => F(t).default, (e, t) => {
          t(e, {
            get initialContext() {
              return ue.context
            },
            get open() {
              return ue.open
            },
            set open(e) {
              ue.open = e
            }
          })
        }), y(e, n)
      }), y(e, t)
    };
  o(D, e => {
    ue.open && e(ne)
  }), E(() => u(f, `Version: 1791606013454`)), y(e, l), b()
}
export {
  Pt as component
};