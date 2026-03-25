import {
  bs as z,
  a2 as R,
  a5 as K,
  M as D,
  k as T,
  az as x,
  a0 as P,
  aC as rr,
  ag as fr,
  bt as ir,
  aB as er,
  aA as ar,
  bu as tr,
  bv as ur,
  bw as sr,
  bx as or,
  i as cr,
  by as lr,
  bz as nr,
  bA as L,
  v as $,
  bB as dr,
  A as vr,
  y as br,
  bC as gr,
  bD as hr,
  bE as _r,
  bF as Ar,
  Z as Sr,
  bG as Tr,
  bH as Er
} from "./cgON64Hl.js";
(function() {
  try {
    var r = typeof window < "u" ? window : typeof global < "u" ? global : typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : {};
    r.SENTRY_RELEASE = {
      id: "e30448959e42fd3ea2fc5cd1f2671639056880b6"
    };
    var i = new r.Error().stack;
    i && (r._sentryDebugIds = r._sentryDebugIds || {}, r._sentryDebugIds[i] = "4cff9f80-3e91-4ec0-9398-1a5e622f67f2", r._sentryDebugIdIdentifier = "sentry-dbid-4cff9f80-3e91-4ec0-9398-1a5e622f67f2")
  } catch {}
})();

function Nr(r, i) {
  var f = void 0,
    e;
  z(() => {
    f !== (f = i()) && (e && (R(e), e = null), f && (e = K(() => {
      D(() => f(r))
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

function pr() {
  for (var r, i, f = 0, e = "", a = arguments.length; f < a; f++)(r = arguments[f]) && (i = F(r)) && (e && (e += " "), e += i);
  return e
}

function yr(r) {
  return typeof r == "object" ? pr(r) : r ?? ""
}
const B = [...` 	
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
        (u === 0 || B.includes(e[u - 1])) && (o === e.length || B.includes(e[o])) ? e = (u === 0 ? "" : e.substring(0, u)) + e.substring(o + 1): u = o
      }
  }
  return e === "" ? null : e
}

function V(r, i = !1) {
  var f = i ? " !important;" : ";",
    e = "";
  for (var a of Object.keys(r)) {
    var t = r[a];
    t != null && t !== "" && (e += " " + a + ": " + t + f)
  }
  return e
}

function j(r) {
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
      e && n.push(...Object.keys(e).map(j)), a && n.push(...Object.keys(a).map(j));
      var d = 0,
        h = -1;
      const N = r.length;
      for (var v = 0; v < N; v++) {
        var s = r[v];
        if (o ? s === "/" && r[v - 1] === "*" && (o = !1) : t ? t === s && (t = !1) : s === "/" && r[v + 1] === "*" ? o = !0 : s === '"' || s === "'" ? t = s : s === "(" ? u++ : s === ")" && u--, !o && t === !1 && u === 0) {
          if (s === ":" && h === -1) h = v;
          else if (s === ";" || v === N - 1) {
            if (h !== -1) {
              var E = j(r.substring(d, h).trim());
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
    return e && (f += V(e)), a && (f += V(a, !0)), f = f.trim(), f === "" ? null : f
  }
  return r == null ? null : String(r)
}

function kr(r, i, f, e, a, t) {
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

function G(r, i = {}, f, e) {
  for (var a in f) {
    var t = f[a];
    i[a] !== t && (f[a] == null ? r.style.removeProperty(a) : r.style.setProperty(a, t, e))
  }
}

function Lr(r, i, f, e) {
  var a = r.__style;
  if (T || a !== i) {
    var t = Or(i, e);
    (!T || t !== r.getAttribute("style")) && (t == null ? r.removeAttribute("style") : r.style.cssText = t), r.__style = i
  } else e && (Array.isArray(e) ? (G(r, f == null ? void 0 : f[0], e[0]), G(r, f == null ? void 0 : f[1], e[1], "important")) : G(r, f, e));
  return e
}

function w(r, i, f = !1) {
  if (r.multiple) {
    if (i == null) return;
    if (!fr(i)) return ir();
    for (var e of r.options) e.selected = i.includes(k(e));
    return
  }
  for (e of r.options) {
    var a = k(e);
    if (er(a, i)) {
      e.selected = !0;
      return
    }
  }(!f || i !== void 0) && (r.selectedIndex = -1)
}

function Z(r) {
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
    if (r.multiple) o = [].map.call(r.querySelectorAll(u), k);
    else {
      var n = r.querySelector(u) ?? r.querySelector("option:not([disabled])");
      o = n && k(n)
    }
    f(o), P !== null && e.add(P)
  }), D(() => {
    var t = i();
    if (r === document.activeElement) {
      var u = ar ?? P;
      if (e.has(u)) return
    }
    if (w(r, t, a), a && t === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (t = k(o), f(t))
    }
    r.__value = t, a = !1
  }), Z(r)
}

function k(r) {
  return "__value" in r ? r.__value : r.value
}
const I = Symbol("class"),
  O = Symbol("style"),
  W = Symbol("is custom element"),
  X = Symbol("is html"),
  wr = L ? "link" : "LINK",
  Cr = L ? "input" : "INPUT",
  Mr = L ? "option" : "OPTION",
  Pr = L ? "select" : "SELECT",
  jr = L ? "progress" : "PROGRESS";

function Gr(r) {
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

function Hr(r, i) {
  var f = M(r);
  f.value === (f.value = i ?? void 0) || r.value === i && (i !== 0 || r.nodeName !== jr) || (r.value = i ?? "")
}

function $r(r, i) {
  var f = M(r);
  f.checked !== (f.checked = i ?? void 0) && (r.checked = i)
}

function Rr(r, i) {
  i ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function C(r, i, f, e) {
  var a = M(r);
  T && (a[i] = r.getAttribute(i), i === "src" || i === "srcset" || i === "href" && r.nodeName === wr) || a[i] !== (a[i] = f) && (i === "loading" && (r[or] = f), f == null ? r.removeAttribute(i) : typeof f != "string" && J(r).includes(i) ? r[i] = f : r.setAttribute(i, f))
}

function Dr(r, i, f, e, a = !1, t = !1) {
  if (T && a && r.nodeName === Cr) {
    var u = r,
      o = u.type === "checkbox" ? "defaultChecked" : "defaultValue";
    o in f || Gr(u)
  }
  var n = M(r),
    d = n[W],
    h = !n[X];
  let v = T && d;
  v && $(!1);
  var s = i || {},
    E = r.nodeName === Mr;
  for (var S in i) S in f || (f[S] = null);
  f.class ? f.class = yr(f.class) : (e || f[I]) && (f.class = null), f[O] && (f.style ?? (f.style = null));
  var N = J(r);
  for (const c in f) {
    let l = f[c];
    if (E && c === "value" && l == null) {
      r.value = r.__value = "", s[c] = l;
      continue
    }
    if (c === "class") {
      var y = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      kr(r, y, l, e, i == null ? void 0 : i[I], f[I]), s[c] = l, s[I] = f[I];
      continue
    }
    if (c === "style") {
      Lr(r, l, i == null ? void 0 : i[O], f[O]), s[c] = l, s[O] = f[O];
      continue
    }
    var _ = s[c];
    if (!(l === _ && !(l === void 0 && r.hasAttribute(c)))) {
      s[c] = l;
      var q = c[0] + c[1];
      if (q !== "$$")
        if (q === "on") {
          const A = {},
            p = "$$" + c;
          let g = c.slice(2);
          var U = Er(g);
          if (dr(g) && (g = g.slice(0, -7), A.capture = !0), !U && _) {
            if (l != null) continue;
            r.removeEventListener(g, s[p], A), s[p] = null
          }
          if (U) vr(g, r, l), br([g]);
          else if (l != null) {
            let Q = function(m) {
              s[c].call(this, m)
            };
            s[p] = gr(g, r, Q, A)
          }
        } else if (c === "style") C(r, c, l);
      else if (c === "autofocus") hr(r, !!l);
      else if (!d && (c === "__value" || c === "value" && l != null)) r.value = r.__value = l;
      else if (c === "selected" && E) Rr(r, l);
      else {
        var b = c;
        h || (b = _r(b));
        var H = b === "defaultValue" || b === "defaultChecked";
        if (l == null && !d && !H)
          if (n[c] = null, b === "value" || b === "checked") {
            let A = r;
            const p = i === void 0;
            if (b === "value") {
              let g = A.defaultValue;
              A.removeAttribute(b), A.defaultValue = g, A.value = A.__value = p ? g : null
            } else {
              let g = A.defaultChecked;
              A.removeAttribute(b), A.defaultChecked = g, A.checked = p ? g : !1
            }
          } else r.removeAttribute(c);
        else H || N.includes(b) && (d || typeof l != "string") ? (r[b] = l, b in n && (n[b] = Ar)) : typeof l != "function" && C(r, b, l)
      }
    }
  }
  return v && $(!0), s
}

function Br(r, i, f = [], e = [], a = [], t, u = !1, o = !1) {
  tr(a, f, e, n => {
    var d = void 0,
      h = {},
      v = r.nodeName === Pr,
      s = !1;
    if (z(() => {
        var S = i(...n.map(cr)),
          N = Dr(r, d, S, t, u, o);
        s && v && "value" in S && w(r, S.value);
        for (let _ of Object.getOwnPropertySymbols(h)) S[_] || R(h[_]);
        for (let _ of Object.getOwnPropertySymbols(S)) {
          var y = S[_];
          _.description === lr && (!d || y !== d[_]) && (h[_] && R(h[_]), h[_] = K(() => Nr(r, () => y))), N[_] = y
        }
        d = N
      }), v) {
      var E = r;
      D(() => {
        w(E, d.value, !0), Z(E)
      })
    }
    s = !0
  })
}

function M(r) {
  return r.__attributes ?? (r.__attributes = {
    [W]: r.nodeName.includes("-"),
    [X]: r.namespaceURI === ur
  })
}
var Y = new Map;

function J(r) {
  var i = r.getAttribute("is") || r.nodeName,
    f = Y.get(i);
  if (f) return f;
  Y.set(i, f = []);
  for (var e, a = r, t = Element.prototype; t !== a;) {
    e = nr(a);
    for (var u in e) e[u].set && f.push(u);
    a = sr(a)
  }
  return f
}
export {
  I as C, O as S, kr as a, Ur as b, yr as c, Br as d, Lr as e, Nr as f, Hr as g, $r as h, pr as i, Z as j, w as k, Gr as r, C as s
};