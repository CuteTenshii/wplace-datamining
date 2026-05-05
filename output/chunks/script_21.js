import {
  bn as B,
  Z as q,
  a1 as D,
  o as R,
  z as T,
  aw as x,
  X as M,
  az as rr,
  ae as ir,
  bo as fr,
  ay as ar,
  ax as tr,
  bp as er,
  bq as ur,
  br as sr,
  bs as or,
  i as cr,
  bt as lr,
  bu as nr,
  bv as w,
  G as H,
  bw as vr,
  bx as dr,
  V as br,
  by as gr
} from "./wFsvFKKp.js";
import {
  c as hr,
  a as _r,
  d as Ar,
  f as Sr,
  n as Tr,
  g as Nr
} from "./D2UtoGHN.js";

function pr(r, f) {
  var i = void 0,
    a;
  B(() => {
    i !== (i = f()) && (a && (q(a), a = null), i && (a = D(() => {
      R(() => i(r))
    })))
  })
}

function X(r) {
  var f, i, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var t = r.length;
      for (f = 0; f < t; f++) r[f] && (i = X(r[f])) && (a && (a += " "), a += i)
    } else
      for (i in r) r[i] && (a && (a += " "), a += i);
  return a
}

function Or() {
  for (var r, f, i = 0, a = "", t = arguments.length; i < t; i++)(r = arguments[i]) && (f = X(r)) && (a && (a += " "), a += f);
  return a
}

function Er(r) {
  return typeof r == "object" ? Or(r) : r ?? ""
}
const z = [...` 	
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
        (u === 0 || z.includes(a[u - 1])) && (o === a.length || z.includes(a[o])) ? a = (u === 0 ? "" : a.substring(0, u)) + a.substring(o + 1): u = o
      }
  }
  return a === "" ? null : a
}

function K(r, f = !1) {
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

function Lr(r, f) {
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
        h = -1;
      const p = r.length;
      for (var d = 0; d < p; d++) {
        var s = r[d];
        if (o ? s === "/" && r[d - 1] === "*" && (o = !1) : e ? e === s && (e = !1) : s === "/" && r[d + 1] === "*" ? o = !0 : s === '"' || s === "'" ? e = s : s === "(" ? u++ : s === ")" && u--, !o && e === !1 && u === 0) {
          if (s === ":" && h === -1) h = d;
          else if (s === ";" || d === p - 1) {
            if (h !== -1) {
              var N = j(r.substring(v, h).trim());
              if (!n.includes(N)) {
                s !== ";" && d++;
                var S = r.substring(v, d).trim();
                i += " " + S + ";"
              }
            }
            v = d + 1, h = -1
          }
        }
      }
    }
    return a && (i += K(a)), t && (i += K(t, !0)), i = i.trim(), i === "" ? null : i
  }
  return r == null ? null : String(r)
}

function kr(r, f, i, a, t, e) {
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

function wr(r, f, i, a) {
  var t = r.__style;
  if (T || t !== f) {
    var e = Lr(f, a);
    (!T || e !== r.getAttribute("style")) && (e == null ? r.removeAttribute("style") : r.style.cssText = e), r.__style = f
  } else a && (Array.isArray(a) ? (G(r, i == null ? void 0 : i[0], a[0]), G(r, i == null ? void 0 : i[1], a[1], "important")) : G(r, i, a));
  return a
}

function y(r, f, i = !1) {
  if (r.multiple) {
    if (f == null) return;
    if (!ir(f)) return fr();
    for (var a of r.options) a.selected = f.includes(k(a));
    return
  }
  for (a of r.options) {
    var t = k(a);
    if (ar(t, f)) {
      a.selected = !0;
      return
    }
  }(!i || f !== void 0) && (r.selectedIndex = -1)
}

function Z(r) {
  var f = new MutationObserver(() => {
    y(r, r.__value)
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

function $r(r, f, i = f) {
  var a = new WeakSet,
    t = !0;
  x(r, "change", e => {
    var u = e ? "[selected]" : ":checked",
      o;
    if (r.multiple) o = [].map.call(r.querySelectorAll(u), k);
    else {
      var n = r.querySelector(u) ?? r.querySelector("option:not([disabled])");
      o = n && k(n)
    }
    i(o), M !== null && a.add(M)
  }), R(() => {
    var e = f();
    if (r === document.activeElement) {
      var u = tr ?? M;
      if (a.has(u)) return
    }
    if (y(r, e, t), t && e === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (e = k(o), i(e))
    }
    r.__value = e, t = !1
  }), Z(r)
}

function k(r) {
  return "__value" in r ? r.__value : r.value
}
const I = Symbol("class"),
  L = Symbol("style"),
  F = Symbol("is custom element"),
  W = Symbol("is html"),
  yr = w ? "link" : "LINK",
  Cr = w ? "input" : "INPUT",
  Pr = w ? "option" : "OPTION",
  Mr = w ? "select" : "SELECT",
  jr = w ? "progress" : "PROGRESS";

function Gr(r) {
  if (T) {
    var f = !1,
      i = () => {
        if (!f) {
          if (f = !0, r.hasAttribute("value")) {
            var a = r.value;
            C(r, "value", null), r.value = a
          }
          if (r.hasAttribute("checked")) {
            var t = r.checked;
            C(r, "checked", null), r.checked = t
          }
        }
      };
    r.__on_r = i, br(i), gr()
  }
}

function Hr(r, f) {
  var i = P(r);
  i.value === (i.value = f ?? void 0) || r.value === f && (f !== 0 || r.nodeName !== jr) || (r.value = f ?? "")
}

function zr(r, f) {
  var i = P(r);
  i.checked !== (i.checked = f ?? void 0) && (r.checked = f)
}

function qr(r, f) {
  f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function C(r, f, i, a) {
  var t = P(r);
  T && (t[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === yr) || t[f] !== (t[f] = i) && (f === "loading" && (r[er] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && J(r).includes(f) ? r[f] = i : r.setAttribute(f, i))
}

function Rr(r, f, i, a, t = !1, e = !1) {
  if (T && t && r.nodeName === Cr) {
    var u = r,
      o = u.type === "checkbox" ? "defaultChecked" : "defaultValue";
    o in i || Gr(u)
  }
  var n = P(r),
    v = n[F],
    h = !n[W];
  let d = T && v;
  d && H(!1);
  var s = f || {},
    N = r.nodeName === Pr;
  for (var S in f) S in i || (i[S] = null);
  i.class ? i.class = Er(i.class) : (a || i[I]) && (i.class = null), i[L] && (i.style ?? (i.style = null));
  var p = J(r);
  for (const c in i) {
    let l = i[c];
    if (N && c === "value" && l == null) {
      r.value = r.__value = "", s[c] = l;
      continue
    }
    if (c === "class") {
      var E = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      kr(r, E, l, a, f == null ? void 0 : f[I], i[I]), s[c] = l, s[I] = i[I];
      continue
    }
    if (c === "style") {
      wr(r, l, f == null ? void 0 : f[L], i[L]), s[c] = l, s[L] = i[L];
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
          let g = c.slice(2);
          var V = Nr(g);
          if (hr(g) && (g = g.slice(0, -7), A.capture = !0), !V && _) {
            if (l != null) continue;
            r.removeEventListener(g, s[O], A), s[O] = null
          }
          if (V) _r(g, r, l), Ar([g]);
          else if (l != null) {
            let Q = function(m) {
              s[c].call(this, m)
            };
            s[O] = Sr(g, r, Q, A)
          }
        } else if (c === "style") C(r, c, l);
      else if (c === "autofocus") vr(r, !!l);
      else if (!v && (c === "__value" || c === "value" && l != null)) r.value = r.__value = l;
      else if (c === "selected" && N) qr(r, l);
      else {
        var b = c;
        h || (b = Tr(b));
        var $ = b === "defaultValue" || b === "defaultChecked";
        if (l == null && !v && !$)
          if (n[c] = null, b === "value" || b === "checked") {
            let A = r;
            const O = f === void 0;
            if (b === "value") {
              let g = A.defaultValue;
              A.removeAttribute(b), A.defaultValue = g, A.value = A.__value = O ? g : null
            } else {
              let g = A.defaultChecked;
              A.removeAttribute(b), A.defaultChecked = g, A.checked = O ? g : !1
            }
          } else r.removeAttribute(c);
        else $ || p.includes(b) && (v || typeof l != "string") ? (r[b] = l, b in n && (n[b] = dr)) : typeof l != "function" && C(r, b, l)
      }
    }
  }
  return d && H(!0), s
}

function Kr(r, f, i = [], a = [], t = [], e, u = !1, o = !1) {
  ur(t, i, a, n => {
    var v = void 0,
      h = {},
      d = r.nodeName === Mr,
      s = !1;
    if (B(() => {
        var S = f(...n.map(cr)),
          p = Rr(r, v, S, e, u, o);
        s && d && "value" in S && y(r, S.value);
        for (let _ of Object.getOwnPropertySymbols(h)) S[_] || q(h[_]);
        for (let _ of Object.getOwnPropertySymbols(S)) {
          var E = S[_];
          _.description === lr && (!v || E !== v[_]) && (h[_] && q(h[_]), h[_] = D(() => pr(r, () => E))), p[_] = E
        }
        v = p
      }), d) {
      var N = r;
      R(() => {
        y(N, v.value, !0), Z(N)
      })
    }
    s = !0
  })
}

function P(r) {
  return r.__attributes ?? (r.__attributes = {
    [F]: r.nodeName.includes("-"),
    [W]: r.namespaceURI === sr
  })
}
var Y = new Map;

function J(r) {
  var f = r.getAttribute("is") || r.nodeName,
    i = Y.get(f);
  if (i) return i;
  Y.set(f, i = []);
  for (var a, t = r, e = Element.prototype; e !== t;) {
    a = nr(t);
    for (var u in a) a[u].set && i.push(u);
    t = or(t)
  }
  return i
}
export {
  I as C, L as S, kr as a, $r as b, Er as c, wr as d, Kr as e, pr as f, Hr as g, zr as h, Or as i, Z as j, y as k, Gr as r, C as s
};