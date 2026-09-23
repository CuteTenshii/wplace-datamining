const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../chunks/CW4zkRza.js", "../chunks/DhUcoEdH.js", "../chunks/B2sETd8W.js", "../chunks/BsiAA4oX.js", "../chunks/DMTK6sCJ.js", "../chunks/CHe4uXhz.js", "../chunks/CSDtLXWh.js", "../chunks/CYIac1OM.js", "../chunks/Cv4aghc9.js", "../chunks/DlbuwGBh.js", "../chunks/BKXYuc3v.js", "../chunks/CSf7G82M.js", "../chunks/B8UK1oE5.js", "../chunks/CFdaKzAe.js", "../chunks/DxdGK6Xj.js", "../chunks/B1BL8VYs.js", "../chunks/bVaH9Nps.js", "../assets/ChallengeDialog.DDcuhl-V.css"]))) => i.map(i => d[i]);
import {
  $ as e,
  At as t,
  B as n,
  Ct as r,
  D as i,
  E as a,
  Et as o,
  Ft as s,
  Gt as c,
  J as l,
  Jt as u,
  K as d,
  Kt as ee,
  L as f,
  Lt as p,
  Nt as m,
  O as h,
  Ot as g,
  Pt as _,
  R as v,
  St as te,
  Tt as y,
  U as b,
  W as ne,
  X as x,
  Y as S,
  Yt as C,
  Z as w,
  _ as T,
  _t as E,
  a as D,
  an as O,
  b as k,
  cn as re,
  d as ie,
  dt as ae,
  et as oe,
  nt as se,
  o as ce,
  qt as le,
  r as A,
  rt as j,
  s as ue,
  st as M,
  tn as N,
  tt as P,
  v as de,
  vt as F,
  wt as I,
  zt as L
} from "../chunks/DhUcoEdH.js";
import {
  S as R,
  x as z,
  y as B
} from "../chunks/B2sETd8W.js";
import {
  a as V
} from "../chunks/DMTK6sCJ.js";
import "../chunks/B8UK1oE5.js";
import {
  M as H,
  Ot as U,
  _t as fe,
  a as W,
  at as pe,
  b as me,
  dt as G,
  f as he,
  i as K,
  m as ge,
  n as q,
  o as J,
  p as _e,
  r as ve,
  t as ye,
  y as Y
} from "../chunks/BsiAA4oX.js";
import {
  t as be
} from "../chunks/CHe4uXhz.js";
import "../chunks/CSDtLXWh.js";
import "../chunks/DJZeduIV.js";
import {
  c as xe,
  l as Se,
  n as Ce,
  t as X
} from "../chunks/Cc-54tlG.js";
import {
  t as Z
} from "../chunks/Cv4aghc9.js";
import {
  i as we,
  t as Te
} from "../chunks/CYIac1OM.js";
import {
  t as Ee
} from "../chunks/CFdaKzAe.js";
var De = re({
    prerender: () => !0
  }),
  Oe = Array(12).fill(0),
  ke = x(`<div class="sonner-loading-bar"></div>`),
  Ae = x(`<div><div class="sonner-spinner"></div></div>`);

function je(e, t) {
  u(t, !0);
  var a = Ae(),
    o = r(a);
  n(o, 23, () => Oe, (e, t) => `spinner-bar-${t}`, (e, t) => {
    var n = ke();
    l(e, n)
  }), N(o), N(a), E(e => {
    i(a, 1, e), k(a, `data-visible`, t.visible)
  }, [() => h([`sonner-loading-wrapper`, t.class].filter(Boolean).join(` `))]), l(e, a), le()
}
var Me = typeof window < `u` ? window : void 0;
typeof window < `u` && window.document, typeof window < `u` && window.navigator, typeof window < `u` && window.location;

function Ne(e) {
  let t = e.activeElement;
  for (; t != null && t.shadowRoot;) {
    let e = t.shadowRoot.activeElement;
    if (e === t) break;
    t = e
  }
  return t
}
var Q = new WeakMap,
  Pe = new WeakMap;
new class {
  constructor(e = {}) {
    p(this, Q, void 0), p(this, Pe, void 0);
    let {
      window: t = Me,
      document: n = t == null ? void 0 : t.document
    } = e;
    t !== void 0 && (s(Q, this, n), s(Pe, this, L(e => {
      let n = j(t, `focusin`, e),
        r = j(t, `focusout`, e);
      return () => {
        n(), r()
      }
    })))
  }
  get current() {
    var e;
    return (e = _(Pe, this)) == null || e.call(this), _(Q, this) ? Ne(_(Q, this)) : null
  }
};
var Fe = new WeakMap,
  $ = new WeakMap,
  Ie = class {
    constructor(e) {
      p(this, Fe, void 0), p(this, $, void 0), s(Fe, this, e), s($, this, Symbol(e))
    }
    get key() {
      return _($, this)
    }
    exists() {
      return ee(_($, this))
    }
    get() {
      let e = c(_($, this));
      if (e === void 0) throw Error(`Context "${_(Fe,this)}" not found`);
      return e
    }
    getOr(e) {
      let t = c(_($, this));
      return t === void 0 ? e : t
    }
    set(e) {
      return C(_($, this), e)
    }
  };
new Ie(`richColorsContext`);
var Le = new Ie(`<Toaster/>`);

function Re(e) {
  return e.label !== void 0
}

function ze() {
  let e = t(o(typeof document < `u` && document.hidden));
  return F(() => j(document, `visibilitychange`, () => {
    g(e, document.hidden, !0)
  })), {
    get current() {
      return M(e)
    }
  }
}
var Be = 4e3,
  Ve = 14,
  He = 45,
  Ue = 200,
  We = .05,
  Ge = {
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

function Ke(e) {
  let [t, n] = e.split(`-`), r = [];
  return t && r.push(t), n && r.push(n), r
}

function qe(e) {
  return 1 / (1.5 + Math.abs(e) / 20)
}
var Je = new Set(`$$slots.$$events.$$legacy.toast.index.expanded.invert.position.visibleToasts.expandByDefault.closeButton.interacting.cancelButtonStyle.actionButtonStyle.duration.descriptionClass.classes.unstyled.loadingIcon.successIcon.errorIcon.warningIcon.closeIcon.infoIcon.defaultRichColors.swipeDirections.closeButtonAriaLabel`.split(`.`)),
  Ye = x(`<div><!></div>`),
  Xe = x(`<button data-close-button=""><!></button>`),
  Ze = x(`<div data-icon=""><!> <!></div>`),
  Qe = x(`<div data-description=""><!></div>`),
  $e = x(`<button data-button="" data-cancel=""> </button>`),
  et = x(`<button data-button=""> </button>`),
  tt = x(`<!> <div data-content=""><div data-title=""><!></div> <!></div> <!> <!>`, 1),
  nt = x(`<li data-sonner-toast=""><!> <!></li>`);

function rt(n, o) {
  u(o, !0);
  let s = e => {
      var t = S(),
        n = I(t),
        a = e => {
          var t = Ye(),
            n = r(t);
          v(n, () => o.loadingIcon), N(t), E(e => {
            i(t, 1, e), k(t, `data-visible`, M(H) === `loading`)
          }, [() => {
            var e, t;
            return h(J((e = M(Y)) == null ? void 0 : e.loader, (t = o.toast) == null || (t = t.classes) == null ? void 0 : t.loader, `sonner-loader`))
          }]), l(e, t)
        },
        s = e => {
          {
            let t = m(() => {
                var e, t;
                return J((e = M(Y)) == null ? void 0 : e.loader, (t = o.toast.classes) == null ? void 0 : t.loader)
              }),
              n = m(() => M(H) === `loading`);
            je(e, {
              get class() {
                return M(t)
              },
              get visible() {
                return M(n)
              }
            })
          }
        };
      b(n, e => {
        o.loadingIcon ? e(a) : e(s, -1)
      }), l(e, t)
    },
    c = D(o, `cancelButtonStyle`, 3, ``),
    ee = D(o, `actionButtonStyle`, 3, ``),
    p = D(o, `descriptionClass`, 3, ``),
    _ = D(o, `unstyled`, 3, !1),
    te = D(o, `defaultRichColors`, 3, !1);
  ce(o, Je);
  let ne = {
      ...Ge
    },
    x = t(!1),
    C = t(!1),
    w = t(!1),
    T = t(!1),
    re = t(!1),
    oe = t(0),
    j = t(0),
    de = o.toast.duration || o.duration || Be,
    L = t(void 0),
    R = t(null),
    z = t(null),
    B = m(() => o.index === 0),
    V = m(() => o.index + 1 <= o.visibleToasts),
    H = m(() => o.toast.type),
    U = m(() => o.toast.dismissable !== !1),
    fe = m(() => o.toast.class || ``),
    pe = m(() => o.toast.descriptionClass || ``),
    me = m(() => W.heights.findIndex(e => e.toastId === o.toast.id) || 0),
    G = m(() => o.toast.closeButton ?? o.closeButton),
    he = m(() => o.toast.duration ?? o.duration ?? Be),
    K = null,
    ge = m(() => o.position.split(`-`)),
    q = m(() => W.heights.reduce((e, t, n) => n >= M(me) ? e : e + t.height, 0)),
    _e = ze(),
    ve = m(() => o.toast.invert || o.invert),
    ye = m(() => M(H) === `loading`),
    Y = m(() => ({
      ...ne,
      ...o.classes
    })),
    be = m(() => o.toast.title),
    xe = m(() => o.toast.description),
    Se = t(0),
    Ce = t(0),
    X = m(() => Math.round(M(me) * Ve + M(q)));
  F(() => {
    M(be), M(xe);
    let e;
    e = o.expanded || o.expandByDefault ? 1 : 1 - o.index * We;
    let t = ae(() => M(L));
    if (t === void 0) return;
    t.style.setProperty(`height`, `auto`);
    let n = t.offsetHeight,
      r = t.getBoundingClientRect().height,
      i = Math.round(r / e + 2 ** -52 & 100) / 100;
    t.style.removeProperty(`height`);
    let a;
    a = Math.abs(i - n) < 1 ? i : n, g(j, a, !0), ae(() => {
      W.setHeight({
        toastId: o.toast.id,
        height: a
      })
    })
  });

  function Z() {
    g(C, !0), g(oe, M(X), !0), W.removeHeight(o.toast.id), setTimeout(() => {
      W.remove(o.toast.id)
    }, Ue)
  }
  let we, Te = m(() => o.toast.promise && M(H) === `loading` || o.toast.duration === 1 / 0);

  function Ee() {
    g(Se, new Date().getTime(), !0), we = setTimeout(() => {
      var e, t;
      (e = (t = o.toast).onAutoClose) == null || e.call(t, o.toast), Z()
    }, de)
  }

  function De() {
    if (M(Ce) < M(Se)) {
      let e = new Date().getTime() - M(Se);
      de -= e
    }
    g(Ce, new Date().getTime(), !0)
  }
  F(() => {
    o.toast.updated && (clearTimeout(we), de = M(he), Ee())
  }), F(() => (M(Te) || (o.expanded || o.interacting || _e.current ? De() : Ee()), () => clearTimeout(we))), A(() => {
    var e;
    g(x, !0);
    let t = (e = M(L)) == null ? void 0 : e.getBoundingClientRect().height;
    return g(j, t, !0), W.setHeight({
      toastId: o.toast.id,
      height: t
    }), () => {
      W.removeHeight(o.toast.id)
    }
  }), F(() => {
    o.toast.delete && ae(() => {
      var e, t;
      Z(), (e = (t = o.toast).onDismiss) == null || e.call(t, o.toast)
    })
  });
  let Oe = e => {
      if (M(ye)) return;
      g(oe, M(X), !0);
      let t = e.target;
      t.setPointerCapture(e.pointerId), t.tagName !== `BUTTON` && (g(w, !0), K = {
        x: e.clientX,
        y: e.clientY
      })
    },
    ke = () => {
      var e, t;
      if (M(T) || !M(U)) return;
      K = null;
      let n = Number(((e = M(L)) == null ? void 0 : e.style.getPropertyValue(`--swipe-amount-x`).replace(`px`, ``)) || 0),
        r = Number(((t = M(L)) == null ? void 0 : t.style.getPropertyValue(`--swipe-amount-y`).replace(`px`, ``)) || 0),
        i = new Date().getTime() - 0,
        a = M(R) === `x` ? n : r,
        s = Math.abs(a) / i;
      if (Math.abs(a) >= He || s > .11) {
        var c, l;
        g(oe, M(X), !0), (c = (l = o.toast).onDismiss) == null || c.call(l, o.toast), M(R) === `x` ? g(z, n > 0 ? `right` : `left`, !0) : g(z, r > 0 ? `down` : `up`, !0), Z(), g(T, !0);
        return
      }
      var u, d;
      (u = M(L)) == null || u.style.setProperty(`--swipe-amount-x`, `0px`), (d = M(L)) == null || d.style.setProperty(`--swipe-amount-y`, `0px`), g(re, !1), g(w, !1), g(R, null)
    },
    Ae = e => {
      var t, n, r;
      if (!K || !M(U) || (((t = window.getSelection()) == null ? void 0 : t.toString().length) ?? -1) > 0) return;
      let i = e.clientY - K.y,
        a = e.clientX - K.x,
        s = o.swipeDirections ?? Ke(o.position);
      !M(R) && (Math.abs(a) > 1 || Math.abs(i) > 1) && g(R, Math.abs(a) > Math.abs(i) ? `x` : `y`, !0);
      let c = {
        x: 0,
        y: 0
      };
      if (M(R) === `y`) {
        if (s.includes(`top`) || s.includes(`bottom`)) {
          if (s.includes(`top`) && i < 0 || s.includes(`bottom`) && i > 0) c.y = i;
          else {
            let e = i * qe(i);
            c.y = Math.abs(e) < Math.abs(i) ? e : i
          }
        }
      } else if (M(R) === `x` && (s.includes(`left`) || s.includes(`right`))) {
        if (s.includes(`left`) && a < 0 || s.includes(`right`) && a > 0) c.x = a;
        else {
          let e = a * qe(a);
          c.x = Math.abs(e) < Math.abs(a) ? e : a
        }
      }(Math.abs(c.x) > 0 || Math.abs(c.y) > 0) && g(re, !0), (n = M(L)) == null || n.style.setProperty(`--swipe-amount-x`, `${c.x}px`), (r = M(L)) == null || r.style.setProperty(`--swipe-amount-y`, `${c.y}px`)
    },
    Me = () => {
      g(w, !1), g(R, null), K = null
    },
    Ne = m(() => o.toast.icon ? o.toast.icon : M(H) === `success` ? o.successIcon : M(H) === `error` ? o.errorIcon : M(H) === `warning` ? o.warningIcon : M(H) === `info` ? o.infoIcon : M(H) === `loading` ? o.loadingIcon : null);
  var Q = nt();
  k(Q, `tabindex`, 0);
  let Pe;
  var Fe = r(Q),
    $ = e => {
      var t = Xe(),
        n = r(t);
      v(n, () => o.closeIcon ?? O), N(t), E(e => {
        k(t, `aria-label`, o.closeButtonAriaLabel), k(t, `data-disabled`, M(ye)), i(t, 1, e)
      }, [() => {
        var e, t;
        return h(J((e = M(Y)) == null ? void 0 : e.closeButton, (t = o.toast) == null || (t = t.classes) == null ? void 0 : t.closeButton))
      }]), P(`click`, t, () => {
        var e, t;
        M(ye) || !M(U) || (Z(), (e = (t = o.toast).onDismiss) == null || e.call(t, o.toast))
      }), l(e, t)
    };
  b(Fe, e => {
    M(G) && !o.toast.component && M(H) !== `loading` && o.closeIcon !== null && e($)
  });
  var Ie = y(Fe, 2),
    Le = e => {
      let t = m(() => o.toast.component);
      var n = S(),
        r = I(n);
      f(r, () => M(t), (e, t) => {
        t(e, ue(() => o.toast.componentProps, {
          closeToast: Z
        }))
      }), l(e, n)
    },
    rt = t => {
      var n = tt(),
        u = I(n),
        g = e => {
          var t = Ze(),
            n = r(t),
            a = e => {
              var t = S(),
                n = I(t),
                r = e => {
                  var t = S(),
                    n = I(t);
                  f(n, () => o.toast.icon, (e, t) => {
                    t(e, {})
                  }), l(e, t)
                },
                i = e => {
                  s(e)
                };
              b(n, e => {
                o.toast.icon ? e(r) : e(i, -1)
              }), l(e, t)
            };
          b(n, e => {
            (o.toast.promise || M(H) === `loading`) && e(a)
          });
          var c = y(n, 2),
            u = e => {
              var t = S(),
                n = I(t),
                r = e => {
                  var t = S(),
                    n = I(t);
                  f(n, () => o.toast.icon, (e, t) => {
                    t(e, {})
                  }), l(e, t)
                },
                i = e => {
                  var t = S(),
                    n = I(t);
                  v(n, () => o.successIcon ?? O), l(e, t)
                },
                a = e => {
                  var t = S(),
                    n = I(t);
                  v(n, () => o.errorIcon ?? O), l(e, t)
                },
                s = e => {
                  var t = S(),
                    n = I(t);
                  v(n, () => o.warningIcon ?? O), l(e, t)
                },
                c = e => {
                  var t = S(),
                    n = I(t);
                  v(n, () => o.infoIcon ?? O), l(e, t)
                };
              b(n, e => {
                o.toast.icon ? e(r) : M(H) === `success` ? e(i, 1) : M(H) === `error` ? e(a, 2) : M(H) === `warning` ? e(s, 3) : M(H) === `info` && e(c, 4)
              }), l(e, t)
            };
          b(c, e => {
            o.toast.type !== `loading` && e(u)
          }), N(t), E(e => i(t, 1, e), [() => {
            var e, t;
            return h(J((e = M(Y)) == null ? void 0 : e.icon, (t = o.toast) == null || (t = t.classes) == null ? void 0 : t.icon))
          }]), l(e, t)
        };
      b(u, e => {
        (M(H) || o.toast.icon || o.toast.promise) && o.toast.icon !== null && (M(Ne) !== null || o.toast.icon) && e(g)
      });
      var _ = y(u, 2),
        te = r(_),
        ne = r(te),
        x = t => {
          var n = S(),
            r = I(n),
            i = e => {
              let t = m(() => o.toast.title);
              var n = S(),
                r = I(n);
              f(r, () => M(t), (e, t) => {
                t(e, ue(() => o.toast.componentProps))
              }), l(e, n)
            },
            a = t => {
              var n = e();
              E(() => d(n, o.toast.title)), l(t, n)
            };
          b(r, e => {
            typeof o.toast.title == `string` ? e(a, -1) : e(i)
          }), l(t, n)
        };
      b(ne, e => {
        o.toast.title && e(x)
      }), N(te);
      var C = y(te, 2),
        w = t => {
          var n = Qe(),
            a = r(n),
            s = e => {
              let t = m(() => o.toast.description);
              var n = S(),
                r = I(n);
              f(r, () => M(t), (e, t) => {
                t(e, ue(() => o.toast.componentProps))
              }), l(e, n)
            },
            c = t => {
              var n = e();
              E(() => d(n, o.toast.description)), l(t, n)
            };
          b(a, e => {
            typeof o.toast.description == `string` ? e(c, -1) : e(s)
          }), N(n), E(e => i(n, 1, e), [() => {
            var e, t;
            return h(J(p(), M(pe), (e = M(Y)) == null ? void 0 : e.description, (t = o.toast.classes) == null ? void 0 : t.description))
          }]), l(t, n)
        };
      b(C, e => {
        o.toast.description && e(w)
      }), N(_);
      var T = y(_, 2),
        D = e => {
          var t = S(),
            n = I(t),
            s = e => {
              var t = S(),
                n = I(t);
              f(n, () => o.toast.cancel, (e, t) => {
                t(e, {})
              }), l(e, t)
            },
            u = e => {
              var t = $e(),
                n = r(t, !0);
              N(t), E(e => {
                a(t, o.toast.cancelButtonStyle ?? c()), i(t, 1, e), d(n, o.toast.cancel.label)
              }, [() => {
                var e, t;
                return h(J((e = M(Y)) == null ? void 0 : e.cancelButton, (t = o.toast) == null || (t = t.classes) == null ? void 0 : t.cancelButton))
              }]), P(`click`, t, e => {
                var t, n;
                Re(o.toast.cancel) && M(U) && ((t = o.toast.cancel) == null || (n = t.onClick) == null || n.call(t, e), Z())
              }), l(e, t)
            },
            ee = m(() => Re(o.toast.cancel));
          b(n, e => {
            typeof o.toast.cancel == `function` ? e(s) : M(ee) && e(u, 1)
          }), l(e, t)
        };
      b(T, e => {
        o.toast.cancel && e(D)
      });
      var k = y(T, 2),
        re = e => {
          var t = S(),
            n = I(t),
            s = e => {
              var t = S(),
                n = I(t);
              f(n, () => o.toast.action, (e, t) => {
                t(e, {})
              }), l(e, t)
            },
            c = e => {
              var t = et(),
                n = r(t, !0);
              N(t), E(e => {
                a(t, o.toast.actionButtonStyle ?? ee()), i(t, 1, e), d(n, o.toast.action.label)
              }, [() => {
                var e, t;
                return h(J((e = M(Y)) == null ? void 0 : e.actionButton, (t = o.toast) == null || (t = t.classes) == null ? void 0 : t.actionButton))
              }]), P(`click`, t, e => {
                var t;
                Re(o.toast.action) && ((t = o.toast.action) == null || t.onClick(e), !e.defaultPrevented && Z())
              }), l(e, t)
            },
            u = m(() => Re(o.toast.action));
          b(n, e => {
            typeof o.toast.action == `function` ? e(s) : M(u) && e(c, 1)
          }), l(e, t)
        };
      b(k, e => {
        o.toast.action && e(re)
      }), E(e => i(te, 1, e), [() => {
        var e, t;
        return h(J((e = M(Y)) == null ? void 0 : e.title, (t = o.toast) == null || (t = t.classes) == null ? void 0 : t.title))
      }]), l(t, n)
    };
  b(Ie, e => {
    o.toast.component ? e(Le) : e(rt, -1)
  }), N(Q), ie(Q, e => g(L, e), () => M(L)), E((e, t, n) => {
    i(Q, 1, e), k(Q, `data-rich-colors`, o.toast.richColors ?? te()), k(Q, `data-styled`, !(o.toast.component || o.toast.unstyled || _())), k(Q, `data-mounted`, M(x)), k(Q, `data-promise`, t), k(Q, `data-swiped`, M(re)), k(Q, `data-removed`, M(C)), k(Q, `data-visible`, M(V)), k(Q, `data-y-position`, M(ge)[0]), k(Q, `data-x-position`, M(ge)[1]), k(Q, `data-index`, o.index), k(Q, `data-front`, M(B)), k(Q, `data-swiping`, M(w)), k(Q, `data-dismissable`, M(U)), k(Q, `data-type`, M(H)), k(Q, `data-invert`, M(ve)), k(Q, `data-swipe-out`, M(T)), k(Q, `data-swipe-direction`, M(z)), k(Q, `data-expanded`, n), Pe = a(Q, `${o.style} ${o.toast.style}`, Pe, {
      "--index": o.index,
      "--toasts-before": o.index,
      "--z-index": W.toasts.length - o.index,
      "--offset": `${M(C)?M(oe):M(X)}px`,
      "--initial-height": o.expandByDefault ? `auto` : `${M(j)}px`
    })
  }, [() => {
    var e, t, n, r;
    return h(J(o.class, M(fe), (e = M(Y)) == null ? void 0 : e.toast, (t = o.toast) == null || (t = t.classes) == null ? void 0 : t.toast, (n = M(Y)) == null ? void 0 : n[M(H)], (r = o.toast) == null || (r = r.classes) == null ? void 0 : r[M(H)]))
  }, () => !!o.toast.promise, () => !!(o.expanded || o.expandByDefault && M(x))]), P(`pointermove`, Q, Ae), P(`pointerup`, Q, ke), P(`pointerdown`, Q, Oe), se(`dragend`, Q, Me), l(n, Q), le()
}
oe([`pointermove`, `pointerup`, `pointerdown`, `click`]);
var it = w(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-success-icon=""><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd"></path></svg>`);

function at(e) {
  var t = it();
  l(e, t)
}
var ot = w(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-error-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"></path></svg>`);

function st(e) {
  var t = ot();
  l(e, t)
}
var ct = w(`<svg viewBox="0 0 64 64" fill="currentColor" height="20" width="20" data-sonner-warning-icon="" xmlns="http://www.w3.org/2000/svg"><path d="M32.427,7.987c2.183,0.124 4,1.165 5.096,3.281l17.936,36.208c1.739,3.66 -0.954,8.585 -5.373,8.656l-36.119,0c-4.022,-0.064 -7.322,-4.631 -5.352,-8.696l18.271,-36.207c0.342,-0.65 0.498,-0.838 0.793,-1.179c1.186,-1.375 2.483,-2.111 4.748,-2.063Zm-0.295,3.997c-0.687,0.034 -1.316,0.419 -1.659,1.017c-6.312,11.979 -12.397,24.081 -18.301,36.267c-0.546,1.225 0.391,2.797 1.762,2.863c12.06,0.195 24.125,0.195 36.185,0c1.325,-0.064 2.321,-1.584 1.769,-2.85c-5.793,-12.184 -11.765,-24.286 -17.966,-36.267c-0.366,-0.651 -0.903,-1.042 -1.79,-1.03Z"></path><path d="M33.631,40.581l-3.348,0l-0.368,-16.449l4.1,0l-0.384,16.449Zm-3.828,5.03c0,-0.609 0.197,-1.113 0.592,-1.514c0.396,-0.4 0.935,-0.601 1.618,-0.601c0.684,0 1.223,0.201 1.618,0.601c0.395,0.401 0.593,0.905 0.593,1.514c0,0.587 -0.193,1.078 -0.577,1.473c-0.385,0.395 -0.929,0.593 -1.634,0.593c-0.705,0 -1.249,-0.198 -1.634,-0.593c-0.384,-0.395 -0.576,-0.886 -0.576,-1.473Z"></path></svg>`);

function lt(e) {
  var t = ct();
  l(e, t)
}
var ut = w(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" height="20" width="20" data-sonner-info-icon=""><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clip-rule="evenodd"></path></svg>`);

function dt(e) {
  var t = ut();
  l(e, t)
}
var ft = w(`<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" data-sonner-close-icon=""><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`);

function pt(e) {
  var t = ft();
  l(e, t)
}
var mt = 3,
  ht = `24px`,
  gt = `16px`,
  _t = 4e3,
  vt = 356,
  yt = 14,
  bt = `dark`,
  xt = `light`;

function St(e, t) {
  let n = {};
  return [e, t].forEach((e, t) => {
    let r = t === 1,
      i = r ? `--mobile-offset` : `--offset`,
      a = r ? gt : ht;

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
var Ct = new Set(`$$slots.$$events.$$legacy.invert.position.hotkey.expand.closeButton.offset.mobileOffset.theme.richColors.duration.visibleToasts.toastOptions.dir.gap.loadingIcon.successIcon.errorIcon.warningIcon.closeIcon.infoIcon.containerAriaLabel.class.closeButtonAriaLabel.onblur.onfocus.onmouseenter.onmousemove.onmouseleave.ondragend.onpointerdown.onpointerup`.split(`.`)),
  wt = x(`<ol></ol>`),
  Tt = x(`<section aria-live="polite" aria-relevant="additions text" aria-atomic="false" class="svelte-wiukfn"><!></section>`);

function Et(e, i) {
  u(i, !0);

  function a(e) {
    return e === `system` ? typeof window < `u` && window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches ? bt : xt : e
  }
  let s = D(i, `invert`, 3, !1),
    c = D(i, `position`, 3, `bottom-right`),
    d = D(i, `hotkey`, 19, () => [`altKey`, `KeyT`]),
    ee = D(i, `expand`, 3, !1),
    f = D(i, `closeButton`, 3, !1),
    p = D(i, `offset`, 3, ht),
    h = D(i, `mobileOffset`, 3, gt),
    _ = D(i, `theme`, 3, `light`),
    te = D(i, `richColors`, 3, !1),
    y = D(i, `duration`, 3, _t),
    ne = D(i, `visibleToasts`, 3, mt),
    x = D(i, `toastOptions`, 19, () => ({})),
    C = D(i, `dir`, 7, `auto`),
    w = D(i, `gap`, 3, yt),
    re = D(i, `containerAriaLabel`, 3, `Notifications`),
    oe = D(i, `closeButtonAriaLabel`, 3, `Close toast`),
    se = ce(i, Ct);

  function ue() {
    if (C() !== `auto`) return C();
    if (typeof window > `u` || typeof document > `u`) return `ltr`;
    let e = document.documentElement.getAttribute(`dir`);
    return e === `auto` || !e ? (ae(() => C(window.getComputedStyle(document.documentElement).direction ?? `ltr`)), C()) : (ae(() => C(e)), e)
  }
  let P = m(() => Array.from(new Set([c(), ...W.toasts.filter(e => e.position).map(e => e.position)].filter(Boolean)))),
    L = t(!1),
    R = t(!1),
    z = t(o(a(_()))),
    B = t(void 0),
    V = t(null),
    H = t(!1),
    U = m(() => d().join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``));
  F(() => {
    W.toasts.length <= 1 && g(L, !1)
  }), F(() => {
    let e = W.toasts.filter(e => e.dismiss && !e.delete);
    if (e.length > 0) {
      let t = W.toasts.map(t => e.find(e => e.id === t.id) ? {
        ...t,
        delete: !0
      } : t);
      W.toasts = t
    }
  }), F(() => () => {
    M(B) && M(V) && (M(V).focus({
      preventScroll: !0
    }), g(V, null), g(H, !1))
  }), A(() => (W.reset(), j(document, `keydown`, e => {
    var t;
    if (d().every(t => e[t] || e.code === t)) {
      var n;
      g(L, !0), (n = M(B)) == null || n.focus()
    }
    e.code === `Escape` && (document.activeElement === M(B) || (t = M(B)) != null && t.contains(document.activeElement)) && g(L, !1)
  }))), F(() => {
    if (_() !== `system` && g(z, _()), typeof window < `u`) {
      _() === `system` && (window.matchMedia && window.matchMedia(`(prefers-color-scheme: dark)`).matches ? g(z, bt) : g(z, xt));
      let e = window.matchMedia(`(prefers-color-scheme: dark)`),
        t = ({
          matches: e
        }) => {
          g(z, e ? bt : xt, !0)
        };
      `addEventListener` in e ? e.addEventListener(`change`, t) : e.addListener(t)
    }
  });
  let fe = e => {
      var t;
      (t = i.onblur) == null || t.call(i, e), M(H) && !e.currentTarget.contains(e.relatedTarget) && (g(H, !1), M(V) && (M(V).focus({
        preventScroll: !0
      }), g(V, null)))
    },
    pe = e => {
      var t;
      (t = i.onfocus) == null || t.call(i, e), !(e.target instanceof HTMLElement && e.target.dataset.dismissable === `false`) && (M(H) || (g(H, !0), g(V, e.relatedTarget, !0)))
    },
    me = e => {
      var t;
      (t = i.onpointerdown) == null || t.call(i, e), !(e.target instanceof HTMLElement && e.target.dataset.dismissable === `false`) && g(R, !0)
    },
    G = e => {
      var t;
      (t = i.onmouseenter) == null || t.call(i, e), g(L, !0)
    },
    he = e => {
      var t;
      (t = i.onmouseleave) == null || t.call(i, e), M(R) || g(L, !1)
    },
    K = e => {
      var t;
      (t = i.onmousemove) == null || t.call(i, e), g(L, !0)
    },
    ge = e => {
      var t;
      (t = i.ondragend) == null || t.call(i, e), g(L, !1)
    },
    q = e => {
      var t;
      (t = i.onpointerup) == null || t.call(i, e), g(R, !1)
    };
  Le.set(new ve);
  var J = Tt();
  k(J, `tabindex`, -1);
  var _e = r(J),
    ye = e => {
      var t = S(),
        r = I(t);
      n(r, 18, () => M(P), e => e, (e, t, r, a) => {
        let o = m(() => {
            let [e, n] = t.split(`-`);
            return {
              y: e,
              x: n
            }
          }),
          c = m(() => St(p(), h()));
        var u = wt();
        de(u, e => {
          var t;
          return {
            tabindex: -1,
            dir: e,
            class: i.class,
            "data-sonner-toaster": !0,
            "data-sonner-theme": M(z),
            "data-y-position": M(o).y,
            "data-x-position": M(o).x,
            style: i.style,
            onblur: fe,
            onfocus: pe,
            onmouseenter: G,
            onmousemove: K,
            onmouseleave: he,
            ondragend: ge,
            onpointerdown: me,
            onpointerup: q,
            ...se,
            [T]: {
              "--front-toast-height": `${(t=W.heights[0])==null?void 0:t.height}px`,
              "--width": `${vt}px`,
              "--gap": `${w()}px`,
              "--offset-top": M(c)[`--offset-top`],
              "--offset-right": M(c)[`--offset-right`],
              "--offset-bottom": M(c)[`--offset-bottom`],
              "--offset-left": M(c)[`--offset-left`],
              "--mobile-offset-top": M(c)[`--mobile-offset-top`],
              "--mobile-offset-right": M(c)[`--mobile-offset-right`],
              "--mobile-offset-bottom": M(c)[`--mobile-offset-bottom`],
              "--mobile-offset-left": M(c)[`--mobile-offset-left`]
            }
          }
        }, [() => ue()], void 0, void 0, `svelte-wiukfn`), n(u, 23, () => W.toasts.filter(e => !e.position && M(r) === 0 || e.position === t), e => e.id, (e, n, r, a) => {
          {
            let a = e => {
                var t = S(),
                  n = I(t),
                  r = e => {
                    var t = S(),
                      n = I(t);
                    v(n, () => i.successIcon ?? O), l(e, t)
                  },
                  a = e => {
                    at(e, {})
                  };
                b(n, e => {
                  i.successIcon ? e(r) : i.successIcon !== null && e(a, 1)
                }), l(e, t)
              },
              o = e => {
                var t = S(),
                  n = I(t),
                  r = e => {
                    var t = S(),
                      n = I(t);
                    v(n, () => i.errorIcon ?? O), l(e, t)
                  },
                  a = e => {
                    st(e, {})
                  };
                b(n, e => {
                  i.errorIcon ? e(r) : i.errorIcon !== null && e(a, 1)
                }), l(e, t)
              },
              c = e => {
                var t = S(),
                  n = I(t),
                  r = e => {
                    var t = S(),
                      n = I(t);
                    v(n, () => i.warningIcon ?? O), l(e, t)
                  },
                  a = e => {
                    lt(e, {})
                  };
                b(n, e => {
                  i.warningIcon ? e(r) : i.warningIcon !== null && e(a, 1)
                }), l(e, t)
              },
              u = e => {
                var t = S(),
                  n = I(t),
                  r = e => {
                    var t = S(),
                      n = I(t);
                    v(n, () => i.infoIcon ?? O), l(e, t)
                  },
                  a = e => {
                    dt(e, {})
                  };
                b(n, e => {
                  i.infoIcon ? e(r) : i.infoIcon !== null && e(a, 1)
                }), l(e, t)
              },
              d = e => {
                var t = S(),
                  n = I(t),
                  r = e => {
                    var t = S(),
                      n = I(t);
                    v(n, () => i.closeIcon ?? O), l(e, t)
                  },
                  a = e => {
                    pt(e, {})
                  };
                b(n, e => {
                  i.closeIcon ? e(r) : i.closeIcon !== null && e(a, 1)
                }), l(e, t)
              },
              p = m(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.duration) ?? y()
              }),
              h = m(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.class) ?? ``
              }),
              g = m(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.descriptionClass) || ``
              }),
              _ = m(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.style) ?? ``
              }),
              C = m(() => x().classes || {}),
              w = m(() => x().unstyled ?? !1),
              T = m(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.cancelButtonStyle) ?? ``
              }),
              E = m(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.actionButtonStyle) ?? ``
              }),
              D = m(() => {
                var e;
                return ((e = x()) == null ? void 0 : e.closeButtonAriaLabel) ?? oe()
              });
            rt(e, {
              get index() {
                return M(r)
              },
              get toast() {
                return M(n)
              },
              get defaultRichColors() {
                return te()
              },
              get duration() {
                return M(p)
              },
              get class() {
                return M(h)
              },
              get descriptionClass() {
                return M(g)
              },
              get invert() {
                return s()
              },
              get visibleToasts() {
                return ne()
              },
              get closeButton() {
                return f()
              },
              get interacting() {
                return M(R)
              },
              get position() {
                return t
              },
              get style() {
                return M(_)
              },
              get classes() {
                return M(C)
              },
              get unstyled() {
                return M(w)
              },
              get cancelButtonStyle() {
                return M(T)
              },
              get actionButtonStyle() {
                return M(E)
              },
              get closeButtonAriaLabel() {
                return M(D)
              },
              get expandByDefault() {
                return ee()
              },
              get expanded() {
                return M(L)
              },
              get loadingIcon() {
                return i.loadingIcon
              },
              successIcon: a,
              errorIcon: o,
              warningIcon: c,
              infoIcon: u,
              closeIcon: d,
              $$slots: {
                successIcon: !0,
                errorIcon: !0,
                warningIcon: !0,
                infoIcon: !0,
                closeIcon: !0
              }
            })
          }
        }), N(u), ie(u, e => g(B, e), () => M(B)), E(() => u.dir = u.dir), l(e, u)
      }), l(e, t)
    };
  b(_e, e => {
    W.toasts.length > 0 && e(ye)
  }), N(J), E(() => k(J, `aria-label`, `${re()??``} ${M(U)??``}`)), l(e, J), le()
}

function Dt({
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
    let s = setTimeout(() => o.abort(), 10 * H.second);
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
    interval: H.minute,
    immediate: !0
  });
  return () => {
    r = !0, s(), a == null || a.abort()
  }
}
var Ot = () => {};

function kt(e) {
  return Ot
}
var At = x(`<span class="hidden"> </span> <!> <!> <!>`, 1);

function jt(e, n) {
  u(n, !0), F(() => {
    var e;
    let t = (e = q.data) == null ? void 0 : e.id;
    return ae(() => {
      let e = he.start(t),
        n = X.start(t);
      return () => {
        e == null || e(), n()
      }
    })
  }), F(() => {
    let e = be.device_notifications_body(),
      t = be.device_notifications_charges_full(),
      n = G.muted || U.sounds.playerNotification === 0;
    X.state === `on` && !X.busy && ae(() => void X.syncPreferences(e, n, t))
  });
  let i = Ee(() => pe.current !== null);
  A(() => {
    let e = `frontend-update`,
      t = Dt({
        version: B,
        versionUrl: `${z||R}/_app/version.json`,
        onUpdate: () => {
          U.alerts.updates && K.info(be.frontend_update_available(), {
            id: e,
            description: be.frontend_update_description(),
            duration: 1 / 0,
            classes: {
              toast: `grid! grid-cols-[auto_minmax(0,1fr)]! items-start! gap-x-3! gap-y-3! [&>[data-content]]:col-start-2 [&>[data-content]]:row-start-1 [&>[data-content]]:min-w-0`,
              icon: `col-start-1 row-start-1 mx-0! mt-0.5!`,
              description: `break-words`,
              actionButton: `col-start-2 row-start-2 m-0! h-auto! min-h-11 justify-self-start px-4! py-2! whitespace-normal!`
            },
            action: {
              label: be.frontend_update_reload(),
              onClick: () => window.location.reload()
            }
          })
        }
      });
    return () => {
      t(), K.dismiss(e)
    }
  }), A(() => {
    for (let e of [`localStorage`, `sessionStorage`]) try {
      let t = window[e];
      for (let e = t.length - 1; e >= 0; --e) {
        let n = t.key(e);
        n != null && n.startsWith(`phone:`) && t.removeItem(n)
      }
    } catch {}
    let e = we();
    ye.init();
    let n = t(!1);
    F(() => {
      M(n) || q.data && Te() && (g(n, !0), V(async () => {
        let {
          TWAServices: e
        } = await import(`../chunks/CW4zkRza.js`).then(e => e.i);
        return {
          TWAServices: e
        }
      }, __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), import.meta.url).then(({
        TWAServices: e
      }) => e.loadTWA()))
    }), Z.onInit(), F(() => {
      Z.syncStatusBar(G.theme === `dark`)
    });
    let r = t(!1);
    F(() => {
      !q.data || M(r) || (g(r, !0), Z.recoverUnfinished().catch(kt(`[ios-app] recover purchases:`)))
    });
    let i = t(!1);
    F(() => {
      !q.data || M(i) || (g(i, !0), Z.attestDevice().catch(kt(`[ios-app] device attest:`)))
    }), fe();
    let a = Se(async () => {
        await q.refresh()
      }, {
        interval: H.hour,
        immediate: !0
      }),
      o = setInterval(() => {
        xe().catch(e => console.warn(`[sw] message failed`, e))
      }, 5e3);
    return () => {
      clearTimeout(o), e(), a(), ye.cleanup()
    }
  }), A(ge);
  let a = `muted`;
  A(() => {
    G.muted = localStorage.getItem(a) === `1`
  }), F(() => {
    {
      let e = G.muted;
      Y(), document.querySelectorAll(`audio`).forEach(t => {
        t.muted = e
      });
      for (let t of Object.values(_e).filter(e => e instanceof Audio)) t.muted = e;
      localStorage.setItem(a, Number(e).toString())
    }
  }), F(() => {
    me()
  });
  let o = `haptics`;
  A(() => {
    G.haptics = localStorage.getItem(o) !== `0`
  }), F(() => {
    localStorage.setItem(o, Number(G.haptics).toString())
  }), A(() => {});
  var s = At();
  se(`beforeunload`, te, () => {
    Ce().catch(e => console.warn(`[sw] message failed`, e))
  });
  var c = I(s),
    ee = r(c);
  N(c);
  var p = y(c, 2),
    m = e => {
      var t = S(),
        r = I(t);
      v(r, () => n.children), l(e, t)
    };
  b(p, e => {
    e(m, -1)
  });
  var h = y(p, 2),
    _ = e => {
      var t = S(),
        n = I(t);
      ne(n, () => V(() => import(`../chunks/CSf7G82M.js`), __vite__mapDeps([11, 1, 4, 12, 3, 5, 6, 13, 14, 15, 16, 17]), import.meta.url), null, (e, t) => {
        var n = S(),
          r = I(n);
        f(r, () => M(t).default, (e, t) => {
          t(e, {})
        }), l(e, n)
      }), l(e, t)
    };
  b(h, e => {
    i.current && e(_)
  }), Et(y(h, 2), {
    closeButton: !0,
    richColors: !0,
    position: `top-right`,
    class: `top-safe-15! whitespace-pre-line!`,
    duration: 3e3
  }), E(() => d(ee, `Version: 1790178135162`)), l(e, s), le()
}
export {
  jt as component, De as universal
};