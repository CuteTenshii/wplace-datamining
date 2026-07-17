import {
  g as f
} from "./BhCkpOlh.js";
import "./Bzak7iHL.js";
import {
  p as I,
  i as c,
  h,
  y as N,
  d as u,
  s as v,
  bl as T,
  r as o,
  t as g,
  a as b,
  b as p,
  e as B,
  u as D,
  c as k
} from "./BKnGt6Ki.js";
import {
  s as q
} from "./DbGfTWgr.js";
import {
  i as y
} from "./C31cMBCe.js";
import {
  b as R,
  C as V
} from "./Czze0tKx.js";
import {
  b as W
} from "./Ds9nY-KM.js";
import {
  b as F
} from "./COc1n5Dd.js";
import {
  p as m,
  r as G
} from "./Bu-IUIdW.js";
const H = () => "Extra context on what happened (required)",
  J = () => "Mais informações sobre o que aconteceu (obrigatório)",
  K = () => "请提供发生情况的额外背景（必填）",
  P = () => "Zusätzliche Informationen zum Vorfall (erforderlich)",
  Q = () => "Más contexto sobre lo que ocurrió (obligatorio)",
  U = () => "Contexte supplémentaire sur ce qui s’est passé (obligatoire)",
  X = () => "Maggiori informazioni su ciò che è successo (obbligatorio)",
  Y = () => "何が起きたかの詳細な説明（必須）",
  $ = () => "Dodatkowy kontekst tego, co się stało (wymagane)",
  rr = () => "Дополнительный контекст о произошедшем (обязательно)",
  er = () => "Додаткова інформація про те, що сталося (обовʼязково)",
  tr = () => "Thêm ngữ cảnh về chuyện đã xảy ra (bắt buộc)",
  ee = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? H() : e === "pt" ? J() : e === "ch" ? K() : e === "de" ? P() : e === "es" ? Q() : e === "fr" ? U() : e === "it" ? X() : e === "jp" ? Y() : e === "pl" ? $() : e === "ru" ? rr() : e === "uk" ? er() : tr()
  },
  ar = r => `Max. characters: ${r.max}`,
  nr = r => `Máximo de caracteres: ${r.max}`,
  cr = r => `最大字符数：${r.max}`,
  ir = r => `Max. Zeichen: ${r.max}`,
  sr = r => `Máx. de caracteres: ${r.max}`,
  ur = r => `Max. de caractères : ${r.max}`,
  or = r => `Numero massimo di caratteri: ${r.max}`,
  _r = r => `最大文字数: ${r.max}`,
  mr = r => `Maks. znaków: ${r.max}`,
  fr = r => `Макс. символов: ${r.max}`,
  lr = r => `Макс. символів: ${r.max}`,
  xr = r => `Số ký tự tối đa: ${r.max}`,
  dr = (r, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? ar(r) : e === "pt" ? nr(r) : e === "ch" ? cr(r) : e === "de" ? ir(r) : e === "es" ? sr(r) : e === "fr" ? ur(r) : e === "it" ? or(r) : e === "jp" ? _r(r) : e === "pl" ? mr(r) : e === "ru" ? fr(r) : e === "uk" ? lr(r) : xr(r)
  },
  hr = r => `Min. characters: ${r.min}`,
  vr = r => `Mínimo de caracteres: ${r.min}`,
  gr = r => `最少字符数：${r.min}`,
  br = r => `Min. Zeichen: ${r.min}`,
  qr = r => `Mín. de caracteres: ${r.min}`,
  kr = r => `Min. de caractères : ${r.min}`,
  Mr = r => `Numero minimo di caratteri: ${r.min}`,
  jr = r => `最小文字数: ${r.min}`,
  wr = r => `Min. znaków: ${r.min}`,
  yr = r => `Мин. символов: ${r.min}`,
  zr = r => `Мін. символів: ${r.min}`,
  Sr = r => `Số ký tự tối thiểu: ${r.min}`,
  Lr = (r, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? hr(r) : e === "pt" ? vr(r) : e === "ch" ? gr(r) : e === "de" ? br(r) : e === "es" ? qr(r) : e === "fr" ? kr(r) : e === "it" ? Mr(r) : e === "jp" ? jr(r) : e === "pl" ? wr(r) : e === "ru" ? yr(r) : e === "uk" ? zr(r) : Sr(r)
  },
  Or = () => "Required",
  Cr = () => "Obrigatório",
  Zr = () => "必填",
  Ar = () => "Erforderlich",
  Er = () => "Obligatorio",
  Ir = () => "Obligatoire",
  Nr = () => "Obbligatorio",
  Tr = () => "必須",
  pr = () => "Wymagane",
  Br = () => "Обязательно",
  Dr = () => "Обовʼязково",
  Rr = () => "Bắt buộc",
  Vr = (r = {}, t = {}) => {
    const e = t.locale ?? f();
    return e === "en" ? Or() : e === "pt" ? Cr() : e === "ch" ? Zr() : e === "de" ? Ar() : e === "es" ? Er() : e === "fr" ? Ir() : e === "it" ? Nr() : e === "jp" ? Tr() : e === "pl" ? pr() : e === "ru" ? Br() : e === "uk" ? Dr() : Rr()
  };
var Wr = new Set(["$$slots", "$$events", "$$legacy", "label", "placeholder", "value", "max", "min", "validate", "disabled", "ref"]),
  Fr = k('<legend class="fieldset-legend"> </legend>'),
  Gr = k('<span class="text-base-content/80"> </span>'),
  Hr = k('<fieldset class="fieldset"><!> <textarea></textarea> <div class="flex items-center justify-between text-xs"><span class="text-error"> </span> <!></div></fieldset>');

function te(r, t) {
  I(t, !0);
  let e = m(t, "value", 15),
    z = m(t, "validate", 15),
    S = m(t, "disabled", 3, !1),
    M = m(t, "ref", 15),
    L = G(t, Wr),
    i = B("");
  const _ = D(() => {
    var a;
    return ((a = e()) == null ? void 0 : a.length) ?? 0
  });
  z(O);

  function O() {
    return t.min !== void 0 && c(_) < t.min ? (h(i, t.min === 1 ? Vr() : Lr({
      min: t.min
    }), !0), !1) : t.max !== void 0 && c(_) > t.max ? (h(i, dr({
      max: t.max
    }), !0), !1) : (h(i, ""), !0)
  }
  N(() => {
    var a;
    t.max !== void 0 && c(_) > t.max && e((a = e()) == null ? void 0 : a.substring(0, t.max))
  });
  var l = Hr(),
    j = u(l);
  {
    var C = a => {
      var n = Fr(),
        d = u(n, !0);
      o(n), g(() => q(d, t.label)), b(a, n)
    };
    y(j, a => {
      t.label && a(C)
    })
  }
  var s = v(j, 2);
  T(s), R(s, () => ({
    ...L,
    class: `textarea w-full ${t.class??""}`,
    placeholder: t.placeholder,
    disabled: S(),
    [V]: {
      "textarea-error": !!c(i)
    }
  })), F(s, a => M(a), () => M());
  var w = v(s, 2),
    x = u(w),
    Z = u(x, !0);
  o(x);
  var A = v(x, 2);
  {
    var E = a => {
      var n = Gr(),
        d = u(n, !0);
      o(n), g(() => q(d, t.max - c(_))), b(a, n)
    };
    y(A, a => {
      t.max !== void 0 && a(E)
    })
  }
  o(w), o(l), g(() => q(Z, c(i))), W(s, e), b(r, l), p()
}
export {
  te as L, ee as g
};