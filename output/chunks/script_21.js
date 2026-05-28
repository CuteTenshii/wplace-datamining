import {
  bl as D,
  W as G,
  Z as W,
  k as R,
  q as T,
  au as x,
  U as M,
  ax as rr,
  ab as ir,
  bm as fr,
  aw as ar,
  av as tr,
  bn as er,
  bo as ur,
  bp as sr,
  bq as or,
  i as cr,
  br as lr,
  bs as nr,
  bt as w,
  A as V,
  bu as vr,
  bv as dr,
  S as br,
  bw as gr
} from "./5zj5-rPA.js";
import {
  c as hr,
  a as _r,
  d as Ar,
  f as Sr,
  n as Tr,
  g as Nr
} from "./CRfpTDDG.js";

function pr(r, f) {
  var i = void 0,
    a;
  D(() => {
    i !== (i = f()) && (a && (G(a), a = null), i && (a = W(() => {
      R(() => i(r))
    })))
  })
}

function Z(r) {
  var f, i, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var t = r.length;
      for (f = 0; f < t; f++) r[f] && (i = Z(r[f])) && (a && (a += " "), a += i)
    } else
      for (i in r) r[i] && (a && (a += " "), a += i);
  return a
}

function Or() {
  for (var r, f, i = 0, a = "", t = arguments.length; i < t; i++)(r = arguments[i]) && (f = Z(r)) && (a && (a += " "), a += f);
  return a
}

function Er(r) {
  return typeof r == "object" ? Or(r) : r ?? ""
}
const K = [...` 	
\r\f \v\uFEFF`];

function kr(r, f, i) {
  var a = r == null ? "" : "" + r;
  if (f && (a = a ? a + " " + f : f), i) {
    for (var t of Object.keys(i))
      if (i[t]) a = a ? a + " " + t : t;
      else if (a.length)
      for (var e = t.length, u = 0;
        (u = a.indexOf(t, u)) >= 0;) {
        var o = u + e;
        (u === 0 || K.includes(a[u - 1])) && (o === a.length || K.includes(a[o])) ? a = (u === 0 ? "" : a.substring(0, u)) + a.substring(o + 1): u = o
      }
  }
  return a === "" ? null : a
}

function Y(r, f = !1) {
  var i = f ? " !important;" : ";",
    a = "";
  for (var t of Object.keys(r)) {
    var e = r[t];
    e != null && e !== "" && (a += " " + t + ": " + e + i)
  }
  return a
}

function j(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Ir(r, f) {
  if (f) {
    var i = "",
      a, t;
    if (Array.isArray(f) ? (a = f[0], t = f[1]) : a = f, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var e = !1,
        u = 0,
        o = !1,
        n = [];
      a && n.push(...Object.keys(a).map(j)), t && n.push(...Object.keys(t).map(j));
      var v = 0,
        h = -1;
      const p = r.length;
      for (var d = 0; d < p; d++) {
        var s = r[d];
        if (o ? s === "/" && r[d - 1] === "*" && (o = !1) : e ? e === s && (e = !1) : s === "/" && r[d + 1] === "*" ? o = !0 : s === '"' || s === "'" ? e = s : s === "(" ? u++ : s === ")" && u--, !o && e === !1 && u === 0) {
          if (s === ":" && h === -1) h = d;
          else if (s === ";" || d === p - 1) {
            if (h !== -1) {
              var N = j(r.substring(v, h).trim());
              if (!n.includes(N)) {
                s !== ";" && d++;
                var S = r.substring(v, d).trim();
                i += " " + S + ";"
              }
            }
            v = d + 1, h = -1
          }
        }
      }
    }
    return a && (i += Y(a)), t && (i += Y(t, !0)), i = i.trim(), i === "" ? null : i
  }
  return r == null ? null : String(r)
}

function Lr(r, f, i, a, t, e) {
  var u = r.__className;
  if (T || u !== i || u === void 0) {
    var o = kr(i, a, e);
    (!T || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : f ? r.className = o : r.setAttribute("class", o)), r.__className = i
  } else if (e && t !== e)
    for (var n in e) {
      var v = !!e[n];
      (t == null || v !== !!t[n]) && r.classList.toggle(n, v)
    }
  return e
}

function q(r, f = {}, i, a) {
  for (var t in i) {
    var e = i[t];
    f[t] !== e && (i[t] == null ? r.style.removeProperty(t) : r.style.setProperty(t, e, a))
  }
}

function wr(r, f, i, a) {
  var t = r.__style;
  if (T || t !== f) {
    var e = Ir(f, a);
    (!T || e !== r.getAttribute("style")) && (e == null ? r.removeAttribute("style") : r.style.cssText = e), r.__style = f
  } else a && (Array.isArray(a) ? (q(r, i == null ? void 0 : i[0], a[0]), q(r, i == null ? void 0 : i[1], a[1], "important")) : q(r, i, a));
  return a
}

function C(r, f, i = !1) {
  if (r.multiple) {
    if (f == null) return;
    if (!ir(f)) return fr();
    for (var a of r.options) a.selected = f.includes(L(a));
    return
  }
  for (a of r.options) {
    var t = L(a);
    if (ar(t, f)) {
      a.selected = !0;
      return
    }
  }(!i || f !== void 0) && (r.selectedIndex = -1)
}

function z(r) {
  var f = new MutationObserver(() => {
    C(r, r.__value)
  });
  f.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), rr(() => {
    f.disconnect()
  })
}

function Hr(r, f, i = f) {
  var a = new WeakSet,
    t = !0;
  x(r, "change", e => {
    var u = e ? "[selected]" : ":checked",
      o;
    if (r.multiple) o = [].map.call(r.querySelectorAll(u), L);
    else {
      var n = r.querySelector(u) ?? r.querySelector("option:not([disabled])");
      o = n && L(n)
    }
    i(o), M !== null && a.add(M)
  }), R(() => {
    var e = f();
    if (r === document.activeElement) {
      var u = tr ?? M;
      if (a.has(u)) return
    }
    if (C(r, e, t), t && e === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (e = L(o), i(e))
    }
    r.__value = e, t = !1
  }), z(r)
}

function L(r) {
  return "__value" in r ? r.__value : r.value
}
const k = Symbol("class"),
  I = Symbol("style"),
  F = Symbol("is custom element"),
  X = Symbol("is html"),
  Cr = w ? "link" : "LINK",
  Pr = w ? "input" : "INPUT",
  yr = w ? "option" : "OPTION",
  Mr = w ? "select" : "SELECT",
  jr = w ? "progress" : "PROGRESS";

function qr(r) {
  if (T) {
    var f = !1,
      i = () => {
        if (!f) {
          if (f = !0, r.hasAttribute("value")) {
            var a = r.value;
            P(r, "value", null), r.value = a
          }
          if (r.hasAttribute("checked")) {
            var t = r.checked;
            P(r, "checked", null), r.checked = t
          }
        }
      };
    r.__on_r = i, br(i), gr()
  }
}

function Vr(r, f) {
  var i = y(r);
  i.value === (i.value = f ?? void 0) || r.value === f && (f !== 0 || r.nodeName !== jr) || (r.value = f ?? "")
}

function Kr(r, f) {
  var i = y(r);
  i.checked !== (i.checked = f ?? void 0) && (r.checked = f)
}

function Gr(r, f) {
  f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function P(r, f, i, a) {
  var t = y(r);
  T && (t[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === Cr) || t[f] !== (t[f] = i) && (f === "loading" && (r[er] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && J(r).includes(f) ? r[f] = i : r.setAttribute(f, i))
}

function Rr(r, f, i, a, t = !1, e = !1) {
  if (T && t && r.nodeName === Pr) {
    var u = r,
      o = u.type === "checkbox" ? "defaultChecked" : "defaultValue";
    o in i || qr(u)
  }
  var n = y(r),
    v = n[F],
    h = !n[X];
  let d = T && v;
  d && V(!1);
  var s = f || {},
    N = r.nodeName === yr;
  for (var S in f) S in i || (i[S] = null);
  i.class ? i.class = Er(i.class) : (a || i[k]) && (i.class = null), i[I] && (i.style ?? (i.style = null));
  var p = J(r);
  for (const c in i) {
    let l = i[c];
    if (N && c === "value" && l == null) {
      r.value = r.__value = "", s[c] = l;
      continue
    }
    if (c === "class") {
      var E = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Lr(r, E, l, a, f == null ? void 0 : f[k], i[k]), s[c] = l, s[k] = i[k];
      continue
    }
    if (c === "style") {
      wr(r, l, f == null ? void 0 : f[I], i[I]), s[c] = l, s[I] = i[I];
      continue
    }
    var _ = s[c];
    if (!(l === _ && !(l === void 0 && r.hasAttribute(c)))) {
      s[c] = l;
      var U = c[0] + c[1];
      if (U !== "$$")
        if (U === "on") {
          const A = {},
            O = "$$" + c;
          let g = c.slice(2);
          var $ = Nr(g);
          if (hr(g) && (g = g.slice(0, -7), A.capture = !0), !$ && _) {
            if (l != null) continue;
            r.removeEventListener(g, s[O], A), s[O] = null
          }
          if ($) _r(g, r, l), Ar([g]);
          else if (l != null) {
            let Q = function(m) {
              s[c].call(this, m)
            };
            s[O] = Sr(g, r, Q, A)
          }
        } else if (c === "style") P(r, c, l);
      else if (c === "autofocus") vr(r, !!l);
      else if (!v && (c === "__value" || c === "value" && l != null)) r.value = r.__value = l;
      else if (c === "selected" && N) Gr(r, l);
      else {
        var b = c;
        h || (b = Tr(b));
        var H = b === "defaultValue" || b === "defaultChecked";
        if (l == null && !v && !H)
          if (n[c] = null, b === "value" || b === "checked") {
            let A = r;
            const O = f === void 0;
            if (b === "value") {
              let g = A.defaultValue;
              A.removeAttribute(b), A.defaultValue = g, A.value = A.__value = O ? g : null
            } else {
              let g = A.defaultChecked;
              A.removeAttribute(b), A.defaultChecked = g, A.checked = O ? g : !1
            }
          } else r.removeAttribute(c);
        else H || p.includes(b) && (v || typeof l != "string") ? (r[b] = l, b in n && (n[b] = dr)) : typeof l != "function" && P(r, b, l)
      }
    }
  }
  return d && V(!0), s
}

function Yr(r, f, i = [], a = [], t = [], e, u = !1, o = !1) {
  ur(t, i, a, n => {
    var v = void 0,
      h = {},
      d = r.nodeName === Mr,
      s = !1;
    if (D(() => {
        var S = f(...n.map(cr)),
          p = Rr(r, v, S, e, u, o);
        s && d && "value" in S && C(r, S.value);
        for (let _ of Object.getOwnPropertySymbols(h)) S[_] || G(h[_]);
        for (let _ of Object.getOwnPropertySymbols(S)) {
          var E = S[_];
          _.description === lr && (!v || E !== v[_]) && (h[_] && G(h[_]), h[_] = W(() => pr(r, () => E))), p[_] = E
        }
        v = p
      }), d) {
      var N = r;
      R(() => {
        C(N, v.value, !0), z(N)
      })
    }
    s = !0
  })
}

function y(r) {
  return r.__attributes ?? (r.__attributes = {
    [F]: r.nodeName.includes("-"),
    [X]: r.namespaceURI === sr
  })
}
var B = new Map;

function J(r) {
  var f = r.getAttribute("is") || r.nodeName,
    i = B.get(f);
  if (i) return i;
  B.set(f, i = []);
  for (var a, t = r, e = Element.prototype; e !== t;) {
    a = nr(t);
    for (var u in a) a[u].set && i.push(u);
    t = or(t)
  }
  return i
}
export {
  k as C, I as S, Lr as a, wr as b, Er as c, Yr as d, pr as e, Hr as f, Vr as g, Kr as h, Or as i, z as j, C as k, qr as r, P as s
};