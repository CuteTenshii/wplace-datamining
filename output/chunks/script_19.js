import {
  bu as D,
  a1 as R,
  a4 as K,
  w as q,
  C as T,
  az as x,
  _ as M,
  aC as rr,
  ah as ir,
  bv as fr,
  aB as ar,
  aA as tr,
  bw as er,
  bx as ur,
  by as sr,
  bz as or,
  i as cr,
  bA as lr,
  bB as nr,
  bC as C,
  J as B,
  bD as vr,
  m as dr,
  k as br,
  bE as hr,
  bF as gr,
  bG as _r,
  bH as Ar,
  Y as Sr,
  bI as Tr,
  bJ as Nr
} from "./BC180BoF.js";

function Er(r, f) {
  var i = void 0,
    a;
  D(() => {
    i !== (i = f()) && (a && (R(a), a = null), i && (a = K(() => {
      q(() => i(r))
    })))
  })
}

function F(r) {
  var f, i, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var t = r.length;
      for (f = 0; f < t; f++) r[f] && (i = F(r[f])) && (a && (a += " "), a += i)
    } else
      for (i in r) r[i] && (a && (a += " "), a += i);
  return a
}

function Or() {
  for (var r, f, i = 0, a = "", t = arguments.length; i < t; i++)(r = arguments[i]) && (f = F(r)) && (a && (a += " "), a += f);
  return a
}

function pr(r) {
  return typeof r == "object" ? Or(r) : r ?? ""
}
const V = [...` 	
\r\f \v\uFEFF`];

function Ir(r, f, i) {
  var a = r == null ? "" : "" + r;
  if (f && (a = a ? a + " " + f : f), i) {
    for (var t of Object.keys(i))
      if (i[t]) a = a ? a + " " + t : t;
      else if (a.length)
      for (var e = t.length, u = 0;
        (u = a.indexOf(t, u)) >= 0;) {
        var o = u + e;
        (u === 0 || V.includes(a[u - 1])) && (o === a.length || V.includes(a[o])) ? a = (u === 0 ? "" : a.substring(0, u)) + a.substring(o + 1): u = o
      }
  }
  return a === "" ? null : a
}

function Y(r, f = !1) {
  var i = f ? " !important;" : ";",
    a = "";
  for (var t of Object.keys(r)) {
    var e = r[t];
    e != null && e !== "" && (a += " " + t + ": " + e + i)
  }
  return a
}

function j(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function kr(r, f) {
  if (f) {
    var i = "",
      a, t;
    if (Array.isArray(f) ? (a = f[0], t = f[1]) : a = f, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var e = !1,
        u = 0,
        o = !1,
        n = [];
      a && n.push(...Object.keys(a).map(j)), t && n.push(...Object.keys(t).map(j));
      var v = 0,
        g = -1;
      const E = r.length;
      for (var d = 0; d < E; d++) {
        var s = r[d];
        if (o ? s === "/" && r[d - 1] === "*" && (o = !1) : e ? e === s && (e = !1) : s === "/" && r[d + 1] === "*" ? o = !0 : s === '"' || s === "'" ? e = s : s === "(" ? u++ : s === ")" && u--, !o && e === !1 && u === 0) {
          if (s === ":" && g === -1) g = d;
          else if (s === ";" || d === E - 1) {
            if (g !== -1) {
              var N = j(r.substring(v, g).trim());
              if (!n.includes(N)) {
                s !== ";" && d++;
                var S = r.substring(v, d).trim();
                i += " " + S + ";"
              }
            }
            v = d + 1, g = -1
          }
        }
      }
    }
    return a && (i += Y(a)), t && (i += Y(t, !0)), i = i.trim(), i === "" ? null : i
  }
  return r == null ? null : String(r)
}

function Lr(r, f, i, a, t, e) {
  var u = r.__className;
  if (T || u !== i || u === void 0) {
    var o = Ir(i, a, e);
    (!T || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : f ? r.className = o : r.setAttribute("class", o)), r.__className = i
  } else if (e && t !== e)
    for (var n in e) {
      var v = !!e[n];
      (t == null || v !== !!t[n]) && r.classList.toggle(n, v)
    }
  return e
}

function G(r, f = {}, i, a) {
  for (var t in i) {
    var e = i[t];
    f[t] !== e && (i[t] == null ? r.style.removeProperty(t) : r.style.setProperty(t, e, a))
  }
}

function Cr(r, f, i, a) {
  var t = r.__style;
  if (T || t !== f) {
    var e = kr(f, a);
    (!T || e !== r.getAttribute("style")) && (e == null ? r.removeAttribute("style") : r.style.cssText = e), r.__style = f
  } else a && (Array.isArray(a) ? (G(r, i == null ? void 0 : i[0], a[0]), G(r, i == null ? void 0 : i[1], a[1], "important")) : G(r, i, a));
  return a
}

function w(r, f, i = !1) {
  if (r.multiple) {
    if (f == null) return;
    if (!ir(f)) return fr();
    for (var a of r.options) a.selected = f.includes(L(a));
    return
  }
  for (a of r.options) {
    var t = L(a);
    if (ar(t, f)) {
      a.selected = !0;
      return
    }
  }(!i || f !== void 0) && (r.selectedIndex = -1)
}

function J(r) {
  var f = new MutationObserver(() => {
    w(r, r.__value)
  });
  f.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), rr(() => {
    f.disconnect()
  })
}

function Hr(r, f, i = f) {
  var a = new WeakSet,
    t = !0;
  x(r, "change", e => {
    var u = e ? "[selected]" : ":checked",
      o;
    if (r.multiple) o = [].map.call(r.querySelectorAll(u), L);
    else {
      var n = r.querySelector(u) ?? r.querySelector("option:not([disabled])");
      o = n && L(n)
    }
    i(o), M !== null && a.add(M)
  }), q(() => {
    var e = f();
    if (r === document.activeElement) {
      var u = tr ?? M;
      if (a.has(u)) return
    }
    if (w(r, e, t), t && e === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (e = L(o), i(e))
    }
    r.__value = e, t = !1
  }), J(r)
}

function L(r) {
  return "__value" in r ? r.__value : r.value
}
const I = Symbol("class"),
  k = Symbol("style"),
  W = Symbol("is custom element"),
  X = Symbol("is html"),
  wr = C ? "link" : "LINK",
  yr = C ? "input" : "INPUT",
  Pr = C ? "option" : "OPTION",
  Mr = C ? "select" : "SELECT",
  jr = C ? "progress" : "PROGRESS";

function Gr(r) {
  if (T) {
    var f = !1,
      i = () => {
        if (!f) {
          if (f = !0, r.hasAttribute("value")) {
            var a = r.value;
            y(r, "value", null), r.value = a
          }
          if (r.hasAttribute("checked")) {
            var t = r.checked;
            y(r, "checked", null), r.checked = t
          }
        }
      };
    r.__on_r = i, Sr(i), Tr()
  }
}

function $r(r, f) {
  var i = P(r);
  i.value === (i.value = f ?? void 0) || r.value === f && (f !== 0 || r.nodeName !== jr) || (r.value = f ?? "")
}

function Br(r, f) {
  var i = P(r);
  i.checked !== (i.checked = f ?? void 0) && (r.checked = f)
}

function Rr(r, f) {
  f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function y(r, f, i, a) {
  var t = P(r);
  T && (t[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === wr) || t[f] !== (t[f] = i) && (f === "loading" && (r[er] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && Z(r).includes(f) ? r[f] = i : r.setAttribute(f, i))
}

function qr(r, f, i, a, t = !1, e = !1) {
  if (T && t && r.nodeName === yr) {
    var u = r,
      o = u.type === "checkbox" ? "defaultChecked" : "defaultValue";
    o in i || Gr(u)
  }
  var n = P(r),
    v = n[W],
    g = !n[X];
  let d = T && v;
  d && B(!1);
  var s = f || {},
    N = r.nodeName === Pr;
  for (var S in f) S in i || (i[S] = null);
  i.class ? i.class = pr(i.class) : (a || i[I]) && (i.class = null), i[k] && (i.style ?? (i.style = null));
  var E = Z(r);
  for (const c in i) {
    let l = i[c];
    if (N && c === "value" && l == null) {
      r.value = r.__value = "", s[c] = l;
      continue
    }
    if (c === "class") {
      var p = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Lr(r, p, l, a, f == null ? void 0 : f[I], i[I]), s[c] = l, s[I] = i[I];
      continue
    }
    if (c === "style") {
      Cr(r, l, f == null ? void 0 : f[k], i[k]), s[c] = l, s[k] = i[k];
      continue
    }
    var _ = s[c];
    if (!(l === _ && !(l === void 0 && r.hasAttribute(c)))) {
      s[c] = l;
      var U = c[0] + c[1];
      if (U !== "$$")
        if (U === "on") {
          const A = {},
            O = "$$" + c;
          let h = c.slice(2);
          var H = Nr(h);
          if (vr(h) && (h = h.slice(0, -7), A.capture = !0), !H && _) {
            if (l != null) continue;
            r.removeEventListener(h, s[O], A), s[O] = null
          }
          if (H) dr(h, r, l), br([h]);
          else if (l != null) {
            let Q = function(m) {
              s[c].call(this, m)
            };
            s[O] = hr(h, r, Q, A)
          }
        } else if (c === "style") y(r, c, l);
      else if (c === "autofocus") gr(r, !!l);
      else if (!v && (c === "__value" || c === "value" && l != null)) r.value = r.__value = l;
      else if (c === "selected" && N) Rr(r, l);
      else {
        var b = c;
        g || (b = _r(b));
        var $ = b === "defaultValue" || b === "defaultChecked";
        if (l == null && !v && !$)
          if (n[c] = null, b === "value" || b === "checked") {
            let A = r;
            const O = f === void 0;
            if (b === "value") {
              let h = A.defaultValue;
              A.removeAttribute(b), A.defaultValue = h, A.value = A.__value = O ? h : null
            } else {
              let h = A.defaultChecked;
              A.removeAttribute(b), A.defaultChecked = h, A.checked = O ? h : !1
            }
          } else r.removeAttribute(c);
        else $ || E.includes(b) && (v || typeof l != "string") ? (r[b] = l, b in n && (n[b] = Ar)) : typeof l != "function" && y(r, b, l)
      }
    }
  }
  return d && B(!0), s
}

function Vr(r, f, i = [], a = [], t = [], e, u = !1, o = !1) {
  ur(t, i, a, n => {
    var v = void 0,
      g = {},
      d = r.nodeName === Mr,
      s = !1;
    if (D(() => {
        var S = f(...n.map(cr)),
          E = qr(r, v, S, e, u, o);
        s && d && "value" in S && w(r, S.value);
        for (let _ of Object.getOwnPropertySymbols(g)) S[_] || R(g[_]);
        for (let _ of Object.getOwnPropertySymbols(S)) {
          var p = S[_];
          _.description === lr && (!v || p !== v[_]) && (g[_] && R(g[_]), g[_] = K(() => Er(r, () => p))), E[_] = p
        }
        v = E
      }), d) {
      var N = r;
      q(() => {
        w(N, v.value, !0), J(N)
      })
    }
    s = !0
  })
}

function P(r) {
  return r.__attributes ?? (r.__attributes = {
    [W]: r.nodeName.includes("-"),
    [X]: r.namespaceURI === sr
  })
}
var z = new Map;

function Z(r) {
  var f = r.getAttribute("is") || r.nodeName,
    i = z.get(f);
  if (i) return i;
  z.set(f, i = []);
  for (var a, t = r, e = Element.prototype; e !== t;) {
    a = nr(t);
    for (var u in a) a[u].set && i.push(u);
    t = or(t)
  }
  return i
}
export {
  I as C, k as S, Lr as a, Hr as b, pr as c, Cr as d, Vr as e, Er as f, $r as g, Br as h, Or as i, J as j, w as k, Gr as r, y as s
};