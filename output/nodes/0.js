import {
  $ as e,
  A as t,
  B as n,
  Bt as r,
  Ct as i,
  D as a,
  Dt as o,
  Et as s,
  Ft as c,
  G as l,
  H as u,
  It as d,
  Jt as f,
  Kt as p,
  Lt as m,
  M as h,
  O as g,
  Pt as _,
  Q as v,
  Rt as y,
  Tt as b,
  W as x,
  X as S,
  Xt as C,
  Y as w,
  Yt as T,
  Z as E,
  a as D,
  cn as O,
  ct as k,
  et as ee,
  f as A,
  ft as j,
  in as M,
  it as N,
  j as te,
  jt as P,
  k as F,
  kt as I,
  ln as ne,
  nn as L,
  nt as R,
  o as re,
  on as z,
  q as B,
  qt as ie,
  r as ae,
  rt as V,
  s as oe,
  tn as H,
  tt as U,
  un as se,
  v as ce,
  vt as W,
  wt as G,
  x as K,
  y as q,
  yt as J,
  z as Y,
  zt as le
} from "../chunks/D6uuD926.js";
import "../chunks/3pGDfLLI.js";
import {
  a as ue
} from "../chunks/CrIi3LtV.js";
import "../chunks/B8UK1oE5.js";
import {
  f as de,
  g as fe
} from "../chunks/CMCDTH43.js";
import {
  C as pe,
  G as me,
  H as he,
  J as ge,
  S as _e,
  U as ve,
  V as ye,
  W as be,
  a as X,
  f as xe,
  i as Se,
  n as Ce,
  o as we,
  q as Te,
  r as Ee,
  t as De
} from "../chunks/BHDig7Ul.js";
import {
  t as Z
} from "../chunks/ciZYZuIg.js";
import "../chunks/B4y8X1vy.js";
import "../chunks/CTZDAN7C.js";
import {
  t as Oe
} from "../chunks/D4MF_dxU.js";
import {
  i as ke,
  s as Ae
} from "../chunks/D50FBjsE.js";
import {
  D as je,
  E as Me,
  M as Q,
  T as $,
  _ as Ne,
  d as Pe,
  h as Fe,
  m as Ie,
  n as Le,
  o as Re,
  r as ze,
  s as Be,
  t as Ve,
  u as He,
  y as Ue
} from "../chunks/DOkb5bmJ.js";
import {
  t as We
} from "../chunks/DxdGK6Xj.js";
import {
  t as Ge
} from "../chunks/IDjU3ntJ.js";
import "../chunks/mhrqN-wc.js";
var Ke = ne({
    prerender: () => !0
  }),
  qe = Array(12).fill(0),
  Je = E(`<div class="sonner-loading-bar"></div>`),
  Ye = E(`<div><div class="sonner-spinner"></div></div>`);

function Xe(e, t) {
  T(t, !0);
  var n = Ye(),
    r = G(n);
  u(r, 23, () => qe, (e, t) => `spinner-bar-${t}`, (e, t) => {
    var n = Je();
    w(e, n)
  }), L(r), L(n), W(e => {
    g(n, 1, e), K(n, `data-visible`, t.visible)
  }, [() => F([`sonner-loading-wrapper`, t.class].filter(Boolean).join(` `))]), w(e, n), f()
}
var Ze = typeof window < `u` ? window : void 0;
typeof window < `u` && window.document, typeof window < `u` && window.navigator, typeof window < `u` && window.location;

function Qe(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot;) {
    let e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var $e = new WeakMap,
  et = new WeakMap;
new class {
  constructor(e = {}) {
    y(this, $e, void 0), y(this, et, void 0);
    let {
      window: t = Ze,
      document: n = t == null ? void 0 : t.document
    } = e;
    t !== void 0 && (d($e, this, n), d(et, this, r(e => {
      let n = N(t, `focusin`, e),
        r = N(t, `focusout`, e);
      return () => {
        n(), r()
      }
    })))
  }
  get current() {
    var e;
    return (e = c(et, this)) == null || e.call(this), c($e, this) ? Qe(c($e, this)) : null
  }
};
var tt = new WeakMap,
  nt = new WeakMap,
  rt = class {
    constructor(e) {
      y(this, tt, void 0), y(this, nt, void 0), d(tt, this, e), d(nt, this, Symbol(e))
    }
    get key() {
      return c(nt, this)
    }
    exists() {
      return ie(c(nt, this))
    }
    get() {
      let e = p(c(nt, this));
      if (e === void 0) throw Error(`Context "${c(tt,this)}" not found`);
      return e
    }
    getOr(e) {
      let t = p(c(nt, this));
      return t === void 0 ? e : t
    }
    set(e) {
      return C(c(nt, this), e)
    }
  };
new rt(`richColorsContext`);
var it = new rt(`<Toaster/>`);

function at(e) {
  return e.label !== void 0
}

function ot() {
  let e = P(o(typeof document < `u` && document.hidden));
  return J(() => N(document, `visibilitychange`, () => {
    I(e, document.hidden, !0)
  })), {
    get current() {
      return k(e)
    }
  }
}
var st = 4e3,
  ct = 14,
  lt = 45,
  ut = 200,
  dt = .05,
  ft = {
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

function pt(e) {
  let [t, n] = e.split(`-`), r = [];
  return t && r.push(t), n && r.push(n), r
}

function mt(e) {
  return 1 / (1.5 + Math.abs(e) / 20)
}
var ht = new Set(`$$slots.$$events.$$legacy.toast.index.expanded.invert.position.visibleToasts.expandByDefault.closeButton.interacting.cancelButtonStyle.actionButtonStyle.duration.descriptionClass.classes.unstyled.loadingIcon.successIcon.errorIcon.warningIcon.closeIcon.infoIcon.defaultRichColors.swipeDirections.closeButtonAriaLabel`.split(`.`)),
  gt = E(`<div><!></div>`),
  _t = E(`<button data-close-button=""><!></button>`),
  vt = E(`<div data-icon=""><!> <!></div>`),
  yt = E(`<div data-description=""><!></div>`),
  bt = E(`<button data-button="" data-cancel=""> </button>`),
  xt = E(`<button data-button=""> </button>`),
  St = E(`<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>`, 1),
  Ct = E(`<li data-sonner-toast=""><!> <!></li>`);

function wt(e, t) {
  T(t, !0);
  let r = e => {
      var r = S(),
        i = b(r),
        a = e => {
          var r = gt(),
            i = G(r);
          n(i, () => t.loadingIcon), L(r), W(e => {
            g(r, 1, e), K(r, `data-visible`, k(H) === `loading`)
          }, [() => {
            var e, n;
            return F(we((e = k(_e)) == null ? void 0 : e.loader, (n = t.toast) == null || (n = n.classes) == null ? void 0 : n.loader, `sonner-loader`))
          }]), w(e, r)
        },
        o = e => {
          {
            let n = _(() => {
                var e, n;
                return we((e = k(_e)) == null ? void 0 : e.loader, (n = t.toast.classes) == null ? void 0 : n.loader)
              }),
              r = _(() => k(H) === `loading`);
            Xe(e, {
              get class() {
                return k(n)
              },
              get visible() {
                return k(r)
              }
            })
          }
        };
      l(i, e => {
        t.loadingIcon ? e(a) : e(o, -1)
      }), w(e, r)
    },
    i = D(t, `cancelButtonStyle`, 3, ``),
    o = D(t, `actionButtonStyle`, 3, ``),
    c = D(t, `descriptionClass`, 3, ``),
    u = D(t, `unstyled`, 3, !1),
    d = D(t, `defaultRichColors`, 3, !1);
  re(t, ht);
  let p = {
      ...ft
    },
    m = P(!1),
    h = P(!1),
    v = P(!1),
    y = P(!1),
    x = P(!1),
    C = P(0),
    E = P(0),
    O = t.toast.duration || t.duration || st,
    M = P(void 0),
    N = P(null),
    te = P(null),
    ne = _(() => t.index === 0),
    ie = _(() => t.index + 1 <= t.visibleToasts),
    H = _(() => t.toast.type),
    U = _(() => t.toast.dismissable !== !1),
    se = _(() => t.toast.class || ``),
    ce = _(() => t.toast.descriptionClass || ``),
    q = _(() => X.heights.findIndex(e => e.toastId === t.toast.id) || 0),
    le = _(() => t.toast.closeButton ?? t.closeButton),
    ue = _(() => t.toast.duration ?? t.duration ?? st),
    de = null,
    fe = _(() => t.position.split(`-`)),
    pe = _(() => X.heights.reduce((e, t, n) => n >= k(q) ? e : e + t.height, 0)),
    me = ot(),
    he = _(() => t.toast.invert || t.invert),
    ge = _(() => k(H) === `loading`),
    _e = _(() => ({
      ...p,
      ...t.classes
    })),
    ve = _(() => t.toast.title),
    ye = _(() => t.toast.description),
    be = P(0),
    xe = P(0),
    Se = _(() => Math.round(k(q) * ct + k(pe)));
  J(() => {
    k(ve), k(ye);
    let e;
    e = t.expanded || t.expandByDefault ? 1 : 1 - t.index * dt;
    let n = j(() => k(M));
    if (n === void 0) return;
    n.style.setProperty(`height`, `auto`);
    let r = n.offsetHeight,
      i = n.getBoundingClientRect().height,
      a = Math.round(i / e + 2 ** -52 & 100) / 100;
    n.style.removeProperty(`height`);
    let o;
    o = Math.abs(a - r) < 1 ? a : r, I(E, o, !0), j(() => {
      X.setHeight({
        toastId: t.toast.id,
        height: o
      })
    })
  });

  function Ce() {
    I(h, !0), I(C, k(Se), !0), X.removeHeight(t.toast.id), setTimeout(() => {
      X.remove(t.toast.id)
    }, ut)
  }
  let Te, Ee = _(() => t.toast.promise && k(H) === `loading` || t.toast.duration === 1 / 0);

  function De() {
    I(be, new Date().getTime(), !0), Te = setTimeout(() => {
      var e, n;
      (e = (n = t.toast).onAutoClose) == null || e.call(n, t.toast), Ce()
    }, O)
  }

  function Z() {
    if (k(xe) < k(be)) {
      let e = new Date().getTime() - k(be);
      O -= e
    }
    I(xe, new Date().getTime(), !0)
  }
  J(() => {
    t.toast.updated && (clearTimeout(Te), O = k(ue), De())
  }), J(() => (k(Ee) || (t.expanded || t.interacting || me.current ? Z() : De()), () => clearTimeout(Te))), ae(() => {
    var e;
    I(m, !0);
    let n = (e = k(M)) == null ? void 0 : e.getBoundingClientRect().height;
    return I(E, n, !0), X.setHeight({
      toastId: t.toast.id,
      height: n
    }), () => {
      X.removeHeight(t.toast.id)
    }
  }), J(() => {
    t.toast.delete && j(() => {
      var e, n;
      Ce(), (e = (n = t.toast).onDismiss) == null || e.call(n, t.toast)
    })
  });
  let Oe = e => {
      if (k(ge)) return;
      I(C, k(Se), !0);
      let t = e.target;
      t.setPointerCapture(e.pointerId), t.tagName !== `BUTTON` && (I(v, !0), de = {
        x: e.clientX,
        y: e.clientY
      })
    },
    ke = () => {
      var e, n;
      if (k(y) || !k(U)) return;
      de = null;
      let r = Number(((e = k(M)) == null ? void 0 : e.style.getPropertyValue(`--swipe-amount-x`).replace(`px`, ``)) || 0),
        i = Number(((n = k(M)) == null ? void 0 : n.style.getPropertyValue(`--swipe-amount-y`).replace(`px`, ``)) || 0),
        a = new Date().getTime() - 0,
        o = k(N) === `x` ? r : i,
        s = Math.abs(o) / a;
      if (Math.abs(o) >= lt || s > .11) {
        var c, l;
        I(C, k(Se), !0), (c = (l = t.toast).onDismiss) == null || c.call(l, t.toast), k(N) === `x` ? I(te, r > 0 ? `right` : `left`, !0) : I(te, i > 0 ? `down` : `up`, !0), Ce(), I(y, !0);
        return
      }
      var u, d;
      (u = k(M)) == null || u.style.setProperty(`--swipe-amount-x`, `0px`), (d = k(M)) == null || d.style.setProperty(`--swipe-amount-y`, `0px`), I(x, !1), I(v, !1), I(N, null)
    },
    Ae = e => {
      var n, r, i;
      if (!de || !k(U) || (((n = window.getSelection()) == null ? void 0 : n.toString().length) ?? -1) > 0) return;
      let a = e.clientY - de.y,
        o = e.clientX - de.x,
        s = t.swipeDirections ?? pt(t.position);
      !k(N) && (Math.abs(o) > 1 || Math.abs(a) > 1) && I(N, Math.abs(o) > Math.abs(a) ? `x` : `y`, !0);
      let c = {
        x: 0,
        y: 0
      };
      if (k(N) === `y`) {
        if (s.includes(`top`) || s.includes(`bottom`)) {
          if (s.includes(`top`) && a < 0 || s.includes(`bottom`) && a > 0) c.y = a;
          else {
            let e = a * mt(a);
            c.y = Math.abs(e) < Math.abs(a) ? e : a
          }
        }
      } else if (k(N) === `x` && (s.includes(`left`) || s.includes(`right`))) {
        if (s.includes(`left`) && o < 0 || s.includes(`right`) && o > 0) c.x = o;
        else {
          let e = o * mt(o);
          c.x = Math.abs(e) < Math.abs(o) ? e : o
        }
      }(Math.abs(c.x) > 0 || Math.abs(c.y) > 0) && I(x, !0), (r = k(M)) == null || r.style.setProperty(`--swipe-amount-x`, `${c.x}px`), (i = k(M)) == null || i.style.setProperty(`--swipe-amount-y`, `${c.y}px`)
    },
    je = () => {
      I(v, !1), I(N, null), de = null
    },
    Me = _(() => t.toast.icon ? t.toast.icon : k(H) === `success` ? t.successIcon : k(H) === `error` ? t.errorIcon : k(H) === `warning` ? t.warningIcon : k(H) === `info` ? t.infoIcon : k(H) === `loading` ? t.loadingIcon : null);
  var Q = Ct();
  K(Q, `tabindex`, 0);
  let $;
  var Ne = G(Q),
    Pe = e => {
      var r = _t(),
        i = G(r);
      n(i, () => t.closeIcon ?? z), L(r), W(e => {
        K(r, `aria-label`, t.closeButtonAriaLabel), K(r, `data-disabled`, k(ge)), g(r, 1, e)
      }, [() => {
        var e, n;
        return F(we((e = k(_e)) == null ? void 0 : e.closeButton, (n = t.toast) == null || (n = n.classes) == null ? void 0 : n.closeButton))
      }]), R(`click`, r, () => {
        var e, n;
        k(ge) || !k(U) || (Ce(), (e = (n = t.toast).onDismiss) == null || e.call(n, t.toast))
      }), w(e, r)
    };
  l(Ne, e => {
    k(le) && !t.toast.component && k(H) !== `loading` && t.closeIcon !== null && e(Pe)
  });
  var Fe = s(Ne, 2),
    Ie = e => {
      let n = _(() => t.toast.component);
      var r = S(),
        i = b(r);
      Y(i, () => k(n), (e, n) => {
        n(e, oe(() => t.toast.componentProps, {
          closeToast: Ce
        }))
      }), w(e, r)
    },
    Le = e => {
      var u = St(),
        d = b(u),
        f = e => {
          var i = vt(),
            a = G(i),
            o = e => {
              var n = S(),
                i = b(n),
                a = e => {
                  var n = S(),
                    r = b(n);
                  Y(r, () => t.toast.icon, (e, t) => {
                    t(e, {})
                  }), w(e, n)
                },
                o = e => {
                  r(e)
                };
              l(i, e => {
                t.toast.icon ? e(a) : e(o, -1)
              }), w(e, n)
            };
          l(a, e => {
            (t.toast.promise || k(H) === `loading`) && e(o)
          });
          var c = s(a, 2),
            u = e => {
              var r = S(),
                i = b(r),
                a = e => {
                  var n = S(),
                    r = b(n);
                  Y(r, () => t.toast.icon, (e, t) => {
                    t(e, {})
                  }), w(e, n)
                },
                o = e => {
                  var r = S(),
                    i = b(r);
                  n(i, () => t.successIcon ?? z), w(e, r)
                },
                s = e => {
                  var r = S(),
                    i = b(r);
                  n(i, () => t.errorIcon ?? z), w(e, r)
                },
                c = e => {
                  var r = S(),
                    i = b(r);
                  n(i, () => t.warningIcon ?? z), w(e, r)
                },
                u = e => {
                  var r = S(),
                    i = b(r);
                  n(i, () => t.infoIcon ?? z), w(e, r)
                };
              l(i, e => {
                t.toast.icon ? e(a) : k(H) === `success` ? e(o, 1) : k(H) === `error` ? e(s, 2) : k(H) === `warning` ? e(c, 3) : k(H) === `info` && e(u, 4)
              }), w(e, r)
            };
          l(c, e => {
            t.toast.type !== `loading` && e(u)
          }), L(i), W(e => g(i, 1, e), [() => {
            var e, n;
            return F(we((e = k(_e)) == null ? void 0 : e.icon, (n = t.toast) == null || (n = n.classes) == null ? void 0 : n.icon))
          }]), w(e, i)
        };
      l(d, e => {
        (k(H) || t.toast.icon || t.toast.promise) && t.toast.icon !== null && (k(Me) !== null || t.toast.icon) && e(f)
      });
      var p = s(d, 2),
        m = G(p),
        h = G(m),
        v = e => {
          var n = S(),
            r = b(n),
            i = e => {
              let n = _(() => t.toast.title);
              var r = S(),
                i = b(r);
              Y(i, () => k(n), (e, n) => {
                n(e, oe(() => t.toast.componentProps))
              }), w(e, r)
            },
            a = e => {
              var n = ee();
              W(() => B(n, t.toast.title)), w(e, n)
            };
          l(r, e => {
            typeof t.toast.title == `string` ? e(a, -1) : e(i)
          }), w(e, n)
        };
      l(h, e => {
        t.toast.title && e(v)
      }), L(m);
      var y = s(m, 2),
        x = e => {
          var n = yt(),
            r = G(n),
            i = e => {
              let n = _(() => t.toast.description);
              var r = S(),
                i = b(r);
              Y(i, () => k(n), (e, n) => {
                n(e, oe(() => t.toast.componentProps))
              }), w(e, r)
            },
            a = e => {
              var n = ee();
              W(() => B(n, t.toast.description)), w(e, n)
            };
          l(r, e => {
            typeof t.toast.description == `string` ? e(a, -1) : e(i)
          }), L(n), W(e => g(n, 1, e), [() => {
            var e, n;
            return F(we(c(), k(ce), (e = k(_e)) == null ? void 0 : e.description, (n = t.toast.classes) == null ? void 0 : n.description))
          }]), w(e, n)
        };
      l(y, e => {
        t.toast.description && e(x)
      }), L(p);
      var C = s(p, 2),
        T = e => {
          var n = S(),
            r = b(n),
            o = e => {
              var n = S(),
                r = b(n);
              Y(r, () => t.toast.cancel, (e, t) => {
                t(e, {})
              }), w(e, n)
            },
            s = e => {
              var n = bt(),
                r = G(n, !0);
              L(n), W(e => {
                a(n, t.toast.cancelButtonStyle ?? i()), g(n, 1, e), B(r, t.toast.cancel.label)
              }, [() => {
                var e, n;
                return F(we((e = k(_e)) == null ? void 0 : e.cancelButton, (n = t.toast) == null || (n = n.classes) == null ? void 0 : n.cancelButton))
              }]), R(`click`, n, e => {
                var n, r;
                at(t.toast.cancel) && k(U) && ((n = t.toast.cancel) == null || (r = n.onClick) == null || r.call(n, e), Ce())
              }), w(e, n)
            },
            c = _(() => at(t.toast.cancel));
          l(r, e => {
            typeof t.toast.cancel == `function` ? e(o) : k(c) && e(s, 1)
          }), w(e, n)
        };
      l(C, e => {
        t.toast.cancel && e(T)
      });
      var E = s(C, 2),
        D = e => {
          var n = S(),
            r = b(n),
            i = e => {
              var n = S(),
                r = b(n);
              Y(r, () => t.toast.action, (e, t) => {
                t(e, {})
              }), w(e, n)
            },
            s = e => {
              var n = xt(),
                r = G(n, !0);
              L(n), W(e => {
                a(n, t.toast.actionButtonStyle ?? o()), g(n, 1, e), B(r, t.toast.action.label)
              }, [() => {
                var e, n;
                return F(we((e = k(_e)) == null ? void 0 : e.actionButton, (n = t.toast) == null || (n = n.classes) == null ? void 0 : n.actionButton))
              }]), R(`click`, n, e => {
                var n;
                at(t.toast.action) && ((n = t.toast.action) == null || n.onClick(e), !e.defaultPrevented && Ce())
              }), w(e, n)
            },
            c = _(() => at(t.toast.action));
          l(r, e => {
            typeof t.toast.action == `function` ? e(i) : k(c) && e(s, 1)
          }), w(e, n)
        };
      l(E, e => {
        t.toast.action && e(D)
      }), W(e => g(m, 1, e), [() => {
        var e, n;
        return F(we((e = k(_e)) == null ? void 0 : e.title, (n = t.toast) == null || (n = n.classes) == null ? void 0 : n.title))
      }]), w(e, u)
    };
  l(Fe, e => {
    t.toast.component ? e(Ie) : e(Le, -1)
  }), L(Q), A(Q, e => I(M, e), () => k(M)), W((e, n, r) => {
    g(Q, 1, e), K(Q, `data-rich-colors`, t.toast.richColors ?? d()), K(Q, `data-styled`, !(t.toast.component || t.toast.unstyled || u())), K(Q, `data-mounted`, k(m)), K(Q, `data-promise`, n), K(Q, `data-swiped`, k(x)), K(Q, `data-removed`, k(h)), K(Q, `data-visible`, k(ie)), K(Q, `data-y-position`, k(fe)[0]), K(Q, `data-x-position`, k(fe)[1]), K(Q, `data-index`, t.index), K(Q, `data-front`, k(ne)), K(Q, `data-swiping`, k(v)), K(Q, `data-dismissable`, k(U)), K(Q, `data-type`, k(H)), K(Q, `data-invert`, k(he)), K(Q, `data-swipe-out`, k(y)), K(Q, `data-swipe-direction`, k(te)), K(Q, `data-expanded`, r), $ = a(Q, `${t.style} ${t.toast.style}`, $, {
      "--index": t.index,
      "--toasts-before": t.index,
      "--z-index": X.toasts.length - t.index,
      "--offset": `${k(h)?k(C):k(Se)}px`,
      "--initial-height": t.expandByDefault ? `auto` : `${k(E)}px`
    })
  }, [() => {
    var e, n, r, i;
    return F(we(t.class, k(se), (e = k(_e)) == null ? void 0 : e.toast, (n = t.toast) == null || (n = n.classes) == null ? void 0 : n.toast, (r = k(_e)) == null ? void 0 : r[k(H)], (i = t.toast) == null || (i = i.classes) == null ? void 0 : i[k(H)]))
  }, () => !!t.toast.promise, () => !!(t.expanded || t.expandByDefault && k(m))]), R(`pointermove`, Q, Ae), R(`pointerup`, Q, ke), R(`pointerdown`, Q, Oe), V(`dragend`, Q, je), w(e, Q), f()
}
U([`pointermove`, `pointerup`, `pointerdown`, `click`]);
var Tt = v(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`);

function Et(e) {
  var t = Tt();
  w(e, t)
}
var Dt = v(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`);

function Ot(e) {
  var t = Dt();
  w(e, t)
}
var kt = v(`<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`);

function At(e) {
  var t = kt();
  w(e, t)
}
var jt = v(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`);

function Mt(e) {
  var t = jt();
  w(e, t)
}
var Nt = v(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);

function Pt(e) {
  var t = Nt();
  w(e, t)
}
var Ft = 3,
  It = `24px`,
  Lt = `16px`,
  Rt = 4e3,
  zt = 356,
  Bt = 14,
  Vt = `dark`,
  Ht = `light`;

function Ut(e, t) {
  let n = {};
  return [e, t].forEach((e, t) => {
    let r = t === 1,
      i = r ? `--mobile-offset` : `--offset`,
      a = r ? Lt : It;

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
var Wt = new Set(`$$slots.$$events.$$legacy.invert.position.hotkey.expand.closeButton.offset.mobileOffset.theme.richColors.duration.visibleToasts.toastOptions.dir.gap.loadingIcon.successIcon.errorIcon.warningIcon.closeIcon.infoIcon.containerAriaLabel.class.closeButtonAriaLabel.onblur.onfocus.onmouseenter.onmousemove.onmouseleave.ondragend.onpointerdown.onpointerup`.split(`.`)),
  Gt = E(`<ol></ol>`),
  Kt = E(`<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-wiukfn"><!></section>`);

function qt(e, t) {
  T(t, !0);

  function r(e) {
    return e === `system` ? typeof window < `u` && window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches ? Vt : Ht : e
  }
  let i = D(t, `invert`, 3, !1),
    a = D(t, `position`, 3, `bottom-right`),
    s = D(t, `hotkey`, 19, () => [`altKey`, `KeyT`]),
    c = D(t, `expand`, 3, !1),
    d = D(t, `closeButton`, 3, !1),
    p = D(t, `offset`, 3, It),
    m = D(t, `mobileOffset`, 3, Lt),
    h = D(t, `theme`, 3, `light`),
    g = D(t, `richColors`, 3, !1),
    v = D(t, `duration`, 3, Rt),
    y = D(t, `visibleToasts`, 3, Ft),
    x = D(t, `toastOptions`, 19, () => ({})),
    C = D(t, `dir`, 7, `auto`),
    E = D(t, `gap`, 3, Bt),
    O = D(t, `containerAriaLabel`, 3, `Notifications`),
    ee = D(t, `closeButtonAriaLabel`, 3, `Close toast`),
    M = re(t, Wt);

  function te() {
    if (C() !== `auto`) return C();
    if (typeof window > `u` || typeof document > `u`) return `ltr`;
    let e = document.documentElement.getAttribute(`dir`);
    return e === `auto` || !e ? (j(() => C(window.getComputedStyle(document.documentElement).direction ?? `ltr`)), C()) : (j(() => C(e)), e)
  }
  let F = _(() => Array.from(new Set([a(), ...X.toasts.filter(e => e.position).map(e => e.position)].filter(Boolean)))),
    ne = P(!1),
    R = P(!1),
    B = P(o(r(h()))),
    ie = P(void 0),
    V = P(null),
    oe = P(!1),
    H = _(() => s().join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``));
  J(() => {
    X.toasts.length <= 1 && I(ne, !1)
  }), J(() => {
    let e = X.toasts.filter(e => e.dismiss && !e.delete);
    if (e.length > 0) {
      let t = X.toasts.map(t => e.find(e => e.id === t.id) ? {
        ...t,
        delete: !0
      } : t);
      X.toasts = t
    }
  }), J(() => () => {
    k(ie) && k(V) && (k(V).focus({
      preventScroll: !0
    }), I(V, null), I(oe, !1))
  }), ae(() => (X.reset(), N(document, `keydown`, e => {
    var t;
    if (s().every(t => e[t] || e.code === t)) {
      var n;
      I(ne, !0), (n = k(ie)) == null || n.focus()
    }
    e.code === `Escape` && (document.activeElement === k(ie) || (t = k(ie)) != null && t.contains(document.activeElement)) && I(ne, !1)
  }))), J(() => {
    if (h() !== `system` && I(B, h()), typeof window < `u`) {
      h() === `system` && (window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches ? I(B, Vt) : I(B, Ht));
      let e = window.matchMedia(`(prefers-color-scheme: dark)`),
        t = ({
          matches: e
        }) => {
          I(B, e ? Vt : Ht, !0)
        };
      `addEventListener` in e ? e.addEventListener(`change`, t) : e.addListener(t)
    }
  });
  let U = e => {
      var n;
      (n = t.onblur) == null || n.call(t, e), k(oe) && !e.currentTarget.contains(e.relatedTarget) && (I(oe, !1), k(V) && (k(V).focus({
        preventScroll: !0
      }), I(V, null)))
    },
    se = e => {
      var n;
      (n = t.onfocus) == null || n.call(t, e), !(e.target instanceof HTMLElement && e.target.dataset.dismissable === `false`) && (k(oe) || (I(oe, !0), I(V, e.relatedTarget, !0)))
    },
    Y = e => {
      var n;
      (n = t.onpointerdown) == null || n.call(t, e), !(e.target instanceof HTMLElement && e.target.dataset.dismissable === `false`) && I(R, !0)
    },
    le = e => {
      var n;
      (n = t.onmouseenter) == null || n.call(t, e), I(ne, !0)
    },
    ue = e => {
      var n;
      (n = t.onmouseleave) == null || n.call(t, e), k(R) || I(ne, !1)
    },
    de = e => {
      var n;
      (n = t.onmousemove) == null || n.call(t, e), I(ne, !0)
    },
    fe = e => {
      var n;
      (n = t.ondragend) == null || n.call(t, e), I(ne, !1)
    },
    pe = e => {
      var n;
      (n = t.onpointerup) == null || n.call(t, e), I(R, !1)
    };
  it.set(new Ee);
  var me = Kt();
  K(me, `tabindex`, -1);
  var he = G(me),
    ge = e => {
      var r = S(),
        a = b(r);
      u(a, 18, () => k(F), e => e, (e, r, a, o) => {
        let s = _(() => {
            let [e, t] = r.split(`-`);
            return {
              y: e,
              x: t
            }
          }),
          f = _(() => Ut(p(), m()));
        var h = Gt();
        q(h, e => {
          var n;
          return {
            tabindex: -1,
            dir: e,
            class: t.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": k(B),
            "data-y-position": k(s).y,
            "data-x-position": k(s).x,
            style: t.style,
            onblur: U,
            onfocus: se,
            onmouseenter: le,
            onmousemove: de,
            onmouseleave: ue,
            ondragend: fe,
            onpointerdown: Y,
            onpointerup: pe,
            ...M,
            [ce]: {
              "--front-toast-height": `${(n=X.heights[0])==null?void 0:n.height}px`,
              "--width": `${zt}px`,
              "--gap": `${E()}px`,
              "--offset-top": k(f)[`--offset-top`],
              "--offset-right": k(f)[`--offset-right`],
              "--offset-bottom": k(f)[`--offset-bottom`],
              "--offset-left": k(f)[`--offset-left`],
              "--mobile-offset-top": k(f)[`--mobile-offset-top`],
              "--mobile-offset-right": k(f)[`--mobile-offset-right`],
              "--mobile-offset-bottom": k(f)[`--mobile-offset-bottom`],
              "--mobile-offset-left": k(f)[`--mobile-offset-left`]
            }
          }
        }, [() => te()], void 0, void 0, `svelte-wiukfn`), u(h, 23, () => X.toasts.filter(e => !e.position && k(a) === 0 || e.position === r), e => e.id, (e, a, o, s) => {
          {
            let s = e => {
                var r = S(),
                  i = b(r),
                  a = e => {
                    var r = S(),
                      i = b(r);
                    n(i, () => t.successIcon ?? z), w(e, r)
                  },
                  o = e => {
                    Et(e, {})
                  };
                l(i, e => {
                  t.successIcon ? e(a) : t.successIcon !== null && e(o, 1)
                }), w(e, r)
              },
              u = e => {
                var r = S(),
                  i = b(r),
                  a = e => {
                    var r = S(),
                      i = b(r);
                    n(i, () => t.errorIcon ?? z), w(e, r)
                  },
                  o = e => {
                    Ot(e, {})
                  };
                l(i, e => {
                  t.errorIcon ? e(a) : t.errorIcon !== null && e(o, 1)
                }), w(e, r)
              },
              f = e => {
                var r = S(),
                  i = b(r),
                  a = e => {
                    var r = S(),
                      i = b(r);
                    n(i, () => t.warningIcon ?? z), w(e, r)
                  },
                  o = e => {
                    At(e, {})
                  };
                l(i, e => {
                  t.warningIcon ? e(a) : t.warningIcon !== null && e(o, 1)
                }), w(e, r)
              },
              p = e => {
                var r = S(),
                  i = b(r),
                  a = e => {
                    var r = S(),
                      i = b(r);
                    n(i, () => t.infoIcon ?? z), w(e, r)
                  },
                  o = e => {
                    Mt(e, {})
                  };
                l(i, e => {
                  t.infoIcon ? e(a) : t.infoIcon !== null && e(o, 1)
                }), w(e, r)
              },
              m = e => {
                var r = S(),
                  i = b(r),
                  a = e => {
                    var r = S(),
                      i = b(r);
                    n(i, () => t.closeIcon ?? z), w(e, r)
                  },
                  o = e => {
                    Pt(e, {})
                  };
                l(i, e => {
                  t.closeIcon ? e(a) : t.closeIcon !== null && e(o, 1)
                }), w(e, r)
              },
              h = _(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.duration) ?? v()
              }),
              C = _(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.class) ?? ``
              }),
              T = _(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.descriptionClass) || ``
              }),
              E = _(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.style) ?? ``
              }),
              D = _(() => x().classes || {}),
              O = _(() => x().unstyled ?? !1),
              A = _(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.cancelButtonStyle) ?? ``
              }),
              j = _(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.actionButtonStyle) ?? ``
              }),
              M = _(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.closeButtonAriaLabel) ?? ee()
              });
            wt(e, {
              get index() {
                return k(o)
              },
              get toast() {
                return k(a)
              },
              get defaultRichColors() {
                return g()
              },
              get duration() {
                return k(h)
              },
              get class() {
                return k(C)
              },
              get descriptionClass() {
                return k(T)
              },
              get invert() {
                return i()
              },
              get visibleToasts() {
                return y()
              },
              get closeButton() {
                return d()
              },
              get interacting() {
                return k(R)
              },
              get position() {
                return r
              },
              get style() {
                return k(E)
              },
              get classes() {
                return k(D)
              },
              get unstyled() {
                return k(O)
              },
              get cancelButtonStyle() {
                return k(A)
              },
              get actionButtonStyle() {
                return k(j)
              },
              get closeButtonAriaLabel() {
                return k(M)
              },
              get expandByDefault() {
                return c()
              },
              get expanded() {
                return k(ne)
              },
              get loadingIcon() {
                return t.loadingIcon
              },
              successIcon: s,
              errorIcon: u,
              warningIcon: f,
              infoIcon: p,
              closeIcon: m,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), L(h), A(h, e => I(ie, e), () => k(ie)), W(() => h.dir = h.dir), w(e, h)
      }), w(e, r)
    };
  l(he, e => {
    X.toasts.length > 0 && e(ge)
  }), L(me), W(() => K(me, `aria-label`, `${O()??``} ${k(H)??``}`)), w(e, me), f()
}
var Jt = P(!1),
  Yt = E(`<div></div>`),
  Xt = E(`<button type="button" class="btn">Retry</button>`),
  Zt = E(`<span class="loading loading-spinner loading-lg"></span>`),
  Qt = E(`<div class="flex h-16 items-center justify-center"><!></div>`);

function $t(e, t) {
  T(t, !0);
  let n = D(t, `theme`, 19, () => Te.theme === `dark` ? `dark` : `light`),
    r = D(t, `size`, 3, `normal`),
    i = _(() => ({
      sitekey: t.siteKey,
      theme: n(),
      size: r(),
      ...t.challengeContainer ? {
        "challenge-container": t.challengeContainer
      } : {},
      callback: e => {
        var n;
        return (n = t.callback) == null ? void 0 : n.call(t, e)
      },
      "open-callback": () => {
        var e;
        return (e = t.openCallback) == null ? void 0 : e.call(t)
      },
      "close-callback": () => {
        var e;
        return (e = t.closeCallback) == null ? void 0 : e.call(t)
      },
      "error-callback": e => {
        var n;
        return (n = t.errorCallback) == null ? void 0 : n.call(t, e)
      },
      "expired-callback": () => {
        var e;
        return (e = t.expiredCallback) == null ? void 0 : e.call(t)
      }
    })),
    a = (e, n) => {
      var r;
      let i = window.hcaptcha.render(e, n);
      return (r = t.onload) == null || r.call(t), {
        destroy() {
          var e;
          (e = window.hcaptcha) == null || e.remove(i)
        },
        update(t) {
          var n;
          (n = window.hcaptcha) == null || n.remove(i), i = window.hcaptcha.render(e, t)
        }
      }
    },
    o = P(!1),
    s = P(!1),
    c;

  function u() {
    let e = document.createElement(`script`);
    e.type = `text/javascript`;
    let t = new URL(`https://js.hcaptcha.com/1/api.js`);
    t.searchParams.set(`render`, `explicit`), e.src = t.toString(), e.async = !0, e.defer = !0, e.addEventListener(`load`, () => I(Jt, !0), {
      once: !0
    }), document.head.appendChild(e)
  }

  function d() {
    I(s, !1), c && clearTimeout(c), c = setTimeout(() => {
      (!k(Jt) || !k(o)) && I(s, !0)
    }, 5e3)
  }

  function p() {
    document.querySelectorAll(`script[src*="js.hcaptcha.com"]`).forEach(e => e.remove()), I(Jt, !1), u(), d()
  }
  ae(() => (I(o, !0), k(Jt) || u(), d(), () => {
    I(o, !1), c && clearTimeout(c)
  }));
  var m = S(),
    g = b(m),
    v = e => {
      var t = Yt();
      h(t, (e, t) => a == null ? void 0 : a(e, t), () => k(i)), w(e, t)
    },
    y = e => {
      var t = Qt(),
        n = G(t),
        r = e => {
          var t = Xt();
          R(`click`, t, p), w(e, t)
        },
        i = e => {
          var t = Zt();
          w(e, t)
        };
      l(n, e => {
        k(s) ? e(r) : e(i, -1)
      }), L(t), w(e, t)
    };
  l(g, e => {
    k(Jt) && k(o) ? e(v) : e(y, -1)
  }), w(e, m), f()
}
U([`click`]);

function en(...e) {
  return We(t(e))
}
var tn = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`, `children`]),
  nn = E(`<div><!></div>`);

function rn(e, t) {
  T(t, !0);
  let r = D(t, `ref`, 15, null),
    i = re(t, tn);
  var a = nn();
  q(a, e => ({
    class: e,
    ...i
  }), [() => en(`flex items-center`, t.class)]);
  var o = G(a);
  n(o, () => t.children ?? z), L(a), A(a, e => r(e), () => r()), w(e, a), f()
}
var an = 18,
  on = 40,
  sn = `${on}px`,
  cn = [`[data-lastpass-icon-root]`, `com-1password-button`, `[data-dashlanecreated]`, `[style$="2147483647 !important;"]`].join(`,`);

function ln({
  containerRef: e,
  inputRef: t,
  pushPasswordManagerStrategy: n,
  isFocused: r,
  domContext: i
}) {
  let a = P(!1),
    o = P(!1),
    s = P(!1);

  function c() {
    let e = n.current;
    return e !== `none` && e === `increase-width` && k(a) && k(o)
  }

  function l() {
    let r = e.current,
      o = t.current;
    if (!r || !o || k(s) || n.current === `none`) return;
    let c = r,
      l = c.getBoundingClientRect().left + c.offsetWidth,
      u = c.getBoundingClientRect().top + c.offsetHeight / 2,
      d = l - an,
      f = u;
    (i.querySelectorAll(cn).length !== 0 || i.getDocument().elementFromPoint(d, f) !== r) && (I(a, !0), I(s, !0))
  }
  return J(() => {
    let t = e.current;
    if (!t || n.current === `none`) return;

    function r() {
      let e = Ie(t).innerWidth - t.getBoundingClientRect().right;
      I(o, e >= on)
    }
    r();
    let i = setInterval(r, 1e3);
    return () => {
      clearInterval(i)
    }
  }), J(() => {
    let e = r.current || i.getActiveElement() === t.current;
    if (n.current === `none` || !e) return;
    let a = setTimeout(l, 0),
      o = setTimeout(l, 2e3),
      c = setTimeout(l, 5e3),
      u = setTimeout(() => {
        I(s, !0)
      }, 6e3);
    return () => {
      clearTimeout(a), clearTimeout(o), clearTimeout(c), clearTimeout(u)
    }
  }), {
    get hasPwmBadge() {
      return k(a)
    },
    get willPushPwmBadge() {
      return c()
    },
    PWM_BADGE_SPACE_WIDTH: sn
  }
}
var un = Be({
    component: `pin-input`,
    parts: [`root`, `cell`]
  }),
  dn = [`Backspace`, `Delete`, `ArrowLeft`, `ArrowRight`, `ArrowUp`, `ArrowDown`, `Home`, `End`, `Escape`, `Enter`, `Tab`, `Shift`, `Control`, `Meta`],
  fn = new WeakMap,
  pn = new WeakMap,
  mn = new WeakMap,
  hn = new WeakMap,
  gn = new WeakMap,
  _n = new WeakMap,
  vn = new WeakMap,
  yn = new WeakMap,
  bn = new WeakMap,
  xn = new WeakMap,
  Sn = new WeakMap,
  Cn = new WeakMap,
  wn = new WeakMap,
  Tn = new WeakSet,
  En = new WeakMap,
  Dn = new WeakMap,
  On = new WeakMap,
  kn = new WeakMap,
  An = class e {
    static create(t) {
      return new e(t)
    }
    constructor(e) {
      var t;
      le(this, Tn), M(this, `opts`, void 0), M(this, `attachment`, void 0), M(this, `inputAttachment`, void 0), y(this, fn, P(!1)), y(this, pn, Me(!1)), y(this, mn, P(null)), y(this, hn, P(null)), y(this, gn, new Fe(() => this.opts.value.current ?? ``)), y(this, _n, _(() => typeof this.opts.pattern.current == `string` ? new RegExp(this.opts.pattern.current) : this.opts.pattern.current)), y(this, vn, P(o({
        prev: [null, null, `none`],
        willSyntheticBlur: !1
      }))), y(this, yn, void 0), y(this, bn, void 0), M(this, `domContext`, void 0), M(this, `onkeydown`, e => {
        let t = e.key;
        dn.includes(t) || e.ctrlKey || e.metaKey || t && k(c(_n, this)) && !k(c(_n, this)).test(t) && e.preventDefault()
      }), y(this, xn, _(() => ({
        position: `relative`,
        cursor: this.opts.disabled.current ? `default` : `text`,
        userSelect: `none`,
        WebkitUserSelect: `none`,
        pointerEvents: `none`
      }))), y(this, Sn, _(() => ({
        id: this.opts.id.current,
        [un.root]: ``,
        style: k(c(xn, this)),
        ...this.attachment
      }))), y(this, Cn, _(() => ({
        style: {
          position: `absolute`,
          inset: 0,
          pointerEvents: `none`
        }
      }))), y(this, wn, _(() => ({
        position: `absolute`,
        inset: 0,
        width: c(yn, this).willPushPwmBadge ? `calc(100% + ${c(yn,this).PWM_BADGE_SPACE_WIDTH})` : `100%`,
        clipPath: c(yn, this).willPushPwmBadge ? `inset(0 ${c(yn,this).PWM_BADGE_SPACE_WIDTH} 0 0)` : void 0,
        height: `100%`,
        display: `flex`,
        textAlign: this.opts.textAlign.current,
        opacity: `1`,
        color: `transparent`,
        pointerEvents: `all`,
        background: `transparent`,
        caretColor: `transparent`,
        border: `0 solid transparent`,
        outline: `0 solid transparent`,
        boxShadow: `none`,
        lineHeight: `1`,
        letterSpacing: `-.5em`,
        fontSize: `var(--bits-pin-input-root-height)`,
        fontFamily: `monospace`,
        fontVariantNumeric: `tabular-nums`
      }))), y(this, En, () => {
        let e = this.opts.inputRef.current,
          t = this.opts.ref.current;
        if (!e || !t) return;
        if (this.domContext.getActiveElement() !== e) {
          I(c(mn, this), null), I(c(hn, this), null);
          return
        }
        let n = e.selectionStart,
          r = e.selectionEnd,
          i = e.selectionDirection ?? `none`,
          a = e.maxLength,
          o = e.value,
          s = k(c(vn, this)).prev,
          l = -1,
          u = -1,
          d;
        if (o.length !== 0 && n !== null && r !== null) {
          let e = n === r,
            t = n === o.length && o.length < a;
          if (e && !t) {
            let e = n;
            if (e === 0) l = 0, u = 1, d = `forward`;
            else if (e === a) l = e - 1, u = e, d = `backward`;
            else if (a > 1 && o.length > 1) {
              let t = 0;
              if (s[0] !== null && s[1] !== null) {
                d = e < s[1] ? `backward` : `forward`;
                let n = s[0] === s[1] && s[0] < a;
                d === `backward` && !n && (t = -1)
              }
              l = t + e, u = t + e + 1
            }
          }
          if (l !== -1 && u !== -1 && l !== u) {
            var f;
            (f = this.opts.inputRef.current) == null || f.setSelectionRange(l, u, d)
          }
        }
        let p = l === -1 ? n : l,
          m = u === -1 ? r : u,
          h = d ?? i;
        I(c(mn, this), p, !0), I(c(hn, this), m, !0), k(c(vn, this)).prev = [p, m, h]
      }), M(this, `oninput`, e => {
        let t = e.currentTarget.value.slice(0, this.opts.maxLength.current);
        if (t.length > 0 && k(c(_n, this)) && !k(c(_n, this)).test(t)) {
          e.preventDefault();
          return
        }
        typeof c(gn, this).current == `string` && t.length < c(gn, this).current.length && this.domContext.getDocument().dispatchEvent(new Event(`selectionchange`)), this.opts.value.current = t
      }), M(this, `onfocus`, e => {
        let t = this.opts.inputRef.current;
        if (t) {
          let e = Math.min(t.value.length, this.opts.maxLength.current - 1),
            n = t.value.length;
          t.setSelectionRange(e, n), I(c(mn, this), e, !0), I(c(hn, this), n, !0)
        }
        c(pn, this).current = !0
      }), M(this, `onpaste`, e => {
        var t, n, r;
        let i = this.opts.inputRef.current;
        if (!i) return;
        let a = e => {
            let t = i.selectionStart === null ? void 0 : i.selectionStart,
              n = i.selectionEnd === null ? void 0 : i.selectionEnd,
              r = t !== n,
              a = this.opts.value.current;
            return (r ? a.slice(0, t) + e + a.slice(n) : a.slice(0, t) + e + a.slice(t)).slice(0, this.opts.maxLength.current)
          },
          o = e => e.length > 0 && k(c(_n, this)) && !k(c(_n, this)).test(e);
        if (!((t = this.opts.pasteTransformer) != null && t.current) && (!c(bn, this).isIOS || !e.clipboardData || !i)) {
          var s;
          o(a((s = e.clipboardData) == null ? void 0 : s.getData(`text/plain`))) && e.preventDefault();
          return
        }
        let l = ((n = e.clipboardData) == null ? void 0 : n.getData(`text/plain`)) ?? ``,
          u = (r = this.opts.pasteTransformer) != null && r.current ? this.opts.pasteTransformer.current(l) : l;
        e.preventDefault();
        let d = a(u);
        if (o(d)) return;
        i.value = d, this.opts.value.current = d;
        let f = Math.min(d.length, this.opts.maxLength.current - 1),
          p = d.length;
        i.setSelectionRange(f, p), I(c(mn, this), f, !0), I(c(hn, this), p, !0)
      }), M(this, `onmouseover`, e => {
        I(c(fn, this), !0)
      }), M(this, `onmouseleave`, e => {
        I(c(fn, this), !1)
      }), M(this, `onblur`, e => {
        if (k(c(vn, this)).willSyntheticBlur) {
          k(c(vn, this)).willSyntheticBlur = !1;
          return
        }
        c(pn, this).current = !1
      }), y(this, Dn, _(() => {
        var e;
        return {
          id: this.opts.inputId.current,
          style: k(c(wn, this)),
          autocomplete: this.opts.autocomplete.current || `one-time-code`,
          "data-pin-input-input": ``,
          "data-pin-input-input-mss": k(c(mn, this)),
          "data-pin-input-input-mse": k(c(hn, this)),
          inputmode: this.opts.inputmode.current,
          pattern: (e = k(c(_n, this))) == null ? void 0 : e.source,
          maxlength: this.opts.maxLength.current,
          value: this.opts.value.current,
          disabled: Re(this.opts.disabled.current),
          onpaste: this.onpaste,
          oninput: this.oninput,
          onkeydown: this.onkeydown,
          onmouseover: this.onmouseover,
          onmouseleave: this.onmouseleave,
          onfocus: this.onfocus,
          onblur: this.onblur,
          ...this.inputAttachment
        }
      })), y(this, On, _(() => Array.from({
        length: this.opts.maxLength.current
      }).map((e, t) => {
        let n = c(pn, this).current && k(c(mn, this)) !== null && k(c(hn, this)) !== null && (k(c(mn, this)) === k(c(hn, this)) && t === k(c(mn, this)) || t >= k(c(mn, this)) && t < k(c(hn, this))),
          r = this.opts.value.current[t] === void 0 ? null : this.opts.value.current[t];
        return {
          char: r,
          isActive: n,
          hasFakeCaret: n && r === null
        }
      }))), y(this, kn, _(() => ({
        cells: k(c(On, this)),
        isFocused: c(pn, this).current,
        isHovering: k(c(fn, this))
      }))), this.opts = e, this.attachment = He(this.opts.ref), this.inputAttachment = He(this.opts.inputRef), this.domContext = new Pe(e.ref), d(bn, this, {
        value: this.opts.value,
        isIOS: typeof window < `u` && ((t = window) == null || (t = t.CSS) == null ? void 0 : t.supports(`-webkit-touch-callout`, `none`))
      }), d(yn, this, ln({
        containerRef: this.opts.ref,
        inputRef: this.opts.inputRef,
        isFocused: c(pn, this),
        pushPasswordManagerStrategy: this.opts.pushPasswordManagerStrategy,
        domContext: this.domContext
      })), ae(() => {
        let e = this.opts.inputRef.current,
          t = this.opts.ref.current;
        if (!e || !t) return;
        c(bn, this).value.current !== e.value && (this.opts.value.current = e.value), k(c(vn, this)).prev = [e.selectionStart, e.selectionEnd, e.selectionDirection ?? `none`];
        let n = N(this.domContext.getDocument(), `selectionchange`, c(En, this), {
          capture: !0
        });
        c(En, this).call(this), this.domContext.getActiveElement() === e && (c(pn, this).current = !0), this.domContext.getElementById(`pin-input-style`) || m(Tn, this, jn).call(this);
        let r = () => {
          t && t.style.setProperty(`--bits-pin-input-root-height`, `${e.clientHeight}px`)
        };
        r();
        let i = new ResizeObserver(r);
        return i.observe(e), () => {
          n(), i.disconnect()
        }
      }), Ne([() => this.opts.value.current, () => this.opts.inputRef.current], () => {
        Pn(() => {
          let e = this.opts.inputRef.current;
          if (!e) return;
          e.dispatchEvent(new Event(`input`));
          let t = e.selectionStart,
            n = e.selectionEnd,
            r = e.selectionDirection ?? `none`;
          t !== null && n !== null && (I(c(mn, this), t, !0), I(c(hn, this), n, !0), k(c(vn, this)).prev = [t, n, r])
        }, this.domContext)
      }), J(() => {
        let e = this.opts.value.current,
          t = c(gn, this).current,
          n = this.opts.maxLength.current,
          r = this.opts.onComplete.current;
        t !== void 0 && e !== t && t.length < n && e.length === n && r(e)
      })
    }
    get rootProps() {
      return k(c(Sn, this))
    }
    set rootProps(e) {
      I(c(Sn, this), e)
    }
    get inputWrapperProps() {
      return k(c(Cn, this))
    }
    set inputWrapperProps(e) {
      I(c(Cn, this), e)
    }
    get inputProps() {
      return k(c(Dn, this))
    }
    set inputProps(e) {
      I(c(Dn, this), e)
    }
    get snippetProps() {
      return k(c(kn, this))
    }
    set snippetProps(e) {
      I(c(kn, this), e)
    }
  };

function jn() {
  let e = this.domContext.getDocument(),
    t = e.createElement(`style`);
  if (t.id = `pin-input-style`, e.head.appendChild(t), t.sheet) {
    let e = `background: transparent !important; color: transparent !important; border-color: transparent !important; opacity: 0 !important; box-shadow: none !important; -webkit-box-shadow: none !important; -webkit-text-fill-color: transparent !important;`;
    Fn(t.sheet, `[data-pin-input-input]::selection { background: transparent !important; color: transparent !important; }`), Fn(t.sheet, `[data-pin-input-input]:autofill { ${e} }`), Fn(t.sheet, `[data-pin-input-input]:-webkit-autofill { ${e} }`), Fn(t.sheet, `@supports (-webkit-touch-callout: none) { [data-pin-input-input] { letter-spacing: -.6em !important; font-weight: 100 !important; font-stretch: ultra-condensed; font-optical-sizing: none !important; left: -1px !important; right: 1px !important; } }`), Fn(t.sheet, `[data-pin-input-input] + * { pointer-events: all !important; }`)
  }
}
var Mn = new WeakMap,
  Nn = class e {
    static create(t) {
      return new e(t)
    }
    constructor(e) {
      M(this, `opts`, void 0), M(this, `attachment`, void 0), y(this, Mn, _(() => ({
        id: this.opts.id.current,
        [un.cell]: ``,
        "data-active": this.opts.cell.current.isActive ? `` : void 0,
        "data-inactive": this.opts.cell.current.isActive ? void 0 : ``,
        ...this.attachment
      }))), this.opts = e, this.attachment = He(this.opts.ref)
    }
    get props() {
      return k(c(Mn, this))
    }
    set props(e) {
      I(c(Mn, this), e)
    }
  };

function Pn(e, t) {
  return [t.setTimeout(e, 0), t.setTimeout(e, 10), t.setTimeout(e, 50)]
}

function Fn(e, t) {
  try {
    e.insertRule(t)
  } catch {
    console.error(`pin input could not insert CSS rule:`, t)
  }
}
var In = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `inputId`, `ref`, `inputRef`, `maxlength`, `textalign`, `pattern`, `inputmode`, `onComplete`, `pushPasswordManagerStrategy`, `class`, `children`, `autocomplete`, `disabled`, `value`, `onValueChange`, `pasteTransformer`]),
  Ln = E(`<div><!> <div><input/></div></div>`);

function Rn(t, r) {
  let i = e();
  T(r, !0);
  let a = D(r, `id`, 19, () => Le(i)),
    o = D(r, `inputId`, 19, () => `${Le(i)}-input`),
    c = D(r, `ref`, 15, null),
    l = D(r, `inputRef`, 15, null),
    u = D(r, `maxlength`, 3, 6),
    d = D(r, `textalign`, 3, `left`),
    p = D(r, `inputmode`, 3, `numeric`),
    m = D(r, `onComplete`, 3, ze),
    h = D(r, `pushPasswordManagerStrategy`, 3, `increase-width`),
    g = D(r, `class`, 3, ``),
    v = D(r, `autocomplete`, 3, `one-time-code`),
    y = D(r, `disabled`, 3, !1),
    b = D(r, `value`, 15, ``),
    x = D(r, `onValueChange`, 3, ze),
    S = re(r, In),
    C = An.create({
      id: $(() => a()),
      ref: $(() => c(), e => c(e)),
      inputRef: $(() => l(), e => l(e)),
      inputId: $(() => o()),
      autocomplete: $(() => v()),
      maxLength: $(() => u()),
      textAlign: $(() => d()),
      disabled: $(() => y()),
      inputmode: $(() => p()),
      pattern: $(() => r.pattern),
      onComplete: $(() => m()),
      value: $(() => b(), e => {
        b(e), x()(e)
      }),
      pushPasswordManagerStrategy: $(() => h()),
      pasteTransformer: $(() => r.pasteTransformer)
    }),
    E = _(() => Ue(S, C.inputProps)),
    O = _(() => Ue(C.rootProps, {
      class: g()
    })),
    ee = _(() => Ue(C.inputWrapperProps, {}));
  var A = Ln();
  q(A, () => ({
    ...k(O)
  }));
  var j = G(A);
  n(j, () => r.children ?? z, () => C.snippetProps);
  var M = s(j, 2);
  q(M, () => ({
    ...k(ee)
  }));
  var N = G(M);
  q(N, () => ({
    ...k(E)
  }), void 0, void 0, void 0, void 0, !0), L(M), L(A), w(t, A), f()
}
var zn = new Set([`$$slots`, `$$events`, `$$legacy`, `id`, `ref`, `cell`, `child`, `children`]),
  Bn = E(`<div><!></div>`);

function Vn(t, r) {
  let i = e();
  T(r, !0);
  let a = D(r, `id`, 19, () => Le(i)),
    o = D(r, `ref`, 15, null),
    s = re(r, zn),
    c = Nn.create({
      id: $(() => a()),
      ref: $(() => o(), e => o(e)),
      cell: $(() => r.cell)
    }),
    u = _(() => Ue(s, c.props));
  var d = S(),
    p = b(d),
    m = e => {
      var t = S(),
        i = b(t);
      n(i, () => r.child, () => ({
        props: k(u)
      })), w(e, t)
    },
    h = e => {
      var t = Bn();
      q(t, () => ({
        ...k(u)
      }));
      var i = G(t);
      n(i, () => r.children ?? z), L(t), w(e, t)
    };
  l(p, e => {
    r.child ? e(m) : e(h, -1)
  }), w(t, d), f()
}
var Hn = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `cell`, `class`]),
  Un = E(`<div class="pointer-events-none absolute inset-0 flex items-center justify-center"><div class="animate-caret-blink bg-base-content/80 h-4 w-px duration-1000"></div></div>`),
  Wn = E(` <!>`, 1);

function Gn(e, t) {
  T(t, !0);
  let n = D(t, `ref`, 15, null),
    r = re(t, Hn);
  var i = S(),
    a = b(i);
  {
    let e = _(() => en(`border-input relative flex size-12 items-center justify-center border-y border-r text-xl transition-all first:rounded-l-md first:border-l last:rounded-r-md`, t.cell.isActive && `ring-base-content/40 z-10 ring-2`, t.class));
    Y(a, () => Vn, (i, a) => {
      a(i, oe({
        get cell() {
          return t.cell
        },
        get class() {
          return k(e)
        }
      }, () => r, {
        get ref() {
          return n()
        },
        set ref(e) {
          n(e)
        },
        children: (e, n) => {
          H();
          var r = Wn(),
            i = b(r),
            a = s(i),
            o = e => {
              var t = Un();
              w(e, t)
            };
          l(a, e => {
            t.cell.hasFakeCaret && e(o)
          }), W(() => B(i, `${t.cell.char??``} `)), w(e, r)
        },
        $$slots: {
          default: !0
        }
      }))
    })
  }
  w(e, i), f()
}
var Kn = new Set([`$$slots`, `$$events`, `$$legacy`, `ref`, `class`, `value`]);

function qn(e, t) {
  T(t, !0);
  let n = D(t, `ref`, 15, null),
    r = D(t, `value`, 15, ``),
    i = re(t, Kn);
  var a = S(),
    o = b(a);
  {
    let e = _(() => en(`flex items-center gap-2 has-disabled:opacity-50 [&_input]:disabled:cursor-not-allowed`, t.class));
    Y(o, () => Rn, (t, a) => {
      a(t, oe({
        get class() {
          return k(e)
        }
      }, () => i, {
        get ref() {
          return n()
        },
        set ref(e) {
          n(e)
        },
        get value() {
          return r()
        },
        set value(e) {
          r(e)
        }
      }))
    })
  }
  w(e, a), f()
}

function Jn(e) {
  return e.closest(`dialog`) ?? document.body
}
var Yn = se(O(((e, t) => {
    (function(e) {
      typeof t == `object` && t.exports ? t.exports = e() : window.intlTelInput = e()
    })(() => (() => {
      var e = Object.defineProperty,
        t = Object.getOwnPropertyDescriptor,
        n = Object.getOwnPropertyNames,
        r = Object.prototype.hasOwnProperty,
        i = (t, n) => {
          for (var r in n) e(t, r, {
            get: n[r],
            enumerable: !0
          })
        },
        a = (i, a, o, s) => {
          if (a && typeof a == `object` || typeof a == `function`)
            for (let c of n(a)) !r.call(i, c) && c !== o && e(i, c, {
              get: () => a[c],
              enumerable: !(s = t(a, c)) || s.enumerable
            });
          return i
        },
        o = t => a(e({}, `__esModule`, {
          value: !0
        }), t),
        s = {};
      i(s, {
        Iti: () => G,
        default: () => Y
      });
      var c = [
          [`af`, `93`, 0, null, `0`],
          [`ax`, `358`, 1, [`18`, `4`], `0`],
          [`al`, `355`, 0, null, `0`],
          [`dz`, `213`, 0, null, `0`],
          [`as`, `1`, 5, [`684`], `1`],
          [`ad`, `376`],
          [`ao`, `244`],
          [`ai`, `1`, 6, [`264`], `1`],
          [`ag`, `1`, 7, [`268`], `1`],
          [`ar`, `54`, 0, null, `0`],
          [`am`, `374`, 0, null, `0`],
          [`aw`, `297`],
          [`ac`, `247`],
          [`au`, `61`, 0, [`4`], `0`],
          [`at`, `43`, 0, null, `0`],
          [`az`, `994`, 0, null, `0`],
          [`bs`, `1`, 8, [`242`], `1`],
          [`bh`, `973`],
          [`bd`, `880`, 0, null, `0`],
          [`bb`, `1`, 9, [`246`], `1`],
          [`by`, `375`, 0, null, `8`],
          [`be`, `32`, 0, null, `0`],
          [`bz`, `501`],
          [`bj`, `229`],
          [`bm`, `1`, 10, [`441`], `1`],
          [`bt`, `975`],
          [`bo`, `591`, 0, null, `0`],
          [`ba`, `387`, 0, null, `0`],
          [`bw`, `267`],
          [`br`, `55`, 0, null, `0`],
          [`io`, `246`],
          [`vg`, `1`, 11, [`284`], `1`],
          [`bn`, `673`],
          [`bg`, `359`, 0, null, `0`],
          [`bf`, `226`],
          [`bi`, `257`],
          [`kh`, `855`, 0, null, `0`],
          [`cm`, `237`],
          [`ca`, `1`, 1, `204.226.236.249.250.257.263.289.306.343.354.365.367.368.382.403.416.418.428.431.437.438.450.468.474.506.514.519.548.579.581.584.587.604.613.639.647.672.683.705.709.742.753.778.780.782.807.819.825.867.873.879.902.905.942`.split(`.`), `1`],
          [`cv`, `238`],
          [`bq`, `599`, 1, [`3`, `4`, `7`]],
          [`ky`, `1`, 12, [`345`], `1`],
          [`cf`, `236`],
          [`td`, `235`],
          [`cl`, `56`],
          [`cn`, `86`, 0, null, `0`],
          [`cx`, `61`, 2, [`4`, `89164`], `0`],
          [`cc`, `61`, 1, [`4`, `89162`], `0`],
          [`co`, `57`, 0, null, `0`],
          [`km`, `269`],
          [`cg`, `242`],
          [`cd`, `243`, 0, null, `0`],
          [`ck`, `682`],
          [`cr`, `506`],
          [`ci`, `225`],
          [`hr`, `385`, 0, null, `0`],
          [`cu`, `53`, 0, null, `0`],
          [`cw`, `599`, 0],
          [`cy`, `357`],
          [`cz`, `420`],
          [`dk`, `45`],
          [`dj`, `253`],
          [`dm`, `1`, 13, [`767`], `1`],
          [`do`, `1`, 2, [`809`, `829`, `849`], `1`],
          [`ec`, `593`, 0, null, `0`],
          [`eg`, `20`, 0, null, `0`],
          [`sv`, `503`],
          [`gq`, `240`],
          [`er`, `291`, 0, null, `0`],
          [`ee`, `372`],
          [`sz`, `268`],
          [`et`, `251`, 0, null, `0`],
          [`fk`, `500`],
          [`fo`, `298`],
          [`fj`, `679`],
          [`fi`, `358`, 0, [`4`], `0`],
          [`fr`, `33`, 0, null, `0`],
          [`gf`, `594`, 0, null, `0`],
          [`pf`, `689`],
          [`ga`, `241`],
          [`gm`, `220`],
          [`ge`, `995`, 0, null, `0`],
          [`de`, `49`, 0, null, `0`],
          [`gh`, `233`, 0, null, `0`],
          [`gi`, `350`],
          [`gr`, `30`],
          [`gl`, `299`],
          [`gd`, `1`, 14, [`473`], `1`],
          [`gp`, `590`, 0, null, `0`],
          [`gu`, `1`, 15, [`671`], `1`],
          [`gt`, `502`],
          [`gg`, `44`, 1, [`1481`, `7781`, `7839`, `7911`], `0`],
          [`gn`, `224`],
          [`gw`, `245`],
          [`gy`, `592`],
          [`ht`, `509`],
          [`hn`, `504`],
          [`hk`, `852`],
          [`hu`, `36`, 0, null, `06`],
          [`is`, `354`],
          [`in`, `91`, 0, null, `0`],
          [`id`, `62`, 0, null, `0`],
          [`ir`, `98`, 0, null, `0`],
          [`iq`, `964`, 0, null, `0`],
          [`ie`, `353`, 0, null, `0`],
          [`im`, `44`, 2, [`1624`, `74576`, `7524`, `7624`, `7924`], `0`],
          [`il`, `972`, 0, null, `0`],
          [`it`, `39`, 0, [`3`]],
          [`jm`, `1`, 4, [`658`, `876`], `1`],
          [`jp`, `81`, 0, null, `0`],
          [`je`, `44`, 3, [`1534`, `7509`, `7700`, `7797`, `7829`, `7937`], `0`],
          [`jo`, `962`, 0, null, `0`],
          [`kz`, `7`, 1, [`33`, `7`], `8`],
          [`ke`, `254`, 0, null, `0`],
          [`ki`, `686`, 0, null, `0`],
          [`xk`, `383`, 0, null, `0`],
          [`kw`, `965`],
          [`kg`, `996`, 0, null, `0`],
          [`la`, `856`, 0, null, `0`],
          [`lv`, `371`],
          [`lb`, `961`, 0, null, `0`],
          [`ls`, `266`],
          [`lr`, `231`, 0, null, `0`],
          [`ly`, `218`, 0, null, `0`],
          [`li`, `423`, 0, null, `0`],
          [`lt`, `370`, 0, null, `0`],
          [`lu`, `352`],
          [`mo`, `853`],
          [`mg`, `261`, 0, null, `0`],
          [`mw`, `265`, 0, null, `0`],
          [`my`, `60`, 0, null, `0`],
          [`mv`, `960`],
          [`ml`, `223`],
          [`mt`, `356`],
          [`mh`, `692`, 0, null, `1`],
          [`mq`, `596`, 0, null, `0`],
          [`mr`, `222`],
          [`mu`, `230`],
          [`yt`, `262`, 1, [`269`, `639`], `0`],
          [`mx`, `52`],
          [`fm`, `691`],
          [`md`, `373`, 0, null, `0`],
          [`mc`, `377`, 0, null, `0`],
          [`mn`, `976`, 0, null, `0`],
          [`me`, `382`, 0, null, `0`],
          [`ms`, `1`, 16, [`664`], `1`],
          [`ma`, `212`, 0, [`6`, `7`], `0`],
          [`mz`, `258`],
          [`mm`, `95`, 0, null, `0`],
          [`na`, `264`, 0, null, `0`],
          [`nr`, `674`],
          [`np`, `977`, 0, null, `0`],
          [`nl`, `31`, 0, null, `0`],
          [`nc`, `687`],
          [`nz`, `64`, 0, null, `0`],
          [`ni`, `505`],
          [`ne`, `227`],
          [`ng`, `234`, 0, null, `0`],
          [`nu`, `683`],
          [`nf`, `672`],
          [`kp`, `850`, 0, null, `0`],
          [`mk`, `389`, 0, null, `0`],
          [`mp`, `1`, 17, [`670`], `1`],
          [`no`, `47`, 0, [`4`, `9`]],
          [`om`, `968`],
          [`pk`, `92`, 0, null, `0`],
          [`pw`, `680`],
          [`ps`, `970`, 0, null, `0`],
          [`pa`, `507`],
          [`pg`, `675`],
          [`py`, `595`, 0, null, `0`],
          [`pe`, `51`, 0, null, `0`],
          [`ph`, `63`, 0, null, `0`],
          [`pl`, `48`],
          [`pt`, `351`],
          [`pr`, `1`, 3, [`787`, `939`], `1`],
          [`qa`, `974`],
          [`re`, `262`, 0, null, `0`],
          [`ro`, `40`, 0, null, `0`],
          [`ru`, `7`, 0, [`33`], `8`],
          [`rw`, `250`, 0, null, `0`],
          [`ws`, `685`],
          [`sm`, `378`],
          [`st`, `239`],
          [`sa`, `966`, 0, null, `0`],
          [`sn`, `221`],
          [`rs`, `381`, 0, null, `0`],
          [`sc`, `248`],
          [`sl`, `232`, 0, null, `0`],
          [`sg`, `65`],
          [`sx`, `1`, 21, [`721`], `1`],
          [`sk`, `421`, 0, null, `0`],
          [`si`, `386`, 0, null, `0`],
          [`sb`, `677`],
          [`so`, `252`, 0, null, `0`],
          [`za`, `27`, 0, null, `0`],
          [`kr`, `82`, 0, null, `0`],
          [`ss`, `211`, 0, null, `0`],
          [`es`, `34`],
          [`lk`, `94`, 0, null, `0`],
          [`bl`, `590`, 1, null, `0`],
          [`sh`, `290`],
          [`kn`, `1`, 18, [`869`], `1`],
          [`lc`, `1`, 19, [`758`], `1`],
          [`mf`, `590`, 2, null, `0`],
          [`pm`, `508`, 0, null, `0`],
          [`vc`, `1`, 20, [`784`], `1`],
          [`sd`, `249`, 0, null, `0`],
          [`sr`, `597`],
          [`sj`, `47`, 1, [`4`, `79`, `9`]],
          [`se`, `46`, 0, null, `0`],
          [`ch`, `41`, 0, null, `0`],
          [`sy`, `963`, 0, null, `0`],
          [`tw`, `886`, 0, null, `0`],
          [`tj`, `992`],
          [`tz`, `255`, 0, null, `0`],
          [`th`, `66`, 0, null, `0`],
          [`tl`, `670`],
          [`tg`, `228`],
          [`tk`, `690`],
          [`to`, `676`],
          [`tt`, `1`, 22, [`868`], `1`],
          [`tn`, `216`],
          [`tr`, `90`, 0, null, `0`],
          [`tm`, `993`, 0, null, `8`],
          [`tc`, `1`, 23, [`649`], `1`],
          [`tv`, `688`],
          [`vi`, `1`, 24, [`340`], `1`],
          [`ug`, `256`, 0, null, `0`],
          [`ua`, `380`, 0, null, `0`],
          [`ae`, `971`, 0, null, `0`],
          [`gb`, `44`, 0, null, `0`],
          [`us`, `1`, 0, null, `1`],
          [`uy`, `598`, 0, null, `0`],
          [`uz`, `998`],
          [`vu`, `678`],
          [`va`, `39`, 1, [`06698`, `3`]],
          [`ve`, `58`, 0, null, `0`],
          [`vn`, `84`, 0, null, `0`],
          [`wf`, `681`],
          [`eh`, `212`, 1, [`5288`, `5289`, `6`, `7`], `0`],
          [`ye`, `967`, 0, null, `0`],
          [`zm`, `260`, 0, null, `0`],
          [`zw`, `263`, 0, null, `0`]
        ],
        l = [];
      for (let e of c) l.push({
        name: ``,
        iso2: e[0],
        dialCode: e[1],
        priority: e[2] || 0,
        areaCodes: e[3] || null,
        nodeById: {},
        nationalPrefix: e[4] || null,
        normalisedName: ``,
        initials: ``,
        dialCodePlus: ``
      });
      var u = l,
        d = {
          ad: `Andorra`,
          ae: `United Arab Emirates`,
          af: `Afghanistan`,
          ag: `Antigua & Barbuda`,
          ai: `Anguilla`,
          al: `Albania`,
          am: `Armenia`,
          ao: `Angola`,
          ar: `Argentina`,
          as: `American Samoa`,
          at: `Austria`,
          au: `Australia`,
          aw: `Aruba`,
          ax: `Åland Islands`,
          az: `Azerbaijan`,
          ba: `Bosnia & Herzegovina`,
          bb: `Barbados`,
          bd: `Bangladesh`,
          be: `Belgium`,
          bf: `Burkina Faso`,
          bg: `Bulgaria`,
          bh: `Bahrain`,
          bi: `Burundi`,
          bj: `Benin`,
          bl: `St. Barthélemy`,
          bm: `Bermuda`,
          bn: `Brunei`,
          bo: `Bolivia`,
          bq: `Caribbean Netherlands`,
          br: `Brazil`,
          bs: `Bahamas`,
          bt: `Bhutan`,
          bw: `Botswana`,
          by: `Belarus`,
          bz: `Belize`,
          ca: `Canada`,
          cc: `Cocos (Keeling) Islands`,
          cd: `Congo - Kinshasa`,
          cf: `Central African Republic`,
          cg: `Congo - Brazzaville`,
          ch: `Switzerland`,
          ci: `Côte d’Ivoire`,
          ck: `Cook Islands`,
          cl: `Chile`,
          cm: `Cameroon`,
          cn: `China`,
          co: `Colombia`,
          cr: `Costa Rica`,
          cu: `Cuba`,
          cv: `Cape Verde`,
          cw: `Curaçao`,
          cx: `Christmas Island`,
          cy: `Cyprus`,
          cz: `Czechia`,
          de: `Germany`,
          dj: `Djibouti`,
          dk: `Denmark`,
          dm: `Dominica`,
          do: `Dominican Republic`,
          dz: `Algeria`,
          ec: `Ecuador`,
          ee: `Estonia`,
          eg: `Egypt`,
          eh: `Western Sahara`,
          er: `Eritrea`,
          es: `Spain`,
          et: `Ethiopia`,
          fi: `Finland`,
          fj: `Fiji`,
          fk: `Falkland Islands`,
          fm: `Micronesia`,
          fo: `Faroe Islands`,
          fr: `France`,
          ga: `Gabon`,
          gb: `United Kingdom`,
          gd: `Grenada`,
          ge: `Georgia`,
          gf: `French Guiana`,
          gg: `Guernsey`,
          gh: `Ghana`,
          gi: `Gibraltar`,
          gl: `Greenland`,
          gm: `Gambia`,
          gn: `Guinea`,
          gp: `Guadeloupe`,
          gq: `Equatorial Guinea`,
          gr: `Greece`,
          gt: `Guatemala`,
          gu: `Guam`,
          gw: `Guinea-Bissau`,
          gy: `Guyana`,
          hk: `Hong Kong SAR China`,
          hn: `Honduras`,
          hr: `Croatia`,
          ht: `Haiti`,
          hu: `Hungary`,
          id: `Indonesia`,
          ie: `Ireland`,
          il: `Israel`,
          im: `Isle of Man`,
          in: `India`,
          io: `British Indian Ocean Territory`,
          iq: `Iraq`,
          ir: `Iran`,
          is: `Iceland`,
          it: `Italy`,
          je: `Jersey`,
          jm: `Jamaica`,
          jo: `Jordan`,
          jp: `Japan`,
          ke: `Kenya`,
          kg: `Kyrgyzstan`,
          kh: `Cambodia`,
          ki: `Kiribati`,
          km: `Comoros`,
          kn: `St. Kitts & Nevis`,
          kp: `North Korea`,
          kr: `South Korea`,
          kw: `Kuwait`,
          ky: `Cayman Islands`,
          kz: `Kazakhstan`,
          la: `Laos`,
          lb: `Lebanon`,
          lc: `St. Lucia`,
          li: `Liechtenstein`,
          lk: `Sri Lanka`,
          lr: `Liberia`,
          ls: `Lesotho`,
          lt: `Lithuania`,
          lu: `Luxembourg`,
          lv: `Latvia`,
          ly: `Libya`,
          ma: `Morocco`,
          mc: `Monaco`,
          md: `Moldova`,
          me: `Montenegro`,
          mf: `St. Martin`,
          mg: `Madagascar`,
          mh: `Marshall Islands`,
          mk: `North Macedonia`,
          ml: `Mali`,
          mm: `Myanmar (Burma)`,
          mn: `Mongolia`,
          mo: `Macao SAR China`,
          mp: `Northern Mariana Islands`,
          mq: `Martinique`,
          mr: `Mauritania`,
          ms: `Montserrat`,
          mt: `Malta`,
          mu: `Mauritius`,
          mv: `Maldives`,
          mw: `Malawi`,
          mx: `Mexico`,
          my: `Malaysia`,
          mz: `Mozambique`,
          na: `Namibia`,
          nc: `New Caledonia`,
          ne: `Niger`,
          nf: `Norfolk Island`,
          ng: `Nigeria`,
          ni: `Nicaragua`,
          nl: `Netherlands`,
          no: `Norway`,
          np: `Nepal`,
          nr: `Nauru`,
          nu: `Niue`,
          nz: `New Zealand`,
          om: `Oman`,
          pa: `Panama`,
          pe: `Peru`,
          pf: `French Polynesia`,
          pg: `Papua New Guinea`,
          ph: `Philippines`,
          pk: `Pakistan`,
          pl: `Poland`,
          pm: `St. Pierre & Miquelon`,
          pr: `Puerto Rico`,
          ps: `Palestinian Territories`,
          pt: `Portugal`,
          pw: `Palau`,
          py: `Paraguay`,
          qa: `Qatar`,
          re: `Réunion`,
          ro: `Romania`,
          rs: `Serbia`,
          ru: `Russia`,
          rw: `Rwanda`,
          sa: `Saudi Arabia`,
          sb: `Solomon Islands`,
          sc: `Seychelles`,
          sd: `Sudan`,
          se: `Sweden`,
          sg: `Singapore`,
          sh: `St. Helena`,
          si: `Slovenia`,
          sj: `Svalbard & Jan Mayen`,
          sk: `Slovakia`,
          sl: `Sierra Leone`,
          sm: `San Marino`,
          sn: `Senegal`,
          so: `Somalia`,
          sr: `Suriname`,
          ss: `South Sudan`,
          st: `São Tomé & Príncipe`,
          sv: `El Salvador`,
          sx: `Sint Maarten`,
          sy: `Syria`,
          sz: `Eswatini`,
          tc: `Turks & Caicos Islands`,
          td: `Chad`,
          tg: `Togo`,
          th: `Thailand`,
          tj: `Tajikistan`,
          tk: `Tokelau`,
          tl: `Timor-Leste`,
          tm: `Turkmenistan`,
          tn: `Tunisia`,
          to: `Tonga`,
          tr: `Turkey`,
          tt: `Trinidad & Tobago`,
          tv: `Tuvalu`,
          tw: `Taiwan`,
          tz: `Tanzania`,
          ua: `Ukraine`,
          ug: `Uganda`,
          us: `United States`,
          uy: `Uruguay`,
          uz: `Uzbekistan`,
          va: `Vatican City`,
          vc: `St. Vincent & Grenadines`,
          ve: `Venezuela`,
          vg: `British Virgin Islands`,
          vi: `U.S. Virgin Islands`,
          vn: `Vietnam`,
          vu: `Vanuatu`,
          wf: `Wallis & Futuna`,
          ws: `Samoa`,
          ye: `Yemen`,
          yt: `Mayotte`,
          za: `South Africa`,
          zm: `Zambia`,
          zw: `Zimbabwe`
        },
        f = {
          selectedCountryAriaLabel: "Change country, selected ${countryName} (${dialCode})",
          noCountrySelected: `Select country`,
          countryListAriaLabel: `List of countries`,
          searchPlaceholder: `Search`,
          clearSearchAriaLabel: `Clear search`,
          zeroSearchResults: `No results found`,
          oneSearchResult: `1 result found`,
          multipleSearchResults: "${count} results found",
          ac: `Ascension Island`,
          xk: `Kosovo`
        },
        p = {
          ...d,
          ...f
        },
        m = {
          OPEN_COUNTRY_DROPDOWN: `open:countrydropdown`,
          CLOSE_COUNTRY_DROPDOWN: `close:countrydropdown`,
          COUNTRY_CHANGE: `countrychange`,
          INPUT: `input`
        },
        h = {
          HIDE: `iti__hide`,
          V_HIDE: `iti__v-hide`,
          ARROW_UP: `iti__arrow--up`,
          GLOBE: `iti__globe`,
          FLAG: `iti__flag`,
          COUNTRY_ITEM: `iti__country`,
          HIGHLIGHT: `iti__highlight`
        },
        g = {
          ARROW_UP: `ArrowUp`,
          ARROW_DOWN: `ArrowDown`,
          SPACE: ` `,
          ENTER: `Enter`,
          ESC: `Escape`,
          TAB: `Tab`
        },
        _ = {
          PASTE: `insertFromPaste`,
          DELETE_FWD: `deleteContentForward`
        },
        v = {
          ALPHA_UNICODE: /\p{L}/u,
          NON_PLUS_NUMERIC: /[^+0-9]/,
          NON_PLUS_NUMERIC_GLOBAL: /[^+0-9]/g,
          HIDDEN_SEARCH_CHAR: /^[a-zA-ZÀ-ÿа-яА-Я ]$/
        },
        y = {
          SEARCH_DEBOUNCE_MS: 100,
          HIDDEN_SEARCH_RESET_MS: 1e3,
          NEXT_TICK: 0
        },
        b = {
          UNKNOWN_NUMBER_TYPE: -99,
          UNKNOWN_VALIDATION_ERROR: -99
        },
        x = {
          SANE_SELECTED_WITH_DIAL_WIDTH: 78,
          SANE_SELECTED_NO_DIAL_WIDTH: 42,
          INPUT_PADDING_EXTRA_LEFT: 6
        },
        S = {
          PLUS: `+`,
          NANP: `1`
        },
        C = {
          ISO2: `gb`,
          DIAL_CODE: `44`,
          MOBILE_PREFIX: `7`,
          MOBILE_CORE_LENGTH: 10
        },
        w = {
          ISO2: `us`,
          DIAL_CODE: `1`
        },
        T = {
          AGGRESSIVE: `aggressive`,
          POLITE: `polite`,
          OFF: `off`
        },
        E = {
          AUTO: `auto`
        },
        D = {
          COUNTRY_CODE: `countryCode`,
          DIAL_CODE: `dialCode`
        },
        O = {
          EXPANDED: `aria-expanded`,
          LABEL: `aria-label`,
          SELECTED: `aria-selected`,
          ACTIVE_DESCENDANT: `aria-activedescendant`,
          HASPOPUP: `aria-haspopup`,
          CONTROLS: `aria-controls`,
          HIDDEN: `aria-hidden`,
          AUTOCOMPLETE: `aria-autocomplete`,
          MODAL: `aria-modal`
        },
        k = e => typeof window < `u` && typeof window.matchMedia == `function` && window.matchMedia(e).matches,
        ee = {
          allowPhonewords: !1,
          allowDropdown: !0,
          autoPlaceholder: T.POLITE,
          containerClass: ``,
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
          initialCountry: ``,
          loadUtils: null,
          nationalMode: !0,
          onlyCountries: [],
          placeholderNumberType: `MOBILE`,
          showFlags: !0,
          separateDialCode: !1,
          strictMode: !1,
          useFullscreenPopup: (() => {
            if (typeof navigator < `u` && typeof window < `u`) {
              let e = /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
                t = k(`(max-width: 500px)`),
                n = k(`(max-height: 600px)`),
                r = k(`(pointer: coarse)`);
              return e || t || r && n
            }
            return !1
          })(),
          validationNumberTypes: [`MOBILE`]
        },
        A = (e, t) => {
          e.useFullscreenPopup && (e.fixDropdownWidth = !1), e.onlyCountries.length === 1 && (e.initialCountry = e.onlyCountries[0]), e.separateDialCode && (e.nationalMode = !1), e.allowDropdown && !e.showFlags && !e.separateDialCode && (e.nationalMode = !1), e.useFullscreenPopup && !e.dropdownContainer && (e.dropdownContainer = document.body), e.i18n = {
            ...t,
            ...e.i18n
          }
        },
        j = e => e.replace(/\D/g, ``),
        M = (e = ``) => e.normalize(`NFD`).replace(/[\u0300-\u036f]/g, ``).toLowerCase(),
        N = (e, t) => {
          let n = M(t),
            r = [],
            i = [],
            a = [],
            o = [],
            s = [],
            c = [];
          for (let t of e) t.iso2 === n ? r.push(t) : t.normalisedName.startsWith(n) ? i.push(t) : t.normalisedName.includes(n) ? a.push(t) : n === t.dialCode || n === t.dialCodePlus ? o.push(t) : t.dialCodePlus.includes(n) ? s.push(t) : t.initials.includes(n) && c.push(t);
          let l = (e, t) => e.priority - t.priority;
          return [...r.sort(l), ...i.sort(l), ...a.sort(l), ...o.sort(l), ...s.sort(l), ...c.sort(l)]
        },
        te = (e, t) => {
          let n = t.toLowerCase();
          for (let t of e)
            if (t.name.toLowerCase().startsWith(n)) return t;
          return null
        },
        P = e => Object.keys(e).filter(t => !!e[t]).join(` `),
        F = (e, t, n) => {
          let r = document.createElement(e);
          return t && Object.entries(t).forEach(([e, t]) => r.setAttribute(e, t)), n && n.appendChild(r), r
        },
        I = () => `
  <svg class="iti__search-icon-svg" width="14" height="14" viewBox="0 0 24 24" focusable="false" ${O.HIDDEN}="true">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>`,
        ne = e => {
          let t = `iti-${e}-clear-mask`;
          return `
    <svg class="iti__search-clear-svg" width="12" height="12" viewBox="0 0 16 16" ${O.HIDDEN}="true" focusable="false">
      <mask id="${t}" maskUnits="userSpaceOnUse">
        <rect width="16" height="16" fill="white" />
        <path d="M5.2 5.2 L10.8 10.8 M10.8 5.2 L5.2 10.8" stroke="black" stroke-linecap="round" class="iti__search-clear-x" />
      </mask>
      <circle cx="8" cy="8" r="8" class="iti__search-clear-bg" mask="url(#${t})" />
    </svg>`
        },
        L = class {
          constructor(e, t, n) {
            this.highlightedItem = null, this.selectedItem = null, e.dataset.intlTelInputId = n.toString(), this.telInput = e, this.options = t, this.id = n, this.hadInitialPlaceholder = !!e.getAttribute(`placeholder`), this.isRTL = !!this.telInput.closest(`[dir=rtl]`), this.options.separateDialCode && (this.originalPaddingLeft = this.telInput.style.paddingLeft)
          }
          generateMarkup(e) {
            this.countries = e, this._prepareTelInput();
            let t = this._createWrapperAndInsert();
            this._maybeBuildCountryContainer(t), t.appendChild(this.telInput), this._maybeUpdateInputPaddingAndReveal(), this._maybeBuildHiddenInputs(t)
          }
          _prepareTelInput() {
            var e;
            this.telInput.classList.add(`iti__tel-input`), !this.telInput.hasAttribute(`autocomplete`) && !((e = this.telInput.form) != null && e.hasAttribute(`autocomplete`)) && this.telInput.setAttribute(`autocomplete`, `off`)
          }
          _createWrapperAndInsert() {
            let {
              allowDropdown: e,
              showFlags: t,
              containerClass: n,
              useFullscreenPopup: r
            } = this.options, i = F(`div`, {
              class: P({
                iti: !0,
                "iti--allow-dropdown": e,
                "iti--show-flags": t,
                "iti--inline-dropdown": !r,
                [n]: !!n
              })
            });
            return this.isRTL && i.setAttribute(`dir`, `ltr`), this.telInput.before(i), i
          }
          _maybeBuildCountryContainer(e) {
            let {
              allowDropdown: t,
              separateDialCode: n,
              showFlags: r
            } = this.options;
            if (t || r || n) {
              this.countryContainer = F(`div`, {
                class: `iti__country-container ${h.V_HIDE}`
              }, e), t ? (this.selectedCountry = F(`button`, {
                type: `button`,
                class: `iti__selected-country`,
                [O.EXPANDED]: `false`,
                [O.LABEL]: this.options.i18n.noCountrySelected,
                [O.HASPOPUP]: `dialog`,
                [O.CONTROLS]: `iti-${this.id}__dropdown-content`
              }, this.countryContainer), this.telInput.disabled && this.selectedCountry.setAttribute(`disabled`, `true`)) : this.selectedCountry = F(`div`, {
                class: `iti__selected-country`
              }, this.countryContainer);
              let r = F(`div`, {
                class: `iti__selected-country-primary`
              }, this.selectedCountry);
              this.selectedCountryInner = F(`div`, {
                class: h.FLAG
              }, r), t && (this.dropdownArrow = F(`div`, {
                class: `iti__arrow`,
                [O.HIDDEN]: `true`
              }, r)), n && (this.selectedDialCode = F(`div`, {
                class: `iti__selected-dial-code`
              }, this.selectedCountry)), t && this._buildDropdownContent()
            }
          }
          _buildDropdownContent() {
            let {
              fixDropdownWidth: e,
              useFullscreenPopup: t,
              countrySearch: n,
              i18n: r,
              dropdownContainer: i,
              containerClass: a
            } = this.options, o = e ? `` : `iti--flexible-dropdown-width`;
            if (this.dropdownContent = F(`div`, {
                id: `iti-${this.id}__dropdown-content`,
                class: `iti__dropdown-content ${h.HIDE} ${o}`,
                role: `dialog`,
                [O.MODAL]: `true`
              }), this.isRTL && this.dropdownContent.setAttribute(`dir`, `rtl`), n && this._buildSearchUI(), this.countryList = F(`ul`, {
                class: `iti__country-list`,
                id: `iti-${this.id}__country-listbox`,
                role: `listbox`,
                [O.LABEL]: r.countryListAriaLabel
              }, this.dropdownContent), this._appendListItems(), n && this.updateSearchResultsA11yText(), i) {
              let e = P({
                iti: !0,
                "iti--container": !0,
                "iti--fullscreen-popup": t,
                "iti--inline-dropdown": !t,
                [a]: !!a
              });
              this.dropdown = F(`div`, {
                class: e
              }), this.dropdown.appendChild(this.dropdownContent)
            } else this.countryContainer.appendChild(this.dropdownContent)
          }
          _buildSearchUI() {
            let {
              i18n: e
            } = this.options, t = F(`div`, {
              class: `iti__search-input-wrapper`
            }, this.dropdownContent);
            this.searchIcon = F(`span`, {
              class: `iti__search-icon`,
              [O.HIDDEN]: `true`
            }, t), this.searchIcon.innerHTML = I(), this.searchInput = F(`input`, {
              id: `iti-${this.id}__search-input`,
              type: `search`,
              class: `iti__search-input`,
              placeholder: e.searchPlaceholder,
              role: `combobox`,
              [O.EXPANDED]: `true`,
              [O.LABEL]: e.searchPlaceholder,
              [O.CONTROLS]: `iti-${this.id}__country-listbox`,
              [O.AUTOCOMPLETE]: `list`,
              autocomplete: `off`
            }, t), this.searchClearButton = F(`button`, {
              type: `button`,
              class: `iti__search-clear ${h.HIDE}`,
              [O.LABEL]: e.clearSearchAriaLabel,
              tabindex: `-1`
            }, t), this.searchClearButton.innerHTML = ne(this.id), this.searchResultsA11yText = F(`span`, {
              class: `iti__a11y-text`
            }, this.dropdownContent), this.searchNoResults = F(`div`, {
              class: `iti__no-results ${h.HIDE}`,
              [O.HIDDEN]: `true`
            }, this.dropdownContent), this.searchNoResults.textContent = e.zeroSearchResults
          }
          _maybeUpdateInputPaddingAndReveal() {
            this.countryContainer && (this.updateInputPadding(), this.countryContainer.classList.remove(h.V_HIDE))
          }
          _maybeBuildHiddenInputs(e) {
            let {
              hiddenInput: t
            } = this.options;
            if (t) {
              let i = t(this.telInput.getAttribute(`name`) || ``);
              if (i.phone) {
                var n;
                let t = (n = this.telInput.form) == null ? void 0 : n.querySelector(`input[name="${i.phone}"]`);
                t ? this.hiddenInput = t : (this.hiddenInput = F(`input`, {
                  type: `hidden`,
                  name: i.phone
                }), e.appendChild(this.hiddenInput))
              }
              if (i.country) {
                var r;
                let t = (r = this.telInput.form) == null ? void 0 : r.querySelector(`input[name="${i.country}"]`);
                t ? this.hiddenInputCountry = t : (this.hiddenInputCountry = F(`input`, {
                  type: `hidden`,
                  name: i.country
                }), e.appendChild(this.hiddenInputCountry))
              }
            }
          }
          _appendListItems() {
            let e = document.createDocumentFragment();
            for (let t = 0; t < this.countries.length; t++) {
              let n = this.countries[t],
                r = P({
                  [h.COUNTRY_ITEM]: !0
                }),
                i = F(`li`, {
                  id: `iti-${this.id}__item-${n.iso2}`,
                  class: r,
                  tabindex: `-1`,
                  role: `option`,
                  [O.SELECTED]: `false`
                });
              i.dataset.dialCode = n.dialCode, i.dataset.countryCode = n.iso2, n.nodeById[this.id] = i, this.options.showFlags && F(`div`, {
                class: `${h.FLAG} iti__${n.iso2}`
              }, i);
              let a = F(`span`, {
                class: `iti__country-name`
              }, i);
              a.textContent = n.name;
              let o = F(`span`, {
                class: `iti__dial-code`
              }, i);
              this.isRTL && o.setAttribute(`dir`, `ltr`), o.textContent = `+${n.dialCode}`, e.appendChild(i)
            }
            this.countryList.appendChild(e)
          }
          updateInputPadding() {
            if (this.selectedCountry) {
              let e = this.options.separateDialCode ? x.SANE_SELECTED_WITH_DIAL_WIDTH : x.SANE_SELECTED_NO_DIAL_WIDTH,
                t = (this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth() || e) + x.INPUT_PADDING_EXTRA_LEFT;
              this.telInput.style.paddingLeft = `${t}px`
            }
          }
          _getHiddenSelectedCountryWidth() {
            if (this.telInput.parentNode) {
              let e;
              try {
                e = window.top.document.body
              } catch {
                e = document.body
              }
              let t = this.telInput.parentNode.cloneNode(!1);
              t.style.visibility = `hidden`, e.appendChild(t);
              let n = this.countryContainer.cloneNode();
              t.appendChild(n);
              let r = this.selectedCountry.cloneNode(!0);
              n.appendChild(r);
              let i = r.offsetWidth;
              return e.removeChild(t), i
            }
            return 0
          }
          updateSearchResultsA11yText() {
            let {
              i18n: e
            } = this.options, t = this.countryList.childElementCount, n;
            n = t === 0 ? e.zeroSearchResults : e.searchResultsText ? e.searchResultsText(t) : t === 1 ? e.oneSearchResult : e.multipleSearchResults.replace("${count}", t.toString()), this.searchResultsA11yText.textContent = n
          }
          scrollTo(e) {
            let t = this.countryList,
              n = document.documentElement.scrollTop,
              r = t.offsetHeight,
              i = t.getBoundingClientRect().top + n,
              a = i + r,
              o = e.offsetHeight,
              s = e.getBoundingClientRect().top + n,
              c = s + o,
              l = s - i + t.scrollTop;
            s < i ? t.scrollTop = l : c > a && (t.scrollTop = l - (r - o))
          }
          highlightListItem(e, t) {
            let n = this.highlightedItem;
            if (n && n.classList.remove(h.HIGHLIGHT), this.highlightedItem = e, this.highlightedItem && (this.highlightedItem.classList.add(h.HIGHLIGHT), this.options.countrySearch)) {
              let e = this.highlightedItem.getAttribute(`id`) || ``;
              this.searchInput.setAttribute(O.ACTIVE_DESCENDANT, e)
            }
            t && this.highlightedItem.focus()
          }
          updateSelectedItem(e) {
            if (this.selectedItem && this.selectedItem.dataset.countryCode !== e && (this.selectedItem.setAttribute(O.SELECTED, `false`), this.selectedItem = null), e && !this.selectedItem) {
              let t = this.countryList.querySelector(`[data-country-code="${e}"]`);
              t && (t.setAttribute(O.SELECTED, `true`), this.selectedItem = t)
            }
          }
          filterCountries(e) {
            this.countryList.innerHTML = ``;
            let t = !0;
            for (let n of e) {
              let e = n.nodeById[this.id];
              e && (this.countryList.appendChild(e), t && (this.highlightListItem(e, !1), t = !1))
            }
            t ? (this.highlightListItem(null, !1), this.searchNoResults && this.searchNoResults.classList.remove(h.HIDE)) : this.searchNoResults && this.searchNoResults.classList.add(h.HIDE), this.countryList.scrollTop = 0, this.updateSearchResultsA11yText()
          }
          destroy() {
            this.telInput.iti = void 0, delete this.telInput.dataset.intlTelInputId, this.options.separateDialCode && (this.telInput.style.paddingLeft = this.originalPaddingLeft);
            let e = this.telInput.parentNode;
            e.before(this.telInput), e.remove(), this.telInput = null, this.countryContainer = null, this.selectedCountry = null, this.selectedCountryInner = null, this.selectedDialCode = null, this.dropdownArrow = null, this.dropdownContent = null, this.searchInput = null, this.searchIcon = null, this.searchClearButton = null, this.searchNoResults = null, this.searchResultsA11yText = null, this.countryList = null, this.dropdown = null, this.hiddenInput = null, this.hiddenInputCountry = null, this.highlightedItem = null, this.selectedItem = null;
            for (let e of this.countries) delete e.nodeById[this.id];
            this.countries = null
          }
        },
        R = e => {
          let {
            onlyCountries: t,
            excludeCountries: n
          } = e;
          if (t.length) {
            let e = t.map(e => e.toLowerCase());
            return u.filter(t => e.includes(t.iso2))
          }
          if (n.length) {
            let e = n.map(e => e.toLowerCase());
            return u.filter(t => !e.includes(t.iso2))
          }
          return u
        },
        re = (e, t) => {
          for (let n of e) {
            let e = n.iso2.toLowerCase();
            t.i18n[e] && (n.name = t.i18n[e])
          }
        },
        z = e => {
          let t = new Set,
            n = 0,
            r = {},
            i = (e, t) => {
              if (!e || !t) return;
              t.length > n && (n = t.length), r.hasOwnProperty(t) || (r[t] = []);
              let i = r[t];
              i.includes(e) || i.push(e)
            },
            a = [...e].sort((e, t) => e.priority - t.priority);
          for (let e of a) {
            t.has(e.dialCode) || t.add(e.dialCode);
            for (let t = 1; t < e.dialCode.length; t++) {
              let n = e.dialCode.substring(0, t);
              i(e.iso2, n)
            }
            if (i(e.iso2, e.dialCode), e.areaCodes) {
              let t = r[e.dialCode][0];
              for (let n of e.areaCodes) {
                for (let r = 1; r < n.length; r++) {
                  let a = n.substring(0, r),
                    o = e.dialCode + a;
                  i(t, o), i(e.iso2, o)
                }
                i(e.iso2, e.dialCode + n)
              }
            }
          }
          return {
            dialCodes: t,
            dialCodeMaxLen: n,
            dialCodeToIso2Map: r
          }
        },
        B = (e, t) => {
          t.countryOrder && (t.countryOrder = t.countryOrder.map(e => e.toLowerCase())), e.sort((e, n) => {
            let {
              countryOrder: r
            } = t;
            if (r) {
              let t = r.indexOf(e.iso2),
                i = r.indexOf(n.iso2),
                a = t > -1,
                o = i > -1;
              if (a || o) return a && o ? t - i : a ? -1 : 1
            }
            return e.name.localeCompare(n.name)
          })
        },
        ie = e => {
          for (let t of e) t.normalisedName = M(t.name), t.initials = t.normalisedName.split(/[^a-z]/).map(e => e[0]).join(``), t.dialCodePlus = `+${t.dialCode}`
        },
        ae = (e, t, n, r) => {
          let i = e;
          if (n && t) {
            t = `+${r.dialCode}`;
            let e = i[t.length] === ` ` || i[t.length] === `-` ? t.length + 1 : t.length;
            i = i.substring(e)
          }
          return i
        },
        V = (e, t, n, r, i) => {
          let a = n ? n.formatNumberAsYouType(e, r.iso2) : e,
            {
              dialCode: o
            } = r;
          return i && t.charAt(0) !== `+` && a.includes(`+${o}`) ? (a.split(`+${o}`)[1] || ``).trim() : a
        },
        oe = (e, t, n, r) => {
          if (n === 0 && !r) return 0;
          let i = 0;
          for (let n = 0; n < t.length; n++) {
            if (/[+0-9]/.test(t[n]) && i++, i === e && !r) return n + 1;
            if (r && i === e + 1) return n
          }
          return t.length
        },
        H = [`800`, `822`, `833`, `844`, `855`, `866`, `877`, `880`, `881`, `882`, `883`, `884`, `885`, `886`, `887`, `888`, `889`],
        U = e => {
          let t = j(e);
          if (t.startsWith(S.NANP) && t.length >= 4) {
            let e = t.substring(1, 4);
            return H.includes(e)
          }
          return !1
        };
      for (let e of u) e.name = p[e.iso2];
      var se = 0,
        ce = new Set(u.map(e => e.iso2)),
        W = e => ce.has(e),
        G = class e {
          constructor(t, n = {}) {
            this.id = se++, this.options = {
              ...ee,
              ...n
            }, A(this.options, p), this.ui = new L(t, this.options, this.id), this.isAndroid = e._getIsAndroid(), this.promise = this._createInitPromises(), this.countries = R(this.options);
            let {
              dialCodes: r,
              dialCodeMaxLen: i,
              dialCodeToIso2Map: a
            } = z(this.countries);
            this.dialCodes = r, this.dialCodeMaxLen = i, this.dialCodeToIso2Map = a, this.countryByIso2 = new Map(this.countries.map(e => [e.iso2, e])), this._init()
          }
          static _getIsAndroid() {
            return typeof navigator < `u` && /Android/i.test(navigator.userAgent)
          }
          _updateNumeralSet(e) {
            this.userNumeralSet = /[\u0660-\u0669]/.test(e) ? `arabic-indic` : /[\u06F0-\u06F9]/.test(e) ? `persian` : `ascii`
          }
          _mapAsciiToUserNumerals(e) {
            if (this.userNumeralSet || this._updateNumeralSet(this.ui.telInput.value), this.userNumeralSet === `ascii`) return e;
            let t = this.userNumeralSet === `arabic-indic` ? 1632 : 1776;
            return e.replace(/[0-9]/g, e => String.fromCharCode(t + Number(e)))
          }
          _normaliseNumerals(e) {
            if (!e) return ``;
            if (this._updateNumeralSet(e), this.userNumeralSet === `ascii`) return e;
            let t = this.userNumeralSet === `arabic-indic` ? 1632 : 1776,
              n = this.userNumeralSet === `arabic-indic` ? /[\u0660-\u0669]/g : /[\u06F0-\u06F9]/g;
            return e.replace(n, e => String.fromCharCode(48 + (e.charCodeAt(0) - t)))
          }
          _getTelInputValue() {
            let e = this.ui.telInput.value.trim();
            return this._normaliseNumerals(e)
          }
          _setTelInputValue(e) {
            this.ui.telInput.value = this._mapAsciiToUserNumerals(e)
          }
          _createInitPromises() {
            let e = new Promise((e, t) => {
                this.resolveAutoCountryPromise = e, this.rejectAutoCountryPromise = t
              }),
              t = new Promise((e, t) => {
                this.resolveUtilsScriptPromise = e, this.rejectUtilsScriptPromise = t
              });
            return Promise.all([e, t])
          }
          _init() {
            this.selectedCountryData = {}, this.abortController = new AbortController, this._processCountryData(), this.ui.generateMarkup(this.countries), this._setInitialState(), this._initListeners(), this._initRequests()
          }
          _processCountryData() {
            re(this.countries, this.options), B(this.countries, this.options), ie(this.countries)
          }
          _setInitialState(e = !1) {
            let t = this.ui.telInput.getAttribute(`value`),
              n = this._normaliseNumerals(t),
              r = this._getTelInputValue(),
              i = n && n.startsWith(`+`) && (!r || !r.startsWith(`+`)) ? n : r,
              a = this._getDialCode(i),
              o = U(i),
              {
                initialCountry: s,
                geoIpLookup: c
              } = this.options,
              l = s === E.AUTO && c;
            if (a && !o) this._updateCountryFromNumber(i);
            else if (!l || e) {
              let e = s ? s.toLowerCase() : ``;
              W(e) ? this._setCountry(e) : a && o ? this._setCountry(w.ISO2) : this._setCountry(``)
            }
            i && this._updateValFromNumber(i)
          }
          _initListeners() {
            this._initTelInputListeners(), this.options.allowDropdown && this._initDropdownListeners(), (this.ui.hiddenInput || this.ui.hiddenInputCountry) && this.ui.telInput.form && this._initHiddenInputListener()
          }
          _initHiddenInputListener() {
            var e;
            (e = this.ui.telInput.form) == null || e.addEventListener(`submit`, () => {
              this.ui.hiddenInput && (this.ui.hiddenInput.value = this.getNumber()), this.ui.hiddenInputCountry && (this.ui.hiddenInputCountry.value = this.selectedCountryData.iso2 || ``)
            }, {
              signal: this.abortController.signal
            })
          }
          _initDropdownListeners() {
            let e = this.abortController.signal,
              t = e => {
                this.ui.dropdownContent.classList.contains(h.HIDE) ? this.ui.telInput.focus() : e.preventDefault()
              },
              n = this.ui.telInput.closest(`label`);
            n && n.addEventListener(`click`, t, {
              signal: e
            }), this.ui.selectedCountry.addEventListener(`click`, () => {
              this.ui.dropdownContent.classList.contains(h.HIDE) && !this.ui.telInput.disabled && !this.ui.telInput.readOnly && this._openDropdown()
            }, {
              signal: e
            }), this.ui.countryContainer.addEventListener(`keydown`, e => {
              this.ui.dropdownContent.classList.contains(h.HIDE) && [g.ARROW_UP, g.ARROW_DOWN, g.SPACE, g.ENTER].includes(e.key) && (e.preventDefault(), e.stopPropagation(), this._openDropdown()), e.key === g.TAB && this._closeDropdown()
            }, {
              signal: e
            })
          }
          _initRequests() {
            let {
              loadUtils: e,
              initialCountry: t,
              geoIpLookup: n
            } = this.options;
            if (e && !J.utils) {
              let t = () => {
                var t;
                (t = J.attachUtils(e)) == null || t.catch(() => {})
              };
              J.documentReady() ? t() : window.addEventListener(`load`, () => {
                t()
              }, {
                signal: this.abortController.signal
              })
            } else this.resolveUtilsScriptPromise();
            t === E.AUTO && n && !this.selectedCountryData.iso2 ? this._loadAutoCountry() : this.resolveAutoCountryPromise()
          }
          _loadAutoCountry() {
            J.autoCountry ? this.handleAutoCountry() : J.startedLoadingAutoCountry || (J.startedLoadingAutoCountry = !0, typeof this.options.geoIpLookup == `function` && this.options.geoIpLookup((e = ``) => {
              let t = e.toLowerCase();
              W(t) ? (J.autoCountry = t, setTimeout(() => q(`handleAutoCountry`))) : (this._setInitialState(!0), q(`rejectAutoCountryPromise`))
            }, () => {
              this._setInitialState(!0), q(`rejectAutoCountryPromise`)
            }))
          }
          _openDropdownWithPlus() {
            this._openDropdown(), this.ui.searchInput.value = `+`, this._filterCountriesByQuery(``)
          }
          _initTelInputListeners() {
            this._bindInputListener(), this._maybeBindKeydownListener(), this._maybeBindPasteListener()
          }
          _bindInputListener() {
            let {
              strictMode: e,
              formatAsYouType: t,
              separateDialCode: n,
              allowDropdown: r,
              countrySearch: i
            } = this.options, a = !1;
            v.ALPHA_UNICODE.test(this._getTelInputValue()) && (a = !0), this.ui.telInput.addEventListener(`input`, o => {
              let s = this._getTelInputValue();
              if (this.isAndroid && (o == null ? void 0 : o.data) === `+` && n && r && i) {
                let e = this.ui.telInput.selectionStart || 0,
                  t = s.substring(0, e - 1),
                  n = s.substring(e);
                this._setTelInputValue(t + n), this._openDropdownWithPlus();
                return
              }
              this._updateCountryFromNumber(s) && this._triggerCountryChange();
              let c = (o == null ? void 0 : o.data) && v.NON_PLUS_NUMERIC.test(o.data),
                l = (o == null ? void 0 : o.inputType) === _.PASTE && s;
              c || l && !e ? a = !0 : v.NON_PLUS_NUMERIC.test(s) || (a = !1);
              let u = (o == null ? void 0 : o.detail) && o.detail.isSetNumber,
                d = this.userNumeralSet === `ascii`;
              if (t && !a && !u && d) {
                let e = this.ui.telInput.selectionStart || 0,
                  t = s.substring(0, e).replace(v.NON_PLUS_NUMERIC_GLOBAL, ``).length,
                  n = (o == null ? void 0 : o.inputType) === _.DELETE_FWD,
                  r = V(this._getFullNumber(), s, J.utils, this.selectedCountryData, this.options.separateDialCode),
                  i = oe(t, r, e, n);
                this._setTelInputValue(r), this.ui.telInput.setSelectionRange(i, i)
              }
            }, {
              signal: this.abortController.signal
            })
          }
          _maybeBindKeydownListener() {
            let {
              strictMode: e,
              separateDialCode: t,
              allowDropdown: n,
              countrySearch: r
            } = this.options;
            (e || t) && this.ui.telInput.addEventListener(`keydown`, i => {
              if (i.key && i.key.length === 1 && !i.altKey && !i.ctrlKey && !i.metaKey) {
                if (t && n && r && i.key === `+`) {
                  i.preventDefault(), this._openDropdownWithPlus();
                  return
                }
                if (e) {
                  let e = this._getTelInputValue(),
                    n = !e.startsWith(`+`) && this.ui.telInput.selectionStart === 0 && i.key === `+`,
                    r = this._normaliseNumerals(i.key),
                    a = /^[0-9]$/.test(r),
                    o = t ? a : n || a,
                    s = this.ui.telInput,
                    c = s.selectionStart,
                    l = s.selectionEnd,
                    u = e.slice(0, c),
                    d = e.slice(l),
                    f = u + i.key + d,
                    p = this._getFullNumber(f),
                    m = J.utils.getCoreNumber(p, this.selectedCountryData.iso2),
                    h = this.maxCoreNumberLength && m.length > this.maxCoreNumberLength,
                    g = this._getNewCountryFromNumber(p) !== null;
                  (!o || h && !g && !n) && i.preventDefault()
                }
              }
            }, {
              signal: this.abortController.signal
            })
          }
          _maybeBindPasteListener() {
            this.options.strictMode && this.ui.telInput.addEventListener(`paste`, e => {
              e.preventDefault();
              let t = this.ui.telInput,
                n = t.selectionStart,
                r = t.selectionEnd,
                i = this._getTelInputValue(),
                a = i.slice(0, n),
                o = i.slice(r),
                s = this.selectedCountryData.iso2,
                c = e.clipboardData.getData(`text`),
                l = this._normaliseNumerals(c),
                u = n === 0 && r > 0,
                d = !i.startsWith(`+`) || u,
                f = l.replace(v.NON_PLUS_NUMERIC_GLOBAL, ``),
                p = f.startsWith(`+`),
                m = f.replace(/\+/g, ``),
                h = p && d ? `+${m}` : m,
                g = a + h + o;
              if (g.length > 5) {
                let e = J.utils.getCoreNumber(g, s);
                for (; e.length === 0 && g.length > 0;) g = g.slice(0, -1), e = J.utils.getCoreNumber(g, s);
                if (!e) return;
                if (this.maxCoreNumberLength && e.length > this.maxCoreNumberLength) {
                  if (t.selectionEnd === i.length) {
                    let t = e.length - this.maxCoreNumberLength;
                    g = g.slice(0, g.length - t)
                  } else return
                }
              }
              this._setTelInputValue(g);
              let _ = n + h.length;
              t.setSelectionRange(_, _), t.dispatchEvent(new InputEvent(`input`, {
                bubbles: !0
              }))
            }, {
              signal: this.abortController.signal
            })
          }
          _cap(e) {
            let t = Number(this.ui.telInput.getAttribute(`maxlength`));
            return t && e.length > t ? e.substring(0, t) : e
          }
          _trigger(e, t = {}) {
            let n = new CustomEvent(e, {
              bubbles: !0,
              cancelable: !0,
              detail: t
            });
            this.ui.telInput.dispatchEvent(n)
          }
          _openDropdown() {
            let {
              fixDropdownWidth: e,
              countrySearch: t
            } = this.options;
            if (this.dropdownAbortController = new AbortController, e && (this.ui.dropdownContent.style.width = `${this.ui.telInput.offsetWidth}px`), this.ui.dropdownContent.classList.remove(h.HIDE), this.ui.selectedCountry.setAttribute(O.EXPANDED, `true`), this._setDropdownPosition(), t) {
              let e = this.ui.countryList.firstElementChild;
              e && (this.ui.highlightListItem(e, !1), this.ui.countryList.scrollTop = 0), this.ui.searchInput.focus()
            }
            this._bindDropdownListeners(), this.ui.dropdownArrow.classList.add(h.ARROW_UP), this._trigger(m.OPEN_COUNTRY_DROPDOWN)
          }
          _setDropdownPosition() {
            if (this.options.dropdownContainer && this.options.dropdownContainer.appendChild(this.ui.dropdown), !this.options.useFullscreenPopup) {
              let e = this.ui.telInput.getBoundingClientRect(),
                t = this.ui.telInput.offsetHeight;
              this.options.dropdownContainer && (this.ui.dropdown.style.top = `${e.top+t}px`, this.ui.dropdown.style.left = `${e.left}px`, window.addEventListener(`scroll`, () => this._closeDropdown(), {
                signal: this.dropdownAbortController.signal
              }))
            }
          }
          _bindDropdownListeners() {
            let e = this.dropdownAbortController.signal;
            this._bindDropdownMouseoverListener(e), this._bindDropdownCountryClickListener(e), this._bindDropdownClickOffListener(e), this._bindDropdownKeydownListener(e), this.options.countrySearch && this._bindDropdownSearchListeners(e)
          }
          _bindDropdownMouseoverListener(e) {
            this.ui.countryList.addEventListener(`mouseover`, e => {
              var t;
              let n = (t = e.target) == null ? void 0 : t.closest(`.${h.COUNTRY_ITEM}`);
              n && this.ui.highlightListItem(n, !1)
            }, {
              signal: e
            })
          }
          _bindDropdownCountryClickListener(e) {
            this.ui.countryList.addEventListener(`click`, e => {
              var t;
              let n = (t = e.target) == null ? void 0 : t.closest(`.${h.COUNTRY_ITEM}`);
              n && this._selectListItem(n)
            }, {
              signal: e
            })
          }
          _bindDropdownClickOffListener(e) {
            let t = e => {
              e.target.closest(`#iti-${this.id}__dropdown-content`) || this._closeDropdown()
            };
            setTimeout(() => {
              document.documentElement.addEventListener(`click`, t, {
                signal: e
              })
            }, 0)
          }
          _bindDropdownKeydownListener(e) {
            let t = ``,
              n = null;
            document.addEventListener(`keydown`, e => {
              [g.ARROW_UP, g.ARROW_DOWN, g.ENTER, g.ESC].includes(e.key) && (e.preventDefault(), e.stopPropagation(), e.key === g.ARROW_UP || e.key === g.ARROW_DOWN ? this._handleUpDownKey(e.key) : e.key === g.ENTER ? this._handleEnterKey() : e.key === g.ESC && (this._closeDropdown(), this.ui.selectedCountry.focus())), !this.options.countrySearch && v.HIDDEN_SEARCH_CHAR.test(e.key) && (e.stopPropagation(), n && clearTimeout(n), t += e.key.toLowerCase(), this._searchForCountry(t), n = setTimeout(() => {
                t = ``
              }, y.HIDDEN_SEARCH_RESET_MS))
            }, {
              signal: e
            })
          }
          _bindDropdownSearchListeners(e) {
            let t = () => {
                let e = this.ui.searchInput.value.trim();
                this._filterCountriesByQuery(e), this.ui.searchInput.value ? this.ui.searchClearButton.classList.remove(h.HIDE) : this.ui.searchClearButton.classList.add(h.HIDE)
              },
              n = null;
            this.ui.searchInput.addEventListener(`input`, () => {
              n && clearTimeout(n), n = setTimeout(() => {
                t(), n = null
              }, 100)
            }, {
              signal: e
            }), this.ui.searchClearButton.addEventListener(`click`, () => {
              this.ui.searchInput.value = ``, this.ui.searchInput.focus(), t()
            }, {
              signal: e
            })
          }
          _searchForCountry(e) {
            let t = te(this.countries, e);
            if (t) {
              let e = t.nodeById[this.id];
              this.ui.highlightListItem(e, !1), this.ui.scrollTo(e)
            }
          }
          _filterCountriesByQuery(e) {
            let t;
            t = e === `` ? this.countries : N(this.countries, e), this.ui.filterCountries(t)
          }
          _handleUpDownKey(e) {
            var t, n;
            let r = e === g.ARROW_UP ? (t = this.ui.highlightedItem) == null ? void 0 : t.previousElementSibling : (n = this.ui.highlightedItem) == null ? void 0 : n.nextElementSibling;
            !r && this.ui.countryList.childElementCount > 1 && (r = e === g.ARROW_UP ? this.ui.countryList.lastElementChild : this.ui.countryList.firstElementChild), r && (this.ui.scrollTo(r), this.ui.highlightListItem(r, !1))
          }
          _handleEnterKey() {
            this.ui.highlightedItem && this._selectListItem(this.ui.highlightedItem)
          }
          _updateValFromNumber(e) {
            let t = e;
            if (this.options.formatOnDisplay && J.utils && this.selectedCountryData) {
              let e = this.options.nationalMode || !t.startsWith(`+`) && !this.options.separateDialCode,
                {
                  NATIONAL: n,
                  INTERNATIONAL: r
                } = J.utils.numberFormat,
                i = e ? n : r;
              t = J.utils.formatNumber(t, this.selectedCountryData.iso2, i)
            }
            t = this._beforeSetNumber(t), this._setTelInputValue(t)
          }
          _updateCountryFromNumber(e) {
            let t = this._getNewCountryFromNumber(e);
            return t !== null && this._setCountry(t)
          }
          _ensureHasDialCode(e) {
            let {
              dialCode: t,
              nationalPrefix: n
            } = this.selectedCountryData;
            return e.startsWith(`+`) || !t ? e : `+${t}${n&&e.startsWith(n)&&!this.options.separateDialCode?e.substring(1):e}`
          }
          _getNewCountryFromNumber(e) {
            let t = e.indexOf(`+`),
              n = t ? e.substring(t) : e,
              r = this.selectedCountryData.iso2,
              i = this.selectedCountryData.dialCode;
            n = this._ensureHasDialCode(n);
            let a = this._getDialCode(n, !0),
              o = j(n);
            if (a) {
              let e = j(a),
                t = this.dialCodeToIso2Map[e];
              if (t.length === 1) return t[0] === r ? null : t[0];
              if (!r && this.defaultCountry && t.includes(this.defaultCountry)) return this.defaultCountry;
              if (i === S.NANP && U(o)) return null;
              let {
                areaCodes: n,
                priority: s
              } = this.selectedCountryData;
              if (n) {
                let e = n.map(e => `${i}${e}`);
                for (let t of e)
                  if (o.startsWith(t)) return null
              }
              let c = n && s !== 0 && o.length > e.length,
                l = r && t.includes(r) && !c,
                u = r === t[0];
              if (!l && !u) return t[0]
            } else if (n.startsWith(`+`) && o.length) {
              let e = this.selectedCountryData.dialCode || ``;
              return e && e.startsWith(o) ? null : ``
            } else if ((!n || n === `+`) && !r) return this.defaultCountry;
            return null
          }
          _setCountry(e) {
            let {
              separateDialCode: t,
              showFlags: n,
              i18n: r,
              allowDropdown: i
            } = this.options, a = this.selectedCountryData.iso2 || ``;
            if (i && this.ui.updateSelectedItem(e), this.selectedCountryData = e ? this.countryByIso2.get(e) : {}, this.selectedCountryData.iso2 && (this.defaultCountry = this.selectedCountryData.iso2), this.ui.selectedCountry) {
              let t = e && n ? `${h.FLAG} iti__${e}` : `${h.FLAG} ${h.GLOBE}`,
                i, a;
              if (e) {
                let {
                  name: e,
                  dialCode: t
                } = this.selectedCountryData;
                a = e, i = r.selectedCountryAriaLabel.replace("${countryName}", e).replace("${dialCode}", `+${t}`)
              } else a = r.noCountrySelected, i = r.noCountrySelected;
              this.ui.selectedCountryInner.className = t, this.ui.selectedCountry.setAttribute(`title`, a), this.ui.selectedCountry.setAttribute(O.LABEL, i)
            }
            if (t) {
              let e = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : ``;
              this.ui.selectedDialCode.textContent = e, this.ui.updateInputPadding()
            }
            return this._updatePlaceholder(), this._updateMaxLength(), a !== e
          }
          _updateMaxLength() {
            let {
              strictMode: e,
              placeholderNumberType: t,
              validationNumberTypes: n
            } = this.options, {
              iso2: r
            } = this.selectedCountryData;
            if (e && J.utils) {
              if (r) {
                let e = J.utils.numberType[t],
                  i = J.utils.getExampleNumber(r, !1, e, !0),
                  a = i;
                for (; J.utils.isPossibleNumber(i, r, n);) a = i, i += `0`;
                let o = J.utils.getCoreNumber(a, r);
                this.maxCoreNumberLength = o.length, r === `by` && (this.maxCoreNumberLength = o.length + 1)
              } else this.maxCoreNumberLength = null
            }
          }
          _updatePlaceholder() {
            let {
              autoPlaceholder: e,
              placeholderNumberType: t,
              nationalMode: n,
              customPlaceholder: r
            } = this.options, i = e === T.AGGRESSIVE || !this.ui.hadInitialPlaceholder && e === T.POLITE;
            if (J.utils && i) {
              let e = J.utils.numberType[t],
                i = this.selectedCountryData.iso2 ? J.utils.getExampleNumber(this.selectedCountryData.iso2, n, e) : ``;
              i = this._beforeSetNumber(i), typeof r == `function` && (i = r(i, this.selectedCountryData)), this.ui.telInput.setAttribute(`placeholder`, i)
            }
          }
          _selectListItem(e) {
            let t = e.dataset[D.COUNTRY_CODE],
              n = this._setCountry(t);
            this._closeDropdown();
            let r = e.dataset[D.DIAL_CODE];
            if (this._updateDialCode(r), this.options.formatOnDisplay) {
              let e = this._getTelInputValue();
              this._updateValFromNumber(e)
            }
            this.ui.telInput.focus(), n && this._triggerCountryChange()
          }
          _closeDropdown() {
            this.ui.dropdownContent.classList.contains(h.HIDE) || (this.ui.dropdownContent.classList.add(h.HIDE), this.ui.selectedCountry.setAttribute(O.EXPANDED, `false`), this.options.countrySearch && (this.ui.searchInput.removeAttribute(O.ACTIVE_DESCENDANT), this.ui.highlightedItem && (this.ui.highlightedItem.classList.remove(h.HIGHLIGHT), this.ui.highlightedItem = null)), this.ui.dropdownArrow.classList.remove(h.ARROW_UP), this.dropdownAbortController.abort(), this.dropdownAbortController = null, this.options.dropdownContainer && this.ui.dropdown.remove(), this._trigger(m.CLOSE_COUNTRY_DROPDOWN))
          }
          _updateDialCode(e) {
            let t = this._getTelInputValue(),
              n = `+${e}`,
              r;
            if (t.startsWith(`+`)) {
              let e = this._getDialCode(t);
              r = e ? t.replace(e, n) : n, this._setTelInputValue(r)
            }
          }
          _getDialCode(e, t) {
            let n = ``;
            if (e.startsWith(`+`)) {
              let r = ``,
                i = !1;
              for (let a = 0; a < e.length; a++) {
                let o = e.charAt(a);
                if (/[0-9]/.test(o)) {
                  if (r += o, !this.dialCodeToIso2Map[r]) break;
                  if (this.dialCodes.has(r)) {
                    if (n = e.substring(0, a + 1), i = !0, !t) break
                  } else t && i && (n = e.substring(0, a + 1));
                  if (r.length === this.dialCodeMaxLen) break
                }
              }
            }
            return n
          }
          _getFullNumber(e) {
            let t = e ? this._normaliseNumerals(e) : this._getTelInputValue(),
              {
                dialCode: n
              } = this.selectedCountryData,
              r, i = j(t);
            return r = this.options.separateDialCode && !t.startsWith(`+`) && n && i ? `+${n}` : ``, r + t
          }
          _beforeSetNumber(e) {
            let t = ae(e, this._getDialCode(e), this.options.separateDialCode, this.selectedCountryData);
            return this._cap(t)
          }
          _triggerCountryChange() {
            this._trigger(m.COUNTRY_CHANGE)
          }
          handleAutoCountry() {
            this.options.initialCountry === E.AUTO && J.autoCountry && (this.defaultCountry = J.autoCountry, this.selectedCountryData.iso2 || this.ui.selectedCountryInner.classList.contains(h.GLOBE) || this.setCountry(this.defaultCountry), this.resolveAutoCountryPromise())
          }
          handleUtils() {
            if (J.utils) {
              let e = this._getTelInputValue();
              e && this._updateValFromNumber(e), this.selectedCountryData.iso2 && (this._updatePlaceholder(), this._updateMaxLength())
            }
            this.resolveUtilsScriptPromise()
          }
          destroy() {
            this.ui.telInput && (this.options.allowDropdown && this._closeDropdown(), this.abortController.abort(), this.abortController = null, this.ui.destroy(), J.instances instanceof Map ? J.instances.delete(this.id) : delete J.instances[this.id])
          }
          getExtension() {
            return J.utils ? J.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2) : ``
          }
          getNumber(e) {
            if (J.utils) {
              let {
                iso2: t
              } = this.selectedCountryData, n = this._getFullNumber(), r = J.utils.formatNumber(n, t, e);
              return this._mapAsciiToUserNumerals(r)
            }
            return ``
          }
          getNumberType() {
            return J.utils ? J.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2) : b.UNKNOWN_NUMBER_TYPE
          }
          getSelectedCountryData() {
            return this.selectedCountryData
          }
          getValidationError() {
            if (J.utils) {
              let {
                iso2: e
              } = this.selectedCountryData;
              return J.utils.getValidationError(this._getFullNumber(), e)
            }
            return b.UNKNOWN_VALIDATION_ERROR
          }
          isValidNumber() {
            let {
              dialCode: e,
              iso2: t
            } = this.selectedCountryData;
            if (e === C.DIAL_CODE && J.utils) {
              let e = this._getFullNumber(),
                n = J.utils.getCoreNumber(e, t);
              if (n[0] === C.MOBILE_PREFIX && n.length !== C.MOBILE_CORE_LENGTH) return !1
            }
            return this._validateNumber(!1)
          }
          isValidNumberPrecise() {
            return this._validateNumber(!0)
          }
          _utilsIsPossibleNumber(e) {
            return J.utils ? J.utils.isPossibleNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
          }
          _validateNumber(e) {
            if (!J.utils) return null;
            if (!this.selectedCountryData.iso2) return !1;
            let t = t => e ? this._utilsIsValidNumber(t) : this._utilsIsPossibleNumber(t),
              n = this._getFullNumber(),
              r = n.search(v.ALPHA_UNICODE);
            if (r > -1 && !this.options.allowPhonewords) {
              let e = t(n.substring(0, r)),
                i = t(n);
              return e && i
            }
            return t(n)
          }
          _utilsIsValidNumber(e) {
            return J.utils ? J.utils.isValidNumber(e, this.selectedCountryData.iso2, this.options.validationNumberTypes) : null
          }
          setCountry(e) {
            let t = e == null ? void 0 : e.toLowerCase();
            if (!W(t)) throw Error(`Invalid country code: '${t}'`);
            let n = this.selectedCountryData.iso2;
            if (e && t !== n || !e && n) {
              if (this._setCountry(t), this._updateDialCode(this.selectedCountryData.dialCode), this.options.formatOnDisplay) {
                let e = this._getTelInputValue();
                this._updateValFromNumber(e)
              }
              this._triggerCountryChange()
            }
          }
          setNumber(e) {
            let t = this._normaliseNumerals(e),
              n = this._updateCountryFromNumber(t);
            this._updateValFromNumber(t), n && this._triggerCountryChange(), this._trigger(m.INPUT, {
              isSetNumber: !0
            })
          }
          setPlaceholderNumberType(e) {
            this.options.placeholderNumberType = e, this._updatePlaceholder()
          }
          setDisabled(e) {
            this.ui.telInput.disabled = e, e ? this.ui.selectedCountry.setAttribute(`disabled`, `true`) : this.ui.selectedCountry.removeAttribute(`disabled`)
          }
        },
        K = e => {
          if (!J.utils && !J.startedLoadingUtilsScript) {
            let t;
            if (typeof e == `function`) try {
              t = Promise.resolve(e())
            } catch (e) {
              return Promise.reject(e)
            } else return Promise.reject(TypeError(`The argument passed to attachUtils must be a function that returns a promise for the utilities module, not ${typeof e}`));
            return J.startedLoadingUtilsScript = !0, t.then(e => {
              let t = e == null ? void 0 : e.default;
              if (!t || typeof t != `object`) throw TypeError(`The loader function passed to attachUtils did not resolve to a module object with utils as its default export.`);
              return J.utils = t, q(`handleUtils`), !0
            }).catch(e => {
              throw q(`rejectUtilsScriptPromise`, e), e
            })
          }
          return null
        },
        q = (e, ...t) => {
          Object.values(J.instances).forEach(n => {
            let r = n[e];
            typeof r == `function` && r.apply(n, t)
          })
        },
        J = Object.assign((e, t) => {
          let n = new G(e, t);
          return J.instances[n.id] = n, e.iti = n, n
        }, {
          defaults: ee,
          documentReady: () => document.readyState === `complete`,
          getCountryData: () => u,
          getInstance: e => {
            let t = e.dataset.intlTelInputId;
            return t ? J.instances[t] : null
          },
          instances: {},
          attachUtils: K,
          startedLoadingUtilsScript: !1,
          startedLoadingAutoCountry: !1,
          version: `25.15.1`
        }),
        Y = J;
      return o(s)
    })().default)
  }))()),
  Xn = E(`<div class="my-auto"><span class="loading loading-spinner loading-xl"></span></div>`),
  Zn = E(`<span class="w-8"> </span>`),
  Qn = E(`<span class="loading loading-spinner center-absolute absolute"></span>`),
  $n = E(`<div class="my-auto flex w-full flex-col items-center"><div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="text-base-content/80 mt-0.5 text-sm"> </p></div> <form class="mt-8 flex w-full flex-col gap-3"><input class="input w-full pl-12!" type="tel" id="phone"/> <button class="btn btn-primary relative w-full"> <!> <!></button></form></div> <p class="text-base-content/60 pt-3 pb-2 text-center text-xs"> </p>`, 1),
  er = E(`<div class="text-center"><h2 class="text-2xl font-bold"> </h2> <p class="mt-0.5 text-sm"> </p></div> <div class="mt-4"><!></div> <div class="mt-4 flex flex-col items-center gap-1"><button class="btn btn-ghost relative mb-1 w-max"> <!> <!></button> <button class="text-primary/80 cursor-pointer text-xs"> </button></div>`, 1),
  tr = E(`<div class="flex h-full w-full flex-col items-center"><!></div>`);

function nr(e, t) {
  T(t, !0);
  let n = D(t, `verifyingPhone`, 15, ``),
    r = P(!0),
    i = P(0),
    a = P(!1),
    o = _(() => k(i) > 0 || k(a)),
    c = P(!1),
    d = P(``),
    p = P(void 0);
  ae(() => {
    xe.getOtpCooldown().then(e => {
      I(i, e.cooldownMs, !0)
    }).catch(e => {
      Se.error(e.message)
    }).finally(() => {
      I(r, !1)
    });
    let e = 1e3,
      t = setInterval(() => {
        I(i, Math.max(0, k(i) - e), !0)
      }, e);
    return () => {
      clearInterval(t)
    }
  });
  async function m(e) {
    try {
      I(a, !0);
      let t = await xe.sendOtp(e);
      Se.info(Z.code_sent_to_phone({
        channel: {
          sms: `SMS`,
          telegram: `Telegram`,
          whatsapp: `WhatsApp`
        } [t.channel],
        phone: t.phone
      }), {
        duration: 15e3
      }), n(t.phone), I(i, t.cooldownMs, !0)
    } catch (e) {
      Se.error(e.message)
    } finally {
      I(a, !1)
    }
  }
  J(() => {
    k(d).length === 6 && (I(c, !0), (async () => {
      try {
        await xe.verifyChallenge({
          type: `otp`,
          code: k(d)
        }), Se.success(Z.phone_verified()), t.onsuccess(n())
      } catch (e) {
        Se.error(e.message)
      } finally {
        I(d, ``), I(c, !1)
      }
    })())
  });
  var h = tr(),
    g = G(h),
    v = e => {
      var t = Xn();
      w(e, t)
    },
    y = e => {
      var t = $n(),
        n = b(t),
        r = G(n),
        c = G(r),
        u = G(c, !0);
      L(c);
      var d = s(c, 2),
        f = G(d, !0);
      L(d), L(r);
      var h = s(r, 2),
        g = G(h);
      te(g, () => e => {
        var t;
        return I(p, (0, Yn.default)(e, {
          strictMode: !0,
          initialCountry: ((t = Ce.data) == null || (t = t.country) == null ? void 0 : t.toLocaleLowerCase()) ?? `br`,
          loadUtils: () => ue(() => import(`../chunks/CAGwEc5h.js`), [], import.meta.url),
          containerClass: `w-full hide-search`,
          dropdownContainer: Jn(e)
        })), () => {
          var e;
          (e = k(p)) == null || e.destroy()
        }
      });
      var _ = s(g, 2),
        v = G(_),
        y = s(v),
        x = e => {
          var t = Zn(),
            n = G(t);
          L(t), W(e => B(n, `(${e??``})`), [() => pe(k(i))]), w(e, t)
        };
      l(y, e => {
        k(i) > 0 && e(x)
      });
      var S = s(y, 2),
        C = e => {
          var t = Qn();
          w(e, t)
        };
      l(S, e => {
        k(a) && e(C)
      }), L(_), L(h), L(n);
      var T = s(n, 2),
        E = G(T, !0);
      L(T), W((e, t, n, r) => {
        B(u, e), B(f, t), _.disabled = k(o), B(v, `${n??``} `), B(E, r)
      }, [() => Z.phone_verification(), () => Z.phone_verification_description(), () => Z.send_code(), () => Z.phone_privacy_notice()]), V(`submit`, h, async () => {
        var e;
        if (!k(o)) {
          if (!((e = k(p)) != null && e.isValidNumber())) {
            Se.error(Z.not_valid_phone());
            return
          }
          await m(k(p).getNumber())
        }
      }), w(e, t)
    },
    x = e => {
      var t = er(),
        r = b(t),
        f = G(r),
        p = G(f, !0);
      L(f);
      var h = s(f, 2),
        g = G(h, !0);
      L(h), L(r);
      var _ = s(r, 2),
        v = G(_);
      {
        let e = (e, t) => {
          let n = () => t == null ? void 0 : t().cells;
          var r = S(),
            i = b(r);
          Y(i, () => rn, (e, t) => {
            t(e, {
              class: `border-primary`,
              children: (e, t) => {
                var r = S(),
                  i = b(r);
                u(i, 16, n, e => e, (e, t) => {
                  var n = S(),
                    r = b(n);
                  Y(r, () => Gn, (e, n) => {
                    n(e, {
                      get cell() {
                        return t
                      },
                      class: `border-base-content/20 size-11 sm:size-12`
                    })
                  }), w(e, n)
                }), w(e, r)
              },
              $$slots: {
                default: !0
              }
            })
          }), w(e, r)
        };
        Y(v, () => qn, (t, n) => {
          n(t, {
            maxlength: 6,
            class: `mx-auto w-max`,
            get disabled() {
              return k(c)
            },
            get value() {
              return k(d)
            },
            set value(e) {
              I(d, e, !0)
            },
            children: e,
            $$slots: {
              default: !0
            }
          })
        })
      }
      L(_);
      var y = s(_, 2),
        x = G(y),
        C = G(x),
        T = s(C),
        E = e => {
          var t = Zn(),
            n = G(t);
          L(t), W(e => B(n, `(${e??``})`), [() => pe(k(i))]), w(e, t)
        };
      l(T, e => {
        k(i) > 0 && e(E)
      });
      var D = s(T, 2),
        O = e => {
          var t = Qn();
          w(e, t)
        };
      l(D, e => {
        k(a) && e(O)
      }), L(x);
      var ee = s(x, 2),
        A = G(ee, !0);
      L(ee), L(y), W((e, t, n, r) => {
        B(p, e), B(g, t), x.disabled = k(o), B(C, `${n??``} `), B(A, r)
      }, [() => Z.input_the_code(), () => Z.sent_to_phone({
        phone: n()
      }), () => Z.resend_code(), () => Z.try_another_number()]), R(`click`, x, async () => {
        await m(n())
      }), R(`click`, ee, () => {
        n(``)
      }), w(e, t)
    };
  l(g, e => {
    k(r) ? e(v) : n() ? e(x, -1) : e(y, 1)
  }), L(h), w(e, h), f()
}
U([`click`]);
var rr = P(!1),
  ir = new Set(`$$slots.$$events.$$legacy.siteKey.widgetId.turnstile.appearance.language.execution.action.cData.retryInterval.retry.refreshExpired.theme.size.tabIndex.forms.responseField.formsField.responseFieldName.reset.callback.errorCallback.timeoutCallback.expiredCallback.beforeInteractiveCallback.afterInteractiveCallback.unsupportedCallback`.split(`.`)),
  ar = E(`<div></div>`),
  or = E(`<button type="button" class="btn">Retry</button>`),
  sr = E(`<span class="loading loading-spinner loading-lg"></span>`),
  cr = E(`<div><!></div>`);

function lr(e, t) {
  T(t, !0);
  let n = D(t, `widgetId`, 15),
    r = D(t, `appearance`, 3, `always`),
    i = D(t, `language`, 3, `auto`),
    a = D(t, `execution`, 3, `render`),
    o = D(t, `retryInterval`, 3, 8e3),
    s = D(t, `retry`, 3, `auto`),
    c = D(t, `refreshExpired`, 3, `auto`),
    u = D(t, `theme`, 3, `auto`),
    d = D(t, `size`, 3, `normal`),
    p = D(t, `tabIndex`, 3, 0),
    m = D(t, `reset`, 15);
  re(t, ir), m(() => {
    var e;
    n() && ((e = window) == null || (e = e.turnstile) == null || e.reset(n()))
  });
  let v = _(() => ({
      sitekey: t.siteKey,
      callback: (e, n) => {
        var r;
        (r = t.callback) == null || r.call(t, e, n)
      },
      "error-callback": e => {
        var n;
        (n = t.errorCallback) == null || n.call(t, e)
      },
      "timeout-callback": () => {
        var e;
        (e = t.timeoutCallback) == null || e.call(t)
      },
      "expired-callback": () => {
        var e;
        (e = t.expiredCallback) == null || e.call(t)
      },
      "before-interactive-callback": () => {
        var e;
        (e = t.beforeInteractiveCallback) == null || e.call(t)
      },
      "after-interactive-callback": () => {
        var e;
        (e = t.afterInteractiveCallback) == null || e.call(t)
      },
      "unsupported-callback": () => {
        var e;
        return (e = t.unsupportedCallback) == null ? void 0 : e.call(t)
      },
      "response-field-name": t.responseFieldName ?? t.formsField ?? `cf-turnstile-response`,
      "response-field": t.responseField ?? t.forms ?? !0,
      "refresh-expired": c(),
      "retry-interval": o(),
      tabindex: p(),
      appearance: r(),
      execution: a(),
      language: i(),
      action: t.action,
      retry: s(),
      theme: u(),
      cData: t.cData,
      size: d()
    })),
    y = (e, t) => {
      let r = window.turnstile.render(e, t);
      return n(r), {
        destroy() {
          window.turnstile.remove(r)
        },
        update(t) {
          window.turnstile.remove(r), r = window.turnstile.render(e, t), n(r)
        }
      }
    },
    x = P(!1),
    C = P(!1),
    E;

  function O() {
    let e = document.createElement(`script`);
    e.type = `text/javascript`, e.src = `https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit`, e.async = !0, e.addEventListener(`load`, () => I(rr, !0), {
      once: !0
    }), document.head.appendChild(e)
  }

  function ee() {
    I(C, !1), E && clearTimeout(E), E = setTimeout(() => {
      (!k(rr) || !k(x)) && I(C, !0)
    }, 5e3)
  }

  function A() {
    document.querySelectorAll(`script[src*="challenges.cloudflare.com/turnstile"]`).forEach(e => e.remove()), I(rr, !1), O(), ee()
  }
  ae(() => (I(x, !0), k(rr) || O(), ee(), () => {
    I(x, !1), E && clearTimeout(E)
  }));
  var j = S(),
    M = b(j),
    N = e => {
      var n = ar();
      let r;
      h(n, (e, t) => y == null ? void 0 : y(e, t), () => k(v)), W(() => r = g(n, 1, `h-16 ${t.class??``}`, `svelte-1lm836y`, r, {
        flexible: d() == `flexible`
      })), w(e, n)
    },
    te = e => {
      var n = cr(),
        r = G(n),
        i = e => {
          var t = or();
          R(`click`, t, A), w(e, t)
        },
        a = e => {
          var t = sr();
          w(e, t)
        };
      l(r, e => {
        k(C) ? e(i) : e(a, -1)
      }), L(n), W(() => g(n, 1, `flex h-16 items-center justify-center ${t.class??``}`, `svelte-1lm836y`)), w(e, n)
    };
  l(M, e => {
    k(rr) && k(x) ? e(N) : e(te, -1)
  }), w(e, j), f()
}
U([`click`]);
var ur = E(`<dialog class="modal"><div></div> <div><div class="min-h-16"><!></div></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>`);

function dr(e, t) {
  T(t, !0);
  let n = _(() => ye.current !== null),
    r = _(() => {
      var e;
      return (e = ye.current) == null ? void 0 : e.tier
    }),
    i = Ge(() => k(n)),
    a = P(``),
    o = P(void 0),
    c = P(!1);
  var u = ur(),
    d = G(u);
  let p;
  A(d, e => I(o, e), () => k(o));
  var m = s(d, 2);
  let h;
  var v = G(m),
    y = G(v),
    C = e => {
      var t = S(),
        n = b(t);
      x(n, () => ye.errorCount, e => {
        var t = S(),
          n = b(t),
          i = e => {
            {
              let t = _(() => fe.trim());
              lr(e, {
                get siteKey() {
                  return k(t)
                },
                callback: e => be(e),
                errorCallback: () => ve()
              })
            }
          },
          s = e => {
            {
              let t = _(() => de.trim());
              $t(e, {
                get siteKey() {
                  return k(t)
                },
                get challengeContainer() {
                  return k(o)
                },
                callback: e => be(e),
                openCallback: () => I(c, !0),
                closeCallback: () => I(c, !1),
                errorCallback: () => ve()
              })
            }
          },
          u = e => {
            nr(e, {
              onsuccess: () => me(),
              get verifyingPhone() {
                return k(a)
              },
              set verifyingPhone(e) {
                I(a, e, !0)
              }
            })
          };
        l(n, e => {
          k(r) === 2 ? e(i) : k(r) === 3 ? e(s, 1) : k(r) === 4 && e(u, 2)
        }), w(e, t)
      }), w(e, t)
    };
  l(y, e => {
    i.current && e(C)
  }), L(v), L(m), H(2), L(u), te(u, () => e => {
    J(() => {
      k(n) && !e.open ? e.showModal() : !k(n) && e.open && e.close()
    })
  }), W(() => {
    p = g(d, 1, `hcaptcha-challenge-container svelte-efugoh`, null, p, {
      "is-open": k(c)
    }), h = g(m, 1, `modal-box flex max-w-sm flex-col items-center gap-4`, null, h, {
      "h-84": k(r) === 4 && !k(a)
    })
  }), V(`close`, u, () => {
    I(c, !1), he()
  }), w(e, u), f()
}
E(`<div class="flex h-full flex-col items-center justify-center gap-6"><div><!></div> <p class="max-w-3xl text-center font-medium sm:text-xl">Our servers are in maintenance. Try again later.<br/> Sorry for the inconvenience 🙇‍♂️</p></div>`);
var fr = E(`<span class="hidden"> </span> <!> <!> <!>`, 1);

function pr(e, t) {
  T(t, !0), ae(() => {
    for (let e of [`localStorage`, `sessionStorage`]) try {
      let t = window[e];
      for (let e = t.length - 1; e >= 0; --e) {
        let n = t.key(e);
        n != null && n.startsWith(`phone:`) && t.removeItem(n)
      }
    } catch {}
    let e = ke();
    De.init();
    let t = P(!1);
    J(() => {
      k(t) || Ce.data && (I(t, !0), Ae.loadTWA())
    }), ge();
    let n = Ve(async () => {
        await Ce.refresh()
      }, {
        interval: _e.hour,
        immediate: !0
      }),
      r = setInterval(() => {
        Q().catch(e => console.warn(`[sw] message failed`, e))
      }, 5e3);
    return () => {
      clearTimeout(r), e(), n(), De.cleanup()
    }
  });
  let r = `muted`;
  ae(() => {
    Te.muted = localStorage.getItem(r) === `1`
  }), J(() => {
    {
      let e = Te.muted;
      document.querySelectorAll(`audio`).forEach(t => {
        t.muted = e
      });
      for (let t of Object.values(Oe).filter(e => e instanceof Audio)) t.muted = e, e || (t.volume = .3);
      localStorage.setItem(r, Number(e).toString())
    }
  }), ae(() => {});
  var a = fr();
  V(`beforeunload`, i, () => {
    je().catch(e => console.warn(`[sw] message failed`, e))
  });
  var o = b(a),
    c = G(o);
  L(o);
  var u = s(o, 2),
    d = e => {
      var r = S(),
        i = b(r);
      n(i, () => t.children), w(e, r)
    };
  l(u, e => {
    e(d, -1)
  });
  var p = s(u, 2);
  dr(p, {}), qt(s(p, 2), {
    closeButton: !0,
    richColors: !0,
    position: `top-right`,
    class: `top-15! whitespace-pre-line!`,
    duration: 3e3
  }), W(() => B(c, `Version: 1787963367132`)), w(e, a), f()
}
export {
  pr as component, Ke as universal
};