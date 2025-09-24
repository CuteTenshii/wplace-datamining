import {
  g as s
} from "./FAoWj6-g.js";
import "./Dw2bjDoQ.js";
import {
  o as Se
} from "./DFDmWRsr.js";
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
  c as be,
  at as Me,
  n as Ue,
  ax as _e,
  b4 as te,
  ay as pe,
  a as fe,
  v as qe
} from "./BI_jE5ye.js";
import {
  s as p
} from "./gF3fKvx7.js";
import {
  p as se,
  i as I,
  r as ge
} from "./BDvhaYVr.js";
import {
  e as Ce
} from "./D58sKC-d.js";
import {
  b as he,
  C as Pe,
  f as Oe,
  r as O,
  s as ve,
  g as F,
  a as ze
} from "./CXNH1jF2.js";
import {
  t as Ae
} from "./CcwjBPV7.js";
import {
  b as je,
  c as Ne
} from "./DfSL7kdc.js";
import {
  b as Ze
} from "./BeJaLoVn.js";
import {
  m as Fe,
  n as He,
  o as Ke,
  p as Ve,
  q as Ye,
  P as re,
  t as ne
} from "./CptLXAn7.js";
import {
  P as Ge
} from "./CXfvr1Mn.js";
import {
  c as Je
} from "./BywQ48b2.js";
import {
  g as Qe
} from "./V6HfdHC4.js";
import {
  f as We
} from "./hN-W5U9K.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "276968e1d17fc8ec4f0f441c096845bbc4668125"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "aa8081c7-6d0a-4204-b29e-714abbcbeeb1", t._sentryDebugIdIdentifier = "sentry-dbid-aa8081c7-6d0a-4204-b29e-714abbcbeeb1")
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
  pt = () => "+18, links inapropriados, conteúdo altamente sugestivo, ...",
  ft = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? _t() : pt(),
  vt = () => "Use of software to completely automate painting",
  mt = () => "Uso de software para pintar de forma completamente automatizada ",
  bt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? vt() : mt(),
  gt = () => "Racism, homophobia, hate groups, ...",
  ht = () => "Racismo, homofobia, grupos de ódio, ...",
  xt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? gt() : ht(),
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
  qt = () => "Mais informações sobre o que aconteceu (obrigatório)",
  Ct = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Ut() : qt(),
  Pt = () => "Report",
  Ot = () => "Reportar",
  zt = (t = {}, e = {}) => (e.locale ?? s()) === "en" ? Pt() : Ot(),
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
    f = se(e, "validate", 15),
    L = ge(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate"]),
    y = S("");
  const D = ae(() => {
    var l;
    return ((l = r()) == null ? void 0 : l.length) ?? 0
  });
  f(T);

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
      var g = or(),
        E = a(g, !0);
      n(g), k(() => p(E, e.label)), v(l, g)
    };
    I(z, l => {
      e.label && l(H)
    })
  }
  var h = u(z, 2);
  Ie(h), he(h, l => ({
    ...L,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    [Pe]: l
  }), [() => ({
    "textarea-error": !!o(y)
  })]);
  var U = u(h, 2),
    q = a(U),
    K = a(q, !0);
  n(q);
  var m = u(q, 2);
  {
    var b = l => {
      var g = sr(),
        E = a(g, !0);
      n(g), k(() => p(E, e.max - o(D))), v(l, g)
    };
    I(m, l => {
      e.max !== void 0 && l(b)
    })
  }
  n(U), n(B), k(() => p(K, o(y))), je(h, r), v(t, B), be()
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
  let f = se(e, "open", 15),
    L = S(!1),
    y = S(""),
    D = S(""),
    T = S(null),
    B = S(null);
  const z = [{
    value: "inappropriate-content",
    label: Fe(),
    description: ft()
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
    description: bt()
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
    const m = b => {
      b.key === "Escape" && f(!1)
    };
    return document.addEventListener("keydown", m), () => document.removeEventListener("keydown", m)
  }), oe(() => {
    f() || (x(y, ""), x(D, ""))
  });
  const H = {
    "report-user": `${re}/report-user`,
    timeout: `${re}/moderator/timeout-user`,
    ban: `${re}/admin/ban-user`
  };
  var h = _r(),
    U = a(h),
    q = u(a(U), 2);
  {
    var K = m => {
      var b = dr(),
        l = a(b);
      O(l);
      var g = u(l, 2);
      O(g);
      var E = u(g, 2);
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
            k(d => p(i, d), [() => rt()]), v(c, i)
          },
          we = c => {
            var i = pe(),
              d = fe(i);
            {
              var _ = w => {
                  var R = te();
                  k(C => p(R, C), [() => ot()]), v(w, R)
                },
                j = w => {
                  var R = pe(),
                    C = fe(R);
                  {
                    var N = P => {
                      var Z = te();
                      k(Te => p(Z, Te), [() => lt()]), v(P, Z)
                    };
                    I(C, P => {
                      e.action === "ban" && P(N)
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
      Ce(ue, 21, () => z, c => c.value, (c, i) => {
        var d = cr(),
          _ = a(d);
        O(_);
        var j, w = u(_, 2),
          R = a(w),
          C = a(R, !0);
        n(R);
        var N = u(R, 2),
          P = a(N, !0);
        n(N), n(w), n(d), k(() => {
          ve(_, "aria-label", o(i).label), j !== (j = o(i).value) && (_.value = (_.__value = o(i).value) ?? ""), p(C, o(i).label), p(P, o(i).description)
        }), Ne(r, [], _, () => (o(i).value, o(y)), Z => x(y, Z)), v(c, d)
      }), n(ue), n(W);
      var $ = u(W, 2),
        Be = a($);
      {
        let c = ae(() => Ct()),
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
      A.__click = [ur, f];
      var Ee = a(A, !0);
      n(A);
      var ee = u(A, 2),
        Le = a(ee, !0);
      n(ee), n(de), n(b), Ze(b, c => x(T, c), () => o(T)), k((c, i, d, _) => {
        ve(b, "action", H[e.action]), F(l, e.paintedBy.id), F(g, e.latLon[0]), F(E, e.latLon[1]), F(V, e.zoom), ze(J, 1, `font-medium ${c??""} flex gap-1.5`), p(Re, e.paintedBy.name), p(De, `#${e.paintedBy.id??""}`), p(ke, `${i??""}:`), p(Ee, d), ee.disabled = o(L), p(Le, _)
      }, [() => Qe(e.paintedBy.id), () => dt(), () => Je(), () => zt()]), _e("submit", b, async c => {
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
          _.status === 200 || _.status === 409 ? (ne.info(Nt()), f(!1)) : ne.error(Yt())
        } finally {
          x(L, !1)
        }
      }), Ae(2, b, () => We), v(m, b)
    };
    I(q, m => {
      f() && m(K)
    })
  }
  n(U), Ue(2), n(h), Oe(h, () => m => {
    oe(() => {
      f() ? m.show() : m.close()
    })
  }), _e("close", h, () => f(!1)), v(t, h), be()
}
Me(["click"]);
var pr = qe('<svg><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');

function Ur(t, e) {
  let r = ge(e, ["$$slots", "$$events", "$$legacy"]);
  var f = pr();
  he(f, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...r
  })), v(t, f)
}
export {
  Ur as D, lr as L, Mr as R, lt as b, Sr as c, Ir as p, rt as r, ot as t
};