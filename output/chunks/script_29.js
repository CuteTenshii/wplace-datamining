import {
  g as u
} from "./Ck9C8CiE.js";
import "./CrvzmjT9.js";
import {
  o as De
} from "./d32o8Ich.js";
import {
  av as Be,
  p as Te,
  y as ae,
  Z as h,
  Y as R,
  f as X,
  d as o,
  s as c,
  r as n,
  n as Ee,
  ax as se,
  b,
  c as Le,
  t as k,
  g as s,
  u as ie,
  b4 as J,
  ay as le,
  a as ce,
  v as Ue
} from "./DX6AFU53.js";
import {
  s as f
} from "./CHUYULMG.js";
import {
  p as Ie,
  i as C,
  r as Pe
} from "./DuVNK5FV.js";
import {
  e as Ce
} from "./BBVM9-04.js";
import {
  d as ze,
  r as D,
  s as ue,
  g as z,
  a as Me,
  b as Se
} from "./BQ6y4KYV.js";
import {
  t as Ae
} from "./BFTcFBg5.js";
import {
  c as Oe
} from "./ZpaGHR7h.js";
import {
  b as je
} from "./BBDkQdhy.js";
import {
  i as Ne,
  h as Ze,
  f as qe,
  j as Ye,
  k as Fe,
  P as Q,
  t as W
} from "./NHoJJuoS.js";
import {
  o as He,
  L as Ke,
  s as Ve,
  a as Ge,
  g as Je
} from "./BOiNW1hz.js";
import {
  P as Qe
} from "./R4One2e3.js";
import {
  c as We
} from "./CaLhR9N8.js";
import {
  g as Xe
} from "./B8g_TlyH.js";
import {
  f as $e
} from "./Ciz5uBtE.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "05ce49009207a0735deeeb4c7a853abc987d7d99"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "4b377fee-5302-495f-93f0-bc008ccc7dfa", t._sentryDebugIdIdentifier = "sentry-dbid-4b377fee-5302-495f-93f0-bc008ccc7dfa")
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
  vt = () => "Uso de software para pintar de forma completamente automatizada ",
  mt = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? _t() : vt(),
  gt = () => "Racism, homophobia, hate groups, ...",
  bt = () => "Racismo, homofobia, grupos de ódio, ...",
  ht = (t = {}, e = {}) => (e.locale ?? u()) === "en" ? gt() : bt(),
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
  Zt = (t, e) => {
    e(!1)
  },
  qt = X('<form method="POST"><input name="reportedUserId" hidden/> <input name="latitude" hidden/> <input name="longitude" hidden/> <input name="zoom" hidden/> <section class="flex gap-3"><!> <div><h2 class="text-xl font-semibold"><!></h2> <span><span> </span> <span> </span></span></div></section> <section class="mt-6"><h3 class="text-base-content/80 text-base"> </h3> <div class="mt-2 flex flex-col gap-3"></div></section> <section class="mt-6"><!></section> <section class="mt-3 flex justify-end gap-2"><button type="button" class="btn"> </button> <button class="btn btn-error"> </button></section></form>'),
  Yt = X('<dialog class="modal"><div class="modal-box max-h-[97%] max-w-xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

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
    label: Ze(),
    description: ht()
  }, {
    value: "doxxing",
    label: qe(),
    description: Dt()
  }, {
    value: "bot",
    label: Ye(),
    description: mt()
  }, {
    value: "griefing",
    label: Fe(),
    description: wt()
  }, {
    value: "other",
    label: He(),
    description: Et()
  }];
  De(() => {
    const _ = v => {
      v.key === "Escape" && d(!1)
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
  var x = Yt(),
    $ = o(x),
    fe = c(o($), 2);
  {
    var _e = _ => {
      var v = qt(),
        A = o(v);
      D(A);
      var O = c(A, 2);
      D(O);
      var j = c(O, 2);
      D(j);
      var N = c(j, 2);
      D(N);
      var Z = c(N, 2),
        ee = o(Z);
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
        q = o(te),
        ve = o(q);
      {
        var me = a => {
            var r = J();
            k(l => f(r, l), [() => ot()]), b(a, r)
          },
          ge = a => {
            var r = le(),
              l = ce(r);
            {
              var p = m => {
                  var g = J();
                  k(y => f(g, y), [() => it()]), b(m, g)
                },
                U = m => {
                  var g = le(),
                    y = ce(g);
                  {
                    var I = w => {
                      var P = J();
                      k(ke => f(P, ke), [() => ut()]), b(w, P)
                    };
                    C(y, w => {
                      e.action === "ban" && w(I)
                    }, !0)
                  }
                  b(m, g)
                };
              C(l, m => {
                e.action === "timeout" ? m(p) : m(U, !1)
              }, !0)
            }
            b(a, r)
          };
        C(ve, a => {
          e.action === "report-user" ? a(me) : a(ge, !1)
        })
      }
      n(q);
      var Y = c(q, 2),
        F = o(Y),
        be = o(F, !0);
      n(F);
      var re = c(F, 2),
        he = o(re);
      n(re), n(Y), n(te), n(Z);
      var H = c(Z, 2),
        K = o(H),
        xe = o(K);
      n(K);
      var ne = c(K, 2);
      Ce(ne, 21, () => pe, a => a.value, (a, r) => {
        var l = Nt(),
          p = o(l);
        D(p);
        var U, m = c(p, 2),
          g = o(m),
          y = o(g, !0);
        n(g);
        var I = c(g, 2),
          w = o(I, !0);
        n(I), n(m), n(l), k(() => {
          ue(p, "aria-label", s(r).label), U !== (U = s(r).value) && (p.value = (p.__value = s(r).value) ?? ""), f(y, s(r).label), f(w, s(r).description)
        }), Oe(i, [], p, () => (s(r).value, s(T)), P => h(T, P)), b(a, l)
      }), n(ne), n(H);
      var V = c(H, 2),
        ye = o(V);
      {
        let a = ie(() => Je()),
          r = ie(() => s(T) === "doxxing" ? 20 : 5);
        Ke(ye, {
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
      n(V);
      var oe = c(V, 2),
        L = o(oe);
      L.__click = [Zt, d];
      var we = o(L, !0);
      n(L);
      var G = c(L, 2),
        Re = o(G, !0);
      n(G), n(oe), n(v), je(v, a => h(E, a), () => s(E)), k((a, r, l, p) => {
        ue(v, "action", de[e.action]), z(A, e.paintedBy.id), z(O, e.latLon[0]), z(j, e.latLon[1]), z(N, e.zoom), Me(Y, 1, `font-medium ${a??""} flex gap-1.5`), f(be, e.paintedBy.name), f(he, `#${e.paintedBy.id??""}`), f(xe, `${r??""}:`), f(we, l), G.disabled = s(B), f(Re, p)
      }, [() => Xe(e.paintedBy.id), () => Ve(), () => We(), () => It()]), se("submit", v, async a => {
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
      }), Ae(2, v, () => $e), b(_, v)
    };
    C(fe, _ => {
      d() && _(_e)
    })
  }
  n($), Ee(2), n(x), ze(x, () => _ => {
    ae(() => {
      d() ? _.show() : _.close()
    })
  }), se("close", x, () => d(!1)), b(t, x), Le()
}
Be(["click"]);
var Ft = Ue('<svg><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');

function pr(t, e) {
  let i = Pe(e, ["$$slots", "$$events", "$$legacy"]);
  var d = Ft();
  Se(d, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...i
  })), b(t, d)
}
export {
  pr as D, ur as R, ut as b, lr as c, cr as p, ot as r, it as t
};