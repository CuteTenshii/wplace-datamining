import {
  g as i
} from "./DXXros20.js";
import "./DKOu-DYQ.js";
import {
  o as Se
} from "./CaQAyZAY.js";
import {
  p as me,
  g as o,
  u as ae,
  aw as x,
  av as S,
  y as oe,
  f as M,
  d as a,
  s as u,
  bo as Ie,
  r,
  t as D,
  b as v,
  c as ge,
  at as Me,
  n as Ue,
  bi as _e,
  aX as te,
  ax as fe,
  a as pe,
  v as qe
} from "./li5wq6e0.js";
import {
  s as f
} from "./BAcREvcK.js";
import {
  p as se,
  i as I,
  r as be
} from "./UrfaUXmK.js";
import {
  e as Ce
} from "./Cv9C-Ro0.js";
import {
  b as he,
  C as Pe,
  f as Oe,
  r as O,
  s as ve,
  g as F,
  a as ze
} from "./CWiioCaa.js";
import {
  t as Ae
} from "./BuJbKLjq.js";
import {
  a as je,
  c as Ne
} from "./J0pY-mYb.js";
import {
  b as Ze
} from "./B9bsuUpQ.js";
import {
  k as Fe,
  l as He,
  m as Ke,
  n as Ve,
  o as Xe,
  P as ne,
  t as re
} from "./C95ipmxn.js";
import {
  P as Ye
} from "./BEsNjago.js";
import {
  c as Ge
} from "./Dnyi-cyR.js";
import {
  g as Je
} from "./BI9uIe05.js";
import {
  f as Qe
} from "./BcpVEOIV.js";
(function() {
  try {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    t.SENTRY_RELEASE = {
      id: "f261223d088ed61b87361f00600c7fcc32afef6a"
    }
  } catch {}
})();
try {
  (function() {
    var t = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      e = new t.Error().stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "2b0d0a1a-6c88-4c87-a545-ca18067da9e8", t._sentryDebugIdIdentifier = "sentry-dbid-2b0d0a1a-6c88-4c87-a545-ca18067da9e8")
  })()
} catch {}
const We = () => "Copy",
  $e = () => "Copiar",
  Tn = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? We() : $e(),
  et = () => "Report User",
  tt = () => "Reportar usuário",
  nt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? et() : tt(),
  rt = () => "Timeout User",
  at = () => "Suspender usuário",
  ot = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? rt() : at(),
  st = () => "Ban User",
  it = () => "Banir usuário",
  lt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? st() : it(),
  ct = () => "Select the reason",
  ut = () => "Selecione o motivo",
  dt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? ct() : ut(),
  _t = () => "+18, inappropriate link, highly suggestive content, ...",
  ft = () => "+18, links inapropriados, conteúdo altamente sugestivo, ...",
  pt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? _t() : ft(),
  vt = () => "Use of software to completely automate painting",
  mt = () => "Uso de software para pintar de forma completamente automatizada ",
  gt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? vt() : mt(),
  bt = () => "Racism, homophobia, hate groups, ...",
  ht = () => "Racismo, homofobia, grupos de ódio, ...",
  xt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? bt() : ht(),
  yt = () => "Messed up artworks for no reason",
  wt = () => "Estragar desenho dos outros sem motivo",
  Rt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? yt() : wt(),
  kt = () => "Released other's personal information without their consent",
  Dt = () => "Vazar informações pessoais de terceiros sem consentimento",
  Bt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? kt() : Dt(),
  Et = () => "Other",
  Lt = () => "Outro motivo",
  Tt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Et() : Lt(),
  St = () => "Other reason not listed",
  It = () => "Outro motivo não listado",
  Mt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? St() : It(),
  Ut = () => "Extra context on what happened (required)",
  qt = () => "Mais informações sobre o que aconteceu (obrigatório)",
  Ct = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Ut() : qt(),
  Pt = () => "Report",
  Ot = () => "Reportar",
  zt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Pt() : Ot(),
  At = () => "Report sent successfully",
  jt = () => "Denúncia enviada com sucesso",
  Nt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? At() : jt(),
  Zt = () => "Select the report reason",
  Ft = () => "Selecione o motivo da denúncia",
  Ht = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Zt() : Ft(),
  Kt = () => "Report failed. Please try again later",
  Vt = () => "Denúncia falhou. Por favor, tente novamente mais tarde",
  Xt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Kt() : Vt(),
  Yt = () => "Required",
  Gt = () => "Obrigatório",
  Jt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Yt() : Gt(),
  Qt = t => `Min. characters: ${t.min}`,
  Wt = t => `Mínimo de caracteres: ${t.min}`,
  $t = (t, e = {}) => (e.locale ?? i()) === "en" ? Qt(t) : Wt(t),
  en = t => `Max. characters: ${t.max}`,
  tn = t => `Máximo de caracteres: ${t.max}`,
  nn = (t, e = {}) => (e.locale ?? i()) === "en" ? en(t) : tn(t);
var rn = M('<legend class="fieldset-legend"> </legend>'),
  an = M('<span class="text-base-content/80"> </span>'),
  on = M('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function sn(t, e) {
  me(e, !0);
  let n = se(e, "value", 15),
    p = se(e, "validate", 15),
    L = be(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate"]),
    y = S("");
  const k = ae(() => {
    var l;
    return ((l = n()) == null ? void 0 : l.length) ?? 0
  });
  p(T);

  function T() {
    return e.min !== void 0 && o(k) < e.min ? (x(y, e.min === 1 ? Jt() : $t({
      min: e.min
    }), !0), !1) : e.max !== void 0 && o(k) > e.max ? (x(y, nn({
      max: e.max
    }), !0), !1) : !0
  }
  oe(() => {
    var l;
    e.max !== void 0 && o(k) > e.max && n((l = n()) == null ? void 0 : l.substring(0, e.max))
  });
  var B = on(),
    z = a(B);
  {
    var H = l => {
      var b = rn(),
        E = a(b, !0);
      r(b), D(() => f(E, e.label)), v(l, b)
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
  r(q);
  var m = u(q, 2);
  {
    var g = l => {
      var b = an(),
        E = a(b, !0);
      r(b), D(() => f(E, e.max - o(k))), v(l, b)
    };
    I(m, l => {
      e.max !== void 0 && l(g)
    })
  }
  r(U), r(B), D(() => f(K, o(y))), je(h, n), v(t, B), ge()
}
var ln = M('<label class="flex gap-3"><input name="reason" class="radio radio-sm mt-1" type="radio"/> <div><div class="font-semibold"> </div> <div class="text-base-content/80 text-sm"> </div></div></label>'),
  cn = (t, e) => {
    e(!1)
  },
  un = M('<form method="POST"><input name="reportedUserId" hidden/> <input name="latitude" hidden/> <input name="longitude" hidden/> <input name="zoom" hidden/> <section class="flex gap-3"><!> <div><h2 class="text-xl font-semibold"><!></h2> <span><span> </span> <span> </span></span></div></section> <section class="mt-6"><h3 class="text-base-content/80 text-base"> </h3> <div class="mt-2 flex flex-col gap-3"></div></section> <section class="mt-6"><!></section> <section class="mt-3 flex justify-end gap-2"><button type="button" class="btn"> </button> <button class="btn btn-error"> </button></section></form>'),
  dn = M('<dialog class="modal"><div class="modal-box max-h-[97%] max-w-xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function Sn(t, e) {
  me(e, !0);
  const n = [];
  let p = se(e, "open", 15),
    L = S(!1),
    y = S(""),
    k = S(""),
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
    label: Xe(),
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
    p() || (x(y, ""), x(k, ""))
  });
  const H = {
    "report-user": `${ne}/report-user`,
    timeout: `${ne}/moderator/timeout-user`,
    ban: `${ne}/admin/ban-user`
  };
  var h = dn(),
    U = a(h),
    q = u(a(U), 2);
  {
    var K = m => {
      var g = un(),
        l = a(g);
      O(l);
      var b = u(l, 2);
      O(b);
      var E = u(b, 2);
      O(E);
      var V = u(E, 2);
      O(V);
      var X = u(V, 2),
        ie = a(X);
      Ye(ie, {
        get userId() {
          return e.paintedBy.id
        },
        get pictureUrl() {
          return e.paintedBy.picture
        },
        class: "size-14"
      });
      var le = u(ie, 2),
        Y = a(le),
        xe = a(Y);
      {
        var ye = c => {
            var s = te();
            D(d => f(s, d), [() => nt()]), v(c, s)
          },
          we = c => {
            var s = fe(),
              d = pe(s);
            {
              var _ = w => {
                  var R = te();
                  D(C => f(R, C), [() => ot()]), v(w, R)
                },
                j = w => {
                  var R = fe(),
                    C = pe(R);
                  {
                    var N = P => {
                      var Z = te();
                      D(Te => f(Z, Te), [() => lt()]), v(P, Z)
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
            v(c, s)
          };
        I(xe, c => {
          e.action === "report-user" ? c(ye) : c(we, !1)
        })
      }
      r(Y);
      var G = u(Y, 2),
        J = a(G),
        Re = a(J, !0);
      r(J);
      var ce = u(J, 2),
        ke = a(ce);
      r(ce), r(G), r(le), r(X);
      var Q = u(X, 2),
        W = a(Q),
        De = a(W);
      r(W);
      var ue = u(W, 2);
      Ce(ue, 21, () => z, c => c.value, (c, s) => {
        var d = ln(),
          _ = a(d);
        O(_);
        var j, w = u(_, 2),
          R = a(w),
          C = a(R, !0);
        r(R);
        var N = u(R, 2),
          P = a(N, !0);
        r(N), r(w), r(d), D(() => {
          ve(_, "aria-label", o(s).label), j !== (j = o(s).value) && (_.value = (_.__value = o(s).value) ?? ""), f(C, o(s).label), f(P, o(s).description)
        }), Ne(n, [], _, () => (o(s).value, o(y)), Z => x(y, Z)), v(c, d)
      }), r(ue), r(Q);
      var $ = u(Q, 2),
        Be = a($);
      {
        let c = ae(() => Ct()),
          s = ae(() => o(y) === "doxxing" ? 20 : 5);
        sn(Be, {
          class: "h-20 rounded-lg",
          name: "notes",
          get placeholder() {
            return o(c)
          },
          max: 2056,
          get min() {
            return o(s)
          },
          get value() {
            return o(k)
          },
          set value(d) {
            x(k, d, !0)
          },
          get validate() {
            return o(B)
          },
          set validate(d) {
            x(B, d, !0)
          }
        })
      }
      r($);
      var de = u($, 2),
        A = a(de);
      A.__click = [cn, p];
      var Ee = a(A, !0);
      r(A);
      var ee = u(A, 2),
        Le = a(ee, !0);
      r(ee), r(de), r(g), Ze(g, c => x(T, c), () => o(T)), D((c, s, d, _) => {
        ve(g, "action", H[e.action]), F(l, e.paintedBy.id), F(b, e.latLon[0]), F(E, e.latLon[1]), F(V, e.zoom), ze(G, 1, `font-medium ${c??""} flex gap-1.5`), f(Re, e.paintedBy.name), f(ke, `#${e.paintedBy.id??""}`), f(De, `${s??""}:`), f(Ee, d), ee.disabled = o(L), f(Le, _)
      }, [() => Je(e.paintedBy.id), () => dt(), () => Ge(), () => zt()]), _e("submit", g, async c => {
        if (c.preventDefault(), !o(L) && o(B)()) try {
          x(L, !0);
          const s = new FormData(o(T));
          if (!s.get("reason")) {
            re.error(Ht());
            return
          }
          const d = await e.image;
          s.append("image", d, `report-${Date.now()}.jpeg`);
          const _ = await fetch(o(T).action, {
            method: "POST",
            body: s,
            credentials: "include"
          });
          _.status === 200 || _.status === 409 ? (re.info(Nt()), p(!1)) : re.error(Xt())
        } finally {
          x(L, !1)
        }
      }), Ae(2, g, () => Qe), v(m, g)
    };
    I(q, m => {
      p() && m(K)
    })
  }
  r(U), Ue(2), r(h), Oe(h, () => m => {
    oe(() => {
      p() ? m.show() : m.close()
    })
  }), _e("close", h, () => p(!1)), v(t, h), ge()
}
Me(["click"]);
var _n = qe('<svg><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');

function In(t, e) {
  let n = be(e, ["$$slots", "$$events", "$$legacy"]);
  var p = _n();
  he(p, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...n
  })), v(t, p)
}
export {
  In as D, sn as L, Sn as R, lt as b, Tn as c, nt as r, ot as t
};