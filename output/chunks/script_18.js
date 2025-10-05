import {
  i as Y,
  ag as k,
  k as G,
  M as P,
  h as p,
  ac as Z,
  b5 as Q,
  J as W,
  K as X,
  G as m,
  b6 as x,
  b7 as rr,
  b8 as ir,
  b9 as fr,
  g as er,
  ba as ar,
  bb as tr,
  a4 as j,
  bc as ur,
  bd as sr,
  av as or,
  be as lr,
  bf as cr,
  aM as nr,
  bg as dr,
  bh as vr,
  bi as br
} from "./C7dcjzId.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "d8fe2b59c656bd9f6dccc34a4ac724cc1c260861"
    }
  } catch {}
})();
try {
  (function() {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {},
      i = new r.Error().stack;
    i && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[i] = "60c2a3c2-b7c8-4a4b-9c05-7d3d6adec707", r._sentryDebugIdIdentifier = "sentry-dbid-60c2a3c2-b7c8-4a4b-9c05-7d3d6adec707")
  })()
} catch {}

function gr(r, i) {
  var f = void 0,
    e;
  Y(() => {
    f !== (f = i()) && (e && (k(e), e = null), f && (e = G(() => {
      P(() => f(r))
    })))
  })
}

function H(r) {
  var i, f, e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var a = r.length;
      for (i = 0; i < a; i++) r[i] && (f = H(r[i])) && (e && (e += " "), e += f)
    } else
      for (f in r) r[f] && (e && (e += " "), e += f);
  return e
}

function hr() {
  for (var r, i, f = 0, e = "", a = arguments.length; f < a; f++)(r = arguments[f]) && (i = H(r)) && (e && (e += " "), e += i);
  return e
}

function _r(r) {
  return typeof r == "object" ? hr(r) : r ?? ""
}
const q = [...` 	
\r\f \v\uFEFF`];

function Ar(r, i, f) {
  var e = r == null ? "" : "" + r;
  if (i && (e = e ? e + " " + i : i), f) {
    for (var a in f)
      if (f[a]) e = e ? e + " " + a : a;
      else if (e.length)
      for (var t = a.length, u = 0;
        (u = e.indexOf(a, u)) >= 0;) {
        var s = u + t;
        (u === 0 || q.includes(e[u - 1])) && (s === e.length || q.includes(e[s])) ? e = (u === 0 ? "" : e.substring(0, u)) + e.substring(s + 1): u = s
      }
  }
  return e === "" ? null : e
}

function D(r, i = !1) {
  var f = i ? " !important;" : ";",
    e = "";
  for (var a in r) {
    var t = r[a];
    t != null && t !== "" && (e += " " + a + ": " + t + f)
  }
  return e
}

function M(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Sr(r, i) {
  if (i) {
    var f = "",
      e, a;
    if (Array.isArray(i) ? (e = i[0], a = i[1]) : e = i, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var t = !1,
        u = 0,
        s = !1,
        d = [];
      e && d.push(...Object.keys(e).map(M)), a && d.push(...Object.keys(a).map(M));
      var l = 0,
        A = -1;
      const b = r.length;
      for (var v = 0; v < b; v++) {
        var n = r[v];
        if (s ? n === "/" && r[v - 1] === "*" && (s = !1) : t ? t === n && (t = !1) : n === "/" && r[v + 1] === "*" ? s = !0 : n === '"' || n === "'" ? t = n : n === "(" ? u++ : n === ")" && u--, !s && t === !1 && u === 0) {
          if (n === ":" && A === -1) A = v;
          else if (n === ";" || v === b - 1) {
            if (A !== -1) {
              var y = M(r.substring(l, A).trim());
              if (!d.includes(y)) {
                n !== ";" && v++;
                var S = r.substring(l, v).trim();
                f += " " + S + ";"
              }
            }
            l = v + 1, A = -1
          }
        }
      }
    }
    return e && (f += D(e)), a && (f += D(a, !0)), f = f.trim(), f === "" ? null : f
  }
  return r == null ? null : String(r)
}

function pr(r, i, f, e, a, t) {
  var u = r.__className;
  if (p || u !== f || u === void 0) {
    var s = Ar(f, e, t);
    (!p || s !== r.getAttribute("class")) && (s == null ? r.removeAttribute("class") : i ? r.className = s : r.setAttribute("class", s)), r.__className = f
  } else if (t && a !== t)
    for (var d in t) {
      var l = !!t[d];
      (a == null || l !== !!a[d]) && r.classList.toggle(d, l)
    }
  return t
}

function C(r, i = {}, f, e) {
  for (var a in f) {
    var t = f[a];
    i[a] !== t && (f[a] == null ? r.style.removeProperty(a) : r.style.setProperty(a, t, e))
  }
}

function yr(r, i, f, e) {
  var a = r.__style;
  if (p || a !== i) {
    var t = Sr(i, e);
    (!p || t !== r.getAttribute("style")) && (t == null ? r.removeAttribute("style") : r.style.cssText = t), r.__style = i
  } else e && (Array.isArray(e) ? (C(r, f == null ? void 0 : f[0], e[0]), C(r, f == null ? void 0 : f[1], e[1], "important")) : C(r, f, e));
  return e
}

function I(r, i, f = !1) {
  if (r.multiple) {
    if (i == null) return;
    if (!Z(i)) return Q();
    for (var e of r.options) e.selected = i.includes(w(e));
    return
  }
  for (e of r.options) {
    var a = w(e);
    if (W(a, i)) {
      e.selected = !0;
      return
    }
  }(!f || i !== void 0) && (r.selectedIndex = -1)
}

function K(r) {
  var i = new MutationObserver(() => {
    I(r, r.__value)
  });
  i.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), X(() => {
    i.disconnect()
  })
}

function wr(r, i, f = i) {
  var e = !0;
  m(r, "change", a => {
    var t = a ? "[selected]" : ":checked",
      u;
    if (r.multiple) u = [].map.call(r.querySelectorAll(t), w);
    else {
      var s = r.querySelector(t) ?? r.querySelector("option:not([disabled])");
      u = s && w(s)
    }
    f(u)
  }), P(() => {
    var a = i();
    if (I(r, a, e), e && a === void 0) {
      var t = r.querySelector(":checked");
      t !== null && (a = w(t), f(a))
    }
    r.__value = a, e = !1
  }), K(r)
}

function w(r) {
  return "__value" in r ? r.__value : r.value
}
const N = Symbol("class"),
  T = Symbol("style"),
  V = Symbol("is custom element"),
  B = Symbol("is html");

function Ir(r) {
  if (p) {
    var i = !1,
      f = () => {
        if (!i) {
          if (i = !0, r.hasAttribute("value")) {
            var e = r.value;
            L(r, "value", null), r.value = e
          }
          if (r.hasAttribute("checked")) {
            var a = r.checked;
            L(r, "checked", null), r.checked = a
          }
        }
      };
    r.__on_r = f, dr(f), vr()
  }
}

function Lr(r, i) {
  var f = R(r);
  f.value === (f.value = i ?? void 0) || r.value === i && (i !== 0 || r.nodeName !== "PROGRESS") || (r.value = i ?? "")
}

function Er(r, i) {
  i ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function L(r, i, f, e) {
  var a = R(r);
  p && (a[i] = r.getAttribute(i), i === "src" || i === "srcset" || i === "href" && r.nodeName === "LINK") || a[i] !== (a[i] = f) && (i === "loading" && (r[fr] = f), f == null ? r.removeAttribute(i) : typeof f != "string" && z(r).includes(i) ? r[i] = f : r.setAttribute(i, f))
}

function Nr(r, i, f, e, a = !1) {
  var t = R(r),
    u = t[V],
    s = !t[B];
  let d = p && u;
  d && j(!1);
  var l = i || {},
    A = r.tagName === "OPTION";
  for (var v in i) v in f || (f[v] = null);
  f.class ? f.class = _r(f.class) : (e || f[N]) && (f.class = null), f[T] && (f.style ?? (f.style = null));
  var n = z(r);
  for (const o in f) {
    let c = f[o];
    if (A && o === "value" && c == null) {
      r.value = r.__value = "", l[o] = c;
      continue
    }
    if (o === "class") {
      var y = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      pr(r, y, c, e, i == null ? void 0 : i[N], f[N]), l[o] = c, l[N] = f[N];
      continue
    }
    if (o === "style") {
      yr(r, c, i == null ? void 0 : i[T], f[T]), l[o] = c, l[T] = f[T];
      continue
    }
    var S = l[o];
    if (!(c === S && !(c === void 0 && r.hasAttribute(o)))) {
      l[o] = c;
      var b = o[0] + o[1];
      if (b !== "$$")
        if (b === "on") {
          const _ = {},
            E = "$$" + o;
          let g = o.slice(2);
          var O = br(g);
          if (ur(g) && (g = g.slice(0, -7), _.capture = !0), !O && S) {
            if (c != null) continue;
            r.removeEventListener(g, l[E], _), l[E] = null
          }
          if (c != null)
            if (O) r[`__${g}`] = c, or([g]);
            else {
              let F = function(J) {
                l[o].call(this, J)
              };
              l[E] = sr(g, r, F, _)
            }
          else O && (r[`__${g}`] = void 0)
        } else if (o === "style") L(r, o, c);
      else if (o === "autofocus") lr(r, !!c);
      else if (!u && (o === "__value" || o === "value" && c != null)) r.value = r.__value = c;
      else if (o === "selected" && A) Er(r, c);
      else {
        var h = o;
        s || (h = cr(h));
        var $ = h === "defaultValue" || h === "defaultChecked";
        if (c == null && !u && !$)
          if (t[o] = null, h === "value" || h === "checked") {
            let _ = r;
            const E = i === void 0;
            if (h === "value") {
              let g = _.defaultValue;
              _.removeAttribute(h), _.defaultValue = g, _.value = _.__value = E ? g : null
            } else {
              let g = _.defaultChecked;
              _.removeAttribute(h), _.defaultChecked = g, _.checked = E ? g : !1
            }
          } else r.removeAttribute(o);
        else $ || n.includes(h) && (u || typeof c != "string") ? (r[h] = c, h in t && (t[h] = nr)) : typeof c != "function" && L(r, h, c)
      }
    }
  }
  return d && j(!0), l
}

function Or(r, i, f = [], e = [], a, t = !1) {
  x(f, e, u => {
    var s = void 0,
      d = {},
      l = r.nodeName === "SELECT",
      A = !1;
    if (Y(() => {
        var n = i(...u.map(er)),
          y = Nr(r, s, n, a, t);
        A && l && "value" in n && I(r, n.value);
        for (let b of Object.getOwnPropertySymbols(d)) n[b] || k(d[b]);
        for (let b of Object.getOwnPropertySymbols(n)) {
          var S = n[b];
          b.description === ar && (!s || S !== s[b]) && (d[b] && k(d[b]), d[b] = G(() => gr(r, () => S))), y[b] = S
        }
        s = y
      }), l) {
      var v = r;
      P(() => {
        I(v, s.value, !0), K(v)
      })
    }
    A = !0
  })
}

function R(r) {
  return r.__attributes ?? (r.__attributes = {
    [V]: r.nodeName.includes("-"),
    [B]: r.namespaceURI === rr
  })
}
var U = new Map;

function z(r) {
  var i = U.get(r.nodeName);
  if (i) return i;
  U.set(r.nodeName, i = []);
  for (var f, e = r, a = Element.prototype; a !== e;) {
    f = tr(e);
    for (var t in f) f[t].set && i.push(t);
    e = ir(e)
  }
  return i
}
export {
  N as C, T as S, pr as a, Or as b, _r as c, gr as d, wr as e, yr as f, Lr as g, hr as h, Ir as r, L as s
};