import {
  g as l
} from "./C5GsJ62f.js";
import "./Bzak7iHL.js";
import {
  o as De
} from "./BgsnPcy0.js";
import {
  p as _e,
  g as i,
  u as pe,
  aJ as x,
  aI as U,
  y as re,
  f as z,
  d as s,
  s as u,
  bp as Me,
  r as n,
  t as k,
  b as f,
  c as ve,
  at as Ue,
  n as Se,
  b5 as le,
  b4 as $,
  aK as ce,
  a as ue,
  v as qe
} from "./B6s--CY1.js";
import {
  s as _
} from "./Cig0Z20M.js";
import {
  p as ne,
  i as I,
  r as me
} from "./DCOkPuhX.js";
import {
  e as Ce
} from "./DS52NewF.js";
import {
  b as fe,
  C as Ee,
  r as T,
  s as de,
  d as Oe,
  e as F,
  a as Pe
} from "./B-MUH0Pm.js";
import {
  a as Te,
  c as Ie
} from "./B04iy8SQ.js";
import {
  b as ze
} from "./z89K5-yZ.js";
import {
  i as je,
  j as Ae,
  k as Ke,
  l as Ne,
  m as Ze,
  c as ee,
  t as te
} from "./B9czu7fs.js";
import {
  P as Fe
} from "./4cYenYIv.js";
import {
  c as He
} from "./CTRYyxGQ.js";
import {
  g as Je
} from "./DN_GdcME.js";
const Ve = () => "Copy",
  Ge = () => "Copiar",
  br = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? Ve() : Ge(),
  Qe = () => "Report User",
  We = () => "Reportar usuário",
  Xe = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? Qe() : We(),
  Ye = () => "Timeout User",
  $e = () => "Suspender usuário",
  et = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? Ye() : $e(),
  tt = () => "Ban User",
  rt = () => "Banir usuário",
  nt = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? tt() : rt(),
  at = () => "Select the reason",
  ot = () => "Selecione o motivo",
  st = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? at() : ot(),
  it = () => "+18, inappropriate link, highly suggestive content, ...",
  lt = () => "+18, links inapropriados, conteúdo altamente sugestivo, ...",
  ct = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? it() : lt(),
  ut = () => "Use of software to completely automate painting",
  dt = () => "Uso de software para pintar de forma completamente automatizada ",
  _t = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? ut() : dt(),
  pt = () => "Racism, homophobia, hate groups, ...",
  vt = () => "Racismo, homofobia, grupos de ódio, ...",
  mt = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? pt() : vt(),
  ft = () => "Messed up artworks for no reason",
  ht = () => "Estragar desenho dos outros sem motivo",
  xt = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? ft() : ht(),
  gt = () => "Released other's personal information without their consent",
  bt = () => "Vazar informações pessoais de terceiros sem consentimento",
  yt = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? gt() : bt(),
  wt = () => "Other",
  Rt = () => "Outro motivo",
  kt = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? wt() : Rt(),
  Bt = () => "Other reason not listed",
  Lt = () => "Outro motivo não listado",
  Dt = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? Bt() : Lt(),
  Mt = () => "Extra context on what happened (required)",
  Ut = () => "Mais informações sobre o que aconteceu (obrigatório)",
  St = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? Mt() : Ut(),
  qt = () => "Report",
  Ct = () => "Reportar",
  Et = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? qt() : Ct(),
  Ot = () => "Report sent successfully",
  Pt = () => "Denúncia enviada com sucesso",
  Tt = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? Ot() : Pt(),
  It = () => "Select the report reason",
  zt = () => "Selecione o motivo da denúncia",
  jt = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? It() : zt(),
  At = () => "Report failed. Please try again later",
  Kt = () => "Denúncia falhou. Por favor, tente novamente mais tarde",
  Nt = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? At() : Kt(),
  Zt = () => "Required",
  Ft = () => "Obrigatório",
  Ht = (t = {}, e = {}) => (e.locale ?? l()) === "en" ? Zt() : Ft(),
  Jt = t => `Min. characters: ${t.min}`,
  Vt = t => `Mínimo de caracteres: ${t.min}`,
  Gt = (t, e = {}) => (e.locale ?? l()) === "en" ? Jt(t) : Vt(t),
  Qt = t => `Max. characters: ${t.max}`,
  Wt = t => `Máximo de caracteres: ${t.max}`,
  Xt = (t, e = {}) => (e.locale ?? l()) === "en" ? Qt(t) : Wt(t);
var Yt = z('<legend class="fieldset-legend"> </legend>'),
  $t = z('<span class="text-base-content/80"> </span>'),
  er = z('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function tr(t, e) {
  _e(e, !0);
  let r = ne(e, "value", 15),
    p = ne(e, "validate", 15),
    L = me(e, ["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate"]),
    w = U("");
  const R = pe(() => {
    var c;
    return ((c = r()) == null ? void 0 : c.length) ?? 0
  });
  p(D);

  function D() {
    return e.min !== void 0 && i(R) < e.min ? (x(w, e.min === 1 ? Ht() : Gt({
      min: e.min
    }), !0), !1) : e.max !== void 0 && i(R) > e.max ? (x(w, Xt({
      max: e.max
    }), !0), !1) : !0
  }
  re(() => {
    var c;
    e.max !== void 0 && i(R) > e.max && r((c = r()) == null ? void 0 : c.substring(0, e.max))
  });
  var B = er(),
    j = s(B);
  {
    var H = c => {
      var v = Yt(),
        M = s(v, !0);
      n(v), k(() => _(M, e.label)), f(c, v)
    };
    I(j, c => {
      e.label && c(H)
    })
  }
  var h = u(j, 2);
  Me(h), fe(h, c => ({
    ...L,
    class: `textarea w-full ${e.class??""}`,
    placeholder: e.placeholder,
    [Ee]: c
  }), [() => ({
    "textarea-error": !!i(w)
  })]);
  var S = u(h, 2),
    g = s(S),
    q = s(g, !0);
  n(g);
  var C = u(g, 2);
  {
    var E = c => {
      var v = $t(),
        M = s(v, !0);
      n(v), k(() => _(M, e.max - i(R))), f(c, v)
    };
    I(C, c => {
      e.max !== void 0 && c(E)
    })
  }
  n(S), n(B), k(() => _(q, i(w))), Te(h, r), f(t, B), ve()
}
var rr = z('<label class="flex gap-3"><input name="reason" class="radio radio-sm mt-1" type="radio"/> <div><div class="font-semibold"> </div> <div class="text-base-content/80 text-sm"> </div></div></label>'),
  nr = (t, e) => {
    e(!1)
  },
  ar = z('<dialog class="modal"><div class="modal-box max-h-[97%] max-w-xl"><form method="dialog"><button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button></form> <form method="POST"><input name="reportedUserId" hidden/> <input name="latitude" hidden/> <input name="longitude" hidden/> <input name="zoom" hidden/> <section class="flex gap-3"><!> <div><h2 class="text-xl font-semibold"><!></h2> <span><span> </span> <span> </span></span></div></section> <section class="mt-6"><h3 class="text-base-content/80 text-base"> </h3> <div class="mt-2 flex flex-col gap-3"></div></section> <section class="mt-6"><!></section> <section class="mt-3 flex justify-end gap-2"><button type="button" class="btn"> </button> <button class="btn btn-error"> </button></section></form></div> <form method="dialog" class="modal-backdrop"><button>close</button></form></dialog>');

function yr(t, e) {
  _e(e, !0);
  const r = [];
  let p = ne(e, "open", 15),
    L = U(!1),
    w = U(""),
    R = U(""),
    D = U(null),
    B = U(null);
  const j = [{
    value: "inappropriate-content",
    label: je(),
    description: ct()
  }, {
    value: "hate-speech",
    label: Ae(),
    description: mt()
  }, {
    value: "doxxing",
    label: Ke(),
    description: yt()
  }, {
    value: "bot",
    label: Ne(),
    description: _t()
  }, {
    value: "griefing",
    label: Ze(),
    description: xt()
  }, {
    value: "other",
    label: kt(),
    description: Dt()
  }];
  De(() => {
    const a = o => {
      o.key === "Escape" && p(!1)
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a)
  }), re(() => {
    p() || (x(w, ""), x(R, ""))
  });
  const H = {
    "report-user": `${ee}/report-user`,
    timeout: `${ee}/moderator/timeout-user`,
    ban: `${ee}/admin/ban-user`
  };
  var h = ar(),
    S = s(h),
    g = u(s(S), 2),
    q = s(g);
  T(q);
  var C = u(q, 2);
  T(C);
  var E = u(C, 2);
  T(E);
  var c = u(E, 2);
  T(c);
  var v = u(c, 2),
    M = s(v);
  Fe(M, {
    get userId() {
      return e.paintedBy.id
    },
    get pictureUrl() {
      return e.paintedBy.picture
    },
    class: "size-14"
  });
  var ae = u(M, 2),
    J = s(ae),
    he = s(J);
  {
    var xe = a => {
        var o = $();
        k(m => _(o, m), [() => Xe()]), f(a, o)
      },
      ge = a => {
        var o = ce(),
          m = ue(o);
        {
          var d = b => {
              var y = $();
              k(O => _(y, O), [() => et()]), f(b, y)
            },
            K = b => {
              var y = ce(),
                O = ue(y);
              {
                var N = P => {
                  var Z = $();
                  k(Le => _(Z, Le), [() => nt()]), f(P, Z)
                };
                I(O, P => {
                  e.action === "ban" && P(N)
                }, !0)
              }
              f(b, y)
            };
          I(m, b => {
            e.action === "timeout" ? b(d) : b(K, !1)
          }, !0)
        }
        f(a, o)
      };
    I(he, a => {
      e.action === "report-user" ? a(xe) : a(ge, !1)
    })
  }
  n(J);
  var V = u(J, 2),
    G = s(V),
    be = s(G, !0);
  n(G);
  var oe = u(G, 2),
    ye = s(oe);
  n(oe), n(V), n(ae), n(v);
  var Q = u(v, 2),
    W = s(Q),
    we = s(W);
  n(W);
  var se = u(W, 2);
  Ce(se, 21, () => j, a => a.value, (a, o) => {
    var m = rr(),
      d = s(m);
    T(d);
    var K, b = u(d, 2),
      y = s(b),
      O = s(y, !0);
    n(y);
    var N = u(y, 2),
      P = s(N, !0);
    n(N), n(b), n(m), k(() => {
      de(d, "aria-label", i(o).label), K !== (K = i(o).value) && (d.value = (d.__value = i(o).value) ?? ""), _(O, i(o).label), _(P, i(o).description)
    }), Ie(r, [], d, () => (i(o).value, i(w)), Z => x(w, Z)), f(a, m)
  }), n(se), n(Q);
  var X = u(Q, 2),
    Re = s(X);
  {
    let a = pe(() => St());
    tr(Re, {
      class: "h-20 rounded-lg",
      name: "notes",
      get placeholder() {
        return i(a)
      },
      max: 2056,
      min: 5,
      get value() {
        return i(R)
      },
      set value(o) {
        x(R, o, !0)
      },
      get validate() {
        return i(B)
      },
      set validate(o) {
        x(B, o, !0)
      }
    })
  }
  n(X);
  var ie = u(X, 2),
    A = s(ie);
  A.__click = [nr, p];
  var ke = s(A, !0);
  n(A);
  var Y = u(A, 2),
    Be = s(Y, !0);
  n(Y), n(ie), n(g), ze(g, a => x(D, a), () => i(D)), n(S), Se(2), n(h), Oe(h, () => a => {
    re(() => {
      p() ? a.show() : a.close()
    })
  }), k((a, o, m, d) => {
    de(g, "action", H[e.action]), F(q, e.paintedBy.id), F(C, e.latLon[0]), F(E, e.latLon[1]), F(c, e.zoom), Pe(V, 1, `font-medium ${a??""} flex gap-1.5`), _(be, e.paintedBy.name), _(ye, `#${e.paintedBy.id??""}`), _(we, `${o??""}:`), _(ke, m), Y.disabled = i(L), _(Be, d)
  }, [() => Je(e.paintedBy.id), () => st(), () => He(), () => Et()]), le("close", h, () => p(!1)), le("submit", g, async a => {
    if (a.preventDefault(), !i(L) && i(B)()) try {
      x(L, !0);
      const o = new FormData(i(D));
      if (!o.get("reason")) {
        te.error(jt());
        return
      }
      const m = await e.image;
      o.append("image", m, `report-${Date.now()}.jpeg`);
      const d = await fetch(i(D).action, {
        method: "POST",
        body: o,
        credentials: "include"
      });
      d.status === 200 || d.status === 409 ? (te.info(Tt()), p(!1)) : te.error(Nt())
    } finally {
      x(L, !1)
    }
  }), f(t, h), ve()
}
Ue(["click"]);
var or = qe('<svg><path d="M480-320 280-520l56-58 104 104v-326h80v326l104-104 56 58-200 200ZM240-160q-33 0-56.5-23.5T160-240v-120h80v120h480v-120h80v120q0 33-23.5 56.5T720-160H240Z"></path></svg>');

function wr(t, e) {
  let r = me(e, ["$$slots", "$$events", "$$legacy"]);
  var p = or();
  fe(p, () => ({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 -960 960 960",
    fill: "currentColor",
    ...r
  })), f(t, p)
}
export {
  wr as D, tr as L, yr as R, nt as b, br as c, Xe as r, et as t
};