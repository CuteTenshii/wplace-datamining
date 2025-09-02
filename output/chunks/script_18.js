import {
  i as V,
  aa as M,
  k as B,
  O as D,
  h as N,
  a6 as Z,
  b5 as J,
  L as Q,
  M as W,
  b6 as X,
  b7 as m,
  b8 as x,
  b9 as rr,
  g as ir,
  ba as fr,
  bb as tr,
  Y as k,
  bc as ar,
  bd as sr,
  aw as ur,
  be as er,
  bf as or,
  U as lr,
  bg as cr,
  bh as nr,
  bi as vr
} from "./DDWIi-vs.js";

function br(r, f) {
  var i = void 0,
    t;
  V(() => {
    i !== (i = f()) && (t && (M(t), t = null), i && (t = B(() => {
      D(() => i(r))
    })))
  })
}

function G(r) {
  var f, i, t = "";
  if (typeof r == "string" || typeof r == "number") t += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var a = r.length;
      for (f = 0; f < a; f++) r[f] && (i = G(r[f])) && (t && (t += " "), t += i)
    } else
      for (i in r) r[i] && (t && (t += " "), t += i);
  return t
}

function dr() {
  for (var r, f, i = 0, t = "", a = arguments.length; i < a; i++)(r = arguments[i]) && (f = G(r)) && (t && (t += " "), t += f);
  return t
}

function gr(r) {
  return typeof r == "object" ? dr(r) : r ?? ""
}
const R = [...` 	
\r\f \v\uFEFF`];

function hr(r, f, i) {
  var t = r == null ? "" : "" + r;
  if (f && (t = t ? t + " " + f : f), i) {
    for (var a in i)
      if (i[a]) t = t ? t + " " + a : a;
      else if (t.length)
      for (var s = a.length, e = 0;
        (e = t.indexOf(a, e)) >= 0;) {
        var o = e + s;
        (e === 0 || R.includes(t[e - 1])) && (o === t.length || R.includes(t[o])) ? t = (e === 0 ? "" : t.substring(0, e)) + t.substring(o + 1): e = o
      }
  }
  return t === "" ? null : t
}

function U(r, f = !1) {
  var i = f ? " !important;" : ";",
    t = "";
  for (var a in r) {
    var s = r[a];
    s != null && s !== "" && (t += " " + a + ": " + s + i)
  }
  return t
}

function w(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Ar(r, f) {
  if (f) {
    var i = "",
      t, a;
    if (Array.isArray(f) ? (t = f[0], a = f[1]) : t = f, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1,
        e = 0,
        o = !1,
        v = [];
      t && v.push(...Object.keys(t).map(w)), a && v.push(...Object.keys(a).map(w));
      var l = 0,
        _ = -1;
      const d = r.length;
      for (var b = 0; b < d; b++) {
        var n = r[b];
        if (o ? n === "/" && r[b - 1] === "*" && (o = !1) : s ? s === n && (s = !1) : n === "/" && r[b + 1] === "*" ? o = !0 : n === '"' || n === "'" ? s = n : n === "(" ? e++ : n === ")" && e--, !o && s === !1 && e === 0) {
          if (n === ":" && _ === -1) _ = b;
          else if (n === ";" || b === d - 1) {
            if (_ !== -1) {
              var L = w(r.substring(l, _).trim());
              if (!v.includes(L)) {
                n !== ";" && b++;
                var S = r.substring(l, b).trim();
                i += " " + S + ";"
              }
            }
            l = b + 1, _ = -1
          }
        }
      }
    }
    return t && (i += U(t)), a && (i += U(a, !0)), i = i.trim(), i === "" ? null : i
  }
  return r == null ? null : String(r)
}

function _r(r, f, i, t, a, s) {
  var e = r.__className;
  if (N || e !== i || e === void 0) {
    var o = hr(i, t, s);
    (!N || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : f ? r.className = o : r.setAttribute("class", o)), r.__className = i
  } else if (s && a !== s)
    for (var v in s) {
      var l = !!s[v];
      (a == null || l !== !!a[v]) && r.classList.toggle(v, l)
    }
  return s
}

function C(r, f = {}, i, t) {
  for (var a in i) {
    var s = i[a];
    f[a] !== s && (i[a] == null ? r.style.removeProperty(a) : r.style.setProperty(a, s, t))
  }
}

function Sr(r, f, i, t) {
  var a = r.__style;
  if (N || a !== f) {
    var s = Ar(f, t);
    (!N || s !== r.getAttribute("style")) && (s == null ? r.removeAttribute("style") : r.style.cssText = s), r.__style = f
  } else t && (Array.isArray(t) ? (C(r, i == null ? void 0 : i[0], t[0]), C(r, i == null ? void 0 : i[1], t[1], "important")) : C(r, i, t));
  return t
}

function P(r, f, i = !1) {
  if (r.multiple) {
    if (f == null) return;
    if (!Z(f)) return J();
    for (var t of r.options) t.selected = f.includes(Y(t));
    return
  }
  for (t of r.options) {
    var a = Y(t);
    if (Q(a, f)) {
      t.selected = !0;
      return
    }
  }(!i || f !== void 0) && (r.selectedIndex = -1)
}

function Nr(r) {
  var f = new MutationObserver(() => {
    P(r, r.__value)
  });
  f.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), W(() => {
    f.disconnect()
  })
}

function Y(r) {
  return "__value" in r ? r.__value : r.value
}
const E = Symbol("class"),
  T = Symbol("style"),
  K = Symbol("is custom element"),
  q = Symbol("is html");

function Tr(r) {
  if (N) {
    var f = !1,
      i = () => {
        if (!f) {
          if (f = !0, r.hasAttribute("value")) {
            var t = r.value;
            p(r, "value", null), r.value = t
          }
          if (r.hasAttribute("checked")) {
            var a = r.checked;
            p(r, "checked", null), r.checked = a
          }
        }
      };
    r.__on_r = i, cr(i), nr()
  }
}

function pr(r, f) {
  var i = $(r);
  i.value === (i.value = f ?? void 0) || r.value === f && (f !== 0 || r.nodeName !== "PROGRESS") || (r.value = f ?? "")
}

function Lr(r, f) {
  f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function p(r, f, i, t) {
  var a = $(r);
  N && (a[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === "LINK") || a[f] !== (a[f] = i) && (f === "loading" && (r[rr] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && y(r).includes(f) ? r[f] = i : r.setAttribute(f, i))
}

function Or(r, f, i, t, a = !1) {
  var s = $(r),
    e = s[K],
    o = !s[q];
  let v = N && e;
  v && k(!1);
  var l = f || {},
    _ = r.tagName === "OPTION";
  for (var b in f) b in i || (i[b] = null);
  i.class ? i.class = gr(i.class) : (t || i[E]) && (i.class = null), i[T] && (i.style ?? (i.style = null));
  var n = y(r);
  for (const u in i) {
    let c = i[u];
    if (_ && u === "value" && c == null) {
      r.value = r.__value = "", l[u] = c;
      continue
    }
    if (u === "class") {
      var L = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      _r(r, L, c, t, f == null ? void 0 : f[E], i[E]), l[u] = c, l[E] = i[E];
      continue
    }
    if (u === "style") {
      Sr(r, c, f == null ? void 0 : f[T], i[T]), l[u] = c, l[T] = i[T];
      continue
    }
    var S = l[u];
    if (!(c === S && !(c === void 0 && r.hasAttribute(u)))) {
      l[u] = c;
      var d = u[0] + u[1];
      if (d !== "$$")
        if (d === "on") {
          const A = {},
            O = "$$" + u;
          let g = u.slice(2);
          var I = vr(g);
          if (ar(g) && (g = g.slice(0, -7), A.capture = !0), !I && S) {
            if (c != null) continue;
            r.removeEventListener(g, l[O], A), l[O] = null
          }
          if (c != null)
            if (I) r[`__${g}`] = c, ur([g]);
            else {
              let z = function(F) {
                l[u].call(this, F)
              };
              l[O] = sr(g, r, z, A)
            }
          else I && (r[`__${g}`] = void 0)
        } else if (u === "style") p(r, u, c);
      else if (u === "autofocus") er(r, !!c);
      else if (!e && (u === "__value" || u === "value" && c != null)) r.value = r.__value = c;
      else if (u === "selected" && _) Lr(r, c);
      else {
        var h = u;
        o || (h = or(h));
        var j = h === "defaultValue" || h === "defaultChecked";
        if (c == null && !e && !j)
          if (s[u] = null, h === "value" || h === "checked") {
            let A = r;
            const O = f === void 0;
            if (h === "value") {
              let g = A.defaultValue;
              A.removeAttribute(h), A.defaultValue = g, A.value = A.__value = O ? g : null
            } else {
              let g = A.defaultChecked;
              A.removeAttribute(h), A.defaultChecked = g, A.checked = O ? g : !1
            }
          } else r.removeAttribute(u);
        else j || n.includes(h) && (e || typeof c != "string") ? (r[h] = c, h in s && (s[h] = lr)) : typeof c != "function" && p(r, h, c)
      }
    }
  }
  return v && k(!0), l
}

function Ir(r, f, i = [], t = [], a, s = !1) {
  X(i, t, e => {
    var o = void 0,
      v = {},
      l = r.nodeName === "SELECT",
      _ = !1;
    if (V(() => {
        var n = f(...e.map(ir)),
          L = Or(r, o, n, a, s);
        _ && l && "value" in n && P(r, n.value);
        for (let d of Object.getOwnPropertySymbols(v)) n[d] || M(v[d]);
        for (let d of Object.getOwnPropertySymbols(n)) {
          var S = n[d];
          d.description === fr && (!o || S !== o[d]) && (v[d] && M(v[d]), v[d] = B(() => br(r, () => S))), L[d] = S
        }
        o = L
      }), l) {
      var b = r;
      D(() => {
        P(b, o.value, !0), Nr(b)
      })
    }
    _ = !0
  })
}

function $(r) {
  return r.__attributes ?? (r.__attributes = {
    [K]: r.nodeName.includes("-"),
    [q]: r.namespaceURI === m
  })
}
var H = new Map;

function y(r) {
  var f = H.get(r.nodeName);
  if (f) return f;
  H.set(r.nodeName, f = []);
  for (var i, t = r, a = Element.prototype; a !== t;) {
    i = tr(t);
    for (var s in i) i[s].set && f.push(s);
    t = x(t)
  }
  return f
}
export {
  E as C, T as S, _r as a, Ir as b, gr as c, Sr as d, br as e, pr as f, dr as g, Tr as r, p as s
};