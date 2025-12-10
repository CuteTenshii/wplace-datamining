import {
  m as B,
  ae as D,
  a1 as F,
  F as R,
  k as p,
  a9 as m,
  bj as x,
  A as rr,
  C as ir,
  q as fr,
  v as j,
  z as er,
  bk as ar,
  bl as tr,
  bm as ur,
  bn as sr,
  j as or,
  bo as lr,
  bp as cr,
  Y,
  bq as nr,
  br as dr,
  ar as vr,
  bs as br,
  bt as gr,
  bu as hr,
  D as _r,
  bv as Ar,
  bw as Sr
} from "./HtHXdD60.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "3555dcfd10153d679a83fc3bd1544987e233c7a6"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new r.Error().stack;
    f && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[f] = "7c67736b-0128-4eeb-ac03-3c6563cef062", r._sentryDebugIdIdentifier = "sentry-dbid-7c67736b-0128-4eeb-ac03-3c6563cef062")
  })()
} catch {}

function pr(r, f) {
  var i = void 0,
    e;
  B(() => {
    i !== (i = f()) && (e && (D(e), e = null), i && (e = F(() => {
      R(() => i(r))
    })))
  })
}

function G(r) {
  var f, i, e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var a = r.length;
      for (f = 0; f < a; f++) r[f] && (i = G(r[f])) && (e && (e += " "), e += i)
    } else
      for (i in r) r[i] && (e && (e += " "), e += i);
  return e
}

function yr() {
  for (var r, f, i = 0, e = "", a = arguments.length; i < a; i++)(r = arguments[i]) && (f = G(r)) && (e && (e += " "), e += f);
  return e
}

function wr(r) {
  return typeof r == "object" ? yr(r) : r ?? ""
}
const V = [...` 	
\r\f \v\uFEFF`];

function Er(r, f, i) {
  var e = r == null ? "" : "" + r;
  if (f && (e = e ? e + " " + f : f), i) {
    for (var a in i)
      if (i[a]) e = e ? e + " " + a : a;
      else if (e.length)
      for (var t = a.length, u = 0;
        (u = e.indexOf(a, u)) >= 0;) {
        var o = u + t;
        (u === 0 || V.includes(e[u - 1])) && (o === e.length || V.includes(e[o])) ? e = (u === 0 ? "" : e.substring(0, u)) + e.substring(o + 1): u = o
      }
  }
  return e === "" ? null : e
}

function H(r, f = !1) {
  var i = f ? " !important;" : ";",
    e = "";
  for (var a in r) {
    var t = r[a];
    t != null && t !== "" && (e += " " + a + ": " + t + i)
  }
  return e
}

function q(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Nr(r, f) {
  if (f) {
    var i = "",
      e, a;
    if (Array.isArray(f) ? (e = f[0], a = f[1]) : e = f, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var t = !1,
        u = 0,
        o = !1,
        n = [];
      e && n.push(...Object.keys(e).map(q)), a && n.push(...Object.keys(a).map(q));
      var d = 0,
        h = -1;
      const w = r.length;
      for (var v = 0; v < w; v++) {
        var s = r[v];
        if (o ? s === "/" && r[v - 1] === "*" && (o = !1) : t ? t === s && (t = !1) : s === "/" && r[v + 1] === "*" ? o = !0 : s === '"' || s === "'" ? t = s : s === "(" ? u++ : s === ")" && u--, !o && t === !1 && u === 0) {
          if (s === ":" && h === -1) h = v;
          else if (s === ";" || v === w - 1) {
            if (h !== -1) {
              var y = q(r.substring(d, h).trim());
              if (!n.includes(y)) {
                s !== ";" && v++;
                var S = r.substring(d, v).trim();
                i += " " + S + ";"
              }
            }
            d = v + 1, h = -1
          }
        }
      }
    }
    return e && (i += H(e)), a && (i += H(a, !0)), i = i.trim(), i === "" ? null : i
  }
  return r == null ? null : String(r)
}

function Tr(r, f, i, e, a, t) {
  var u = r.__className;
  if (p || u !== i || u === void 0) {
    var o = Er(i, e, t);
    (!p || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : f ? r.className = o : r.setAttribute("class", o)), r.__className = i
  } else if (t && a !== t)
    for (var n in t) {
      var d = !!t[n];
      (a == null || d !== !!a[n]) && r.classList.toggle(n, d)
    }
  return t
}

function P(r, f = {}, i, e) {
  for (var a in i) {
    var t = i[a];
    f[a] !== t && (i[a] == null ? r.style.removeProperty(a) : r.style.setProperty(a, t, e))
  }
}

function Ir(r, f, i, e) {
  var a = r.__style;
  if (p || a !== f) {
    var t = Nr(f, e);
    (!p || t !== r.getAttribute("style")) && (t == null ? r.removeAttribute("style") : r.style.cssText = t), r.__style = f
  } else e && (Array.isArray(e) ? (P(r, i == null ? void 0 : i[0], e[0]), P(r, i == null ? void 0 : i[1], e[1], "important")) : P(r, i, e));
  return e
}

function L(r, f, i = !1) {
  if (r.multiple) {
    if (f == null) return;
    if (!m(f)) return x();
    for (var e of r.options) e.selected = f.includes(k(e));
    return
  }
  for (e of r.options) {
    var a = k(e);
    if (rr(a, f)) {
      e.selected = !0;
      return
    }
  }(!i || f !== void 0) && (r.selectedIndex = -1)
}

function K(r) {
  var f = new MutationObserver(() => {
    L(r, r.__value)
  });
  f.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), ir(() => {
    f.disconnect()
  })
}

function Mr(r, f, i = f) {
  var e = new WeakSet,
    a = !0;
  fr(r, "change", t => {
    var u = t ? "[selected]" : ":checked",
      o;
    if (r.multiple) o = [].map.call(r.querySelectorAll(u), k);
    else {
      var n = r.querySelector(u) ?? r.querySelector("option:not([disabled])");
      o = n && k(n)
    }
    i(o), j !== null && e.add(j)
  }), R(() => {
    var t = f();
    if (r === document.activeElement) {
      var u = er ?? j;
      if (e.has(u)) return
    }
    if (L(r, t, a), a && t === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (t = k(o), i(t))
    }
    r.__value = t, a = !1
  }), K(r)
}

function k(r) {
  return "__value" in r ? r.__value : r.value
}
const T = Symbol("class"),
  I = Symbol("style"),
  W = Symbol("is custom element"),
  Z = Symbol("is html");

function kr(r) {
  if (p) {
    var f = !1,
      i = () => {
        if (!f) {
          if (f = !0, r.hasAttribute("value")) {
            var e = r.value;
            O(r, "value", null), r.value = e
          }
          if (r.hasAttribute("checked")) {
            var a = r.checked;
            O(r, "checked", null), r.checked = a
          }
        }
      };
    r.__on_r = i, _r(i), Ar()
  }
}

function jr(r, f) {
  var i = C(r);
  i.value === (i.value = f ?? void 0) || r.value === f && (f !== 0 || r.nodeName !== "PROGRESS") || (r.value = f ?? "")
}

function qr(r, f) {
  var i = C(r);
  i.checked !== (i.checked = f ?? void 0) && (r.checked = f)
}

function Lr(r, f) {
  f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function O(r, f, i, e) {
  var a = C(r);
  p && (a[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === "LINK") || a[f] !== (a[f] = i) && (f === "loading" && (r[sr] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && J(r).includes(f) ? r[f] = i : r.setAttribute(f, i))
}

function Or(r, f, i, e, a = !1, t = !1) {
  if (p && a && r.tagName === "INPUT") {
    var u = r,
      o = u.type === "checkbox" ? "defaultChecked" : "defaultValue";
    o in i || kr(u)
  }
  var n = C(r),
    d = n[W],
    h = !n[Z];
  let v = p && d;
  v && Y(!1);
  var s = f || {},
    y = r.tagName === "OPTION";
  for (var S in f) S in i || (i[S] = null);
  i.class ? i.class = wr(i.class) : (e || i[T]) && (i.class = null), i[I] && (i.style ?? (i.style = null));
  var w = J(r);
  for (const l in i) {
    let c = i[l];
    if (y && l === "value" && c == null) {
      r.value = r.__value = "", s[l] = c;
      continue
    }
    if (l === "class") {
      var N = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Tr(r, N, c, e, f == null ? void 0 : f[T], i[T]), s[l] = c, s[T] = i[T];
      continue
    }
    if (l === "style") {
      Ir(r, c, f == null ? void 0 : f[I], i[I]), s[l] = c, s[I] = i[I];
      continue
    }
    var _ = s[l];
    if (!(c === _ && !(c === void 0 && r.hasAttribute(l)))) {
      s[l] = c;
      var $ = l[0] + l[1];
      if ($ !== "$$")
        if ($ === "on") {
          const A = {},
            E = "$$" + l;
          let b = l.slice(2);
          var M = Sr(b);
          if (nr(b) && (b = b.slice(0, -7), A.capture = !0), !M && _) {
            if (c != null) continue;
            r.removeEventListener(b, s[E], A), s[E] = null
          }
          if (c != null)
            if (M) r[`__${b}`] = c, vr([b]);
            else {
              let Q = function(X) {
                s[l].call(this, X)
              };
              s[E] = dr(b, r, Q, A)
            }
          else M && (r[`__${b}`] = void 0)
        } else if (l === "style") O(r, l, c);
      else if (l === "autofocus") br(r, !!c);
      else if (!d && (l === "__value" || l === "value" && c != null)) r.value = r.__value = c;
      else if (l === "selected" && y) Lr(r, c);
      else {
        var g = l;
        h || (g = gr(g));
        var U = g === "defaultValue" || g === "defaultChecked";
        if (c == null && !d && !U)
          if (n[l] = null, g === "value" || g === "checked") {
            let A = r;
            const E = f === void 0;
            if (g === "value") {
              let b = A.defaultValue;
              A.removeAttribute(g), A.defaultValue = b, A.value = A.__value = E ? b : null
            } else {
              let b = A.defaultChecked;
              A.removeAttribute(g), A.defaultChecked = b, A.checked = E ? b : !1
            }
          } else r.removeAttribute(l);
        else U || w.includes(g) && (d || typeof c != "string") ? (r[g] = c, g in n && (n[g] = hr)) : typeof c != "function" && O(r, g, c)
      }
    }
  }
  return v && Y(!0), s
}

function Pr(r, f, i = [], e = [], a = [], t, u = !1, o = !1) {
  ar(a, i, e, n => {
    var d = void 0,
      h = {},
      v = r.nodeName === "SELECT",
      s = !1;
    if (B(() => {
        var S = f(...n.map(or)),
          w = Or(r, d, S, t, u, o);
        s && v && "value" in S && L(r, S.value);
        for (let _ of Object.getOwnPropertySymbols(h)) S[_] || D(h[_]);
        for (let _ of Object.getOwnPropertySymbols(S)) {
          var N = S[_];
          _.description === lr && (!d || N !== d[_]) && (h[_] && D(h[_]), h[_] = F(() => pr(r, () => N))), w[_] = N
        }
        d = w
      }), v) {
      var y = r;
      R(() => {
        L(y, d.value, !0), K(y)
      })
    }
    s = !0
  })
}

function C(r) {
  return r.__attributes ?? (r.__attributes = {
    [W]: r.nodeName.includes("-"),
    [Z]: r.namespaceURI === tr
  })
}
var z = new Map;

function J(r) {
  var f = r.getAttribute("is") || r.nodeName,
    i = z.get(f);
  if (i) return i;
  z.set(f, i = []);
  for (var e, a = r, t = Element.prototype; t !== a;) {
    e = cr(a);
    for (var u in e) e[u].set && i.push(u);
    a = ur(a)
  }
  return i
}
export {
  T as C, I as S, Tr as a, Pr as b, wr as c, pr as d, Mr as e, Ir as f, jr as g, qr as h, yr as i, kr as r, O as s
};