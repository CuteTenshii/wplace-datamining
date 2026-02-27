import {
  bq as Y,
  a0 as G,
  a3 as z,
  K as q,
  k as T,
  ay as x,
  Z as M,
  aB as rr,
  af as fr,
  br as ir,
  aA as er,
  az as ar,
  bs as tr,
  bt as ur,
  bu as sr,
  bv as or,
  i as cr,
  bw as lr,
  bx as nr,
  by as k,
  v as B,
  bz as dr,
  A as vr,
  y as br,
  bA as gr,
  bB as hr,
  bC as _r,
  bD as Ar,
  X as Sr,
  bE as Tr,
  bF as Er
} from "./BGZizgo7.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "dd0db09d87e18c857d845e6560045af9b8610366"
    };
    var i = new r.Error().stack;
    i && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[i] = "c33d4a3f-efce-4c20-8242-6dd859db29d8", r._sentryDebugIdIdentifier = "sentry-dbid-c33d4a3f-efce-4c20-8242-6dd859db29d8")
  } catch {}
})();

function yr(r, i) {
  var f = void 0,
    e;
  Y(() => {
    f !== (f = i()) && (e && (G(e), e = null), f && (e = z(() => {
      q(() => f(r))
    })))
  })
}

function F(r) {
  var i, f, e = "";
  if (typeof r == "string" || typeof r == "number") e += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var a = r.length;
      for (i = 0; i < a; i++) r[i] && (f = F(r[i])) && (e && (e += " "), e += f)
    } else
      for (f in r) r[f] && (e && (e += " "), e += f);
  return e
}

function Nr() {
  for (var r, i, f = 0, e = "", a = arguments.length; f < a; f++)(r = arguments[f]) && (i = F(r)) && (e && (e += " "), e += i);
  return e
}

function pr(r) {
  return typeof r == "object" ? Nr(r) : r ?? ""
}
const H = [...` 	
\r\f \v\uFEFF`];

function Ir(r, i, f) {
  var e = r == null ? "" : "" + r;
  if (i && (e = e ? e + " " + i : i), f) {
    for (var a of Object.keys(f))
      if (f[a]) e = e ? e + " " + a : a;
      else if (e.length)
      for (var t = a.length, u = 0;
        (u = e.indexOf(a, u)) >= 0;) {
        var o = u + t;
        (u === 0 || H.includes(e[u - 1])) && (o === e.length || H.includes(e[o])) ? e = (u === 0 ? "" : e.substring(0, u)) + e.substring(o + 1): u = o
      }
  }
  return e === "" ? null : e
}

function K(r, i = !1) {
  var f = i ? " !important;" : ";",
    e = "";
  for (var a of Object.keys(r)) {
    var t = r[a];
    t != null && t !== "" && (e += " " + a + ": " + t + f)
  }
  return e
}

function R(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Or(r, i) {
  if (i) {
    var f = "",
      e, a;
    if (Array.isArray(i) ? (e = i[0], a = i[1]) : e = i, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var t = !1,
        u = 0,
        o = !1,
        n = [];
      e && n.push(...Object.keys(e).map(R)), a && n.push(...Object.keys(a).map(R));
      var d = 0,
        h = -1;
      const y = r.length;
      for (var v = 0; v < y; v++) {
        var s = r[v];
        if (o ? s === "/" && r[v - 1] === "*" && (o = !1) : t ? t === s && (t = !1) : s === "/" && r[v + 1] === "*" ? o = !0 : s === '"' || s === "'" ? t = s : s === "(" ? u++ : s === ")" && u--, !o && t === !1 && u === 0) {
          if (s === ":" && h === -1) h = v;
          else if (s === ";" || v === y - 1) {
            if (h !== -1) {
              var E = R(r.substring(d, h).trim());
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
    return e && (f += K(e)), a && (f += K(a, !0)), f = f.trim(), f === "" ? null : f
  }
  return r == null ? null : String(r)
}

function Lr(r, i, f, e, a, t) {
  var u = r.__className;
  if (T || u !== f || u === void 0) {
    var o = Ir(f, e, t);
    (!T || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : i ? r.className = o : r.setAttribute("class", o)), r.__className = f
  } else if (t && a !== t)
    for (var n in t) {
      var d = !!t[n];
      (a == null || d !== !!a[n]) && r.classList.toggle(n, d)
    }
  return t
}

function j(r, i = {}, f, e) {
  for (var a in f) {
    var t = f[a];
    i[a] !== t && (f[a] == null ? r.style.removeProperty(a) : r.style.setProperty(a, t, e))
  }
}

function kr(r, i, f, e) {
  var a = r.__style;
  if (T || a !== i) {
    var t = Or(i, e);
    (!T || t !== r.getAttribute("style")) && (t == null ? r.removeAttribute("style") : r.style.cssText = t), r.__style = i
  } else e && (Array.isArray(e) ? (j(r, f == null ? void 0 : f[0], e[0]), j(r, f == null ? void 0 : f[1], e[1], "important")) : j(r, f, e));
  return e
}

function w(r, i, f = !1) {
  if (r.multiple) {
    if (i == null) return;
    if (!fr(i)) return ir();
    for (var e of r.options) e.selected = i.includes(L(e));
    return
  }
  for (e of r.options) {
    var a = L(e);
    if (er(a, i)) {
      e.selected = !0;
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
  var e = new WeakSet,
    a = !0;
  x(r, "change", t => {
    var u = t ? "[selected]" : ":checked",
      o;
    if (r.multiple) o = [].map.call(r.querySelectorAll(u), L);
    else {
      var n = r.querySelector(u) ?? r.querySelector("option:not([disabled])");
      o = n && L(n)
    }
    f(o), M !== null && e.add(M)
  }), q(() => {
    var t = i();
    if (r === document.activeElement) {
      var u = ar ?? M;
      if (e.has(u)) return
    }
    if (w(r, t, a), a && t === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (t = L(o), f(t))
    }
    r.__value = t, a = !1
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
  Rr = k ? "progress" : "PROGRESS";

function jr(r) {
  if (T) {
    var i = !1,
      f = () => {
        if (!i) {
          if (i = !0, r.hasAttribute("value")) {
            var e = r.value;
            C(r, "value", null), r.value = e
          }
          if (r.hasAttribute("checked")) {
            var a = r.checked;
            C(r, "checked", null), r.checked = a
          }
        }
      };
    r.__on_r = f, Sr(f), Tr()
  }
}

function $r(r, i) {
  var f = P(r);
  f.value === (f.value = i ?? void 0) || r.value === i && (i !== 0 || r.nodeName !== Rr) || (r.value = i ?? "")
}

function Br(r, i) {
  var f = P(r);
  f.checked !== (f.checked = i ?? void 0) && (r.checked = i)
}

function Gr(r, i) {
  i ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function C(r, i, f, e) {
  var a = P(r);
  T && (a[i] = r.getAttribute(i), i === "src" || i === "srcset" || i === "href" && r.nodeName === wr) || a[i] !== (a[i] = f) && (i === "loading" && (r[or] = f), f == null ? r.removeAttribute(i) : typeof f != "string" && J(r).includes(i) ? r[i] = f : r.setAttribute(i, f))
}

function qr(r, i, f, e, a = !1, t = !1) {
  if (T && a && r.nodeName === Cr) {
    var u = r,
      o = u.type === "checkbox" ? "defaultChecked" : "defaultValue";
    o in f || jr(u)
  }
  var n = P(r),
    d = n[Z],
    h = !n[W];
  let v = T && d;
  v && B(!1);
  var s = i || {},
    E = r.nodeName === Pr;
  for (var S in i) S in f || (f[S] = null);
  f.class ? f.class = pr(f.class) : (e || f[I]) && (f.class = null), f[O] && (f.style ?? (f.style = null));
  var y = J(r);
  for (const c in f) {
    let l = f[c];
    if (E && c === "value" && l == null) {
      r.value = r.__value = "", s[c] = l;
      continue
    }
    if (c === "class") {
      var p = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Lr(r, p, l, e, i == null ? void 0 : i[I], f[I]), s[c] = l, s[I] = f[I];
      continue
    }
    if (c === "style") {
      kr(r, l, i == null ? void 0 : i[O], f[O]), s[c] = l, s[O] = f[O];
      continue
    }
    var _ = s[c];
    if (!(l === _ && !(l === void 0 && r.hasAttribute(c)))) {
      s[c] = l;
      var D = c[0] + c[1];
      if (D !== "$$")
        if (D === "on") {
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
      else if (c === "selected" && E) Gr(r, l);
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

function Hr(r, i, f = [], e = [], a = [], t, u = !1, o = !1) {
  tr(a, f, e, n => {
    var d = void 0,
      h = {},
      v = r.nodeName === Mr,
      s = !1;
    if (Y(() => {
        var S = i(...n.map(cr)),
          y = qr(r, d, S, t, u, o);
        s && v && "value" in S && w(r, S.value);
        for (let _ of Object.getOwnPropertySymbols(h)) S[_] || G(h[_]);
        for (let _ of Object.getOwnPropertySymbols(S)) {
          var p = S[_];
          _.description === lr && (!d || p !== d[_]) && (h[_] && G(h[_]), h[_] = z(() => yr(r, () => p))), y[_] = p
        }
        d = y
      }), v) {
      var E = r;
      q(() => {
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
  for (var e, a = r, t = Element.prototype; t !== a;) {
    e = nr(a);
    for (var u in e) e[u].set && f.push(u);
    a = sr(a)
  }
  return f
}
export {
  I as C, O as S, Lr as a, Ur as b, pr as c, kr as d, $r as e, Hr as f, yr as g, Br as h, Nr as i, jr as r, C as s
};