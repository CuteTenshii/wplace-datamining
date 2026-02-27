import {
  br as Y,
  a0 as j,
  a3 as z,
  K as D,
  k as T,
  ay as x,
  Z as M,
  aB as rr,
  af as fr,
  bs as ir,
  aA as ar,
  az as er,
  bt as tr,
  bu as ur,
  bv as sr,
  bw as or,
  i as cr,
  bx as lr,
  by as nr,
  bz as k,
  v as B,
  bA as dr,
  A as vr,
  y as br,
  bB as gr,
  bC as hr,
  bD as _r,
  bE as Ar,
  X as Sr,
  bF as Tr,
  bG as Er
} from "./C3nPqK5x.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "4dec865342b25be0d3f9a4de40183446fa2d5c45"
    };
    var i = new r.Error().stack;
    i && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[i] = "955cf6f8-13af-4e83-aa8c-2f027ed11f29", r._sentryDebugIdIdentifier = "sentry-dbid-955cf6f8-13af-4e83-aa8c-2f027ed11f29")
  } catch {}
})();

function yr(r, i) {
  var f = void 0,
    a;
  Y(() => {
    f !== (f = i()) && (a && (j(a), a = null), f && (a = z(() => {
      D(() => f(r))
    })))
  })
}

function F(r) {
  var i, f, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var e = r.length;
      for (i = 0; i < e; i++) r[i] && (f = F(r[i])) && (a && (a += " "), a += f)
    } else
      for (f in r) r[f] && (a && (a += " "), a += f);
  return a
}

function Nr() {
  for (var r, i, f = 0, a = "", e = arguments.length; f < e; f++)(r = arguments[f]) && (i = F(r)) && (a && (a += " "), a += i);
  return a
}

function pr(r) {
  return typeof r == "object" ? Nr(r) : r ?? ""
}
const H = [...` 	
\r\f \v\uFEFF`];

function Ir(r, i, f) {
  var a = r == null ? "" : "" + r;
  if (i && (a = a ? a + " " + i : i), f) {
    for (var e of Object.keys(f))
      if (f[e]) a = a ? a + " " + e : e;
      else if (a.length)
      for (var t = e.length, u = 0;
        (u = a.indexOf(e, u)) >= 0;) {
        var o = u + t;
        (u === 0 || H.includes(a[u - 1])) && (o === a.length || H.includes(a[o])) ? a = (u === 0 ? "" : a.substring(0, u)) + a.substring(o + 1): u = o
      }
  }
  return a === "" ? null : a
}

function K(r, i = !1) {
  var f = i ? " !important;" : ";",
    a = "";
  for (var e of Object.keys(r)) {
    var t = r[e];
    t != null && t !== "" && (a += " " + e + ": " + t + f)
  }
  return a
}

function G(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Or(r, i) {
  if (i) {
    var f = "",
      a, e;
    if (Array.isArray(i) ? (a = i[0], e = i[1]) : a = i, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var t = !1,
        u = 0,
        o = !1,
        n = [];
      a && n.push(...Object.keys(a).map(G)), e && n.push(...Object.keys(e).map(G));
      var d = 0,
        h = -1;
      const y = r.length;
      for (var v = 0; v < y; v++) {
        var s = r[v];
        if (o ? s === "/" && r[v - 1] === "*" && (o = !1) : t ? t === s && (t = !1) : s === "/" && r[v + 1] === "*" ? o = !0 : s === '"' || s === "'" ? t = s : s === "(" ? u++ : s === ")" && u--, !o && t === !1 && u === 0) {
          if (s === ":" && h === -1) h = v;
          else if (s === ";" || v === y - 1) {
            if (h !== -1) {
              var E = G(r.substring(d, h).trim());
              if (!n.includes(E)) {
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
    return a && (f += K(a)), e && (f += K(e, !0)), f = f.trim(), f === "" ? null : f
  }
  return r == null ? null : String(r)
}

function Lr(r, i, f, a, e, t) {
  var u = r.__className;
  if (T || u !== f || u === void 0) {
    var o = Ir(f, a, t);
    (!T || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : i ? r.className = o : r.setAttribute("class", o)), r.__className = f
  } else if (t && e !== t)
    for (var n in t) {
      var d = !!t[n];
      (e == null || d !== !!e[n]) && r.classList.toggle(n, d)
    }
  return t
}

function R(r, i = {}, f, a) {
  for (var e in f) {
    var t = f[e];
    i[e] !== t && (f[e] == null ? r.style.removeProperty(e) : r.style.setProperty(e, t, a))
  }
}

function kr(r, i, f, a) {
  var e = r.__style;
  if (T || e !== i) {
    var t = Or(i, a);
    (!T || t !== r.getAttribute("style")) && (t == null ? r.removeAttribute("style") : r.style.cssText = t), r.__style = i
  } else a && (Array.isArray(a) ? (R(r, f == null ? void 0 : f[0], a[0]), R(r, f == null ? void 0 : f[1], a[1], "important")) : R(r, f, a));
  return a
}

function w(r, i, f = !1) {
  if (r.multiple) {
    if (i == null) return;
    if (!fr(i)) return ir();
    for (var a of r.options) a.selected = i.includes(L(a));
    return
  }
  for (a of r.options) {
    var e = L(a);
    if (ar(e, i)) {
      a.selected = !0;
      return
    }
  }(!f || i !== void 0) && (r.selectedIndex = -1)
}

function X(r) {
  var i = new MutationObserver(() => {
    w(r, r.__value)
  });
  i.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), rr(() => {
    i.disconnect()
  })
}

function Ur(r, i, f = i) {
  var a = new WeakSet,
    e = !0;
  x(r, "change", t => {
    var u = t ? "[selected]" : ":checked",
      o;
    if (r.multiple) o = [].map.call(r.querySelectorAll(u), L);
    else {
      var n = r.querySelector(u) ?? r.querySelector("option:not([disabled])");
      o = n && L(n)
    }
    f(o), M !== null && a.add(M)
  }), D(() => {
    var t = i();
    if (r === document.activeElement) {
      var u = er ?? M;
      if (a.has(u)) return
    }
    if (w(r, t, e), e && t === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (t = L(o), f(t))
    }
    r.__value = t, e = !1
  }), X(r)
}

function L(r) {
  return "__value" in r ? r.__value : r.value
}
const I = Symbol("class"),
  O = Symbol("style"),
  Z = Symbol("is custom element"),
  W = Symbol("is html"),
  wr = k ? "link" : "LINK",
  Cr = k ? "input" : "INPUT",
  Pr = k ? "option" : "OPTION",
  Mr = k ? "select" : "SELECT",
  Gr = k ? "progress" : "PROGRESS";

function Rr(r) {
  if (T) {
    var i = !1,
      f = () => {
        if (!i) {
          if (i = !0, r.hasAttribute("value")) {
            var a = r.value;
            C(r, "value", null), r.value = a
          }
          if (r.hasAttribute("checked")) {
            var e = r.checked;
            C(r, "checked", null), r.checked = e
          }
        }
      };
    r.__on_r = f, Sr(f), Tr()
  }
}

function $r(r, i) {
  var f = P(r);
  f.value === (f.value = i ?? void 0) || r.value === i && (i !== 0 || r.nodeName !== Gr) || (r.value = i ?? "")
}

function Br(r, i) {
  var f = P(r);
  f.checked !== (f.checked = i ?? void 0) && (r.checked = i)
}

function jr(r, i) {
  i ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function C(r, i, f, a) {
  var e = P(r);
  T && (e[i] = r.getAttribute(i), i === "src" || i === "srcset" || i === "href" && r.nodeName === wr) || e[i] !== (e[i] = f) && (i === "loading" && (r[or] = f), f == null ? r.removeAttribute(i) : typeof f != "string" && J(r).includes(i) ? r[i] = f : r.setAttribute(i, f))
}

function Dr(r, i, f, a, e = !1, t = !1) {
  if (T && e && r.nodeName === Cr) {
    var u = r,
      o = u.type === "checkbox" ? "defaultChecked" : "defaultValue";
    o in f || Rr(u)
  }
  var n = P(r),
    d = n[Z],
    h = !n[W];
  let v = T && d;
  v && B(!1);
  var s = i || {},
    E = r.nodeName === Pr;
  for (var S in i) S in f || (f[S] = null);
  f.class ? f.class = pr(f.class) : (a || f[I]) && (f.class = null), f[O] && (f.style ?? (f.style = null));
  var y = J(r);
  for (const c in f) {
    let l = f[c];
    if (E && c === "value" && l == null) {
      r.value = r.__value = "", s[c] = l;
      continue
    }
    if (c === "class") {
      var p = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Lr(r, p, l, a, i == null ? void 0 : i[I], f[I]), s[c] = l, s[I] = f[I];
      continue
    }
    if (c === "style") {
      kr(r, l, i == null ? void 0 : i[O], f[O]), s[c] = l, s[O] = f[O];
      continue
    }
    var _ = s[c];
    if (!(l === _ && !(l === void 0 && r.hasAttribute(c)))) {
      s[c] = l;
      var q = c[0] + c[1];
      if (q !== "$$")
        if (q === "on") {
          const A = {},
            N = "$$" + c;
          let g = c.slice(2);
          var U = Er(g);
          if (dr(g) && (g = g.slice(0, -7), A.capture = !0), !U && _) {
            if (l != null) continue;
            r.removeEventListener(g, s[N], A), s[N] = null
          }
          if (U) vr(g, r, l), br([g]);
          else if (l != null) {
            let Q = function(m) {
              s[c].call(this, m)
            };
            s[N] = gr(g, r, Q, A)
          }
        } else if (c === "style") C(r, c, l);
      else if (c === "autofocus") hr(r, !!l);
      else if (!d && (c === "__value" || c === "value" && l != null)) r.value = r.__value = l;
      else if (c === "selected" && E) jr(r, l);
      else {
        var b = c;
        h || (b = _r(b));
        var $ = b === "defaultValue" || b === "defaultChecked";
        if (l == null && !d && !$)
          if (n[c] = null, b === "value" || b === "checked") {
            let A = r;
            const N = i === void 0;
            if (b === "value") {
              let g = A.defaultValue;
              A.removeAttribute(b), A.defaultValue = g, A.value = A.__value = N ? g : null
            } else {
              let g = A.defaultChecked;
              A.removeAttribute(b), A.defaultChecked = g, A.checked = N ? g : !1
            }
          } else r.removeAttribute(c);
        else $ || y.includes(b) && (d || typeof l != "string") ? (r[b] = l, b in n && (n[b] = Ar)) : typeof l != "function" && C(r, b, l)
      }
    }
  }
  return v && B(!0), s
}

function Hr(r, i, f = [], a = [], e = [], t, u = !1, o = !1) {
  tr(e, f, a, n => {
    var d = void 0,
      h = {},
      v = r.nodeName === Mr,
      s = !1;
    if (Y(() => {
        var S = i(...n.map(cr)),
          y = Dr(r, d, S, t, u, o);
        s && v && "value" in S && w(r, S.value);
        for (let _ of Object.getOwnPropertySymbols(h)) S[_] || j(h[_]);
        for (let _ of Object.getOwnPropertySymbols(S)) {
          var p = S[_];
          _.description === lr && (!d || p !== d[_]) && (h[_] && j(h[_]), h[_] = z(() => yr(r, () => p))), y[_] = p
        }
        d = y
      }), v) {
      var E = r;
      D(() => {
        w(E, d.value, !0), X(E)
      })
    }
    s = !0
  })
}

function P(r) {
  return r.__attributes ?? (r.__attributes = {
    [Z]: r.nodeName.includes("-"),
    [W]: r.namespaceURI === ur
  })
}
var V = new Map;

function J(r) {
  var i = r.getAttribute("is") || r.nodeName,
    f = V.get(i);
  if (f) return f;
  V.set(i, f = []);
  for (var a, e = r, t = Element.prototype; t !== e;) {
    a = nr(e);
    for (var u in a) a[u].set && f.push(u);
    e = sr(e)
  }
  return f
}
export {
  I as C, O as S, Lr as a, Ur as b, pr as c, kr as d, $r as e, Hr as f, yr as g, Br as h, Nr as i, Rr as r, C as s
};