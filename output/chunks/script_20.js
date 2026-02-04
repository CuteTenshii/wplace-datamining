import {
  m as F,
  F as R,
  I as G,
  B as $,
  k as p,
  al as m,
  C as P,
  ap as x,
  a4 as rr,
  bk as fr,
  ao as ir,
  an as er,
  bl as ar,
  bm as tr,
  bn as ur,
  bo as sr,
  j as or,
  bp as lr,
  bq as nr,
  Q as V,
  br as cr,
  bs as dr,
  o as vr,
  bt as br,
  bu as gr,
  bv as hr,
  S as _r,
  bw as Ar,
  bx as Sr
} from "./BxNCv_Ey.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "393d80b8e89856a8eed8a9424bbd25f96eb3752b"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new r.Error().stack;
    i && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[i] = "6e1faef5-a09b-4f3f-8582-c023f0a4cd65", r._sentryDebugIdIdentifier = "sentry-dbid-6e1faef5-a09b-4f3f-8582-c023f0a4cd65")
  })()
} catch {}

function pr(r, i) {
  var f = void 0,
    e;
  F(() => {
    f !== (f = i()) && (e && (R(e), e = null), f && (e = G(() => {
      $(() => f(r))
    })))
  })
}

function K(r) {
  var i, f, e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var a = r.length;
      for (i = 0; i < a; i++) r[i] && (f = K(r[i])) && (e && (e += " "), e += f)
    } else
      for (f in r) r[f] && (e && (e += " "), e += f);
  return e
}

function yr() {
  for (var r, i, f = 0, e = "", a = arguments.length; f < a; f++)(r = arguments[f]) && (i = K(r)) && (e && (e += " "), e += i);
  return e
}

function wr(r) {
  return typeof r == "object" ? yr(r) : r ?? ""
}
const Y = [...` 	
\r\f \v\uFEFF`];

function Er(r, i, f) {
  var e = r == null ? "" : "" + r;
  if (i && (e = e ? e + " " + i : i), f) {
    for (var a in f)
      if (f[a]) e = e ? e + " " + a : a;
      else if (e.length)
      for (var t = a.length, u = 0;
        (u = e.indexOf(a, u)) >= 0;) {
        var o = u + t;
        (u === 0 || Y.includes(e[u - 1])) && (o === e.length || Y.includes(e[o])) ? e = (u === 0 ? "" : e.substring(0, u)) + e.substring(o + 1): u = o
      }
  }
  return e === "" ? null : e
}

function B(r, i = !1) {
  var f = i ? " !important;" : ";",
    e = "";
  for (var a in r) {
    var t = r[a];
    t != null && t !== "" && (e += " " + a + ": " + t + f)
  }
  return e
}

function j(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Nr(r, i) {
  if (i) {
    var f = "",
      e, a;
    if (Array.isArray(i) ? (e = i[0], a = i[1]) : e = i, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var t = !1,
        u = 0,
        o = !1,
        c = [];
      e && c.push(...Object.keys(e).map(j)), a && c.push(...Object.keys(a).map(j));
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
    return e && (f += B(e)), a && (f += B(a, !0)), f = f.trim(), f === "" ? null : f
  }
  return r == null ? null : String(r)
}

function Tr(r, i, f, e, a, t) {
  var u = r.__className;
  if (p || u !== f || u === void 0) {
    var o = Er(f, e, t);
    (!p || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : i ? r.className = o : r.setAttribute("class", o)), r.__className = f
  } else if (t && a !== t)
    for (var c in t) {
      var d = !!t[c];
      (a == null || d !== !!a[c]) && r.classList.toggle(c, d)
    }
  return t
}

function q(r, i = {}, f, e) {
  for (var a in f) {
    var t = f[a];
    i[a] !== t && (f[a] == null ? r.style.removeProperty(a) : r.style.setProperty(a, t, e))
  }
}

function Ir(r, i, f, e) {
  var a = r.__style;
  if (p || a !== i) {
    var t = Nr(i, e);
    (!p || t !== r.getAttribute("style")) && (t == null ? r.removeAttribute("style") : r.style.cssText = t), r.__style = i
  } else e && (Array.isArray(e) ? (q(r, f == null ? void 0 : f[0], e[0]), q(r, f == null ? void 0 : f[1], e[1], "important")) : q(r, f, e));
  return e
}

function L(r, i, f = !1) {
  if (r.multiple) {
    if (i == null) return;
    if (!rr(i)) return fr();
    for (var e of r.options) e.selected = i.includes(k(e));
    return
  }
  for (e of r.options) {
    var a = k(e);
    if (ir(a, i)) {
      e.selected = !0;
      return
    }
  }(!f || i !== void 0) && (r.selectedIndex = -1)
}

function z(r) {
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
  var e = new WeakSet,
    a = !0;
  m(r, "change", t => {
    var u = t ? "[selected]" : ":checked",
      o;
    if (r.multiple) o = [].map.call(r.querySelectorAll(u), k);
    else {
      var c = r.querySelector(u) ?? r.querySelector("option:not([disabled])");
      o = c && k(c)
    }
    f(o), P !== null && e.add(P)
  }), $(() => {
    var t = i();
    if (r === document.activeElement) {
      var u = er ?? P;
      if (e.has(u)) return
    }
    if (L(r, t, a), a && t === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (t = k(o), f(t))
    }
    r.__value = t, a = !1
  }), z(r)
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
            var e = r.value;
            O(r, "value", null), r.value = e
          }
          if (r.hasAttribute("checked")) {
            var a = r.checked;
            O(r, "checked", null), r.checked = a
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

function O(r, i, f, e) {
  var a = C(r);
  p && (a[i] = r.getAttribute(i), i === "src" || i === "srcset" || i === "href" && r.nodeName === "LINK") || a[i] !== (a[i] = f) && (i === "loading" && (r[sr] = f), f == null ? r.removeAttribute(i) : typeof f != "string" && Z(r).includes(i) ? r[i] = f : r.setAttribute(i, f))
}

function Or(r, i, f, e, a = !1, t = !1) {
  if (p && a && r.tagName === "INPUT") {
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
  f.class ? f.class = wr(f.class) : (e || f[T]) && (f.class = null), f[I] && (f.style ?? (f.style = null));
  var w = Z(r);
  for (const l in f) {
    let n = f[l];
    if (y && l === "value" && n == null) {
      r.value = r.__value = "", s[l] = n;
      continue
    }
    if (l === "class") {
      var N = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Tr(r, N, n, e, i == null ? void 0 : i[T], f[T]), s[l] = n, s[T] = f[T];
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

function qr(r, i, f = [], e = [], a = [], t, u = !1, o = !1) {
  ar(a, f, e, c => {
    var d = void 0,
      h = {},
      v = r.nodeName === "SELECT",
      s = !1;
    if (F(() => {
        var S = i(...c.map(or)),
          w = Or(r, d, S, t, u, o);
        s && v && "value" in S && L(r, S.value);
        for (let _ of Object.getOwnPropertySymbols(h)) S[_] || R(h[_]);
        for (let _ of Object.getOwnPropertySymbols(S)) {
          var N = S[_];
          _.description === lr && (!d || N !== d[_]) && (h[_] && R(h[_]), h[_] = G(() => pr(r, () => N))), w[_] = N
        }
        d = w
      }), v) {
      var y = r;
      $(() => {
        L(y, d.value, !0), z(y)
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
var H = new Map;

function Z(r) {
  var i = r.getAttribute("is") || r.nodeName,
    f = H.get(i);
  if (f) return f;
  H.set(i, f = []);
  for (var e, a = r, t = Element.prototype; t !== a;) {
    e = nr(a);
    for (var u in e) e[u].set && f.push(u);
    a = ur(a)
  }
  return f
}
export {
  T as C, I as S, Tr as a, Mr as b, wr as c, Ir as d, Pr as e, qr as f, pr as g, jr as h, yr as i, kr as r, O as s
};