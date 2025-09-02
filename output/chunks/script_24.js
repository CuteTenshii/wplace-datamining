import {
  g as i
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
  o as Se
} from "./XwJtV06w.js";
import {
  p as fe,
  g as o,
  u as ne,
  aM as b,
  aL as S,
  B as oe,
  f as C,
  d as n,
  s as u,
  bp as qe,
  r as a,
  t as B,
  b as v,
  c as he,
  aw as Ce,
  n as Ee,
  bj as _e,
  b4 as te,
  aN as pe,
  a as me,
  y as Oe
} from "./DDWIi-vs.js";
import {
  s as p
} from "./Ob_J7Gis.js";
import {
  p as se,
  i as q,
  r as xe
} from "./Cotyqp2D.js";
import {
  e as Pe
} from "./DieFH19D.js";
import {
  b as ge,
  C as Te,
  e as je,
  r as j,
  s as ve,
  f as F,
  a as ze
} from "./CwJjPkYo.js";
import {
  t as Ie
} from "./CF7iZc7m.js";
import {
  a as Ae,
  c as Ne
} from "./s8fa6SKT.js";
import {
  b as Ze
} from "./BXxY18WV.js";
import {
  i as Fe,
  j as He,
  k as Ke,
  l as Ve,
  m as Ge,
  c as re,
  t as ae
} from "./DAv4l2HI.js";
import {
  P as Je
} from "./Bl3D2i7R.js";
import {
  c as Qe
} from "./CTRYyxGQ.js";
import {
  g as We
} from "./ZqYpsljU.js";
import {
  f as Xe
} from "./BI5KFv7B.js";
const Ye = () => "Copy",
  $e = () => "Copiar",
  Dr = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Ye() : $e(),
  et = () => "Report User",
  tt = () => "Reportar usuário",
  rt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? et() : tt(),
  at = () => "Timeout User",
  nt = () => "Suspender usuário",
  ot = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? at() : nt(),
  st = () => "Ban User",
  it = () => "Banir usuário",
  lt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? st() : it(),
  ct = () => "Select the reason",
  ut = () => "Selecione o motivo",
  dt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? ct() : ut(),
  _t = () => "+18, inappropriate link, highly suggestive content, ...",
  pt = () => "+18, links inapropriados, conteúdo altamente sugestivo, ...",
  mt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? _t() : pt(),
  vt = () => "Use of software to completely automate painting",
  ft = () => "Uso de software para pintar de forma completamente automatizada ",
  ht = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? vt() : ft(),
  xt = () => "Racism, homophobia, hate groups, ...",
  gt = () => "Racismo, homofobia, grupos de ódio, ...",
  bt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? xt() : gt(),
  yt = () => "Messed up artworks for no reason",
  wt = () => "Estragar desenho dos outros sem motivo",
  Rt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? yt() : wt(),
  kt = () => "Released other's personal information without their consent",
  Bt = () => "Vazar informações pessoais de terceiros sem consentimento",
  Lt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? kt() : Bt(),
  Mt = () => "Other",
  Dt = () => "Outro motivo",
  Ut = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Mt() : Dt(),
  St = () => "Other reason not listed",
  qt = () => "Outro motivo não listado",
  Ct = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? St() : qt(),
  Et = () => "Extra context on what happened (required)",
  Ot = () => "Mais informações sobre o que aconteceu (obrigatório)",
  Pt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Et() : Ot(),
  Tt = () => "Report",
  jt = () => "Reportar",
  zt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Tt() : jt(),
  It = () => "Report sent successfully",
  At = () => "Denúncia enviada com sucesso",
  Nt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? It() : At(),
  Zt = () => "Select the report reason",
  Ft = () => "Selecione o motivo da denúncia",
  Ht = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Zt() : Ft(),
  Kt = () => "Report failed. Please try again later",
  Vt = () => "Denúncia falhou. Por favor, tente novamente mais tarde",
  Gt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Kt() : Vt(),
  Jt = () => "Required",
  Qt = () => "Obrigatório",
  Wt = (t = {}, e = {}) => (e.locale ?? i()) === "en" ? Jt() : Qt(),
  Xt = t => `Min. characters: ${t.min}`,
  Yt = t => `Mínimo de caracteres: ${t.min}`,
  $t = (t, e = {}) => (e.locale ?? i()) === "en" ? Xt(t) : Yt(t),
  er = t => `Max. characters: ${t.max}`,
  tr = t => `Máximo de caracteres: ${t.max}`,
  rr = (t, e = {}) => (e.locale ?? i()) === "en" ? er(t) : tr(t);
var ar = C('<legend class="fieldset-legend"> </legend>'),
  nr = C('<span class="text-base-content/80"> </span>'),
  or = C('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function sr(t, e) {
  fe(e, !0);
  let r = se(e, "value", 15),
    m = se(e, "validate", 15),
    D = xe(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate"]),
    y = S("");
  const k = ne(() => {
    var l;
    return ((l = r()) == null ? void 0 : l.length) ?? 0
  });
  m(U);

  function U() {
    return e.min !== void 0 && o(k) < e.min ? (b(y, e.min === 1 ? Wt() : $t({
      min: e.min
    }), !0), !1) : e.max !== void 0 && o(k) > e.max ? (b(y, rr({
      max: e.max
    }), !0), !1) : !0
  }
  oe(() => {
    var l;
    e.max !== void 0 && o(k) > e.max && r((l = r()) == null ? void 0 : l.substring(0, e.max))
  });
  var L = or(),
    z = n(L);
  {
    var H = l => {
      var x = ar(),
        M = n(x, !0);
      a(x), B(() => p(M, e.label)), v(l, x)
    };
    q(z, l => {
      e.label && l(H)
    })
  }
  var g = u(z, 2);
  qe(g), ge(g, l => ({
    ...D,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    [Te]: l
  }), [() => ({
    "textarea-error": !!o(y)
  })]);
  var E = u(g, 2),
    O = n(E),
    K = n(O, !0);
  a(O);
  var f = u(O, 2);
  {
    var h = l => {
      var x = nr(),
        M = n(x, !0);
      a(x), B(() => p(M, e.max - o(k))), v(l, x)
    };
    q(f, l => {
      e.max !== void 0 && l(h)
    })
  }
  a(E), a(L), B(() => p(K, o(y))), Ae(g, r), v(t, L), he()
}
var ir = C('<label class="flex gap-3"><input name="reason" class="radio radio-sm mt-1" type="radio"/> <div><div class="font-semibold"> </div> <div class="text-base-content/80 text-sm"> </div></div></label>'),
  lr = (t, e) => {
    e(!1)
  },
  cr = C('<form method="POST"><input name="reportedUserId" hidden/> <input name="latitude" hidden/> <input name="longitude" hidden/> <input name="zoom" hidden/> <section class="flex gap-3"><!> <div><h2 class="text-xl font-semibold"><!></h2> <span><span> </span> <span> </span></span></div></section> <section class="mt-6"><h3 class="text-base-content/80 text-base"> </h3> <div class="mt-2 flex flex-col gap-3"></div></section> <section class="mt-6"><!></section> <section class="mt-3 flex justify-end gap-2"><button type="button" class="btn"> </button> <button class="btn btn-error"> </button></section></form>'),
  ur = C('<dialog class="modal"><div class="modal-box max-h-[97%] max-w-xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <!></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function Ur(t, e) {
  fe(e, !0);
  const r = [];
  let m = se(e, "open", 15),
    D = S(!1),
    y = S(""),
    k = S(""),
    U = S(null),
    L = S(null);
  const z = [{
    value: "inappropriate-content",
    label: Fe(),
    description: mt()
  }, {
    value: "hate-speech",
    label: He(),
    description: bt()
  }, {
    value: "doxxing",
    label: Ke(),
    description: Lt()
  }, {
    value: "bot",
    label: Ve(),
    description: ht()
  }, {
    value: "griefing",
    label: Ge(),
    description: Rt()
  }, {
    value: "other",
    label: Ut(),
    description: Ct()
  }];
  Se(() => {
    const f = h => {
      h.key === "Escape" && m(!1)
    };
    return document.addEventListener("keydown", f), () => document.removeEventListener("keydown", f)
  }), oe(() => {
    m() || (b(y, ""), b(k, ""))
  });
  const H = {
    "report-user": `${re}/report-user`,
    timeout: `${re}/moderator/timeout-user`,
    ban: `${re}/admin/ban-user`
  };
  var g = ur(),
    E = n(g),
    O = u(n(E), 2);
  {
    var K = f => {
      var h = cr(),
        l = n(h);
      j(l);
      var x = u(l, 2);
      j(x);
      var M = u(x, 2);
      j(M);
      var V = u(M, 2);
      j(V);
      var G = u(V, 2),
        ie = n(G);
      Je(ie, {
        get userId() {
          return e.paintedBy.id
        },
        get pictureUrl() {
          return e.paintedBy.picture
        },
        class: "size-14"
      });
      var le = u(ie, 2),
        J = n(le),
        be = n(J);
      {
        var ye = c => {
            var s = te();
            B(d => p(s, d), [() => rt()]), v(c, s)
          },
          we = c => {
            var s = pe(),
              d = me(s);
            {
              var _ = w => {
                  var R = te();
                  B(P => p(R, P), [() => ot()]), v(w, R)
                },
                A = w => {
                  var R = pe(),
                    P = me(R);
                  {
                    var N = T => {
                      var Z = te();
                      B(Ue => p(Z, Ue), [() => lt()]), v(T, Z)
                    };
                    q(P, T => {
                      e.action === "ban" && T(N)
                    }, !0)
                  }
                  v(w, R)
                };
              q(d, w => {
                e.action === "timeout" ? w(_) : w(A, !1)
              }, !0)
            }
            v(c, s)
          };
        q(be, c => {
          e.action === "report-user" ? c(ye) : c(we, !1)
        })
      }
      a(J);
      var Q = u(J, 2),
        W = n(Q),
        Re = n(W, !0);
      a(W);
      var ce = u(W, 2),
        ke = n(ce);
      a(ce), a(Q), a(le), a(G);
      var X = u(G, 2),
        Y = n(X),
        Be = n(Y);
      a(Y);
      var ue = u(Y, 2);
      Pe(ue, 21, () => z, c => c.value, (c, s) => {
        var d = ir(),
          _ = n(d);
        j(_);
        var A, w = u(_, 2),
          R = n(w),
          P = n(R, !0);
        a(R);
        var N = u(R, 2),
          T = n(N, !0);
        a(N), a(w), a(d), B(() => {
          ve(_, "aria-label", o(s).label), A !== (A = o(s).value) && (_.value = (_.__value = o(s).value) ?? ""), p(P, o(s).label), p(T, o(s).description)
        }), Ne(r, [], _, () => (o(s).value, o(y)), Z => b(y, Z)), v(c, d)
      }), a(ue), a(X);
      var $ = u(X, 2),
        Le = n($);
      {
        let c = ne(() => Pt()),
          s = ne(() => o(y) === "doxxing" ? 20 : 5);
        sr(Le, {
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
            b(k, d, !0)
          },
          get validate() {
            return o(L)
          },
          set validate(d) {
            b(L, d, !0)
          }
        })
      }
      a($);
      var de = u($, 2),
        I = n(de);
      I.__click = [lr, m];
      var Me = n(I, !0);
      a(I);
      var ee = u(I, 2),
        De = n(ee, !0);
      a(ee), a(de), a(h), Ze(h, c => b(U, c), () => o(U)), B((c, s, d, _) => {
        ve(h, "action", H[e.action]), F(l, e.paintedBy.id), F(x, e.latLon[0]), F(M, e.latLon[1]), F(V, e.zoom), ze(Q, 1, `font-medium ${c??""} flex gap-1.5`), p(Re, e.paintedBy.name), p(ke, `#${e.paintedBy.id??""}`), p(Be, `${s??""}:`), p(Me, d), ee.disabled = o(D), p(De, _)
      }, [() => We(e.paintedBy.id), () => dt(), () => Qe(), () => zt()]), _e("submit", h, async c => {
        if (c.preventDefault(), !o(D) && o(L)()) try {
          b(D, !0);
          const s = new FormData(o(U));
          if (!s.get("reason")) {
            ae.error(Ht());
            return
          }
          const d = await e.image;
          s.append("image", d, `report-${Date.now()}.jpeg`);
          const _ = await fetch(o(U).action, {
            method: "POST",
            body: s,
            credentials: "include"
          });
          _.status === 200 || _.status === 409 ? (ae.info(Nt()), m(!1)) : ae.error(Gt())
        } finally {
          b(D, !1)
        }
      }), Ie(2, h, () => Xe), v(f, h)
    };
    q(O, f => {
      m() && f(K)
    })
  }
  a(E), Ee(2), a(g), je(g, () => f => {
    oe(() => {
      m() ? f.show() : f.close()
    })
  }), _e("close", g, () => m(!1)), v(t, g), he()
}
Ce(["click"]);
var dr = Oe('<svg><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');

function Sr(t, e) {
  let r = xe(e, ["$$slots", "$$events", "$$legacy"]);
  var m = dr();
  ge(m, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...r
  })), v(t, m)
}
export {
  Sr as D, sr as L, Ur as R, lt as b, Dr as c, rt as r, ot as t
};