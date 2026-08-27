import "./Bzak7iHL.js";
import {
  k as $e,
  p as et,
  y as xe,
  h as z,
  d as n,
  s as u,
  r as i,
  v as we,
  a as f,
  b as tt,
  e as K,
  i as e,
  t as x,
  m as ce,
  c as A,
  u as I,
  o as V,
  f as ye,
  n as Ie
} from "./D5GL_E7i.js";
import {
  s as g
} from "./BATewRf7.js";
import {
  i as P
} from "./unjGrhDm.js";
import {
  e as ke
} from "./Clrj6tX0.js";
import {
  f as at,
  r as Se,
  s as J,
  g as rt,
  a as it
} from "./Ce1mtF2R.js";
import {
  a as nt
} from "./siaHaSCw.js";
import {
  b as ot
} from "./59dp7Pbq.js";
import {
  p as st
} from "./LT-XNHCk.js";
import {
  P as lt
} from "./DHnjfrE5.js";
import {
  t as p,
  h as Ce,
  i as dt,
  v as ct,
  j as ut,
  a as ue
} from "./DH3WiCeb.js";
import {
  L as vt
} from "./yviJjW4X.js";
import {
  P as Le
} from "./DVUNSmMz.js";
import {
  S as ze
} from "./C73E-giv.js";
import {
  S as Ne
} from "./C_Ihx5JS.js";
import {
  G as Pe,
  T as Ue
} from "./DzC6MGf5.js";
import {
  W as _t
} from "./TCJCGDMB.js";
import {
  m as t
} from "./XL5Wf48w.js";
import {
  g as j,
  a as $
} from "./V2xpa7IR.js";
import {
  k as mt
} from "./BDW2UD0r.js";
var Te = A("<span> </span> <span> </span>", 1),
  ft = A('<span class="badge badge-sm border-0"> </span>'),
  ee = A('<span class="tooltip"><!></span>'),
  gt = A('<li><button class="text-error py-2 font-medium"> </button></li>'),
  pt = A('<div><!> <!> <!> <!> <div class="dropdown dropdown-bottom max-sm:dropdown-bottom max-sm:dropdown-left"><button tabindex="0" class="btn btn-xs btn-circle btn-ghost"><!></button> <ul class="dropdown-content menu bg-base-100 z-1 mb-1 w-max gap-0.5 rounded-xl p-2.5 shadow-sm"><li><button class="text-error py-2 font-medium"> </button></li> <!></ul></div></div>'),
  bt = A('<li class="flex items-center gap-2 px-3 py-2"><!> <div class="min-w-0"><div class="flex flex-wrap items-center gap-1"><!> <!> <!></div></div></li>'),
  ht = A('<div class="border-base-300 mt-4 max-h-40 overflow-y-auto rounded-lg border"><ul class="divide-base-200 divide-y"></ul></div>'),
  xt = A('<label class="flex gap-3"><input name="reason" class="radio radio-sm mt-1" type="radio"/> <div><div class="font-semibold"> </div> <div class="text-base-content/80 text-sm"> </div></div></label>'),
  wt = A('<form method="POST"><input name="zoom" hidden=""/> <section class="flex gap-3"><!> <div class="min-w-0"><h2 class="text-xl font-semibold"><!></h2> <!></div></section> <!> <section class="mt-6"><h3 class="text-base-content/80 text-base"> </h3> <div class="mt-2 flex flex-col gap-3"></div></section> <section class="mt-6"><!></section> <section class="mt-3 flex justify-end gap-2"><button type="button" class="btn"> </button> <button class="btn btn-error"> </button></section></form>'),
  yt = A('<dialog class="modal" closedby="any"><div class="modal-box max-h-[97%] max-w-xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute top-2 right-2">✕</button></form> <!></div></dialog>');

function Gt(Ae, a) {
  et(a, !0);
  const Ee = [];
  let W = st(a, "open", 15),
    R = K(!1),
    Q = K(""),
    te = K(""),
    ae = K(null),
    re = K(null);
  const Re = mt(() => W()),
    Be = [{
      value: "griefing",
      label: t.griefing(),
      description: t.griefing_description()
    }, {
      value: "inappropriate-content",
      label: t.inappropriate_content(),
      description: t.inappropriate_content_description()
    }, {
      value: "hate-speech",
      label: t.hate_speech(),
      description: t.hate_speech_description()
    }, {
      value: "doxxing",
      label: t.doxxing(),
      description: t.doxxing_description()
    }, {
      value: "bot",
      label: t.bot(),
      description: t.bot_description()
    }, {
      value: "multi-accounting",
      label: t.multi_accounting(),
      description: t.multi_accounting_report_description()
    }, {
      value: "other",
      label: t.other(),
      description: t.other_description()
    }];
  let m = I(() => {
    var k;
    return (k = a.targets) == null ? void 0 : k[0]
  });
  xe(() => {
    W() || (z(Q, ""), z(te, ""))
  });
  async function De(k) {
    try {
      z(R, !0);
      for (const S of k)
        if (S.id !== 0) try {
          await ue.postReportUserName(S.id), p.success(t.name_reported_successfully())
        } catch {
          p.error(t.report_failed())
        }
    } catch {
      p.error(t.report_failed())
    } finally {
      z(R, !1)
    }
  }
  async function We(k) {
    try {
      z(R, !0);
      for (const S of k)
        if (S.allianceId) try {
          await ue.postReportAllianceName(S.allianceId), p.success(t.alliance_name_reported_successfully())
        } catch {
          p.error(t.report_failed())
        }
    } catch {
      p.error(t.report_failed())
    } finally {
      z(R, !1)
    }
  }
  var q = yt(),
    ve = n(q),
    Oe = u(n(ve), 2);
  {
    var je = k => {
      var S = wt(),
        X = n(S);
      Se(X);
      var ie = u(X, 2),
        _e = n(ie);
      {
        var He = o => {
          {
            let r = I(() => e(m).id ?? 0);
            Le(o, {
              get userId() {
                return e(r)
              },
              get pictureUrl() {
                return e(m).picture
              },
              get avatarSeed() {
                return e(m).avatarSeed
              },
              class: "size-14"
            })
          }
        };
        P(_e, o => {
          e(m) && a.targets.length === 1 && o(He)
        })
      }
      var me = u(_e, 2),
        ne = n(me),
        qe = n(ne);
      {
        var Ge = o => {
            var r = V();
            x(c => g(r, c), [() => t.report_user()]), f(o, r)
          },
          Me = o => {
            var r = V();
            x(c => g(r, c), [() => t.timeout_user()]), f(o, r)
          },
          Fe = o => {
            var r = V();
            x(c => g(r, c), [() => t.ban_user()]), f(o, r)
          };
        P(qe, o => {
          a.action === "report-user" ? o(Ge) : a.action === "timeout" ? o(Me, 1) : a.action === "ban" && o(Fe, 2)
        })
      }
      i(ne);
      var Ke = u(ne, 2);
      {
        var Ve = o => {
          var r = pt(),
            c = n(r);
          Ne(c, {
            get userId() {
              return e(m).id
            },
            linkClass: "flex gap-1.5",
            textClass: "flex gap-1.5",
            children: (l, d) => {
              var _ = Te(),
                C = ye(_),
                F = n(C, !0);
              i(C);
              var Z = u(C, 2),
                be = n(Z);
              i(Z), x(() => {
                g(F, e(m).name), g(be, `#${e(m).id??""}`)
              }), f(l, _)
            },
            $$slots: {
              default: !0
            }
          });
          var w = u(c, 2);
          {
            var s = l => {
              var d = ft(),
                _ = n(d);
              i(d), x(() => g(_, `+${a.targets.length-1} more`)), f(l, d)
            };
            P(w, l => {
              a.targets.length > 1 && l(s)
            })
          }
          var L = u(w, 2);
          {
            var v = l => {
              {
                let d = I(() => $(e(m).allianceId)),
                  _ = I(() => j(e(m).allianceId)),
                  C = I(() => $(e(m).allianceId)),
                  F = I(() => j(e(m).allianceId));
                ze(l, {
                  get allianceId() {
                    return e(m).allianceId
                  },
                  get linkClass() {
                    return `badge badge-sm ml-0.5 border-0 ${e(d)??""} ${e(_)??""}`
                  },
                  get textClass() {
                    return `badge badge-sm ml-0.5 border-0 ${e(C)??""} ${e(F)??""}`
                  },
                  children: (Z, be) => {
                    Ie();
                    var he = V();
                    x(() => g(he, e(m).allianceName)), f(Z, he)
                  },
                  $$slots: {
                    default: !0
                  }
                })
              }
            };
            P(L, l => {
              e(m).allianceId && e(m).allianceName && l(v)
            })
          }
          var N = u(L, 2);
          {
            var b = l => {
                var d = ee(),
                  _ = n(d);
                Pe(_, {
                  class: "text-error inline size-4"
                }), i(d), x(C => J(d, "data-tip", C), [() => t.banned()]), f(l, d)
              },
              O = l => {
                var d = ee(),
                  _ = n(d);
                Ue(_, {
                  class: "text-warning inline size-4"
                }), i(d), x(C => J(d, "data-tip", C), [() => t.timeout()]), f(l, d)
              };
            P(N, l => {
              e(m).banned ? l(b) : e(m).timedOut && l(O, 1)
            })
          }
          var U = u(N, 2),
            B = n(U),
            T = n(B);
          _t(T, {
            class: "text-error/80 inline size-4"
          }), i(B);
          var G = u(B, 2),
            M = n(G),
            h = n(M),
            y = n(h, !0);
          i(h), i(M);
          var E = u(M, 2);
          {
            var D = l => {
                var d = gt(),
                  _ = n(d),
                  C = n(_, !0);
                i(_), i(d), x(F => g(C, F), [() => t.report_alliance()]), ce("click", _, async () => {
                  await We(a.targets), document.activeElement.blur()
                }), f(l, d)
              },
              H = I(() => a.targets.some(l => l.allianceId));
            P(E, l => {
              e(H) && l(D)
            })
          }
          i(G), i(U), i(r), x((l, d) => {
            it(r, 1, `font-medium ${l??""} flex flex-wrap items-center gap-1.5`), g(y, d)
          }, [() => j(e(m).id), () => t.report_name()]), ce("click", h, async () => {
            await De(a.targets), document.activeElement.blur()
          }), f(o, r)
        };
        P(Ke, o => {
          e(m) && a.targets.length === 1 && o(Ve)
        })
      }
      i(me), i(ie);
      var fe = u(ie, 2);
      {
        var Je = o => {
          var r = ht(),
            c = n(r);
          ke(c, 21, () => a.targets, w => w.id, (w, s) => {
            var L = bt(),
              v = n(L);
            Le(v, {
              class: "size-8",
              get userId() {
                return e(s).id
              },
              get pictureUrl() {
                return e(s).picture
              },
              get avatarSeed() {
                return e(s).avatarSeed
              }
            });
            var N = u(v, 2),
              b = n(N),
              O = n(b);
            {
              let h = I(() => j(e(s).id)),
                y = I(() => j(e(s).id));
              Ne(O, {
                get userId() {
                  return e(s).id
                },
                get linkClass() {
                  return `font-medium ${e(h)??""} flex gap-1.5`
                },
                get textClass() {
                  return `font-medium ${e(y)??""} flex gap-1.5`
                },
                children: (E, D) => {
                  var H = Te(),
                    l = ye(H),
                    d = n(l, !0);
                  i(l);
                  var _ = u(l, 2),
                    C = n(_);
                  i(_), x(() => {
                    g(d, e(s).name), g(C, `#${e(s).id??""}`)
                  }), f(E, H)
                },
                $$slots: {
                  default: !0
                }
              })
            }
            var U = u(O, 2);
            {
              var B = h => {
                {
                  let y = I(() => $(e(s).allianceId)),
                    E = I(() => j(e(s).allianceId)),
                    D = I(() => $(e(s).allianceId)),
                    H = I(() => j(e(s).allianceId));
                  ze(h, {
                    get allianceId() {
                      return e(s).allianceId
                    },
                    get linkClass() {
                      return `badge badge-xs border-0 ${e(y)??""} ${e(E)??""}`
                    },
                    get textClass() {
                      return `badge badge-xs border-0 ${e(D)??""} ${e(H)??""}`
                    },
                    children: (l, d) => {
                      Ie();
                      var _ = V();
                      x(() => g(_, e(s).allianceName)), f(l, _)
                    },
                    $$slots: {
                      default: !0
                    }
                  })
                }
              };
              P(U, h => {
                e(s).allianceId && e(s).allianceName && h(B)
              })
            }
            var T = u(U, 2);
            {
              var G = h => {
                  var y = ee(),
                    E = n(y);
                  Pe(E, {
                    class: "text-error inline size-3.5"
                  }), i(y), x(D => J(y, "data-tip", D), [() => t.banned()]), f(h, y)
                },
                M = h => {
                  var y = ee(),
                    E = n(y);
                  Ue(E, {
                    class: "text-warning inline size-3.5"
                  }), i(y), x(D => J(y, "data-tip", D), [() => t.timeout()]), f(h, y)
                };
              P(T, h => {
                e(s).banned ? h(G) : e(s).timedOut && h(M, 1)
              })
            }
            i(b), i(N), i(L), f(w, L)
          }), i(c), i(r), f(o, r)
        };
        P(fe, o => {
          a.targets.length > 1 && o(Je)
        })
      }
      var oe = u(fe, 2),
        se = n(oe),
        Qe = n(se);
      i(se);
      var ge = u(se, 2);
      ke(ge, 21, () => Be, o => o.value, (o, r) => {
        var c = xt(),
          w = n(c);
        Se(w);
        var s, L = u(w, 2),
          v = n(L),
          N = n(v, !0);
        i(v);
        var b = u(v, 2),
          O = n(b, !0);
        i(b), i(L), i(c), x(() => {
          J(w, "aria-label", e(r).label), s !== (s = e(r).value) && (w.value = (w.__value = e(r).value) ?? ""), g(N, e(r).label), g(O, e(r).description)
        }), nt(Ee, [], w, () => (e(r).value, e(Q)), U => z(Q, U)), f(o, c)
      }), i(ge), i(oe);
      var le = u(oe, 2),
        Xe = n(le);
      {
        let o = I(() => t.give_extra_context()),
          r = I(() => e(Q) === "doxxing" ? 20 : 5);
        vt(Xe, {
          class: "h-20 rounded-lg",
          name: "notes",
          get placeholder() {
            return e(o)
          },
          max: 2056,
          get min() {
            return e(r)
          },
          get value() {
            return e(te)
          },
          set value(c) {
            z(te, c, !0)
          },
          get validate() {
            return e(re)
          },
          set validate(c) {
            z(re, c, !0)
          }
        })
      }
      i(le);
      var pe = u(le, 2),
        Y = n(pe),
        Ye = n(Y, !0);
      i(Y);
      var de = u(Y, 2),
        Ze = n(de, !0);
      i(de), i(pe), i(S), ot(S, o => z(ae, o), () => e(ae)), x((o, r, c) => {
        rt(X, a.zoom), g(Qe, `${o??""}:`), g(Ye, r), de.disabled = e(R), g(Ze, c)
      }, [() => t.select_the_reason(), () => t.cancel(), () => t.report()]), we("submit", S, async o => {
        var L;
        if (o.preventDefault(), e(R) || !e(re)()) return;
        const r = new FormData(e(ae)),
          c = String(r.get("reason") ?? "");
        if (!c) {
          p.error(t.select_a_reason());
          return
        }
        const w = String(r.get("notes") ?? ""),
          s = a.targets.map(v => v.id).filter(v => v !== 0);
        if (s.length === 0) {
          p.error(t.report_failed());
          return
        }
        try {
          if (z(R, !0), a.action === "report-user") {
            if (!a.viewport) throw new Error(t.report_failed());
            r.append("reportedUserId", String(s[0])), r.append("latitude", a.latLon[0].toString()), r.append("longitude", a.latLon[1].toString()), r.append("viewportNorth", a.viewport.north.toString()), r.append("viewportSouth", a.viewport.south.toString()), r.append("viewportWest", a.viewport.west.toString()), r.append("viewportEast", a.viewport.east.toString()), r.append("viewportWidth", a.viewport.width.toString()), r.append("viewportHeight", a.viewport.height.toString());
            const v = async () => {
              var U, B;
              const N = await Ce.getHeaders(""),
                b = await fetch(`${lt}/report-user`, {
                  method: "POST",
                  body: r,
                  credentials: "include",
                  headers: N
                });
              if (((U = b.headers.get("cf-mitigated")) == null ? void 0 : U.toLowerCase()) === "challenge") {
                if (Ce.setCfLikelyAutomated(!0), !await dt()) throw new Error(t.challenge_verification_not_completed());
                await v();
                return
              }
              if (b.status === 200 || b.status === 409 || b.status === 403) {
                const T = await b.json().catch(() => ({}));
                if (T.error === "challenge-required" && T.tier) {
                  if (!await ct(T.tier)) throw new Error(t.challenge_verification_not_completed());
                  await v();
                  return
                }
                if (b.status === 403 && !T.reason) {
                  p.error(t.report_failed());
                  return
                }
                switch (T.reason) {
                  case "area_cooldown":
                    p.warning(t.report_area_cooldown());
                    break;
                  case "reporter_banned":
                    p.warning(t.reporter_banned());
                    break;
                  case "min_pixels_painted":
                    p.warning(t.min_pixels_painted());
                    break;
                  case "max_report_per_hour":
                    p.warning(t.max_report_per_hour());
                    break;
                  default:
                    p.success(t.report_sent());
                    break
                }(B = a.onsuccess) == null || B.call(a, {
                  action: a.action,
                  userIds: [s[0]]
                }), W(!1)
              } else p.error(t.report_failed())
            };
            await v()
          } else {
            if (!a.image) throw new Error(t.report_failed());
            const v = await a.image,
              N = await ut(v);
            await ue.postUsersSuspend({
              userIds: s,
              imageBase64: N,
              latitude: a.latLon[0],
              longitude: a.latLon[1],
              zoom: a.zoom,
              reason: c,
              notes: w
            }, a.origin, a.action);
            const b = a.action === "ban" ? s.length > 1 ? t.users_banned() : t.ban_user() : s.length > 1 ? t.users_timeouted() : t.timeout_user();
            p.success(b), (L = a.onsuccess) == null || L.call(a, {
              action: a.action,
              userIds: [s[0]]
            }), W(!1)
          }
        } catch (v) {
          p.error((v == null ? void 0 : v.message) ?? t.report_failed())
        } finally {
          z(R, !1)
        }
      }), ce("click", Y, () => {
        W(!1)
      }), f(k, S)
    };
    P(Oe, k => {
      Re.current && k(je)
    })
  }
  i(ve), i(q), at(q, () => k => {
    xe(() => {
      W() ? k.show() : k.close()
    })
  }), we("close", q, () => W(!1)), f(Ae, q), tt()
}
$e(["click"]);
export {
  Gt as R
};