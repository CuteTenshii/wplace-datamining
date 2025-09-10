import {
  i as G,
  a7 as P,
  k as H,
  M as $,
  h as N,
  a3 as Z,
  b5 as Q,
  J as W,
  K as X,
  G as m,
  b6 as x,
  b7 as rr,
  b8 as ir,
  b9 as fr,
  g as ar,
  ba as ur,
  bb as tr,
  V as y,
  bc as er,
  bd as sr,
  at as lr,
  be as or,
  bf as cr,
  aL as nr,
  bg as vr,
  bh as dr,
  bi as br
} from "./B0_b_ZC0.js";

function gr(r, f) {
  var i = void 0,
    a;
  G(() => {
    i !== (i = f()) && (a && (P(a), a = null), i && (a = H(() => {
      $(() => i(r))
    })))
  })
}

function K(r) {
  var f, i, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var u = r.length;
      for (f = 0; f < u; f++) r[f] && (i = K(r[f])) && (a && (a += " "), a += i)
    } else
      for (i in r) r[i] && (a && (a += " "), a += i);
  return a
}

function hr() {
  for (var r, f, i = 0, a = "", u = arguments.length; i < u; i++)(r = arguments[i]) && (f = K(r)) && (a && (a += " "), a += f);
  return a
}

function _r(r) {
  return typeof r == "object" ? hr(r) : r ?? ""
}
const R = [...` 	
\r\f \v\uFEFF`];

function Ar(r, f, i) {
  var a = r == null ? "" : "" + r;
  if (f && (a = a ? a + " " + f : f), i) {
    for (var u in i)
      if (i[u]) a = a ? a + " " + u : u;
      else if (a.length)
      for (var t = u.length, e = 0;
        (e = a.indexOf(u, e)) >= 0;) {
        var s = e + t;
        (e === 0 || R.includes(a[e - 1])) && (s === a.length || R.includes(a[s])) ? a = (e === 0 ? "" : a.substring(0, e)) + a.substring(s + 1): e = s
      }
  }
  return a === "" ? null : a
}

function U(r, f = !1) {
  var i = f ? " !important;" : ";",
    a = "";
  for (var u in r) {
    var t = r[u];
    t != null && t !== "" && (a += " " + u + ": " + t + i)
  }
  return a
}

function w(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Sr(r, f) {
  if (f) {
    var i = "",
      a, u;
    if (Array.isArray(f) ? (a = f[0], u = f[1]) : a = f, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var t = !1,
        e = 0,
        s = !1,
        v = [];
      a && v.push(...Object.keys(a).map(w)), u && v.push(...Object.keys(u).map(w));
      var o = 0,
        A = -1;
      const b = r.length;
      for (var d = 0; d < b; d++) {
        var n = r[d];
        if (s ? n === "/" && r[d - 1] === "*" && (s = !1) : t ? t === n && (t = !1) : n === "/" && r[d + 1] === "*" ? s = !0 : n === '"' || n === "'" ? t = n : n === "(" ? e++ : n === ")" && e--, !s && t === !1 && e === 0) {
          if (n === ":" && A === -1) A = d;
          else if (n === ";" || d === b - 1) {
            if (A !== -1) {
              var L = w(r.substring(o, A).trim());
              if (!v.includes(L)) {
                n !== ";" && d++;
                var S = r.substring(o, d).trim();
                i += " " + S + ";"
              }
            }
            o = d + 1, A = -1
          }
        }
      }
    }
    return a && (i += U(a)), u && (i += U(u, !0)), i = i.trim(), i === "" ? null : i
  }
  return r == null ? null : String(r)
}

function Nr(r, f, i, a, u, t) {
  var e = r.__className;
  if (N || e !== i || e === void 0) {
    var s = Ar(i, a, t);
    (!N || s !== r.getAttribute("class")) && (s == null ? r.removeAttribute("class") : f ? r.className = s : r.setAttribute("class", s)), r.__className = i
  } else if (t && u !== t)
    for (var v in t) {
      var o = !!t[v];
      (u == null || o !== !!u[v]) && r.classList.toggle(v, o)
    }
  return t
}

function k(r, f = {}, i, a) {
  for (var u in i) {
    var t = i[u];
    f[u] !== t && (i[u] == null ? r.style.removeProperty(u) : r.style.setProperty(u, t, a))
  }
}

function Lr(r, f, i, a) {
  var u = r.__style;
  if (N || u !== f) {
    var t = Sr(f, a);
    (!N || t !== r.getAttribute("style")) && (t == null ? r.removeAttribute("style") : r.style.cssText = t), r.__style = f
  } else a && (Array.isArray(a) ? (k(r, i == null ? void 0 : i[0], a[0]), k(r, i == null ? void 0 : i[1], a[1], "important")) : k(r, i, a));
  return a
}

function I(r, f, i = !1) {
  if (r.multiple) {
    if (f == null) return;
    if (!Z(f)) return Q();
    for (var a of r.options) a.selected = f.includes(T(a));
    return
  }
  for (a of r.options) {
    var u = T(a);
    if (W(u, f)) {
      a.selected = !0;
      return
    }
  }(!i || f !== void 0) && (r.selectedIndex = -1)
}

function Y(r) {
  var f = new MutationObserver(() => {
    I(r, r.__value)
  });
  f.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), X(() => {
    f.disconnect()
  })
}

function Tr(r, f, i = f) {
  var a = !0;
  m(r, "change", u => {
    var t = u ? "[selected]" : ":checked",
      e;
    if (r.multiple) e = [].map.call(r.querySelectorAll(t), T);
    else {
      var s = r.querySelector(t) ?? r.querySelector("option:not([disabled])");
      e = s && T(s)
    }
    i(e)
  }), $(() => {
    var u = f();
    if (I(r, u, a), a && u === void 0) {
      var t = r.querySelector(":checked");
      t !== null && (u = T(t), i(u))
    }
    r.__value = u, a = !1
  }), Y(r)
}

function T(r) {
  return "__value" in r ? r.__value : r.value
}
const E = Symbol("class"),
  O = Symbol("style"),
  B = Symbol("is custom element"),
  D = Symbol("is html");

function Ir(r) {
  if (N) {
    var f = !1,
      i = () => {
        if (!f) {
          if (f = !0, r.hasAttribute("value")) {
            var a = r.value;
            C(r, "value", null), r.value = a
          }
          if (r.hasAttribute("checked")) {
            var u = r.checked;
            C(r, "checked", null), r.checked = u
          }
        }
      };
    r.__on_r = i, vr(i), dr()
  }
}

function Cr(r, f) {
  var i = j(r);
  i.value === (i.value = f ?? void 0) || r.value === f && (f !== 0 || r.nodeName !== "PROGRESS") || (r.value = f ?? "")
}

function pr(r, f) {
  f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function C(r, f, i, a) {
  var u = j(r);
  N && (u[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === "LINK") || u[f] !== (u[f] = i) && (f === "loading" && (r[fr] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && z(r).includes(f) ? r[f] = i : r.setAttribute(f, i))
}

function Er(r, f, i, a, u = !1) {
  var t = j(r),
    e = t[B],
    s = !t[D];
  let v = N && e;
  v && y(!1);
  var o = f || {},
    A = r.tagName === "OPTION";
  for (var d in f) d in i || (i[d] = null);
  i.class ? i.class = _r(i.class) : (a || i[E]) && (i.class = null), i[O] && (i.style ?? (i.style = null));
  var n = z(r);
  for (const l in i) {
    let c = i[l];
    if (A && l === "value" && c == null) {
      r.value = r.__value = "", o[l] = c;
      continue
    }
    if (l === "class") {
      var L = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Nr(r, L, c, a, f == null ? void 0 : f[E], i[E]), o[l] = c, o[E] = i[E];
      continue
    }
    if (l === "style") {
      Lr(r, c, f == null ? void 0 : f[O], i[O]), o[l] = c, o[O] = i[O];
      continue
    }
    var S = o[l];
    if (!(c === S && !(c === void 0 && r.hasAttribute(l)))) {
      o[l] = c;
      var b = l[0] + l[1];
      if (b !== "$$")
        if (b === "on") {
          const _ = {},
            p = "$$" + l;
          let g = l.slice(2);
          var M = br(g);
          if (er(g) && (g = g.slice(0, -7), _.capture = !0), !M && S) {
            if (c != null) continue;
            r.removeEventListener(g, o[p], _), o[p] = null
          }
          if (c != null)
            if (M) r[`__${g}`] = c, lr([g]);
            else {
              let F = function(J) {
                o[l].call(this, J)
              };
              o[p] = sr(g, r, F, _)
            }
          else M && (r[`__${g}`] = void 0)
        } else if (l === "style") C(r, l, c);
      else if (l === "autofocus") or(r, !!c);
      else if (!e && (l === "__value" || l === "value" && c != null)) r.value = r.__value = c;
      else if (l === "selected" && A) pr(r, c);
      else {
        var h = l;
        s || (h = cr(h));
        var q = h === "defaultValue" || h === "defaultChecked";
        if (c == null && !e && !q)
          if (t[l] = null, h === "value" || h === "checked") {
            let _ = r;
            const p = f === void 0;
            if (h === "value") {
              let g = _.defaultValue;
              _.removeAttribute(h), _.defaultValue = g, _.value = _.__value = p ? g : null
            } else {
              let g = _.defaultChecked;
              _.removeAttribute(h), _.defaultChecked = g, _.checked = p ? g : !1
            }
          } else r.removeAttribute(l);
        else q || n.includes(h) && (e || typeof c != "string") ? (r[h] = c, h in t && (t[h] = nr)) : typeof c != "function" && C(r, h, c)
      }
    }
  }
  return v && y(!0), o
}

function Mr(r, f, i = [], a = [], u, t = !1) {
  x(i, a, e => {
    var s = void 0,
      v = {},
      o = r.nodeName === "SELECT",
      A = !1;
    if (G(() => {
        var n = f(...e.map(ar)),
          L = Er(r, s, n, u, t);
        A && o && "value" in n && I(r, n.value);
        for (let b of Object.getOwnPropertySymbols(v)) n[b] || P(v[b]);
        for (let b of Object.getOwnPropertySymbols(n)) {
          var S = n[b];
          b.description === ur && (!s || S !== s[b]) && (v[b] && P(v[b]), v[b] = H(() => gr(r, () => S))), L[b] = S
        }
        s = L
      }), o) {
      var d = r;
      $(() => {
        I(d, s.value, !0), Y(d)
      })
    }
    A = !0
  })
}

function j(r) {
  return r.__attributes ?? (r.__attributes = {
    [B]: r.nodeName.includes("-"),
    [D]: r.namespaceURI === rr
  })
}
var V = new Map;

function z(r) {
  var f = V.get(r.nodeName);
  if (f) return f;
  V.set(r.nodeName, f = []);
  for (var i, a = r, u = Element.prototype; u !== a;) {
    i = tr(a);
    for (var t in i) i[t].set && f.push(t);
    a = ir(a)
  }
  return f
}
export {
  E as C, O as S, Nr as a, Mr as b, _r as c, Tr as d, Lr as e, gr as f, Cr as g, hr as h, Ir as r, C as s
};