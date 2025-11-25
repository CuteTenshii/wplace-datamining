import {
  j as B,
  ai as q,
  a5 as G,
  e as $,
  h as p,
  K as m,
  L as P,
  Q as x,
  ad as rr,
  bj as fr,
  P as ir,
  O as ar,
  bk as er,
  bl as tr,
  bm as ur,
  bn as sr,
  g as or,
  bo as lr,
  bp as nr,
  a1 as V,
  bq as cr,
  br as dr,
  k as vr,
  bs as br,
  bt as gr,
  bu as hr,
  R as _r,
  bv as Ar,
  bw as Sr
} from "./BAiyaAMH.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "ac7618a676a9d262ff8724cf2a3a13f62011007a"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new r.Error().stack;
    i && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[i] = "395883e0-9337-4728-b247-8afcc19cabaf", r._sentryDebugIdIdentifier = "sentry-dbid-395883e0-9337-4728-b247-8afcc19cabaf")
  })()
} catch {}

function pr(r, i) {
  var f = void 0,
    a;
  B(() => {
    f !== (f = i()) && (a && (q(a), a = null), f && (a = G(() => {
      $(() => f(r))
    })))
  })
}

function z(r) {
  var i, f, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var e = r.length;
      for (i = 0; i < e; i++) r[i] && (f = z(r[i])) && (a && (a += " "), a += f)
    } else
      for (f in r) r[f] && (a && (a += " "), a += f);
  return a
}

function yr() {
  for (var r, i, f = 0, a = "", e = arguments.length; f < e; f++)(r = arguments[f]) && (i = z(r)) && (a && (a += " "), a += i);
  return a
}

function wr(r) {
  return typeof r == "object" ? yr(r) : r ?? ""
}
const Y = [...` 	
\r\f \v\uFEFF`];

function Er(r, i, f) {
  var a = r == null ? "" : "" + r;
  if (i && (a = a ? a + " " + i : i), f) {
    for (var e in f)
      if (f[e]) a = a ? a + " " + e : e;
      else if (a.length)
      for (var t = e.length, u = 0;
        (u = a.indexOf(e, u)) >= 0;) {
        var o = u + t;
        (u === 0 || Y.includes(a[u - 1])) && (o === a.length || Y.includes(a[o])) ? a = (u === 0 ? "" : a.substring(0, u)) + a.substring(o + 1): u = o
      }
  }
  return a === "" ? null : a
}

function H(r, i = !1) {
  var f = i ? " !important;" : ";",
    a = "";
  for (var e in r) {
    var t = r[e];
    t != null && t !== "" && (a += " " + e + ": " + t + f)
  }
  return a
}

function j(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Nr(r, i) {
  if (i) {
    var f = "",
      a, e;
    if (Array.isArray(i) ? (a = i[0], e = i[1]) : a = i, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var t = !1,
        u = 0,
        o = !1,
        c = [];
      a && c.push(...Object.keys(a).map(j)), e && c.push(...Object.keys(e).map(j));
      var d = 0,
        h = -1;
      const w = r.length;
      for (var v = 0; v < w; v++) {
        var s = r[v];
        if (o ? s === "/" && r[v - 1] === "*" && (o = !1) : t ? t === s && (t = !1) : s === "/" && r[v + 1] === "*" ? o = !0 : s === '"' || s === "'" ? t = s : s === "(" ? u++ : s === ")" && u--, !o && t === !1 && u === 0) {
          if (s === ":" && h === -1) h = v;
          else if (s === ";" || v === w - 1) {
            if (h !== -1) {
              var y = j(r.substring(d, h).trim());
              if (!c.includes(y)) {
                s !== ";" && v++;
                var S = r.substring(d, v).trim();
                f += " " + S + ";"
              }
            }
            d = v + 1, h = -1
          }
        }
      }
    }
    return a && (f += H(a)), e && (f += H(e, !0)), f = f.trim(), f === "" ? null : f
  }
  return r == null ? null : String(r)
}

function Tr(r, i, f, a, e, t) {
  var u = r.__className;
  if (p || u !== f || u === void 0) {
    var o = Er(f, a, t);
    (!p || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : i ? r.className = o : r.setAttribute("class", o)), r.__className = f
  } else if (t && e !== t)
    for (var c in t) {
      var d = !!t[c];
      (e == null || d !== !!e[c]) && r.classList.toggle(c, d)
    }
  return t
}

function R(r, i = {}, f, a) {
  for (var e in f) {
    var t = f[e];
    i[e] !== t && (f[e] == null ? r.style.removeProperty(e) : r.style.setProperty(e, t, a))
  }
}

function Ir(r, i, f, a) {
  var e = r.__style;
  if (p || e !== i) {
    var t = Nr(i, a);
    (!p || t !== r.getAttribute("style")) && (t == null ? r.removeAttribute("style") : r.style.cssText = t), r.__style = i
  } else a && (Array.isArray(a) ? (R(r, f == null ? void 0 : f[0], a[0]), R(r, f == null ? void 0 : f[1], a[1], "important")) : R(r, f, a));
  return a
}

function L(r, i, f = !1) {
  if (r.multiple) {
    if (i == null) return;
    if (!rr(i)) return fr();
    for (var a of r.options) a.selected = i.includes(k(a));
    return
  }
  for (a of r.options) {
    var e = k(a);
    if (ir(e, i)) {
      a.selected = !0;
      return
    }
  }(!f || i !== void 0) && (r.selectedIndex = -1)
}

function F(r) {
  var i = new MutationObserver(() => {
    L(r, r.__value)
  });
  i.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), x(() => {
    i.disconnect()
  })
}

function Mr(r, i, f = i) {
  var a = new WeakSet,
    e = !0;
  m(r, "change", t => {
    var u = t ? "[selected]" : ":checked",
      o;
    if (r.multiple) o = [].map.call(r.querySelectorAll(u), k);
    else {
      var c = r.querySelector(u) ?? r.querySelector("option:not([disabled])");
      o = c && k(c)
    }
    f(o), P !== null && a.add(P)
  }), $(() => {
    var t = i();
    if (r === document.activeElement) {
      var u = ar ?? P;
      if (a.has(u)) return
    }
    if (L(r, t, e), e && t === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (t = k(o), f(t))
    }
    r.__value = t, e = !1
  }), F(r)
}

function k(r) {
  return "__value" in r ? r.__value : r.value
}
const T = Symbol("class"),
  I = Symbol("style"),
  Q = Symbol("is custom element"),
  W = Symbol("is html");

function kr(r) {
  if (p) {
    var i = !1,
      f = () => {
        if (!i) {
          if (i = !0, r.hasAttribute("value")) {
            var a = r.value;
            O(r, "value", null), r.value = a
          }
          if (r.hasAttribute("checked")) {
            var e = r.checked;
            O(r, "checked", null), r.checked = e
          }
        }
      };
    r.__on_r = f, _r(f), Ar()
  }
}

function Pr(r, i) {
  var f = C(r);
  f.value === (f.value = i ?? void 0) || r.value === i && (i !== 0 || r.nodeName !== "PROGRESS") || (r.value = i ?? "")
}

function jr(r, i) {
  var f = C(r);
  f.checked !== (f.checked = i ?? void 0) && (r.checked = i)
}

function Lr(r, i) {
  i ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function O(r, i, f, a) {
  var e = C(r);
  p && (e[i] = r.getAttribute(i), i === "src" || i === "srcset" || i === "href" && r.nodeName === "LINK") || e[i] !== (e[i] = f) && (i === "loading" && (r[sr] = f), f == null ? r.removeAttribute(i) : typeof f != "string" && Z(r).includes(i) ? r[i] = f : r.setAttribute(i, f))
}

function Or(r, i, f, a, e = !1, t = !1) {
  if (p && e && r.tagName === "INPUT") {
    var u = r,
      o = u.type === "checkbox" ? "defaultChecked" : "defaultValue";
    o in f || kr(u)
  }
  var c = C(r),
    d = c[Q],
    h = !c[W];
  let v = p && d;
  v && V(!1);
  var s = i || {},
    y = r.tagName === "OPTION";
  for (var S in i) S in f || (f[S] = null);
  f.class ? f.class = wr(f.class) : (a || f[T]) && (f.class = null), f[I] && (f.style ?? (f.style = null));
  var w = Z(r);
  for (const l in f) {
    let n = f[l];
    if (y && l === "value" && n == null) {
      r.value = r.__value = "", s[l] = n;
      continue
    }
    if (l === "class") {
      var N = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Tr(r, N, n, a, i == null ? void 0 : i[T], f[T]), s[l] = n, s[T] = f[T];
      continue
    }
    if (l === "style") {
      Ir(r, n, i == null ? void 0 : i[I], f[I]), s[l] = n, s[I] = f[I];
      continue
    }
    var _ = s[l];
    if (!(n === _ && !(n === void 0 && r.hasAttribute(l)))) {
      s[l] = n;
      var D = l[0] + l[1];
      if (D !== "$$")
        if (D === "on") {
          const A = {},
            E = "$$" + l;
          let b = l.slice(2);
          var M = Sr(b);
          if (cr(b) && (b = b.slice(0, -7), A.capture = !0), !M && _) {
            if (n != null) continue;
            r.removeEventListener(b, s[E], A), s[E] = null
          }
          if (n != null)
            if (M) r[`__${b}`] = n, vr([b]);
            else {
              let J = function(X) {
                s[l].call(this, X)
              };
              s[E] = dr(b, r, J, A)
            }
          else M && (r[`__${b}`] = void 0)
        } else if (l === "style") O(r, l, n);
      else if (l === "autofocus") br(r, !!n);
      else if (!d && (l === "__value" || l === "value" && n != null)) r.value = r.__value = n;
      else if (l === "selected" && y) Lr(r, n);
      else {
        var g = l;
        h || (g = gr(g));
        var U = g === "defaultValue" || g === "defaultChecked";
        if (n == null && !d && !U)
          if (c[l] = null, g === "value" || g === "checked") {
            let A = r;
            const E = i === void 0;
            if (g === "value") {
              let b = A.defaultValue;
              A.removeAttribute(g), A.defaultValue = b, A.value = A.__value = E ? b : null
            } else {
              let b = A.defaultChecked;
              A.removeAttribute(g), A.defaultChecked = b, A.checked = E ? b : !1
            }
          } else r.removeAttribute(l);
        else U || w.includes(g) && (d || typeof n != "string") ? (r[g] = n, g in c && (c[g] = hr)) : typeof n != "function" && O(r, g, n)
      }
    }
  }
  return v && V(!0), s
}

function Rr(r, i, f = [], a = [], e = [], t, u = !1, o = !1) {
  er(e, f, a, c => {
    var d = void 0,
      h = {},
      v = r.nodeName === "SELECT",
      s = !1;
    if (B(() => {
        var S = i(...c.map(or)),
          w = Or(r, d, S, t, u, o);
        s && v && "value" in S && L(r, S.value);
        for (let _ of Object.getOwnPropertySymbols(h)) S[_] || q(h[_]);
        for (let _ of Object.getOwnPropertySymbols(S)) {
          var N = S[_];
          _.description === lr && (!d || N !== d[_]) && (h[_] && q(h[_]), h[_] = G(() => pr(r, () => N))), w[_] = N
        }
        d = w
      }), v) {
      var y = r;
      $(() => {
        L(y, d.value, !0), F(y)
      })
    }
    s = !0
  })
}

function C(r) {
  return r.__attributes ?? (r.__attributes = {
    [Q]: r.nodeName.includes("-"),
    [W]: r.namespaceURI === tr
  })
}
var K = new Map;

function Z(r) {
  var i = r.getAttribute("is") || r.nodeName,
    f = K.get(i);
  if (f) return f;
  K.set(i, f = []);
  for (var a, e = r, t = Element.prototype; t !== e;) {
    a = nr(e);
    for (var u in a) a[u].set && f.push(u);
    e = ur(e)
  }
  return f
}
export {
  T as C, I as S, Tr as a, Mr as b, wr as c, Rr as d, pr as e, Ir as f, Pr as g, yr as h, jr as i, kr as r, O as s
};