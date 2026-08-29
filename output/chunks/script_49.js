import {
  C as e,
  Et as t,
  G as n,
  H as r,
  Jt as i,
  O as a,
  Pt as o,
  Tt as s,
  Y as c,
  Yt as l,
  Z as u,
  a as d,
  b as f,
  ct as p,
  et as m,
  f as h,
  h as g,
  j as _,
  jt as v,
  kt as y,
  nn as b,
  nt as x,
  q as S,
  rt as C,
  tn as ee,
  tt as w,
  vt as T,
  wt as E,
  x as D,
  yt as O
} from "./D6uuD926.js";
import "./B8UK1oE5.js";
import {
  c as k
} from "./CMCDTH43.js";
import {
  B as A,
  K as j,
  c as M,
  f as N,
  i as P,
  t as te
} from "./BHDig7Ul.js";
import {
  t as F
} from "./ciZYZuIg.js";
import {
  t as I
} from "./IDjU3ntJ.js";
import {
  t as ne
} from "./DgXd84kS.js";
import {
  i as L,
  n as R
} from "./BTdIvV88.js";
import {
  n as re,
  t as ie
} from "./CaIkzXpI.js";
import {
  t as ae
} from "./BoG0A1IZ.js";
import {
  t as oe
} from "./BvEW3GNi.js";
import {
  t as se
} from "./DNY3WnWT.js";
import {
  t as ce
} from "./DgwxVWcw.js";
var le = u(`<span> </span> <span> </span>`, 1),
  ue = u(`<span class="badge badge-sm border-0"> </span>`),
  z = u(`<span class="tooltip"><!></span>`),
  de = u(`<li><button class="text-error py-2 font-medium"> </button></li>`),
  fe = u(`<div><!> <!> <!> <!> <div class="dropdown dropdown-bottom max-sm:dropdown-bottom max-sm:dropdown-left"><button tabindex="0" class="btn btn-xs btn-circle btn-ghost"><!></button> <ul class="dropdown-content menu bg-base-100 z-1 mb-1 w-max gap-0.5 rounded-xl p-2.5 shadow-sm"><li><button class="text-error py-2 font-medium"> </button></li> <!></ul></div></div>`),
  pe = u(`<li class="flex items-center gap-2 px-3 py-2"><!> <div class="min-w-0"><div class="flex flex-wrap items-center gap-1"><!> <!> <!></div></div></li>`),
  me = u(`<div class="border-base-300 mt-4 max-h-40 overflow-y-auto rounded-lg border"><ul class="divide-base-200 divide-y"></ul></div>`),
  he = u(`<label class="flex gap-3"><input name="reason" class="radio radio-sm mt-1" type="radio"/> <div><div class="font-semibold"> </div> <div class="text-base-content/80 text-sm"> </div></div></label>`),
  ge = u(`<form method="POST"><input name="zoom" hidden=""/> <section class="flex gap-3"><!> <div class="min-w-0"><h2 class="text-xl font-semibold"><!></h2> <!></div></section> <!> <section class="mt-6"><h3 class="text-base-content/80 text-base"> </h3> <div class="mt-2 flex flex-col gap-3"></div></section> <section class="mt-6"><!></section> <section class="mt-3 flex justify-end gap-2"><button type="button" class="btn"> </button> <button class="btn btn-error"> </button></section></form>`),
  _e = u(`<dialog class="modal" closedby="any"><div class="modal-box max-h-[97%] max-w-xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button></form> <!></div></dialog>`);

function ve(u, w) {
  l(w, !0);
  let ve = [],
    B = d(w, `open`, 15),
    V = v(!1),
    H = v(``),
    U = v(``),
    W = v(null),
    G = v(null),
    ye = I(() => B()),
    be = [{
      value: `griefing`,
      label: F.griefing(),
      description: F.griefing_description()
    }, {
      value: `inappropriate-content`,
      label: F.inappropriate_content(),
      description: F.inappropriate_content_description()
    }, {
      value: `hate-speech`,
      label: F.hate_speech(),
      description: F.hate_speech_description()
    }, {
      value: `doxxing`,
      label: F.doxxing(),
      description: F.doxxing_description()
    }, {
      value: `bot`,
      label: F.bot(),
      description: F.bot_description()
    }, {
      value: `multi-accounting`,
      label: F.multi_accounting(),
      description: F.multi_accounting_report_description()
    }, {
      value: `other`,
      label: F.other(),
      description: F.other_description()
    }],
    K = o(() => {
      var e;
      return (e = w.targets) == null ? void 0 : e[0]
    });
  O(() => {
    B() || (y(H, ``), y(U, ``))
  });
  async function xe(e) {
    try {
      y(V, !0);
      for (let t of e)
        if (t.id !== 0) try {
          await N.postReportUserName(t.id), P.success(F.name_reported_successfully())
        } catch {
          P.error(F.report_failed())
        }
    } catch {
      P.error(F.report_failed())
    } finally {
      y(V, !1)
    }
  }
  async function Se(e) {
    try {
      y(V, !0);
      for (let t of e)
        if (t.allianceId) try {
          await N.postReportAllianceName(t.allianceId), P.success(F.alliance_name_reported_successfully())
        } catch {
          P.error(F.report_failed())
        }
    } catch {
      P.error(F.report_failed())
    } finally {
      y(V, !1)
    }
  }
  var q = _e(),
    J = E(q),
    Ce = t(E(J), 2),
    we = i => {
      var l = ge(),
        u = E(l);
      f(u);
      var d = t(u, 2),
        _ = E(d),
        v = e => {
          {
            let t = o(() => p(K).id ?? 0);
            ae(e, {
              get userId() {
                return p(t)
              },
              get pictureUrl() {
                return p(K).picture
              },
              get avatarSeed() {
                return p(K).avatarSeed
              },
              class: `size-14`
            })
          }
        };
      n(_, e => {
        p(K) && w.targets.length === 1 && e(v)
      });
      var O = t(_, 2),
        I = E(O),
        _e = E(I),
        ye = e => {
          var t = m();
          T(e => S(t, e), [() => F.report_user()]), c(e, t)
        },
        q = e => {
          var t = m();
          T(e => S(t, e), [() => F.timeout_user()]), c(e, t)
        },
        J = e => {
          var t = m();
          T(e => S(t, e), [() => F.ban_user()]), c(e, t)
        };
      n(_e, e => {
        w.action === `report-user` ? e(ye) : w.action === `timeout` ? e(q, 1) : w.action === `ban` && e(J, 2)
      }), b(I);
      var Ce = t(I, 2),
        we = e => {
          var r = fe(),
            i = E(r);
          se(i, {
            get userId() {
              return p(K).id
            },
            linkClass: `flex gap-1.5`,
            textClass: `flex gap-1.5`,
            children: (e, n) => {
              var r = le(),
                i = s(r),
                a = E(i, !0);
              b(i);
              var o = t(i, 2),
                l = E(o);
              b(o), T(() => {
                S(a, p(K).name), S(l, `#${p(K).id??``}`)
              }), c(e, r)
            },
            $$slots: {
              default: !0
            }
          });
          var l = t(i, 2),
            u = e => {
              var t = ue(),
                n = E(t);
              b(t), T(() => S(n, `+${w.targets.length-1} more`)), c(e, t)
            };
          n(l, e => {
            w.targets.length > 1 && e(u)
          });
          var d = t(l, 2),
            f = e => {
              {
                let t = o(() => R(p(K).allianceId)),
                  n = o(() => L(p(K).allianceId)),
                  r = o(() => R(p(K).allianceId)),
                  i = o(() => L(p(K).allianceId));
                ce(e, {
                  get allianceId() {
                    return p(K).allianceId
                  },
                  get linkClass() {
                    return `badge badge-sm ml-0.5 border-0 ${p(t)??``} ${p(n)??``}`
                  },
                  get textClass() {
                    return `badge badge-sm ml-0.5 border-0 ${p(r)??``} ${p(i)??``}`
                  },
                  children: (e, t) => {
                    ee();
                    var n = m();
                    T(() => S(n, p(K).allianceName)), c(e, n)
                  },
                  $$slots: {
                    default: !0
                  }
                })
              }
            };
          n(d, e => {
            p(K).allianceId && p(K).allianceName && e(f)
          });
          var h = t(d, 2),
            g = e => {
              var t = z(),
                n = E(t);
              ie(n, {
                class: `text-error inline size-4`
              }), b(t), T(e => D(t, `data-tip`, e), [() => F.banned()]), c(e, t)
            },
            _ = e => {
              var t = z(),
                n = E(t);
              re(n, {
                class: `text-warning inline size-4`
              }), b(t), T(e => D(t, `data-tip`, e), [() => F.timeout()]), c(e, t)
            };
          n(h, e => {
            p(K).banned ? e(g) : p(K).timedOut && e(_, 1)
          });
          var v = t(h, 2),
            y = E(v),
            C = E(y);
          ne(C, {
            class: `text-error/80 inline size-4`
          }), b(y);
          var O = t(y, 2),
            k = E(O),
            A = E(k),
            j = E(A, !0);
          b(A), b(k);
          var M = t(k, 2),
            N = e => {
              var t = de(),
                n = E(t),
                r = E(n, !0);
              b(n), b(t), T(e => S(r, e), [() => F.report_alliance()]), x(`click`, n, async () => {
                await Se(w.targets), document.activeElement.blur()
              }), c(e, t)
            },
            P = o(() => w.targets.some(e => e.allianceId));
          n(M, e => {
            p(P) && e(N)
          }), b(O), b(v), b(r), T((e, t) => {
            a(r, 1, `font-medium ${e??``} flex flex-wrap items-center gap-1.5`), S(j, t)
          }, [() => L(p(K).id), () => F.report_name()]), x(`click`, A, async () => {
            await xe(w.targets), document.activeElement.blur()
          }), c(e, r)
        };
      n(Ce, e => {
        p(K) && w.targets.length === 1 && e(we)
      }), b(O), b(d);
      var Te = t(d, 2),
        Ee = e => {
          var i = me(),
            a = E(i);
          r(a, 21, () => w.targets, e => e.id, (e, r) => {
            var i = pe(),
              a = E(i);
            ae(a, {
              class: `size-8`,
              get userId() {
                return p(r).id
              },
              get pictureUrl() {
                return p(r).picture
              },
              get avatarSeed() {
                return p(r).avatarSeed
              }
            });
            var l = t(a, 2),
              u = E(l),
              d = E(u);
            {
              let e = o(() => L(p(r).id)),
                n = o(() => L(p(r).id));
              se(d, {
                get userId() {
                  return p(r).id
                },
                get linkClass() {
                  return `font-medium ${p(e)??``} flex gap-1.5`
                },
                get textClass() {
                  return `font-medium ${p(n)??``} flex gap-1.5`
                },
                children: (e, n) => {
                  var i = le(),
                    a = s(i),
                    o = E(a, !0);
                  b(a);
                  var l = t(a, 2),
                    u = E(l);
                  b(l), T(() => {
                    S(o, p(r).name), S(u, `#${p(r).id??``}`)
                  }), c(e, i)
                },
                $$slots: {
                  default: !0
                }
              })
            }
            var f = t(d, 2),
              h = e => {
                {
                  let t = o(() => R(p(r).allianceId)),
                    n = o(() => L(p(r).allianceId)),
                    i = o(() => R(p(r).allianceId)),
                    a = o(() => L(p(r).allianceId));
                  ce(e, {
                    get allianceId() {
                      return p(r).allianceId
                    },
                    get linkClass() {
                      return `badge badge-xs border-0 ${p(t)??``} ${p(n)??``}`
                    },
                    get textClass() {
                      return `badge badge-xs border-0 ${p(i)??``} ${p(a)??``}`
                    },
                    children: (e, t) => {
                      ee();
                      var n = m();
                      T(() => S(n, p(r).allianceName)), c(e, n)
                    },
                    $$slots: {
                      default: !0
                    }
                  })
                }
              };
            n(f, e => {
              p(r).allianceId && p(r).allianceName && e(h)
            });
            var g = t(f, 2),
              _ = e => {
                var t = z(),
                  n = E(t);
                ie(n, {
                  class: `text-error inline size-3.5`
                }), b(t), T(e => D(t, `data-tip`, e), [() => F.banned()]), c(e, t)
              },
              v = e => {
                var t = z(),
                  n = E(t);
                re(n, {
                  class: `text-warning inline size-3.5`
                }), b(t), T(e => D(t, `data-tip`, e), [() => F.timeout()]), c(e, t)
              };
            n(g, e => {
              p(r).banned ? e(_) : p(r).timedOut && e(v, 1)
            }), b(u), b(l), b(i), c(e, i)
          }), b(a), b(i), c(e, i)
        };
      n(Te, e => {
        w.targets.length > 1 && e(Ee)
      });
      var Y = t(Te, 2),
        X = E(Y),
        De = E(X);
      b(X);
      var Oe = t(X, 2);
      r(Oe, 21, () => be, e => e.value, (e, n) => {
        var r = he(),
          i = E(r);
        f(i);
        var a, o = t(i, 2),
          s = E(o),
          l = E(s, !0);
        b(s);
        var u = t(s, 2),
          d = E(u, !0);
        b(u), b(o), b(r), T(() => {
          D(i, `aria-label`, p(n).label), a !== (a = p(n).value) && (i.value = (i.__value = p(n).value) ?? ``), S(l, p(n).label), S(d, p(n).description)
        }), g(ve, [], i, () => (p(n).value, p(H)), e => y(H, e)), c(e, r)
      }), b(Oe), b(Y);
      var Z = t(Y, 2),
        ke = E(Z);
      {
        let e = o(() => F.give_extra_context()),
          t = o(() => p(H) === `doxxing` ? 20 : 5);
        oe(ke, {
          class: `h-20 rounded-lg`,
          name: `notes`,
          get placeholder() {
            return p(e)
          },
          max: 2056,
          get min() {
            return p(t)
          },
          get value() {
            return p(U)
          },
          set value(e) {
            y(U, e, !0)
          },
          get validate() {
            return p(G)
          },
          set validate(e) {
            y(G, e, !0)
          }
        })
      }
      b(Z);
      var Ae = t(Z, 2),
        Q = E(Ae),
        je = E(Q, !0);
      b(Q);
      var $ = t(Q, 2),
        Me = E($, !0);
      b($), b(Ae), b(l), h(l, e => y(W, e), () => p(W)), T((t, n, r) => {
        e(u, w.zoom), S(De, `${t??``}:`), S(je, n), $.disabled = p(V), S(Me, r)
      }, [() => F.select_the_reason(), () => F.cancel(), () => F.report()]), C(`submit`, l, async e => {
        if (e.preventDefault(), p(V) || !p(G)()) return;
        let t = new FormData(p(W)),
          n = String(t.get(`reason`) ?? ``);
        if (!n) {
          P.error(F.select_a_reason());
          return
        }
        let r = String(t.get(`notes`) ?? ``),
          i = w.targets.map(e => e.id).filter(e => e !== 0);
        if (i.length === 0) {
          P.error(F.report_failed());
          return
        }
        try {
          if (y(V, !0), w.action === `report-user`) {
            if (!w.viewport) throw Error(F.report_failed());
            t.append(`reportedUserId`, String(i[0])), t.append(`latitude`, w.latLon[0].toString()), t.append(`longitude`, w.latLon[1].toString()), t.append(`viewportNorth`, w.viewport.north.toString()), t.append(`viewportSouth`, w.viewport.south.toString()), t.append(`viewportWest`, w.viewport.west.toString()), t.append(`viewportEast`, w.viewport.east.toString()), t.append(`viewportWidth`, w.viewport.width.toString()), t.append(`viewportHeight`, w.viewport.height.toString());
            let e = async () => {
              var n;
              let r = await te.getHeaders(``),
                a = await fetch(`${k}/report-user`, {
                  method: `POST`,
                  body: t,
                  credentials: `include`,
                  headers: r
                });
              if (((n = a.headers.get(`cf-mitigated`)) == null ? void 0 : n.toLowerCase()) === `challenge`) {
                if (te.setCfLikelyAutomated(!0), !await A()) throw Error(F.challenge_verification_not_completed());
                await e();
                return
              }
              if (a.status === 200 || a.status === 409 || a.status === 403) {
                var o;
                let t = await a.json().catch(() => ({}));
                if (t.error === `challenge-required` && t.tier) {
                  if (!await j(t.tier)) throw Error(F.challenge_verification_not_completed());
                  await e();
                  return
                }
                if (a.status === 403 && !t.reason) {
                  P.error(F.report_failed());
                  return
                }
                switch (t.reason) {
                  case `area_cooldown`:
                    P.warning(F.report_area_cooldown());
                    break;
                  case `reporter_banned`:
                    P.warning(F.reporter_banned());
                    break;
                  case `min_pixels_painted`:
                    P.warning(F.min_pixels_painted());
                    break;
                  case `max_report_per_hour`:
                    P.warning(F.max_report_per_hour());
                    break;
                  default:
                    P.success(F.report_sent())
                }(o = w.onsuccess) == null || o.call(w, {
                  action: w.action,
                  userIds: [i[0]]
                }), B(!1)
              } else P.error(F.report_failed())
            };
            await e()
          } else {
            var a;
            if (!w.image) throw Error(F.report_failed());
            let e = await w.image,
              t = await M(e);
            await N.postUsersSuspend({
              userIds: i,
              imageBase64: t,
              latitude: w.latLon[0],
              longitude: w.latLon[1],
              zoom: w.zoom,
              reason: n,
              notes: r
            }, w.origin, w.action);
            let o = w.action === `ban` ? i.length > 1 ? F.users_banned() : F.ban_user() : i.length > 1 ? F.users_timeouted() : F.timeout_user();
            P.success(o), (a = w.onsuccess) == null || a.call(w, {
              action: w.action,
              userIds: [i[0]]
            }), B(!1)
          }
        } catch (e) {
          P.error((e == null ? void 0 : e.message) ?? F.report_failed())
        } finally {
          y(V, !1)
        }
      }), x(`click`, Q, () => {
        B(!1)
      }), c(i, l)
    };
  n(Ce, e => {
    ye.current && e(we)
  }), b(J), b(q), _(q, () => e => {
    O(() => {
      B() ? e.show() : e.close()
    })
  }), C(`close`, q, () => B(!1)), c(u, q), i()
}
w([`click`]);
export {
  ve as t
};