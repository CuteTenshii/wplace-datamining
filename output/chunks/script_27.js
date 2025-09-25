import {
  g as u
} from "./B2fDDN0_.js";
import "./pVt66Zey.js";
import {
  o as De
} from "./B8N53q5g.js";
import {
  at as Be,
  p as Te,
  y as ae,
  aw as h,
  au as R,
  f as X,
  d as o,
  s as c,
  r as n,
  n as Ee,
  ax as se,
  b as g,
  c as Le,
  t as k,
  g as s,
  u as ie,
  b4 as J,
  ay as le,
  a as ce,
  v as Ue
} from "./Gq9F4eGO.js";
import {
  s as f
} from "./BXPKJLai.js";
import {
  p as Ie,
  i as C,
  r as Pe
} from "./C-xCYuxJ.js";
import {
  e as Ce
} from "./DbZslGE1.js";
import {
  f as ze,
  r as D,
  s as ue,
  g as z,
  a as Me,
  b as Se
} from "./CCRDNZ69.js";
import {
  t as Ae
} from "./dmbGcFzo.js";
import {
  c as Oe
} from "./DOe5jxLX.js";
import {
  b as je
} from "./K_nA0b1m.js";
import {
  i as Ne,
  h as qe,
  f as Ze,
  j as Fe,
  k as He,
  P as Q,
  t as W
} from "./ChUwtUQt.js";
import {
  o as Ke,
  L as Ve,
  s as Ye,
  a as Ge,
  g as Je
} from "./yCumtOxb.js";
import {
  P as Qe
} from "./CxIiDBOG.js";
import {
  c as We
} from "./D-Yb-E5E.js";
import {
  g as Xe
} from "./DzsbGiUu.js";
import {
  f as $e
} from "./COj5CVKO.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "088e15254cf0e82f60d1a6be25f10d078aac5191"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "66bbb02f-2e45-48b1-b4e0-91d8d5145a93", t._sentryDebugIdIdentifier = "sentry-dbid-66bbb02f-2e45-48b1-b4e0-91d8d5145a93")
  })()
} catch {}
const et = () => "Copy",
  tt = () => "Copiar",
  lr = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? et() : tt(),
  rt = () => "Report User",
  nt = () => "Reportar usuário",
  ot = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? rt() : nt(),
  at = () => "Timeout User",
  st = () => "Suspender usuário",
  it = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? at() : st(),
  lt = () => "Ban User",
  ct = () => "Banir usuário",
  ut = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? lt() : ct(),
  pt = () => "+18, inappropriate link, highly suggestive content, ...",
  dt = () => "+18, links inapropriados, conteúdo altamente sugestivo, ...",
  ft = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? pt() : dt(),
  _t = () => "Use of software to completely automate painting",
  mt = () => "Uso de software para pintar de forma completamente automatizada ",
  vt = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? _t() : mt(),
  bt = () => "Racism, homophobia, hate groups, ...",
  gt = () => "Racismo, homofobia, grupos de ódio, ...",
  ht = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? bt() : gt(),
  xt = () => "Messed up artworks for no reason",
  yt = () => "Estragar desenho dos outros sem motivo",
  wt = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? xt() : yt(),
  Rt = () => "Released other's personal information without their consent",
  kt = () => "Vazar informações pessoais de terceiros sem consentimento",
  Dt = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? Rt() : kt(),
  Bt = () => "Other reason not listed",
  Tt = () => "Outro motivo não listado",
  Et = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? Bt() : Tt(),
  Lt = () => "Report",
  Ut = () => "Reportar",
  It = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? Lt() : Ut(),
  Pt = () => "Report sent successfully",
  Ct = () => "Denúncia enviada com sucesso",
  zt = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? Pt() : Ct(),
  Mt = () => "Report failed. Please try again later",
  St = () => "Denúncia falhou. Por favor, tente novamente mais tarde",
  At = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? Mt() : St(),
  Ot = () => "Purchases",
  jt = () => "Compras",
  cr = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? Ot() : jt();
var Nt = X('<label class="flex gap-3"><input name="reason" class="radio radio-sm mt-1" type="radio"/> <div><div class="font-semibold"> </div> <div class="text-base-content/80 text-sm"> </div></div></label>'),
  qt = (t, e) => {
    e(!1)
  },
  Zt = X('<form method="POST"><input name="reportedUserId" hidden/> <input name="latitude" hidden/> <input name="longitude" hidden/> <input name="zoom" hidden/> <section class="flex gap-3"><!> <div><h2 class="text-xl font-semibold"><!></h2> <span><span> </span> <span> </span></span></div></section> <section class="mt-6"><h3 class="text-base-content/80 text-base"> </h3> <div class="mt-2 flex flex-col gap-3"></div></section> <section class="mt-6"><!></section> <section class="mt-3 flex justify-end gap-2"><button type="button" class="btn"> </button> <button class="btn btn-error"> </button></section></form>'),
  Ft = X('<dialog class="modal"><div class="modal-box max-h-[97%] max-w-xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function ur(t, e) {
  Te(e, !0);
  const i = [];
  let d = Ie(e, "open", 15),
    B = R(!1),
    T = R(""),
    M = R(""),
    E = R(null),
    S = R(null);
  const pe = [{
    value: "inappropriate-content",
    label: Ne(),
    description: ft()
  }, {
    value: "hate-speech",
    label: qe(),
    description: ht()
  }, {
    value: "doxxing",
    label: Ze(),
    description: Dt()
  }, {
    value: "bot",
    label: Fe(),
    description: vt()
  }, {
    value: "griefing",
    label: He(),
    description: wt()
  }, {
    value: "other",
    label: Ke(),
    description: Et()
  }];
  De(() => {
    const _ = m => {
      m.key === "Escape" && d(!1)
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _)
  }), ae(() => {
    d() || (h(T, ""), h(M, ""))
  });
  const de = {
    "report-user": `${Q}/report-user`,
    timeout: `${Q}/moderator/timeout-user`,
    ban: `${Q}/admin/ban-user`
  };
  var x = Ft(),
    $ = o(x),
    fe = c(o($), 2);
  {
    var _e = _ => {
      var m = Zt(),
        A = o(m);
      D(A);
      var O = c(A, 2);
      D(O);
      var j = c(O, 2);
      D(j);
      var N = c(j, 2);
      D(N);
      var q = c(N, 2),
        ee = o(q);
      Qe(ee, {
        get userId() {
          return e.paintedBy.id
        },
        get pictureUrl() {
          return e.paintedBy.picture
        },
        class: "size-14"
      });
      var te = c(ee, 2),
        Z = o(te),
        me = o(Z);
      {
        var ve = a => {
            var r = J();
            k(l => f(r, l), [() => ot()]), g(a, r)
          },
          be = a => {
            var r = le(),
              l = ce(r);
            {
              var p = v => {
                  var b = J();
                  k(y => f(b, y), [() => it()]), g(v, b)
                },
                U = v => {
                  var b = le(),
                    y = ce(b);
                  {
                    var I = w => {
                      var P = J();
                      k(ke => f(P, ke), [() => ut()]), g(w, P)
                    };
                    C(y, w => {
                      e.action === "ban" && w(I)
                    }, !0)
                  }
                  g(v, b)
                };
              C(l, v => {
                e.action === "timeout" ? v(p) : v(U, !1)
              }, !0)
            }
            g(a, r)
          };
        C(me, a => {
          e.action === "report-user" ? a(ve) : a(be, !1)
        })
      }
      n(Z);
      var F = c(Z, 2),
        H = o(F),
        ge = o(H, !0);
      n(H);
      var re = c(H, 2),
        he = o(re);
      n(re), n(F), n(te), n(q);
      var K = c(q, 2),
        V = o(K),
        xe = o(V);
      n(V);
      var ne = c(V, 2);
      Ce(ne, 21, () => pe, a => a.value, (a, r) => {
        var l = Nt(),
          p = o(l);
        D(p);
        var U, v = c(p, 2),
          b = o(v),
          y = o(b, !0);
        n(b);
        var I = c(b, 2),
          w = o(I, !0);
        n(I), n(v), n(l), k(() => {
          ue(p, "aria-label", s(r).label), U !== (U = s(r).value) && (p.value = (p.__value = s(r).value) ?? ""), f(y, s(r).label), f(w, s(r).description)
        }), Oe(i, [], p, () => (s(r).value, s(T)), P => h(T, P)), g(a, l)
      }), n(ne), n(K);
      var Y = c(K, 2),
        ye = o(Y);
      {
        let a = ie(() => Je()),
          r = ie(() => s(T) === "doxxing" ? 20 : 5);
        Ve(ye, {
          class: "h-20 rounded-lg",
          name: "notes",
          get placeholder() {
            return s(a)
          },
          max: 2056,
          get min() {
            return s(r)
          },
          get value() {
            return s(M)
          },
          set value(l) {
            h(M, l, !0)
          },
          get validate() {
            return s(S)
          },
          set validate(l) {
            h(S, l, !0)
          }
        })
      }
      n(Y);
      var oe = c(Y, 2),
        L = o(oe);
      L.__click = [qt, d];
      var we = o(L, !0);
      n(L);
      var G = c(L, 2),
        Re = o(G, !0);
      n(G), n(oe), n(m), je(m, a => h(E, a), () => s(E)), k((a, r, l, p) => {
        ue(m, "action", de[e.action]), z(A, e.paintedBy.id), z(O, e.latLon[0]), z(j, e.latLon[1]), z(N, e.zoom), Me(F, 1, `font-medium ${a??""} flex gap-1.5`), f(ge, e.paintedBy.name), f(he, `#${e.paintedBy.id??""}`), f(xe, `${r??""}:`), f(we, l), G.disabled = s(B), f(Re, p)
      }, [() => Xe(e.paintedBy.id), () => Ye(), () => We(), () => It()]), se("submit", m, async a => {
        if (a.preventDefault(), !s(B) && s(S)()) try {
          h(B, !0);
          const r = new FormData(s(E));
          if (!r.get("reason")) {
            W.error(Ge());
            return
          }
          const l = await e.image;
          r.append("image", l, `report-${Date.now()}.jpeg`);
          const p = await fetch(s(E).action, {
            method: "POST",
            body: r,
            credentials: "include"
          });
          p.status === 200 || p.status === 409 ? (W.info(zt()), d(!1)) : W.error(At())
        } finally {
          h(B, !1)
        }
      }), Ae(2, m, () => $e), g(_, m)
    };
    C(fe, _ => {
      d() && _(_e)
    })
  }
  n($), Ee(2), n(x), ze(x, () => _ => {
    ae(() => {
      d() ? _.show() : _.close()
    })
  }), se("close", x, () => d(!1)), g(t, x), Le()
}
Be(["click"]);
var Ht = Ue('<svg><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');

function pr(t, e) {
  let i = Pe(e, ["$$slots", "$$events", "$$legacy"]);
  var d = Ht();
  Se(d, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...i
  })), g(t, d)
}
export {
  pr as D, ur as R, ut as b, lr as c, cr as p, ot as r, it as t
};