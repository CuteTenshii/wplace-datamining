import {
  bn as W,
  X as G,
  _ as Z,
  m as H,
  bo as B,
  x as E,
  bp as V,
  au as ar,
  a0 as R,
  aw as tr,
  ae as ur,
  bq as er,
  av as sr,
  br as or,
  bs as cr,
  bt as lr,
  bu as nr,
  bv as vr,
  i as dr,
  bw as br,
  bx as hr,
  by as w,
  D as Y,
  bz as Ar,
  l as gr,
  k as _r,
  bA as Sr,
  bB as Tr,
  bC as Er,
  bD as Nr,
  bE as pr,
  an as Cr,
  bF as Lr,
  bG as Or
} from "./CV6xI6o5.js";

function Ir(r, f) {
  var i = void 0,
    a;
  W(() => {
    i !== (i = f()) && (a && (G(a), a = null), i && (a = Z(() => {
      H(() => i(r))
    })))
  })
}

function J(r) {
  var f, i, a = "";
  if (typeof r == "string" || typeof r == "number") a += r;
  else if (typeof r == "object")
    if (Array.isArray(r)) {
      var t = r.length;
      for (f = 0; f < t; f++) r[f] && (i = J(r[f])) && (a && (a += " "), a += i)
    } else
      for (i in r) r[i] && (a && (a += " "), a += i);
  return a
}

function kr() {
  for (var r, f, i = 0, a = "", t = arguments.length; i < t; i++)(r = arguments[i]) && (f = J(r)) && (a && (a += " "), a += f);
  return a
}

function wr(r) {
  return typeof r == "object" ? kr(r) : r ?? ""
}
const F = [...` 	
\r\f \v\uFEFF`];

function Mr(r, f, i) {
  var a = r == null ? "" : "" + r;
  if (f && (a = a ? a + " " + f : f), i) {
    for (var t of Object.keys(i))
      if (i[t]) a = a ? a + " " + t : t;
      else if (a.length)
      for (var u = t.length, e = 0;
        (e = a.indexOf(t, e)) >= 0;) {
        var o = e + u;
        (e === 0 || F.includes(a[e - 1])) && (o === a.length || F.includes(a[o])) ? a = (e === 0 ? "" : a.substring(0, e)) + a.substring(o + 1): e = o
      }
  }
  return a === "" ? null : a
}

function K(r, f = !1) {
  var i = f ? " !important;" : ";",
    a = "";
  for (var t of Object.keys(r)) {
    var u = r[t];
    u != null && u !== "" && (a += " " + t + ": " + u + i)
  }
  return a
}

function j(r) {
  return r[0] !== "-" || r[1] !== "-" ? r.toLowerCase() : r
}

function Pr(r, f) {
  if (f) {
    var i = "",
      a, t;
    if (Array.isArray(f) ? (a = f[0], t = f[1]) : a = f, r) {
      r = String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var u = !1,
        e = 0,
        o = !1,
        n = [];
      a && n.push(...Object.keys(a).map(j)), t && n.push(...Object.keys(t).map(j));
      var v = 0,
        A = -1;
      const p = r.length;
      for (var d = 0; d < p; d++) {
        var s = r[d];
        if (o ? s === "/" && r[d - 1] === "*" && (o = !1) : u ? u === s && (u = !1) : s === "/" && r[d + 1] === "*" ? o = !0 : s === '"' || s === "'" ? u = s : s === "(" ? e++ : s === ")" && e--, !o && u === !1 && e === 0) {
          if (s === ":" && A === -1) A = d;
          else if (s === ";" || d === p - 1) {
            if (A !== -1) {
              var N = j(r.substring(v, A).trim());
              if (!n.includes(N)) {
                s !== ";" && d++;
                var S = r.substring(v, d).trim();
                i += " " + S + ";"
              }
            }
            v = d + 1, A = -1
          }
        }
      }
    }
    return a && (i += K(a)), t && (i += K(t, !0)), i = i.trim(), i === "" ? null : i
  }
  return r == null ? null : String(r)
}

function Rr(r, f, i, a, t, u) {
  var e = r[B];
  if (E || e !== i || e === void 0) {
    var o = Mr(i, a, u);
    (!E || o !== r.getAttribute("class")) && (o == null ? r.removeAttribute("class") : f ? r.className = o : r.setAttribute("class", o)), r[B] = i
  } else if (u && t !== u)
    for (var n in u) {
      var v = !!u[n];
      (t == null || v !== !!t[n]) && r.classList.toggle(n, v)
    }
  return u
}

function y(r, f = {}, i, a) {
  for (var t in i) {
    var u = i[t];
    f[t] !== u && (i[t] == null ? r.style.removeProperty(t) : r.style.setProperty(t, u, a))
  }
}

function jr(r, f, i, a) {
  var t = r[V];
  if (E || t !== f) {
    var u = Pr(f, a);
    (!E || u !== r.getAttribute("style")) && (u == null ? r.removeAttribute("style") : r.style.cssText = u), r[V] = f
  } else a && (Array.isArray(a) ? (y(r, i == null ? void 0 : i[0], a[0]), y(r, i == null ? void 0 : i[1], a[1], "important")) : y(r, i, a));
  return a
}

function M(r, f, i = !1) {
  if (r.multiple) {
    if (f == null) return;
    if (!ur(f)) return er();
    for (var a of r.options) a.selected = f.includes(I(a));
    return
  }
  for (a of r.options) {
    var t = I(a);
    if (sr(t, f)) {
      a.selected = !0;
      return
    }
  }(!i || f !== void 0) && (r.selectedIndex = -1)
}

function Q(r) {
  var f = new MutationObserver(() => {
    M(r, r.__value)
  });
  f.observe(r, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"]
  }), tr(() => {
    f.disconnect()
  })
}

function Vr(r, f, i = f) {
  var a = new WeakSet,
    t = !0;
  ar(r, "change", u => {
    var e = u ? "[selected]" : ":checked",
      o;
    if (r.multiple) o = [].map.call(r.querySelectorAll(e), I);
    else {
      var n = r.querySelector(e) ?? r.querySelector("option:not([disabled])");
      o = n && I(n)
    }
    i(o), r.__value = o, R !== null && a.add(R)
  }), H(() => {
    var u = f();
    if (r === document.activeElement) {
      var e = R;
      if (a.has(e)) return
    }
    if (M(r, u, t), t && u === void 0) {
      var o = r.querySelector(":checked");
      o !== null && (u = I(o), i(u))
    }
    r.__value = u, t = !1
  }), Q(r)
}

function I(r) {
  return "__value" in r ? r.__value : r.value
}
const L = Symbol("class"),
  O = Symbol("style"),
  m = Symbol("is custom element"),
  x = Symbol("is html"),
  yr = w ? "link" : "LINK",
  z = w ? "input" : "INPUT",
  Gr = w ? "option" : "OPTION",
  Hr = w ? "select" : "SELECT",
  qr = w ? "progress" : "PROGRESS";

function Ur(r) {
  if (E) {
    var f = !1,
      i = () => {
        if (!f) {
          if (f = !0, r.hasAttribute("value")) {
            var a = r.value;
            k(r, "value", null), r.value = a
          }
          if (r.hasAttribute("checked")) {
            var t = r.checked;
            k(r, "checked", null), r.checked = t
          }
        }
      };
    r[pr] = i, Cr(i), Lr()
  }
}

function Yr(r, f) {
  var i = P(r);
  i.value === (i.value = f ?? void 0) || r.value === f && (f !== 0 || r.nodeName !== qr) || (r.value = f ?? "")
}

function Fr(r, f) {
  var i = P(r);
  i.checked !== (i.checked = f ?? void 0) && (r.checked = f)
}

function Dr(r, f) {
  f ? r.hasAttribute("selected") || r.setAttribute("selected", "") : r.removeAttribute("selected")
}

function k(r, f, i, a) {
  var t = P(r);
  E && (t[f] = r.getAttribute(f), f === "src" || f === "srcset" || f === "href" && r.nodeName === yr) || t[f] !== (t[f] = i) && (f === "loading" && (r[or] = i), i == null ? r.removeAttribute(f) : typeof i != "string" && rr(r).includes(f) ? r[f] = i : r.setAttribute(f, i))
}

function $r(r, f, i, a, t = !1, u = !1) {
  if (E && t && r.nodeName === z) {
    var e = r,
      o = e.type === "checkbox" ? "defaultChecked" : "defaultValue";
    o in i || Ur(e)
  }
  var n = P(r),
    v = n[m],
    A = !n[x];
  let d = E && v;
  d && Y(!1);
  var s = f || {},
    N = r.nodeName === Gr;
  for (var S in f) S in i || (i[S] = null);
  i.class ? i.class = wr(i.class) : (a || i[L]) && (i.class = null), i[O] && (i.style ?? (i.style = null));
  var p = rr(r);
  if (r.nodeName === z && "type" in i && ("value" in i || "__value" in i)) {
    var T = i.type;
    (T !== s.type || T === void 0 && r.hasAttribute("type")) && (s.type = T, k(r, "type", T))
  }
  for (const c in i) {
    let l = i[c];
    if (N && c === "value" && l == null) {
      r.value = r.__value = "", s[c] = l;
      continue
    }
    if (c === "class") {
      var _ = r.namespaceURI === "http://www.w3.org/1999/xhtml";
      Rr(r, _, l, a, f == null ? void 0 : f[L], i[L]), s[c] = l, s[L] = i[L];
      continue
    }
    if (c === "style") {
      jr(r, l, f == null ? void 0 : f[O], i[O]), s[c] = l, s[O] = i[O];
      continue
    }
    var q = s[c];
    if (!(l === q && !(l === void 0 && r.hasAttribute(c)))) {
      s[c] = l;
      var U = c[0] + c[1];
      if (U !== "$$")
        if (U === "on") {
          const g = {},
            C = "$$" + c;
          let h = c.slice(2);
          var D = Or(h);
          if (Ar(h) && (h = h.slice(0, -7), g.capture = !0), !D && q) {
            if (l != null) continue;
            r.removeEventListener(h, s[C], g), s[C] = null
          }
          if (D) gr(h, r, l), _r([h]);
          else if (l != null) {
            let ir = function(fr) {
              s[c].call(this, fr)
            };
            s[C] = Sr(h, r, ir, g)
          }
        } else if (c === "style") k(r, c, l);
      else if (c === "autofocus") Tr(r, !!l);
      else if (!v && (c === "__value" || c === "value" && l != null)) r.value = r.__value = l;
      else if (c === "selected" && N) Dr(r, l);
      else {
        var b = c;
        A || (b = Er(b));
        var $ = b === "defaultValue" || b === "defaultChecked";
        if (l == null && !v && !$)
          if (n[c] = null, b === "value" || b === "checked") {
            let g = r;
            const C = f === void 0;
            if (b === "value") {
              let h = g.defaultValue;
              g.removeAttribute(b), g.defaultValue = h, g.value = g.__value = C ? h : null
            } else {
              let h = g.defaultChecked;
              g.removeAttribute(b), g.defaultChecked = h, g.checked = C ? h : !1
            }
          } else r.removeAttribute(c);
        else $ || p.includes(b) && (v || typeof l != "string") ? (r[b] = l, b in n && (n[b] = Nr)) : typeof l != "function" && k(r, b, l)
      }
    }
  }
  return d && Y(!0), s
}

function Kr(r, f, i = [], a = [], t = [], u, e = !1, o = !1) {
  cr(t, i, a, n => {
    var v = void 0,
      A = {},
      d = r.nodeName === Hr,
      s = !1;
    if (W(() => {
        var S = f(...n.map(dr)),
          p = $r(r, v, S, u, e, o);
        s && d && "value" in S && M(r, S.value);
        for (let _ of Object.getOwnPropertySymbols(A)) S[_] || G(A[_]);
        for (let _ of Object.getOwnPropertySymbols(S)) {
          var T = S[_];
          _.description === br && (!v || T !== v[_]) && (A[_] && G(A[_]), A[_] = Z(() => Ir(r, () => T))), p[_] = T
        }
        v = p
      }), d) {
      var N = r;
      H(() => {
        M(N, v.value, !0), Q(N)
      })
    }
    s = !0
  })
}

function P(r) {
  var f;
  return r[f = lr] ?? (r[f] = {
    [m]: r.nodeName.includes("-"),
    [x]: r.namespaceURI === nr
  })
}
var X = new Map;

function rr(r) {
  var f = r.getAttribute("is") || r.nodeName,
    i = X.get(f);
  if (i) return i;
  X.set(f, i = []);
  for (var a, t = r, u = Element.prototype; u !== t;) {
    a = hr(t);
    for (var e in a) a[e].set && e !== "innerHTML" && e !== "textContent" && e !== "innerText" && i.push(e);
    t = vr(t)
  }
  return i
}
export {
  L as C, O as S, Rr as a, jr as b, wr as c, Kr as d, Ir as e, Vr as f, Yr as g, M as h, Q as i, Fr as j, kr as k, Ur as r, k as s
};