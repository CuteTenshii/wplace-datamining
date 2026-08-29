const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../chunks/BD7KhWjt.js", "../chunks/CX37corp.js", "../chunks/uSe_RizA.js", "../chunks/C20XUcOo.js", "../chunks/Dxrfux0V.js", "../chunks/CFbOHw-6.js", "../chunks/DCvMiq9p.js", "../chunks/CrLCY2lS.js", "../chunks/Dhvlzle0.js", "../chunks/pZ_LzADz.js", "../chunks/Dl3RR1lN.js", "../chunks/Csp-PnlH.js", "../chunks/B0XUnfc9.js", "../chunks/B8UK1oE5.js", "../chunks/DlTPHpSF.js", "../chunks/DxdGK6Xj.js", "../chunks/THEy65hD.js", "../chunks/DKZrVZ-J.js", "../assets/ChallengeDialog.DDcuhl-V.css"]))) => i.map(i => d[i]);
import {
  $ as e,
  At as t,
  B as n,
  D as r,
  Dt as i,
  Et as a,
  Ft as o,
  G as s,
  H as c,
  It as l,
  J as u,
  Jt as d,
  K as f,
  Lt as p,
  Mt as m,
  O as h,
  Ot as g,
  Q as _,
  Tt as v,
  Vt as y,
  X as b,
  Xt as x,
  Yt as ee,
  Z as S,
  Zt as C,
  a as w,
  at as T,
  bt as E,
  f as te,
  it as ne,
  k as D,
  lt as O,
  nt as k,
  o as re,
  pt as ie,
  qt as A,
  r as ae,
  rn as j,
  rt as M,
  s as oe,
  sn as N,
  tt as se,
  un as ce,
  v as le,
  wt as ue,
  x as P,
  y as de,
  yt as F,
  z as I,
  zt as L
} from "../chunks/CX37corp.js";
import "../chunks/C20XUcOo.js";
import {
  a as R
} from "../chunks/CFbOHw-6.js";
import "../chunks/B8UK1oE5.js";
import "../chunks/Dxrfux0V.js";
import {
  J as z,
  S as B,
  V,
  a as H,
  n as U,
  o as W,
  q as G,
  r as fe,
  t as pe
} from "../chunks/DCvMiq9p.js";
import "../chunks/CrLCY2lS.js";
import "../chunks/Csp-PnlH.js";
import "../chunks/B_6BJNBW.js";
import {
  t as me
} from "../chunks/BbHVYbW5.js";
import {
  i as he,
  t as ge
} from "../chunks/Dhvlzle0.js";
import {
  n as K,
  s as _e,
  t as ve
} from "../chunks/BCpUBzem.js";
import {
  t as q
} from "../chunks/DlTPHpSF.js";
var ye = ce({
    prerender: () => !0
  }),
  be = Array(12).fill(0),
  J = _(`<div class="sonner-loading-bar"></div>`),
  xe = _(`<div><div class="sonner-spinner"></div></div>`);

function Se(e, t) {
  x(t, !0);
  var n = xe(),
    r = v(n);
  c(r, 23, () => be, (e, t) => `spinner-bar-${t}`, (e, t) => {
    var n = J();
    b(e, n)
  }), j(r), j(n), F(e => {
    h(n, 1, e), P(n, `data-visible`, t.visible)
  }, [() => D([`sonner-loading-wrapper`, t.class].filter(Boolean).join(` `))]), b(e, n), ee()
}
var Ce = typeof window < `u` ? window : void 0;
typeof window < `u` && window.document, typeof window < `u` && window.navigator, typeof window < `u` && window.location;

function we(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot;) {
    let e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var Y = new WeakMap,
  X = new WeakMap;
new class {
  constructor(e = {}) {
    L(this, Y, void 0), L(this, X, void 0);
    let {
      window: t = Ce,
      document: n = t == null ? void 0 : t.document
    } = e;
    t !== void 0 && (p(Y, this, n), p(X, this, y(e => {
      let n = T(t, `focusin`, e),
        r = T(t, `focusout`, e);
      return () => {
        n(), r()
      }
    })))
  }
  get current() {
    var e;
    return (e = l(X, this)) == null || e.call(this), l(Y, this) ? we(l(Y, this)) : null
  }
};
var Z = new WeakMap,
  Q = new WeakMap,
  Te = class {
    constructor(e) {
      L(this, Z, void 0), L(this, Q, void 0), p(Z, this, e), p(Q, this, Symbol(e))
    }
    get key() {
      return l(Q, this)
    }
    exists() {
      return d(l(Q, this))
    }
    get() {
      let e = A(l(Q, this));
      if (e === void 0) throw Error(`Context "${l(Z,this)}" not found`);
      return e
    }
    getOr(e) {
      let t = A(l(Q, this));
      return t === void 0 ? e : t
    }
    set(e) {
      return C(l(Q, this), e)
    }
  };
new Te(`richColorsContext`);
var Ee = new Te(`<Toaster/>`);

function De(e) {
  return e.label !== void 0
}

function Oe() {
  let e = m(g(typeof document < `u` && document.hidden));
  return E(() => T(document, `visibilitychange`, () => {
    t(e, document.hidden, !0)
  })), {
    get current() {
      return O(e)
    }
  }
}
var ke = 4e3,
  Ae = 14,
  je = 45,
  Me = 200,
  Ne = .05,
  Pe = {
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

function Fe(e) {
  let [t, n] = e.split(`-`), r = [];
  return t && r.push(t), n && r.push(n), r
}

function Ie(e) {
  return 1 / (1.5 + Math.abs(e) / 20)
}
var Le = new Set(`$$slots.$$events.$$legacy.toast.index.expanded.invert.position.visibleToasts.expandByDefault.closeButton.interacting.cancelButtonStyle.actionButtonStyle.duration.descriptionClass.classes.unstyled.loadingIcon.successIcon.errorIcon.warningIcon.closeIcon.infoIcon.defaultRichColors.swipeDirections.closeButtonAriaLabel`.split(`.`)),
  Re = _(`<div><!></div>`),
  ze = _(`<button data-close-button=""><!></button>`),
  Be = _(`<div data-icon=""><!> <!></div>`),
  Ve = _(`<div data-description=""><!></div>`),
  He = _(`<button data-button="" data-cancel=""> </button>`),
  Ue = _(`<button data-button=""> </button>`),
  We = _(`<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>`, 1),
  Ge = _(`<li data-sonner-toast=""><!> <!></li>`);

function Ke(e, c) {
  x(c, !0);
  let l = e => {
      var t = S(),
        r = a(t),
        i = e => {
          var t = Re(),
            r = v(t);
          n(r, () => c.loadingIcon), j(t), F(e => {
            h(t, 1, e), P(t, `data-visible`, O(U) === `loading`)
          }, [() => {
            var e, t;
            return D(W((e = O(J)) == null ? void 0 : e.loader, (t = c.toast) == null || (t = t.classes) == null ? void 0 : t.loader, `sonner-loader`))
          }]), b(e, t)
        },
        l = e => {
          {
            let t = o(() => {
                var e, t;
                return W((e = O(J)) == null ? void 0 : e.loader, (t = c.toast.classes) == null ? void 0 : t.loader)
              }),
              n = o(() => O(U) === `loading`);
            Se(e, {
              get class() {
                return O(t)
              },
              get visible() {
                return O(n)
              }
            })
          }
        };
      s(r, e => {
        c.loadingIcon ? e(i) : e(l, -1)
      }), b(e, t)
    },
    d = w(c, `cancelButtonStyle`, 3, ``),
    f = w(c, `actionButtonStyle`, 3, ``),
    p = w(c, `descriptionClass`, 3, ``),
    g = w(c, `unstyled`, 3, !1),
    _ = w(c, `defaultRichColors`, 3, !1);
  re(c, Le);
  let y = {
      ...Pe
    },
    C = m(!1),
    T = m(!1),
    k = m(!1),
    A = m(!1),
    ce = m(!1),
    le = m(0),
    ue = m(0),
    de = c.toast.duration || c.duration || ke,
    L = m(void 0),
    R = m(null),
    z = m(null),
    B = o(() => c.index === 0),
    V = o(() => c.index + 1 <= c.visibleToasts),
    U = o(() => c.toast.type),
    G = o(() => c.toast.dismissable !== !1),
    fe = o(() => c.toast.class || ``),
    pe = o(() => c.toast.descriptionClass || ``),
    me = o(() => H.heights.findIndex(e => e.toastId === c.toast.id) || 0),
    he = o(() => c.toast.closeButton ?? c.closeButton),
    ge = o(() => c.toast.duration ?? c.duration ?? ke),
    K = null,
    _e = o(() => c.position.split(`-`)),
    ve = o(() => H.heights.reduce((e, t, n) => n >= O(me) ? e : e + t.height, 0)),
    q = Oe(),
    ye = o(() => c.toast.invert || c.invert),
    be = o(() => O(U) === `loading`),
    J = o(() => ({
      ...y,
      ...c.classes
    })),
    xe = o(() => c.toast.title),
    Ce = o(() => c.toast.description),
    we = m(0),
    Y = m(0),
    X = o(() => Math.round(O(me) * Ae + O(ve)));
  E(() => {
    O(xe), O(Ce);
    let e;
    e = c.expanded || c.expandByDefault ? 1 : 1 - c.index * Ne;
    let n = ie(() => O(L));
    if (n === void 0) return;
    n.style.setProperty(`height`, `auto`);
    let r = n.offsetHeight,
      i = n.getBoundingClientRect().height,
      a = Math.round(i / e + 2 ** -52 & 100) / 100;
    n.style.removeProperty(`height`);
    let o;
    o = Math.abs(a - r) < 1 ? a : r, t(ue, o, !0), ie(() => {
      H.setHeight({
        toastId: c.toast.id,
        height: o
      })
    })
  });

  function Z() {
    t(T, !0), t(le, O(X), !0), H.removeHeight(c.toast.id), setTimeout(() => {
      H.remove(c.toast.id)
    }, Me)
  }
  let Q, Te = o(() => c.toast.promise && O(U) === `loading` || c.toast.duration === 1 / 0);

  function Ee() {
    t(we, new Date().getTime(), !0), Q = setTimeout(() => {
      var e, t;
      (e = (t = c.toast).onAutoClose) == null || e.call(t, c.toast), Z()
    }, de)
  }

  function Ke() {
    if (O(Y) < O(we)) {
      let e = new Date().getTime() - O(we);
      de -= e
    }
    t(Y, new Date().getTime(), !0)
  }
  E(() => {
    c.toast.updated && (clearTimeout(Q), de = O(ge), Ee())
  }), E(() => (O(Te) || (c.expanded || c.interacting || q.current ? Ke() : Ee()), () => clearTimeout(Q))), ae(() => {
    var e;
    t(C, !0);
    let n = (e = O(L)) == null ? void 0 : e.getBoundingClientRect().height;
    return t(ue, n, !0), H.setHeight({
      toastId: c.toast.id,
      height: n
    }), () => {
      H.removeHeight(c.toast.id)
    }
  }), E(() => {
    c.toast.delete && ie(() => {
      var e, t;
      Z(), (e = (t = c.toast).onDismiss) == null || e.call(t, c.toast)
    })
  });
  let qe = e => {
      if (O(be)) return;
      t(le, O(X), !0);
      let n = e.target;
      n.setPointerCapture(e.pointerId), n.tagName !== `BUTTON` && (t(k, !0), K = {
        x: e.clientX,
        y: e.clientY
      })
    },
    Je = () => {
      var e, n;
      if (O(A) || !O(G)) return;
      K = null;
      let r = Number(((e = O(L)) == null ? void 0 : e.style.getPropertyValue(`--swipe-amount-x`).replace(`px`, ``)) || 0),
        i = Number(((n = O(L)) == null ? void 0 : n.style.getPropertyValue(`--swipe-amount-y`).replace(`px`, ``)) || 0),
        a = new Date().getTime() - 0,
        o = O(R) === `x` ? r : i,
        s = Math.abs(o) / a;
      if (Math.abs(o) >= je || s > .11) {
        var l, u;
        t(le, O(X), !0), (l = (u = c.toast).onDismiss) == null || l.call(u, c.toast), O(R) === `x` ? t(z, r > 0 ? `right` : `left`, !0) : t(z, i > 0 ? `down` : `up`, !0), Z(), t(A, !0);
        return
      }
      var d, f;
      (d = O(L)) == null || d.style.setProperty(`--swipe-amount-x`, `0px`), (f = O(L)) == null || f.style.setProperty(`--swipe-amount-y`, `0px`), t(ce, !1), t(k, !1), t(R, null)
    },
    Ye = e => {
      var n, r, i;
      if (!K || !O(G) || (((n = window.getSelection()) == null ? void 0 : n.toString().length) ?? -1) > 0) return;
      let a = e.clientY - K.y,
        o = e.clientX - K.x,
        s = c.swipeDirections ?? Fe(c.position);
      !O(R) && (Math.abs(o) > 1 || Math.abs(a) > 1) && t(R, Math.abs(o) > Math.abs(a) ? `x` : `y`, !0);
      let l = {
        x: 0,
        y: 0
      };
      if (O(R) === `y`) {
        if (s.includes(`top`) || s.includes(`bottom`)) {
          if (s.includes(`top`) && a < 0 || s.includes(`bottom`) && a > 0) l.y = a;
          else {
            let e = a * Ie(a);
            l.y = Math.abs(e) < Math.abs(a) ? e : a
          }
        }
      } else if (O(R) === `x` && (s.includes(`left`) || s.includes(`right`))) {
        if (s.includes(`left`) && o < 0 || s.includes(`right`) && o > 0) l.x = o;
        else {
          let e = o * Ie(o);
          l.x = Math.abs(e) < Math.abs(o) ? e : o
        }
      }(Math.abs(l.x) > 0 || Math.abs(l.y) > 0) && t(ce, !0), (r = O(L)) == null || r.style.setProperty(`--swipe-amount-x`, `${l.x}px`), (i = O(L)) == null || i.style.setProperty(`--swipe-amount-y`, `${l.y}px`)
    },
    Xe = () => {
      t(k, !1), t(R, null), K = null
    },
    Ze = o(() => c.toast.icon ? c.toast.icon : O(U) === `success` ? c.successIcon : O(U) === `error` ? c.errorIcon : O(U) === `warning` ? c.warningIcon : O(U) === `info` ? c.infoIcon : O(U) === `loading` ? c.loadingIcon : null);
  var $ = Ge();
  P($, `tabindex`, 0);
  let Qe;
  var $e = v($),
    et = e => {
      var t = ze(),
        r = v(t);
      n(r, () => c.closeIcon ?? N), j(t), F(e => {
        P(t, `aria-label`, c.closeButtonAriaLabel), P(t, `data-disabled`, O(be)), h(t, 1, e)
      }, [() => {
        var e, t;
        return D(W((e = O(J)) == null ? void 0 : e.closeButton, (t = c.toast) == null || (t = t.classes) == null ? void 0 : t.closeButton))
      }]), M(`click`, t, () => {
        var e, t;
        O(be) || !O(G) || (Z(), (e = (t = c.toast).onDismiss) == null || e.call(t, c.toast))
      }), b(e, t)
    };
  s($e, e => {
    O(he) && !c.toast.component && O(U) !== `loading` && c.closeIcon !== null && e(et)
  });
  var tt = i($e, 2),
    nt = e => {
      let t = o(() => c.toast.component);
      var n = S(),
        r = a(n);
      I(r, () => O(t), (e, t) => {
        t(e, oe(() => c.toast.componentProps, {
          closeToast: Z
        }))
      }), b(e, n)
    },
    rt = e => {
      var t = We(),
        m = a(t),
        g = e => {
          var t = Be(),
            r = v(t),
            o = e => {
              var t = S(),
                n = a(t),
                r = e => {
                  var t = S(),
                    n = a(t);
                  I(n, () => c.toast.icon, (e, t) => {
                    t(e, {})
                  }), b(e, t)
                },
                i = e => {
                  l(e)
                };
              s(n, e => {
                c.toast.icon ? e(r) : e(i, -1)
              }), b(e, t)
            };
          s(r, e => {
            (c.toast.promise || O(U) === `loading`) && e(o)
          });
          var u = i(r, 2),
            d = e => {
              var t = S(),
                r = a(t),
                i = e => {
                  var t = S(),
                    n = a(t);
                  I(n, () => c.toast.icon, (e, t) => {
                    t(e, {})
                  }), b(e, t)
                },
                o = e => {
                  var t = S(),
                    r = a(t);
                  n(r, () => c.successIcon ?? N), b(e, t)
                },
                l = e => {
                  var t = S(),
                    r = a(t);
                  n(r, () => c.errorIcon ?? N), b(e, t)
                },
                u = e => {
                  var t = S(),
                    r = a(t);
                  n(r, () => c.warningIcon ?? N), b(e, t)
                },
                d = e => {
                  var t = S(),
                    r = a(t);
                  n(r, () => c.infoIcon ?? N), b(e, t)
                };
              s(r, e => {
                c.toast.icon ? e(i) : O(U) === `success` ? e(o, 1) : O(U) === `error` ? e(l, 2) : O(U) === `warning` ? e(u, 3) : O(U) === `info` && e(d, 4)
              }), b(e, t)
            };
          s(u, e => {
            c.toast.type !== `loading` && e(d)
          }), j(t), F(e => h(t, 1, e), [() => {
            var e, t;
            return D(W((e = O(J)) == null ? void 0 : e.icon, (t = c.toast) == null || (t = t.classes) == null ? void 0 : t.icon))
          }]), b(e, t)
        };
      s(m, e => {
        (O(U) || c.toast.icon || c.toast.promise) && c.toast.icon !== null && (O(Ze) !== null || c.toast.icon) && e(g)
      });
      var _ = i(m, 2),
        y = v(_),
        x = v(y),
        ee = e => {
          var t = S(),
            n = a(t),
            r = e => {
              let t = o(() => c.toast.title);
              var n = S(),
                r = a(n);
              I(r, () => O(t), (e, t) => {
                t(e, oe(() => c.toast.componentProps))
              }), b(e, n)
            },
            i = e => {
              var t = se();
              F(() => u(t, c.toast.title)), b(e, t)
            };
          s(n, e => {
            typeof c.toast.title == `string` ? e(i, -1) : e(r)
          }), b(e, t)
        };
      s(x, e => {
        c.toast.title && e(ee)
      }), j(y);
      var C = i(y, 2),
        w = e => {
          var t = Ve(),
            n = v(t),
            r = e => {
              let t = o(() => c.toast.description);
              var n = S(),
                r = a(n);
              I(r, () => O(t), (e, t) => {
                t(e, oe(() => c.toast.componentProps))
              }), b(e, n)
            },
            i = e => {
              var t = se();
              F(() => u(t, c.toast.description)), b(e, t)
            };
          s(n, e => {
            typeof c.toast.description == `string` ? e(i, -1) : e(r)
          }), j(t), F(e => h(t, 1, e), [() => {
            var e, t;
            return D(W(p(), O(pe), (e = O(J)) == null ? void 0 : e.description, (t = c.toast.classes) == null ? void 0 : t.description))
          }]), b(e, t)
        };
      s(C, e => {
        c.toast.description && e(w)
      }), j(_);
      var T = i(_, 2),
        E = e => {
          var t = S(),
            n = a(t),
            i = e => {
              var t = S(),
                n = a(t);
              I(n, () => c.toast.cancel, (e, t) => {
                t(e, {})
              }), b(e, t)
            },
            l = e => {
              var t = He(),
                n = v(t, !0);
              j(t), F(e => {
                r(t, c.toast.cancelButtonStyle ?? d()), h(t, 1, e), u(n, c.toast.cancel.label)
              }, [() => {
                var e, t;
                return D(W((e = O(J)) == null ? void 0 : e.cancelButton, (t = c.toast) == null || (t = t.classes) == null ? void 0 : t.cancelButton))
              }]), M(`click`, t, e => {
                var t, n;
                De(c.toast.cancel) && O(G) && ((t = c.toast.cancel) == null || (n = t.onClick) == null || n.call(t, e), Z())
              }), b(e, t)
            },
            f = o(() => De(c.toast.cancel));
          s(n, e => {
            typeof c.toast.cancel == `function` ? e(i) : O(f) && e(l, 1)
          }), b(e, t)
        };
      s(T, e => {
        c.toast.cancel && e(E)
      });
      var te = i(T, 2),
        ne = e => {
          var t = S(),
            n = a(t),
            i = e => {
              var t = S(),
                n = a(t);
              I(n, () => c.toast.action, (e, t) => {
                t(e, {})
              }), b(e, t)
            },
            l = e => {
              var t = Ue(),
                n = v(t, !0);
              j(t), F(e => {
                r(t, c.toast.actionButtonStyle ?? f()), h(t, 1, e), u(n, c.toast.action.label)
              }, [() => {
                var e, t;
                return D(W((e = O(J)) == null ? void 0 : e.actionButton, (t = c.toast) == null || (t = t.classes) == null ? void 0 : t.actionButton))
              }]), M(`click`, t, e => {
                var t;
                De(c.toast.action) && ((t = c.toast.action) == null || t.onClick(e), !e.defaultPrevented && Z())
              }), b(e, t)
            },
            d = o(() => De(c.toast.action));
          s(n, e => {
            typeof c.toast.action == `function` ? e(i) : O(d) && e(l, 1)
          }), b(e, t)
        };
      s(te, e => {
        c.toast.action && e(ne)
      }), F(e => h(y, 1, e), [() => {
        var e, t;
        return D(W((e = O(J)) == null ? void 0 : e.title, (t = c.toast) == null || (t = t.classes) == null ? void 0 : t.title))
      }]), b(e, t)
    };
  s(tt, e => {
    c.toast.component ? e(nt) : e(rt, -1)
  }), j($), te($, e => t(L, e), () => O(L)), F((e, t, n) => {
    h($, 1, e), P($, `data-rich-colors`, c.toast.richColors ?? _()), P($, `data-styled`, !(c.toast.component || c.toast.unstyled || g())), P($, `data-mounted`, O(C)), P($, `data-promise`, t), P($, `data-swiped`, O(ce)), P($, `data-removed`, O(T)), P($, `data-visible`, O(V)), P($, `data-y-position`, O(_e)[0]), P($, `data-x-position`, O(_e)[1]), P($, `data-index`, c.index), P($, `data-front`, O(B)), P($, `data-swiping`, O(k)), P($, `data-dismissable`, O(G)), P($, `data-type`, O(U)), P($, `data-invert`, O(ye)), P($, `data-swipe-out`, O(A)), P($, `data-swipe-direction`, O(z)), P($, `data-expanded`, n), Qe = r($, `${c.style} ${c.toast.style}`, Qe, {
      "--index": c.index,
      "--toasts-before": c.index,
      "--z-index": H.toasts.length - c.index,
      "--offset": `${O(T)?O(le):O(X)}px`,
      "--initial-height": c.expandByDefault ? `auto` : `${O(ue)}px`
    })
  }, [() => {
    var e, t, n, r;
    return D(W(c.class, O(fe), (e = O(J)) == null ? void 0 : e.toast, (t = c.toast) == null || (t = t.classes) == null ? void 0 : t.toast, (n = O(J)) == null ? void 0 : n[O(U)], (r = c.toast) == null || (r = r.classes) == null ? void 0 : r[O(U)]))
  }, () => !!c.toast.promise, () => !!(c.expanded || c.expandByDefault && O(C))]), M(`pointermove`, $, Ye), M(`pointerup`, $, Je), M(`pointerdown`, $, qe), ne(`dragend`, $, Xe), b(e, $), ee()
}
k([`pointermove`, `pointerup`, `pointerdown`, `click`]);
var qe = e(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`);

function Je(e) {
  var t = qe();
  b(e, t)
}
var Ye = e(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`);

function Xe(e) {
  var t = Ye();
  b(e, t)
}
var Ze = e(`<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`);

function $(e) {
  var t = Ze();
  b(e, t)
}
var Qe = e(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`);

function $e(e) {
  var t = Qe();
  b(e, t)
}
var et = e(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);

function tt(e) {
  var t = et();
  b(e, t)
}
var nt = 3,
  rt = `24px`,
  it = `16px`,
  at = 4e3,
  ot = 356,
  st = 14,
  ct = `dark`,
  lt = `light`;

function ut(e, t) {
  let n = {};
  return [e, t].forEach((e, t) => {
    let r = t === 1,
      i = r ? `--mobile-offset` : `--offset`,
      a = r ? it : rt;

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
var dt = new Set(`$$slots.$$events.$$legacy.invert.position.hotkey.expand.closeButton.offset.mobileOffset.theme.richColors.duration.visibleToasts.toastOptions.dir.gap.loadingIcon.successIcon.errorIcon.warningIcon.closeIcon.infoIcon.containerAriaLabel.class.closeButtonAriaLabel.onblur.onfocus.onmouseenter.onmousemove.onmouseleave.ondragend.onpointerdown.onpointerup`.split(`.`)),
  ft = _(`<ol></ol>`),
  pt = _(`<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-wiukfn"><!></section>`);

function mt(e, r) {
  x(r, !0);

  function i(e) {
    return e === `system` ? typeof window < `u` && window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches ? ct : lt : e
  }
  let l = w(r, `invert`, 3, !1),
    u = w(r, `position`, 3, `bottom-right`),
    d = w(r, `hotkey`, 19, () => [`altKey`, `KeyT`]),
    f = w(r, `expand`, 3, !1),
    p = w(r, `closeButton`, 3, !1),
    h = w(r, `offset`, 3, rt),
    _ = w(r, `mobileOffset`, 3, it),
    y = w(r, `theme`, 3, `light`),
    C = w(r, `richColors`, 3, !1),
    ne = w(r, `duration`, 3, at),
    D = w(r, `visibleToasts`, 3, nt),
    k = w(r, `toastOptions`, 19, () => ({})),
    A = w(r, `dir`, 7, `auto`),
    M = w(r, `gap`, 3, st),
    oe = w(r, `containerAriaLabel`, 3, `Notifications`),
    se = w(r, `closeButtonAriaLabel`, 3, `Close toast`),
    ce = re(r, dt);

  function ue() {
    if (A() !== `auto`) return A();
    if (typeof window > `u` || typeof document > `u`) return `ltr`;
    let e = document.documentElement.getAttribute(`dir`);
    return e === `auto` || !e ? (ie(() => A(window.getComputedStyle(document.documentElement).direction ?? `ltr`)), A()) : (ie(() => A(e)), e)
  }
  let I = o(() => Array.from(new Set([u(), ...H.toasts.filter(e => e.position).map(e => e.position)].filter(Boolean)))),
    L = m(!1),
    R = m(!1),
    z = m(g(i(y()))),
    B = m(void 0),
    V = m(null),
    U = m(!1),
    W = o(() => d().join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``));
  E(() => {
    H.toasts.length <= 1 && t(L, !1)
  }), E(() => {
    let e = H.toasts.filter(e => e.dismiss && !e.delete);
    if (e.length > 0) {
      let t = H.toasts.map(t => e.find(e => e.id === t.id) ? {
        ...t,
        delete: !0
      } : t);
      H.toasts = t
    }
  }), E(() => () => {
    O(B) && O(V) && (O(V).focus({
      preventScroll: !0
    }), t(V, null), t(U, !1))
  }), ae(() => (H.reset(), T(document, `keydown`, e => {
    var n;
    if (d().every(t => e[t] || e.code === t)) {
      var r;
      t(L, !0), (r = O(B)) == null || r.focus()
    }
    e.code === `Escape` && (document.activeElement === O(B) || (n = O(B)) != null && n.contains(document.activeElement)) && t(L, !1)
  }))), E(() => {
    if (y() !== `system` && t(z, y()), typeof window < `u`) {
      y() === `system` && (window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches ? t(z, ct) : t(z, lt));
      let e = window.matchMedia(`(prefers-color-scheme: dark)`),
        n = ({
          matches: e
        }) => {
          t(z, e ? ct : lt, !0)
        };
      `addEventListener` in e ? e.addEventListener(`change`, n) : e.addListener(n)
    }
  });
  let G = e => {
      var n;
      (n = r.onblur) == null || n.call(r, e), O(U) && !e.currentTarget.contains(e.relatedTarget) && (t(U, !1), O(V) && (O(V).focus({
        preventScroll: !0
      }), t(V, null)))
    },
    pe = e => {
      var n;
      (n = r.onfocus) == null || n.call(r, e), !(e.target instanceof HTMLElement && e.target.dataset.dismissable === `false`) && (O(U) || (t(U, !0), t(V, e.relatedTarget, !0)))
    },
    me = e => {
      var n;
      (n = r.onpointerdown) == null || n.call(r, e), !(e.target instanceof HTMLElement && e.target.dataset.dismissable === `false`) && t(R, !0)
    },
    he = e => {
      var n;
      (n = r.onmouseenter) == null || n.call(r, e), t(L, !0)
    },
    ge = e => {
      var n;
      (n = r.onmouseleave) == null || n.call(r, e), O(R) || t(L, !1)
    },
    K = e => {
      var n;
      (n = r.onmousemove) == null || n.call(r, e), t(L, !0)
    },
    _e = e => {
      var n;
      (n = r.ondragend) == null || n.call(r, e), t(L, !1)
    },
    ve = e => {
      var n;
      (n = r.onpointerup) == null || n.call(r, e), t(R, !1)
    };
  Ee.set(new fe);
  var q = pt();
  P(q, `tabindex`, -1);
  var ye = v(q),
    be = e => {
      var i = S(),
        u = a(i);
      c(u, 18, () => O(I), e => e, (e, i, u, d) => {
        let m = o(() => {
            let [e, t] = i.split(`-`);
            return {
              y: e,
              x: t
            }
          }),
          g = o(() => ut(h(), _()));
        var v = ft();
        de(v, e => {
          var t;
          return {
            tabindex: -1,
            dir: e,
            class: r.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": O(z),
            "data-y-position": O(m).y,
            "data-x-position": O(m).x,
            style: r.style,
            onblur: G,
            onfocus: pe,
            onmouseenter: he,
            onmousemove: K,
            onmouseleave: ge,
            ondragend: _e,
            onpointerdown: me,
            onpointerup: ve,
            ...ce,
            [le]: {
              "--front-toast-height": `${(t=H.heights[0])==null?void 0:t.height}px`,
              "--width": `${ot}px`,
              "--gap": `${M()}px`,
              "--offset-top": O(g)[`--offset-top`],
              "--offset-right": O(g)[`--offset-right`],
              "--offset-bottom": O(g)[`--offset-bottom`],
              "--offset-left": O(g)[`--offset-left`],
              "--mobile-offset-top": O(g)[`--mobile-offset-top`],
              "--mobile-offset-right": O(g)[`--mobile-offset-right`],
              "--mobile-offset-bottom": O(g)[`--mobile-offset-bottom`],
              "--mobile-offset-left": O(g)[`--mobile-offset-left`]
            }
          }
        }, [() => ue()], void 0, void 0, `svelte-wiukfn`), c(v, 23, () => H.toasts.filter(e => !e.position && O(u) === 0 || e.position === i), e => e.id, (e, t, c, u) => {
          {
            let u = e => {
                var t = S(),
                  i = a(t),
                  o = e => {
                    var t = S(),
                      i = a(t);
                    n(i, () => r.successIcon ?? N), b(e, t)
                  },
                  c = e => {
                    Je(e, {})
                  };
                s(i, e => {
                  r.successIcon ? e(o) : r.successIcon !== null && e(c, 1)
                }), b(e, t)
              },
              d = e => {
                var t = S(),
                  i = a(t),
                  o = e => {
                    var t = S(),
                      i = a(t);
                    n(i, () => r.errorIcon ?? N), b(e, t)
                  },
                  c = e => {
                    Xe(e, {})
                  };
                s(i, e => {
                  r.errorIcon ? e(o) : r.errorIcon !== null && e(c, 1)
                }), b(e, t)
              },
              m = e => {
                var t = S(),
                  i = a(t),
                  o = e => {
                    var t = S(),
                      i = a(t);
                    n(i, () => r.warningIcon ?? N), b(e, t)
                  },
                  c = e => {
                    $(e, {})
                  };
                s(i, e => {
                  r.warningIcon ? e(o) : r.warningIcon !== null && e(c, 1)
                }), b(e, t)
              },
              h = e => {
                var t = S(),
                  i = a(t),
                  o = e => {
                    var t = S(),
                      i = a(t);
                    n(i, () => r.infoIcon ?? N), b(e, t)
                  },
                  c = e => {
                    $e(e, {})
                  };
                s(i, e => {
                  r.infoIcon ? e(o) : r.infoIcon !== null && e(c, 1)
                }), b(e, t)
              },
              g = e => {
                var t = S(),
                  i = a(t),
                  o = e => {
                    var t = S(),
                      i = a(t);
                    n(i, () => r.closeIcon ?? N), b(e, t)
                  },
                  c = e => {
                    tt(e, {})
                  };
                s(i, e => {
                  r.closeIcon ? e(o) : r.closeIcon !== null && e(c, 1)
                }), b(e, t)
              },
              _ = o(() => {
                var e;
                return ((e = k()) == null ? void 0 : e.duration) ?? ne()
              }),
              v = o(() => {
                var e;
                return ((e = k()) == null ? void 0 : e.class) ?? ``
              }),
              y = o(() => {
                var e;
                return ((e = k()) == null ? void 0 : e.descriptionClass) || ``
              }),
              x = o(() => {
                var e;
                return ((e = k()) == null ? void 0 : e.style) ?? ``
              }),
              ee = o(() => k().classes || {}),
              w = o(() => k().unstyled ?? !1),
              T = o(() => {
                var e;
                return ((e = k()) == null ? void 0 : e.cancelButtonStyle) ?? ``
              }),
              E = o(() => {
                var e;
                return ((e = k()) == null ? void 0 : e.actionButtonStyle) ?? ``
              }),
              te = o(() => {
                var e;
                return ((e = k()) == null ? void 0 : e.closeButtonAriaLabel) ?? se()
              });
            Ke(e, {
              get index() {
                return O(c)
              },
              get toast() {
                return O(t)
              },
              get defaultRichColors() {
                return C()
              },
              get duration() {
                return O(_)
              },
              get class() {
                return O(v)
              },
              get descriptionClass() {
                return O(y)
              },
              get invert() {
                return l()
              },
              get visibleToasts() {
                return D()
              },
              get closeButton() {
                return p()
              },
              get interacting() {
                return O(R)
              },
              get position() {
                return i
              },
              get style() {
                return O(x)
              },
              get classes() {
                return O(ee)
              },
              get unstyled() {
                return O(w)
              },
              get cancelButtonStyle() {
                return O(T)
              },
              get actionButtonStyle() {
                return O(E)
              },
              get closeButtonAriaLabel() {
                return O(te)
              },
              get expandByDefault() {
                return f()
              },
              get expanded() {
                return O(L)
              },
              get loadingIcon() {
                return r.loadingIcon
              },
              successIcon: u,
              errorIcon: d,
              warningIcon: m,
              infoIcon: h,
              closeIcon: g,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), j(v), te(v, e => t(B, e), () => O(B)), F(() => v.dir = v.dir), b(e, v)
      }), b(e, i)
    };
  s(ye, e => {
    H.toasts.length > 0 && e(be)
  }), j(q), F(() => P(q, `aria-label`, `${oe()??``} ${O(W)??``}`)), b(e, q), ee()
}
var ht = _(`<span class="hidden"> </span> <!> <!> <!>`, 1);

function gt(e, r) {
  x(r, !0);
  let o = q(() => V.current !== null);
  ae(() => {
    for (let e of [`localStorage`, `sessionStorage`]) try {
      let t = window[e];
      for (let e = t.length - 1; e >= 0; --e) {
        let n = t.key(e);
        n != null && n.startsWith(`phone:`) && t.removeItem(n)
      }
    } catch {}
    let e = he();
    pe.init();
    let n = m(!1);
    E(() => {
      O(n) || U.data && ge() && (t(n, !0), R(async () => {
        let {
          TWAServices: e
        } = await import(`../chunks/BD7KhWjt.js`).then(e => e.i);
        return {
          TWAServices: e
        }
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), import.meta.url).then(({
        TWAServices: e
      }) => e.loadTWA()))
    }), z();
    let r = ve(async () => {
        await U.refresh()
      }, {
        interval: B.hour,
        immediate: !0
      }),
      i = setInterval(() => {
        _e().catch(e => console.warn(`[sw] message failed`, e))
      }, 5e3);
    return () => {
      clearTimeout(i), e(), r(), pe.cleanup()
    }
  });
  let c = `muted`;
  ae(() => {
    G.muted = localStorage.getItem(c) === `1`
  }), E(() => {
    {
      let e = G.muted;
      document.querySelectorAll(`audio`).forEach(t => {
        t.muted = e
      });
      for (let t of Object.values(me).filter(e => e instanceof Audio)) t.muted = e, e || (t.volume = .3);
      localStorage.setItem(c, Number(e).toString())
    }
  }), ae(() => {});
  var l = ht();
  ne(`beforeunload`, ue, () => {
    K().catch(e => console.warn(`[sw] message failed`, e))
  });
  var d = a(l),
    p = v(d);
  j(d);
  var h = i(d, 2),
    g = e => {
      var t = S(),
        i = a(t);
      n(i, () => r.children), b(e, t)
    };
  s(h, e => {
    e(g, -1)
  });
  var _ = i(h, 2),
    y = e => {
      var t = S(),
        n = a(t);
      f(n, () => R(() => import(`../chunks/B0XUnfc9.js`), __vite__mapDeps([12, 1, 5, 13, 4, 6, 7, 11, 14, 15, 16, 17, 18]), import.meta.url), null, (e, t) => {
        var n = S(),
          r = a(n);
        I(r, () => O(t).default, (e, t) => {
          t(e, {})
        }), b(e, n)
      }), b(e, t)
    };
  s(_, e => {
    o.current && e(y)
  }), mt(i(_, 2), {
    closeButton: !0,
    richColors: !0,
    position: `top-right`,
    class: `top-15! whitespace-pre-line!`,
    duration: 3e3
  }), F(() => u(p, `Version: 1788034400326`)), b(e, l), ee()
}
export {
  gt as component, ye as universal
};