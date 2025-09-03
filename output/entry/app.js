const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../nodes/0.-An6fKU5.js", "../chunks/Bzak7iHL.js", "../chunks/XwJtV06w.js", "../chunks/DDWIi-vs.js", "../chunks/Ob_J7Gis.js", "../chunks/DyJg5QNB.js", "../chunks/CyAm3K7E.js", "../chunks/DC_O4ofs.js", "../chunks/C5GsJ62f.js", "../chunks/BfUyLi6m.js", "../chunks/Cotyqp2D.js", "../chunks/DieFH19D.js", "../chunks/CwJjPkYo.js", "../chunks/BXxY18WV.js", "../chunks/BU7TSmCo.js", "../chunks/C8SGYYB9.js", "../assets/0.DdnLv81n.css", "../nodes/1.B3qD9haz.js", "../chunks/B4fL6wN3.js", "../chunks/BaDbMWPQ.js", "../chunks/DWB_zhFT.js", "../nodes/2.YGdU0zr-.js", "../chunks/SRrJTvMH.js", "../chunks/CF7iZc7m.js", "../chunks/d3Ximbme.js", "../chunks/BI5KFv7B.js", "../nodes/3.BGWG_Qle.js", "../nodes/4.BncsJPrB.js", "../chunks/D6lCS0HT.js", "../chunks/ByUC4UNP.js", "../chunks/s8fa6SKT.js", "../chunks/Bl3D2i7R.js", "../chunks/CTRYyxGQ.js", "../chunks/KslvzHFp.js", "../chunks/DI-XPNec.js", "../chunks/BXyCIOZO.js", "../chunks/Ck3jKpqx.js", "../chunks/BD0Tkr-u.js", "../assets/ProfileAvatarWithLevel.6dmPRSfx.css", "../chunks/FGm3LJ8-.js", "../assets/LoginForm.CxMG0irz.css", "../chunks/Dp1pzeXC.js", "../chunks/BH2_dNKw.js", "../chunks/yrK32Tme.js", "../chunks/Di9sxCf-.js", "../assets/4.BtKF873c.css", "../nodes/5.6BYgKeSB.js", "../nodes/6.BJOKBBVO.js", "../nodes/7.fU59a2Xo.js", "../chunks/COiEvk0o.js", "../chunks/Dei4B-zF.js", "../chunks/CwkkZnHr.js", "../nodes/8.D-A8M8sA.js", "../nodes/9.D4yNp5p2.js", "../chunks/BpDgElXd.js", "../nodes/10.Cm_gqtrd.js", "../chunks/GmqXY206.js", "../chunks/Chmmkt2f.js", "../nodes/11.CsMSmEj8.js", "../chunks/1mTheT_N.js", "../nodes/12._T0-aPg3.js", "../nodes/13.DE-U7zmI.js", "../nodes/14.DAwd8n9D.js", "../nodes/15.DwZSE8H3.js", "../nodes/16.CTFM21bI.js", "../assets/16.BD1hRFPA.css", "../nodes/17.BpafwDNz.js", "../nodes/18.Ce8DnDFs.js"]))) => i.map(i => d[i]);
var tt = e => {
  throw TypeError(e)
};
var rt = (e, t, r) => t.has(e) || tt("Cannot " + r);
var m = (e, t, r) => (rt(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
  F = (e, t, r) => t.has(e) ? tt("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r),
  H = (e, t, r, n) => (rt(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
import {
  _ as s
} from "../chunks/Dp1pzeXC.js";
import {
  aM as M,
  b2 as ht,
  g as i,
  aD as Et,
  b3 as Pt,
  a3 as Rt,
  p as yt,
  A as Ot,
  B as bt,
  aL as K,
  aJ as At,
  f as et,
  a as g,
  s as Lt,
  b as u,
  c as Dt,
  aN as E,
  d as It,
  r as Tt,
  u as b,
  b4 as Vt,
  t as pt
} from "../chunks/DDWIi-vs.js";
import {
  h as xt,
  m as wt,
  u as jt,
  s as kt
} from "../chunks/Ob_J7Gis.js";
import "../chunks/Bzak7iHL.js";
import {
  o as Ct
} from "../chunks/XwJtV06w.js";
import {
  p as j,
  i as k
} from "../chunks/Cotyqp2D.js";
import {
  c as A
} from "../chunks/BU7TSmCo.js";
import {
  b as L
} from "../chunks/BXxY18WV.js";

function Mt(e) {
  return class extends St {
    constructor(t) {
      super({
        component: e,
        ...t
      })
    }
  }
}
var P, c;
class St {
  constructor(t) {
    F(this, P);
    F(this, c);
    var D;
    var r = new Map,
      n = (o, a) => {
        var h = Rt(a, !1, !1);
        return r.set(o, h), h
      };
    const d = new Proxy({
      ...t.props || {},
      $$events: {}
    }, {
      get(o, a) {
        return i(r.get(a) ?? n(a, Reflect.get(o, a)))
      },
      has(o, a) {
        return a === ht ? !0 : (i(r.get(a) ?? n(a, Reflect.get(o, a))), Reflect.has(o, a))
      },
      set(o, a, h) {
        return M(r.get(a) ?? n(a, h), h), Reflect.set(o, a, h)
      }
    });
    H(this, c, (t.hydrate ? xt : wt)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: d,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((D = t == null ? void 0 : t.props) != null && D.$$host) || t.sync === !1) && Et(), H(this, P, d.$$events);
    for (const o of Object.keys(m(this, c))) o === "$set" || o === "$destroy" || o === "$on" || Pt(this, o, {
      get() {
        return m(this, c)[o]
      },
      set(a) {
        m(this, c)[o] = a
      },
      enumerable: !0
    });
    m(this, c).$set = o => {
      Object.assign(d, o)
    }, m(this, c).$destroy = () => {
      jt(m(this, c))
    }
  }
  $set(t) {
    m(this, c).$set(t)
  }
  $on(t, r) {
    m(this, P)[t] = m(this, P)[t] || [];
    const n = (...d) => r.call(this, ...d);
    return m(this, P)[t].push(n), () => {
      m(this, P)[t] = m(this, P)[t].filter(d => d !== n)
    }
  }
  $destroy() {
    m(this, c).$destroy()
  }
}
P = new WeakMap, c = new WeakMap;
const rr = {};
var Bt = et('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),
  Gt = et("<!> <!>", 1);

function Jt(e, t) {
  yt(t, !0);
  let r = j(t, "components", 23, () => []),
    n = j(t, "data_0", 3, null),
    d = j(t, "data_1", 3, null),
    D = j(t, "data_2", 3, null),
    o = j(t, "data_3", 3, null);
  Ot(() => t.stores.page.set(t.page)), bt(() => {
    t.stores, t.page, t.constructors, r(), t.form, n(), d(), D(), o(), t.stores.page.notify()
  });
  let a = K(!1),
    h = K(!1),
    Q = K(null);
  Ct(() => {
    const _ = t.stores.page.subscribe(() => {
      i(a) && (M(h, !0), At().then(() => {
        M(Q, document.title || "untitled page", !0)
      }))
    });
    return M(a, !0), _
  });
  const at = b(() => t.constructors[3]);
  var U = Gt(),
    W = g(U);
  {
    var ot = _ => {
        const R = b(() => t.constructors[0]);
        var y = E(),
          p = g(y);
        A(p, () => i(R), (O, I) => {
          L(I(O, {
            get data() {
              return n()
            },
            get form() {
              return t.form
            },
            get params() {
              return t.page.params
            },
            children: (l, qt) => {
              var X = E(),
                it = g(X);
              {
                var _t = T => {
                    const S = b(() => t.constructors[1]);
                    var x = E(),
                      B = g(x);
                    A(B, () => i(S), (G, J) => {
                      L(J(G, {
                        get data() {
                          return d()
                        },
                        get form() {
                          return t.form
                        },
                        get params() {
                          return t.page.params
                        },
                        children: (f, zt) => {
                          var Z = E(),
                            ct = g(Z);
                          {
                            var dt = V => {
                                const N = b(() => t.constructors[2]);
                                var w = E(),
                                  Y = g(w);
                                A(Y, () => i(N), (q, z) => {
                                  L(z(q, {
                                    get data() {
                                      return D()
                                    },
                                    get form() {
                                      return t.form
                                    },
                                    get params() {
                                      return t.page.params
                                    },
                                    children: (v, Ft) => {
                                      var $ = E(),
                                        ft = g($);
                                      A(ft, () => i(at), (vt, gt) => {
                                        L(gt(vt, {
                                          get data() {
                                            return o()
                                          },
                                          get form() {
                                            return t.form
                                          },
                                          get params() {
                                            return t.page.params
                                          }
                                        }), C => r()[3] = C, () => {
                                          var C;
                                          return (C = r()) == null ? void 0 : C[3]
                                        })
                                      }), u(v, $)
                                    },
                                    $$slots: {
                                      default: !0
                                    }
                                  }), v => r()[2] = v, () => {
                                    var v;
                                    return (v = r()) == null ? void 0 : v[2]
                                  })
                                }), u(V, w)
                              },
                              lt = V => {
                                const N = b(() => t.constructors[2]);
                                var w = E(),
                                  Y = g(w);
                                A(Y, () => i(N), (q, z) => {
                                  L(z(q, {
                                    get data() {
                                      return D()
                                    },
                                    get form() {
                                      return t.form
                                    },
                                    get params() {
                                      return t.page.params
                                    }
                                  }), v => r()[2] = v, () => {
                                    var v;
                                    return (v = r()) == null ? void 0 : v[2]
                                  })
                                }), u(V, w)
                              };
                            k(ct, V => {
                              t.constructors[3] ? V(dt) : V(lt, !1)
                            })
                          }
                          u(f, Z)
                        },
                        $$slots: {
                          default: !0
                        }
                      }), f => r()[1] = f, () => {
                        var f;
                        return (f = r()) == null ? void 0 : f[1]
                      })
                    }), u(T, x)
                  },
                  ut = T => {
                    const S = b(() => t.constructors[1]);
                    var x = E(),
                      B = g(x);
                    A(B, () => i(S), (G, J) => {
                      L(J(G, {
                        get data() {
                          return d()
                        },
                        get form() {
                          return t.form
                        },
                        get params() {
                          return t.page.params
                        }
                      }), f => r()[1] = f, () => {
                        var f;
                        return (f = r()) == null ? void 0 : f[1]
                      })
                    }), u(T, x)
                  };
                k(it, T => {
                  t.constructors[2] ? T(_t) : T(ut, !1)
                })
              }
              u(l, X)
            },
            $$slots: {
              default: !0
            }
          }), l => r()[0] = l, () => {
            var l;
            return (l = r()) == null ? void 0 : l[0]
          })
        }), u(_, y)
      },
      st = _ => {
        const R = b(() => t.constructors[0]);
        var y = E(),
          p = g(y);
        A(p, () => i(R), (O, I) => {
          L(I(O, {
            get data() {
              return n()
            },
            get form() {
              return t.form
            },
            get params() {
              return t.page.params
            }
          }), l => r()[0] = l, () => {
            var l;
            return (l = r()) == null ? void 0 : l[0]
          })
        }), u(_, y)
      };
    k(W, _ => {
      t.constructors[1] ? _(ot) : _(st, !1)
    })
  }
  var mt = Lt(W, 2);
  {
    var nt = _ => {
      var R = Bt(),
        y = It(R);
      {
        var p = O => {
          var I = Vt();
          pt(() => kt(I, i(Q))), u(O, I)
        };
        k(y, O => {
          i(h) && O(p)
        })
      }
      Tt(R), u(_, R)
    };
    k(mt, _ => {
      i(a) && _(nt)
    })
  }
  u(e, U), Dt()
}
const er = Mt(Jt),
  ar = [() => s(() => import("../nodes/0.-An6fKU5.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), import.meta.url), () => s(() => import("../nodes/1.B3qD9haz.js"), __vite__mapDeps([17, 1, 15, 3, 4, 5, 18, 19, 20, 2, 6]), import.meta.url), () => s(() => import("../nodes/2.YGdU0zr-.js"), __vite__mapDeps([21, 1, 3, 4, 5, 2, 22, 11, 12, 23, 19, 20, 6, 24, 10, 25]), import.meta.url), () => s(() => import("../nodes/3.BGWG_Qle.js"), __vite__mapDeps([26, 1, 3, 4, 5, 2, 22, 11, 12, 23, 19, 20, 6, 25]), import.meta.url), () => s(() => import("../nodes/4.BncsJPrB.js"), __vite__mapDeps([27, 1, 2, 3, 4, 5, 10, 12, 23, 11, 19, 20, 6, 7, 8, 9, 28, 13, 29, 30, 31, 32, 33, 25, 34, 35, 22, 36, 37, 38, 15, 18, 24, 14, 39, 40, 41, 42, 43, 44, 45]), import.meta.url), () => s(() => import("../nodes/5.6BYgKeSB.js"), __vite__mapDeps([46, 1, 15, 3, 24, 10, 12]), import.meta.url), () => s(() => import("../nodes/6.BJOKBBVO.js"), __vite__mapDeps([47, 1, 15, 3, 4, 5, 18, 8, 20, 2, 6]), import.meta.url), () => s(() => import("../nodes/7.fU59a2Xo.js"), __vite__mapDeps([48, 1, 2, 3, 4, 5, 10, 11, 12, 30, 20, 6, 7, 8, 42, 49, 50, 51]), import.meta.url), () => s(() => import("../nodes/8.D-A8M8sA.js"), __vite__mapDeps([52, 1, 15, 3, 5, 8, 20, 2, 4, 6]), import.meta.url), () => s(() => import("../nodes/9.D4yNp5p2.js"), __vite__mapDeps([53, 1, 2, 3, 4, 5, 10, 11, 12, 30, 20, 6, 7, 8, 31, 28, 42, 50, 54, 51]), import.meta.url), () => s(() => import("../nodes/10.Cm_gqtrd.js"), __vite__mapDeps([55, 1, 3, 4, 5, 10, 11, 12, 30, 20, 2, 6, 19, 7, 8, 31, 28, 29, 23, 13, 32, 33, 25, 35, 42, 44, 56, 57, 50, 54]), import.meta.url), () => s(() => import("../nodes/11.CsMSmEj8.js"), __vite__mapDeps([58, 1, 2, 3, 4, 5, 10, 20, 6, 19, 7, 8, 39, 12, 13, 24, 40, 59]), import.meta.url), () => s(() => import("../nodes/12._T0-aPg3.js"), __vite__mapDeps([60, 1, 2, 3, 4, 5, 10, 22, 11, 12, 23, 20, 6, 19, 7, 8, 31, 28, 36, 35, 34, 42, 44, 49, 57, 33]), import.meta.url), () => s(() => import("../nodes/13.DE-U7zmI.js"), __vite__mapDeps([61, 1, 15, 3, 4, 5, 18, 24, 10, 12, 42, 43, 8, 44]), import.meta.url), () => s(() => import("../nodes/14.DAwd8n9D.js"), __vite__mapDeps([62, 1, 2, 3, 4, 5, 10, 28, 19, 20, 6, 7, 8, 24, 12, 59]), import.meta.url), () => s(() => import("../nodes/15.DwZSE8H3.js"), __vite__mapDeps([63, 1, 3, 4, 5, 10, 11, 12, 30, 13, 20, 2, 6, 7, 8, 37, 31, 28, 38, 36, 32, 56, 33]), import.meta.url), () => s(() => import("../nodes/16.CTFM21bI.js"), __vite__mapDeps([64, 1, 15, 3, 5, 24, 10, 12, 65]), import.meta.url), () => s(() => import("../nodes/17.BpafwDNz.js"), __vite__mapDeps([66, 1, 15, 3, 5, 24, 10, 12]), import.meta.url), () => s(() => import("../nodes/18.Ce8DnDFs.js"), __vite__mapDeps([67, 1, 15, 3, 5, 24, 10, 12, 65]), import.meta.url)],
  or = [],
  sr = {
    "/": [4],
    "/404": [5],
    "/admin": [6, [2]],
    "/admin/dashboard": [7, [2]],
    "/admin/mods": [8, [2, 3]],
    "/admin/mods/leaderboard": [9, [2, 3]],
    "/admin/users": [10, [2]],
    "/join": [11],
    "/moderation": [12],
    "/offline": [13],
    "/payment/success": [14],
    "/profile-picture": [15],
    "/terms/privacy": [16],
    "/terms/return": [17],
    "/terms/terms-of-service": [18]
  },
  Nt = {
    handleError: (({
      error: e
    }) => {
      console.error(e)
    }),
    reroute: (() => {}),
    transport: {}
  },
  Yt = Object.fromEntries(Object.entries(Nt.transport).map(([e, t]) => [e, t.decode])),
  mr = !1,
  nr = (e, t) => Yt[e](t);
export {
  nr as decode, Yt as decoders, sr as dictionary, mr as hash, Nt as hooks, rr as matchers, ar as nodes, er as root, or as server_loads
};