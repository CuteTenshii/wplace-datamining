const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../nodes/0.DWTOpnbW.js", "../chunks/Bzak7iHL.js", "../chunks/C7jYfUbS.js", "../chunks/apxRKl0u.js", "../chunks/B9SWw7yZ.js", "../chunks/CkjmIARx.js", "../chunks/BN0GSrJA.js", "../chunks/BdJF80pX.js", "../chunks/C5GsJ62f.js", "../chunks/DHmwaxXs.js", "../chunks/DBMZVJyA.js", "../chunks/DwmP27Pv.js", "../chunks/DRcRj3o9.js", "../chunks/ClbBIaRv.js", "../chunks/BJAxREQj.js", "../chunks/BkCX6Dhl.js", "../assets/0.YIcJ7IgC.css", "../nodes/1.CAkf6Tmn.js", "../chunks/CyN9FrR7.js", "../chunks/BYGiNEh8.js", "../chunks/D4VEsX1X.js", "../nodes/2.wIkgOH0x.js", "../chunks/D6N4-wGP.js", "../chunks/CqJiU75S.js", "../chunks/BI5KFv7B.js", "../nodes/3.rmIu5JNG.js", "../nodes/4.Bkn0w3Fs.js", "../chunks/Hn5EJR_y.js", "../chunks/CelGo3r1.js", "../chunks/DoCKPXSb.js", "../chunks/1PQvD8LC.js", "../chunks/CTRYyxGQ.js", "../chunks/D7Zs5mjW.js", "../chunks/VcOMw-jP.js", "../chunks/BviiYr3T.js", "../chunks/nmzNmNhc.js", "../chunks/CEfu1ACW.js", "../assets/ProfileAvatarWithLevel.6dmPRSfx.css", "../chunks/DMsIHk2s.js", "../assets/LoginForm.CxMG0irz.css", "../chunks/Dp1pzeXC.js", "../chunks/aCy5SlN5.js", "../chunks/6WWXPsLi.js", "../chunks/Di9sxCf-.js", "../assets/4.BtKF873c.css", "../nodes/5.C8-eRn_p.js", "../nodes/6.BvdvWCbx.js", "../nodes/7.pv_qBAek.js", "../chunks/COiEvk0o.js", "../chunks/Dei4B-zF.js", "../chunks/CwkkZnHr.js", "../nodes/8.DI7Q5xz6.js", "../nodes/9.DfiZ1jne.js", "../chunks/BpDgElXd.js", "../nodes/10.CsKDwu2G.js", "../chunks/etr74OAU.js", "../chunks/GmqXY206.js", "../nodes/11.C2yZDJGa.js", "../chunks/1mTheT_N.js", "../nodes/12.Bj7XieYh.js", "../nodes/13.BvoskkAK.js", "../nodes/14.DaVCzyYe.js", "../nodes/15.B94qJTn1.js", "../nodes/16.BZ4ShLvR.js", "../assets/16.BD1hRFPA.css", "../nodes/17.CCwNxSus.js", "../nodes/18.Drvl1GzC.js"]))) => i.map(i => d[i]);
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
  aJ as S,
  aV as ht,
  g as i,
  aA as Et,
  b3 as Pt,
  a0 as yt,
  p as Rt,
  x as Ot,
  y as bt,
  aI as N,
  aG as At,
  f as et,
  a as g,
  s as It,
  b as u,
  c as Lt,
  aK as E,
  d as Vt,
  r as Dt,
  u as b,
  b4 as Tt,
  t as pt
} from "../chunks/apxRKl0u.js";
import {
  h as xt,
  m as wt,
  u as jt,
  s as kt
} from "../chunks/B9SWw7yZ.js";
import "../chunks/Bzak7iHL.js";
import {
  o as Ct
} from "../chunks/C7jYfUbS.js";
import {
  p as j,
  i as k
} from "../chunks/DBMZVJyA.js";
import {
  c as A
} from "../chunks/BJAxREQj.js";
import {
  b as I
} from "../chunks/ClbBIaRv.js";

function St(e) {
  return class extends Gt {
    constructor(t) {
      super({
        component: e,
        ...t
      })
    }
  }
}
var P, c;
class Gt {
  constructor(t) {
    F(this, P);
    F(this, c);
    var L;
    var r = new Map,
      n = (o, a) => {
        var h = yt(a, !1, !1);
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
        return S(r.get(a) ?? n(a, h), h), Reflect.set(o, a, h)
      }
    });
    H(this, c, (t.hydrate ? xt : wt)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: d,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((L = t == null ? void 0 : t.props) != null && L.$$host) || t.sync === !1) && Et(), H(this, P, d.$$events);
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
var Mt = et('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),
  Jt = et("<!> <!>", 1);

function Kt(e, t) {
  Rt(t, !0);
  let r = j(t, "components", 23, () => []),
    n = j(t, "data_0", 3, null),
    d = j(t, "data_1", 3, null),
    L = j(t, "data_2", 3, null),
    o = j(t, "data_3", 3, null);
  Ot(() => t.stores.page.set(t.page)), bt(() => {
    t.stores, t.page, t.constructors, r(), t.form, n(), d(), L(), o(), t.stores.page.notify()
  });
  let a = N(!1),
    h = N(!1),
    Q = N(null);
  Ct(() => {
    const _ = t.stores.page.subscribe(() => {
      i(a) && (S(h, !0), At().then(() => {
        S(Q, document.title || "untitled page", !0)
      }))
    });
    return S(a, !0), _
  });
  const at = b(() => t.constructors[3]);
  var U = Jt(),
    W = g(U);
  {
    var ot = _ => {
        const y = b(() => t.constructors[0]);
        var R = E(),
          p = g(R);
        A(p, () => i(y), (O, V) => {
          I(V(O, {
            get data() {
              return n()
            },
            get form() {
              return t.form
            },
            get params() {
              return t.page.params
            },
            children: (l, zt) => {
              var X = E(),
                it = g(X);
              {
                var _t = D => {
                    const G = b(() => t.constructors[1]);
                    var x = E(),
                      M = g(x);
                    A(M, () => i(G), (J, K) => {
                      I(K(J, {
                        get data() {
                          return d()
                        },
                        get form() {
                          return t.form
                        },
                        get params() {
                          return t.page.params
                        },
                        children: (f, Bt) => {
                          var Z = E(),
                            ct = g(Z);
                          {
                            var dt = T => {
                                const Y = b(() => t.constructors[2]);
                                var w = E(),
                                  q = g(w);
                                A(q, () => i(Y), (z, B) => {
                                  I(B(z, {
                                    get data() {
                                      return L()
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
                                        I(gt(vt, {
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
                                }), u(T, w)
                              },
                              lt = T => {
                                const Y = b(() => t.constructors[2]);
                                var w = E(),
                                  q = g(w);
                                A(q, () => i(Y), (z, B) => {
                                  I(B(z, {
                                    get data() {
                                      return L()
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
                                }), u(T, w)
                              };
                            k(ct, T => {
                              t.constructors[3] ? T(dt) : T(lt, !1)
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
                    }), u(D, x)
                  },
                  ut = D => {
                    const G = b(() => t.constructors[1]);
                    var x = E(),
                      M = g(x);
                    A(M, () => i(G), (J, K) => {
                      I(K(J, {
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
                    }), u(D, x)
                  };
                k(it, D => {
                  t.constructors[2] ? D(_t) : D(ut, !1)
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
        }), u(_, R)
      },
      st = _ => {
        const y = b(() => t.constructors[0]);
        var R = E(),
          p = g(R);
        A(p, () => i(y), (O, V) => {
          I(V(O, {
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
        }), u(_, R)
      };
    k(W, _ => {
      t.constructors[1] ? _(ot) : _(st, !1)
    })
  }
  var mt = It(W, 2);
  {
    var nt = _ => {
      var y = Mt(),
        R = Vt(y);
      {
        var p = O => {
          var V = Tt();
          pt(() => kt(V, i(Q))), u(O, V)
        };
        k(R, O => {
          i(h) && O(p)
        })
      }
      Dt(y), u(_, y)
    };
    k(mt, _ => {
      i(a) && _(nt)
    })
  }
  u(e, U), Lt()
}
const er = St(Kt),
  ar = [() => s(() => import("../nodes/0.DWTOpnbW.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]), import.meta.url), () => s(() => import("../nodes/1.CAkf6Tmn.js"), __vite__mapDeps([17, 1, 15, 3, 4, 5, 18, 19, 20, 2, 6]), import.meta.url), () => s(() => import("../nodes/2.wIkgOH0x.js"), __vite__mapDeps([21, 1, 3, 4, 5, 2, 22, 11, 12, 19, 20, 6, 23, 10, 24]), import.meta.url), () => s(() => import("../nodes/3.rmIu5JNG.js"), __vite__mapDeps([25, 1, 3, 4, 5, 2, 22, 11, 12, 19, 20, 6, 24]), import.meta.url), () => s(() => import("../nodes/4.Bkn0w3Fs.js"), __vite__mapDeps([26, 1, 2, 3, 4, 5, 10, 12, 22, 11, 19, 20, 6, 7, 8, 9, 27, 13, 28, 29, 30, 31, 32, 24, 33, 34, 35, 36, 37, 15, 18, 23, 14, 38, 39, 40, 41, 42, 43, 44]), import.meta.url), () => s(() => import("../nodes/5.C8-eRn_p.js"), __vite__mapDeps([45, 1, 15, 3, 23, 10, 12]), import.meta.url), () => s(() => import("../nodes/6.BvdvWCbx.js"), __vite__mapDeps([46, 1, 15, 3, 2, 4, 5, 18, 8, 20, 6]), import.meta.url), () => s(() => import("../nodes/7.pv_qBAek.js"), __vite__mapDeps([47, 1, 2, 3, 4, 5, 10, 11, 12, 29, 20, 6, 7, 8, 41, 48, 49, 50]), import.meta.url), () => s(() => import("../nodes/8.DI7Q5xz6.js"), __vite__mapDeps([51, 1, 15, 3, 5, 8, 20, 2, 4, 6]), import.meta.url), () => s(() => import("../nodes/9.DfiZ1jne.js"), __vite__mapDeps([52, 1, 2, 3, 4, 5, 10, 11, 12, 29, 20, 6, 7, 8, 30, 27, 41, 49, 53, 50]), import.meta.url), () => s(() => import("../nodes/10.CsKDwu2G.js"), __vite__mapDeps([54, 1, 3, 4, 5, 10, 22, 11, 12, 29, 20, 2, 6, 19, 7, 8, 28, 13, 30, 27, 31, 32, 24, 33, 55, 41, 43, 56, 49, 53]), import.meta.url), () => s(() => import("../nodes/11.C2yZDJGa.js"), __vite__mapDeps([57, 1, 2, 3, 4, 5, 10, 20, 6, 19, 7, 8, 38, 12, 13, 23, 39, 58]), import.meta.url), () => s(() => import("../nodes/12.Bj7XieYh.js"), __vite__mapDeps([59, 1, 2, 3, 4, 5, 10, 22, 11, 12, 20, 6, 19, 7, 8, 30, 27, 35, 33, 55, 41, 43, 48, 32, 34]), import.meta.url), () => s(() => import("../nodes/13.BvoskkAK.js"), __vite__mapDeps([60, 1, 15, 3, 4, 5, 18, 23, 10, 12, 41, 42, 8, 43]), import.meta.url), () => s(() => import("../nodes/14.DaVCzyYe.js"), __vite__mapDeps([61, 1, 2, 3, 4, 5, 10, 27, 19, 20, 6, 7, 8, 23, 12, 58]), import.meta.url), () => s(() => import("../nodes/15.B94qJTn1.js"), __vite__mapDeps([62, 1, 3, 4, 5, 10, 11, 12, 29, 13, 20, 2, 6, 7, 8, 36, 30, 27, 37, 35, 31, 56, 32]), import.meta.url), () => s(() => import("../nodes/16.BZ4ShLvR.js"), __vite__mapDeps([63, 1, 15, 3, 5, 23, 10, 12, 64]), import.meta.url), () => s(() => import("../nodes/17.CCwNxSus.js"), __vite__mapDeps([65, 1, 15, 3, 5, 23, 10, 12]), import.meta.url), () => s(() => import("../nodes/18.Drvl1GzC.js"), __vite__mapDeps([66, 1, 15, 3, 5, 23, 10, 12, 64]), import.meta.url)],
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
  Yt = {
    handleError: (({
      error: e
    }) => {
      console.error(e)
    }),
    reroute: (() => {}),
    transport: {}
  },
  qt = Object.fromEntries(Object.entries(Yt.transport).map(([e, t]) => [e, t.decode])),
  mr = !1,
  nr = (e, t) => qt[e](t);
export {
  nr as decode, qt as decoders, sr as dictionary, mr as hash, Yt as hooks, rr as matchers, ar as nodes, er as root, or as server_loads
};