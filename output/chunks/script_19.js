import {
  k as V,
  ai as j,
  m as Y,
  X as P,
  i as p,
  Q as X,
  V as Z,
  ae as J,
  b6 as W,
  T as m,
  b7 as x,
  b8 as rr,
  b9 as fr,
  ba as ir,
  h as er,
  bb as ar,
  bc as tr,
  a5 as $,
  bd as ur,
  be as sr,
  x as or,
  bf as lr,
  bg as nr,
  U as cr,
  bh as dr,
  bi as br,
  bj as vr
} from "./CBd9NCKG.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "251f3ef5bc14649f46f335286261e6c964681eae"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      f = new r.Error().stack;
    f && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[f] = "717cdb26-9bb5-47b4-8a4c-69ff48aef819", r._sentryDebugIdIdentifier = "sentry-dbid-717cdb26-9bb5-47b4-8a4c-69ff48aef819")
  })()
} catch {}

function gr(r, f) {
  var i = void 0,
    e;
  V(() => {
    i !== (i = f()) && (e && (j(e), e = null), i && (e = Y(() => {
      P(() => i(r))
    })))
  })
}

function H(r) {
  var f, i, e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var a = r.length;
      for (f = 0; f < a; f++) r[f] && (i = H(r[f])) && (e && (e += " "), e += i)
    } else
      for (i in r) r[i] && (e && (e += " "), e += i);
  return e
}

function hr() {
  for (var r, f, i = 0, e = "", a = arguments.length; i < a; i++)(r = arguments[i]) && (f = H(r)) && (e && (e += " "), e += f);
  return e
}

function _r(r) {
  return typeof r == "object" ? hr(r) : r ?? ""
}
const q = [...` 	
\r\f \v\uFEFF`];

function Ar(r, f, i) {
  var e = r == null ? "" : "" + r;
  if (f && (e = e ? e + " " + f : f), i) {
    for (var a in i)
      if (i[a]) e = e ? e + " " + a : a;
      else if (e.length)
      for (var t = a.length, u = 0;
        (u = e.indexOf(a, u)) >= 0;) {
        var s = u + t;
        (u === 0 || q.includes(e[u - 1])) && (s === e.length || q.includes(e[s])) ? e = (u === 0 ? "" : e.substring(0, u)) + e.substring(s + 1): u = s
      }
  }
  return e === "" ? null : e
}

function D(r, f = !1) {
  var i = f ? " !important;" : ";",
    e = "";
  for (var a in r) {
    var t = r[a];
    t != null && t !== "" && (e += " " + a + ": " + t + i)
  }
  return e
}

function C(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Sr(r, f) {
  if (f) {
    var i = "",
      e, a;
    if (Array.isArray(f) ? (e = f[0], a = f[1]) : e = f, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var t = !1,
        u = 0,
        s = !1,
        d = [];
      e && d.push(...Object.keys(e).map(C)), a && d.push(...Object.keys(a).map(C));
      var l = 0,
        A = -1;
      const v = r.length;
      for (var b = 0; b < v; b++) {
        var c = r[b];
        if (s ? c === "/" && r[b - 1] === "*" && (s = !1) : t ? t === c && (t = !1) : c === "/" && r[b + 1] === "*" ? s = !0 : c === '"' || c === "'" ? t = c : c === "(" ? u++ : c === ")" && u--, !s && t === !1 && u === 0) {
          if (c === ":" && A === -1) A = b;
          else if (c === ";" || b === v - 1) {
            if (A !== -1) {
              var y = C(r.substring(l, A).trim());
              if (!d.includes(y)) {
                c !== ";" && b++;
                var S = r.substring(l, b).trim();
                i += " " + S + ";"
              }
            }
            l = b + 1, A = -1
          }
        }
      }
    }
    return e && (i += D(e)), a && (i += D(a, !0)), i = i.trim(), i === "" ? null : i
  }
  return r == null ? null : String(r)
}

function pr(r, f, i, e, a, t) {
  var u = r.__className;
  if (p || u !== i || u === void 0) {
    var s = Ar(i, e, t);
    (!p || s !== r.getAttribute("class")) && (s == null ? r.removeAttribute("class") : f ? r.className = s : r.setAttribute("class", s)), r.__className = i
  } else if (t && a !== t)
    for (var d in t) {
      var l = !!t[d];
      (a == null || l !== !!a[d]) && r.classList.toggle(d, l)
    }
  return t
}

function M(r, f = {}, i, e) {
  for (var a in i) {
    var t = i[a];
    f[a] !== t && (i[a] == null ? r.style.removeProperty(a) : r.style.setProperty(a, t, e))
  }
}

function yr(r, f, i, e) {
  var a = r.__style;
  if (p || a !== f) {
    var t = Sr(f, e);
    (!p || t !== r.getAttribute("style")) && (t == null ? r.removeAttribute("style") : r.style.cssText = t), r.__style = f
  } else e && (Array.isArray(e) ? (M(r, i == null ? void 0 : i[0], e[0]), M(r, i == null ? void 0 : i[1], e[1], "important")) : M(r, i, e));
  return e
}

function I(r, f, i = !1) {
  if (r.multiple) {
    if (f == null) return;
    if (!J(f)) return W();
    for (var e of r.options) e.selected = f.includes(w(e));
    return
  }
  for (e of r.options) {
    var a = w(e);
    if (m(a, f)) {
      e.selected = !0;
      return
    }
  }(!i || f !== void 0) && (r.selectedIndex = -1)
}

function B(r) {
  var f = new MutationObserver(() => {
    I(r, r.__value)
  });
  f.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), Z(() => {
    f.disconnect()
  })
}

function wr(r, f, i = f) {
  var e = !0;
  X(r, "change", a => {
    var t = a ? "[selected]" : ":checked",
      u;
    if (r.multiple) u = [].map.call(r.querySelectorAll(t), w);
    else {
      var s = r.querySelector(t) ?? r.querySelector("option:not([disabled])");
      u = s && w(s)
    }
    i(u)
  }), P(() => {
    var a = f();
    if (I(r, a, e), e && a === void 0) {
      var t = r.querySelector(":checked");
      t !== null && (a = w(t), i(a))
    }
    r.__value = a, e = !1
  }), B(r)
}

function w(r) {
  return "__value" in r ? r.__value : r.value
}
const E = Symbol("class"),
  N = Symbol("style"),
  G = Symbol("is custom element"),
  K = Symbol("is html");

function Ir(r) {
  if (p) {
    var f = !1,
      i = () => {
        if (!f) {
          if (f = !0, r.hasAttribute("value")) {
            var e = r.value;
            L(r, "value", null), r.value = e
          }
          if (r.hasAttribute("checked")) {
            var a = r.checked;
            L(r, "checked", null), r.checked = a
          }
        }
      };
    r.__on_r = i, dr(i), br()
  }
}

function Lr(r, f) {
  var i = O(r);
  i.value === (i.value = f ?? void 0) || r.value === f && (f !== 0 || r.nodeName !== "PROGRESS") || (r.value = f ?? "")
}

function Or(r, f) {
  var i = O(r);
  i.checked !== (i.checked = f ?? void 0) && (r.checked = f)
}

function Tr(r, f) {
  f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function L(r, f, i, e) {
  var a = O(r);
  p && (a[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === "LINK") || a[f] !== (a[f] = i) && (f === "loading" && (r[ir] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && z(r).includes(f) ? r[f] = i : r.setAttribute(f, i))
}

function Er(r, f, i, e, a = !1) {
  var t = O(r),
    u = t[G],
    s = !t[K];
  let d = p && u;
  d && $(!1);
  var l = f || {},
    A = r.tagName === "OPTION";
  for (var b in f) b in i || (i[b] = null);
  i.class ? i.class = _r(i.class) : (e || i[E]) && (i.class = null), i[N] && (i.style ?? (i.style = null));
  var c = z(r);
  for (const o in i) {
    let n = i[o];
    if (A && o === "value" && n == null) {
      r.value = r.__value = "", l[o] = n;
      continue
    }
    if (o === "class") {
      var y = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      pr(r, y, n, e, f == null ? void 0 : f[E], i[E]), l[o] = n, l[E] = i[E];
      continue
    }
    if (o === "style") {
      yr(r, n, f == null ? void 0 : f[N], i[N]), l[o] = n, l[N] = i[N];
      continue
    }
    var S = l[o];
    if (!(n === S && !(n === void 0 && r.hasAttribute(o)))) {
      l[o] = n;
      var v = o[0] + o[1];
      if (v !== "$$")
        if (v === "on") {
          const _ = {},
            T = "$$" + o;
          let g = o.slice(2);
          var k = vr(g);
          if (ur(g) && (g = g.slice(0, -7), _.capture = !0), !k && S) {
            if (n != null) continue;
            r.removeEventListener(g, l[T], _), l[T] = null
          }
          if (n != null)
            if (k) r[`__${g}`] = n, or([g]);
            else {
              let F = function(Q) {
                l[o].call(this, Q)
              };
              l[T] = sr(g, r, F, _)
            }
          else k && (r[`__${g}`] = void 0)
        } else if (o === "style") L(r, o, n);
      else if (o === "autofocus") lr(r, !!n);
      else if (!u && (o === "__value" || o === "value" && n != null)) r.value = r.__value = n;
      else if (o === "selected" && A) Tr(r, n);
      else {
        var h = o;
        s || (h = nr(h));
        var R = h === "defaultValue" || h === "defaultChecked";
        if (n == null && !u && !R)
          if (t[o] = null, h === "value" || h === "checked") {
            let _ = r;
            const T = f === void 0;
            if (h === "value") {
              let g = _.defaultValue;
              _.removeAttribute(h), _.defaultValue = g, _.value = _.__value = T ? g : null
            } else {
              let g = _.defaultChecked;
              _.removeAttribute(h), _.defaultChecked = g, _.checked = T ? g : !1
            }
          } else r.removeAttribute(o);
        else R || c.includes(h) && (u || typeof n != "string") ? (r[h] = n, h in t && (t[h] = cr)) : typeof n != "function" && L(r, h, n)
      }
    }
  }
  return d && $(!0), l
}

function kr(r, f, i = [], e = [], a, t = !1) {
  x(i, e, u => {
    var s = void 0,
      d = {},
      l = r.nodeName === "SELECT",
      A = !1;
    if (V(() => {
        var c = f(...u.map(er)),
          y = Er(r, s, c, a, t);
        A && l && "value" in c && I(r, c.value);
        for (let v of Object.getOwnPropertySymbols(d)) c[v] || j(d[v]);
        for (let v of Object.getOwnPropertySymbols(c)) {
          var S = c[v];
          v.description === ar && (!s || S !== s[v]) && (d[v] && j(d[v]), d[v] = Y(() => gr(r, () => S))), y[v] = S
        }
        s = y
      }), l) {
      var b = r;
      P(() => {
        I(b, s.value, !0), B(b)
      })
    }
    A = !0
  })
}

function O(r) {
  return r.__attributes ?? (r.__attributes = {
    [G]: r.nodeName.includes("-"),
    [K]: r.namespaceURI === rr
  })
}
var U = new Map;

function z(r) {
  var f = U.get(r.nodeName);
  if (f) return f;
  U.set(r.nodeName, f = []);
  for (var i, e = r, a = Element.prototype; a !== e;) {
    i = tr(e);
    for (var t in i) i[t].set && f.push(t);
    e = fr(e)
  }
  return f
}
export {
  E as C, N as S, pr as a, wr as b, _r as c, kr as d, gr as e, yr as f, Lr as g, hr as h, Or as i, Ir as r, L as s
};