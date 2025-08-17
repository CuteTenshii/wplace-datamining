const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["../nodes/0.G23eXyTm.js", "../chunks/Bzak7iHL.js", "../chunks/CVpIJCQG.js", "../chunks/BUjsOn5w.js", "../chunks/tlM6Zgdz.js", "../chunks/B-gN4VKQ.js", "../chunks/DmQhqxnR.js", "../chunks/CmXEhbGB.js", "../chunks/C5GsJ62f.js", "../chunks/BEdNL48M.js", "../chunks/DZ6afX6-.js", "../chunks/Cx7BSLZW.js", "../chunks/DZCdaKGh.js", "../chunks/dV0J5liF.js", "../chunks/Cj-nAB2C.js", "../assets/0.-k9OGAyr.css", "../nodes/1.C1TetrgZ.js", "../chunks/C2N1yofn.js", "../chunks/4009TGBk.js", "../chunks/DvuTo9H4.js", "../nodes/2.BOsLaf8o.js", "../chunks/h2W_5Jzs.js", "../chunks/BOcOBLAN.js", "../assets/ProfileAvatarWithLevel.6dmPRSfx.css", "../chunks/awI6yFUk.js", "../chunks/BSGgKtnp.js", "../assets/LoginForm.CxMG0irz.css", "../chunks/Dp1pzeXC.js", "../chunks/B6hSv56A.js", "../assets/2.DyRArBtB.css", "../nodes/3.D4NcN2MY.js", "../chunks/1mTheT_N.js", "../nodes/4.BMssoHHJ.js", "../nodes/5.CptEIE58.js", "../nodes/6.Z84tBh_V.js", "../nodes/7.BvOlYOQx.js", "../assets/7.BD1hRFPA.css", "../nodes/8.CjJzOLZU.js", "../assets/8.B8VXfLeS.css", "../nodes/9.CN0s44g6.js"]))) => i.map(i => d[i]);
var M = e => {
  throw TypeError(e)
};
var q = (e, t, r) => t.has(e) || M("Cannot " + r);
var o = (e, t, r) => (q(e, t, "read from private field"), r ? r.call(e) : t.get(e)),
  A = (e, t, r) => t.has(e) ? M("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, r),
  I = (e, t, r, n) => (q(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
import {
  _
} from "../chunks/Dp1pzeXC.js";
import {
  aI as O,
  aP as K,
  y as l,
  au as N,
  aR as Q,
  P as W,
  p as X,
  u as Z,
  q as $,
  aS as L,
  aA as tt,
  f as G,
  a as R,
  s as et,
  b as P,
  c as rt,
  aT as T,
  d as at,
  r as st,
  aU as V,
  aV as ot,
  t as nt
} from "../chunks/BUjsOn5w.js";
import {
  h as it,
  m as ct,
  u as mt,
  s as ut
} from "../chunks/tlM6Zgdz.js";
import "../chunks/Bzak7iHL.js";
import {
  o as _t
} from "../chunks/CVpIJCQG.js";
import {
  p as x,
  i as D
} from "../chunks/BEdNL48M.js";
import {
  c as w
} from "../chunks/dV0J5liF.js";
import {
  b as j
} from "../chunks/DZCdaKGh.js";

function lt(e) {
  return class extends dt {
    constructor(t) {
      super({
        component: e,
        ...t
      })
    }
  }
}
var d, c;
class dt {
  constructor(t) {
    A(this, d);
    A(this, c);
    var E;
    var r = new Map,
      n = (a, s) => {
        var f = W(s, !1, !1);
        return r.set(a, f), f
      };
    const u = new Proxy({
      ...t.props || {},
      $$events: {}
    }, {
      get(a, s) {
        return l(r.get(s) ?? n(s, Reflect.get(a, s)))
      },
      has(a, s) {
        return s === K ? !0 : (l(r.get(s) ?? n(s, Reflect.get(a, s))), Reflect.has(a, s))
      },
      set(a, s, f) {
        return O(r.get(s) ?? n(s, f), f), Reflect.set(a, s, f)
      }
    });
    I(this, c, (t.hydrate ? it : ct)(t.component, {
      target: t.target,
      anchor: t.anchor,
      props: u,
      context: t.context,
      intro: t.intro ?? !1,
      recover: t.recover
    })), (!((E = t == null ? void 0 : t.props) != null && E.$$host) || t.sync === !1) && N(), I(this, d, u.$$events);
    for (const a of Object.keys(o(this, c))) a === "$set" || a === "$destroy" || a === "$on" || Q(this, a, {
      get() {
        return o(this, c)[a]
      },
      set(s) {
        o(this, c)[a] = s
      },
      enumerable: !0
    });
    o(this, c).$set = a => {
      Object.assign(u, a)
    }, o(this, c).$destroy = () => {
      mt(o(this, c))
    }
  }
  $set(t) {
    o(this, c).$set(t)
  }
  $on(t, r) {
    o(this, d)[t] = o(this, d)[t] || [];
    const n = (...u) => r.call(this, ...u);
    return o(this, d)[t].push(n), () => {
      o(this, d)[t] = o(this, d)[t].filter(u => u !== n)
    }
  }
  $destroy() {
    o(this, c).$destroy()
  }
}
d = new WeakMap, c = new WeakMap;
const Vt = {};
var ft = G('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),
  ht = G("<!> <!>", 1);

function vt(e, t) {
  X(t, !0);
  let r = x(t, "components", 23, () => []),
    n = x(t, "data_0", 3, null),
    u = x(t, "data_1", 3, null);
  Z(() => t.stores.page.set(t.page)), $(() => {
    t.stores, t.page, t.constructors, r(), t.form, n(), u(), t.stores.page.notify()
  });
  let E = L(!1),
    a = L(!1),
    s = L(null);
  _t(() => {
    const i = t.stores.page.subscribe(() => {
      l(E) && (O(a, !0), tt().then(() => {
        O(s, document.title || "untitled page", !0)
      }))
    });
    return O(E, !0), i
  });
  const f = V(() => t.constructors[1]);
  var k = ht(),
    C = R(k);
  {
    var U = i => {
        const h = V(() => t.constructors[0]);
        var v = T(),
          p = R(v);
        w(p, () => l(h), (g, y) => {
          j(y(g, {
            get data() {
              return n()
            },
            get form() {
              return t.form
            },
            get params() {
              return t.page.params
            },
            children: (m, yt) => {
              var S = T(),
                F = R(S);
              w(F, () => l(f), (H, J) => {
                j(J(H, {
                  get data() {
                    return u()
                  },
                  get form() {
                    return t.form
                  },
                  get params() {
                    return t.page.params
                  }
                }), b => r()[1] = b, () => {
                  var b;
                  return (b = r()) == null ? void 0 : b[1]
                })
              }), P(m, S)
            },
            $$slots: {
              default: !0
            }
          }), m => r()[0] = m, () => {
            var m;
            return (m = r()) == null ? void 0 : m[0]
          })
        }), P(i, v)
      },
      Y = i => {
        const h = V(() => t.constructors[0]);
        var v = T(),
          p = R(v);
        w(p, () => l(h), (g, y) => {
          j(y(g, {
            get data() {
              return n()
            },
            get form() {
              return t.form
            },
            get params() {
              return t.page.params
            }
          }), m => r()[0] = m, () => {
            var m;
            return (m = r()) == null ? void 0 : m[0]
          })
        }), P(i, v)
      };
    D(C, i => {
      t.constructors[1] ? i(U) : i(Y, !1)
    })
  }
  var z = et(C, 2);
  {
    var B = i => {
      var h = ft(),
        v = at(h);
      {
        var p = g => {
          var y = ot();
          nt(() => ut(y, l(s))), P(g, y)
        };
        D(v, g => {
          l(a) && g(p)
        })
      }
      st(h), P(i, h)
    };
    D(z, i => {
      l(E) && i(B)
    })
  }
  P(e, k), rt()
}
const xt = lt(vt),
  Dt = [() => _(() => import("../nodes/0.G23eXyTm.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), import.meta.url), () => _(() => import("../nodes/1.C1TetrgZ.js"), __vite__mapDeps([16, 1, 14, 3, 4, 17, 18, 19, 2, 5]), import.meta.url), () => _(() => import("../nodes/2.BOsLaf8o.js"), __vite__mapDeps([20, 1, 2, 3, 4, 9, 11, 10, 18, 19, 5, 7, 8, 6, 21, 12, 22, 23, 14, 17, 24, 13, 25, 26, 27, 28, 29]), import.meta.url), () => _(() => import("../nodes/3.D4NcN2MY.js"), __vite__mapDeps([30, 1, 2, 3, 4, 9, 19, 5, 18, 7, 8, 25, 11, 12, 24, 26, 31]), import.meta.url), () => _(() => import("../nodes/4.BMssoHHJ.js"), __vite__mapDeps([32, 1, 14, 3, 4, 17, 24, 9, 11, 28, 8]), import.meta.url), () => _(() => import("../nodes/5.CptEIE58.js"), __vite__mapDeps([33, 1, 2, 3, 4, 9, 21, 18, 19, 5, 7, 8, 24, 11, 31]), import.meta.url), () => _(() => import("../nodes/6.Z84tBh_V.js"), __vite__mapDeps([34, 1, 3, 4, 9, 10, 11, 22, 8, 7, 2, 12, 19, 5, 21, 23]), import.meta.url), () => _(() => import("../nodes/7.BvOlYOQx.js"), __vite__mapDeps([35, 1, 14, 3, 24, 9, 11, 36]), import.meta.url), () => _(() => import("../nodes/8.CjJzOLZU.js"), __vite__mapDeps([37, 1, 14, 3, 24, 9, 11, 38]), import.meta.url), () => _(() => import("../nodes/9.CN0s44g6.js"), __vite__mapDeps([39, 1, 14, 3, 24, 9, 11, 36]), import.meta.url)],
  wt = [],
  jt = {
    "/": [2],
    "/join": [3],
    "/offline": [4],
    "/payment/success": [5],
    "/profile-picture": [6],
    "/terms/privacy": [7],
    "/terms/return": [8],
    "/terms/terms-of-service": [9]
  },
  gt = {
    handleError: (({
      error: e
    }) => {
      console.error(e)
    }),
    reroute: (() => {}),
    transport: {}
  },
  Et = Object.fromEntries(Object.entries(gt.transport).map(([e, t]) => [e, t.decode])),
  kt = !1,
  Ct = (e, t) => Et[e](t);
export {
  Ct as decode, Et as decoders, jt as dictionary, kt as hash, gt as hooks, Vt as matchers, Dt as nodes, xt as root, wt as server_loads
};