import {
  g as s
} from "./ZzfCiZoR.js";
import "./C_S9Fd9K.js";
import {
  o as Se
} from "./D0V6SAbo.js";
import {
  p as me,
  g as o,
  u as ae,
  aw as x,
  au as S,
  y as oe,
  f as M,
  d as a,
  s as u,
  bn as Ie,
  r as n,
  t as k,
  b as v,
  c as ge,
  at as Me,
  n as Ue,
  ax as _e,
  b4 as te,
  ay as fe,
  a as pe,
  v as Ce
} from "./J9sZHF5s.js";
import {
  s as f
} from "./CQdTnAzR.js";
import {
  p as se,
  i as I,
  r as he
} from "./F8p5-P61.js";
import {
  e as Pe
} from "./BR29INov.js";
import {
  b as be,
  C as qe,
  f as Oe,
  r as O,
  s as ve,
  g as F,
  a as ze
} from "./CME-9sZy.js";
import {
  t as Ae
} from "./BD6k8STq.js";
import {
  b as je,
  c as Ne
} from "./CCQfxftj.js";
import {
  b as Ze
} from "./DObkLCfw.js";
import {
  l as Fe,
  m as He,
  n as Ke,
  o as Ve,
  p as Ye,
  P as re,
  t as ne
} from "./BuPwBS24.js";
import {
  P as Ge
} from "./GQ5tKodT.js";
import {
  c as Je
} from "./5ohlmbip.js";
import {
  g as Qe
} from "./C6xG2YH3.js";
import {
  f as We
} from "./Dj4lLzZ2.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "f1d45b8fc3967b65ef5dc55e24b04b18a736ee5c"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "c46f9e44-7e97-403f-afaf-844e359cf115", t._sentryDebugIdIdentifier = "sentry-dbid-c46f9e44-7e97-403f-afaf-844e359cf115")
  })()
} catch {}
const Xe = () => "Copy",
  $e = () => "Copiar",
  Sr = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Xe() : $e(),
  et = () => "Report User",
  tt = () => "Reportar usuário",
  rt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? et() : tt(),
  nt = () => "Timeout User",
  at = () => "Suspender usuário",
  ot = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? nt() : at(),
  st = () => "Ban User",
  it = () => "Banir usuário",
  lt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? st() : it(),
  ct = () => "Select the reason",
  ut = () => "Selecione o motivo",
  dt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? ct() : ut(),
  _t = () => "+18, inappropriate link, highly suggestive content, ...",
  ft = () => "+18, links inapropriados, conteúdo altamente sugestivo, ...",
  pt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? _t() : ft(),
  vt = () => "Use of software to completely automate painting",
  mt = () => "Uso de software para pintar de forma completamente automatizada ",
  gt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? vt() : mt(),
  ht = () => "Racism, homophobia, hate groups, ...",
  bt = () => "Racismo, homofobia, grupos de ódio, ...",
  xt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? ht() : bt(),
  yt = () => "Messed up artworks for no reason",
  wt = () => "Estragar desenho dos outros sem motivo",
  Rt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? yt() : wt(),
  Dt = () => "Released other's personal information without their consent",
  kt = () => "Vazar informações pessoais de terceiros sem consentimento",
  Bt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Dt() : kt(),
  Et = () => "Other",
  Lt = () => "Outro motivo",
  Tt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Et() : Lt(),
  St = () => "Other reason not listed",
  It = () => "Outro motivo não listado",
  Mt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? St() : It(),
  Ut = () => "Extra context on what happened (required)",
  Ct = () => "Mais informações sobre o que aconteceu (obrigatório)",
  Pt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Ut() : Ct(),
  qt = () => "Report",
  Ot = () => "Reportar",
  zt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? qt() : Ot(),
  At = () => "Report sent successfully",
  jt = () => "Denúncia enviada com sucesso",
  Nt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? At() : jt(),
  Zt = () => "Select the report reason",
  Ft = () => "Selecione o motivo da denúncia",
  Ht = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Zt() : Ft(),
  Kt = () => "Report failed. Please try again later",
  Vt = () => "Denúncia falhou. Por favor, tente novamente mais tarde",
  Yt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Kt() : Vt(),
  Gt = () => "Required",
  Jt = () => "Obrigatório",
  Qt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Gt() : Jt(),
  Wt = t => `Min. characters: ${t.min}`,
  Xt = t => `Mínimo de caracteres: ${t.min}`,
  $t = (t, e = {}) => (e.locale ?? s()) === "en" ? Wt(t) : Xt(t),
  er = t => `Max. characters: ${t.max}`,
  tr = t => `Máximo de caracteres: ${t.max}`,
  rr = (t, e = {}) => (e.locale ?? s()) === "en" ? er(t) : tr(t),
  nr = () => "Purchases",
  ar = () => "Compras",
  Ir = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? nr() : ar();
var or = M('<legend class="fieldset-legend"> </legend>'),
  sr = M('<span class="text-base-content/80"> </span>'),
  ir = M('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function lr(t, e) {
  me(e, !0);
  let r = se(e, "value", 15),
    p = se(e, "validate", 15),
    L = he(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate"]),
    y = S("");
  const D = ae(() => {
    var l;
    return ((l = r()) == null ? void 0 : l.length) ?? 0
  });
  p(T);

  function T() {
    return e.min !== void 0 && o(D) < e.min ? (x(y, e.min === 1 ? Qt() : $t({
      min: e.min
    }), !0), !1) : e.max !== void 0 && o(D) > e.max ? (x(y, rr({
      max: e.max
    }), !0), !1) : !0
  }
  oe(() => {
    var l;
    e.max !== void 0 && o(D) > e.max && r((l = r()) == null ? void 0 : l.substring(0, e.max))
  });
  var B = ir(),
    z = a(B);
  {
    var H = l => {
      var h = or(),
        E = a(h, !0);
      n(h), k(() => f(E, e.label)), v(l, h)
    };
    I(z, l => {
      e.label && l(H)
    })
  }
  var b = u(z, 2);
  Ie(b), be(b, l => ({
    ...L,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    [qe]: l
  }), [() => ({
    "textarea-error": !!o(y)
  })]);
  var U = u(b, 2),
    C = a(U),
    K = a(C, !0);
  n(C);
  var m = u(C, 2);
  {
    var g = l => {
      var h = sr(),
        E = a(h, !0);
      n(h), k(() => f(E, e.max - o(D))), v(l, h)
    };
    I(m, l => {
      e.max !== void 0 && l(g)
    })
  }
  n(U), n(B), k(() => f(K, o(y))), je(b, r), v(t, B), ge()
}
var cr = M('<label class="flex gap-3"><input name="reason" class="radio radio-sm mt-1" type="radio"/> <div><div class="font-semibold"> </div> <div class="text-base-content/80 text-sm"> </div></div></label>'),
  ur = (t, e) => {
    e(!1)
  },
  dr = M('<form method="POST"><input name="reportedUserId" hidden/> <input name="latitude" hidden/> <input name="longitude" hidden/> <input name="zoom" hidden/> <section class="flex gap-3"><!> <div><h2 class="text-xl font-semibold"><!></h2> <span><span> </span> <span> </span></span></div></section> <section class="mt-6"><h3 class="text-base-content/80 text-base"> </h3> <div class="mt-2 flex flex-col gap-3"></div></section> <section class="mt-6"><!></section> <section class="mt-3 flex justify-end gap-2"><button type="button" class="btn"> </button> <button class="btn btn-error"> </button></section></form>'),
  _r = M('<dialog class="modal"><div class="modal-box max-h-[97%] max-w-xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function Mr(t, e) {
  me(e, !0);
  const r = [];
  let p = se(e, "open", 15),
    L = S(!1),
    y = S(""),
    D = S(""),
    T = S(null),
    B = S(null);
  const z = [{
    value: "inappropriate-content",
    label: Fe(),
    description: pt()
  }, {
    value: "hate-speech",
    label: He(),
    description: xt()
  }, {
    value: "doxxing",
    label: Ke(),
    description: Bt()
  }, {
    value: "bot",
    label: Ve(),
    description: gt()
  }, {
    value: "griefing",
    label: Ye(),
    description: Rt()
  }, {
    value: "other",
    label: Tt(),
    description: Mt()
  }];
  Se(() => {
    const m = g => {
      g.key === "Escape" && p(!1)
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m)
  }), oe(() => {
    p() || (x(y, ""), x(D, ""))
  });
  const H = {
    "report-user": `${re}/report-user`,
    timeout: `${re}/moderator/timeout-user`,
    ban: `${re}/admin/ban-user`
  };
  var b = _r(),
    U = a(b),
    C = u(a(U), 2);
  {
    var K = m => {
      var g = dr(),
        l = a(g);
      O(l);
      var h = u(l, 2);
      O(h);
      var E = u(h, 2);
      O(E);
      var V = u(E, 2);
      O(V);
      var Y = u(V, 2),
        ie = a(Y);
      Ge(ie, {
        get userId() {
          return e.paintedBy.id
        },
        get pictureUrl() {
          return e.paintedBy.picture
        },
        class: "size-14"
      });
      var le = u(ie, 2),
        G = a(le),
        xe = a(G);
      {
        var ye = c => {
            var i = te();
            k(d => f(i, d), [() => rt()]), v(c, i)
          },
          we = c => {
            var i = fe(),
              d = pe(i);
            {
              var _ = w => {
                  var R = te();
                  k(P => f(R, P), [() => ot()]), v(w, R)
                },
                j = w => {
                  var R = fe(),
                    P = pe(R);
                  {
                    var N = q => {
                      var Z = te();
                      k(Te => f(Z, Te), [() => lt()]), v(q, Z)
                    };
                    I(P, q => {
                      e.action === "ban" && q(N)
                    }, !0)
                  }
                  v(w, R)
                };
              I(d, w => {
                e.action === "timeout" ? w(_) : w(j, !1)
              }, !0)
            }
            v(c, i)
          };
        I(xe, c => {
          e.action === "report-user" ? c(ye) : c(we, !1)
        })
      }
      n(G);
      var J = u(G, 2),
        Q = a(J),
        Re = a(Q, !0);
      n(Q);
      var ce = u(Q, 2),
        De = a(ce);
      n(ce), n(J), n(le), n(Y);
      var W = u(Y, 2),
        X = a(W),
        ke = a(X);
      n(X);
      var ue = u(X, 2);
      Pe(ue, 21, () => z, c => c.value, (c, i) => {
        var d = cr(),
          _ = a(d);
        O(_);
        var j, w = u(_, 2),
          R = a(w),
          P = a(R, !0);
        n(R);
        var N = u(R, 2),
          q = a(N, !0);
        n(N), n(w), n(d), k(() => {
          ve(_, "aria-label", o(i).label), j !== (j = o(i).value) && (_.value = (_.__value = o(i).value) ?? ""), f(P, o(i).label), f(q, o(i).description)
        }), Ne(r, [], _, () => (o(i).value, o(y)), Z => x(y, Z)), v(c, d)
      }), n(ue), n(W);
      var $ = u(W, 2),
        Be = a($);
      {
        let c = ae(() => Pt()),
          i = ae(() => o(y) === "doxxing" ? 20 : 5);
        lr(Be, {
          class: "h-20 rounded-lg",
          name: "notes",
          get placeholder() {
            return o(c)
          },
          max: 2056,
          get min() {
            return o(i)
          },
          get value() {
            return o(D)
          },
          set value(d) {
            x(D, d, !0)
          },
          get validate() {
            return o(B)
          },
          set validate(d) {
            x(B, d, !0)
          }
        })
      }
      n($);
      var de = u($, 2),
        A = a(de);
      A.__click = [ur, p];
      var Ee = a(A, !0);
      n(A);
      var ee = u(A, 2),
        Le = a(ee, !0);
      n(ee), n(de), n(g), Ze(g, c => x(T, c), () => o(T)), k((c, i, d, _) => {
        ve(g, "action", H[e.action]), F(l, e.paintedBy.id), F(h, e.latLon[0]), F(E, e.latLon[1]), F(V, e.zoom), ze(J, 1, `font-medium ${c??""} flex gap-1.5`), f(Re, e.paintedBy.name), f(De, `#${e.paintedBy.id??""}`), f(ke, `${i??""}:`), f(Ee, d), ee.disabled = o(L), f(Le, _)
      }, [() => Qe(e.paintedBy.id), () => dt(), () => Je(), () => zt()]), _e("submit", g, async c => {
        if (c.preventDefault(), !o(L) && o(B)()) try {
          x(L, !0);
          const i = new FormData(o(T));
          if (!i.get("reason")) {
            ne.error(Ht());
            return
          }
          const d = await e.image;
          i.append("image", d, `report-${Date.now()}.jpeg`);
          const _ = await fetch(o(T).action, {
            method: "POST",
            body: i,
            credentials: "include"
          });
          _.status === 200 || _.status === 409 ? (ne.info(Nt()), p(!1)) : ne.error(Yt())
        } finally {
          x(L, !1)
        }
      }), Ae(2, g, () => We), v(m, g)
    };
    I(C, m => {
      p() && m(K)
    })
  }
  n(U), Ue(2), n(b), Oe(b, () => m => {
    oe(() => {
      p() ? m.show() : m.close()
    })
  }), _e("close", b, () => p(!1)), v(t, b), ge()
}
Me(["click"]);
var fr = Ce('<svg><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');

function Ur(t, e) {
  let r = he(e, ["$$slots", "$$events", "$$legacy"]);
  var p = fr();
  be(p, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...r
  })), v(t, p)
}
export {
  Ur as D, lr as L, Mr as R, lt as b, Sr as c, Ir as p, rt as r, ot as t
};